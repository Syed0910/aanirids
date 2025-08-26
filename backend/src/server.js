require('dotenv').config();
const express = require('express');
const { initDB } = require('./loaders/sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// -------------------- ROUTES -------------------- //

const usersRoutes = require('./routes/users.routes');
app.use('/api/users', usersRoutes);

const userInfosRoutes = require('./routes/userInfos.routes');
app.use('/api/userInfos', userInfosRoutes);

const radcheckRoutes = require('./routes/radcheck.routes');
app.use('/api/radcheck', radcheckRoutes);

// dummy-amaan

// ✅ Client File Permissions (Sequelize)
const clientFilePermissionsRoutes = require('./routes/clientfilepermissions.routes');
app.use('/api/clientfilepermissions', clientFilePermissionsRoutes);

//  numan-changes
// ✅ Websockets Statistics Entries (Sequelize style)
const websocketsStatisticsEntriesRoutes = require('./routes/websockets_statistics_entries.routes');
app.use('/api/websockets_statistics_entries', websocketsStatisticsEntriesRoutes);

// ✅ WallGardens
const wallGardensRoutes = require('./routes/wallgardens.routes');
app.use('/api/wallgardens', wallGardensRoutes);

// ✅ TR-069 Diagnostics
const tr069Routes = require('./routes/tr069diags.routes');
app.use('/api/tr069diags', tr069Routes);

// ✅ Tickets
const ticketsRoutes = require('./routes/tickets.routes');
app.use('/api/tickets', ticketsRoutes);

// ✅ Ticket Details
const ticketDetailsRoutes = require('./routes/ticketdetails.routes');
app.use('/api/ticketdetails', ticketDetailsRoutes);

// ✅ Static IPs
const staticipsRoutes = require('./routes/staticips.routes');
app.use('/api/staticips', staticipsRoutes);

// ✅ RAD USER GROUP
const radusergroupRoutes = require('./routes/radusergroup.routes');
app.use('/api/radusergroup', radusergroupRoutes);

// ✅ RAD POST AUTH
const radpostauthRoutes = require('./routes/radpostauth.routes');
app.use('/api/radpostauth', radpostauthRoutes);

// ✅ RAD FROUP REPLY
const radgroupreplyRoutes = require('./routes/radgroupreply.routes');
app.use('/api/radgroupreply', radgroupreplyRoutes);
=======

//done by muskan
// ✅ Userpgs (Sequelize)
const userpgsRoutes = require('./routes/userpgs.routes');
app.use('/api/userpgs', userpgsRoutes);

// ✅ vouchers (Sequelize)
const voucherRoutes = require("./routes/vouchers.routes"); 
app.use("/api/vouchers", voucherRoutes);

// ✅ walletledgers (Sequelize)
const walletledgersRoutes = require("./routes/walletledgers.routes");
app.use("/api/walletledgers", walletledgersRoutes);

// ✅ documents (Sequelize)
const documentsRoutes = require("./routes/documents.routes");
app.use("/api/documents", documentsRoutes);

// ✅ notifytypes (Sequelize)
const notifytypesRoutes = require("./routes/notifytypes.routes");
app.use("/api/notifytypes", notifytypesRoutes);

// ✅ operators (Sequelize)
const operatorsRoutes = require("./routes/operators.routes");
app.use("/api/operators", operatorsRoutes);


// ✅ oltpons (Sequelize)
const oltponsRoutes = require("./routes/oltpons.routes");
app.use("/api/oltpons", oltponsRoutes);
=======
//done by numan

// ✅ Email Statuses (Sequelize)
const emailStatusesRoutes = require('./routes/emailstatuses.routes');
app.use('/api/emailstatuses', emailStatusesRoutes);

// ✅ Email Templates (Sequelize)
const emailTemplatesRoutes = require('./routes/emailtemplates.routes');
app.use('/api/emailtemplates', emailTemplatesRoutes);

// ✅ File Permissions (Sequelize)
const filePermissionsRoutes = require("./routes/filepermissions.routes");
app.use("/api/filepermissions", filePermissionsRoutes);

// ✅ Inventories (Sequelize)
const inventoriesRoutes = require("./routes/inventories.routes");
app.use("/api/inventories", inventoriesRoutes);

// ✅ Invoice Statuses (Sequelize)
const invoiceStatusesRoutes = require("./routes/invoicestatuses.routes");
app.use("/api/invoicestatuses", invoiceStatusesRoutes);

// ✅ Invoice Types (Sequelize)
const invoiceTypesRoutes = require("./routes/invoicetypes.routes");
app.use("/api/invoicetypes", invoiceTypesRoutes);

// ✅ Maps (Sequelize)
const mapsRoutes = require("./routes/maps.routes");
app.use("/api/maps", mapsRoutes);

// ✅ SmsStatuses (Sequelize)
const smsStatusesRoutes = require("./routes/smsstatuses.routes");
app.use("/api/smsstatuses", smsStatusesRoutes);

// ✅ WhatsAppStatuses (Sequelize)
const whatsappStatusesRoutes = require("./routes/whatsappstatuses.routes");
app.use("/api/whatsappstatuses", whatsappStatusesRoutes);

// ✅ ReceiptTypes (Sequelize)
const receiptTypesRoutes = require("./routes/receipttypes.routes");
app.use("/api/receipttypes", receiptTypesRoutes);

// ✅ PlanInfos (Sequelize)
const planInfosRoutes = require("./routes/planinfos.routes");
app.use("/api/planinfos", planInfosRoutes);

//done by amaan


const radacctRoutes = require('./routes/radacct.routes');
app.use('/api/radacct', radacctRoutes);

const radacctarchivesRoutes = require('./routes/radacctarchives.routes');
app.use('/api/radacctarchives', radacctarchivesRoutes);

const zoneledgersRoutes = require('./routes/zoneledgers.routes');
app.use('/api/zoneledgers', zoneledgersRoutes);

const invoiceitemsRoutes = require('./routes/invoiceitems.routes');
app.use('/api/invoiceitems', invoiceitemsRoutes);

const invoicesRoutes = require('./routes/invoices.routes');
app.use('/api/invoices', invoicesRoutes);

const kycsRoutes = require('./routes/kycs.routes');
app.use('/api/kycs', kycsRoutes);

const ledgertypesRoutes = require('./routes/ledgertypes.routes');
app.use('/api/ledgertypes', ledgertypesRoutes);

const migrationsRoutes = require('./routes/migrations.routes');
app.use('/api/migrations', migrationsRoutes);

const nasarchivesRoutes = require('./routes/nasarchives.routes');
app.use('/api/nasarchives', nasarchivesRoutes);

const operatorlogsRoutes = require('./routes/operatorlogs.routes');
app.use('/api/operatorlogs', operatorlogsRoutes);


// ✅ olts (Sequelize)
const oltsRoutes = require("./routes/olts.routes");
app.use("/api/olts", oltsRoutes);

// ✅ onumacs (Sequelize)
const onumacsRoutes = require("./routes/onumacs.routes");
app.use("/api/onumacs", onumacsRoutes);

// ✅ operatorpgs (Sequelize)
const operatorpgsRoutes = require("./routes/operatorpgs.routes");
app.use("/api/operatorpgs", operatorpgsRoutes);

// ✅ otps (Sequelize)
const otpsRoutes = require("./routes/otps.routes");
app.use("/api/otps", otpsRoutes);

// ✅ otts (Sequelize)
const ottsRoutes = require("./routes/otts.routes");
app.use("/api/otts", ottsRoutes);




const smsstatusesRoutes = require('./routes/smsstatuses.routes');
app.use('/api/smsstatuses', smsstatusesRoutes);

const permissiontemplatesRoutes = require('./routes/permissiontemplates.routes');
app.use('/api/permissiontemplates', permissiontemplatesRoutes);


//numan-changes
// ✅ SUBSCRIBER 
const subscriberRoutes = require('./routes/subscriber.routes');
app.use('/api/subscribers', subscriberRoutes);

// ✅ RAD GROUP CHECK
const radgroupcheckRoutes = require('./routes/radgroupcheck.routes');
app.use('/api/radgroupcheck', radgroupcheckRoutes);

// NAS
const nasRoutes = require('./routes/nas.routes');
app.use('/api/nas', nasRoutes);


const plangroupsRoutes = require('./routes/plangroups.routes');
app.use('/api/plangroups', plangroupsRoutes);

const nasconfigsRoutes = require('./routes/nasconfigs.routes');
app.use('/api/nasconfigs', nasconfigsRoutes);


const naslistsRoutes = require('./routes/naslists.routes');
app.use('/api/naslists', naslistsRoutes);

const netdiagsRoutes = require('./routes/netdiags.routes');
app.use('/api/netdiags', netdiagsRoutes);

//dummy-amaan
const parentchildsRoutes = require('./routes/parentchilds.routes');
app.use('/api/parentchilds', parentchildsRoutes);

const passwordResetsRoutes = require('./routes/password_resets.routes');
app.use('/api/password_resets', passwordResetsRoutes);

const phpnasRoutes = require('./routes/phpnas.routes');
app.use('/api/phpnas', phpnasRoutes);

const phpnastasksRoutes = require('./routes/phpnastasks.routes');
app.use('/api/phpnastasks', phpnastasksRoutes);

const backprocessesRoutes = require('./routes/backprocesses.routes');
app.use('/api/backprocesses', backprocessesRoutes);

const billbooksRoutes = require('./routes/billbooks.routes');
app.use('/api/billbooks', billbooksRoutes);

const configsRoutes = require('./routes/configs.routes');
app.use('/api/configs', configsRoutes);

const dashcardsRoutes = require('./routes/dashcards.routes');
app.use('/api/dashcards', dashcardsRoutes);

// Root

// Root route

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// -------------------- START SERVER -------------------- //
const startServer = async () => {
  const dbOk = await initDB({ retries: 5, delay: 2000 });
  if (!dbOk) {
    console.error('Database initialization failed — exiting.');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
