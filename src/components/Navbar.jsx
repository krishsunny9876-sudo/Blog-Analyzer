import "../styles/main.css"
import "../styles/container.css"
import { FaBrain } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function BlogInput({ onAnalyze }) {

    return (
        <div className="navbar">
            <div className="back_bg">
            </div>
            <div style={{ zIndex: "2", display: "flex", width: "100%", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div className="front_bg">
                    <div className="icon_block"><FaBrain size={26} color="#ffffff" /></div>
                    <p className="font_1">TrueWrite <span className="highlighted">AI</span></p>
                </div>
                <div style={{ height: "30px", width: "400px", boxSizing: "border-box" }}>
                    <ul style={{ display: "flex", gap: "30px", fontWeight: "bold" }}>
                        <NavLink to={"/"} className={({ isActive }) =>
                            isActive ? "link2 actives" : "link2"
                        }><li style={{ cursor: "pointer" }}>Home</li></NavLink>
                        <NavLink to={"main"} className={({ isActive }) =>
                            isActive ? "link2 actives" : "link2"
                        }><li style={{ cursor: "pointer" }}>Analyzer</li></NavLink>
                        <NavLink to={"about"} className={({ isActive }) =>
                            isActive ? "link2 actives" : "link2"
                        }><li style={{ cursor: "pointer" }}>About</li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}