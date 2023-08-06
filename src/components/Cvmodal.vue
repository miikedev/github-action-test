
<template>
    <div class="cvModal bg-light">
        <LoadingPage v-if="!employees"/>
        <div v-if="errorMessage" class="errorMessage">
        <div class="error-message">
                <div class="modalss">
                    <img src="http://100dayscss.com/codepen/alert.png" width="44" height="38" />
                        <span class="title">ops !</span>
                        <p class="my-2">No Employee Data</p>
                        <button class="btn btn-danger" @click="errorMessage = null">Close</button>
                </div>
        </div>
        </div>
        <div class="cv">
           <div class="container"> 
            <div class="modalHeader text-center py-3">
                <h3 class="">Worker Cv Details</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true"  class="text-dark">&times;</span>
                </button>
            </div>

            <div v-if="employees" class="modalBody">
                <!-- status -->
                <div class="status">
                    <p>Status <span class="badge rounded-pill mx-2 " :class="employees.data.employee_info.cv_result">{{ employees.data.employee_info.cv_result }}</span></p>
                </div>
                <!-- Personal Information -->
                <h5 class="text-primary">Personal Information</h5>
                <div class="row">
                    <div class="col-9 col-lg-10">
                        <div class="row personalinform bolds">
                            <div class="col-12 col-md-6 col-lg-3">
                                <p>Worker ID</p>
                                <p>{{ employees.data.employee_id }}</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-2">
                                <p>Name(En)</p>
                                <p>{{ employees.data.employee_info.name_en }}</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <p>NRC Number</p>
                                <p>{{ employees.data.employee_info.nrc }}</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-2">
                                <p>Date of Birth</p>
                                <p>{{ employees.data.employee_info.dob }}</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-1">
                                <p>Gender</p>
                                <p>{{ employees.data.employee_info.gender }}</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <p>Father Name(En)</p>
                                <p>{{ employees.data.employee_info.father_name_en }}</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <p>DOE Number</p>
                                <p>{{ employees.data.doe.doe_id }}</p>
                            </div> 
                        </div>
                    </div>
                    
                    <!-- user Photo -->
                    <div v-if="employees.data.cv_data" class="userPhoto col-2 mx-auto mt-5">
                            <img :src="`https://api.internationalfocusgeneralservice.com//storage/${employees.data.cv_data.photo}`" alt="userPhoto">
                    </div>
                </div>
                <!-- CV Details -->
                <h5 class="text-primary pt-3">Submitted CV Details</h5>
                <div v-if="!employees.data.cv_data" class="text-center py-5">
                    <h4 class="bold">NO CV Data</h4>
                </div>
                <div v-if="employees.data.cv_data"  class="cvdetailsContainer">
                    <div class="d-flex justify-content-between align-items-center bolds">
                        <div class="">
                            <p>နေရပ်လိပ်စာ</p>
                            <p>{{ employees.data.cv_data.address }}</p>
                        </div>
                        <div class="">
                            <p>တိုင်းဒေသကြီး/ပြည်နယ်</p>
                            <p>{{ employees.data.cv_data.state }}</p>
                        </div>
                        <div class="">
                            <p>ကိုယ်အလေးချိန်</p>
                            <p>{{ employees.data.cv_data.weight }}<span>ပေါင်</span></p>
                        </div>
                        <div class="">
                            <p>အရပ်အမြင့်</p>
                            <p>{{ employees.data.cv_data.height }}</p>
                        </div>
                        <div class="">
                            <p>ပညာအရည်အချင်း</p>
                            <p>{{ employees.data.cv_data.education }}</p>
                        </div>
                        <div class="">
                            <p>အိမ်ထောင်စုစာရင်း</p>
                            <p>{{employees.data.cv_data.has_family_list  ?'ရှိပါတယ်':'မရှိပါ'}}</p>
                        </div>
                        <div class="">
                            <p>ဖုန်းနံပါတ်</p>
                            <p>{{ employees.data.cv_data.phone_number }}</p>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center bolds">
                        <div class="">
                            <p>လုပ်ငန်းအတွေ့အကြုံ</p>
                            <p>{{ employees.data.cv_data.work_exp }}</p>
                        </div>
                        <div class="margins">
                            <p>အလုပ်ခေါ်တာကိုဘယ်လိုသိပါသလဲ</p>
                            <p>{{ employees.data.cv_data.answer_1 }}</p>
                        </div>
                        <div class="margin_end">
                            <p>မည်သို့အဆက်အသွယ်ရခဲ့သလဲ</p>
                            <p>{{ employees.data.cv_data.answer_2 }}</p>
                        </div>
                    </div>
                    
                    
                </div>
                <!-- Other Information -->
                <h5 v-if="employees.data.cv_data" class="text-primary pt-3">Other Information</h5>
                <div v-if="employees.data.cv_data" class="row otherInformation">
                    <div class="col-12 col-lg-7">
                        <div class="bolds">
                            <!-- passport start -->
                            <div class="d-flex align-items-center bolds">
                                    <div class="pe-5">
                                        <p>Passport</p>
                                        <p>{{ employees.data.cv_data.has_family_passport ?'ရှိပါတယ်':'မရှိပါ' }}</p>
                                    </div>
                                    <div class="ps-5">
                                        <p>Passprt ဘယ်လိုလုပ်ခဲ့သလဲ</p>
                                        <p>{{ employees.data.cv_data.answer_3 }}</p>
                                    </div>

                                    <div class="ps-5">
                                        <p>passport ကုန်ကျစရိတ်</p>
                                        <p>{{ employees.data.cv_data.passport_cost}}</p>
                                    </div>

                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                    <div class="col-4">
                                        <p>အရောင်ကာလာခွဲခြားနိုင်ခြင်း</p>
                                        <p>{{ employees.data.cv_data.is_color_blind ? 'ရှိပါတယ်':'မရှိပါ' }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">{{ employees.data.cv_data.is_color_blind_note }}</p>
                                    </div>
                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                    <div class="col-4">
                                        <p>English စာအရည်အချင်း</p>
                                        <p>{{ employees.data.cv_data.has_e_skill ? 'ရှိပါတယ်':'မရှိပါ'}}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">{{ employees.data.cv_data.has_e_skill_note }}</p>
                                    </div>

                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                    <div class="col-4">
                                        <p>သင်္ချာအပေါင်း/အနှုတ် အရည်အချင်း</p>
                                        <p>{{ employees.data.cv_data.has_math_skill ? 'ရှိပါတယ်':'မရှိပါ' }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">{{ employees.data.cv_data.has_math_skill_note }}</p>
                                    </div>
                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                <div class="col-4">
                                        <p>ကြာချိန်စောင့်ဆိုင်းနိုင်ခြင်း</p>
                                        <p>{{ employees.data.cv_data.can_wait ? 'ရှိပါတယ်':'မရှိပါ' }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">{{ employees.data.cv_data.can_wait_note }}</p>
                                    </div>
                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                <div class="col-4">
                                        <p>သွားရောက်လုပ်ကိုင်မည့်နေရာတွင် အဆက်အသွယ်/ဆွေမျိုးများ</p>
                                        <p>{{ employees.data.cv_data.has_family_in_foregin ? 'ရှိပါတယ်':'မရှိပါ' }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">{{ employees.data.cv_data.has_family_in_foreign_note }}</p>
                                    </div>
                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                <div class="col-4">
                                        <p>ပြည်ပနိုင်ငံများသို့ သွားရောက်အလုပ်လုပ်ကိုင်ထားခြင်း</p>
                                        <p>{{ employees.data.cv_data.has_workexp_in_foregin ? 'ရှိပါတယ်':'မရှိပါ' }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">{{ employees.data.cv_data.has_workexp_in_foreign_note }}</p>
                                    </div>
                            </div>
                            <!-- passport end -->
                            <!-- passport start -->
                            <div class="d-flex bolds">
                                <div class="col-4">
                                        <p>အလုပ်ရှာဖွေရာတွင် တစ်စုံတစ်ယောက်အား အခကြေးငွေ ပေးခဲ့ရခြင်းရှိမရှိ</p>
                                        <p>{{ employees.data.cv_data.has_paid_forjob ? 'ရှိပါတယ်':'မရှိပါ' }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">{{ employees.data.cv_data.has_paid_forJob_note }}</p>
                                    </div>
                            </div>
                            <!-- passport end -->
                        </div>

                        <div class="">

                        </div>


                    </div>

                    <div  class="col-12 col-lg-5 bolds">
                        <div class="d-flex align-items-center bolds">
                                <div class="me-5">
                                    <p>Covid-19 ကာကွယ်ဆေး</p>
                                    <p>{{ employees.data.cv_data.has_covid_vaccine ? 'ထိုးထားတယ်':'မထိုးထားပါ' }}</p>
                                </div>
                        </div>
                        <div v-if=" employees.data.cv_data.has_covid_vaccine">
                            <div class="d-flex align-items-center bolds">
                                <div class="me-5">
                                        <p>ပထမအကြိမ် ကာကွယ်ဆေးအမည်</p>
                                        <p>{{ employees.data.cv_data.first_covid_vaccine_name }}</p>
                                </div>

                                <div class="px-2">
                                        <p>ရက်စွဲ</p>
                                        <p>{{ employees.data.cv_data.first_vaccinated_date }}</p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center bolds">
                                <div class="me-5">
                                        <p>ဒုတိယအကြိမ် ကာကွယ်ဆေးအမည်</p>
                                        <p>{{ employees.data.cv_data.second_covid_vaccine_name }}</p>
                                </div>

                                <div class="px-1">
                                        <p>ရက်စွဲ</p>
                                        <p>{{ employees.data.cv_data.second_vaccinated_date }}</p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center bolds">
                                <div class="me-5">
                                        <p>တတိယအကြိမ် ကာကွယ်ဆေးအမည်</p>
                                        <p>{{ employees.data.cv_data.third_covid_vaccine_name }}</p>
                                </div>

                                <div class="">
                                        <p>ရက်စွဲ</p>
                                        <p>{{ employees.data.cv_data.third_vaccinated_date }}</p>
                                </div>
                            </div>

                            <div>
                                <div class="">
                                        <p>မှတ်ချက်</p>
                                        <p class="bg-light">{{ employees.data.cv_data.vaccinated_note }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="employees" class="modalButton py-4">
                <div v-if="employees.data.cv_data">
                    <div v-if="employees.data.employee_info.cv_result == 'pending'" class="btnContainer">
                        <button class="btn reject" @click="$emit('failed')" ><span class="" @click="chgrejectstatus(employees.data.cv_data.user_id)">Reject</span></button>
                        <button class="btn accept" @click="$emit('passed')"><span class=""  @click="chgacceptstatus(employees.data.cv_data.user_id)">Accept</span></button>
                    </div>

                    <div v-else class="btnContainer">
                        <button class="btn pendbtn"  @click="$emit('pending')"><span @click="chgpendingstatus(employees.data.cv_data.user_id)">Reset to pending</span></button>
                    </div>
                </div>
                
            </div>
          </div> 
        </div>
    </div>

                     
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { defineEmits,defineComponent } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
export default {
    props:["id"],
    setup(props){
        let store = useStore();
        let family = ref();
        let passport = ref();
        let colorBlind = ref();
        let covid = ref();
        let englishSkill = ref();
        let mathSkill = ref();
        let canwait = ref();
        let familyForegin = ref();
        let workexpForegin = ref();
        let paid = ref();
        let errorMessage = ref();

        console.log(props);

        //   get employee
        let getsingleEmployees = (id)=> store.dispatch('infoModule/getsingleEmployees',id);
            getsingleEmployees(props.id.id);

        let employees = computed(()=> {
              return store.state.infoModule.singleemployeesinfo
          })

          console.log(employees);

          let chgrejectstatus = async (id)=>{
           
            let data = {
                user_id:id,
                status:"failed"
            }

           try {
            let res = await axios.post('cv_result',data);
            console.log(res.data);
            employees.value.data.employee_info.cv_result = 'failed'
           } catch (error) {
                if(error.response){
                    errorMessage.value = error.response.data.message
                    console.log(error.response.data.message);
                }
           }

            
          }

          let chgacceptstatus =async (id)=>{
            
            let data = {
                user_id:id,
                status:"passed"
            }

            let res = await axios.post('cv_result',data);
            employees.value.data.employee_info.cv_result = 'passed'
            // emit('passed')

            console.log(res.data);
          }

          
          let chgpendingstatus =async (id)=>{
            
            let data = {
                user_id:id,
                status:"pending"
            }

            let res = await axios.post('cv_result',data);
            employees.value.data.employee_info.cv_result = 'pending'

            console.log(res.data);
          }

          

        
          return{employees,family,passport,colorBlind,covid,englishSkill,mathSkill,chgrejectstatus,chgacceptstatus,chgpendingstatus,
                 canwait,familyForegin,workexpForegin,paid,errorMessage
        }
    }
}
</script>

<style>

</style>