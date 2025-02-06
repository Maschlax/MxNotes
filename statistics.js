function getWordCount() {
    let textarea = document.getElementById("textarea");
    let numWords = 0;
    let text = textarea.value.trim();

    if (text === "") return 0;

    let words = text.split(/\s+/);
    numWords = words.length;

    return numWords;
}

function getCharacterCount() {
    let textarea = document.getElementById("textarea");
    return textarea.value.length;
}

function refreshStatistics() {
    document.getElementById("count-word").innerHTML = "Words: " + getWordCount();
    document.getElementById("count-char").innerHTML = "Characters: " + getCharacterCount();
}

document.addEventListener("input", (event) => {
    refreshStatistics();
});