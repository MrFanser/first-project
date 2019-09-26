import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Search from '@/components/Search'
import Not from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      	{
	      path: '/home',
	      name: 'Home',
	      component: Home
	    },
	    {
	    	path:'/about',
	    	name:'About',
	    	component:About
	    }
      ],
      redirect:'/home'
    },
    {
    	path: '/search',
    	name: 'Search',
    	component:Search
    },
    {
    	path:'*',
    	name: 'Not',
    	component:Not
    }
  ]
})
