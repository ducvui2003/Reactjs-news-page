import {Button, Card} from "react-bootstrap";

export default function CardItem() {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}