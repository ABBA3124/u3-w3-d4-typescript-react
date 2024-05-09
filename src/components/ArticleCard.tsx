import React from 'react'
import { Result } from '../types'

interface ArticleCardProps {
  Result: Result
}

const ArticleCard: React.FC<ArticleCardProps> = ({ Result }) => {
  return (
    <div className="card">
        <h5 className="card-title">{Result.title}</h5>
      <img src={Result.image_url} alt={Result.title} className="card-img-top w-25 rounded-5" />
      <div className="card-body">
        <p className="card-text">{Result.summary}</p>
        <p className="card-text"><small className="text-muted">Published on {new Date(Result.published_at).toLocaleDateString()}</small></p>
      </div>
    </div>
  )
}

export default ArticleCard

