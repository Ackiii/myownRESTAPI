import f from './database.js';

const { searchForData } = f;

const x = "prename";

searchForData(x).then((result) => { console.log("Search Result:", result)}).catch((err) => { console.log("Error:", err) });