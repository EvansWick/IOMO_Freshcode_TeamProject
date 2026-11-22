const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const dbPath = path.join(__dirname, 'db.json');

const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const keys = Object.keys(db);

for (const key of keys) {
    const filePath = path.join(dataDir, `${key}.json`);
    fs.writeFileSync(filePath, JSON.stringify({ [key]: db[key] }, null, 2));
}

console.log(`✅ Оновлено файли в data/: ${keys.map((k) => `${k}.json`).join(', ')}`);