enum Color {
    GREEN, YELLOW, GREY
}

interface GuessedLetter {
    letter: string;// this is ugly
    color: Color
}

function filterWords(wordList: string[], letters: GuessedLetter[]) {
    console.log(wordList + " " + letters);
    return false;
}

export default {
    Color,
    
    filterWords
}