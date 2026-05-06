import "../styles/main.css"
import { FaChevronRight } from "react-icons/fa";

export default function ComparisonView({ original, improved }) {

    return (
        <>
            <div className="headdiv headings" style={{ marginLeft: "25px" }}>
                <h3 className="font-bold">Original vs Improved Content</h3>
                <div className="straightLine">
                </div>
            </div>

            <div className="comparison card">
                <div className="comparison_card">
                    <h3 className="compareHead">Original Content</h3>
                    <p className="compareParagraph">{original && original}</p>
                </div>

                <div className="comparison_card">
                    <h3 className="compareHead">Improved Content</h3>
                    <p className="compareParagraph">{improved && improved}</p>
                </div>
                <div className="compareRightArrow">
                    <FaChevronRight size={20} style={{ color: "black", opacity: ".4" }} />
                </div>
            </div>
        </>
    );
}