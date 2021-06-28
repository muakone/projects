// To find the AREA of a triangle
// AREA = (s(s-x)(s-y)(s-z))^1/2
// where s = (x+y+z)/2


const side = ["triangle"]
let area = (x, y, z) => {

    let s = 0;
    let A = 0;
    for(let i = 0; i < side.length; i++){
        console.log("hello");
        s = (x[i] + y[i] + z[i]) / 2;
        A = Math.sqrt(s*(s-x)*(s-y)*(s-z));

        
    };
    
    return A;
    
    
};

console.log("The Area of triangle xyz is :",  area([4], [5], [6]));


