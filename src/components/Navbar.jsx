import "../styles/main.css"
import "../styles/container.css"
import { FaBrain } from "react-icons/fa";

export default function BlogInput({ onAnalyze }) {

    return (
        <div className="navbar">
            <div className="back_bg">
            </div>
            <div className="front_bg">
                <div className="icon_block"><FaBrain size={26} color="#ffffff" /></div>
                <p className="font_1">TrueWrite <span className="highlighted">AI</span></p>
            </div>
        </div>
    );
}