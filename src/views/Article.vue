<template>
	<div class="hy-container">
		<div class="hy-col-1">
		</div>
		<div class="hy-col-6 hy-margin-top30">
			<div class="hy-row" v-for="(article,index) in articles" :key="index">
				<div class="hy-col-8 hy-pos-relative">
					<h4 class="hy-margin-10" style="height: 15%;">{{article.title}}</h4>
					<span class="hy-margin-10" style="height: 80%;">{{article.Scontent}}</span>
					<div class="hy-pos-absolute hy-small-bottom " style="height: 5%;">
						<span class="hy-margin-10">{{article.Ncomment}}</span>
						<span class="hy-margin-10">{{article.Nread}}</span>
					</div>
				</div>
				<div class="hy-col-4">
					<img :src="article.avatar" alt="" class="hy-article-pic">
				</div>
			</div>
			
		</div>
		<div class="hy-col-4 hy-margin-top30">
			<div class="hy-small-row" style="text-align: center;" v-for="(project,index) in projects" :key="index">
				<h3>{{project.projectname}}</h3>
				<span >作品数目:{{project.projectarticles}}</span>
				<span>关注人数:{{project.projectfollows}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				articles:[],
				projects:[]
			}
		},
		created(){
			this.axios.get('http://localhost:8080/article').then(articleres =>{
				console.log(articleres.data.data)
				this.articles = articleres.data.data;
			})
			this.axios.get('http://localhost:8080/project').then(projectres=>{
				console.log(projectres.data.data)
				this.projects = projectres.data.data;
			})
		},
		computed:{
			
		}
	}
</script>

<style>
@import url("../assets/css/basic.css");
@import url("../assets/css/style.css");
</style>
