import { useState } from "react"

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        setIsLoading(true)
        const data = {name, email, subject, message}

        await fetch('/api/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>{
                if (res.status==200){
                    setName('')
                    setEmail('')
                    setSubject('')
                    setMessage('')
                }
                return res.json()
            })
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
        setIsLoading(false)
    }

    return (
        <section id="contact" className="odd">
            <div className="container">
                <div className="row">
                    <h2 className="text-center mb-4">Contact Me</h2>
                    <div className="col-lg-7 col-md-10 mx-auto">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="mb-2 col-md-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} value={name} />
                            </div>
                            <div className="mb-2 col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="mb-2 col-12">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input type="text" className="form-control" id="subject" onChange={(e)=>setSubject(e.target.value)} value={subject} />
                            </div>
                            <div className="mb-2 col-12">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows={5} onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                            </div>

                            <div className="col-12 mt-3">
                                {!isLoading ? <button type="submit" className="btn btn-success fs-5 text-white w-100">
                                    Kirim
                                </button>:
                                <button type="submit" className="btn btn-success fs-5 text-white w-100" disabled>
                                    <i className="fa fa-circle-notch"></i>
                                </button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
