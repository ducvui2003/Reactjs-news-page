import {Col, Container, Row, Stack} from "react-bootstrap";
import Typography from "@mui/material/Typography";

function FooterBottom() {
    return (
        <Container fluid={"xl"} className="my-3">
            <Row>
                <Col>
                    <Stack gap={2}>
                        <Typography variant={"h6"} className="fw-bold">Báo tiếng Việt nhiều người xem nhất</Typography>
                        <Typography variant={"overline"} >Thuộc Bộ Khoa học và Công nghệ</Typography>
                        <Typography variant={"overline"}>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</Typography>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={2}>
                        <Typography variant={"overline"}> Tổng biên tập: Phạm Hiếu</Typography>
                        <Typography variant={"overline"}>
                            Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng,
                            Cầu Giấy, Hà Nội
                        </Typography>
                        <Typography variant={"overline"}>Điện thoại: 024 7300 8899 - máy lẻ 4500</Typography>
                    </Stack>
                </Col>
                <Col>
                    <Typography variant={"caption"}>© 1997-2024. Toàn bộ bản quyền thuộc VnExpress</Typography>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterBottom;
