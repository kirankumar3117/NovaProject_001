<template>
    <div class="LeftRightContainer">
        <div class="left">
            <div class="leftcontainer">
                <div class="image">
                    <img src="../../assets/logo.png" alt="" class="logoimg">
                </div>
                <div class="coll size25 content1">
                    Enter the phone number of the customer
                </div>
                <div>
                    <form @submit.prevent="handlePhoneNext">
                        <div>
                            <input type="text" class="form-control input phoneinput" placeholder="Phone Number" v-model="retailerAuth.mobileNo" required>
                        </div>
                        <div>
                            <button-component text="Next" class="signupbuttons"></button-component>
                        </div>
                    </form>
                </div>
                        <button-component text="Back" class="backbutton coll"></button-component>            
            </div>
        </div>
        <div class="right">
            <div>
                <ProgressBar text="signupmobile"/>
            </div>
            <img src="../../assets/login2.png" alt="" class="signupRightImage">
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { useRetailerAuth } from '@/stores/Auth/retailerauth';
import ProgressBar from '../ProgressBar/ProgressBar.vue';
export default{
    setup() {
        const retailerAuth = useRetailerAuth();
        return {
            retailerAuth
        };
    },
    methods: {
        handlePhoneNext() {
            router.push({ path: "/signup/otp" });
        }
    },
    components: { ProgressBar }
}

</script>

<style scoped>

.content1{
    margin-top: 50px;
}
.phoneinput{
    margin-top:50px;
}
.backbutton{
    background-color:#FAFBFA ;
    border: 1px solid rgb(175, 175, 175);
}
.signupbuttons{
    margin-top:70px;
}
.backbutton:hover{
    color:#01263C;
    background-color:#ebebeb ;
}
.signupRightImage{
    width:100%;
    z-index: 1;
    position: relative;
    height: 99%;
}
</style>