import instance from "./request";
import Parser from 'rss-parser';

const parser = new Parser();
const parserRSS = async (path: string) => {
    const res = await instance.get(path);
    const rss = await parser.parseString(res.data)
    console.log("response:>>>>>>>", res)
    console.log("rss:>>>>>>>", rss)
}
export default parserRSS;
