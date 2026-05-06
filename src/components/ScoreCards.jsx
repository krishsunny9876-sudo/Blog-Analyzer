import "../styles/main.css"
import "../styles/container.css"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function ScoreCards({ aiScore, plagiarismScore }) {

    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    //dhihd dihb hava hava he hava ja r uska pata de ek baar bata de 
    useEffect(() => {
        const animate = (target, setter) => {
            let count = 0;

            const interval = setInterval(() => {
                if (count <= target) {
                    setter(count);
                    count++;
                } else {
                    clearInterval(interval);
                }
            }, 30);

            return interval;
        };

        const interval1 = animate(plagiarismScore, setValue);
        const interval2 = animate(aiScore, setValue2);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };

    }, [plagiarismScore, aiScore]);

    return (
        <div className="card2 scores score_box">
            <div className="scoreCard">
                <h3>AI Score <FaChevronRight size={12} style={{ marginLeft: "5px", color: "rgba(64, 64, 64, 0.73)" }} /></h3>
                <CircularProgressbar className="progressBar" value={value2} text={`${value2}%`}
                    styles={{
                        path: {
                            stroke: "#f97316"
                        },
                        text: {
                            fill: "#f97316",
                            fontSize: "22px",
                            fontWeight: "bold"
                        }
                    }} />
            </div>
            <hr className="hrTag" style={{ margin: "20px 0px" }} />
            <div className="scoreCard">
                <h3>Plagiarism Score <FaChevronRight size={12} style={{ marginLeft: "5px", color: "rgba(64, 64, 64, 0.73)" }} /></h3>
                <CircularProgressbar className="progressBar" value={value} text={`${value}%`}
                    styles={{
                        path: {
                            stroke: "#3d9e00",
                            transition: "stroke-dashoffset 5s ease;"
                        },
                        text: {
                            fill: "#3d9e00",
                            fontSize: "22px",
                            fontWeight: "bold"
                        }
                    }} />
            </div>
        </div>
    );
}