<template>
    <div class="LoadingContainer">
        <div class="LoadingSpinner">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<style>
.LoadingContainer{
    position: absolute;
    width:100%;
    text-align: center;
}
.LoadingSpinner{
    margin-top: 20%;
    position: relative;
}
.spinner-border{
    color:#01263C;
}
@media screen and (max-width:420px) {
    .LoadingSpinner{
        margin-top: 300px;
    }
}
</style>