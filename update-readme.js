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

// Use regex to update dynamic span while keeping the placeholder
readme = readme.replace(
  /<p>Web Developer with (\d+|\[EXPERIENCE_YEARS\]) years experience!<\/p>/,
  `<p>Web Developer with ${experience} years experience!</p>`
);

// Restore the placeholder so it can be replaced again next run
readme = readme.replace(
  new RegExp(`${experience} years experience!`),
  `[EXPERIENCE_YEARS] years experience!`
);

fs.writeFileSync(readmePath, readme);
