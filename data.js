const a = [1, 2, 3, 4];

const b = { name: "Patcharapol", nickName: "Woody" };

// วิธีที่ 1.1
// module.exports = a;
// วิธี 1.2
module.exports = { a, b };

// วิธี 2
// exports.a = [1, 2, 3, 4];

// exports.b = { name: "Patcharapol", nickName: "Woody" };
