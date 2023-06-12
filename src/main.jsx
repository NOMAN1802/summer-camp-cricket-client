import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Pages/providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient();
const notify = () => toast('Here is your toast')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <button onClick={notify}>Make a toast</button>
        <Toaster/>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
