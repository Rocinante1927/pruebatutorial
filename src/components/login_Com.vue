<template>
  <div class="wrapper">
    <v-img alt="logo_login" class="loginlogo" src="../assets/logo_texto.png" />
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <div>
      <form id="login-form">
        <!-- <h1>Bienvenido</h1> -->
        <div class="input-box">
          <input type="text" id="username" v-model="username" placeholder="Username">
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box">
          <input type="password" id="password" v-model="password" placeholder="Password">
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"> Remember me</label>
          <a href="#" >Forgot password?</a>
          <!-- falta agregar link de recuperar contraseña -->
        </div>
        <div class="button-container">
          <div class="button-container">
            <v-btn type="button" class="btn" id="login-button" @click="login()">Login</v-btn>
          </div>


        </div>

      </form>

    </div>
  </div>
</template>

<script>



export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
      users: [
        ["admin", "1234"],
        ["user1", "password1"],
        ["user2", "password2"],
      ],
    };
  },
  methods: {
    login() {
      // comprobar usuario
      const user = this.users.find((user) => user[0] === this.username);
      if (user) {
        // usuario correcto
        this.$router.push({ path: '/home' });
      } else {
        // usuario incorrecto
        alert("Usuario o contraseña incorrecta.");
        
      }
    },
  }, components:{
    
} 
};


</script>
       
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgba(117, 221, 253, 0.651);
    background-size: cover;
    background-position: center;
  }
  
  .wrapper{
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #000000;
    border-radius: 10px;
    padding: 30px 40px;
  }
  
  .wrapper h1 {
  font-size: 36px;
  text-align: center;
  }
  
  .wrapper .input-box{
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
  }
  
  .input-box input{
    width: 100%;
    height: 100%;
    background: rgba(207, 206, 206, 0.603);
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #080808;
    padding: 20px 45px 20px 20px;
  }
  
  .input-box input::placeholder{
    color: #6d6d6d;
  }
  
  .input-box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
  
  .wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
  }
  
  .remember-forgot label input{
    accent-color: #727272;
    margin-right: 3px;
  }
  
  .remember-forgot a {
    color: #9b9b9b;
    text-decoration: none;
  }
  
  .remember-forgot a:hover {
    text-decoration: underline;
  }
  
  .wrapper .btn {
  width: 100%;
  height: 45px;
  background: #9b9a9a5d;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10 px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size:  16px;
  color: #333;
  font-weight: 600;
  }
  
  .wrapper .button-container {
    width: 100%;
    height: 45px;
    background: #664feb;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10 px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size:  16px;
    color: #333;
    font-weight: 600;
    }
  
  .wrapper .register-link {
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
  }
  
  .register-link p a {
    color: #918f8f;
    text-decoration: none;
    font-weight: 600;
  }
  
  .register-link p a:hover {
    text-decoration: underline;
  }
 
  </style>