let bonus = 40;
function sum (first, second){
    let result = first + second + bonus;
    if(result > 10){
        const num = 'lololo';
        console.log(num);
    }
    console.log(first);
    return result;
}

 const output =  sum(22, 44);
// console.log(bonus);
// console.log(output);

//Scope = [let & constant]