import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'
import './index.css'

import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'

const store = setupStore

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <StyleProvider layer>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </StyleProvider>
    </BrowserRouter>
  </Provider>,
)
