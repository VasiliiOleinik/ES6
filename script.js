'use strict';

let name = "John",
    age = 30,
    mail = "ex@mail.ru";

document.write(`User ${name} has ${age} years. His email asdress ${mail}`)
/////////////////////////////////////////////

// Let & const = имеют ограниченную зону видимости и начинают действовать тогда, когда до них доходит код. Var = все наоборот.
// В цикле Let & const при каждой итерации создаются заново в отличии от var

function makeArray() {
    var items = [];

    //for (var i = 0; i < 10; i++) {
    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        }
        items.push(item);
    }
    return items;
}

var array = makeArray();

array[1]();
array[5]();
array[7]();

/////////////////////////////////////////////

// У стрелочной функции нет контекста вызова. И она берет ее у своего родителя.

let fun = () => {
    console.log(this);
};
fun();


let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();



let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let show = () => {
        console.log(this);
    };
    show();
});


function calcOrDouble(number, basis = 2) { // ES6
    //basis = basis || 2;  ES5
    console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);
/////////////////////////////////////////////

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10);
console.log(square.calcArea());
/////////////////////////////////////////////

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wp', 'LJ', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // ... = spread=operator = оператор развортора массива

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2,5,7];

log(...numbers);