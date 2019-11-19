<template>
<div class="tab-Control-size">
	<div class="hy-col-1" style="border-right: 1px solid rgb(238, 238, 238);">
			<div class="tab-Control-sty">
				<router-link to='/UserBasicMessage'>
					<span>基本信息</span>
				</router-link>
			</div>
		<div class="tab-Control-sty">
			<router-link to='/UserArticle'>
				<span>我发表的</span>
			</router-link>
		</div>
		<div class="tab-Control-sty">
				<router-link to='/UserArticle'>
					<span>修改信息</span>
				</router-link>
		</div>		
		<div class="tab-Control-sty">
			<router-link to='/UserArticle'>
				<span>退出登录</span>
			</router-link>
		</div>
	</div>
	
	
	<div class="hy-col-10">
		<div class="hy-user-container-big">
				<router-view/>
		</div>
	</div>
	

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
	.tab-Control-size{
		height: 100%;
		width: 100%;
		display: flex;
		
	}
	.tab-Control-sty{
		width: 100%;
		height: 55px;
		font-size: 18px;
		text-align: center;
		border-bottom: 1px solid rgb(238, 238, 238);
		padding: 10%;
	}
	span:hover{
		color: rgb(33, 33, 33);
	}
</style>
