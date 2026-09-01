import Header from "./components/Header"
import Footer from"./components/Footer"
import Hero from "./components/Hero"
import Mentor from "./components/Mentor"
import Founder from "./components/Founder"

import "./App.css"
function App()
{
   return(
    <>
         <Header></Header>
         <main>
         <Hero></Hero>
         <Mentor></Mentor>
         <Founder></Founder>
         </main>
         <Footer></Footer>
    </> 
   ) 
}



export default App