<template>
  <div class="cvModal bg-white">
    <div class="cv px-5">
      <div class="modalHeader text-center pt-2">
                <h3 class="">Suvery Result 3</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true"  class="text-dark">&times;</span>
                </button>
      </div>

      <div  v-if="suveryDatas" class="modalBody pt-3 border border-dark p-4 my-4">
        <div>
            <div class="d-flex">
                <p class="bold">၁။ အလုပ်သမားညွှန်ကြားရေးဦးစီးရေးဌာနမှ တာဝန်ရှိသူ‌၏ စာချုပ်ပါအချက်အလက်များရှင်းလင်းပြောကြားမှုကိုသင်နားလည်ပါသလား။</p>
                <p v-if="suveryDatas.data.answer_1 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_1_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_1_note }}</p>

        </div>

        <div>

            <div class="d-flex">
                <p class="bold">၂။ ရက်သတ္တပတ် တစ်ပတ်နားလျှင် နားရက် (၁) ရက်ရသည်ကို သင်သိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_2 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_2_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_2_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၃။ စာချုပ်ပါ လုပ်ခလစာ၊ အချိန်ပိုနှင့် ခွင့်ဆိုင်ရာများ စသည့် ရပိုင်ခံစားခွင့်များကို သင်သိပါသလား။။</p>
                <p v-if="suveryDatas.data.answer_3 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_3_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_3_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၄။ အလုပ်လုပ်ကိုင်မှု တစ်နှစ်ပြည့်ပါက လုပ်သက်ခွင့်(၆)ရက်ရမည်ကို သင်သိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_4 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_4_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_4_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၅။ ထိုင်းနိုင်ငံရှိ စက်ရုံတွင် သင်နှင့်အတူ မိသားစုဝင် (သိုမဟုတ်) သူငယ်ချင်းမိတ်ဆွေများနှင့် တစ်နေရာ တည်း (သိုမဟုတ်) လုပ်ငန်းတစ်ခုတည်း အလုပ်မရနိုင်ကြောင်း သင်နားလည်း လက်ခံပါသလား။</p>
                <p v-if="suveryDatas.data.answer_5 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_5_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_5_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၆။ အစားအသောက်ဖိုးနှင့် အဆောင်ခများ ပေးချေရမည်ကို သင်သိပါသလား။</p>     
                <p v-if="suveryDatas.data.answer_6 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_6_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_6_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၇။ပွဲစားများနှင့် ဆက်သွယ်ဆောင်ရွက်ခြင်း ရှိ-မရှိ (သေချာစွာဖြေဆိုပါ)။</p>
                <p v-if="suveryDatas.data.answer_7 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_7_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_7_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၈။ အလုပ်သမားများသည် ဥပဒေနှင့်အညီ အလုပ်ရှင်ကချမှတ်ထားသည့် လုပ်ငန်းခွင် စည်းကမ်းများကို လိုက်နာရမည့်အပြင် ထိုင်းနိုင်ငံ ဥပဒေ၊ဓလေ့ထုံးစံနှင့် ယဉ်ကျေးမှုများကိုလည်း လေးစားလိုက်နာရမည်ကို သင်သိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_8 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_8_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_8_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၉။ အလုပ်ရှင်သည် စာချုပ်ရပ်ဆိုင်းလိုပါက အလုပ်ရှင်မှ အလုပ်သမားအား တစ်လကြိုတင် အသိပေးရန်နှင့် လုပ်သက်နှစ်နှင့်အညီ အကျိုးခံစားခွင့်ရရှိမည်ကို သင်သိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_9 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_9_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_9_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၀။ အလုပ်သမားသည် စာချုပ်သက်တမ်းအတွင်း စာချုပ်ရပ်ဆိုင်းလိုပါက အလုပ်ရှင်အား တစ်လကြိုတင်အသိပေးရမည်ကို သင်သိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_10 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_10_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_10_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၁။ စာချုပ်သက်တမ်း(၂)နှစ်ဆိုတာကို သင်သိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_11 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_11_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_11_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၂။ လုပ်ငန်းစဉ်အားလုံးအတွက်အေဂျင်စီ၊သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များနှင့် အခြားမည်သူ့ကိုမဆို ငွေကြေး (သိုမဟုတ်) တစ်စုံတစ်ရာပေးခဲ့ရခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_12 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_12_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_12_note }}</p>
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