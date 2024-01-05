//задание 1
const counter = {
    count: 1
};
const newCounter = Object.create({});
const counterObject = new Object();

console.dir(counter);
console.dir(newCounter);
console.dir(counterObject);

//задание 2
const copyCounter = Object.assign({}, counter);
const copyCounterSpread = { ...counter };
const clone = structuredClone(counter);
const copyCounterJSON = JSON.parse(JSON.stringify(counter));

console.log(copyCounter);
console.log(copyCounterSpread);
console.log(clone);
console.log(copyCounterJSON);

//задание 3
const makeCounter = function () {
    return counter.count++;
};

function makeCounter2() {
    return counter.count++;
};

const newMakeCounter = function makeCounter3(obj) {
    obj ? obj.count++ : makeCounter(counter);

}

//доп. задание 1
const obj1 = {
    here: {
        is: 'on',
        other: '3'
    },
    object: {
        value: 'z'
    }
};
const obj2 = {
    here: {
        is: 'on',
        other: '2'
    },
    object: {
        value: 'y'
    }
};

const deepEqual = (obj1, obj2) => {
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        // Получаем массив ключей из каждого объекта
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        // Проверяем наличие одинакового количества ключей
        if (keys1.length !== keys2.length) {
            return false;
        }

        // Проверяем значения всех ключей рекурсивно
        for (let key of keys1) {
            if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    } else {
        return obj1 === obj2;
    }
};

console.log(deepEqual(obj1, obj2));

//доп. задание 2
function reverseStr(str) {
    let strArray = str.split('');
    let reversedArray = strArray.reverse();
    return reversedArray.join('');
}

console.log(reverseStr('task'));

//задание из лекции
console.log(+[6]); //6
//унарный плюс преобразует массив в число, и так как в массиве только один элемент, то этот элемент (число 6) будет возвращен.
console.log(+[1,2,3,4,]); //NaN
//так как массив содержит не только одно значение, то операция преобразования в число невозможна, поэтому результат будет NaN