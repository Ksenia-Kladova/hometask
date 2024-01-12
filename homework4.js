//задание №1
/* JavaScript массивы могут содержать элементы разных типов данных и длинну массива можно изменить .
 Структуры данных: стэк, очередь, двухсторонняя очередь, упорядоченный список.
*/
//задание №2
function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };

logger.call(obj);//вызывает

logger.apply(obj);//вызывает

const newLogger = logger.bind(obj);
newLogger();

//бонусное задание
Function.prototype.bind = function (context) {
    const func = this;
    return function (...args) {

        return func.apply(
            context,
            args
        );
    }
}