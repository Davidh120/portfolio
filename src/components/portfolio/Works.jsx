import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { projectsData } from './Data'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export const Works = () => {
    const [show, setShow] = useState(0);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches);

    const setShowMore = (id) => {
        setShow(id);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const listener = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, []);

    return (
        <Swiper className="portfolio-container container mySwiper"
            cssMode={!isMobile}
            navigation={{
                prevEl: isMobile ? null : ".portfolio-button-prev",
                nextEl: isMobile ? null : ".portfolio-button-next",
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true}}
            mousewheel={!isMobile}
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={{
                576: {
                    slidesPerView: 1,
                    spaceBetween: 50
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 50
                }
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}>
            {projectsData.map((item) => {
                return (
                    <SwiperSlide className="portfolio-card" key={item.id}>
                        <div className="flip">
                            <div className={isMobile ? "facing portfolio-img" : "front portfolio-img"}>
                                <img src={item.image} alt={item.title} loading="lazy"/>
                            </div>
                            <div className="button-info">
                                <span className="more-button" onClick={() => setShowMore(item.id)}>
                                    View More
                                    <i className="uil uil-comment-info more-button-icon"></i>
                                </span>
                            </div>
                            <div className={isMobile ? (show === item.id ? "behind show-more" : "behind show-less") : "back"}>
                                <div className="info">
                                    <i className="uil uil-times more-close-icon" onClick={() => setShowMore(0)}></i>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="portfolio-title">{item.title}</h3>
                        {item.page
                            ?
                            <div className="buttons">
                                <a href={item.demo} className="portfolio-button" target="_blank">
                                    Page <i className="uil uil-window portfolio-button-icon"></i>
                                </a>
                                <a href={item.code} className="portfolio-button" target="_blank">
                                    Code <i className="uil uil-code-branch portfolio-button-icon code"></i>
                                </a>
                            </div>
                            :
                            <div className="demo-content">
                                <a href={item.code} className="portfolio-button" target="_blank">
                                    Code <i className="uil uil-window portfolio-button-icon"></i>
                                </a>
                            </div>
                        }
                    </SwiperSlide>
                )
            })}
            {isMobile ? (
                <></>
            ) : (
                <><div className="portfolio-button-prev">
                    {<i className="uil uil-angle-left"></i>}
                </div>
                    <div className="portfolio-button-next">
                        {<i className="uil uil-angle-right"></i>}
                    </div></>
            )}
        </Swiper>
    )
}
