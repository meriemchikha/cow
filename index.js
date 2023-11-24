// Inporter l'objet à partir du fichier information.js
const userInfo = require('./information');


//Inporter le module cowsay
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hello I'm  ${userInfo.name}, de Campus  ${userInfo.campus}`,
    e: "oO",
    T: "U "
}));
