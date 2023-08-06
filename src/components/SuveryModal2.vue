<template>
  <div class="cvModal bg-white">
    <div class="cv px-5">
      <div class="modalHeader text-center pt-2">
                <h3 class="">Suvery Result 2</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true"  class="text-dark">&times;</span>
                </button>
      </div>

      <div  v-if="suveryDatas" class="modalBody pt-3 border border-dark p-4 my-4">
        <div>
            <div class="d-flex">
                <p class="bold">၁။ အေဂျင်စီ၏ အမည်ကို သင်သိရှိ ပါသလား။</p>
                <p v-if="suveryDatas.data.answer_1 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_1_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_1_note }}</p>

        </div>

        <div>

            <div class="d-flex">
                <p class="bold">၂။ စက်ရုံအမည် သင်သိရှိ ပါသလား။</p>
                <p v-if="suveryDatas.data.answer_2 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_2_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_2_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၃။ တစ်နေ့လုပ်ခစာ သင်ဘယ်လောက် ရပါသလဲ။</p>
                <p v-if="suveryDatas.data.answer_3 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_3_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_3_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၄။ လုပ်ငန်းရှင်မှ ကုန်ကျစရိတ်ခံပါသလား။</p>
                <p v-if="suveryDatas.data.answer_4 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_4_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_4_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၅။ နယ်ကိုယ်စားလှယ်(သို) ကုမ္ပဏီကို တိုက်ရိုက် ဆက်သွယ်တာလား။</p>
                <p v-if="suveryDatas.data.answer_5 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_5_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_5_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၆။ ကုန်ကျစရိတ် မရှိသော ဝန်ဆောင်မှု(Zero Cost) ဖြစ်သည်ကို သင်သိရှိပါလား။</p>     
                <p v-if="suveryDatas.data.answer_6 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_6_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_6_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၇။ ပွဲစားများနှင့် ဆက်သွယ်ဆောင်ရွက်ခြင်း ရှိ-မရှိ (သေချာစွာ ဖြေဆိုပါ)။</p>
                <p v-if="suveryDatas.data.answer_7 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_7_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_7_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၈။ အလုပ်အတွက် အလုပ်သမားမှ ကြိုတင်စိုက်ထုတ် ထားရမည့် ကုန်ကျစရိတ် အသေးစိတ်ကို သင်သိရှိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_8 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_8_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_8_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၉။ အင်တာဗျူးခြင်းတွင် အလုပ်သမားမှ ကြိုတင်စိုက်ထုတ်ထားသော ကုန်ကျစရိတ်များအား အလုပ်ရှင်အလုပ်သမား စာချုပ်ချုပ်ဆိုသည့် အချိန်တွင် ကုမ္ပဏီမှ ပြန်ပေးမည်ဖြစ်ကြောင်းကို သင်သိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_9 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_9_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_9_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၀။ ထိုင်းနိုင်ငံဘက်ခြမ်းတွင် ပေးသွင်းရမည့် ကုန်ကျစရိတ်များ ဖြစ်သော Work Permit, Visa, ကျန်းမာရေး ဆေးစစ်ခများကို ထိုင်းအလုပ်ရှင်ဘက်မှ ကုန်ကျခံပေးသည်ကို သင်သိရှိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_10 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_10_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_10_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၁။ ဆေးအောင်မြင်ခြင်း မရှိပါက နိုင်ငံခြားတွင် အလုပ်လုပ်ခွင့်မရှိသည်ကို သင်သိရှိပါလား။</p>
                <p v-if="suveryDatas.data.answer_11 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_11_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_11_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၂။ စာချုပ်သက်တမ်း(၂)နှစ် ဆိုတာကို သင် သိရှိပါလား။</p>
                <p v-if="suveryDatas.data.answer_12 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_12_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_12_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၃။ တစ်နေ့အလုပ်ချိန် မည်မျှ ရှိသည်ကို သင်သိရှိပါလား။</p>
                <p v-if="suveryDatas.data.answer_13 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_13_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_13_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၄။ အချိန်ပိုကို လုပ်ငန်းလိုအပ်ချက်အရ လုပ်ကိုင်ရမည်ကို သင်သိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_14 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_14_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_14_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၅။ ထိုင်းနိုင်ငံ၏ ဥပဒေအရ အလုပ်သမားအား ထိုင်းနိုင်ငံ အလုပ်ပိတ်ရက် (၁၃)ရက်အား လုပ်ခလစာအပြည့်ဖြင့် လုပ်သက်ခွင့် (၆)ရက်ကို ခံစားခွင့်ပေးမည် ဖြစ်ကြောင်း သင်သိရှိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_15 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_15_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_15_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၆။ ကုမ္ပဏီ၏ တာဝန်ရှိသူများ၊ ဒါရိုက်တာများ၊ ကိုယ်စားလှယ်များ၊ ဝန်ထမ်းများအား မည်သည့်အခကြေးငွေ တစ်စုံတစ်ရာမှ မပေးရသည်ကို သင်သိရှိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_16 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_16_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_16_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၇။ ကုမ္ပဏီ၏ဝန်ဆောင်မှု ဖြစ်သော Passport ပြုလုပ်ရာတွင် အပိုထပ်ဆောင်းပေးခဲ့ရမှု ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_17 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_17_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_17_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၈။ အင်တာဗျူးချိန်မှ စ၍ အလုပ်ရှင် အလုပ်သမား စာချုပ်ချုပ်ဆိုချိန်၊ ထိုင်းနိုင်ငံသို ထွက်ခွာချိန်အထိ အလုပ်သမားဘက်မှ စောင့်ဆိုင်းနိုင်ခြင်း ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_18 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_18_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_18_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၉။ အေဂျင်စီမှ တာဝန်ရှိသူများ ကိုယ်စားလှယ်၊ ဝန်ထမ်းများ၏ သင့်အပေါ်ပြောဆိုရှင်းပြ ဆက်ဆံမှုများအပေါ် ‌စိတ်ကျေနပ်မှု ရှိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_19 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_19_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_19_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၂၀။ အမျိုးသမီးများ ကိုယ်ဝန်ရှိပါက အလုပ်လုပ်ခွင့်ရရှိမည်ကို သင်သိရှိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_20== '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_20_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_20_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၂၁။ ဆေးစစ်ရာတွင် X-Ray နှင့် Hepatitis -B  (၂)မျိုးတည်းစစ်ဆေးရမည်ကို သင်သိရှိပါသလား။</p>
                <p v-if="suveryDatas.data.answer_21== '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_21_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_21_note }}</p>
        </div>

    

      </div>

      <div v-if="suveryDatas" class="">
            <p><span class="bold">Name</span>:<span class="bold text-dark mx-2">{{ suveryDatas.data.worker_name }}</span></p>
            <p v-if="suveryDatas.data.passport_no"><span class="bold">Passport No.</span><span class="bold text-dark mx-2">{{ suveryDatas.data.passport_no }}</span></p>
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