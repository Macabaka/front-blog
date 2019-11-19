 <template>
 	<div class="container">
 		<div id="login">
 			<p><input type="text" id="user" placeholder="用户名" v-model="userDto.mobile"></p>
 			<p><input type="password" id="pwd" placeholder="密码" v-model="userDto.password"></p>
 			<p><input type="button" id="submit" value="登录" @click="signIn"></p>
 		</div>
 	</div>
 </template>
 
 <script>
 export default {
 	data() {
 		return {
 			userDto: {
 				mobile: '',
 				password: ''
 			}
 		};
 	},
 	created() {},
 	methods: {
 		signIn() {
			alert(123);
 			this.axios.post('http://localhost:8080/sign-in', JSON.stringify(this.userDto)).then(response => {
				alert(response.data.msg)
 				if (response.data.msg ==='登录成功') {
					alert("进来了")
 					//将后台的用户信息存入本地存储
 					localStorage.user = JSON.stringify(response.data.data);
 					//路由跳转到首页
 					this.$router.push('/');
 				}
				else{
					alert("123")
				}
 			});
 		}
 	}
 };
 </script>
 
 <style scoped>
 body,
 p,
 div,
 ul,
 li,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
 	margin: 0;
 	padding: 0;
 }
 
 body {
 	background: #E9E9E9;
 }
 
 #login {
 	width: 400px;
 	height: 250px;
 	background: #FFF;
 	margin-top:100px;
	margin-left: 560px;
 	position: relative;
 }
 
 #login h1 {
 	text-align: center;
 	position: absolute;
 	left: 170px;
 	top: -20px;
 	font-size: 21px;
 }
 
 #login form p {
 	text-align: center;
 }
 
 #user {
 	background: url(../assets/img/user.png) rgba(0, 0, 0, .1) no-repeat;
 	width: 200px;
 	height: 30px;
 	border: solid #ccc 1px;
 	border-radius: 3px;
 	padding-left: 32px;
 	margin-top: 50px;
 	margin-bottom: 30px;
 }
 
 #pwd {
 	background: url(../assets/img/pwd.png) rgba(0, 0, 0, .1) no-repeat;
 	width: 200px;
 	height: 30px;
 	border: solid #ccc 1px;
 	border-radius: 3px;
 	padding-left: 32px;
 	margin-bottom: 30px;
 }
 
 #submit {
 	width: 100px;
 	height: 30px;
 	background: rgba(0, 0, 0, .1);
 	border: solid #ccc 1px;
 	border-radius: 3px;
 }
 
 #submit:hover {
 	cursor: pointer;
 	background: #D8D8D8;
 }
 </style>