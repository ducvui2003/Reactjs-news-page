import CardItem from "./CardItem/CardItem";
import "./Intro.scss"

export default function Intro() {
    return (
        <>
            <div className="intro">
                <div className="intro__right">
                    <div className="intro__item">
                        <div className="item">
                            <div className="left__content">
                                <img
                                    src="https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg"/>
                            </div>
                            <div className="right__content">
                                <div className="title">
                                    <h3>
                                        Đại tướng Lương Cường làm Thường trực Ban Bí thư
                                    </h3>
                                </div>
                                <div className="des">
                                    <p>
                                        Ngày 16/5, Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam - đại tướng
                                        Lương
                                        Cường được Bộ Chính trị phân công làm Thường trực Ban Bí thư.
                                    </p>
                                </div>
                                <div className="detail"><a href="">Chi Tiết</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="intro__item">
                        <CardItem/>
                    </div>
                    <div className="intro__item">
                        <CardItem/>
                    </div>
                    <div className="intro__item">
                        <CardItem/>
                    </div>
                </div>
                <div className="intro__left">
                    <div className="intro__item">
                        <div className="item">
                            <div className="left__content">
                                <img
                                    src="https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg"/>
                            </div>
                            <div className="right__content">
                                <div className="title">
                                    <h3>
                                        Đại tướng Lương Cường làm Thường trực Ban Bí thư
                                    </h3>
                                </div>
                                <div className="des">
                                    <p>
                                        Ngày 16/5, Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam - đại tướng
                                        Lương
                                        Cường được Bộ Chính trị phân công làm Thường trực Ban Bí thư.
                                        Ngày 16/5, Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam - đại tướng
                                        Lương
                                        Cường được Bộ Chính trị phân công làm Thường trực Ban Bí thư.
                                        Ngày 16/5, Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam - đại tướng
                                        Lương
                                        Cường được Bộ Chính trị phân công làm Thường trực Ban Bí thư.
                                    </p>
                                </div>
                                <div className="detail"><a href="">Chi Tiết</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}