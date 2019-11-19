<template>
	<div class="hy-container">
		<div class="hy-col-1">
		</div>
		<div class="hy-col-10">
			<div class="hy-col-user-row">
				<div class="hy-clo-user" v-for="(user,index) in userlist" :key="index">
						<img class="hy-col-user-pic" :src="user.avatar" alt="">
						<img class="hy-col-user-smallpic"  :src="user.avatar" alt="">
						<h3 class="hy-col-user-nickname ">{{user.nickname}}</h3>
				</div>
				
			</div>
		</div>
		
		<div class="hy-col-1">
		</div>
		
	</div>

</template>

<script>
	export default{
		data(){
			return{
				userlist:[]
			}
		},
		created(){
			this.axios.get('http://localhost:8080/sign-in').then(userres =>{
				console.log(userres.data.data)
				this.userlist = userres.data.data;
			})
			
		},
		computed:{
			
		}
	}
</script>

<style >
	@import url("../assets/css/basic.css");
	@import url("../assets/css/style.css");
</style>
