<template>
	<div id="box1">
		<mt-header title="选酒">
		  <router-link to="/menu" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-search v-model="value"></mt-search>
		<div id="bg">
			<ul>
				<li><span></span><p>白酒</p></li>
				<li><span></span><p>葡萄酒</p></li>
				<li><span></span><p>洋酒</p></li>
				<li><span></span><p>整箱购</p></li>
				<li><span></span><p>老酒</p></li>
				<li><span></span><p>清仓特卖</p></li>
				<li><span></span><p>海外直采</p></li>
				<li><span></span><p>精美大坛</p></li>
				<li><span></span><p>红酒整箱</p></li>
				<li><span></span><p>值得买</p></li>
				<li><span></span><p>销量排行</p></li>
				<li><span></span><p>礼尚往来</p></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'这是分类',
				value:'会员福利日 自营每满400减30'
			}
		},
//		bg:[
//			{
//				p:白酒,
//				
//			}
//		]
		
	}
</script>

<style>
	.mint-header{
		z-index: 10;
	}
	.mint-search{
		height: 60px;
	}
	.mint-search-list{
		height: 60px;
	}
	#bg ul{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	#bg ul li{
		width: 33%;
		height: 80px;
		text-align: center;
	}
	#bg ul li span{
		display: inline-block;
		margin-left: 16px;
		width: 33%;
		height: 40px;
		background-image: url(../../assets/img/bg1.png);
	}
	#bg ul li p{
		text-align: center;
	}
	#bg ul li:nth-child(2) span{
		background-position: 166px 0px;
	}
	#bg ul li:nth-child(3) span{
		background-position: 332px 0px;
	}
	#bg ul li:nth-child(4) span{
		background-position: 0px -70px;
	}
	#bg ul li:nth-child(5) span{
		background-position: 166px -70px;
	}
	#bg ul li:nth-child(6) span{
		background-position: 332px -70px;
	}
	#bg ul li:nth-child(7) span{
		background-position: 0px -140px;
	}
	#bg ul li:nth-child(8) span{
		background-position: 166px -140px;
	}
	#bg ul li:nth-child(9) span{
		background-position: 332px -140px;
	}
	#bg ul li:nth-child(10) span{
		background-position: 0px -210px;
	}
	#bg ul li:nth-child(11) span{
		background-position: 166px -210px;
	}
	#bg ul li:nth-child(12) span{
		background-position: 332px -210px;
	}
</style>