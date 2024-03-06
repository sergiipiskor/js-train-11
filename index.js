// Завдання: 1
/**
 * Функція `customSet` створює множину з масиву чисел та рядків, але видаляє всі елементи, які є числами.
 * arr - Масив, з якого створюється множина.
 * Повертаємо - Нову множину, яка містить лише рядкові елементи.
 */
function customSet(arr) {
  // Створення множини з масиву за допомогою конструктора Set
  const setvalue = new Set(arr);
  // Перебираємо множину за допомогою 'for of'. Цикл 'for of' дозволяє пройтись по всіх елементах колекції.
  for (const elem of arr) {
    // Для кожного елемента перевіряємо, чи є цей елемент числом за допомогою оператора typeof
    if (typeof elem === "number") {
      // Якщо елемент є числом, то видаляємо його з множини за допомогою метода delete
      setvalue.delete(elem);
    }
    // Повертаємо нову множину, яка вже не містить числових значень
  }
  return setvalue;
}
// Приклад використання функції customSet
console.log("Завдання: 1 ==============================");
console.log(customSet([1, "a", 2, "b", 3, "c"]));
// Виведе: Set(3) { 'a', 'b', 'c' }

// Завдання: 2
/**
 * Функція `clearSet` очищає множину.
 * set - Множина, яку потрібно очистити.
 */
function clearSet(set) {
  // Використання властивості size для перевірки розміру множини, чи більше вона нуля
  if (set.size > 0) {
    // Якщо так використання методу clear для очищення множини та повертаємо Множину очищено.
    set.clear();
    return "Множину очищено";
  }
  // Якщо ні повертаємо Множина вже порожня.
  return "Множина вже порожня";
}

// Приклад використання функції clearSet
console.log("Завдання: 2 ==============================");

console.log(clearSet(new Set([1, 2, 3])));
// Виведе:
// Множину очищено.

// Завдання: 3
/**
 * Функція `addElements` додає елементи до множини з масиву, якщо вони ще не присутні у множині.
 * mySet - Множина, до якої будуть додані елементи.
 * arr - Масив з елементами, які потрібно додати до множини.
 * Повертаємо - Оновлену множину з новими елементами.
 */
function addElements(mySet, arr) {
  // Перебираємо масив та додаємо кожний елемент до множини за допомогою методу add
  for (const value of arr) {
    // Метод add додає елемент до множини лише якщо він ще не присутній у множині
    if (!mySet.has(arr)) {
      mySet.add(value);
    }
  }
  // Повертаємо оновлену множину
  return mySet;
}

// Приклад використання функції addElements
console.log("Завдання: 3 ==============================");
console.log(addElements(new Set(["a", "b", "c"]), ["d", "e", "f"]));
// Виведе: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Завдання: 4
/**
 * Функція `filterAndAdd` видаляє з множини всі числові елементи та додає до множини унікальні значення з масиву,
 * якщо вони ще не присутні в множині. В результаті отримуємо множину, що містить лише рядкові значення.
 *
 * mySet - Множина, з якої будуть видалені числові елементи.
 * arr - Масив, з якого будуть додані унікальні елементи в множину.
 *
 * Повертаємо - Оновлену множину.
 */
function filterAndAdd(mySet, arr) {
  // Перебираємо множину за допомогою 'for of'. Всередині циклу перевіряємо, чи є поточний елемент числом.
  for (const value of mySet) {
    if (typeof value === "number") {
      // Якщо елемент є числом, видаляємо його з множини за допомогою методу delete.
      mySet.delete(value);
    }
  }
  // Тепер множина не містить числових значень. Перебираємо масив та додаємо кожний елемент до множини
  // за допомогою методу add. Метод add додає елемент до множини лише якщо він ще не присутній у множині.
  for (const value of arr) {
    if (!mySet.has(mySet)) {
      mySet.add(value);
    }
  }
  // Повертаємо оновлену множину
  return mySet;
}

// Приклад використання функції filterAndAdd
console.log("Завдання: 4 ==============================");
console.log(filterAndAdd(new Set([1, 2, 3, "a", "b", "c"]), ["d", "e", "f"]));
// Виведе: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Завдання: 5

/**
 * Функція `checkValueAndType` перевіряє, чи містить множина певне значення та виводить його тип.
 *
 * mySet - Множина, в якій буде проводитися пошук.
 * value - Значення, яке потрібно знайти.
 *
 * Повертаємо - рядок із повідомленням про наявність значення та його тип.
 */
function checkValueAndType(mySet, value) {
  // Використовуємо метод has для перевірки, чи містить множина певне значення.
  if (mySet.has(value)) {
    // Якщо значення знайдено, повертаємо рядок Множина має значення "${value}" типу "${typeof value}".
    return `Множина має значення "${value}" типу "${typeof value}"`;
    // Якщо значення не знайдено, повертаємо рядок Множина не має значення "${value}".
  }
  return `Множина не має значення "${value}"`;
}
// Приклад використання функції checkValueAndType
console.log("Завдання: 5 ==============================");
console.log(checkValueAndType(new Set([1, 2, 3, "a", "b", "c"]), "b"));
// Виведе: Множина має значення "b" типу "string"

// Завдання: 6

/**
 * Функція `setToArray` конвертує множину в масив, видаляє з масиву всі числові елементи
 * та відсортовує рядкові елементи в алфавітному порядку.
 *
 * mySet - Множина, яку треба конвертувати в масив та обробити.
 *
 * Повертаємо - Відсортований масив із рядковими елементами.
 */
function setToArray(mySet) {
  // Конвертуємо множину в масив за допомогою деструктурізації.
  const arr = Array.from(mySet);
  // Використовуємо метод filter для створення нового масиву, що містить лише рядкові елементи.
  // Використовуємо метод sort для сортування рядкових елементів в алфавітному порядку.
  // Повертаємо оброблений масив.
  const newarr = arr.sort().filter((elem) => typeof elem === "string");
  return newarr;
}

// Приклад використання функції setToArray
console.log("Завдання: 6 ==============================");
console.log(setToArray(new Set([1, 2, 3, "b", "a", "c"])));
// Виведе: ['a', 'b', 'c']

// Завдання: 7

/**
 * Функція `removeDuplicatesInPlace` видаляє дублікати з масиву без створення нового масиву.
 * arr - Масив, з якого потрібно видалити дублікати.
 */
function removeDuplicatesInPlace(arr) {
  // Створення множини для збереження унікальних елементів
  let setvalue = new Set();
  // Перебір елементів масиву за допомогою циклу for від 0 до довжини масиву
  for (let elem = 0; elem < arr.length; elem++) {
    // Перевірка, чи елемент вже присутній у множині
    if (setvalue.has(arr[elem])) {
      // Якщо елемент вже є унікальним, видаляємо його з масиву
      arr.splice(elem, 1);
      // Зменшуємо лічильник, оскільки масив став коротшим
      elem--;
    }
    // Додаємо унікальний елемент до множини
    else setvalue.add(arr[elem]);
    // Повертаємо множину
  }
  return setvalue;
}

// Приклад використання функції removeDuplicatesInPlace
console.log("Завдання: 7 ==============================");

console.log(removeDuplicatesInPlace([1, 2, 2, 3, 3, 4, 5, 5]));
// Виведе: Set(5) { 1, 2, 3, 4, 5 }

// Завдання: 8

/**
 * Функція `areDisjoint` перевіряє, чи є дві множини неспільними (не мають спільних елементів).
 * set1 - Перша множина.
 * set2 - Друга множина.
 * Повертаємо - true, якщо множини не мають спільних елементів, інакше false.
 */
function areDisjoint(set1, set2) {
  // Перебираємо першу множину за допомогою оператору for of
  for (const elem1 of set1) {
    if (set2.has(elem1)) {
      return true;
    }
    return false;
  }

  // Якщо знайдено спільний елемент з другою множиною,використовуємо метод has, повертаємо false
  //Якщо немає  спільних елементів повертаємо true
}

// Приклад використання функції areDisjoint
console.log("Завдання: 8 ==============================");
console.log(areDisjoint(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Виведе: false

// Завдання: 9

/**
 * Функція `getDifference` повертає множину, яка містить елементи, що належать першій множині, але не належать другій множині.
 * set1 - Перша множина.
 * set2 - Друга множина.
 * Повертаємо - Множина з елементами, що належать set1, але не належать set2.
 */
function getDifference(set1, set2) {
  // Створення множини differenceSet
  const differenceSet = new Set();
  // Перебір елементів першої множини за допомогою оператору for of
  for (const elem of set1) {
    // Якщо елемент не належить другій множині, додаємо його до differenceSet
    if (!set2.has(elem)) {
      differenceSet.add(elem);
    }
  }
  // Повертаємо множину differenceSet з різницею елементів
  return differenceSet;
}

// Приклад використання функції getDifference
console.log("Завдання: 9 ==============================");
console.log(getDifference(new Set([1, 2, 3, 4]), new Set([2, 3])));
// Виведе: Set(2) { 1, 4 }

// Завдання: 10

/**
 * Функція `getIntersection` повертає множину, яка містить спільні елементи двох масивів.
 * arr1 - Перший масив.
 * arr2 - Другий масив.
 * Повертаємо - Множина зі спільними елементами.
 */
function getIntersection(arr1, arr2) {
  // Створення множин з двох масивів
  const setarr1 = new Set(arr1);
  const setarr2 = new Set(arr2);
  // Створення множини intersectionSet
  const intersectionSet = new Set();
  // Перебір елементів першої множини за допомогою оператору for of
  for (const elem of setarr1) {
    // Перевірка, чи елемент є спільним у другій множині
    if (setarr2.has(elem)) {
      intersectionSet.add(elem);
    }
  }
  return intersectionSet;
  // Додавання спільного елементу до множини intersectionSet
  // Повертаємо множину intersectionSet
}

// Приклад використання функції getIntersection
console.log("Завдання: 10 ==============================");
console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Виведе: Set(2) { 3, 4 }

// Завдання: 11

/**
 * Функція `iterateSet` виконує ітерацію по множині та виводить ключі, значення та записи кожного елемента.
 * set - Множина, яку потрібно пройтись.
 */
function iterateSet(set) {
  // Використовуємо методу keys для отримання ітератора ключів
  const iterkey = set.keys();
  // Використовуємо for...of для кожного ключа з ітератора keys
  for (const index of iterkey) {
    // Виведення ключа у консоль
    console.log(index);
  }
  // Використовуємо методу values для отримання ітератора значень
  const itervalue = set.values();
  // Використовуємо for...of для кожного значення з ітератора values
  for (const index of itervalue) {
    // Виведення значення у консоль
    console.log(index);
  }
  // Використовуємо методу entries для отримання ітератора записів
  const iterentries = set.entries();
  // Використовуємо for...of для кожного запису з ітератора entries
  for (const index of iterentries) {
    // Виведення запису у консоль
    console.log(index);
  }
}

// Приклад використання функції iterateSet
console.log("Завдання: 11 ==============================");
iterateSet(new Set(["a", "b", "c"]));
// Виведе:
// a
// b
// c
// a
// b
// c
// [ 'a', 'a' ]
// [ 'b', 'b' ]
// [ 'c', 'c' ]

// Завдання: 12

/**
 * Функція `sumNumbers` рахує суму всіх числових елементів у множині.
 * set - Множина, у якій потрібно порахувати суму чисел.
 * Повертаємо - Суму числових елементів у множині.
 */
function sumNumbers(set) {
  let sum = 0;
  // Використання методу forEach для перебору елементів множини
  const seteach = set.forEach((elem) => {
    // Перевірка, чи є елемент числом
    if (typeof elem === "number") {
      // Додавання числового елемента до суми
      sum += elem;
      // Повертаємо суму
    }
  });
  return sum;
}

// Приклад використання функції sumNumbers
console.log("Завдання: 12 ==============================");
console.log(
  "Сума чисел у множині:",
  sumNumbers(new Set([1, 2, "a", 3, "b", 4, 5]))
);
// Виведе: Сума чисел у множині: 15
