// function loadFile(filename, callback) {
//   try {
//     console.log(`Завантаження файлу ${filename}... `);
//     setTimeout(() => callback(null, `Вміст файлу ${filename}`), 2000);
//   } catch (e) {
//     callback(e);
//   }
// }

// //========

// function convertFile(content, callback) {
//   setTimeout(function () {
//     //Конвертація файлу...
//     callback(null, `Конвертований вміст: ${content.toUpperCase()}`);
//   }, 1000);
// }

// function saveFile(convertedContent, callback) {
//   setTimeout(function () {
//     //Збереження файлу...
//     callback();
//   }, 1500);
// }

// function sendFileToClient(callback) {
//   setTimeout(function () {
//     //Відправка даних в інтерфейс
//     callback();
//   }, 500);
// }

// loadFile("example.txt", (error, content) => {
//   if (error) {
//     console.log("Помилка завантаження файлу: ", error);
//   } else {
//     console.log("Файл завантажено успішно");
//     console.log("Вміст файлу:", content);

//     convertFile(content, (error, convertedContent) => {
//       if (error) {
//         console.error("Помилка конвертації файлу: ", error);
//       } else {
//         console.log("Файл успішно сконвертовано!");
//         console.log("Конвертований вміст: ", convertedContent);

//         saveFile(convertedContent, (error) => {
//           if (error) {
//             console.error("Помилка збереження файлу: ", error);
//           } else {
//             console.log("Файл успішно збережено!");

//             sendFileToClient((error) => {
//               if (error) {
//                 console.error("Помилка відправлення файла клієнту", error);
//               } else {
//                 console.log("Файл успішно відправлено клієнту!");
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}... `);
//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// // console.log(result);

// // setTimeout(() => console.log(result), 3000);
// loadFile("image.png").then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// function loadFile(filename, callback) {
//   try {
//     console.log(`Завантаження файлу ${filename}... `);
//     setTimeout(() => callback(null, `Вміст файлу ${filename}`), 2000);
//   } catch (e) {
//     callback(e);
//   }
// }

// //========

function loadFile(filename) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Вміст файлу: ", filename);
    }, 2000);
  });
}

function convertFile(content) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      //Конвертація файлу...
      resolve(`Конвертований вміст: ${content.toUpperCase()}`);
    }, 1000);
  });
}

function saveFile(convertedContent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, 1500);
  });
}

function sendFileToClient() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}

function getInfoFromFile(file) {
  console.log(file, 1111);
  return Promise.resolve(file);
}

// loadFile("example.txt")
//   .then((content) => {
//     console.log("Файл завантажено успішно!");
//     console.log("Вміст файлу: ", content);
//     return convertFile(content);
//   })
//   .then((convertedContent) => {
//     console.log("Файл успішно сконвертовано!");
//     console.log("Сконвертований вміст:", convertedContent);
//     return saveFile(convertedContent);
//   })
//   .then(() => {
//     console.log("Файл успішно збережено!");
//     return sendFileToClient();
//   })
//   .catch((error) => {
//     console.error("Сталася помилка:", error);
//   })
//   .finally(() => {
//     console.log("Файл успішно відправлено клієнту");
//   });

Promise.allSettled([
  loadFile("file.txt"),
  getInfoFromFile("file file"),
  saveFile(),
  sendFileToClient(),
  convertFile("file"),
])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
