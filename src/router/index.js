import { createRouter, createWebHistory } from 'vue-router'

function lazyLoad(view)
{
  return () => import(`../views/${view}.vue`)
}

const routes = [

  {
    path: '/',
    name: 'home',
    component: lazyLoad('HomeView')
  },

  {
    path: '/about',
    name: 'about',
    component: lazyLoad('AboutView')
  },

  {
    path: '/contact',
    name: 'contact',
    component: lazyLoad('ContactView')
  },

  {
    path: '/cart',
    name: 'cart',
    component: lazyLoad('CartView')
  },

  {
    path: '/profile',
    name: 'profile',
    component: lazyLoad('ProfileView')
  },

  {
    path: '/books',
    name: 'books',
    component: lazyLoad('BooksView')
  },

  {
    path: '/book',
    name: 'book',
    component: lazyLoad('BookView')
  },

  {
    path: '/search',
    name: 'search',
    component: lazyLoad('SearchView')
  },

  {
    path: '/addBook',
    name: 'addBook',
    component: lazyLoad('AddBookView')
  },

  {
    path: '/addAdmin',
    name: 'addAdmin',
    component: lazyLoad('AddAdminView')
  },

  {
    path: '/addAddress',
    name: 'addAddress',
    component: lazyLoad('AddAddressView')
  },

  {
    path: '/addCreditCard',
    name: 'addCreditCard',
    component: lazyLoad('AddCreditCardView')
  },

  {
    path: '/deleteAccount',
    name: 'deleteAccount',
    component: lazyLoad('DeleteAccountView')
  },

  {
    path: '/myInfo',
    name: 'myInfo',
    component: lazyLoad('myInfoView')
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: lazyLoad('CheckoutView')
  },
 
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: lazyLoad('NotFoundView')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router