import SignUpPage from "./page/signUpPage"
import LoginPage from "./page/loginPage"
import {BrowserRouter,Route,Routes} from "react-router-dom" //external module or package
import HomePage from "./page/homePage"
function App(){
  
  return <BrowserRouter>
        <Routes>
             <Route path="/signUp" element={<SignUpPage/>}></Route>
             <Route path="/login" element={<LoginPage/>}></Route>
             <Route path="/" element={<HomePage/>}></Route>
        </Routes>
  </BrowserRouter>
  
}


export default App