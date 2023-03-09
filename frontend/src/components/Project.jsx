import { useEffect, useState } from "react"

import Loading from "./Loading";
import Error from "./Error";
import SliderPr from "./SliderPr";

export default function Project() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            await fetch('/api/projects')
                .then(res=>{
                    if(res.status===200){
                        return res.json()
                    } else {
                        return setIsError(true)
                    }
                })
                .then(data=>{
                    setProjects(data);
                    setIsLoading(false);
                })
                .catch(err=>{
                    setIsError(true);
                    setIsLoading(false);
                });
        }

        fetchData();
    }, [])

    let content;
    if (isLoading){
        content = <Loading />
    } else if(isError){
        content = <Error />
    } else{
        content = <SliderPr projects={projects}/>
    }

    return (
        <section id="project" className="even">
            <div className="container">
                <h2 className="text-center mb-5">Project</h2>

                {content}

            </div>
        </section>
    )
}
