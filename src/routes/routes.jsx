import { HeaderOnly } from '@/layouts'

import HomePage from '@pages/HomePage/HomePage'
import FollowingPage from '@pages/FollowingPage/FollowingPage'
import Profile from '@pages/Profile/Profile'
import Upload from '@pages/Upload/Upload'
import Search from '@/pages/Search/Search'

//Public Routes
const publicRoutes = [
  { path: '/', component: HomePage},
  { path: '/following', component: FollowingPage},
  { path: '/profile', component: Profile},
  { path: '/upload', component: Upload, layout: HeaderOnly},
  { path: '/search', component: Search, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes}