import axios from "axios";
import { useRouter } from "vue-router";

const doeModule = {
  namespaced: true,
  state() {
    return {
      errorMessage: null,
      does: "",
      doe: "",
      token: "", //store token from auth store file
    };
  },
  getters: {
    does(state) {
      return state.does;
    },
    doe(state) {
      return state.doe;
    },
    token(state) {
      return state.token;
    },
  },
  mutations: {
    // Get Token From auth.js store
    updateTokenInDoeModule(state, token) {
      state.token = token;
      console.log("Token Value", state.token);
    },
    // Get All DOE Mutation
    getDoes(state, data) {
      state.does = data;
    },
    // Add New DOE Mutation
    addnewDoe(state, data) {
      state.does.unshift(data);
    },

    // Error
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    clearErrorMessage(state) {
      state.errorMessage = null;
    },
  },
  actions: {
    // get All DOE Data
    async getDoes(content) {
      try {
        let token = localStorage.getItem("token");
        content.commit("clearErrorMessage"); // Clear any previous error messages
        let res = await axios.get("does");
        if (res) {
          content.commit("getDoes", res.data.data);
          console.log("It called!");
          // console.log("Response Data", res.data);
          // console.warn('Token value', token);
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          content.commit("setErrorMessage", error.response.data.message);
        }
      }
      // console.log("does");
    },
    // Add New DOE
    async storeDoes(content, data) {
      let router = useRouter();
      try {
        content.commit("clearErrorMessage");
        let res = await axios.post("does", data);
        if (res) {
          content.commit("addnewDoe", res.data);
          // console.log(res.data);

          // content.commit("getDoes", res.data);
          // console.log("Response Data", res.data);
          // console.warn("Token value", token);
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          content.commit("setErrorMessage", error.response.data.message);
        }
      }
      // console.log("does");
    },
  },
};

export default doeModule;
