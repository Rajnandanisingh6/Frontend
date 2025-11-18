const URL=' https://official-joke-api.appspot.com/random_joke'

fetch(URL)
     .then((res)=>{
        console.log(res)
        return res.json();
     })
     .then((data)=>{
        console.log(data);


      //   const h2 =document.createElement('h2');
      //   h2.innerText=`${data.setup} ;
  
     }) 
