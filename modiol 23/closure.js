function stpWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stpWatch()
console.log(clock1());
console.log(clock1());;
console.log(clock1());