import About from "./componets/About"
import Contact from "./componets/Contact"
import Nav from "./componets/Nav"
import Pic from "./componets/Pic"
import Projects from "./componets/Projects"

 function App() {
   return (
     <div className="bg-black/20 absolute inset-0">
      <Nav/>
      <Pic/>
      <About/>
      <Projects/>
      <Contact/>
     </div>
   )
 }
 
 export default App