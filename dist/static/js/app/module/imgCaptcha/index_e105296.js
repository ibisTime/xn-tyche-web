'use strict';

define('js/app/module/imgCaptcha/index', ['require'], function (require) {
    var selectChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        captchaCode = "";
    return {
        createCaptcha: function createCaptcha() {
            captchaCode = "";
            for (var i = 0; i < 4; i++) {
                captchaCode += selectChar[Math.floor(Math.random() * 60)];
            }
            return captchaCode;
        },
        checkCaptcha: function checkCaptcha(code) {
            var pattern = new RegExp("^" + captchaCode + "", "i");
            return pattern.test(code);
        }
    };
});