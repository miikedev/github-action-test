<template>

  <!-- top navbar -->
  <div class="container form">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">

      <!-- Centered navigation links -->
      <div class="d-flex justify-content-between">
        <div class="nav nav-centered">
          <router-link class="nav-link nav-link-ltr" to="/surveyform">Survey</router-link>
          <router-link class="nav-link nav-link-ltr " to="/workerhome">Chat</router-link>
          <router-link class="nav-link nav-link-ltr " to="/cvform">Cv</router-link>
        </div>
      </div>

      <!-- Account dropdown -->
      <div class="my-2 my-lg-0 py-2 px-2">
        <div class="account">
          <div class="btn-group dropstart">
            <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              <font-awesome-icon icon="fa-solid fa-circle-user" size="2xl" style="color:black" />
            </button>
            <form class="dropdown-menu p-4">
              <div class="mb-3">
                <label for="exampleDropdownFormEmail2" class="form-label">User Name</label>
                <p class="form-control text-center">{{ useraccount }}</p>
              </div>
              <button type="submit" class="col-12 btn btn-primary text-center" @click="logoutFunction">Logout</button>
            </form>
          </div>
        </div>
      </div>

    </nav>
  </div>
</template>




<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
    export default{
        name:"WorkerNavbar",

        setup(){
      let router = useRouter();
      let useraccount = ref(localStorage.getItem("useraccount"));
      const logoutFunction = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userid");
        router.push('/');
      }

      return{
        useraccount,
        logoutFunction
      }
    }
    }
</script>

<style scoped>
.nav-centered {
  display: flex;
  justify-content: center;
}
.form{
  width: 360px;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: 10px; */
  /* margin: 10px; */
  /* background-color: aqua; */
  z-index: 1000;
}
    .nav-link {
  font-weight: bold;
  text-decoration: none;
  color: #031D44;
  padding: 20px 10px; 
  /* margin: 0px 20px; */
  display: inline-block;
  position: relative;
  transition: 1s;
  /* opacity: 0.75; */
}


.nav-link:hover {
  opacity: 1;
  color:black;
}

.nav-link::before {
  transition: 300ms;
  height: 5px;
  content: "";
  position: absolute;
  background-color: #031D44;
}

.nav-link-ltr::before {
  width: 0%;
  bottom: 10px;
}

.nav-link-ltr:hover::before {
  width: 60%;
}


.router-link-active.nav-link-ltr::before{
  width: 60%;
}

.router-link-active{
  color: black;
}

.account{
  cursor: pointer;
}

</style>