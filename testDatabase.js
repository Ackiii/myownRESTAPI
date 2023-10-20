import f from './database.js';

const { searchForData } = f;

const x = "prename";

const y = searchForData(x).then((result) => { console.log("Search Result:", result)}).catch((err) => { console.log("Error:", err) });
console.log(y)


console.log(unixTime());