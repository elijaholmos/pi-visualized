import fs from 'node:fs/promises';

const input = (await fs.readFile('pi.txt', 'utf8')).split('');

const generateRandomColor = function(str=[]) {
    const digits = Math.floor(Math.random() * 8) + 1;

    let dec = 0;
    let counter = 0;
    // console.log(`digits: ${digits}`);
    while(+dec < 16777215 && str.length > 0) {
        if(counter > digits || +dec + str[0] > 16777215) break;
        dec += str.shift();
        //console.log(+dec);
        counter++;
    }

    const decimalToHex = function(d=0) {
        return Number(d).toString(16).padStart(6, '0');
    };

    return `#${decimalToHex(dec)}`;
};

const colors = [];
while(input.length > 0) {
    if(input.length % 1000 === 0) console.log(input.length);
    colors.push(generateRandomColor(input));
}

console.log(colors.length);

fs.writeFile('colors.json', JSON.stringify(colors), 'utf8');
