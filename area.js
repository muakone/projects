// To find the AREA of a triangle
// AREA = (s(s-x)(s-y)(s-z))^1/2
// where s = (x+y+z)/2


// const side = ["triangle"]
// let area = (x, y, z) => {

//     let s = 0;
//     let A = 0;
//     for (let i = 0; i < side.length; i++) {
//         console.log("hello");
//         s = (x[i] + y[i] + z[i]) / 2;
//         A = Math.sqrt(s * (s - x) * (s - y) * (s - z));


//     };

//     return A;


// };

// console.log("The Area of triangle xyz is :", area([4], [5], [6]));

//my workings
let distance = 0;
let area = 0;
const calculate = (any) => {
    //Array.isArray() to check if the value is an array
    if (Array.isArray(any)) {
        let sum = 0;
        // forEach function to perform a function in each array value
        let total = any.forEach(val => {
            sum += parseInt(val)

        });

        distance = sum / 2;

        area = distance * (distance - any[0]) * (distance - any[1]) * (distance - any[2]);
        area = Math.sqrt(area)
        console.log(area.toFixed(2))
    } else {
        console.log(`'${any}' is a ${typeof (any)}, value must be an array`)
    }
}
calculate('[4, 6, 7]')