import { useEffect, useState } from "react"

import Loading from "../components/Loading";
import Error from "../components/Error";
import SliderPr from "../components/SliderPr";

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
                .catch(()=>{
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
                <h1 className="text-center mb-5">Project</h1>

                {content}

            </div>
        </section>
    )
}
