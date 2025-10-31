let student =[
    {name:"Smit",rollNumber:31,marks:80},
    {name:"jet",rollNumber:32,marks:69},
    {name:"meet",rollNumber:33,marks:35},
    {name:"jeet",rollNumber:34,marks:35},
    {name:"neel",rollNumber:35,marks:55},
];
//print the name of students who scroed more than 60
//using filter method
let result=student.filter((item)=>{
    if(item.marks>60){
        return true;
    }
    // return item.marks>60;
}).map((item)=>{
    return item.name;
})
console.log(result);

const users=[
    {name:"Alice",
        orders:[
            {amount:100,status:"delivered"},
            {amount:50,status:"pending"},
            {amount:200,status:"delivered"}
        ]
    },
    {name:"Bob",}
]
