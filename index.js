// Asynchronous
// console.log("Test")

// console.log("test1");
// console.log("test2");

// setTimeout(() => {
//   console.log("test5");
// }, 0);

// console.log("test3");
// console.log("test4");

// const testPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello world");
//   }, 1000);
// });

// testPromise.then((result) => {
//   console.log(result);
//   console.log("test4");
// });

// console.log("test1");

// const run = async () => {
//   const result = await testPromise;
//   console.log(result);
//   console.log("test4");
// };

// run();

// console.log("test2");
// console.log("test3");

// Exercise

// const delayResult = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(number);
//     }, 1);
//   });
// };

// console.log(1);
// console.log(2);
// const run = async () => {
//   const result = await delayResult(3);
//   console.log(result);
//   console.log(4);
// };
// run();
// console.log(5);

// Callback function

// const example = (a, b) => {
//   return a + b;
// };

// example(4,5)

// const numArray = [1, 2, 3, 4];

// const logA = (value) => console.log(value);
// numArray.map((el) => console.log(el));

// const doAnything = (doSth) => {
//   const num1 = 5;
//   const num2 = 10;
//   const result = doSth(num1, num2);

//   return result;
// };

// const multiply = (numA, numB) => {
//   return numA * numB;
// };

// const result = doAnything(multiply);
// console.log(result);

// window.console.log("test1"); ใช้ไม่ได้
// global.console.log("test2");

// console.log("Codecamp")
// console.log("codecamdfjdkfjkddkfjdkfj")

// const myData = require("./data");
// const { a, b } = require("./data");

// console.log(a);
// console.log(b);

// build-in library

// console.log(__dirname)

// console.log(__filename)

// const path = require("path");

// console.log(path.join(__dirname, "data.js"));

// const fs = require("fs");

// fs.readFile("hello.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.writeFile("hello2.txt", "Codecamp 20 continue", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.readFile("hello.txt", "utf-8", (err, data) => {
//   console.log(data);
//   fs.readFile("hello2.txt", "utf-8", (err, data2) => {
//     console.log(data2);
//   });
// });

// const fs = require("fs/promises");

// const run = async () => {
//   const text1 = await fs.readFile("hello.txt", "utf-8");
//   console.log(text1);
//   const text2 = await fs.readFile("hello2.txt", "utf-8");
//   console.log(text2);
// };

// run();

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end(JSON.stringify({ data: "Hello" }));
// });

// server.listen("8000", () => console.log("Server is running on port 8000"));

// Lab buildin module

// const fs = require("fs");
// const axios = require("axios");
// const uuid = require("uuid");

// const { readFileJSON, writeFileJSON } = require("./fileService");

// const run = async () => {
//   const data = await readFileJSON("hello.txt");
//   await writeFileJSON("hello3.txt", data);
// };

// run();
const express = require("express");
const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ title: "My first web app", message: "Our app API" });
// });

// app.get("/posts", (req, res) => {
//   res.json({ message: "Get Posts" });
// });

// app.get("/redirect", (req, res) => {
//   res.redirect("https://google.com");
// });

// app.post("/posts", (req, res) => {
//   res.json({ message: "Post Posts" });
// });

// app.put("/posts", (req, res) => {
//   res.json({ message: "Put Posts" });
// });

app.get("/sum/:a/:b", (req, res) => {
  const { a, b } = req.params;

  res.json({ a, b });
});

app.get("/products", (req, res) => {
  const { order, page, limit } = req.query;

  res.json({ order, page, limit });
});

// app.use(express.json())

app.post("/products", (req, res) => {
  const { order, page, limit } = req.body;

  res.json({ order, page, limit });
});

app.post("/products/:id", (req, res) => {
  const { id } = req.params;

  res.json({ id });
});

app.get("/users/:id/bookings/:bId", (req, res) => {
  const { id, bId } = req.params;

  res.json({ id, bId });
});

app.patch("/post/:postId", (req, res) => {
  const { postId } = req.params;

  res.json({ postId });
});

app.get("/auth/:userId", (req, res) => {
  const { userId } = req.params;
  res.json({ userId });
});

app.listen(8000, () => console.log("Server is running on port 8000"));
