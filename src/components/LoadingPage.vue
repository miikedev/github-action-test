<template>
  <div class="loading">
    <div>
      <svg height="108px" width="108px" viewBox="0 0 128 128" class="loader">
        <defs>
          <clipPath id="loader-eyes">
            <circle transform="rotate(-40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye1"></circle>
            <circle transform="rotate(40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye2"></circle>
          </clipPath>
          <linearGradient y2="1" x2="0" y1="0" x1="0" id="loader-grad">
            <stop stop-color="#000" offset="0%"></stop>
            <stop stop-color="#fff" offset="100%"></stop>
          </linearGradient>
          <mask id="loader-mask">
            <rect fill="url(#loader-grad)" height="128" width="128" y="0" x="0"></rect>
          </mask>
        </defs>
        <g stroke-dasharray="175.93 351.86" stroke-width="12" stroke-linecap="round">
          <g>
            <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(193,90%,50%)"></rect>
            <g stroke="hsl(193,90%,50%)" fill="none">
              <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
              <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
            </g>
          </g>
          <g mask="url(#loader-mask)">
            <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(223,90%,50%)"></rect>
            <g stroke="hsl(223,90%,50%)" fill="none">
              <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
              <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>

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
          
          router.push("/checkprimaryinfo");
          console.log("User Id is =", id);
          console.log("User Token is =", token);
        }
        console.log("Response", response.data, response.data.user.role);
      } catch (error) {
        console.log(error);
        // commit(
        //   "SET_WARNING",
        //   "The Information You Have Entered is Incorrect, Please Try Again"
        // );
        console.log("Error Response:", error.response);
        warning.value = error.response;
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
      togglePasswordVisibility
    };
  },
};

</script>

<style>
.loading{
  width: 100vw;
  min-height: 100vh;
  background: whitesmoke;

  position: fixed;
  top:0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden  ;

  z-index: 100;
}

.loader {
  width: 8em;
  height: 8em;
}

.loader__eye1,
  .loader__eye2,
  .loader__mouth1,
  .loader__mouth2 {
  animation: eye1 3s ease-in-out infinite;
}

.loader__eye1,
  .loader__eye2 {
  transform-origin: 64px 64px;
}

.loader__eye2 {
  animation-name: eye2;
}

.loader__mouth1 {
  animation-name: mouth1;
}

.loader__mouth2 {
  animation-name: mouth2;
  visibility: hidden;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue), 90%, 10%);
    --fg: hsl(var(--hue), 90%, 90%);
  }
}

@keyframes eye1 {
  from {
    transform: rotate(-260deg) translate(0, -56px);
  }

  50%,
    60% {
    animation-timing-function: cubic-bezier(0.17, 0, 0.58, 1);
    transform: rotate(-40deg) translate(0, -56px) scale(1);
  }

  to {
    transform: rotate(225deg) translate(0, -56px) scale(0.35);
  }
}

@keyframes eye2 {
  from {
    transform: rotate(-260deg) translate(0, -56px);
  }

  50% {
    transform: rotate(40deg) translate(0, -56px) rotate(-40deg) scale(1);
  }

  52.5% {
    transform: rotate(40deg) translate(0, -56px) rotate(-40deg) scale(1, 0);
  }

  55%,
    70% {
    animation-timing-function: cubic-bezier(0, 0, 0.28, 1);
    transform: rotate(40deg) translate(0, -56px) rotate(-40deg) scale(1);
  }

  to {
    transform: rotate(150deg) translate(0, -56px) scale(0.4);
  }
}

@keyframes eyeBlink {
  from,
    25%,
    75%,
    to {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0);
  }
}

@keyframes mouth1 {
  from {
    animation-timing-function: ease-in;
    stroke-dasharray: 0 351.86;
    stroke-dashoffset: 0;
  }

  25% {
    animation-timing-function: ease-out;
    stroke-dasharray: 175.93 351.86;
    stroke-dashoffset: 0;
  }

  50% {
    animation-timing-function: steps(1, start);
    stroke-dasharray: 175.93 351.86;
    stroke-dashoffset: -175.93;
    visibility: visible;
  }

  75%,
    to {
    visibility: hidden;
  }
}

@keyframes mouth2 {
  from {
    animation-timing-function: steps(1, end);
    visibility: hidden;
  }

  50% {
    animation-timing-function: ease-in-out;
    visibility: visible;
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -351.86;
  }
}


</style>