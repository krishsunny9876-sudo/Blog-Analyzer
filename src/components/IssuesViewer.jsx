import "../styles/main.css"
import { FaChevronRight } from "react-icons/fa";

export default function IssuesViewer({ issues }) {

  return (
    <div className="card2 issue-box">

      <h3>Issues Found <FaChevronRight size={12} style={{ marginLeft: "5px", color: "rgba(64, 64, 64, 0.73)" }} /></h3>
      <hr className="hrTag" />
      {issues && issues.map((issue, i) => (
        <div key={i} className="issue">
          {issue.text}
        </div>
      ))}

    </div>
  );
}