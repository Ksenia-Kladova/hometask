//Задание №1
/*
Сортировка пузырьком 
Проходимся по массиву сравнивая соседние элементов и меняем их местами, если они находятся не в надлежащем порядке.
 Неоднократно выполняя это действие, мы заставляем наибольший элемент "всплывать" к концу массива
 и так до тех пор, пока после n-1 итерации массив не будет полностью отсортирован.
Сложность алгоритма: O(n^2);

Сортировка выбором;
Сортировка выбором начинается с поиска наименьшего элемента в списке и обмена его с первым элементом 
(таким образом, наименьший элемент помещается в окончательную позицию в отсортированном массиве). 
Затем мы сканируем массив, начиная со второго элемента, в поисках наименьшего среди оставшихся n-1 элементов и
 обмениваем найденный наименьший элемент со вторым, т.е. помещаем второй наименьший элемент в окончательную позицию в отсортированном массиве. 
 В общем случае, при i-ом проходе по списку алгоритм ищет наименьший элемент среди последних n-i элементов и 
 обменивает его с A[ i ]. После выполнения n-1 проходов список оказывается отсортирован.
 Сложность алгоритма:  O(n^2);
 
Циклическая сортировка;
Делим массив на циклы. Затем, внутри этих циклов происходят перестановки элементов 
до тех пор, пока все циклы не завершатся и массив не будет отсортирован.
Сложность алгоритма: O(n^2)

Быстрая сортировка;
Алгоритм определяет так называемый стержень и разбивает массив на подмассивы относительно «стержня», которые затем сортируются.
Сложность алгоритма: O(n * log n).

Сортировка вставками;
На каждом шаге алгоритма сортировки встаками выбирается один из элементов входного массива и вставляется на нужную позицию 
в уже отсортированном массиве, до тех пор, пока входных элементы не будут исчерпана.  
Сложность алгоритма: : O(n^2)

Сортировка Шелла;
При сортировке Шелла сначала сравниваются и сортируются между собой значения, стоящие один от другого на некотором расстоянии d. 
После этого процедура повторяется для некоторых меньших значений d, а завершается сортировка Шелла упорядочиванием элементов при d=1 
(то есть обычной сортировкой вставками).
Сложность алгоритма: O(n * log n)

Сортировка подсчётом;
Вначале для каждого элемента массива подсчитывается количество элементов, меньших, чем он, и на основе этой информации текущий элемент помещается 
в соответствующее место отсортированного массива.
Сложность алгоритма: O(n)

Сортировка расчёской;
Первоначально берётся достаточно большое расстояние между сравниваемыми элементами и 
по мере упорядочивания массива сужается это расстояние вплоть до минимального. Так продолжается до тех пор, пока разность индексов не достигнет единицы. 
В этом случае сравниваются соседние элементы как и в сортировке пузырьком, но такая итерация одна.
 Сложность алгоритма: O(n * log n)
 
Сортировка слиянием;
Делим массив пополам, каждый из них сортируем слиянием и потом соединяем оба массива. 
Каждый разделённый массив тоже нарезаем на два подмассива до тех пор, пока в каждом не окажется по одному элементу.
Здесь используется рекурсия — то есть повторение алгоритма внутри самого алгоритма. Но это только один из элементов алгоритма.
Второй элемент — соединение отсортированных элементов между собой, причём тоже хитрым способом: раз оба массива уже отсортированы, 
то нам достаточно сравнивать элементы друг с другом по очереди и заносить в итоговый массив данные по порядку.
Сложность алгоритма:  O(n * log n)

Пирамидальная сортировка/сортировка кучей;
Сортировка кучи относится к алгоритму сортировки выбора, разработанному с использованием структуры данных кучи. 
Создайте максимальную кучу из входного неупорядоченного массива в качестве начальной неупорядоченной области
Поменяйте местами верхний элемент (максимум) с конечным элементом
Уменьшите размер кучи (неупорядоченная область) на 1 и вызовите heapify (A, 0), чтобы настроить кучу, начиная с нового верхнего элемента кучи.
Повторяйте шаг 2, пока размер кучи не станет равным 1.
Сложность алгоритма:  O(n * log n)

Сортировка перемешиванием/шейкерная сортировка;
 Вместо того, чтобы идти от начала до конца и повторять это, он идет от начала до конца, 
 а затем от конца до начала снова за одну полную итерацию. Фактически, он выполняет двойную работу пузырьковой сортировки за одну полную итерацию.
Сложность алгоритма:  O(n^2)

Гномья сортировка;
Гномья сортировка — алгоритм сортировки, похожий на сортировку вставками, 
но в отличие от последней перед вставкой на нужное место происходит серия обменов, как в сортировке пузырьком.
Сложность алгоритма: O(n^2)
*/

//Задание №3
//Создание объекта, добавление метода logInfo
const person1 = {
  name: 'Ksenia',
  lastName: 'Kladova',
  password: 123,
};
person1.logInfo = function () {
  console.log(this);
};

person1.logInfo();

const person2 = new Object({
  name: 'Ksenia',
  lastName: 'Kladova',
  password: 123,
});
person2.logInfo = function () {
  console.log(this);
};

const person3 = Object.create(person1, {
  logInfo: {
    value: function () {
      console.log(this);
    }
  },
});

function Person(name, lastName, password) {
  this.name = name;
  this.lastName = lastName;
  this.password = password;
}

const person4 = new Person('Ksenia', 'Kladova', 123);

class PersonClass {
  constructor(name, lastName, password) {
    this.name = name;
    this.lastName = lastName;
    this.password = password;
  }
};

PersonClass.prototype.logInfo = function () {
  console.log(this);
};

const Person2 = new PersonClass('Ksenia', 'Kladova', 123);

Person2.logInfo();

//4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person. 
class PersonThree {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
};

class newPerson extends PersonClass { };

//БОНУС:
// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total: 
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
const firstSum = (arr, total) => {
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        sum.push(arr[i], arr[j]);
        return sum;
      }
    }
  }
  return sum;
}

console.log(firstSum(arr, total));

// 2) Какая сложность у вашего алгоритма ? O(n^2)

//Задание "со звёздочкой": 
Promise.resolve()//промис выполняется со значением Promis, колбэк функции уходят в микрозадачи
  .then(() => console.log("a: 1"))//3, выполнение микрозадачи по очереди
  .then(() => {
    setTimeout(() => console.log("timeout 2")); //отправляется в  микрозадачи, затем в макрозадачи. 8 выполнение макрозадачи
    console.log("a: 2");//4, выполнение микрозадачи по очереди
  })
  .then(() => {
    setTimeout(() => console.log("timeout 3")); //отправляется в  микрозадачи, затем в макрозадачи. 9 выполнение макрозадачи
    console.log("a: 3");  //6, выполнение микрозадачи по очереди
  });

new Promise((res, rej) => { 
  console.log("b");//1, создание промиса это синхронная функция
  rej(new Error("123"));
})
  .then(console.log("b 1"))//2
  .then(
    () => console.log("b 2"),//не выполняется
    () => console.log("b")//5
  )
  .catch(() => console.log("b 3")) //не выполняется, промис не отклонен
  .then(() => console.log("b 4"));//7, выполнение микрозадачи по очереди. Очередь микрозадачь пуста, отправляемся в макрозадачи

/* 
b
b 1
a: 1
a: 2
b
a: 3
b 4
timeout 2
timeout 3
*/