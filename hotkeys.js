document.addEventListener("keydown", (event) => {
    // For debugging
    console.log('Hotkey pressed:', event.key, 'Ctrl:', event.ctrlKey, 'Meta:', event.metaKey);

    // ctrl + alt + n
    if ((event.ctrlKey || event.metaKey) && event.altKey && event.key.toLowerCase() === 'n') {
        event.preventDefault();
        if (typeof newFile === 'function') {
            newFile();
        } else {
            console.error('newFile function not found');
        }
    }

    // ctrl + s
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        if (typeof downloadMarkdown === 'function') {
            downloadMarkdown();
        } else {
            console.error('downloadMarkdown function not found');
        }
    }

    // ctrl + o
    if ((event.ctrlKey || event.metaKey) && event.key === 'o') {
        event.preventDefault();
        if (typeof openFile === 'function') {
            openFile();
        } else {
            console.error('openFile function not found');
        }
    }

    // ctrl + r
    if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
        event.preventDefault();
        if (typeof window.renameFile === 'function') {
            window.renameFile();
        } else {
            console.error('renameFile function not found');
        }
    }

    // ctrl + alt + backspace
    if ((event.ctrlKey || event.metaKey) && event.altKey && event.key === 'Backspace') {
        event.preventDefault();
        if (typeof clearText === 'function') {
            clearText();
        } else {
            console.error('clearText function not found');
        }
    }

    // ctrl + m
    if ((event.ctrlKey || event.metaKey) && event.key === 'm') {
        event.preventDefault();
        window.open('https://mxlx.dev', '_blank');
    }

    // ctrl + g
    if ((event.ctrlKey || event.metaKey) && event.key === 'g') {
        event.preventDefault();
        window.open('https://github.com/maschlax/mxnotes', '_blank');
    }

    // ctrl + p
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        window.open('/privacy.html', '_blank');
    }

    // ctrl + l
    if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
        event.preventDefault();
        window.open('/legal.html', '_blank');
    }

    // Save file name on change

    if (event.key == "Enter" && filenamedisplay == document.activeElement) {
        event.preventDefault();
        saveFileName();
    }

})

document.getElementById("filenamedisplay").addEventListener("blur", () => {
    saveFileName();
});