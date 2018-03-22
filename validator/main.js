$(function(){
    // var $inputs = $('[data-rule]')
    var username = new Input($('#username'));
    var password = new Input($('#password'));
    var tel = new Input($('#tel'));
    // console.log(input.validator.is_valid())
    function is_valid(){
        var username_valid = username.validator.is_valid(),
            password_valid = password.validator.is_valid(),
            tel_valid = tel.validator.is_valid();
        return username_valid && password_valid && tel_valid;
    }
    // // var form = $('.form');
    $('#register').click(function(event){
        event.preventDefault();
        $('#username').blur();
        $('#password').blur();
        $('#tel').blur();
        if(is_valid()){
            alert('valid');
        }else
        alert('unvalid')

    })
})
