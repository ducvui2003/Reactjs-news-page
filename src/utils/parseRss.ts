import instance from "./request";
import {Category} from "../constraints/category";
import xmljs from 'xml-js';

const parserRSS = async (category: Category) => {
    return instance.get("/", {
        params: {
            "category": category
        }
    }).then((xml) => {
        const json = xmljs.xml2json(xml.data, {compact: true, spaces: 4});
        return JSON.parse(json)
    }).catch(error => {
        console.log(error)
        if (error.response.status == 500)
            return;
        if (error.response.status == 400)
            return;
    })
}
export default parserRSS;
