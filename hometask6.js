//1)
console.log('1');// 1 выполнение синхронной задачи
setTimeout(() => console.log('2'), 1); //5 выполнение макрозадачи
let promiseNew = new Promise((resolve) => {
console.log('3'); //2 создание промиса синхронная задача
resolve();
});
promiseNew.then(() => console.log('4')); // 4 выполнение микрозадачи
setTimeout(() => console.log('5')); // 6 выполнение макрозадачи
console.log('6'); // 3 выполнение синхронной задачи

//2)
let promiseTree = new Promise((resolve, reject) => {
resolve("a");
console.log("1"); //1 выполнение синхронной задачи
setTimeout(() => {
console.log("2"); //3 выполнение макрозадачи
}, 0);
console.log("3"); //2 выполнение синхронной задачи
});

//3)
let promiseTwo = new Promise((resolve, reject) => {
resolve("a");
});
promiseTwo
.then((res) => {
return res + "b";
})
.then((res) => {
return res + "с";
})
.finally((res) => {//ничего не возвращает
return res + "!!!!!!!";
})
.catch((res) => { //пропускаем, промис resolve
return res + "d";
})
.then((res) => {
console.log(res); //abc
});

//4)
function doSmth() {
return Promise.resolve("123");
}
doSmth()
.then(function (a) {
console.log("1", a); //1,123
return a;
})
.then(function (b) {
console.log("2", b); //2, 123

return Promise.reject("321");
})
.catch(function (err) {
console.log("3", err); //3, 321, возвращается undefined
})
.then(function (c) { 
console.log("4", c); //4, undefined
return c;
});

//5)
console.log("1"); //1 выполнение синхронной задачи
setTimeout(function () {
console.log("2"); //4 выполнение макрозадачи
}, 0);
Promise.resolve().then(() => console.log("3")); //3 выполнение микрозадачи
console.log("4"); //2 выполнение синхронной задачи

/*
6) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого
элемента с задержкой в 3 секунды. Входные данные: [10, 12, 15, 21]
*/
function logIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => console.log(i), 3000)
    }
}

logIndex([10, 12, 15, 21]);