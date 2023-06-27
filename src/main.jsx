import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider>
  <React.StrictMode>
      <Header />
  </React.StrictMode>
</ChakraProvider>,
)
