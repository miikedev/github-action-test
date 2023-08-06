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
        <div class="page">
        <div class="containers pt-4 pb-5">
            <Modal v-if="showModal" :data="employeeData" @closeModal="hidemodal"/>
            <h4 class="text-bold py-2">Register New Worker</h4>
            <div class=""> 
                <div class="pt-2">
                <!-- nrc & doe -->
                    <div class="row">
                        <!-- nrc -->
                        <div class="nrcContainer col-12 col-md-7 col-lg-3">
                        <label>NRC Number (En)</label>
                            <div class="nrcForm d-flex">
                                <select v-model="stateId" @change="getStateid(stateId.id)">
                                    <option v-for="state in getAllStates" :key="state.id" :value="{id:state.id,no:state.number.en}">{{ state.number.en }}</option>
                                </select>
                                <p> / </p>
                                <select class="town"  v-model="nrctownship">
                                    <option v-for="town in getAlltownships" class="options" :key="town.id" :value="town.short.en">{{ town.short.en}}</option>
                                </select>
                                <select class="type" v-model="nrctype">
                                    <option v-for="types in getAlltypes" class="my-2" :key="types.id" :value="types.name.en">{{ types.name.en }}</option>
                                </select>
                                <input type="text" class="nrcNumber" @change="chgmmnrc" v-model="nrcnumber">
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
                            <label class="d-block">NRC Number(Mm)</label>
                                <input type="text" class="form-control" v-model="mmnrc" @click="chgmmnrc">
                        </div>
                        
                        <!-- doe -->
                        <div class="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
                            <label for="doe">DOE Number</label>
                                <select class="form-select" id="doe" v-model="doeId">
                                    <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>   
                                </select>
                        </div>
                    </div>
                <!-- cv -->
                <!-- upper row -->
                    <div class="d-flex my-4 col-12">
                        <div class="row cvs">
                            <div class="col-12 col-md-6 col-lg-3">
                                <label for="nameen" class="d-block">Name (En)</label>
                                <input type="text" class="form-control" name="nameen" v-model="nameEn">
                            </div>
                            
                            <div class="col-12 col-md-6 col-lg-3">
                                <label for="namemm" class="d-block">Name (Mm)</label>
                                <input type="text" class="form-control" name="namemm" v-model="nameMm">
                            </div>

                            <div class="col-12 col-md-6 col-lg-3  mt-4 mt-lg-0">
                                <label for="MoveInDate" class="d-block">Date Of Birth</label>
                                <input  autocomplete="off" class="dates form-control" name="MoveInDate" placeholder="DD-MM-YYYY" type="date" min="1900-12-01" max="2050-01-01" spellcheck="false" v-model="dob">
                            </div>

                            <div class="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
                                <label class="d-block">Gender</label>
                                    <div class="btn-group" >
                                        <input type="radio" class="btn-check form-control" name="options" id="option1" autocomplete="off"  value="male" v-model="selectedGender" @change="handleGenderChange" checked />
                                        <label class="btn btn-outline-primary" for="option1">male</label>

                                        <input type="radio" class="btn-check form-control" name="options" id="option3" autocomplete="off"  value="female" v-model="selectedGender" @change="handleGenderChange" />
                                        <label class="btn btn-outline-primary" for="option3">female</label>
                                    </div>
                            </div>           
                                        

                            <div class="col-12 col-md-6 col-lg-3 my-4">
                                <label for="fanameen" class="d-block">Father Name (En)</label>
                                <input type="text" class="form-control" name="fanameen" v-model="fatherEn">
                            </div>

                            <div class="col-12 col-md-6 col-lg-3 my-4">
                                <label for="fanamemm" class="d-block">Father Name (Mm)</label>
                                <input type="text" class="form-control" name="fanamemm" v-model="fatherMm" >
                            </div>

                            <div class="col-12 col-md-6 col-lg-3 my-4">
                                <label for="monameen" class="d-block">Mother Name (En)</label>
                                <input type="text" class="form-control" name="monameen" v-model="motherEn">
                            </div>

                             <div class="col-12 col-md-6 col-lg-3 my-4">
                                <label for="monamemm" class="d-block">Mother Name (Mm)</label>
                                <input type="text" class="form-control" name="monamemm" v-model="motherMm">
                            </div>       

                            <div class="col-12 col-md-6 col-lg-3 mt-md-4 mt-lg-0">
                                <label for="monamemm" class="d-block">Ethnic</label>
                                <input type="text" class="form-control" name="monamemm" v-model="ethnic">
                            </div>

                            <div class="col-12 col-md-6 col-lg-3 mt-md-4 mt-lg-0">
                                <label for="monamemm" class="d-block">Religion</label>
                                <input type="text" class="form-control" name="monamemm" v-model="religion">
                            </div>

                                    
                        </div>
                    </div>
                    <!-- lower row -->
                    <div class="btn-containers">
                            <button class="mx-4 shadow-sm clearbutton" @click="clearData"><span class="button-content pe-1">Clear All </span><span class="button-icon"><font-awesome-icon icon="fa-solid fa-trash"  /></span></button>
                            <button class="button" @click="showForm"><span class="button-content">Register </span></button>
                    </div>
                </div>
            </div>
                    
                    
        </div>
        </div>
    </div>
   
  
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import nrcdata from '../composable/nrcdata'
import Navbar from '../components/Navbar.vue'
import axios from "axios";
import Modal from '../components/Modal.vue';
import { useRouter } from 'vue-router';
import { convertToMmNrc,convertToEnNrc } from 'mm-nrc';
import { pattern } from 'mm-nrc';
import { autoConvertNrc,convertNrc,convertNumbers } from "mm-nrc-converter"
// import { getFormat } from "myanmar-nrc-tool"


export default {
    components:{Navbar,Modal},
    setup(){
        // let MMNRC = require('myanmar-nrc-tool');
        // var nrc = MMNRC("12/OUKAMA (N) 123456");
        // console.log(nrc.getFormat("mm"));
        let store = useStore();
        let router =useRouter();
        const engNrcPattern = pattern.en;
        const mmNrcPattern = pattern.mm;
        const showModal = ref(false);

        let employeeData = ref()

        let doeId=ref();
        let stateId = ref({});
        let nrctownship = ref();
        let nrctype = ref();
        let nrcnumber = ref();

        let nameEn = ref();
        let nameMm= ref();
        let fatherEn = ref();
        let fatherMm = ref();
        let motherEn = ref();
        let motherMm = ref();
        let ethnic = ref();
        let religion = ref();
        let dob = ref();
        let selectedGender = ref('male');
        let mmnrc = ref('');
        let errorMessage = ref('');

        let formData = ref({})

        // modal function
        let showmodal = () => {
            showModal.value = true;
        };

        const hidemodal = () => {
            showModal.value = false;
        };



        // get DOE Data
        let does = computed(()=>{
            return store.state.doeModule.does
        })

        let getData = ()=> store.dispatch('doeModule/getDoes');
        getData();



        // get NRC Data
        let {getAllStates,getStateid, getAlltownships, getAlltypes} = nrcdata(stateId.id);

 
        let showForm =async function(){
           
            formData.value={
                employee_id:nrcnumber.value + nameEn.value,
                password:nrcnumber.value,
                name_mm:nameMm.value,
                name_en:nameEn.value,
                father_name_mm:fatherMm.value,
                father_name_en:fatherEn.value,
                mother_name_mm:motherMm.value,
                mother_name_en:motherEn.value,
                nrc :mmnrc.value,
                dob:dob.value,
                gender:selectedGender.value,
                doe_id : doeId.value,
                ethnic:ethnic.value,
                religion:religion.value,
                nrc_english:`${stateId.value.no}/${nrctownship.value}(${nrctype.value})${nrcnumber.value}`
            }  

            console.log(formData.value);
            try {
                let res = await axios.post("employees",formData.value)
                console.log(res.data.status)
            if (res.data.status == "success"){
                console.log(res.data);
                    employeeData.value = {
                        id:nrcnumber.value + nameEn.value,
                        pw:nrcnumber.value
                    }
                    showmodal();

                setTimeout(() => {
                    router.go(0)
                }, 2000);    
            }
                
            } catch (error) {
                if(error.response){
                errorMessage.value = error.response.data.message
                console.log(error.response.data.message);
            }
            }
        }

        
        let clearData=()=>{
                router.go(0);
         }

         
        let showSuccess = () => {
            successModal.value = true;
        };

        let closemessage = ()=>{
           router.go(0);
        }

        // Function to convert English number to Myanmar number

        let chgmmnrc = ()=>{

            let engnrc = `${stateId.value.no}/${nrctownship.value}(${nrctype.value})${nrcnumber.value}`

            console.log("eng",engnrc);

            if(engNrcPattern.test(engnrc)){
                let x = convertToMmNrc(engnrc)
                console.log(x);
                mmnrc.value = convertNumbers(x,"eng", "mm");
            }else{
                mmnrc.value = autoConvertNrc(engnrc)
                console.log("error")
            }

            // engnrc.value = autoConvertNrc(mmnrc);

            console.log("mm",mmnrc.value);
            // console.log(MMNRC(engnrc.value).getFormat("mm"));


        //    console.log(convertToMyanmarNumber(124));

        }
        


        return {
            does,getData,doeId,
            stateId,nrctownship,nrctype,nrcnumber,mmnrc,
            getAllStates,getAlltownships,getAlltypes,getStateid,
            nameEn,nameMm,fatherEn,fatherMm,motherEn,motherMm,ethnic,religion,
            dob,selectedGender,formData,
            showForm,
            showModal,showmodal,hidemodal,employeeData,clearData,
            showSuccess,errorMessage,closemessage,chgmmnrc
            
        }
    }
 } 
</script>

<style>

</style>