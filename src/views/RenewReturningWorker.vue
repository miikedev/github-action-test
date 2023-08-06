<template>
  <div class="bg-light mains" :class="showModal === true ? 'red' : 'blue'">
    <Navbar/>
      <!-- alert -->
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
    <div class="page pb-5">
        <div class="containers pt-4 pb-5">
            <ReturnModal v-if="showModal" :data="employeeData" @closeModal="hidemodal"/>
             <!-- title -->
             <h4 class="pt-2 pb-3">Renew Returning Worker</h4>
            
             <h6>Search by NRC Number</h6>
              <!-- nrc -->
              <div class="nrcContainer col-7 col-md-5 col-lg-4">
                            <div class="nrcForm wid d-flex">
                                <select v-model="stateId" @change="getStateid(stateId.id)">
                                    <option v-for="state in getAllStates" :key="state.id" :value="{id:state.id,no:state.number.mm}">{{ state.number.mm }}</option>
                                </select>
                                <p> / </p>
                                <select class="town" v-model="nrctownship">
                                    <option v-for="town in getAlltownships" :key="town.id" :value="town.short.mm">{{ town.short.mm}}</option>
                                </select>
                                <select class="" v-model="nrctype">
                                    <option v-for="types in getAlltypes" :key="types.id" :value="types.name.mm">{{ types.name.mm }}</option>
                                </select>
                                <input type="text" class="nrcNumber" v-model="nrcnumber">
                                <button class="searchs" type="button" @click="getClick"><font-awesome-icon icon="magnifying-glass" flip="horizontal" style="color:fff" class="searchIcon"/></button>
                            </div>
              </div>

              <!-- Check and Update -->
              <h5 class="text-primary pt-4  ">Check and Update for Worker Details</h5>
              <div class="pt-2">
                <div v-if="!fillterEmployees" class="text-center py-5">
                    <p class=" messages">Pls insert NRC to find worker data </p>
                </div>
                <!-- {{ fillterEmployees.length }} -->
                <div v-if="fillterEmployees" class="row">
                    <div class="col-3">
                        <p class="bold">Name (En)</p>
                        <p v-if="fillterEmployees" class="trans">{{ fillterEmployees.name_en }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Name (Mm)</p>
                        <p class="trans">{{ fillterEmployees.name_mm }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Date of Birth</p>
                        <p class="trans">{{  fillterEmployees.name_mm }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Gender</p>
                        <p class="trans">{{ fillterEmployees.gender }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Father Name (En)</p>
                        <p class="trans">{{ fillterEmployees.father_name_en }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Father Name (Mm)</p>
                        <p class="trans">{{ fillterEmployees.father_name_mm }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Mother Name (En)</p>
                        <p class="trans">{{ fillterEmployees.mother_name_en }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Mother Name (Mm)</p>
                        <p class="trans">{{ fillterEmployees.mother_name_mm }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Worker ID</p>
                        <p class="trans" v-if="fillterEmployees">{{ fillterEmployees.employee_id }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Old Doe Number</p>
                        <p class="trans">{{ fillterEmployees.doe.doe_id }}</p>
                    </div>

                     <!-- doe -->
                     <div class="col-3">
                            <label for="doe" class="bold pb-2">New Doe Number</label>
                                <select class="form-select" id="doe" v-model="doeId">
                                    <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>   
                                </select>
                        </div>

                </div>
              </div>
              <!-- btn -->
                <div class="btn-containers mt-4">
                    <button class=" mx-3 shadow-sm clearbutton" @click="clearData"><span class="button-content pe-1">Reset</span><span class="button-icon"><font-awesome-icon icon="fa-solid fa-trash"  /></span></button>
                    <button class="button" @click.prevent="updateSubmit" ><span class="button-content">Update</span></button>
                </div>



        </div>
    </div>
  </div>
</template>

<script>
import nrcdata from '../composable/nrcdata'
import Navbar from '../components/Navbar.vue'
import ReturnModal from '../components/ReturnModal.vue';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import {convertNumbers } from "mm-nrc-converter"
import axios from 'axios';
export default {    
    components:{Navbar,ReturnModal},
    setup(){
        let store = useStore();
        const showModal = ref(false);
        let employeeData = ref();
        let router =useRouter();

        let doeId=ref();
        let stateId = ref({});
        let nrctownship = ref();
        let nrctype = ref();
        let nrcnumber = ref();
        let fillterEmployees = ref();
        let formlength = ref();
        let formData = ref();
        let errorMessage = ref();

          // modal function
        let showmodal = () => {
            showModal.value = true;
        };

        const hidemodal = () => {
            showModal.value = false;
        };

        let {getAllStates,getStateid, getAlltownships, getAlltypes} = nrcdata(stateId.id);

        // get DOE Data
        let does = computed(()=>{
            return store.state.doeModule.does
        })

        let getData = ()=> store.dispatch('doeModule/getDoes');
        getData();

        // get All Employees Data
        let employees = computed(()=> {
            return store.state.registerModule.employees
        })

        let getEmployees = ()=> store.dispatch('registerModule/getEmployees');
        getEmployees();

        let getClick=()=>{
            console.log(employees);
            let nrc =`${stateId.value.no}/${nrctownship.value}(${nrctype.value})${nrcnumber.value}`;
            // let nrc = '1/'
            console.log(nrc);
            console.log(employees.value.data);
            let x = employees.value.data.filter((employee)=>{
                if(employee.nrc !== null & employee.doe !==null){
                    console.log(employee.nrc);

                    if(employee.nrc == nrc){
                        console.log(employee);
                        return employee 
                    }       
                } 
                    
            })

            console.log(x);
            if (x.length === 0) {
                errorMessage.value = "Wrong NRC Number"
            }else{
                console.log("find");
                fillterEmployees.value = x[0];
            }
           
           
        }

        // update Doe
        let updateSubmit =async ()=>{
            try {
                let updateid = fillterEmployees.value.id
                console.log(updateid);
                formData.value={
                    employee_id:fillterEmployees.value.employee_id ,
                    password:convertNumbers(nrcnumber.value,"mm", "eng"),
                    name_mm: fillterEmployees.value.name_mm,
                    name_en: fillterEmployees.value.name_en,
                    father_name_mm:fillterEmployees.value.father_name_mm,
                    father_name_en:fillterEmployees.value.father_name_en,
                    mother_name_mm:fillterEmployees.value.mother_name_mm,
                    mother_name_en:fillterEmployees.value.mother_name_en,
                    nrc :fillterEmployees.value.nrc,
                    dob: fillterEmployees.value.dob,
                    gender:fillterEmployees.value.gender,
                    ethnic:fillterEmployees.value.ethnic,
                    religion:fillterEmployees.value.religion,
                    nrc_english:fillterEmployees.value.nrc_english,
                    doe_id : doeId.value
        
                }  
                let data= formData.value;
                let res =  await axios.post(`employees/${updateid}?_method=patch`, data)
                if(res){
                    employeeData.value = {
                        id:fillterEmployees.value.employee_id ,
                        pw:doeId.value
                    }
                    console.log(employeeData.value);
                    showmodal();
                    setTimeout(() => {
                            hidemodal()
                        }, 3000); 
                }
            } catch (error) {
                if(error.response){
                errorMessage.value = error.response.data.message
                }
            }
           
            
            
            // router.go({name:"doesView"})
        }

        let clearData=()=>{
              fillterEmployees.value = null;
         }
        

        return{
            stateId,nrctownship,nrctype,nrcnumber,clearData,
            getAllStates,getAlltownships,getAlltypes,getStateid,
            doeId,does,getClick,fillterEmployees,
            updateSubmit,showModal,hidemodal,showmodal,employeeData,errorMessage,formlength
        }
    }

}
</script>

<style>
.wid{
    width:350px;
}

.bold{
    font-weight: bold;
}

.trans{
    color:rgb(152, 148, 148)
}

.searchs{
    /* border-radius: 0 5px 5px 0; */
    width: 100px;
    border:none;
    background: blue;
    /* margin-left:20px; */
    padding: 5px;
}

.searchs:active{
    transform:scale(1.09);
}

.searchIcon{
    color: #fff;
}

.messages{
    /* width: 50%; */
    border: 2px solid blue;
    border-radius: 15px;
    padding: 10px;
    margin-left: 30%;
    margin-right: 30%;
    font-size: 20px;
    font-weight:thin ;

    display: flex;
    justify-content: center;
    align-items: center;
}

.updatebtn{
    font-weight: 600;
    width: 250px;
    background-color: #fff;

    position: relative;
    overflow: hidden;
    height: 2.5rem;
    padding: 0 2rem;
    border: 2px solid #007bff;

    border-radius: 1.5rem;
    background-size: 400%;
    color: #000;
}

</style>