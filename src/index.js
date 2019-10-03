const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let mas = expr.split('');
    let letters = (mas.length) / 10;
    let letter = [];
    let stri = '';
    for (let i = 0; i < letters; i++) {
        for (let j = 1; j <= 10; j++) {
            stri += mas[0];
            mas.shift();
        }
        letter[i] = stri;
        stri = '';
        j = '';
    }
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] == '**********') {
            letter[i] = "**";

        } else {
            letter[i] = letter[i].replace(/^0+/, '');
        }
    }
    let arr = letter;
    let a;
    let b = '';
    let tempArr = [];
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        a = arr[i];
        a = a.split('');
        while (a.length != 0) {
            for (let j = 0; j < 2; j++) {
                b += a.shift()
            }
            if (b == '**') {
                tempArr[c] = ' '
            } else if (b == '10') {
                tempArr[c] = '.'
            } else {
                tempArr[c] = '-'
            }
            c++;
            b = '';
        }
        arr[i] = tempArr.join('');
        tempArr = [];
    }
    for (let i = 0; i < arr.length; i++) {
        let z;
        z = arr[i];
        for (let key in MORSE_TABLE) {
            if (z == key) {
                z = MORSE_TABLE[key]
            }
        }
        arr[i] = z;
    }

    return arr.join('');
}

module.exports = {
    decode
}