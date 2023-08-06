
<template>
  
 <div class="container">
  <!-- Error Message -->
    <div v-if="errorMessage" class="errorMessage">
          <div class="error-message">
                  <div class="modalss">
                      <img src="http://100dayscss.com/codepen/alert.png" width="44" height="38" />
                          <span class="title">ops !</span>
                          <p class="my-2">{{ errorMessage }}</p>
                          <button class="btn btn-danger" @click="errorMessage = null">Close</button>
                  </div>
              </div>
    </div>
      <div class="img_container mb-5 ">
        <img src="../assets/image/internationalfocuslogo.jpg" alt="Uploaded Image" class="image">
        <div class="in"></div>
        <div class="out-1"></div>
        <div class="out-2"></div>
        <div class="out-3"></div>
      </div>
     <h5 class="text-center mb-2 company_name animate__animated animate__backInUp">INTERNATIONAL FOCUS GENERAL SERVICES CO.,LTD</h5>
     <!-- <h6 class="welcome">မှကြိုဆိုပါတယ်</h6> -->
     <form @submit.prevent="submit" class="form">
    <div class="input_wrapper">
      <input type="text" name="employee_id" id="employee_id" placeholder="User ID" v-model="form.employee_id" class="custom_input" required />
    </div>
    <div class="input_wrapper">
      <div class="password_wrapper">
        <input type="password" name="password" id="password" placeholder="Password" v-model="form.password" class="custom_input password_input" required />
        <span class="password_toggle" :class="{ 'show_password': showPassword }" @click="togglePasswordVisibility">
          <font-awesome-icon v-if="showPassword" class="fa-eye" icon="fa-solid fa-eye" />
        
          <font-awesome-icon v-else  class="fa-eye-slash" icon="fa-solid fa-eye-slash" />
        </span>
      </div>
    </div>
    <div class="button_wrapper">
      <button type="submit" class="login_button">Login</button>
    </div>
    <router-link to="forgetpassword">Forget Password ?</router-link>
  </form>
 </div>

 <div v-if="warning" class="popup">
      <div class="popup_content">
        <div class="warning">{{ warning }}</div>
        <span class="close_btn" @click="hidePopup">
          <font-awesome-icon class="fa-solid fa-times close_icon" icon="fa-solid fa-times"/>
        </span>
      </div>
  </div>

</template>


<script>
import 'animate.css';
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRouter } from 'vue-router';
export default {
  name: 'login',
  components: { FontAwesomeIcon },

  setup() {
    const store = useStore();
    const router = useRouter();
    let errorMessage = ref('');
    const form = ref({
      employee_id: '',
      password: '',
    });
    const warning = ref('');

    const hidePopup = () =>{
      // warning.value = null;
      let popup = document.querySelector('.popup');
      popup.style.display = 'none';
      form.value = '';
    }
    const showPassword = ref(false);
    const togglePasswordVisibility = () =>{
      showPassword.value = !showPassword.value;
      const passwordInput = document.getElementById('password');
      if(showPassword.value){
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    }

    const login = async () => {
      try {
        let response = await axios.post("/login", form.value);
        if(response){
          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.authorisation.token}`;
        }
        let token = response.data.authorisation.token;
        localStorage.setItem("token", token);
        let role = response.data.user.role;
        let id = response.data.user.id;
        localStorage.setItem("userid",id);
        localStorage.setItem("useraccount", form.value.employee_id);
        localStorage.setItem("role",role);
        console.log("User Account Value =>", localStorage.getItem("useraccount"));
        console.log("User Account Role =>", localStorage.getItem("role"));
       
        if (role === "admin") {

          router.push("/doe");
          console.log("Admin Id is =", id);
          console.log("Admin Token is =", token);
        } else if (role === "employee") {
          
          // let checkcv = async()=>{
          //   try {
          //     let res = await axios.get(`employee_infos/${id}`)
          //       console.log(res.data.data.cv_data);
          //       if(res.data.data.cv_data){
          //         router.push("/workerhome");
          //       }else{
          //         router.push("/checkprimaryinfo");
          //       }
          //   } catch (error) {
          //     if (error.response) {
          //       console.log(error.response.data.message);
          //       errorMessage.value = "Login Failed"
          //     }
          //   }
          // }

          // checkcv();
          
          console.log("User Id is =", id);
          console.log("User Token is =", token);
          router.push("/workerhome");
        }
        console.log("Response", response.data, response.data.user.role);
      } catch (error) {
        console.log(error);
        if (error.response) {
                console.log(error.response.data.message);
                errorMessage.value = "Login Failed"
              }
      }
    };

    const submit = (event) => {
      event.preventDefault(); // Prevent form submission if validation fails
      login();
    };


    return {
      hidePopup,
      form,
      warning,
      submit,
      login,
      showPassword,
      togglePasswordVisibility,
      errorMessage
    };
  },
};
</script>



<style scoped>

.welcome{
  font-family: "Pyidaungsu-Regular";
  font-size: 20px;
}
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;

    position: relative;
  }

  .company_name{
    font-weight: 600;
  }

   .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .img_container{
    width: 50px;
    height: 50px;
    border-radius: 50%;

    display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
  }

  .img_container img{
    width: 50px;
    height: 50px;
    /* border-radius: 50%; */
  }   


.out-1 {
 position: absolute;
 width: 4em;
 height: 4em;
 border-radius: 100%;
 border: 0.2em solid transparent;
 border-top-color: rgba(237,26,35,255);
 animation: rec 2s 2;
 transition: all ease-in-out 0.3s;
}

.out-2 {
 position: absolute;
 width: 4em;
 height: 4em;
 border-radius: 100%;
 border: 0.2em solid transparent;
 border-left-color: rgba(255,243,0,255);
 animation: rec 2s 2;
 transition: all ease-in-out 0.3s;
}

.out-3 {
 position: absolute;
 width: 4em;
 height: 4em;
 border-radius: 100%;
 border: 0.2em solid transparent;
 border-bottom-color: rgba(0,173,239,255);
 animation: rec 2s 2;
 transition: all ease-in-out 0.3s;
}

.in {
 position: absolute;
 border-radius: 100%;
 border: 0.2em solid rgba(43, 226, 83, 0.11);
 width: 4em;
 height: 4em;
 transition: all ease-in-out 0.3s;
}

@keyframes rec {
 0% {
  transform: rotate(360deg);
 }
}

  .fa-eye, .fa-eye-slash{
    cursor: pointer;
  }


  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    padding: 20px;
    border-radius: 5px;
  }

  .password_wrapper{
    position: relative;
  }

  .password_toggle{

    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -60%);
  }

  .warning {
    color: red;
    margin-bottom: 10px;
    text-align: center;
  }

  .close_icon{
    cursor: pointer;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  .input_wrapper {
    width: 100%;
    margin-bottom: 15px;
  }

  .custom_input {
    background-color: #f5f5f5;
    width: 100%;
    padding: 10px;
    outline: none;
     border: none;
    border-radius: 10px;
  }

  .button_wrapper {
    width: 100%;
    margin-top: 15px;
  }

  .login_button {
    width: 100%;
    padding: 10px;
    background-color: #0000FF;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .login_button:hover {
    background-color: #0000DD;
  }

  a {
    display: block;
    margin-top: 30px;
    text-align: center;
    color: #333;
    text-decoration: none;
    color: blue;
    cursor: pointer;
  }

  .popup{
    position: absolute;
    top: 50%;
    left: 50%   ;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;

  }

.popup_content{
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  text-align: center;
    border-radius: 15px;

}


</style>
