import "../styles/main.css"
import { FaCopy } from "react-icons/fa";

export default function FixedOutput({ fixed }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(fixed ? fixed : "No data");
        console.log("Copied!");
    };

    return (
        <div className="card2 fixed-box">
            <h3>Fixed Content</h3>
            <hr className="hrTag" />
            <div className="fixedTextArea">
                <p style={{ lineHeight: "25px" }}>{fixed && fixed}</p>
                <button onClick={handleCopy}><FaCopy /> Copy</button>
            </div>
        </div>
    );
}