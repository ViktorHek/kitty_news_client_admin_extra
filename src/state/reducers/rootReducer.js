import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLE_MESSAGE':
      return {
        ...state,
        createArticleMessage: action.payload,
        errorMessage: '',
      }
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload,
        createArticleMessage: '',
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
        auth: { message: 'You are logged in', status: true },
      }
    case 'SET_NEWS_FEED':
      return {
        ...state,
        newsFeed: action.payload,
        specificArticle: {},
      }
    case 'VIEW_ARTICLE':
      return {
        ...state,
        specificArticle: action.payload,
      }
    case 'ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload,
      }
    case 'OPEN_LOGIN_FORM':
      return {
        ...state,
        logInModalOpen: true,
      }
    case 'CLOSE_LOGIN_FORM':
      return {
        ...state,
        logInModalOpen: false,
      }
    default:
      return state
  }
}

export default rootReducer
