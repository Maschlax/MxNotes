function downloadMarkdown() {
    let content = document.getElementById('textarea').textContent || document.getElementById('textarea').value;
    let blob = new Blob([content], { type: 'text/markdown' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = getFileName();  
    link.click();
}