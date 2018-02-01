import Frontpage    from './components/Frontpage'
import Profile      from './components/profile'
import Singlepost   from './components/postShow'
import Newpost      from './components/newPost'

const routes = [
  {
    path: '/',
    component: Frontpage,
    exact: true
  },
  {
    path: '/posts/:id',
    component: Singlepost,
    exact: true
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/newpost',
    component: Newpost
  }
];

export default routes;
