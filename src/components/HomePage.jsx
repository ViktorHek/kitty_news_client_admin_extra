import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArticleIndex from './ArticleIndex'
import DisplayArticle from './DisplayArticle'
import CreateArticleForm from './CreateArticleForm'

const HomePage = () => {
  return (
    <>
      <h1 data-cy='homepage-greeting'>Hello and Welcome to the admin page for Kitty News</h1>
      <CreateArticleForm />
      <Switch>
        <Route exact path="/" component={ArticleIndex}></Route>
        <Route exact path="/articles/:id" component={DisplayArticle}></Route>
      </Switch>
    </>
  )
}

export default HomePage
