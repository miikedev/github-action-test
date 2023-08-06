<template>
  <div class="cvModal bg-white">
    <!-- Alert -->
    <div v-if="errorMessage" class="errorMessage">
        <div class="error-message">
                <div class="modalss">
                    <img src="http://100dayscss.com/codepen/alert.png" width="44" height="38" />
                        <span class="title">ops !</span>
                        <p class="my-2">No Employee Data</p>
                        <button class="btn btn-danger" @click="errorMessage = null">Close</button>
                </div>
        </div>
    </div>
    <div class="cv px-5">
      <div class="modalHeader text-center pt-2">
                <h3 class="">Suvery Result 1</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true" class="text-dark">&times;</span>
                </button>
      </div>

      <div v-if="suveryDatas"  class="modalBody pt-3 border border-dark p-4 my-4">
        <div>
            <div class="d-flex">
                <p class="bold">၁။ ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</p>
                <p v-if="suveryDatas.data.answer_1 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_1_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_1_note }}</p>

        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၂။ ကိုယ်စားလှယ်များသည် အလုပ်သမားများထံမှ ငွေကြေးတောင်းခံခြင်းနှင့် လက်ဆောင်ပစ္စည်း ရယူခြင်းများ ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_2 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_2_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_2_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၃။ ကိုယ်စားလှယ်များသည် အလုပ်သမားများအပေါ် ခွဲခြားဆက်ဆံမှုများ ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_3 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_3_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_3_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၄။ ဒေသခံပွဲစားနှင့် တစ်ဆင့်ခံ ကိုယ်စားလှယ်များမှ လူစုဆောင်းခြင်း ရှိ-မရှိ စစ်ဆေးရန်။</p>
                <p v-if="suveryDatas.data.answer_4 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_4_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_4_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၅။ သက်ဆိုင်ရာ နယ်ကိုယ်စားလှယ်များ အနေဖြင့် အေဂျင်စီနှင့် သဘောတူချုပ်ဆိုထားသည့် စာချုပ်အတိုင်း လိုက်နယဆောင်ရွက်မှု ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_5 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_5_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_5_note }}</p>
        </div>

        
        <div>
            <div class="d-flex">
                <p class="bold">၆။ သက်ဆိုင်ရာ ကိုယ်စားလှယ်များ အနေဖြင့် အလုပ်သမားဝန်ကြီးဌာနမှ ချမှတ်ထားသော စည်းကမ်းချက်များအတိုင်း လိုက်နာခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_6 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_6_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_6_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၇။ သက်ဆိုင်ရာ ကိုယ်စားလှယ်များသည် အလုပ်သမားများ၏ ကိုယ်ရေးအချက်အလက်များကို စနစ်တကျ မှတ်တမ်း ထိန်းသိမ်းထားရှိခြင်း ရှိ-မရှိ စစ်ဆေးရန်။</p>
                <p v-if="suveryDatas.data.answer_7 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_7_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_7_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၈။ သက်ဆိုင်ရာ ကိုယ်စားလှယ်များသည် လုပ်ခလစာ၊ အချိန်ပိုနှင့် အကျိုးခံစားခွင့်၊ လုပ်ငန်းခွင်တည်နေရာ၊ အလုပ်အကြောင်း၊ လုပ်ငန်းခွင်စည်းကမ်းချက်များအား အလုပ်သမားများ နားလည်သဘောပေါက်အောင် သေချာစွာ ရှင်းပြထားခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_8 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_8_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_8_note }}</p>
        </div>

        <div>
            <div class="d-flex">
                <p class="bold">၉။ အလုပ်သမားများ အနေဖြင့် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များဖြင့် ဆက်သွယ်ပြောဆိုရာတွင် အ‌ဆင်ပြေခြင်း ရှိ-မရှိ။</p>
                <p v-if="suveryDatas.data.answer_9 == '1'" class="check"><font-awesome-icon icon="fa-solid fa-check" /></p>
                <p v-else class="cross"><font-awesome-icon icon="fa-solid fa-xmark" /></p>
            </div>
            <p v-if="suveryDatas.data.answer_9_note"><span class="text-primary">Note :</span> {{ suveryDatas.data.answer_9_note }}</p>
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
        let errorMessage = ref();

        let getSuvery = async()=>{
            try {
                let res = await axios.get(`survey/${props.data.suvery}/${props.data.id}`);
                suveryDatas.value = res.data;
                console.log(res.data);
            } catch (error) {
                if(error.response){
                errorMessage.value = error.response.data.message
                }
            }
           
        }

        onMounted(()=>{
            console.log(props.data);
            getSuvery();
        })

        return {
            suveryDatas,
            errorMessage
        }
    }

}
</script>

<style>
.check{
    width: 30px;
    height: 30px;
    background: greenyellow;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    margin: 0 20px;
}

.cross{
    width: 30px;
    height: 30px;
    background: rgba(255, 0, 0, 0.519);
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    margin: 0 20px;
}
</style>