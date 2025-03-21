import "./ImgBox.css";

export default function ImgBox({ img, title }) {
    return (
        <div className="imgBox-border">
            <div className="imgBox">
            <img src={img} alt={title} />
            <h3>{title}</h3>

            </div>
        </div>
    );
}