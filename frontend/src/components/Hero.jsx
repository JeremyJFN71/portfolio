import background from '../assets/hero.jfif'

export default function Hero() {
    return (
        <div className="hero" style={{backgroundImage: `url(${background})`}} id="hero">
            <div className="yea">
                <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                    <h1>Ahmad Muhajir Syamlan</h1>
                </div>
            </div>
        </div>
    )
}