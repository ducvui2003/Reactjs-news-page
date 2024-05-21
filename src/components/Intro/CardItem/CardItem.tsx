import {Button, Card} from "react-bootstrap";
import {News} from "../../../features/internationalNews/internationalNews";



export default function CardItem({imgLink, title, shortDes}:News) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={imgLink}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {shortDes}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}