define([
    'app/controller/base',
    'app/module/validate',
    'app/interface/GeneralCtr',
    'app/interface/UserCtr',
    'app/interface/TradeCtr',
    'app/interface/AccountCtr',
    'app/module/tencentChat',
    'app/controller/Top',
    'app/controller/foo'
], function(base, Validate, GeneralCtr, UserCtr, TradeCtr, AccountCtr, TencentChat, Top, Foo) {
    let langType = localStorage.getItem('langType') || 'ZH';
    var code = base.getUrlParam("code");
    var isDetail = !!base.getUrlParam("isD"); //是否我的广告查看详情
    var userId = '';
    var nickname = '';
  var bizTypeList = {
    "0": base.getText('支付宝', langType),
    "1": base.getText('微信', langType),
    "2": base.getText('银联转账', langType),
    "3": base.getText('苹果礼品卡', langType),
    "4": base.getText('steam礼品卡', langType),
    "5": base.getText('银行转账', langType),
    "6": base.getText('尼日利亚银行转账', langType),
    "7": base.getText('Paypal 贝宝', langType),
    "8": base.getText('西联', langType)
  };
    var config = {
        adsCode: code,
        tradePrice: 0
    };

    var tradePhoto = '';
    var tradePhotoMy = '';
    var userName = '',
        myName = '';
    var limit = '';
    var tradeCoin = 'ETH';
    let tradeCurrency = 'CNY';

    let platTagList = [];

    if (!base.isLogin()) {
        base.goLogin();
        return;
    }
    init();

    function init() {
        base.showLoadingSpin();
        setHtml();
        if (!isDetail) {
            $(".buy-wrap").removeClass("hidden");
        }
        $.when(
          TradeCtr.getTagsList({ status: 1 })
        ).then((res) => {
          base.hideLoadingSpin();
          res.map((item) => {
            platTagList.push({
              key: item.id,
              value: item.name
            });
          });
          getAdvertiseDetail();
        }, base.hideLoadingSpin);
        addListener();
    }
    function setHtml() {
        $('title').text(base.getText('购买详情') + '-' +base.getText('区块链技术应用实验平台'));
        $('.en-buy_jy').text(base.getText('交易次数', langType));
        $('.en-buy_xr').text(base.getText('信任人数', langType));
        $('.en-buy_hp').text(base.getText('好评率', langType));
        $('.en-buy_ls').text(base.getText('历史成交', langType));
        $('.sp-lx').text(base.getText('联系对方', langType));
        $('.en-buy_bj').text(base.getText('报价', langType) + ':');
        $('.en-buy_xe').text(base.getText('交易限额', langType) + ':');
        $('.en-buy_sl').text(base.getText('交易数量', langType) + ':');
        $('.en-buy_fk').text(base.getText('付款方式', langType) + ':');
        $('.en-buy_fkqx').text(base.getText('付款期限', langType) + ':');
        $('.en-buy_mjly').text(base.getText('卖家留言', langType) + ':');
        $('.en-buy_mmds').text(base.getText('您想购买多少', langType) + '?');
        // $('.en-buy_ggsy').text(base.getText('点击此处获得帮助', langType));
        $('.en-buy_fz').text(base.getText('分钟', langType));
        $('.en-buy_tx').text(base.getText('交易提醒', langType));
        $('.warnWrap .warn-txt1').html(base.getText('提醒：请确认价格再下单,下单彼此交易的'));
        $('.warnWrap .warn-txt2').html(base.getText('将被托管锁定，请放心购买。'));
    }

    //获取详情
    function getAdvertiseDetail() {
        return TradeCtr.getAdvertiseDetail(code).then((data) => {
            userId = data.user.userId;
            nickname = data.user.nickname;
            tradeCurrency = data.tradeCurrency;
            $('.item-unit').text(tradeCurrency);
            $('#limit').next().text(tradeCurrency);
            var user = data.user;
            userName = user.nickname;
            tradeCoin = data.tradeCoin ? data.tradeCoin : 'BTC';
            let totalCountString = base.formatMoney(data.totalCountString, '', tradeCoin);

            if (user.photo) {
                tradePhoto = `<div class="photo goHref" data-href="../user/user-detail.html?coin=${tradeCoin}&userId=${user.userId} style="background-image:url(${base.getAvatar(user.photo)})"></div>`;
            } else {
                var tmpl = user.nickname ? user.nickname.substring(0, 1).toUpperCase() : '-';
                tradePhoto = '<div class="photo goHref" data-href="../user/user-detail.html?coin=' + tradeCoin + '&userId=' + user.userId + '" ><div class="noPhoto">' + tmpl + '</div></div>'
            }

            if (data.user.photo) {
                $("#photo").css({ "background-image": "url('" + base.getAvatar(data.user.photo) + "')" })
            } else {
                var tmpl = data.user.nickname ? data.user.nickname.substring(0, 1).toUpperCase() : '';
                var photoHtml = `<div class="noPhoto">${tmpl}</div>`
                $("#photo").html(photoHtml)
            }
            config.tradePrice = data.truePrice;
            limit = data.minTrade + '-' + data.maxTrade

            $("#nickname").html(data.user.nickname);
            if(data.user.idNo){
                $('.rz').text(base.getText('已认证', langType)).addClass('sp-yrz');
            }else{
                $('.rz').text(base.getText('未认证', langType)).addClass('sp-wrz');
            }
            if (data.status == "1" && isDetail) {
                $("#doDownBtn").removeClass("hidden");
            }

            var totalTradeCount = data.user.userStatistics.totalTradeCount == '0' ? '0' : base.formatMoney(data.user.userStatistics.totalTradeCount, '0', data.tradeCoin) + '+';

            $("#jiaoYiCount").html(data.user.userStatistics.jiaoYiCount)
            $("#beiXinRenCount").html(data.user.userStatistics.beiXinRenCount)
            $("#beiHaoPingCount").html(base.getPercentum(data.user.userStatistics.beiHaoPingCount, data.user.userStatistics.beiPingJiaCount))
            $("#totalTradeCount").html(totalTradeCount + data.tradeCoin)
            $("#leaveMessage").html(data.leaveMessage.replace(/\n/g, '<br>'))
            $("#limit").html(limit);
            $('#countString').html(totalCountString);
            $("#payType").html(bizTypeList[data.payType])
            $("#payLimit").html(data.payLimit)

            $("#truePrice").html(Math.floor(data.truePrice * 100) / 100 + '&nbsp;'+ tradeCurrency +'/' + tradeCoin)
            $("#submitDialog .tradePrice").html(config.tradePrice + '&nbsp;'+ tradeCurrency +'/' + tradeCoin)
            // $("#leftCountString").html(base.formatMoney(data.leftCountString, '', tradeCoin))
            $("#coin").text(tradeCoin);

            $('.buy-info .rate').html(data.truePrice + data.tradeCurrency);
            $('.buy-info .price').html(data.marketPrice + data.tradeCurrency);
            $('.buy-cjtk').append(`<span>${data.item}</span>`);
            $('.buy-cjtk .buy-quick-title .buy-title').html(data.user.nickname + '的出价条款');
            $('.buy-user-nickname').html(data.user.nickname);
            $('.buy-talk').html('安全托管+与'+data.user.nickname+'实时交谈');
            if(data.fixTrade == '' ||  data.fixTrade == undefined){
                $('.item-buyAmount').removeClass('hidden')
                $('.item-selectAmount').addClass('hidden')
                $('.buy-info .min').html(data.minTrade + '' + data.tradeCurrency);
                $('.buy-info .max').html(data.maxTrade + '' + data.tradeCurrency);
            }else{
                $('.item-buyAmount').addClass('hidden')
                $('.item-selectAmount').removeClass('hidden')
                $('#buyEth').attr('readonly','true')
                var selectHtml ='<option value="">请选择</option>';
                data.fixTradeList.forEach(function(item) {
                    selectHtml += `<option  value="${item}">${item}</option>`;
                })
                $('.item-selectAmount #amounSelect').html(selectHtml)
                $('.buy-info .min').html(data.fixTradeList[0] + '' + data.tradeCurrency);
                $('.buy-info .max').html(data.fixTradeList[data.fixTradeList.length - 1] + '' + data.tradeCurrency);

            }
            if(data.user.photo) {
              $('.icon-user-photo').css({ "background-image": "url('" + base.getAvatar(data.user.photo) + "')" });
            }else {
              let nick = data.user.nickname.substring(0, 1);
              $('.icon-user-photo').text(nick);
            }
          buildTagsHtml(data.platTag, data.customTag);

          let interval = base.fun(Date.parse(data.user.lastLogin), new Date());
          $('.detail-container-right .buy-user-info .buy-user-online .interval').html(interval);

          $('.buy-user-sy-plus').html(`+${data.userStatistics.beiHaoPingCount}`);
          $('.buy-user-sy-negative').html(`-${data.userStatistics.beiChaPingCount}`);
          //
          //   var code=base.getUrlParam('code');
          //   var status=base.getUrlParam('status');
          //   var tradeCoin=base.getUrlParam('tradeCoin');
          //   var type=base.getUrlParam('type');
          //   var operationHtml = ''
          //   if (status == '0') {
          //       operationHtml = `<div class="am-button am-button-red publish mr20 goHref" data-href="../trade/advertise.html?code=${code}&mod=gg&coin=${tradeCoin}&type=${type}">${base.getText('编辑', langType)}</div>
          //                        <div class="am-button am-button-red mr20 doDownBtn" data-code="${code}">${base.getText('下架', langType)}</div>`
          //   }
          //   $('.buy-operation').html(operationHtml)

          $.when(
                getAccount(data.tradeCoin),
                getUser()
            )

            base.hideLoadingSpin();
        }, base.hideLoadingSpin)
    }

    // 构建tag的dom结构
    function buildTagsHtml(tag1, tag2) {
      let tagsHtml = ``;
      if(tag1) {
        tag1.split('||').map((item) => {
          platTagList.map((k) => {
            if(item == k.key) {
              tagsHtml += `<span>${k.value}</span>`;
            }
          })
        });
      }
      if(tag2) {
        tagsHtml += `<span>${tag2}</span>`;
      }
      if(!tag1 && !tag2) {
        tagsHtml += `<span>暂无</span>`;
      }
      $('.buy-quick-condition').append(tagsHtml);
    }
    //我的账户
    function getAccount(currency) {
        return AccountCtr.getAccount().then((data) => {
            if (data.accountList) {
                data.accountList.forEach(function(item) {
                    if (item.currency == currency) {
                        $(".accountLeftCountString").attr('data-amount', base.formatMoneySubtract(item.amountString, item.frozenAmountString, currency));
                    }
                })

            }
            $(".accountLeftCountString").text($(".accountLeftCountString").attr('data-amount'))
        }, base.hideLoadingSpin)
    }

    //获取用户详情
    function getUser() {
        return UserCtr.getUser().then((data) => {
            var myInfo = data;
            myName = myInfo.nickname;
            if (myInfo.photo) {
                tradePhotoMy = `<div class="photo" style="background-image:url(${base.getAvatar(myInfo.photo)})"></div>`
            } else {
                var tmpl = myInfo.nickname.substring(0, 1).toUpperCase();
                tradePhotoMy = '<div class="photo"><div class="noPhoto">' + tmpl + '</div></div>'
            }

            //聊天框加载
            TencentChat.addCont({
                tradePhoto: tradePhoto,
                tradePhotoMy: tradePhotoMy,
                userName: userName,
                myName: myName,
                truePrice: $("#truePrice").html(),
                limit: limit + ' ' + tradeCurrency,
                success: function() {
                    $("#chatBtn").removeClass("hidden")
                }
            });
        }, base.hideLoadingSpin)
    }

    //购买
    function buyETH() {
        if($('.item-buyAmount').hasClass('hidden')){
            config.tradeAmount = $("#amounSelect option:selected").text();
        }else {
            config.tradeAmount = $("#buyAmount").val();
        }
        config.count = base.formatMoneyParse($("#buyEth").val(), '', $('.buy-detail-formwrapper #coin').text());
        console.log(tradeCoin )
        // config.交易密码 = $('#moneyPow').val();
        base.showLoadingSpin();
        return TradeCtr.buyETH(config).then((data) => {
            if(document.getElementById('audioBuyDetail').muted != false){
                document.getElementById('audioBuyDetail').muted = false;
            }
            document.getElementById('audioBuyDetail').play();
                base.showMsg(base.getText('下单成功', langType))
                setTimeout(function() {
                    base.gohref("../order/order-detail.html?code="+data.code);
                }, 3000);
                base.hideLoadingSpin();
            }, base.hideLoadingSpin) //

    }

    function addListener() {
        var _formWrapper = $("#form-wrapper");
        _formWrapper.validate({
            'rules': {
                'buyAmount': {
                    amountCny: true
                },
                'buyEth': {
                    amountEth: true
                },
            }
        })

        //立即下单点击
        $(document).on('click','#buyBtn',function() {
            $('.bb-m').text(tradeCoin);
            $("#submitDialog .tradeAmount").html($("#buyAmount").val() + tradeCurrency)
            $("#submitDialog .count").html($("#buyEth").val() + tradeCoin);
            UserCtr.getUser().then((data) => {
                if($('.item-selectAmount').hasClass('hidden')){
                    if ($("#buyAmount").val() != '') {
                        // $("#submitDialog").removeClass("hidden")
                        buyETH();
                    } else {
                        base.showMsg(base.getText('请输入您购买的金额', langType))
                    }
                }else {
                    if ($("#amounSelect").val() != '') {
                        // $("#submitDialog").removeClass("hidden")
                        buyETH();
                    } else {
                        base.showMsg(base.getText('请选择您购买的金额', langType))
                    }
                }

                // else if (!data.tradepwdFlag) {
                //     base.showMsg(base.getText('请先设置交易密码', langType))
                //     setTimeout(function() {
                //         base.gohref("../user/setTradePwd.html?type=1")
                //     }, 1800)
                // }
                // else if (!data.realName) {
                //     base.showMsg("请先进行身份验证")
                //     setTimeout(function() {
                //         base.gohref("../user/identity.html")
                //     }, 1800)
                // }
            }, base.hideLoadingSpin);
        });
      
        //下单确认弹窗-放弃点击
        $("#submitDialog .closeBtn").click(function() {
            $("#submitDialog").addClass("hidden")
        });
        
        // 点击头像跳个人中心
      $('.buy-user-info .icon-user-photo').stop().click(function() {
        base.gohref(`../user/user-detail.html?userId=${userId}`);
      });

        $("#buyEth").keyup(function() {
            let truePrice = $("#buyEth").val() * config.tradePrice;
            $("#buyAmount").val((Math.floor(truePrice * 100) / 100).toFixed(2));

        })
        $("#buyAmount").keyup(function() {
            $("#buyEth").val(($("#buyAmount").val() / config.tradePrice).toFixed(8));
        })
        $("#amounSelect").change(function() {
            if($("#amounSelect").val() == ''){
                $("#buyEth").val('')
            }else {
                $("#buyEth").val(($("#amounSelect option:selected").text() / config.tradePrice).toFixed(8));
            }
        })
        //下架-点击
        $("#doDownBtn").click(function() {
            base.confirm(base.getText('确认下架此广告？', langType), base.getText('取消', langType), base.getText('确定', langType)).then(() => {
                base.showLoadingSpin()
                TradeCtr.downAdvertise(code).then(() => {
                    base.hideLoadingSpin();

                    base.showMsg(base.getText('操作成功', langType));
                    $("#doDownBtn").addClass("hidden");
                    setTimeout(function() {
                        base.gohref("./index.html?mod=gm");
                    }, 1000)
                }, base.hideLoadingSpin)
            }, base.emptyFun)
        })
        $(document).on("click", ".buy-operation .doDownBtn", function() {
            var adsCode = $(this).attr("data-code");
            base.confirm(base.getText('确认下架此广告？', langType), base.getText('取消', langType), base.getText('确定', langType)).then(() => {
                base.showLoadingSpin()
                TradeCtr.downAdvertise(adsCode).then(() => {
                    base.hideLoadingSpin();

                    base.showMsg(base.getText('操作成功', langType));
                    setTimeout(function() {
                        base.showLoadingSpin();
                        config.start = 1;
                        base.gohref("../index.html?mod=gm");
                    }, 1500)
                }, base.hideLoadingSpin)
            }, base.emptyFun)
        })
        //聊天按钮点击
        $(".det-lx").click(function() {
            base.showLoadingSpin();
            // 购买开始聊天，提交交易订单
            TradeCtr.chatOrderBuy(code).then((data) => {
                TencentChat.showCont({
                    code: data.code,
                })
            }, base.hideLoadingSpin)

        });

        // 查看评价
        $('.detail-container-wrap').on('click', '.topj', function(){
            base.gohref(`../user/user-pj.html?userId=${userId}&nickname=${nickname}`);
        })
    }
});