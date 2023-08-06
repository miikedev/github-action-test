<template>
    
    <div class="bg-light mains" :class="showModal === true ? 'red' : 'blue'">
        <Navbar/>
        <LoadingPage v-if="!does"/>
        <SuccessModal  v-if="showModal"/>
        <!-- alert -->
        <div v-if="errorMessage && message" class="errorMessage">

            <div class="error-message">
                <div class="modalss">
                    <img src="http://100dayscss.com/codepen/alert.png" width="44" height="38" />
                        <span class="title">ops !</span>
                        <p class="my-2">{{ errorMessage }}</p>
                        <button class="btn btn-danger" @click="closemessage">Close</button>
                </div>
            </div>
        </div>
        
        <div class="page">
            <div class="containers py-4">
                <!-- title -->
                <h4 class="py-2">Create New DOE</h4>
                <!-- Add DOE Form -->
                <div class="pt-2">
                    <form class="row col-12">
                        <!-- <div class="row"> -->
                            <div class="form-group col-4 col-xl-3">
                                <label for="doenumber">DOE Number</label>
                                <input type="text" class="form-control bg-light" id="doenumber" v-model="doesId">
                            </div>

                            <div class="form-group col-8 col-lg-5 col-xl-3">
                                <label for="factory">Factory</label>
                                    <select class="form-select" id="factory" v-model="factoryName">
                                        <option value="SYARIKAT SIN KWANG PLASTIC INDUSTRIES SDN BHD" selected>SYARIKAT SIN KWANG PLASTIC INDUSTRIES SDN BHD</option>
                                        <option value="Thai Union Group Public Co.,Ltd">Thai Union Group Public Co.,Ltd</option>
                                        <option value="Thai Union Manufacturing Co.,Ltd">Thai Union Manufacturing Co.,Ltd</option>
                                        <option value="I Tail Corporation Public Co.,Ltd">I Tail Corporation Public Co.,Ltd</option>
                                        <option value="Lucky Union Food Co.,Ltd ">Lucky Union Food Co.,Ltd </option>
                                        <option value="Okeanos Food Co.,Ltd">Okeanos Food Co.,Ltd</option>
                                        <option value="Thai Union Feedmill Co.,Ltd">Thai Union Feedmill Co.,Ltd</option>
                                        <option value="Pakfood Public Co.,Ltd">Pakfood Public Co.,Ltd</option>
                                        <option value="South East Asia Packaging and Canning Co.,Ltd">South East Asia Packaging and Canning Co.,Ltd</option>
                                    </select>
                            </div>

                            <div class="form-group col-4 col-xl-3 mt-4 mt-xl-0">
                                <label for="category">Category</label>
                                    <select class="form-select" id="category" v-model="factoryCategory">
                                        <option value="Food Packing" >ပလတ်စတစ်ဖြင့်ပြုလုပ်သော အီလက်ထရောနစ်ပစ္စည်းများ ထုတ်လုပ်သည့် လုပ်ငန်း</option>
                                        <option value="Steel Manufacturing">ပင်လယ်အစားအစာထုတ်လုပ်ခြင်း လုပ်ငန်း</option>
                                    </select>
                            </div>

                            <div class="form-group col-4 col-xl-3 mt-4 mt-xl-0">
                                <label for="location">Location</label>
                                <input type="text" class="form-control bg-light" id="location" v-model="factoryLocation">
                            </div>

                            <div class="form-group col-4 col-xl-3 mt-4" >
                                <label for="country">Country</label>
                                    <select class="form-select" id="country" v-model="factoryCountry">
                                        <option value="Thailand" >Thailand</option>
                                        <option value="Malaysia">Malaysia</option>
                                    </select>
                            </div>

                            <div class="form-group col-4 col-xl-3 mt-4" >
                                <label for="country">Salary</label>
                                <input type="text" class="form-control bg-light" id="salary" v-model="salary">
                            </div>

                            <div class="form-group col-4 col-xl-3 mt-4">
                                <label class="">Type</label>
                                    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="familyTree" id="familyTreeYes" autocomplete="off" value="0" v-model="newEmployee" checked/>
                                    <label class="btn btn-outline-primary" for="familyTreeYes">Old</label>
                        
                                    <input type="radio" class="btn-check" name="familyTree" id="familyTreeNo" autocomplete="off" value="1" v-model="newEmployee"/>
                                    <label class="btn btn-outline-primary" for="familyTreeNo">New</label>
                                    </div>
                            </div>

                            <div class="btn-containers mt-4">
                                <button class=" mx-3 shadow-sm clearbutton" @click="clearForm"><span class="button-content pe-1">Clear All </span><span class="button-icon"><font-awesome-icon icon="fa-solid fa-trash"  /></span></button>
                                <button class="button" @click.prevent="handleSubmit" ><span class="button-content">Create </span></button>
                            </div>
                        <!-- </div> -->
                        
                    </form>
                </div>
                
            </div>
        </div>

        <div class="page">  
            <div class="containers">
                <!-- title -->
                <h4 class="py-4">Existing DOEs</h4>
                <!-- DOE Table-->
                <table class="table table-striped table-hover table-sm">
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>DOE Number</th>
                        <th>Factory</th>
                        <th>Category</th>
                        <th class="width">Location</th>
                        <th>Country</th>
                        <th>Salary</th>
                        <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="reverse" v-for="(doe,index) in does" :key="doe.id">
                        <th>{{ index + 1 }}</th>
                        <th>{{ doe.doe_id }}</th>
                        <td>{{ doe.factory_name }}</td>
                        <td>{{ doe.factory_category }}</td>
                        <td>{{ doe.factory_location }}</td>
                        <td>{{ doe.factory_country }}</td>
                        <td>{{ doe.salary }}<span v-if="doe.factory_country === 'Thai'"> Bath</span><span v-if="doe.factory_country === 'Malaysia'"> Ringgit</span></td>
                        <td>{{ doe.is_new_employee === 1? 'new' : 'old' }}</td>
                        </tr>
                        <tr v-if="!reverse" v-for="(doe,index) in does.slice().reverse()" :key="doe.id">
                        <th scope="row">{{does.length - index}}</th>
                        <th>{{ doe.doe_id }}</th>
                        <td>{{ doe.factory_name }}</td>
                        <td>{{ doe.factory_category }}</td>
                        <td>{{ doe.factory_location }}</td>
                        <td>{{ doe.factory_country }}</td>
                        <td>{{ doe.salary }}</td>
                        <td>{{ doe.is_new_employee === 1 ? 'New' : 'Old' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { computed , ref, onMounted } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue'
import LoadingPage from '../components/LoadingPage.vue'
import SuccessModal from '../components/SuccessModal.vue'
export default {
    components:{Navbar,LoadingPage,SuccessModal},
    setup(){
        let router = useRouter();
        let reverse = ref(false);
        let store = useStore();
        const showModal = ref(false);

  
        let doesId = ref("");
        let factoryName = ref("");
        let factoryCategory = ref("");
        let factoryLocation = ref("");
        let factoryCountry = ref("");
        let salary = ref('')
        let newEmployee = ref('0');
        let yesno = ref('');
        let message = ref(true);

         // modal function
         let showmodal = () => {
            showModal.value = true;
        };

        const hidemodal = () => {
            showModal.value = false;
        };

        let doesData = ref({
            doe_id : doesId,
            factory_name : factoryName,
            factory_category : factoryCategory,
            factory_location : factoryLocation,
            factory_country : factoryCountry,
            salary:salary,
            is_new_employee:newEmployee
        })
        let does = computed(()=>{
            return store.state.doeModule.does

        })

        let errorMessage = computed(()=>{
            return store.state.doeModule.errorMessage
        })

       

        let getData = ()=> store.dispatch('doeModule/getDoes');
        getData();
        onMounted(getData);

        // storeDoe //
        let handleSubmit =async function(){
          console.log(doesData.value, typeof(doesData.value))

          await store.dispatch('doeModule/storeDoes',doesData.value)
          message.value = true;
          if(!errorMessage.value){
            showmodal();
            setTimeout(()=>{
                router.go(0);
            },2000)
            
            console.log("work");
          }
          
        }

        // Clear Form Data
        let clearForm =()=>{
            doesId.value = "",
            factoryLocation.value = "";

        }

        // Reverse data
        let reverseData = ()=>{
           reverse.value = !reverse.value
        }

        reverseData();

        let closemessage = ()=>{
            message.value = false;
            console.log("hey");
        }
  

        return{
            doesId,factoryName,factoryCategory,factoryLocation,factoryCountry,
            doesData,handleSubmit,salary,newEmployee,
            does,getData,errorMessage,clearForm,reverse,reverseData,yesno,closemessage,message,showModal,showmodal
        }

    }
}
</script>

<style >
/* .mains{
    overflow-x:hidden ;
    overflow-y:scroll ;
} */


.page{
  /* height: 100vh; */
  background-color: white;

  margin-top: 25px;
  margin-left: 85px;
  margin-right:25px ;

  overflow:hidden;
}

label{
  font-weight: bold;
  margin-bottom: 10px;
}

input{
  letter-spacing: 1px;
}

.containers{
    margin-left: 20px;
    margin-right: 20px;
    /* margin-top: 50px; */
    /* background-color: red; */
}

.btn-containers .button{
    font-weight: 600;
    width: 180px;
    background-color: #fff;

    position: relative;
    overflow: hidden;
    height: 2.5rem;
    padding: 0 2rem;
    border: 2px solid #007bff;

    border-radius: 0.5rem;
    background-size: 400%;
    color: #000;
}

.btn-containers .clearbutton,.editbutton{
    font-weight: 600;
    /* height: 30px; */
    width: 180px;
    background-color: #fff;

    position: relative;
    overflow: hidden;
    height: 2.5rem;
    padding: 0 2rem;
    border: 2px solid #dc3545;
    border-radius: 0.5rem;
    background-size: 400%;
    color: #000;
    /* border: none; */
}


.button:hover::before, .clearbutton:hover::before,.editbutton:hover::before {
  transform: scale(1.5);
}

.button:hover, .clearbutton:hover{
    color: #fff;
}

.button-content, .button-icon {
  position: relative;
  z-index: 1;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -10%;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  /* background: linear-gradient(
    82.3deg,
    rgba(150, 93, 233, 1) 10.8%,
    rgba(99, 88, 238, 1) 94.3%
  ); */
  background-color: #007bff;
  transition: all 0.475s;
}

.clearbutton::before{
  content: '';
  position: absolute;
  top: 0;
  left: -10%;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: inherit;
  border-radius: inherit;
  background: #dc3545;
  transition: all 0.475s;
}



.reverse{
    cursor: pointer;
}

.reverse:active{
    transform: scale(0.95);
}



.modalss {
  position: absolute;
  width: 280px;
  height: 250px;
  top: 95px;
  left: 60px;
  background: #fff;
  border-radius: 3px;
  border: 2px solid #cb2929;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.4);
  text-align: center;
  overflow: hidden;
  animation: show-modal 0.7s ease-in-out;
}
.modalss.hide {
  animation: hide-modal 0.6s ease-in-out both;
}
.modalss img {
  margin-top: 24px;
}
.modalss .title {
  display: block;
  font-size: 25px;
  line-height: 24px;
  font-weight: 400;
  margin: 14px 0 5px 0;
}
.modalss p {
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  margin: 0;
  padding: 0 30px;
}
.modalss .button {
  position: absolute;
  height: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #cb2929;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
.modalss .button:hover {
  background: #CB4029;
}

.width{
  width: 380px;
}

@keyframes show-modal {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes hide-modal {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
}
</style>