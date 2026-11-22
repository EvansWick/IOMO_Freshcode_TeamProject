const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const dbPath = path.join(__dirname, 'db.json');

const db = {};

const files = fs.readdirSync(dataDir).filter((file) => file.endsWith('.json'));

for (const file of files) {
    const filePath = path.join(dataDir, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    if (Array.isArray(content)) {
        const key = path.basename(file, '.json');
        db[key] = content;
    } else {
        Object.assign(db, content);
    }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`✅ db.json зібрано (${files.join(', ')})`);















// const fs = require('fs');
// const path = require('path');

// const dataDir = path.join(__dirname, 'data');
// const dbPath = path.join(__dirname, 'db.json');

// const moviesData = JSON.parse(fs.readFileSync(path.join(dataDir, 'movies.json'), 'utf-8'));
// const personsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'persons.json'), 'utf-8'));
// const usersData = JSON.parse(fs.readFileSync(path.join(dataDir, 'users.json'), 'utf-8'));

// const db = {
//     ...moviesData,
//     ...personsData,
//     ...usersData,
// };

// fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
// console.log('✅ db.json собран из папки data/');