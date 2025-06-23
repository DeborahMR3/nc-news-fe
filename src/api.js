import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticlesCard from "./ArticlesCard";


export function getArticles() {
  return fetch("https://deborah-nc-news.onrender.com/api/articles")
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to fetch articles list",
        });
      }
      return res.json();
    });
}
