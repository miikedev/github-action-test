<template>
  <div>
     <!-- top navbar -->
        <div>
            <nav class="nav navbar-light bg-white mx-auto">
              <router-link  to="/home" class="my-auto">
                <a class="navbar-brand"><img src="../assets/image/internationalfocuslogo.jpg" alt="logo"></a>
              </router-link>
              
                  <div class="mx-auto">
                    <router-link class="nav-link nav-link-ltr ms-5"  to="/home" >Manage</router-link>
                    <router-link class="nav-link nav-link-ltr"  to="/surveypage">Suvery</router-link>
                    <router-link class="nav-link nav-link-ltr" to="/chatadminview">Chat</router-link>
                  </div>
                  <div class="my-2 my-lg-0 px-2">
                      <!-- <p>logo</p> -->
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
        <!-- side navbar -->
        <div class="sidebars bg-white">
          <nav class="nav flex-column pt-3">
              <router-link class="nav-link sides py-3" to="/home">
              <font-awesome-icon icon="fa-solid fa-users" size="lg" />
              </router-link>
              <!-- <router-link class="nav-link sides py-3" to="/searchpage">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="lg" />
              </router-link> -->
              <router-link class="nav-link sides py-3" to="/doe">
                <font-awesome-icon icon="fa-solid fa-file" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/returnworker">
                <font-awesome-icon icon="person-walking-arrow-loop-left" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/register">
              <font-awesome-icon icon="fa-solid fa-user-plus"  size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/reviewcv">
                <font-awesome-icon icon="fa-solid fa-user-check" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/reviewworker">
                <font-awesome-icon icon="fa-solid fa-list-check" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/reviewmedical">
                <font-awesome-icon icon="fa-solid fa-house-medical-circle-check" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/passport">
                <font-awesome-icon icon="fa-solid fa-passport"  size="lg"/>
              </router-link>
              <router-link class="nav-link sides py-3" to="/contract">
                <font-awesome-icon icon="fa-solid fa-file-contract" size="lg"/>
              </router-link>
              <router-link class="nav-link sides py-3" to="/owic">
                <font-awesome-icon icon="fa-solid fa-address-card" size="lg" />
              </router-link>
              
              
          </nav>  
        </div>
  </div>
</template>

<script>
// import router from '@/router';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
    name:"Navbar",

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

<style>

</style>