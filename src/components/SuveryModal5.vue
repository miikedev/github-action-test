<template>
  <div class="cvModal bg-white">
    <div class="cv px-5">
      <div class="modalHeader text-center pt-2">
                <h3 class="">Suvery Result 5</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true"  class="text-dark">&times;</span>
                </button>
      </div>

      <div  v-if="suveryDatas" class="modalBody pt-3 border border-dark p-4 my-4">
        <div>
            <div class="d-flex">
                <p class="bold">၁။ ခရီးစဉ်မထွက်ခွာမီ လိုအပ်သောမော်တော်ယာဉ်၏ ကြံ့ခိုင်မှု ရှိ-မရှိ စစ်ဆေးခြင်း၊ မော်တော်ယာဉ်သည် ချိုယွင်းမှု တစ်စုံတစ်ရာမရှိမှသော မော်တော်ယာဉ်ကို မောင်းနှင်ရန်နှင့် သတ်မှတ်ယာဉ်လမ်းကြောင်းအတိုင်းမောင်းနှင်ရန်။</p>
                <p v-if="suveryDatas.data.answer_1 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_1_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_1_note }}</p>

        </div>

        <div>

            <div class="d-flex">
                <p class="bold">၂။ ကားပေါ်တွင် ခုံနေရာချထားမှု အစီအစဉ်နှင့် ပတ်သက်၍သဘောတူကျေနပ်မှု ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_2 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_2_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_2_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၃။ ယာဉ်မောင်းသည် ယာဉ်စည်းကမ်းနှင့် လမ်းစည်းကမ်းများကို တိကျစွာလိုက်နာပြီး အဝေးပြေးလမ်းမပေါ်တွင် သတ်မှတ်ထားသော မိုင်နှုန်းထက် ကျော်လွန် မောင်းနှင်ခြင်းမပြုရန်။</p>
                <p v-if="suveryDatas.data.answer_3 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_3_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_3_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၄။ မော်တော်ယာဉ်စက်ချိုယွင်းခြင်း၊ အလုပ်သမား၏ အရေးပေါ်ကိစ္စနှင့် ကုမ္ပဏီနှင့် မော်တော်ယာဉ်လိုင်းတို သဘောတူညီချက်ဖြင့်သတ်မှတ်ထားသည့် ထမင်းစားသည့် နေရာမှလွဲ၍ မော်တော်ယာဉ်အား ရပ်တန့်ခြင်း၊ ရပ်နားခြင်းနီင့် မလိုလားအပ်သော ကိစ္စရပ်များ ဆောင်ရွက်ခြင်းများ ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_4 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_4_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_4_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၅။ ခရီးစဉ်အတွင်း မိုးရွာနေခြင်းနှင့် ရှေ့မြင်ကွင်း အမြင်မရှင်းလင်းဖြစ်နေပါက အရှိန်လျှော့ခြင်း အထူးဂရုစိုက် မောင်းနှင်ရန်နှင့် မော်တော်ယာဉ်ပေါ်ပါသူများ၏ဘေးအန္တရာယ်များကင်းရှင်းစေရန် ယာဉ်မောင်းမှ မောင်းနှင်ရန်။</p>
                <p v-if="suveryDatas.data.answer_5 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_5_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_5_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၆။ မသမာသောနည်းဖြင့် မည်သည့်အကြောင်းကိစ္စမဆို ပူးပေါင်းဆောက်ရွက်ခြင်းနှင့် ပူးပေါင်းကြံစည်ခြင်းများ လုံးဝ (လုံးဝ) မပြုလုပ်ရန်။</p>     
                <p v-if="suveryDatas.data.answer_6 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_6_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_6_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၇။ ခရီးစဉ်အတွင်း ကုမ္ပဏီ၏ခေါ်ဆောင်ရမည့် အလုပ်သမားများမှလွှ၍ လူကြုံလိုက်ခြင်းနှင့် ကုန်ပစ္စည်းများ သယ်ဆောင်ခြင်းများ လုံးဝ(လုံးဝ) မပြုလုပ်ရန်။။</p>
                <p v-if="suveryDatas.data.answer_7 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_7_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_7_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၈။ ခရီးစဉ် တစ်လျှောက်တွင် ယာဉ်လိုင်းကြောင့်ဖြစ်စေ၊ ယာဉ်မောင်း သိုမဟုတ် ယာဉ်အကူကြောင့်ဖြစ်စေ ဖြစ်ပေါ်လာသည့် မည်သည့်ကိစ္စရပ်မဆို မော်တော်ယာဉ်လိုင်းမှ ပြေလည်သည် အထိ ဖြေရှင်းဆောင်ရွက်ပေးခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_8 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_8_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_8_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၉။ ခရီးစဉ်အတွင်း အလုပ်သမားများကို ကျန်းမာရေးအတွက် အရေးပေါ်အသုံးပြုရန် Medical Aid Box မော်တော်ယာဉ် ပေါ်တွင် ထားရှိပေးထားခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_9 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_9_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_9_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၀။ ခရီးစဉ်စတင်ထွက်ခွာအရပ်နှင့် ခရီးတစ်ထောက်နား ထမင်းစားချိန် ပြီးစီးချိန်နောက် ပြန်လည်ထွက်ခွာရာတွင် မော်တော်ယာဉ်အား မဖြစ်မနေပြန်လည် စစ်ဆေးရန်နှင့် ယာဉ်ပေါ်တွင် အလုပ်သမားများ ပြည့်စုံခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_10 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_10_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_10_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၁။ ခရီးစဉ်အတွင်း မော်တော်ယာဉ်ရှိ အလုပ်သမားများအား ယာဉ်မောင်းနှင့် ယာဉ်အကူတိုမှ ရိုင်းစိုင်းစွာ ဆက်ဆံပြုမူပြောဆိုခြင်း၊ ကိုယ်ထိလက်ရောက် စော်ကားခြင်းနှင့် မဖွယ်မရာပြုမူဆောင်ရွက်ခြင်း၊ အရက်သေစာသောက်စား၍ မောင်းနှင်ခြင်းများ ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_11 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_11_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_11_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၁၂။ မြိုတွင်း ပိုဆောင်မှုတွင် အဆင်ပြေခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_12 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_12_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_12_note }}</p>
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