define([
    'app/controller/base',
    'pagination',
    'app/interface/TradeCtr',
    'app/controller/Top',
    'app/controller/foo'
], function(base, pagination, TradeCtr, Top, Foo) {
    let langType = localStorage.getItem('langType') || 'ZH';
    var coin = base.getUrlParam("coin") || 'BTC'; // 币种
    //币种
    var config = {
        start: 1,
        limit: 10,
        tradeType: 0,
        coin: coin.toUpperCase()
    };
    // 货币下拉
    var payTypeMoneyList = [];
    let payTypeList = [];
    let platTagList = [];
    let tradeType = 'buy';

    init();

    function init() {
      $('title').text(base.getText('出售比特币'));
        base.showLoadingSpin();
      $.when(
        getCoinList(),
        setHtml(),
        getPayTypeList(),
        getplatTagList(),
        getPayTypeMoneyList(),
        addListener(),
      ).then(() => {
        getPageAdvertise(config);
        $('.buy_sell .buy').removeClass('on').siblings().addClass('on');
        var tipHtml=`<p class="tip">${base.getText('来自未经验证用户的挂单的使用风险由您自己承担。请阅读我们的')}<span class="goHref" data-href="../public/help.html">“${base.getText('如何提取（出售）比特币指南')}”</span>，${base.getText('了解有关如何保持安全的提示')}。</p>`;
        $("#content").before(tipHtml);
      });
    }

  // 支付方式
  function getPayTypeList() {
    return TradeCtr.getPayTypeList({ status: 1, tradeType: 0 }).then((res) => {
      base.hideLoadingSpin();
      res.map((item) => {
        payTypeList.push({
          key: item.code,
          value: item.name,
          adsCount: item.adsCount
        });
      });
      setHtml();
      let payTypeHtml = '';
      payTypeList.map((item, index) => {
        payTypeHtml += buildPayTypeHtml(item, index);
      });
      $('.left-item-group').html(payTypeHtml);
    }, base.hideLoadingSpin);
  }
    // 标签列表
    function getplatTagList() {
      return TradeCtr.getTagsList({ status: 1 }).then((res) => {
        base.hideLoadingSpin();
        res.map((item) => {
          platTagList[item.id] = item.name;
        });
      }, base.hideLoadingSpin);
    }
    // 货币列表
    function getPayTypeMoneyList() {
      return TradeCtr.getPayCoinList().then((res) => {
        base.hideLoadingSpin();
        res.map((item) => {
          payTypeMoneyList.push({
            key: item.simpleName,
            value: item.name
          });
        });
        setHtml();
      }, base.hideLoadingSpin);
    }

    function setHtml() {
        base.getDealLeftText();
        $('.head-nav-wrap .sell').addClass('active');
        $('.en_buyer').text(base.getText('买家'));
        $('.en_pay').text(base.getText('支付方式'));
        $('.en_min_max').text(base.getText('最低-最高金额'));
        // $('.en_xe').text(base.getText('限额'));
        $('.en_price').text(base.getText('每个比特币的价格'));
        $('.show-search').text(base.getText('全部货币，全部付款方式'));
        $('.searchType-wrap .en_sgg').text(base.getText('搜广告'));
        $('.searchType-wrap .user').text(base.getText('搜用户'));
        $('.advertisement-wrap .hb').text(base.getText('货币'));
        $('.advertisement-wrap .fkfs').text(base.getText('付款方式'));
        $('#buyAmount').attr('placeholder', base.getText('请输入您出售的金额'));
        $('#buyEth').attr('placeholder', base.getText('请输入您出售的数量'));
        $('#buyBtn').html(base.getText('立即出售'));
        $('.advertise-index-left .gmbtb').html(`<i class="icon-check"></i>${base.getText('购买比特币')}`);
        $('.advertise-index-left .csbtb').html(`<i class="icon-check"></i>${base.getText('出售比特币')}`);
        $('.advertise-index-left .amount').text(base.getText('输入数额'));
        $('.advertise-index-left #payTypeMoney').attr('placeholder', '输入数额');
        $('.advertise-index-left .nickname').attr('placeholder', '请输入完整用户名');
        $('#searchBtn .search-txt').text(base.getText('搜索'));
        $('#bestSearchBtn .search-txt').text(base.getText('请给我最好的'));
        $('.kfjg').text(base.getText('开放出价'));
        $('.csrhbf').text(base.getText('您可以出售任何部分'));
        $('.zwgg').text(base.getText('暂无广告'));

        if(langType === 'EN'){
            $('.search-wrap .searchType-wrap').css('width', '200px');
            $('.search-wrap .search-con').css('width', '562px');
        }
        var payTypeMoneyHtml = `<option value="">${base.getText('请选择')}</option>`;
        payTypeMoneyList.map(item => {
            payTypeMoneyHtml += `<option value="${item.key}">${item.value}</option>`
        });

        var payTypeHtml = `<option value="">${base.getText('请选择')}</option>`;
        payTypeList.map(item => {
          payTypeHtml += `<option value="${item.key}">${item.value}</option>`
        });
        $('.advertisement-wrap .payTypeMoney').html(payTypeMoneyHtml);
        $('.advertisement-wrap .payType').html(payTypeHtml);
        // GeneralCtr.getDictList({ "parentKey": "pay_type" }).then(data => {});
    }

    //根据config配置设置 币种列表
    function getCoinList() {
        var coinList = base.getCoinArray();
        var listHtml = '';
        coinList.map(item => {
            listHtml += `<li class="${item.coin.toLowerCase()}" data-coin="${item.coin}">${item.coin}</li>`;
        });
        $("#coin-top ul").html(listHtml);
        if (coin) {
            $("#coin-top ul li." + coin.toLowerCase()).addClass("on");
        } else {
            $("#coin-top ul li:nth-of-type(1)").addClass("on");
            config.coin = coinList[0].coin.toUpperCase();
        }
    }

    // 初始化交易记录分页器
    function initPagination(data) {
        $("#pagination .pagination").pagination({
            pageCount: data.totalPage,
            showData: config.limit,
            jump: true,
            coping: true,
            prevContent: '<img src="/static/images/arrow---left.png" />',
            nextContent: '<img src="/static/images/arrow---right.png" />',
            keepShowPN: true,
            totalData: data.totalCount,
            jumpIptCls: 'pagination-ipt',
            jumpBtnCls: 'pagination-btn',
            jumpBtn: base.getText('确定'),
            isHide: true,
            callback: function(_this) {
                if (_this.getCurrent() != config.start) {
                    base.showLoadingSpin();
                    config.start = _this.getCurrent();
                    getPageAdvertise(config);
                }
            }
        });
    }

    //分页查询广告
    function getPageAdvertise(config) {
      return TradeCtr.getPageAdvertise(config, true).then((data) => {
            var lists = data.list;
            if (data.list.length) {
                var html = "";
                console.log(lists)
                if($('#bestSearchBtn').attr('data-type') == 'bestSearch'){
                    base.gohref('../trade/sell-detail.html?code='+lists[0].code);
                }
                lists.forEach((item, i) => {
                    html += buildHtml(item);
                });
                $("#content").html(html);
                $(".trade-list-wrap .no-data").addClass("hidden")


                $("#content .operation .goHref").off("click").click(function() {
                    if (!base.isLogin()) {
                        base.goLogin();
                        return false;
                    } else {
                        var thishref = $(this).attr("data-href");
                        base.gohref(thishref)
                    }
                })

                $("#content .photoWrap").off("click").click(function() {
                    if (!base.isLogin()) {
                        base.goLogin();
                        return false;
                    } else {
                        var thishref = $(this).attr("data-href");
                        base.gohref(thishref)
                    }
                })
            } else {
                config.start == 1 && $("#content").empty()
                config.start == 1 && $(".trade-list-wrap .no-data").removeClass("hidden")
            }
            config.start == 1 && initPagination(data);
            base.hideLoadingSpin();
        }, base.hideLoadingSpin)
    }

    // 构建左侧支付方式list的dom结构
    function buildPayTypeHtml(item) {
      return ` <div class="left-item ${item.key}" data-value=${item.key}>
                  <div class="nav-item goHref sell-eth gm">
                      <span class="nav-item-type">${item.value}</span>
                      <span class="num">${item.adsCount}</span>
                  </div>
              </div>`
    }
    function buildHtml(item) {
        // 登录状态
        var loginStatus = '';
        var time = base.calculateDays(item.user.lastLogin, new Date())
        if (time <= 10) {
            loginStatus = 'green'
        } else if (time <= 30) {
            loginStatus = 'yellow'
        } else {
            loginStatus = 'gray'
        }
        var operationHtml = '';

        if (item.userId == base.getUserId()) {
            operationHtml = `<div class="am-button am-button-ghost goHref" data-href="../trade/advertise.html?code=${item.code}&coin=${item.tradeCoin}">${base.getText('编辑', langType)}</div>`;
        } else {
            operationHtml = `<div class="am-button am-button-ghost goHref" data-href="../trade/sell-detail.html?code=${item.code}&coin=${item.tradeCoin}">${base.getText('出售', langType)}</div>`;
        }
        let hpCount = 0;
        if (item.userStatistics.beiPingJiaCount != 0) {
            hpCount = base.getPercentum(item.userStatistics.beiHaoPingCount, item.userStatistics.beiPingJiaCount);
        }

        let payTypeHtml = ``;
        if(item.payType) {
          payTypeList.map((k) => {
            if(item.payType === k.key) {
              payTypeHtml = `<i>${k.value ? k.value : ''}</i>`;
            }
          })
        }
        let paySecondHtml = ``;
        if(item.platTag) {
          item.platTag.split('||').map((item) => {
            paySecondHtml += `${platTagList[item] ? `<span>${platTagList[item]}</span>` : ''}`;
          });
        }
        let customHTML = ``;
        if(item.customTag){
            item.customTag.split('||').map((item) => {
                customHTML += `<span>${item}</span>`;
            });
        }
        let country = '/static/images/China.png';
        let countryHtml = ``;
        if(item.pic != undefined){
            countryHtml = `<i class="icon country" style="background-image: url('${country}')"></i>`;
        }
        let interval = base.fun(Date.parse(item.user.lastLogin), new Date());

        return `<tr>
					<td class="nickname" style="padding-left: 20px;">
                        <p class="pfirst goHref" data-href="../user/user-detail.html?userId=${item.user.userId}&tradeType=0">
                            ${countryHtml}
                            <span class="dot ${loginStatus}"></span>
                            <span class="name">${item.user.nickname ? item.user.nickname : '-'}</span>
                            <span class="num">+${item.userStatistics.beiHaoPingCount}</span>
                        </p>
                        <p class="n-dist goHref" data-href="../user/user-detail.html?userId=${item.user.userId}&tradeType=0">
                            <samp><i>${interval}${base.getText('前查看过')}</i></samp>
                        </p>
                    </td>
                    <td class="payType">
                        <p class="payType_pfirst">
                            ${payTypeHtml}
                        </p>
                        <p class="payType_psecond">
                            ${paySecondHtml} ${customHTML}
                        </p>
                    </td>
                    <td class="limit">${item.minTrade}-${item.maxTrade} ${item.tradeCurrency}</td>
                    <td class="price">${item.truePrice.toFixed(2)} ${item.tradeCurrency}</td>
                    <td class="operation">
                        ${operationHtml}
                    </td>
				</tr>`
    }

    //用户昵称查询广告
    function getListAdvertiseNickname(nickName) {
        return TradeCtr.getListAdvertiseNickname(nickName, true).then((data) => {
            var lists = data;
            if (lists.length) {
                var html = "";
                lists.forEach((item, i) => {
                    if (item.tradeType == '0') {
                        html += buildHtml(item);
                    }
                });
                $("#content").append(html);
                $(".trade-list-wrap .no-data").addClass("hidden")

                $("#content .operation .goHref").off("click").click(function() {
                    if (!base.isLogin()) {
                        base.goLogin();
                        return false;
                    } else {
                        var thishref = $(this).attr("data-href");
                        base.gohref(thishref)
                    }
                })
                $("#content .photoWrap").off("click").click(function() {
                    if (!base.isLogin()) {
                        base.goLogin();
                        return false;
                    } else {
                        var thishref = $(this).attr("data-href");
                        base.gohref(thishref)
                    }
                })
            } else {
                $("#content").empty()
                $(".trade-list-wrap .no-data").removeClass("hidden")
            }
            base.hideLoadingSpin();
        }, base.hideLoadingSpin)

    }

    function addListener() {
        $("#searchTypeWrap .select-ul li").click(function() {
            var _this = $(this);
            var _thisType = $(this).attr("data-type")

            if ($("#searchTypeWrap .show-wrap").attr("data-type") != _thisType) {
                $("#searchTypeWrap .show-wrap").attr("data-type", _thisType);
                $("#searchTypeWrap .show-wrap samp").text(_this.text());
                $("#searchConWrap ." + _thisType).removeClass("hidden").siblings().addClass("hidden")
            }
        });

        $("#searchBtn,#bestSearchBtn").click(function() {
            if($(this).children('span').text() === base.getText('请给我最好的')){
                $('#bestSearchBtn').attr('data-type','bestSearch');
            }
            if ($("#searchConWrap .payTypeAmount").val()) {
              config.price = $("#searchConWrap .payTypeAmount").val();
            } else {
              delete config.price;
            }
          if ($("#searchConWrap .payType").val()) {
            config.payType = $("#searchConWrap .payType").val();
            $(`#left-wrap .${config.payType}`).addClass('pay-active').parents().siblings().children().removeClass('pay-active');
          } else {
            $(`#left-wrap .left-item`).removeClass('pay-active');
            delete config.payType
          }
            if ($("#searchConWrap .payTypeMoney").val()) {
              config.tradeCurrency = $("#searchConWrap .payTypeMoney").val();
            } else {
              delete config.tradeCurrency
            }
            // config.price = $('#payTypeMoney').val() * 1000;
            config.start = 1;
            config.tradeType = tradeType === 'buy' ? '0' : '1';
            base.showLoadingSpin();
    
            getPageAdvertise(config);
        });
    // 点击所以筛选数据
    $('#left-wrap').on('click','.en_cwai',function () {
        getPageAdvertise(config);
        base.showLoadingSpin();
    });
      // 点击付款方式筛选数据
     $('.left-item-group').on('click', '.left-item', (function(ev) {
        let payType = $(this).attr('data-value');
        $('#searchConWrap .payType').val(payType);
        let payConfig = {
          start: 1,
          limit: 10,
          tradeType: 0,
          payType,
          coin: coin.toUpperCase()
        };
        
        base.showLoadingSpin();
        getPageAdvertise(payConfig);
      }));

        //币种点击
        $("#coin-top ul li").click(function() {
            base.gohref("../trade/sell-list.html?coin=" + $(this).attr("data-coin").toUpperCase() + "&mod=cs")
        })

        $('.show-search').click(() => {
            let reg = /none/g;
            if (reg.test($('.search-wrap').attr('class'))) {
                $('.search-wrap').removeClass('none');
            } else {
                $('.search-wrap').addClass('none');
            }
        });

      // 切换购买比特币/出售比特币

      $('.buy_sell div').on('click', (e) => {
        let target = e.target;
        if($(target).hasClass('buy')) {
          base.gohref("../index.html");
        }
      })

        $('.buy_sell .buy i').on('click', (e) => {
            let target = e.target;
            if($(target).parents('div').hasClass('buy')) {
                base.gohref("../index.html");
            }
        });
        $('.buy_sell .sell i').on('click', (e) => {
            let target = e.target;
            if($(target).parents('div').hasClass('sell')) {
                base.gohref("../trade/sell-list.html");
            }
        });
    }
});