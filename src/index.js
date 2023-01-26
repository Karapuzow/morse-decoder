const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****':  ' ',
};

function decode(expr) {
    let string = expr.toString(); 
    let morseSymbol = '';
    let result = '';
     for (let i = 0; i < string.length; i = i + 10) {
        for (let j = 0; j < 10; j = j + 2) {
            if ((string[i + j] == '1') && (string[i + j + 1] == '0')) {
                morseSymbol = `${morseSymbol}.`;
            }
            if ((string[i + j] == '1') && (string[i + j + 1] == '1')) {
                morseSymbol = `${morseSymbol}-`;
            }
            if ((string[i + j] == '*') && (string[i + j + 1] == '*')) {
                morseSymbol = `${morseSymbol}*`;
            }
        }
        result = `${result}${MORSE_TABLE[morseSymbol]}`;
        morseSymbol = '';
    }

    return result;
}

module.exports = {
    decode
}
