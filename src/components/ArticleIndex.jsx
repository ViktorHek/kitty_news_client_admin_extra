import React, { useEffect } from 'react'
import { ArticlesService } from '../modules/ArticlesService'
import ArticleCard from './ArticleCard'
import { Item, Container } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

const ArticleIndex = () => {
  const dispatch = useDispatch()
  const { newsFeed } = useSelector((state) => state)
  const fetchNews = async () => {
    debugger
    let articleList = await ArticlesService.index()
    dispatch({ type: 'SET_NEWS_FEED', payload: articleList })
  }

  useEffect(() => {
    fetchNews()
  }, [])

  let articleIndex
  articleIndex = (
    <Item.Group vertical>
      {newsFeed.map((article) => {
        return <ArticleCard article={{ ...article }} />
      })}
    </Item.Group>
  )

  return (
    <>
      {newsFeed.length ? (
        <ul data-cy="article-index">{articleIndex}</ul>
      ) : (
        <Container data-cy="empty-index">
          <h1>Sorry, there's nothing to see here yet!</h1>
        </Container>
      )}
    </>
  )
}

export default ArticleIndex
