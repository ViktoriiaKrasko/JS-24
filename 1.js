console.log("Завдання: 1 ==============================");

// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція `getData` симулює отримання даних з асинхронного джерела,такого як запит до бази даних або API.
   *
   *  data - вхідні дані.
   *  timeout - час в мілісекундах, який витрачається на отримання даних,за замовчуванням 2000мс.
   */
  function getData(data, timeout = 2000) {
    return new Promise((resolve, reject) => {
      // Функція повертає новий проміс
      setTimeout(() => {
        // За допомогою setTimeout ми симулюємо затримку timeout, яка виникає при роботі з асинхронними джерелами даних
        if (Object.keys(data).length !== 0) {
          // Якщо об'єкт не пустий, ми викликаємо resolve з data
          resolve(data);
        } else {
          // Якщо об'єкт пустий, ми викликаємо reject з новим об'єктом Error("Об'єкт пустий")
          reject(new Error("Об'єкт пустий"));
        }
      }, timeout);
    });
  }

  getData({ name: "John", age: 30, city: "New York" }) // Ми викликаємо getData з об'єктом { name: "John", age: 30, city: "New York" } і часом очікування 2000
    .then((success) => {
      // Ми обробляємо дані, повернуті промісом
      console.log(success); // У разі успіху виводимо в консоль дані
    })
    .catch((error) => {
      console.error(error.toString()); // У разі помилки виводимо повідомлення помилки
    })
    .finally(() => {
      console.log("Завдання 1 завершено"); // Незалежно від того, завершилось виконання проміса успіхом чи ні виводимо в консоль "Завдання 1 завершено"
    });
}

// Викликаємо функцію task1
task1();
