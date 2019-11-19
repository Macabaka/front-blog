<template>
	<router-link to="/Sign">
		<h1 style="text-align: center;color: black;">点击登录</h1>
		<div class="chest">
			<div class="heart left side top"></div>
			<div class="heart center"></div>
			<div class="heart right side"></div>
		</div>
	</router-link>

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
	.chest {
		width: 500px;
		height: 500px;
		margin: 0 auto;
		position: relative;
	}
	.heart {
		position: absolute;
		z-index: 2;
		background: linear-gradient(-90deg, #F50A45 0%, #d5093c 40%);
		animation: beat 0.7s ease 0s infinite normal;
	}
		
	.heart.center {
		background: linear-gradient(-45deg, #B80734 0%, #d5093c 40%);
	}
		
	.heart.top {
		z-index: 3;
	}
		
	.side {
		top: 100px;
		width: 220px;
		height: 220px;
		border-radius: 110px;
	}
		
	.center {
		width: 210px;
		height: 210px;
		bottom: 100px;
		left: 145px;
		transform: rotateZ(225deg);
		/*transform: rotate(45deg);*/
	}
		
	.left {
		left: 62px;
	}
		
	.right {
		right: 62px;
	}
		
		
	@keyframes beat {
		0% {
			transform: scale(1) rotate(225deg);
			box-shadow:0 0 40px #d5093c;
		}
		
		50% {
			transform: scale(1.1) rotate(225deg);
			box-shadow:0 0 70px #d5093c;
		}
		100% {
			transform: scale(1) rotate(225deg);
		box-shadow:0 0 40px #d5093c;
		}
	}
</style>
