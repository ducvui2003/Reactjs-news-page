import {Col, Container, Row, Stack} from "react-bootstrap";
import "./footer.scss";

function FooterBottom() {
    return (
        <Container fluid={"xl"} className="my-3">
            <Row>
                <Col>
                    <Stack gap={3}>
                        <div className="fw-bold">Báo tiếng Việt nhiều người xem nhất</div>
                        <div>Thuộc Bộ Khoa học và Công nghệ</div>
                        <div>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</div>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <div> Tổng biên tập: Phạm Hiếu</div>
                        <div>
                            Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng,
                            Cầu Giấy, Hà Nội
                        </div>
                        <div>Điện thoại: 024 7300 8899 - máy lẻ 4500</div>
                    </Stack>
                </Col>
                <Col>
                    <div>© 1997-2024. Toàn bộ bản quyền thuộc VnExpress</div>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterBottom;
