import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";


function App() {

  return (
  <BrowserRouter>
    <h1 className="page-title">Deborah NC News - Articles</h1>
    <div className="container">
    <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
    </Routes>
    </div>
  </BrowserRouter>

)
}

export default App
