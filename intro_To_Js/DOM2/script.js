// const city = document.querySelectorAll('li')[2];

// city.style.background="blue";

// let x = city.previousElementSibling;
// x.style.color="violet"

// let y = city.nextElementSibling;
// y.style.color="violet"

// const parent = city.parentElement;
// parent.style.border="2px solid red"

// parent.children[4].style.color='blue'

// city.parentElement.previousElementSibling.style.color="green"


const para = document.createElement('p');
para.innerText="hello"
console.log(para)

const div = document.createElement('div');
console.log(div);

body.append(div);

const h1 = document.createElement('h1');
h1.innerText="city";

div.append(h1);

const ul = document.createElement('ul');
div.append(ul)

const li1 = document.createElement('li');
li1.innerText="kolkata"
ul.append(li1);

const li2 = document.createElement('li');
li2.innerText="kolkata"
ul.append(li2);

const li3 = document.createElement('li');
li3.innerText="Mumbai"
ul.append(li3);

const li4 = document.createElement('li');
li4.innerText="pune"
ul.append(li4);

const li5 = document.createElement('li');
li5.innerText="noida"
ul.append(li5);