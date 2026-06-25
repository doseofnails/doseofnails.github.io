const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const translationsFile = path.join(__dirname, 'js/translations.js');

let translationsCode = fs.readFileSync(translationsFile, 'utf8');
let objCode = translationsCode.replace('const translations =', '').trim();
if (objCode.endsWith(';')) objCode = objCode.slice(0, -1);

const translations = eval('(' + objCode + ')');
const en = translations.en;

let indexContent = fs.readFileSync(indexFile, 'utf8');

const regex = /(<([a-zA-Z0-9]+)(?:[^>]*?)data-i18n="([^"]+)"(?:[^>]*?)>)([\s\S]*?)(<\/\2>)/g;

indexContent = indexContent.replace(regex, (match, p1, p2, key, p4, p5) => {
    if (en[key]) {
        let text = en[key];
        text = text.replace(/\n/g, '<br>');
        return p1 + text + p5;
    }
    return match;
});

fs.writeFileSync(indexFile, indexContent, 'utf8');
console.log('Successfully updated index.html with fallback texts.');
