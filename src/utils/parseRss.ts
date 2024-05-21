import instance from "./request";
import {Category} from "../services/api/category";
// import Parser from 'rss-parser';

// const parser = new Parser();
const parserRSS = async (category: Category) => {
    return await instance.get("/", {
        params: {
            "category": category
        }
    });
}
export default parserRSS;
