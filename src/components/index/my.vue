<template>
	<div>
		<div id="header1">
			<mt-header title="用户登录">
			  <router-link to="/menu" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div id="my1">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">选项一</mt-tab-item>
			  <mt-tab-item id="2">选项二</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <div class="a">
			    	<i></i><input type="text"  placeholder="用户名/邮箱/手机号" class="inp1"/><br />
			    	<i></i><input type="text" placeholder="密码"/><br />
			    	<input type="text" placeholder="请输入验证码" @focus="createCode()" class="inp"><br />
			    	<span class="sp"></span>
			    	<p>{{msg}}</p>
			    	<div class="an">立即登录</div>
			    </div>
			    <div class="b">
			    	<p><router-link to="my">免费注册</router-link></p>
			    	<p><router-link to="my">找回密码</router-link></p>
			    </div>
			    <div class='c'>
			    	<i></i>
			    	<u></u>
			    </div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <input type="text" placeholder="请输入手机号，新用户将自动注册"/>
			    <input type="text" placeholder="请输入验证码"/>
			    <input type="text" placeholder="请输入效验码" class="inp2"/><span class="sp2">获取验证码</span>
			    <div class="an1">立即登录</div>
			    <div class="b">
			    	<p><router-link to="my">免费注册</router-link></p>
			    	<p><router-link to="my">找回密码</router-link></p>
			    </div>
			    <div class='c'>
			    	<i></i>
			    	<u></u>
			    </div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default{
		
		data(){
			return{
				msg:'',
				selected:'1',
			}
		},
		methods:{
			createCode(){
			    var code = "";    
			     var codeLength = 4; 
			     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
			                 'S','T','U','V','W','X','Y','Z'); 
			     for(var i = 0; i < codeLength; i++) {
			          
			           var index = Math.floor(Math.random()*36);  
			           code += random[index];  
			    		 }   
			     this.msg= code; 
			}
		},
//		mounted(){
//			$('.inp').blur(function(){
//				if($('.int').html()!=this.msg){
//					$('span').html('验证码不一致')
//				}else{
//					$('span').html('验证码一致')
//				}
//			})
//
////			$('#header').click(function(){
////				alert('1121')
////			})
//		}
			

	}
</script>

<style>
	#header1 .mint-header{
		background-color: #de4b45;
	}
	input{
		width: 80%;
		height: 40px;
		margin-top: 20px;
		border: 1px solid;
	}
	.an{
		width: 80%;
		height: 40px;
		line-height: 40px;
		background-color: #de4b45;
		color: #fff;
		margin-top: 20px;
		margin-left: 10%;
		border-radius: 4px;
	}
	.b{
		margin-top: 10px;
		padding: 30px;
		box-sizing: border-box;
	}
	.b p:nth-child(1){
		float: left;
	}
	.b p:nth-child(2){
		float: right;
	}
	.c i{
		display: inline-block;
		width: 20%;
		height: 75px;
		margin-right: 30px;
		background-image: url(../../assets/img/login.png);
		background-position: 257px -82px;
	}
	.c u{
		display: inline-block;
		width: 20%;
		height: 75px;
		background-image: url(../../assets/img/login.png);
		background-position: 177px -82px;
	}
	.mint-tab-container-item{
		overflow: hidden;
	}
	.inp2{
		width: 40%;
		float: left;
		margin-left: 36px;
	}
	.sp2{
		display: block;
		margin-top: 20px;
		width: 30%;
		height: 40px;
		line-height: 40px;
		background-color: #de4b45;
		color: #fff;
		float: right;
		margin-right: 36px;
	}
	div.an1{
		width: 80%;
		height: 40px;
		line-height: 40px;
		background-color: #de4b45;
		color: #fff;
		margin-top: 83px;
		margin-left: 10%;
		border-radius: 4px;
	}
</style>