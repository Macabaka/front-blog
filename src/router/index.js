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

Vue.use(VueRouter)

const routes = [{
			path: '/',
			component: Nav,
			children: [{
				path: '/',
				component: Index
			}]
		},
		{
			path: '/Sign',
			component: Nav,
			children: [{
				path: '/Sign',
				component: Sign
					}]},
			{
				path: '/User',
				component: Nav,
				children: [{
					path: '/User',
					component: User
						}],
						},
			{
				path: '/Article',
				component: Nav,
				children: [{
					path: '/Article',
					component: Article
						}],
						},
			{
				path: '/Collection',
				component: Nav,
				children: [{
					path: '/Collection',
					component: Collection
						}],
						}

		]

		const router = new VueRouter({
			routes
		})

		export default router
