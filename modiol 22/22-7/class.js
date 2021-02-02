class students {
    constructor(){
        this.id = 455056;
        this.name = 'Md Nahid';
        this.schoolsName = 'BFM';

    }
}
const student1 = new students();
const student2 = new students();
const student3 = new students();
const student4 = new students();
console.log(student1,student2);
 
//////////////steep 2 ///////////
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name =  sName;
        this.school = 'Beroi Fajel Madrasha';
    }
}

const studentN = new Student(466056, 'Md Nahid');
const studentS = new Student(46600, 'SRT');
console.log(studentN, studentS);


////////////  access duble class /////////

class parent{
    constructor(){
        this.fathersName = 'kiso akta';
    }
}

class child extends parent{
      constructor(name){
          super();
          this.childName = name;
      }
}

const baby = new child('lololo');
console.log(baby);