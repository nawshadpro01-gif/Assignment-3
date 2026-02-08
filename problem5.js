function analyzeText(str) {

    if (typeof str !== "string") {
        return "Invalid";
    }


    let trimmedStr = str.trim();
    if (trimmedStr.length === 0) {
        return "Invalid";
    }


    let words = trimmedStr.split(" ");

    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    let tokenCount = trimmedStr.split(" ").join("").length;
    return {
        longwords: longestWord,
        token: tokenCount
    };
}
