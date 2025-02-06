function setMetaTags(titleSuffix) {
    const baseTitle = 'MxNotes - ';
    const fullTitle = baseTitle + titleSuffix;
    
    const metaTags = `
        <!-- Discord/Twitter Card Meta Tags -->
        <meta property="og:title" content="${fullTitle}">
        <meta property="og:description" content="A minimalist browser-based text editor for quick notes and writing">
        <meta property="og:image" content="https://mxlx.dev/images/favicon.ico">
        <meta property="og:url" content="https://notes.mxlx.dev">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="${fullTitle}">
        <meta name="twitter:description" content="A minimalist browser-based text editor for quick notes and writing">
        <meta name="twitter:image" content="https://mxlx.dev/images/favicon.ico">
    `;
    
    document.head.insertAdjacentHTML('beforeend', metaTags);
} 