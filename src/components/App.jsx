import appStore from '../utils/appStore'
import Body from './Body'
import { Provider } from 'react-redux' 
import DemoProduct from './DemoProduct'
import DataTableUse from './DataTableUse'

function App() {

  return (
    <Provider store={appStore}>
      {/* <Body /> */}
      {/* <DemoProduct /> */}
      <DataTableUse/>
    </Provider>
  
  )
}

export default App
