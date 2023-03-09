import { useState, useEffect } from "react"

export default function Loading() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            if(count===3){
                setCount(0)
            } else{
                setCount(count+1)
            }
        }, 300)
    }, [count])

    return (
        <div className="d-flex justify-content-center align-items-center gap-2">
            <div>
                <i className="fa fa-circle-notch fs-4"></i>
            </div>
            <h3 className="fw-normal">Loading {'.'.repeat(count)}</h3>
        </div>
    )
}
