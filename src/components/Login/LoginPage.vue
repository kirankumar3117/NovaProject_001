<template>
    <PopupPageErrorSuccess/>
    <div :class="loadingStore.loading || popupStore.popup  ? 'LeftRightContainer bgChange' : 'LeftRightContainer'">
        <div class="left">   
            <div class="leftcontainer">

                <div class="logo">
                    <img src="../../assets/logo.png" alt="" class="logoimg">
                </div>
                <div class="welcome coll">
                    Welcome
                </div>
                <div class="content1 coll">
                    Sign in to NovaGas Retail Portal
                </div>
                <form @submit.prevent="retailerauthStore.retailerLogin">

                    <div class="mt-4">
                        <input type="text" class="form-control input mt-5" placeholder="Phone Number" required=true v-model="retailerauthStore.mobileNo">
                        <input type="password" class="form-control input mt-3" placeholder="PIN" required=true v-model="retailerauthStore.password" id="password">
                        <div class="icon1">
                            <font-awesome-icon icon="fa-solid fa-eye" class="eyeicon" @click="handleViewPassword"/>
                        </div>
                    </div>
                    <div class="fpassword coll">
                        Forget Password
                    </div>
                    <div class="content2">
                        <div>
                            By logging in,you have read and accepted NovaGas
                        </div>
                        <div>
                            <span class="coll2 pointer">Terms & Conditions</span> and <span class="coll2 pointer">Privacy Policy</span>
                        </div>
                    </div>
                    <div>
                        <button-component text="Login" ></button-component>
                        <!-- <input type="submit" class="btn btn-primary login" value="Login"> -->
                    </div>
                </form>
                <div class="createaccount">
                    Don't have an account? <span class="coll fw-bold pointer">Create an account</span>
                </div>
            </div>
        </div>
        <div class="right">
            <img src="../../assets/login2.png" alt="" class="logo2">
        </div>
    </div>
</template>

<script>
import { useLodingSpinner } from '@/stores/Loading/loading';
import PopupPageErrorSuccess from '../Popup/PopupPageErrorSuccess.vue';
import { usePopupLoginSignup } from '@/stores/PopupLoginSignup/loginsignup';
import { useRetailerAuth } from '@/stores/Auth/retailerauth';
export default{
    setup() {
        const loadingStore = useLodingSpinner();
        const popupStore = usePopupLoginSignup();
        const retailerauthStore=useRetailerAuth();
        return {
            loadingStore,
            popupStore,
            retailerauthStore
        };
    },
    components: { PopupPageErrorSuccess },
    methods:{
        handleViewPassword(){
           let password= document.querySelector("#password");
           password.type='text';

           setTimeout(()=>{
            password.type='password'
           },3000)
        }
    }
   
}
</script>

<style scoped>




.welcome{
    font-weight: bold;
    font-size: 28px;
    margin-top: 33px;
}
.content1{
    margin-top:8px;
}

.fpassword{
    text-align: end;
    margin-right: 25px;
    font-size: 15px;
    cursor: pointer;
    position: relative;
    top:-15px;
}
.icon1{
    text-align: end;
}
.eyeicon{
    position: relative;
    top:-32px;
    width:14px;
    color: rgb(139, 139, 139);
    margin-right: 25px;
    cursor: pointer;
}
.content2{
    font-size: 11px;
}


.createaccount{
    font-size: 14px;
    margin-top:20px;
}


.logo2{
    width:100%;
    z-index: 1;
    position: relative;
}
@media screen and (max-width:420px) {
    .right{
        visibility: hidden;
    }
    .leftcontainer{
        margin-left:15%;
    }
}
</style>