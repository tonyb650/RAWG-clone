// react
import React from 'react'
import ReactDOM from 'react-dom/client'
// libraries
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// imports
import './index.css'
import theme from './theme.ts'
import router from './routes.tsx'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <RouterProvider router={router}/>
        <ReactQueryDevtools/>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)


