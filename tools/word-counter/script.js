function countText() {

    let text = document.getElementById("text").value.trim();
    let result = document.getElementById("result");

    if (text === "") {
        result.innerText = "Please enter some text ❗";
        return;
    }

    // Word count
    let words = text.split(/\s+/).filter(word => word.length > 0).length;

    // Character count (with spaces)
    let characters = text.length;

    // Character count (without spaces)
    let charactersNoSpace = text.replace(/\s/g, "").length;

    // Sentence count
    let sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

    result.innerText =
        "Words: " + words +
        " | Characters: " + characters +
        " | No Space: " + charactersNoSpace +
        " | Sentences: " + sentences;
}
