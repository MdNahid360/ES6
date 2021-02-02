 const numbers = [1, 2, 3, 4, 5, 6,  7, 8, 9 ,10];
// const output = [];
// for(let i=0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);

// }
// console.log(output); 

// console.log(output);
/////////////////////////////
function square (element, index){
    return element * element;
}


numbers.map(function(element, index){
    console.log(element, index);
});