
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './scss/index.module.scss'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <App />
    </Provider>


)
