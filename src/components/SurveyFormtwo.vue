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
                <h5 class="pagetitle text-center">အင်တာဗျူး ဖြေဆိုအောင်သူများ ကြေငြာချက် ပုံစံ(၁)</h5>

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
                        <label class="col-12 form-label form_question mb-3">၁။ အေဂျင်စီ၏ အမည်ကို သင်သိရှိ ပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q21" id="q21Yes" autocomplete="off" value="1" v-model="surveyFormData.q21" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q21Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q21" id="q21No" autocomplete="off" value="0" v-model="surveyFormData.q21" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q21No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q21Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q21Note" class="q21Note_input input_text_box" v-model="surveyFormData.q21Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၂။ စက်ရုံအမည် သင်သိရှိ ပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q22" id="q22Yes" autocomplete="off" value="1" v-model="surveyFormData.q22" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q22Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q22" id="q22No" autocomplete="off" value="0" v-model="surveyFormData.q22" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q22No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q22Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q22Note" class="q22Note_input input_text_box" v-model="surveyFormData.q22Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၃။ တစ်နေ့လုပ်ခစာ သင်ဘယ်လောက် ရပါသလဲ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q23" id="q23Yes" autocomplete="off" value="1" v-model="surveyFormData.q23" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q23Yes">သိပါသည် </label>

                    <input type="radio" class="btn-check" name="q23" id="q23No" autocomplete="off" value="0" v-model="surveyFormData.q23" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q23No">မသိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q23Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q23Note" class="q23Note_input input_text_box" v-model="surveyFormData.q23Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၄။ လုပ်ငန်းရှင်မှ ကုန်ကျစရိတ်ခံပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q24" id="q24Yes" autocomplete="off" value="1" v-model="surveyFormData.q24" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q24Yes">ကျခံပါသည် </label>

                    <input type="radio" class="btn-check" name="q24" id="q24No" autocomplete="off" value="0" v-model="surveyFormData.q24" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q24No">မကျခံပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q24Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q24Note" class="q24Note_input input_text_box" v-model="surveyFormData.q24Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၅။ နယ်ကိုယ်စားလှယ်(သို) ကုမ္ပဏီကို တိုက်ရိုက် ဆက်သွယ်တာလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q25" id="q25Yes" autocomplete="off" value="1" v-model="surveyFormData.q25" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q25Yes">ဟုတ်ပါသည် </label>

                    <input type="radio" class="btn-check" name="q25" id="q25No" autocomplete="off" value="0" v-model="surveyFormData.q25" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q25No">မဟုတ်ပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q25Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q25Note" class="q25Note_input input_text_box" v-model="surveyFormData.q25Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၆။ ကုန်ကျစရိတ် မရှိသော ဝန်ဆောင်မှု(Zero Cost) ဖြစ်သည်ကို သင်သိရှိပါလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q26" id="q26Yes" autocomplete="off" value="1" v-model="surveyFormData.q26" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q26Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q26" id="q26No" autocomplete="off" value="0" v-model="surveyFormData.q26" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q26No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q26Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q26Note" class="q26Note_input input_text_box" v-model="surveyFormData.q26Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၇။ ပွဲစားများနှင့် ဆက်သွယ်ဆောင်ရွက်ခြင်း ရှိ-မရှိ (သေချာစွာ ဖြေဆိုပါ)။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q27" id="q27Yes" autocomplete="off" value="1" v-model="surveyFormData.q27" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q27Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q27" id="q27No" autocomplete="off" value="0" v-model="surveyFormData.q27" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q27No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q27Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q27Note" class="q27Note_input input_text_box" v-model="surveyFormData.q27Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၈။ အလုပ်အတွက် အလုပ်သမားမှ ကြိုတင်စိုက်ထုတ် ထားရမည့် ကုန်ကျစရိတ် အသေးစိတ်ကို သင်သိရှိပါသလား။</label>
                        <p class="form_question">အင်တာဗျူးခြင်း</p>
                            <p class="form_question">(၁)အသွား-အပြန် ကားလက်မှတ်ခ(ကားလက်မှတ်)</p>
                            <p class="form_question">(၂)ကိုဗစ်ဆေးလက်မှတ် ဘာသာပြန်ခ (၅၀၀၀)</p>
                            <p class="form_question">(၃) Passport ကုန်ကျစရိတ် (၅၀၀၀)</p>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q28" id="q28Yes" autocomplete="off" value="1" v-model="surveyFormData.q28" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q28Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q28" id="q28No" autocomplete="off" value="0" v-model="surveyFormData.q28" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q28No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q28Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q28Note" class="q28Note_input input_text_box" v-model="surveyFormData.q28Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၉။ အင်တာဗျူးခြင်းတွင် အလုပ်သမားမှ ကြိုတင်စိုက်ထုတ်ထားသော ကုန်ကျစရိတ်များအား အလုပ်ရှင်အလုပ်သမား စာချုပ်ချုပ်ဆိုသည့် အချိန်တွင် ကုမ္ပဏီမှ ပြန်ပေးမည်ဖြစ်ကြောင်းကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q29" id="q29Yes" autocomplete="off" value="1" v-model="surveyFormData.q29" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q29Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q29" id="q29No" autocomplete="off" value="0" v-model="surveyFormData.q29" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q29No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q29Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q29Note" class="q29Note_input input_text_box" v-model="surveyFormData.q29Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၀။ ထိုင်းနိုင်ငံဘက်ခြမ်းတွင် ပေးသွင်းရမည့် ကုန်ကျစရိတ်များ ဖြစ်သော Work Permit, Visa, ကျန်းမာရေး ဆေးစစ်ခများကို ထိုင်းအလုပ်ရှင်ဘက်မှ ကုန်ကျခံပေးသည်ကို သင်သိရှိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q210" id="q210Yes" autocomplete="off" value="1" v-model="surveyFormData.q210" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q210Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q210" id="q210No" autocomplete="off" value="0" v-model="surveyFormData.q210" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q210No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q210Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q210Note" class="q210Note_input input_text_box" v-model="surveyFormData.q210Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၁။ ဆေးအောင်မြင်ခြင်း မရှိပါက နိုင်ငံခြားတွင် အလုပ်လုပ်ခွင့်မရှိသည်ကို သင်သိရှိပါလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q211" id="q211Yes" autocomplete="off" value="1" v-model="surveyFormData.q211" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q211Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q211" id="q211No" autocomplete="off" value="0" v-model="surveyFormData.q211" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q211No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q211Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q211Note" class="q211Note_input input_text_box" v-model="surveyFormData.q211Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၂။ စာချုပ်သက်တမ်း(၂)နှစ် ဆိုတာကို သင် သိရှိပါလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q212" id="q212Yes" autocomplete="off" value="1" v-model="surveyFormData.q212" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q212Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q212" id="q212No" autocomplete="off" value="0" v-model="surveyFormData.q212" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q212No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q212Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q212Note" class="q212Note_input input_text_box" v-model="surveyFormData.q212Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 13 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၃။ တစ်နေ့အလုပ်ချိန် မည်မျှ ရှိသည်ကို သင်သိရှိပါလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q213" id="q213Yes" autocomplete="off" value="1" v-model="surveyFormData.q213" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q213Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q213" id="q213No" autocomplete="off" value="0" v-model="surveyFormData.q213" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q213No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q213Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q213Note" class="q213Note_input input_text_box" v-model="surveyFormData.q213Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 14 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၄။ အချိန်ပိုကို လုပ်ငန်းလိုအပ်ချက်အရ လုပ်ကိုင်ရမည်ကို သင်သိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q214" id="q214Yes" autocomplete="off" value="1" v-model="surveyFormData.q214" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q214Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q214" id="q214No" autocomplete="off" value="0" v-model="surveyFormData.q214" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q214No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q214Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q214Note" class="q214Note_input input_text_box" v-model="surveyFormData.q214Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 15 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၅။ ထိုင်းနိုင်ငံ၏ ဥပဒေအရ အလုပ်သမားအား ထိုင်းနိုင်ငံ အလုပ်ပိတ်ရက် (၁၃)ရက်အား လုပ်ခလစာအပြည့်ဖြင့် လုပ်သက်ခွင့် (၆)ရက်ကို ခံစားခွင့်ပေးမည် ဖြစ်ကြောင်း သင်သိရှိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q215" id="q215Yes" autocomplete="off" value="1" v-model="surveyFormData.q215" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q215Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q215" id="q215No" autocomplete="off" value="0" v-model="surveyFormData.q215" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q215No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q215Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q215Note" class="q215Note_input input_text_box" v-model="surveyFormData.q215Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 16 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၆။ ကုမ္ပဏီ၏ တာဝန်ရှိသူများ၊ ဒါရိုက်တာများ၊ ကိုယ်စားလှယ်များ၊ ဝန်ထမ်းများအား မည်သည့်အခကြေးငွေ တစ်စုံတစ်ရာမှ မပေးရသည်ကို သင်သိရှိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q216" id="q216Yes" autocomplete="off" value="1" v-model="surveyFormData.q216" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q216Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q216" id="q216No" autocomplete="off" value="0" v-model="surveyFormData.q216" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q216No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q216Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q216Note" class="q216Note_input input_text_box" v-model="surveyFormData.q216Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 17 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၇။ ကုမ္ပဏီ၏ဝန်ဆောင်မှု ဖြစ်သော Passport ပြုလုပ်ရာတွင် အပိုထပ်ဆောင်းပေးခဲ့ရမှု ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q217" id="q217Yes" autocomplete="off" value="1" v-model="surveyFormData.q217" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q217Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q217" id="q217No" autocomplete="off" value="0" v-model="surveyFormData.q217" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q217No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q217Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q217Note" class="q217Note_input input_text_box" v-model="surveyFormData.q217Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 18 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၈။ အင်တာဗျူးချိန်မှ စ၍ အလုပ်ရှင် အလုပ်သမား စာချုပ်ချုပ်ဆိုချိန်၊ ထိုင်းနိုင်ငံသို ထွက်ခွာချိန်အထိ အလုပ်သမားဘက်မှ စောင့်ဆိုင်းနိုင်ခြင်း ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q218" id="q218Yes" autocomplete="off" value="1" v-model="surveyFormData.q218" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q218Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q218" id="q218No" autocomplete="off" value="0" v-model="surveyFormData.q218" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q218No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q218Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q218Note" class="q218Note_input input_text_box" v-model="surveyFormData.q218Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 19 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၉။ အေဂျင်စီမှ တာဝန်ရှိသူများ ကိုယ်စားလှယ်၊ ဝန်ထမ်းများ၏ သင့်အပေါ်ပြောဆိုရှင်းပြ ဆက်ဆံမှုများအပေါ် ‌စိတ်ကျေနပ်မှု ရှိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q219" id="q219Yes" autocomplete="off" value="1" v-model="surveyFormData.q219" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q219Yes">ရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q219" id="q219No" autocomplete="off" value="0" v-model="surveyFormData.q219" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q219No">မရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q219Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q219Note" class="q219Note_input input_text_box" v-model="surveyFormData.q219Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 20 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၂၀။ အမျိုးသမီးများ ကိုယ်ဝန်ရှိပါက အလုပ်လုပ်ခွင့်ရရှိမည်ကို သင်သိရှိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q220" id="q220Yes" autocomplete="off" value="1" v-model="surveyFormData.q220" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q220Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q220" id="q220No" autocomplete="off" value="0" v-model="surveyFormData.q220" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q220No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q220Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q220Note" class="q220Note_input input_text_box" v-model="surveyFormData.q220Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 21 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၂၁။ ဆေးစစ်ရာတွင် X-Ray နှင့် Hepatitis -B  (၂)မျိုးတည်းစစ်ဆေးရမည်ကို သင်သိရှိပါသလား။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q221" id="q221Yes" autocomplete="off" value="1" v-model="surveyFormData.q221" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q221Yes">သိရှိပါသည် </label>

                    <input type="radio" class="btn-check" name="q221" id="q221No" autocomplete="off" value="0" v-model="surveyFormData.q221" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q221No">မသိရှိပါ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q221Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q221Note" class="q221Note_input input_text_box" v-model="surveyFormData.q221Note" :disabled="!isChecked"></textarea>
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
                q21: '0',
                q22: '0',
                q23: '0',
                q24: '0',
                q25: '0',
                q26: '0',
                q27: '0',
                q28: '0',
                q29: '0',
                q210: '0',
                q211: '0',
                q212: '0',
                q213: '0',
                q214: '0',
                q215: '0',
                q216: '0',
                q217: '0',
                q218: '0',
                q219: '0',
                q220: '0',
                q221: '0',

                
                q21Note: '',
                q22Note: '',
                q23Note: '',
                q24Note: '',
                q25Note: '',
                q26Note: '',
                q27Note: '',
                q28Note: '',
                q29Note: '',
                q210Note: '',
                q211Note: '',
                q212Note: '',
                q213Note: '',
                q214Note: '',
                q215Note: '',
                q216Note: '',
                q217Note: '',
                q218Note: '',
                q219Note: '',
                q220Note: '',
                q221Note: '',


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
                    answer_1:data.q21,
                    answer_1_note:data.q21Note,
                    answer_2:data.q22,
                    answer_2_note:data.q22Note,
                    answer_3:data.q23,
                    answer_3_note:data.q23Note,
                    answer_4:data.q24,
                    answer_4_note:data.q24Note,
                    answer_5:data.q25,
                    answer_5_note:data.q25Note,
                    answer_6:data.q26,
                    answer_6_note:data.q26Note,
                    answer_7:data.q27,
                    answer_7_note:data.q27Note,
                    answer_8:data.q28,
                    answer_8_note:data.q28Note,
                    answer_9:data.q29,
                    answer_9_note:data.q29Note,
                    answer_10:data.q210,
                    answer_10_note:data.q210Note,
                    answer_11:data.q211,
                    answer_11_note:data.q211Note,
                    answer_12:data.q212,
                    answer_12_note:data.q212Note,
                    answer_13:data.q213,
                    answer_13_note:data.q213Note,
                    answer_14:data.q214,
                    answer_14_note:data.q214Note,
                    answer_15:data.q215,
                    answer_15_note:data.q215Note,
                    answer_16:data.q216,
                    answer_16_note:data.q216Note,
                    answer_17:data.q217,
                    answer_17_note:data.q217Note,
                    answer_18:data.q218,
                    answer_18_note:data.q218Note,
                    answer_19:data.q219,
                    answer_19_note:data.q219Note,
                    answer_20:data.q220,
                    answer_20_note:data.q220Note,
                    answer_21:data.q221,
                    answer_21_note:data.q221Note,
                }

                console.log('1 Survey One Answer =>', submitSurvey.value);
                console.log('2 Survey One Answer Type =>', typeof(submitSurvey.value));
                try{
                    const response = await axios.post('survey/second', submitSurvey.value);
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
                q21: '',
                q22: '',
                q23: '',
                q24: '',
                q25: '',
                q26: '',
                q27: '',
                q28: '',
                q29: '',
                q210: '',
                q211: '',
                q212: '',
                q213: '',
                q214: '',
                q215: '',
                q216: '',
                q217: '',
                q218: '',
                q219: '',
                q220: '',
                q221: '',

                
                q21Note: '',
                q22Note: '',
                q23Note: '',
                q24Note: '',
                q25Note: '',
                q26Note: '',
                q27Note: '',
                q28Note: '',
                q29Note: '',
                q210Note: '',
                q211Note: '',
                q212Note: '',
                q213Note: '',
                q214Note: '',
                q215Note: '',
                q216Note: '',
                q217Note: '',
                q218Note: '',
                q219Note: '',
                q220Note: '',
                q221Note: '',


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