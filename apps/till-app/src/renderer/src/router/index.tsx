import { createHashRouter } from 'react-router-dom'

import { AppLayout } from '../layouts/AppLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Sales from '../pages/Sales'
import Products from '../pages/Products'
import Customers from '../pages/Customers'
import Inventory from '../pages/Inventory'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'sales',
        element: <Sales />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'customers',
        element: <Customers />
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'reports',
        element: <Reports />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
])
