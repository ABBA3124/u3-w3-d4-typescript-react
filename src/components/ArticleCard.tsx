import React from 'react'
import { Result } from '../types'
import { Col } from 'react-bootstrap'

interface ArticleCardProps {
  Result: Result
}

const ArticleCard: React.FC<ArticleCardProps> = ({ Result }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={3} xxl={3}>
    <div className="card border-2 border-light h-100">
      <img src={Result.image_url} alt={Result.title} style={{height: "300px"}} className="rounded-5 m-3 img-fluid" />
      <div className="card-body">
        <h5 className="card-title mb-3">{Result.title}</h5>
        <hr />
        <p className="card-text">{Result.summary}</p>
        <hr />
        <p className="card-text"><small className="text-muted">Published on {new Date(Result.published_at).toLocaleDateString()}</small></p>
      </div>
    </div>
    </Col>
  )
}

export default ArticleCard

