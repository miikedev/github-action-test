<template>
    <div class="cvModal bg-white">
      <div class="cv px-5">
        <div class="modalHeader text-center pt-2">
                  <h3 class="">Suvery Result 8</h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                      <span aria-hidden="true"  class="text-dark">&times;</span>
                  </button>
        </div>
  
        <div v-if="suveryDatas"  class="modalBody pt-3">
          <div>
              <div class="">
                  <p class="bold">၁။ သင်တန်းတက်ပြီးနောက် အလုပ်သမားအခွင့်အရေးများအကြောင်း ပိုမိုသိရှိလာပါသည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_1 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_1_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_1_note }}</p>
  
          </div>
  
          <div>
              <div class="">
                  <p class="bold">၂။ ဒီသင်တန်းသည် အလုပ်သမား အခွင့်အရေး ချိုးဖောက်ခြင်း ဆိုတာကို နားလည်စေသည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_2 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_2_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_2_note }}</p>
          </div>
  
          <div>
              <div class="">
                  <p class="bold">၃။ ဤသင်တန်းသည် လူကုန်ကူးခြင်းနှင့် စပ်လျဉ်း၍ ဗဟုသုတ တိုးပွားစေသည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_3 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_3_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_3_note }}</p>
          </div>
  
          <div>
              <div class="">
                  <p class="bold">၄။ သင်တန်းတွင် ထိုင်းနိုင်ငံရှိ အားလပ်ရက်များနှင့် အလုပ်သမား အခွင့်အရေးများနှင့် သက်ဆိုင်သော သတင်းအချက်အလက်များကို ဖော်ပြထားသည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_4 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_4_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_4_note }}</p>
          </div>
  
          <div>
              <div class="">
                  <p class="bold">၅။ သင်တန်းမှ အလုပ်သမား သမဂ္ဂ ဖွဲစည်းခွင့်ရှိကြောင်း ပြောကြားသည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_5 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_5_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_5_note }}</p>
          </div>
  
          
          <div>
              <div class="">
                  <p class="bold">၆။ အလုပ်ခွင်တွင် ကျွန်ုပ်အနေဖြင့် အခက်အခဲရှိလျှင် သိုမဟုတ် ကျွန်ုပ်၏ အလုပ်သမား အခွင့်အရေး ချိုးဖောက်ခံရပါက မည်သူနှင့် ဆက်သွယ်ရမည်ကို ဤသင်တန်းက ပြောကြားသည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_6 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_6_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_6_note }}</p>
          </div>
  
          <div>
              <div class="">
                  <p class="bold">၇။ သင်တန်းမှ အလုပ်သမားများ မကျေနပ်ချက်ကို တိုင်ကြားရမည့် နည်းလမ်းများကို သင်ကြားပေးသည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_7 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_7_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_7_note }}</p>
          </div>
  
          <div>
              <div class="">
                  <p class="bold">၈။ သင်တန်းမှ ထိုင်းနိုင်ငံ၏ ယဉ်ကျေးမှုနှင့် ဓလေ့ထုံးစံကို သင်ကြားပေးသည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_8 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_8_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_8_note }}</p>
          </div>
  
          <div>
              <div class="">
                  <p class="bold">၉။ သင်တန်းမှ ပိုချမှု များသည် ကောင်းမွန်သော သင်တန်းဖြစ်သည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_9 }}</p>
              </div>
              <p v-if="suveryDatas.data.answer_9_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_9_note }}</p>
          </div>
  
  
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
.text-primary{
    font-weight:bold;
}

.modalBody div{
    margin: 20px 0;
}

/* .modalBody:nth-last-of-type(odd){
   background: rgba(0, 0, 0, 0.5);
}

.modalBody:nth-last-of-type(even){
   background:#fff;
} */
  </style>