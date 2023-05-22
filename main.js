// 1. функция, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными числами. 
function digitFilter(list) {
    return list.filter((elem) => Number(elem))
}

console.log('Функция фильтрации чисел:')
const testListFilter = [1, 2, 4, 'f', 'e', 'r', 'd', undefined, null, NaN, 6, 7, 5, 4];
console.log(`
Вводные данные: ${testListFilter}
Результат: ${digitFilter(testListFilter)}
`)


// 2. Функция accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(string) {
    let stringList = string.split('');
    for (let i = 0; i < stringList.length; i += 1) {
        let item = stringList[i];
        for (let b = i; b > 0; b -= 1) {

            stringList[i] += item;
        }

        if (!Number(stringList[i])) {
            stringList[i] = stringList[i].toLowerCase();
            let stringItem = stringList[i].split('');
            stringItem[0] = stringItem[0].toUpperCase();
            stringList[i] = stringItem.join('');
        }
    }
    return stringList.join('-');
}
console.log('Функция accum:')
console.log(`Вводные данные: ${"abcd"}
Результат: ${accum("abcd")}
`)
console.log(`Вводные данные: ${"RqaEzty"}
Результат: ${accum("RqaEzty")}
`)
console.log(`Вводные данные: ${"cwAt"}
Результат: ${accum("cwAt")}
`)
console.log(`Вводные данные: ${"123At"}
Результат: ${accum("123At")}
`)


// 3. Функция, которая выдаёт сумму выручку на основании входного формата данных
// const products = [
// { name: 'Футболка', price: 20, quantity: 2 },
// { name: 'Джинсы', price: 50, quantity: 1 },
// { name: 'Носки', price: 5, quantity: 10 },
// { name: 'Штаны', price: 30, quantity: 1 }
// ];

function fullPrice(products) {
    let price = 0;
    products.forEach(element => {
        let sum = element.price * element.quantity;
        price = price + sum;
    });
    return price;
}

const products = [
    { name: 'Футболка', price: 20, quantity: 2 },
    { name: 'Джинсы', price: 50, quantity: 1 },
    { name: 'Носки', price: 5, quantity: 10 },
    { name: 'Штаны', price: 30, quantity: 1 }
];
console.log('Функция выведения выручки:')
console.log(`Вводные данные: 
{ name: 'Футболка', price: 20, quantity: 2 },
{ name: 'Джинсы', price: 50, quantity: 1 },
{ name: 'Носки', price: 5, quantity: 10 },
{ name: 'Штаны', price: 30, quantity: 1 }

Результат: ${fullPrice(products)}
`)
