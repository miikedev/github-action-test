<template>
    <div class="container form_control">
        <WorkerNavbar class="text-center workerNavbar"></WorkerNavbar>
        <ChatWindow class="chatWindow"></ChatWindow>
        <NewChatForm class="newChatForm"></NewChatForm>
        
    </div>
</template>

<script>
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import WorkerNavbar from '@/components/WorkerNavbar.vue';
    export default{
        components:{
            WorkerNavbar,
            ChatWindow,
            NewChatForm
        },

        setup(){

        }
    }
</script>

<style scoped>
    .form_control {
    width: 370px;
    justify-content: center;
    align-items: center;

    display: flex;
    justify-content: center;
    align-items: center;
}
.chatWindow{
    height: 60vh;
    margin-top: 3rem;
    background-color: transparent;
}
.newChatForm{
        width: 250px;
        
        bottom: 1rem;
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        line-height: 0.1rem;
}
.workerNavbar{
    z-index: 1000;
}

@media (max-width: 768px) {
    .name {
      font-size: 10px; /* Adjust the font size for mobile screens as needed */
    }
  }
</style>