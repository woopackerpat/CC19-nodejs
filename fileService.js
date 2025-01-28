const fs = require("fs/promises");

// const readFileJSON = (fileName) => {
//   return fs.readFile(fileName, "utf-8");
// };

// const writeFileJSON = (fileName, data) => {
//   return fs.writeFile(fileName, data, "utf-8");
// };

// module.exports = { readFileJSON, writeFileJSON };

exports.readFileJSON = (fileName) => {
  return fs.readFile(fileName, "utf-8");
};

exports.writeFileJSON = (fileName, data) => {
  return fs.writeFile(fileName, data, "utf-8");
};
