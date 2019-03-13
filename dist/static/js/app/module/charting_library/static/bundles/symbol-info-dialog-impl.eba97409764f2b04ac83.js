"use strict";

webpackJsonp([5], { 1200: function _(e, t, n) {
    "use strict";
    function o(e) {
      return t = function (t) {
        function n(e, n) {
          var o = t.call(this, e, n) || this;return o._getWrappedComponent = function (e) {
            o._instance = e;
          }, o;
        }return i.__extends(n, t), n.prototype.componentDidMount = function () {
          this._instance.componentWillEnter && this.context.lifecycleProvider.registerWillEnterCb(this._instance.componentWillEnter.bind(this._instance)), this._instance.componentDidEnter && this.context.lifecycleProvider.registerDidEnterCb(this._instance.componentDidEnter.bind(this._instance)), this._instance.componentWillLeave && this.context.lifecycleProvider.registerWillLeaveCb(this._instance.componentWillLeave.bind(this._instance)), this._instance.componentDidLeave && this.context.lifecycleProvider.registerDidLeaveCb(this._instance.componentDidLeave.bind(this._instance));
        }, n.prototype.render = function () {
          return r.createElement(e, i.__assign({}, this.props, { ref: this._getWrappedComponent }), this.props.children);
        }, n;
      }(r.PureComponent), t.displayName = "Lifecycle Consumer", t.contextTypes = { lifecycleProvider: s.object }, t;var t;
    }var i, r, s, a;Object.defineProperty(t, "__esModule", { value: !0 }), i = n(0), r = n(2), s = n(27), a = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }return i.__extends(t, e), t;
    }(r.PureComponent), t.LifecycleConsumer = a, t.makeTransitionGroupLifecycleConsumer = o;
  }, 1202: function _(e, t, n) {
    "use strict";
    function o(e) {
      var t,
          n = e.rounded,
          o = void 0 === n || n,
          a = e.shadowed,
          u = void 0 === a || a,
          l = e.fullscreen,
          c = void 0 !== l && l,
          d = e.className,
          p = void 0 === d ? "" : d,
          h = s(r.dialog, (t = {}, t[p] = !!p, t[r.rounded] = o, t[r.shadowed] = u, t[r.fullscreen] = c, t[r.animated] = r.animated, t)),
          f = { bottom: e.bottom, left: e.left, maxWidth: e.width, right: e.right, top: e.top, zIndex: e.zIndex };return i.createElement("div", { className: h, ref: e.reference, style: f, onMouseDown: e.onMouseDown, onMouseUp: e.onMouseUp, onClick: e.onClick, onKeyDown: e.onKeyDown, tabIndex: -1 }, e.children);
    }var i, r, s;Object.defineProperty(t, "__esModule", { value: !0 }), i = n(2), r = n(1203), s = n(14), t.Dialog = o;
  }, 1203: function _(e, t) {
    e.exports = { dialog: "dialog-37P3XYj--", rounded: "rounded-2hsCfk1q-", shadowed: "shadowed-1iGQR9Xl-", fullscreen: "fullscreen-1I0OIOcc-" };
  }, 1204: function _(e, t, n) {
    "use strict";
    function o(e) {
      return t = function (t) {
        function n() {
          return null !== t && t.apply(this, arguments) || this;
        }return r.__extends(n, t), n.prototype.componentWillEnter = function (e) {
          this.props.beforeOpen ? this.props.beforeOpen(e) : e();
        }, n.prototype.componentDidEnter = function () {
          this.props.afterOpen && this.props.afterOpen();
        }, n.prototype.componentWillLeave = function (e) {
          this.props.beforeClose ? this.props.beforeClose(e) : e();
        }, n.prototype.componentDidLeave = function () {
          this.props.afterClose && this.props.afterClose();
        }, n.prototype.render = function () {
          return s.createElement(e, r.__assign({}, this.props));
        }, n;
      }(s.PureComponent), t.displayName = "OverlapLifecycle(" + (e.displayName || "Component") + ")", t;var t;
    }function i(e) {
      var t,
          n = l.makeTransitionGroupLifecycleProvider(c.makeTransitionGroupLifecycleConsumer(o(e)));return t = function (e) {
        function t(t) {
          var n = e.call(this, t) || this;return n._onZIndexUpdate = function () {
            n.props.isOpened && ("parent" === n.props.root ? n.forceUpdate() : n._renderWindow(n.props));
          }, n._uuid = d.guid(), n._zIndexUpdateEvent = u.EVENTS.ZindexUpdate + ":" + n._uuid, n;
        }return r.__extends(t, e), t.prototype.componentDidMount = function () {
          this._subscribe();
        }, t.prototype.componentWillUnmount = function () {
          this._unsubscribe(), u.OverlapManager.removeWindow(this._uuid);
        }, t.prototype.componentWillReceiveProps = function (e) {
          "parent" !== this.props.root && this._renderWindow(e);
        }, t.prototype.render = function () {
          return "parent" === this.props.root ? s.createElement(a.TransitionGroup, { component: "div" }, this._createContent(this.props)) : null;
        }, t.prototype._renderWindow = function (e) {
          u.OverlapManager.renderWindow(this._uuid, this._createContent(e));
        }, t.prototype._createContent = function (e) {
          return e.isOpened ? (u.OverlapManager.registerWindow(this._uuid), s.createElement(n, r.__assign({}, e, { key: this._uuid, zIndex: u.OverlapManager.getZindex(this._uuid) }), e.children)) : (u.OverlapManager.unregisterWindow(this._uuid), null);
        }, t.prototype._subscribe = function () {
          u.OverlapManager.getStream().on(this._zIndexUpdateEvent, this._onZIndexUpdate);
        }, t.prototype._unsubscribe = function () {
          u.OverlapManager.getStream().off(this._zIndexUpdateEvent, this._onZIndexUpdate);
        }, t;
      }(s.PureComponent), t.displayName = "Overlapable(" + (e.displayName || "Component") + ")", t;
    }var r, s, a, u, l, c, d;Object.defineProperty(t, "__esModule", { value: !0 }), r = n(0), s = n(2), a = n(239), u = n(1205), l = n(1206), c = n(1200), d = n(61), t.makeOverlapable = i;
  }, 1205: function _(e, t, n) {
    "use strict";
    function o() {
      d = document.createElement("div"), document.body.appendChild(d), r();
    }function i(e, t) {
      p.getItems().forEach(function (n) {
        n !== t && f.emitEvent(e + ":" + n);
      });
    }function r(e) {
      a.render(s.createElement(u.TransitionGroup, { component: "div" }, Array.from(m.values())), d, e);
    }var s, a, u, l, c, d, p, h, f, m;Object.defineProperty(t, "__esModule", { value: !0 }), s = n(2), a = n(39), u = n(239), l = n(91), c = function () {
      function e() {
        this._storage = [];
      }return e.prototype.add = function (e) {
        this._storage.push(e);
      }, e.prototype.remove = function (e) {
        this._storage = this._storage.filter(function (t) {
          return e !== t;
        });
      }, e.prototype.getIndex = function (e) {
        return this._storage.findIndex(function (t) {
          return e === t;
        });
      }, e.prototype.toTop = function (e) {
        this.remove(e), this.add(e);
      }, e.prototype.has = function (e) {
        return this._storage.includes(e);
      }, e.prototype.getItems = function () {
        return this._storage;
      }, e;
    }(), t.EVENTS = { ZindexUpdate: "ZindexUpdate" }, p = new c(), h = 150, f = new l(), m = new Map(), function (e) {
      function n(e) {
        p.has(e) || (p.add(e), i(t.EVENTS.ZindexUpdate, e));
      }function o(e) {
        p.remove(e), m.delete(e);
      }function s(e) {
        return p.getIndex(e) + h;
      }function a(e, t, n) {
        m.set(e, t), r(n);
      }function u(e, t) {
        o(e), r(t);
      }function l() {
        return f;
      }e.registerWindow = n, e.unregisterWindow = o, e.getZindex = s, e.renderWindow = a, e.removeWindow = u, e.getStream = l;
    }(t.OverlapManager || (t.OverlapManager = {})), o();
  }, 1206: function _(e, t, n) {
    "use strict";
    function o(e) {
      return t = function (t) {
        function n(e) {
          var n = t.call(this, e) || this;return n._registerWillEnterCb = function (e) {
            n._willEnter.push(e);
          }, n._registerDidEnterCb = function (e) {
            n._didEnter.push(e);
          }, n._registerWillLeaveCb = function (e) {
            n._willLeave.push(e);
          }, n._registerDidLeaveCb = function (e) {
            n._didLeave.push(e);
          }, n._willEnter = [], n._didEnter = [], n._willLeave = [], n._didLeave = [], n;
        }return i.__extends(n, t), n.prototype.getChildContext = function () {
          return { lifecycleProvider: { registerWillEnterCb: this._registerWillEnterCb, registerDidEnterCb: this._registerDidEnterCb, registerWillLeaveCb: this._registerWillLeaveCb, registerDidLeaveCb: this._registerDidLeaveCb } };
        }, n.prototype.componentWillEnter = function (e) {
          var t = this._willEnter.map(function (e) {
            return new Promise(function (t) {
              e(t);
            });
          });Promise.all(t).then(e);
        }, n.prototype.componentDidEnter = function () {
          this._didEnter.forEach(function (e) {
            e();
          });
        }, n.prototype.componentWillLeave = function (e) {
          var t = this._willLeave.map(function (e) {
            return new Promise(function (t) {
              e(t);
            });
          });Promise.all(t).then(e);
        }, n.prototype.componentDidLeave = function () {
          this._didLeave.forEach(function (e) {
            e();
          });
        }, n.prototype.render = function () {
          return r.createElement(e, i.__assign({}, this.props), this.props.children);
        }, n;
      }(r.PureComponent), t.displayName = "Lifecycle Provider", t.childContextTypes = { lifecycleProvider: s.object }, t;var t;
    }var i, r, s;Object.defineProperty(t, "__esModule", { value: !0 }), i = n(0), r = n(2), s = n(27), t.makeTransitionGroupLifecycleProvider = o;
  }, 1207: function _(e, t, n) {
    "use strict";
    var o, i, r, s;Object.defineProperty(t, "__esModule", { value: !0 }), o = n(1208), t.Header = o.Header, i = n(1210), t.Footer = i.Footer, r = n(1212), t.Body = r.Body, s = n(1214), t.Message = s.Message;
  }, 1208: function _(e, t, n) {
    "use strict";
    function o(e) {
      return i.createElement("div", { className: r.header, "data-dragg-area": !0, ref: e.reference }, e.children, i.createElement(a.Icon, { className: r.close, icon: s, onClick: e.onClose }));
    }var i, r, s, a;Object.defineProperty(t, "__esModule", { value: !0 }), i = n(2), r = n(1209), s = n(169), a = n(59), t.Header = o;
  }, 1209: function _(e, t) {
    e.exports = { header: "header-dpl-vtN_-", close: "close-3kPn4OTV-" };
  }, 1210: function _(e, t, n) {
    "use strict";
    function o(e) {
      return i.createElement("div", { className: r.footer, ref: e.reference }, e.children);
    }var i, r;Object.defineProperty(t, "__esModule", { value: !0 }), i = n(2), r = n(1211), t.Footer = o;
  }, 1211: function _(e, t) {
    e.exports = { footer: "footer-2Zoji8zg-" };
  }, 1212: function _(e, t, n) {
    "use strict";
    function o(e) {
      return i.createElement("div", { className: r.body, ref: e.reference }, e.children);
    }var i, r;Object.defineProperty(t, "__esModule", { value: !0 }), i = n(2), r = n(1213), t.Body = o;
  }, 1213: function _(e, t) {
    e.exports = { body: "body-2N-vuwQW-" };
  }, 1214: function _(e, t, n) {
    "use strict";
    function o(e) {
      var t, n;return e.text ? t = i.createElement("span", null, e.text) : e.html && (t = i.createElement("span", { dangerouslySetInnerHTML: { __html: e.html } })), n = r.message, e.isError && (n += " " + r.error), i.createElement(s.CSSTransitionGroup, { transitionName: "message", transitionEnterTimeout: u.dur, transitionLeaveTimeout: u.dur }, t ? i.createElement("div", { className: n, key: "0" }, i.createElement(a.OutsideEvent, { mouseDown: !0, touchStart: !0, handler: e.onClickOutside }, t)) : null);
    }var i, r, s, a, u;Object.defineProperty(t, "__esModule", { value: !0 }), i = n(2), r = n(1215), s = n(239), a = n(374), u = n(31), t.Message = o;
  }, 1215: function _(e, t) {
    e.exports = { message: "message-2o-rtQm0-", error: "error-2EW0C6z--" };
  }, 1220: function _(e, t, n) {
    "use strict";
    var o, i, r, s, a, u, l, c, d, p, h;Object.defineProperty(t, "__esModule", { value: !0 }), o = n(0), i = n(2), r = n(1202), s = n(1204), a = n(1200), u = n(374), l = n(1221), c = n(1222), d = n(1223), p = n(14), h = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;return t._setDialog = function (e) {
          e && (t._dialog = e);
        }, t;
      }return o.__extends(t, e), t.prototype.render = function () {
        return i.createElement(u.OutsideEvent, { mouseDown: !0, touchStart: !0, handler: this.props.onClickOutside }, i.createElement(r.Dialog, o.__assign({}, this.props, { reference: this._setDialog, className: p(l.dialog, this.props.className) }), this.props.children));
      }, t.prototype.componentDidMount = function () {
        if (this._dialog) {
          var e = this._dialog.querySelector("[data-dragg-area]");e && (this._drag = new c.DragHandler(this._dialog, e)), this._resize = new d.ResizeHandler(this._dialog);
        }
      }, t.prototype.componentWillEnter = function (e) {
        this._resize && this._resize.position(), e();
      }, t.prototype.componentWillUnmount = function () {
        this._drag && this._drag.destroy(), this._resize && this._resize.destroy();
      }, t;
    }(i.PureComponent), t.PopupDialog = s.makeOverlapable(a.makeTransitionGroupLifecycleConsumer(h));
  }, 1221: function _(e, t) {
    e.exports = { dialog: "dialog-aQQq411q-", dragging: "dragging-3fV74VcN-" };
  }, 1222: function _(e, t, n) {
    "use strict";
    function o(e, t, n) {
      return e + t > n && (e = n - t), e < 0 && (e = 0), e;
    }function i(e) {
      return { x: e.pageX, y: e.pageY };
    }function r(e) {
      return { x: e.touches[0].pageX, y: e.touches[0].pageY };
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        var n = this;this._drag = null, this._onMouseDragStart = function (e) {
          e.preventDefault(), document.addEventListener("mousemove", n._onMouseDragMove), n._dragStart(i(e));
        }, this._onTouchDragStart = function (e) {
          document.addEventListener("touchmove", n._onTouchDragMove), n._dragStart(r(e));
        }, this._onMouseDragEnd = function (e) {
          e.preventDefault(), document.removeEventListener("mousemove", n._onMouseDragMove), n._onDragStop();
        }, this._onTouchDragEnd = function (e) {
          document.removeEventListener("touchmove", n._onTouchDragMove), n._onDragStop();
        }, this._onMouseDragMove = function (e) {
          n._dragMove(i(e));
        }, this._onTouchDragMove = function (e) {
          e.preventDefault(), n._dragMove(r(e));
        }, this._onDragStop = function () {
          n._drag = null, n._header.classList.remove("dragging");
        }, this._dialog = e, this._header = t, this._header.addEventListener("mousedown", this._onMouseDragStart), document.addEventListener("mouseup", this._onMouseDragEnd), this._header.addEventListener("touchstart", this._onTouchDragStart), this._header.addEventListener("touchend", this._onTouchDragEnd), document.addEventListener("mouseleave", this._onMouseDragEnd);
      }return e.prototype.destroy = function () {
        this._header.removeEventListener("mousedown", this._onMouseDragStart), document.removeEventListener("mouseup", this._onMouseDragEnd), this._header.removeEventListener("touchstart", this._onTouchDragStart), this._header.removeEventListener("touchend", this._onTouchDragEnd), document.removeEventListener("mouseleave", this._onMouseDragEnd);
      }, e.prototype._dragStart = function (e) {
        var t = this._dialog.getBoundingClientRect();this._drag = { startX: e.x, startY: e.y, dialogX: t.left, dialogY: t.top }, this._dialog.style.left = t.left + "px", this._dialog.style.top = t.top + "px", this._header.classList.add("dragging");
      }, e.prototype._dragMove = function (e) {
        var t, n;this._drag && (t = e.x - this._drag.startX, n = e.y - this._drag.startY, this._moveDialog(this._drag.dialogX + t, this._drag.dialogY + n));
      }, e.prototype._moveDialog = function (e, t) {
        var n = this._dialog.getBoundingClientRect();this._dialog.style.left = o(e, n.width, window.innerWidth) + "px", this._dialog.style.top = o(t, n.height, window.innerHeight) + "px";
      }, e;
    }();t.DragHandler = s;
  }, 1223: function _(e, t, n) {
    "use strict";
    function o(e, t, n) {
      return e + t > n && (e = n - t), e < 0 && (e = 0), e;
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
      function e(e) {
        this._onResizeThrottled = requestAnimationFrame.bind(null, this._onResize.bind(this)), this._dialog = e, this._initialHeight = e.style.height, window.addEventListener("resize", this._onResizeThrottled);
      }return e.prototype.position = function () {
        var e,
            t = this._dialog.getBoundingClientRect(),
            n = window.innerWidth / 2 - t.width / 2;this._dialog.style.left = n + "px", e = window.innerHeight / 2 - t.height / 2, this._dialog.style.top = e + "px";
      }, e.prototype.destroy = function () {
        window.removeEventListener("resize", this._onResizeThrottled);
      }, e.prototype._onResize = function () {
        var e,
            t = this._dialog.getBoundingClientRect(),
            n = o(t.left, t.width, window.innerWidth);n !== t.left && (this._dialog.style.left = n + "px"), e = o(t.top, t.height, window.innerHeight), e !== t.top && (this._dialog.style.top = e + "px"), this._dialog.style.height = window.innerHeight < t.height ? window.innerHeight + "px" : this._initialHeight;
      }, e;
    }();t.ResizeHandler = i;
  }, 1283: function _(e, t, n) {
    "use strict";
    function o(e) {
      var t = e.value || e.defValue || "-";return e.setHtml ? r.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : t;
    }var i, r, s, a, u, l, c, d;Object.defineProperty(t, "__esModule", { value: !0 }), i = n(0), n(12), r = n(2), s = n(1220), a = n(1207), u = n(1284), l = n(14), c = n(381), d = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }return i.__extends(t, e), t.prototype.render = function () {
        return r.createElement(s.PopupDialog, { className: u.popupDialog, isOpened: this.props.isOpened, onClickOutside: this.props.onClose }, r.createElement(a.Header, { onClose: this.props.onClose }, window.t("Symbol Info")), r.createElement(a.Body, null, r.createElement(c.KeyboardDocumentListener, { keyCode: 27, handler: this.props.onClose }), r.createElement("div", { className: u.content }, this._renderFields())));
      }, t.prototype._renderFields = function () {
        return this.props.fields ? this.props.fields.map(function (e) {
          return r.createElement("div", { key: e.propName, className: u.row }, r.createElement("div", { className: l(u.column, u.columnTitle) }, r.createElement("span", { className: u.title }, e.title)), r.createElement("div", { className: l(u.column, u.columnValue) }, r.createElement("span", { className: u.value }, o(e))));
        }) : [];
      }, t;
    }(r.PureComponent), t.SymbolInfoDialog = d;
  }, 1284: function _(e, t) {
    e.exports = { popupDialog: "popupDialog-2VK9ttEi-", content: "content-BtJ6qB4V-", row: "row-3iYHykfo-", column: "column-2FlX4ngi-", title: "title-22tx3Djt-", value: "value-2xvVEs1a-", columnTitle: "columnTitle-3ypCTDKd-", columnValue: "columnValue-Xr4j0qyI-" };
  }, 414: function _(e, t, n) {
    "use strict";
    (function (e, o) {
      function i(e, t) {
        var n, i, u, c, d;r({ isOpened: !1 }), null == e && (e = b.symbol.value()), null != e && (e += "", n = t && t.symbolInfo, i = [{ title: $.t("Symbol Name"), propName: o.enabled("charting_library_base") ? "name" : "pro_name" }, { title: $.t("Symbol Description"), propName: "description" }, { title: $.t("Symbol Type"), propName: "type", formatter: function formatter(e) {
            return "bitcoin" === e ? "crypto" : e;
          } }, { title: $.t("Point Value"), propName: "pointvalue" }, { title: $.t("Exchange"), propName: "exchange" }, { title: $.t("Listed Exchange"), propName: "listed_exchange" }, { title: $.t("Currency"), propName: "currency_code", formatter: function formatter(e) {
            return e || "USD";
          }, defValue: "USD" }, { title: $.t("Price Scale"), propName: "pricescale" }, { title: $.t("Min Move"), propName: "minmov" }, { title: $.t("Min Move 2"), propName: "minmove2" }, { title: $.t("Sector"), propName: "sector" }, { title: $.t("Industry"), propName: "industry" }, { title: $.t("Timezone"), propName: "timezone", formatter: s, optional: !0 }, { title: $.t("Session"), propName: "session", formatter: a, optional: !0, setHtml: !0 }], u = 0, n && (u = l(n, i)), u < i.length && window.quoteSessionMultiplexerInstance && (c = "symbolinfodialog." + x.guid(), quoteSessionMultiplexerInstance.full.subscribe(c, e, function (t, n) {
          l(n.values, i), quoteSessionMultiplexerInstance.full.unsubscribe(c, e), r(d);
        })), d = { isOpened: !0, onClose: function onClose() {
            r({ isOpened: !1 }), E = null;
          }, fields: i }, r(d));
      }function r(e) {
        E || (E = document.createElement("div"), document.body.appendChild(E)), C.render(M.createElement(L, e), E);
      }function s(e) {
        var t,
            n = D;for (t = 0; t < n.length; t++) {
          if (n[t].id === e) return n[t].title;
        }return e;
      }function a(e) {
        return y(new O(e).entries()).join("<br>");
      }function u(e) {
        return e || "-";
      }function l(e, t) {
        var n,
            o,
            i,
            r,
            s = 0;for (n = 0; n < t.length; n++) {
          (o = t[n].propName) in e && (i = e[o], "minmove2" === o && e.minmove2 > 0 && !e.fractional && e.pricescale ? (t[n].value = new w(e.pricescale / i).format(i / e.pricescale), t[n].title = $.t("Pip Size")) : t[n].value = (t[n].formatter || u)(i), s++);
        }return r = e.type && "economic" === e.type || e.listed_exchange && ["QUANDL", "BSE_EOD", "NSE_EOD", "LSE_EOD"].indexOf(e.listed_exchange) >= 0, r && c(t), s;
      }function c(e) {
        for (var t = 0; t < e.length; t++) {
          e[t].optional && (e.splice(t, 1), t--);
        }
      }function d(e) {
        var t, n;return e > N.minutesPerDay && (e -= N.minutesPerDay), t = e % 60, n = (e - t) / 60, S(n, 2) + ":" + S(t, 2);
      }function p(e) {
        return e.reduce(function (e, t) {
          var n = d(t.alignedStart()) + "-" + d(t.alignedStart() + t.length()),
              o = t.dayOfWeek();return e.hasOwnProperty(n) ? e[n].push(o) : e[n] = [o], e;
        }, {});
      }function h(e) {
        return e.match(W)[0];
      }function f(e, t) {
        var n = h(e),
            o = h(t);return T[n] > T[o];
      }function m(t, n, o) {
        return void 0 === o ? e.weekdaysMin(n - 1) + " " + t : e.weekdaysMin(n - 1) + "-" + e.weekdaysMin(o - 1) + " " + t;
      }function _(e) {
        return 1 === e ? 7 : e - 1;
      }function g(e, t, n) {
        return n ? m(e, _(t), t) : m(e, t);
      }function v(e, t) {
        if (t) {
          var n = e[0];e.unshift(_(n));
        }
      }function y(e) {
        var t = p(e);return Object.keys(t).reduce(function (e, n) {
          var o,
              i = t[n].sort(),
              r = n.split("-"),
              s = N.get_minutes_from_hhmm(r[0]),
              a = N.get_minutes_from_hhmm(r[1]),
              u = s >= a;return 1 === i.length ? (v(i, u), e.push(m(n, i[0]))) : (o = [], i.forEach(function (t, r) {
            var s = i[r + 1];s && t === s - 1 ? o.push(t) : t !== o[o.length - 1] + 1 ? e.push(g(n, t, u)) : (o.push(t), v(o, u), e.push(m(n, o[0], o[o.length - 1])), o.splice(0, o.length));
          })), e;
        }, []).sort(f);
      }var E,
          b = n(76),
          D = n(171).availableTimezones,
          w = n(28).PriceFormatter,
          x = n(61),
          M = n(2),
          C = n(39),
          L = n(1283).SymbolInfoDialog,
          O = n(411).ExchangeSession,
          N = n(50),
          S = n(28).numberToStringWithLeadingZero,
          P = [2, 3, 4, 5, 6, 7, 1].map(function (t) {
        return e.weekdaysMin(t - 1);
      }),
          W = RegExp(P.join("|")),
          T = P.reduce(function (e, t, n) {
        return e[t] = n + 1, e;
      }, {});t.showSymbolInfoDialog = i;
    }).call(t, n(38), n(5));
  } });