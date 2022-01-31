export interface GuessedLetter {
    letter: string;
    color: string;
}

export function filterWords(wordList: string[], guessedLetters: GuessedLetter[]) {
    return wordList
        .filter(word => greenFilter(word, guessedLetters));
}

function greenFilter(word: string, guessedLetters: GuessedLetter[]): boolean {
    for (let i = 0; i < guessedLetters.length; i++) {
        const letter = guessedLetters[i];
        if (letter.color === "green" && letter.letter !== word.charAt(i)) {
            return false;
        }
        if (letter.color === "yellow" && (letter.letter === word.charAt(i) || word.indexOf(letter.letter) === -1)) {
            return false;
        }
        if (letter.color === "grey" && candidateContainsLetter(word, guessedLetters, i)) {
            return false;
        }
    }
    return true;
}

function candidateContainsLetter(word: string, guessedLetters: GuessedLetter[], index: number): boolean {
    const characters = new Array<string>();
    const blackLetter = guessedLetters[index];
    for (let i = 0; i < word.length; i++) {
        if (guessedLetters[i].color !== "green") {
            characters.push(word.charAt(i));
        }
    }
    return characters.includes(blackLetter.letter);
}