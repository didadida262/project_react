import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoginComponent from '../pages/Login'
import LayoutComponent from '../pages/Layout'
import HomeComponent from '../pages/Home'
import NotfoundComponent from '../pages/Notfound'
import AuthRoute from '../components/AuthRoute'
import LabelComponent from '../pages/Label'
import TadpolesComponent from '../pages/Tadpoles'
import React from 'react'
import TankComponent from '../pages/Tank'

// 路由懒加载
const About = lazy(() => import('../pages/About'))


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
        path: 'home',
        element: <HomeComponent/>
      },
      {
        path: 'about',
        element: <Suspense fallback={'加载中'}><About/></Suspense>
      },
      {
        path: '/tadpoles',
        element: <TadpolesComponent />
      },
      {
        path: '/tank',
        element: <TankComponent />
      }
    ]
  },
  {
    path: 'label',
    element: <LabelComponent />
  },
  {
    path: '/login',
    element: <LoginComponent/>
  },
  {
    path: '/label',
    element: <LabelComponent/>
  },
  {
    path: '*',
    element: <NotfoundComponent />
  }
])

export default router