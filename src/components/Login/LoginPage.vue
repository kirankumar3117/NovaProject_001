<template>
    <div :class="loadingStore.loading ? 'Container bgChange' : 'Container'">
        <div class="left">   
            <div class="logincontainer">

                <div class="image">
                    <img src="../../assets/logo.png" alt="" class="img">
                </div>
                <div class="welcome coll">
                    Welcome
                </div>
                <div class="content1 coll">
                    Sign in to NovaGas Retail Portal
                </div>
                <form @submit.prevent="">

                    <div class="mt-4">
                        <input type="text" class="form-control input mt-5" placeholder="Phone Number" required=true>
                        <input type="password" class="form-control input mt-3" placeholder="PIN" required=true>
                        <div class="icon1">
                            <font-awesome-icon icon="fa-solid fa-eye" class="eyeicon"/>
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
                        <input type="submit" class="btn btn-primary login" value="Login">
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
export default{
    setup(){
        const loadingStore=useLodingSpinner();
        return{
            loadingStore
        }
    }
}
</script>

<style scoped>
.Container{
    width:100%;
    height:100vh;
    display: flex;;
    flex-direction: row;
    justify-content: space-around;
}
.bgChange{
    opacity:0.5;
}
.logincontainer{
    width:320px;
    margin-left: auto;
    margin-right: auto;
    margin-top:20%;
    text-align: center;
   
}
.image{
    width:100%;
    text-align: center;
}
.img{
    width:153px;
}
.welcome{
    font-weight: bold;
    font-size: 28px;
    margin-top: 33px;
}
.content1{
    margin-top:8px;
}
.input{
    width:95%;
    margin-left:2.5%;
    height:48px;
    border: 1px solid rgb(148, 148, 148);
    /* position: relative; */
}
.fpassword{
    /* margin-top: 10px; */
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
.coll{
    color:#01263C;
}
.coll2{
    color:#274383
}
.login{
    width:296px;
    background-color: #01263C;
    height: 48px;
    margin-top: 20px;
}
.createaccount{
    font-size: 14px;
    margin-top:20px;
}
.pointer{
    cursor: pointer;
}
.right{
    width:50%;
}
.left{
    width:50%;
}
.logo2{
    width:100%;
}
@media screen and (max-width:420px) {
    .right{
        visibility: hidden;
    }
    .logincontainer{
        margin-left:15%;
    }
}
</style>