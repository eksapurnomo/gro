const fs = require('fs');
const path = require('path');

const directory = 'd:/gro';

function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!['node_modules', '.next', '.git', '.idea', 'utlis'].includes(file)) {
                processDirectory(fullPath);
            }
        } else {
            if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
                let content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('utlis')) {
                    content = content.replace(/utlis/g, 'utils');
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log('Updated:', fullPath);
                }
            }
        }
    });
}

processDirectory(directory);
console.log('Finished updating files.');
