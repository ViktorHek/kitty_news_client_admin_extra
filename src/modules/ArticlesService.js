import axios from 'axios'

const ArticlesService = {
  async index() {
    try {
      const response = await axios.get('/articles')
      return response.data.articles
    } catch (error) {
      console.log(error)
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
