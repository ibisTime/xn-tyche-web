define([
    'app/controller/base',
    'app/module/validate',
    'app/interface/GeneralCtr',
    'app/interface/UserCtr',
    'app/interface/TradeCtr',
    'app/interface/AccountCtr',
    'app/controller/Top',
    'app/controller/foo'
], function(base, Validate, GeneralCtr, UserCtr, TradeCtr, AccountCtr, Top, Foo) {
    let langType = localStorage.getItem('langType') || 'ZH';
    var code = base.getUrlParam("code") || '';
    var coin = base.getUrlParam("coin") || 'BTC'; // 币种
    var status = '1';
    let payType = {};
    var mid = 0,
        jdLeft = 0,
        selOnlyCert = 0;
    var pay = '';
    var midBlv = 0;
    var isKup = true;
    let langText = '';
    if (langType === 'EN') {
        langText = '_en';
    }
    // step1
    let payBigType = '';
    let paySubType = '';
    let paySearch = '';
    let tradeCoin = '';

    let tradeType = 1;
    // step3
    let step3TagInitData = [];
    let targetArea = '';    // 目标国家
    let customTag = '';     // 用户自定义标签
    let step3ConditionConfig = {
      email: 0,
      mobile: 0,
      id: 0
    };                      // 验证
    let step3AreaLimit = '';    //国家/地区限制
    let step3Visible = '';     // 可见性
    let isAllowProxy = '';

      if(!base.isLogin()){
        base.goLogin()
      }else {
        if(location.href.indexOf('step2') !== -1) {
          step2Init();
        } else if(location.href.indexOf('step3') !== -1) {
          step3Init();
        } else {
          init();
        }
      }
    function init() {
        // setHtml();
        base.showLoadingSpin();
      $('.head-nav-wrap .advertise').addClass('active');
        if (code != "") {
            $("#draftBtn").addClass("hidden")
        }
        $("#coin").text(coin.toUpperCase());
        $("#tradeCoin").val(coin.toUpperCase());

        $("#price").attr("disabled", true);
      $.when(
        GeneralCtr.getDictList({ "parentKey": "payment_method" }),
        TradeCtr.getPayCoinList()
      ).then((data1, data2) => {
        let tabHtml = '';
        data1.forEach((item, i) => {
          tabHtml += buildTabHtml(item, i)
        });
        $(".advertise-step1-tabs").append(tabHtml);
        getPayTypeList(data1[0].dkey);
        let step1SelectHtml = '';
        data2.forEach((item, i) => {
          step1SelectHtml += buildStep1SelectHtml(item, i)
        });
        $("#tradeCoin").append(step1SelectHtml);
      }, base.hideLoadingSpin);

        addListener();
    }
  // step2 - 初始化方法
  function step2Init() {
      base.showLoadingSpin();
      $.when(
        TradeCtr.getMarket(sessionStorage.getItem('tradeCoin'))
      ).then((data1) => {
        base.hideLoadingSpin();
        $('.step2-zq-tips .step2-za-tip-market-price .step2-zq-tip-weighter').html(data1[0].lastPrice + '' + data1[0].referCurrency);

      }, base.hideLoadingSpin);
      addListener();
    }
  // step3 - 初始化方法
  function step3Init() {
    setHtml();
    base.showLoadingSpin();
    $.when(
      TradeCtr.getTagsList({ status: 1 }),
      TradeCtr.getCountryList({ status: 1 })
    ).then((data1, data2) => {
      base.hideLoadingSpin();
      // data1.map((item) => {
      //   step3TagInitData.push(item.name);
      // });
      console.log(data1);
      data1.map((item) => {
        item.text = item.name;
      });
      step3TagInitData = data1;
      let step3SelectedData = [];
      select2WithData(step3SelectedData);

      let step3CountryListHtml = '';
      data2.map((item, i) => {
        step3CountryListHtml += buildStep3CountryListHtml(item);
      });
      $('#targetArea').html(step3CountryListHtml);
    }, base.hideLoadingSpin);
    addListener();
  }
  function select2WithData(step3SelectedData) {
    $("#step3Tags").select2({
      tags: true,                          //支持新增，默认为false
      maximumSelectionLength: 3,           //最多能够选择的个数
      multiple: true,                      //支持多选，默认为false
      data: step3TagInitData,                      //下拉框绑定的数据
      allowClear: true,                    //支持清空，默认为false
      placeholder: '请选择标签'      //提示语
    }).val(step3SelectedData).trigger('change');  //多选情况下给选中项的赋值
    // $('#step3Tags').bSelectPage({
    //   showField : 'name',
    //   keyField : 'id',
    //   data : step3TagInitData,
    //   multiple : true
    // });
  }
  // step1-构建顶部tab的dom结构
  function buildTabHtml(data, i) {
      let classHtml;
      if(i === 0) {
        classHtml = 'tab-item active';
      } else {
        classHtml = 'tab-item'
      }
    return `<span class="${classHtml}" data-index=${i} data-dkey=${data.dkey}>${data.dvalue}<i class="active-triangle"></i></span>`
  }

  // step1-构建交易货币select的dom结构
  function buildStep1SelectHtml(data, i) {
    return `<option class="trade-item" value=${data.name} data-code=${data.simpleName}>${data.name}</option>`
  }

  // 构建list的dom结构
  function buildListHtml(data, i) {
    return `<div class="advertise-payType-item" data-code=${data.code}>
                    <span>${data.name}</span><i class="icon icon-step1-unselected"></i>
                </div>`
  }
  // step3 - 构建目标国家/地区list
  function buildStep3CountryListHtml(data) {
    return `<option value=${data.code}>${data.chineseName}</option>`
  }

  // 列表查付款方式
  function getPayTypeList(dkey) {
      let config;
      if(dkey) {
        config = {type: dkey, status: 1};
      } else {
        config = {type: payBigType, name: paySearch, status: 1}
      }
    return TradeCtr.getPayTypeList(config).then((res) => {
      let listHtml = '';
      res.forEach((item, i) => {
        listHtml += buildListHtml(item, i)
      });
      $(".advertise-payType-item-container").html(listHtml);
    })
  }
    function setHtml() {
        // $('title').text(base.getText('发布广告') + '-' +base.getText('FUNMVP区块链技术应用实验平台'));
        // $('.en_fbgg').html(`${base.getText('发布')}<span class="bb-name"></span>${base.getText('交易广告')}`);
        // $('.jylx').html(base.getText('交易类型'));
        // $('.fy_gdxz').html(base.getText('更多信息'));
        // $('.xzgglx').html(base.getText('选择广告类型') + '：');
        // $('.xzgglxsm').html(base.getText('选择广告类型说明'));
        // $('.zxcs').html(base.getText('在线出售'));
        // $('.zxgm').html(base.getText('在线购买'));
        // $('.hb').html(base.getText('货币') + '：');
        // $('.hbsm').html(base.getText('您希望交易付款的货币类型'));
        // $('.yj').html(base.getText('溢价') + '：');
        // $('.fy_jg').html(base.getText('价格') + '：');
        // $('.fy_zdjxt').html(base.getText('最低价（选填）') + '：');
        // $('.fy_zxxe').html(base.getText('最小限额') + '：');
        // $('.fy_zdxe').html(base.getText('最大限额') + '：');
        // $('.fy_gmzl').html(base.getText('购买总量') + '：');
        // $('.fy_zhkyye').html(base.getText('账户可用余额'));
        // $('.fy_fkfs').html(base.getText('收款方式') + '：');
        // $('.fy_ggly').html(base.getText('广告留言') + '：');
        $('.fy_gjsz').html(base.getText('高级选项'));
        // $('.fy_jxsxrdjyz').html(base.getText('仅限受信任的交易者') + `：<samp id="trustExp"></samp>`);
        // $('.fy_qy').html(base.getText('启用'));
        // $('.fy_kfsj').html(base.getText('开放时间') + `：<samp id="displayTimeExp"></samp>`);
        // $('.fy_rhsh').html(base.getText('任何时候'));
        // $('.fy_zdy').html(base.getText('自定义'));
        // $('.fy_xq1').html(base.getText('星期一') + '：');
        // $('.fy_xq2').html(base.getText('星期二') + '：');
        // $('.fy_xq3').html(base.getText('星期三') + '：');
        // $('.fy_xq4').html(base.getText('星期四') + '：');
        // $('.fy_xq5').html(base.getText('星期五') + '：');
        // $('.fy_xq6').html(base.getText('星期六') + '：');
        // $('.fy_xq7').html(base.getText('星期日') + '：');
        $('.fy_xsgjsz').html(base.getText('高级选项') + '...');
        // $('#draftBtn').html(base.getText('保存草稿'));
        $('.advertise-step3-btn').html(base.getText('立即发布'));
        // $('#doDownBtn').html(base.getText('下架'));

    }

    function getAdvertisePrice(setCoin, m_type) {
        let wantCoin = setCoin || coin;
        return TradeCtr.getAdvertisePrice(wantCoin, m_type);
    }

    //我的账户
    function getAccount(currency) {
        return AccountCtr.getAccount().then((data) => {
            data.forEach(function(item) {
                if (item.currency == currency) {
                    $(".accountLeftCountString").attr('data-amount', base.formatMoneySubtract(`${item.amount}`, `${item.frozenAmount}`, currency));
                }
            })

            $(".accountLeftCountString").text($(".accountLeftCountString").attr('data-amount'))
        }, base.hideLoadingSpin)
    }

    //获取广告详情
    function getAdvertiseDetail() {
        return TradeCtr.getAdvertiseDetail(code).then((data) => {
            pay = data.tradeCurrency
            if(pay == 'CNY'){
                $('.m-type').text('CNY');
            }else{
                $('.m-type').text('USD');
            }
            status = data.status;
            data.premiumRate = data.premiumRate * 10;
            let premiumRate = (Math.floor(data.premiumRate * 1000) / 100).toFixed(2);
            data.minTrade = data.minTrade;
            data.maxTrade = (Math.floor(parseInt(data.maxTrade) * 100) / 100).toFixed(2);
            mid = data.marketPrice;
            var tradeCoin = data.tradeCoin ? data.tradeCoin : 'ETH';
            data.totalCount = base.formatMoney(data.totalCountString, '', tradeCoin)
            // // 进度条初始化
            $('.yj-num').val(premiumRate);
            $('.yj-num').keyup();
            //广告类型
            if (data.tradeType == '1') {
                $(".trade-type .item").eq(0).addClass("on").siblings('.item').removeClass("on").addClass("hidden")
            } else {
                $(".trade-type .item").eq(1).addClass("on").siblings('.item').removeClass("on").addClass("hidden")
            }
            // $(".trade-type .item.on .icon-check").click();

            $("#form-wrapper").setForm(data);

            //币种
            $("#tradeCoin").val(data.tradeCoin).attr("disabled", true);

            //账户余额
            $("#coin").text($("#tradeCoin").val())
            $("#price").attr("data-coin", $("#tradeCoin").val());
            $("#price").val((Math.floor(data.truePrice * 100) / 100).toFixed(2));
            //正式
            //账户余额
            $(".accountLeftCountString").text($(".accountLeftCountString").attr('data-amount'))

            //是否仅粉丝
            if (data.onlyTrust == '1') {
                $("#onlyTrust").addClass("on")
            } else {
                $("#onlyTrust").removeClass("on")
            }

            //开放时间
            if (data.displayTime.length && data.displayTime.length > 0) { //自定义
                $(".time-type .item").eq(1).addClass("on").siblings(".item").removeClass("on");
                $("#timeWrap").removeClass("hide")

                $("#timeWrap .time-item:nth-of-type(1) .startTime").val(data.displayTime[0].startTime);
                $("#timeWrap .time-item:nth-of-type(1) .endTime").val(data.displayTime[0].endTime)
                $("#timeWrap .time-item:nth-of-type(2) .startTime").val(data.displayTime[1].startTime);
                $("#timeWrap .time-item:nth-of-type(2) .endTime").val(data.displayTime[1].endTime)
                $("#timeWrap .time-item:nth-of-type(3) .startTime").val(data.displayTime[2].startTime);
                $("#timeWrap .time-item:nth-of-type(3) .endTime").val(data.displayTime[2].endTime)
                $("#timeWrap .time-item:nth-of-type(4) .startTime").val(data.displayTime[3].startTime);
                $("#timeWrap .time-item:nth-of-type(4) .endTime").val(data.displayTime[3].endTime)
                $("#timeWrap .time-item:nth-of-type(5) .startTime").val(data.displayTime[4].startTime);
                $("#timeWrap .time-item:nth-of-type(5) .endTime").val(data.displayTime[4].endTime)
                $("#timeWrap .time-item:nth-of-type(6) .startTime").val(data.displayTime[5].startTime);
                $("#timeWrap .time-item:nth-of-type(6) .endTime").val(data.displayTime[5].endTime)
                $("#timeWrap .time-item:nth-of-type(7) .startTime").val(data.displayTime[6].startTime);
                $("#timeWrap .time-item:nth-of-type(7) .endTime").val(data.displayTime[6].endTime)

            } else { // 任何时候
                $(".time-type .item").eq(0).addClass("on").siblings(".item").removeClass("on");
                $("#timeWrap").addClass("hide")
            }

            if (data.status == "1") {
                $("#doDownBtn").removeClass("hidden")
            }
            base.hideLoadingSpin();
        }, base.hideLoadingSpin)
    }

    //获取广告说明 type = buy ,sell
    function getExplain(type) {
        var param = ''
        if (type == 'buy') {
            param = 'buy_ads_hint'
        } else if (type == 'sell') {
            param = 'sell_ads_hint'
        }
        if(document.getElementById("form-wrapper")){
            document.getElementById("form-wrapper").reset();
        }
        $("#price").val(mid);

        return GeneralCtr.getSysConfigType(param, true).then((data) => {
            $("#displayTimeExp").html(data['displayTime'+langText]);
            $("#maxTradeExp").html(data['maxTrade'+langText])
            $("#minTradeExp").html(data['minTrade'+langText])
            $("#payLimitExp").html(data['payLimit'+langText])
            $("#payTypeExp").html(data['payType'+langText])
            $("#premiumRateExp").html(data['premiumRate'+langText])
            $("#priceExp").html(data['price'+langText]);

            if (type == 'buy') {
                $("#protectPriceExp").siblings('.txt').text(base.getText('最高价格', langType) + '：');
                $("#protectPrice").attr('placeholder', base.getText('广告最高可成交的价格', langType));
                $("#totalCountExp").siblings('.txt').text(base.getText('购买总量', langType) + '：');
                $("#totalCount").attr('placeholder', base.getText('请输请入购买币的总量', langType));
            } else if (type == 'sell') {
                $("#protectPriceExp").siblings('.txt').text(base.getText('最低价格', langType) + '：')
                $("#protectPrice").attr('placeholder', base.getText('广告最低可成交的价格', langType));
                $("#totalCountExp").siblings('.txt').text(base.getText('出售总量', langType) + '：');
                $("#totalCount").attr('placeholder', base.getText('请输入售卖币的总量', langType));
            }

            $("#protectPriceExp").html(data['protectPrice'+langText]);
            $("#totalCountExp").html(data['totalCount'+langText]);
            $("#trustExp").html(data['trust'+langText]);
            base.hideLoadingSpin();
        }, base.hideLoadingSpin)
    }

    // 发布广告
  function publishAdvertising() {
    base.showLoadingSpin();
    let platTag = $('#step3Tags').val().join('||');
    return TradeCtr.submitAdvertise({
      allowCountry: targetArea,
      customTag: $('#myTagInput').val(),
      isValidateEmail: step3ConditionConfig.email,
      isValidateIdentity: step3ConditionConfig.id,
      isValidateTelephone: step3ConditionConfig.mobile,
      item: $('#clauseTextarea').val(),
      leaveMessage: $('#explainTextarea').val(),
      maxTrade: Number(sessionStorage.getItem('max')),
      minTrade: Number(sessionStorage.getItem('min')),
      notAllowCountry: step3AreaLimit,
      onlyTrust: 0,
      payLimit: sessionStorage.getItem('cancelTime'),
      payType: sessionStorage.getItem('paySubType'),
      platTag: platTag,
      premiumRate: sessionStorage.getItem('zq') / 100,
      targetCountry: $('#targetArea').val(),
      tradeCurrency: sessionStorage.getItem('tradeCoin'),
      tradeType: Number(sessionStorage.getItem('tradeType')),
      isAllowProxy: isAllowProxy || 1
    }).then((res) => {
      base.showMsg(base.getText('操作成功', langType));
      if (params.tradeType == '0') {
        base.gohref('../order/order-list.html?coin=' + coin + '&adverType=BUY&mod=gg');
      } else {
        base.gohref('../order/order-list.html?coin=' + coin + '&adverType=SELL&mod=gg');
      }
      base.showLoadingSpin();
    }, base.hideLoadingSpin);
  }

    function addListener() {

        //選擇切換-点击
        $(".trade-type .icon-check").click(function() {
            var _this = $(this);
            base.showLoadingSpin();
            //在线出售
            if (_this.parent(".item").index() == '0') {
                $(".accountCount").removeClass("hidden")
                getExplain('sell')
                    //在线购买
            } else if (_this.parent(".item").index() == '1') {
                $(".accountCount").addClass("hidden")
                getExplain('buy');
                $('.num-go').css('left', '50%');
                $('.yj-num').val('0.00');
            }
            _this.parent(".item").addClass("on").siblings(".item").removeClass("on");
        })

        //受信任-点击
        $("#onlyTrust").click(function() {
            if ($(this).hasClass("on")) {
                $(this).removeClass("on");
            } else {
                $(this).addClass("on");
            }
        })

        //開放時間選擇-点击
        $(".time-type .icon-check").click(function() {
            var _this = $(this)
            _this.parent(".item").addClass("on").siblings(".item").removeClass("on")
            if (_this.parent(".item").hasClass("all")) {
                $("#timeWrap").addClass("hide")
            } else {
                $("#timeWrap").removeClass("hide")
            }
        })

        //显示高级设置 - 点击
        $(".advertise-hidden").click(function() {
            var _this = $(this)
            if (_this.hasClass("hide")) {
                $(".advertise-set .set-wrap").removeClass("hidden")
                _this.removeClass("hide")
                _this.text(base.getText('隐藏高级设置', langType) + "...")
            } else {
                $(".advertise-set .set-wrap").addClass("hidden")
                _this.text(base.getText('显示高级设置', langType) + "...")
                _this.addClass("hide")
            }
        });


        var _formWrapper = $("#form-wrapper");
        _formWrapper.validate({
            'rules': {
                "truePrice": {
                    required: true,
                    number: true,
                    amountCny: true
                },
                "premiumRate": {
                    required: true,
                    number: true,
                    tofixed2: true,
                    range: [-99.99, 99.99]
                },
                "protectPrice": {
                    required: true,
                    number: true,
                    amountCny: true
                },
                "minTrade": {
                    required: true,
                    number: true,
                    amountCny: true
                },
                "maxTrade": {
                    required: true,
                    number: true,
                    amountCny: true
                },
                "totalCount": {
                    required: true,
                    number: true,
                    amountEth: true
                },
                "payType": {
                    required: true,
                },
                "payLimit": {
                    required: true,
                },
                "leaveMessage": {
                    required: true,
                },
            },
            onkeyup: false
        })

        $('.yj-num').keyup(function(){//(parWidth * data.premiumRate) / 100;
            let leftValue = parseFloat($(".yj-num").val());
            if($(".yj-num").val() != '-' && $(".yj-num").val().length == 1){
                if(isNaN(leftValue)){
                    base.showMsg(base.getText('请输入数字', langType));
                }
                return;
            }
            if($(".yj-num").val() == ''){
                $(".yj-num").val('0');
                leftValue = 0;
            }
            if(leftValue > 50){
                $(".yj-num").val('50');
                leftValue = 50;
            }
            if(leftValue < -50){
                $(".yj-num").val('-50');
                leftValue = -50;
            }
            let parWidth = $('.num-huadtiao').width();
            jdLeft = (parWidth * leftValue) / 100;
            isKup = false;
            let jdValue = (mid * (1 + (leftValue / 100))).toFixed(2);
            let ccWidth = 50 / $('.num-huadtiao').width();
            $("#price").val(jdValue);
            $('.num-go').css({
                left: (50 + leftValue - ccWidth) + '%'
            });
        })

        //发布
        $("#submitBtn").click(function() {
            if (!base.isLogin()) {
                base.goLogin();
                return;
            }
            if (_formWrapper.valid()) {
                var publishType = '0'; // 0
                //草稿发布
                if (code != "" && status != '1') {
                    publishType = '2';
                    //编辑发布，原广告下
                } else if (code && status == '1') {
                    publishType = '3';
                    //直接发布
                } else {
                    publishType = '1';
                }
                doSubmit(publishType);
            }
        })

        //保存草稿
        $("#draftBtn").click(function() {
            if (!base.isLogin()) {
                base.goLogin();
                return;
            }
            if (_formWrapper.valid()) {
                var publishType = '0';
                doSubmit(publishType);
            }
        })

        //发布/保存草稿
        function doSubmit(publishType) {
            var params = _formWrapper.serializeObject();

            if (code != "") {
                params.adsCode = code;
            }

            // 是否实名
            params.onlyCert = selOnlyCert;

            params.premiumRate = params.premiumRate / 100;
            //广告类型 0=买币，1=卖币
            params.tradeType = $(".trade-type .item.on").index() == '0' ? '1' : '0';
            params.onlyTrust = $("#onlyTrust").hasClass("on") ? '1' : '0';
            // params.tradeCoin = $("#tradeCoin").val();
            params.publishType = publishType;

            if (base.getCoinType(params.tradeCoin) == '1') {
                params.protectPrice = params.truePrice;
            } else {
                params.truePrice = '0';
            }

            // 总价
            params.payLimit = 12;
            params.premiumRate = parseFloat($('.yj-num').val()) / 100;
            params.tradeCoin = coin;
            params.minTrade = params.minTrade;
            params.leaveMessage = params.leaveMessage.trim();
            params.totalCount = base.formatMoneyParse(params.totalCount, '', params.tradeCoin);
            if ($(".time-type .item.on").index() == "1") {
                params.displayTime = [{
                    week: '1',
                    startTime: $("#timeWrap .time-item:nth-of-type(1) .startTime").val(),
                    endTime: $("#timeWrap .time-item:nth-of-type(1) .endTime").val()
                }, {
                    week: '2',
                    startTime: $("#timeWrap .time-item:nth-of-type(2) .startTime").val(),
                    endTime: $("#timeWrap .time-item:nth-of-type(2) .endTime").val()
                }, {
                    week: '3',
                    startTime: $("#timeWrap .time-item:nth-of-type(3) .startTime").val(),
                    endTime: $("#timeWrap .time-item:nth-of-type(3) .endTime").val()
                }, {
                    week: '4',
                    startTime: $("#timeWrap .time-item:nth-of-type(4) .startTime").val(),
                    endTime: $("#timeWrap .time-item:nth-of-type(4) .endTime").val()
                }, {
                    week: '5',
                    startTime: $("#timeWrap .time-item:nth-of-type(5) .startTime").val(),
                    endTime: $("#timeWrap .time-item:nth-of-type(5) .endTime").val()
                }, {
                    week: '6',
                    startTime: $("#timeWrap .time-item:nth-of-type(6) .startTime").val(),
                    endTime: $("#timeWrap .time-item:nth-of-type(6) .endTime").val()
                }, {
                    week: '7',
                    startTime: $("#timeWrap .time-item:nth-of-type(7) .startTime").val(),
                    endTime: $("#timeWrap .time-item:nth-of-type(7) .endTime").val()
                }]
            }
            base.showLoadingSpin();
            return TradeCtr.submitAdvertise(params).then(() => {
                base.showMsg(base.getText('操作成功', langType));
                base.showLoadingSpin();
                setTimeout(() => {
                    // 保存草稿
                    if(params.publishType) {
                        if (params.tradeType == '0') {
                            base.gohref('../order/order-list.html?coin=' + coin + '&adverType=BUY&mod=gg');
                        } else {
                            base.gohref('../order/order-list.html?coin=' + coin + '&adverType=SELL&mod=gg');
                        }
                    } else {
                        if (params.tradeType == '0') {
                            base.gohref('../trade/sell-list.html?coin=' + coin + '&mod=cs');
                        } else {
                            base.gohref('../trade/buy-list.html?coin=' + coin + '&mod=gm');
                        }
                    }
                    base.hideLoadingSpin()
                }, 1000)
            }, base.hideLoadingSpin)

        }

        //下架
      $("#doDownBtn").on("click", function() {
          if (!base.isLogin()) {
              base.goLogin();
              return;
          }
          base.confirm(base.getText('确认下架此广告？', langType), base.getText('取消', langType), base.getText('确认', langType)).then(() => {
              base.showLoadingSpin();
              TradeCtr.downAdvertise(code).then(() => {
                  base.hideLoadingSpin();
                  base.showMsg(base.getText('操作成功', langType));
                  setTimeout(function() {
                      history.go(-1)
                  }, 1500)
              }, base.hideLoadingSpin)
          }, base.emptyFun)
      });

      // step1 - 下一步按钮点击事件
      $('.advertise-step1-btn').on('click', () => {
        sessionStorage.setItem('payBigType', payBigType);
        sessionStorage.setItem('paySubType', paySubType);
        sessionStorage.setItem('tradeCoin', tradeCoin);
        sessionStorage.setItem('tradeType', tradeType);
        base.gohref('../trade/advertise-step2.html');
      });

      // step2 - 下一步按钮点击事件
      $('.advertise-step2-btn').on('click', () => {
        sessionStorage.setItem('zq', $('#zqInput').val());
        sessionStorage.setItem('min', $('#minInput').val());
        sessionStorage.setItem('max', $('#maxInput').val());
        sessionStorage.setItem('cancelTime', $('#cancelTimeInput').val());
        sessionStorage.setItem('minPrice', $('#minPriceInput').val());
        base.gohref('../trade/advertise-step3.html');
      });

      // step3 - 立即发布按钮点击事件
      $('.advertise-step3-btn').on('click', () => {
        publishAdvertising();
      });

      // step1 - 搜索框
      $("#tradeCurrency").bind('input propertychange',function(){
        paySearch = $('#tradeCurrency').val();
        getPayTypeList()
      });

      // step1-tab点击切换事件
      $(".advertise-step1-tabs").on("click", ".tab-item", function (e){
        let target = e.target;
        $(target).addClass('active').siblings().removeClass('active');
        payBigType = $(target).attr('data-dkey');
        getPayTypeList($(target).attr('data-dkey'));
      });

      // step1-list点击事件
      $('.advertise-payType-item-container').on('click', '.advertise-payType-item', (e) => {
        let target = e.target;
        paySubType = $(target).attr('data-code');
        $(target).addClass('on').siblings().removeClass('on');
      });

      // step1-select点击事件
      $('#tradeCoin').on('change', (e) => {
        tradeCoin = $('#tradeCoin').find('option:selected').attr('data-code');
      });

      // step3-目标国家select点击事件
      $('#targetArea').on('change', (e) => {
        targetArea = $('#targetArea').find('option:selected').attr('value');
      });

      // step3 - 验证
      $('.step3-condition-checkbox .condition-checkbox-item i').on('click', (e) => {
        let target = e.target;
        if($(target).attr('data-code') === 'email') {
          if($(target).hasClass('on')) {
            step3ConditionConfig.email = 0;
          } else {
            step3ConditionConfig.email = 1;
          }
        } else if($(target).attr('data-code') === 'mobile') {
          if($(target).hasClass('on')) {
            step3ConditionConfig.mobile = 0;
          } else {
            step3ConditionConfig.mobile = 1;
          }
        } else if($(target).attr('data-code') === 'id') {
          if($(target).hasClass('on')) {
            step3ConditionConfig.id = 0;
          } else {
            step3ConditionConfig.id = 1;
          }
        }
        if($(target).hasClass('on')) {
          $(target).removeClass('on');
        } else {
          $(target).addClass('on');
        }

      });

      // step3 - 可见性
      $('.step3-visible-checkbox .visible-checkbox-item i').on('click', (e) => {
        let target = e.target;
        if($(target).hasClass('on')) {
          $(target).removeClass('on');
          step3Visible = 0;
        } else {
          $(target).addClass('on');
          step3Visible = 1;
        }

      });

      // step3 - 国家/地区限制
      $('.step3-area-limit-checkbox .area-limit-checkbox-item i').on('click', (e) => {
        let target = e.target;
        step3AreaLimit = $(target).attr('data-code');
        $(target).addClass('on').siblings.removeClass('on');
      });

      // vpn
      $('.step3-vpn-checkbox .vpn-checkbox-item i').on('click', (e) => {
        let target = e.target;
        isAllowProxy = $(target).attr('data-code');
        $(target).addClass('on').siblings.removeClass('on');
      });

      // 切换买币卖币
      $('.advertise-step1-bigbigTitle .text').on('click', '.change', (e) => {
        let target = e.target;
        if($(target).hasClass('buy')) {
          $(target).removeClass('buy').addClass('sell');
          $('.advertise-step1-bigbigTitle .title').html('卖出您的比特币以获得利润');
          $('.advertise-step1-bigbigTitle .text').html(`<p class="text">想要获得比特币吗？<span class="change sell">创建一个出价来购买比特币</span></p>`);
          tradeType = 1;
        } else {
          $(target).removeClass('sell').addClass('buy');
          $('.advertise-step1-bigbigTitle .title').html('购买比特币');
          $('.advertise-step1-bigbigTitle .text').html(`<p class="text">想要出售比特币吗？<span class="change buy">去出售比特币</span></p>`);
          tradeType = 0;
        }
      });


        base.hideLoadingSpin();
    }
});