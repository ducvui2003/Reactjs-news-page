import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Main";

// Sử dụng để khai báo route trên toàn bộ dự án
function ReactRouter() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default ReactRouter;