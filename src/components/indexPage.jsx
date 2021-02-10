import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Segment, Button } from 'semantic-ui-react'
import { ArticlesService } from '../modules/ArticlesService'
import { ArticlesCreation } from "../modules/ArticlesCreation";

const indexPage = () => {
  const dispatch = useDispatch()
  const [activeItem, setActiveItem] = useState('home')

  return (
    <Segment attached='bottom' inverted style={{ marginTop: '-0.05em' }}>
      <Menu inverted borderless>
        <Menu.Item
          name='home'
          data-cy='header-news'
          active={activeItem === 'home'}
          as={Link}
          to='/'
          onClick={() => {
            setActiveItem('home')
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          name='create_articles'
          data-cy='create_article_header'
          active={activeItem === 'create_article'}
          onClick={() => {
            setActiveItem('create_article')
          }}
          as={Link}
          to='/create'
        >
          Create Article
        </Menu.Item>
        <Menu.Item
          name='index-header'
          data-cy='index-header'
          active={activeItem === 'index'}
          onClick={() => {
            setActiveItem('index')
          }}
          as={Link}
          to='/articles'
        >
          Index
        </Menu.Item>
      </Menu>
    </Segment>
  )
}

export default indexPage
