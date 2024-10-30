import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import { fetchArticles, createArticle } from "../services/articleService"
import "./App.css"

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const [navVisible, setNavVisible] = useState(true) // New state for nav visibility
  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  function toggleNav() {
    setNavVisible(!navVisible) // Toggles the visibility of the Nav
  }

  return (
    <div className="App">
      <header>
        {user && <button onClick={toggleNav}>{navVisible ? "Hide" : "Show"} Articles</button>} {/* Toggle button */}
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>
 
      <div className="main-content">
        {user && navVisible && <Nav articles={articles} setArticle={setArticle} />}
        
        <div className="Article">
          {!user ? (
            ""
          ) : writing ? (
            <ArticleEntry addArticle={addArticle} />
          ) : (
            <Article article={article} />
          )}
        </div>
      </div>

    </div>
  )
}
