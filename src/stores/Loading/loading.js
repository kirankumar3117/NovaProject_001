import {defineStore} from "pinia";

export const useLodingSpinner=defineStore('loading',{
    state:()=>({
        loading:false
    })
})                                                                                                                  