// Components
import { Outlet } from 'react-router-dom'
// Css
import '../css/Root.css'

export default function Root() {
  return (
  <>
    <main>
      <Outlet />
    </main>
  </>
  )
}
