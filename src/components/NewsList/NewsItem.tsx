import { Card, Col, Row } from "react-bootstrap";
import { News } from "../../types/news.type";
export default NewsItem;
function NewsItem({ title, thumbnail, description }: News) {
  return (
    <Card className="mb-3">
      <Row noGutters>
        <Col md={4}>
          <Card.Img className="object-fit-cover" src={thumbnail} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title className="h1">{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
