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
                <h5 class="pagetitle text-center">အကြိုသင်တန်း ပိုချပြီးနောက် ကြေငြာချက်ပုံစံ (၃)</h5>

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
            <div class="title text-center">
                <p class="text-justify">
                    ကျွန်ုပ်သည် အောက်ဖော်ပြပါအတိုင်း ကြေငြာအပ်ပါသည်။ (မေးခွန်းများတွက် အမှား/အမှန် ရွေးပါ)။ 
                </p>
            </div>
            <form @submit.prevent="submitSurvey" method="post">
                <!-- Question 1 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁။ အလုပ်လျှောက်လွှာဖောင်၊ မှတ်ပုံတင်မိတ္တူ၊ Passport မိတ္တူ၊ သန်းခေါင်စာရင်းမိတ္တူနှင့် ဆေးလက်မှတ်မိတ္တူ တိုအား လုပ်ငန်းလိုအပ်ချက်အရ သိမ်းဆည်းထားသည်ကို နားလည်ပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q61" id="q61Yes" autocomplete="off" value="1" v-model="surveyFormData.q61" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q61Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q61" id="q61No" autocomplete="off" value="0" v-model="surveyFormData.q61" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q61No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q61Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q61Note" class="q61Note_input input_text_box" v-model="surveyFormData.q61Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၂။ အလုပ်သမားများသည် တစ်ပတ်လျှင် ပိတ်ရက်(၁)ရက်၊ တစ်နှစ်လျှင် ထိုင်းနိုင်ငံ၏ တရားဝင် အများပြည်သူ အလုပ်ပိတ်ရက်(၁၃)ရက်နှင့် လုပ်သက်တစ်နှစ်ပြည့်ပါက လုပ်သက်ခွင့် (၆)ရက်ရသည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q62" id="q62Yes" autocomplete="off" value="1" v-model="surveyFormData.q62" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q62Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q62" id="q62No" autocomplete="off" value="0" v-model="surveyFormData.q62" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q62No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q62Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q62Note" class="q62Note_input input_text_box" v-model="surveyFormData.q62Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၃။ စာချုပ်ပါ လုပ်ခလစာ၊ အချိန်ပိုနှင့် ခွင့်ဆိုင်ရာများ စသည့် ရပိုင်ခွင့် ခံစားခွင်များကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q63" id="q63Yes" autocomplete="off" value="1" v-model="surveyFormData.q63" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q63Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q63" id="q63No" autocomplete="off" value="0" v-model="surveyFormData.q63" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q63No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q63Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q63Note" class="q63Note_input input_text_box" v-model="surveyFormData.q63Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၄။ စာချုပ်ချုပ်ဆိုပြီးပါက ရက်ပေါင်း၉၀အတွင်း ထွက်ခွာရမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q64" id="q64Yes" autocomplete="off" value="1" v-model="surveyFormData.q64" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q64Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q64" id="q64No" autocomplete="off" value="0" v-model="surveyFormData.q64" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q64No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q64Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q64Note" class="q64Note_input input_text_box" v-model="surveyFormData.q64Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၅။ မြဝတီသို ထွက်ခွာရာ လမ်းခရီးတစ်လျှောက် လိုက်နာရမည့် သတ်မှတ်ချက်များကို သိရှိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q65" id="q65Yes" autocomplete="off" value="1" v-model="surveyFormData.q65" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q65Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q65" id="q65No" autocomplete="off" value="0" v-model="surveyFormData.q65" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q65No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q65Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q65Note" class="q65Note_input input_text_box" v-model="surveyFormData.q65Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၆။ အလုပ်သမား၏ ကိုယ်ရေးကိုယ်တာ အချက်အလက်များ၊ နိုင်ငံကူးလက်မှတ်နှင့် သက်သေခံ လက်မှတ်များကို အလုပ်ရှင်မှ ထိန်းသိမ်းထားခြင်းမရှိစေရ ဆိုသောအချက်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q66" id="q66Yes" autocomplete="off" value="1" v-model="surveyFormData.q66" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q66Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q66" id="q66No" autocomplete="off" value="0" v-model="surveyFormData.q66" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q66No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q66Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q66Note" class="q66Note_input input_text_box" v-model="surveyFormData.q66Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၇။ အလုပ်သမားသည် လုပ်ငန်းခွင်အတွင်း အဆင်မပြေမှုများ ရှိပါက ပထမဦးစွာ မိမိကုမ္ပဏီသို အသိပေး အကြောင်းကြားရမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q67" id="q67Yes" autocomplete="off" value="1" v-model="surveyFormData.q67" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q67Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q67" id="q67No" autocomplete="off" value="0" v-model="surveyFormData.q67" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q67No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q67Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q67Note" class="q67Note_input input_text_box" v-model="surveyFormData.q67Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၈။ အလုပ်သမားများသည် အလုပ်ရရန်အတွက် ပွဲစားများနှင့် ဆက်သွယ်ဆောင်ရွက်ခြင်း ရှိ-မရှိ (သေချာစွာဖြေဆိုပါ)။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q68" id="q68Yes" autocomplete="off" value="1" v-model="surveyFormData.q68" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q68Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q68" id="q68No" autocomplete="off" value="0" v-model="surveyFormData.q68" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q68No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q68Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q68Note" class="q68Note_input input_text_box" v-model="surveyFormData.q68Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၉။ အလုပ်သမားသည် ဥပဒေနှင့်အညီ အလုပ်ရှင်က ချမှတ်ထားသည့် စည်းကမ်းများကို လိုက်နာရမည့်အပြင် ထိုင်းနိုင်ငံ ဥပဒေ၊ ဓလေ့ထုံးစံနှင့် ယဉ်ကျေးမှုများကိုလည်း လေးစားလိုက်နာရမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q69" id="q69Yes" autocomplete="off" value="1" v-model="surveyFormData.q69" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q69Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q69" id="q69No" autocomplete="off" value="0" v-model="surveyFormData.q69" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q69No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q69Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q69Note" class="q69Note_input input_text_box" v-model="surveyFormData.q69Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၀။ အလုပ်သမားသည် သပိတ်မှောက်ခြင်း၊ ကန့်ကွက်ခြင်း၊ ကန့်ကွက်ဆန္ဒပြခြင်းကဲသို ဥပဒေနှင့်မညီသည့် လှုပ်ရှားဆောင်ရွက်မှုများ မပြုလုပ်ရသည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q610" id="q610Yes" autocomplete="off" value="1" v-model="surveyFormData.q610" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q610Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q610" id="q610No" autocomplete="off" value="0" v-model="surveyFormData.q610" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q610No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q610Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q610Note" class="q610Note_input input_text_box" v-model="surveyFormData.q610Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၁။ လွတ်လပ်စွာ အသင်းအဖွဲများတွင် ပါဝင်ခွင့်ရှိသည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q611" id="q611Yes" autocomplete="off" value="1" v-model="surveyFormData.q611" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q611Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q611" id="q611No" autocomplete="off" value="0" v-model="surveyFormData.q611" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q611No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q611Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q611Note" class="q611Note_input input_text_box" v-model="surveyFormData.q611Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၂။ အလုပ်သမားများအနေဖြင့် အလုပ်ခွင်ရှိ စည်းမျဉ်းစည်းကမ်းများ လူမှုဖူလုံရေး၊ လုပ်သားဥပဒေနှင့် အလုပ်သမားခံစားခွင့်ရှိသည့် အခွင့်အရေးများအကြောင်းကို သင်တန်းပေးရာတွင် နားလည်မှု ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q612" id="q612Yes" autocomplete="off" value="1" v-model="surveyFormData.q612" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q612Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q612" id="q612No" autocomplete="off" value="0" v-model="surveyFormData.q612" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q612No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q612Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q612Note" class="q612Note_input input_text_box" v-model="surveyFormData.q612Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                  <!-- Question 13 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၃။ အလုပ်သမားများအနေဖြင့် လုပ်ငန်းခွင် အန္တရာယ် ကင်းရှင်းရေး၊ လုပ်ငန်းခွင်အတွင်း လိုက်နာရမည့် စည်းကမ်းများ အကြောင်း သင်တန်းပေးရာတွင် နားလည်မှု ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q613" id="q613Yes" autocomplete="off" value="1" v-model="surveyFormData.q613" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q613Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q613" id="q613No" autocomplete="off" value="0" v-model="surveyFormData.q613" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q613No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q613Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q613Note" class="q613Note_input input_text_box" v-model="surveyFormData.q613Note" :disabled="!isChecked"></textarea>
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
                q61: '0',
                q62: '0',
                q63: '0',
                q64: '0',
                q65: '0',
                q66: '0',
                q67: '0',
                q68: '0',
                q69: '0',
                q610: '0',
                q611: '0',
                q612: '0',
                q613: '0',
                q61Note: '',
                q62Note: '',
                q63Note: '',
                q64Note: '',
                q65Note: '',
                q66Note: '',
                q67Note: '',
                q68Note: '',
                q69Note: '',
                q610Note: '',
                q611Note: '',
                q612Note: '',
                q613Note: ''

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
                    answer_1:data.q61,
                    answer_1_note:data.q61Note,
                    answer_2:data.q62,
                    answer_2_note:data.q62Note,
                    answer_3:data.q63,
                    answer_3_note:data.q63Note,
                    answer_4:data.q64,
                    answer_4_note:data.q64Note,
                    answer_5:data.q65,
                    answer_5_note:data.q65Note,
                    answer_6:data.q66,
                    answer_6_note:data.q66Note,
                    answer_7:data.q67,
                    answer_7_note:data.q67Note,
                    answer_8:data.q68,
                    answer_8_note:data.q68Note,
                    answer_9:data.q69,
                    answer_9_note:data.q69Note,
                    answer_10:data.q610,
                    answer_10_note:data.q610Note,
                    answer_11:data.q611,
                    answer_11_note:data.q611Note,
                    answer_12:data.q612,
                    answer_12_note:data.q612Note,
                    answer_13:data.q613,
                    answer_13_note:data.q613Note,
                }

                console.log('1 Survey One Answer =>', submitSurvey.value);
                console.log('2 Survey One Answer Type =>', typeof(submitSurvey.value));
                try{
                    const response = await axios.post('survey/sixth', submitSurvey.value);
                    if(response){
                        console.log('Response =>', response.data);
                        router.go(0)                 
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
                    q61: '',
                q62: '',
                q63: '',
                q64: '',
                q65: '',
                q66: '',
                q67: '',
                q68: '',
                q69: '',
                q610: '',
                q611: '',
                q612: '',
                q613: '',
                q61Note: '',
                q62Note: '',
                q63Note: '',
                q64Note: '',
                q65Note: '',
                q66Note: '',
                q67Note: '',
                q68Note: '',
                q69Note: '',
                q610Note: '',
                q611Note: '',
                q612Note: '',
                q613Note: ''

            };

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