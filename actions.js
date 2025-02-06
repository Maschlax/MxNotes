window.newFile = function() {
    clearText();
    setFileName("mxfile.txt");
}

window.clearText = function() {
    const textarea = document.getElementById("textarea");
    textarea.value = '';
    saveContent();
}

window.renameFile = function() {
    const filenamedisplay = document.getElementById("filenamedisplay");
    filenamedisplay.focus();
    window.getSelection().selectAllChildren(filenamedisplay);
}

window.openFile = function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target.result;
                textarea.value = content;
                setFileName(file.name);
                saveContent();
                refreshStatistics();
            };
            reader.readAsText(file);
        }
    });
    fileInput.click();
}

window.focusAndSelectFilename = function() {
    const filenamedisplay = document.getElementById("filenamedisplay");
    if (filenamedisplay) {
        filenamedisplay.focus();
        window.getSelection().selectAllChildren(filenamedisplay);
    } else {
        console.error('filenamedisplay element not found');
    }
}