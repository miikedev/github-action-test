<template>
    <form class="container col-lg-6 col-sm-4 d-flex">
        
        <textarea class="col-9 chatBox" placeholder="Enter Message" v-model="message" @keypress.enter="handleSubmit"  @input="adjustTextareaHeight"
      ref="chatTextArea"></textarea>
        <div class="col-1 mt-3 ms-2" @click="handleSubmit">
            <span class="sendIcon"><font-awesome-icon icon="fa-solid fa-paper-plane" /></span>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue';
import { db, timestamp,storageRef,uploadBytes,storage } from '../firebase/config';
import useCollection from '@/composable/useCollection';
// import { storage } from '../firebase/config';
    export default{
        setup(){
            let nameDisplay = localStorage.getItem("useraccount");
            let message = ref('');
            // let imageInput = ref(null);
            let {error, addDoc} = useCollection('messages');
            
           

            let handleSubmit =async () =>{
               
                let chat = {
                    name:nameDisplay,
                    message:message.value,
                    created_at:timestamp()
                }  
                console.log("Chat Info =>", chat);
         
                await addDoc(chat);
               message.value ='';
            }

         


            return{
                message,
                handleSubmit
            }
        }
    }
</script>


<style scoped>
    .container{
       
        bottom: 1rem;
        position: fixed;
        left: 50%;
        transform: translate(-50%);
    }

    .sendIcon{
       
        font-size: 18px;
        padding: 10px 12px;
        background-color: #007bff;
        color: #fff;
        border-radius: 6px;
    }

 
    textarea{
        color: #000;
        /* height: auto; */
        background-color: #a7adba;
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 20px;
        /* box-sizing: border-box; */
        border: 1px solid #999;
        border-radius: 12px;
        font-family: inherit;
        flex: 1;
        resize: none; /* Disable textarea resizing by user */
        overflow-y: hidden; /* Hide vertical scrollbar */
        
    }

    textarea::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
   textarea{
    font-size: 10px;
   }
  }
    
</style>