import React, { useState, useEffect } from 'react'
import { Result } from '../types/index'
import ArticleCard from '../components/ArticleCard'
import { Row } from 'react-bootstrap'

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Result[]>([])

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then(response => response.json())
      .then(data => setArticles(data.results))
      .catch(error => console.error('Errore nella fetch:', error))
  }, [])

  return (
    <div className='bg-secondary'>
    <div className='m-5'>
        <h2 className='text-center mb-5 mt-3'>⬇️Tutti i nostri articoli !⬇️</h2>
        <Row className='row-gap-3'>
      {articles.map(result => (
        <ArticleCard key={result.id} Result={result} />
      ))}
      </Row>
    </div>
    </div>
  )
}

export default HomePage
