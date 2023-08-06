<template>
  <div class="bg-light mains" :class="showModal && !errorMessage ? 'red' : 'blue'">
      <Navbar/>
      <LoadingPage v-if="!does"/>
      <CvModalview v-if="showModal && !errorMessage" :id="userid" @closeModal="hidemodal"/>
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
          <div class="containers pt-4 pb-5">
              <h4 class="text-bold py-2">Worker Information</h4>
              <div class="row mt-4">
                  <!-- chose DOE Num -->
                  <div class="form-group col-3">
                          <label for="doenum">DOE Number</label>
                              <select class="form-select bg-light" id="doenum" v-model="doeId" @change="getdoeId(doeId)">
                                  <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>     
                            </select>    
                  </div>

                  <div class="col-3 download">
                        <button class="btn btn-outline-primary" @click="downloadData(doeId)"><font-awesome-icon icon="fa-solid fa-file-export" /></button>
                  </div>

                  
                  <!-- choose status -->
                  <!-- <div class="col-4">
                      <label class="mx-4">Status</label>
                      <div class="d-flex mx-3 mt-1 ">
                          <span class="badge status rounded-pill mx-2" :class="filterStatus === 'pending' ? 'red' : 'blue'" @click="getfilter('pending')"><span v-if="filterStatus==='pending'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Pending</span>
                          <span class="badge status rounded-pill mx-2" :class="filterStatus === 'passed' ? 'red' : 'blue'" @click="getfilter('passed')"><span v-if="filterStatus==='passed'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Passed</span>
                          <span class="badge status rounded-pill mx-2" :class="filterStatus === 'failed' ? 'red' : 'blue'" @click="getfilter('failed')"><span v-if="filterStatus==='failed'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Failed</span>
                      </div>
                  
                  </div> -->
              </div>
               <!-- Worker Table -->
               <div class="mt-5 me-3">
                      <!-- <h6>{{ workernum }} Workers Info</h6> -->
                      <div>
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                  <th scope="col">No</th>
                                  <th scope="col">Worker ID</th>
                                  <th scope="col">Name(En)</th>
                                  <th scope="col">NRC Number</th>
                                  <th scope="col">Father Name(En)</th>
                                  <th scope="col">Dob</th>
                                  <th scope="col">Address</th>
                                  <th scope="col">Gender</th>
                                  <th scope="col">Contract</th>
                                  <th scope="col">Details</th>
                                  </tr>
                              </thead>
                              <tbody v-for="(employees,index) in fillterEmployees" :key="employees.id" >
                                  <tr class="">
                                      <th scope="row">{{ index + 1 }}</th>
                                      <td>{{ employees.user.employee_id }}</td>
                                      <td>{{ employees.name_en }}</td>
                                      <td>{{ employees.nrc }}</td>
                                      <td v-if="employees">{{ employees.father_name_en}}</td>
                                      <!-- <td v-if="employees.cv_data == null" class="text-danger">No Data</td> -->
                                      <td>{{ employees.dob }}</td>
                                      <td v-if="employees.cv">{{ employees.cv.address }}</td>
                                      <td v-if="employees.cv == null" class="text-danger">No Data</td>
                                      <td v-if="employees.cv">{{ employees.gender }}</td>
                                      <td v-if="employees.cv == null" class="text-danger">No Data</td>
                                      <td v-if="employees.contract_upload"><span class="btn btn-sm" :class="contractArray[index] > 548 ? 'btn-danger' : 'btn-success'">{{contractArray[index] }} days ago</span></td>
                                      <td v-if="employees.contract_upload == null" class="text-danger">No Data</td>
                                      <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" @click="showmodal({id:employees.user_id,index})" /></td>
                                      
                                  </tr>   
                              </tbody>
                          </table>
                      </div>
               </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import CvModalview from '../components/Cvmodalview.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import LoadingPage from '../components/LoadingPage.vue'
import { useRouter } from 'vue-router';
import FileSaver from 'file-saver'
import axios from "axios";

export default {
  components:{Navbar,CvModalview,LoadingPage},
  setup(){
      let router = useRouter();
      let store = useStore();
      let doeId=ref();
      let userid = ref();
      let fillterEmployees = ref();
      let message = ref(true);
      let contractDate = ref();
      let contractArray = ref([]);

      const showModal = ref(false);

        // get Error Message
        let errorMessage = computed(()=>{
            return store.state.infoModule.errorMessage
        })

        // get DOE Data
            
          let does = computed(()=>{
              return store.state.doeModule.does
          })

             
        //   get employee
            let getEmployees = ()=> store.dispatch('infoModule/getEmployees');

          let getData = ()=> store.dispatch('doeModule/getDoes');
          onMounted(()=>{
            if(errorMessage.value){
                router.go(0);
                console.log("hey");
            }
            // router.go(0);
            getEmployees();
            getData();
            // if(does){
            //     console.log(does.value.length);
            //     console.log(does.value[does.value.length - 1]);
            //     
            // }
            
          })
       
          

          let employees = computed(()=> {
              return store.state.infoModule.employeesinfo
          })

         


          let getdoeId=(id)=>{
           
            if(employees.value){
                fillterEmployees.value = employees.value.data.filter((employee)=>{
                if (employee.contrat_upload !== null & employee.doe!== null ) {  
                return employee.doe.doe_id == id
                }
                
            })
            }

            console.log(fillterEmployees.value);
            contractDate.value = fillterEmployees.value.forEach((fillterEmp)=>{
                
                if(fillterEmp.contract_upload){
                    console.log(fillterEmp.contract_upload);
                    let daysSinceLastDate = computed(()=>{
                        const currentDate = new Date()
                        const previousDate = new Date(fillterEmp.contract_upload.contract_date)
                        const timeDifference = currentDate.getTime() - previousDate.getTime()
                        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
                        return daysDifference
                    })
                    console.log(daysSinceLastDate.value);
                    contractArray.value.push(daysSinceLastDate.value);
                }
            })

        //   console.log(contractDate.value);  
            
          }

          // modal function
        let showmodal = (id) => {
            userid.value = id;
            showModal.value = true;
        };

        const hidemodal = () => {
            showModal.value = false;
        };

        let closemessage = ()=>{
            // message.value = false;
            router.go(0);
            console.log("hey");
        }

        let downloadData = async(id)=>{
            let fileName = 'test1';
            // const encodeEndPoint = encodeURIComponent(id);
            // console.log(id);
            // let res = await axios.get(`export/does/${id}`)
            // console.log(res.data);
        //     await axios.get(`export/does/${id}`, {
        //         file_name: fileName
        //     }, {
        //         responseType: 'blob'
        //     }).then(response => {
        //     // Create a download link for the received blob and trigger the download
        //     const downloadLink = document.createElement('a');
        //     const url = window.URL.createObjectURL(new Blob([response.data]));
        //     downloadLink.href = url;
        //     downloadLink.setAttribute('download', `doe_data_${id}.xlsx`);
        //     document.body.appendChild(downloadLink);
        //     downloadLink.click();
        //     window.URL.revokeObjectURL(url);
        //   })
        //   .catch(error => {
        //     console.error('Error exporting Excel:', error);
        //   });
        await axios({
            method: 'get',
            url: `https://api.internationalfocusgeneralservice.com/api/export/does/${id}`,
            responseType: 'blob', // Set the response type to 'blob' to handle binary data
          }).then(response => {
            // Create a download link for the received blob and trigger the download
            const downloadLink = document.createElement('a');
            const url = window.URL.createObjectURL(new Blob([response.data]));
            downloadLink.href = url;
            downloadLink.setAttribute('download', `doe5_data_${id}.xlsx`);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(error => {
            console.error('Error exporting Excel:', error);
          });
           
        }

          return{
              does,doeId,getdoeId,fillterEmployees,showModal,showmodal,hidemodal,userid,
              errorMessage,closemessage,message,contractDate,contractArray,
              downloadData
          }
  }
}
</script>

<style>

</style>