<template>
        <PopupPageErrorSuccess/>

    <div :class="popupStore.popup==true || loadingStore.loading ?  'LeftRightContainer bgChange' : 'LeftRightContainer'">
        <div class="left">
            <div class="leftcontainer">
                <div class="image">
                    <img src="../../assets/logo.png" alt="" class="logoimg">
                </div>
                <div class="coll size25 otpcontent1">
                    Enter One-time Password
                </div>
                <div class="content2">
                    Please enter the 6-digit One-time password ( OTP ) sent to the customers phone
                </div>
                <form @submit.prevent="retailerAuth.retailerSignup">
                    <div class="otpForm ">

                        <input type="text"  class="form-control" maxlength="1" name="1" id="one" v-model="retailerAuth.otp1" required/>
                        <input type="text" class="form-control"  maxlength="1" name="2" id="two" v-model="retailerAuth.otp2" required/>
                        <input type="text" class="form-control" maxlength="1" name="3" id="three" v-model="retailerAuth.otp3" required/>
                        <input type="text" class="form-control" maxlength="1" name="4" id="four" v-model="retailerAuth.otp4" required/>
                        <input type="text" class="form-control" maxlength="1" name="5" id="five" v-model="retailerAuth.otp5" required/>
                        <input type="text" class="form-control" maxlength="1" name="6" id="six" v-model="retailerAuth.otp6" required/>
                    </div>
                    <div class="otprecievebox">
                        <div>Didn't receive OTP code?</div>
                        <div class="coll pointer">Resend OTP</div>
                    </div>
                    <div >
                        <button-component text="Submit" ></button-component>
                    </div>
                </form>
            </div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
import {useRetailerAuth} from "@/stores/Auth/retailerauth"
import PopupPageErrorSuccess from "../Popup/PopupPageErrorSuccess.vue";
import { usePopupLoginSignup } from "@/stores/PopupLoginSignup/loginsignup";
import { useLodingSpinner } from "@/stores/Loading/loading";
import router from "@/router";
export default{
    name: "SignUpOtpPage",
    setup() {
        const retailerAuth = useRetailerAuth();
        const popupStore=usePopupLoginSignup();
        const loadingStore=useLodingSpinner();
        return {
            retailerAuth,
            popupStore,
            loadingStore
        };
    },
    created(){
        if(!this.retailerAuth.mobileNo){
            router.push({path:'/signup'})
        }
    },
   
    updated() {
        let one = document.querySelector("#one");
        let two = document.querySelector("#two");
        let three = document.querySelector("#three");
        let four = document.querySelector("#four");
        let five = document.querySelector("#five");
        let six = document.querySelector("#six");
        if (this.retailerAuth.otp1 == "") {
            one.focus();
        }
        else if (this.retailerAuth.otp2 == "") {
            two.focus();
        }
        else if (this.retailerAuth.otp3 == "") {
            three.focus();
        }
        else if (this.retailerAuth.otp4 == "") {
            four.focus();
        }
        else if (this.retailerAuth.otp5 == "") {
            five.focus();
        }
        else if (this.retailerAuth.otp6 == "") {
            six.focus();
        }
       
    },
    mounted() {
        document.querySelector("#one").focus();
    },
   
    components: { PopupPageErrorSuccess }
}
</script>

<style scoped>
.right{
    border: 1px solid black;
}
.content1{
    text-align: center;
    width:100%;
}
.otpcontent1{
    margin-top: 35px;
    width:200px;
    margin-left: auto;
    margin-right: auto;
}
.content2{
    font-size: 17px;
    margin-top: 30px;
}
.otpForm{
    width:95%;
    display:flex;
    flex-direction: row;
    gap:5px;
    margin-left:auto;
    margin-right:auto;
    margin-top:60px;
}
.otpForm>input{
    height: 50px;
    border: 1px solid rgb(172, 172, 172);
    text-align: center;
}
.otprecievebox{
    margin-top:50px;
    font-size: 15px;
}
.otprecievebox>div:nth-child(1){
    color:rgb(112, 112, 112);
}
</style>