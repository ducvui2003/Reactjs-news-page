import instance from "./request";
import {Category} from "../constraints/category";

const parserRSS = async (category: Category ) => {
    return await instance.get("/", {
        params: {
            "category": category
        }
    });
}
export default parserRSS;
