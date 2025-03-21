import "./Hero.css";
import myPhoto from "../../assets/myPhoto.jpg";

export default function Hero() {
    return(
   <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content-container">
            <div className="hero-content">
                <p className="hero-section">Hey, I'm Nikola</p>
                <h1 className="hero-section-title">
                    <span className="hero-section-title-color">
                        Frontend Developer
                    </span>{" "}
                    <br />
                    based in Sofia, Bulgaria
                </h1>
                <p className="hero-section-text">
                    currently studying at TU Sofia
                </p>
                <div className="contact-button"> 
                   <button><a href="#contact">Contact me</a></button>
                </div>
            </div>
            <div className="hero-image">
                <img src={myPhoto} alt="Nikola" />
            </div>
           
        </div>
      </div>
    </section>
    );

}