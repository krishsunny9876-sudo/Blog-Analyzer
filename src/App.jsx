import { useState, useEffect, useContext } from "react"
import BlogInput from "./components/BlogInput"
import Analyse from "./components/Analyse"
import ComparisonView from "./components/ComparisonView"
import Navbar from "./components/Navbar"
import Loadings from "./components/loading"
import { analyzeBlog } from "./api"
import "./styles/main.css"
import { UserContext } from "./RouterConnect"

export default function App() {

  const [data, setData] = useState(null)
  const [originalData, setOriginalData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false);

  const handleAnalyze = async (text) => {
    if (!text || text.trim() == '') { return }
    setLoading(true)
    setOriginalData(text.trim())
    const result = await analyzeBlog(text.trim())
    setData(result)
    setLoading(false)
    setDataLoaded(true)
  }

  const userContext = useContext(UserContext);
  useEffect(() => {
    userContext.setIsFooterabsolute(!(dataLoaded));
  }, [dataLoaded])

  return (
    <div className="container">
      <div style={{ color: "rgba(255, 0, 0, 0)" }}>
        <h1>hjbs</h1>
      </div>
      <BlogInput onAnalyze={handleAnalyze} isdisabled={loading} />

      {loading && <Loadings over={true} />}

      {data && (
        <>
          <Analyse aiScore={data.aiScore}
            plagiarismScore={data.plagiarismScore}
            issues={data.issues}
            fixed={data.fixedContent} />
          <ComparisonView
            original={originalData}
            improved={data.fixedContent}
          />
        </>
      )}
      <div style={{ color: "rgba(255, 0, 0, 0)" }}>
        <h1>hjbs</h1>
      </div>
    </div>
  )
}