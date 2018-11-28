<template>
<div>
	<div id="header">
		<mt-header title="葡萄酒">
		  <router-link to="/menu" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
	<div id="img1">
		<p><img src="../../assets/img/h31.jpg"/></p>
		<p>
			<img src="../../assets/img/h32.jpg"/>
			<img src="../../assets/img/h33.jpg"/>
		</p>
	</div>
	<div id="content1">
		<ol>
			<li v-for="(v,i) in wz"><router-link to="/hot">{{v}}</router-link></li>
		</ol>
	</div>
	<div id="list">
		<ol>
			<li v-for="(v,i) in list">
				<img :src="v.src" alt="" />
				<p>{{v.title}}</p>
				<span>{{v.par}}</span>
				<b>{{v.price}}</b>
			</li>
		</ol>
	</div>
</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'这是hot',
				wz:['法国','澳大利亚','西班牙','智利','拉斐','奔富','张裕','查看全部'],
				list:[
					{
						src:require('../../assets/img/h33.jpg'),
						title:'澳洲红酒天鹅庄家族经典西拉干红葡萄酒黑色单支礼盒',
						par:'十几年如一日，精心酿造',
						price:'￥198.00'
					},
					{
						src:require('../../assets/img/h34.jpg'),
						title:'澳大利亚红酒奔富寇兰山赤霞珠西拉红葡萄酒750ml',
						par:'橡木桶陈酿 扑鼻而来的圣诞蛋糕及布丁的香气',
						price:'￥99.00'
					},
					{
						src:require('../../assets/img/h35.jpg'),
						title:'西班牙红酒西班牙德古斯特干红葡萄酒',
						par:'双支皮礼盒 酒具四件套',
						price:'￥99.00'
					},
					{
						src:require('../../assets/img/h36.jpg'),
						title:'澳洲整箱红酒澳大利亚奔富赤霞珠红葡萄酒750ml',
						par:'奔富洛神混酿款，口感更丰富，热销爆款',
						price:'￥238.00'
					},
					{
						src:require('../../assets/img/h37.jpg'),
						title:'法国整箱红酒法国原瓶进口葛雷奥利干红葡萄酒750ml',
						par:'爆款热销，高性价比套装',
						price:'￥258.00'
					},
					{
						src:require('../../assets/img/h38.jpg'),
						title:'西班牙整箱红酒原瓶进口莫拉斯城堡干红葡萄酒750ml*6',
						par:'热销爆款，补货归来',
						price:'￥118.00'
					},
					{
						src:require('../../assets/img/h39.jpg'),
						title:'法国原瓶原味进口红酒 干红葡萄酒750ml（6瓶装）',
						par:'法国AOC波尔多法定产区',
						price:'￥149.00'
					},
					{
						src:require('../../assets/img/h11.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h12.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h13.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h14.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h15.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h16.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h17.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h19.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h21.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h22.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h23.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h24.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h25.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h26.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h27.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h28.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h29.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/h30.jpg'),
						title:'52°酒鬼原浆酒500ml',
						par:'经典酒鬼酒，人生馥郁香',
						price:'￥199.00'
					},
				]
			}
		}
		
	}
</script>

<style>
	#header{
		margin-bottom: 10px;
	}
	#header .mint-header{
		background-color: #de4943;
	}
	#img1{
		margin: auto;
		width: 95%;
		height: 100%;
		overflow: hidden;
	}
	#img1 p{
		width: 50%;
		height: 200px;
		float: left;
	}
	#img1 p:nth-child(1) img{
		width: 100%;
		height: 100%;
	}
	#img1 p:nth-child(2) img{
		width: 100%;
		height: 50%;
	}
	#content1 ol{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		z-index: 10;
	}
	#content1 ol li{
		text-align: center;
		height: 30px;
		margin: 9px;
		width: 18%;
		line-height: 30px;
		border: 1px solid #ccc;
	}
	#content1 ol li a{
		color: #7d7d7d;
		text-decoration: none;
	}
	#list{
		width: 100%;
	}
	#list ol li{
		width: 100%;
		margin-top: 10px;
		overflow: hidden;
	}
	#list ol li img{
		width: 40%;
		float: left;
		margin-right: 15px;
	}
	#list ol li p{
		float: left;
		width: 50%;
		font-size: 12px;
		margin-top: 10px;
		text-align: left;
	}
	#list ol li span{
		display: inline-block;
		float: left;
		width: 50%;
		font-size: 14px;
		margin-top: 20px;
		color: orange;
		text-align: left;
	}
	#list ol li b{
		display: inline-block;
		float: left;
		width: 50%;
		font-size: 16px;
		margin-top: 20px;
		text-align: left;
		color: red;
	}
</style>