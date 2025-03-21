import "./Skills.css";
import ImgBox from "./ImgBox/ImgBox";
import htmlLogo from "../../assets/html_logo.svg";
import cssLogo from "../../assets/css_logo.svg";
import reactLogo from "../../assets/react_logo.svg";
import pythonLogo from "../../assets/python_logo.svg";
import vsCodeLogo from "../../assets/vscode_logo.svg";
import vsLogo from "../../assets/vs_logo.svg";
import unityLogo from "../../assets/unity_logo.svg";

export default function Skills() {
    return (
        <div className="skills">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-container-boxes">
                    <ImgBox img={pythonLogo} title="Python" />
                    <ImgBox img={reactLogo} title="React" />
                    <ImgBox img={cssLogo} title="CSS" />
                    <ImgBox img={htmlLogo} title="HTML" /> 
                </div>
            </div>
            <div className="skills-container">
                <h1>Tools</h1>
                <div className="skills-container-boxes">
                    <ImgBox img={vsCodeLogo} title="VS Code" />
                    <ImgBox img={vsLogo} title="Visual Studio" />
                    <ImgBox img={unityLogo} title="Unity" />
                </div>
            </div>
        </div>
    );
}