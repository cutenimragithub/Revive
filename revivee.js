// Tab javascript code.

document.addEventListener("DOMContentLoaded", function() {
    // Set the initial active tab
    var activeTab = 0;

    // Interval for tab switching (in milliseconds)
    var interval = 3000; // Change tabs every 3 seconds

    // Function to change the active tab
    function changeTab() {
        var tabs = document.querySelectorAll(".revive-tab-pills a");
        var tabCount = tabs.length;
        activeTab = (activeTab + 1) % tabCount; // Cycle through tabs
        tabs[activeTab].click(); // Simulate a click on the tab
    }

    // Start the tab switching interval
    var tabInterval = setInterval(changeTab, interval);

    // Pause tab switching when mouse enters the tab area
    var tabPills = document.querySelector(".revive-tab-pills");
    tabPills.addEventListener("mouseenter", function() {
        clearInterval(tabInterval);
    });

    // Resume tab switching when mouse leaves the tab area
    tabPills.addEventListener("mouseleave", function() {
        tabInterval = setInterval(changeTab, interval);
    });
});