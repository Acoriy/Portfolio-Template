import About from "./Components/About";
import Education from "./Components/Education";
import Expiriences from "./Components/Expiriences";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navebare from "./Components/Navebare";
import Portfulio from "./Components/Portfulio";
import Services from "./Components/Services";

function App() {

  return (
    <div>
       <Navebare/>
       <main>
         <div id="home">
           <Home/>
         </div>
         <div id="about">
           <About/>
         </div>
         <div id="services">
           <Services/>
         </div>
         <div id="education">
           <Education/>
         </div>
         <div id="experences">
           <Expiriences/>
         </div>
         <div id="portfulio">
            <Portfulio/>
         </div>
        
       </main>
       <Footer/>
       
    </div>
  )
}

export default App
