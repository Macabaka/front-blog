<template>
	<div>
		<div class="nav">
			<ul class="">
				<router-link to="/" class="li-sty " >主页</router-link>
				<router-link to="/User" class="li-sty">用户</router-link>
				<router-link to="/Article" class="li-sty">专题</router-link>
				<router-link to="/UserDetail" class="li-sty">社区</router-link>
				<router-link to="/Sign" class="li-sty" v-if="!judgelogin">登录</router-link>
				<router-link to="/UserDetail" class="li-sty" v-if="judgelogin">个人中心</router-link>
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



<style scoped>
	@import url("../assets/css/basic.css");
	@import url("../assets/css/style.css");
	.li-sty{
		margin-left: 12%;
		text-decoration: none;
		font-size: 22px;
	}
	.nav{
		height:60px;
		border-bottom: 1px solid rgb(245, 245, 245);
		padding-top: 1%;
	}
		
</style>
