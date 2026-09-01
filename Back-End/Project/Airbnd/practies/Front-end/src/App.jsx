import SignUpPage from "./pages/SignUpPage"
import{BrowserRouter,Routes,Route} from "react-router-dom"//extarnal package
 //create a function call the main jsx
 function App(){
return(
   <BrowserRouter>
    <Routes>
        <Route path="/SignUpPage" element={<SignUpPage/>} ></Route>
    </Routes>
   </BrowserRouter>

)

 }

 export default App
