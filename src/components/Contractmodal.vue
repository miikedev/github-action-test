<template>
  <div class="cvModal bg-light">
    <div class="cv">
        <div class="container">
            <!-- Modal Header -->
            <div class="modalHeader text-center py-3">
                <h3 class="">Worker Contract Details</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true" class="text-dark">&times;</span>
                </button>
            </div>
            <!-- Modal Body -->
            <div v-if="employees" class="modalBody">
                 <!-- Personal Information -->
                <div>
                    <h5 class="text-primary py-2">Personal Information</h5>
                    <div class="d-flex justify-content-between align-items-center bolds">
                        <div class="">
                            <p>Worker ID</p>
                            <p>{{ employees.data.employee_id }}</p>
                        </div>

                        <div class="">
                            <p>Name (En)</p>
                            <p>{{ employees.data.employee_info.name_en }}</p>
                        </div>

                        <div class="">
                            <p>NRC Number</p>
                            <p>{{ employees.data.employee_info.nrc }}</p>
                        </div>

                        <div class="">
                            <p>DOE Number</p>
                            <p>{{ employees.data.doe.doe_id}}</p>
                        </div>

                        <div v-if="!employees.data.passport_and_owic_data == null" class="">
                            <p>Passport</p>
                            <p>{{ employees.data.passport_and_owic_data.passport_number}}</p>
                        </div>

                        <div v-else class="">
                            <p>Passport</p>
                            <p>No Passport</p>
                        </div>
                    </div>
                </div>
                <!-- Contract Upload Information -->
                <div>
                    <h5 class="text-primary py-2">Contract Upload Information</h5>
                    <div v-if="employees.data.contrat_upload_data" class="contractContainer">
                        <div class="row bolds col-8 mx-auto">
                            <div class="col-6">
                                <p class="ps-5">Contract Place</p>
                                <p class="ps-5">{{ employees.data.contrat_upload_data.contract_place }}</p>
                            </div>

                            <div class="col-6">
                                <p class="ps-5">Contract Date</p>
                                <p class="ps-5">{{ employees.data.contrat_upload_data.contract_date }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Btn Container -->
                <!-- <div class="d-flex justify-content-center my-4">
                    <button class="btn reject mx-2 oneBtn"><span class="text-danger" >OK</span></button>
                </div> -->

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
export default {
    props:["id"],
    setup(props){
        let store = useStore();
        console.log(props.id);

         //   get employee
         let getsingleEmployees = (id)=> store.dispatch('infoModule/getsingleEmployees',id);
            getsingleEmployees(props.id);

        let employees = computed(()=> {
              return store.state.infoModule.singleemployeesinfo
          })

        console.log(employees);  

        return{
            employees
        }  

    }
}
</script>

<style>
.oneBtn{
    width: 200px;
}
</style>