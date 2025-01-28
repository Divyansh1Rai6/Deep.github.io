function toggleSidebar() {
    document.querySelector(".collapsible-sidebar").classList.toggle("open");
    document.querySelector(".sidebar-heading").classList.toggle("hidden");
    document.querySelector(".sidebartext").classList.toggle("hidden");
    document.querySelector(".sidebartask").classList.toggle("hidden");
    document.querySelector(".collapsebutton").classList.toggle("rotate");
}