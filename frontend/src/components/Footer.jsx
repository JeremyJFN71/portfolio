export default function Footer() {
    return (
        <footer className="p-5 mt-5 text-white" style={{background: 'rgb(1, 28, 34)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="/" className="text-decoration-none">
                            <img src="{% static 'img/logo.png' %}" alt="" width="30px" />
                        </a>
                        <span><sup><i className="fa-regular fa-copyright"></i></sup>Copyright 2022 | Created and Developed by <a href="https://www.linkedin.com/in/ahmad-muhajir-syamlan/" className="text-decoration-none fw-bold text-white">Ahmad Muhajir</a></span>
                    </div>

                    <div className="col-md-6 text-end">
                        <a href="https://www.linkedin.com/in/ahmad-muhajir-syamlan/" rel="noreferrer" className="text-decoration-none" target="_blank">
                            <i className="fa-brands fa-linkedin me-3" style={{fontSize: '30px', color: '#fff'}}></i>
                        </a>
                        <a href="https://www.instagram.com/amuhajirs/" rel="noreferrer" className="text-decoration-none" target="_blank">
                            <i className="fa-brands fa-instagram me-3" style={{fontSize: '30px', color: '#fff'}}></i>
                        </a>
                        <a href="https://github.com/JeremyJFN71" rel="noreferrer" className="text-decoration-none" target="_blank">
                            <i className="fa-brands fa-github me-3" style={{fontSize: '30px', color: '#fff'}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
