define([
    'app/controller/base'
], function (base) {
    let mod = base.getUrlParam('mod');
    let langType = localStorage.getItem('langType') || 'ZH';
    if(langType == 'EN'){
        $('title').text('Fiat- blockchain technology application experimental platform');
    }
    if (!base.isLogin() && mod != 'gm' && mod != 'cs') {
        base.goLogin();
        return false;
    }
    $(".trade").addClass('active');
    $('#left-wrap').on('click', '.left-item .fb',function(){
        if (!base.isLogin()) {
            base.goLogin();
            return false;
        }
    });

    mod && $('#left-wrap .' + mod).addClass('sel-nav_item');
})
