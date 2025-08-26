// src/controllers/users.controller.js
const User = require('../models/user');
// optionally access the sequelize instance if available for diagnostics
let sequelizeInstance;
try {
  // only require if loader exists; failure will be handled gracefully
  sequelizeInstance = require('../loaders/sequelize').sequelize;
} catch (e) {
  // ignore
}


exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username'],
      raw: true
    });
    console.log('Users fetched:', users);
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);

    // Detect common DB connectivity issues and give actionable guidance
    const message = (error && error.message) ? error.message.toLowerCase() : '';
    const parentCode = (error && (error.parent || error.original) && (error.parent.code || error.original.code)) || null;

    const isTimeout = message.includes('etimedout') || parentCode === 'ETIMEDOUT';
    const isRefused = message.includes('refused') || parentCode === 'ECONNREFUSED';
    const isAuth = message.includes('password') || message.includes('authentication') || parentCode === '28P01';

    if (isTimeout || isRefused) {
      // 503 Service Unavailable — DB unreachable
      return res.status(503).json({
        error: 'Database unreachable',
        details: 'Could not connect to the database (ETIMEDOUT/ECONNREFUSED).',
        action:
          'Check DB_HOST, DB_PORT, that the database is running and reachable from this host. If remote, verify firewall / security group, and set DB_SSL=true if required.'
      });
    }

    if (isAuth) {
      return res.status(401).json({
        error: 'Database authentication failed',
        details: 'Check DB_USER and DB_PASSWORD in your .env and that the DB user has access to the DB.'
      });
    }

    // Generic DB error fallback
    res.status(500).json({
      error: 'Database error occurred',
      details: error.message
    });
  }
};

