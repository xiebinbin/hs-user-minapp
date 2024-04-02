import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import configStore from "./store";
import '@antmjs/vantui/lib/index.css';
import './app.scss'

const store = configStore();

function App({ children }: PropsWithChildren<any>) {
  return <Provider store={ store }>
    { children }
    </Provider>
}

export default App
