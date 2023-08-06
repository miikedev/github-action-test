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
                <h5 class="pagetitle text-center">ကျွန်ုပ်တို၏ စံမေးခွန်းလွှာ</h5>

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
                            <label class="col-12 form-label form_question mb-3">၁။ သင်တန်းတက်ပြီးနောက် အလုပ်သမားအခွင့်အရေးများအကြောင်း ပိုမိုသိရှိလာပါသည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosOne" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q91" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosOne" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q91">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosOne" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q91">
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosOne" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q91">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosOne" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q91">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
                                    </div>
                                </div>
                         </div>
                   
                </div>
                  <!-- Question 2 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                            <label class="col-12 form-label form_question mb-3">၂။ ဒီသင်တန်းသည် အလုပ်သမား အခွင့်အရေး ချိုးဖောက်ခြင်း ဆိုတာကို နားလည်စေသည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosTwo" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q92" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosTwo" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q92">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosTwo" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q92">
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosTwo" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q92">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosTwo" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q92">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
                                    </div>
                                </div>
                         </div>
                   
                </div>

                  <!-- Question 3 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                            <label class="col-12 form-label form_question mb-3">၃။ ဤသင်တန်းသည် လူကုန်ကူးခြင်းနှင့် စပ်လျဉ်း၍ ဗဟုသုတ တိုးပွားစေသည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosThree" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q93" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosThree" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q93">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosThree" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q93">
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosThree" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q93">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosThree" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q93">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
                                    </div>
                                </div>
                         </div>
                   
                </div>

                  <!-- Question 4 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                            <label class="col-12 form-label form_question mb-3">၄။ သင်တန်းတွင် ထိုင်းနိုင်ငံရှိ အားလပ်ရက်များနှင့် အလုပ်သမား အခွင့်အရေးများနှင့် သက်ဆိုင်သော သတင်းအချက်အလက်များကို ဖော်ပြထားသည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFour" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q94" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFour" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q94">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFour" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q94">
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFour" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q94">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFour" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q94">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
                                    </div>
                                </div>
                         </div>
                   
                </div>

                  <!-- Question 5 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                            <label class="col-12 form-label form_question mb-3">၅။ သင်တန်းမှ အလုပ်သမား သမဂ္ဂ ဖွဲစည်းခွင့်ရှိကြောင်း ပြောကြားသည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFive" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q95" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFive" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q95">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFive" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q95">
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFive" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q95">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosFive" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q95">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
                                    </div>
                                </div>
                         </div>
                   
                </div>

                  <!-- Question 6 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                            <label class="col-12 form-label form_question mb-3">၆။ အလုပ်ခွင်တွင် ကျွန်ုပ်အနေဖြင့် အခက်အခဲရှိလျှင် သိုမဟုတ် ကျွန်ုပ်၏ အလုပ်သမား အခွင့်အရေး ချိုးဖောက်ခံရပါက မည်သူနှင့် ဆက်သွယ်ရမည်ကို ဤသင်တန်းက ပြောကြားသည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSix" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q96" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSix" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q96">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSix" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q96">
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSix" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q96">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSix" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q96">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
                                    </div>
                                </div>
                         </div>
                   
                </div>

                  <!-- Question 7 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                            <label class="col-12 form-label form_question mb-3">၇။ သင်တန်းမှ အလုပ်သမားများ မကျေနပ်ချက်ကို တိုင်ကြားရမည့် နည်းလမ်းများကို သင်ကြားပေးသည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSeven" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q97" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSeven" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q97">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSeven" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q97">
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSeven" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q97">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosSeven" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q97">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
                                    </div>
                                </div>
                         </div>
                   
                </div>

                  <!-- Question 8 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                            <label class="col-12 form-label form_question mb-3">၈။ သင်တန်းမှ ထိုင်းနိုင်ငံ၏ ယဉ်ကျေးမှုနှင့် ဓလေ့ထုံးစံကို သင်ကြားပေးသည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosEight" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q98" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosEight" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q98">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosEight" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q98" >
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosEight" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q98">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosEight" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q98">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
                                    </div>
                                </div>
                         </div>
                   
                </div>

                  <!-- Question 9 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                            <label class="col-12 form-label form_question mb-3">၉။ သင်တန်းမှ ပိုချမှု များသည် ကောင်းမွန်သော သင်တန်းဖြစ်သည်။</label>
                            <div class="d-flex justify-content-center">
                                    <div class="btn-group-vertical answer_box " role="group" aria-label="Basic radio toggle button group" style="width: 100%">
                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosNine" id="exampleRadios1" value="strong_agree" v-model="surveyFormData.q99" checked>
                                        <label class="form-check-label form_label" for="exampleRadios1">လုံးဝသဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosNine" id="exampleRadios2" value="somewhat_agree" v-model="surveyFormData.q99">
                                        <label class="form-check-label form_label" for="exampleRadios2">အနည်းငယ်သဘောတူသည်</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosNine" id="exampleRadios3" value="neither_agree_nor_disagree" v-model="surveyFormData.q99">
                                        <label class="form-check-label form_label" for="exampleRadios3">သဘောတူလား/မတူဘူးလား</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosNine" id="exampleRadios4" value="somewhat_disagree" v-model="surveyFormData.q99">
                                        <label class="form-check-label form_label" for="exampleRadios4">အနည်းငယ်သဘောမတူပါ</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input me-4 form_input" type="radio" name="exampleRadiosNine" id="exampleRadios5" value="strongly_disagree" v-model="surveyFormData.q99">
                                        <label class="form-check-label form_label" for="exampleRadios5">လုံးဝသဘောမတူပါ</label>
                                    </div>
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
            let submitSurvey = ref({});
            let errorMessage = ref();
            const surveyFormData = ref({
                q91: 'neither_agree_nor_disagree',
                q92: 'neither_agree_nor_disagree',
                q93: 'neither_agree_nor_disagree',
                q94: 'neither_agree_nor_disagree',
                q95: 'neither_agree_nor_disagree',
                q96: 'neither_agree_nor_disagree',
                q97: 'neither_agree_nor_disagree',
                q98: 'neither_agree_nor_disagree',
                q99: 'neither_agree_nor_disagree',
                
            });

            let submitSurveyForm = async function(){
                let userid = localStorage.getItem('userid');
                let data = surveyFormData.value;
                submitSurvey.value = {
                    user_id:userid,
                    answer_1:data.q91,   
                    answer_2:data.q92,
                    answer_3:data.q93,
                    answer_4:data.q94,
                    answer_5:data.q95,
                    answer_6:data.q96,
                    answer_7:data.q97,
                    answer_8:data.q98,
                    answer_9:data.q99,
                   
                }

                console.log('1 Survey One Answer =>', submitSurvey.value);
                console.log('2 Survey One Answer Type =>', typeof(submitSurvey.value));
                try{
                    const response = await axios.post('survey/eighth', submitSurvey.value);
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
                router.go(0)
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
    
    padding: 3rem;

    /* display: flex; */
    justify-content: center;
    align-items: center;
}

.submitbtn .btn, .cancelbtn .btn{
        font-size: 12px;
    }

.form_label{
    font-size: 12px;
}

.form_input{
    font-size: 12px;
    margin-left: 5px;
}

    .pagetitle{
        line-height: 2.2rem;
    }
    .aggrement_text{
        font-size: 15px;
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


    

    .radio_check_box{
        font-size: 1.3rem;
        border: 1px solid blue;
    }

    .radio_label{
        font-size: 0.8rem;
        margin-top: 3px;
    }
    
</style>