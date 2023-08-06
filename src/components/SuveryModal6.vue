<template>
    <div class="cvModal bg-white">
      <div class="cv px-5">
        <div class="modalHeader text-center pt-2">
                  <h3 class="">Suvery Result 6</h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                      <span aria-hidden="true"  class="text-dark">&times;</span>
                  </button>
        </div>
  
        <div  v-if="suveryDatas" class="modalBody pt-3 border border-dark p-4 my-4">
          <div>
              <div class="d-flex">
                  <p class="bold">၁။ အလုပ်လျှောက်လွှာဖောင်၊ မှတ်ပုံတင်မိတ္တူ၊ Passport မိတ္တူ၊ သန်းခေါင်စာရင်းမိတ္တူနှင့် ဆေးလက်မှတ်မိတ္တူ တိုအား လုပ်ငန်းလိုအပ်ချက်အရ သိမ်းဆည်းထားသည်ကို နားလည်ပါသလား။။</p>
                  <p v-if="suveryDatas.data.answer_1 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_1_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_1_note }}</p>
  
          </div>
  
          <div>
  
              <div class="d-flex">
                  <p class="bold">၂။ အလုပ်သမားများသည် တစ်ပတ်လျှင် ပိတ်ရက်(၁)ရက်၊ တစ်နှစ်လျှင် ထိုင်းနိုင်ငံ၏ တရားဝင် အများပြည်သူ အလုပ်ပိတ်ရက်(၁၃)ရက်နှင့် လုပ်သက်တစ်နှစ်ပြည့်ပါက လုပ်သက်ခွင့် (၆)ရက်ရသည်ကို သင်သိပါသလား။</p>
                  <p v-if="suveryDatas.data.answer_2 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_2_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_2_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၃။ စာချုပ်ပါ လုပ်ခလစာ၊ အချိန်ပိုနှင့် ခွင့်ဆိုင်ရာများ စသည့် ရပိုင်ခွင့် ခံစားခွင်များကို သင်သိပါသလား။</p>
                  <p v-if="suveryDatas.data.answer_3 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_3_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_3_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၄။ စာချုပ်ချုပ်ဆိုပြီးပါက ရက်ပေါင်း၉၀အတွင်း ထွက်ခွာရမည်ကို သင်သိပါသလား။</p>
                  <p v-if="suveryDatas.data.answer_4 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_4_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_4_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၅။ မြဝတီသို ထွက်ခွာရာ လမ်းခရီးတစ်လျှောက် လိုက်နာရမည့် သတ်မှတ်ချက်များကို သိရှိပါသလား။</p>
                  <p v-if="suveryDatas.data.answer_5 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_5_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_5_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၆။ အလုပ်သမား၏ ကိုယ်ရေးကိုယ်တာ အချက်အလက်များ၊ နိုင်ငံကူးလက်မှတ်နှင့် သက်သေခံ လက်မှတ်များကို အလုပ်ရှင်မှ ထိန်းသိမ်းထားခြင်းမရှိစေရ ဆိုသောအချက်ကို သင်သိပါသလား။</p>     
                  <p v-if="suveryDatas.data.answer_6 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_6_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_6_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၇။ အလုပ်သမားသည် လုပ်ငန်းခွင်အတွင်း အဆင်မပြေမှုများ ရှိပါက ပထမဦးစွာ မိမိကုမ္ပဏီသို အသိပေး အကြောင်းကြားရမည်ကို သင်သိပါသလား။</p>
                  <p v-if="suveryDatas.data.answer_7 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_7_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_7_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၈။ အလုပ်သမားများသည် အလုပ်ရရန်အတွက် ပွဲစားများနှင့် ဆက်သွယ်ဆောင်ရွက်ခြင်း ရှိ-မရှိ (သေချာစွာဖြေဆိုပါ)။</p>
                  <p v-if="suveryDatas.data.answer_8 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_8_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_8_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၉။ အလုပ်သမားသည် ဥပဒေနှင့်အညီ အလုပ်ရှင်က ချမှတ်ထားသည့် စည်းကမ်းများကို လိုက်နာရမည့်အပြင် ထိုင်းနိုင်ငံ ဥပဒေ၊ ဓလေ့ထုံးစံနှင့် ယဉ်ကျေးမှုများကိုလည်း လေးစားလိုက်နာရမည်ကို သင်သိပါသလား။</p>
                  <p v-if="suveryDatas.data.answer_9 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_9_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_9_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၁၀။ အလုပ်သမားသည် သပိတ်မှောက်ခြင်း၊ ကန့်ကွက်ခြင်း၊ ကန့်ကွက်ဆန္ဒပြခြင်းကဲသို ဥပဒေနှင့်မညီသည့် လှုပ်ရှားဆောင်ရွက်မှုများ မပြုလုပ်ရသည်ကို သင်သိပါသလား။</p>
                  <p v-if="suveryDatas.data.answer_10 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_10_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_10_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၁၁။ လွတ်လပ်စွာ အသင်းအဖွဲများတွင် ပါဝင်ခွင့်ရှိသည်ကို သင်သိပါသလား။</p>
                  <p v-if="suveryDatas.data.answer_11 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_11_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_11_note }}</p>
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၁၂။ အလုပ်သမားများအနေဖြင့် အလုပ်ခွင်ရှိ စည်းမျဉ်းစည်းကမ်းများ လူမှုဖူလုံရေး၊ လုပ်သားဥပဒေနှင့် အလုပ်သမားခံစားခွင့်ရှိသည့် အခွင့်အရေးများအကြောင်းကို သင်တန်းပေးရာတွင် နားလည်မှု ရှိ-မရှိ။</p>
                  <p v-if="suveryDatas.data.answer_12 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_12_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_12_note }}</p>
          </div>

          <div>
              <div class="d-flex">
                  <p class="bold">၁၃။ အလုပ်သမားများအနေဖြင့် လုပ်ငန်းခွင် အန္တရာယ် ကင်းရှင်းရေး၊ လုပ်ငန်းခွင်အတွင်း လိုက်နာရမည့် စည်းကမ်းများ အကြောင်း သင်တန်းပေးရာတွင် နားလည်မှု ရှိ-မရှိ။</p>
                  <p v-if="suveryDatas.data.answer_13 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <p v-if="suveryDatas.data.answer_13_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_13_note }}</p>
          </div>
  
         
  
  
        </div>
        
        <div v-if="suveryDatas" class="">
            <p><span class="bold">Name</span>:<span class="bold text-dark mx-2">{{ suveryDatas.data.worker_name }}</span></p>
            <p><span class="bold">Passport No.</span><span class="bold text-dark mx-2">{{ suveryDatas.data.passport_no }}</span></p>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'
  import axios from 'axios';
  export default {
      props:["data"],
      setup(props){
          let suveryDatas = ref();
  
          let getSuvery = async()=>{
              let res = await axios.get(`survey/${props.data.suvery}/${props.data.id}`);
              suveryDatas.value = res.data;
              console.log(res.data);
          }
  
          onMounted(()=>{
              console.log(props.data);
              getSuvery();
          })
  
          return {
              suveryDatas
          }
      }
  }
  </script>
  
  <style>
  
  </style>