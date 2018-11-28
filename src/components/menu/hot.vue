<template>
<div>
	<div id="header">
		<mt-header title="白酒">
		  <router-link to="/menu" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
	<div id="img1">
		<p><img src="../../assets/img/h1.jpg"/></p>
		<p>
			<img src="../../assets/img/h2.jpg"/>
			<img src="../../assets/img/h3.jpg"/>
		</p>
	</div>
	<div id="content1">
		<ol>
			<li v-for="(v,i) in wz"><router-link to="/details">{{v}}</router-link></li>
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
				wz:['茅台','五粮液','汾酒','泸州老窖','酱香','清香','浓香','查看全部'],
				list:[
					{
						src:require('../../assets/img/h4.jpg'),
						title:'43°茅台飞天500ml',
						par:'酒仙自营 贵州茅台 国货匠心 如有大量需要请联系',
						price:'￥989.00'
					},
					{
						src:require('../../assets/img/h5.jpg'),
						title:'53°贵州茅台集团 精品红习酒 整箱500ml*6瓶',
						par:'贵州习酒 酱香突出 醇香丰满 空杯留香',
						price:'￥398.00'
					},
					{
						src:require('../../assets/img/h6.jpg'),
						title:'53°红花郎十（10）500ml',
						par:'',
						price:'￥348.00'
					},
					{
						src:require('../../assets/img/h7.jpg'),
						title:'52°汾酒集团 汾酒原浆 清香型白酒475ml*6瓶',
						par:'汾酒精美礼盒，礼赠套请佳选',
						price:'￥388.00'
					},
					{
						src:require('../../assets/img/h8.jpg'),
						title:'53°国台 品鉴15 500ml',
						par:'',
						price:'￥1636.00'
					},
					{
						src:require('../../assets/img/h9.jpg'),
						title:'40°美国芝华士12年苏格兰威士忌500ml*4',
						par:'',
						price:'￥118.00'
					},
					{
						src:require('../../assets/img/h10.jpg'),
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