<template>
    <div class="bg-light mains" :class="showModal === true ? 'red' : 'blue'">
        <Navbar/>
        <SuccessModal  v-if="showModal"/>
        <div class="page"> 
    <div class="containers py-4">
        <h4 class="py-2">Review Worker Interview Results</h4>

        <div class="row mt-4">
            <!-- chose DOE Num -->
            <div class="form-group col-3">
                    <label for="doenum">DOE Number</label>
                        <select class="form-select bg-light" id="doenum" v-model="doeId" @change="getdoeId(doeId)">
                            <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>     
                        </select>
            </div>
            <!-- choose status -->
            <div class="col-4">
                <label class="mx-4">Status</label>
                <div class="d-flex mx-3 mt-1 ">
                    <span class="badge status btn btn-outline-danger rounded-pill mx-2 text-danger" :class="filterStatus === 'failed' ? 'red' : 'blue'" @click="getfilter('failed')"><span v-if="filterStatus==='failed'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Failed</span>
                    <span class="badge status btn btn-outline-warning  rounded-pill mx-2 text-warning" :class="filterStatus === 'pending' ? 'red' : 'blue'" @click="getfilter('pending')"><span v-if="filterStatus==='pending'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Pending</span>
                    <span class="badge status btn btn-outline-success rounded-pill mx-2 text-success" :class="filterStatus === 'passed' ? 'red' : 'blue'" @click="getfilter('passed')"><span v-if="filterStatus==='passed'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Passed</span>   
                </div>
               
            </div>
        </div>
        <!-- Worker Table -->
        <!-- {{ selectedEmployees }} -->
        <div class="mt-5 me-3">
            <h6>{{ workernum }} Worker Interview Result</h6>
            <div class="d-flex">
                <p>{{ selectednum }} workers Selected</p>
                <div class="mx-2">
                    <button class="badge btn btn-outline-danger mx-2" @click="statuschgEmployee('failed')"><span class="text-dark">Fail Selected</span></button>
                    <button class="badge btn btn-outline-warning mx-2" @click="statuschgEmployee('pending')"><span class="text-dark">Reset to Pending</span></button>
                    <button class="badge btn btn-outline-success mx-2" @click="statuschgEmployee('passed')"><span class="text-dark">Pass Selected</span></button>
                </div>
            </div>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th v-if="doeId">
                            <input type="checkbox" v-model="allEmployees" @change="selectedallEmployee">
                        </th>
                        <th scope="col">No</th>
                        <th scope="col">Worker ID</th>
                        <th scope="col">Name(En)</th>
                        <th scope="col">NRC Number</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody v-for="(employees,index) in fillterEmployees" :key="employees.id">
                        <tr>
                            <td>
                                <input type="checkbox" v-model="selectedEmployees" :value="{id:employees.employee_id,index,note:employees.worker_result_note}" @change="selectNum">
                            </td>
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ employees.employee_id }}</td>
                            <td>{{ employees.name_en }}</td>
                            <td>{{ employees.nrc }}</td>
                            <td>{{ employees.gender }}</td>
                            <td><span class="badge rounded-pill mx-2" :class="employees.worker_result">{{ employees.worker_result }}</span></td>
                            <td data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" @click="getnote(employees.worker_result_note)" ><font-awesome-icon icon="fa-solid fa-angle-down" /></td>
                        </tr>
                        <tr class="collapse  accordion-collapse" :id="'collapse'+index" data-bs-parent=".table">
                            <td colspan="7"> 
                               <div class="col-6">
                                    <h6>Note</h6>
                                    <textarea class="d-block bg-light my-2" cols="75" rows="4" v-model="notetext"></textarea>
                                    <button v-if="!employees.worker_result_note" class="btn btn-outline-primary notebtn"  @click="saveNote({id:employees.employee_id,status:employees.worker_result})">Save Note</button> 
                                    <button v-if="employees.worker_result_note" class="btn btn-outline-primary notebtn"  @click="saveNote({id:employees.employee_id,status:employees.worker_result})">Edit Note</button>  
                               </div>
                            </td>
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
import Navbar from '../components/Navbar.vue'
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import axios from "axios";
import { useRouter } from 'vue-router';
import LoadingPage from '../components/LoadingPage.vue'
import SuccessModal from '../components/SuccessModal.vue'

export default {
    components:{Navbar,LoadingPage,SuccessModal},
    setup(){
        let router = useRouter();
        let store = useStore();
        let doeId=ref();
        let fillterEmployees = ref();
        let allEmployees = ref(false);
        let selectedEmployees = ref([]);
        let notetext = ref();
        let filterStatus=ref(null);
        let workernum = ref();
        let selectednum = ref();
        const showModal = ref(false);
        let isCollapsed = ref(false)
        let datas = ref({
            result:[]
        })

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

        // get All Employees Data
        let getEmployees = ()=> store.dispatch('registerModule/getEmployees');
        getEmployees();
        console.log("get employee =>", getEmployees)

        let employees = computed(()=> {
            return store.state.registerModule.employees
        })

        let getdoeId =(id)=>{
            // console.log(id);
            // console.log(employees.value.data[0].doe.doe_id);
            fillterEmployees.value = employees.value.data.filter((employee)=>{
                if (filterStatus.value && employee.doe !== null) {  
                    return employee.doe.doe_id == doeId.value & employee.worker_result == filterStatus.value
                }else if(employee.doe !== null){
                    return employee.doe.doe_id == id
                }
            })
            workernum.value=fillterEmployees.value.length
            // console.log(fillterEmployees);
        }

        let selectedallEmployee =()=>{
            if(allEmployees.value == true){
                selectedEmployees.value=[];
                // console.log(fillterEmployees.value[0].employee_id);
                fillterEmployees.value.forEach((allemployee,index)=>{
                    selectedEmployees.value.push({
                        id:allemployee.employee_id,
                        index,
                        note:allemployee.worker_result_note

                    })
                })

                // console.log(fil);
            }else{
                selectedEmployees.value = [];
            }
            selectNum();
        }

        let statuschgEmployee=async (status)=>{
            console.log(status);
            selectedEmployees.value.forEach((select,index)=>{
                console.log(select);
                fillterEmployees.value[selectedEmployees.value[index].index].worker_result = status
                datas.value.result.push({
                employee_id:select.id,
                status:status,
                note:select.note
             })
            })   

            console.log(datas.value);

            await axios.post("worker_result", datas.value);
            
        }

        let selectNum = ()=>{
            selectednum.value=selectedEmployees.value.length
        }

        
        // Save Note Function
        let saveNote =async (data)=>{
            console.log(data);
            let savedata = {result:[
                {
                    status:data.status,
                    employee_id:data.id,
                    note:notetext.value
                }  
            ]}
            console.log(savedata);
            try {
                let res = await axios.post("worker_result", savedata);
                console.log(res.data);
                if(res.data.status == 'success'){
                    showmodal();
                    setTimeout(()=>{
                        router.go(0);
                    },2000)
                }    
            } catch (error) {
                if(error.response){
                    console.log(error.response);
                }
            }
            // console.log(data.index);
            // let res = await axios.post("worker_result", savedata);
            // console.log(res.data);
            // console.log(res.data);
            // if(res.data.status == 'success'){
            //     showmodal();
            //     setTimeout(()=>{
            //         router.go(0);
            //     },2000)
            // }else if(res.data.error){
            //     console.log(res.data.error.message)
            // }
        }

        let getnote=(note)=>{
            console.log(note);
            if(note!==null){
                notetext.value = note
            }else{
                notetext.value = "";
            }
          
        }

        //Filter Function
        let getfilter=async(value)=>{
            console.log(value);
            if(filterStatus.value===value){
                filterStatus.value=null;
            }else{
                filterStatus.value=value;
            }

            fillterEmployees.value=employees.value.data.filter((employee)=>{
                if (doeId.value && employee.doe !==null) {  
                    return employee.doe.doe_id == doeId.value & employee.worker_result == value
                }else{
                    return employee.worker_result == value
                }
                    
            })

            
        }

        return{
            does,employees,getEmployees,doeId,getdoeId,fillterEmployees,
            allEmployees,selectedEmployees,statuschgEmployee,
            selectedallEmployee,datas,notetext,saveNote,getnote,getfilter,filterStatus,workernum,selectednum,selectNum,
            showModal,showmodal,hidemodal,isCollapsed

        }
    }
}
</script>

<style>
.status{
    width: 150px;
    height: 30px;
    line-height: 19px;
}

textarea{
    border:none;
    font-weight:bold;
    padding:5px 10px;
}
</style>