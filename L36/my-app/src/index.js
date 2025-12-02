import React from 'react';
import ReactDOM from 'react-dom/client';
//props data ko send karne ke liye use kate hai
//react component kya hota hai
//component ek function hota hai jo jsx return karta hai
//props kya hota hai
//props ek object hota hai jisme hum component ko data bhejte hai
//jsx kya hota hai
//jsx ek syntax extension hai jo javascript me html jaisa code likhne deta hai
//jsx me hum javascript expressions ka use kar sakte hai
//jsx me hum css ka use kar sakte hai
//jsx me hum components ka use kar sakte hai

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Hello from my first react app</h1>  
    <p>Hello </p>
    {/* <card/> */}

    {
      User.map((item,ind)=>{
        return(
          <Card name={item.name} age={item.age} city={item.city}/>
        )
      })
    }

  
  </div>
  

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

