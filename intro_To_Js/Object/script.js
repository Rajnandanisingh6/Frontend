//key value pair
var student={
    'first name' :'Rajnandani',
    name:'rajnandani',
    age:19,
    city:'Gorakhpur',
    sem:5,
    marks:[6.6,6.5,6.7,6.6,6.4]
}
console.log(student);

console.log(student.name);
console.log(student.city);

student.marks.push(7.2);
console.log(student)

console.log(student['first name']);