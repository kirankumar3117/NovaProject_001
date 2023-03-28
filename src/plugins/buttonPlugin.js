import ButtonComponent from "@/components/ReusableComponents/ButtonComponent.vue"
export default{
    install:(app,options)=>{
        app.component('button-component',ButtonComponent)
    }
}