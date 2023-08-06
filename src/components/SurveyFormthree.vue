<template>
    <div class="container form_control">
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
        <div class="text-center">
            <div class="col-12 mb-5 notice_and_arrangement">
                <h5 class="pagetitle text-center">အလုပ်ရှင်-အလုပ်သမားများ သဘောတူစာချုပ်ချုပ်ဆိုပြီး ကြေငြာချက်ပုံစံ(၂)</h5>

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
                <!-- Question 1 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁။ အလုပ်သမားညွှန်ကြားရေးဦးစီးရေးဌာနမှ တာဝန်ရှိသူ‌၏ စာချုပ်ပါအချက်အလက်များ ရှင်းလင်းပြောကြားမှုကို သင်နားလည်ပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q31" id="q31Yes" autocomplete="off" value="1" v-model="surveyFormData.q31"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q31Yes">နားလည်ပါသည် </label>

                    <input type="radio" class="btn-check" name="q31" id="q31No" autocomplete="off" value="0" v-model="surveyFormData.q31" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q31No">နားမလည်ပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q31Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q31Note" class="q31Note_input input_text_box" v-model="surveyFormData.q31Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၂။ လုပ်ငန်းစဉ်အားလုံးအတွက်အေဂျင်စီ၊သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များနှင့် အခြားမည်သူ့ကိုမဆို ငွေကြေး (သိုမဟုတ်) တစ်စုံတစ်ရာပေးခဲ့ရခြင်း ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q32" id="q32Yes" autocomplete="off" value="1" v-model="surveyFormData.q32"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q32Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q32" id="q32No" autocomplete="off" value="0" v-model="surveyFormData.q32" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q32No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q32Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q32Note" class="q32Note_input input_text_box" v-model="surveyFormData.q32Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၃။ ရက်သတ္တပတ် တစ်ပတ်နားလျှင် နားရက် (၁) ရက်ရသည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q33" id="q33Yes" autocomplete="off" value="1" v-model="surveyFormData.q33"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q33Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q33" id="q33No" autocomplete="off" value="0" v-model="surveyFormData.q33" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q33No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q33Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q33Note" class="q33Note_input input_text_box" v-model="surveyFormData.q33Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၄။ စာချုပ်ပါ လုပ်ခလစာ၊ အချိန်ပိုနှင့် ခွင့်ဆိုင်ရာများ စသည့် ရပိုင်ခံစားခွင့်များကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q34" id="q34Yes" autocomplete="off" value="1" v-model="surveyFormData.q34"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q34Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q34" id="q34No" autocomplete="off" value="0" v-model="surveyFormData.q34" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q34No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q34Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q34Note" class="q34Note_input input_text_box" v-model="surveyFormData.q34Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၅။ အလုပ်လုပ်ကိုင်မှု တစ်နှစ်ပြည့်ပါက လုပ်သက်ခွင့်(၆)ရက်ရမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q35" id="q35Yes" autocomplete="off" value="1" v-model="surveyFormData.q35"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q35Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q35" id="q35No" autocomplete="off" value="0" v-model="surveyFormData.q35" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q35No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q35Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q35Note" class="q35Note_input input_text_box" v-model="surveyFormData.q35Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၆။ ထိုင်းနိုင်ငံရှိ စက်ရုံတွင် သင်နှင့်အတူ မိသားစုဝင် (သိုမဟုတ်) သူငယ်ချင်းမိတ်ဆွေများနှင့် တစ်နေရာ တည်း (သိုမဟုတ်) လုပ်ငန်းတစ်ခုတည်း အလုပ်မရနိုင်ကြောင်း သင်နားလည်း လက်ခံပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q36" id="q36Yes" autocomplete="off" value="1" v-model="surveyFormData.q36"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q36Yes">နားလည်ပါသည် </label>

                    <input type="radio" class="btn-check" name="q36" id="q36No" autocomplete="off" value="0" v-model="surveyFormData.q36" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q36No">နားမလည်ပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q36Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q36Note" class="q36Note_input input_text_box" v-model="surveyFormData.q36Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၇။ အစားအသောက်ဖိုးနှင့် အဆောင်ခများ ပေးချေရမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q37" id="q37Yes" autocomplete="off" value="1" v-model="surveyFormData.q37"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q37Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q37" id="q37No" autocomplete="off" value="0" v-model="surveyFormData.q37" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q37No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q37Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q37Note" class="q37Note_input input_text_box" v-model="surveyFormData.q37Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၈။ ပွဲစားများနှင့် ဆက်သွယ်ဆောင်ရွက်ခြင်း ရှိ-မရှိ (သေချာစွာဖြေဆိုပါ)။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q38" id="q38Yes" autocomplete="off" value="1" v-model="surveyFormData.q38"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q38Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q38" id="q38No" autocomplete="off" value="0" v-model="surveyFormData.q38" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q38No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q38Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q38Note" class="q38Note_input input_text_box" v-model="surveyFormData.q38Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၉။ အလုပ်သမားများသည် ဥပဒေနှင့်အညီ အလုပ်ရှင်ကချမှတ်ထားသည့် လုပ်ငန်းခွင် စည်းကမ်းများကို လိုက်နာရမည့်အပြင် ထိုင်းနိုင်ငံ ဥပဒေ၊ဓလေ့ထုံးစံနှင့် ယဉ်ကျေးမှုများကိုလည်း လေးစားလိုက်နာရမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q39" id="q39Yes" autocomplete="off" value="1" v-model="surveyFormData.q39"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q39Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q39" id="q39No" autocomplete="off" value="0" v-model="surveyFormData.q39" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q39No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q39Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q39Note" class="q39Note_input input_text_box" v-model="surveyFormData.q39Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၀။ အလုပ်ရှင်သည် စာချုပ်ရပ်ဆိုင်းလိုပါက အလုပ်ရှင်မှ အလုပ်သမားအား တစ်လကြိုတင် အသိပေးရန်နှင့် လုပ်သက်နှစ်နှင့်အညီ အကျိုးခံစားခွင့်ရရှိမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q310" id="q310Yes" autocomplete="off" value="1" v-model="surveyFormData.q310"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q310Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q310" id="q310No" autocomplete="off" value="0" v-model="surveyFormData.q310" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q310No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q310Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q310Note" class="q310Note_input input_text_box" v-model="surveyFormData.q310Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၁။ အလုပ်သမားသည် စာချုပ်သက်တမ်းအတွင်း စာချုပ်ရပ်ဆိုင်းလိုပါက အလုပ်ရှင်အား တစ်လကြိုတင်အသိပေးရမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q311" id="q311Yes" autocomplete="off" value="1" v-model="surveyFormData.q311"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q311Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q311" id="q311No" autocomplete="off" value="0" v-model="surveyFormData.q311" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q311No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q311Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q311Note" class="q311Note_input input_text_box" v-model="surveyFormData.q311Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၂။ စာချုပ်သက်တမ်း(၂)နှစ်ဆိုတာကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q312" id="q312Yes" autocomplete="off" value="1" v-model="surveyFormData.q312"  :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q312Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q312" id="q312No" autocomplete="off" value="0" v-model="surveyFormData.q312" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q312No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q312Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q312Note" class="q312Note_input input_text_box" v-model="surveyFormData.q312Note" :disabled="!isChecked"></textarea>
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
            let isChecked = ref(false);
            let submitSurvey = ref({});
            let workername = ref();
            let passport = ref();
            let errorMessage = ref();

            const surveyFormData = ref({
                q31: '0',
                q32: '0',
                q33: '0',
                q34: '0',
                q35: '0',
                q36: '0',
                q37: '0',
                q38: '0',
                q39: '0',
                q310: '0',
                q311: '0',
                q312: '0',
                q31Note: '',
                q32Note: '',
                q33Note: '',
                q34Note: '',
                q35Note: '',
                q36Note: '',
                q37Note: '',
                q38Note: '',
                q39Note: '',
                q310Note: '',
                q311Note: '',
                q312Note: ''

            });

            let submitSurveyForm = async function(){
                let userid = localStorage.getItem('userid');
                let res = await axios.get(`employee_infos/${userid}`);
                console.log(res.data);
                workername.value = res.data.data.employee_info.name_en;
                passport.value = res.data.data.passport_data.passport_number;
                console.log(workername.value,passport.value);
                let data = surveyFormData.value;
                submitSurvey.value = {
                    user_id:userid,
                    worker_name:workername.value,
                    passport_no:passport.value,
                    answer_1:data.q31,
                    answer_1_note:data.q31Note,
                    answer_2:data.q32,
                    answer_2_note:data.q32Note,
                    answer_3:data.q33,
                    answer_3_note:data.q33Note,
                    answer_4:data.q34,
                    answer_4_note:data.q34Note,
                    answer_5:data.q35,
                    answer_5_note:data.q35Note,
                    answer_6:data.q36,
                    answer_6_note:data.q36Note,
                    answer_7:data.q37,
                    answer_7_note:data.q37Note,
                    answer_8:data.q38,
                    answer_8_note:data.q38Note,
                    answer_9:data.q39,
                    answer_9_note:data.q39Note,
                    answer_10:data.q310,
                    answer_10_note:data.q310Note,
                    answer_11:data.q311,
                    answer_11_note:data.q311Note,
                    answer_12:data.q312,
                    answer_12_note:data.q312Note,
                }

                console.log('1 Survey One Answer =>', submitSurvey.value);
                console.log('2 Survey One Answer Type =>', typeof(submitSurvey.value));
                try{
                    const response = await axios.post('survey/third', submitSurvey.value);
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
                q31: '',
                q32: '',
                q33: '',
                q34: '',
                q35: '',
                q36: '',
                q37: '',
                q38: '',
                q39: '',
                q310: '',
                q311: '',
                q312: '',
                q31Note: '',
                q32Note: '',
                q33Note: '',
                q34Note: '',
                q35Note: '',
                q36Note: '',
                q37Note: '',
                q38Note: '',
                q39Note: '',
                q310Note: '',
                q311Note: '',
                q312Note: ''

            }
            }

            
            return{
                isChecked,
                surveyFormData,
                submitSurvey,
                submitSurveyForm,
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
    
</style>