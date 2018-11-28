import vueRouter from 'vue-router'
import menu from '../../components/index/menu.vue'
import fenlei from '../../components/index/fenlei.vue'
import shopping from '../../components/index/shopping.vue'
import my from '../../components/index/my.vue'
import hot from '../../components/menu/hot.vue'
import hot1 from '../../components/menu/hot1.vue'
import details from '../../components/menu/details.vue'
export default new vueRouter({
	routes:[
		{
			path:'/menu',
			component:menu
		},
		{
			path:'/fenlei',component:fenlei
		},
		{
			path:'/shopping',component:shopping
		},
		{
			path:'/my',component:my
		},
		{
			path:'/hot',component:hot
		},
		{
			path:'/hot1',component:hot1
		},
		{
			path:'/details',component:details
		}
	]
})
