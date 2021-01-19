import axios from 'axios'

const ArticlesService = {
  async index(dispatch) {
    try {
      const result = await axios.get('/articles')
      dispatch({
        type: 'SET_NEWS_FEED',
        payload: result.data.articles,
      })
    } catch (error) {
      dispatch({
        type: 'ERROR_MESSAGE',
        payload: 'MEOW, something went wrong!',
      })
    }
  },

  async show(articleId, dispatch) {
    let headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))

    try {
      const response = await axios.get(`/articles/${articleId}`, {
        headers: headers,
      })
      dispatch({
        type: 'VIEW_ARTICLE',
        payload: response.data.article,
      })
    } catch (error) {
      dispatch({
        type: 'ERROR_MESSAGE',
        payload: error.response.data.message,
      })
    }
  },
}

export { ArticlesService }
