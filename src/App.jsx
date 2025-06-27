import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';

import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";
import TopicsList from './components/TopicsList';
import TopicsPage from "./components/TopicsPage";
import NavBar from './components/NavBar';


function App() {

  return (
  <BrowserRouter>
   <UserProvider>
    <h1 className="page-title">Deborah NC News - Articles</h1>
    <NavBar />
    <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/topics/:specific_topic" element={<TopicsPage />} />
    </Routes>
    </UserProvider>
  </BrowserRouter>

)
}

export default App
