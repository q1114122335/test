<template>
	<div id="box">
		<div  id="banner">
			<mt-swipe :auto="4000">
				<mt-swipe-item><img src="../../assets/img/a61.jpg"/></mt-swipe-item>
		  		<mt-swipe-item><img src="../../assets/img/a62.jpg"/></mt-swipe-item>
		  		<mt-swipe-item><img src="../../assets/img/a29.jpg"/></mt-swipe-item>
		  		<mt-swipe-item><img src="../../assets/img/a40.jpg"/></mt-swipe-item>
		  		<mt-swipe-item><img src="../../assets/img/a34.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>
		<div id="header">
			<span><img src="../../assets/img/bg.png" alt="" /></span>
			<mt-search v-model="value" id="mt"></mt-search>
		</div>
		<div id="content">
			<ol>
				<li><router-link to="/hot"><span><img src="../../assets/img/gan.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot1"><span><img src="../../assets/img/xie.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot"><span><img src="../../assets/img/1111.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot"><span><img src="../../assets/img/you.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot"><span><img src="../../assets/img/ni.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot"><span><img src="../../assets/img/kuang.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot"><span><img src="../../assets/img/huan.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot"><span><img src="../../assets/img/zai.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot"><span><img src="../../assets/img/xu.jpg" alt="" /></span></router-link></li>
				<li><router-link to="/hot"><span><img src="../../assets/img/qingcang.jpg" alt="" /></span></router-link></li>
			</ol>
		</div>
		<div id="img"><img src="../../assets/img/a14.jpg" alt="" /></div>
		<div id="tab">
			<img src="../../assets/img/a57.jpg" alt="" />
			<img src="../../assets/img/a64.jpg" alt="" />
		</div>
		<div id="img2">
			<img src="../../assets/img/a31.jpg" alt="" />
			<div class="inner-container">
			  <p class="text" v-for="(text, index) in list" :key="index">{{text}}</p>
			</div>
		</div>
		
		<div class="shangpin">
	    	<ul>
	    		<li v-for="(v,i) in txt">
	    			<img :src="v.src"/>
	    			<p>{{v.wz}}</p>
	    			<span>{{v.price}}</span>
	    		</li>
	    	</ul>
	  	</div>
	  	
	  	<div id="img3">
	  		<ul>
	  			<li v-for="(v,i) in pic"><img :src="v.src" alt="" /></li>
	  		</ul>
	  	</div>
	  	
	  	<div id="img4">
	  		<span class="s1"><img src="../../assets/img/a73.jpg"/></span>
	  		<span class="s2">
	  			<img src="../../assets/img/a74.png" alt="" />
	  			<img src="../../assets/img/a75.jpg" alt="" />
	  		</span>
	  	</div>
	  	<div id="img5">
	  		<p><img src="../../assets/img/a76.jpg"/></p>
	  		<p><img src="../../assets/img/a77.jpg"/></p>
	  		<p><img src="../../assets/img/a78.jpg"/></p>
	  	</div>
	  	<div id="img6">
	  		<ul>
	  			<li v-for="(v,i) in pic1"><img :src="v.src" alt="" /></li>
	  		</ul>
	  	</div>
	  	<div id="img7">
	  		<p><img src="../../assets/img/a84.jpg"/></p>
	  		<ul>
	  			<li>
	  				<img src="../../assets/img/a85.jpg"/>
	  				<img src="../../assets/img/a86.jpg"/>
	  			</li>
	  		</ul>
	  		<ol>
	  			<li>
	  				<img src="../../assets/img/a87.jpg"/>
	  				<img src="../../assets/img/a88.jpg"/>
	  				<img src="../../assets/img/a89.jpg"/>
	  			</li>
	  		</ol>
	  	</div>

	  	<div id="img8">
	  		<div class="d1"><img src="../../assets/img/a109.jpg"/></div>
	  		<div class="d2">
	  			<ul>
	  				<li class="l1"><img src="../../assets/img/a90.jpg"/></li>
	  				<li class="l2">
	  					<p><img src="../../assets/img/a91.jpg" alt="" /></p>
	  					<span>
	  						<img src="../../assets/img/a92.jpg" alt="" />
	  						<img src="../../assets/img/a93.jpg" alt="" />
	  					</span>
	  				</li>
	  			</ul>
	  			<ol>
	  				<li><img src="../../assets/img/a94.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a95.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a96.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a97.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a98.jpg" alt="" /></li>
	  			</ol>
	  		</div>
	  	</div>
	  	<div id="img8">
	  		<div class="d1"><img src="../../assets/img/a99.jpg"/></div>
	  		<div class="d2">
	  			<ul>
	  				<li class="l1"><img src="../../assets/img/a100.jpg"/></li>
	  				<li class="l2">
	  					<p><img src="../../assets/img/a101.jpg" alt="" /></p>
	  					<span>
	  						<img src="../../assets/img/a102.jpg" alt="" />
	  						<img src="../../assets/img/a103.jpg" alt="" />
	  					</span>
	  				</li>
	  			</ul>
	  			<ol>
	  				<li><img src="../../assets/img/a104.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a105.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a106.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a107.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a108.jpg" alt="" /></li>
	  			</ol>
	  		</div>
	  	</div>
	  	<div id="img8">
	  		<div class="d1"><img src="../../assets/img/a110.jpg"/></div>
	  		<div class="d2">
	  			<ul>
	  				<li class="l1"><img src="../../assets/img/a111.jpg"/></li>
	  				<li class="l2">
	  					<p><img src="../../assets/img/a112.jpg" alt="" /></p>
	  					<span>
	  						<img src="../../assets/img/a113.jpg" alt="" />
	  						<img src="../../assets/img/a114.jpg" alt="" />
	  					</span>
	  				</li>
	  			</ul>
	  			<ol>
	  				<li><img src="../../assets/img/a115.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a116.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a117.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a118.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a119.jpg" alt="" /></li>
	  			</ol>
	  		</div>
	  	</div>
	  	<div id="img8">
	  		<div class="d1"><img src="../../assets/img/a120.jpg"/></div>
	  		<div class="d2">
	  			<ul>
	  				<li class="l1"><img src="../../assets/img/a121.jpg"/></li>
	  				<li class="l2">
	  					<p><img src="../../assets/img/a122.jpg" alt="" /></p>
	  					<span>
	  						<img src="../../assets/img/a123.jpg" alt="" />
	  						<img src="../../assets/img/a124.jpg" alt="" />
	  					</span>
	  				</li>
	  			</ul>
	  			<ol>
	  				<li><img src="../../assets/img/a125.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a126.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a127.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a128.jpg" alt="" /></li>
	  				<li><img src="../../assets/img/a129.jpg" alt="" /></li>
	  			</ol>
	  		</div>
	  	</div>
	  	<div id="img9">
	  		<p><img src="../../assets/img/a130.jpg" alt="" /></p>
	  		<ul>
	  			<li v-for="(v,i) in pic2">
	  				<img :src="v.src" alt="" />
	  			</li>
	  		</ul>
	  	</div>
	  	<div id="img10">
	  		<ul>
	  			<li v-for="(v,i) in pic3">
	  				<b>{{v.p1}}</b><i>{{v.p2}}</i><u>{{v.p3}}</u>
	  				<img :src="v.src"/>
	  				<p>{{v.txt}}</p>
	  				<span>{{v.price}}</span>
	  			</li>
	  		</ul>
	  	</div>
	  	
	  	<div id="wz">
	  		<p>北京酒仙网科技有限公司版权所有</p>
	  		<p>北京市北京经济技术开发区经海五路58号院8幢4层</p>
	  		<p>400-6617-9999</p>
	  		<a href="#">关于我们</a>
	  	</div>
	  	<div class="kong"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:'',
				list:[
				'酒仙网线下实体火爆招商中','APP首单满100送100活动规则 点击查看!','酒仙网线下实体火爆招商中'
				],
				txt:[
					{
						src:require('../../assets/img/a67.jpg'),
						wz:'52°小糊涂250ml',
						price:'￥29.00'
					},
					{
						src:require('../../assets/img/a68.jpg'),
						wz:'澳大利亚奔富BIN2西拉马塔罗干红',
						price:'￥188.00'
					},
					{
						src:require('../../assets/img/a13.jpg'),
						wz:'52°国窖1573 500ml',
						price:'￥840.00'
					},
					{
						src:require('../../assets/img/a69.jpg'),
						wz:'法国原瓶进口红酒',
						price:'￥59.00'
					},
					{
						src:require('../../assets/img/a72.jpg'),
						wz:'52°酒鬼原浆酒500ml',
						price:'￥199.00'
					},
				],
				pic:[
					{
						src:require('../../assets/img/a8.jpg'),
					},
					{
						src:require('../../assets/img/a11.jpg'),
					},
					{
						src:require('../../assets/img/a28.jpg'),
					},
					{
						src:require('../../assets/img/a30.jpg'),
					},
					{
						src:require('../../assets/img/a39.jpg'),
					},
					{
						src:require('../../assets/img/a41.jpg'),
					},
					{
						src:require('../../assets/img/a44.jpg'),
					},
				],
				pic1:[
					{
						src:require('../../assets/img/a79.jpg'),
					},
					{
						src:require('../../assets/img/a80.jpg'),
					},
					{
						src:require('../../assets/img/a81.jpg'),
					},
					{
						src:require('../../assets/img/a82.jpg'),
					},
					{
						src:require('../../assets/img/a83.jpg'),
					},
				],
				pic2:[
					{
						src:require('../../assets/img/a131.jpg'),
					},
					{
						src:require('../../assets/img/a132.jpg'),
					},
					{
						src:require('../../assets/img/a133.jpg'),
					},
					{
						src:require('../../assets/img/a134.jpg'),
					},
					{
						src:require('../../assets/img/a135.jpg'),
					},
					{
						src:require('../../assets/img/a136.jpg'),
					},
					{
						src:require('../../assets/img/a137.jpg'),
					},
					{
						src:require('../../assets/img/a138.jpg'),
					},
				],
				pic3:[
					{
						src:require('../../assets/img/a139.jpg'),
						p1:'掌上秒拍',
						p2:'满减',
						p3:'金币优惠',
						txt:'【下单立减120】53°贵州茅台酒厂',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/a140.jpg'),
						p1:'限时抢购',
						p2:'满减',
						p3:'金币优惠',
						txt:'智利整箱红酒 克拉克干红葡萄酒750ml',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/a141.jpg'),
						p1:'限时抢购',
						p2:'',
						p3:'',
						txt:'53°茅台飞天500ml',
						price:'￥1888.00'
					},
					{
						src:require('../../assets/img/a142.jpg'),
						p1:'掌上秒拍',
						p2:'满减',
						p3:'金币优惠',
						txt:'52°酒鬼原浆酒500ml',
						price:'￥239.00'
					},
					{
						src:require('../../assets/img/a143.jpg'),
						p1:'限时抢购',
						p2:'满减',
						p3:'金币优惠',
						txt:'德国起泡酒侬芬堡荔枝起泡葡萄酒750ml',
						price:'￥299.00'
					},
					{
						src:require('../../assets/img/a144.jpg'),
						p1:'',
						p2:'',
						p3:'',
						txt:'【酒厂直营】42°扳倒井红韵香480ml*6瓶',
						price:'￥159.00'
					},
					{
						src:require('../../assets/img/a145.jpg'),
						p1:'',
						p2:'',
						p3:'限时抢购',
						txt:'53°茅台飞天400ml',
						price:'￥1739.00'
					},
					{
						src:require('../../assets/img/a146.jpg'),
						p1:'限时抢购',
						p2:'满减',
						p3:'金币优惠',
						txt:'法国茉莉花产区干红葡萄酒礼盒整箱套装750ml*6',
						price:'￥499.00'
					},
					{
						src:require('../../assets/img/a147.jpg'),
						p1:'限时抢购',
						p2:'多买多赠',
						p3:'',
						txt:'43°茅台飞天500ml',
						price:'￥969.00'
					},
					{
						src:require('../../assets/img/a173.png'),
						p1:'',
						p2:'',
						p3:'',
						txt:'52°水井坊臻酿八号500ml',
						price:'￥389.00'
					},
					{
						src:require('../../assets/img/a148.jpg'),
						p1:'限时抢购',
						p2:'',
						p3:'',
						txt:'53°茅台飞天375ml',
						price:'￥1499.00'
					},
					{
						src:require('../../assets/img/a150.jpg'),
						p1:'限时抢购',
						p2:'满减',
						p3:'金币优惠',
						txt:'澳洲红酒澳大利亚丁戈树赤霞珠干红葡萄酒750ml',
						price:'￥139.00'
					},
					{
						src:require('../../assets/img/a149.jpg'),
						p1:'限时抢购',
						p2:'',
						p3:'',
						txt:'53°贵州茅台酒50ml*2瓶',
						price:'￥159.00'
					},
					{
						src:require('../../assets/img/a152.jpg'),
						p1:'限时抢购',
						p2:'单品加价购',
						p3:'',
						txt:'53°茅台王子500ml（6瓶装）',
						price:'￥948.00'
					},
					{
						src:require('../../assets/img/a153.jpg'),
						p1:'限时抢购',
						p2:'阶梯满送',
						p3:'',
						txt:'40°轩尼诗VSOP干邑白兰地700ml',
						price:'￥429.00'
					},
					{
						src:require('../../assets/img/a154.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'',
						txt:'拉斐庄园珍藏干红葡萄酒红酒礼盒木盒盒装750ml',
						price:'￥99.00'
					},
					{
						src:require('../../assets/img/a155.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°五粮液50ml',
						price:'￥83.00'
					},
					{
						src:require('../../assets/img/a156.jpg'),
						p1:'限时抢购',
						p2:'',
						p3:'金币优惠',
						txt:'西班牙安徒生·小天鹅干红葡萄酒750ml',
						price:'￥99.00'
					},
					{
						src:require('../../assets/img/a170.jpg'),
						p1:'限时抢购',
						p2:'买赠',
						p3:'',
						txt:'53°茅台迎宾款500ml*6瓶 整箱装',
						price:'￥438.00'
					},
					{
						src:require('../../assets/img/a158.jpg'),
						p1:'金币优惠',
						p2:'买赠',
						p3:'',
						txt:'52°剑南春500ml',
						price:'￥439.00'
					},
					{
						src:require('../../assets/img/a159.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a160.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a161.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a162.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a163.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a164.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a165.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a166.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a167.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a168.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a169.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a170.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a172.jpg'),
						p1:'掌上秒拍',
						p2:'',
						p3:'金币优惠',
						txt:'52°泸州老窖三人炫1000ml*4',
						price:'￥512.00'
					},
					{
						src:require('../../assets/img/a153.jpg'),
						p1:'限时抢购',
						p2:'阶梯满送',
						p3:'',
						txt:'40°轩尼诗VSOP干邑白兰地700ml',
						price:'￥429.00'
					},
					{
						src:require('../../assets/img/a139.jpg'),
						p1:'掌上秒拍',
						p2:'满减',
						p3:'金币优惠',
						txt:'【下单立减120】53°贵州茅台酒厂',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/a140.jpg'),
						p1:'限时抢购',
						p2:'满减',
						p3:'金币优惠',
						txt:'智利整箱红酒 克拉克干红葡萄酒750ml',
						price:'￥199.00'
					},
					{
						src:require('../../assets/img/a141.jpg'),
						p1:'限时抢购',
						p2:'',
						p3:'',
						txt:'53°茅台飞天500ml',
						price:'￥1888.00'
					},
					{
						src:require('../../assets/img/a142.jpg'),
						p1:'掌上秒拍',
						p2:'满减',
						p3:'金币优惠',
						txt:'52°酒鬼原浆酒500ml',
						price:'￥239.00'
					},
					{
						src:require('../../assets/img/a143.jpg'),
						p1:'限时抢购',
						p2:'满减',
						p3:'金币优惠',
						txt:'德国起泡酒侬芬堡荔枝起泡葡萄酒750ml',
						price:'￥299.00'
					},
					{
						src:require('../../assets/img/a144.jpg'),
						p1:'',
						p2:'',
						p3:'',
						txt:'【酒厂直营】42°扳倒井红韵香480ml*6瓶',
						price:'￥159.00'
					},
					{
						src:require('../../assets/img/a145.jpg'),
						p1:'',
						p2:'',
						p3:'限时抢购',
						txt:'53°茅台飞天400ml',
						price:'￥1739.00'
					},
					{
						src:require('../../assets/img/a146.jpg'),
						p1:'限时抢购',
						p2:'满减',
						p3:'金币优惠',
						txt:'法国茉莉花产区干红葡萄酒礼盒整箱套装750ml*6',
						price:'￥499.00'
					},
					{
						src:require('../../assets/img/a147.jpg'),
						p1:'限时抢购',
						p2:'多买多赠',
						p3:'',
						txt:'43°茅台飞天500ml',
						price:'￥969.00'
					},
					{
						src:require('../../assets/img/a144.jpg'),
						p1:'',
						p2:'',
						p3:'',
						txt:'【酒厂直营】42°扳倒井红韵香480ml*6瓶',
						price:'￥159.00'
					},
					
				],
			}
		}
	}
</script>

<style>
	#wz a{
		text-decoration: none;
		color: deepskyblue;
	}
	#wz p{
		color: #999999;
		margin-bottom: 5px;
		font-size: 14px;
	}
	#box #header{
		overflow: hidden;
		height: 2px;
	}
	#box #header span{
		display: inline-block;
		width: 20%;
		height: 38px;
		position: fixed;
		left: 12px;
		top: 12px;
		overflow: hidden;
		border: 1px solid #ccc;
		border-radius: 5px;
		z-index: 10;
	}
	#box #header .mint-search{
		width: 70%;
		position: fixed;
		height: 38px;
		right: 5px;
		top: 5px;
		z-index: 10;
	}
	#box #header .mint-searchbar{
		background-color: transparent;
	}
	#box #header .mint-searchbar-inner{
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	#box .mint-swipe-items-wrap{
		padding-bottom: 50%;
		height: 0px;
	}
	#box #banner{
		border-bottom: skyblue;
	}
	#box #banner img{
		width:100%;
	}
	#content ol{
		display: flex;
		width: 100%;
		margin-left: 5px;
		flex-wrap: wrap;
		z-index: 10;
	}
	#content ol li{
		text-align: center;
		width: 20%;
	}
	#content ol li span{
		display: inline-block;
		width: 100%;
		height: 100%;
		position: relative;
		margin: -5px;
	}
	#content ol li span img{
		width: 100%;
	}
	#img{
		width: 100%;
		height: 100%;
		margin: -4px;
		margin-left: 0px;
	}
	#img img{
		width: 100%;
		height: 100%;
	}
	#tab{
		display: flex;
		width: 100%;
		margin: -4px;
		margin-left: 0px;
		float: left;
		}
	#tab img{
		flex: 1;
		width: 50%;
		height: 50%;
		float: left;
	}
.inner-container {
	width: 73%;
  /*position: absolute;
  top: 147px;
  left: 104px;*/
 float: left;
  height: 100%;
  overflow: hidden;
  margin-top: 10px;
}
.inner-container .text{
	animation: myMove2 4s linear infinite;
  	animation-fill-mode: forwards;
	height: 30px;
}
@keyframes myMove2 {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(-30px);
  }
  75% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(-60px);
  }
 }
 #img2{
 	width: 100%;
 	height: 40px;
 	overflow: hidden;
 	/*position: relative;*/
 	
 }
 #img2 img{
 	width: 25%;
 	float: left;
 	margin-top: 10px;
 }
 .shangpin ul{
 	width: 100%;
 	overflow: hidden;
 }
 .shangpin ul li{
 	width: 20%;
 	float: left;
 }
 .shangpin ul li img{
 	width: 90%;
 }
 .shangpin ul li p{
 	font-size: 14px;
 	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
 }
 .shangpin ul li span{
 	color: red;
 	font-size: 14px;
 }
 #img3 ul li,#img6 ul li{
 	width: 100%;
 }
 #img3 ul li img,#img6 ul li img{
 	width: 100%;
 }
 .kong{
 	height: 100px;
 }
 #img4{
 	width: 100%;
 }
 #img4 span{
 	display: inline-block;
 	width: 50%;
 	float: left;
 }
 #img4 span img{
 	width: 100%;
 }
 #img5{
 	width: 100%;
 	overflow: hidden;
 }
 #img5 p{
 	width: 33%;
 	float: left;
 }
 #img5 p img{
 	width: 100%;
 }
 #img7{
 	width: 100%;
 	overflow: hidden;
 }
 #img7 p{
 	margin-bottom: -6px;
 }
 #img7 p img{
 	width: 100%;
 }
 #img7 ul li img{
 	width: 50%;
 	float: left;
 }
 #img7 ol li img{
 	width: 33.3%;
 	float: left;
 }
 #img8 .d1{
 	width: 100%;
 }
 #img8 .d1 img{
 	width: 100%;
 }
 #img8 .d2{
 	width: 100%;
 	overflow: hidden;
 }
 #img8 .d2 ul .l1{
 	width: 40%;
 }
 #img8 .d2 ul .l1 img{
 	width: 100%;
 	float: left;
 }
 #img8 .d2 ul .l2 p{
 	width: 60%;
 	float: left;
 }
 #img8 .d2 ul .l2 p img{
 	width: 100%;
 }
 #img8 .d2 ul .l2 span{
 	display: inline-block;
 	width: 60%;
 	float: left;
 }
 #img8 .d2 ul .l2 span img{
 	width: 50%;
 	float: left;
 }
 #img8 .d2 ol{
 	width: 100%;
 	overflow: hidden;
 }
 #img8 .d2 ol li{
 	float: left;
 	width: 20%;
 }
 #img8 .d2 ol li img{
 	width: 100%;
 }
 #img9{
 	overflow: hidden;
 }
 #img9 p{
 	width: 100%;
 }
 #img9 p img{
 	width: 100%;
 }
 #img9 ul{
 	display: flex;
	width: 100%;
	flex-wrap: wrap;
 }
 #img9 ul li{
 	width: 50%;
 }
 #img9 ul li img{
 	width: 100%;
 }
 #img10{
 	width: 100%;
 	overflow: hidden;
 }
 #img10 ul{
 	display: flex;
 	flex-wrap: wrap;
 }
 #img10 ul li{
 	width: 48%;
 	height: 310px;
 	margin-left: 7px;
 	margin-bottom: 10px;
 }
 #img10 ul li b,i,u,span{
 	display: inline-block;
 	height: 21px;
 	float: left;
 }
 #img10 ul li b{
 	background-color: #ffa855;
 	color: #fff;
 	border-radius: 4px;
 	margin-left: 10px;
 }
 #img10 ul li i{
 	background-color: #c58cff;
 	color: #fff;
 	border-radius: 4px;
 	margin-left: 10px;
 	font-style: normal;
 }
 #img10 ul li u{
 	background-color: #ffa855;
 	color: #fff;
 	border-radius: 4px;
 	margin-left: 10px;
 	text-decoration: none;
 }
 #img10 ul li img{
 	width: 100%;
 }
 #img10 ul li p{
 	width: 100%;
 	text-align: left;
 	margin-left: 10px;
 	font-weight: 700;
 	padding: 5px;
 	box-sizing: border-box;
 }
 #img10 ul li span{
 	width: 100%;
 	text-align: left;
 	font-size: 18px;
 	margin-left: 10px;
 	color: #fd9292;
 	padding: 5px;
 	box-sizing: border-box;
 }
</style>