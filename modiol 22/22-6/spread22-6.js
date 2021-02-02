const age = [12, 33, 44, 55];
const age2 =  [44,33,22,11,]; 
const age3 = [99, 22, 11, 66, 88];

// ///////// old js /////////

const allAge = (age).concat(age2).concat(age3);
console.log(allAge);

/////// ES6 ////////////////

const allAge2 = [...age, 5,  ...age2, ...age3];
console.log(allAge2);
 
/////////////
console.log('================== maximum value ========================');
const businessMan =  5000;
const ministeer = 6000;
const sochib = 3000;

const maxValue = Math.max(businessMan, ministeer, sochib);
console.log(maxValue);
console.log('---- apply ES6 JS ----');
const takaPoisa = [6500, 490, 200];
const mxValue = Math.max(...takaPoisa);
console.log(mxValue);

