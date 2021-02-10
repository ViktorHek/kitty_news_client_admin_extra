import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ArticlesService } from "../modules/ArticlesService";
import { Container, Grid, Image, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

const DisplayArticle = (article) => {
  const dispatch = useDispatch()
  const { specificArticle, errorMessage, newsFeed } = useSelector(
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
      <Button data-cy="article-back-button" 
        // onClick={() => ArticlesService.index(dispatch)}
        key={article}
        as={NavLink}
        to={'/articles'}
      >
        Back
      </Button>
    </>
  )
}

export default DisplayArticle