import Slider from "react-slick";
import { useState } from "react";

import ModalImage from "./ModalImage";

export default function SliderPr(props) {
    const [image, setImage] = useState('');

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
        <>
            <Slider {...settings}>
                {props.projects.map((item, index)=>{
                    if(item.fork===false && item.name!=='JeremyJFN71'){
                        return (
                            <div key={index} className="p-2 text-center">
                                <div className="card odd p-2" style={{height: '350px'}}>
                                    {item.owner.login!=='JeremyJFN71' && <span className="px-2 py-0 text-success tag">
                                        <i className="fa-solid fa-user-group text-success"></i> Collab
                                    </span>}
                                    <img src={item.image} alt="" className="project-image" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setImage(item.image)} />
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

            <ModalImage image={image} />
        </>
    )
}
