import { createBrowserRouter } from 'react-router-dom'
import LoginComponent from '../pages/Login'
import ContentComponent from '../pages/Content'
import LayoutComponent from '../pages/Layout'
import HomeComponent from '../pages/Home'
import AboutComponent from '../pages/About'
import NotfoundComponent from '../pages/Notfound'
import AuthRoute from '../components/AuthRoute'
const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><LayoutComponent/></AuthRoute>,
    children: [
      {
        index: true,
        element: <HomeComponent/>
      },
      {
        path: 'about',
        element: <AboutComponent/>
      },
    ]
  },
  {
    path: '/login',
    element: <LoginComponent/>
  },
  {
    path: '/content',
    element: <ContentComponent/>
  },
  {
    path: '*',
    element: <NotfoundComponent />
  }
])

export default router