/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for ( let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArray = [],
        i;

    for ( i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i], i, array);
    }

    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let sum,
        i = 0;

    if (initial) {
        sum = initial;
    } else {
        sum = array[0];
        i++;
    }
    for (i ; i< array.length; i++ ) {
        sum = fn(sum, array[i], i, array);
    }

    return sum;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arr = [];

    for ( let i in obj ) {
        arr.push(i.toUpperCase())
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    let newArray = [],
        i;

    if (to) {
        if ( to > 0 ) {
            if (to<array.length) {
                if ( from >= 0 ) {
                    i = from;
                    for ( i; i < to; i++ ) {
                        newArray.push(array[i]);
                    }
                } else {
                    i = 0;

                    for ( i; i < to; i++ ) {
                        newArray.push(array[i]);
                    }
                }
            } else {
                if ( from >= 0 ) {
                    i = from;

                    for ( i; i < array.length; i++ ) {
                        newArray.push(array[i]);
                    }
                } else {
                    i = 0;

                    for ( i; i < array.length; i++) {
                        newArray.push(array[i]);
                    }
                }
            }
        } else {
            if ( from < 0 ) {
                if ( Math.abs(from) <= array.length ) {
                    i = array.length - Math.abs(from);

                    for (i; i < array.length - Math.abs(to); i++) {
                        newArray.push(array[i]);
                    }
                } else {
                    i = 0;

                    for ( i; i < array.length-Math.abs(to); i++ ) {
                        newArray.push(array[i]);
                    }
                }
            } else {
                i = 0;

                for (i; i < array.length-Math.abs(to); i++) {
                    newArray.push(array[i]);
                }
            }
        }
    } else {
        if (to === undefined) {
            if ( from>=0 ) {
                i = from;
                for ( i; i < array.length; i++ ) {
                    newArray.push(array[i]);
                }
            } else {
                return array;
            }

        } else {
            return newArray;
        }
    }

    return newArray;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, val) {
            if (typeof val === 'number') {
                target[prop] = val*val;

                return true;
            }

            return false;

        }
    });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
