import "../styles/main.css"
import ScoreCards from "./ScoreCards";
import IssuesViewer from "./IssuesViewer";
import FixedOutput from "./FixedOutput";

export default function BlogInput({ aiScore, plagiarismScore, issues, fixed }) {

    return (
        <>
            <div className="card">
                <div className="headdiv">
                    <h3>Analyse Results</h3>
                    <div className="straightLine">
                    </div>
                </div>
                <div className="containers">
                    <ScoreCards
                        aiScore={aiScore}
                        plagiarismScore={plagiarismScore}
                    />
                    <IssuesViewer issues={issues} />
                    <FixedOutput fixed={fixed} />
                </div>
            </div>
        </>
    );
}