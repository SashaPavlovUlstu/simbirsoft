import { BrowserRouter } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/simbirsoft/">
    <StyleProvider layer>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </BrowserRouter>,
)
