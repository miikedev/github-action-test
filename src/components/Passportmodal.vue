<template>
  <div class="cvModal bg-white">
    <div class="cv px-5">
        <SuccessModal class="modalfix"  v-if="successModal"/>
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
        <div class="modalHeader text-center pt-2">
                <h3 class="">Passport Information</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span class="text-dark">&times;</span>
                </button>
        </div>

        <div v-if="employees" class="modalBody">
            <!-- Personal Information -->
            <div>
                <h5 class="text-primary py-2">Personal Information</h5>
                <div class="d-flex justify-content-between align-items-center bolds">
                    <div class="">
                        <p>Worker ID</p>
                        <p>{{ employees.data.employee_id }}</p>
                    </div>

                    <div class="">
                        <p>Name (En)</p>
                        <p>{{ employees.data.employee_info.name_en }}</p>
                    </div>

                    <div class="">
                        <p>NRC Number</p>
                        <p>{{ employees.data.employee_info.nrc }}</p>
                    </div>

                    <div class="">
                        <p>DOE Number</p>
                        <p>{{ employees.data.doe.doe_id}}</p>
                    </div>

                    <div class="">
                        <p>Father Name (En)</p>
                        <p>{{ employees.data.employee_info.father_name_en }}</p>
                    </div>
                </div>
            </div>
            <!-- Contract Upload Information -->
            <h5 class="text-primary py-2">Contract Upload Information</h5>
            <div v-if=" employees.data.passport_data && !edit" class="row bolds">
                <div class="col-12 col-lg-5">
                    <p>Address</p>
                    <p class="address bg-light">{{ employees.data.passport_data.address_english }}</p>
                </div>

                <div class="col-12 col-lg-7">
                    <div class="row">

                        <div class="col-6 py-3">
                            <p>Passport Number</p>
                            <p>{{employees.data.passport_data.passport_number }}</p>
                        </div>

                        <!-- Contract Date -->
                        <div class="form-group col-6 py-3">
                            <p>Passport Created Date</p>
                            <p>{{ employees.data.passport_data.passport_created_date }}</p>
                        </div>

                        <!-- Contract Date -->
                        <div class="col-6 py-3">
                            <p>Passport Location</p>
                            <p>{{ employees.data.passport_data.passport_location }}</p>
                        </div>

                        <!-- Contract Date -->
                        <div class="form-group col-6 py-3">
                            <p>Passport Expired Date</p>
                            <p>{{ employees.data.passport_data.passport_expired_date }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="row">
                <div class="col-12 col-lg-5">
                    <label for="address" class="d-block">Address</label>
                    <textarea type="text" class="address bg-light border border-dark" id="address" v-model="address"></textarea>
                </div>

                <div class="col-12 col-lg-7">
                    <div class="row">
                        <div class="col-6 py-3">
                            <label for="passport" class="d-block">Passport Number</label>
                            <input type="text" class="form-control" name="passport" id="passport" v-model="passport">
                        </div>

                        <!-- Contract Date -->
                        <div class="form-group col-6 py-3">
                            <label for="passportcreateDate" class="d-block">Passport Created Date</label>
                            <input autocomplete="off" class="form-control bg-light date" name="MoveInDate" placeholder="DD-MM-YYYY" type="date" min="1900-12-01" max="2050-01-01" spellcheck="false" id="passportcreateDate" v-model="passportcreateDate">
                        </div>

                        <!-- Contract Date -->
                        <div class="col-6 py-3">
                            <label for="passportlocation" class="d-block">Passport Created Location</label>
                            <input type="text" class="form-control" name="passportlocation" id="passportlocation" v-model="passportlocation">
                        </div>

                        <!-- Contract Date -->
                        <div class="form-group col-6 py-3">
                            <label for="passportexpiredDate" class="d-block">Passport Expired Date</label>
                            <input autocomplete="off" class="form-control bg-light date" name="MoveInDate" placeholder="DD-MM-YYYY" type="date" min="1900-12-01" max="2050-01-01" spellcheck="false" id="passportexpiredDate" v-model="passportexpiredDate">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Btn Container -->
            <div  v-if="employees.data.passport_data && !edit" class="d-flex justify-content-center my-2">
                    <button class="btn reject mx-2 oneBtn" @click="editData"><span>Edit</span></button>
                  
            </div>

            <div v-else-if="!employees.data.passport_data" class="d-flex justify-content-center my-2">
                    <!-- <button class="btn reject mx-2 oneBtn" @click="close"><span class="text-danger" >Cancel</span></button> -->
                    <button class="btn accept mx-2 oneBtn" @click="handleSubmit"><span>Confirm</span></button>
            </div>

            <div v-if="edit" class="d-flex justify-content-center my-2">
                    <button class="btn btn-outline-danger mx-2 oneBtn" @click="cancel"><span >Cancel</span></button>
                    <button class="btn btn-outline-success mx-2 oneBtn" @click="update"><span>Update</span></button>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import { useRouter } from 'vue-router';
import SuccessModal from './SuccessModal.vue';
export default {
    props:["id"],
    components:{SuccessModal},
    setup(props,{emit}){
        let store = useStore();
        let router = useRouter();
        let address = ref();
        let passport = ref();
        let passportcreateDate = ref();
        let passportlocation = ref();
        let passportexpiredDate = ref();
        let owicdata = ref();
        let edit = ref(false);
        let errorMessage = ref(null);
        let successModal = ref(false);

        //   get employee
        let getsingleEmployees = (id)=> store.dispatch('infoModule/getsingleEmployees',id);
        getsingleEmployees(props.id);
           
        let employees = computed(()=> {
              return store.state.infoModule.singleemployeesinfo
          })
          
        console.log(employees);  

        let handleSubmit=async()=>{
            let data = {
                user_id:props.id,
                passport_number:passport.value,
                passport_created_date:passportcreateDate.value,
                passport_expired_date:passportexpiredDate.value,
                passport_location:passportlocation.value,
                address_english:address.value
            }

            console.log(data);

            try {
                let res = await axios.post('passports',data);
                console.log(res.data);
                if(res){
                setTimeout(()=>{
                    console.log("emit");
                    emit("closeModal");    
                },2000)
                showSuccess();
            }
            } catch (error) {
                if(error.response){
                    errorMessage.value = error.response.data.message;
                   
                }
            }

            
        } 

        let editData = ()=>{
            console.log(employees.value.data.passport_data);
            address.value = employees.value.data.passport_data.address_english ;
            passport.value =employees.value.data.passport_data.passport_number;
            passportcreateDate.value = employees.value.data.passport_data.passport_created_date ;
            passportlocation.value = employees.value.data.passport_data.passport_location;
            passportexpiredDate.value = employees.value.data.passport_data.passport_expired_date;
            edit.value=true;
        }
        

        let update=async()=>{
            console.log(props.id);
            let data = {
                user_id:props.id,
                passport_number:passport.value,
                passport_created_date:passportcreateDate.value,
                passport_expired_date:passportexpiredDate.value,
                passport_location:passportlocation.value,
                address_english:address.value
            }
            try {    
                let res = await axios.patch(`passports/${employees.value.data.passport_data.id}`,data)
                console.log(res.data);  
                if(res){
                setTimeout(()=>{
                    console.log("emit");
                    emit("closeModal");    
                },2000)
                showSuccess();
                }
            } catch (error) {
                if(error.response){
                    errorMessage.value = error.response.data.message;
                    
                }
            }
            // props.id.id = data;
        }


        let cancel=()=>{
            edit.value = false;
        }

        let showSuccess = () => {
            successModal.value = true;
            bgactive.value = true;
        };

       return{
        employees,address,passport,passportcreateDate,passportexpiredDate,passportlocation,
        handleSubmit,owicdata,cancel,edit,editData,update,
        successModal,showSuccess,errorMessage
       }   
    }
}
</script>

<style>
.address{
    width: 350px;
    height: 250px;
    padding-left:20px;
    padding-top:10px;

}

.date{
    /* width: 300px; */
    -webkit-appearance: none;
    font-size: 18px;
    text-align: center;
    letter-spacing: 2px;
    padding-right: 10px;
    border-radius: 8px;
    
}

.messageerror{
    width: 100vw;
    height: 100vh;
    font-weight: bold;
    font-size: 18px;
    padding: 30px 20px;
    transition: 1s;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,0.36458333333333337) 100%, rgba(0,212,255,1) 100%);

    position: absolute;
    top: 0;
    left:0;
    

    z-index: 100;
}

.modalfix{
    position: fixed;
    top: 50%;
    left: 50%;

    border:3px solid #077bff;
}


</style>