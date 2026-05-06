import { useRef } from "react";
import "../styles/main.css"
import { FaCopy } from "react-icons/fa";

export default function FixedOutput({ fixed }) {
    const fixedRef = useRef();
    const handleCopy = () => {
        fixedRef.current?.select();
        navigator.clipboard.writeText(fixed ? fixed : "");
        console.log("Copied!");
    };

    return (
        <div className="card2 fixed-box">
            <h3>Fixed Content</h3>
            <hr className="hrTag" />
            <div className="fixedTextArea">
                <textarea
                    type="text"
                    style={{ lineHeight: "25px", border: "none", outline: "none", resize: "none" }}
                    ref={fixedRef}
                    value={fixed && fixed}
                    readOnly
                />
                <button
                    onClick={handleCopy}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <FaCopy style={{ marginRight: "5px" }} />
                    Copy
                </button>
            </div>
        </div>
    );
}