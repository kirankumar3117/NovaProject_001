import axios from "axios";
import {defineStore} from "pinia";
import { useLodingSpinner } from "../Loading/loading";
import { usePopupLoginSignup } from "../PopupLoginSignup/loginsignup";
export const useRetailerAuth=defineStore('retailerauth',{
    //  loading:useLodingSpinner(),
    state:()=>({
        loading:useLodingSpinner(),
        mobileNo:'',
        password:'',
        popup:usePopupLoginSignup()
    }),

    actions:{
        async retailerLogin(){
            this.loading.loading=true
            try{
                const res=await axios.post(`${process.env.VUE_APP_API}/login`,{
                    email:this.mobileNo,
                    password:this.password
                })
                this.loading.loading=false
                this.mobileNo='',
                this.password=''
                console.log(res.data)
                console.log(res.status)
            }catch(error){
                console.log(error)
                this.mobileNo='',
                this.password=''
                this.loading.loading=false
                this.popup.popupContent1='You have provided an invalid information Please enter the right information or call '
                this.popup.popupContent2='+233 302 428 550 '
                this.popup.popupContent3='for assistance'
                this.popup.popupIcon='error'
                this.popup.popup=true
            }
        }
    },
})                                                                                                                  