import React, { useState, useEffect } from 'react'
import { Result } from '../types/index'
import ArticleCard from '../components/ArticleCard'

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Result[]>([])

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then(response => response.json())
      .then(data => setArticles(data.results))
      .catch(error => console.error('Errore nella fetch:', error))
  }, [])

  return (
    <div>
        <h1>prova homepage si vede?</h1>
      {articles.map(result => (
        <ArticleCard key={result.id} Result={result} />
      ))}
    </div>
  )
}

export default HomePage
