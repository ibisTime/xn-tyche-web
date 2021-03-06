define([
    'app/controller/base',
    'pagination',
    'app/interface/AccountCtr',
    'app/interface/GeneralCtr',
    'app/interface/UserCtr',
    'app/controller/Top',
    'app/controller/foo'
], function (base, pagination, AccountCtr, GeneralCtr, UserCtr, Top, Foo) {
    let langType = localStorage.getItem('langType') || 'ZH';
    var config={};
    var accountNumber ='';
    var bizTypeList = {
        '0': [],
        '1': ['charge'],
        '2': ['withdraw'],
        '3': ['ccorder_buy', 'bborder_buy', 'accept_buy'],
        '4': ['ccorder_sell', 'bborder_sell', 'accept_sell'],
        '5': ['ccorder_fee', 'bborder_fee', 'withdraw_fee'],
        '6': ['game_in'],
        '7': ['game_out'],
        '8': [
            'ccorder_frozen',
            'ccorder_unfrozen_revoke',
            'ccorder_unfrozen_trade',
            'bborder_frozen',
            'bborder_unfrozen_revoke',
            'bborder_unfrozen_trade',
            'withdraw_frozen',
            'withdraw_unfrozen',
            'accept_frozen',
            'accept_unfrozen'
        ]
    },
    bizTypeValueList = {};

    if (!base.isLogin()) {
        base.goLogin()
    } else {
        init();
    }

    function init() {
        $('.wamx-en_sj').text(base.getText('日期', langType));
        $('.wamx-en_yue').text(base.getText('余额', langType));
        $('.wamx-en_lx').text(base.getText('金额', langType));
        $('.wamx-en_sm').text(base.getText('描述', langType));
          if(langType == 'EN'){
            $('title').text('order details- blockchain technology application experimental platform');
          }else {
            $('title').text('订单明细-区块链技术应用实验平台');
          }
        base.showLoadingSpin();
        $.when(
            GeneralCtr.getDictList({
                "parentKey": "jour_biz_type_user"
            }),
        ).then((data1, data2) => {
            data1.forEach(function (item) {
                bizTypeValueList[item.dkey] = item.dvalue
            });
            setTimeout(function(){
                accountNumber = localStorage.getItem('accountNumber');
                config = {
                    start: 1,
                    limit: 10,
                    type:0,
                    accountNumber: accountNumber
                };
                getPageFlow(config)
            }, 1000);

        }, base.hideLoadingSpin);

        addListener();
    }

    // 初始化交易记录分页器
    function initPaginationFlow(data) {
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
            jumpBtn: base.getText('确定', langType),
            isHide: true,
            callback: function (_this) {
                if (_this.getCurrent() != config.start) {
                    base.showLoadingSpin();
                    config.start = _this.getCurrent();
                    getPageFlow(config);
                }
            }
        });
    }

    //分页查询我的账户流水
    function getPageFlow(params) {
        return AccountCtr.getPageFlow(params, true).then((data) => {
            var lists = data.list;
            if (data.list.length) {
                var html = "";
                lists.forEach((item, i) => {
                    html += buildHtmlFlow(item);
                });
                $("#tradeRecord-list").html(html)
                $(".tradeRecord-list-wrap .no-data").addClass("hidden");
            } else {
                config.start == 1 && $("#tradeRecord-list").empty()
                config.start == 1 && $(".tradeRecord-list-wrap .no-data").removeClass("hidden");
            }

            config.start == 1 && initPaginationFlow(data);
            base.hideLoadingSpin();
        }, base.hideLoadingSpin)
    }
    function buildHtmlFlow(item) {
        return `<tr class="list-item">
					<td>${base.formateDatetime(item.createDatetime)}</td>
					<td>${item.bizNote}</td>
					<td>${base.formatMoney(item.transAmountString,'',item.currency)} ${item.currency}</td>
					<td>${base.formatMoney(item.postAmountString,'',item.currency)} ${item.currency}</td>
				</tr>`
    }

    // 根据语言替换说明中文
    function getBizNote(item) {
        // 币币交易买入卖出
        if (item.bizType === 'bborder_frozen') {
            return base.getText(item.bizNote);
        // 充值
        } else if (item.bizType === 'charge') {
            if(item.bizNote.indexOf('充币-来自地址') > -1) {
                return item.bizNote.replace('充币-来自地址', base.getText('充币-来自地址'));
            } else if(item.bizNote.indexOf('充币-来自交易') > -1) {
                return item.bizNote.replace('充币-来自交易', base.getText('充币-来自交易'));
            } else if(item.bizNote.indexOf('充币-交易id') > -1) {
                return item.bizNote.replace('充币-交易id', base.getText('充币-交易id'));
            } else if(item.bizNote.indexOf('充币-来自地址') > -1) {
                return item.bizNote.replace('充币-外部地址', base.getText('充币-外部地址'));
            } else {
                return bizTypeValueList[item.bizType];
            }
        } else {
            return bizTypeValueList[item.bizType];
        }
    }

    function addListener() {
        //交易记录 类型点击
        $(".tradeRecord-top ul li").click(function () {
            // if(!$(this).hasClass("on")){
            var index = $(this).index();
            $(this).addClass("on").siblings("li").removeClass("on");

            base.showLoadingSpin();
            if (bizTypeList[index].length > 0) {
                config.bizTypeList = bizTypeList[index];
            } else {
                delete config.bizTypeList;
            }
            config.start = 1;
            if (index == '8') {
                config.type = '1';
            } else {
                delete config.type;
            }
            // getPageFlow(config);
            // }
        });
      //按条件查找已结束订单
      $('.tradeRecord-search-btn').click(function () {
        var data;
        var type =$('.hisorder-wrap #payType option:selected').val();
        var createDatetimeStart =$('#createDatetimeStart input').val();
        var createDatetimeEnd =$('#createDatetimeEnd input').val();
        if( createDatetimeStart == '' || createDatetimeEnd == ''){
          base.showMsg(base.getText('请选择完整'));
          return;
        }else {
          createDatetimeStart = base.formateDatetime(createDatetimeStart);
          createDatetimeEnd = base.formateDatetime(createDatetimeEnd);
        }
        config = {
          start: 1,
          limit: 10,
          type:0,
          accountNumber: accountNumber,
          dateStart: createDatetimeStart,
          dateEnd: createDatetimeEnd
        };
        base.showLoadingSpin();
        getPageFlow(config);
      });
      //条件重置
      $('.tradeRecord-reset-btn').click(function () {
        $('#createDatetimeStart input').val('');
        $('#createDatetimeEnd input').val('');
        config = {
          start: 1,
          limit: 10,
          type:0,
          accountNumber: accountNumber
        };
        base.showLoadingSpin();
        getPageFlow(config);
      })
    }
});