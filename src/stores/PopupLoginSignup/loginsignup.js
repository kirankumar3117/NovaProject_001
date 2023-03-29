import {defineStore} from "pinia";

export const usePopupLoginSignup=defineStore('loginsignup',{
    state:()=>({
        popup:false,
        popupIcon:'',
        popupContent1:'',
        popupContent2:'',
        popupContent3:''
    }),
    actions:{
        closePopup(){
            this.popup=false;
            this.popupIcon='',
            this.popupContent1='',
            this.popupContent2='',
            this.popupContent3=''
        }
    }
})                                                                                                                  