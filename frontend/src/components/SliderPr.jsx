import { useEffect, useState } from "react"
import Slider from "react-slick";

export default function SliderPr(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className="">
            {props.projects.map((item, index)=>{
                if(item.fork===false && item.name!=='JeremyJFN71'){
                    return (
                        <div key={index} className="p-2 text-center">
                            <div className="card odd p-2">
                                {item.owner.login!=='JeremyJFN71' && <span className="px-2 py-0" style={{position: 'absolute', borderRadius: '10px', top: '15px', left: '15px', background: 'rgba(255,255,255,0.2)'}}>
                                    <i className="fa-solid fa-user-group text-success"></i> Collab
                                </span>}
                                <img src="https://dummyimage.com/1280x720/000/fff" alt="" />
                                <h5 className="my-3 fw-bold">{item.name}</h5>
                                <p className="mb-3">{item.description}</p>
                                <a href={item.html_url} className="btn btn-success mt-auto" target="_blank" rel="noreferrer">See Detail</a>
                            </div>
                        </div>
                    )
                } else {
                    return ''
                }
            })}
        </Slider>
    )
}
