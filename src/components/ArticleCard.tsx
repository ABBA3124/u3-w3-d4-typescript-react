import React from 'react'
import { Result } from '../types'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

interface ArticleCardProps {
  result: Result
}

const ArticleCard: React.FC<ArticleCardProps> = ({ result }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/article/${result.id}`)
  }



  return (
    
    <Col xs={12} sm={6} md={6} lg={4} xl={3} xxl={3} onClick={handleNavigate} style={{ cursor: 'pointer' }}>
    <div className="card border-2 border-light h-100">
      <img src={result.image_url} alt={result.title} style={{height: "300px"}} className="rounded-5 m-3 img-fluid" />
      <div className="card-body">
        <h5 className="card-title mb-3">{result.title}</h5>
        <hr />
        <p className="card-text">{result.summary}</p>
        <hr />
        <p className="card-text"><small className="text-muted">Published on {new Date(result.published_at).toLocaleDateString()}</small></p>
      </div>
    </div>
    </Col>
  )
}

export default ArticleCard

