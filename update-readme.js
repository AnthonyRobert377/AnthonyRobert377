const fs = require('fs');

const startDate = new Date('2016-07-01');
const now = new Date();

let experience = now.getFullYear() - startDate.getFullYear();
if (
  now.getMonth() < startDate.getMonth() ||
  (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())
) {
  experience--;
}

const readmePath = './README.md';
let readme = fs.readFileSync(readmePath, 'utf-8');

// Replace the placeholder
readme = readme.replace('[EXPERIENCE_YEARS]', experience.toString());

fs.writeFileSync(readmePath, readme);
