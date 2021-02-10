import React from 'react'
import { useSelector } from 'react-redux'
import CreateArticleForm from './components/CreateArticleForm'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import ArticleIndex from './components/ArticleIndex'
import { Switch, Route } from 'react-router-dom'
import DisplayArticle from './components/DisplayArticle'

const App = () => {
  const currentUser = useSelector((state) => state.currentUser)
  return (
    <>
      <Header />
      {currentUser ? (
        <>
          <CreateArticleForm />
          <Switch>
            <Route 
              exact path="/" component={ArticleIndex}
            ></Route>
            <Route
              exact path="/articles/:id" component={DisplayArticle}
            ></Route>
          </Switch>
        </>
      ) : (
        <LoginForm />
      )}
    </>
  )
}

export default App
