import store from '../utils/store'
import Body from './Body'
import { Provider } from 'react-redux' 

function App() {

  return (
    <Provider store={store}>
      <Body />
    </Provider>
  
  )
}

export default App
