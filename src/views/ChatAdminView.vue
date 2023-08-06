<template>
    <Navbar></Navbar>
    <ChatWindow class="chatWindow"></ChatWindow>
    <NewChatForm></NewChatForm>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
    export default{
        components:{
            NewChatForm,
            ChatWindow,
            Navbar

        }
    }
</script>

<style scoped>
    .chatWindow{
        margin-left: 5rem;
        margin-top: 0rem;
        max-height: 600px;
    }
</style>