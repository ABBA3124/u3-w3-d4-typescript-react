import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Result } from "../types"

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const [article, setArticle] = useState<Result | null>(null)

  useEffect(() => {
    // check per id è presente
    if (!id) return

    const url = `https://api.spaceflightnewsapi.net/v4/articles/${id}`

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(" ABBA non è ok !!!!")
        }
        return response.json()
      })
      .then((data) => {
        setArticle(data)
        console.log(data)
      })
      .catch((error) => console.error("Errore nel recupero dell'articolo:", error))
  }, [id])

  if (!article) return <div>Caricamento in corso...</div>

  const linkArticle = () => {
    if (article && article.url) {
      window.open(article.url,'_blank')
    }
  }
  

  return (
    <div className="text-center">
      <h1>{article.news_site}</h1>
      <h2>{article.title}</h2>
      <hr />
      <img onClick={linkArticle} style={{ cursor: "pointer" }} className="w-50 rounded-5" src={article.image_url} alt={article.title} />
      <p className="fs-4 w-50 ms-auto me-auto text-center mt-2">{article.summary}</p>
      <p className="btn btn-info" onClick={linkArticle}>Clicca qui per visualizzare l'articolo completo</p>
      <hr />
      <div className="me-5">
        <p className="text-end ">Pubblicato il: {new Date(article.published_at).toLocaleDateString()}</p>
        <p className="text-end ">Ultimo Aggiornamento il: {new Date(article.updated_at).toLocaleDateString()}</p>
        <hr />
        <p className="text-end ">Id Articolo: {article.id}</p>
      </div>
    </div>
  )
}

export default ArticlePage
