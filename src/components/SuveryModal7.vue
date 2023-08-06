<template>
  <div class="cvModal bg-white">
    <div class="cv px-5">
      <div class="modalHeader text-center pt-2">
                <h3 class="">Suvery Result 7</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true"  class="text-dark">&times;</span>
                </button>
      </div>

      <div  v-if="suveryDatas" class="modalBody pt-3">
          <div>
              <div class="d-flex">
                  <p class="bold">၁။(က)Ethical Recruitment System ဆိုသည်မှာ အလုပ်သမားက ကုန်ကျစရိတ်အားလုံးကို ပေးသွင်းရသည်။</p>
                  <p v-if="suveryDatas.data.answer_1 == '1'" class="text-success mx-2">ပေးသွင်းရသည်။</p>
                  <p v-else class="text-danger mx-2">မပေးသွင်းရသည်။</p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_1_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_1_note }}</p> -->
  
          </div>
  
          <div>
  
              <div class="d-flex">
                  <p class="bold">၁။(ခ)Demend Letter မရှိပဲ အလုပ်သမားများကို စုဆောင်းနိုင်သည်။</p>
                  <p v-if="suveryDatas.data.answer_2 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_2_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_2_note }}</p> -->
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၁။(ဂ)အလုပ်သမား၏ စာရွက်စာတမ်းများကို သိမ်းဆည်းခွင့်ရှိသည်။</p>
                  <p v-if="suveryDatas.data.answer_3 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_3_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_3_note }}</p> -->
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၁။(ဃ) လျှိဝှက်ထိန်းသိမ်းထားသော အကြောင်းအရာများနှင့် စာရွက်စာတမ်းများကို ထုတ်ဖော်ပြောကြားခွင့်ရှိသည်။</p>
                  <p v-if="suveryDatas.data.answer_4 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_4_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_4_note }}</p> -->
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၁။(င)Ethical Recruitment System တွင်ပွဲစားများဖြင့် လုပ်သားများ စုဆောင်းနိုင်သည်။</p>
                  <p v-if="suveryDatas.data.answer_5 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_5_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_5_note }}</p> -->
          </div>
  
          <div class="mt-5">
              <div class="d-flex">
                  <p class="bold">၂။(က) ခွင့်ပြုချက် မရှိခြင်းနှင့် ပြစ်ဒဏ်ပေးခံရမည်ကို ခြိမ်းခြောက်သည့်အခါ အတင်းအဓမ္မ လုပ်အားပေးခိုင်းစေခြင်း ခံရမည်။</p>     
                  <p v-if="suveryDatas.data.answer_6 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_6_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_6_note }}</p> -->
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၂။(ခ) အများဆုံး ထုတ်လုပ်မှု ရာသီဖြစ်သည့်အခါ အလုပ်သမားများ အားလုံးသည် ထုတ်လုပ်မှုကို ထောက်ပံ့ရမည်ဖြစ်ပြီး အချိန်ပိုအလုပ်ကို ငြင်းဆန်ရန် ခွင့်မပြုပါ။</p>
                  <p v-if="suveryDatas.data.answer_7 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_7_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_7_note }}</p> -->
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၂။(ဂ) အောက်ပါတိုမှ မည်သည့် လာဒ်ထိုးခြင်းကို အများစုက စဉ်းစားသနည်း။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_8 }}</p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_8_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_8_note }}</p> -->
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၂။(ဃ)အချိန်ပို အလုပ်ကို မည်သည့်နှုန်းဖြင့် ပေးရမည်။</p>
                  <p class="text-primary mx-2">{{ suveryDatas.data.answer_9 }} ဆနှုန်း</p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_9_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_9_note }}</p> -->
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၂။(င) ရွှေ့ပြောင်း အလုပ်သမားများသည် အလုပ်သမား သမဂ္ဂကို ထူထောင်ခွင့်မရှိပါ သိုသော် အဖွဲဝင်အဖြစ် ဝင်ပိုင်ခွင့်ရှိသည်။</p>
                  <p v-if="suveryDatas.data.answer_10 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_10_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_10_note }}</p> -->
          </div>
  
          <div>
              <div class="d-flex">
                  <p class="bold">၂။(စ) အလုပ်သမားများသည် အလုပ်ရှင် ထံတွင် ခံစားခွင့်များ အလုပ်ခွင်အခြေအနေများကို တိုးမြှင့်ပေးရန် လက်မှတ်ထိုး၍ တောင်းဆိုခွင့်ရှိသည်။ သိုသော် တောင်းဆိုသူဦးရေသည် စက်ရုံထဲ၌ရှိသော အလုပ်သမား စုစုပေါင်းဦးရေ၏ အနည်းဆုံး (15%) ရှိရမည် ဖြစ်သည်။</p>
                  <p v-if="suveryDatas.data.answer_11 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                  <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
              </div>
              <!-- <p v-if="suveryDatas.data.answer_11_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_11_note }}</p> -->
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

</style>