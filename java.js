$(document).ready(function(){
    $('.accordian-content1').hide();
    $('.accordian1').click(function(){
        $('.accordian-content1').slideToggle(300);
    });

    $('.accordian-content2').hide();
    $('.accordian2').click(function(){
        $('.accordian-content2').slideToggle(300);
    });

    $('.accordian-content3').hide();
    $('.accordian3').click(function(){
        $('.accordian-content3').slideToggle(300);
    });

    $('.accordian-content4').hide();
    $('.accordian4').click(function(){
        $('.accordian-content4').slideToggle(300);
    });

    $('.accordian-content5').hide();
    $('.accordian5').click(function(){
        $('.accordian-content5').slideToggle(300);
    })
});

function formData(){
    let a = document.getElementsByClassName("inputdollar1")[0].value;
    let b = document.getElementsByClassName("inputdollar2")[0].value;
    let c = document.getElementsByClassName("textarea")[0].value;

    if(a==""||b==""||c==""){
        alert("All fields are mandatory")
    } 
    else if(a==""){
        alert("Should be in all capital")
    }  
    else{
        alert("Submitted")
    };
};