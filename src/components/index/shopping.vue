<template>
	<div>
		<mt-header title="购物车">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<p>自营商品实付满100元免运费，偏远地区满500免运费</p>
		<div class="d">
			<span><img src="../../assets/img/kong.png"/></span>
			<p>购物车还是空的<br /><i>快去逛逛吧</i></p>
			<buttom>促销活动</buttom>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>