//const URL=' https://official-joke-api.appspot.com/random_joke'

// fetch(URL)
//      .then((res)=>{
//         console.log(res)
//         return res.json();
//      })
//      .then((data)=>{
//         console.log(data);


//       //   const h2 =document.createElement('h2');
//       //   h2.innerText=`${data.setup} ;
  
//      }) 

//1 Fetch and display products
//fetch data from https://dummyjson.com/products and log it to the console.      
//display
//product title
//Thumbnail
//price
//Rating
//Use cards or grid layout

// const URL='https://dummyjson.com/products'
// fetch(URL)
//        .then((res)=>{
//          console.log(res)
//          return res.json();
//        })
//        .then((data)=>{
//          console.log(data);

//        })
// const container = document.querySelector('.container')
// const URL = "https://dummyjson.com/products"

// fetch(URL)
//     .then((res)=>{
//         // console.log(res);
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)

//         const h2 = document.createElement('h2');
//         h2.innerText= data.setup;

//         container.append(h2);

        
//     })

const URL ="https://dummyjson.com/products"
const container = document.querySelector('.container');
container.style.display="flex";
container.style.flexWrap="wrap";
container.style.gap="20px"

fetch(URL)
    .then((res)=>{
        return res.json()
    })
    .then((datas)=>{
        console.log(datas.products);
        for(let data of datas.products){
            const div = document.createElement('div');
            div.style.width="300px"
            const img = document.createElement('img');
            img.setAttribute('src',data.thumbnail);
            img.style.height="150px"
            const h2 = document.createElement('h2');
            h2.innerText=data.title;

            const price = document.createElement('p');
            price.innerText=data.price

            div.style.border="2px solid black"
            div.append(img)
            div.append(h2);
            div.append(price)
            container.append(div);
        }
    })
   
    const button= document.querySelector('#btn');
    
    




         
        