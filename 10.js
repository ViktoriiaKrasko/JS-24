console.log("Завдання: 10 ==============================");

function task10() {
  function promise1(timeout = 500) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 1");
      }, timeout);
    });
  }

  function promise2(timeout = 200) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 2");
      }, timeout);
    });
  }

  function promise3(timeout = 300) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 3");
      }, timeout);
    });
  }

  Promise.any([promise1(), promise2(), promise3()])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.error(error));
  // Створюємо проміс promise1, які вирішуються через 500мс, та повертають як успішне виконання рядок "Promise 1".
  // Створюємо проміс promise2, які вирішуються через 200мс, та повертають як успішне виконання рядок "Promise 2".
  // Створюємо проміс promise3, які вирішуються через 300мс, та повертають як успішне виконання рядок "Promise 3".
  // Promise.any() приймає масив промісів які ми створили вище і вирішується, як тільки перший із цих промісів вирішується.
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task10();
