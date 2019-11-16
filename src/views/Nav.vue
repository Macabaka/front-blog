<template>
	<div>
		<div class="nav">
			<ul class="hy-margin-10">
				<router-link to="/" class="li-sty " >主页</router-link>
				<router-link to="/ColleCtion" class="li-sty">专题</router-link>
				<router-link to="/Article" class="li-sty">文章</router-link>
				<router-link to="/User" class="li-sty">用户</router-link>
				<router-link to="/Sign" class="li-sty">登录</router-link>
			</ul>
		</div>
		<router-view class="container"/>
	</div>
	
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		created(){
			
		},
		computed:{
			
		}
	}
</script>

<style>
	@import url("../assets/css/basic.css");
	@import url("../assets/css/style.css");
	.li-sty{
		margin-left: 12%;
		text-decoration: none;
		font-size: 20px;
	}
	.nav{
		height: 50px;
		border-bottom: 1px solid rgb(245, 245, 245);
	}
</style>
