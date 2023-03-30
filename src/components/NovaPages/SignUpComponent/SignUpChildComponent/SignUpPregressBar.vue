<template>
    <div class="progressContainer">
        <div class="progressRoundContainer progressLine">
            <div :class="text=='signupmobile' ? 'progressRound bgBlue' : text=='otp' || text=='document' ? 'progressRound bgGreen' : 'progressRound bgBlue'"></div>
             <div :class="text=='otp' ?  'progressRound bgBlue' : text=='document' ? 'progressRound bgGreen' : 'progressRound' "></div>
             <div class="progressRound"></div>
        </div>
    </div>
</template>

<script>
export default{
    name:'ProgressBar',
    props:{
        text:String
    }
}
</script>

<style>
.progressContainer{
    width:100%;
    text-align: center;
    position: relative;
    top:70px;
    z-index: 2;
}
.progressRound{
    width:30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(145, 142, 142);
    position: relative;
    top:-12.5px;
}
.progressRoundContainer{
    width:100%;
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
}
.progressLine{
    width:150px;
    height: 2.5px;;
    background-color: #01263C;
    margin-left: auto;
    margin-right: auto;
}
.bgBlue{
    background-color: #01263C;
}
.bgGreen{
    background-color: #3a7e3b;
}

/* .progressRoundContainer{
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    position: relative;
    top:-12.5px;
}  */
</style>