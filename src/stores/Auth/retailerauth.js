import axios from "axios";
import {defineStore} from "pinia";
// import loading from "../Loading/loading"
export const useRetailerAuth=defineStore('retailerauth',{
    state:()=>({
        loading:false,
        mobileNo:'',
        password:''
    }),
    actions:{
        async retailerLogin(){
            this.loading=true
            try{
                const res=await axios.post(`${process.env.VUE_APP_API}/login`,{
                    email:this.mobileNo,
                    password:this.password
                })
                this.loading=false
                console.log(res.data)
                console.log(res.status)
            }catch(error){
                console.log(error)
                this.loading=false
            }
        }
    },
    // uses:[loading]
})                                                                                                                  