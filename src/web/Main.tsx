import type { ReactElement } from 'react'
import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './HomePage'
import './styles.css'

// const allTrainers = importTrainers()

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/pokerousel/',
      element: (
        <span>The router thinks I am accessing the /pokerousel/ route</span>
      ),
    },
  ],
  // { basename: 'pokerousel' },
)

export default function Main(): ReactElement {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
