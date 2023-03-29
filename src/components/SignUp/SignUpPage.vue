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

        </div>
    </div>
</template>

<script>
import router from '@/router';
import { useRetailerAuth } from '@/stores/Auth/retailerauth';
export default{
    setup(){
        const retailerAuth=useRetailerAuth();
        return{
            retailerAuth
        }
    },
    methods:{
        handlePhoneNext(){

            router.push({path:'/signup/otp'})
        }
    }
}

</script>

<style scoped>
.right{
    border: 1px solid black;
}
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
</style>