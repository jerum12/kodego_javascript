const name = 'Hello';
const detail = 'Kodego';

const result = 'Welcome and ' + name.toUpperCase() + ' ' + detail;

const result2 = `Welcome's and ${name} ${detail.toUpperCase()}`;

console.log(result2);

let id = 1;

var api = `https://backend/api/id=${id}`;
