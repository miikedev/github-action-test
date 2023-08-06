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
                <h5 class="pagetitle text-center">ပိုဆောင်ခြင်းကုမ္ပဏီအား စောင့်ကြည့်စစ်ဆေးခြင်း</h5>

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
                        <label class="col-12 form-label form_question mb-3">၁။ ခရီးစဉ် မထွက်ခွာမီ လိုအပ်သောမော်တော်ယာဉ်၏ ကြံ့ခိုင်မှု ရှိ-မရှိ စစ်ဆေးခြင်း၊ မော်တော်ယာဉ်သည် ချိုယွင်းမှု တစ်စုံတစ်ရာမရှိမှသော မော်တော်ယာဉ်ကို မောင်းနှင်ရန်နှင့် သတ်မှတ်ယာဉ်လမ်းကြောင်းအတိုင်းမောင်းနှင်ရန်။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q51" id="q51Yes" autocomplete="off" value="1" v-model="surveyFormData.q51" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q51Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q51" id="q51No" autocomplete="off" value="0" v-model="surveyFormData.q51" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q51No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q51Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q51Note" class="q51Note_input input_text_box" v-model="surveyFormData.q51Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၂။ ကားပေါ်တွင် ခုံနေရာချထားမှု အစီအစဉ်နှင့် ပတ်သက်၍ သဘောတူကျေနပ်မှု ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q52" id="q52Yes" autocomplete="off" value="1" v-model="surveyFormData.q52" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q52Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q52" id="q52No" autocomplete="off" value="0" v-model="surveyFormData.q52" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q52No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q52Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q52Note" class="q52Note_input input_text_box" v-model="surveyFormData.q52Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၃။ ယာဉ်မောင်းသည် ယာဉ်စည်းကမ်းနှင့် လမ်းစည်းကမ်းများကို တိကျစွာလိုက်နာပြီး အဝေးပြေးလမ်းမပေါ်တွင် သတ်မှတ်ထားသော မိုင်နှုန်းထက် ကျော်လွန် မောင်းနှင်ခြင်းမပြုရန်။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q53" id="q53Yes" autocomplete="off" value="1" v-model="surveyFormData.q53" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q53Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q53" id="q53No" autocomplete="off" value="0" v-model="surveyFormData.q53" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q53No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q53Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q53Note" class="q53Note_input input_text_box" v-model="surveyFormData.q53Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၄။ မော်တော်ယာဉ်စက်ချိုယွင်းခြင်း၊ အလုပ်သမား၏ အရေးပေါ်ကိစ္စနှင့် ကုမ္ပဏီနှင့် မော်တော်ယာဉ်လိုင်းတို သဘောတူညီချက်ဖြင့်သတ်မှတ်ထားသည့် ထမင်းစားသည့် နေရာမှလွဲ၍ မော်တော်ယာဉ်အား ရပ်တန့်ခြင်း၊ ရပ်နားခြင်းနီင့် မလိုလားအပ်သော ကိစ္စရပ်များ ဆောင်ရွက်ခြင်းများ ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q54" id="q54Yes" autocomplete="off" value="1" v-model="surveyFormData.q54" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q54Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q54" id="q54No" autocomplete="off" value="0" v-model="surveyFormData.q54" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q54No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q54Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q54Note" class="q54Note_input input_text_box" v-model="surveyFormData.q54Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၅။ ခရီးစဉ်အတွင်း မိုးရွာနေခြင်းနှင့် ရှေ့မြင်ကွင်း အမြင်မရှင်းလင်း ဖြစ်နေပါက အရှိန်လျှော့ခြင်း အထူးဂရုစိုက် မောင်းနှင်ရန်နှင့် မော်တော်ယာဉ်ပေါ် ပါသူများ၏ ဘေးအန္တရာယ်များ ကင်းရှင်းစေရန် ယာဉ်မောင်းမှ မောင်းနှင်ရန်။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q55" id="q55Yes" autocomplete="off" value="1" v-model="surveyFormData.q55" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q55Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q55" id="q55No" autocomplete="off" value="0" v-model="surveyFormData.q55" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q55No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q55Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q55Note" class="q55Note_input input_text_box" v-model="surveyFormData.q55Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၆။ မသမာသောနည်းဖြင့် မည်သည့်အကြောင်းကိစ္စမဆို ပူးပေါင်းဆောက်ရွက်ခြင်းနှင့် ပူးပေါင်းကြံစည်ခြင်းများ လုံးဝ (လုံးဝ) မပြုလုပ်ရန်။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q56" id="q56Yes" autocomplete="off" value="1" v-model="surveyFormData.q56" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q56Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q56" id="q56No" autocomplete="off" value="0" v-model="surveyFormData.q56" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q56No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q56Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q56Note" class="q56Note_input input_text_box" v-model="surveyFormData.q56Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၇။ ခရီးစဉ်အတွင်း ကုမ္ပဏီ၏ခေါ်ဆောင်ရမည့် အလုပ်သမားများမှလွှ၍ လူကြုံလိုက်ခြင်းနှင့် ကုန်ပစ္စည်းများ သယ်ဆောင်ခြင်းများ လုံးဝ(လုံးဝ) မပြုလုပ်ရန်။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q57" id="q57Yes" autocomplete="off" value="1" v-model="surveyFormData.q57" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q57Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q57" id="q57No" autocomplete="off" value="0" v-model="surveyFormData.q57" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q57No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q57Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q57Note" class="q57Note_input input_text_box" v-model="surveyFormData.q57Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၈။ ခရီးစဉ် တစ်လျှောက်တွင် ယာဉ်လိုင်းကြောင့်ဖြစ်စေ၊ ယာဉ်မောင်း သိုမဟုတ် ယာဉ်အကူကြောင့်ဖြစ်စေ ဖြစ်ပေါ်လာသည့် မည်သည့်ကိစ္စရပ်မဆို မော်တော်ယာဉ်လိုင်းမှ ပြေလည်သည် အထိ ဖြေရှင်းဆောင်ရွက်ပေးခြင်း ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q58" id="q58Yes" autocomplete="off" value="1" v-model="surveyFormData.q58" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q58Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q58" id="q58No" autocomplete="off" value="0" v-model="surveyFormData.q58" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q58No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q58Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q58Note" class="q58Note_input input_text_box" v-model="surveyFormData.q58Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၉။ ခရီးစဉ်အတွင်း အလုပ်သမားများကို ကျန်းမာရေးအတွက် အရေးပေါ်အသုံးပြုရန် Medical Aid Box မော်တော်ယာဉ် ပေါ်တွင် ထားရှိပေးထားခြင်း ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q59" id="q59Yes" autocomplete="off" value="1" v-model="surveyFormData.q59" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q59Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q59" id="q59No" autocomplete="off" value="0" v-model="surveyFormData.q59" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q59No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q59Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q59Note" class="q59Note_input input_text_box" v-model="surveyFormData.q59Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၀။ ခရီးစဉ်စတင်ထွက်ခွာအရပ်နှင့် ခရီးတစ်ထောက်နား ထမင်းစားချိန် ပြီးစီးချိန်နောက် ပြန်လည်ထွက်ခွာရာတွင် မော်တော်ယာဉ်အား မဖြစ်မနေပြန်လည် စစ်ဆေးရန်နှင့် ယာဉ်ပေါ်တွင် အလုပ်သမားများ ပြည့်စုံခြင်း ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q510" id="q510Yes" autocomplete="off" value="1" v-model="surveyFormData.q510" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q510Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q510" id="q510No" autocomplete="off" value="0" v-model="surveyFormData.q510" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q510No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q510Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q510Note" class="q510Note_input input_text_box" v-model="surveyFormData.q510Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၁။ ခရီးစဉ်အတွင်း မော်တော်ယာဉ်ရှိ အလုပ်သမားများအား ယာဉ်မောင်းနှင့် ယာဉ်အကူတိုမှ ရိုင်းစိုင်းစွာ ဆက်ဆံပြုမူပြောဆိုခြင်း၊ ကိုယ်ထိလက်ရောက် စော်ကားခြင်းနှင့် မဖွယ်မရာပြုမူဆောင်ရွက်ခြင်း၊ အရက်သေစာသောက်စား၍ မောင်းနှင်ခြင်းများ ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q511" id="q511Yes" autocomplete="off" value="1" v-model="surveyFormData.q511" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q511Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q511" id="q511No" autocomplete="off" value="0" v-model="surveyFormData.q511" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q511No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q511Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q511Note" class="q511Note_input input_text_box" v-model="surveyFormData.q511Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၂။ မြိုတွင်း ပိုဆောင်မှုတွင် အဆင်ပြေခြင်း ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q512" id="q512Yes" autocomplete="off" value="1" v-model="surveyFormData.q512" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q512Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q512" id="q512No" autocomplete="off" value="0" v-model="surveyFormData.q512" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q512No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q512Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q512Note" class="q512Note_input input_text_box" v-model="surveyFormData.q512Note" :disabled="!isChecked"></textarea>
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
            let workername = ref();
            let passport = ref();
            let isChecked = ref(false);
            let submitSurvey = ref({});
            let errorMessage = ref();
            const surveyFormData = ref({
                q51: '0',
                q52: '0',
                q53: '0',
                q54: '0',
                q55: '0',
                q56: '0',
                q57: '0',
                q58: '0',
                q59: '0',
                q510: '0',
                q511: '0',
                q512: '0',
                q51Note: '',
                q52Note: '',
                q53Note: '',
                q54Note: '',
                q55Note: '',
                q56Note: '',
                q57Note: '',
                q58Note: '',
                q59Note: '',
                q510Note: '',
                q511Note: '',
                q512Note: ''

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
                    answer_1:data.q51,
                    answer_1_note:data.q51Note,
                    answer_2:data.q52,
                    answer_2_note:data.q52Note,
                    answer_3:data.q53,
                    answer_3_note:data.q53Note,
                    answer_4:data.q54,
                    answer_4_note:data.q54Note,
                    answer_5:data.q55,
                    answer_5_note:data.q55Note,
                    answer_6:data.q56,
                    answer_6_note:data.q56Note,
                    answer_7:data.q57,
                    answer_7_note:data.q57Note,
                    answer_8:data.q58,
                    answer_8_note:data.q58Note,
                    answer_9:data.q59,
                    answer_9_note:data.q59Note,
                    answer_10:data.q510,
                    answer_10_note:data.q510Note,
                    answer_11:data.q511,
                    answer_11_note:data.q511Note,
                    answer_12:data.q512,
                    answer_12_note:data.q512Note,
                }

                console.log('1 Survey One Answer =>', submitSurvey.value);
                console.log('2 Survey One Answer Type =>', typeof(submitSurvey.value));
                try{
                    const response = await axios.post('survey/fifth', submitSurvey.value);
                    if(response){
                        console.log('Response =>', response.data);
                        router.go(0);
                    }
                }catch (error){
                    window.scrollTo(0,0);

                    if(error.response){
                        errorMessage.value = error.response.data.message
                        console.log(error.response.data.message);
                    }
                }

            };

            let clearAll = ()=>{
                surveyFormData.value = {
                    q51: '',
                q52: '',
                q53: '',
                q54: '',
                q55: '',
                q56: '',
                q57: '',
                q58: '',
                q59: '',
                q510: '',
                q511: '',
                q512: '',
                q51Note: '',
                q52Note: '',
                q53Note: '',
                q54Note: '',
                q55Note: '',
                q56Note: '',
                q57Note: '',
                q58Note: '',
                q59Note: '',
                q510Note: '',
                q511Note: '',
                q512Note: ''


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

    .submitbtn .btn, .cancelbtn .btn{
        font-size: 12px;
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