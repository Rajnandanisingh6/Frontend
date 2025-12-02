
//react component ak function hota hai jo jsx return karta hai
import './navbar.css'
const Navbar =()=>{
    return(
       <>      
         <div class="Navbar">
         <div class="logo">
            <h1>Medium</h1>
         </div>
            <div class="link">
              <a href="#">Our Story </a>      
              <a href="#">Membership</a>
              <a href="#">Write</a>
              <a href="#">Sign in</a>
              <a  id="spcnavlink"href="#">Get Started</a>
           </div>        
        </div>

    </>
    )
}
export default Navbar;