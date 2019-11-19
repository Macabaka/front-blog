import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Collection from '@/views/Collection.vue'
import CollectionDetail from '@/views/CollectionDetail.vue'
import Article from '@/views/Article.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import User from '@/views/User.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserFans from '@/views/UserFans.vue'
import UserFollows from '@/views/UserFollows.vue'
import Sign from '@/views/Sign.vue'
import UserBasicMessage from '@/views/UserBasicMessage.vue'
import UserArticle from '@/views/UserArticle.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Nav,
		children:[{
			path: '/',
			component: Article
		}]
	},
	{
		path: '/Sign',
		component: Sign
	},
	{
		path: '/UserDetail',
		component: Nav,
		children:[{
			path: '/',
			component: UserDetail,
			children:[
				{
				path:'/UserBasicMessage',
				component:UserBasicMessage
				},
				{
				path:'/UserArticle',
				component:UserArticle
				},]
		}]	
	},
	
	{
		path: '/Article',
		component: Nav
	},
	
	{
		path: '/User',
		component: Nav,
		children: [
			{
				path: '/User',
				component: User
			}
		],
	},
	

	

]

const router = new VueRouter({
	routes
})

export default router
