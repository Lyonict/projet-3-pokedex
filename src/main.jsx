// React import
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
// Routes
import Root from './routes/root.jsx'
import Home from './routes/Home.jsx'
import PokemonPage from './routes/PokemonPage.jsx'
// Css
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokedexPage from './routes/PokedexPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/pokemon/:pokemonId",
        element: <PokemonPage />
      },
      {
        path: "/pokedex",
        element: <PokedexPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
