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
                  <h3 class="">Worker OWIC Number Details</h3>
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
              <h5 class="text-primary">OWIC Data</h5>
              <div v-if=" employees.data.owic_data && !edit" class="row bolds">
                  <div class="mx-auto col-12">
                      <div class="row">
  
                          <div class="col-3">
                              <p>Owic Number</p>
                              <p>{{employees.data.owic_data.owic_number }}</p>
                          </div>
  
                          <!-- Contract Date -->
                          <div class="col-3">
                              <p>Owic Created Date</p>
                              <p>{{ employees.data.owic_data.owic_created_date }}</p>
                          </div>
  
                          <!-- Contract Date -->
                          <div class="col-3">
                              <p>Owic Created Place</p>
                              <p>{{ employees.data.owic_data.owic_created_place }}</p>
                          </div>
  
                          <!-- Contract Date -->
                          <div class="col-3">
                              <p>Training Start Date</p>
                              <p>{{ employees.data.owic_data.training_start_date }}</p>
                          </div>

                          <!-- Contract Date -->
                          <div class="col-3">
                              <p>Depature Date</p>
                              <p>{{ employees.data.owic_data.departure_date }}</p>
                          </div>
                      </div>
                  </div>
              </div>
  
              <div v-else class="row">
  
                  <div class="mx-auto col-7">
                      <div class="row">
                          <div class="col-6 pb-2">
                              <label for="owic" class="d-block">Owic Number</label>
                              <input type="text" class="form-control" name="owic" id="owic" v-model="owicnum">
                          </div>
  
                          <!-- Contract Date -->
                          <div class="form-group col-6 pb-3">
                              <label for="passportcreateDate" class="d-block">Owic Created Date</label>
                              <input autocomplete="off" class="form-control bg-light date" name="MoveInDate" placeholder="DD-MM-YYYY" type="date" min="1900-12-01" max="2050-01-01" spellcheck="false" id="owiccreateDate" v-model="owiccreateDate">
                          </div>
  
                          <!-- Contract Date -->
                          <div class="form-group col-6 py-3" >
                            <label for="owiclocation" class="d-block">Owic Created Place</label>
                                    <select class="form-select" id="country" v-model="owiccreatedPlace">
                                        <option value="yangon" >Yangon</option>
                                        <option value="myawadyy">Myawadyy</option>
                                    </select>
                            </div>
  
                          <!-- Contract Date -->
                          <div class="form-group col-6 py-3">
                              <label for="trainingStartDate" class="d-block">Training Start Date</label>
                              <input autocomplete="off" class="form-control bg-light date" name="MoveInDate" placeholder="DD-MM-YYYY" type="date" min="1900-12-01" max="2050-01-01" spellcheck="false" id="trainingStartDate" v-model="trainingstartDate">
                          </div>

                           <!-- Contract Date -->
                           <div class="form-group col-6 py-3">
                              <label for="DepatureDate" class="d-block">Depature Date</label>
                              <input autocomplete="off" class="form-control bg-light date" name="MoveInDate" placeholder="DD-MM-YYYY" type="date" min="1900-12-01" max="2050-01-01" spellcheck="false" id="dapatureDate" v-model="depatureDate">
                          </div>
                      </div>
                  </div>
              </div>
  
              <!-- Btn Container -->
              <div  v-if="employees.data.owic_data && !edit" class="d-flex justify-content-center my-2">
                      <button class="btn reject mx-2 oneBtn" @click="editData"><span>Edit</span></button>
                    
              </div>
  
              <div v-else-if="!employees.data.owic_data" class="d-flex justify-content-center my-2">
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
          let owicnum = ref();
          let owiccreateDate = ref();
          let owiccreatedPlace = ref();
          let trainingstartDate = ref();
          let depatureDate = ref();
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
                  owic_number:owicnum.value,
                  owic_created_date:owiccreateDate.value,
                  owic_created_place:owiccreatedPlace.value,
                  training_start_date:trainingstartDate.value,
                  departure_date:depatureDate.value
              }

            //   let data = {
            //     user_id:props.id,
            //     owic_number:owicnum.value,
            //     owic_created_date:owiccreateDate.value,
            //     owic_created_place:"yangon",
            //     training_start_date:"required",
            //     departure_date:"required"
            //   }

              console.log(data);
  
              try {
                  let res = await axios.post('owics',data);
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
              console.log(employees.value.data.owic_data);
              owicnum.value = employees.value.data.owic_data.owic_number;
              owiccreateDate.value =employees.value.data.owic_data.owic_created_date;
              owiccreatedPlace.value = employees.value.data.owic_data.owic_created_place ;
              trainingstartDate.value = employees.value.data.owic_data.training_start_date;
              depatureDate.value = employees.value.data.owic_data.departure_date;
              edit.value=true;
          }
          
  
          let update=async()=>{
              console.log(props.id);
              let data = {
                  user_id:props.id,
                  owic_number:owicnum.value,
                  owic_created_date:owiccreateDate.value,
                  owic_created_place:owiccreatedPlace.value,
                  training_start_date:trainingstartDate.value,
                  departure_date:depatureDate.value
              }
              try {    
                  let res = await axios.patch(`owics/${employees.value.data.owic_data.id}`,data)
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
          };
  
         return{
          employees,owicnum,owiccreateDate,owiccreatedPlace,trainingstartDate,depatureDate,
          handleSubmit,cancel,edit,editData,update,
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