var a = 1;
var b = 2;
// or | 
var arr = [1, "2", 3, 4, 5];
var arr2 = [true, 2];
var arr3 = [true];
// Or in premetive
var x = null;
x = 4;
var y;
y = 2;
// function sum(a: number, b: number): string | number {
//     return a+b
// }
// let c = sum(a,b)
// function sum(a: number, b: number): number {
//         return a+b
//     }
//     let c = sum(a,b)
// optional Argument
function sum(a, b) {
    if (!b) {
        return a;
    }
    return a + b;
}
var c = sum(a, b);
//Void means no value in it 
function dev(a, b) {
    var arr = [a, b];
}
var ram = dev(1, 2);
//ANY
function devi(a, b) {
    if (b === void 0) { b = 0; }
    return a;
}
var sam = devi(1);
// enum type
var Country;
(function (Country) {
    Country[Country["india"] = 0] = "india";
    Country[Country["U.S.A"] = 1] = "U.S.A";
})(Country || (Country = {}));
var person = {
    name: "gourab",
    age: 21,
    salary: 20,
    isEmployee: true,
    country: Country.india,
    id: "a",
    roll: 1
};
//OR operator 
var person2 = {
    name: "gourab",
    age: 21,
    salary: 20,
    isEmployee: true,
    country: Country["U.S.A"],
    id: "a"
};
var p3 = {
    name: "gourab",
    age: 21,
    salary: 122,
    isEmployee: true,
    roll: 2,
    id: 1,
    ad: {
        pin: 12,
        place: "palur"
    }
};
