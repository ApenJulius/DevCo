console.log("Hello World!");

chrome.devtools.panels.elements.createSidebarPane(
    "My Sidebar",
    function (sidebar) {
        // sidebar initialization code here
        sidebar.setObject({ some_data: "Some data to show" });
    }
);

chrome.devtools.panels.create("My Panel", null, "/devtools/panel/panel.html");
