var file_name = "mxfile.txt";

function getFileName() {
    return file_name;
}

function setFileName(name) {
    fileNameDisplay.textContent = name;
    saveFileName();
}

function saveFileName() {
    file_name = fileNameDisplay.textContent;
    localStorage.setItem('filename', file_name);
    document.getElementById("textarea").focus();
}

function showFileName() {
    fileNameDisplay.innerHTML = getFileName();
}

function saveContent() {
    localStorage.setItem('textContent', textarea.value);
    localStorage.setItem('filename', file_name);
}

function loadContent() {
    const textContent = localStorage.getItem('textContent');
    const filename = localStorage.getItem('filename');
    if (textContent) textarea.value = textContent;
    if (filename) {
        file_name = filename;
        showFileName();
        refreshStatistics();
    }
}

textarea.addEventListener('input', saveContent);
window.addEventListener('load', loadContent);