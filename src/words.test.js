const common = require('./common');
const wordList = ['TRACK', 'CRACK', 'METER', 'OCEAN', 'CRABS', 'SAVOR', 'MEATS', 'AGONE'];
/*

        _00("TRACK", "BGGGG", "CRACK", true),
        _01("TRACK", "BGGGG", "TRACK", false),

        _02("TRACK", "BYYBB", "CRABS", false),
        _03("TRACK", "BYYBB", "SAVOR", true),

        _04("METER", "GGYBB", "MEATS", true),
        _05("OCEAN", "YBBBY", "AGONE", false)
        ;
        */
[{
        guessedLetters: testScenario('TRACK', "BGGGG"),
        wordToTest: 'CRACK',
        isIncluded: true
    },
    {
        guessedLetters: testScenario('TRACK', "BGGGG"),
        wordToTest: 'TRACK',
        isIncluded: false
    },
    {
        guessedLetters: testScenario('TRACK', "BYYBB"),
        wordToTest: 'CRABS',
        isIncluded: false
    },
    {
        guessedLetters: testScenario('TRACK', "BYYBB"),
        wordToTest: 'SAVOR',
        isIncluded: true
    },
    {
        guessedLetters: testScenario('METER', "GGYBB"),
        wordToTest: 'MEATS',
        isIncluded: true
    },
    {
        guessedLetters: testScenario('OCEAN', "YBBBY"),
        wordToTest: 'AGONE',
        isIncluded: false
    }
].forEach((testArgs, i) => {
    test('run tests ' + i, () => {
        var filteredList = common.filterWords(wordList, testArgs.guessedLetters);
        expect(filteredList.includes(testArgs.wordToTest)).toBe(testArgs.isIncluded);
    });
});

function testScenario(word, result) {
    var retValue = new Array();
    for (let i = 0; i < word.length; i++) {
        retValue.push({ letter: word.charAt(i), color: getColor(result.charAt(i)) });
    }
    return retValue;
}

function getColor(letter) {
    if (letter === 'G') {
        return 'green';
    } else if (letter === 'Y') {
        return 'yellow';
    } else {
        return 'black';
    }
}