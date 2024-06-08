const LINES_TO_SHOW = 2
const useStyles = makeStyles({
    ellipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": LINES_TO_SHOW,
        "-webkit-box-orient": "vertical"
    },
    ellipsisLine: {
        "-webkit-line-clamp": LINES_TO_SHOW,
    }
});