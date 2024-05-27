import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";

// Sử dụng để khai báo route trên toàn bộ dự án
function ReactRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default ReactRouter;