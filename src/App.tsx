import "./App.css";
import "bootstrap/scss/bootstrap.scss";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";

function App() {
    return (<Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/detail" element={<Detail/>}/>
                </Route>
            </Routes>)
}

export default App;
