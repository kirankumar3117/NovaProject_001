<template>
    <div class="popupContainer" v-if="popupStore.popup">
        <div class="popup">
            <div class="loginerror">
                <div>

                    LOGIN ERROR
                </div>
                <div>
                    <!-- <font-awesome-icon icon="fa-solid fa-xmark" class="xmark" size="xl"/> -->
                </div>
            </div>
            <div>
                <font-awesome-icon icon="fa-solid fa-circle-exclamation" flip style="color: #eb0000;" size="100px" class="erroricon" @click="popupStore.closePopup" v-if="popupStore.popupIcon=='error'"/>
            </div>
            <div class="content">
                <div v-if="popupStore.popupIcon=='error'">
                    <span>{{ popupStore.popupContent1 }} </span>
                    <span>{{popupStore.popupContent2}}</span>
                   
                    <span> {{popupStore.popupContent3}}</span>
                </div>
            </div>
            <div>
                <button-component text="ok" @click="popupStore.closePopup" class="okbutton"></button-component>
            </div>
<<<<<<< HEAD
=======
            <br/>
>>>>>>> 997af94 (add)
        </div>
    </div>
</template>

<script>
import { usePopupLoginSignup } from '@/stores/PopupLoginSignup/loginsignup';
export default{
    setup(){
        const popupStore=usePopupLoginSignup();
        return{
            popupStore
        }
    }
}
</script>

<style>
.popupContainer{
    width:100%;
    position: absolute;
}
.popup{
    position: relative;
    width:350px;
<<<<<<< HEAD
    height: 355px;
=======
>>>>>>> 997af94 (add)
    margin-left: auto;
    margin-right: auto;
    margin-top:13%;
    border-radius: 7px;
    background-color: white;
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    text-align: center;
}
.loginerror{
    font-weight: bold;
    position: relative;
    top:25px;
    color: black;
    text-align: center;
}
.xmark{
   position: relative;
   top:-25px;
   margin-left: 85%;
   cursor: pointer;
}
.erroricon{
    position: relative;
    width:70px;
    height:70px;
    top:35px;
}
.content{
    width:80%;
    margin-left: 10%;
    font-size: 15px;
    font-weight: 200;
    color:rgb(92, 92, 92);
<<<<<<< HEAD
    margin-top: 50px;
=======
    margin-top: 70px;
>>>>>>> 997af94 (add)
    text-align: center;
}
.content>div>span:nth-child(2){
    color:rgb(71, 71, 71);
    font-weight: bold;
}
.okbutton{
   position: relative;
   /* top: 80px; */
}
@media screen and (max-width:420px) {
    .popup{
        margin-top:35%;
    }
}
</style>