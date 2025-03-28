import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Bottom.css";

const Bottom = () => {
  return (
    <Footer>
      <div className="bottom-container">
        <div className="bottom-content">
          <FooterCopyright href="#" by="NikolaPavlov" year={2025} />
          <div className="bottom-links">
            <FooterIcon href="https://www.facebook.com/profile.php?id=100006469115978" target="_blank" icon={BsFacebook} />
            <FooterIcon href="https://www.instagram.com/13_kolio_12/" target="_blank" icon={BsInstagram} />
            <FooterIcon href="https://youtu.be/hCPtP3C1Gn0?si=FSdkUNWK2LAfuGxn&t=63" target="_blank" icon={BsTwitter} />
            <FooterIcon href="https://github.com/KolioDivaka" target="_blank" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Bottom;