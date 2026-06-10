import fs from 'fs';
import path from 'path';

const configPath = path.resolve('college-config.json');
if (!fs.existsSync(configPath)) {
  console.error("Error: college-config.json not found! Please create it first.");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

console.log("Starting automated rebranding process...");

// 1. Rebrand src/firebase.js
const firebasePath = path.resolve('src/firebase.js');
if (fs.existsSync(firebasePath)) {
  let firebaseContent = fs.readFileSync(firebasePath, 'utf8');
  const configBlock = `const firebaseConfig = {
  apiKey: "${config.firebaseConfig.apiKey}",
  authDomain: "${config.firebaseConfig.authDomain}",
  projectId: "${config.firebaseConfig.projectId}",
  storageBucket: "${config.firebaseConfig.storageBucket}",
  messagingSenderId: "${config.firebaseConfig.messagingSenderId}",
  appId: "${config.firebaseConfig.appId}"
};`;

  firebaseContent = firebaseContent.replace(/const firebaseConfig = \{[\s\S]*?\};/, configBlock);
  fs.writeFileSync(firebasePath, firebaseContent, 'utf8');
  console.log("✓ Updated src/firebase.js successfully!");
} else {
  console.warn("⚠ src/firebase.js not found.");
}

// 2. Rebrand index.html
const indexPath = path.resolve('index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  indexContent = indexContent.replace(/<title>.*?<\/title>/, `<title>${config.collegeNameEn} | ${config.collegeNameHi}</title>`);
  indexContent = indexContent.replace(/meta name="description" content=".*?"/, `meta name="description" content="Official website of ${config.collegeNameEn} (${config.districtNameEn}). ${config.affiliatedUniversityEn}."`);
  indexContent = indexContent.replace(/meta name="author" content=".*?"/, `meta name="author" content="${config.collegeNameEn}"`);
  indexContent = indexContent.replace(/property="og:title" content=".*?"/, `property="og:title" content="${config.collegeNameEn} | ${config.collegeNameHi}"`);
  indexContent = indexContent.replace(/property="og:description" content=".*?"/, `property="og:description" content="Providing quality higher education and technical excellence at ${config.collegeNameEn}."`);

  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log("✓ Updated index.html successfully!");
} else {
  console.warn("⚠ index.html not found.");
}

// 3. Rebrand src/components/Header.jsx
const headerPath = path.resolve('src/components/Header.jsx');
if (fs.existsSync(headerPath)) {
  let headerContent = fs.readFileSync(headerPath, 'utf8');

  // Replace phone number and email
  headerContent = headerContent.replace(/call<\/span>\s*(\d{10}(?:,\s*\d{10})*)/, `call</span>\n              ${config.phoneNumbers}`);
  headerContent = headerContent.replace(/mail<\/span>\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/, `mail</span>\n              ${config.emailAddress}`);

  // Replace college name
  headerContent = headerContent.replace(/\{language === "hi" \? "शासकीय नवीन महाविद्यालय, सारागांव" : "Govt Naveen College, Saragaon"\}/g, `{language === "hi" ? "${config.collegeNameHi}" : "${config.collegeNameEn}"}`);
  headerContent = headerContent.replace(/Saragaon, Chhattisgarh/g, `${config.districtNameEn}`);

  fs.writeFileSync(headerPath, headerContent, 'utf8');
  console.log("✓ Updated src/components/Header.jsx successfully!");
} else {
  console.warn("⚠ src/components/Header.jsx not found.");
}

// 4. Rebrand src/components/Footer.jsx
const footerPath = path.resolve('src/components/Footer.jsx');
if (fs.existsSync(footerPath)) {
  let footerContent = fs.readFileSync(footerPath, 'utf8');

  footerContent = footerContent.replace(/\{language === "hi" \? "शासकीय नवीन महाविद्यालय, सारागांव" : "Govt Naveen College, Saragaon"\}/g, `{language === "hi" ? "${config.collegeNameHi}" : "${config.collegeNameEn}"}`);
  footerContent = footerContent.replace(/\{language === "hi" \? "Government Naveen College, सारागांव" : "Government Naveen College, Saragaon"\}/g, `{language === "hi" ? "${config.collegeNameHi}" : "${config.collegeNameEn}"}`);
  footerContent = footerContent.replace(/\{language === "hi" \? "शासकीय नवीन महाविद्यालय, सारागांव" : "Government Naveen College, Saragaon"\}/g, `{language === "hi" ? "${config.collegeNameHi}" : "${config.collegeNameEn}"}`);

  // Replace contact details
  footerContent = footerContent.replace(/call<\/span>\s*<span>(\d{10}(?:,\s*\d{10})*)<\/span>/, `call</span>\n              <span>${config.phoneNumbers}</span>`);
  footerContent = footerContent.replace(/mail<\/span>\s*<span className="break-all">([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})<\/span>/, `mail</span>\n              <span className="break-all">${config.emailAddress}</span>`);

  // Replace university affiliation strings
  footerContent = footerContent.replace(/शहीद नंदकुमार पटेल विश्वविद्यालय, रायगढ़ \(छ.ग.\) से संबद्ध।/g, `${config.affiliatedUniversityHi}`);
  footerContent = footerContent.replace(/Affiliated to Shaheed Nandkumar Patel Vishwavidyalaya, Raigarh \(C.G.\)/g, `${config.affiliatedUniversityEn}`);

  // Replace campus details (location_on)
  footerContent = footerContent.replace(/location_on<\/span>\s*<span>[\s\S]*?<\/span>/, `location_on</span>\n              <span>\n                ${config.campusDetailsEn},<br />\n                ${config.districtNameEn}\n              </span>`);

  fs.writeFileSync(footerPath, footerContent, 'utf8');
  console.log("✓ Updated src/components/Footer.jsx successfully!");
} else {
  console.warn("⚠ src/components/Footer.jsx not found.");
}

console.log("Rebranding complete! Now replace /public/logo.png with your new logo, and run 'npm run build' to deploy.");
