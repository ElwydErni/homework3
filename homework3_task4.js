const countTotalSalary = function(employees) {
    // твой код
    let value = Object.values(employees);
    let sum = 0;
    for (let salary of value){
        sum += salary;

    }
    return sum;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0
console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330
console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400