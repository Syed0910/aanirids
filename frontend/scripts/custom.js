$(document).ready(function () {
    function loadPage(page, pushState = true) {
        $('#main-content').html(`<div class="text-center py-5">
            <div class="spinner-border text-primary"></div><p>Loading...</p></div>`);

        $.get(page + ".html", function (data) {
            let content = $('<div>').html(data).find('#main-content').html() || data;
            $('#main-content').html(content);

            if (pushState) {
                history.pushState({ page: page }, '', "layout.html?page=" + page);
            }
        }).fail(function () {
            $('#main-content').html(`<div class="alert alert-danger">Error loading page.</div>`);
        });
    }

    // Get ?page= param
    function getParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Initial load
    let page = getParam("page") || "index";
    loadPage(page, false);

    // Click handler
    $(document).on('click', '.load-page', function (e) {
        e.preventDefault();
        const page = new URL($(this).attr("href"), window.location.href).searchParams.get("page");
        loadPage(page, true);
    });

    // Back/forward
    window.onpopstate = function (e) {
        if (e.state && e.state.page) {
            loadPage(e.state.page, false);
        }
    };

    // ✅ Sidebar submenu toggle handling
    document.querySelectorAll(".menu-parent").forEach(menu => {
        menu.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const submenu = document.getElementById(targetId);

            // Close other submenus
            document.querySelectorAll('.submenu.expanded').forEach(otherSubmenu => {
                if (otherSubmenu.id !== targetId) {
                    otherSubmenu.classList.remove('expanded');
                    const otherParent = document.querySelector(`[data-target="${otherSubmenu.id}"]`);
                    if (otherParent) otherParent.classList.remove('expanded');
                }
            });

            // Toggle current submenu
            submenu.classList.toggle('expanded');
            this.classList.toggle('expanded');
        });
    });

    // ✅ Active state for nav-icons
    document.querySelectorAll('.aside-primary .nav-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            document.querySelectorAll('.aside-primary .nav-icon').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ✅ Active state for menu links
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hasAttribute('data-target')) e.preventDefault();
            document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ✅ Highlight parent menu when submenu item clicked
    document.querySelectorAll('.submenu a').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
            const parentMenu = this.closest('.menu-item').querySelector('.menu-link');
            if (parentMenu) parentMenu.classList.add('active');
        });
    });

    // ✅ Search filter in sidebar
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const menuItems = document.querySelectorAll('.menu-item');

            menuItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchTerm) ? 'block' : (searchTerm ? 'none' : 'block');
            });
        });
    }

    // ✅ Dropdown submenu click handling
    document.querySelectorAll('.dropdown-submenu .dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            console.log('Language changed to:', lang);
            // You can add your language switching logic here
        });
    });

    // Additional: Close offcanvas when a load-page link is clicked on mobile
    $(document).on('click', '.load-page', function () {
        if (window.innerWidth < 992) {
            var offcanvasElement = document.getElementById('kt_aside_offcanvas');
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
        }
    });
});