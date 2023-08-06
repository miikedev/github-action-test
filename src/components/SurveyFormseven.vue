<template>
    <div class="container form_control">
        <!-- alert -->
        <div v-if="errorMessage" class="errorMessage">
            <div class="error-message">
                <div class="modalss">
                    <img src="http://100dayscss.com/codepen/alert.png" width="44" height="38" />
                        <span class="title">ops !</span>
                        <p class="my-2">{{ errorMessage }}</p>
                        <button class="btn btn-danger" @click="errorMessage=null">Close</button>
                </div>
            </div>
        </div>
        <div class="text-center">
            <div class="col-12 mb-5 notice_and_arrangement">
                <h5 class="pagetitle text-center">သင်တန်း ဆန်းစစ်ချက် ပုံစံ</h5>

                <!-- Reminder  -->
                <div class="reminder_control mt-5 text-justify">
                    <p class="text-justify">သင်၏ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို
                    <span class="company_name">INTERNATIONAL FOCUS GENERAL SERVICES CO.,LTD</span> မှ လုပ်ငန်း လိုအပ်ချက်အရ သိမ်းဆည်းထားမည်ကို လက်ခံသဘောတူပါသလား။</p>
                </div>
                <!-- User Agreement  -->
                <div class="col-12 agrement_control">
                    <label for="agrement" class="col-8 aggrement_text">လက်ခံသဘောတူပါသည်။</label>
                    <input type="checkbox" class="col-3 aggrement_checkbox" v-model="isChecked" />
                </div>
            </div>
            <form @submit.prevent="submitSurvey" method="post">
                <div class="">
                    <div class="d-flex col-12 justify-content-between">
                        <div class="col-5">
                            <label for="trainingName">သင်တန်းအမည်</label>
                            <input type="text" id="trainingName" class="form-control mt-2" v-model="trainingName">         
                        </div>

                        <div class="col-4">
                            <label for="position">ရာထူး</label>
                            <input type="text" id="position" class="form-control  mt-2" v-model="position">
                        </div>
                        
                    </div>
                </div>
                <div class="mb-5">
                    <label for="col-12 form-label">Title 1 Question</label>
                </div>
                <!-- Question 1 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">Ethical Recruitment System ဆိုသည်မှာ အလုပ်သမားက ကုန်ကျစရိတ်အားလုံးကို ပေးသွင်းရသည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="1" v-model="surveyFormData.q71" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="0" v-model="surveyFormData.q71" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Question 2 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">Demend Letter မရှိပဲ အလုပ်သမားများကို စုဆောင်းနိုင်သည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="1" v-model="surveyFormData.q72" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="0" v-model="surveyFormData.q72" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Question 3 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">အလုပ်သမား၏ စာရွက်စာတမ်းများကို သိမ်းဆည်းခွင့်ရှိသည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions3" id="inlineRadio1" value="1" v-model="surveyFormData.q73" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions3" id="inlineRadio2" value="0" v-model="surveyFormData.q73" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Question 4 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">(ဃ) လျှိဝှက်ထိန်းသိမ်းထားသော အကြောင်းအရာများနှင့် စာရွက်စာတမ်းများကို ထုတ်ဖော်ပြောကြားခွင့်ရှိသည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions4" id="inlineRadio1" value="1" v-model="surveyFormData.q74" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions4" id="inlineRadio2" value="0" v-model="surveyFormData.q74" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Question 5 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">Ethical Recruitment System တွင်ပွဲစားများဖြင့် လုပ်သားများ စုဆောင်းနိုင်သည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions5" id="inlineRadio1" value="1" v-model="surveyFormData.q75" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions5" id="inlineRadio2" value="0" v-model="surveyFormData.q75" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Section 2  -->
                <div class="mb-5">
                    <label for="col-12 form-label">၂ ။ အောက်ပါမေးခွန်းများ၏ အဖြေမှန်ကို ရွေးပါ။</label>
                </div>
                <!-- Question 1 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">(က) ခွင့်ပြုချက် မရှိခြင်းနှင့် ပြစ်ဒဏ်ပေးခံရမည်ကို ခြိမ်းခြောက်သည့်အခါ အတင်းအဓမ္မ လုပ်အားပေးခိုင်းစေခြင်း ခံရမည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.1" id="inlineRadio1" value="1" v-model="surveyFormData.q76" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.1" id="inlineRadio2" value="0" v-model="surveyFormData.q76" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Question 2 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">(ခ) အများဆုံး ထုတ်လုပ်မှု ရာသီဖြစ်သည့်အခါ အလုပ်သမားများ အားလုံးသည် ထုတ်လုပ်မှုကို ထောက်ပံ့ရမည်ဖြစ်ပြီး အချိန်ပိုအလုပ်ကို ငြင်းဆန်ရန် ခွင့်မပြုပါ။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.2" id="inlineRadio1" value="1" v-model="surveyFormData.q77" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.2" id="inlineRadio2" value="0" v-model="surveyFormData.q77" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Question 3 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">(ဂ) အောက်ပါတိုမှ မည်သည့် လာဒ်ထိုးခြင်းကို အများစုက စဉ်းစားသနည်း။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-4 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.3" id="inlineRadio1" value="cash" v-model="surveyFormData.q78" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">ငွေသား</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-4 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.3" id="inlineRadio2" value="holiday_trip" v-model="surveyFormData.q78" />
                                <label class="form-check-label radio_label" for="inlineRadio2">အားလပ်ရက် အပန်းဖြေခရီး</label>
                               </div>
                               <div class="col-3"></div>
                            </div>
                            <div class="col-4 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.3" id="inlineRadio3" value="low_value_gift" v-model="surveyFormData.q78" />
                                <label class="form-check-label radio_label" for="inlineRadio3">တန်ဖိုးနည်း လက်ဆောင်</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Question 4  -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">အချိန်ပို အလုပ်ကို မည်သည့်နှုန်းဖြင့် ပေးရမည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-4 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.4" id="inlineRadio1" value="2" v-model="surveyFormData.q79" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">(၂)ဆနှုန်း</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-4 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.4" id="inlineRadio2" value="1.5" v-model="surveyFormData.q79" />
                                <label class="form-check-label radio_label" for="inlineRadio2">(၁.၅)ဆနှုန်း</label>
                               </div>
                               <div class="col-3"></div>
                            </div>
                            <div class="col-4 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.4" id="inlineRadio3" value="3" v-model="surveyFormData.q79" />
                                <label class="form-check-label radio_label" for="inlineRadio3">(၃)ဆနှုန်း</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">(င) ရွှေ့ပြောင်း အလုပ်သမားများသည် အလုပ်သမား သမဂ္ဂကို ထူထောင်ခွင့်မရှိပါ သိုသော် အဖွဲဝင်အဖြစ် ဝင်ပိုင်ခွင့်ရှိသည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.5" id="inlineRadio1" value="1" v-model="surveyFormData.q710" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.5" id="inlineRadio2" value="0" v-model="surveyFormData.q710" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <!-- Question 6 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">(စ) အလုပ်သမားများသည် အလုပ်ရှင် ထံတွင် ခံစားခွင့်များ အလုပ်ခွင်အခြေအနေများကို တိုးမြှင့်ပေးရန် လက်မှတ်ထိုး၍ တောင်းဆိုခွင့်ရှိသည်။ သိုသော် တောင်းဆိုသူဦးရေသည် စက်ရုံထဲ၌ရှိသော အလုပ်သမား စုစုပေါင်းဦးရေ၏ အနည်းဆုံး (15%) ရှိရမည် ဖြစ်သည်။</label>
                        <div class="col-12 btn-group answer_box d-flex" role="group" aria-label="Basic radio toggle button group">

                            <div class="col-6 form-check form-check-inline">
                                <div class="col-3">
                                    <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.6" id="inlineRadio1" value="1" v-model="surveyFormData.q711" />
                                    <label class="form-check-label radio_label" for="inlineRadio1">မှန်</label>
                                </div>
                                <div class="col-3"></div>
                            </div>

                            <div class="col-6 form-check form-check-inline">
                               <div class="col-3">
                                <input class="form-check-input mt-2 radio_check_box" type="radio" name="inlineRadioOptions2.6" id="inlineRadio2" value="0" v-model="surveyFormData.q711" />
                                <label class="form-check-label radio_label" for="inlineRadio2">မှား</label>
                               </div>
                               <div class="col-3"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
               
            
               
                    
                
                <!-- Submit and Cancel Btn Section  -->
                <div class="col-12 mt-5 d-flex text-center submitbtn_control">
                    <div class="col-5   cancelbtn">
                    <button class=" btn btn-outline-danger" @click="clearAll">ပယ်ဖျက်မည်</button>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-5   submitbtn">
                    <button type="submit" class="btn btn-outline-primary" @click.prevent="submitSurveyForm">အတည်ပြုမည်</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    export default{
        setup(){
            let router = useRouter();
            const isChecked = ref(false);
            let workername = ref();
            let submitSurvey = ref({});
            let trainingName = ref();
            let position = ref();
            let errorMessage = ref();

            const surveyFormData = ref({
                q71: '0',
                q72: '0',
                q73: '0',
                q74: '0',
                q75: '0',
                q76: '0',
                q77: '0',
                q78: 'cash',
                q79: '2',
                q710: '0',
                q711: '0',
                

            });

            let submitSurveyForm = async function(){
                let userid = localStorage.getItem('userid');
                let res = await axios.get(`employee_infos/${userid}`);
                console.log(res.data);
                workername.value = res.data.data.employee_info.name_en;
                console.log(workername.value,trainingName.value,position.value);
                let data = surveyFormData.value;
                submitSurvey.value = {
                    user_id:userid,
                    worker_name:workername.value,
                    training_name:trainingName.value,
                    position:position.value,
                    answer_1:data.q71,   
                    answer_2:data.q72,
                    answer_3:data.q73,
                    answer_4:data.q74,
                    answer_5:data.q75,
                    answer_6:data.q76,
                    answer_7:data.q77,
                    answer_8:data.q78,
                    answer_9:data.q79,
                    answer_10:data.q710,
                    answer_11:data.q711,
                    
                   
                }

                console.log('1 Survey One Answer =>', submitSurvey.value);
                console.log('2 Survey One Answer Type =>', typeof(submitSurvey.value));
                try{
                    const response = await axios.post('survey/seventh', submitSurvey.value);
                    if(response){
                        console.log('Response =>', response.data);
                        router.go(0);   
                    }
                }catch (error){
                    if(error.response){
                        window.scrollTo(0,0);

                        errorMessage.value = error.response.data.message
                        console.log(error.response.data.message);
                    }
                }

            };

            let clearAll = ()=>{
                surveyFormData.value = {
                q71: '',
                q72: '',
                q73: '',
                q74: '',
                q75: '',
                q76: '',
                q77: '',
                q78: '',
                q79: '',
                q710: '',
                q711: '',

            };

            }
            return{
                isChecked,
                surveyFormData,
                submitSurvey,
                submitSurveyForm,
                trainingName,
                position,
                errorMessage,
                clearAll



            }
        }
    }
</script>

<style scoped>
.errorMessage{
    width: 100vw;
    height: 100vh;
    font-weight: bold;
    font-size: 18px;
    padding: 30px 20px;
    transition: 1s;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,0.36458333333333337) 100%, rgba(0,212,255,1) 100%);

    position: absolute;
    top: 0;
    left: 0;
    

    z-index: 100;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 400px;
  width: 100%;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  overflow: hidden;
  color: #415868;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index:100;


}

.form_control {
  margin-top: 3%;
    width: 370px;
    /* height: 400vh; */
    /* border: 1px solid blue; */
    padding: 3rem;

    /* display: flex; */
    justify-content: center;
    align-items: center;
}

.submitbtn .btn, .cancelbtn .btn{
        font-size: 12px;
    }

    .pagetitle{
        line-height: 2.2rem;
    }
    .aggrement_text{
        font-size: 15px;
    }

    .check_input{
        font-size: 1.4rem;
    }
    .input_text_box{
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #f6f6f6;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }


    .input_text_box:focus{
        color: #212529;
        background-color: #fff;
        border: 2px solid #0439DE;
        outline: 0;
    }

    .answer_box{
        font-size: 10px;
    }

    .small-label {
    font-size: 12px;
  }

    .form_question{
        font-size: 14px;
        text-align: justify;
        line-height: 20pt;
    }

    .note_container{
        position: relative;
    }
    
    label.note_title{
        position: absolute;
        top: -30%;
        left: 0;

        font-size: 13px;
    }

    .note_container textarea{
        border-radius: 15px;
    }

    .radio_check_box{
        font-size: 1.3rem;
        border: 1px solid blue;
    }

    .radio_label{
        font-size: 0.8rem;
        margin-top: 3px;
    }
    
</style>