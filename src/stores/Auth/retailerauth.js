import axios from "axios";

import {defineStore} from "pinia";

import { useLodingSpinner } from "../Loading/loading";

import { usePopupLoginSignup } from "../PopupLoginSignup/loginsignup";

export const useRetailerAuth=defineStore('retailerauth',{
    state:()=>({
        loading:useLodingSpinner(),
        mobileNo:'',
        password:'',
        otp1:'',
        otp2:'',
        otp3:'',
        otp4:'',
        otp5:'',
        otp6:'',
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
                this.popup.popupIcon='error',
                this.popup.popupHead='LOGIN ERROR'
                this.popup.popup=true
            }
        },
        async retailerSignup(){
            this.loading.loading=true
            this.password=this.otp1+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6;
            try{
                const res=await axios.post(`${process.env.VUE_APP_API}/login`,{
                    email:this.mobileNo,
                    password:this.password
                })
                this.loading.loading=false
                this.mobileNo='',
                this.password='',
                this.otp1='',
                this.otp2='',
                this.otp3='',
                this.otp4='',
                this.otp5='',
                this.otp6='',
                this.popup.popup=true,
                this.popup.popupIcon='success',
                this.popup.popupHead='SUCCESS',
                this.popup.popupContent1='Upload a valid National ID to',
                this.popup.popupContent2='complete registration',
                this.popup.popupPage='signupsuccess'
            }
            catch(err){
                this.password='';
                this.otp1='',
                this.otp2='',
                this.otp3='',
                this.otp4='',
                this.otp5='',
                this.otp6='',
                this.loading.loading=false;
                this.popup.popup=true;
                this.popup.popupHead='OTP ERROR',
                this.popup.popupContent1='You have entered an invalid OTP',
                this.popup.popupIcon='otperror'
                this.popup.popupContent2='Please enter a valid OTP'
            }
        }
    },
})                                                                                                                  