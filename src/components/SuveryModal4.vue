<template>
  <div class="cvModal bg-white">
    <div class="cv px-5">
      <div class="modalHeader text-center pt-2">
                <h3 class="">Suvery Result 4</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true"  class="text-dark">&times;</span>
                </button>
      </div>

      <div v-if="suveryDatas"  class="modalBody pt-3 border border-dark p-4 my-4">

        <div>
            <div class="d-flex">
                <p class="bold">၁။ အစားအသောက်များသည်ကျန်းမာရေးနှင့်ညီညွှတ်ပြီးကောင်းမွန်သော အရသာ ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_1 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_1_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_1_note }}</p>

        </div>

        <div>

            <div class="d-flex">
                <p class="bold">၂။ ချက်ပြုတ်ပြင်ဆင်သူများသည် တစ်ကိုယ်ရေ သန့်ရှင်းရေး ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_2 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_2_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_2_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၃။ ကျန်းမာရေးနှင့် ညီညွှတ်မှုရှိရင် မီးဖိုဆောင်နှင့် ပတ်ဝန်းကျင်တိုကို အမြဲ သန့်ရှင်းသပ်ရပ်စွာ ထားရှိမှု ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_3 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_3_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_3_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၄။ ကျန်းမာရေးနှင့်ညီညွှတ်စွာ ချက်ပြုတ်ပြီး စားသောက်ပြီး ဆေးကြောထားသော ပန်းကန်၊ ခွက်နှင့် ဇွန်းခရင်းများကို မစားရသေးသော ပန်းကန် ၊ ခွက်နှင့် ဇွန်းခရင်းတိုနှင့် ရောနှောမထားဘဲ သီးခြားထားမှု ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_4 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_4_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_4_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၅။ အစားသောက်များကို ချက်ပြုတ်ရာတွင် ကျန်းမာရေးနှင့်မညီညွှတ်သဖြင့် ဖြစ်ပေါ်လာမည့် မည်သည့် ကိစ္စမဆို ပြီးဆုံးသည်အဖိ တာဝန်ယူဖြေရှင်း ဆောင်ရွက်ပေးနိုင်ခြင်း ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_5 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_5_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_5_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၆။ အသုံးပြုမည့် မည်သည့်အရာဝတ္ထုမဆို သန့်ရှင်းမှု ရှိ/မရှိ။</p>     
                <p v-if="suveryDatas.data.answer_6 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_6_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_6_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၇။ ချက်ပြုတ်မည့်ဟင်းလျာအသားများအသုံးပြုမည့်ပစ္စည်းများကိုသန့်ရှင်းစွာ ဆေးကြောထားခြင့် ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_7 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_7_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_7_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၈။ ချက်ပြုတ်ပြီးသော အစားသောက်များကို ပိုးမွှားရောဂါ မဖြစ်ပွားစေရန် ဖုံးအုပ်ထားခြင့် ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_8 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_8_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_8_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၉။ အစားအသောက်များကို လက်ရာကောင်းမွန်စွာဖြင့် ကျက်အောင် ချက်ပြုတ်ပြင်ဆင်ထားခြင်း ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_9 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_9_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_9_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၀။ မလတ်ဆက်သောအသားများ၊ အသီးအရွက်များနှင့် ရောဂါဖြစ်နေသော အသားငါးများကို ချက်ပြုန်အသုံးပြုခြင်း ရှိ/မရှိ။</p>
                <p v-if="suveryDatas.data.answer_10 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_10_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_10_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၁။ စားသုံးရာတွင် ထမင်း၊အသားဟင်းတစ်မျိုး၊ အရံဟင်းတစ်မျိုး၊ ငပိရည် တိုစရာအစုံဖြင့် ပြင်ဆင်ကျွေးမွေးခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_11 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_11_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_11_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၂။ နေရာထိုင်ခင်း သန့်ရှင်းမှု ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_12 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_12_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_12_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၃။ သုံးစွဲသည့်ရေ သန့်ရှင်းရေးနှင့် လုံလောက်မှု ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_13 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_13_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_13_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၄။ အိမ်သာနှင့်ရေချိုးခန်း သန့်ရှင်းမှု ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_14 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_14_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_14_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၅။ သောက်ရေ သန့်ရှင်းမှုနှင့် လုံလောက်မှု ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_15 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_15_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_15_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၆။ လျှပ်စစ်မီး သုံးစွဲမှု အဆင်ပြေမှု ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_16 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_16_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_16_note }}</p>
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