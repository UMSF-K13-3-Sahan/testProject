function test(locale){
    $.ajax({
        method: 'GET',
        url: '/langs',
        data: {
            locale: locale
        },
        success: function test(){
            window.location.reload()
        }
    });
}
