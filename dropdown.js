const menuConfig = {
    "file-category": {
        "New": { shortcut: "Ctrl+Alt+N", action: () => { newFile(); }}, // create new file
        "Save": { shortcut: "Ctrl+S", action: () => { downloadMarkdown(); }}, // download file
        "Open": { shortcut: "Ctrl+O", action: () => { openFile(); }}, // open file saved locally
        "Rename": { shortcut: "Ctrl+R", action: () => { renameFile(); }}, // rename current file
        "Clear": { shortcut: "Ctrl+Alt+⌫", action: () => { clearText(); }} // clear file contents
    },
    "other-category": {
        "MXLX": { shortcut: "Ctrl+M", action: () => window.open('https://mxlx.dev', '_blank') }, // link to creator website
        "Privacy": { shortcut: "Ctrl+P", action: () => window.open('/privacy.html', '_blank') }, // link to privacy page
        "Legal": { shortcut: "Ctrl+L", action: () => window.open('/legal.html', '_blank') } // link to terms
    }
};

const dropdowns = document.querySelectorAll(".dropdown");
let currentDropdown = null;

dropdowns.forEach(button => {
    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");

    const category = Array.from(button.classList).find(cls => cls.endsWith('-category'));
    if (category && menuConfig[category]) {
        Object.entries(menuConfig[category]).forEach(([itemName, config]) => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("dropdown-item");
            
            const itemContent = document.createElement("div");
            itemContent.classList.add("dropdown-item-content");
            
            const nameSpan = document.createElement("span");
            nameSpan.textContent = itemName;
            itemContent.appendChild(nameSpan);
            
            if (config.shortcut) {
                const shortcutSpan = document.createElement("span");
                shortcutSpan.classList.add("shortcut");
                shortcutSpan.textContent = config.shortcut;
                itemContent.appendChild(shortcutSpan);
            }
            
            menuItem.appendChild(itemContent);
            
            menuItem.addEventListener("click", (e) => {
                e.stopPropagation();
                config.action();
                hideDropdown();
            });
            
            dropdownMenu.appendChild(menuItem);
        });
    }

    document.body.appendChild(dropdownMenu);
    
    const positionDropdown = () => {
        const buttonRect = button.getBoundingClientRect();
        dropdownMenu.style.position = 'fixed';
        dropdownMenu.style.top = buttonRect.bottom + 'px';
        dropdownMenu.style.left = buttonRect.left + 'px';
    };

    const showDropdown = () => {
        if (currentDropdown && currentDropdown !== dropdownMenu) {
            currentDropdown.style.display = 'none';
        }
        positionDropdown();
        dropdownMenu.style.display = "block";
        currentDropdown = dropdownMenu;
    };

    const hideDropdown = () => {
        dropdownMenu.style.display = "none";
        if (currentDropdown === dropdownMenu) {
            currentDropdown = null;
        }
    };

    button.addEventListener("mouseenter", showDropdown);

    dropdownMenu.addEventListener("mouseenter", () => {
        clearTimeout(button.timeoutId);
    });

    button.addEventListener("mouseleave", (event) => {
        if (!event.relatedTarget || !event.relatedTarget.closest('.dropdown-menu')) {
            button.timeoutId = setTimeout(hideDropdown, 100);
        }
    });


    dropdownMenu.addEventListener("mouseleave", (event) => {
        if (!event.relatedTarget || !event.relatedTarget.closest('.dropdown')) {
            hideDropdown();
        }
    });

    window.addEventListener('resize', () => {
        if (dropdownMenu.style.display === "block") {
            positionDropdown();
        }
    });
});