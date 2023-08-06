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
                <h5 class="pagetitle text-center">နေရာထိုင်ခင်းနှင့် အစားအသောက် စောင့်ကြည့်စစ်ဆေးခြင်း</h5>

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
                        <label class="col-12 form-label form_question mb-3">၁။ အစားအသောက်များသည် ကျန်းမာရေးနှင့်ညီညွှတ်ပြီး ကောင်းမွန်သော အရသာ ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q41" id="q41Yes" autocomplete="off" value="1" v-model="surveyFormData.q41" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q41Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q41" id="q41No" autocomplete="off" value="0" v-model="surveyFormData.q41" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q41No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q41Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q41Note" class="q41Note_input input_text_box" v-model="surveyFormData.q41Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၂။ ချက်ပြုတ်ပြင်ဆင်သူများသည် တစ်ကိုယ်ရေ သန့်ရှင်းရေး ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q42" id="q42Yes" autocomplete="off" value="1" v-model="surveyFormData.q42" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q42Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q42" id="q42No" autocomplete="off" value="0" v-model="surveyFormData.q42" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q42No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q42Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q42Note" class="q42Note_input input_text_box" v-model="surveyFormData.q42Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၃။ ကျန်းမာရေးနှင့် ညီညွှတ်မှုရှိရင် မီးဖိုဆောင်နှင့် ပတ်ဝန်းကျင်တိုကို အမြဲ သန့်ရှင်းသပ်ရပ်စွာ ထားရှိမှု ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q43" id="q43Yes" autocomplete="off" value="1" v-model="surveyFormData.q43" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q43Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q43" id="q43No" autocomplete="off" value="0" v-model="surveyFormData.q43" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q43No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q43Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q43Note" class="q43Note_input input_text_box" v-model="surveyFormData.q43Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၄။ ကျန်းမာရေးနှင့်ညီညွှတ်စွာ ချက်ပြုတ်ပြီး စားသောက်ပြီး ဆေးကြောထားသော ပန်းကန်၊ ခွက်နှင့် ဇွန်းခရင်းများကို မစားရသေးသော ပန်းကန် ၊ ခွက်နှင့် ဇွန်းခရင်းတိုနှင့် ရောနှောမထားဘဲ သီးခြားထားမှု ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q44" id="q44Yes" autocomplete="off" value="1" v-model="surveyFormData.q44" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q44Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q44" id="q44No" autocomplete="off" value="0" v-model="surveyFormData.q44" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q44No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q44Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q44Note" class="q44Note_input input_text_box" v-model="surveyFormData.q44Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၅။ အစားသောက်များကို ချက်ပြုတ်ရာတွင် ကျန်းမာရေးနှင့်မညီညွှတ်သဖြင့် ဖြစ်ပေါ်လာမည့် မည်သည့် ကိစ္စမဆို ပြီးဆုံးသည်အဖိ တာဝန်ယူဖြေရှင်း ဆောင်ရွက်ပေးနိုင်ခြင်း ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q45" id="q45Yes" autocomplete="off" value="1" v-model="surveyFormData.q45" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q45Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q45" id="q45No" autocomplete="off" value="0" v-model="surveyFormData.q45" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q45No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q45Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q45Note" class="q45Note_input input_text_box" v-model="surveyFormData.q45Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၆။ အသုံးပြုမည့် မည်သည့်အရာဝတ္ထုမဆို သန့်ရှင်းမှု ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q46" id="q46Yes" autocomplete="off" value="1" v-model="surveyFormData.q46" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q46Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q46" id="q46No" autocomplete="off" value="0" v-model="surveyFormData.q46" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q46No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q46Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q46Note" class="q46Note_input input_text_box" v-model="surveyFormData.q46Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၇။ ချက်ပြုတ်မည့် ဟင်းလျာအသားများအသုံးပြုမည့် ပစ္စည်းများကို သန့်ရှင်းစွာ ဆေးကြောထားခြင့် ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q47" id="q47Yes" autocomplete="off" value="1" v-model="surveyFormData.q47" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q47Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q47" id="q47No" autocomplete="off" value="0" v-model="surveyFormData.q47" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q47No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q47Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q47Note" class="q47Note_input input_text_box" v-model="surveyFormData.q47Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၈။ ချက်ပြုတ်ပြီးသော အစားသောက်များကို ပိုးမွှားရောဂါ မဖြစ်ပွားစေရန် ဖုံးအုပ်ထားခြင့် ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q48" id="q48Yes" autocomplete="off" value="1" v-model="surveyFormData.q48" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q48Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q48" id="q48No" autocomplete="off" value="0" v-model="surveyFormData.q48" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q48No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q48Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q48Note" class="q48Note_input input_text_box" v-model="surveyFormData.q48Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၉။ အစားအသောက်များကို လက်ရာကောင်းမွန်စွာဖြင့် ကျက်အောင် ချက်ပြုတ်ပြင်ဆင်ထားခြင်း ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q49" id="q49Yes" autocomplete="off" value="1" v-model="surveyFormData.q49" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q49Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q49" id="q49No" autocomplete="off" value="0" v-model="surveyFormData.q49" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q49No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q49Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q49Note" class="q49Note_input input_text_box" v-model="surveyFormData.q49Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၀။ မလတ်ဆက်သောအသားများ၊ အသီးအရွက်များနှင့် ရောဂါဖြစ်နေသော အသားငါးများကို ချက်ပြုန်အသုံးပြုခြင်း ရှိ/မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q410" id="q410Yes" autocomplete="off" value="1" v-model="surveyFormData.q410" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q410Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q410" id="q410No" autocomplete="off" value="0" v-model="surveyFormData.q410" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q410No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q410Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q410Note" class="q410Note_input input_text_box" v-model="surveyFormData.q410Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၁။ စားသုံးရာတွင် ထမင်း၊အသားဟင်းတစ်မျိုး၊ အရံဟင်းတစ်မျိုး၊ ငပိရည် တိုစရာအစုံဖြင့် ပြင်ဆင်ကျွေးမွေးခြင်း ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q411" id="q411Yes" autocomplete="off" value="1" v-model="surveyFormData.q411" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q411Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q411" id="q411No" autocomplete="off" value="0" v-model="surveyFormData.q411" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q411No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q411Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q411Note" class="q411Note_input input_text_box" v-model="surveyFormData.q411Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၂။ နေရာထိုင်ခင်း သန့်ရှင်းမှု ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q412" id="q412Yes" autocomplete="off" value="1" v-model="surveyFormData.q412" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q412Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q412" id="q412No" autocomplete="off" value="0" v-model="surveyFormData.q412" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q412No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q412Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q412Note" class="q412Note_input input_text_box" v-model="surveyFormData.q412Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 13 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၃။ သုံးစွဲသည့်ရေ သန့်ရှင်းရေးနှင့် လုံလောက်မှု ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q413" id="q413Yes" autocomplete="off" value="1" v-model="surveyFormData.q413" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q413Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q413" id="q413No" autocomplete="off" value="0" v-model="surveyFormData.q413" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q413No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q413Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q413Note" class="q413Note_input input_text_box" v-model="surveyFormData.q413Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 14 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၄။ အိမ်သာနှင့်ရေချိုးခန်း သန့်ရှင်းမှု ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q414" id="q414Yes" autocomplete="off" value="1" v-model="surveyFormData.q414" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q414Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q414" id="q414No" autocomplete="off" value="0" v-model="surveyFormData.q414" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q414No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q414Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q414Note" class="q414Note_input input_text_box" v-model="surveyFormData.q414Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 15 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၅။ သောက်ရေ သန့်ရှင်းမှုနှင့် လုံလောက်မှု ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q415" id="q415Yes" autocomplete="off" value="1" v-model="surveyFormData.q415" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q415Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q415" id="q415No" autocomplete="off" value="0" v-model="surveyFormData.q415" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q415No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q415Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q415Note" class="q415Note_input input_text_box" v-model="surveyFormData.q415Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 16 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">၁၆။ လျှပ်စစ်မီး သုံးစွဲမှု အဆင်ပြေမှု ရှိ-မရှိ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q416" id="q416Yes" autocomplete="off" value="1" v-model="surveyFormData.q416" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q416Yes">ရှိ </label>

                    <input type="radio" class="btn-check" name="q416" id="q416No" autocomplete="off" value="0" v-model="surveyFormData.q416" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q416No">မရှိ</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q416Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q416Note" class="q416Note_input input_text_box" v-model="surveyFormData.q416Note" :disabled="!isChecked"></textarea>
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
                q41: '0',
                q42: '0',
                q43: '0',
                q44: '0',
                q45: '0',
                q46: '0',
                q47: '0',
                q48: '0',
                q49: '0',
                q410: '0',
                q411: '0',
                q412: '0',
                q413: '0',
                q414: '0',
                q415: '0',
                q416: '0',
                
                q41Note: '',
                q42Note: '',
                q43Note: '',
                q44Note: '',
                q45Note: '',
                q46Note: '',
                q47Note: '',
                q48Note: '',
                q49Note: '',
                q410Note: '',
                q411Note: '',
                q412Note: '',
                q413Note: '',
                q414Note: '',
                q415Note: '',
                q416Note: ''

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
                    answer_1:data.q41,
                    answer_1_note:data.q41Note,
                    answer_2:data.q42,
                    answer_2_note:data.q42Note,
                    answer_3:data.q43,
                    answer_3_note:data.q43Note,
                    answer_4:data.q44,
                    answer_4_note:data.q44Note,
                    answer_5:data.q45,
                    answer_5_note:data.q45Note,
                    answer_6:data.q46,
                    answer_6_note:data.q46Note,
                    answer_7:data.q47,
                    answer_7_note:data.q47Note,
                    answer_8:data.q48,
                    answer_8_note:data.q48Note,
                    answer_9:data.q49,
                    answer_9_note:data.q49Note,
                    answer_10:data.q410,
                    answer_10_note:data.q410Note,
                    answer_11:data.q411,
                    answer_11_note:data.q411Note,
                    answer_12:data.q412,
                    answer_12_note:data.q412Note,
                    answer_13:data.q413,
                    answer_13_note:data.q413Note,
                    answer_14:data.q414,
                    answer_14_note:data.q414Note,
                    answer_15:data.q415,
                    answer_15_note:data.q415Note,
                    answer_16:data.q416,
                    answer_16_note:data.q416Note,
                }

                console.log('1 Survey One Answer =>', submitSurvey.value);
                console.log('2 Survey One Answer Type =>', typeof(submitSurvey.value));
                try{
                    const response = await axios.post('survey/fourth', submitSurvey.value);
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
                    q41: '',
                q42: '',
                q43: '',
                q44: '',
                q45: '',
                q46: '',
                q47: '',
                q48: '',
                q49: '',
                q410: '',
                q411: '',
                q412: '',
                q413: '',
                q414: '',
                q415: '',
                q416: '',
                
                q41Note: '',
                q42Note: '',
                q43Note: '',
                q44Note: '',
                q45Note: '',
                q46Note: '',
                q47Note: '',
                q48Note: '',
                q49Note: '',
                q410Note: '',
                q411Note: '',
                q412Note: '',
                q413Note: '',
                q414Note: '',
                q415Note: '',
                q416Note: ''


            };

            }

            return{
                isChecked,
                surveyFormData,
                submitSurvey,
                submitSurveyForm,
                errorMessage,
                clearAll,
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