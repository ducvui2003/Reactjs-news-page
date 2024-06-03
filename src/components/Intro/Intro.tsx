import "./Intro.scss";
import "../../assets/sass/utils.scss";
import CardItem from "./CardItem/CardItem";
import {useEffect, useState} from "react";
import {getNewsByCategory} from "../../services/newsService";
import {Category} from "../../constraints/category";
import {News} from "../../types/news.type";
import {Link} from "react-router-dom";

export default function
    Intro() {
    const [news, setNews] = useState<News[]>([]);
    useEffect(() => {
        getNewsByCategory(Category.HOME).then((res) => setNews(res));
    }, []);

    return (
        <>
            <div className="intro">
                <div className="intro__right">
                    {news[0] && (
                        <div className="intro__item">
                            <div className="item">
                                <div className="left__content">
                                    <img src={news[0].thumbnail || ''} alt={news[0].title || 'No Title'}/>
                                </div>
                                <div className="right__content">
                                    <div className="title">
                                        <h3>{news[0].title || 'No Title'}</h3>
                                    </div>
                                    <div className="des">
                                        <p className="line-clamp">{news[0].description || 'No Description'}</p>
                                    </div>
                                    <div className="detail">
                                        <Link to={news[0].link || '#'}>Chi Tiết</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {news.slice(1, 4).map((item: News) => (
                        <div className="intro__item" key={item.id}>
                            <CardItem
                                imgLink={item.thumbnail || ''}
                                title={item.title || 'No Title'}
                                titleClassName={'line-clamp-2'}
                                shortDes={item.description || 'No Description'}
                                desClassName={'line-clamp'}
                            />
                        </div>
                    ))}

                </div>
                <div className="intro__left">
                    {news[4] && (
                        <div className="intro__item">
                            <div className="item">
                                <div className="left__content">
                                    <img src={news[4].thumbnail || ''} alt={news[4].title || 'No Title'}/>
                                </div>
                                <div className="right__content">
                                    <div className="title">
                                        <h3>{news[4].title || 'No Title'}</h3>
                                    </div>
                                    <div className="des">
                                        <p>{news[4].description || 'No Description'}</p>
                                    </div>
                                    <div className="detail">
                                        <Link to={news[4].link || '#'}>Chi Tiết</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}