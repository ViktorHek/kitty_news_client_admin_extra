import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ArticlesService } from "../modules/ArticlesService";
import { Container, Grid, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

const DisplayArticle = () => {
  const dispatch = useDispatch()
  const { specificArticle, errorMessage } = useSelector(
    (state) => state
  )
  const { id } = useParams()

  useEffect(() => {
    ArticlesService.show(id, dispatch)
  }, [id, dispatch])

  return (
    <>
      <Grid data-cy="article-display" centered>
        <Grid.Column width={13}>
          <h2 data-cy="title">{specificArticle.title}</h2>
          <Image src={specificArticle.image} size="small" />
          <h3 data-cy="lead">{specificArticle.lead}</h3>
          <p data-cy="body">{specificArticle.body}</p>
        </Grid.Column>
      </Grid>

      {errorMessage && (
        <Container data-cy="error-article">
          <h1>{errorMessage}</h1>
        </Container>
      )}
    </>
  )
}

export default DisplayArticle