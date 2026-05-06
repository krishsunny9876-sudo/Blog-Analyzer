import { useState } from "react";
import "../styles/main.css"
import "../styles/container.css"

export default function BlogInput({ onAnalyze, isdisabled }) {

    const [text, setText] = useState("");

    return (
        <>
            <div className="card">
                <div className="headdiv headings">
                    <h3 >Enter Your Blog Content</h3>
                    <div className="straightLine">
                    </div>
                </div>

                <textarea className="textBar"
                    placeholder="Paste your blog here..."
                    onChange={(e) => { setText(e.target.value); }}
                    disabled={isdisabled} />

                <button className="button2"
                    onClick={() => {
                        onAnalyze(text);
                        document.querySelector('.textBar').value = '';
                        setText('')
                    }}>
                    Analyze Blog
                </button>
            </div>
        </>
    );
}