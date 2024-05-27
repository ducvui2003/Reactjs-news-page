import React from "react";
import {Image} from "react-bootstrap";
import image from "../../assets/image/404.png"

const Page404 = () => {
    return <div className="bg-body-tertiary osition-relative">
        <div className="position-absolute top-50 start-50 translate-middle w-75 h-75">
            <Image src={image} className="w-100 mh-100"/>
        </div>
    </div>;
};

export default Page404;
