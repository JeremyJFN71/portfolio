import { useEffect, useState } from "react"
import Slider from "react-slick";

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            await fetch('/api/projects')
                .then(res=>res.json())
                .then(data=>{
                    setProjects(data);
                });
            }
            
            fetchData();
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="project" className="even">
            <div className="container">
                <h2 className="text-center mb-5">Project</h2>

                <Slider {...settings} className="">
                    {projects.map((item, index)=>{
                            if(item.private===false && item.fork===false){
                                return (
                                    <div key={index} className="p-2 text-center">
                                        <div className="card odd p-2" style={{minHeight: '380px'}}>
                                            {item.owner.login!=='JeremyJFN71' && <span className="px-2 py-0" style={{position: 'absolute', borderRadius: '10px', top: '15px', left: '15px', background: 'rgba(255,255,255,0.2)'}}>
                                                <i class="fa-solid fa-user-group text-success"></i> Collab
                                            </span>}
                                            <img src="https://dummyimage.com/600x400/000/fff" alt="" style={{width: '100%'}} />
                                            <h5 className="my-3 fw-bold">{item.name}</h5>
                                            <p className="mb-3">{item.description}</p>
                                            <a href={item.html_url} className="btn btn-success mt-auto" target="_blank" rel="noreferrer">See Detail</a>
                                        </div>
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })}
                </Slider>

            </div>
        </section>
    )
}
