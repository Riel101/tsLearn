function countWords(str) {
    const words = str.split(" ")
    const wordCount = {}

    words.forEach(ele => {
        if (wordCount[ele]) {
            wordCount[ele]++
        } else {
            wordCount[ele] = 1
        }
    });

    console.log(wordCount);
    
}

countWords("the cat the dog the")