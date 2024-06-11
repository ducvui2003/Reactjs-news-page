import {Button, Card} from "react-bootstrap";
import {News} from "../../features/internationalNews/internationalNews";

interface CardItemProps extends News {
    titleClassName?: string;
    desClassName?: string;
}

export default function CardItem({imgLink, title, titleClassName, shortDes, desClassName}: CardItemProps) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={imgLink}/>
            <Card.Body>
                <Card.Title className={titleClassName ? titleClassName.split(' ').join(' ') : ''}>{title}</Card.Title>
                <Card.Text className={desClassName ? desClassName.split(' ').join(' ') : ''}>
                    {shortDes}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
