// Components
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
// Css
import '../css/Root.css'

export default function Root() {
  return (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
  )
}
