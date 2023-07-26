let form1 = document.querySelector('.form1');
let form2 = document.querySelector('.form2');
let logi = document.querySelector('.log');
let passw = document.querySelector('.pass');
let voi = document.querySelector('.zac');
let but1 = document.querySelector('.bu1');
let but2 = document.querySelector('.bu2');

voi.addEventListener('click',()=>{
    form1.style.visibility='visible'
})

but1.addEventListener('click',()=>{
    if(logi.value==''){
        alert('Заполните поля')
    }else{
        form1.style.visibility='hidden'
        form2.style.visibility='visible'
    }
})

but2.addEventListener('click',()=>{
    if(passw.value==''){
        alert('Заполните поля')
    }else{
        form2.style.visibility='hidden'
        alert('Скоро мы вам позвоним чтобы подтведить заказ')
    }
})





//form.style.visibility='visible'
       // alert('Скоро мы вам позвоним чтобы подтведить заказ')