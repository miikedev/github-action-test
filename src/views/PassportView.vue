<template>
    <div class="bg-light mains" :class="bgactive === true ? 'red' : 'blue'">
      <Navbar/>
      <Passportmodal v-if="showModal" :id="userid" @closeModal="hidemodal"></Passportmodal>
      <Owicmodal v-if="owicModal" :id="userid" @closeModal="hidemodal"></Owicmodal>
      <div class="page">
          <div class="containers pt-4">
              <h4 class="py-2">Passport</h4>
              <!-- chose DOE Num -->
              <div class="form-group col-3 mt-4">
                      <label for="doenum">DOE Number</label>
                          <select class="form-select bg-light" id="doenum" v-model="doeId" @change="getdoeId(doeId)">
                              <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>     
                          </select>
              </div>
              <!-- table -->
              <div class="containers mt-5">
                  <!-- title -->
                  <h4 class="py-4">Workers Information</h4>
                  <!-- Information Table-->
                  <table class="table table-striped">
                      <thead>
                          <tr>
                          <th scope="col">No</th>
                          <th scope="col">Worker ID</th>
                          <th scope="col">Name (En)</th>
                          <th scope="col">NRC Number</th>
                          <th scope="col">Father Name(En)</th>
                          <th scope="col">Passport</th>
                          <!-- <th scope="col">Owic</th> -->
                          </tr>
                      </thead>
                      <tbody v-for="(employees,index) in fillterEmployees" :key="employees.id">
                          <tr>
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ employees.user.employee_id }}</td>
                          <td>{{ employees.name_en }}</td>
                          <td>{{employees.nrc }}</td>
                          <td>{{ employees.father_name_en }}</td>
                          <td>
                              <div>
                                  <button class="btn btn-primary btn-sm mx-1 my-1"  @click="showmodal(employees.user_id)">Passport Upload</button>
                                  <!-- <button class="btn btn-warning btn-sm mx-1"  @click="showowicmodal(employees.employee_info.user_id)">Owic</button> -->
                              </div>
                          </td>
                         
                          <!-- <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" @click="showmodal({user_id:employees.employee_info.user_id,id:employees.passport_and_owic_data})" /></td> -->
                          </tr>
                      </tbody>
                  </table>
          </div>
              
          </div>
          
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import Owicmodal from '../components/Owicmodal.vue';
  import Passportmodal from '../components/Passportmodal.vue';
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  export default {
  components:{Navbar,Passportmodal,Owicmodal},
  setup(){
      let showModal = ref(false);
      let owicModal = ref(false);
      let store = useStore();
      let doeId=ref();
      let fillterEmployees = ref();
      let userid = ref();
      let bgactive = ref(false);
  
  
  
      // get DOE Data
          let does = computed(()=>{
              return store.state.doeModule.does
          })
  
          let getData = ()=> store.dispatch('doeModule/getDoes');
          getData();  
         
       // get All Employees Data
       let getEmployees = ()=> store.dispatch('infoModule/getEmployees');
          getEmployees();
  
          let employees = computed(()=> {
              return store.state.infoModule.employeesinfo
          })    
      
          let getdoeId =(id)=>{
              // console.log(id);
              console.log(employees.value);
              fillterEmployees.value = employees.value.data.filter((employee)=>{
                  if(employee.doe !== null){
                      return employee.doe.doe_id == id
                  }
              })
              console.log(fillterEmployees.value[0]);
          }
  
  
      let showmodal = (id) => {
              userid.value = id;
              showModal.value = true;
              bgactive.value = true;
          };
  
      let showowicmodal = (id) => {
              userid.value = id;
              owicModal.value = true;
              bgactive.value = true;
          };    
  
      let hidemodal = () => {
          // console.log("hide modal")
              showModal.value = false;
              owicModal.value = false;
              bgactive.value = false;
          };
  
  
      return{
          doeId,does,getdoeId,fillterEmployees,employees,
          showModal,showmodal,hidemodal,userid,owicModal,showowicmodal,bgactive
      }
  
  }
  }
  </script>
  
  <style>
  
  </style>