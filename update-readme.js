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

// Create a temp version with the actual year for pushing
const output = readme.replace(
  '[EXPERIENCE_YEARS]',
  `${experience}`
);

// Push that version
fs.writeFileSync(readmePath, output);

// Then restore the placeholder version for next run (optional)
setTimeout(() => {
  fs.writeFileSync(readmePath, readme);
}, 2000);
