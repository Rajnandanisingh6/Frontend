const  img = document.querySelector('img');
//setAttribut  kya karta hai ki hum kisi bhi attribute ko set kar sakte hai
img.setAttribute('src','https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60');
img.style.hright="250px";
console.log(img.getAttribute('src'));

//getAttribute kya karta hai ki hum kisi bhi attribute ki value ko get kar sakte hai

img.removeAttribute('src');

img.setAttribute('src','https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60');

// const para = document.querySelector('p');

// para.setAttribute('class','one');

// para.setAttribute('class','two');

// para.removeAttribute('class');

// para.classList.add('one'); // ye class ko add karta hai
// para.classList.add('two');
// para.classList.remove('one'); // ye class ko remove karta hai
// console.log(para.classList.contains('two')); //ye check karta hai ki class hai ya nhi

// para.classList.toggle('one');  //ye kya karta hai ki agr class hai to remove krdega agr nhi hai to add krdega
// para.classList.toggle('one');
// para.classList.toggle('one');
