<template>
    <div class="chat_window ">
        <div class="messagess no-scrollbar" ref="msgBox">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
              <span class="message text-justify">{{ message.message }}</span>  
              <span class="name mt-1
              ">{{ message.name }}</span>
              <span class="created_at">{{ message.created_at }}</span>
            </div>
           
        </div>
    </div>
</template>

<script>
    import { db } from '@/firebase/config';
    import { computed, onUpdated, ref } from 'vue';
    // import useCollection from '@/composable/useCollection';
    import { formatDistanceToNow } from 'date-fns';
    export default{
        setup(){
          let messages = ref([]);
          let msgBox = ref(null);
          onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight
          })
          let formattedMessages = computed(()=>{
            return messages.value.map((msg)=>{
              
              let formatTime = formatDistanceToNow(msg.created_at.toDate());
              console.warn("Format Time =>", formatTime);
              return {...msg, created_at:formatTime}
            })
          })
          db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
            let result = [];
            snap.forEach((doc)=>{
                let document = {... doc.data(),id:doc.id}
                if(doc.data().created_at){
                  result.push(document);
                }
                // console.log("Messages=>", messages.value);
            });

            messages.value = result;
            console.log("Result =>", result);
          })

          return{
            formattedMessages,
            messages,
            msgBox
          }
        }
    }
</script>

<style>
  .chat_window {
    background: #fafafa;
    padding: 20px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created_at {
    display: block;
    color: #999;
    font-size: 10px;
    margin-bottom: 4px;
    padding-left: 12px;

  }
  .name {
    padding-left: 12px;
    font-weight: bold;
    margin-right: 6px;
    font-size: 12px;
  }
  .messagess {
    max-height: 500px;
    overflow: auto;
    margin-bottom: 5px;
  }
  .message {
    display: block;
    text-align: justify !important;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 3px;
    padding: 4px 12px;
    border-radius: 5px;
    border: 1px solid transparent;
    /* background-color: #007bff; */
    background-color: transparent;
    color: #007bff;
  }

  .no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* .no-scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
} */

  /* Media query for mobile screens (up to 768px) */
  @media (max-width: 768px) {
    .chat_window{
      width: 360px;
    }
    .name {
      font-size: 12px; /* Adjust the font size for mobile screens as needed */
    }
    .message{
      font-size: 12px;
    }
  }
</style>
