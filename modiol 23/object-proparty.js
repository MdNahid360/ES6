const students = [
    {id: 45, name:'md nahid'},
    {id: 33, name:'lololo'},
    {id: 44, name: 'mh murshed'}
];
const names = students.map(s => s.name);
const ids =  students.map(s => s.id);
const bigger = students.filter( s=> s.id > 40);
const bigger1 = students.find( s=> s.id > 40);
console.log(bigger);