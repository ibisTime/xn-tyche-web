"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define('js/app/module/echarts/echarts', ["exports"], e) : e(t.echarts = {});
}(undefined, function (t) {
  "use strict";
  function e(t) {
    var e = {},
        n = {},
        i = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = /micromessenger/i.test(t);return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), { browser: n, os: e, node: !1, canvasSupported: !!document.createElement("canvas").getContext, svgSupported: "undefined" != typeof SVGRect, touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge, pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11), domSupported: "undefined" != typeof document };
  }function n(t, e) {
    "createCanvas" === t && (Zd = null), qd[t] = e;
  }function i(t) {
    if (null == t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return t;var e = t,
        n = Hd.call(t);if ("[object Array]" === n) {
      if (!z(t)) {
        e = [];for (var r = 0, a = t.length; a > r; r++) {
          e[r] = i(t[r]);
        }
      }
    } else if (Nd[n]) {
      if (!z(t)) {
        var o = t.constructor;if (t.constructor.from) e = o.from(t);else {
          e = new o(t.length);for (var r = 0, a = t.length; a > r; r++) {
            e[r] = i(t[r]);
          }
        }
      }
    } else if (!Fd[n] && !z(t) && !C(t)) {
      e = {};for (var s in t) {
        t.hasOwnProperty(s) && (e[s] = i(t[s]));
      }
    }return e;
  }function r(t, e, n) {
    if (!S(e) || !S(t)) return n ? i(e) : t;for (var a in e) {
      if (e.hasOwnProperty(a)) {
        var o = t[a],
            s = e[a];!S(s) || !S(o) || x(s) || x(o) || C(s) || C(o) || M(s) || M(o) || z(s) || z(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n);
      }
    }return t;
  }function a(t, e) {
    for (var n = t[0], i = 1, a = t.length; a > i; i++) {
      n = r(n, t[i], e);
    }return n;
  }function o(t, e) {
    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }return t;
  }function s(t, e, n) {
    for (var i in e) {
      e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
    }return t;
  }function l() {
    return Zd || (Zd = Ud().getContext("2d")), Zd;
  }function u(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);for (var n = 0, i = t.length; i > n; n++) {
        if (t[n] === e) return n;
      }
    }return -1;
  }function h(t, e) {
    function n() {}var i = t.prototype;n.prototype = e.prototype, t.prototype = new n();for (var r in i) {
      t.prototype[r] = i[r];
    }t.prototype.constructor = t, t.superClass = e;
  }function c(t, e, n) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n);
  }function d(t) {
    return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0;
  }function f(t, e, n) {
    if (t && e) if (t.forEach && t.forEach === Wd) t.forEach(e, n);else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) {
      e.call(n, t[i], i, t);
    } else for (var a in t) {
      t.hasOwnProperty(a) && e.call(n, t[a], a, t);
    }
  }function p(t, e, n) {
    if (t && e) {
      if (t.map && t.map === jd) return t.map(e, n);for (var i = [], r = 0, a = t.length; a > r; r++) {
        i.push(e.call(n, t[r], r, t));
      }return i;
    }
  }function g(t, e, n, i) {
    if (t && e) {
      if (t.reduce && t.reduce === Yd) return t.reduce(e, n, i);for (var r = 0, a = t.length; a > r; r++) {
        n = e.call(i, n, t[r], r, t);
      }return n;
    }
  }function v(t, e, n) {
    if (t && e) {
      if (t.filter && t.filter === Gd) return t.filter(e, n);for (var i = [], r = 0, a = t.length; a > r; r++) {
        e.call(n, t[r], r, t) && i.push(t[r]);
      }return i;
    }
  }function m(t, e, n) {
    if (t && e) for (var i = 0, r = t.length; r > i; i++) {
      if (e.call(n, t[i], i, t)) return t[i];
    }
  }function y(t, e) {
    var n = Xd.call(arguments, 2);return function () {
      return t.apply(e, n.concat(Xd.call(arguments)));
    };
  }function _(t) {
    var e = Xd.call(arguments, 1);return function () {
      return t.apply(this, e.concat(Xd.call(arguments)));
    };
  }function x(t) {
    return "[object Array]" === Hd.call(t);
  }function w(t) {
    return "function" == typeof t;
  }function b(t) {
    return "[object String]" === Hd.call(t);
  }function S(t) {
    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return "function" === e || !!t && "object" == e;
  }function M(t) {
    return !!Fd[Hd.call(t)];
  }function T(t) {
    return !!Nd[Hd.call(t)];
  }function C(t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.nodeType && "object" == _typeof(t.ownerDocument);
  }function I(t) {
    return t !== t;
  }function k() {
    for (var t = 0, e = arguments.length; e > t; t++) {
      if (null != arguments[t]) return arguments[t];
    }
  }function D(t, e) {
    return null != t ? t : e;
  }function A(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }function P() {
    return Function.call.apply(Xd, arguments);
  }function O(t) {
    if ("number" == typeof t) return [t, t, t, t];var e = t.length;return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
  }function L(t, e) {
    if (!t) throw new Error(e);
  }function E(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }function B(t) {
    t[$d] = !0;
  }function z(t) {
    return t[$d];
  }function R(t) {
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t);
    }var n = x(t);this.data = {};var i = this;t instanceof R ? t.each(e) : t && f(t, e);
  }function F(t) {
    return new R(t);
  }function N(t, e) {
    for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) {
      n[i] = t[i];
    }var r = t.length;for (i = 0; i < e.length; i++) {
      n[i + r] = e[i];
    }return n;
  }function H() {}function V(t, e) {
    var n = new Qd(2);return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;
  }function W(t, e) {
    return t[0] = e[0], t[1] = e[1], t;
  }function G(t) {
    var e = new Qd(2);return e[0] = t[0], e[1] = t[1], e;
  }function X(t, e, n) {
    return t[0] = e, t[1] = n, t;
  }function j(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
  }function Y(t, e, n, i) {
    return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
  }function q(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
  }function U(t) {
    return Math.sqrt(Z(t));
  }function Z(t) {
    return t[0] * t[0] + t[1] * t[1];
  }function $(t, e, n) {
    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
  }function K(t, e, n) {
    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
  }function Q(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }function J(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t;
  }function te(t, e) {
    var n = U(e);return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
  }function ee(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }function ne(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }function ie(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t;
  }function re(t, e, n, i) {
    return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;
  }function ae(t, e, n) {
    var i = e[0],
        r = e[1];return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
  }function oe(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
  }function se(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
  }function le() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
  }function ue(t, e) {
    return { target: t, topTarget: e && e.topTarget };
  }function he(t, e) {
    var n = t._$eventProcessor;return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;
  }function ce(t) {
    return t.getBoundingClientRect ? t.getBoundingClientRect() : { left: 0, top: 0 };
  }function de(t, e, n, i) {
    return n = n || {}, i || !Rd.canvasSupported ? fe(t, e, n) : Rd.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : fe(t, e, n), n;
  }function fe(t, e, n) {
    var i = ce(t);n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top;
  }function pe(t, e, n) {
    if (e = e || window.event, null != e.zrX) return e;var i = e.type,
        r = i && i.indexOf("touch") >= 0;if (r) {
      var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];a && de(t, a, e, n);
    } else de(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;var o = e.button;return null == e.which && void 0 !== o && lf.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
  }function ge(t, e, n) {
    sf ? t.addEventListener(e, n) : t.attachEvent("on" + e, n);
  }function ve(t, e, n) {
    sf ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n);
  }function me(t, e, n) {
    return { type: t, event: n, target: e.target, topTarget: e.topTarget, cancelBubble: !1, offsetX: n.zrX, offsetY: n.zrY, gestureEvent: n.gestureEvent, pinchX: n.pinchX, pinchY: n.pinchY, pinchScale: n.pinchScale, wheelDelta: n.zrDelta, zrByTouch: n.zrByTouch, which: n.which, stop: ye };
  }function ye() {
    uf(this.event);
  }function _e() {}function xe(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, n)) return !1;r.silent && (i = !0), r = r.parent;
      }return i ? hf : !0;
    }return !1;
  }function we() {
    var t = new ff(6);return be(t), t;
  }function be(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
  }function Se(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
  }function Me(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
        r = e[1] * n[0] + e[3] * n[1],
        a = e[0] * n[2] + e[2] * n[3],
        o = e[1] * n[2] + e[3] * n[3],
        s = e[0] * n[4] + e[2] * n[5] + e[4],
        l = e[1] * n[4] + e[3] * n[5] + e[5];return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
  }function Te(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t;
  }function Ce(t, e, n) {
    var i = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        u = Math.sin(n),
        h = Math.cos(n);return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t;
  }function Ie(t, e, n) {
    var i = n[0],
        r = n[1];return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t;
  }function ke(t, e) {
    var n = e[0],
        i = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = n * o - a * i;return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null;
  }function De(t) {
    var e = we();return Se(e, t), e;
  }function Ae(t) {
    return t > vf || -vf > t;
  }function Pe(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
  }function Oe(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;
  }function Le(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t;
  }function Ee(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t;
  }function Be(t) {
    return Oe(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
  }function ze(t) {
    return Ee(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
  }function Re(t, e, n) {
    return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t;
  }function Fe(t, e, n) {
    return t + (e - t) * n;
  }function Ne(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
  }function He(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
  }function Ve(t, e) {
    Af && He(Af, e), Af = Df.put(t, Af || e.slice());
  }function We(t, e) {
    if (t) {
      e = e || [];var n = Df.get(t);if (n) return He(e, n);t += "";var i = t.replace(/ /g, "").toLowerCase();if (i in kf) return He(e, kf[i]), Ve(t, e), e;if ("#" !== i.charAt(0)) {
        var r = i.indexOf("("),
            a = i.indexOf(")");if (-1 !== r && a + 1 === i.length) {
          var o = i.substr(0, r),
              s = i.substr(r + 1, a - (r + 1)).split(","),
              l = 1;switch (o) {case "rgba":
              if (4 !== s.length) return void Ne(e, 0, 0, 0, 1);l = ze(s.pop());case "rgb":
              return 3 !== s.length ? void Ne(e, 0, 0, 0, 1) : (Ne(e, Be(s[0]), Be(s[1]), Be(s[2]), l), Ve(t, e), e);case "hsla":
              return 4 !== s.length ? void Ne(e, 0, 0, 0, 1) : (s[3] = ze(s[3]), Ge(s, e), Ve(t, e), e);case "hsl":
              return 3 !== s.length ? void Ne(e, 0, 0, 0, 1) : (Ge(s, e), Ve(t, e), e);default:
              return;}
        }Ne(e, 0, 0, 0, 1);
      } else {
        if (4 === i.length) {
          var u = parseInt(i.substr(1), 16);return u >= 0 && 4095 >= u ? (Ne(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Ve(t, e), e) : void Ne(e, 0, 0, 0, 1);
        }if (7 === i.length) {
          var u = parseInt(i.substr(1), 16);return u >= 0 && 16777215 >= u ? (Ne(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Ve(t, e), e) : void Ne(e, 0, 0, 0, 1);
        }
      }
    }
  }function Ge(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        i = ze(t[1]),
        r = ze(t[2]),
        a = .5 >= r ? r * (i + 1) : r + i - r * i,
        o = 2 * r - a;return e = e || [], Ne(e, Oe(255 * Re(o, a, n + 1 / 3)), Oe(255 * Re(o, a, n)), Oe(255 * Re(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;
  }function Xe(t) {
    if (t) {
      var e,
          n,
          i = t[0] / 255,
          r = t[1] / 255,
          a = t[2] / 255,
          o = Math.min(i, r, a),
          s = Math.max(i, r, a),
          l = s - o,
          u = (s + o) / 2;if (0 === l) e = 0, n = 0;else {
        n = .5 > u ? l / (s + o) : l / (2 - s - o);var h = ((s - i) / 6 + l / 2) / l,
            c = ((s - r) / 6 + l / 2) / l,
            d = ((s - a) / 6 + l / 2) / l;i === s ? e = d - c : r === s ? e = 1 / 3 + h - d : a === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1);
      }var f = [360 * e, n, u];return null != t[3] && f.push(t[3]), f;
    }
  }function je(t, e) {
    var n = We(t);if (n) {
      for (var i = 0; 3 > i; i++) {
        n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
      }return Ke(n, 4 === n.length ? "rgba" : "rgb");
    }
  }function Ye(t) {
    var e = We(t);return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
  }function qe(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      n = n || [];var i = t * (e.length - 1),
          r = Math.floor(i),
          a = Math.ceil(i),
          o = e[r],
          s = e[a],
          l = i - r;return n[0] = Oe(Fe(o[0], s[0], l)), n[1] = Oe(Fe(o[1], s[1], l)), n[2] = Oe(Fe(o[2], s[2], l)), n[3] = Ee(Fe(o[3], s[3], l)), n;
    }
  }function Ue(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      var i = t * (e.length - 1),
          r = Math.floor(i),
          a = Math.ceil(i),
          o = We(e[r]),
          s = We(e[a]),
          l = i - r,
          u = Ke([Oe(Fe(o[0], s[0], l)), Oe(Fe(o[1], s[1], l)), Oe(Fe(o[2], s[2], l)), Ee(Fe(o[3], s[3], l))], "rgba");return n ? { color: u, leftIndex: r, rightIndex: a, value: i } : u;
    }
  }function Ze(t, e, n, i) {
    return t = We(t), t ? (t = Xe(t), null != e && (t[0] = Le(e)), null != n && (t[1] = ze(n)), null != i && (t[2] = ze(i)), Ke(Ge(t), "rgba")) : void 0;
  }function $e(t, e) {
    return t = We(t), t && null != e ? (t[3] = Ee(e), Ke(t, "rgba")) : void 0;
  }function Ke(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";
    }
  }function Qe(t, e) {
    return t[e];
  }function Je(t, e, n) {
    t[e] = n;
  }function tn(t, e, n) {
    return (e - t) * n + t;
  }function en(t, e, n) {
    return n > .5 ? e : t;
  }function nn(t, e, n, i, r) {
    var a = t.length;if (1 == r) for (var o = 0; a > o; o++) {
      i[o] = tn(t[o], e[o], n);
    } else for (var s = a && t[0].length, o = 0; a > o; o++) {
      for (var l = 0; s > l; l++) {
        i[o][l] = tn(t[o][l], e[o][l], n);
      }
    }
  }function rn(t, e, n) {
    var i = t.length,
        r = e.length;if (i !== r) {
      var a = i > r;if (a) t.length = r;else for (var o = i; r > o; o++) {
        t.push(1 === n ? e[o] : Ef.call(e[o]));
      }
    }for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) {
      if (1 === n) isNaN(t[o]) && (t[o] = e[o]);else for (var l = 0; s > l; l++) {
        isNaN(t[o][l]) && (t[o][l] = e[o][l]);
      }
    }
  }function an(t, e, n) {
    if (t === e) return !0;var i = t.length;if (i !== e.length) return !1;if (1 === n) {
      for (var r = 0; i > r; r++) {
        if (t[r] !== e[r]) return !1;
      }
    } else for (var a = t[0].length, r = 0; i > r; r++) {
      for (var o = 0; a > o; o++) {
        if (t[r][o] !== e[r][o]) return !1;
      }
    }return !0;
  }function on(t, e, n, i, r, a, o, s, l) {
    var u = t.length;if (1 == l) for (var h = 0; u > h; h++) {
      s[h] = sn(t[h], e[h], n[h], i[h], r, a, o);
    } else for (var c = t[0].length, h = 0; u > h; h++) {
      for (var d = 0; c > d; d++) {
        s[h][d] = sn(t[h][d], e[h][d], n[h][d], i[h][d], r, a, o);
      }
    }
  }function sn(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }function ln(t) {
    if (d(t)) {
      var e = t.length;if (d(t[0])) {
        for (var n = [], i = 0; e > i; i++) {
          n.push(Ef.call(t[i]));
        }return n;
      }return Ef.call(t);
    }return t;
  }function un(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
  }function hn(t) {
    var e = t[t.length - 1].value;return d(e && e[0]) ? 2 : 1;
  }function cn(t, e, n, i, r, a) {
    var o = t._getter,
        s = t._setter,
        l = "spline" === e,
        u = i.length;if (u) {
      var h,
          c = i[0].value,
          f = d(c),
          p = !1,
          g = !1,
          v = f ? hn(i) : 0;i.sort(function (t, e) {
        return t.time - e.time;
      }), h = i[u - 1].time;for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; u > w; w++) {
        m.push(i[w].time / h);var b = i[w].value;if (f && an(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
          var S = We(b);S ? (b = S, p = !0) : g = !0;
        }y.push(b);
      }if (a || !x) {
        for (var M = y[u - 1], w = 0; u - 1 > w; w++) {
          f ? rn(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
        }f && rn(o(t._target, r), M, v);var T,
            C,
            I,
            k,
            D,
            A,
            P = 0,
            O = 0;if (p) var L = [0, 0, 0, 0];var E = function E(t, e) {
          var n;if (0 > e) n = 0;else if (O > e) {
            for (T = Math.min(P + 1, u - 1), n = T; n >= 0 && !(m[n] <= e); n--) {}n = Math.min(n, u - 2);
          } else {
            for (n = P; u > n && !(m[n] > e); n++) {}n = Math.min(n - 1, u - 2);
          }P = n, O = e;var i = m[n + 1] - m[n];if (0 !== i) if (C = (e - m[n]) / i, l) {
            if (k = y[n], I = y[0 === n ? n : n - 1], D = y[n > u - 2 ? u - 1 : n + 1], A = y[n > u - 3 ? u - 1 : n + 2], f) on(I, k, D, A, C, C * C, C * C * C, o(t, r), v);else {
              var a;if (p) a = on(I, k, D, A, C, C * C, C * C * C, L, 1), a = un(L);else {
                if (g) return en(k, D, C);a = sn(I, k, D, A, C, C * C, C * C * C);
              }s(t, r, a);
            }
          } else if (f) nn(y[n], y[n + 1], C, o(t, r), v);else {
            var a;if (p) nn(y[n], y[n + 1], C, L, 1), a = un(L);else {
              if (g) return en(y[n], y[n + 1], C);a = tn(y[n], y[n + 1], C);
            }s(t, r, a);
          }
        },
            B = new Pe({ target: t._target, life: h, loop: t._loop, delay: t._delay, onframe: E, ondestroy: n });return e && "spline" !== e && (B.easing = e), B;
      }
    }
  }function dn(t, e, n, i, r, a, o, s) {
    function l() {
      h--, h || a && a();
    }b(i) ? (a = r, r = i, i = 0) : w(r) ? (a = r, r = "linear", i = 0) : w(i) ? (a = i, i = 0) : w(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), fn(t, "", t, e, n, i, s);var u = t.animators.slice(),
        h = u.length;h || a && a();for (var c = 0; c < u.length; c++) {
      u[c].done(l).start(r, o);
    }
  }function fn(t, e, n, i, r, a, o) {
    var s = {},
        l = 0;for (var u in i) {
      i.hasOwnProperty(u) && (null != n[u] ? S(i[u]) && !d(i[u]) ? fn(t, e ? e + "." + u : u, n[u], i[u], r, a, o) : (o ? (s[u] = n[u], pn(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || o || pn(t, e, u, i[u]));
    }l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0);
  }function pn(t, e, n, i) {
    if (e) {
      var r = {};r[e] = {}, r[e][n] = i, t.attr(r);
    } else t.attr(n, i);
  }function gn(t, e, n, i) {
    0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
  }function vn(t) {
    for (var e = 0; t >= qf;) {
      e |= 1 & t, t >>= 1;
    }return t + e;
  }function mn(t, e, n, i) {
    var r = e + 1;if (r === n) return 1;if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0;) {
        r++;
      }yn(t, e, r);
    } else for (; n > r && i(t[r], t[r - 1]) >= 0;) {
      r++;
    }return r - e;
  }function yn(t, e, n) {
    for (n--; n > e;) {
      var i = t[e];t[e++] = t[n], t[n--] = i;
    }
  }function _n(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var a, o = t[i], s = e, l = i; l > s;) {
        a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
      }var u = i - s;switch (u) {case 3:
          t[s + 3] = t[s + 2];case 2:
          t[s + 2] = t[s + 1];case 1:
          t[s + 1] = t[s];break;default:
          for (; u > 0;) {
            t[s + u] = t[s + u - 1], u--;
          }}t[s] = o;
    }
  }function xn(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;if (a(t, e[n + r]) > 0) {
      for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s), o += r, l += r;
    } else {
      for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s);var u = o;o = r - l, l = r - u;
    }for (o++; l > o;) {
      var h = o + (l - o >>> 1);a(t, e[n + h]) > 0 ? o = h + 1 : l = h;
    }return l;
  }function wn(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;if (a(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s);var u = o;o = r - l, l = r - u;
    } else {
      for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s), o += r, l += r;
    }for (o++; l > o;) {
      var h = o + (l - o >>> 1);a(t, e[n + h]) < 0 ? l = h : o = h + 1;
    }return l;
  }function bn(t, e) {
    function n(t, e) {
      l[c] = t, u[c] = e, c += 1;
    }function i() {
      for (; c > 1;) {
        var t = c - 2;if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;else if (u[t] > u[t + 1]) break;a(t);
      }
    }function r() {
      for (; c > 1;) {
        var t = c - 2;t > 0 && u[t - 1] < u[t + 1] && t--, a(t);
      }
    }function a(n) {
      var i = l[n],
          r = u[n],
          a = l[n + 1],
          h = u[n + 1];u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;var d = wn(t[a], t, i, r, 0, e);i += d, r -= d, 0 !== r && (h = xn(t[i + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(i, r, a, h) : s(i, r, a, h)));
    }function o(n, i, r, a) {
      var o = 0;for (o = 0; i > o; o++) {
        d[o] = t[n + o];
      }var s = 0,
          l = r,
          u = n;if (t[u++] = t[l++], 0 !== --a) {
        if (1 === i) {
          for (o = 0; a > o; o++) {
            t[u + o] = t[l + o];
          }return void (t[u + a] = d[s]);
        }for (var c, f, p, g = h;;) {
          c = 0, f = 0, p = !1;do {
            if (e(t[l], d[s]) < 0) {
              if (t[u++] = t[l++], f++, c = 0, 0 === --a) {
                p = !0;break;
              }
            } else if (t[u++] = d[s++], c++, f = 0, 1 === --i) {
              p = !0;break;
            }
          } while (g > (c | f));if (p) break;do {
            if (c = wn(t[l], d, s, i, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) {
                t[u + o] = d[s + o];
              }if (u += c, s += c, i -= c, 1 >= i) {
                p = !0;break;
              }
            }if (t[u++] = t[l++], 0 === --a) {
              p = !0;break;
            }if (f = xn(d[s], t, l, a, 0, e), 0 !== f) {
              for (o = 0; f > o; o++) {
                t[u + o] = t[l + o];
              }if (u += f, l += f, a -= f, 0 === a) {
                p = !0;break;
              }
            }if (t[u++] = d[s++], 1 === --i) {
              p = !0;break;
            }g--;
          } while (c >= Uf || f >= Uf);if (p) break;0 > g && (g = 0), g += 2;
        }if (h = g, 1 > h && (h = 1), 1 === i) {
          for (o = 0; a > o; o++) {
            t[u + o] = t[l + o];
          }t[u + a] = d[s];
        } else {
          if (0 === i) throw new Error();for (o = 0; i > o; o++) {
            t[u + o] = d[s + o];
          }
        }
      } else for (o = 0; i > o; o++) {
        t[u + o] = d[s + o];
      }
    }function s(n, i, r, a) {
      var o = 0;for (o = 0; a > o; o++) {
        d[o] = t[r + o];
      }var s = n + i - 1,
          l = a - 1,
          u = r + a - 1,
          c = 0,
          f = 0;if (t[u--] = t[s--], 0 !== --i) {
        if (1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) {
            t[f + o] = t[c + o];
          }return void (t[u] = d[l]);
        }for (var p = h;;) {
          var g = 0,
              v = 0,
              m = !1;do {
            if (e(d[l], t[s]) < 0) {
              if (t[u--] = t[s--], g++, v = 0, 0 === --i) {
                m = !0;break;
              }
            } else if (t[u--] = d[l--], v++, g = 0, 1 === --a) {
              m = !0;break;
            }
          } while (p > (g | v));if (m) break;do {
            if (g = i - wn(d[l], t, n, i, i - 1, e), 0 !== g) {
              for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) {
                t[f + o] = t[c + o];
              }if (0 === i) {
                m = !0;break;
              }
            }if (t[u--] = d[l--], 1 === --a) {
              m = !0;break;
            }if (v = a - xn(t[s], d, 0, a, a - 1, e), 0 !== v) {
              for (u -= v, l -= v, a -= v, f = u + 1, c = l + 1, o = 0; v > o; o++) {
                t[f + o] = d[c + o];
              }if (1 >= a) {
                m = !0;break;
              }
            }if (t[u--] = t[s--], 0 === --i) {
              m = !0;break;
            }p--;
          } while (g >= Uf || v >= Uf);if (m) break;0 > p && (p = 0), p += 2;
        }if (h = p, 1 > h && (h = 1), 1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) {
            t[f + o] = t[c + o];
          }t[u] = d[l];
        } else {
          if (0 === a) throw new Error();for (c = u - (a - 1), o = 0; a > o; o++) {
            t[c + o] = d[o];
          }
        }
      } else for (c = u - (a - 1), o = 0; a > o; o++) {
        t[c + o] = d[o];
      }
    }var l,
        u,
        h = Uf,
        c = 0,
        d = [];l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n;
  }function Sn(t, e, n, i) {
    n || (n = 0), i || (i = t.length);var r = i - n;if (!(2 > r)) {
      var a = 0;if (qf > r) return a = mn(t, n, i, e), void _n(t, n, i, n + a, e);var o = new bn(t, e),
          s = vn(r);do {
        if (a = mn(t, n, i, e), s > a) {
          var l = r;l > s && (l = s), _n(t, n, n + l, n + a, e), a = l;
        }o.pushRun(n, a), o.mergeRuns(), r -= a, n += a;
      } while (0 !== r);o.forceMergeRuns();
    }
  }function Mn(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
  }function Tn(t, e, n) {
    var i = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        a = null == e.y ? 0 : e.y,
        o = null == e.y2 ? 0 : e.y2;e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;var s = t.createLinearGradient(i, a, r, o);return s;
  }function Cn(t, e, n) {
    var i = n.width,
        r = n.height,
        a = Math.min(i, r),
        o = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);var u = t.createRadialGradient(o, s, 0, o, s, l);return u;
  }function In() {
    return !1;
  }function kn(t, e, n) {
    var i = Ud(),
        r = e.getWidth(),
        a = e.getHeight(),
        o = i.style;return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i;
  }function Dn(t) {
    if ("string" == typeof t) {
      var e = op.get(t);return e && e.image;
    }return t;
  }function An(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;var a = op.get(t),
            o = { hostEl: n, cb: i, cbPayload: r };return a ? (e = a.image, !On(e) && a.pending.push(o)) : (!e && (e = new Image()), e.onload = e.onerror = Pn, op.put(t, e.__cachedImgObj = { image: e, pending: [o] }), e.src = e.__zrImageSrc = t), e;
      }return t;
    }return e;
  }function Pn() {
    var t = this.__cachedImgObj;this.onload = this.onerror = this.__cachedImgObj = null;for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
          i = n.cb;i && i(this, n.cbPayload), n.hostEl.dirty();
    }t.pending.length = 0;
  }function On(t) {
    return t && t.width && t.height;
  }function Ln(t, e) {
    e = e || cp;var n = t + ":" + e;if (sp[n]) return sp[n];for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) {
      r = Math.max(jn(i[a], e).width, r);
    }return lp > up && (lp = 0, sp = {}), lp++, sp[n] = r, r;
  }function En(t, e, n, i, r, a, o) {
    return a ? zn(t, e, n, i, r, a, o) : Bn(t, e, n, i, r, o);
  }function Bn(t, e, n, i, r, a) {
    var o = Yn(t, e, r, a),
        s = Ln(t, e);r && (s += r[1] + r[3]);var l = o.outerHeight,
        u = Rn(0, s, n),
        h = Fn(0, l, i),
        c = new gn(u, h, s, l);return c.lineHeight = o.lineHeight, c;
  }function zn(t, e, n, i, r, a, o) {
    var s = qn(t, { rich: a, truncate: o, font: e, textAlign: n, textPadding: r }),
        l = s.outerWidth,
        u = s.outerHeight,
        h = Rn(0, l, n),
        c = Fn(0, u, i);return new gn(h, c, l, u);
  }function Rn(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
  }function Fn(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
  }function Nn(t, e, n) {
    var i = e.x,
        r = e.y,
        a = e.height,
        o = e.width,
        s = a / 2,
        l = "left",
        u = "top";switch (t) {case "left":
        i -= n, r += s, l = "right", u = "middle";break;case "right":
        i += n + o, r += s, u = "middle";break;case "top":
        i += o / 2, r -= n, l = "center", u = "bottom";break;case "bottom":
        i += o / 2, r += a + n, l = "center";break;case "inside":
        i += o / 2, r += s, l = "center", u = "middle";break;case "insideLeft":
        i += n, r += s, u = "middle";break;case "insideRight":
        i += o - n, r += s, l = "right", u = "middle";break;case "insideTop":
        i += o / 2, r += n, l = "center";break;case "insideBottom":
        i += o / 2, r += a - n, l = "center", u = "bottom";break;case "insideTopLeft":
        i += n, r += n;break;case "insideTopRight":
        i += o - n, r += n, l = "right";break;case "insideBottomLeft":
        i += n, r += a - n, u = "bottom";break;case "insideBottomRight":
        i += o - n, r += a - n, l = "right", u = "bottom";}return { x: i, y: r, textAlign: l, textVerticalAlign: u };
  }function Hn(t, e, n, i, r) {
    if (!e) return "";var a = (t + "").split("\n");r = Vn(e, n, i, r);for (var o = 0, s = a.length; s > o; o++) {
      a[o] = Wn(a[o], r);
    }return a.join("\n");
  }function Vn(t, e, n, i) {
    i = o({}, i), i.font = e;var n = D(n, "...");i.maxIterations = D(i.maxIterations, 2);var r = i.minChar = D(i.minChar, 0);i.cnCharWidth = Ln("国", e);var a = i.ascCharWidth = Ln("a", e);i.placeholder = D(i.placeholder, "");for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) {
      s -= a;
    }var u = Ln(n);return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i;
  }function Wn(t, e) {
    var n = e.containerWidth,
        i = e.font,
        r = e.contentWidth;if (!n) return "";var a = Ln(t, i);if (n >= a) return t;for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;break;
      }var s = 0 === o ? Gn(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;t = t.substr(0, s), a = Ln(t, i);
    }return "" === t && (t = e.placeholder), t;
  }function Gn(t, e, n, i) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);r += s >= 0 && 127 >= s ? n : i;
    }return a;
  }function Xn(t) {
    return Ln("国", t);
  }function jn(t, e) {
    return dp.measureText(t, e);
  }function Yn(t, e, n, i) {
    null != t && (t += "");var r = Xn(e),
        a = t ? t.split("\n") : [],
        o = a.length * r,
        s = o;if (n && (s += n[0] + n[2]), t && i) {
      var l = i.outerHeight,
          u = i.outerWidth;if (null != l && s > l) t = "", a = [];else if (null != u) for (var h = Vn(u - (n ? n[1] + n[3] : 0), e, i.ellipsis, { minChar: i.minChar, placeholder: i.placeholder }), c = 0, d = a.length; d > c; c++) {
        a[c] = Wn(a[c], h);
      }
    }return { lines: a, height: o, outerHeight: s, lineHeight: r };
  }function qn(t, e) {
    var n = { lines: [], width: 0, height: 0 };if (null != t && (t += ""), !t) return n;for (var i, r = hp.lastIndex = 0; null != (i = hp.exec(t));) {
      var a = i.index;a > r && Un(n, t.substring(r, a)), Un(n, i[2], i[1]), r = hp.lastIndex;
    }r < t.length && Un(n, t.substring(r, t.length));var o = n.lines,
        s = 0,
        l = 0,
        u = [],
        h = e.textPadding,
        c = e.truncate,
        d = c && c.outerWidth,
        f = c && c.outerHeight;h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
            x = _.styleName && e.rich[_.styleName] || {},
            w = _.textPadding = x.textPadding,
            b = _.font = x.font || e.font,
            S = _.textHeight = D(x.textHeight, Xn(b));if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = A(x.textLineHeight, e.textLineHeight, S), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return { lines: [], width: 0, height: 0 };_.textWidth = Ln(_.text, b);var M = x.textWidth,
            T = null == M || "auto" === M;if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, u.push(_), M = 0;else {
          if (T) {
            M = _.textWidth;var C = x.textBackgroundColor,
                I = C && C.image;I && (I = Dn(I), On(I) && (M = Math.max(M, I.width * S / I.height)));
          }var k = w ? w[1] + w[3] : 0;M += k;var P = null != d ? d - m : null;null != P && M > P && (!T || k > P ? (_.text = "", _.textWidth = M = 0) : (_.text = Hn(_.text, P - k, b, c.ellipsis, { minChar: c.minChar }), _.textWidth = Ln(_.text, b), M = _.textWidth + k));
        }m += _.width = M, x && (v = Math.max(v, _.lineHeight));
      }g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m);
    }n.outerWidth = n.width = D(e.textWidth, l), n.outerHeight = n.height = D(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);for (var p = 0; p < u.length; p++) {
      var _ = u[p],
          O = _.percentWidth;_.width = parseInt(O, 10) / 100 * l;
    }return n;
  }function Un(t, e, n) {
    for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
          l = { styleName: n, text: s, isLineHolder: !s && !i };if (o) a.push({ tokens: [l] });else {
        var u = (a[a.length - 1] || (a[0] = { tokens: [] })).tokens,
            h = u.length;1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l);
      }
    }
  }function Zn(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");return e && E(e) || t.textFont || t.font;
  }function $n(t, e) {
    var n,
        i,
        r,
        a,
        o = e.x,
        s = e.y,
        l = e.width,
        u = e.height,
        h = e.r;0 > l && (o += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h : h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;var c;n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u), 0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);
  }function Kn(t) {
    return Qn(t), f(t.rich, Qn), t;
  }function Qn(t) {
    if (t) {
      t.font = Zn(t);var e = t.textAlign;"middle" === e && (e = "center"), t.textAlign = null == e || fp[e] ? e : "left";var n = t.textVerticalAlign || t.textBaseline;"center" === n && (n = "middle"), t.textVerticalAlign = null == n || pp[n] ? n : "top";var i = t.textPadding;i && (t.textPadding = O(t.textPadding));
    }
  }function Jn(t, e, n, i, r, a) {
    i.rich ? ei(t, e, n, i, r) : ti(t, e, n, i, r, a);
  }function ti(t, e, n, i, r, a) {
    var o = a && a.style,
        s = o && "text" === a.type,
        l = i.font || cp;s && l === (o.font || cp) || (e.font = l);var u = t.__computedFont;t.__styleFont !== l && (t.__styleFont = l, u = t.__computedFont = e.font);var h = i.textPadding,
        c = t.__textCotentBlock;(!c || t.__dirtyText) && (c = t.__textCotentBlock = Yn(n, u, h, i.truncate));var d = c.outerHeight,
        f = c.lines,
        p = c.lineHeight,
        g = li(d, i, r),
        v = g.baseX,
        m = g.baseY,
        y = g.textAlign || "left",
        _ = g.textVerticalAlign;ii(e, i, r, v, m);var x = Fn(m, d, _),
        w = v,
        b = x,
        S = ai(i);if (S || h) {
      var M = Ln(n, u),
          T = M;h && (T += h[1] + h[3]);var C = Rn(v, T, y);S && oi(t, e, i, C, x, T, d), h && (w = fi(v, y, h), b += h[0]);
    }e.textAlign = y, e.textBaseline = "middle";for (var I = 0; I < gp.length; I++) {
      var k = gp[I],
          D = k[0],
          A = k[1],
          P = i[D];s && P === o[D] || (e[A] = Kf(e, A, P || k[2]));
    }b += p / 2;var O = i.textStrokeWidth,
        L = s ? o.textStrokeWidth : null,
        E = !s || O !== L,
        B = !s || E || i.textStroke !== o.textStroke,
        z = hi(i.textStroke, O),
        R = ci(i.textFill);if (z && (E && (e.lineWidth = O), B && (e.strokeStyle = z)), R && (!s || i.textFill !== o.textFill || o.textBackgroundColor) && (e.fillStyle = R), 1 === f.length) z && e.strokeText(f[0], w, b), R && e.fillText(f[0], w, b);else for (var I = 0; I < f.length; I++) {
      z && e.strokeText(f[I], w, b), R && e.fillText(f[I], w, b), b += p;
    }
  }function ei(t, e, n, i, r) {
    var a = t.__textCotentBlock;(!a || t.__dirtyText) && (a = t.__textCotentBlock = qn(n, i)), ni(t, e, a, i, r);
  }function ni(t, e, n, i, r) {
    var a = n.width,
        o = n.outerWidth,
        s = n.outerHeight,
        l = i.textPadding,
        u = li(s, i, r),
        h = u.baseX,
        c = u.baseY,
        d = u.textAlign,
        f = u.textVerticalAlign;ii(e, i, r, h, c);var p = Rn(h, o, d),
        g = Fn(c, s, f),
        v = p,
        m = g;l && (v += l[3], m += l[0]);var y = v + a;ai(i) && oi(t, e, i, p, g, o, s);for (var _ = 0; _ < n.lines.length; _++) {
      for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, T = w.width, C = 0, I = v, k = y, D = S - 1; S > C && (x = b[C], !x.textAlign || "left" === x.textAlign);) {
        ri(t, e, x, i, M, m, I, "left"), T -= x.width, I += x.width, C++;
      }for (; D >= 0 && (x = b[D], "right" === x.textAlign);) {
        ri(t, e, x, i, M, m, k, "right"), T -= x.width, k -= x.width, D--;
      }for (I += (a - (I - v) - (y - k) - T) / 2; D >= C;) {
        x = b[C], ri(t, e, x, i, M, m, I + x.width / 2, "center"), I += x.width, C++;
      }m += M;
    }
  }function ii(t, e, n, i, r) {
    if (n && e.textRotation) {
      var a = e.textOrigin;"center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);
    }
  }function ri(t, e, n, i, r, a, o, s) {
    var l = i.rich[n.styleName] || {};l.text = n.text;var u = n.textVerticalAlign,
        h = a + r / 2;"top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && ai(l) && oi(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);var c = n.textPadding;c && (o = fi(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), ui(e, "shadowBlur", A(l.textShadowBlur, i.textShadowBlur, 0)), ui(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), ui(e, "shadowOffsetX", A(l.textShadowOffsetX, i.textShadowOffsetX, 0)), ui(e, "shadowOffsetY", A(l.textShadowOffsetY, i.textShadowOffsetY, 0)), ui(e, "textAlign", s), ui(e, "textBaseline", "middle"), ui(e, "font", n.font || cp);var d = hi(l.textStroke || i.textStroke, p),
        f = ci(l.textFill || i.textFill),
        p = D(l.textStrokeWidth, i.textStrokeWidth);d && (ui(e, "lineWidth", p), ui(e, "strokeStyle", d), e.strokeText(n.text, o, h)), f && (ui(e, "fillStyle", f), e.fillText(n.text, o, h));
  }function ai(t) {
    return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor;
  }function oi(t, e, n, i, r, a, o) {
    var s = n.textBackgroundColor,
        l = n.textBorderWidth,
        u = n.textBorderColor,
        h = b(s);if (ui(e, "shadowBlur", n.textBoxShadowBlur || 0), ui(e, "shadowColor", n.textBoxShadowColor || "transparent"), ui(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), ui(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
      e.beginPath();var c = n.textBorderRadius;c ? $n(e, { x: i, y: r, width: a, height: o, r: c }) : e.rect(i, r, a, o), e.closePath();
    }if (h) {
      if (ui(e, "fillStyle", s), null != n.fillOpacity) {
        var d = e.globalAlpha;e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d;
      } else e.fill();
    } else if (w(s)) ui(e, "fillStyle", s(n)), e.fill();else if (S(s)) {
      var f = s.image;f = An(f, null, t, si, s), f && On(f) && e.drawImage(f, i, r, a, o);
    }if (l && u) if (ui(e, "lineWidth", l), ui(e, "strokeStyle", u), null != n.strokeOpacity) {
      var d = e.globalAlpha;e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d;
    } else e.stroke();
  }function si(t, e) {
    e.image = t;
  }function li(t, e, n) {
    var i = e.x || 0,
        r = e.y || 0,
        a = e.textAlign,
        o = e.textVerticalAlign;if (n) {
      var s = e.textPosition;if (s instanceof Array) i = n.x + di(s[0], n.width), r = n.y + di(s[1], n.height);else {
        var l = Nn(s, n, e.textDistance);i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign;
      }var u = e.textOffset;u && (i += u[0], r += u[1]);
    }return { baseX: i, baseY: r, textAlign: a, textVerticalAlign: o };
  }function ui(t, e, n) {
    return t[e] = Kf(t, e, n), t[e];
  }function hi(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }function ci(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }function di(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
  }function fi(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
  }function pi(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
  }function gi(t) {
    t = t || {}, Wf.call(this, t);for (var e in t) {
      t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
    }this.style = new Jf(t.style, this), this._rect = null, this.__clipPaths = [];
  }function vi(t) {
    gi.call(this, t);
  }function mi(t) {
    return parseInt(t, 10);
  }function yi(t) {
    return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1;
  }function _i(t, e, n) {
    return bp.copy(t.getBoundingRect()), t.transform && bp.applyTransform(t.transform), Sp.width = e, Sp.height = n, !bp.intersect(Sp);
  }function xi(t, e) {
    if (t == e) return !1;if (!t || !e || t.length !== e.length) return !0;for (var n = 0; n < t.length; n++) {
      if (t[n] !== e[n]) return !0;
    }
  }function wi(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);
    }
  }function bi(t, e) {
    var n = document.createElement("div");return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n;
  }function Si(t) {
    var e = t[1][0] - t[0][0],
        n = t[1][1] - t[0][1];return Math.sqrt(e * e + n * n);
  }function Mi(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }function Ti(t) {
    return "mousewheel" === t && Rd.browser.firefox ? "DOMMouseScroll" : t;
  }function Ci(t, e, n) {
    var i = t._gestureMgr;"start" === n && i.clear();var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);if ("end" === n && i.clear(), r) {
      var a = r.type;e.gestureEvent = a, t.handler.dispatchToElement({ target: r.target }, a, r.event);
    }
  }function Ii(t) {
    t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
      t._touching = !1;
    }, 700);
  }function ki(t) {
    var e = t.pointerType;return "pen" === e || "touch" === e;
  }function Di(t) {
    function e(t, e) {
      return function () {
        return e._touching ? void 0 : t.apply(e, arguments);
      };
    }f(Ap, function (e) {
      t._handlers[e] = y(Lp[e], t);
    }), f(Op, function (e) {
      t._handlers[e] = y(Lp[e], t);
    }), f(Dp, function (n) {
      t._handlers[n] = e(Lp[n], t);
    });
  }function Ai(t) {
    function e(e, n) {
      f(e, function (e) {
        ge(t, Ti(e), n._handlers[e]);
      }, n);
    }of.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Cp(), this._handlers = {}, Di(this), Rd.pointerEventsSupported ? e(Op, this) : (Rd.touchEventsSupported && e(Ap, this), e(Dp, this));
  }function Pi(t, e) {
    var n = new Np(Bd(), t, e);return Rp[n.id] = n, n;
  }function Oi(t) {
    if (t) t.dispose();else {
      for (var e in Rp) {
        Rp.hasOwnProperty(e) && Rp[e].dispose();
      }Rp = {};
    }return this;
  }function Li(t) {
    return Rp[t];
  }function Ei(t, e) {
    zp[t] = e;
  }function Bi(t) {
    delete Rp[t];
  }function zi(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }function Ri(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};for (var i = 0, r = n.length; r > i; i++) {
        var a = n[i];!t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
      }
    }
  }function Fi(t) {
    return !Wp(t) || Gp(t) || t instanceof Date ? t : t.value;
  }function Ni(t) {
    return Wp(t) && !(t instanceof Array);
  }function Hi(t, e) {
    e = (e || []).slice();var n = p(t || [], function (t) {
      return { exist: t };
    });return Vp(e, function (t, i) {
      if (Wp(t)) {
        for (var r = 0; r < n.length; r++) {
          if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);
        }for (var r = 0; r < n.length; r++) {
          var a = n[r].exist;if (!(n[r].option || null != a.id && null != t.id || null == t.name || Gi(t) || Gi(a) || a.name !== t.name + "")) return n[r].option = t, void (e[i] = null);
        }
      }
    }), Vp(e, function (t) {
      if (Wp(t)) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e].exist;if (!n[e].option && !Gi(i) && null == t.id) {
            n[e].option = t;break;
          }
        }e >= n.length && n.push({ option: t });
      }
    }), n;
  }function Vi(t) {
    var e = F();Vp(t, function (t) {
      var n = t.exist;n && e.set(n.id, t);
    }), Vp(t, function (t) {
      var n = t.option;L(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});
    }), Vp(t, function (t, n) {
      var i = t.exist,
          r = t.option,
          a = t.keyInfo;if (Wp(r)) {
        if (a.name = null != r.name ? r.name + "" : i ? i.name : Xp + n, i) a.id = i.id;else if (null != r.id) a.id = r.id + "";else {
          var o = 0;do {
            a.id = "\x00" + a.name + "\x00" + o++;
          } while (e.get(a.id));
        }e.set(a.id, t);
      }
    });
  }function Wi(t) {
    var e = t.name;return !(!e || !e.indexOf(Xp));
  }function Gi(t) {
    return Wp(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00");
  }function Xi(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex, function (e) {
      return t.indexOfRawIndex(e);
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function (e) {
      return t.indexOfName(e);
    }) : t.indexOfName(e.name) : void 0;
  }function ji() {
    var t = "__\x00ec_inner_" + Yp++ + "_" + Math.random().toFixed(5);return function (e) {
      return e[t] || (e[t] = {});
    };
  }function Yi(t, e, n) {
    if (b(e)) {
      var i = {};i[e + "Index"] = 0, e = i;
    }var r = n && n.defaultMainType;!r || qi(e, r + "Index") || qi(e, r + "Id") || qi(e, r + "Name") || (e[r + "Index"] = 0);var a = {};return Vp(e, function (i, r) {
      var i = e[r];if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = i);var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = o[1],
          l = (o[2] || "").toLowerCase();if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {
        var h = { mainType: s };("index" !== l || "all" !== i) && (h[l] = i);var c = t.queryComponents(h);a[s + "Models"] = c, a[s + "Model"] = c[0];
      }
    }), a;
  }function qi(t, e) {
    return t && t.hasOwnProperty(e);
  }function Ui(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
  }function Zi(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }function $i(t) {
    return "auto" === t ? Rd.domSupported ? "html" : "richText" : t || "html";
  }function Ki(t) {
    var e = { main: "", sub: "" };return t && (t = t.split(qp), e.main = t[0] || "", e.sub = t[1] || ""), e;
  }function Qi(t) {
    L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
  }function Ji(t) {
    t.$constructor = t, t.extend = function (t) {
      var e = this,
          n = function n() {
        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
      };return o(n.prototype, t), n.extend = this.extend, n.superCall = er, n.superApply = nr, h(n, this), n.superClass = e, n;
    };
  }function tr(t) {
    var e = ["__\x00is_clz", Zp++, Math.random().toFixed(3)].join("_");t.prototype[e] = !0, t.isInstance = function (t) {
      return !(!t || !t[e]);
    };
  }function er(t, e) {
    var n = P(arguments, 2);return this.superClass.prototype[e].apply(t, n);
  }function nr(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }function ir(t, e) {
    function n(t) {
      var e = i[t.main];return e && e[Up] || (e = i[t.main] = {}, e[Up] = !0), e;
    }e = e || {};var i = {};if (t.registerClass = function (t, e) {
      if (e) if (Qi(e), e = Ki(e), e.sub) {
        if (e.sub !== Up) {
          var r = n(e);r[e.sub] = t;
        }
      } else i[e.main] = t;return t;
    }, t.getClass = function (t, e, n) {
      var r = i[t];if (r && r[Up] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");return r;
    }, t.getClassesByMainType = function (t) {
      t = Ki(t);var e = [],
          n = i[t.main];return n && n[Up] ? f(n, function (t, n) {
        n !== Up && e.push(t);
      }) : e.push(n), e;
    }, t.hasClass = function (t) {
      return t = Ki(t), !!i[t.main];
    }, t.getAllClassMainTypes = function () {
      var t = [];return f(i, function (e, n) {
        t.push(n);
      }), t;
    }, t.hasSubTypes = function (t) {
      t = Ki(t);var e = i[t.main];return e && e[Up];
    }, t.parseClassType = Ki, e.registerWhenExtend) {
      var r = t.extend;r && (t.extend = function (e) {
        var n = r.call(this, e);return t.registerClass(n, e.type);
      });
    }return t;
  }function rr(t) {
    return t > -ig && ig > t;
  }function ar(t) {
    return t > ig || -ig > t;
  }function or(t, e, n, i, r) {
    var a = 1 - r;return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
  }function sr(t, e, n, i, r) {
    var a = 1 - r;return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
  }function lr(t, e, n, i, r, a) {
    var o = i + 3 * (e - n) - t,
        s = 3 * (n - 2 * e + t),
        l = 3 * (e - t),
        u = t - r,
        h = s * s - 3 * o * l,
        c = s * l - 9 * o * u,
        d = l * l - 3 * s * u,
        f = 0;if (rr(h) && rr(c)) {
      if (rr(s)) a[0] = 0;else {
        var p = -l / s;p >= 0 && 1 >= p && (a[f++] = p);
      }
    } else {
      var g = c * c - 4 * h * d;if (rr(g)) {
        var v = c / h,
            p = -s / o + v,
            m = -v / 2;p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m);
      } else if (g > 0) {
        var y = ng(g),
            _ = h * s + 1.5 * o * (-c + y),
            x = h * s + 1.5 * o * (-c - y);_ = 0 > _ ? -eg(-_, og) : eg(_, og), x = 0 > x ? -eg(-x, og) : eg(x, og);var p = (-s - (_ + x)) / (3 * o);p >= 0 && 1 >= p && (a[f++] = p);
      } else {
        var w = (2 * h * s - 3 * o * c) / (2 * ng(h * h * h)),
            b = Math.acos(w) / 3,
            S = ng(h),
            M = Math.cos(b),
            p = (-s - 2 * S * M) / (3 * o),
            m = (-s + S * (M + ag * Math.sin(b))) / (3 * o),
            T = (-s + S * (M - ag * Math.sin(b))) / (3 * o);p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), T >= 0 && 1 >= T && (a[f++] = T);
      }
    }return f;
  }function ur(t, e, n, i, r) {
    var a = 6 * n - 12 * e + 6 * t,
        o = 9 * e + 3 * i - 3 * t - 9 * n,
        s = 3 * e - 3 * t,
        l = 0;if (rr(o)) {
      if (ar(a)) {
        var u = -s / a;u >= 0 && 1 >= u && (r[l++] = u);
      }
    } else {
      var h = a * a - 4 * o * s;if (rr(h)) r[0] = -a / (2 * o);else if (h > 0) {
        var c = ng(h),
            u = (-a + c) / (2 * o),
            d = (-a - c) / (2 * o);u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }return l;
  }function hr(t, e, n, i, r, a) {
    var o = (e - t) * r + t,
        s = (n - e) * r + e,
        l = (i - n) * r + n,
        u = (s - o) * r + o,
        h = (l - s) * r + s,
        c = (h - u) * r + u;a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i;
  }function cr(t, e, n, i, r, a, o, s, l, u, h) {
    var c,
        d,
        f,
        p,
        g,
        v = .005,
        m = 1 / 0;sg[0] = l, sg[1] = u;for (var y = 0; 1 > y; y += .05) {
      lg[0] = or(t, n, r, o, y), lg[1] = or(e, i, a, s, y), p = nf(sg, lg), m > p && (c = y, m = p);
    }m = 1 / 0;for (var _ = 0; 32 > _ && !(rg > v); _++) {
      d = c - v, f = c + v, lg[0] = or(t, n, r, o, d), lg[1] = or(e, i, a, s, d), p = nf(lg, sg), d >= 0 && m > p ? (c = d, m = p) : (ug[0] = or(t, n, r, o, f), ug[1] = or(e, i, a, s, f), g = nf(ug, sg), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
    }return h && (h[0] = or(t, n, r, o, c), h[1] = or(e, i, a, s, c)), ng(m);
  }function dr(t, e, n, i) {
    var r = 1 - i;return r * (r * t + 2 * i * e) + i * i * n;
  }function fr(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e));
  }function pr(t, e, n, i, r) {
    var a = t - 2 * e + n,
        o = 2 * (e - t),
        s = t - i,
        l = 0;if (rr(a)) {
      if (ar(o)) {
        var u = -s / o;u >= 0 && 1 >= u && (r[l++] = u);
      }
    } else {
      var h = o * o - 4 * a * s;if (rr(h)) {
        var u = -o / (2 * a);u >= 0 && 1 >= u && (r[l++] = u);
      } else if (h > 0) {
        var c = ng(h),
            u = (-o + c) / (2 * a),
            d = (-o - c) / (2 * a);u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }return l;
  }function gr(t, e, n) {
    var i = t + n - 2 * e;return 0 === i ? .5 : (t - e) / i;
  }function vr(t, e, n, i, r) {
    var a = (e - t) * i + t,
        o = (n - e) * i + e,
        s = (o - a) * i + a;r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n;
  }function mr(t, e, n, i, r, a, o, s, l) {
    var u,
        h = .005,
        c = 1 / 0;sg[0] = o, sg[1] = s;for (var d = 0; 1 > d; d += .05) {
      lg[0] = dr(t, n, r, d), lg[1] = dr(e, i, a, d);var f = nf(sg, lg);c > f && (u = d, c = f);
    }c = 1 / 0;for (var p = 0; 32 > p && !(rg > h); p++) {
      var g = u - h,
          v = u + h;lg[0] = dr(t, n, r, g), lg[1] = dr(e, i, a, g);var f = nf(lg, sg);if (g >= 0 && c > f) u = g, c = f;else {
        ug[0] = dr(t, n, r, v), ug[1] = dr(e, i, a, v);var m = nf(ug, sg);1 >= v && c > m ? (u = v, c = m) : h *= .5;
      }
    }return l && (l[0] = dr(t, n, r, u), l[1] = dr(e, i, a, u)), ng(c);
  }function yr(t, e, n) {
    if (0 !== t.length) {
      var i,
          r = t[0],
          a = r[0],
          o = r[0],
          s = r[1],
          l = r[1];for (i = 1; i < t.length; i++) {
        r = t[i], a = hg(a, r[0]), o = cg(o, r[0]), s = hg(s, r[1]), l = cg(l, r[1]);
      }e[0] = a, e[1] = s, n[0] = o, n[1] = l;
    }
  }function _r(t, e, n, i, r, a) {
    r[0] = hg(t, n), r[1] = hg(e, i), a[0] = cg(t, n), a[1] = cg(e, i);
  }function xr(t, e, n, i, r, a, o, s, l, u) {
    var h,
        c = ur,
        d = or,
        f = c(t, n, r, o, yg);for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {
      var p = d(t, n, r, o, yg[h]);l[0] = hg(p, l[0]), u[0] = cg(p, u[0]);
    }for (f = c(e, i, a, s, _g), h = 0; f > h; h++) {
      var g = d(e, i, a, s, _g[h]);l[1] = hg(g, l[1]), u[1] = cg(g, u[1]);
    }l[0] = hg(t, l[0]), u[0] = cg(t, u[0]), l[0] = hg(o, l[0]), u[0] = cg(o, u[0]), l[1] = hg(e, l[1]), u[1] = cg(e, u[1]), l[1] = hg(s, l[1]), u[1] = cg(s, u[1]);
  }function wr(t, e, n, i, r, a, o, s) {
    var l = gr,
        u = dr,
        h = cg(hg(l(t, n, r), 1), 0),
        c = cg(hg(l(e, i, a), 1), 0),
        d = u(t, n, r, h),
        f = u(e, i, a, c);o[0] = hg(t, r, d), o[1] = hg(e, a, f), s[0] = cg(t, r, d), s[1] = cg(e, a, f);
  }function br(t, e, n, i, r, a, o, s, l) {
    var u = oe,
        h = se,
        c = Math.abs(r - a);if (1e-4 > c % pg && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);if (gg[0] = fg(r) * n + t, gg[1] = dg(r) * i + e, vg[0] = fg(a) * n + t, vg[1] = dg(a) * i + e, u(s, gg, vg), h(l, gg, vg), r %= pg, 0 > r && (r += pg), a %= pg, 0 > a && (a += pg), r > a && !o ? a += pg : a > r && o && (r += pg), o) {
      var d = a;a = r, r = d;
    }for (var f = 0; a > f; f += Math.PI / 2) {
      f > r && (mg[0] = fg(f) * n + t, mg[1] = dg(f) * i + e, u(s, mg, s), h(l, mg, l));
    }
  }function Sr(t, e, n, i, r, a, o) {
    if (0 === r) return !1;var s = r,
        l = 0,
        u = t;if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;if (t === n) return Math.abs(a - t) <= s / 2;l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);var h = l * a - o + u,
        c = h * h / (l * l + 1);return s / 2 * s / 2 >= c;
  }function Mr(t, e, n, i, r, a, o, s, l, u, h) {
    if (0 === l) return !1;var c = l;if (h > e + c && h > i + c && h > a + c && h > s + c || e - c > h && i - c > h && a - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > o + c || t - c > u && n - c > u && r - c > u && o - c > u) return !1;var d = cr(t, e, n, i, r, a, o, s, u, h, null);return c / 2 >= d;
  }function Tr(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;var u = o;if (l > e + u && l > i + u && l > a + u || e - u > l && i - u > l && a - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;var h = mr(t, e, n, i, r, a, s, l, null);return u / 2 >= h;
  }function Cr(t) {
    return t %= Lg, 0 > t && (t += Lg), t;
  }function Ir(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;var u = o;s -= t, l -= e;var h = Math.sqrt(s * s + l * l);if (h - u > n || n > h + u) return !1;if (Math.abs(i - r) % Eg < 1e-4) return !0;if (a) {
      var c = i;i = Cr(r), r = Cr(c);
    } else i = Cr(i), r = Cr(r);i > r && (r += Eg);var d = Math.atan2(l, s);return 0 > d && (d += Eg), d >= i && r >= d || d + Eg >= i && r >= d + Eg;
  }function kr(t, e, n, i, r, a) {
    if (a > e && a > i || e > a && i > a) return 0;if (i === e) return 0;var o = e > i ? 1 : -1,
        s = (a - e) / (i - e);(1 === s || 0 === s) && (o = e > i ? .5 : -.5);var l = s * (n - t) + t;return l === r ? 1 / 0 : l > r ? o : 0;
  }function Dr(t, e) {
    return Math.abs(t - e) < Rg;
  }function Ar() {
    var t = Ng[0];Ng[0] = Ng[1], Ng[1] = t;
  }function Pr(t, e, n, i, r, a, o, s, l, u) {
    if (u > e && u > i && u > a && u > s || e > u && i > u && a > u && s > u) return 0;var h = lr(e, i, a, s, u, Fg);if (0 === h) return 0;for (var c, d, f = 0, p = -1, g = 0; h > g; g++) {
      var v = Fg[g],
          m = 0 === v || 1 === v ? .5 : 1,
          y = or(t, n, r, o, v);l > y || (0 > p && (p = ur(e, i, a, s, Ng), Ng[1] < Ng[0] && p > 1 && Ar(), c = or(e, i, a, s, Ng[0]), p > 1 && (d = or(e, i, a, s, Ng[1]))), f += 2 == p ? v < Ng[0] ? e > c ? m : -m : v < Ng[1] ? c > d ? m : -m : d > s ? m : -m : v < Ng[0] ? e > c ? m : -m : c > s ? m : -m);
    }return f;
  }function Or(t, e, n, i, r, a, o, s) {
    if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;var l = pr(e, i, a, s, Fg);if (0 === l) return 0;var u = gr(e, i, a);if (u >= 0 && 1 >= u) {
      for (var h = 0, c = dr(e, i, a, u), d = 0; l > d; d++) {
        var f = 0 === Fg[d] || 1 === Fg[d] ? .5 : 1,
            p = dr(t, n, r, Fg[d]);o > p || (h += Fg[d] < u ? e > c ? f : -f : c > a ? f : -f);
      }return h;
    }var f = 0 === Fg[0] || 1 === Fg[0] ? .5 : 1,
        p = dr(t, n, r, Fg[0]);return o > p ? 0 : e > a ? f : -f;
  }function Lr(t, e, n, i, r, a, o, s) {
    if (s -= e, s > n || -n > s) return 0;var l = Math.sqrt(n * n - s * s);Fg[0] = -l, Fg[1] = l;var u = Math.abs(i - r);if (1e-4 > u) return 0;if (1e-4 > u % zg) {
      i = 0, r = zg;var h = a ? 1 : -1;return o >= Fg[0] + t && o <= Fg[1] + t ? h : 0;
    }if (a) {
      var l = i;i = Cr(r), r = Cr(l);
    } else i = Cr(i), r = Cr(r);i > r && (r += zg);for (var c = 0, d = 0; 2 > d; d++) {
      var f = Fg[d];if (f + t > o) {
        var p = Math.atan2(s, f),
            h = a ? 1 : -1;0 > p && (p = zg + p), (p >= i && r >= p || p + zg >= i && r >= p + zg) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h);
      }
    }return c;
  }function Er(t, e, n, i, r) {
    for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
      var c = t[h++];switch (c === Bg.M && h > 1 && (n || (a += kr(o, s, l, u, i, r))), 1 == h && (o = t[h], s = t[h + 1], l = o, u = s), c) {case Bg.M:
          l = t[h++], u = t[h++], o = l, s = u;break;case Bg.L:
          if (n) {
            if (Sr(o, s, t[h], t[h + 1], e, i, r)) return !0;
          } else a += kr(o, s, t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case Bg.C:
          if (n) {
            if (Mr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0;
          } else a += Pr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case Bg.Q:
          if (n) {
            if (Tr(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0;
          } else a += Or(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case Bg.A:
          var d = t[h++],
              f = t[h++],
              p = t[h++],
              g = t[h++],
              v = t[h++],
              m = t[h++],
              y = (t[h++], 1 - t[h++]),
              _ = Math.cos(v) * p + d,
              x = Math.sin(v) * g + f;h > 1 ? a += kr(o, s, _, x, i, r) : (l = _, u = x);var w = (i - d) * g / p + d;if (n) {
            if (Ir(d, f, g, v, v + m, y, e, w, r)) return !0;
          } else a += Lr(d, f, g, v, v + m, y, w, r);o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;break;case Bg.R:
          l = o = t[h++], u = s = t[h++];var b = t[h++],
              S = t[h++],
              _ = l + b,
              x = u + S;if (n) {
            if (Sr(l, u, _, u, e, i, r) || Sr(_, u, _, x, e, i, r) || Sr(_, x, l, x, e, i, r) || Sr(l, x, l, u, e, i, r)) return !0;
          } else a += kr(_, u, _, x, i, r), a += kr(l, x, l, u, i, r);break;case Bg.Z:
          if (n) {
            if (Sr(o, s, l, u, e, i, r)) return !0;
          } else a += kr(o, s, l, u, i, r);o = l, s = u;}
    }return n || Dr(s, u) || (a += kr(o, s, l, u, i, r) || 0), 0 !== a;
  }function Br(t, e, n) {
    return Er(t, 0, !1, e, n);
  }function zr(t, e, n, i) {
    return Er(t, e, !0, n, i);
  }function Rr(t) {
    gi.call(this, t), this.path = null;
  }function Fr(t, e, n, i, r, a, o, s, l, u, h) {
    var c = l * (Kg / 180),
        d = $g(c) * (t - n) / 2 + Zg(c) * (e - i) / 2,
        f = -1 * Zg(c) * (t - n) / 2 + $g(c) * (e - i) / 2,
        p = d * d / (o * o) + f * f / (s * s);p > 1 && (o *= Ug(p), s *= Ug(p));var g = (r === a ? -1 : 1) * Ug((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
        v = g * o * f / s,
        m = g * -s * d / o,
        y = (t + n) / 2 + $g(c) * v - Zg(c) * m,
        _ = (e + i) / 2 + Zg(c) * v + $g(c) * m,
        x = tv([1, 0], [(d - v) / o, (f - m) / s]),
        w = [(d - v) / o, (f - m) / s],
        b = [(-1 * d - v) / o, (-1 * f - m) / s],
        S = tv(w, b);Jg(w, b) <= -1 && (S = Kg), Jg(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * Kg), 1 === a && 0 > S && (S += 2 * Kg), h.addData(u, y, _, o, s, x, S, c, a);
  }function Nr(t) {
    if (!t) return new Og();for (var e, n = 0, i = 0, r = n, a = i, o = new Og(), s = Og.CMD, l = t.match(ev), u = 0; u < l.length; u++) {
      for (var h, c = l[u], d = c.charAt(0), f = c.match(nv) || [], p = f.length, g = 0; p > g; g++) {
        f[g] = parseFloat(f[g]);
      }for (var v = 0; p > v;) {
        var m,
            y,
            _,
            x,
            w,
            b,
            S,
            M = n,
            T = i;switch (d) {case "l":
            n += f[v++], i += f[v++], h = s.L, o.addData(h, n, i);break;case "L":
            n = f[v++], i = f[v++], h = s.L, o.addData(h, n, i);break;case "m":
            n += f[v++], i += f[v++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "l";break;case "M":
            n = f[v++], i = f[v++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "L";break;case "h":
            n += f[v++], h = s.L, o.addData(h, n, i);break;case "H":
            n = f[v++], h = s.L, o.addData(h, n, i);break;case "v":
            i += f[v++], h = s.L, o.addData(h, n, i);break;case "V":
            i = f[v++], h = s.L, o.addData(h, n, i);break;case "C":
            h = s.C, o.addData(h, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), n = f[v - 2], i = f[v - 1];break;case "c":
            h = s.C, o.addData(h, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), n += f[v - 2], i += f[v - 1];break;case "S":
            m = n, y = i;var C = o.len(),
                I = o.data;e === s.C && (m += n - I[C - 4], y += i - I[C - 3]), h = s.C, M = f[v++], T = f[v++], n = f[v++], i = f[v++], o.addData(h, m, y, M, T, n, i);break;case "s":
            m = n, y = i;var C = o.len(),
                I = o.data;e === s.C && (m += n - I[C - 4], y += i - I[C - 3]), h = s.C, M = n + f[v++], T = i + f[v++], n += f[v++], i += f[v++], o.addData(h, m, y, M, T, n, i);break;case "Q":
            M = f[v++], T = f[v++], n = f[v++], i = f[v++], h = s.Q, o.addData(h, M, T, n, i);break;case "q":
            M = f[v++] + n, T = f[v++] + i, n += f[v++], i += f[v++], h = s.Q, o.addData(h, M, T, n, i);break;case "T":
            m = n, y = i;var C = o.len(),
                I = o.data;e === s.Q && (m += n - I[C - 4], y += i - I[C - 3]), n = f[v++], i = f[v++], h = s.Q, o.addData(h, m, y, n, i);break;case "t":
            m = n, y = i;var C = o.len(),
                I = o.data;e === s.Q && (m += n - I[C - 4], y += i - I[C - 3]), n += f[v++], i += f[v++], h = s.Q, o.addData(h, m, y, n, i);break;case "A":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, T = i, n = f[v++], i = f[v++], h = s.A, Fr(M, T, n, i, b, S, _, x, w, h, o);break;case "a":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, T = i, n += f[v++], i += f[v++], h = s.A, Fr(M, T, n, i, b, S, _, x, w, h, o);}
      }("z" === d || "Z" === d) && (h = s.Z, o.addData(h), n = r, i = a), e = h;
    }return o.toStatic(), o;
  }function Hr(t, e) {
    var n = Nr(t);return e = e || {}, e.buildPath = function (t) {
      if (t.setData) {
        t.setData(n.data);var e = t.getContext();e && t.rebuildPath(e);
      } else {
        var e = t;n.rebuildPath(e);
      }
    }, e.applyTransform = function (t) {
      qg(n, t), this.dirty(!0);
    }, e;
  }function Vr(t, e) {
    return new Rr(Hr(t, e));
  }function Wr(t, e) {
    return Rr.extend(Hr(t, e));
  }function Gr(t, e) {
    for (var n = [], i = t.length, r = 0; i > r; r++) {
      var a = t[r];a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path);
    }var o = new Rr(e);return o.createPathProxy(), o.buildPath = function (t) {
      t.appendPath(n);var e = t.getContext();e && t.rebuildPath(e);
    }, o;
  }function Xr(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }function jr(t, e, n) {
    var i = e.points,
        r = e.smooth;if (i && i.length >= 2) {
      if (r && "spline" !== r) {
        var a = hv(i, r, n, e.smoothConstraint);t.moveTo(i[0][0], i[0][1]);for (var o = i.length, s = 0; (n ? o : o - 1) > s; s++) {
          var l = a[2 * s],
              u = a[2 * s + 1],
              h = i[(s + 1) % o];t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
        }
      } else {
        "spline" === r && (i = uv(i, n)), t.moveTo(i[0][0], i[0][1]);for (var s = 1, c = i.length; c > s; s++) {
          t.lineTo(i[s][0], i[s][1]);
        }
      }n && t.closePath();
    }
  }function Yr(t, e, n) {
    var i = t.cpx2,
        r = t.cpy2;return null === i || null === r ? [(n ? sr : or)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? sr : or)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? fr : dr)(t.x1, t.cpx1, t.x2, e), (n ? fr : dr)(t.y1, t.cpy1, t.y2, e)];
  }function qr(t) {
    gi.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0;
  }function Ur(t) {
    return Rr.extend(t);
  }function Zr(t, e) {
    return Wr(t, e);
  }function $r(t, e, n, i) {
    var r = Vr(t, e);return n && ("center" === i && (n = Qr(n, r.getBoundingRect())), Jr(r, n)), r;
  }function Kr(t, e, n) {
    var i = new vi({ style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height }, onload: function onload(t) {
        if ("center" === n) {
          var r = { width: t.width, height: t.height };i.setStyle(Qr(e, r));
        }
      } });return i;
  }function Qr(t, e) {
    var n,
        i = e.width / e.height,
        r = t.height * i;r <= t.width ? n = t.height : (r = t.width, n = r / i);var a = t.x + t.width / 2,
        o = t.y + t.height / 2;return { x: a - r / 2, y: o - n / 2, width: r, height: n };
  }function Jr(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
          i = n.calculateTransform(e);t.applyTransform(i);
    }
  }function ta(t) {
    var e = t.shape,
        n = t.style.lineWidth;return Sv(2 * e.x1) === Sv(2 * e.x2) && (e.x1 = e.x2 = na(e.x1, n, !0)), Sv(2 * e.y1) === Sv(2 * e.y2) && (e.y1 = e.y2 = na(e.y1, n, !0)), t;
  }function ea(t) {
    var e = t.shape,
        n = t.style.lineWidth,
        i = e.x,
        r = e.y,
        a = e.width,
        o = e.height;return e.x = na(e.x, n, !0), e.y = na(e.y, n, !0), e.width = Math.max(na(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(na(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t;
  }function na(t, e, n) {
    var i = Sv(2 * t);return (i + Sv(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
  }function ia(t) {
    return null != t && "none" !== t;
  }function ra(t) {
    if ("string" != typeof t) return t;var e = kv.get(t);return e || (e = je(t, -.1), 1e4 > Dv && (kv.set(t, e), Dv++)), e;
  }function aa(t) {
    if (t.__hoverStlDirty) {
      t.__hoverStlDirty = !1;var e = t.__hoverStl;if (!e) return void (t.__normalStl = null);var n = t.__normalStl = {},
          i = t.style;for (var r in e) {
        null != e[r] && (n[r] = i[r]);
      }n.fill = i.fill, n.stroke = i.stroke;
    }
  }function oa(t) {
    var e = t.__hoverStl;if (e && !t.__highlighted) {
      var n = t.useHoverLayer;t.__highlighted = n ? "layer" : "plain";var i = t.__zr;if (i || !n) {
        var r = t,
            a = t.style;n && (r = i.addHover(t), a = r.style), Ia(a), n || aa(r), a.extendFrom(e), sa(a, e, "fill"), sa(a, e, "stroke"), Ca(a), n || (t.dirty(!1), t.z2 += 1);
      }
    }
  }function sa(t, e, n) {
    !ia(e[n]) && ia(t[n]) && (t[n] = ra(t[n]));
  }function la(t) {
    t.__highlighted && (ua(t), t.__highlighted = !1);
  }function ua(t) {
    var e = t.__highlighted;if ("layer" === e) t.__zr && t.__zr.removeHover(t);else if (e) {
      var n = t.style,
          i = t.__normalStl;i && (Ia(n), t.setStyle(i), Ca(n), t.z2 -= 1);
    }
  }function ha(t, e) {
    t.isGroup ? t.traverse(function (t) {
      !t.isGroup && e(t);
    }) : e(t);
  }function ca(t, e) {
    e = t.__hoverStl = e !== !1 && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (la(t), oa(t));
  }function da(t) {
    return t && t.__isEmphasisEntered;
  }function fa(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && ha(this, oa);
  }function pa(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && ha(this, la);
  }function ga() {
    this.__isEmphasisEntered = !0, ha(this, oa);
  }function va() {
    this.__isEmphasisEntered = !1, ha(this, la);
  }function ma(t, e, n) {
    t.isGroup ? t.traverse(function (t) {
      !t.isGroup && ca(t, t.hoverStyle || e);
    }) : ca(t, t.hoverStyle || e), ya(t, n);
  }function ya(t, e) {
    var n = e === !1;if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
      var i = n ? "off" : "on";t[i]("mouseover", fa)[i]("mouseout", pa), t[i]("emphasis", ga)[i]("normal", va), t.__hoverStyleTrigger = !n;
    }
  }function _a(t, e, n, i, r, a, o) {
    r = r || Cv;var s,
        l = r.labelFetcher,
        u = r.labelDataIndex,
        h = r.labelDimIndex,
        c = n.getShallow("show"),
        d = i.getShallow("show");(c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));var f = c ? s : null,
        p = d ? D(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;(null != f || null != p) && (xa(t, n, a, r), xa(e, i, o, r, !0)), t.text = f, e.text = p;
  }function xa(t, e, n, i, r) {
    return ba(t, e, i, r), n && o(t, n), t;
  }function wa(t, e, n) {
    var i,
        r = { isRectText: !0 };n === !1 ? i = !0 : r.autoColor = n, ba(t, e, r, i);
  }function ba(t, e, n, i) {
    if (n = n || Cv, n.isRectText) {
      var r = e.getShallow("position") || (i ? null : "inside");"outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");var a = e.getShallow("rotate");null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = D(e.getShallow("distance"), i ? null : 5);
    }var o,
        s = e.ecModel,
        l = s && s.option.textStyle,
        u = Sa(e);if (u) {
      o = {};for (var h in u) {
        if (u.hasOwnProperty(h)) {
          var c = e.getModel(["rich", h]);Ma(o[h] = {}, c, l, n, i);
        }
      }
    }return t.rich = o, Ma(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t;
  }function Sa(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || Cv).rich;if (n) {
        e = e || {};for (var i in n) {
          n.hasOwnProperty(i) && (e[i] = 1);
        }
      }t = t.parentModel;
    }return e;
  }function Ma(t, e, n, i, r, a) {
    n = !r && n || Cv, t.textFill = Ta(e.getShallow("color"), i) || n.color, t.textStroke = Ta(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = D(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (a && (t.insideRollbackOpt = i, Ca(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Ta(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Ta(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;
  }function Ta(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
  }function Ca(t) {
    var e = t.insideRollbackOpt;if (e && null == t.textFill) {
      var n,
          i = e.useInsideStyle,
          r = t.insideRawTextPosition,
          a = e.autoColor;i !== !1 && (i === !0 || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = { textFill: null, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = { textFill: null }, t.textFill = a), n && (t.insideRollback = n);
    }
  }function Ia(t) {
    var e = t.insideRollback;e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null);
  }function ka(t, e) {
    var n = e || e.getModel("textStyle");return E([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "));
  }function Da(t, e, n, i, r, a) {
    "function" == typeof r && (a = r, r = null);var o = i && i.isAnimationEnabled();if (o) {
      var s = t ? "Update" : "",
          l = i.getShallow("animationDuration" + s),
          u = i.getShallow("animationEasing" + s),
          h = i.getShallow("animationDelay" + s);"function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());
    } else e.stopAnimation(), e.attr(n), a && a();
  }function Aa(t, e, n, i, r) {
    Da(!0, t, e, n, i, r);
  }function Pa(t, e, n, i, r) {
    Da(!1, t, e, n, i, r);
  }function Oa(t, e) {
    for (var n = be([]); t && t !== e;) {
      Me(n, t.getLocalTransform(), n), t = t.parent;
    }return n;
  }function La(t, e, n) {
    return e && !d(e) && (e = mf.getLocalTransform(e)), n && (e = ke([], e)), ae([], t, e);
  }function Ea(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
        r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
        a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];return a = La(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
  }function Ba(t, e, n) {
    function i(t) {
      var e = {};return t.traverse(function (t) {
        !t.isGroup && t.anid && (e[t.anid] = t);
      }), e;
    }function r(t) {
      var e = { position: G(t.position), rotation: t.rotation };return t.shape && (e.shape = o({}, t.shape)), e;
    }if (t && e) {
      var a = i(t);e.traverse(function (t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];if (e) {
            var i = r(t);t.attr(r(e)), Aa(t, i, n, t.dataIndex);
          }
        }
      });
    }
  }function za(t, e) {
    return p(t, function (t) {
      var n = t[0];n = Mv(n, e.x), n = Tv(n, e.x + e.width);var i = t[1];return i = Mv(i, e.y), i = Tv(i, e.y + e.height), [n, i];
    });
  }function Ra(t, e) {
    var n = Mv(t.x, e.x),
        i = Tv(t.x + t.width, e.x + e.width),
        r = Mv(t.y, e.y),
        a = Tv(t.y + t.height, e.y + e.height);return i >= n && a >= r ? { x: n, y: r, width: i - n, height: a - r } : void 0;
  }function Fa(t, e, n) {
    e = o({ rectHover: !0 }, e);var i = e.style = { strokeNoScale: !0 };return n = n || { x: -1, y: -1, width: 2, height: 2 }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new vi(e)) : $r(t.replace("path://", ""), e, n, "center") : void 0;
  }function Na(t, e, n) {
    this.parentModel = e, this.ecModel = n, this.option = t;
  }function Ha(t, e, n) {
    for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t[e[i]] : null, null != t)); i++) {}return null == t && n && (t = n.get(e)), t;
  }function Va(t, e) {
    var n = zv(t).getParent;return n ? n.call(t, e) : t.parentModel;
  }function Wa(t) {
    return [t || "", Rv++, Math.random().toFixed(5)].join("_");
  }function Ga(t) {
    var e = {};return t.registerSubTypeDefaulter = function (t, n) {
      t = Ki(t), e[t.main] = n;
    }, t.determineSubType = function (n, i) {
      var r = i.type;if (!r) {
        var a = Ki(n).main;t.hasSubTypes(n) && e[a] && (r = e[a](i));
      }return r;
    }, t;
  }function Xa(t, e) {
    function n(t) {
      var n = {},
          a = [];return f(t, function (o) {
        var s = i(n, o),
            l = s.originalDeps = e(o),
            h = r(l, t);s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function (t) {
          u(s.predecessor, t) < 0 && s.predecessor.push(t);var e = i(n, t);u(e.successor, t) < 0 && e.successor.push(o);
        });
      }), { graph: n, noEntryList: a };
    }function i(t, e) {
      return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
    }function r(t, e) {
      var n = [];return f(t, function (t) {
        u(e, t) >= 0 && n.push(t);
      }), n;
    }t.topologicalTravel = function (t, e, i, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && u.push(t);
      }function o(t) {
        h[t] = !0, a(t);
      }if (t.length) {
        var s = n(e),
            l = s.graph,
            u = s.noEntryList,
            h = {};for (f(t, function (t) {
          h[t] = !0;
        }); u.length;) {
          var c = u.pop(),
              d = l[c],
              p = !!h[c];p && (i.call(r, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? o : a);
        }f(h, function () {
          throw new Error("Circle dependency may exists");
        });
      }
    };
  }function ja(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "");
  }function Ya(t, e, n, i) {
    var r = e[1] - e[0],
        a = n[1] - n[0];if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;if (i) {
      if (r > 0) {
        if (t <= e[0]) return n[0];if (t >= e[1]) return n[1];
      } else {
        if (t >= e[0]) return n[0];if (t <= e[1]) return n[1];
      }
    } else {
      if (t === e[0]) return n[0];if (t === e[1]) return n[1];
    }return (t - e[0]) / r * a + n[0];
  }function qa(t, e) {
    switch (t) {case "center":case "middle":
        t = "50%";break;case "left":case "top":
        t = "0%";break;case "right":case "bottom":
        t = "100%";}return "string" == typeof t ? ja(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t;
  }function Ua(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t;
  }function Za(t) {
    return t.sort(function (t, e) {
      return t - e;
    }), t;
  }function $a(t) {
    if (t = +t, isNaN(t)) return 0;for (var e = 1, n = 0; Math.round(t * e) / e !== t;) {
      e *= 10, n++;
    }return n;
  }function Ka(t) {
    var e = t.toString(),
        n = e.indexOf("e");if (n > 0) {
      var i = +e.slice(n + 1);return 0 > i ? -i : 0;
    }var r = e.indexOf(".");return 0 > r ? 0 : e.length - 1 - r;
  }function Qa(t, e) {
    var n = Math.log,
        i = Math.LN10,
        r = Math.floor(n(t[1] - t[0]) / i),
        a = Math.round(n(Math.abs(e[1] - e[0])) / i),
        o = Math.min(Math.max(-r + a, 0), 20);return isFinite(o) ? o : 20;
  }function Ja(t, e, n) {
    if (!t[e]) return 0;var i = g(t, function (t, e) {
      return t + (isNaN(e) ? 0 : e);
    }, 0);if (0 === i) return 0;for (var r = Math.pow(10, n), a = p(t, function (t) {
      return (isNaN(t) ? 0 : t) / i * r * 100;
    }), o = 100 * r, s = p(a, function (t) {
      return Math.floor(t);
    }), l = g(s, function (t, e) {
      return t + e;
    }, 0), u = p(a, function (t, e) {
      return t - s[e];
    }); o > l;) {
      for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) {
        u[d] > h && (h = u[d], c = d);
      }++s[c], u[c] = 0, ++l;
    }return s[e] / r;
  }function to(t) {
    var e = 2 * Math.PI;return (t % e + e) % e;
  }function eo(t) {
    return t > -Fv && Fv > t;
  }function no(t) {
    if (t instanceof Date) return t;if ("string" == typeof t) {
      var e = Hv.exec(t);if (!e) return new Date(0 / 0);if (e[8]) {
        var n = +e[4] || 0;return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
      }return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
    }return new Date(null == t ? 0 / 0 : Math.round(t));
  }function io(t) {
    return Math.pow(10, ro(t));
  }function ro(t) {
    return Math.floor(Math.log(t) / Math.LN10);
  }function ao(t, e) {
    var n,
        i = ro(t),
        r = Math.pow(10, i),
        a = t / r;return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t;
  }function oo(t, e) {
    var n = (t.length - 1) * e + 1,
        i = Math.floor(n),
        r = +t[i - 1],
        a = n - i;return a ? r + a * (t[i] - r) : r;
  }function so(t) {
    function e(t, n, i) {
      return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1));
    }t.sort(function (t, n) {
      return e(t, n, 0) ? -1 : 1;
    });for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
      for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) {
        a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];
      }a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++;
    }return t;
  }function lo(t) {
    return t - parseFloat(t) >= 0;
  }function uo(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));
  }function ho(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase();
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
  }function co(t) {
    return null == t ? "" : (t + "").replace(Gv, function (t, e) {
      return Xv[e];
    });
  }function fo(t, e, n) {
    x(e) || (e = [e]);var i = e.length;if (!i) return "";for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = jv[a];t = t.replace(Yv(o), Yv(o, 0));
    }for (var s = 0; i > s; s++) {
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]];t = t.replace(Yv(jv[l], s), n ? co(u) : u);
      }
    }return t;
  }function po(t, e, n) {
    return f(e, function (e, i) {
      t = t.replace("{" + i + "}", n ? co(e) : e);
    }), t;
  }function go(t, e) {
    t = b(t) ? { color: t, extraCssText: e } : t || {};var n = t.color,
        i = t.type,
        e = t.extraCssText,
        r = t.renderMode || "html",
        a = t.markerId || "X";return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + co(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + co(n) + ";" + (e || "") + '"></span>' : { renderMode: r, content: "{marker" + a + "|}  ", style: { color: n } } : "";
  }function vo(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t;
  }function mo(t, e, n) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");var i = no(e),
        r = n ? "UTC" : "",
        a = i["get" + r + "FullYear"](),
        o = i["get" + r + "Month"]() + 1,
        s = i["get" + r + "Date"](),
        l = i["get" + r + "Hours"](),
        u = i["get" + r + "Minutes"](),
        h = i["get" + r + "Seconds"](),
        c = i["get" + r + "Milliseconds"]();return t = t.replace("MM", vo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", vo(s, 2)).replace("d", s).replace("hh", vo(l, 2)).replace("h", l).replace("mm", vo(u, 2)).replace("m", u).replace("ss", vo(h, 2)).replace("s", h).replace("SSS", vo(c, 3));
  }function yo(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
  }function _o(t, e, n, i, r) {
    var a = 0,
        o = 0;null == i && (i = 1 / 0), null == r && (r = 1 / 0);var s = 0;e.eachChild(function (l, u) {
      var h,
          c,
          d = l.position,
          f = l.getBoundingRect(),
          p = e.childAt(u + 1),
          g = p && p.getBoundingRect();if ("horizontal" === t) {
        var v = f.width + (g ? -g.x + f.x : 0);h = a + v, h > i || l.newline ? (a = 0, h = v, o += s + n, s = f.height) : s = Math.max(s, f.height);
      } else {
        var m = f.height + (g ? -g.y + f.y : 0);c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width);
      }l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n : o = c + n);
    });
  }function xo(t, e, n) {
    n = Wv(n || 0);var i = e.width,
        r = e.height,
        a = qa(t.left, i),
        o = qa(t.top, r),
        s = qa(t.right, i),
        l = qa(t.bottom, r),
        u = qa(t.width, i),
        h = qa(t.height, r),
        c = n[2] + n[0],
        d = n[1] + n[3],
        f = t.aspect;switch (isNaN(u) && (u = i - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(a) && (a = i - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {case "center":
        a = i / 2 - u / 2 - n[3];break;case "right":
        a = i - u - d;}switch (t.top || t.bottom) {case "middle":case "center":
        o = r / 2 - h / 2 - n[0];break;case "bottom":
        o = r - h - c;}a = a || 0, o = o || 0, isNaN(u) && (u = i - d - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));var p = new gn(a + n[3], o + n[0], u, h);return p.margin = n, p;
  }function wo(t, e, n) {
    function i(n, i) {
      var o = {},
          l = 0,
          u = {},
          h = 0,
          c = 2;if ($v(n, function (e) {
        u[e] = t[e];
      }), $v(n, function (t) {
        r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++;
      }), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;if (h !== c && l) {
        if (l >= c) return o;for (var d = 0; d < n.length; d++) {
          var f = n[d];if (!r(o, f) && r(t, f)) {
            o[f] = t[f];break;
          }
        }return o;
      }return u;
    }function r(t, e) {
      return t.hasOwnProperty(e);
    }function a(t, e) {
      return null != t[e] && "auto" !== t[e];
    }function o(t, e, n) {
      $v(t, function (t) {
        e[t] = n[t];
      });
    }!S(n) && (n = {});var s = n.ignoreSize;!x(s) && (s = [s, s]);var l = i(Qv[0], 0),
        u = i(Qv[1], 1);o(Qv[0], t, l), o(Qv[1], t, u);
  }function bo(t) {
    return So({}, t);
  }function So(t, e) {
    return e && t && $v(Kv, function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t;
  }function Mo(t) {
    var e = [];return f(em.getClassesByMainType(t), function (t) {
      e = e.concat(t.prototype.dependencies || []);
    }), e = p(e, function (t) {
      return Ki(t).main;
    }), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e;
  }function To(t, e) {
    for (var n = t.length, i = 0; n > i; i++) {
      if (t[i].length > e) return t[i];
    }return t[n - 1];
  }function Co(t) {
    var e = t.get("coordinateSystem"),
        n = { coordSysName: e, coordSysDims: [], axisMap: F(), categoryAxisMap: F() },
        i = om[e];return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;
  }function Io(t) {
    return "category" === t.get("type");
  }function ko(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === hm ? {} : []), this.sourceFormat = t.sourceFormat || cm, this.seriesLayoutBy = t.seriesLayoutBy || fm, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && F(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
  }function Do(t) {
    var e = t.option.source,
        n = cm;if (T(e)) n = dm;else if (x(e)) {
      0 === e.length && (n = lm);for (var i = 0, r = e.length; r > i; i++) {
        var a = e[i];if (null != a) {
          if (x(a)) {
            n = lm;break;
          }if (S(a)) {
            n = um;break;
          }
        }
      }
    } else if (S(e)) {
      for (var o in e) {
        if (e.hasOwnProperty(o) && d(e[o])) {
          n = hm;break;
        }
      }
    } else if (null != e) throw new Error("Invalid data");gm(t).sourceFormat = n;
  }function Ao(t) {
    return gm(t).source;
  }function Po(t) {
    gm(t).datasetMap = F();
  }function Oo(t) {
    var e = t.option,
        n = e.data,
        i = T(n) ? dm : sm,
        r = !1,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = Fo(t);if (l) {
      var u = l.option;n = u.source, i = gm(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions;
    }var h = Lo(n, i, a, o, s),
        c = e.encode;!c && l && (c = Ro(t, l, n, i, a, h)), gm(t).source = new ko({ data: n, fromDataset: r, seriesLayoutBy: a, sourceFormat: i, dimensionsDefine: h.dimensionsDefine, startIndex: h.startIndex, dimensionsDetectCount: h.dimensionsDetectCount, encodeDefine: c });
  }function Lo(t, e, n, i, r) {
    if (!t) return { dimensionsDefine: Eo(r) };var a, o, s;if (e === lm) "auto" === i || null == i ? Bo(function (t) {
      null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0);
    }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Bo(function (t, e) {
      r[e] = null != t ? t : "";
    }, n, t)), a = r ? r.length : n === pm ? t.length : t[0] ? t[0].length : null;else if (e === um) r || (r = zo(t), s = !0);else if (e === hm) r || (r = [], s = !0, f(t, function (t, e) {
      r.push(e);
    }));else if (e === sm) {
      var l = Fi(t[0]);a = x(l) && l.length || 1;
    }var u;return s && f(r, function (t, e) {
      "name" === (S(t) ? t.name : t) && (u = e);
    }), { startIndex: o, dimensionsDefine: Eo(r), dimensionsDetectCount: a, potentialNameDimIndex: u };
  }function Eo(t) {
    if (t) {
      var e = F();return p(t, function (t) {
        if (t = o({}, S(t) ? t : { name: t }), null == t.name) return t;t.name += "", null == t.displayName && (t.displayName = t.name);var n = e.get(t.name);return n ? t.name += "-" + n.count++ : e.set(t.name, { count: 1 }), t;
      });
    }
  }function Bo(t, e, n, i) {
    if (null == i && (i = 1 / 0), e === pm) for (var r = 0; r < n.length && i > r; r++) {
      t(n[r] ? n[r][0] : null, r);
    } else for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) {
      t(a[r], r);
    }
  }function zo(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]);) {}if (e) {
      var i = [];return f(e, function (t, e) {
        i.push(e);
      }), i;
    }
  }function Ro(t, e, n, i, r, a) {
    var o = Co(t),
        s = {},
        l = [],
        u = [],
        h = t.subType,
        c = F(["pie", "map", "funnel"]),
        d = F(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);if (o && null != d.get(h)) {
      var p = t.ecModel,
          g = gm(p).datasetMap,
          v = e.uid + "_" + r,
          m = g.get(v) || g.set(v, { categoryWayDim: 1, valueWayDim: 0 });f(o.coordSysDims, function (t) {
        if (null == o.firstCategoryDimIndex) {
          var e = m.valueWayDim++;s[t] = e, u.push(e);
        } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);else {
          var e = m.categoryWayDim++;s[t] = e, u.push(e);
        }
      });
    } else if (null != c.get(h)) {
      for (var y, _ = 0; 5 > _ && null == y; _++) {
        Ho(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
      }if (null != y) {
        s.value = y;var x = a.potentialNameDimIndex || Math.max(y - 1, 0);u.push(x), l.push(x);
      }
    }return l.length && (s.itemName = l), u.length && (s.seriesName = u), s;
  }function Fo(t) {
    var e = t.option,
        n = e.data;return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
  }function No(t, e) {
    return Ho(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
  }function Ho(t, e, n, i, r, a) {
    function o(t) {
      return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0;
    }var s,
        l = 5;if (T(t)) return !1;var u;if (i && (u = i[a], u = S(u) ? u.name : u), e === lm) {
      if (n === pm) {
        for (var h = t[a], c = 0; c < (h || []).length && l > c; c++) {
          if (null != (s = o(h[r + c]))) return s;
        }
      } else for (var c = 0; c < t.length && l > c; c++) {
        var d = t[r + c];if (d && null != (s = o(d[a]))) return s;
      }
    } else if (e === um) {
      if (!u) return;for (var c = 0; c < t.length && l > c; c++) {
        var f = t[c];if (f && null != (s = o(f[u]))) return s;
      }
    } else if (e === hm) {
      if (!u) return;var h = t[u];if (!h || T(h)) return !1;for (var c = 0; c < h.length && l > c; c++) {
        if (null != (s = o(h[c]))) return s;
      }
    } else if (e === sm) for (var c = 0; c < t.length && l > c; c++) {
      var f = t[c],
          p = Fi(f);if (!x(p)) return !1;if (null != (s = o(p[a]))) return s;
    }return !1;
  }function Vo(t, e) {
    if (e) {
      var n = e.seiresIndex,
          i = e.seriesId,
          r = e.seriesName;return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;
    }
  }function Wo(t, e) {
    var n = t.color && !t.colorLayer;f(e, function (e, a) {
      "colorLayer" === a && n || em.hasClass(a) || ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e));
    });
  }function Go(t) {
    t = t, this.option = {}, this.option[vm] = 1, this._componentsMap = F({ series: [] }), this._seriesIndices, this._seriesIndicesMap, Wo(t, this._theme.option), r(t, im, !1), this.mergeOption(t);
  }function Xo(t, e) {
    x(e) || (e = e ? [e] : []);var n = {};return f(e, function (e) {
      n[e] = (t.get(e) || []).slice();
    }), n;
  }function jo(t, e, n) {
    var i = e.type ? e.type : n ? n.subType : em.determineSubType(t, e);return i;
  }function Yo(t, e) {
    t._seriesIndicesMap = F(t._seriesIndices = p(e, function (t) {
      return t.componentIndex;
    }) || []);
  }function qo(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function (t) {
      return t.subType === e.subType;
    }) : t;
  }function Uo(t) {
    f(ym, function (e) {
      this[e] = y(t[e], t);
    }, this);
  }function Zo() {
    this._coordinateSystems = [];
  }function $o(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
  }function Ko(t, e, n) {
    var i,
        r,
        a = [],
        o = [],
        s = t.timeline;if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};var l = t.media;xm(l, function (t) {
        t && t.option && (t.query ? o.push(t) : i || (i = t));
      });
    }return r || (r = t), r.timeline || (r.timeline = s), xm([r].concat(a).concat(p(o, function (t) {
      return t.option;
    })), function (t) {
      xm(e, function (e) {
        e(t, n);
      });
    }), { baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o };
  }function Qo(t, e, n) {
    var i = { width: e, height: n, aspectratio: e / n },
        r = !0;return f(t, function (t, e) {
      var n = e.match(Mm);if (n && n[1] && n[2]) {
        var a = n[1],
            o = n[2].toLowerCase();Jo(i[o], t, a) || (r = !1);
      }
    }), r;
  }function Jo(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e;
  }function ts(t, e) {
    return t.join(",") === e.join(",");
  }function es(t, e) {
    e = e || {}, xm(e, function (e, n) {
      if (null != e) {
        var i = t[n];if (em.hasClass(n)) {
          e = zi(e), i = zi(i);var r = Hi(i, e);t[n] = bm(r, function (t) {
            return t.option && t.exist ? Sm(t.exist, t.option, !0) : t.exist || t.option;
          });
        } else t[n] = Sm(i, e, !0);
      }
    });
  }function ns(t) {
    var e = t && t.itemStyle;if (e) for (var n = 0, i = Im.length; i > n; n++) {
      var a = Im[n],
          o = e.normal,
          s = e.emphasis;o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);
    }
  }function is(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
          r = t[e].emphasis;i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);
    }
  }function rs(t) {
    is(t, "itemStyle"), is(t, "lineStyle"), is(t, "areaStyle"), is(t, "label"), is(t, "labelLine"), is(t, "upperLabel"), is(t, "edgeLabel");
  }function as(t, e) {
    var n = Cm(t) && t[e],
        i = Cm(n) && n.textStyle;if (i) for (var r = 0, a = jp.length; a > r; r++) {
      var e = jp[r];i.hasOwnProperty(e) && (n[e] = i[e]);
    }
  }function os(t) {
    t && (rs(t), as(t, "label"), t.emphasis && as(t.emphasis, "label"));
  }function ss(t) {
    if (Cm(t)) {
      ns(t), rs(t), as(t, "label"), as(t, "upperLabel"), as(t, "edgeLabel"), t.emphasis && (as(t.emphasis, "label"), as(t.emphasis, "upperLabel"), as(t.emphasis, "edgeLabel"));var e = t.markPoint;e && (ns(e), os(e));var n = t.markLine;n && (ns(n), os(n));var i = t.markArea;i && os(i);var r = t.data;if ("graph" === t.type) {
        r = r || t.nodes;var a = t.links || t.edges;if (a && !T(a)) for (var o = 0; o < a.length; o++) {
          os(a[o]);
        }f(t.categories, function (t) {
          rs(t);
        });
      }if (r && !T(r)) for (var o = 0; o < r.length; o++) {
        os(r[o]);
      }var e = t.markPoint;if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) {
        os(s[o]);
      }var n = t.markLine;if (n && n.data) for (var l = n.data, o = 0; o < l.length; o++) {
        x(l[o]) ? (os(l[o][0]), os(l[o][1])) : os(l[o]);
      }"gauge" === t.type ? (as(t, "axisLabel"), as(t, "title"), as(t, "detail")) : "treemap" === t.type ? (is(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
        rs(t);
      })) : "tree" === t.type && rs(t.leaves);
    }
  }function ls(t) {
    return x(t) ? t : t ? [t] : [];
  }function us(t) {
    return (x(t) ? t[0] : t) || {};
  }function hs(t, e) {
    e = e.split(",");for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++) {}return n;
  }function cs(t, e, n, i) {
    e = e.split(",");for (var r, a = t, o = 0; o < e.length - 1; o++) {
      r = e[o], null == a[r] && (a[r] = {}), a = a[r];
    }(i || null == a[e[o]]) && (a[e[o]] = n);
  }function ds(t) {
    f(Dm, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
    });
  }function fs(t) {
    f(t, function (e, n) {
      var i = [],
          r = [0 / 0, 0 / 0],
          a = [e.stackResultDimension, e.stackedOverDimension],
          o = e.data,
          s = e.isStackedByIndex,
          l = o.map(a, function (a, l, u) {
        var h = o.get(e.stackedDimension, u);if (isNaN(h)) return r;var c, d;s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);for (var f = 0 / 0, p = n - 1; p >= 0; p--) {
          var g = t[p];if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
            var v = g.data.getByRawIndex(g.stackResultDimension, d);if (h >= 0 && v > 0 || 0 >= h && 0 > v) {
              h += v, f = v;break;
            }
          }
        }return i[0] = h, i[1] = f, i;
      });o.hostModel.setData(l), e.data = l;
    });
  }function ps(t, e) {
    ko.isInstance(t) || (t = ko.seriesDataToSource(t)), this._source = t;var n = this._data = t.data,
        i = t.sourceFormat;i === dm && (this._offset = 0, this._dimSize = e, this._data = n);var r = Em[i === lm ? i + "_" + t.seriesLayoutBy : i];o(this, r);
  }function gs() {
    return this._data.length;
  }function vs(t) {
    return this._data[t];
  }function ms(t) {
    for (var e = 0; e < t.length; e++) {
      this._data.push(t[e]);
    }
  }function ys(t, e, n) {
    return null != n ? t[n] : t;
  }function _s(t, e, n, i) {
    return xs(t[i], this._dimensionInfos[e]);
  }function xs(t, e) {
    var n = e && e.type;if ("ordinal" === n) {
      var i = e && e.ordinalMeta;return i ? i.parseAndCollect(t) : t;
    }return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +no(t)), null == t || "" === t ? 0 / 0 : +t;
  }function ws(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);if (null != i) {
        var r,
            a,
            o = t.getProvider().getSource().sourceFormat,
            s = t.getDimensionInfo(n);return s && (r = s.name, a = s.index), Bm[o](i, e, a, r);
      }
    }
  }function bs(t) {
    return new Ss(t);
  }function Ss(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context;
  }function Ms(t, e, n, i, r, a) {
    Hm.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({ start: n, end: i, count: i - n, next: Hm.next }, t.context);
  }function Ts(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;var n, i;!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), x(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;var r = t._downstream;return r && r.dirty(), i;
  }function Cs(t) {
    var e = t.name;Wi(t) || (t.name = Is(t) || e);
  }function Is(t) {
    var e = t.getRawData(),
        n = e.mapDimension("seriesName", !0),
        i = [];return f(n, function (t) {
      var n = e.getDimensionInfo(t);n.displayName && i.push(n.displayName);
    }), i.join(" ");
  }function ks(t) {
    return t.model.getRawData().count();
  }function Ds(t) {
    var e = t.model;return e.setData(e.getRawData().cloneShallow()), As;
  }function As(t, e) {
    t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
  }function Ps(t, e) {
    f(t.CHANGABLE_METHODS, function (n) {
      t.wrapMethod(n, _(Os, e));
    });
  }function Os(t) {
    var e = Ls(t);e && e.setOutputEnd(this.count());
  }function Ls(t) {
    var e = (t.ecModel || {}).scheduler,
        n = e && e.getPipeline(t.uid);if (n) {
      var i = n.currentTask;if (i) {
        var r = i.agentStubMap;r && (i = r.get(t.uid));
      }return i;
    }
  }function Es() {
    this.group = new Yf(), this.uid = Wa("viewChart"), this.renderTask = bs({ plan: Rs, reset: Fs }), this.renderTask.context = { view: this };
  }function Bs(t, e) {
    if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) {
      Bs(t.childAt(n), e);
    }
  }function zs(t, e, n) {
    var i = Xi(t, e);null != i ? f(zi(i), function (e) {
      Bs(t.getItemGraphicEl(e), n);
    }) : t.eachItemGraphicEl(function (t) {
      Bs(t, n);
    });
  }function Rs(t) {
    return qm(t.model);
  }function Fs(t) {
    var e = t.model,
        n = t.ecModel,
        i = t.api,
        r = t.payload,
        a = e.pipelineContext.progressiveRender,
        o = t.view,
        s = r && Ym(r).updateMethod,
        l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";return "render" !== l && o[l](e, n, i, r), Zm[l];
  }function Ns(t, e, n) {
    function i() {
      h = new Date().getTime(), c = null, t.apply(o, s || []);
    }var r,
        a,
        o,
        s,
        l,
        u = 0,
        h = 0,
        c = null;e = e || 0;var d = function d() {
      r = new Date().getTime(), o = this, s = arguments;var t = l || e,
          d = l || n;l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), u = r;
    };return d.clear = function () {
      c && (clearTimeout(c), c = null);
    }, d.debounceNextCall = function (t) {
      l = t;
    }, d;
  }function Hs(t, e, n, i) {
    var r = t[e];if (r) {
      var a = r[$m] || r,
          o = r[Qm],
          s = r[Km];if (s !== n || o !== i) {
        if (null == n || !i) return t[e] = a;r = t[e] = Ns(a, n, "debounce" === i), r[$m] = a, r[Qm] = i, r[Km] = n;
      }return r;
    }
  }function Vs(t, e, n, i) {
    this.ecInstance = t, this.api = e, this.unfinished;var n = this._dataProcessorHandlers = n.slice(),
        i = this._visualHandlers = i.slice();this._allHandlers = n.concat(i), this._stageTaskMap = F();
  }function Ws(t, e, n, i, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
    }r = r || {};var o;f(e, function (e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
            l = s.seriesTaskMap,
            u = s.overallTask;if (u) {
          var h,
              c = u.agentStubMap;c.each(function (t) {
            a(r, t) && (t.dirty(), h = !0);
          }), h && u.dirty(), ay(u, i);var d = t.getPerformArgs(u, r.block);c.each(function (t) {
            t.perform(d);
          }), o |= u.perform(d);
        } else l && l.each(function (s) {
          a(r, s) && s.dirty();var l = t.getPerformArgs(s, r.block);l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), ay(s, i), o |= s.perform(l);
        });
      }
    }), t.unfinished |= o;
  }function Gs(t, e, n, i, r) {
    function a(n) {
      var a = n.uid,
          s = o.get(a) || o.set(a, bs({ plan: Zs, reset: $s, count: Qs }));s.context = { model: n, ecModel: i, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t }, Js(t, n, s);
    }var o = n.seriesTaskMap || (n.seriesTaskMap = F()),
        s = e.seriesType,
        l = e.getTargetSeries;e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);var u = t._pipelineMap;o.each(function (t, e) {
      u.get(e) || (t.dispose(), o.removeKey(e));
    });
  }function Xs(t, e, n, i, r) {
    function a(e) {
      var n = e.uid,
          i = s.get(n);i || (i = s.set(n, bs({ reset: Ys, onDirty: Us })), o.dirty()), i.context = { model: e, overallProgress: h, modifyOutputEnd: c }, i.agent = o, i.__block = h, Js(t, e, i);
    }var o = n.overallTask = n.overallTask || bs({ reset: js });o.context = { ecModel: i, api: r, overallReset: e.overallReset, scheduler: t };var s = o.agentStubMap = o.agentStubMap || F(),
        l = e.seriesType,
        u = e.getTargetSeries,
        h = !0,
        c = e.modifyOutputEnd;l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = !1, f(i.getSeries(), a));var d = t._pipelineMap;s.each(function (t, e) {
      d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
    });
  }function js(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }function Ys(t) {
    return t.overallProgress && qs;
  }function qs() {
    this.agent.dirty(), this.getDownstream().dirty();
  }function Us() {
    this.agent && this.agent.dirty();
  }function Zs(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
  }function $s(t) {
    t.useClearVisual && t.data.clearAllVisual();var e = t.resetDefines = zi(t.reset(t.model, t.ecModel, t.api, t.payload));return e.length > 1 ? p(e, function (t, e) {
      return Ks(e);
    }) : oy;
  }function Ks(t) {
    return function (e, n) {
      var i = n.data,
          r = n.resetDefines[t];if (r && r.dataEach) for (var a = e.start; a < e.end; a++) {
        r.dataEach(i, a);
      } else r && r.progress && r.progress(e, i);
    };
  }function Qs(t) {
    return t.data.count();
  }function Js(t, e, n) {
    var i = e.uid,
        r = t._pipelineMap.get(i);!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r;
  }function tl(t) {
    sy = null;try {
      t(ly, uy);
    } catch (e) {}return sy;
  }function el(t, e) {
    for (var n in e.prototype) {
      t[n] = H;
    }
  }function nl(t) {
    if (b(t)) {
      var e = new DOMParser();t = e.parseFromString(t, "text/xml");
    }for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) {
      t = t.nextSibling;
    }return t;
  }function il() {
    this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1;
  }function rl(t, e) {
    for (var n = t.firstChild; n;) {
      if (1 === n.nodeType) {
        var i = n.getAttribute("offset");i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;var r = n.getAttribute("stop-color") || "#000000";e.addColorStop(i, r);
      }n = n.nextSibling;
    }
  }function al(t, e) {
    t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle));
  }function ol(t) {
    for (var e = E(t).split(my), n = [], i = 0; i < e.length; i += 2) {
      var r = parseFloat(e[i]),
          a = parseFloat(e[i + 1]);n.push([r, a]);
    }return n;
  }function sl(t, e, n, i) {
    var r = e.__inheritedStyle || {},
        a = "text" === e.type;if (1 === t.nodeType && (ul(t, e), o(r, hl(t)), !i)) for (var s in xy) {
      if (xy.hasOwnProperty(s)) {
        var l = t.getAttribute(s);null != l && (r[xy[s]] = l);
      }
    }var u = a ? "textFill" : "fill",
        h = a ? "textStroke" : "stroke";e.style = e.style || new Jf();var c = e.style;null != r.fill && c.set(u, ll(r.fill, n)), null != r.stroke && c.set(h, ll(r.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
      var e = "lineWidth" === t && a ? "textStrokeWidth" : t;null != r[t] && c.set(e, parseFloat(r[t]));
    }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
      null != r[t] && c.set(t, r[t]);
    }), r.lineDash && (e.style.lineDash = E(r.lineDash).split(my)), c[h] && "none" !== c[h] && (e[h] = !0), e.__inheritedStyle = r;
  }function ll(t, e) {
    var n = e && t && t.match(wy);if (n) {
      var i = E(n[1]),
          r = e[i];return r;
    }return t;
  }function ul(t, e) {
    var n = t.getAttribute("transform");if (n) {
      n = n.replace(/,/g, " ");var i = null,
          r = [];n.replace(by, function (t, e, n) {
        r.push(e, n);
      });for (var a = r.length - 1; a > 0; a -= 2) {
        var o = r[a],
            s = r[a - 1];switch (i = i || we(), s) {case "translate":
            o = E(o).split(my), Te(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);break;case "scale":
            o = E(o).split(my), Ie(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);break;case "rotate":
            o = E(o).split(my), Ce(i, i, parseFloat(o[0]));break;case "skew":
            o = E(o).split(my), console.warn("Skew transform is not supported yet");break;case "matrix":
            var o = E(o).split(my);i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5]);}
      }
    }e.setLocalTransform(i);
  }function hl(t) {
    var e = t.getAttribute("style"),
        n = {};if (!e) return n;var i = {};Sy.lastIndex = 0;for (var r; null != (r = Sy.exec(e));) {
      i[r[1]] = r[2];
    }for (var a in xy) {
      xy.hasOwnProperty(a) && null != i[a] && (n[xy[a]] = i[a]);
    }return n;
  }function cl(t, e, n) {
    var i = e / t.width,
        r = n / t.height,
        a = Math.min(i, r),
        o = [a, a],
        s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];return { scale: o, position: s };
  }function dl(t) {
    return function (e, n, i) {
      e = e && e.toLowerCase(), of.prototype[t].call(this, e, n, i);
    };
  }function fl() {
    of.call(this);
  }function pl(t, e, n) {
    function r(t, e) {
      return t.__prio - e.__prio;
    }n = n || {}, "string" == typeof e && (e = e_[e]), this.id, this.group, this._dom = t;var a = "canvas",
        o = this._zr = Pi(t, { renderer: n.renderer || a, devicePixelRatio: n.devicePixelRatio, width: n.width, height: n.height });this._throttledZrFlush = Ns(y(o.flush, o), 17);var e = i(e);e && Pm(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Zo();var s = this._api = Ol(this);Sn(t_, r), Sn(Ky, r), this._scheduler = new Vs(this, s, Ky, t_), of.call(this, this._ecEventProcessor = new Ll()), this._messageCenter = new fl(), this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), bl(o, this), B(this);
  }function gl(t, e, n) {
    var i,
        r = this._model,
        a = this._coordSysMgr.getCoordinateSystems();e = Yi(r, e);for (var o = 0; o < a.length; o++) {
      var s = a[o];if (s[t] && null != (i = s[t](r, e, n))) return i;
    }
  }function vl(t) {
    var e = t._model,
        n = t._scheduler;n.restorePipelines(e), n.prepareStageTasks(), Sl(t, "component", e, n), Sl(t, "chart", e, n), n.plan();
  }function ml(t, e, n, i, r) {
    function a(i) {
      i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
    }var o = t._model;if (!i) return void ky(t._componentsViews.concat(t._chartsViews), a);var s = {};s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];var l = { mainType: i, query: s };r && (l.subType = r);var u = n.excludeSeriesId;null != u && (u = F(zi(u))), o && o.eachComponent(l, function (e) {
      u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
    }, t);
  }function yl(t, e) {
    var n = t._chartsMap,
        i = t._scheduler;e.eachSeries(function (t) {
      i.updateStreamModes(t, n[t.__viewId]);
    });
  }function _l(t, e) {
    var n = t.type,
        i = t.escapeConnect,
        r = Zy[n],
        a = r.actionInfo,
        l = (a.update || "update").split(":"),
        u = l.pop();l = null != l[0] && Py(l[0]), this[Gy] = !0;var h = [t],
        c = !1;t.batch && (c = !0, h = p(t.batch, function (e) {
      return e = s(o({}, e), t), e.batch = null, e;
    }));var d,
        f = [],
        g = "highlight" === n || "downplay" === n;ky(h, function (t) {
      d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? ml(this, u, t, "series") : l && ml(this, u, t, l.main, l.sub);
    }, this), "none" === u || g || l || (this[Xy] ? (vl(this), qy.update.call(this, t), this[Xy] = !1) : qy[u].call(this, t)), d = c ? { type: a.event || n, escapeConnect: i, batch: f } : f[0], this[Gy] = !1, !e && this._messageCenter.trigger(d.type, d);
  }function xl(t) {
    for (var e = this._pendingActions; e.length;) {
      var n = e.shift();_l.call(this, n, t);
    }
  }function wl(t) {
    !t && this.trigger("updated");
  }function bl(t, e) {
    t.on("rendered", function () {
      e.trigger("rendered"), !t.animation.isFinished() || e[Xy] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
    });
  }function Sl(t, e, n, i) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
          r = s[e];if (!r) {
        var h = Py(t.type),
            c = a ? Gm.getClass(h.main, h.sub) : Es.getClass(h.sub);r = new c(), r.init(n, u), s[e] = r, o.push(r), l.add(r.group);
      }t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }, !a && i.prepareView(r, t, n, u);
    }for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) {
      o[h].__alive = !1;
    }a ? n.eachComponent(function (t, e) {
      "series" !== t && r(e);
    }) : n.eachSeries(r);for (var h = 0; h < o.length;) {
      var c = o[h];c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
    }
  }function Ml(t) {
    t.clearColorPalette(), t.eachSeries(function (t) {
      t.clearColorPalette();
    });
  }function Tl(t, e, n, i) {
    Cl(t, e, n, i), ky(t._chartsViews, function (t) {
      t.__alive = !1;
    }), Il(t, e, n, i), ky(t._chartsViews, function (t) {
      t.__alive || t.remove(e, n);
    });
  }function Cl(t, e, n, i, r) {
    ky(r || t._componentsViews, function (t) {
      var r = t.__model;t.render(r, e, n, i), Pl(r, t);
    });
  }function Il(t, e, n, i, r) {
    var a,
        o = t._scheduler;e.eachSeries(function (e) {
      var n = t._chartsMap[e.__viewId];n.__alive = !0;var s = n.renderTask;o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), Pl(e, n), Al(e, n);
    }), o.unfinished |= a, Dl(t._zr, e), ey(t._zr.dom, e);
  }function kl(t, e) {
    ky(Jy, function (n) {
      n(t, e);
    });
  }function Dl(t, e) {
    var n = t.storage,
        i = 0;n.traverse(function (t) {
      t.isGroup || i++;
    }), i > e.get("hoverLayerThreshold") && !Rd.node && n.traverse(function (t) {
      t.isGroup || (t.useHoverLayer = !0);
    });
  }function Al(t, e) {
    var n = t.get("blendMode") || null;e.group.traverse(function (t) {
      t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
        t.setStyle("blend", n);
      });
    });
  }function Pl(t, e) {
    var n = t.get("z"),
        i = t.get("zlevel");e.group.traverse(function (t) {
      "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
    });
  }function Ol(t) {
    var e = t._coordSysMgr;return o(new Uo(t), { getCoordinateSystems: y(e.getCoordinateSystems, e), getComponentByElement: function getComponentByElement(e) {
        for (; e;) {
          var n = e.__ecComponentInfo;if (null != n) return t._model.getComponent(n.mainType, n.index);e = e.parent;
        }
      } });
  }function Ll() {
    this.eventInfo;
  }function El(t) {
    function e(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i[a] = e;
      }
    }var n = 0,
        i = 1,
        r = 2,
        a = "__connectUpdateStatus";ky($y, function (o, s) {
      t._messageCenter.on(s, function (o) {
        if (r_[t.group] && t[a] !== n) {
          if (o && o.escapeConnect) return;var s = t.makeActionFromEvent(o),
              l = [];ky(i_, function (e) {
            e !== t && e.group === t.group && l.push(e);
          }), e(l, n), ky(l, function (t) {
            t[a] !== i && t.dispatchAction(s);
          }), e(l, r);
        }
      });
    });
  }function Bl(t, e, n) {
    var i = Nl(t);if (i) return i;var r = new pl(t, e, n);return r.id = "ec_" + a_++, i_[r.id] = r, Ui(t, s_, r.id), El(r), r;
  }function zl(t) {
    if (x(t)) {
      var e = t;t = null, ky(e, function (e) {
        null != e.group && (t = e.group);
      }), t = t || "g_" + o_++, ky(e, function (e) {
        e.group = t;
      });
    }return r_[t] = !0, t;
  }function Rl(t) {
    r_[t] = !1;
  }function Fl(t) {
    "string" == typeof t ? t = i_[t] : t instanceof pl || (t = Nl(t)), t instanceof pl && !t.isDisposed() && t.dispose();
  }function Nl(t) {
    return i_[Zi(t, s_)];
  }function Hl(t) {
    return i_[t];
  }function Vl(t, e) {
    e_[t] = e;
  }function Wl(t) {
    Qy.push(t);
  }function Gl(t, e) {
    $l(Ky, t, e, By);
  }function Xl(t) {
    Jy.push(t);
  }function jl(t, e, n) {
    "function" == typeof e && (n = e, e = "");var i = Ay(t) ? t.type : [t, t = { event: e }][0];t.event = (t.event || i).toLowerCase(), e = t.event, Iy(jy.test(i) && jy.test(e)), Zy[i] || (Zy[i] = { action: n, actionInfo: t }), $y[e] = i;
  }function Yl(t, e) {
    Zo.register(t, e);
  }function ql(t) {
    var e = Zo.get(t);return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
  }function Ul(t, e) {
    $l(t_, t, e, Ry, "layout");
  }function Zl(t, e) {
    $l(t_, t, e, Ny, "visual");
  }function $l(t, e, n, i, r) {
    (Dy(e) || Ay(e)) && (n = e, e = i);var a = Vs.wrapStageHandler(n, r);return a.__prio = e, a.__raw = n, t.push(a), a;
  }function Kl(t, e) {
    n_[t] = e;
  }function Ql(t) {
    return em.extend(t);
  }function Jl(t) {
    return Gm.extend(t);
  }function tu(t) {
    return Wm.extend(t);
  }function eu(t) {
    return Es.extend(t);
  }function nu(t) {
    n("createCanvas", t);
  }function iu(t, e, n) {
    Ty.registerMap(t, e, n);
  }function ru(t) {
    var e = Ty.retrieveMap(t);return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };
  }function au(t) {
    return t;
  }function ou(t, e, n, i, r) {
    this._old = t, this._new = e, this._oldKeyGetter = n || au, this._newKeyGetter = i || au, this.context = r;
  }function su(t, e, n, i, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[i](t[a], a),
          s = e[o];null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));
    }
  }function lu(t) {
    var e = {},
        n = e.encode = {},
        i = F(),
        r = [],
        a = [];f(t.dimensions, function (e) {
      var o = t.getDimensionInfo(e),
          s = o.coordDim;if (s) {
        var l = n[s];n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), hu(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e);
      }h_.each(function (t, e) {
        var i = n[e];n.hasOwnProperty(e) || (i = n[e] = []);var r = o.otherDims[e];null != r && r !== !1 && (i[r] = o.name);
      });
    });var o = [],
        s = {};i.each(function (t, e) {
      var i = n[e];s[e] = i[0], o = o.concat(i);
    }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;var l = n.label;l && l.length && (r = l.slice());var u = n.tooltip;return u && u.length ? a = u.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e;
  }function uu(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
  }function hu(t) {
    return !("ordinal" === t || "time" === t);
  }function cu(t) {
    return t._rawCount > 65535 ? g_ : v_;
  }function du(t) {
    var e = t.constructor;return e === Array ? t.slice() : new e(t);
  }function fu(t, e) {
    f(m_.concat(e.__wrappedMethods || []), function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t.__wrappedMethods = e.__wrappedMethods, f(y_, function (n) {
      t[n] = i(e[n]);
    }), t._calculationInfo = o(e._calculationInfo);
  }function pu(t) {
    var e = t._invertedIndicesMap;f(e, function (n, i) {
      var r = t._dimensionInfos[i],
          a = r.ordinalMeta;if (a) {
        n = e[i] = new g_(a.categories.length);for (var o = 0; o < n.length; o++) {
          n[o] = 0 / 0;
        }for (var o = 0; o < t._count; o++) {
          n[t.get(i, o)] = o;
        }
      }
    });
  }function gu(t, e, n) {
    var i;if (null != e) {
      var r = t._chunkSize,
          a = Math.floor(n / r),
          o = n % r,
          s = t.dimensions[e],
          l = t._storage[s][a];if (l) {
        i = l[o];var u = t._dimensionInfos[s].ordinalMeta;u && u.categories.length && (i = u.categories[i]);
      }
    }return i;
  }function vu(t) {
    return t;
  }function mu(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1;
  }function yu(t, e) {
    var n = t._idList[e];return null == n && (n = gu(t, t._idDimIdx, e)), null == n && (n = f_ + e), n;
  }function _u(t) {
    return x(t) || (t = [t]), t;
  }function xu(t, e) {
    var n = t.dimensions,
        i = new __(p(n, t.getDimensionInfo, t), t.hostModel);fu(i, t);for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
      var s = n[o];a[s] && (u(e, s) >= 0 ? (r[s] = wu(a[s]), i._rawExtent[s] = bu(), i._extent[s] = null) : r[s] = a[s]);
    }return i;
  }function wu(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) {
      e[n] = du(t[n]);
    }return e;
  }function bu() {
    return [1 / 0, -1 / 0];
  }function Su(t, e, n) {
    function r(t, e, n) {
      null != h_.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0));
    }ko.isInstance(e) || (e = ko.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();for (var a = (n.dimsDef || []).slice(), l = F(n.encodeDef), u = F(), h = F(), c = [], d = Mu(e, t, a, n.dimCount), p = 0; d > p; p++) {
      var g = a[p] = o({}, S(a[p]) ? a[p] : { name: a[p] }),
          v = g.name,
          m = c[p] = { otherDims: {} };null != v && null == u.get(v) && (m.name = m.displayName = v, u.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName);
    }l.each(function (t, e) {
      if (t = zi(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);var n = l.set(e, []);f(t, function (t, i) {
        b(t) && (t = u.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i));
      });
    });var y = 0;f(t, function (t) {
      var e, t, n, a;if (b(t)) e = t, t = {};else {
        e = t.name;var o = t.ordinalMeta;t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
      }var u = l.get(e);if (u !== !1) {
        var u = zi(u);if (!u.length) for (var h = 0; h < (n && n.length || 1); h++) {
          for (; y < c.length && null != c[y].coordDim;) {
            y++;
          }y < c.length && u.push(y++);
        }f(u, function (i, o) {
          var l = c[i];if (r(s(l, t), e, o), null == l.name && n) {
            var u = n[o];!S(u) && (u = { name: u }), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip;
          }a && s(l.otherDims, a);
        });
      }
    });var _ = n.generateCoord,
        x = n.generateCoordCount,
        w = null != x;x = _ ? x || 1 : 0;for (var M = _ || "value", T = 0; d > T; T++) {
      var m = c[T] = c[T] || {},
          C = m.coordDim;null == C && (m.coordDim = Tu(M, h, w), m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = Tu(m.coordDim, u)), null == m.type && No(e, T, m.name) && (m.type = "ordinal");
    }return c;
  }function Mu(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);return f(e, function (t) {
      var e = t.dimsDef;e && (r = Math.max(r, e.length));
    }), r;
  }function Tu(t, e, n) {
    if (n || null != e.get(t)) {
      for (var i = 0; null != e.get(t + i);) {
        i++;
      }t += i;
    }return e.set(t, !0), t;
  }function Cu(t, e, n) {
    n = n || {};var i,
        r,
        a,
        o,
        s = n.byIndex,
        l = n.stackedCoordDimension,
        u = !(!t || !t.get("stack"));
    if (f(e, function (t, n) {
      b(t) && (e[n] = t = { name: t }), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
    }), !r || s || i || (s = !0), r) {
      a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);var h = r.coordDim,
          c = r.type,
          d = 0;f(e, function (t) {
        t.coordDim === h && d++;
      }), e.push({ name: a, coordDim: h, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 }), d++, e.push({ name: o, coordDim: o, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 });
    }return { stackedDimension: r && r.name, stackedByDimension: i && i.name, isStackedByIndex: s, stackedOverDimension: o, stackResultDimension: a };
  }function Iu(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension");
  }function ku(t, e) {
    return Iu(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
  }function Du(t, e, n) {
    n = n || {}, ko.isInstance(t) || (t = ko.seriesDataToSource(t));var i,
        r = e.get("coordinateSystem"),
        a = Zo.get(r),
        o = Co(e);o && (i = p(o.coordSysDims, function (t) {
      var e = { name: t },
          n = o.axisMap.get(t);if (n) {
        var i = n.get("type");e.type = uu(i);
      }return e;
    })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);var s,
        l,
        u = b_(t, { coordDimensions: i, generateCoord: n.generateCoord });o && f(u, function (t, e) {
      var n = t.coordDim,
          i = o.categoryAxisMap.get(n);i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
    }), l || null == s || (u[s].otherDims.itemName = 0);var h = Cu(e, u),
        c = new __(u, e);c.setCalculationInfo(h);var d = null != s && Au(t) ? function (t, e, n, i) {
      return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
    } : null;return c.hasItemOption = !1, c.initData(t, null, d), c;
  }function Au(t) {
    if (t.sourceFormat === sm) {
      var e = Pu(t.data || []);return null != e && !x(Fi(e));
    }
  }function Pu(t) {
    for (var e = 0; e < t.length && null == t[e];) {
      e++;
    }return t[e];
  }function Ou(t) {
    this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);
  }function Lu(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;
  }function Eu(t) {
    return t._map || (t._map = F(t.categories));
  }function Bu(t) {
    return S(t) && null != t.value ? t.value : t + "";
  }function zu(t, e, n, i) {
    var r = {},
        a = t[1] - t[0],
        o = r.interval = ao(a / e, !0);null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);var s = r.intervalPrecision = Ru(o),
        l = r.niceTickExtent = [C_(Math.ceil(t[0] / o) * o, s), C_(Math.floor(t[1] / o) * o, s)];return Nu(l, t), r;
  }function Ru(t) {
    return Ka(t) + 2;
  }function Fu(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }function Nu(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Fu(t, 0, e), Fu(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
  }function Hu(t, e, n, i) {
    var r = [];if (!t) return r;var a = 1e4;e[0] < n[0] && r.push(e[0]);for (var o = n[0]; o <= n[1] && (r.push(o), o = C_(o + t, i), o !== r[r.length - 1]);) {
      if (r.length > a) return [];
    }return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r;
  }function Vu(t) {
    return t.get("stack") || D_ + t.seriesIndex;
  }function Wu(t) {
    return t.dim + t.index;
  }function Gu(t, e) {
    var n = [];return e.eachSeriesByType(t, function (t) {
      qu(t) && !Uu(t) && n.push(t);
    }), n;
  }function Xu(t) {
    var e = [];return f(t, function (t) {
      var n = t.getData(),
          i = t.coordinateSystem,
          r = i.getBaseAxis(),
          a = r.getExtent(),
          o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
          s = qa(t.get("barWidth"), o),
          l = qa(t.get("barMaxWidth"), o),
          u = t.get("barGap"),
          h = t.get("barCategoryGap");e.push({ bandWidth: o, barWidth: s, barMaxWidth: l, barGap: u, barCategoryGap: h, axisKey: Wu(r), stackId: Vu(t) });
    }), ju(e);
  }function ju(t) {
    var e = {};f(t, function (t) {
      var n = t.axisKey,
          i = t.bandWidth,
          r = e[n] || { bandWidth: i, remainedWidth: i, autoWidthCount: 0, categoryGap: "20%", gap: "30%", stacks: {} },
          a = r.stacks;e[n] = r;var o = t.stackId;a[o] || r.autoWidthCount++, a[o] = a[o] || { width: 0, maxWidth: 0 };var s = t.barWidth;s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);var l = t.barMaxWidth;l && (a[o].maxWidth = l);var u = t.barGap;null != u && (r.gap = u);var h = t.barCategoryGap;null != h && (r.categoryGap = h);
    });var n = {};return f(e, function (t, e) {
      n[e] = {};var i = t.stacks,
          r = t.bandWidth,
          a = qa(t.categoryGap, r),
          o = qa(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          u = (s - a) / (l + (l - 1) * o);u = Math.max(u, 0), f(i, function (t) {
        var e = t.maxWidth;e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--);
      }), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);var h,
          c = 0;f(i, function (t) {
        t.width || (t.width = u), h = t, c += t.width * (1 + o);
      }), h && (c -= h.width * o);var d = -c / 2;f(i, function (t, i) {
        n[e][i] = n[e][i] || { offset: d, width: t.width }, d += t.width * (1 + o);
      });
    }), n;
  }function Yu(t, e, n) {
    if (t && e) {
      var i = t[Wu(e)];return null != i && null != n && (i = i[Vu(n)]), i;
    }
  }function qu(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
  }function Uu(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }function Zu(t, e) {
    var n,
        i,
        r = e.getGlobalExtent();r[0] > r[1] ? (n = r[1], i = r[0]) : (n = r[0], i = r[1]);var a = e.toGlobalCoord(e.dataToCoord(0));return n > a && (a = n), a > i && (a = i), a;
  }function $u(t, e) {
    return j_(t, X_(e));
  }function Ku(t, e) {
    var n,
        i,
        r,
        a = t.type,
        o = e.getMin(),
        s = e.getMax(),
        l = null != o,
        u = null != s,
        h = t.getExtent();"ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), x(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = qa(i[0], 1), i[1] = qa(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : h[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : h[1] + i[1] * r), "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({ min: h[0], max: h[1] })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({ min: h[0], max: h[1] })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(I(o) || I(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !u && (s = 0));var c = e.ecModel;if (c && "time" === a) {
      var d,
          p = Gu("bar", c);if (f(p, function (t) {
        d |= t.getBaseAxis() === e.axis;
      }), d) {
        var g = Xu(p),
            v = Qu(o, s, e, g);o = v.min, s = v.max;
      }
    }return [o, s];
  }function Qu(t, e, n, i) {
    var r = n.axis.getExtent(),
        a = r[1] - r[0],
        o = Yu(i, n.axis);if (void 0 === o) return { min: t, max: e };var s = 1 / 0;f(o, function (t) {
      s = Math.min(t.offset, s);
    });var l = -1 / 0;f(o, function (t) {
      l = Math.max(t.offset + t.width, l);
    }), s = Math.abs(s), l = Math.abs(l);var u = s + l,
        h = e - t,
        c = 1 - (s + l) / a,
        d = h / c - h;return e += d * (l / u), t -= d * (s / u), { min: t, max: e };
  }function Ju(t, e) {
    var n = Ku(t, e),
        i = null != e.getMin(),
        r = null != e.getMax(),
        a = e.get("splitNumber");"log" === t.type && (t.base = e.get("logBase"));var o = t.type;t.setExtent(n[0], n[1]), t.niceExtent({ splitNumber: a, fixMin: i, fixMax: r, minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null, maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null });var s = e.get("interval");null != s && t.setInterval && t.setInterval(s);
  }function th(t, e) {
    if (e = e || t.get("type")) switch (e) {case "category":
        return new T_(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);case "value":
        return new k_();default:
        return (Ou.getClass(e) || k_).create(t);}
  }function eh(t) {
    var e = t.scale.getExtent(),
        n = e[0],
        i = e[1];return !(n > 0 && i > 0 || 0 > n && 0 > i);
  }function nh(t) {
    var e = t.getLabelModel().get("formatter"),
        n = "category" === t.type ? t.scale.getExtent()[0] : null;return "string" == typeof e ? e = function (e) {
      return function (n) {
        return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "");
      };
    }(e) : "function" == typeof e ? function (i, r) {
      return null != n && (r = i - n), e(ih(t, i), r);
    } : function (e) {
      return t.scale.getLabel(e);
    };
  }function ih(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e;
  }function rh(t) {
    var e = t.model,
        n = t.scale;if (e.get("axisLabel.show") && !n.isBlank()) {
      var i,
          r,
          a = "category" === t.type,
          o = n.getExtent();a ? r = n.count() : (i = n.getTicks(), r = i.length);var s,
          l = t.getLabelModel(),
          u = nh(t),
          h = 1;r > 40 && (h = Math.ceil(r / 40));for (var c = 0; r > c; c += h) {
        var d = i ? i[c] : o[0] + c,
            f = u(d),
            p = l.getTextRect(f),
            g = ah(p, l.get("rotate") || 0);s ? s.union(g) : s = g;
      }return s;
    }
  }function ah(t, e) {
    var n = e * Math.PI / 180,
        i = t.plain(),
        r = i.width,
        a = i.height,
        o = r * Math.cos(n) + a * Math.sin(n),
        s = r * Math.sin(n) + a * Math.cos(n),
        l = new gn(i.x, i.y, o, s);return l;
  }function oh(t, e) {
    if ("image" !== this.type) {
      var n = this.style,
          i = this.shape;i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1);
    }
  }function sh(t, e, n, i, r, a, o) {
    var s = 0 === t.indexOf("empty");s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));var l;return l = 0 === t.indexOf("image://") ? Kr(t.slice(8), new gn(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? $r(t.slice(7), {}, new gn(e, n, i, r), o ? "center" : "cover") : new ax({ shape: { symbolType: t, x: e, y: n, width: i, height: r } }), l.__isEmptyBrush = s, l.setColor = oh, l.setColor(a), l;
  }function lh(t) {
    return Du(t.getSource(), t);
  }function uh(t, e) {
    var n = e;Na.isInstance(e) || (n = new Na(e), c(n, K_));var i = th(n);return i.setExtent(t[0], t[1]), Ju(i, n), i;
  }function hh(t) {
    c(t, K_);
  }function ch(t, e) {
    return Math.abs(t - e) < lx;
  }function dh(t, e, n) {
    var i = 0,
        r = t[0];if (!r) return !1;for (var a = 1; a < t.length; a++) {
      var o = t[a];i += kr(r[0], r[1], o[0], o[1], e, n), r = o;
    }var s = t[0];return ch(r[0], s[0]) && ch(r[1], s[1]) || (i += kr(r[0], r[1], s[0], s[1], e, n)), 0 !== i;
  }function fh(t, e, n) {
    if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];else {
      var i = this.getBoundingRect();n = [i.x + i.width / 2, i.y + i.height / 2];
    }this.center = n;
  }function ph(t) {
    if (!t.UTF8Encoding) return t;var e = t.UTF8Scale;null == e && (e = 1024);for (var n = t.features, i = 0; i < n.length; i++) {
      for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
        var u = o[l];if ("Polygon" === a.type) o[l] = gh(u, s[l], e);else if ("MultiPolygon" === a.type) for (var h = 0; h < u.length; h++) {
          var c = u[h];u[h] = gh(c, s[l][h], e);
        }
      }
    }return t.UTF8Encoding = !1, t;
  }function gh(t, e, n) {
    for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
      var s = t.charCodeAt(o) - 64,
          l = t.charCodeAt(o + 1) - 64;s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n]);
    }return i;
  }function vh(t) {
    return "category" === t.type ? yh(t) : wh(t);
  }function mh(t, e) {
    return "category" === t.type ? xh(t, e) : { ticks: t.scale.getTicks() };
  }function yh(t) {
    var e = t.getLabelModel(),
        n = _h(t, e);return !e.get("show") || t.scale.isBlank() ? { labels: [], labelCategoryInterval: n.labelCategoryInterval } : n;
  }function _h(t, e) {
    var n = bh(t, "labels"),
        i = Ah(e),
        r = Sh(n, i);if (r) return r;var a, o;return w(i) ? a = Dh(t, i) : (o = "auto" === i ? Th(t) : i, a = kh(t, o)), Mh(n, i, { labels: a, labelCategoryInterval: o });
  }function xh(t, e) {
    var n = bh(t, "ticks"),
        i = Ah(e),
        r = Sh(n, i);if (r) return r;var a, o;if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = Dh(t, i, !0);else if ("auto" === i) {
      var s = _h(t, t.getLabelModel());o = s.labelCategoryInterval, a = p(s.labels, function (t) {
        return t.tickValue;
      });
    } else o = i, a = kh(t, o, !0);return Mh(n, i, { ticks: a, tickCategoryInterval: o });
  }function wh(t) {
    var e = t.scale.getTicks(),
        n = nh(t);return { labels: p(e, function (e, i) {
        return { formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e };
      }) };
  }function bh(t, e) {
    return hx(t)[e] || (hx(t)[e] = []);
  }function Sh(t, e) {
    for (var n = 0; n < t.length; n++) {
      if (t[n].key === e) return t[n].value;
    }
  }function Mh(t, e, n) {
    return t.push({ key: e, value: n }), n;
  }function Th(t) {
    var e = hx(t).autoInterval;return null != e ? e : hx(t).autoInterval = t.calculateCategoryInterval();
  }function Ch(t) {
    var e = Ih(t),
        n = nh(t),
        i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
        r = t.scale,
        a = r.getExtent(),
        o = r.count();if (a[1] - a[0] < 1) return 0;var s = 1;o > 40 && (s = Math.max(1, Math.floor(o / 40)));for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
      var p = 0,
          g = 0,
          v = En(n(l), e.font, "center", "top");p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);
    }var m = d / h,
        y = f / c;isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);var _ = Math.max(0, Math.floor(Math.min(m, y))),
        x = hx(t.model),
        w = x.lastAutoInterval,
        b = x.lastTickCount;return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x.lastTickCount = o, x.lastAutoInterval = _), _;
  }function Ih(t) {
    var e = t.getLabelModel();return { axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0, labelRotate: e.get("rotate") || 0, font: e.getFont() };
  }function kh(t, e, n) {
    function i(t) {
      l.push(n ? t : { formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t });
    }var r = nh(t),
        a = t.scale,
        o = a.getExtent(),
        s = t.getLabelModel(),
        l = [],
        u = Math.max((e || 0) + 1, 1),
        h = o[0],
        c = a.count();0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));var d = { min: s.get("showMinLabel"), max: s.get("showMaxLabel") };d.min && h !== o[0] && i(o[0]);for (var f = h; f <= o[1]; f += u) {
      i(f);
    }return d.max && f !== o[1] && i(o[1]), l;
  }function Dh(t, e, n) {
    var i = t.scale,
        r = nh(t),
        a = [];return f(i.getTicks(), function (t) {
      var o = i.getLabel(t);e(t, o) && a.push(n ? t : { formattedLabel: r(t), rawLabel: o, tickValue: t });
    }), a;
  }function Ah(t) {
    var e = t.get("interval");return null == e ? "auto" : e;
  }function Ph(t, e) {
    var n = t[1] - t[0],
        i = e,
        r = n / i / 2;t[0] += r, t[1] -= r;
  }function Oh(t, e, n, i, r) {
    function a(t, e) {
      return h ? t > e : e > t;
    }var o = e.length;if (t.onBand && !i && o) {
      var s,
          l = t.getExtent();if (1 === o) e[0].coord = l[0], s = e[1] = { coord: l[0] };else {
        var u = e[1].coord - e[0].coord;f(e, function (t) {
          t.coord -= u / 2;var e = e || 0;e % 2 > 0 && (t.coord -= u / (2 * (e + 1)));
        }), s = { coord: e[o - 1].coord + u }, e.push(s);
      }var h = l[0] > l[1];a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({ coord: l[0] }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({ coord: l[1] });
    }
  }function Lh(t, e) {
    var n = t.mapDimension("defaultedLabel", !0),
        i = n.length;if (1 === i) return ws(t, e, n[0]);if (i) {
      for (var r = [], a = 0; a < n.length; a++) {
        var o = ws(t, e, n[a]);r.push(o);
      }return r.join(" ");
    }
  }function Eh(t, e, n) {
    Yf.call(this), this.updateData(t, e, n);
  }function Bh(t) {
    return [t[0] / 2, t[1] / 2];
  }function zh(t, e) {
    this.parent.drift(t, e);
  }function Rh() {
    !da(this) && Nh.call(this);
  }function Fh() {
    !da(this) && Hh.call(this);
  }function Nh() {
    if (!this.incremental && !this.useHoverLayer) {
      var t = this.__symbolOriginalScale,
          e = t[1] / t[0];this.animateTo({ scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)] }, 400, "elasticOut");
    }
  }function Hh() {
    this.incremental || this.useHoverLayer || this.animateTo({ scale: this.__symbolOriginalScale }, 400, "elasticOut");
  }function Vh(t) {
    this.group = new Yf(), this._symbolCtor = t || Eh;
  }function Wh(t, e, n, i) {
    return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"));
  }function Gh(t) {
    return null == t || S(t) || (t = { isIgnore: t }), t || {};
  }function Xh(t) {
    var e = t.hostModel;return { itemStyle: e.getModel("itemStyle").getItemStyle(["color"]), hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(), symbolRotate: e.get("symbolRotate"), symbolOffset: e.get("symbolOffset"), hoverAnimation: e.get("hoverAnimation"), labelModel: e.getModel("label"), hoverLabelModel: e.getModel("emphasis.label"), cursorStyle: e.get("cursor") };
  }function jh(t, e, n) {
    var i,
        r = t.getBaseAxis(),
        a = t.getOtherAxis(r),
        o = Yh(a, n),
        s = r.dim,
        l = a.dim,
        u = e.mapDimension(l),
        h = e.mapDimension(s),
        c = "x" === l || "radius" === l ? 1 : 0,
        d = p(t.dimensions, function (t) {
      return e.mapDimension(t);
    }),
        f = e.getCalculationInfo("stackResultDimension");return (i |= Iu(e, d[0])) && (d[0] = f), (i |= Iu(e, d[1])) && (d[1] = f), { dataDimsForPoint: d, valueStart: o, valueAxisDim: l, baseAxisDim: s, stacked: !!i, valueDim: u, baseDim: h, baseDataOffset: c, stackedOverDimension: e.getCalculationInfo("stackedOverDimension") };
  }function Yh(t, e) {
    var n = 0,
        i = t.scale.getExtent();return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n;
  }function qh(t, e, n, i) {
    var r = 0 / 0;t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);var a = t.baseDataOffset,
        o = [];return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o);
  }function Uh(t, e) {
    var n = [];return e.diff(t).add(function (t) {
      n.push({ cmd: "+", idx: t });
    }).update(function (t, e) {
      n.push({ cmd: "=", idx: e, idx1: t });
    }).remove(function (t) {
      n.push({ cmd: "-", idx: t });
    }).execute(), n;
  }function Zh(t) {
    return isNaN(t[0]) || isNaN(t[1]);
  }function $h(t, e, n, i, r, a, o, s, l, u) {
    return "none" !== u && u ? Kh.apply(this, arguments) : Qh.apply(this, arguments);
  }function Kh(t, e, n, i, r, a, o, s, l, u, h) {
    for (var c = 0, d = n, f = 0; i > f; f++) {
      var p = e[d];if (d >= r || 0 > d) break;if (Zh(p)) {
        if (h) {
          d += a;continue;
        }break;
      }if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);else if (l > 0) {
        var g = e[c],
            v = "y" === u ? 1 : 0,
            m = (p[v] - g[v]) * l;kx(Ax, g), Ax[v] = g[v] + m, kx(Px, p), Px[v] = p[v] - m, t.bezierCurveTo(Ax[0], Ax[1], Px[0], Px[1], p[0], p[1]);
      } else t.lineTo(p[0], p[1]);c = d, d += a;
    }return f;
  }function Qh(t, e, n, i, r, a, o, s, l, u, h) {
    for (var c = 0, d = n, f = 0; i > f; f++) {
      var p = e[d];if (d >= r || 0 > d) break;if (Zh(p)) {
        if (h) {
          d += a;continue;
        }break;
      }if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), kx(Ax, p);else if (l > 0) {
        var g = d + a,
            v = e[g];if (h) for (; v && Zh(e[g]);) {
          g += a, v = e[g];
        }var m = .5,
            y = e[c],
            v = e[g];if (!v || Zh(v)) kx(Px, p);else {
          Zh(v) && !h && (v = p), q(Dx, v, y);var _, x;if ("x" === u || "y" === u) {
            var w = "x" === u ? 0 : 1;_ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - v[w]);
          } else _ = ef(p, y), x = ef(p, v);m = x / (x + _), Ix(Px, p, Dx, -l * (1 - m));
        }Tx(Ax, Ax, s), Cx(Ax, Ax, o), Tx(Px, Px, s), Cx(Px, Px, o), t.bezierCurveTo(Ax[0], Ax[1], Px[0], Px[1], p[0], p[1]), Ix(Ax, p, Dx, l * m);
      } else t.lineTo(p[0], p[1]);c = d, d += a;
    }return f;
  }function Jh(t, e) {
    var n = [1 / 0, 1 / 0],
        i = [-1 / 0, -1 / 0];if (e) for (var r = 0; r < t.length; r++) {
      var a = t[r];a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1]);
    }return { min: e ? n : i, max: e ? i : n };
  }function tc(t, e) {
    if (t.length === e.length) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
            r = e[n];if (i[0] !== r[0] || i[1] !== r[1]) return;
      }return !0;
    }
  }function ec(t) {
    return "number" == typeof t ? t : t ? .5 : 0;
  }function nc(t) {
    var e = t.getGlobalExtent();if (t.onBand) {
      var n = t.getBandWidth() / 2 - 1,
          i = e[1] > e[0] ? 1 : -1;e[0] += i * n, e[1] -= i * n;
    }return e;
  }function ic(t, e, n) {
    if (!n.valueDim) return [];for (var i = [], r = 0, a = e.count(); a > r; r++) {
      i.push(qh(n, t, e, r));
    }return i;
  }function rc(t, e, n, i) {
    var r = nc(t.getAxis("x")),
        a = nc(t.getAxis("y")),
        o = t.getBaseAxis().isHorizontal(),
        s = Math.min(r[0], r[1]),
        l = Math.min(a[0], a[1]),
        u = Math.max(r[0], r[1]) - s,
        h = Math.max(a[0], a[1]) - l;if (n) s -= .5, u += .5, l -= .5, h += .5;else {
      var c = i.get("lineStyle.width") || 2,
          d = i.get("clipOverflow") ? c / 2 : Math.max(u, h);o ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d);
    }var f = new fv({ shape: { x: s, y: l, width: u, height: h } });return e && (f.shape[o ? "width" : "height"] = 0, Pa(f, { shape: { width: u, height: h } }, i)), f;
  }function ac(t, e, n, i) {
    var r = t.getAngleAxis(),
        a = t.getRadiusAxis(),
        o = a.getExtent().slice();o[0] > o[1] && o.reverse();var s = r.getExtent(),
        l = Math.PI / 180;n && (o[0] -= .5, o[1] += .5);var u = new sv({ shape: { cx: Ua(t.cx, 1), cy: Ua(t.cy, 1), r0: Ua(o[0], 1), r: Ua(o[1], 1), startAngle: -s[0] * l, endAngle: -s[1] * l, clockwise: r.inverse } });return e && (u.shape.endAngle = -s[0] * l, Pa(u, { shape: { endAngle: -s[1] * l } }, i)), u;
  }function oc(t, e, n, i) {
    return "polar" === t.type ? ac(t, e, n, i) : rc(t, e, n, i);
  }function sc(t, e, n) {
    for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
      var s = t[o + 1],
          l = t[o];a.push(l);var u = [];switch (n) {case "end":
          u[r] = s[r], u[1 - r] = l[1 - r], a.push(u);break;case "middle":
          var h = (l[r] + s[r]) / 2,
              c = [];u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(u), a.push(c);break;default:
          u[r] = l[r], u[1 - r] = s[1 - r], a.push(u);}
    }return t[o] && a.push(t[o]), a;
  }function lc(t, e) {
    var n = t.getVisual("visualMeta");if (n && n.length && t.count() && "cartesian2d" === e.type) {
      for (var i, r, a = n.length - 1; a >= 0; a--) {
        var o = n[a].dimension,
            s = t.dimensions[o],
            l = t.getDimensionInfo(s);if (i = l && l.coordDim, "x" === i || "y" === i) {
          r = n[a];break;
        }
      }if (r) {
        var u = e.getAxis(i),
            h = p(r.stops, function (t) {
          return { coord: u.toGlobalCoord(u.dataToCoord(t.value)), color: t.color };
        }),
            c = h.length,
            d = r.outerColors.slice();c && h[0].coord > h[c - 1].coord && (h.reverse(), d.reverse());var g = 10,
            v = h[0].coord - g,
            m = h[c - 1].coord + g,
            y = m - v;if (.001 > y) return "transparent";f(h, function (t) {
          t.offset = (t.coord - v) / y;
        }), h.push({ offset: c ? h[c - 1].offset : .5, color: d[1] || "transparent" }), h.unshift({ offset: c ? h[0].offset : .5, color: d[0] || "transparent" });var _ = new xv(0, 0, 0, 0, h, !0);return _[i] = v, _[i + "2"] = m, _;
      }
    }
  }function uc(t, e, n) {
    var i = t.get("showAllSymbol"),
        r = "auto" === i;if (!i || r) {
      var a = n.getAxesByScale("ordinal")[0];if (a && (!r || !hc(a, e))) {
        var o = e.mapDimension(a.dim),
            s = {};return f(a.getViewLabels(), function (t) {
          s[t.tickValue] = 1;
        }), function (t) {
          return !s.hasOwnProperty(e.get(o, t));
        };
      }
    }
  }function hc(t, e) {
    var n = t.getExtent(),
        i = Math.abs(n[1] - n[0]) / t.scale.count();isNaN(i) && (i = 0);for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a) {
      if (1.5 * Eh.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
    }return !0;
  }function cc(t) {
    return this._axes[t];
  }function dc(t) {
    Nx.call(this, t);
  }function fc(t, e) {
    return e.type || (e.data ? "category" : "value");
  }function pc(t, e) {
    return t.getCoordSysModel() === e;
  }function gc(t, e, n) {
    this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t;
  }function vc(t, e, n, i) {
    function r(t) {
      return t.dim + "_" + t.index;
    }n.getAxesOnZeroOf = function () {
      return a ? [a] : [];
    };var a,
        o = t[e],
        s = n.model,
        l = s.get("axisLine.onZero"),
        u = s.get("axisLine.onZeroAxisIndex");if (l) {
      if (null != u) mc(o[u]) && (a = o[u]);else for (var h in o) {
        if (o.hasOwnProperty(h) && mc(o[h]) && !i[r(o[h])]) {
          a = o[h];break;
        }
      }a && (i[r(a)] = !0);
    }
  }function mc(t) {
    return t && "category" !== t.type && "time" !== t.type && eh(t);
  }function yc(t, e) {
    var n = t.getExtent(),
        i = n[0] + n[1];t.toGlobalCoord = "x" === t.dim ? function (t) {
      return t + e;
    } : function (t) {
      return i - t + e;
    }, t.toLocalCoord = "x" === t.dim ? function (t) {
      return t - e;
    } : function (t) {
      return i - t + e;
    };
  }function _c(t) {
    return p(Ux, function (e) {
      var n = t.getReferringComponents(e)[0];return n;
    });
  }function xc(t) {
    return "cartesian2d" === t.get("coordinateSystem");
  }function wc(t) {
    var e = { componentType: t.mainType, componentIndex: t.componentIndex };return e[t.mainType + "Index"] = t.componentIndex, e;
  }function bc(t, e, n, i) {
    var r,
        a,
        o = to(n - t.rotation),
        s = i[0] > i[1],
        l = "start" === e && !s || "start" !== e && s;return eo(o - Zx / 2) ? (a = l ? "bottom" : "top", r = "center") : eo(o - 1.5 * Zx) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * Zx > o && o > Zx / 2 ? l ? "left" : "right" : l ? "right" : "left"), { rotation: o, textAlign: r, textVerticalAlign: a };
  }function Sc(t) {
    var e = t.get("tooltip");return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
  }function Mc(t, e, n) {
    var i = t.get("axisLabel.showMinLabel"),
        r = t.get("axisLabel.showMaxLabel");e = e || [], n = n || [];var a = e[0],
        o = e[1],
        s = e[e.length - 1],
        l = e[e.length - 2],
        u = n[0],
        h = n[1],
        c = n[n.length - 1],
        d = n[n.length - 2];i === !1 ? (Tc(a), Tc(u)) : Cc(a, o) && (i ? (Tc(o), Tc(h)) : (Tc(a), Tc(u))), r === !1 ? (Tc(s), Tc(c)) : Cc(l, s) && (r ? (Tc(l), Tc(d)) : (Tc(s), Tc(c)));
  }function Tc(t) {
    t && (t.ignore = !0);
  }function Cc(t, e) {
    var n = t && t.getBoundingRect().clone(),
        i = e && e.getBoundingRect().clone();if (n && i) {
      var r = be([]);return Ce(r, r, -t.rotation), n.applyTransform(Me([], r, t.getLocalTransform())), i.applyTransform(Me([], r, e.getLocalTransform())), n.intersect(i);
    }
  }function Ic(t) {
    return "middle" === t || "center" === t;
  }function kc(t, e, n) {
    var i = e.axis;if (e.get("axisTick.show") && !i.scale.isBlank()) {
      for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), u = [], h = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
        var p = l[f].coord;u[0] = p, u[1] = 0, h[0] = p, h[1] = n.tickDirection * o, c && (ae(u, u, c), ae(h, h, c));var g = new pv(ta({ anid: "tick_" + l[f].tickValue, shape: { x1: u[0], y1: u[1], x2: h[0], y2: h[1] }, style: s(a.getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") }), z2: 2, silent: !0 }));t.group.add(g), d.push(g);
      }return d;
    }
  }function Dc(t, e, n) {
    var i = e.axis,
        r = k(n.axisLabelShow, e.get("axisLabel.show"));if (r && !i.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
          o = a.get("margin"),
          s = i.getViewLabels(),
          l = (k(n.labelRotate, a.get("rotate")) || 0) * Zx / 180,
          u = Qx(n.rotation, l, n.labelDirection),
          h = e.getCategories(!0),
          c = [],
          d = Sc(e),
          p = e.get("triggerEvent");return f(s, function (r, s) {
        var l = r.tickValue,
            f = r.formattedLabel,
            g = r.rawLabel,
            v = a;h && h[l] && h[l].textStyle && (v = new Na(h[l].textStyle, a, e.ecModel));var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
            y = i.dataToCoord(l),
            _ = [y, n.labelOffset + n.labelDirection * o],
            x = new iv({ anid: "label_" + l, position: _, rotation: u.rotation, silent: d, z2: 10 });xa(x.style, v, { text: f, textAlign: v.getShallow("align", !0) || u.textAlign, textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign, textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m }), p && (x.eventData = wc(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform();
      }), c;
    }
  }function Ac(t, e) {
    var n = { axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {} };return Pc(n, t, e), n.seriesInvolved && Lc(n, t), n;
  }function Pc(t, e, n) {
    var i = e.getComponent("tooltip"),
        r = e.getComponent("axisPointer"),
        a = r.get("link", !0) || [],
        o = [];Jx(n.getCoordinateSystems(), function (n) {
      function s(i, s, l) {
        var h = l.model.getModel("axisPointer", r),
            d = h.get("show");if (d && ("auto" !== d || i || Nc(h))) {
          null == s && (s = h.get("triggerTooltip")), h = i ? Oc(l, c, r, e, i, s) : h;var f = h.get("snap"),
              p = Hc(l.model),
              g = s || f || "category" === l.type,
              v = t.axesInfo[p] = { key: p, axis: l, coordSys: n, axisPointerModel: h, triggerTooltip: s, involveSeries: g, snap: f, useHandle: Nc(h), seriesModels: [] };u[p] = v, t.seriesInvolved |= g;var m = Ec(a, l);if (null != m) {
            var y = o[m] || (o[m] = { axesInfo: {} });y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y;
          }
        }
      }if (n.axisPointerEnabled) {
        var l = Hc(n.model),
            u = t.coordSysAxesInfo[l] = {};t.coordSysMap[l] = n;var h = n.model,
            c = h.getModel("tooltip", i);if (Jx(n.getAxes(), tw(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
          var d = "axis" === c.get("trigger"),
              f = "cross" === c.get("axisPointer.type"),
              p = n.getTooltipAxes(c.get("axisPointer.axis"));(d || f) && Jx(p.baseAxes, tw(s, f ? "cross" : !0, d)), f && Jx(p.otherAxes, tw(s, "cross", !1));
        }
      }
    });
  }function Oc(t, e, n, r, a, o) {
    var l = e.getModel("axisPointer"),
        u = {};Jx(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
      u[t] = i(l.get(t));
    }), u.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (u.type = "line");var h = u.label || (u.label = {});if (null == h.show && (h.show = !1), "cross" === a) {
      var c = l.get("label.show");if (h.show = null != c ? c : !0, !o) {
        var d = u.lineStyle = l.get("crossStyle");d && s(h, d.textStyle);
      }
    }return t.model.getModel("axisPointer", new Na(u, n, r));
  }function Lc(t, e) {
    e.eachSeries(function (e) {
      var n = e.coordinateSystem,
          i = e.get("tooltip.trigger", !0),
          r = e.get("tooltip.show", !0);n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !1 && Jx(t.coordSysAxesInfo[Hc(n.model)], function (t) {
        var i = t.axis;n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count());
      });
    }, this);
  }function Ec(t, e) {
    for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
      var a = t[r] || {};if (Bc(a[i + "AxisId"], n.id) || Bc(a[i + "AxisIndex"], n.componentIndex) || Bc(a[i + "AxisName"], n.name)) return r;
    }
  }function Bc(t, e) {
    return "all" === t || x(t) && u(t, e) >= 0 || t === e;
  }function zc(t) {
    var e = Rc(t);if (e) {
      var n = e.axisPointerModel,
          i = e.axis.scale,
          r = n.option,
          a = n.get("status"),
          o = n.get("value");null != o && (o = i.parse(o));var s = Nc(n);null == a && (r.status = s ? "show" : "hide");var l = i.getExtent().slice();l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
    }
  }function Rc(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;return e && e.axesInfo[Hc(t)];
  }function Fc(t) {
    var e = Rc(t);return e && e.axisPointerModel;
  }function Nc(t) {
    return !!t.get("handle.show");
  }function Hc(t) {
    return t.type + "||" + t.id;
  }function Vc(t, e, n, i, r, a) {
    var o = ew.getAxisPointerClass(t.axisPointerClass);if (o) {
      var s = Fc(e);s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : Wc(t, i);
    }
  }function Wc(t, e, n) {
    var i = t._axisPointer;i && i.dispose(e, n), t._axisPointer = null;
  }function Gc(t, e, n) {
    n = n || {};var i = t.coordinateSystem,
        r = e.axis,
        a = {},
        o = r.getAxesOnZeroOf()[0],
        s = r.position,
        l = o ? "onZero" : s,
        u = r.dim,
        h = i.getRect(),
        c = [h.x, h.x + h.width, h.y, h.y + h.height],
        d = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
        f = e.get("offset") || 0,
        p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
    }a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);var v = { top: -1, bottom: 1, left: -1, right: 1 };a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), k(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);var m = e.get("axisLabel.rotate");return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a;
  }function Xc(t, e, n, i, r) {
    var a = t.axis;if (!a.scale.isBlank() && a.containData(e)) {
      if (!t.involveSeries) return void n.showPointer(t, e);var s = jc(e, t),
          l = s.payloadBatch,
          u = s.snapToValue;l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(u) && null != u && (e = u), n.showPointer(t, e, l, r), n.showTooltip(t, s, u);
    }
  }function jc(t, e) {
    var n = e.axis,
        i = n.dim,
        r = t,
        a = [],
        o = Number.MAX_VALUE,
        s = -1;return sw(e.seriesModels, function (e) {
      var l,
          u,
          h = e.getData().mapDimension(i, !0);if (e.getAxisTooltipData) {
        var c = e.getAxisTooltipData(h, t, n);u = c.dataIndices, l = c.nestestValue;
      } else {
        if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;l = e.getData().get(h[0], u[0]);
      }if (null != l && isFinite(l)) {
        var d = t - l,
            f = Math.abs(d);o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), sw(u, function (t) {
          a.push({ seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t) });
        }));
      }
    }), { payloadBatch: a, snapToValue: r };
  }function Yc(t, e, n, i) {
    t[e.key] = { value: n, payloadBatch: i };
  }function qc(t, e, n, i) {
    var r = n.payloadBatch,
        a = e.axis,
        o = a.model,
        s = e.axisPointerModel;if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
          u = Hc(l),
          h = t.map[u];h || (h = t.map[u] = { coordSysId: l.id, coordSysIndex: l.componentIndex, coordSysType: l.type, coordSysMainType: l.mainType, dataByAxis: [] }, t.list.push(h)), h.dataByAxis.push({ axisDim: a.dim, axisIndex: o.componentIndex, axisType: o.type, axisId: o.id, value: i, valueLabelOpt: { precision: s.get("label.precision"), formatter: s.get("label.formatter") }, seriesDataIndices: r.slice() });
    }
  }function Uc(t, e, n) {
    var i = n.axesInfo = [];sw(e, function (e, n) {
      var r = e.axisPointerModel.option,
          a = t[n];a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({ axisDim: e.axis.dim, axisIndex: e.axis.model.componentIndex, value: r.value });
    });
  }function Zc(t, e, n, i) {
    if (Jc(e) || !t.list.length) return void i({ type: "hideTip" });var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};i({ type: "showTip", escapeConnect: !0, x: e[0], y: e[1], tooltipOption: n.tooltipOption, position: n.position, dataIndexInside: r.dataIndexInside, dataIndex: r.dataIndex, seriesIndex: r.seriesIndex, dataByCoordSys: t.list });
  }function $c(t, e, n) {
    var i = n.getZr(),
        r = "axisPointerLastHighlights",
        a = uw(i)[r] || {},
        o = uw(i)[r] = {};sw(t, function (t) {
      var e = t.axisPointerModel.option;"show" === e.status && sw(e.seriesDataIndices, function (t) {
        var e = t.seriesIndex + " | " + t.dataIndex;o[e] = t;
      });
    });var s = [],
        l = [];f(a, function (t, e) {
      !o[e] && l.push(t);
    }), f(o, function (t, e) {
      !a[e] && s.push(t);
    }), l.length && n.dispatchAction({ type: "downplay", escapeConnect: !0, batch: l }), s.length && n.dispatchAction({ type: "highlight", escapeConnect: !0, batch: s });
  }function Kc(t, e) {
    for (var n = 0; n < (t || []).length; n++) {
      var i = t[n];if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;
    }
  }function Qc(t) {
    var e = t.axis.model,
        n = {},
        i = n.axisDim = t.axis.dim;return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n;
  }function Jc(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
  }function td(t, e, n) {
    if (!Rd.node) {
      var i = e.getZr();cw(i).records || (cw(i).records = {}), ed(i, e);var r = cw(i).records[t] || (cw(i).records[t] = {});r.handler = n;
    }
  }function ed(t, e) {
    function n(n, i) {
      t.on(n, function (n) {
        var r = ad(e);dw(cw(t).records, function (t) {
          t && i(t, n, r.dispatchAction);
        }), nd(r.pendings, e);
      });
    }cw(t).initialized || (cw(t).initialized = !0, n("click", _(rd, "click")), n("mousemove", _(rd, "mousemove")), n("globalout", id));
  }function nd(t, e) {
    var n,
        i = t.showTip.length,
        r = t.hideTip.length;i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n));
  }function id(t, e, n) {
    t.handler("leave", null, n);
  }function rd(t, e, n, i) {
    e.handler(t, n, i);
  }function ad(t) {
    var e = { showTip: [], hideTip: [] },
        n = function n(i) {
      var r = e[i.type];r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i));
    };return { dispatchAction: n, pendings: e };
  }function od(t, e) {
    if (!Rd.node) {
      var n = e.getZr(),
          i = (cw(n).records || {})[t];i && (cw(n).records[t] = null);
    }
  }function sd() {}function ld(t, e, n, i) {
    ud(pw(n).lastProp, i) || (pw(n).lastProp = i, e ? Aa(n, i, t) : (n.stopAnimation(), n.attr(i)));
  }function ud(t, e) {
    if (S(t) && S(e)) {
      var n = !0;return f(e, function (e, i) {
        n = n && ud(t[i], e);
      }), !!n;
    }return t === e;
  }function hd(t, e) {
    t[e.get("label.show") ? "show" : "hide"]();
  }function cd(t) {
    return { position: t.position.slice(), rotation: t.rotation || 0 };
  }function dd(t, e, n) {
    var i = e.get("z"),
        r = e.get("zlevel");t && t.traverse(function (t) {
      "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n);
    });
  }function fd(t) {
    var e,
        n = t.get("type"),
        i = t.getModel(n + "Style");return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e;
  }function pd(t, e, n, i, r) {
    var a = n.get("value"),
        o = vd(a, e.axis, e.ecModel, n.get("seriesDataIndices"), { precision: n.get("label.precision"), formatter: n.get("label.formatter") }),
        s = n.getModel("label"),
        l = Wv(s.get("padding") || 0),
        u = s.getFont(),
        h = En(o, u),
        c = r.position,
        d = h.width + l[1] + l[3],
        f = h.height + l[0] + l[2],
        p = r.align;
    "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);var g = r.verticalAlign;"bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), gd(c, d, f, i);var v = s.get("backgroundColor");v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = { shape: { x: 0, y: 0, width: d, height: f, r: s.get("borderRadius") }, position: c.slice(), style: { text: o, textFont: u, textFill: s.getTextColor(), textPosition: "inside", fill: v, stroke: s.get("borderColor") || "transparent", lineWidth: s.get("borderWidth") || 0, shadowBlur: s.get("shadowBlur"), shadowColor: s.get("shadowColor"), shadowOffsetX: s.get("shadowOffsetX"), shadowOffsetY: s.get("shadowOffsetY") }, z2: 10 };
  }function gd(t, e, n, i) {
    var r = i.getWidth(),
        a = i.getHeight();t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);
  }function vd(t, e, n, i, r) {
    t = e.scale.parse(t);var a = e.scale.getLabel(t, { precision: r.precision }),
        o = r.formatter;if (o) {
      var s = { value: ih(e, t), seriesData: [] };f(i, function (t) {
        var e = n.getSeriesByIndex(t.seriesIndex),
            i = t.dataIndexInside,
            r = e && e.getDataParams(i);r && s.seriesData.push(r);
      }), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s));
    }return a;
  }function md(t, e, n) {
    var i = we();return Ce(i, i, n.rotation), Te(i, i, n.position), La([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i);
  }function yd(t, e, n, i, r, a) {
    var o = $x.innerTextLayout(n.rotation, 0, n.labelDirection);n.labelMargin = r.get("label.margin"), pd(e, i, r, a, { position: md(i.axis, t, n), align: o.textAlign, verticalAlign: o.textVerticalAlign });
  }function _d(t, e, n) {
    return n = n || 0, { x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n] };
  }function xd(t, e, n) {
    return n = n || 0, { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
  }function wd(t, e) {
    var n = {};return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n);
  }function bd(t) {
    return "x" === t.dim ? 0 : 1;
  }function Sd(t) {
    var e = "cubic-bezier(0.23, 1, 0.32, 1)",
        n = "left " + t + "s " + e + ",top " + t + "s " + e;return p(ww, function (t) {
      return t + "transition:" + n;
    }).join(";");
  }function Md(t) {
    var e = [],
        n = t.get("fontSize"),
        i = t.getTextColor();return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), _w(["decoration", "align"], function (n) {
      var i = t.get(n);i && e.push("text-" + n + ":" + i);
    }), e.join(";");
  }function Td(t) {
    var e = [],
        n = t.get("transitionDuration"),
        i = t.get("backgroundColor"),
        r = t.getModel("textStyle"),
        a = t.get("padding");return n && e.push(Sd(n)), i && (Rd.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Ye(i)), e.push("filter:alpha(opacity=70)"))), _w(["width", "color", "radius"], function (n) {
      var i = "border-" + n,
          r = xw(i),
          a = t.get(r);null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"));
    }), e.push(Md(r)), null != a && e.push("padding:" + Wv(a).join("px ") + "px"), e.join(";") + ";";
  }function Cd(t, e) {
    if (Rd.wxa) return null;var n = document.createElement("div"),
        i = this._zr = e.getZr();this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;var r = this;n.onmouseenter = function () {
      r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0;
    }, n.onmousemove = function (e) {
      if (e = e || window.event, !r._enterable) {
        var n = i.handler;pe(t, e, !0), n.dispatch("mousemove", e);
      }
    }, n.onmouseleave = function () {
      r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1;
    };
  }function Id(t) {
    this._zr = t.getZr(), this._show = !1, this._hideTimeout;
  }function kd(t) {
    for (var e = t.pop(); t.length;) {
      var n = t.pop();n && (Na.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = { formatter: n }), e = new Na(n, e, e.ecModel));
    }return e;
  }function Dd(t, e) {
    return t.dispatchAction || y(e.dispatchAction, e);
  }function Ad(t, e, n, i, r, a, o) {
    var s = n.getOuterSize(),
        l = s.width,
        u = s.height;return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + u + o > r ? e -= u + o : e += o), [t, e];
  }function Pd(t, e, n, i, r) {
    var a = n.getOuterSize(),
        o = a.width,
        s = a.height;return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];
  }function Od(t, e, n) {
    var i = n[0],
        r = n[1],
        a = 5,
        o = 0,
        s = 0,
        l = e.width,
        u = e.height;switch (t) {case "inside":
        o = e.x + l / 2 - i / 2, s = e.y + u / 2 - r / 2;break;case "top":
        o = e.x + l / 2 - i / 2, s = e.y - r - a;break;case "bottom":
        o = e.x + l / 2 - i / 2, s = e.y + u + a;break;case "left":
        o = e.x - i - a, s = e.y + u / 2 - r / 2;break;case "right":
        o = e.x + l + a, s = e.y + u / 2 - r / 2;}return [o, s];
  }function Ld(t) {
    return "center" === t || "middle" === t;
  }var Ed = 2311,
      Bd = function Bd() {
    return Ed++;
  },
      zd = {};zd = "object" == (typeof wx === "undefined" ? "undefined" : _typeof(wx)) && "function" == typeof wx.getSystemInfoSync ? { browser: {}, os: {}, node: !1, wxa: !0, canvasSupported: !0, svgSupported: !1, touchEventsSupported: !0, domSupported: !1 } : "undefined" == typeof document && "undefined" != typeof self ? { browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0, domSupported: !1 } : "undefined" == typeof navigator ? { browser: {}, os: {}, node: !0, worker: !1, canvasSupported: !0, svgSupported: !0, domSupported: !1 } : e(navigator.userAgent);var Rd = zd,
      Fd = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1, "[object Canvas]": 1 },
      Nd = { "[object Int8Array]": 1, "[object Uint8Array]": 1, "[object Uint8ClampedArray]": 1, "[object Int16Array]": 1, "[object Uint16Array]": 1, "[object Int32Array]": 1, "[object Uint32Array]": 1, "[object Float32Array]": 1, "[object Float64Array]": 1 },
      Hd = Object.prototype.toString,
      Vd = Array.prototype,
      Wd = Vd.forEach,
      Gd = Vd.filter,
      Xd = Vd.slice,
      jd = Vd.map,
      Yd = Vd.reduce,
      qd = {},
      Ud = function Ud() {
    return qd.createCanvas();
  };qd.createCanvas = function () {
    return document.createElement("canvas");
  };var Zd,
      $d = "__ec_primitive__";R.prototype = { constructor: R, get: function get(t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null;
    }, set: function set(t, e) {
      return this.data[t] = e;
    }, each: function each(t, e) {
      void 0 !== e && (t = y(t, e));for (var n in this.data) {
        this.data.hasOwnProperty(n) && t(this.data[n], n);
      }
    }, removeKey: function removeKey(t) {
      delete this.data[t];
    } };var Kd = (Object.freeze || Object)({ $override: n, clone: i, merge: r, mergeAll: a, extend: o, defaults: s, createCanvas: Ud, getContext: l, indexOf: u, inherits: h, mixin: c, isArrayLike: d, each: f, map: p, reduce: g, filter: v, find: m, bind: y, curry: _, isArray: x, isFunction: w, isString: b, isObject: S, isBuiltInObject: M, isTypedArray: T, isDom: C, eqNaN: I, retrieve: k, retrieve2: D, retrieve3: A, slice: P, normalizeCssArray: O, assert: L, trim: E, setAsPrimitive: B, isPrimitive: z, createHashMap: F, concatArray: N, noop: H }),
      Qd = "undefined" == typeof Float32Array ? Array : Float32Array,
      Jd = U,
      tf = Z,
      ef = ee,
      nf = ne,
      rf = (Object.freeze || Object)({ create: V, copy: W, clone: G, set: X, add: j, scaleAndAdd: Y, sub: q, len: U, length: Jd, lenSquare: Z, lengthSquare: tf, mul: $, div: K, dot: Q, scale: J, normalize: te, distance: ee, dist: ef, distanceSquare: ne, distSquare: nf, negate: ie, lerp: re, applyTransform: ae, min: oe, max: se });le.prototype = { constructor: le, _dragStart: function _dragStart(t) {
      var e = t.target;e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event));
    }, _drag: function _drag(t) {
      var e = this._draggingTarget;if (e) {
        var n = t.offsetX,
            i = t.offsetY,
            r = n - this._x,
            a = i - this._y;this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(ue(e, t), "drag", t.event);var o = this.findHover(n, i, e).target,
            s = this._dropTarget;this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t), "dragenter", t.event));
      }
    }, _dragEnd: function _dragEnd(t) {
      var e = this._draggingTarget;e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    } };var af = Array.prototype.slice,
      of = function of(t) {
    this._$handlers = {}, this._$eventProcessor = t;
  };of.prototype = { constructor: of, one: function one(t, e, n, i) {
      var r = this._$handlers;if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;e = he(this, e), r[t] || (r[t] = []);for (var a = 0; a < r[t].length; a++) {
        if (r[t][a].h === n) return this;
      }return r[t].push({ h: n, one: !0, query: e, ctx: i || this }), this;
    }, on: function on(t, e, n, i) {
      var r = this._$handlers;if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;e = he(this, e), r[t] || (r[t] = []);for (var a = 0; a < r[t].length; a++) {
        if (r[t][a].h === n) return this;
      }return r[t].push({ h: n, one: !1, query: e, ctx: i || this }), this;
    }, isSilent: function isSilent(t) {
      var e = this._$handlers;return e[t] && e[t].length;
    }, off: function off(t, e) {
      var n = this._$handlers;if (!t) return this._$handlers = {}, this;if (e) {
        if (n[t]) {
          for (var i = [], r = 0, a = n[t].length; a > r; r++) {
            n[t][r].h !== e && i.push(n[t][r]);
          }n[t] = i;
        }n[t] && 0 === n[t].length && delete n[t];
      } else delete n[t];return this;
    }, trigger: function trigger(t) {
      var e = this._$handlers[t],
          n = this._$eventProcessor;if (e) {
        var i = arguments,
            r = i.length;r > 3 && (i = af.call(i, 1));for (var a = e.length, o = 0; a > o;) {
          var s = e[o];if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;else {
            switch (r) {case 1:
                s.h.call(s.ctx);break;case 2:
                s.h.call(s.ctx, i[1]);break;case 3:
                s.h.call(s.ctx, i[1], i[2]);break;default:
                s.h.apply(s.ctx, i);}s.one ? (e.splice(o, 1), a--) : o++;
          }
        }
      }return n && n.afterTrigger && n.afterTrigger(t), this;
    }, triggerWithContext: function triggerWithContext(t) {
      var e = this._$handlers[t],
          n = this._$eventProcessor;if (e) {
        var i = arguments,
            r = i.length;r > 4 && (i = af.call(i, 1, i.length - 1));for (var a = i[i.length - 1], o = e.length, s = 0; o > s;) {
          var l = e[s];if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;else {
            switch (r) {case 1:
                l.h.call(a);break;case 2:
                l.h.call(a, i[1]);break;case 3:
                l.h.call(a, i[1], i[2]);break;default:
                l.h.apply(a, i);}l.one ? (e.splice(s, 1), o--) : s++;
          }
        }
      }return n && n.afterTrigger && n.afterTrigger(t), this;
    } };var sf = "undefined" != typeof window && !!window.addEventListener,
      lf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      uf = sf ? function (t) {
    t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
  } : function (t) {
    t.returnValue = !1, t.cancelBubble = !0;
  },
      hf = "silent";_e.prototype.dispose = function () {};var cf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      df = function df(t, e, n, i) {
    of.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new _e(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, le.call(this), this.setHandlerProxy(n);
  };df.prototype = { constructor: df, setHandlerProxy: function setHandlerProxy(t) {
      this.proxy && this.proxy.dispose(), t && (f(cf, function (e) {
        t.on && t.on(e, this[e], this);
      }, this), t.handler = this), this.proxy = t;
    }, mousemove: function mousemove(t) {
      var e = t.zrX,
          n = t.zrY,
          i = this._hovered,
          r = i.target;r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);var a = this._hovered = this.findHover(e, n),
          o = a.target,
          s = this.proxy;s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);
    }, mouseout: function mouseout(t) {
      this.dispatchToElement(this._hovered, "mouseout", t);var e,
          n = t.toElement || t.relatedTarget;do {
        n = n && n.parentNode;
      } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));!e && this.trigger("globalout", { event: t });
    }, resize: function resize() {
      this._hovered = {};
    }, dispatch: function dispatch(t, e) {
      var n = this[t];n && n.call(this, e);
    }, dispose: function dispose() {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
    }, setCursorStyle: function setCursorStyle(t) {
      var e = this.proxy;e.setCursor && e.setCursor(t);
    }, dispatchToElement: function dispatchToElement(t, e, n) {
      t = t || {};var i = t.target;if (!i || !i.silent) {
        for (var r = "on" + e, a = me(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble);) {}a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
        }));
      }
    }, findHover: function findHover(t, e, n) {
      for (var i = this.storage.getDisplayList(), r = { x: t, y: e }, a = i.length - 1; a >= 0; a--) {
        var o;if (i[a] !== n && !i[a].ignore && (o = xe(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== hf)) {
          r.target = i[a];break;
        }
      }return r;
    } }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    df.prototype[t] = function (e) {
      var n = this.findHover(e.zrX, e.zrY),
          i = n.target;if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;else if ("mouseup" === t) this._upEl = i;else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || ef(this._downPoint, [e.zrX, e.zrY]) > 4) return;this._downPoint = null;
      }this.dispatchToElement(n, t, e);
    };
  }), c(df, of), c(df, le);var ff = "undefined" == typeof Float32Array ? Array : Float32Array,
      pf = (Object.freeze || Object)({ create: we, identity: be, copy: Se, mul: Me, translate: Te, rotate: Ce, scale: Ie, invert: ke, clone: De }),
      gf = be,
      vf = 5e-5,
      mf = function mf(t) {
    t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
  },
      yf = mf.prototype;yf.transform = null, yf.needLocalTransform = function () {
    return Ae(this.rotation) || Ae(this.position[0]) || Ae(this.position[1]) || Ae(this.scale[0] - 1) || Ae(this.scale[1] - 1);
  };var _f = [];yf.updateTransform = function () {
    var t = this.parent,
        e = t && t.transform,
        n = this.needLocalTransform(),
        i = this.transform;if (!n && !e) return void (i && gf(i));i = i || we(), n ? this.getLocalTransform(i) : gf(i), e && (n ? Me(i, t.transform, i) : Se(i, t.transform)), this.transform = i;var r = this.globalScaleRatio;if (null != r && 1 !== r) {
      this.getGlobalScale(_f);var a = _f[0] < 0 ? -1 : 1,
          o = _f[1] < 0 ? -1 : 1,
          s = ((_f[0] - a) * r + a) / _f[0] || 0,
          l = ((_f[1] - o) * r + o) / _f[1] || 0;i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l;
    }this.invTransform = this.invTransform || we(), ke(this.invTransform, i);
  }, yf.getLocalTransform = function (t) {
    return mf.getLocalTransform(this, t);
  }, yf.setTransform = function (t) {
    var e = this.transform,
        n = t.dpr || 1;e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
  }, yf.restoreTransform = function (t) {
    var e = t.dpr || 1;t.setTransform(e, 0, 0, e, 0, 0);
  };var xf = [],
      wf = we();yf.setLocalTransform = function (t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1],
          n = t[2] * t[2] + t[3] * t[3],
          i = this.position,
          r = this.scale;Ae(e - 1) && (e = Math.sqrt(e)), Ae(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e);
    }
  }, yf.decomposeTransform = function () {
    if (this.transform) {
      var t = this.parent,
          e = this.transform;t && t.transform && (Me(xf, t.invTransform, e), e = xf);var n = this.origin;n && (n[0] || n[1]) && (wf[4] = n[0], wf[5] = n[1], Me(xf, e, wf), xf[4] -= n[0], xf[5] -= n[1], e = xf), this.setLocalTransform(e);
    }
  }, yf.getGlobalScale = function (t) {
    var e = this.transform;return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, yf.transformCoordToLocal = function (t, e) {
    var n = [t, e],
        i = this.invTransform;return i && ae(n, n, i), n;
  }, yf.transformCoordToGlobal = function (t, e) {
    var n = [t, e],
        i = this.transform;return i && ae(n, n, i), n;
  }, mf.getLocalTransform = function (t, e) {
    e = e || [], gf(e);var n = t.origin,
        i = t.scale || [1, 1],
        r = t.rotation || 0,
        a = t.position || [0, 0];return n && (e[4] -= n[0], e[5] -= n[1]), Ie(e, e, i), r && Ce(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e;
  };var bf = { linear: function linear(t) {
      return t;
    }, quadraticIn: function quadraticIn(t) {
      return t * t;
    }, quadraticOut: function quadraticOut(t) {
      return t * (2 - t);
    }, quadraticInOut: function quadraticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    }, cubicIn: function cubicIn(t) {
      return t * t * t;
    }, cubicOut: function cubicOut(t) {
      return --t * t * t + 1;
    }, cubicInOut: function cubicInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    }, quarticIn: function quarticIn(t) {
      return t * t * t * t;
    }, quarticOut: function quarticOut(t) {
      return 1 - --t * t * t * t;
    }, quarticInOut: function quarticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    }, quinticIn: function quinticIn(t) {
      return t * t * t * t * t;
    }, quinticOut: function quinticOut(t) {
      return --t * t * t * t * t + 1;
    }, quinticInOut: function quinticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    }, sinusoidalIn: function sinusoidalIn(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }, sinusoidalOut: function sinusoidalOut(t) {
      return Math.sin(t * Math.PI / 2);
    }, sinusoidalInOut: function sinusoidalInOut(t) {
      return .5 * (1 - Math.cos(Math.PI * t));
    }, exponentialIn: function exponentialIn(t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1);
    }, exponentialOut: function exponentialOut(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    }, exponentialInOut: function exponentialInOut(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    }, circularIn: function circularIn(t) {
      return 1 - Math.sqrt(1 - t * t);
    }, circularOut: function circularOut(t) {
      return Math.sqrt(1 - --t * t);
    }, circularInOut: function circularInOut(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }, elasticIn: function elasticIn(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)));
    }, elasticOut: function elasticOut(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1);
    }, elasticInOut: function elasticInOut(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1);
    }, backIn: function backIn(t) {
      var e = 1.70158;return t * t * ((e + 1) * t - e);
    }, backOut: function backOut(t) {
      var e = 1.70158;return --t * t * ((e + 1) * t + e) + 1;
    }, backInOut: function backInOut(t) {
      var e = 2.5949095;return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
    }, bounceIn: function bounceIn(t) {
      return 1 - bf.bounceOut(1 - t);
    }, bounceOut: function bounceOut(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }, bounceInOut: function bounceInOut(t) {
      return .5 > t ? .5 * bf.bounceIn(2 * t) : .5 * bf.bounceOut(2 * t - 1) + .5;
    } };Pe.prototype = { constructor: Pe, step: function step(t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);var n = (t - this._startTime - this._pausedTime) / this._life;if (!(0 > n)) {
        n = Math.min(n, 1);var i = this.easing,
            r = "string" == typeof i ? bf[i] : i,
            a = "function" == typeof r ? r(n) : n;return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null;
      }
    }, restart: function restart(t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
    }, fire: function fire(t, e) {
      t = "on" + t, this[t] && this[t](this._target, e);
    }, pause: function pause() {
      this._paused = !0;
    }, resume: function resume() {
      this._paused = !1;
    } };var Sf = function Sf() {
    this.head = null, this.tail = null, this._len = 0;
  },
      Mf = Sf.prototype;Mf.insert = function (t) {
    var e = new Tf(t);return this.insertEntry(e), e;
  }, Mf.insertEntry = function (t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, Mf.remove = function (t) {
    var e = t.prev,
        n = t.next;e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, Mf.len = function () {
    return this._len;
  }, Mf.clear = function () {
    this.head = this.tail = null, this._len = 0;
  };var Tf = function Tf(t) {
    this.value = t, this.next, this.prev;
  },
      Cf = function Cf(t) {
    this._list = new Sf(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
  },
      If = Cf.prototype;If.put = function (t, e) {
    var n = this._list,
        i = this._map,
        r = null;if (null == i[t]) {
      var a = n.len(),
          o = this._lastRemovedEntry;if (a >= this._maxSize && a > 0) {
        var s = n.head;n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;
      }o ? o.value = e : o = new Tf(e), o.key = t, n.insertEntry(o), i[t] = o;
    }return r;
  }, If.get = function (t) {
    var e = this._map[t],
        n = this._list;return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;
  }, If.clear = function () {
    this._list.clear(), this._map = {};
  };var kf = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] },
      Df = new Cf(20),
      Af = null,
      Pf = qe,
      Of = Ue,
      Lf = (Object.freeze || Object)({ parse: We, lift: je, toHex: Ye, fastLerp: qe, fastMapToColor: Pf, lerp: Ue, mapToColor: Of, modifyHSL: Ze, modifyAlpha: $e, stringify: Ke }),
      Ef = Array.prototype.slice,
      Bf = function Bf(t, e, n, i) {
    this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Qe, this._setter = i || Je, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
  };Bf.prototype = { when: function when(t, e) {
      var n = this._tracks;for (var i in e) {
        if (e.hasOwnProperty(i)) {
          if (!n[i]) {
            n[i] = [];var r = this._getter(this._target, i);if (null == r) continue;0 !== t && n[i].push({ time: 0, value: ln(r) });
          }n[i].push({ time: t, value: e[i] });
        }
      }return this;
    }, during: function during(t) {
      return this._onframeList.push(t), this;
    }, pause: function pause() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].pause();
      }this._paused = !0;
    }, resume: function resume() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].resume();
      }this._paused = !1;
    }, isPaused: function isPaused() {
      return !!this._paused;
    }, _doneCallback: function _doneCallback() {
      this._tracks = {}, this._clipList.length = 0;for (var t = this._doneList, e = t.length, n = 0; e > n; n++) {
        t[n].call(this);
      }
    }, start: function start(t, e) {
      var n,
          i = this,
          r = 0,
          a = function a() {
        r--, r || i._doneCallback();
      };for (var o in this._tracks) {
        if (this._tracks.hasOwnProperty(o)) {
          var s = cn(this, t, a, this._tracks[o], o, e);s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s);
        }
      }if (n) {
        var l = n.onframe;n.onframe = function (t, e) {
          l(t, e);for (var n = 0; n < i._onframeList.length; n++) {
            i._onframeList[n](t, e);
          }
        };
      }return r || this._doneCallback(), this;
    }, stop: function stop(t) {
      for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
        var r = e[i];t && r.onframe(this._target, 1), n && n.removeClip(r);
      }e.length = 0;
    }, delay: function delay(t) {
      return this._delay = t, this;
    }, done: function done(t) {
      return t && this._doneList.push(t), this;
    }, getClips: function getClips() {
      return this._clipList;
    } };var zf = 1;"undefined" != typeof window && (zf = Math.max(window.devicePixelRatio || 1, 1));var Rf = 0,
      Ff = zf,
      Nf = function Nf() {};1 === Rf ? Nf = function Nf() {
    for (var t in arguments) {
      throw new Error(arguments[t]);
    }
  } : Rf > 1 && (Nf = function Nf() {
    for (var t in arguments) {
      console.log(arguments[t]);
    }
  });var Hf = Nf,
      Vf = function Vf() {
    this.animators = [];
  };Vf.prototype = { constructor: Vf, animate: function animate(t, e) {
      var n,
          i = !1,
          r = this,
          a = this.__zr;if (t) {
        var o = t.split("."),
            s = r;i = "shape" === o[0];for (var l = 0, h = o.length; h > l; l++) {
          s && (s = s[o[l]]);
        }s && (n = s);
      } else n = r;if (!n) return void Hf('Property "' + t + '" is not existed in element ' + r.id);var c = r.animators,
          d = new Bf(n, e);return d.during(function () {
        r.dirty(i);
      }).done(function () {
        c.splice(u(c, d), 1);
      }), c.push(d), a && a.animation.addAnimator(d), d;
    }, stopAnimation: function stopAnimation(t) {
      for (var e = this.animators, n = e.length, i = 0; n > i; i++) {
        e[i].stop(t);
      }return e.length = 0, this;
    }, animateTo: function animateTo(t, e, n, i, r, a) {
      dn(this, t, e, n, i, r, a);
    }, animateFrom: function animateFrom(t, e, n, i, r, a) {
      dn(this, t, e, n, i, r, a, !0);
    } };var Wf = function Wf(t) {
    mf.call(this, t), of.call(this, t), Vf.call(this, t), this.id = t.id || Bd();
  };Wf.prototype = { type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function drift(t, e) {
      switch (this.draggable) {case "horizontal":
          e = 0;break;case "vertical":
          t = 0;}var n = this.transform;n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1);
    }, beforeUpdate: function beforeUpdate() {}, afterUpdate: function afterUpdate() {}, update: function update() {
      this.updateTransform();
    }, traverse: function traverse() {}, attrKV: function attrKV(t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var n = this[t];n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];
        }
      } else this[t] = e;
    }, hide: function hide() {
      this.ignore = !0, this.__zr && this.__zr.refresh();
    }, show: function show() {
      this.ignore = !1, this.__zr && this.__zr.refresh();
    }, attr: function attr(t, e) {
      if ("string" == typeof t) this.attrKV(t, e);else if (S(t)) for (var n in t) {
        t.hasOwnProperty(n) && this.attrKV(n, t[n]);
      }return this.dirty(!1), this;
    }, setClipPath: function setClipPath(t) {
      var e = this.__zr;e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
    }, removeClipPath: function removeClipPath() {
      var t = this.clipPath;t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));
    }, addSelfToZr: function addSelfToZr(t) {
      this.__zr = t;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {
        t.animation.addAnimator(e[n]);
      }this.clipPath && this.clipPath.addSelfToZr(t);
    }, removeSelfFromZr: function removeSelfFromZr(t) {
      this.__zr = null;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {
        t.animation.removeAnimator(e[n]);
      }this.clipPath && this.clipPath.removeSelfFromZr(t);
    } }, c(Wf, Vf), c(Wf, mf), c(Wf, of);var Gf = ae,
      Xf = Math.min,
      jf = Math.max;gn.prototype = { constructor: gn, union: function union(t) {
      var e = Xf(t.x, this.x),
          n = Xf(t.y, this.y);this.width = jf(t.x + t.width, this.x + this.width) - e, this.height = jf(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n;
    }, applyTransform: function () {
      var t = [],
          e = [],
          n = [],
          i = [];return function (r) {
        if (r) {
          t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, Gf(t, t, r), Gf(e, e, r), Gf(n, n, r), Gf(i, i, r), this.x = Xf(t[0], e[0], n[0], i[0]), this.y = Xf(t[1], e[1], n[1], i[1]);var a = jf(t[0], e[0], n[0], i[0]),
              o = jf(t[1], e[1], n[1], i[1]);this.width = a - this.x, this.height = o - this.y;
        }
      };
    }(), calculateTransform: function calculateTransform(t) {
      var e = this,
          n = t.width / e.width,
          i = t.height / e.height,
          r = we();return Te(r, r, [-e.x, -e.y]), Ie(r, r, [n, i]), Te(r, r, [t.x, t.y]), r;
    }, intersect: function intersect(t) {
      if (!t) return !1;t instanceof gn || (t = gn.create(t));var e = this,
          n = e.x,
          i = e.x + e.width,
          r = e.y,
          a = e.y + e.height,
          o = t.x,
          s = t.x + t.width,
          l = t.y,
          u = t.y + t.height;return !(o > i || n > s || l > a || r > u);
    }, contain: function contain(t, e) {
      var n = this;return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
    }, clone: function clone() {
      return new gn(this.x, this.y, this.width, this.height);
    }, copy: function copy(t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
    }, plain: function plain() {
      return { x: this.x, y: this.y, width: this.width, height: this.height };
    } }, gn.create = function (t) {
    return new gn(t.x, t.y, t.width, t.height);
  };var Yf = function Yf(t) {
    t = t || {}, Wf.call(this, t);for (var e in t) {
      t.hasOwnProperty(e) && (this[e] = t[e]);
    }this._children = [], this.__storage = null, this.__dirty = !0;
  };Yf.prototype = { constructor: Yf, isGroup: !0, type: "group", silent: !1, children: function children() {
      return this._children.slice();
    }, childAt: function childAt(t) {
      return this._children[t];
    }, childOfName: function childOfName(t) {
      for (var e = this._children, n = 0; n < e.length; n++) {
        if (e[n].name === t) return e[n];
      }
    }, childCount: function childCount() {
      return this._children.length;
    }, add: function add(t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
    }, addBefore: function addBefore(t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
            i = n.indexOf(e);i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
      }return this;
    }, _doAdd: function _doAdd(t) {
      t.parent && t.parent.remove(t), t.parent = this;var e = this.__storage,
          n = this.__zr;e && e !== t.__storage && (e.addToStorage(t), t instanceof Yf && t.addChildrenToStorage(e)), n && n.refresh();
    }, remove: function remove(t) {
      var e = this.__zr,
          n = this.__storage,
          i = this._children,
          r = u(i, t);return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Yf && t.delChildrenFromStorage(n)), e && e.refresh(), this);
    }, removeAll: function removeAll() {
      var t,
          e,
          n = this._children,
          i = this.__storage;for (e = 0; e < n.length; e++) {
        t = n[e], i && (i.delFromStorage(t), t instanceof Yf && t.delChildrenFromStorage(i)), t.parent = null;
      }return n.length = 0, this;
    }, eachChild: function eachChild(t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];t.call(e, r, i);
      }return this;
    }, traverse: function traverse(t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];t.call(e, i), "group" === i.type && i.traverse(t, e);
      }return this;
    }, addChildrenToStorage: function addChildrenToStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];t.addToStorage(n), n instanceof Yf && n.addChildrenToStorage(t);
      }
    }, delChildrenFromStorage: function delChildrenFromStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];t.delFromStorage(n), n instanceof Yf && n.delChildrenFromStorage(t);
      }
    }, dirty: function dirty() {
      return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
    }, getBoundingRect: function getBoundingRect(t) {
      for (var e = null, n = new gn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
        var o = i[a];if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
              l = o.getLocalTransform(r);l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s));
        }
      }return e || n;
    } }, h(Yf, Wf);var qf = 32,
      Uf = 7,
      Zf = function Zf() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  };Zf.prototype = { constructor: Zf, traverse: function traverse(t, e) {
      for (var n = 0; n < this._roots.length; n++) {
        this._roots[n].traverse(t, e);
      }
    }, getDisplayList: function getDisplayList(t, e) {
      return e = e || !1, t && this.updateDisplayList(e), this._displayList;
    }, updateDisplayList: function updateDisplayList(t) {
      this._displayListLen = 0;for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) {
        this._updateAndAddDisplayable(e[i], null, t);
      }n.length = this._displayListLen, Rd.canvasSupported && Sn(n, Mn);
    }, _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();var i = t.clipPath;if (i) {
          e = e ? e.slice() : [];for (var r = i, a = t; r;) {
            r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;
          }
        }if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);
          }t.__dirty = !1;
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
      }
    }, addRoot: function addRoot(t) {
      t.__storage !== this && (t instanceof Yf && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
    }, delRoot: function delRoot(t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var n = this._roots[e];n instanceof Yf && n.delChildrenFromStorage(this);
        }return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
      }if (t instanceof Array) for (var e = 0, i = t.length; i > e; e++) {
        this.delRoot(t[e]);
      } else {
        var r = u(this._roots, t);r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Yf && t.delChildrenFromStorage(this));
      }
    }, addToStorage: function addToStorage(t) {
      return t && (t.__storage = this, t.dirty(!1)), this;
    }, delFromStorage: function delFromStorage(t) {
      return t && (t.__storage = null), this;
    }, dispose: function dispose() {
      this._renderList = this._roots = null;
    }, displayableSortFunc: Mn };var $f = { shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1 },
      Kf = function Kf(t, e, n) {
    return $f.hasOwnProperty(e) ? n *= t.dpr : n;
  },
      Qf = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
      Jf = function Jf(t) {
    this.extendFrom(t, !1);
  };Jf.prototype = { constructor: Jf, fill: "#000", stroke: null, opacity: 1, fillOpacity: null, strokeOpacity: null, lineDash: null, lineDashOffset: 0, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, lineWidth: 1, strokeNoScale: !1, text: null, font: null, textFont: null, fontStyle: null, fontWeight: null, fontSize: null, fontFamily: null, textTag: null, textFill: "#000", textStroke: null, textWidth: null, textHeight: null, textStrokeWidth: 0, textLineHeight: null, textPosition: "inside", textRect: null, textOffset: null, textAlign: null, textVerticalAlign: null, textDistance: 5, textShadowColor: "transparent", textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0, textBoxShadowColor: "transparent", textBoxShadowBlur: 0, textBoxShadowOffsetX: 0, textBoxShadowOffsetY: 0, transformText: !1, textRotation: 0, textOrigin: null, textBackgroundColor: null, textBorderColor: null, textBorderWidth: 0, textBorderRadius: 0, textPadding: null, rich: null, truncate: null, blend: null, bind: function bind(t, e, n) {
      for (var i = this, r = n && n.style, a = !r, o = 0; o < Qf.length; o++) {
        var s = Qf[o],
            l = s[0];(a || i[l] !== r[l]) && (t[l] = Kf(t, l, i[l] || s[1]));
      }if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
        var u = i.lineWidth;t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
      }
    }, hasFill: function hasFill() {
      var t = this.fill;return null != t && "none" !== t;
    }, hasStroke: function hasStroke() {
      var t = this.stroke;return null != t && "none" !== t && this.lineWidth > 0;
    }, extendFrom: function extendFrom(t, e) {
      if (t) for (var n in t) {
        !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);
      }
    }, set: function set(t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
    }, clone: function clone() {
      var t = new this.constructor();return t.extendFrom(this, !0), t;
    }, getGradient: function getGradient(t, e, n) {
      for (var i = "radial" === e.type ? Cn : Tn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) {
        r.addColorStop(a[o].offset, a[o].color);
      }return r;
    } };for (var tp = Jf.prototype, ep = 0; ep < Qf.length; ep++) {
    var np = Qf[ep];np[0] in tp || (tp[np[0]] = np[1]);
  }Jf.getGradient = tp.getGradient;var ip = function ip(t, e) {
    this.image = t, this.repeat = e, this.type = "pattern";
  };ip.prototype.getCanvasPattern = function (t) {
    return t.createPattern(this.image, this.repeat || "repeat");
  };var rp = function rp(t, e, n) {
    var i;n = n || Ff, "string" == typeof t ? i = kn(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom = i;var r = i.style;r && (i.onselectstart = In, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n;
  };rp.prototype = { constructor: rp, __dirty: !0, __used: !1, __drawIndex: 0, __startIndex: 0, __endIndex: 0, incremental: !1, getElementCount: function getElementCount() {
      return this.__endIndex - this.__startIndex;
    }, initContext: function initContext() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
    }, createBackBuffer: function createBackBuffer() {
      var t = this.dpr;this.domBack = kn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t);
    }, resize: function resize(t, e) {
      var n = this.dpr,
          i = this.dom,
          r = i.style,
          a = this.domBack;r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n));
    }, clear: function clear(t, e) {
      var n = this.dom,
          i = this.ctx,
          r = n.width,
          a = n.height,
          e = e || this.clearColor,
          o = this.motionBlur && !t,
          s = this.lastFrameAlpha,
          l = this.dpr;if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var u;e.colorStops ? (u = e.__canvasGradient || Jf.getGradient(i, e, { x: 0, y: 0, width: r, height: a }), e.__canvasGradient = u) : e.image && (u = ip.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, a), i.restore();
      }if (o) {
        var h = this.domBack;i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, a), i.restore();
      }
    } };var ap = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
    setTimeout(t, 16);
  },
      op = new Cf(50),
      sp = {},
      lp = 0,
      up = 5e3,
      hp = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      cp = "12px sans-serif",
      dp = {};dp.measureText = function (t, e) {
    var n = l();return n.font = e || cp, n.measureText(t);
  };var fp = { left: 1, right: 1, center: 1 },
      pp = { top: 1, bottom: 1, middle: 1 },
      gp = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
      vp = new gn(),
      mp = function mp() {};mp.prototype = { constructor: mp, drawRectText: function drawRectText(t, e) {
      var n = this.style;e = n.textRect || e, this.__dirty && Kn(n, !0);var i = n.text;if (null != i && (i += ""), pi(i, n)) {
        t.save();var r = this.transform;n.transformText ? this.setTransform(t) : r && (vp.copy(e), vp.applyTransform(r), e = vp), Jn(this, t, i, n, e), t.restore();
      }
    } }, gi.prototype = { constructor: gi, type: "displayable", __dirty: !0, invisible: !1, z: 0, z2: 0, zlevel: 0, draggable: !1, dragging: !1, silent: !1, culling: !1, cursor: "pointer", rectHover: !1, progressive: !1, incremental: !1, globalScaleRatio: 1, beforeBrush: function beforeBrush() {}, afterBrush: function afterBrush() {}, brush: function brush() {}, getBoundingRect: function getBoundingRect() {}, contain: function contain(t, e) {
      return this.rectContain(t, e);
    }, traverse: function traverse(t, e) {
      t.call(e, this);
    }, rectContain: function rectContain(t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect();return i.contain(n[0], n[1]);
    }, dirty: function dirty() {
      this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh();
    }, animateStyle: function animateStyle(t) {
      return this.animate("style", t);
    }, attrKV: function attrKV(t, e) {
      "style" !== t ? Wf.prototype.attrKV.call(this, t, e) : this.style.set(e);
    }, setStyle: function setStyle(t, e) {
      return this.style.set(t, e), this.dirty(!1), this;
    }, useStyle: function useStyle(t) {
      return this.style = new Jf(t, this), this.dirty(!1), this;
    } }, h(gi, Wf), c(gi, mp), vi.prototype = { constructor: vi, type: "image", brush: function brush(t, e) {
      var n = this.style,
          i = n.image;n.bind(t, this, e);var r = this._image = An(i, this._image, this, this.onload);if (r && On(r)) {
        var a = n.x || 0,
            o = n.y || 0,
            s = n.width,
            l = n.height,
            u = r.width / r.height;if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
          var h = n.sx || 0,
              c = n.sy || 0;t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l);
        } else if (n.sx && n.sy) {
          var h = n.sx,
              c = n.sy,
              d = s - h,
              f = l - c;t.drawImage(r, h, c, d, f, a, o, s, l);
        } else t.drawImage(r, a, o, s, l);null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
      }
    }, getBoundingRect: function getBoundingRect() {
      var t = this.style;return this._rect || (this._rect = new gn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
    } }, h(vi, gi);var yp = 1e5,
      _p = 314159,
      xp = .01,
      wp = .001,
      bp = new gn(0, 0, 0, 0),
      Sp = new gn(0, 0, 0, 0),
      Mp = function Mp(t, e, n) {
    this.type = "canvas";var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Ff, this._singleCanvas = i, this.root = t;var r = t.style;r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;var a = this._zlevelList = [],
        s = this._layers = {};if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
      var l = t.width,
          u = t.height;null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;var h = new rp(t, this, this.dpr);h.__builtin__ = !0, h.initContext(), s[_p] = h, h.zlevel = _p, a.push(_p), this._domRoot = t;
    } else {
      this._width = this._getSize(0), this._height = this._getSize(1);var c = this._domRoot = bi(this._width, this._height);t.appendChild(c);
    }this._hoverlayer = null, this._hoverElements = [];
  };Mp.prototype = { constructor: Mp, getType: function getType() {
      return "canvas";
    }, isSingleCanvas: function isSingleCanvas() {
      return this._singleCanvas;
    }, getViewportRoot: function getViewportRoot() {
      return this._domRoot;
    }, getViewportRootOffset: function getViewportRootOffset() {
      var t = this.getViewportRoot();return t ? { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 } : void 0;
    }, refresh: function refresh(t) {
      var e = this.storage.getDisplayList(!0),
          n = this._zlevelList;this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);for (var i = 0; i < n.length; i++) {
        var r = n[i],
            a = this._layers[r];if (!a.__builtin__ && a.refresh) {
          var o = 0 === i ? this._backgroundColor : null;a.refresh(o);
        }
      }return this.refreshHover(), this;
    }, addHover: function addHover(t, e) {
      if (!t.__hoverMir) {
        var n = new t.constructor({ style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent });return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n;
      }
    }, removeHover: function removeHover(t) {
      var e = t.__hoverMir,
          n = this._hoverElements,
          i = u(n, e);i >= 0 && n.splice(i, 1), t.__hoverMir = null;
    }, clearHover: function clearHover() {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var n = t[e].__from;n && (n.__hoverMir = null);
      }t.length = 0;
    }, refreshHover: function refreshHover() {
      var t = this._hoverElements,
          e = t.length,
          n = this._hoverlayer;if (n && n.clear(), e) {
        Sn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(yp));var i = {};n.ctx.save();for (var r = 0; e > r;) {
          var a = t[r],
              o = a.__from;o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--);
        }n.ctx.restore();
      }
    }, getHoverLayer: function getHoverLayer() {
      return this.getLayer(yp);
    }, _paintList: function _paintList(t, e, n) {
      if (this._redrawId === n) {
        e = e || !1, this._updateLayerStatus(t);var i = this._doPaintList(t, e);if (this._needsManuallyCompositing && this._compositeManually(), !i) {
          var r = this;ap(function () {
            r._paintList(t, e, n);
          });
        }
      }
    }, _compositeManually: function _compositeManually() {
      var t = this.getLayer(_p).ctx,
          e = this._domRoot.width,
          n = this._domRoot.height;t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n);
      });
    }, _doPaintList: function _doPaintList(t, e) {
      for (var n = [], i = 0; i < this._zlevelList.length; i++) {
        var r = this._zlevelList[i],
            a = this._layers[r];a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a);
      }for (var o = !0, s = 0; s < n.length; s++) {
        var a = n[s],
            l = a.ctx,
            u = {};l.save();var h = e ? a.__startIndex : a.__drawIndex,
            c = !e && a.incremental && Date.now,
            d = c && Date.now(),
            p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;if (a.__startIndex === a.__endIndex) a.clear(!1, p);else if (h === a.__startIndex) {
          var g = t[h];g.incremental && g.notClear && !e || a.clear(!1, p);
        }-1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);for (var v = h; v < a.__endIndex; v++) {
          var m = t[v];if (this._doPaintEl(m, a, e, u), m.__dirty = m.__dirtyText = !1, c) {
            var y = Date.now() - d;if (y > 15) break;
          }
        }a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), u.prevElClipPaths && l.restore(), l.restore();
      }return Rd.wxa && f(this._layers, function (t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw();
      }), o;
    }, _doPaintEl: function _doPaintEl(t, e, n, i) {
      var r = e.ctx,
          a = t.transform;if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && _i(t, this._width, this._height))) {
        var o = t.__clipPaths;(!i.prevElClipPaths || xi(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), wi(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);
      }
    }, getLayer: function getLayer(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = _p);var n = this._layers[t];return n || (n = new rp("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
    }, insertLayer: function insertLayer(t, e) {
      var n = this._layers,
          i = this._zlevelList,
          r = i.length,
          a = null,
          o = -1,
          s = this._domRoot;if (n[t]) return void Hf("ZLevel " + t + " has been used already");if (!yi(e)) return void Hf("Layer of zlevel " + t + " is not valid");if (r > 0 && t > i[0]) {
        for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++) {}a = n[i[o]];
      }if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
        var l = a.dom;l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
      } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
    }, eachLayer: function eachLayer(t, e) {
      var n,
          i,
          r = this._zlevelList;for (i = 0; i < r.length; i++) {
        n = r[i], t.call(e, this._layers[n], n);
      }
    }, eachBuiltinLayer: function eachBuiltinLayer(t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;for (r = 0; r < a.length; r++) {
        i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i);
      }
    }, eachOtherLayer: function eachOtherLayer(t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;for (r = 0; r < a.length; r++) {
        i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i);
      }
    }, getLayers: function getLayers() {
      return this._layers;
    }, _updateLayerStatus: function _updateLayerStatus(t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t);
      }if (this.eachBuiltinLayer(function (t) {
        t.__dirty = t.__used = !1;
      }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
        var i = t[n];if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
          this._needsManuallyCompositing = !0;break;
        }
      }for (var r = null, a = 0, n = 0; n < t.length; n++) {
        var o,
            i = t[n],
            s = i.zlevel;i.incremental ? (o = this.getLayer(s + wp, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? xp : 0), this._needsManuallyCompositing), o.__builtin__ || Hf("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n));
      }e(n), this.eachBuiltinLayer(function (t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
      });
    }, clear: function clear() {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }, _clearLayer: function _clearLayer(t) {
      t.clear();
    }, setBackgroundColor: function setBackgroundColor(t) {
      this._backgroundColor = t;
    }, configLayer: function configLayer(t, e) {
      if (e) {
        var n = this._layerConfig;n[t] ? r(n[t], e, !0) : n[t] = e;for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];if (a === t || a === t + xp) {
            var o = this._layers[a];r(o, n[t], !0);
          }
        }
      }
    }, delLayer: function delLayer(t) {
      var e = this._layers,
          n = this._zlevelList,
          i = e[t];i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1));
    }, resize: function resize(t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;n.style.display = "none";var i = this._opts;if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
          n.style.width = t + "px", n.style.height = e + "px";for (var r in this._layers) {
            this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
          }f(this._progressiveLayers, function (n) {
            n.resize(t, e);
          }), this.refresh(!0);
        }this._width = t, this._height = e;
      } else {
        if (null == t || null == e) return;this._width = t, this._height = e, this.getLayer(_p).resize(t, e);
      }return this;
    }, clearLayer: function clearLayer(t) {
      var e = this._layers[t];e && e.clear();
    }, dispose: function dispose() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    }, getRenderedCanvas: function getRenderedCanvas(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[_p].dom;var e = new rp("image", this, t.pixelRatio || this.dpr);if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();var n = e.dom.width,
            i = e.dom.height,
            r = e.ctx;this.eachLayer(function (t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
        });
      } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
        var l = o[s];this._doPaintEl(l, e, !0, a);
      }return e.dom;
    }, getWidth: function getWidth() {
      return this._width;
    }, getHeight: function getHeight() {
      return this._height;
    }, _getSize: function _getSize(t) {
      var e = this._opts,
          n = ["width", "height"][t],
          i = ["clientWidth", "clientHeight"][t],
          r = ["paddingLeft", "paddingTop"][t],
          a = ["paddingRight", "paddingBottom"][t];if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);var o = this.root,
          s = document.defaultView.getComputedStyle(o);return (o[i] || mi(s[n]) || mi(o.style[n])) - (mi(s[r]) || 0) - (mi(s[a]) || 0) | 0;
    }, pathToImage: function pathToImage(t, e) {
      e = e || this.dpr;var n = document.createElement("canvas"),
          i = n.getContext("2d"),
          r = t.getBoundingRect(),
          a = t.style,
          o = a.shadowBlur * e,
          s = a.shadowOffsetX * e,
          l = a.shadowOffsetY * e,
          u = a.hasStroke() ? a.lineWidth : 0,
          h = Math.max(u / 2, -s + o),
          c = Math.max(u / 2, s + o),
          d = Math.max(u / 2, -l + o),
          f = Math.max(u / 2, l + o),
          p = r.width + h + c,
          g = r.height + d + f;n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;var v = { position: t.position, rotation: t.rotation, scale: t.scale };t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);var m = vi,
          y = new m({ style: { x: 0, y: 0, image: n } });return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;
    } };var Tp = function Tp(t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, of.call(this);
  };Tp.prototype = { constructor: Tp, addClip: function addClip(t) {
      this._clips.push(t);
    }, addAnimator: function addAnimator(t) {
      t.animation = this;for (var e = t.getClips(), n = 0; n < e.length; n++) {
        this.addClip(e[n]);
      }
    }, removeClip: function removeClip(t) {
      var e = u(this._clips, t);e >= 0 && this._clips.splice(e, 1);
    }, removeAnimator: function removeAnimator(t) {
      for (var e = t.getClips(), n = 0; n < e.length; n++) {
        this.removeClip(e[n]);
      }t.animation = null;
    }, _update: function _update() {
      for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
        var s = n[o],
            l = s.step(t, e);l && (r.push(l), a.push(s));
      }for (var o = 0; i > o;) {
        n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
      }i = r.length;for (var o = 0; i > o; o++) {
        a[o].fire(r[o]);
      }this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
    }, _startLoop: function _startLoop() {
      function t() {
        e._running && (ap(t), !e._paused && e._update());
      }var e = this;this._running = !0, ap(t);
    }, start: function start() {
      this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
    }, stop: function stop() {
      this._running = !1;
    }, pause: function pause() {
      this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
    }, resume: function resume() {
      this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
    }, clear: function clear() {
      this._clips = [];
    }, isFinished: function isFinished() {
      return !this._clips.length;
    }, animate: function animate(t, e) {
      e = e || {};var n = new Bf(t, e.loop, e.getter, e.setter);return this.addAnimator(n), n;
    } }, c(Tp, of);var Cp = function Cp() {
    this._track = [];
  };Cp.prototype = { constructor: Cp, recognize: function recognize(t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t);
    }, clear: function clear() {
      return this._track.length = 0, this;
    }, _doTrack: function _doTrack(t, e, n) {
      var i = t.touches;if (i) {
        for (var r = { points: [], touches: [], target: e, event: t }, a = 0, o = i.length; o > a; a++) {
          var s = i[a],
              l = de(n, s, {});r.points.push([l.zrX, l.zrY]), r.touches.push(s);
        }this._track.push(r);
      }
    }, _recognize: function _recognize(t) {
      for (var e in Ip) {
        if (Ip.hasOwnProperty(e)) {
          var n = Ip[e](this._track, t);if (n) return n;
        }
      }
    } };var Ip = { pinch: function pinch(t, e) {
      var n = t.length;if (n) {
        var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;if (r && r.length > 1 && i && i.length > 1) {
          var a = Si(i) / Si(r);!isFinite(a) && (a = 1), e.pinchScale = a;var o = Mi(i);return e.pinchX = o[0], e.pinchY = o[1], { type: "pinch", target: t[0].target, event: e };
        }
      }
    } },
      kp = 300,
      Dp = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      Ap = ["touchstart", "touchend", "touchmove"],
      Pp = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
      Op = p(Dp, function (t) {
    var e = t.replace("mouse", "pointer");return Pp[e] ? e : t;
  }),
      Lp = { mousemove: function mousemove(t) {
      t = pe(this.dom, t), this.trigger("mousemove", t);
    }, mouseout: function mouseout(t) {
      t = pe(this.dom, t);var e = t.toElement || t.relatedTarget;if (e != this.dom) for (; e && 9 != e.nodeType;) {
        if (e === this.dom) return;e = e.parentNode;
      }this.trigger("mouseout", t);
    }, touchstart: function touchstart(t) {
      t = pe(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date(), Ci(this, t, "start"), Lp.mousemove.call(this, t), Lp.mousedown.call(this, t), Ii(this);
    }, touchmove: function touchmove(t) {
      t = pe(this.dom, t), t.zrByTouch = !0, Ci(this, t, "change"), Lp.mousemove.call(this, t), Ii(this);
    }, touchend: function touchend(t) {
      t = pe(this.dom, t), t.zrByTouch = !0, Ci(this, t, "end"), Lp.mouseup.call(this, t), +new Date() - this._lastTouchMoment < kp && Lp.click.call(this, t), Ii(this);
    }, pointerdown: function pointerdown(t) {
      Lp.mousedown.call(this, t);
    }, pointermove: function pointermove(t) {
      ki(t) || Lp.mousemove.call(this, t);
    }, pointerup: function pointerup(t) {
      Lp.mouseup.call(this, t);
    }, pointerout: function pointerout(t) {
      ki(t) || Lp.mouseout.call(this, t);
    } };f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    Lp[t] = function (e) {
      e = pe(this.dom, e), this.trigger(t, e);
    };
  });var Ep = Ai.prototype;Ep.dispose = function () {
    for (var t = Dp.concat(Ap), e = 0; e < t.length; e++) {
      var n = t[e];ve(this.dom, Ti(n), this._handlers[n]);
    }
  }, Ep.setCursor = function (t) {
    this.dom.style && (this.dom.style.cursor = t || "default");
  }, c(Ai, of);var Bp = !Rd.canvasSupported,
      zp = { canvas: Mp },
      Rp = {},
      Fp = "4.0.5",
      Np = function Np(t, e, n) {
    n = n || {}, this.dom = e, this.id = t;var i = this,
        r = new Zf(),
        a = n.renderer;if (Bp) {
      if (!zp.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");a = "vml";
    } else a && zp[a] || (a = "canvas");var o = new zp[a](e, r, n, t);this.storage = r, this.painter = o;var s = Rd.node || Rd.worker ? null : new Ai(o.getViewportRoot());this.handler = new df(r, o, s, o.root), this.animation = new Tp({ stage: { update: y(this.flush, this) } }), this.animation.start(), this._needsRefresh;var l = r.delFromStorage,
        u = r.addToStorage;r.delFromStorage = function (t) {
      l.call(r, t), t && t.removeSelfFromZr(i);
    }, r.addToStorage = function (t) {
      u.call(r, t), t.addSelfToZr(i);
    };
  };Np.prototype = { constructor: Np, getId: function getId() {
      return this.id;
    }, add: function add(t) {
      this.storage.addRoot(t), this._needsRefresh = !0;
    }, remove: function remove(t) {
      this.storage.delRoot(t), this._needsRefresh = !0;
    }, configLayer: function configLayer(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
    }, setBackgroundColor: function setBackgroundColor(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
    }, refreshImmediately: function refreshImmediately() {
      this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
    }, refresh: function refresh() {
      this._needsRefresh = !0;
    }, flush: function flush() {
      var t;this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered");
    }, addHover: function addHover(t, e) {
      if (this.painter.addHover) {
        var n = this.painter.addHover(t, e);return this.refreshHover(), n;
      }
    }, removeHover: function removeHover(t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
    }, clearHover: function clearHover() {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
    }, refreshHover: function refreshHover() {
      this._needsRefreshHover = !0;
    }, refreshHoverImmediately: function refreshHoverImmediately() {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
    }, resize: function resize(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
    }, clearAnimation: function clearAnimation() {
      this.animation.clear();
    }, getWidth: function getWidth() {
      return this.painter.getWidth();
    }, getHeight: function getHeight() {
      return this.painter.getHeight();
    }, pathToImage: function pathToImage(t, e) {
      return this.painter.pathToImage(t, e);
    }, setCursorStyle: function setCursorStyle(t) {
      this.handler.setCursorStyle(t);
    }, findHover: function findHover(t, e) {
      return this.handler.findHover(t, e);
    }, on: function on(t, e, n) {
      this.handler.on(t, e, n);
    }, off: function off(t, e) {
      this.handler.off(t, e);
    }, trigger: function trigger(t, e) {
      this.handler.trigger(t, e);
    }, clear: function clear() {
      this.storage.delRoot(), this.painter.clear();
    }, dispose: function dispose() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Bi(this.id);
    } };var Hp = (Object.freeze || Object)({ version: Fp, init: Pi, dispose: Oi, getInstance: Li, registerPainter: Ei }),
      Vp = f,
      Wp = S,
      Gp = x,
      Xp = "series\x00",
      jp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
      Yp = 0,
      qp = ".",
      Up = "___EC__COMPONENT__CONTAINER___",
      Zp = 0,
      $p = function $p(t) {
    for (var e = 0; e < t.length; e++) {
      t[e][1] || (t[e][1] = t[e][0]);
    }return function (e, n, i) {
      for (var r = {}, a = 0; a < t.length; a++) {
        var o = t[a][1];if (!(n && u(n, o) >= 0 || i && u(i, o) < 0)) {
          var s = e.getShallow(o);null != s && (r[t[a][0]] = s);
        }
      }return r;
    };
  },
      Kp = $p([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      Qp = { getLineStyle: function getLineStyle(t) {
      var e = Kp(this, t),
          n = this.getLineDash(e.lineWidth);return n && (e.lineDash = n), e;
    }, getLineDash: function getLineDash(t) {
      null == t && (t = 1);var e = this.get("type"),
          n = Math.max(t, 2),
          i = 4 * t;return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n];
    } },
      Jp = $p([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
      tg = { getAreaStyle: function getAreaStyle(t, e) {
      return Jp(this, t, e);
    } },
      eg = Math.pow,
      ng = Math.sqrt,
      ig = 1e-8,
      rg = 1e-4,
      ag = ng(3),
      og = 1 / 3,
      sg = V(),
      lg = V(),
      ug = V(),
      hg = Math.min,
      cg = Math.max,
      dg = Math.sin,
      fg = Math.cos,
      pg = 2 * Math.PI,
      gg = V(),
      vg = V(),
      mg = V(),
      yg = [],
      _g = [],
      xg = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
      wg = [],
      bg = [],
      Sg = [],
      Mg = [],
      Tg = Math.min,
      Cg = Math.max,
      Ig = Math.cos,
      kg = Math.sin,
      Dg = Math.sqrt,
      Ag = Math.abs,
      Pg = "undefined" != typeof Float32Array,
      Og = function Og(t) {
    this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
  };Og.prototype = { constructor: Og, _xi: 0, _yi: 0, _x0: 0, _y0: 0, _ux: 0, _uy: 0, _len: 0, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function setScale(t, e) {
      this._ux = Ag(1 / Ff / t) || 0, this._uy = Ag(1 / Ff / e) || 0;
    }, getContext: function getContext() {
      return this._ctx;
    }, beginPath: function beginPath(t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
    }, moveTo: function moveTo(t, e) {
      return this.addData(xg.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    }, lineTo: function lineTo(t, e) {
      var n = Ag(t - this._xi) > this._ux || Ag(e - this._yi) > this._uy || this._len < 5;return this.addData(xg.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this;
    }, bezierCurveTo: function bezierCurveTo(t, e, n, i, r, a) {
      return this.addData(xg.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this;
    }, quadraticCurveTo: function quadraticCurveTo(t, e, n, i) {
      return this.addData(xg.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this;
    }, arc: function arc(t, e, n, i, r, a) {
      return this.addData(xg.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = Ig(r) * n + t, this._yi = kg(r) * n + e, this;
    }, arcTo: function arcTo(t, e, n, i, r) {
      return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
    }, rect: function rect(t, e, n, i) {
      return this._ctx && this._ctx.rect(t, e, n, i), this.addData(xg.R, t, e, n, i), this;
    }, closePath: function closePath() {
      this.addData(xg.Z);var t = this._ctx,
          e = this._x0,
          n = this._y0;return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this;
    }, fill: function fill(t) {
      t && t.fill(), this.toStatic();
    }, stroke: function stroke(t) {
      t && t.stroke(), this.toStatic();
    }, setLineDash: function setLineDash(t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;for (var e = 0, n = 0; n < t.length; n++) {
          e += t[n];
        }this._dashSum = e;
      }return this;
    }, setLineDashOffset: function setLineDashOffset(t) {
      return this._dashOffset = t, this;
    }, len: function len() {
      return this._len;
    }, setData: function setData(t) {
      var e = t.length;this.data && this.data.length == e || !Pg || (this.data = new Float32Array(e));for (var n = 0; e > n; n++) {
        this.data[n] = t[n];
      }this._len = e;
    }, appendPath: function appendPath(t) {
      t instanceof Array || (t = [t]);for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) {
        n += t[r].len();
      }Pg && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));for (var r = 0; e > r; r++) {
        for (var a = t[r].data, o = 0; o < a.length; o++) {
          this.data[i++] = a[o];
        }
      }this._len = i;
    }, addData: function addData(t) {
      if (this._saveData) {
        var e = this.data;this._len + arguments.length > e.length && (this._expandData(), e = this.data);for (var n = 0; n < arguments.length; n++) {
          e[this._len++] = arguments[n];
        }this._prevCmd = t;
      }
    }, _expandData: function _expandData() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) {
          t[e] = this.data[e];
        }this.data = t;
      }
    }, _needsDash: function _needsDash() {
      return this._lineDash;
    }, _dashedLineTo: function _dashedLineTo(t, e) {
      var n,
          i,
          r = this._dashSum,
          a = this._dashOffset,
          o = this._lineDash,
          s = this._ctx,
          l = this._xi,
          u = this._yi,
          h = t - l,
          c = e - u,
          d = Dg(h * h + c * c),
          f = l,
          p = u,
          g = o.length;for (h /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && t >= f || 0 > h && f >= t || 0 == h && (c > 0 && e >= p || 0 > c && p >= e);) {
        i = this._dashIdx, n = o[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? Tg(f, t) : Cg(f, t), c >= 0 ? Tg(p, e) : Cg(p, e));
      }h = f - t, c = p - e, this._dashOffset = -Dg(h * h + c * c);
    }, _dashedBezierTo: function _dashedBezierTo(t, e, n, i, r, a) {
      var o,
          s,
          l,
          u,
          h,
          c = this._dashSum,
          d = this._dashOffset,
          f = this._lineDash,
          p = this._ctx,
          g = this._xi,
          v = this._yi,
          m = or,
          y = 0,
          _ = this._dashIdx,
          x = f.length,
          w = 0;for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) {
        s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Dg(s * s + l * l);
      }for (; x > _ && (w += f[_], !(w > d)); _++) {}for (o = (w - d) / y; 1 >= o;) {
        u = m(g, t, n, r, o), h = m(v, e, i, a, o), _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h), o += f[_] / y, _ = (_ + 1) % x;
      }_ % 2 !== 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -Dg(s * s + l * l);
    }, _dashedQuadraticTo: function _dashedQuadraticTo(t, e, n, i) {
      var r = n,
          a = i;n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a);
    }, toStatic: function toStatic() {
      var t = this.data;t instanceof Array && (t.length = this._len, Pg && (this.data = new Float32Array(t)));
    }, getBoundingRect: function getBoundingRect() {
      wg[0] = wg[1] = Sg[0] = Sg[1] = Number.MAX_VALUE, bg[0] = bg[1] = Mg[0] = Mg[1] = -Number.MAX_VALUE;for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {case xg.M:
            i = t[a++], r = t[a++], e = i, n = r, Sg[0] = i, Sg[1] = r, Mg[0] = i, Mg[1] = r;break;case xg.L:
            _r(e, n, t[a], t[a + 1], Sg, Mg), e = t[a++], n = t[a++];break;case xg.C:
            xr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Sg, Mg), e = t[a++], n = t[a++];break;case xg.Q:
            wr(e, n, t[a++], t[a++], t[a], t[a + 1], Sg, Mg), e = t[a++], n = t[a++];break;case xg.A:
            var s = t[a++],
                l = t[a++],
                u = t[a++],
                h = t[a++],
                c = t[a++],
                d = t[a++] + c,
                f = (t[a++], 1 - t[a++]);1 == a && (i = Ig(c) * u + s, r = kg(c) * h + l), br(s, l, u, h, c, d, f, Sg, Mg), e = Ig(d) * u + s, n = kg(d) * h + l;break;case xg.R:
            i = e = t[a++], r = n = t[a++];var p = t[a++],
                g = t[a++];_r(i, r, i + p, r + g, Sg, Mg);break;case xg.Z:
            e = i, n = r;}oe(wg, wg, Sg), se(bg, bg, Mg);
      }return 0 === a && (wg[0] = wg[1] = bg[0] = bg[1] = 0), new gn(wg[0], wg[1], bg[0] - wg[0], bg[1] - wg[1]);
    }, rebuildPath: function rebuildPath(t) {
      for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {
        var d = s[c++];switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), d) {case xg.M:
            e = i = s[c++], n = r = s[c++], t.moveTo(i, r);break;case xg.L:
            a = s[c++], o = s[c++], (Ag(a - i) > l || Ag(o - r) > u || c === h - 1) && (t.lineTo(a, o), i = a, r = o);break;case xg.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case xg.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case xg.A:
            var f = s[c++],
                p = s[c++],
                g = s[c++],
                v = s[c++],
                m = s[c++],
                y = s[c++],
                _ = s[c++],
                x = s[c++],
                w = g > v ? g : v,
                b = g > v ? 1 : g / v,
                S = g > v ? v / g : 1,
                M = Math.abs(g - v) > .001,
                T = m + y;M ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, T, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, T, 1 - x), 1 == c && (e = Ig(m) * g + f, n = kg(m) * v + p), i = Ig(T) * g + f, r = kg(T) * v + p;break;case xg.R:
            e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);break;case xg.Z:
            t.closePath(), i = e, r = n;}
      }
    } }, Og.CMD = xg;var Lg = 2 * Math.PI,
      Eg = 2 * Math.PI,
      Bg = Og.CMD,
      zg = 2 * Math.PI,
      Rg = 1e-4,
      Fg = [-1, -1, -1],
      Ng = [-1, -1],
      Hg = ip.prototype.getCanvasPattern,
      Vg = Math.abs,
      Wg = new Og(!0);Rr.prototype = { constructor: Rr, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function brush(t, e) {
      var n = this.style,
          i = this.path || Wg,
          r = n.hasStroke(),
          a = n.hasFill(),
          o = n.fill,
          s = n.stroke,
          l = a && !!o.colorStops,
          u = r && !!s.colorStops,
          h = a && !!o.image,
          c = r && !!s.image;if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var d;l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d));
      }l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = Hg.call(o, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Hg.call(s, t));var f = n.lineDash,
          p = n.lineDashOffset,
          g = !!t.setLineDash,
          v = this.getGlobalScale();if (i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != n.fillOpacity) {
        var m = t.globalAlpha;t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m;
      } else i.fill(t);if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
        var m = t.globalAlpha;t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m;
      } else i.stroke(t);f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
    }, buildPath: function buildPath() {}, createPathProxy: function createPathProxy() {
      this.path = new Og();
    }, getBoundingRect: function getBoundingRect() {
      var t = this._rect,
          e = this.style,
          n = !t;
      if (n) {
        var i = this.path;i || (i = this.path = new Og()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect();
      }if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());if (this.__dirty || n) {
          r.copy(t);var a = e.lineWidth,
              o = e.strokeNoScale ? this.getLineScale() : 1;e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
        }return r;
      }return t;
    }, contain: function contain(t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style;if (t = n[0], e = n[1], i.contain(t, e)) {
        var a = this.path.data;if (r.hasStroke()) {
          var o = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1;if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), zr(a, o / s, t, e))) return !0;
        }if (r.hasFill()) return Br(a, t, e);
      }return !1;
    }, dirty: function dirty(t) {
      null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
    }, animateShape: function animateShape(t) {
      return this.animate("shape", t);
    }, attrKV: function attrKV(t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : gi.prototype.attrKV.call(this, t, e);
    }, setShape: function setShape(t, e) {
      var n = this.shape;if (n) {
        if (S(t)) for (var i in t) {
          t.hasOwnProperty(i) && (n[i] = t[i]);
        } else n[t] = e;this.dirty(!0);
      }return this;
    }, getLineScale: function getLineScale() {
      var t = this.transform;return t && Vg(t[0] - 1) > 1e-10 && Vg(t[3] - 1) > 1e-10 ? Math.sqrt(Vg(t[0] * t[3] - t[2] * t[1])) : 1;
    } }, Rr.extend = function (t) {
    var e = function e(_e2) {
      Rr.call(this, _e2), t.style && this.style.extendFrom(t.style, !1);var n = t.shape;if (n) {
        this.shape = this.shape || {};var i = this.shape;for (var r in n) {
          !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
        }
      }t.init && t.init.call(this, _e2);
    };h(e, Rr);for (var n in t) {
      "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
    }return e;
  }, h(Rr, gi);var Gg = Og.CMD,
      Xg = [[], [], []],
      jg = Math.sqrt,
      Yg = Math.atan2,
      qg = function qg(t, e) {
    var n,
        i,
        r,
        a,
        o,
        s,
        l = t.data,
        u = Gg.M,
        h = Gg.C,
        c = Gg.L,
        d = Gg.R,
        f = Gg.A,
        p = Gg.Q;for (r = 0, a = 0; r < l.length;) {
      switch (n = l[r++], a = r, i = 0, n) {case u:
          i = 1;break;case c:
          i = 1;break;case h:
          i = 3;break;case p:
          i = 2;break;case f:
          var g = e[4],
              v = e[5],
              m = jg(e[0] * e[0] + e[1] * e[1]),
              y = jg(e[2] * e[2] + e[3] * e[3]),
              _ = Yg(-e[1] / y, e[0] / m);l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;break;case d:
          s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1];}for (o = 0; i > o; o++) {
        var s = Xg[o];s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }
    }
  },
      Ug = Math.sqrt,
      Zg = Math.sin,
      $g = Math.cos,
      Kg = Math.PI,
      Qg = function Qg(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  },
      Jg = function Jg(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (Qg(t) * Qg(e));
  },
      tv = function tv(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Jg(t, e));
  },
      ev = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
      nv = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
      iv = function iv(t) {
    gi.call(this, t);
  };iv.prototype = { constructor: iv, type: "text", brush: function brush(t, e) {
      var n = this.style;this.__dirty && Kn(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;var i = n.text;null != i && (i += ""), pi(i, n) && (this.setTransform(t), Jn(this, t, i, n, null, e), this.restoreTransform(t));
    }, getBoundingRect: function getBoundingRect() {
      var t = this.style;if (this.__dirty && Kn(t, !0), !this._rect) {
        var e = t.text;null != e ? e += "" : e = "";var n = En(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);if (n.x += t.x || 0, n.y += t.y || 0, hi(t.textStroke, t.textStrokeWidth)) {
          var i = t.textStrokeWidth;n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;
        }this._rect = n;
      }return this._rect;
    } }, h(iv, gi);var rv = Rr.extend({ type: "circle", shape: { cx: 0, cy: 0, r: 0 }, buildPath: function buildPath(t, e, n) {
      n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
    } }),
      av = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
      ov = function ov(t) {
    return Rd.browser.ie && Rd.browser.version >= 11 ? function () {
      var e,
          n = this.__clipPaths,
          i = this.style;if (n) for (var r = 0; r < n.length; r++) {
        var a = n[r],
            o = a && a.shape,
            s = a && a.type;if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
          for (var l = 0; l < av.length; l++) {
            av[l][2] = i[av[l][0]], i[av[l][0]] = av[l][1];
          }e = !0;break;
        }
      }if (t.apply(this, arguments), e) for (var l = 0; l < av.length; l++) {
        i[av[l][0]] = av[l][2];
      }
    } : t;
  },
      sv = Rr.extend({ type: "sector", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, brush: ov(Rr.prototype.brush), buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          u = Math.cos(o),
          h = Math.sin(o);t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath();
    } }),
      lv = Rr.extend({ type: "ring", shape: { cx: 0, cy: 0, r: 0, r0: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
    } }),
      uv = function uv(t, e) {
    for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) {
      r += ee(t[a - 1], t[a]);
    }var o = r / 2;o = n > o ? n : o;for (var a = 0; o > a; a++) {
      var s,
          l,
          u,
          h = a / (o - 1) * (e ? n : n - 1),
          c = Math.floor(h),
          d = h - c,
          f = t[c % n];e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);var p = d * d,
          g = d * p;i.push([Xr(s[0], f[0], l[0], u[0], d, p, g), Xr(s[1], f[1], l[1], u[1], d, p, g)]);
    }return i;
  },
      hv = function hv(t, e, n, i) {
    var r,
        a,
        o,
        s,
        l = [],
        u = [],
        h = [],
        c = [];if (i) {
      o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];for (var d = 0, f = t.length; f > d; d++) {
        oe(o, o, t[d]), se(s, s, t[d]);
      }oe(o, o, i[0]), se(s, s, i[1]);
    }for (var d = 0, f = t.length; f > d; d++) {
      var p = t[d];if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];else {
        if (0 === d || d === f - 1) {
          l.push(G(t[d]));continue;
        }r = t[d - 1], a = t[d + 1];
      }q(u, a, r), J(u, u, e);var g = ee(p, r),
          v = ee(p, a),
          m = g + v;0 !== m && (g /= m, v /= m), J(h, u, -g), J(c, u, v);var y = j([], p, h),
          _ = j([], p, c);i && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)), l.push(y), l.push(_);
    }return n && l.push(l.shift()), l;
  },
      cv = Rr.extend({ type: "polygon", shape: { points: null, smooth: !1, smoothConstraint: null }, buildPath: function buildPath(t, e) {
      jr(t, e, !0);
    } }),
      dv = Rr.extend({ type: "polyline", shape: { points: null, smooth: !1, smoothConstraint: null }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      jr(t, e, !1);
    } }),
      fv = Rr.extend({ type: "rect", shape: { r: 0, x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.x,
          i = e.y,
          r = e.width,
          a = e.height;e.r ? $n(t, e) : t.rect(n, i, r, a), t.closePath();
    } }),
      pv = Rr.extend({ type: "line", shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.percent;0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a));
    }, pointAt: function pointAt(t) {
      var e = this.shape;return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
    } }),
      gv = [],
      vv = Rr.extend({ type: "bezier-curve", shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          u = e.cpy2,
          h = e.percent;0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (vr(n, o, r, h, gv), o = gv[1], r = gv[2], vr(i, s, a, h, gv), s = gv[1], a = gv[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > h && (hr(n, o, l, r, h, gv), o = gv[1], l = gv[2], r = gv[3], hr(i, s, u, a, h, gv), s = gv[1], u = gv[2], a = gv[3]), t.bezierCurveTo(o, s, l, u, r, a)));
    }, pointAt: function pointAt(t) {
      return Yr(this.shape, t, !1);
    }, tangentAt: function tangentAt(t) {
      var e = Yr(this.shape, t, !0);return te(e, e);
    } }),
      mv = Rr.extend({ type: "arc", shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          u = Math.sin(a);t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s);
    } }),
      yv = Rr.extend({ type: "compound", shape: { paths: null }, _updatePathDirty: function _updatePathDirty() {
      for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) {
        t = t || e[n].__dirtyPath;
      }this.__dirtyPath = t, this.__dirty = this.__dirty || t;
    }, beforeBrush: function beforeBrush() {
      this._updatePathDirty();for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) {
        t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1]);
      }
    }, buildPath: function buildPath(t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++) {
        n[i].buildPath(t, n[i].shape, !0);
      }
    }, afterBrush: function afterBrush() {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {
        t[e].__dirtyPath = !1;
      }
    }, getBoundingRect: function getBoundingRect() {
      return this._updatePathDirty(), Rr.prototype.getBoundingRect.call(this);
    } }),
      _v = function _v(t) {
    this.colorStops = t || [];
  };_v.prototype = { constructor: _v, addColorStop: function addColorStop(t, e) {
      this.colorStops.push({ offset: t, color: e });
    } };var xv = function xv(t, e, n, i, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, _v.call(this, r);
  };xv.prototype = { constructor: xv }, h(xv, _v);var wv = function wv(t, e, n, i, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, _v.call(this, i);
  };wv.prototype = { constructor: wv }, h(wv, _v), qr.prototype.incremental = !0, qr.prototype.clearDisplaybles = function () {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1;
  }, qr.prototype.addDisplayable = function (t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
  }, qr.prototype.addDisplayables = function (t, e) {
    e = e || !1;for (var n = 0; n < t.length; n++) {
      this.addDisplayable(t[n], e);
    }
  }, qr.prototype.eachPendingDisplayable = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      t && t(this._displayables[e]);
    }for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      t && t(this._temporaryDisplayables[e]);
    }
  }, qr.prototype.update = function () {
    this.updateTransform();for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];e.parent = this, e.update(), e.parent = null;
    }for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];e.parent = this, e.update(), e.parent = null;
    }
  }, qr.prototype.brush = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t);
    }this._cursor = e;for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t);
    }this._temporaryDisplayables = [], this.notClear = !0;
  };var bv = [];qr.prototype.getBoundingRect = function () {
    if (!this._rect) {
      for (var t = new gn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
        var n = this._displayables[e],
            i = n.getBoundingRect().clone();n.needLocalTransform() && i.applyTransform(n.getLocalTransform(bv)), t.union(i);
      }this._rect = t;
    }return this._rect;
  }, qr.prototype.contain = function (t, e) {
    var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect();if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {
      var a = this._displayables[r];if (a.contain(t, e)) return !0;
    }return !1;
  }, h(qr, gi);var Sv = Math.round,
      Mv = Math.max,
      Tv = Math.min,
      Cv = {},
      Iv = Gr,
      kv = F(),
      Dv = 0,
      Av = (Object.freeze || Object)({ extendShape: Ur, extendPath: Zr, makePath: $r, makeImage: Kr, mergePath: Iv, resizePath: Jr, subPixelOptimizeLine: ta, subPixelOptimizeRect: ea, subPixelOptimize: na, setElementHoverStyle: ca, isInEmphasis: da, setHoverStyle: ma, setAsHoverStyleTrigger: ya, setLabelStyle: _a, setTextStyle: xa, setText: wa, getFont: ka, updateProps: Aa, initProps: Pa, getTransform: Oa, applyTransform: La, transformDirection: Ea, groupTransition: Ba, clipPointsByRect: za, clipRectByRect: Ra, createIcon: Fa, Group: Yf, Image: vi, Text: iv, Circle: rv, Sector: sv, Ring: lv, Polygon: cv, Polyline: dv, Rect: fv, Line: pv, BezierCurve: vv, Arc: mv, IncrementalDisplayable: qr, CompoundPath: yv, LinearGradient: xv, RadialGradient: wv, BoundingRect: gn }),
      Pv = ["textStyle", "color"],
      Ov = { getTextColor: function getTextColor(t) {
      var e = this.ecModel;return this.getShallow("color") || (!t && e ? e.get(Pv) : null);
    }, getFont: function getFont() {
      return ka({ fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, this.ecModel);
    }, getTextRect: function getTextRect(t) {
      return En(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"));
    } },
      Lv = $p([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
      Ev = { getItemStyle: function getItemStyle(t, e) {
      var n = Lv(this, t, e),
          i = this.getBorderLineDash();return i && (n.lineDash = i), n;
    }, getBorderLineDash: function getBorderLineDash() {
      var t = this.get("borderType");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
    } },
      Bv = c,
      zv = ji();Na.prototype = { constructor: Na, init: null, mergeOption: function mergeOption(t) {
      r(this.option, t, !0);
    }, get: function get(t, e) {
      return null == t ? this.option : Ha(this.option, this.parsePath(t), !e && Va(this, t));
    }, getShallow: function getShallow(t, e) {
      var n = this.option,
          i = null == n ? n : n[t],
          r = !e && Va(this, t);return null == i && r && (i = r.getShallow(t)), i;
    }, getModel: function getModel(t, e) {
      var n,
          i = null == t ? this.option : Ha(this.option, t = this.parsePath(t));return e = e || (n = Va(this, t)) && n.getModel(t), new Na(i, e, this.ecModel);
    }, isEmpty: function isEmpty() {
      return null == this.option;
    }, restoreData: function restoreData() {}, clone: function clone() {
      var t = this.constructor;return new t(i(this.option));
    }, setReadOnly: function setReadOnly() {}, parsePath: function parsePath(t) {
      return "string" == typeof t && (t = t.split(".")), t;
    }, customizeGetParent: function customizeGetParent(t) {
      zv(this).getParent = t;
    }, isAnimationEnabled: function isAnimationEnabled() {
      if (!Rd.node) {
        if (null != this.option.animation) return !!this.option.animation;if (this.parentModel) return this.parentModel.isAnimationEnabled();
      }
    } }, Ji(Na), tr(Na), Bv(Na, Qp), Bv(Na, tg), Bv(Na, Ov), Bv(Na, Ev);var Rv = 0,
      Fv = 1e-4,
      Nv = 9007199254740991,
      Hv = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
      Vv = (Object.freeze || Object)({ linearMap: Ya, parsePercent: qa, round: Ua, asc: Za, getPrecision: $a, getPrecisionSafe: Ka, getPixelPrecision: Qa, getPercentWithPrecision: Ja, MAX_SAFE_INTEGER: Nv, remRadian: to, isRadianAroundZero: eo, parseDate: no, quantity: io, nice: ao, quantile: oo, reformIntervals: so, isNumeric: lo }),
      Wv = O,
      Gv = /([&<>"'])/g,
      Xv = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
      jv = ["a", "b", "c", "d", "e", "f", "g"],
      Yv = function Yv(t, e) {
    return "{" + t + (null == e ? "" : e) + "}";
  },
      qv = Hn,
      Uv = En,
      Zv = (Object.freeze || Object)({ addCommas: uo, toCamelCase: ho, normalizeCssArray: Wv, encodeHTML: co, formatTpl: fo, formatTplSimple: po, getTooltipMarker: go, formatTime: mo, capitalFirst: yo, truncateText: qv, getTextRect: Uv }),
      $v = f,
      Kv = ["left", "right", "top", "bottom", "width", "height"],
      Qv = [["width", "left", "right"], ["height", "top", "bottom"]],
      Jv = (_(_o, "vertical"), _(_o, "horizontal"), { getBoxLayoutParams: function getBoxLayoutParams() {
      return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get("bottom"), width: this.get("width"), height: this.get("height") };
    } }),
      tm = ji(),
      em = Na.extend({ type: "component", id: "", name: "", mainType: "", subType: "", componentIndex: 0, defaultOption: null, ecModel: null, dependentModels: [], uid: null, layoutMode: null, $constructor: function $constructor(t, e, n, i) {
      Na.call(this, t, e, n, i), this.uid = Wa("ec_cpt_model");
    }, init: function init(t, e, n) {
      this.mergeDefaultAndTheme(t, n);
    }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var n = this.layoutMode,
          i = n ? bo(t) : {},
          a = e.getTheme();r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && wo(t, i, n);
    }, mergeOption: function mergeOption(t) {
      r(this.option, t, !0);var e = this.layoutMode;e && wo(this.option, t, e);
    }, optionUpdated: function optionUpdated() {}, getDefaultOption: function getDefaultOption() {
      var t = tm(this);if (!t.defaultOption) {
        for (var e = [], n = this.constructor; n;) {
          var i = n.prototype.defaultOption;i && e.push(i), n = n.superClass;
        }for (var a = {}, o = e.length - 1; o >= 0; o--) {
          a = r(a, e[o], !0);
        }t.defaultOption = a;
      }return t.defaultOption;
    }, getReferringComponents: function getReferringComponents(t) {
      return this.ecModel.queryComponents({ mainType: t, index: this.get(t + "Index", !0), id: this.get(t + "Id", !0) });
    } });ir(em, { registerWhenExtend: !0 }), Ga(em), Xa(em, Mo), c(em, Jv);var nm = "";"undefined" != typeof navigator && (nm = navigator.platform || "");var im = { color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], gradientColor: ["#f6efa6", "#d88273", "#bf444c"], textStyle: { fontFamily: nm.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, animation: "auto", animationDuration: 1e3, animationDurationUpdate: 300, animationEasing: "exponentialOut", animationEasingUpdate: "cubicOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3, useUTC: !1 },
      rm = ji(),
      am = { clearColorPalette: function clearColorPalette() {
      rm(this).colorIdx = 0, rm(this).colorNameMap = {};
    }, getColorFromPalette: function getColorFromPalette(t, e, n) {
      e = e || this;var i = rm(e),
          r = i.colorIdx || 0,
          a = i.colorNameMap = i.colorNameMap || {};if (a.hasOwnProperty(t)) return a[t];var o = zi(this.get("color", !0)),
          s = this.get("colorLayer", !0),
          l = null != n && s ? To(s, n) : o;if (l = l || o, l && l.length) {
        var u = l[r];return t && (a[t] = u), i.colorIdx = (r + 1) % l.length, u;
      }
    } },
      om = { cartesian2d: function cartesian2d(t, e, n, i) {
      var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), Io(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Io(a) && (i.set("y", a), e.firstCategoryDimIndex = 1);
    }, singleAxis: function singleAxis(t, e, n, i) {
      var r = t.getReferringComponents("singleAxis")[0];e.coordSysDims = ["single"], n.set("single", r), Io(r) && (i.set("single", r), e.firstCategoryDimIndex = 0);
    }, polar: function polar(t, e, n, i) {
      var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Io(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), Io(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1);
    }, geo: function geo(t, e) {
      e.coordSysDims = ["lng", "lat"];
    }, parallel: function parallel(t, e, n, i) {
      var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();f(a.parallelAxisIndex, function (t, a) {
        var s = r.getComponent("parallelAxis", t),
            l = o[a];n.set(l, s), Io(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a);
      });
    } },
      sm = "original",
      lm = "arrayRows",
      um = "objectRows",
      hm = "keyedColumns",
      cm = "unknown",
      dm = "typedArray",
      fm = "column",
      pm = "row";ko.seriesDataToSource = function (t) {
    return new ko({ data: t, sourceFormat: T(t) ? dm : sm, fromDataset: !1 });
  }, tr(ko);var gm = ji(),
      vm = "\x00_ec_inner",
      mm = Na.extend({ init: function init(t, e, n, i) {
      n = n || {}, this.option = null, this._theme = new Na(n), this._optionManager = i;
    }, setOption: function setOption(t, e) {
      L(!(vm in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
    }, resetOption: function resetOption(t) {
      var e = !1,
          n = this._optionManager;if (!t || "recreate" === t) {
        var i = n.mountOption("recreate" === t);this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Go.call(this, i), e = !0;
      }if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
        var r = n.getTimelineOption(this);r && (this.mergeOption(r), e = !0);
      }if (!t || "recreate" === t || "media" === t) {
        var a = n.getMediaOption(this, this._api);a.length && f(a, function (t) {
          this.mergeOption(t, e = !0);
        }, this);
      }return e;
    }, mergeOption: function mergeOption(t) {
      function e(e, i) {
        var r = zi(t[e]),
            s = Hi(a.get(e), r);Vi(s), f(s, function (t) {
          var n = t.option;S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = jo(e, n, t.exist));
        });var l = Xo(a, i);n[e] = [], a.set(e, []), f(s, function (t, i) {
          var r = t.exist,
              s = t.option;if (L(S(s) || r, "Empty component definition"), s) {
            var u = em.getClass(e, t.keyInfo.subType, !0);if (r && r instanceof u) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);else {
              var h = o({ dependentModels: l, componentIndex: i }, t.keyInfo);r = new u(s, this, this, h), o(r, h), r.init(s, this, this, h), r.optionUpdated(null, !0);
            }
          } else r.mergeOption({}, this), r.optionUpdated({}, !1);a.get(e)[i] = r, n[e][i] = r.option;
        }, this), "series" === e && Yo(this, a.get("series"));
      }var n = this.option,
          a = this._componentsMap,
          s = [];Po(this), f(t, function (t, e) {
        null != t && (em.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0));
      }), em.topologicalTravel(s, em.getAllClassMainTypes(), e, this), this._seriesIndicesMap = F(this._seriesIndices = this._seriesIndices || []);
    }, getOption: function getOption() {
      var t = i(this.option);return f(t, function (e, n) {
        if (em.hasClass(n)) {
          for (var e = zi(e), i = e.length - 1; i >= 0; i--) {
            Gi(e[i]) && e.splice(i, 1);
          }t[n] = e;
        }
      }), delete t[vm], t;
    }, getTheme: function getTheme() {
      return this._theme;
    }, getComponent: function getComponent(t, e) {
      var n = this._componentsMap.get(t);return n ? n[e || 0] : void 0;
    }, queryComponents: function queryComponents(t) {
      var e = t.mainType;if (!e) return [];var n = t.index,
          i = t.id,
          r = t.name,
          a = this._componentsMap.get(e);if (!a || !a.length) return [];var o;if (null != n) x(n) || (n = [n]), o = v(p(n, function (t) {
        return a[t];
      }), function (t) {
        return !!t;
      });else if (null != i) {
        var s = x(i);o = v(a, function (t) {
          return s && u(i, t.id) >= 0 || !s && t.id === i;
        });
      } else if (null != r) {
        var l = x(r);o = v(a, function (t) {
          return l && u(r, t.name) >= 0 || !l && t.name === r;
        });
      } else o = a.slice();return qo(o, t);
    }, findComponents: function findComponents(t) {
      function e(t) {
        var e = r + "Index",
            n = r + "Id",
            i = r + "Name";return !t || null == t[e] && null == t[n] && null == t[i] ? null : { mainType: r, index: t[e], id: t[n], name: t[i] };
      }function n(e) {
        return t.filter ? v(e, t.filter) : e;
      }var i = t.query,
          r = t.mainType,
          a = e(i),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);return n(qo(o, t));
    }, eachComponent: function eachComponent(t, e, n) {
      var i = this._componentsMap;if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {
        f(t, function (t, r) {
          e.call(n, i, t, r);
        });
      });else if (b(t)) f(i.get(t), e, n);else if (S(t)) {
        var r = this.findComponents(t);f(r, e, n);
      }
    }, getSeriesByName: function getSeriesByName(t) {
      var e = this._componentsMap.get("series");return v(e, function (e) {
        return e.name === t;
      });
    }, getSeriesByIndex: function getSeriesByIndex(t) {
      return this._componentsMap.get("series")[t];
    }, getSeriesByType: function getSeriesByType(t) {
      var e = this._componentsMap.get("series");return v(e, function (e) {
        return e.subType === t;
      });
    }, getSeries: function getSeries() {
      return this._componentsMap.get("series").slice();
    }, getSeriesCount: function getSeriesCount() {
      return this._componentsMap.get("series").length;
    }, eachSeries: function eachSeries(t, e) {
      f(this._seriesIndices, function (n) {
        var i = this._componentsMap.get("series")[n];t.call(e, i, n);
      }, this);
    }, eachRawSeries: function eachRawSeries(t, e) {
      f(this._componentsMap.get("series"), t, e);
    }, eachSeriesByType: function eachSeriesByType(t, e, n) {
      f(this._seriesIndices, function (i) {
        var r = this._componentsMap.get("series")[i];r.subType === t && e.call(n, r, i);
      }, this);
    }, eachRawSeriesByType: function eachRawSeriesByType(t, e, n) {
      return f(this.getSeriesByType(t), e, n);
    }, isSeriesFiltered: function isSeriesFiltered(t) {
      return null == this._seriesIndicesMap.get(t.componentIndex);
    }, getCurrentSeriesIndices: function getCurrentSeriesIndices() {
      return (this._seriesIndices || []).slice();
    }, filterSeries: function filterSeries(t, e) {
      var n = v(this._componentsMap.get("series"), t, e);Yo(this, n);
    }, restoreData: function restoreData(t) {
      var e = this._componentsMap;Yo(this, e.get("series"));var n = [];e.each(function (t, e) {
        n.push(e);
      }), em.topologicalTravel(n, em.getAllClassMainTypes(), function (n) {
        f(e.get(n), function (e) {
          ("series" !== n || !Vo(e, t)) && e.restoreData();
        });
      });
    } });c(mm, am);var ym = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
      _m = {};Zo.prototype = { constructor: Zo, create: function create(t, e) {
      var n = [];f(_m, function (i) {
        var r = i.create(t, e);n = n.concat(r || []);
      }), this._coordinateSystems = n;
    }, update: function update(t, e) {
      f(this._coordinateSystems, function (n) {
        n.update && n.update(t, e);
      });
    }, getCoordinateSystems: function getCoordinateSystems() {
      return this._coordinateSystems.slice();
    } }, Zo.register = function (t, e) {
    _m[t] = e;
  }, Zo.get = function (t) {
    return _m[t];
  };var xm = f,
      wm = i,
      bm = p,
      Sm = r,
      Mm = /^(min|max)?(.+)$/;$o.prototype = { constructor: $o, setOption: function setOption(t, e) {
      t && f(zi(t.series), function (t) {
        t && t.data && T(t.data) && B(t.data);
      }), t = wm(t, !0);var n = this._optionBackup,
          i = Ko.call(this, t, e, !n);this._newBaseOption = i.baseOption, n ? (es(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
    }, mountOption: function mountOption(t) {
      var e = this._optionBackup;return this._timelineOptions = bm(e.timelineOptions, wm), this._mediaList = bm(e.mediaList, wm), this._mediaDefault = wm(e.mediaDefault), this._currentMediaIndices = [], wm(t ? e.baseOption : this._newBaseOption);
    }, getTimelineOption: function getTimelineOption(t) {
      var e,
          n = this._timelineOptions;if (n.length) {
        var i = t.getComponent("timeline");i && (e = wm(n[i.getCurrentIndex()], !0));
      }return e;
    }, getMediaOption: function getMediaOption() {
      var t = this._api.getWidth(),
          e = this._api.getHeight(),
          n = this._mediaList,
          i = this._mediaDefault,
          r = [],
          a = [];if (!n.length && !i) return a;for (var o = 0, s = n.length; s > o; o++) {
        Qo(n[o].query, t, e) && r.push(o);
      }return !r.length && i && (r = [-1]), r.length && !ts(r, this._currentMediaIndices) && (a = bm(r, function (t) {
        return wm(-1 === t ? i.option : n[t].option);
      })), this._currentMediaIndices = r, a;
    } };var Tm = f,
      Cm = S,
      Im = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
      km = function km(t, e) {
    Tm(ls(t.series), function (t) {
      Cm(t) && ss(t);
    });var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Tm(n, function (e) {
      Tm(ls(t[e]), function (t) {
        t && (as(t, "axisLabel"), as(t.axisPointer, "label"));
      });
    }), Tm(ls(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault;as(e, "axisLabel"), as(e && e.axisPointer, "label");
    }), Tm(ls(t.calendar), function (t) {
      is(t, "itemStyle"), as(t, "dayLabel"), as(t, "monthLabel"), as(t, "yearLabel");
    }), Tm(ls(t.radar), function (t) {
      as(t, "name");
    }), Tm(ls(t.geo), function (t) {
      Cm(t) && (os(t), Tm(ls(t.regions), function (t) {
        os(t);
      }));
    }), Tm(ls(t.timeline), function (t) {
      os(t), is(t, "label"), is(t, "itemStyle"), is(t, "controlStyle", !0);var e = t.data;x(e) && f(e, function (t) {
        S(t) && (is(t, "label"), is(t, "itemStyle"));
      });
    }), Tm(ls(t.toolbox), function (t) {
      is(t, "iconStyle"), Tm(t.feature, function (t) {
        is(t, "iconStyle");
      });
    }), as(us(t.axisPointer), "label"), as(us(t.tooltip).axisPointer, "label");
  },
      Dm = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
      Am = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
      Pm = function Pm(t, e) {
    km(t, e), t.series = zi(t.series), f(t.series, function (t) {
      if (S(t)) {
        var e = t.type;if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
          var n = hs(t, "pointer.color");null != n && cs(t, "itemStyle.normal.color", n);
        }ds(t);
      }
    }), t.dataRange && (t.visualMap = t.dataRange), f(Am, function (e) {
      var n = t[e];n && (x(n) || (n = [n]), f(n, function (t) {
        ds(t);
      }));
    });
  },
      Om = function Om(t) {
    var e = F();t.eachSeries(function (t) {
      var n = t.get("stack");if (n) {
        var i = e.get(n) || e.set(n, []),
            r = t.getData(),
            a = { stackResultDimension: r.getCalculationInfo("stackResultDimension"), stackedOverDimension: r.getCalculationInfo("stackedOverDimension"), stackedDimension: r.getCalculationInfo("stackedDimension"), stackedByDimension: r.getCalculationInfo("stackedByDimension"), isStackedByIndex: r.getCalculationInfo("isStackedByIndex"), data: r, seriesModel: t };if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a);
      }
    }), e.each(fs);
  },
      Lm = ps.prototype;Lm.pure = !1, Lm.persistent = !0, Lm.getSource = function () {
    return this._source;
  };var Em = { arrayRows_column: { pure: !0, count: function count() {
        return Math.max(0, this._data.length - this._source.startIndex);
      }, getItem: function getItem(t) {
        return this._data[t + this._source.startIndex];
      }, appendData: ms }, arrayRows_row: { pure: !0, count: function count() {
        var t = this._data[0];return t ? Math.max(0, t.length - this._source.startIndex) : 0;
      }, getItem: function getItem(t) {
        t += this._source.startIndex;for (var e = [], n = this._data, i = 0; i < n.length; i++) {
          var r = n[i];e.push(r ? r[t] : null);
        }return e;
      }, appendData: function appendData() {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      } }, objectRows: { pure: !0, count: gs, getItem: vs, appendData: ms }, keyedColumns: { pure: !0, count: function count() {
        var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];return e ? e.length : 0;
      }, getItem: function getItem(t) {
        for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
          var r = this._data[n[i].name];e.push(r ? r[t] : null);
        }return e;
      }, appendData: function appendData(t) {
        var e = this._data;f(t, function (t, n) {
          for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) {
            i.push(t[r]);
          }
        });
      } }, original: { count: gs, getItem: vs, appendData: ms }, typedArray: { persistent: !1, pure: !0, count: function count() {
        return this._data ? this._data.length / this._dimSize : 0;
      }, getItem: function getItem(t, e) {
        t -= this._offset, e = e || [];for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) {
          e[i] = this._data[n + i];
        }return e;
      }, appendData: function appendData(t) {
        this._data = t;
      }, clean: function clean() {
        this._offset += this.count(), this._data = null;
      } } },
      Bm = { arrayRows: ys, objectRows: function objectRows(t, e, n, i) {
      return null != n ? t[i] : t;
    }, keyedColumns: ys, original: function original(t, e, n) {
      var i = Fi(t);return null != n && i instanceof Array ? i[n] : i;
    }, typedArray: ys },
      zm = { arrayRows: _s, objectRows: function objectRows(t, e) {
      return xs(t[e], this._dimensionInfos[e]);
    }, keyedColumns: _s, original: function original(t, e, n, i) {
      var r = t && (null == t.value ? t : t.value);return !this._rawData.pure && Ni(t) && (this.hasItemOption = !0), xs(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
    }, typedArray: function typedArray(t, e, n, i) {
      return t[i];
    } },
      Rm = /\{@(.+?)\}/g,
      Fm = { getDataParams: function getDataParams(t, e) {
      var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          a = n.getName(t),
          o = n.getRawDataItem(t),
          s = n.getItemVisual(t, "color"),
          l = this.ecModel.getComponent("tooltip"),
          u = l && l.get("renderMode"),
          h = $i(u),
          c = this.mainType,
          d = "series" === c;return { componentType: c, componentSubType: this.subType, componentIndex: this.componentIndex, seriesType: d ? this.subType : null, seriesIndex: this.seriesIndex, seriesId: d ? this.id : null, seriesName: d ? this.name : null, name: a, dataIndex: r, data: o, dataType: e, value: i, color: s, marker: go({ color: s, renderMode: h }), $vars: ["seriesName", "name", "value"] };
    }, getFormattedLabel: function getFormattedLabel(t, e, n, i, r) {
      e = e || "normal";var a = this.getData(n),
          o = a.getItemModel(t),
          s = this.getDataParams(t, n);null != i && s.value instanceof Array && (s.value = s.value[i]);var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);if ("function" == typeof l) return s.status = e, l(s);if ("string" == typeof l) {
        var u = fo(l, s);return u.replace(Rm, function (e, n) {
          var i = n.length;return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), ws(a, t, n);
        });
      }
    }, getRawValue: function getRawValue(t, e) {
      return ws(this.getData(e), t);
    }, formatTooltip: function formatTooltip() {} },
      Nm = Ss.prototype;Nm.perform = function (t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t;
    }var n = this._upstream,
        i = t && t.skip;if (this._dirty && n) {
      var r = this.context;r.data = r.outputData = n.context.outputData;
    }this.__pipeline && (this.__pipeline.currentTask = this);var a;this._plan && !i && (a = this._plan(this.context));var o = e(this._modBy),
        s = this._modDataCount || 0,
        l = e(t && t.modBy),
        u = t && t.modDataCount || 0;(o !== l || s !== u) && (a = "reset");var h;(this._dirty || "reset" === a) && (this._dirty = !1, h = Ts(this, i)), this._modBy = l, this._modDataCount = u;var c = t && t.step;if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
      var d = this._dueIndex,
          f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);if (!i && (h || f > d)) {
        var p = this._progress;if (x(p)) for (var g = 0; g < p.length; g++) {
          Ms(this, p[g], d, f, l, u);
        } else Ms(this, p, d, f, l, u);
      }this._dueIndex = f;var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;this._outputDueEnd = v;
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;return this.unfinished();
  };var Hm = function () {
    function t() {
      return n > i ? i++ : null;
    }function e() {
      var t = i % o * r + Math.ceil(i / o),
          e = i >= n ? null : a > t ? t : i;return i++, e;
    }var n,
        i,
        r,
        a,
        o,
        s = { reset: function reset(l, u, h, c) {
        i = l, n = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;
      } };return s;
  }();Nm.dirty = function () {
    this._dirty = !0, this._onDirty && this._onDirty(this.context);
  }, Nm.unfinished = function () {
    return this._progress && this._dueIndex < this._dueEnd;
  }, Nm.pipe = function (t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
  }, Nm.dispose = function () {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
  }, Nm.getUpstream = function () {
    return this._upstream;
  }, Nm.getDownstream = function () {
    return this._downstream;
  }, Nm.setOutputEnd = function (t) {
    this._outputDueEnd = this._settedOutputEnd = t;
  };var Vm = ji(),
      Wm = em.extend({ type: "series.__base__", seriesIndex: 0, coordinateSystem: null, defaultOption: null, legendDataProvider: null, visualColorAccessPath: "itemStyle.color", layoutMode: null, init: function init(t, e, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = bs({ count: ks, reset: Ds }), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(t, n), Oo(this);var i = this.getInitialData(t, n);Ps(i, this), this.dataTask.context.data = i, Vm(this).dataBeforeProcessed = i, Cs(this);
    }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var n = this.layoutMode,
          i = n ? bo(t) : {},
          a = this.subType;em.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Ri(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && wo(t, i, n);
    }, mergeOption: function mergeOption(t, e) {
      t = r(this.option, t, !0), this.fillDataTextStyle(t.data);var n = this.layoutMode;n && wo(this.option, t, n), Oo(this);
      var i = this.getInitialData(t, e);Ps(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, Vm(this).dataBeforeProcessed = i, Cs(this);
    }, fillDataTextStyle: function fillDataTextStyle(t) {
      if (t && !T(t)) for (var e = ["show"], n = 0; n < t.length; n++) {
        t[n] && t[n].label && Ri(t[n], "label", e);
      }
    }, getInitialData: function getInitialData() {}, appendData: function appendData(t) {
      var e = this.getRawData();e.appendData(t.data);
    }, getData: function getData(t) {
      var e = Ls(this);if (e) {
        var n = e.context.data;return null == t ? n : n.getLinkedData(t);
      }return Vm(this).data;
    }, setData: function setData(t) {
      var e = Ls(this);if (e) {
        var n = e.context;n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t);
      }Vm(this).data = t;
    }, getSource: function getSource() {
      return Ao(this);
    }, getRawData: function getRawData() {
      return Vm(this).dataBeforeProcessed;
    }, getBaseAxis: function getBaseAxis() {
      var t = this.coordinateSystem;return t && t.getBaseAxis && t.getBaseAxis();
    }, formatTooltip: function formatTooltip(t, e, n, i) {
      function r(n) {
        function r(t, n) {
          var r = c.getDimensionInfo(n);if (r && r.otherDims.tooltip !== !1) {
            var d = r.type,
                f = "sub" + o.seriesIndex + "at" + h,
                p = go({ color: y, type: "subItem", renderMode: i, markerId: f }),
                g = "string" == typeof p ? p : p.content,
                v = (a ? g + co(r.displayName || "-") + ": " : "") + co("ordinal" === d ? t + "" : "time" === d ? e ? "" : mo("yyyy/MM/dd hh:mm:ss", t) : uo(t));v && s.push(v), l && (u[f] = y, ++h);
          }
        }var a = g(n, function (t, e, n) {
          var i = c.getDimensionInfo(n);return t |= i && i.tooltip !== !1 && null != i.displayName;
        }, 0),
            s = [];d.length ? f(d, function (e) {
          r(ws(c, t, e), e);
        }) : f(n, r);var p = a ? l ? "\n" : "<br/>" : "",
            v = p + s.join(p || ", ");return { renderMode: i, content: v, style: u };
      }function a(t) {
        return { renderMode: i, content: co(uo(t)), style: u };
      }var o = this;i = i || "html";var s = "html" === i ? "<br/>" : "\n",
          l = "richText" === i,
          u = {},
          h = 0,
          c = this.getData(),
          d = c.mapDimension("defaultedTooltip", !0),
          p = d.length,
          v = this.getRawValue(t),
          m = x(v),
          y = c.getItemVisual(t, "color");S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";var _ = p > 1 || m && !p ? r(v) : a(p ? ws(c, t, d[0]) : m ? v[0] : v),
          w = _.content,
          b = o.seriesIndex + "at" + h,
          M = go({ color: y, type: "item", renderMode: i, markerId: b });u[b] = y, ++h;var T = c.getName(t),
          C = this.name;Wi(this) || (C = ""), C = C ? co(C) + (e ? ": " : s) : "";var I = "string" == typeof M ? M : M.content,
          k = e ? I + C + w : C + I + (T ? co(T) + ": " + w : w);return { html: k, markers: u };
    }, isAnimationEnabled: function isAnimationEnabled() {
      if (Rd.node) return !1;var t = this.getShallow("animation");return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;
    }, restoreData: function restoreData() {
      this.dataTask.dirty();
    }, getColorFromPalette: function getColorFromPalette(t, e, n) {
      var i = this.ecModel,
          r = am.getColorFromPalette.call(this, t, e, n);return r || (r = i.getColorFromPalette(t, e, n)), r;
    }, coordDimToDataDim: function coordDimToDataDim(t) {
      return this.getRawData().mapDimension(t, !0);
    }, getProgressive: function getProgressive() {
      return this.get("progressive");
    }, getProgressiveThreshold: function getProgressiveThreshold() {
      return this.get("progressiveThreshold");
    }, getAxisTooltipData: null, getTooltipPosition: null, pipeTask: null, preventIncremental: null, pipelineContext: null });c(Wm, Fm), c(Wm, am);var Gm = function Gm() {
    this.group = new Yf(), this.uid = Wa("viewComponent");
  };Gm.prototype = { constructor: Gm, init: function init() {}, render: function render() {}, dispose: function dispose() {}, filterForExposedEvent: null };var Xm = Gm.prototype;Xm.updateView = Xm.updateLayout = Xm.updateVisual = function () {}, Ji(Gm), ir(Gm, { registerWhenExtend: !0 });var jm = function jm() {
    var t = ji();return function (e) {
      var n = t(e),
          i = e.pipelineContext,
          r = n.large,
          a = n.progressiveRender,
          o = n.large = i.large,
          s = n.progressiveRender = i.progressiveRender;return !!(r ^ o || a ^ s) && "reset";
    };
  },
      Ym = ji(),
      qm = jm();Es.prototype = { type: "chart", init: function init() {}, render: function render() {}, highlight: function highlight(t, e, n, i) {
      zs(t.getData(), i, "emphasis");
    }, downplay: function downplay(t, e, n, i) {
      zs(t.getData(), i, "normal");
    }, remove: function remove() {
      this.group.removeAll();
    }, dispose: function dispose() {}, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null };var Um = Es.prototype;Um.updateView = Um.updateLayout = Um.updateVisual = function (t, e, n, i) {
    this.render(t, e, n, i);
  }, Ji(Es, ["dispose"]), ir(Es, { registerWhenExtend: !0 }), Es.markUpdateMethod = function (t, e) {
    Ym(t).updateMethod = e;
  };var Zm = { incrementalPrepareRender: { progress: function progress(t, e) {
        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
      } }, render: { forceFirstProgress: !0, progress: function progress(t, e) {
        e.view.render(e.model, e.ecModel, e.api, e.payload);
      } } },
      $m = "\x00__throttleOriginMethod",
      Km = "\x00__throttleRate",
      Qm = "\x00__throttleType",
      Jm = { createOnAllSeries: !0, performRawSeries: !0, reset: function reset(t, e) {
      var n = t.getData(),
          i = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
        "function" != typeof r || r instanceof _v || n.each(function (e) {
          n.setItemVisual(e, "color", r(t.getDataParams(e)));
        });var a = function a(t, e) {
          var n = t.getItemModel(e),
              r = n.get(i, !0);null != r && t.setItemVisual(e, "color", r);
        };return { dataEach: n.hasItemOption ? a : null };
      }
    } },
      ty = { toolbox: { brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } }, dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] }, dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } }, magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } }, restore: { title: "还原" }, saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] } }, series: { typeNames: { pie: "饼图", bar: "柱状图", line: "折线图", scatter: "散点图", effectScatter: "涟漪散点图", radar: "雷达图", tree: "树图", treemap: "矩形树图", boxplot: "箱型图", candlestick: "K线图", k: "K线图", heatmap: "热力图", map: "地图", parallel: "平行坐标图", lines: "线图", graph: "关系图", sankey: "桑基图", funnel: "漏斗图", gauge: "仪表盘图", pictorialBar: "象形柱图", themeRiver: "主题河流图", sunburst: "旭日图" } }, aria: { general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" }, series: { single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" }, multiple: { prefix: "它由{seriesCount}个图表系列组成。", withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，", withoutName: "第{seriesId}个系列是一个{seriesType}，", separator: { middle: "；", end: "。" } } }, data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } } } },
      ey = function ey(t, e) {
    function n(t, e) {
      if ("string" != typeof t) return t;var n = t;return f(e, function (t, e) {
        n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
      }), n;
    }function i(t) {
      var e = o.get(t);if (null == e) {
        for (var n = t.split("."), i = ty.aria, r = 0; r < n.length; ++r) {
          i = i[n[r]];
        }return i;
      }return e;
    }function r() {
      var t = e.getModel("title").option;return t && t.length && (t = t[0]), t && t.text;
    }function a(t) {
      return ty.series.typeNames[t] || "自定义图";
    }var o = e.getModel("aria");if (o.get("show")) {
      if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));var s = 0;e.eachSeries(function () {
        ++s;
      }, this);var l,
          u = o.get("data.maxCount") || 10,
          h = o.get("series.maxCount") || 10,
          c = Math.min(s, h);if (!(1 > s)) {
        var d = r();l = d ? n(i("general.withTitle"), { title: d }) : i("general.withoutTitle");var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";l += n(i(g), { seriesCount: s }), e.eachSeries(function (t, e) {
          if (c > e) {
            var r,
                o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";r = i(o ? l + "withName" : l + "withoutName"), r = n(r, { seriesId: t.seriesIndex, seriesName: t.get("name"), seriesType: a(t.subType) });var h = t.getData();window.data = h, r += h.count() > u ? n(i("data.partialData"), { displayCnt: u }) : i("data.allData");for (var d = [], f = 0; f < h.count(); f++) {
              if (u > f) {
                var g = h.getName(f),
                    v = ws(h, f);d.push(n(i(g ? "data.withName" : "data.withoutName"), { name: g, value: v }));
              }
            }r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r);
          }
        }), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l);
      }
    }
  },
      ny = Math.PI,
      iy = function iy(t, e) {
    e = e || {}, s(e, { text: "loading", color: "#c23531", textColor: "#000", maskColor: "rgba(255, 255, 255, 0.8)", zlevel: 0 });var n = new fv({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 }),
        i = new mv({ shape: { startAngle: -ny / 2, endAngle: -ny / 2 + .1, r: 10 }, style: { stroke: e.color, lineCap: "round", lineWidth: 5 }, zlevel: e.zlevel, z: 10001 }),
        r = new fv({ style: { fill: "none", text: e.text, textPosition: "right", textDistance: 10, textFill: e.textColor }, zlevel: e.zlevel, z: 10001 });i.animateShape(!0).when(1e3, { endAngle: 3 * ny / 2 }).start("circularInOut"), i.animateShape(!0).when(1e3, { startAngle: 3 * ny / 2 }).delay(300).start("circularInOut");var a = new Yf();return a.add(i), a.add(r), a.add(n), a.resize = function () {
      var e = t.getWidth() / 2,
          a = t.getHeight() / 2;i.setShape({ cx: e, cy: a });var o = i.shape.r;r.setShape({ x: e - o, y: a - o, width: 2 * o, height: 2 * o }), n.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
    }, a.resize(), a;
  },
      ry = Vs.prototype;ry.restoreData = function (t, e) {
    t.restoreData(e), this._stageTaskMap.each(function (t) {
      var e = t.overallTask;e && e.dirty();
    });
  }, ry.getPerformArgs = function (t, e) {
    if (t.__pipeline) {
      var n = this._pipelineMap.get(t.__pipeline.id),
          i = n.context,
          r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
          a = r ? n.step : null,
          o = i && i.modDataCount,
          s = null != o ? Math.ceil(o / a) : null;return { step: a, modBy: s, modDataCount: o };
    }
  }, ry.getPipeline = function (t) {
    return this._pipelineMap.get(t);
  }, ry.updateStreamModes = function (t, e) {
    var n = this._pipelineMap.get(t.uid),
        i = t.getData(),
        r = i.count(),
        a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
        o = t.get("large") && r >= t.get("largeThreshold"),
        s = "mod" === t.get("progressiveChunkMode") ? r : null;t.pipelineContext = n.context = { progressiveRender: a, modDataCount: s, large: o };
  }, ry.restorePipelines = function (t) {
    var e = this,
        n = e._pipelineMap = F();t.eachSeries(function (t) {
      var i = t.getProgressive(),
          r = t.uid;n.set(r, { id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()), blockIndex: -1, step: Math.round(i || 700), count: 0 }), Js(e, t, t.dataTask);
    });
  }, ry.prepareStageTasks = function () {
    var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        n = this.api;f(this._allHandlers, function (i) {
      var r = t.get(i.uid) || t.set(i.uid, []);i.reset && Gs(this, i, r, e, n), i.overallReset && Xs(this, i, r, e, n);
    }, this);
  }, ry.prepareView = function (t, e, n, i) {
    var r = t.renderTask,
        a = r.context;a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, Js(this, e, r);
  }, ry.performDataProcessorTasks = function (t, e) {
    Ws(this, this._dataProcessorHandlers, t, e, { block: !0 });
  }, ry.performVisualTasks = function (t, e, n) {
    Ws(this, this._visualHandlers, t, e, n);
  }, ry.performSeriesTasks = function (t) {
    var e;t.eachSeries(function (t) {
      e |= t.dataTask.perform();
    }), this.unfinished |= e;
  }, ry.plan = function () {
    this._pipelineMap.each(function (t) {
      var e = t.tail;do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;break;
        }e = e.getUpstream();
      } while (e);
    });
  };var ay = ry.updatePayload = function (t, e) {
    "remain" !== e && (t.context.payload = e);
  },
      oy = Ks(0);Vs.wrapStageHandler = function (t, e) {
    return w(t) && (t = { overallReset: t, seriesType: tl(t) }), t.uid = Wa("stageHandler"), e && (t.visualType = e), t;
  };var sy,
      ly = {},
      uy = {};el(ly, mm), el(uy, Uo), ly.eachSeriesByType = ly.eachRawSeriesByType = function (t) {
    sy = t;
  }, ly.eachComponent = function (t) {
    "series" === t.mainType && t.subType && (sy = t.subType);
  };var hy = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
      cy = { color: hy, colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], hy] },
      dy = "#eee",
      fy = function fy() {
    return { axisLine: { lineStyle: { color: dy } }, axisTick: { lineStyle: { color: dy } }, axisLabel: { textStyle: { color: dy } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: dy } } };
  },
      py = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
      gy = { color: py, backgroundColor: "#333", tooltip: { axisPointer: { lineStyle: { color: dy }, crossStyle: { color: dy } } }, legend: { textStyle: { color: dy } }, textStyle: { color: dy }, title: { textStyle: { color: dy } }, toolbox: { iconStyle: { normal: { borderColor: dy } } }, dataZoom: { textStyle: { color: dy } }, visualMap: { textStyle: { color: dy } }, timeline: { lineStyle: { color: dy }, itemStyle: { normal: { color: py[1] } }, label: { normal: { textStyle: { color: dy } } }, controlStyle: { normal: { color: dy, borderColor: dy } } }, timeAxis: fy(), logAxis: fy(), valueAxis: fy(), categoryAxis: fy(), line: { symbol: "circle" }, graph: { color: py }, gauge: { title: { textStyle: { color: dy } } }, candlestick: { itemStyle: { normal: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } } } };gy.categoryAxis.splitLine.show = !1, em.extend({ type: "dataset", defaultOption: { seriesLayoutBy: fm, sourceHeader: null, dimensions: null, source: null }, optionUpdated: function optionUpdated() {
      Do(this);
    } }), Gm.extend({ type: "dataset" });var vy = Rr.extend({ type: "ellipse", shape: { cx: 0, cy: 0, rx: 0, ry: 0 }, buildPath: function buildPath(t, e) {
      var n = .5522848,
          i = e.cx,
          r = e.cy,
          a = e.rx,
          o = e.ry,
          s = a * n,
          l = o * n;t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath();
    } }),
      my = /[\s,]+/;il.prototype.parse = function (t, e) {
    e = e || {};var n = nl(t);if (!n) throw new Error("Illegal svg");var i = new Yf();this._root = i;var r = n.getAttribute("viewBox") || "",
        a = parseFloat(n.getAttribute("width") || e.width),
        o = parseFloat(n.getAttribute("height") || e.height);isNaN(a) && (a = null), isNaN(o) && (o = null), sl(n, i, null, !0);for (var s = n.firstChild; s;) {
      this._parseNode(s, i), s = s.nextSibling;
    }var l, u;if (r) {
      var h = E(r).split(my);h.length >= 4 && (l = { x: parseFloat(h[0] || 0), y: parseFloat(h[1] || 0), width: parseFloat(h[2]), height: parseFloat(h[3]) });
    }if (l && null != a && null != o && (u = cl(l, a, o), !e.ignoreViewBox)) {
      var c = i;i = new Yf(), i.add(c), c.scale = u.scale.slice(), c.position = u.position.slice();
    }return e.ignoreRootClip || null == a || null == o || i.setClipPath(new fv({ shape: { x: 0, y: 0, width: a, height: o } })), { root: i, width: a, height: o, viewBoxRect: l, viewBoxTransform: u };
  }, il.prototype._parseNode = function (t, e) {
    var n = t.nodeName.toLowerCase();"defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);var i;if (this._isDefine) {
      var r = _y[n];if (r) {
        var a = r.call(this, t),
            o = t.getAttribute("id");o && (this._defs[o] = a);
      }
    } else {
      var r = yy[n];r && (i = r.call(this, t, e), e.add(i));
    }for (var s = t.firstChild; s;) {
      1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
    }"defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1);
  }, il.prototype._parseText = function (t, e) {
    if (1 === t.nodeType) {
      var n = t.getAttribute("dx") || 0,
          i = t.getAttribute("dy") || 0;this._textX += parseFloat(n), this._textY += parseFloat(i);
    }var r = new iv({ style: { text: t.textContent, transformText: !0 }, position: [this._textX || 0, this._textY || 0] });al(e, r), sl(t, r, this._defs);var a = r.style.fontSize;a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);var o = r.getBoundingRect();return this._textX += o.width, e.add(r), r;
  };var yy = { g: function g(t, e) {
      var n = new Yf();return al(e, n), sl(t, n, this._defs), n;
    }, rect: function rect(t, e) {
      var n = new fv();return al(e, n), sl(t, n, this._defs), n.setShape({ x: parseFloat(t.getAttribute("x") || 0), y: parseFloat(t.getAttribute("y") || 0), width: parseFloat(t.getAttribute("width") || 0), height: parseFloat(t.getAttribute("height") || 0) }), n;
    }, circle: function circle(t, e) {
      var n = new rv();return al(e, n), sl(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), r: parseFloat(t.getAttribute("r") || 0) }), n;
    }, line: function line(t, e) {
      var n = new pv();return al(e, n), sl(t, n, this._defs), n.setShape({ x1: parseFloat(t.getAttribute("x1") || 0), y1: parseFloat(t.getAttribute("y1") || 0), x2: parseFloat(t.getAttribute("x2") || 0), y2: parseFloat(t.getAttribute("y2") || 0) }), n;
    }, ellipse: function ellipse(t, e) {
      var n = new vy();return al(e, n), sl(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), rx: parseFloat(t.getAttribute("rx") || 0), ry: parseFloat(t.getAttribute("ry") || 0) }), n;
    }, polygon: function polygon(t, e) {
      var n = t.getAttribute("points");n && (n = ol(n));var i = new cv({ shape: { points: n || [] } });return al(e, i), sl(t, i, this._defs), i;
    }, polyline: function polyline(t, e) {
      var n = new Rr();al(e, n), sl(t, n, this._defs);var i = t.getAttribute("points");i && (i = ol(i));var r = new dv({ shape: { points: i || [] } });return r;
    }, image: function image(t, e) {
      var n = new vi();return al(e, n), sl(t, n, this._defs), n.setStyle({ image: t.getAttribute("xlink:href"), x: t.getAttribute("x"), y: t.getAttribute("y"), width: t.getAttribute("width"), height: t.getAttribute("height") }), n;
    }, text: function text(t, e) {
      var n = t.getAttribute("x") || 0,
          i = t.getAttribute("y") || 0,
          r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0;this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);var o = new Yf();return al(e, o), sl(t, o, this._defs), o;
    }, tspan: function tspan(t, e) {
      var n = t.getAttribute("x"),
          i = t.getAttribute("y");null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));var r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0,
          o = new Yf();return al(e, o), sl(t, o, this._defs), this._textX += r, this._textY += a, o;
    }, path: function path(t, e) {
      var n = t.getAttribute("d") || "",
          i = Vr(n);return al(e, i), sl(t, i, this._defs), i;
    } },
      _y = { lineargradient: function lineargradient(t) {
      var e = parseInt(t.getAttribute("x1") || 0, 10),
          n = parseInt(t.getAttribute("y1") || 0, 10),
          i = parseInt(t.getAttribute("x2") || 10, 10),
          r = parseInt(t.getAttribute("y2") || 0, 10),
          a = new xv(e, n, i, r);return rl(t, a), a;
    }, radialgradient: function radialgradient() {} },
      xy = { fill: "fill", stroke: "stroke", "stroke-width": "lineWidth", opacity: "opacity", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity", "stroke-dasharray": "lineDash", "stroke-dashoffset": "lineDashOffset", "stroke-linecap": "lineCap", "stroke-linejoin": "lineJoin", "stroke-miterlimit": "miterLimit", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "text-align": "textAlign", "alignment-baseline": "textBaseline" },
      wy = /url\(\s*#(.*?)\)/,
      by = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
      Sy = /([^\s:;]+)\s*:\s*([^:;]+)/g,
      My = F(),
      Ty = { registerMap: function registerMap(t, e, n) {
      var i;return x(e) ? i = e : e.svg ? i = [{ type: "svg", source: e.svg, specialAreas: e.specialAreas }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{ type: "geoJSON", source: e, specialAreas: n }]), f(i, function (t) {
        var e = t.type;"geoJson" === e && (e = t.type = "geoJSON");var n = Cy[e];n(t);
      }), My.set(t, i);
    }, retrieveMap: function retrieveMap(t) {
      return My.get(t);
    } },
      Cy = { geoJSON: function geoJSON(t) {
      var e = t.source;t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;
    }, svg: function svg(t) {
      t.svgXML = nl(t.source);
    } },
      Iy = L,
      ky = f,
      Dy = w,
      Ay = S,
      Py = em.parseClassType,
      Oy = "4.2.0",
      Ly = { zrender: "4.0.5" },
      Ey = 1,
      By = 1e3,
      zy = 5e3,
      Ry = 1e3,
      Fy = 2e3,
      Ny = 3e3,
      Hy = 4e3,
      Vy = 5e3,
      Wy = { PROCESSOR: { FILTER: By, STATISTIC: zy }, VISUAL: { LAYOUT: Ry, GLOBAL: Fy, CHART: Ny, COMPONENT: Hy, BRUSH: Vy } },
      Gy = "__flagInMainProcess",
      Xy = "__optionUpdated",
      jy = /^[a-zA-Z0-9_]+$/;fl.prototype.on = dl("on"), fl.prototype.off = dl("off"), fl.prototype.one = dl("one"), c(fl, of);var Yy = pl.prototype;Yy._onframe = function () {
    if (!this._disposed) {
      var t = this._scheduler;if (this[Xy]) {
        var e = this[Xy].silent;this[Gy] = !0, vl(this), qy.update.call(this), this[Gy] = !1, this[Xy] = !1, xl.call(this, e), wl.call(this, e);
      } else if (t.unfinished) {
        var n = Ey,
            i = this._model,
            r = this._api;t.unfinished = !1;do {
          var a = +new Date();t.performSeriesTasks(i), t.performDataProcessorTasks(i), yl(this, i), t.performVisualTasks(i), Il(this, this._model, r, "remain"), n -= +new Date() - a;
        } while (n > 0 && t.unfinished);t.unfinished || this._zr.flush();
      }
    }
  }, Yy.getDom = function () {
    return this._dom;
  }, Yy.getZr = function () {
    return this._zr;
  }, Yy.setOption = function (t, e, n) {
    var i;if (Ay(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[Gy] = !0, !this._model || e) {
      var r = new $o(this._api),
          a = this._theme,
          o = this._model = new mm(null, null, a, r);o.scheduler = this._scheduler, o.init(null, null, a, r);
    }this._model.setOption(t, Qy), n ? (this[Xy] = { silent: i }, this[Gy] = !1) : (vl(this), qy.update.call(this), this._zr.flush(), this[Xy] = !1, this[Gy] = !1, xl.call(this, i), wl.call(this, i));
  }, Yy.setTheme = function () {
    console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
  }, Yy.getModel = function () {
    return this._model;
  }, Yy.getOption = function () {
    return this._model && this._model.getOption();
  }, Yy.getWidth = function () {
    return this._zr.getWidth();
  }, Yy.getHeight = function () {
    return this._zr.getHeight();
  }, Yy.getDevicePixelRatio = function () {
    return this._zr.painter.dpr || window.devicePixelRatio || 1;
  }, Yy.getRenderedCanvas = function (t) {
    if (Rd.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");var e = this._zr;return e.painter.getRenderedCanvas(t);
    }
  }, Yy.getSvgDataUrl = function () {
    if (Rd.svgSupported) {
      var t = this._zr,
          e = t.storage.getDisplayList();return f(e, function (t) {
        t.stopAnimation(!0);
      }), t.painter.pathToDataUrl();
    }
  }, Yy.getDataURL = function (t) {
    t = t || {};var e = t.excludeComponents,
        n = this._model,
        i = [],
        r = this;ky(e, function (t) {
      n.eachComponent({ mainType: t }, function (t) {
        var e = r._componentsMap[t.__viewId];e.group.ignore || (i.push(e), e.group.ignore = !0);
      });
    });var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));return ky(i, function (t) {
      t.group.ignore = !1;
    }), a;
  }, Yy.getConnectedDataURL = function (t) {
    if (Rd.canvasSupported) {
      var e = this.group,
          n = Math.min,
          r = Math.max,
          a = 1 / 0;if (r_[e]) {
        var o = a,
            s = a,
            l = -a,
            u = -a,
            h = [],
            c = t && t.pixelRatio || 1;f(i_, function (a) {
          if (a.group === e) {
            var c = a.getRenderedCanvas(i(t)),
                d = a.getDom().getBoundingClientRect();o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), u = r(d.bottom, u), h.push({ dom: c, left: d.left, top: d.top });
          }
        }), o *= c, s *= c, l *= c, u *= c;var d = l - o,
            p = u - s,
            g = Ud();g.width = d, g.height = p;var v = Pi(g);return ky(h, function (t) {
          var e = new vi({ style: { x: t.left * c - o, y: t.top * c - s, image: t.dom } });v.add(e);
        }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"));
      }return this.getDataURL(t);
    }
  }, Yy.convertToPixel = _(gl, "convertToPixel"), Yy.convertFromPixel = _(gl, "convertFromPixel"), Yy.containPixel = function (t, e) {
    var n,
        i = this._model;return t = Yi(i, t), f(t, function (t, i) {
      i.indexOf("Models") >= 0 && f(t, function (t) {
        var r = t.coordinateSystem;if (r && r.containPoint) n |= !!r.containPoint(e);else if ("seriesModels" === i) {
          var a = this._chartsMap[t.__viewId];a && a.containPoint && (n |= a.containPoint(e, t));
        }
      }, this);
    }, this), !!n;
  }, Yy.getVisual = function (t, e) {
    var n = this._model;t = Yi(n, t, { defaultMainType: "series" });var i = t.seriesModel,
        r = i.getData(),
        a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;return null != a ? r.getItemVisual(a, e) : r.getVisual(e);
  }, Yy.getViewOfComponentModel = function (t) {
    return this._componentsMap[t.__viewId];
  }, Yy.getViewOfSeriesModel = function (t) {
    return this._chartsMap[t.__viewId];
  };var qy = { prepareAndUpdate: function prepareAndUpdate(t) {
      vl(this), qy.update.call(this, t);
    }, update: function update(t) {
      var e = this._model,
          n = this._api,
          i = this._zr,
          r = this._coordSysMgr,
          a = this._scheduler;if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), yl(this, e), r.update(e, n), Ml(e), a.performVisualTasks(e, t), Tl(this, e, n, t);var o = e.get("backgroundColor") || "transparent";if (Rd.canvasSupported) i.setBackgroundColor(o);else {
          var s = We(o);o = Ke(s, "rgb"), 0 === s[3] && (o = "transparent");
        }kl(e, n);
      }
    }, updateTransform: function updateTransform(t) {
      var e = this._model,
          n = this,
          i = this._api;if (e) {
        var r = [];e.eachComponent(function (a, o) {
          var s = n.getViewOfComponentModel(o);if (s && s.__alive) if (s.updateTransform) {
            var l = s.updateTransform(o, e, i, t);l && l.update && r.push(s);
          } else r.push(s);
        });var a = F();e.eachSeries(function (r) {
          var o = n._chartsMap[r.__viewId];if (o.updateTransform) {
            var s = o.updateTransform(r, e, i, t);s && s.update && a.set(r.uid, 1);
          } else a.set(r.uid, 1);
        }), Ml(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0, dirtyMap: a }), Il(n, e, i, t, a), kl(e, this._api);
      }
    }, updateView: function updateView(t) {
      var e = this._model;e && (Es.markUpdateMethod(t, "updateView"), Ml(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0 }), Tl(this, this._model, this._api, t), kl(e, this._api));
    }, updateVisual: function updateVisual(t) {
      qy.update.call(this, t);
    }, updateLayout: function updateLayout(t) {
      qy.update.call(this, t);
    } };Yy.resize = function (t) {
    this._zr.resize(t);var e = this._model;if (this._loadingFX && this._loadingFX.resize(), e) {
      var n = e.resetOption("media"),
          i = t && t.silent;this[Gy] = !0, n && vl(this), qy.update.call(this), this[Gy] = !1, xl.call(this, i), wl.call(this, i);
    }
  }, Yy.showLoading = function (t, e) {
    if (Ay(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), n_[t]) {
      var n = n_[t](this._api, e),
          i = this._zr;this._loadingFX = n, i.add(n);
    }
  }, Yy.hideLoading = function () {
    this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
  }, Yy.makeActionFromEvent = function (t) {
    var e = o({}, t);return e.type = $y[t.type], e;
  }, Yy.dispatchAction = function (t, e) {
    if (Ay(e) || (e = { silent: !!e }), Zy[t.type] && this._model) {
      if (this[Gy]) return void this._pendingActions.push(t);_l.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Rd.browser.weChat && this._throttledZrFlush(), xl.call(this, e.silent), wl.call(this, e.silent);
    }
  }, Yy.appendData = function (t) {
    var e = t.seriesIndex,
        n = this.getModel(),
        i = n.getSeriesByIndex(e);i.appendData(t), this._scheduler.unfinished = !0;
  }, Yy.on = dl("on"), Yy.off = dl("off"), Yy.one = dl("one");var Uy = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];Yy._initEvents = function () {
    ky(Uy, function (t) {
      this._zr.on(t, function (e) {
        var n,
            i = this.getModel(),
            r = e.target,
            a = "globalout" === t;if (a) n = {};else if (r && null != r.dataIndex) {
          var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {};
        } else r && r.eventData && (n = o({}, r.eventData));if (n) {
          var l = n.componentType,
              u = n.componentIndex;("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = n.seriesIndex);var h = l && null != u && i.getComponent(l, u),
              c = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];n.event = e, n.type = t, this._ecEventProcessor.eventInfo = { targetEl: r, packedEvent: n, model: h, view: c }, this.trigger(t, n);
        }
      }, this);
    }, this), ky($y, function (t, e) {
      this._messageCenter.on(e, function (t) {
        this.trigger(e, t);
      }, this);
    }, this);
  }, Yy.isDisposed = function () {
    return this._disposed;
  }, Yy.clear = function () {
    this.setOption({ series: [] }, !0);
  }, Yy.dispose = function () {
    if (!this._disposed) {
      this._disposed = !0, Ui(this.getDom(), s_, "");var t = this._api,
          e = this._model;ky(this._componentsViews, function (n) {
        n.dispose(e, t);
      }), ky(this._chartsViews, function (n) {
        n.dispose(e, t);
      }), this._zr.dispose(), delete i_[this.id];
    }
  }, c(pl, of), Ll.prototype = { constructor: Ll, normalizeQuery: function normalizeQuery(t) {
      var e = {},
          n = {},
          i = {};if (b(t)) {
        var r = Py(t);e.mainType = r.main || null, e.subType = r.sub || null;
      } else {
        var a = ["Index", "Name", "Id"],
            o = { name: 1, dataIndex: 1, dataType: 1 };f(t, function (t, r) {
          for (var s = !1, l = 0; l < a.length; l++) {
            var u = a[l],
                h = r.lastIndexOf(u);if (h > 0 && h === r.length - u.length) {
              var c = r.slice(0, h);"data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0);
            }
          }o.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t);
        });
      }return { cptQuery: e, dataQuery: n, otherQuery: i };
    }, filter: function filter(t, e) {
      function n(t, e, n, i) {
        return null == t[n] || e[i || n] === t[n];
      }var i = this.eventInfo;if (!i) return !0;var r = i.targetEl,
          a = i.packedEvent,
          o = i.model,
          s = i.view;if (!o || !s) return !0;var l = e.cptQuery,
          u = e.dataQuery;return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(u, a, "name") && n(u, a, "dataIndex") && n(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a));
    }, afterTrigger: function afterTrigger() {
      this.eventInfo = null;
    } };var Zy = {},
      $y = {},
      Ky = [],
      Qy = [],
      Jy = [],
      t_ = [],
      e_ = {},
      n_ = {},
      i_ = {},
      r_ = {},
      a_ = new Date() - 0,
      o_ = new Date() - 0,
      s_ = "_echarts_instance_",
      l_ = Rl;Zl(Fy, Jm), Wl(Pm), Gl(zy, Om), Kl("default", iy), jl({ type: "highlight", event: "highlight", update: "highlight" }, H), jl({ type: "downplay", event: "downplay", update: "downplay" }, H), Vl("light", cy), Vl("dark", gy);var u_ = {};ou.prototype = { constructor: ou, add: function add(t) {
      return this._add = t, this;
    }, update: function update(t) {
      return this._update = t, this;
    }, remove: function remove(t) {
      return this._remove = t, this;
    }, execute: function execute() {
      var t,
          e = this._old,
          n = this._new,
          i = {},
          r = {},
          a = [],
          o = [];for (su(e, i, a, "_oldKeyGetter", this), su(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
            l = r[s];if (null != l) {
          var u = l.length;u ? (1 === u && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t);
        } else this._remove && this._remove(t);
      }for (var t = 0; t < o.length; t++) {
        var s = o[t];if (r.hasOwnProperty(s)) {
          var l = r[s];if (null == l) continue;if (l.length) for (var h = 0, u = l.length; u > h; h++) {
            this._add && this._add(l[h]);
          } else this._add && this._add(l);
        }
      }
    } };var h_ = F(["tooltip", "label", "itemName", "itemId", "seriesName"]),
      c_ = S,
      d_ = "undefined",
      f_ = "e\x00\x00",
      p_ = { "float": (typeof Float64Array === "undefined" ? "undefined" : _typeof(Float64Array)) === d_ ? Array : Float64Array, "int": (typeof Int32Array === "undefined" ? "undefined" : _typeof(Int32Array)) === d_ ? Array : Int32Array, ordinal: Array, number: Array, time: Array },
      g_ = (typeof Uint32Array === "undefined" ? "undefined" : _typeof(Uint32Array)) === d_ ? Array : Uint32Array,
      v_ = (typeof Uint16Array === "undefined" ? "undefined" : _typeof(Uint16Array)) === d_ ? Array : Uint16Array,
      m_ = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
      y_ = ["_extent", "_approximateExtent", "_rawExtent"],
      __ = function __(t, e) {
    t = t || ["x", "y"];for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
      var o = t[a];b(o) && (o = { name: o });var s = o.name;o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
    }this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = lu(this), this._invertedIndicesMap = r, this._calculationInfo = {};
  },
      x_ = __.prototype;x_.type = "list", x_.hasItemOption = !0, x_.getDimension = function (t) {
    return isNaN(t) || (t = this.dimensions[t] || t), t;
  }, x_.getDimensionInfo = function (t) {
    return this._dimensionInfos[this.getDimension(t)];
  }, x_.getDimensionsOnCoord = function () {
    return this._dimensionsSummary.dataDimsOnCoord.slice();
  }, x_.mapDimension = function (t, e) {
    var n = this._dimensionsSummary;if (null == e) return n.encodeFirstDimNotExtra[t];var i = n.encode[t];return e === !0 ? (i || []).slice() : i && i[e];
  }, x_.initData = function (t, e, n) {
    var i = ko.isInstance(t) || d(t);i && (t = new ps(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = zm[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
  }, x_.getProvider = function () {
    return this._rawData;
  }, x_.appendData = function (t) {
    var e = this._rawData,
        n = this.count();e.appendData(t);var i = e.count();e.persistent || (i += n), this._initDataFromProvider(n, i);
  }, x_._initDataFromProvider = function (t, e) {
    if (!(t >= e)) {
      for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
        var v = o[g];c[v] || (c[v] = bu());var m = l[v];0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);var y = p_[m.type];a[v] || (a[v] = []);var _ = a[v][p];if (_ && _.length < i) {
          for (var x = new y(Math.min(e - p * i, i)), w = 0; w < _.length; w++) {
            x[w] = _[w];
          }a[v][p] = x;
        }for (var b = f * i; e > b; b += i) {
          a[v].push(new y(Math.min(e - b, i)));
        }this._chunkCount = a[v].length;
      }for (var S = new Array(s), M = t; e > M; M++) {
        S = r.getItem(M, S);for (var T = Math.floor(M / i), C = M % i, b = 0; s > b; b++) {
          var v = o[b],
              I = a[v][T],
              k = this._dimValueGetter(S, v, M, b);I[C] = k;var D = c[v];k < D[0] && (D[0] = k), k > D[1] && (D[1] = k);
        }if (!r.pure) {
          var A = u[M];if (S && null == A) if (null != S.name) u[M] = A = S.name;else if (null != n) {
            var P = o[n],
                O = a[P][T];if (O) {
              A = O[C];var L = l[P].ordinalMeta;L && L.categories.length && (A = L.categories[A]);
            }
          }var E = null == S ? null : S.id;null == E && null != A && (d[A] = d[A] || 0, E = A, d[A] > 0 && (E += "__ec__" + d[A]), d[A]++), null != E && (h[M] = E);
        }
      }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, pu(this);
    }
  }, x_.count = function () {
    return this._count;
  }, x_.getIndices = function () {
    var t,
        e = this._indices;if (e) {
      var n = e.constructor,
          i = this._count;if (n === Array) {
        t = new n(i);for (var r = 0; i > r; r++) {
          t[r] = e[r];
        }
      } else t = new n(e.buffer, 0, i);
    } else for (var n = cu(this), t = new n(this.count()), r = 0; r < t.length; r++) {
      t[r] = r;
    }return t;
  }, x_.get = function (t, e) {
    if (!(e >= 0 && e < this._count)) return 0 / 0;var n = this._storage;if (!n[t]) return 0 / 0;e = this.getRawIndex(e);var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[t][i],
        o = a[r];return o;
  }, x_.getByRawIndex = function (t, e) {
    if (!(e >= 0 && e < this._rawCount)) return 0 / 0;var n = this._storage[t];if (!n) return 0 / 0;var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[i];return a[r];
  }, x_._getFast = function (t, e) {
    var n = Math.floor(e / this._chunkSize),
        i = e % this._chunkSize,
        r = this._storage[t][n];return r[i];
  }, x_.getValues = function (t, e) {
    var n = [];x(t) || (e = t, t = this.dimensions);for (var i = 0, r = t.length; r > i; i++) {
      n.push(this.get(t[i], e));
    }return n;
  }, x_.hasValue = function (t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++) {
      if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
    }return !0;
  }, x_.getDataExtent = function (t) {
    t = this.getDimension(t);var e = this._storage[t],
        n = bu();if (!e) return n;var i,
        r = this.count(),
        a = !this._indices;if (a) return this._rawExtent[t].slice();if (i = this._extent[t]) return i.slice();i = n;for (var o = i[0], s = i[1], l = 0; r > l; l++) {
      var u = this._getFast(t, this.getRawIndex(l));o > u && (o = u), u > s && (s = u);
    }return i = [o, s], this._extent[t] = i, i;
  }, x_.getApproximateExtent = function (t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
  }, x_.setApproximateExtent = function (t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice();
  }, x_.getCalculationInfo = function (t) {
    return this._calculationInfo[t];
  }, x_.setCalculationInfo = function (t, e) {
    c_(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e;
  }, x_.getSum = function (t) {
    var e = this._storage[t],
        n = 0;if (e) for (var i = 0, r = this.count(); r > i; i++) {
      var a = this.get(t, i);isNaN(a) || (n += a);
    }return n;
  }, x_.getMedian = function (t) {
    var e = [];this.each(t, function (t) {
      isNaN(t) || e.push(t);
    });var n = [].concat(e).sort(function (t, e) {
      return t - e;
    }),
        i = this.count();return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
  }, x_.rawIndexOf = function (t, e) {
    var n = t && this._invertedIndicesMap[t],
        i = n[e];return null == i || isNaN(i) ? -1 : i;
  }, x_.indexOfName = function (t) {
    for (var e = 0, n = this.count(); n > e; e++) {
      if (this.getName(e) === t) return e;
    }return -1;
  }, x_.indexOfRawIndex = function (t) {
    if (!this._indices) return t;if (t >= this._rawCount || 0 > t) return -1;var e = this._indices,
        n = e[t];if (null != n && n < this._count && n === t) return t;for (var i = 0, r = this._count - 1; r >= i;) {
      var a = (i + r) / 2 | 0;if (e[a] < t) i = a + 1;else {
        if (!(e[a] > t)) return a;r = a - 1;
      }
    }return -1;
  }, x_.indicesOfNearest = function (t, e, n) {
    var i = this._storage,
        r = i[t],
        a = [];if (!r) return a;null == n && (n = 1 / 0);for (var o = Number.MAX_VALUE, s = -1, l = 0, u = this.count(); u > l; l++) {
      var h = e - this.get(t, l),
          c = Math.abs(h);n >= h && o >= c && ((o > c || h >= 0 && 0 > s) && (o = c, s = h, a.length = 0), a.push(l));
    }return a;
  }, x_.getRawIndex = vu, x_.getRawDataItem = function (t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));for (var e = [], n = 0; n < this.dimensions.length; n++) {
      var i = this.dimensions[n];e.push(this.get(i, t));
    }return e;
  }, x_.getName = function (t) {
    var e = this.getRawIndex(t);return this._nameList[e] || gu(this, this._nameDimIdx, e) || "";
  }, x_.getId = function (t) {
    return yu(this, this.getRawIndex(t));
  }, x_.each = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(_u(t), this.getDimension, this);for (var r = t.length, a = 0; a < this.count(); a++) {
        switch (r) {case 0:
            e.call(n, a);break;case 1:
            e.call(n, this.get(t[0], a), a);break;case 2:
            e.call(n, this.get(t[0], a), this.get(t[1], a), a);break;default:
            for (var o = 0, s = []; r > o; o++) {
              s[o] = this.get(t[o], a);
            }s[o] = a, e.apply(n, s);}
      }
    }
  }, x_.filterSelf = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(_u(t), this.getDimension, this);for (var r = this.count(), a = cu(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {
        var d,
            f = this.getRawIndex(c);if (0 === l) d = e.call(n, c);else if (1 === l) {
          var g = this._getFast(h, f);d = e.call(n, g, c);
        } else {
          for (var v = 0; l > v; v++) {
            s[v] = this._getFast(h, f);
          }s[v] = c, d = e.apply(n, s);
        }d && (o[u++] = f);
      }return r > u && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? mu : vu, this;
    }
  }, x_.selectRange = function (t) {
    if (this._count) {
      var e = [];for (var n in t) {
        t.hasOwnProperty(n) && e.push(n);
      }var i = e.length;if (i) {
        var r = this.count(),
            a = cu(this),
            o = new a(r),
            s = 0,
            l = e[0],
            u = t[l][0],
            h = t[l][1],
            c = !1;if (!this._indices) {
          var d = 0;if (1 === i) {
            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) {
              for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m];(y >= u && h >= y || isNaN(y)) && (o[s++] = d), d++;
              }
            }c = !0;
          } else if (2 === i) {
            for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) {
              for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m],
                    S = b[m];(y >= u && h >= y || isNaN(y)) && (S >= x && w >= S || isNaN(S)) && (o[s++] = d), d++;
              }
            }c = !0;
          }
        }if (!c) if (1 === i) for (var m = 0; r > m; m++) {
          var M = this.getRawIndex(m),
              y = this._getFast(l, M);(y >= u && h >= y || isNaN(y)) && (o[s++] = M);
        } else for (var m = 0; r > m; m++) {
          for (var T = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {
            var C = e[p],
                y = this._getFast(n, M);(y < t[C][0] || y > t[C][1]) && (T = !1);
          }T && (o[s++] = this.getRawIndex(m));
        }return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? mu : vu, this;
      }
    }
  }, x_.mapArray = function (t, e, n, i) {
    "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;var r = [];return this.each(t, function () {
      r.push(e && e.apply(this, arguments));
    }, n), r;
  }, x_.map = function (t, e, n, i) {
    n = n || i || this, t = p(_u(t), this.getDimension, this);var r = xu(this, t);r._indices = this._indices, r.getRawIndex = r._indices ? mu : vu;for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; u > d; d++) {
      for (var f = 0; l > f; f++) {
        h[f] = this.get(t[f], d);
      }h[l] = d;var g = e && e.apply(n, h);if (null != g) {
        "object" != (typeof g === "undefined" ? "undefined" : _typeof(g)) && (o[0] = g, g = o);for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
              w = g[_],
              b = c[x],
              S = a[x];S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
        }
      }
    }return r;
  }, x_.downSample = function (t, e, n, i) {
    for (var r = xu(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (cu(this))(u), f = 0, p = 0; u > p; p += s) {
      s > u - p && (s = u - p, o.length = s);for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
            m = Math.floor(v / h),
            y = v % h;o[g] = l[m][y];
      }var _ = n(o),
          x = this.getRawIndex(Math.min(p + i(o, _) || 0, u - 1)),
          w = Math.floor(x / h),
          b = x % h;l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;
    }return r._count = f, r._indices = d, r.getRawIndex = mu, r;
  }, x_.getItemModel = function (t) {
    var e = this.hostModel;return new Na(this.getRawDataItem(t), e, e && e.ecModel);
  }, x_.diff = function (t) {
    var e = this;return new ou(t ? t.getIndices() : [], this.getIndices(), function (e) {
      return yu(t, e);
    }, function (t) {
      return yu(e, t);
    });
  }, x_.getVisual = function (t) {
    var e = this._visual;return e && e[t];
  }, x_.setVisual = function (t, e) {
    if (c_(t)) for (var n in t) {
      t.hasOwnProperty(n) && this.setVisual(n, t[n]);
    } else this._visual = this._visual || {}, this._visual[t] = e;
  }, x_.setLayout = function (t, e) {
    if (c_(t)) for (var n in t) {
      t.hasOwnProperty(n) && this.setLayout(n, t[n]);
    } else this._layout[t] = e;
  }, x_.getLayout = function (t) {
    return this._layout[t];
  }, x_.getItemLayout = function (t) {
    return this._itemLayouts[t];
  }, x_.setItemLayout = function (t, e, n) {
    this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e;
  }, x_.clearItemLayouts = function () {
    this._itemLayouts.length = 0;
  }, x_.getItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t],
        r = i && i[e];return null != r || n ? r : this.getVisual(e);
  }, x_.setItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t] || {},
        r = this.hasItemVisual;if (this._itemVisuals[t] = i, c_(e)) for (var a in e) {
      e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
    } else i[e] = n, r[e] = !0;
  }, x_.clearAllVisual = function () {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
  };var w_ = function w_(t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
  };x_.setItemGraphicEl = function (t, e) {
    var n = this.hostModel;e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(w_, e)), this._graphicEls[t] = e;
  }, x_.getItemGraphicEl = function (t) {
    return this._graphicEls[t];
  }, x_.eachItemGraphicEl = function (t, e) {
    f(this._graphicEls, function (n, i) {
      n && t && t.call(e, n, i);
    });
  }, x_.cloneShallow = function (t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);t = new __(e, this.hostModel);
    }if (t._storage = this._storage, fu(t, this), this._indices) {
      var n = this._indices.constructor;t._indices = new n(this._indices);
    } else t._indices = null;return t.getRawIndex = t._indices ? mu : vu, t;
  }, x_.wrapMethod = function (t, e) {
    var n = this[t];"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
      var t = n.apply(this, arguments);return e.apply(this, [t].concat(P(arguments)));
    });
  }, x_.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], x_.CHANGABLE_METHODS = ["filterSelf", "selectRange"];var b_ = function b_(t, e) {
    return e = e || {}, Su(e.coordDimensions || [], t, { dimsDef: e.dimensionsDefine || t.dimensionsDefine, encodeDef: e.encodeDefine || t.encodeDefine, dimCount: e.dimensionsCount, generateCoord: e.generateCoord, generateCoordCount: e.generateCoordCount });
  };Ou.prototype.parse = function (t) {
    return t;
  }, Ou.prototype.getSetting = function (t) {
    return this._setting[t];
  }, Ou.prototype.contain = function (t) {
    var e = this._extent;return t >= e[0] && t <= e[1];
  }, Ou.prototype.normalize = function (t) {
    var e = this._extent;return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
  }, Ou.prototype.scale = function (t) {
    var e = this._extent;return t * (e[1] - e[0]) + e[0];
  }, Ou.prototype.unionExtent = function (t) {
    var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
  }, Ou.prototype.unionExtentFromData = function (t, e) {
    this.unionExtent(t.getApproximateExtent(e));
  }, Ou.prototype.getExtent = function () {
    return this._extent.slice();
  }, Ou.prototype.setExtent = function (t, e) {
    var n = this._extent;isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
  }, Ou.prototype.isBlank = function () {
    return this._isBlank;
  }, Ou.prototype.setBlank = function (t) {
    this._isBlank = t;
  }, Ou.prototype.getLabel = null, Ji(Ou), ir(Ou, { registerWhenExtend: !0 }), Lu.createByAxisModel = function (t) {
    var e = t.option,
        n = e.data,
        i = n && p(n, Bu);return new Lu({ categories: i, needCollect: !i, deduplication: e.dedplication !== !1 });
  };var S_ = Lu.prototype;S_.getOrdinal = function (t) {
    return Eu(this).get(t);
  }, S_.parseAndCollect = function (t) {
    var e,
        n = this._needCollect;if ("string" != typeof t && !n) return t;if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;var i = Eu(this);return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e;
  };var M_ = Ou.prototype,
      T_ = Ou.extend({ type: "ordinal", init: function init(t, e) {
      (!t || x(t)) && (t = new Lu({ categories: t })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];
    }, parse: function parse(t) {
      return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
    }, contain: function contain(t) {
      return t = this.parse(t), M_.contain.call(this, t) && null != this._ordinalMeta.categories[t];
    }, normalize: function normalize(t) {
      return M_.normalize.call(this, this.parse(t));
    }, scale: function scale(t) {
      return Math.round(M_.scale.call(this, t));
    }, getTicks: function getTicks() {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1];) {
        t.push(n), n++;
      }return t;
    }, getLabel: function getLabel(t) {
      return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];
    }, count: function count() {
      return this._extent[1] - this._extent[0] + 1;
    }, unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, getOrdinalMeta: function getOrdinalMeta() {
      return this._ordinalMeta;
    }, niceTicks: H, niceExtent: H });T_.create = function () {
    return new T_();
  };var C_ = Ua,
      I_ = Ua,
      k_ = Ou.extend({ type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function setExtent(t, e) {
      var n = this._extent;isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
    }, unionExtent: function unionExtent(t) {
      var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), k_.prototype.setExtent.call(this, e[0], e[1]);
    }, getInterval: function getInterval() {
      return this._interval;
    }, setInterval: function setInterval(t) {
      this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Ru(t);
    }, getTicks: function getTicks() {
      return Hu(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
    }, getLabel: function getLabel(t, e) {
      if (null == t) return "";var n = e && e.precision;return null == n ? n = Ka(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = I_(t, n, !0), uo(t);
    }, niceTicks: function niceTicks(t, e, n) {
      t = t || 5;var i = this._extent,
          r = i[1] - i[0];if (isFinite(r)) {
        0 > r && (r = -r, i.reverse());var a = zu(i, t, e, n);this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
      }
    }, niceExtent: function niceExtent(t) {
      var e = this._extent;if (e[0] === e[1]) if (0 !== e[0]) {
        var n = e[0];t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);
      } else e[1] = 1;var i = e[1] - e[0];isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var r = this._interval;t.fixMin || (e[0] = I_(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = I_(Math.ceil(e[1] / r) * r));
    } });k_.create = function () {
    return new k_();
  };var D_ = "__ec_stack_",
      A_ = .5,
      P_ = "undefined" != typeof Float32Array ? Float32Array : Array,
      O_ = ({ seriesType: "bar", plan: jm(), reset: function reset(t) {
      function e(t, e) {
        for (var n, c = new P_(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) {
          f[u] = e.get(o, n), f[1 - u] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
        }e.setLayout({ largePoints: c, barWidth: h, valueAxisStart: Zu(r, a, !1), valueAxisHorizontal: l });
      }if (qu(t) && Uu(t)) {
        var n = t.getData(),
            i = t.coordinateSystem,
            r = i.getBaseAxis(),
            a = i.getOtherAxis(r),
            o = n.mapDimension(a.dim),
            s = n.mapDimension(r.dim),
            l = a.isHorizontal(),
            u = l ? 0 : 1,
            h = Yu(Xu([t]), r, t).width;return h > A_ || (h = A_), { progress: e };
      }
    } }, k_.prototype),
      L_ = Math.ceil,
      E_ = Math.floor,
      B_ = 1e3,
      z_ = 60 * B_,
      R_ = 60 * z_,
      F_ = 24 * R_,
      N_ = function N_(t, e, n, i) {
    for (; i > n;) {
      var r = n + i >>> 1;t[r][1] < e ? n = r + 1 : i = r;
    }return n;
  },
      H_ = k_.extend({ type: "time", getLabel: function getLabel(t) {
      var e = this._stepLvl,
          n = new Date(t);return mo(e[0], n, this.getSetting("useUTC"));
    }, niceExtent: function niceExtent(t) {
      var e = this._extent;if (e[0] === e[1] && (e[0] -= F_, e[1] += F_), e[1] === -1 / 0 && 1 / 0 === e[0]) {
        var n = new Date();e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - F_;
      }this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var i = this._interval;t.fixMin || (e[0] = Ua(E_(e[0] / i) * i)), t.fixMax || (e[1] = Ua(L_(e[1] / i) * i));
    }, niceTicks: function niceTicks(t, e, n) {
      t = t || 10;var i = this._extent,
          r = i[1] - i[0],
          a = r / t;null != e && e > a && (a = e), null != n && a > n && (a = n);var o = V_.length,
          s = N_(V_, a, 0, o),
          l = V_[Math.min(s, o - 1)],
          u = l[1];if ("year" === l[0]) {
        var h = r / u,
            c = ao(h / t, !0);u *= c;
      }var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
          f = [Math.round(L_((i[0] - d) / u) * u + d), Math.round(E_((i[1] - d) / u) * u + d)];Nu(f, i), this._stepLvl = l, this._interval = u, this._niceExtent = f;
    }, parse: function parse(t) {
      return +no(t);
    } });f(["contain", "normalize"], function (t) {
    H_.prototype[t] = function (e) {
      return O_[t].call(this, this.parse(e));
    };
  });var V_ = [["hh:mm:ss", B_], ["hh:mm:ss", 5 * B_], ["hh:mm:ss", 10 * B_], ["hh:mm:ss", 15 * B_], ["hh:mm:ss", 30 * B_], ["hh:mm\nMM-dd", z_], ["hh:mm\nMM-dd", 5 * z_], ["hh:mm\nMM-dd", 10 * z_], ["hh:mm\nMM-dd", 15 * z_], ["hh:mm\nMM-dd", 30 * z_], ["hh:mm\nMM-dd", R_], ["hh:mm\nMM-dd", 2 * R_], ["hh:mm\nMM-dd", 6 * R_], ["hh:mm\nMM-dd", 12 * R_], ["MM-dd\nyyyy", F_], ["MM-dd\nyyyy", 2 * F_], ["MM-dd\nyyyy", 3 * F_], ["MM-dd\nyyyy", 4 * F_], ["MM-dd\nyyyy", 5 * F_], ["MM-dd\nyyyy", 6 * F_], ["week", 7 * F_], ["MM-dd\nyyyy", 10 * F_], ["week", 14 * F_], ["week", 21 * F_], ["month", 31 * F_], ["week", 42 * F_], ["month", 62 * F_], ["week", 70 * F_], ["quarter", 95 * F_], ["month", 31 * F_ * 4], ["month", 31 * F_ * 5], ["half-year", 380 * F_ / 2], ["month", 31 * F_ * 8], ["month", 31 * F_ * 10], ["year", 380 * F_]];H_.create = function (t) {
    return new H_({ useUTC: t.ecModel.get("useUTC") });
  };var W_ = Ou.prototype,
      G_ = k_.prototype,
      X_ = Ka,
      j_ = Ua,
      Y_ = Math.floor,
      q_ = Math.ceil,
      U_ = Math.pow,
      Z_ = Math.log,
      $_ = Ou.extend({ type: "log", base: 10, $constructor: function $constructor() {
      Ou.apply(this, arguments), this._originalScale = new k_();
    }, getTicks: function getTicks() {
      var t = this._originalScale,
          e = this._extent,
          n = t.getExtent();return p(G_.getTicks.call(this), function (i) {
        var r = Ua(U_(this.base, i));return r = i === e[0] && t.__fixMin ? $u(r, n[0]) : r, r = i === e[1] && t.__fixMax ? $u(r, n[1]) : r;
      }, this);
    }, getLabel: G_.getLabel, scale: function scale(t) {
      return t = W_.scale.call(this, t), U_(this.base, t);
    }, setExtent: function setExtent(t, e) {
      var n = this.base;t = Z_(t) / Z_(n), e = Z_(e) / Z_(n), G_.setExtent.call(this, t, e);
    }, getExtent: function getExtent() {
      var t = this.base,
          e = W_.getExtent.call(this);e[0] = U_(t, e[0]), e[1] = U_(t, e[1]);var n = this._originalScale,
          i = n.getExtent();return n.__fixMin && (e[0] = $u(e[0], i[0])), n.__fixMax && (e[1] = $u(e[1], i[1])), e;
    }, unionExtent: function unionExtent(t) {
      this._originalScale.unionExtent(t);var e = this.base;t[0] = Z_(t[0]) / Z_(e), t[1] = Z_(t[1]) / Z_(e), W_.unionExtent.call(this, t);
    }, unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, niceTicks: function niceTicks(t) {
      t = t || 10;var e = this._extent,
          n = e[1] - e[0];if (!(1 / 0 === n || 0 >= n)) {
        var i = io(n),
            r = t / n * i;for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) {
          i *= 10;
        }var a = [Ua(q_(e[0] / i) * i), Ua(Y_(e[1] / i) * i)];this._interval = i, this._niceExtent = a;
      }
    }, niceExtent: function niceExtent(t) {
      G_.niceExtent.call(this, t);var e = this._originalScale;e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
    } });f(["contain", "normalize"], function (t) {
    $_.prototype[t] = function (e) {
      return e = Z_(e) / Z_(this.base), W_[t].call(this, e);
    };
  }), $_.create = function () {
    return new $_();
  };var K_ = { getMin: function getMin(t) {
      var e = this.option,
          n = t || null == e.rangeStart ? e.min : e.rangeStart;return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n;
    }, getMax: function getMax(t) {
      var e = this.option,
          n = t || null == e.rangeEnd ? e.max : e.rangeEnd;return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n;
    }, getNeedCrossZero: function getNeedCrossZero() {
      var t = this.option;return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale;
    }, getCoordSysModel: H, setRange: function setRange(t, e) {
      this.option.rangeStart = t, this.option.rangeEnd = e;
    }, resetRange: function resetRange() {
      this.option.rangeStart = this.option.rangeEnd = null;
    } },
      Q_ = Ur({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
    } }),
      J_ = Ur({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath();
    } }),
      tx = Ur({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = i - a + o + s,
          u = Math.asin(s / o),
          h = Math.cos(u) * o,
          c = Math.sin(u),
          d = Math.cos(u),
          f = .6 * o,
          p = .7 * o;t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath();
    } }),
      ex = Ur({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.height,
          i = e.width,
          r = e.x,
          a = e.y,
          o = i / 3 * 2;t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath();
    } }),
      nx = { line: pv, rect: fv, roundRect: fv, square: fv, circle: rv, diamond: J_, pin: tx, arrow: ex, triangle: Q_ },
      ix = { line: function line(t, e, n, i, r) {
      r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
    }, rect: function rect(t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i;
    }, roundRect: function roundRect(t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
    }, square: function square(t, e, n, i, r) {
      var a = Math.min(n, i);r.x = t, r.y = e, r.width = a, r.height = a;
    }, circle: function circle(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
    }, diamond: function diamond(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    }, pin: function pin(t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    }, arrow: function arrow(t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    }, triangle: function triangle(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    } },
      rx = {};f(nx, function (t, e) {
    rx[e] = new t();
  });var ax = Ur({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, beforeBrush: function beforeBrush() {
      var t = this.style,
          e = this.shape;"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle");
    }, buildPath: function buildPath(t, e, n) {
      var i = e.symbolType,
          r = rx[i];"none" !== e.symbolType && (r || (i = "rect", r = rx[i]), ix[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n));
    } }),
      ox = { isDimensionStacked: Iu, enableDataStack: Cu, getStackedDimension: ku },
      sx = (Object.freeze || Object)({ createList: lh, getLayoutRect: xo, dataStack: ox, createScale: uh, mixinAxisModelCommonMethods: hh, completeDimensions: Su, createDimensions: b_, createSymbol: sh }),
      lx = 1e-8;fh.prototype = { constructor: fh, properties: null, getBoundingRect: function getBoundingRect() {
      var t = this._rect;if (t) return t;for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) {
        if ("polygon" === o[s].type) {
          var l = o[s].exterior;yr(l, r, a), oe(n, n, r), se(i, i, a);
        }
      }return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new gn(n[0], n[1], i[0] - n[0], i[1] - n[1]);
    }, contain: function contain(t) {
      var e = this.getBoundingRect(),
          n = this.geometries;if (!e.contain(t[0], t[1])) return !1;t: for (var i = 0, r = n.length; r > i; i++) {
        if ("polygon" === n[i].type) {
          var a = n[i].exterior,
              o = n[i].interiors;if (dh(a, t[0], t[1])) {
            for (var s = 0; s < (o ? o.length : 0); s++) {
              if (dh(o[s])) continue t;
            }return !0;
          }
        }
      }return !1;
    }, transformTo: function transformTo(t, e, n, i) {
      var r = this.getBoundingRect(),
          a = r.width / r.height;n ? i || (i = n / a) : n = a * i;for (var o = new gn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++) {
        if ("polygon" === l[u].type) {
          for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) {
            ae(h[d], h[d], s);
          }for (var f = 0; f < (c ? c.length : 0); f++) {
            for (var d = 0; d < c[f].length; d++) {
              ae(c[f][d], c[f][d], s);
            }
          }
        }
      }r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2];
    }, cloneShallow: function cloneShallow(t) {
      null == t && (t = this.name);var e = new fh(t, this.geometries, this.center);return e._rect = this._rect, e.transformTo = null, e;
    } };var ux = function ux(t) {
    return ph(t), p(v(t.features, function (t) {
      return t.geometry && t.properties && t.geometry.coordinates.length > 0;
    }), function (t) {
      var e = t.properties,
          n = t.geometry,
          i = n.coordinates,
          r = [];"Polygon" === n.type && r.push({ type: "polygon", exterior: i[0], interiors: i.slice(1) }), "MultiPolygon" === n.type && f(i, function (t) {
        t[0] && r.push({ type: "polygon", exterior: t[0], interiors: t.slice(1) });
      });var a = new fh(e.name, r, e.cp);return a.properties = e, a;
    });
  },
      hx = ji(),
      cx = [0, 1],
      dx = function dx(t, e, n) {
    this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1;
  };dx.prototype = { constructor: dx, contain: function contain(t) {
      var e = this._extent,
          n = Math.min(e[0], e[1]),
          i = Math.max(e[0], e[1]);return t >= n && i >= t;
    }, containData: function containData(t) {
      return this.contain(this.dataToCoord(t));
    }, getExtent: function getExtent() {
      return this._extent.slice();
    }, getPixelPrecision: function getPixelPrecision(t) {
      return Qa(t || this.scale.getExtent(), this._extent);
    }, setExtent: function setExtent(t, e) {
      var n = this._extent;n[0] = t, n[1] = e;
    }, dataToCoord: function dataToCoord(t, e) {
      var n = this._extent,
          i = this.scale;return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), Ph(n, i.count())), Ya(t, cx, n, e);
    }, coordToData: function coordToData(t, e) {
      var n = this._extent,
          i = this.scale;this.onBand && "ordinal" === i.type && (n = n.slice(), Ph(n, i.count()));var r = Ya(t, n, cx, e);return this.scale.scale(r);
    }, pointToData: function pointToData() {}, getTicksCoords: function getTicksCoords(t) {
      t = t || {};var e = t.tickModel || this.getTickModel(),
          n = mh(this, e),
          i = n.ticks,
          r = p(i, function (t) {
        return { coord: this.dataToCoord(t), tickValue: t };
      }, this),
          a = e.get("alignWithLabel");return Oh(this, r, n.tickCategoryInterval, a, t.clamp), r;
    }, getViewLabels: function getViewLabels() {
      return vh(this).labels;
    }, getLabelModel: function getLabelModel() {
      return this.model.getModel("axisLabel");
    }, getTickModel: function getTickModel() {
      return this.model.getModel("axisTick");
    }, getBandWidth: function getBandWidth() {
      var t = this._extent,
          e = this.scale.getExtent(),
          n = e[1] - e[0] + (this.onBand ? 1 : 0);0 === n && (n = 1);var i = Math.abs(t[1] - t[0]);return Math.abs(i) / n;
    }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function calculateCategoryInterval() {
      return Ch(this);
    } };var fx = ux,
      px = {};f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
    px[t] = Kd[t];
  });var gx = {};f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
    gx[t] = Av[t];
  }), Wm.extend({ type: "series.line", dependencies: ["grid", "polar"], getInitialData: function getInitialData() {
      return Du(this.getSource(), this);
    }, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, hoverAnimation: !0, clipOverflow: !0, label: { position: "top" }, lineStyle: { width: 2, type: "solid" }, step: !1, smooth: !1, smoothMonotone: null, symbol: "emptyCircle", symbolSize: 4, symbolRotate: null, showSymbol: !0, showAllSymbol: "auto", connectNulls: !1, sampling: "none", animationEasing: "linear", progressive: 0, hoverLayerThreshold: 1 / 0 } });var vx = Eh.prototype,
      mx = Eh.getSymbolSize = function (t, e) {
    var n = t.getItemVisual(e, "symbolSize");return n instanceof Array ? n.slice() : [+n, +n];
  };vx._createSymbol = function (t, e, n, i, r) {
    this.removeAll();var a = e.getItemVisual(n, "color"),
        o = sh(t, -1, -1, 2, 2, a, r);o.attr({ z2: 100, culling: !0, scale: Bh(i) }), o.drift = zh, this._symbolType = t, this.add(o);
  }, vx.stopSymbolAnimation = function (t) {
    this.childAt(0).stopAnimation(t);
  }, vx.getSymbolPath = function () {
    return this.childAt(0);
  }, vx.getScale = function () {
    return this.childAt(0).scale;
  }, vx.highlight = function () {
    this.childAt(0).trigger("emphasis");
  }, vx.downplay = function () {
    this.childAt(0).trigger("normal");
  }, vx.setZ = function (t, e) {
    var n = this.childAt(0);n.zlevel = t, n.z = e;
  }, vx.setDraggable = function (t) {
    var e = this.childAt(0);e.draggable = t, e.cursor = t ? "move" : "pointer";
  }, vx.updateData = function (t, e, n) {
    this.silent = !1;var i = t.getItemVisual(e, "symbol") || "circle",
        r = t.hostModel,
        a = mx(t, e),
        o = i !== this._symbolType;if (o) {
      var s = t.getItemVisual(e, "symbolKeepAspect");this._createSymbol(i, t, e, a, s);
    } else {
      var l = this.childAt(0);l.silent = !1, Aa(l, { scale: Bh(a) }, r, e);
    }if (this._updateCommon(t, e, a, n), o) {
      var l = this.childAt(0),
          u = n && n.fadeIn,
          h = { scale: l.scale.slice() };u && (h.style = { opacity: l.style.opacity }), l.scale = [0, 0], u && (l.style.opacity = 0), Pa(l, h, r, e);
    }this._seriesModel = r;
  };var yx = ["itemStyle"],
      _x = ["emphasis", "itemStyle"],
      xx = ["label"],
      bx = ["emphasis", "label"];vx._updateCommon = function (t, e, n, i) {
    function r(e) {
      return b ? t.getName(e) : Lh(t, e);
    }var a = this.childAt(0),
        s = t.hostModel,
        l = t.getItemVisual(e, "color");"image" !== a.type && a.useStyle({ strokeNoScale: !0 });var u = i && i.itemStyle,
        h = i && i.hoverItemStyle,
        c = i && i.symbolRotate,
        d = i && i.symbolOffset,
        f = i && i.labelModel,
        p = i && i.hoverLabelModel,
        g = i && i.hoverAnimation,
        v = i && i.cursorStyle;if (!i || t.hasItemOption) {
      var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);u = m.getModel(yx).getItemStyle(["color"]), h = m.getModel(_x).getItemStyle(), c = m.getShallow("symbolRotate"), d = m.getShallow("symbolOffset"), f = m.getModel(xx), p = m.getModel(bx), g = m.getShallow("hoverAnimation"), v = m.getShallow("cursor");
    } else h = o({}, h);var y = a.style;a.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && a.attr("position", [qa(d[0], n[0]), qa(d[1], n[1])]), v && a.attr("cursor", v), a.setColor(l, i && i.symbolInnerColor), a.setStyle(u);var _ = t.getItemVisual(e, "opacity");null != _ && (y.opacity = _);var x = t.getItemVisual(e, "liftZ"),
        w = a.__z2Origin;null != x ? null == w && (a.__z2Origin = a.z2, a.z2 += x) : null != w && (a.z2 = w, a.__z2Origin = null);var b = i && i.useNameLabel;_a(y, h, f, p, { labelFetcher: s, labelDataIndex: e, defaultText: r, isRectText: !0, autoColor: l }), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = h, ma(a), a.__symbolOriginalScale = Bh(n), g && s.isAnimationEnabled() && a.on("mouseover", Rh).on("mouseout", Fh).on("emphasis", Nh).on("normal", Hh);
  }, vx.fadeOut = function (t, e) {
    var n = this.childAt(0);this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), Aa(n, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, t);
  }, h(Eh, Yf);var Sx = Vh.prototype;Sx.updateData = function (t, e) {
    e = Gh(e);var n = this.group,
        i = t.hostModel,
        r = this._data,
        a = this._symbolCtor,
        o = Xh(t);r || n.removeAll(), t.diff(r).add(function (i) {
      var r = t.getItemLayout(i);if (Wh(t, r, i, e)) {
        var s = new a(t, i, o);s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s);
      }
    }).update(function (s, l) {
      var u = r.getItemGraphicEl(l),
          h = t.getItemLayout(s);return Wh(t, h, s, e) ? (u ? (u.updateData(t, s, o), Aa(u, { position: h }, i)) : (u = new a(t, s), u.attr("position", h)), n.add(u), void t.setItemGraphicEl(s, u)) : void n.remove(u);
    }).remove(function (t) {
      var e = r.getItemGraphicEl(t);e && e.fadeOut(function () {
        n.remove(e);
      });
    }).execute(), this._data = t;
  }, Sx.isPersistent = function () {
    return !0;
  }, Sx.updateLayout = function () {
    var t = this._data;t && t.eachItemGraphicEl(function (e, n) {
      var i = t.getItemLayout(n);e.attr("position", i);
    });
  }, Sx.incrementalPrepareUpdate = function (t) {
    this._seriesScope = Xh(t), this._data = null, this.group.removeAll();
  }, Sx.incrementalUpdate = function (t, e, n) {
    function i(t) {
      t.isGroup || (t.incremental = t.useHoverLayer = !0);
    }n = Gh(n);for (var r = t.start; r < t.end; r++) {
      var a = e.getItemLayout(r);if (Wh(e, a, r, n)) {
        var o = new this._symbolCtor(e, r, this._seriesScope);o.traverse(i), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o);
      }
    }
  }, Sx.remove = function (t) {
    var e = this.group,
        n = this._data;n && t ? n.eachItemGraphicEl(function (t) {
      t.fadeOut(function () {
        e.remove(t);
      });
    }) : e.removeAll();
  };var Mx = function Mx(t, e, n, i, r, a, o, s) {
    for (var l = Uh(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], v = jh(r, e, o), m = jh(a, t, s), y = 0; y < l.length; y++) {
      var _ = l[y],
          x = !0;switch (_.cmd) {case "=":
          var w = t.getItemLayout(_.idx),
              b = e.getItemLayout(_.idx1);(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), u.push(w), h.push(b), c.push(n[_.idx]), d.push(i[_.idx1]), g.push(e.getRawIndex(_.idx1));break;case "+":
          var S = _.idx;u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), h.push(e.getItemLayout(S).slice()), c.push(qh(v, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));break;case "-":
          var S = _.idx,
              M = t.getRawIndex(S);M !== S ? (u.push(t.getItemLayout(S)), h.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(qh(m, a, t, S)), g.push(M)) : x = !1;}x && (f.push(_), p.push(p.length));
    }p.sort(function (t, e) {
      return g[t] - g[e];
    });for (var T = [], C = [], I = [], k = [], D = [], y = 0; y < p.length; y++) {
      var S = p[y];T[y] = u[S], C[y] = h[S], I[y] = c[S], k[y] = d[S], D[y] = f[S];
    }return { current: T, next: C, stackedOnCurrent: I, stackedOnNext: k, status: D };
  },
      Tx = oe,
      Cx = se,
      Ix = Y,
      kx = W,
      Dx = [],
      Ax = [],
      Px = [],
      Ox = Rr.extend({ type: "ec-polyline", shape: { points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, style: { fill: null, stroke: "#000" }, brush: ov(Rr.prototype.brush), buildPath: function buildPath(t, e) {
      var n = e.points,
          i = 0,
          r = n.length,
          a = Jh(n, e.smoothConstraint);if (e.connectNulls) {
        for (; r > 0 && Zh(n[r - 1]); r--) {}for (; r > i && Zh(n[i]); i++) {}
      }for (; r > i;) {
        i += $h(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
      }
    } }),
      Lx = Rr.extend({ type: "ec-polygon", shape: { points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, brush: ov(Rr.prototype.brush), buildPath: function buildPath(t, e) {
      var n = e.points,
          i = e.stackedOnPoints,
          r = 0,
          a = n.length,
          o = e.smoothMonotone,
          s = Jh(n, e.smoothConstraint),
          l = Jh(i, e.smoothConstraint);if (e.connectNulls) {
        for (; a > 0 && Zh(n[a - 1]); a--) {}for (; a > r && Zh(n[r]); r++) {}
      }for (; a > r;) {
        var u = $h(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);$h(t, i, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += u + 1, t.closePath();
      }
    } });Es.extend({ type: "line", init: function init() {
      var t = new Yf(),
          e = new Vh();this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
    }, render: function render(t, e, n) {
      var i = t.coordinateSystem,
          r = this.group,
          a = t.getData(),
          o = t.getModel("lineStyle"),
          l = t.getModel("areaStyle"),
          u = a.mapArray(a.getItemLayout),
          h = "polar" === i.type,
          c = this._coordSys,
          d = this._symbolDraw,
          f = this._polyline,
          p = this._polygon,
          g = this._lineGroup,
          v = t.get("animation"),
          m = !l.isEmpty(),
          y = l.get("origin"),
          _ = jh(i, a, y),
          x = ic(i, a, _),
          w = t.get("showSymbol"),
          b = w && !h && uc(t, a, i),
          S = this._data;S && S.eachItemGraphicEl(function (t, e) {
        t.__temp && (r.remove(t), S.setItemGraphicEl(e, null));
      }), w || d.remove(), r.add(g);var M = !h && t.get("step");f && c.type === i.type && M === this._step ? (m && !p ? p = this._newPolygon(u, x, i, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(oc(i, !1, !1, t)), w && d.updateData(a, { isIgnore: b, clipShape: oc(i, !1, !0, t) }), a.eachItemGraphicEl(function (t) {
        t.stopAnimation(!0);
      }), tc(this._stackedOnPoints, x) && tc(this._points, u) || (v ? this._updateAnimation(a, x, i, n, M, y) : (M && (u = sc(u, i, M), x = sc(x, i, M)), f.setShape({ points: u }), p && p.setShape({ points: u, stackedOnPoints: x })))) : (w && d.updateData(a, { isIgnore: b, clipShape: oc(i, !1, !0, t) }), M && (u = sc(u, i, M), x = sc(x, i, M)), f = this._newPolyline(u, i, v), m && (p = this._newPolygon(u, x, i, v)), g.setClipPath(oc(i, !0, !1, t)));var T = lc(a, i) || a.getVisual("color");f.useStyle(s(o.getLineStyle(), { fill: "none", stroke: T, lineJoin: "bevel" }));var C = t.get("smooth");if (C = ec(t.get("smooth")), f.setShape({ smooth: C, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") }), p) {
        var I = a.getCalculationInfo("stackedOnSeries"),
            k = 0;p.useStyle(s(l.getAreaStyle(), { fill: T, opacity: .7, lineJoin: "bevel" })), I && (k = ec(I.get("smooth"))), p.setShape({ smooth: C, stackedOnSmooth: k, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") });
      }this._data = a, this._coordSys = i, this._stackedOnPoints = x, this._points = u, this._step = M, this._valueOrigin = y;
    }, dispose: function dispose() {}, highlight: function highlight(t, e, n, i) {
      var r = t.getData(),
          a = Xi(r, i);if (!(a instanceof Array) && null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);if (!o) {
          var s = r.getItemLayout(a);if (!s) return;o = new Eh(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o);
        }o.highlight();
      } else Es.prototype.highlight.call(this, t, e, n, i);
    }, downplay: function downplay(t, e, n, i) {
      var r = t.getData(),
          a = Xi(r, i);if (null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
      } else Es.prototype.downplay.call(this, t, e, n, i);
    }, _newPolyline: function _newPolyline(t) {
      var e = this._polyline;return e && this._lineGroup.remove(e), e = new Ox({ shape: { points: t }, silent: !0, z2: 10 }), this._lineGroup.add(e), this._polyline = e, e;
    }, _newPolygon: function _newPolygon(t, e) {
      var n = this._polygon;return n && this._lineGroup.remove(n), n = new Lx({ shape: { points: t, stackedOnPoints: e }, silent: !0 }), this._lineGroup.add(n), this._polygon = n, n;
    }, _updateAnimation: function _updateAnimation(t, e, n, i, r, a) {
      var o = this._polyline,
          s = this._polygon,
          l = t.hostModel,
          u = Mx(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
          h = u.current,
          c = u.stackedOnCurrent,
          d = u.next,
          f = u.stackedOnNext;r && (h = sc(u.current, n, r), c = sc(u.stackedOnCurrent, n, r), d = sc(u.next, n, r), f = sc(u.stackedOnNext, n, r)), o.shape.__points = u.current, o.shape.points = h, Aa(o, { shape: { points: d } }, l), s && (s.setShape({ points: h, stackedOnPoints: c }), Aa(s, { shape: { points: d, stackedOnPoints: f } }, l));for (var p = [], g = u.status, v = 0; v < g.length; v++) {
        var m = g[v].cmd;if ("=" === m) {
          var y = t.getItemGraphicEl(g[v].idx1);y && p.push({ el: y, ptIdx: v });
        }
      }o.animators && o.animators.length && o.animators[0].during(function () {
        for (var t = 0; t < p.length; t++) {
          var e = p[t].el;e.attr("position", o.shape.__points[p[t].ptIdx]);
        }
      });
    }, remove: function remove() {
      var t = this.group,
          e = this._data;this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function (n, i) {
        n.__temp && (t.remove(n), e.setItemGraphicEl(i, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;
    } });var Ex = function Ex(t, e, n) {
    return { seriesType: t, performRawSeries: !0, reset: function reset(t, i) {
        function r(e, n) {
          if ("function" == typeof s) {
            var i = t.getRawValue(n),
                r = t.getDataParams(n);e.setItemVisual(n, "symbolSize", s(i, r));
          }if (e.hasItemOption) {
            var a = e.getItemModel(n),
                o = a.getShallow("symbol", !0),
                l = a.getShallow("symbolSize", !0),
                u = a.getShallow("symbolKeepAspect", !0);null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n, "symbolSize", l), null != u && e.setItemVisual(n, "symbolKeepAspect", u);
          }
        }var a = t.getData(),
            o = t.get("symbol") || e,
            s = t.get("symbolSize"),
            l = t.get("symbolKeepAspect");if (a.setVisual({ legendSymbol: n || o, symbol: o, symbolSize: s, symbolKeepAspect: l }), !i.isSeriesFiltered(t)) {
          var u = "function" == typeof s;return { dataEach: a.hasItemOption || u ? r : null };
        }
      } };
  },
      Bx = function Bx(t) {
    return { seriesType: t, plan: jm(), reset: function reset(t) {
        function e(t, e) {
          for (var n = t.end - t.start, r = a && new Float32Array(n * s), l = t.start, u = 0, h = [], c = []; l < t.end; l++) {
            var d;if (1 === s) {
              var f = e.get(o[0], l);d = !isNaN(f) && i.dataToPoint(f, null, c);
            } else {
              var f = h[0] = e.get(o[0], l),
                  p = h[1] = e.get(o[1], l);d = !isNaN(f) && !isNaN(p) && i.dataToPoint(h, null, c);
            }a ? (r[u++] = d ? d[0] : 0 / 0, r[u++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0]);
          }a && e.setLayout("symbolPoints", r);
        }var n = t.getData(),
            i = t.coordinateSystem,
            r = t.pipelineContext,
            a = r.large;if (i) {
          var o = p(i.dimensions, function (t) {
            return n.mapDimension(t);
          }).slice(0, 2),
              s = o.length,
              l = n.getCalculationInfo("stackResultDimension");return Iu(n, o[0]) && (o[0] = l), Iu(n, o[1]) && (o[1] = l), s && { progress: e };
        }
      } };
  },
      zx = { average: function average(t) {
      for (var e = 0, n = 0, i = 0; i < t.length; i++) {
        isNaN(t[i]) || (e += t[i], n++);
      }return 0 === n ? 0 / 0 : e / n;
    }, sum: function sum(t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        e += t[n] || 0;
      }return e;
    }, max: function max(t) {
      for (var e = -1 / 0, n = 0; n < t.length; n++) {
        t[n] > e && (e = t[n]);
      }return isFinite(e) ? e : 0 / 0;
    }, min: function min(t) {
      for (var e = 1 / 0, n = 0; n < t.length; n++) {
        t[n] < e && (e = t[n]);
      }return isFinite(e) ? e : 0 / 0;
    }, nearest: function nearest(t) {
      return t[0];
    } },
      Rx = function Rx(t) {
    return Math.round(t.length / 2);
  },
      Fx = function Fx(t) {
    return { seriesType: t, modifyOutputEnd: !0, reset: function reset(t) {
        var e = t.getData(),
            n = t.get("sampling"),
            i = t.coordinateSystem;if ("cartesian2d" === i.type && n) {
          var r = i.getBaseAxis(),
              a = i.getOtherAxis(r),
              o = r.getExtent(),
              s = o[1] - o[0],
              l = Math.round(e.count() / s);if (l > 1) {
            var u;"string" == typeof n ? u = zx[n] : "function" == typeof n && (u = n), u && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, u, Rx));
          }
        }
      } };
  },
      Nx = function Nx(t) {
    this._axes = {}, this._dimList = [], this.name = t || "";
  };Nx.prototype = { constructor: Nx, type: "cartesian", getAxis: function getAxis(t) {
      return this._axes[t];
    }, getAxes: function getAxes() {
      return p(this._dimList, cc, this);
    }, getAxesByScale: function getAxesByScale(t) {
      return t = t.toLowerCase(), v(this.getAxes(), function (e) {
        return e.scale.type === t;
      });
    }, addAxis: function addAxis(t) {
      var e = t.dim;this._axes[e] = t, this._dimList.push(e);
    }, dataToCoord: function dataToCoord(t) {
      return this._dataCoordConvert(t, "dataToCoord");
    }, coordToData: function coordToData(t) {
      return this._dataCoordConvert(t, "coordToData");
    }, _dataCoordConvert: function _dataCoordConvert(t, e) {
      for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
        var a = n[r],
            o = this._axes[a];i[a] = o[e](t[a]);
      }return i;
    } }, dc.prototype = { constructor: dc, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function getBaseAxis() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, containPoint: function containPoint(t) {
      var e = this.getAxis("x"),
          n = this.getAxis("y");return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
    }, containData: function containData(t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
    }, dataToPoint: function dataToPoint(t, e, n) {
      var i = this.getAxis("x"),
          r = this.getAxis("y");return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n;
    }, clampData: function clampData(t, e) {
      var n = this.getAxis("x").scale,
          i = this.getAxis("y").scale,
          r = n.getExtent(),
          a = i.getExtent(),
          o = n.parse(t[0]),
          s = i.parse(t[1]);return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;
    }, pointToData: function pointToData(t, e) {
      var n = this.getAxis("x"),
          i = this.getAxis("y");return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e;
    }, getOtherAxis: function getOtherAxis(t) {
      return this.getAxis("x" === t.dim ? "y" : "x");
    } }, h(dc, Nx);var Hx = function Hx(t, e, n, i, r) {
    dx.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom";
  };Hx.prototype = { constructor: Hx, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function isHorizontal() {
      var t = this.position;return "top" === t || "bottom" === t;
    }, getGlobalExtent: function getGlobalExtent(t) {
      var e = this.getExtent();return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;
    }, getOtherAxis: function getOtherAxis() {
      this.grid.getOtherAxis();
    }, pointToData: function pointToData(t, e) {
      return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
    }, toLocalCoord: null, toGlobalCoord: null }, h(Hx, dx);var Vx = { show: !0, zlevel: 0, z: 0, inverse: !1, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: !1, triggerEvent: !1, tooltip: { show: !1 }, axisPointer: {}, axisLine: { show: !0, onZero: !0, onZeroAxisIndex: null, lineStyle: { color: "#333", width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15] }, axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 }, splitLine: { show: !0, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } }, splitArea: { show: !1, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } } },
      Wx = {};Wx.categoryAxis = r({ boundaryGap: !0, deduplication: null, splitLine: { show: !1 }, axisTick: { alignWithLabel: !1, interval: "auto" }, axisLabel: { interval: "auto" } }, Vx), Wx.valueAxis = r({ boundaryGap: [0, 0], splitNumber: 5 }, Vx), Wx.timeAxis = s({ scale: !0, min: "dataMin", max: "dataMax" }, Wx.valueAxis), Wx.logAxis = s({ scale: !0, logBase: 10 }, Wx.valueAxis);var Gx = ["value", "category", "time", "log"],
      Xx = function Xx(t, e, n, i) {
    f(Gx, function (o) {
      e.extend({ type: t + "Axis." + o, mergeDefaultAndTheme: function mergeDefaultAndTheme(e, i) {
          var a = this.layoutMode,
              s = a ? bo(e) : {},
              l = i.getTheme();r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), a && wo(e, s, a);
        }, optionUpdated: function optionUpdated() {
          var t = this.option;"category" === t.type && (this.__ordinalMeta = Lu.createByAxisModel(this));
        }, getCategories: function getCategories(t) {
          var e = this.option;return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;
        }, getOrdinalMeta: function getOrdinalMeta() {
          return this.__ordinalMeta;
        }, defaultOption: a([{}, Wx[o + "Axis"], i], !0) });
    }), em.registerSubTypeDefaulter(t + "Axis", _(n, t));
  },
      jx = em.extend({ type: "cartesian2dAxis", axis: null, init: function init() {
      jx.superApply(this, "init", arguments), this.resetRange();
    }, mergeOption: function mergeOption() {
      jx.superApply(this, "mergeOption", arguments), this.resetRange();
    }, restoreData: function restoreData() {
      jx.superApply(this, "restoreData", arguments), this.resetRange();
    }, getCoordSysModel: function getCoordSysModel() {
      return this.ecModel.queryComponents({ mainType: "grid", index: this.option.gridIndex, id: this.option.gridId })[0];
    } });r(jx.prototype, K_);var Yx = { offset: 0 };Xx("x", jx, fc, Yx), Xx("y", jx, fc, Yx), em.extend({ type: "grid", dependencies: ["xAxis", "yAxis"], layoutMode: "box", coordinateSystem: null, defaultOption: { show: !1, zlevel: 0, z: 0, left: "10%", top: 60, right: "10%", bottom: 60, containLabel: !1, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc" } });var qx = gc.prototype;qx.type = "grid", qx.axisPointerEnabled = !0, qx.getRect = function () {
    return this._rect;
  }, qx.update = function (t, e) {
    var n = this._axesMap;this._updateScale(t, this.model), f(n.x, function (t) {
      Ju(t.scale, t.model);
    }), f(n.y, function (t) {
      Ju(t.scale, t.model);
    });var i = {};f(n.x, function (t) {
      vc(n, "y", t, i);
    }), f(n.y, function (t) {
      vc(n, "x", t, i);
    }), this.resize(this.model, e);
  }, qx.resize = function (t, e, n) {
    function i() {
      f(a, function (t) {
        var e = t.isHorizontal(),
            n = e ? [0, r.width] : [0, r.height],
            i = t.inverse ? 1 : 0;t.setExtent(n[i], n[1 - i]), yc(t, e ? r.x : r.y);
      });
    }var r = xo(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });this._rect = r;var a = this._axesList;i(), !n && t.get("containLabel") && (f(a, function (t) {
      if (!t.model.get("axisLabel.inside")) {
        var e = rh(t);if (e) {
          var n = t.isHorizontal() ? "height" : "width",
              i = t.model.get("axisLabel.margin");r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i);
        }
      }
    }), i());
  }, qx.getAxis = function (t, e) {
    var n = this._axesMap[t];if (null != n) {
      if (null == e) for (var i in n) {
        if (n.hasOwnProperty(i)) return n[i];
      }return n[e];
    }
  }, qx.getAxes = function () {
    return this._axesList.slice();
  }, qx.getCartesian = function (t, e) {
    if (null != t && null != e) {
      var n = "x" + t + "y" + e;return this._coordsMap[n];
    }S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);for (var i = 0, r = this._coordsList; i < r.length; i++) {
      if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];
    }
  }, qx.getCartesians = function () {
    return this._coordsList.slice();
  }, qx.convertToPixel = function (t, e, n) {
    var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
  }, qx.convertFromPixel = function (t, e, n) {
    var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
  }, qx._findConvertTarget = function (t, e) {
    var n,
        i,
        r = e.seriesModel,
        a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
        o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
        s = e.gridModel,
        l = this._coordsList;if (r) n = r.coordinateSystem, u(l, n) < 0 && (n = null);else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);else if (a) i = this.getAxis("x", a.componentIndex);else if (o) i = this.getAxis("y", o.componentIndex);else if (s) {
      var h = s.coordinateSystem;h === this && (n = this._coordsList[0]);
    }return { cartesian: n, axis: i };
  }, qx.containPoint = function (t) {
    var e = this._coordsList[0];return e ? e.containPoint(t) : void 0;
  }, qx._initCartesian = function (t, e) {
    function n(n) {
      return function (o, s) {
        if (pc(o, t, e)) {
          var l = o.get("position");"x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;var u = new Hx(n, th(o), [0, 0], o.get("type"), l),
              h = "category" === u.type;u.onBand = h && o.get("boundaryGap"), u.inverse = o.get("inverse"), o.axis = u, u.model = o, u.grid = this, u.index = s, this._axesList.push(u), r[n][s] = u, a[n]++;
        }
      };
    }var i = { left: !1, right: !1, top: !1, bottom: !1 },
        r = { x: {}, y: {} },
        a = { x: 0, y: 0 };return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function (e, n) {
      f(r.y, function (i, r) {
        var a = "x" + n + "y" + r,
            o = new dc(a);o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i);
      }, this);
    }, this)) : (this._axesMap = {}, void (this._axesList = []));
  }, qx._updateScale = function (t, e) {
    function n(t, e) {
      f(t.mapDimension(e.dim, !0), function (n) {
        e.scale.unionExtentFromData(t, ku(t, n));
      });
    }f(this._axesList, function (t) {
      t.scale.setExtent(1 / 0, -1 / 0);
    }), t.eachSeries(function (i) {
      if (xc(i)) {
        var r = _c(i, t),
            a = r[0],
            o = r[1];if (!pc(a, e, t) || !pc(o, e, t)) return;var s = this.getCartesian(a.componentIndex, o.componentIndex),
            l = i.getData(),
            u = s.getAxis("x"),
            h = s.getAxis("y");"list" === l.type && (n(l, u, i), n(l, h, i));
      }
    }, this);
  }, qx.getTooltipAxes = function (t) {
    var e = [],
        n = [];return f(this.getCartesians(), function (i) {
      var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
          a = i.getOtherAxis(r);u(e, r) < 0 && e.push(r), u(n, a) < 0 && n.push(a);
    }), { baseAxes: e, otherAxes: n };
  };var Ux = ["xAxis", "yAxis"];gc.create = function (t, e) {
    var n = [];return t.eachComponent("grid", function (i, r) {
      var a = new gc(i, t, e);a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a);
    }), t.eachSeries(function (e) {
      if (xc(e)) {
        var n = _c(e, t),
            i = n[0],
            r = n[1],
            a = i.getCoordSysModel(),
            o = a.coordinateSystem;e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex);
      }
    }), n;
  }, gc.dimensions = gc.prototype.dimensions = dc.prototype.dimensions, Zo.register("cartesian2d", gc);var Zx = Math.PI,
      $x = function $x(t, e) {
    this.opt = e, this.axisModel = t, s(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0 }), this.group = new Yf();var n = new Yf({ position: e.position.slice(), rotation: e.rotation });n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;
  };$x.prototype = { constructor: $x, hasBuilder: function hasBuilder(t) {
      return !!Kx[t];
    }, add: function add(t) {
      Kx[t].call(this);
    }, getGroup: function getGroup() {
      return this.group;
    } };var Kx = { axisLine: function axisLine() {
      var t = this.opt,
          e = this.axisModel;if (e.get("axisLine.show")) {
        var n = this.axisModel.axis.getExtent(),
            i = this._transform,
            r = [n[0], 0],
            a = [n[1], 0];i && (ae(r, r, i), ae(a, a, i));var s = o({ lineCap: "round" }, e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new pv(ta({ anid: "line", shape: { x1: r[0], y1: r[1], x2: a[0], y2: a[1] }, style: s, strokeContainThreshold: t.strokeContainThreshold || 5, silent: !0, z2: 1 })));var l = e.get("axisLine.symbol"),
            u = e.get("axisLine.symbolSize"),
            h = e.get("axisLine.symbolOffset") || 0;if ("number" == typeof h && (h = [h, h]), null != l) {
          "string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);var c = u[0],
              d = u[1];f([{ rotate: t.rotation + Math.PI / 2, offset: h[0], r: 0 }, { rotate: t.rotation - Math.PI / 2, offset: h[1], r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1])) }], function (e, n) {
            if ("none" !== l[n] && null != l[n]) {
              var i = sh(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];i.attr({ rotation: e.rotate, position: o, silent: !0 }), this.group.add(i);
            }
          }, this);
        }
      }
    }, axisTickLabel: function axisTickLabel() {
      var t = this.axisModel,
          e = this.opt,
          n = kc(this, t, e),
          i = Dc(this, t, e);Mc(t, i, n);
    }, axisName: function axisName() {
      var t = this.opt,
          e = this.axisModel,
          n = k(t.axisName, e.get("name"));if (n) {
        var i,
            r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            u = this.axisModel.axis.getExtent(),
            h = u[0] > u[1] ? -1 : 1,
            c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, Ic(r) ? t.labelOffset + a * l : 0],
            d = e.get("nameRotate");null != d && (d = d * Zx / 180);var f;Ic(r) ? i = Qx(t.rotation, null != d ? d : t.rotation, a) : (i = bc(t, r, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));var p = s.getFont(),
            g = e.get("nameTruncate", !0) || {},
            v = g.ellipsis,
            m = k(t.nameTruncateMaxWidth, g.maxWidth, f),
            y = null != v && null != m ? qv(n, m, p, v, { minChar: 2, placeholder: g.placeholder }) : n,
            _ = e.get("tooltip", !0),
            x = e.mainType,
            w = { componentType: x, name: n, $vars: ["name"] };w[x + "Index"] = e.componentIndex;var b = new iv({ anid: "name", __fullText: n, __truncatedText: y, position: c, rotation: i.rotation, silent: Sc(e), z2: 1, tooltip: _ && _.show ? o({ content: n, formatter: function formatter() {
              return n;
            }, formatterParams: w }, _) : null });xa(b.style, s, { text: y, textFont: p, textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"), textAlign: i.textAlign, textVerticalAlign: i.textVerticalAlign }), e.get("triggerEvent") && (b.eventData = wc(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();
      }
    } },
      Qx = $x.innerTextLayout = function (t, e, n) {
    var i,
        r,
        a = to(e - t);return eo(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : eo(a - Zx) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && Zx > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), { rotation: a, textAlign: i, textVerticalAlign: r };
  },
      Jx = f,
      tw = _,
      ew = Jl({ type: "axis", _axisPointer: null, axisPointerClass: null, render: function render(t, e, n, i) {
      this.axisPointerClass && zc(t), ew.superApply(this, "render", arguments), Vc(this, t, e, n, i, !0);
    }, updateAxisPointer: function updateAxisPointer(t, e, n, i) {
      Vc(this, t, e, n, i, !1);
    }, remove: function remove(t, e) {
      var n = this._axisPointer;n && n.remove(e), ew.superApply(this, "remove", arguments);
    }, dispose: function dispose(t, e) {
      Wc(this, e), ew.superApply(this, "dispose", arguments);
    } }),
      nw = [];ew.registerAxisPointerClass = function (t, e) {
    nw[t] = e;
  }, ew.getAxisPointerClass = function (t) {
    return t && nw[t];
  };var iw = ["axisLine", "axisTickLabel", "axisName"],
      rw = ["splitArea", "splitLine"],
      aw = ew.extend({ type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function render(t, e, n, i) {
      this.group.removeAll();var r = this._axisGroup;if (this._axisGroup = new Yf(), this.group.add(this._axisGroup), t.get("show")) {
        var a = t.getCoordSysModel(),
            o = Gc(a, t),
            s = new $x(t, o);f(iw, s.add, s), this._axisGroup.add(s.getGroup()), f(rw, function (e) {
          t.get(e + ".show") && this["_" + e](t, a);
        }, this), Ba(r, this._axisGroup, t), aw.superCall(this, "render", t, e, n, i);
      }
    }, remove: function remove() {
      this._splitAreaColors = null;
    }, _splitLine: function _splitLine(t, e) {
      var n = t.axis;if (!n.scale.isBlank()) {
        var i = t.getModel("splitLine"),
            r = i.getModel("lineStyle"),
            a = r.get("color");a = x(a) ? a : [a];for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n.getTicksCoords({ tickModel: i }), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {
          var g = n.toGlobalCoord(h[p].coord);l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);var v = u++ % a.length,
              m = h[p].tickValue;this._axisGroup.add(new pv(ta({ anid: null != m ? "line_" + h[p].tickValue : null, shape: { x1: c[0], y1: c[1], x2: d[0], y2: d[1] }, style: s({ stroke: a[v] }, f), silent: !0 })));
        }
      }
    }, _splitArea: function _splitArea(t, e) {
      var n = t.axis;if (!n.scale.isBlank()) {
        var i = t.getModel("splitArea"),
            r = i.getModel("areaStyle"),
            a = r.get("color"),
            o = e.coordinateSystem.getRect(),
            l = n.getTicksCoords({ tickModel: i, clamp: !0 });if (l.length) {
          var u = a.length,
              h = this._splitAreaColors,
              c = F(),
              d = 0;if (h) for (var f = 0; f < l.length; f++) {
            var p = h.get(l[f].tickValue);if (null != p) {
              d = (p + (u - 1) * f) % u;break;
            }
          }var g = n.toGlobalCoord(l[0].coord),
              v = r.getAreaStyle();a = x(a) ? a : [a];for (var f = 1; f < l.length; f++) {
            var m,
                y,
                _,
                w,
                b = n.toGlobalCoord(l[f].coord);n.isHorizontal() ? (m = g, y = o.y, _ = b - m, w = o.height, g = m + _) : (m = o.x, y = g, _ = o.width, w = b - y, g = y + w);var S = l[f - 1].tickValue;null != S && c.set(S, d), this._axisGroup.add(new fv({ anid: null != S ? "area_" + S : null, shape: { x: m, y: y, width: _, height: w }, style: s({ fill: a[d] }, v), silent: !0 })), d = (d + 1) % u;
          }this._splitAreaColors = c;
        }
      }
    } });aw.extend({ type: "xAxis" }), aw.extend({ type: "yAxis" }), Jl({ type: "grid", render: function render(t) {
      this.group.removeAll(), t.get("show") && this.group.add(new fv({ shape: t.coordinateSystem.getRect(), style: s({ fill: t.get("backgroundColor") }, t.getItemStyle()), silent: !0, z2: -1 }));
    } }), Wl(function (t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  }), Zl(Ex("line", "circle", "line")), Ul(Bx("line")), Gl(Wy.PROCESSOR.STATISTIC, Fx("line"));var ow = function ow(t, e) {
    var n,
        i = [],
        r = t.seriesIndex;if (null == r || !(n = e.getSeriesByIndex(r))) return { point: [] };var a = n.getData(),
        o = Xi(a, t);if (null == o || 0 > o || x(o)) return { point: [] };var s = a.getItemGraphicEl(o),
        l = n.coordinateSystem;if (n.getTooltipPosition) i = n.getTooltipPosition(o) || [];else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {
      return a.mapDimension(t);
    }), o, !0)) || [];else if (s) {
      var u = s.getBoundingRect().clone();u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2];
    }return { point: i, el: s };
  },
      sw = f,
      lw = _,
      uw = ji(),
      hw = function hw(t, e, n) {
    var i = t.currTrigger,
        r = [t.x, t.y],
        a = t,
        o = t.dispatchAction || y(n.dispatchAction, n),
        s = e.getComponent("axisPointer").coordSysAxesInfo;if (s) {
      Jc(r) && (r = ow({ seriesIndex: a.seriesIndex, dataIndex: a.dataIndex }, e).point);var l = Jc(r),
          u = a.axesInfo,
          h = s.axesInfo,
          c = "leave" === i || Jc(r),
          d = {},
          f = {},
          p = { list: [], map: {} },
          g = { showPointer: lw(Yc, f), showTooltip: lw(qc, p) };sw(s.coordSysMap, function (t, e) {
        var n = l || t.containPoint(r);sw(s.coordSysAxesInfo[e], function (t) {
          var e = t.axis,
              i = Kc(u, t);if (!c && n && (!u || i)) {
            var a = i && i.value;null != a || l || (a = e.pointToData(r)), null != a && Xc(t, a, g, !1, d);
          }
        });
      });var v = {};return sw(h, function (t, e) {
        var n = t.linkGroup;n && !f[e] && sw(n.axesInfo, function (e, i) {
          var r = f[i];if (e !== t && r) {
            var a = r.value;n.mapper && (a = t.axis.scale.parse(n.mapper(a, Qc(e), Qc(t)))), v[t.key] = a;
          }
        });
      }), sw(v, function (t, e) {
        Xc(h[e], t, g, !0, d);
      }), Uc(f, h, d), Zc(p, r, t, o), $c(h, o, n), d;
    }
  },
      cw = (Ql({ type: "axisPointer", coordSysAxesInfo: null, defaultOption: { show: "auto", triggerOn: null, zlevel: 0, z: 50, type: "line", snap: !1, triggerTooltip: !0, value: null, status: null, link: [], animation: null, animationDurationUpdate: 200, lineStyle: { color: "#aaa", width: 1, type: "solid" }, shadowStyle: { color: "rgba(150,150,150,0.3)" }, label: { show: !0, formatter: null, precision: "auto", margin: 3, color: "#fff", padding: [5, 7, 5, 7], backgroundColor: "auto", borderColor: null, borderWidth: 0, shadowBlur: 3, shadowColor: "#aaa" }, handle: { show: !1, icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z", size: 45, margin: 50, color: "#333", shadowBlur: 3, shadowColor: "#aaa", shadowOffsetX: 0, shadowOffsetY: 2, throttle: 40 } } }), ji()),
      dw = f,
      fw = Jl({ type: "axisPointer", render: function render(t, e, n) {
      var i = e.getComponent("tooltip"),
          r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";td("axisPointer", n, function (t, e, n) {
        "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({ type: "updateAxisPointer", currTrigger: t, x: e && e.offsetX, y: e && e.offsetY });
      });
    }, remove: function remove(t, e) {
      od(e.getZr(), "axisPointer"), fw.superApply(this._model, "remove", arguments);
    }, dispose: function dispose(t, e) {
      od("axisPointer", e), fw.superApply(this._model, "dispose", arguments);
    } }),
      pw = ji(),
      gw = i,
      vw = y;sd.prototype = { _group: null, _lastGraphicKey: null, _handle: null, _dragging: !1, _lastValue: null, _lastStatus: null, _payloadInfo: null, animationThreshold: 15, render: function render(t, e, n, i) {
      var r = e.get("value"),
          a = e.get("status");if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {
        this._lastValue = r, this._lastStatus = a;var o = this._group,
            s = this._handle;if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());o && o.show(), s && s.show();var l = {};this.makeElOption(l, r, t, e, n);var u = l.graphicKey;u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;var h = this._moveAnimation = this.determineAnimation(t, e);if (o) {
          var c = _(ld, e, h);this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e);
        } else o = this._group = new Yf(), this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);dd(o, e, !0), this._renderHandle(r);
      }
    }, remove: function remove(t) {
      this.clear(t);
    }, dispose: function dispose(t) {
      this.clear(t);
    }, determineAnimation: function determineAnimation(t, e) {
      var n = e.get("animation"),
          i = t.axis,
          r = "category" === i.type,
          a = e.get("snap");if (!a && !r) return !1;if ("auto" === n || null == n) {
        var o = this.animationThreshold;if (r && i.getBandWidth() > o) return !0;if (a) {
          var s = Rc(t).seriesDataCount,
              l = i.getExtent();return Math.abs(l[0] - l[1]) / s > o;
        }return !1;
      }return n === !0;
    }, makeElOption: function makeElOption() {}, createPointerEl: function createPointerEl(t, e) {
      var n = e.pointer;if (n) {
        var i = pw(t).pointerEl = new Av[n.type](gw(e.pointer));t.add(i);
      }
    }, createLabelEl: function createLabelEl(t, e, n, i) {
      if (e.label) {
        var r = pw(t).labelEl = new fv(gw(e.label));t.add(r), hd(r, i);
      }
    }, updatePointerEl: function updatePointerEl(t, e, n) {
      var i = pw(t).pointerEl;i && (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }));
    }, updateLabelEl: function updateLabelEl(t, e, n, i) {
      var r = pw(t).labelEl;r && (r.setStyle(e.label.style), n(r, { shape: e.label.shape, position: e.label.position }), hd(r, i));
    }, _renderHandle: function _renderHandle(t) {
      if (!this._dragging && this.updateHandleTransform) {
        var e = this._axisPointerModel,
            n = this._api.getZr(),
            i = this._handle,
            r = e.getModel("handle"),
            a = e.get("status");if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void (this._handle = null);var o;this._handle || (o = !0, i = this._handle = Fa(r.get("icon"), { cursor: "move", draggable: !0, onmousemove: function onmousemove(t) {
            uf(t.event);
          }, onmousedown: vw(this._onHandleDragMove, this, 0, 0), drift: vw(this._onHandleDragMove, this), ondragend: vw(this._onHandleDragEnd, this) }), n.add(i)), dd(i, e, !1);var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];i.setStyle(r.getItemStyle(null, s));var l = r.get("size");x(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), Hs(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o);
      }
    }, _moveHandleToValue: function _moveHandleToValue(t, e) {
      ld(this._axisPointerModel, !e && this._moveAnimation, this._handle, cd(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, _onHandleDragMove: function _onHandleDragMove(t, e) {
      var n = this._handle;if (n) {
        this._dragging = !0;var i = this.updateHandleTransform(cd(n), [t, e], this._axisModel, this._axisPointerModel);this._payloadInfo = i, n.stopAnimation(), n.attr(cd(i)), pw(n).lastProp = null, this._doDispatchAxisPointer();
      }
    }, _doDispatchAxisPointer: function _doDispatchAxisPointer() {
      var t = this._handle;if (t) {
        var e = this._payloadInfo,
            n = this._axisModel;this._api.dispatchAction({ type: "updateAxisPointer", x: e.cursorPoint[0], y: e.cursorPoint[1], tooltipOption: e.tooltipOption, axesInfo: [{ axisDim: n.axis.dim, axisIndex: n.componentIndex }] });
      }
    }, _onHandleDragEnd: function _onHandleDragEnd() {
      this._dragging = !1;var t = this._handle;if (t) {
        var e = this._axisPointerModel.get("value");this._moveHandleToValue(e), this._api.dispatchAction({ type: "hideTip" });
      }
    }, getHandleTransform: null, updateHandleTransform: null, clear: function clear(t) {
      this._lastValue = null, this._lastStatus = null;var e = t.getZr(),
          n = this._group,
          i = this._handle;e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null);
    }, doClear: function doClear() {}, buildLabel: function buildLabel(t, e, n) {
      return n = n || 0, { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
    } }, sd.prototype.constructor = sd, Ji(sd);var mw = sd.extend({ makeElOption: function makeElOption(t, e, n, i, r) {
      var a = n.axis,
          o = a.grid,
          s = i.get("type"),
          l = wd(o, a).getOtherAxis(a).getGlobalExtent(),
          u = a.toGlobalCoord(a.dataToCoord(e, !0));if (s && "none" !== s) {
        var h = fd(i),
            c = yw[s](a, u, l, h);c.style = h, t.graphicKey = c.type, t.pointer = c;
      }var d = Gc(o.model, n);yd(e, t, d, n, i, r);
    }, getHandleTransform: function getHandleTransform(t, e, n) {
      var i = Gc(e.axis.grid.model, e, { labelInside: !1 });return i.labelMargin = n.get("handle.margin"), { position: md(e.axis, t, i), rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };
    }, updateHandleTransform: function updateHandleTransform(t, e, n) {
      var i = n.axis,
          r = i.grid,
          a = i.getGlobalExtent(!0),
          o = wd(r, i).getOtherAxis(i).getGlobalExtent(),
          s = "x" === i.dim ? 0 : 1,
          l = t.position;l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);var u = (o[1] + o[0]) / 2,
          h = [u, u];h[s] = l[s];var c = [{ verticalAlign: "middle" }, { align: "center" }];return { position: l, rotation: t.rotation, cursorPoint: h, tooltipOption: c[s] };
    } }),
      yw = { line: function line(t, e, n, i) {
      var r = _d([e, n[0]], [e, n[1]], bd(t));return ta({ shape: r, style: i }), { type: "Line", shape: r };
    }, shadow: function shadow(t, e, n) {
      var i = Math.max(1, t.getBandWidth()),
          r = n[1] - n[0];return { type: "Rect", shape: xd([e - i / 2, n[0]], [i, r], bd(t)) };
    } };ew.registerAxisPointerClass("CartesianAxisPointer", mw), Wl(function (t) {
    if (t) {
      (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});var e = t.axisPointer.link;e && !x(e) && (t.axisPointer.link = [e]);
    }
  }), Gl(Wy.PROCESSOR.STATISTIC, function (t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = Ac(t, e);
  }), jl({ type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer" }, hw), Ql({ type: "tooltip", dependencies: ["axisPointer"], defaultOption: { zlevel: 0, z: 60, show: !0, showContent: !0, trigger: "item", triggerOn: "mousemove|click", alwaysShowContent: !1, displayMode: "single", renderMode: "auto", confine: !1, showDelay: 0, hideDelay: 100, transitionDuration: .4, enterable: !1, backgroundColor: "rgba(50,50,50,0.7)", borderColor: "#333", borderRadius: 4, borderWidth: 0, padding: 5, extraCssText: "", axisPointer: { type: "line", axis: "auto", animation: "auto", animationDurationUpdate: 200, animationEasingUpdate: "exponentialOut", crossStyle: { color: "#999", width: 1, type: "dashed", textStyle: {} } }, textStyle: { color: "#fff", fontSize: 14 } } });var _w = f,
      xw = ho,
      ww = ["", "-webkit-", "-moz-", "-o-"],
      bw = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";Cd.prototype = { constructor: Cd, _enterable: !0, update: function update() {
      var t = this._container,
          e = t.currentStyle || document.defaultView.getComputedStyle(t),
          n = t.style;"absolute" !== n.position && "absolute" !== e.position && (n.position = "relative");
    }, show: function show(t) {
      clearTimeout(this._hideTimeout);var e = this.el;e.style.cssText = bw + Td(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0;
    }, setContent: function setContent(t) {
      this.el.innerHTML = null == t ? "" : t;
    }, setEnterable: function setEnterable(t) {
      this._enterable = t;
    }, getSize: function getSize() {
      var t = this.el;return [t.clientWidth, t.clientHeight];
    }, moveTo: function moveTo(t, e) {
      var n,
          i = this._zr;i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);var r = this.el.style;r.left = t + "px", r.top = e + "px", this._x = t, this._y = e;
    }, hide: function hide() {
      this.el.style.display = "none", this._show = !1;
    }, hideLater: function hideLater(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());
    }, isShow: function isShow() {
      return this._show;
    }, getOuterSize: function getOuterSize() {
      var t = this.el.clientWidth,
          e = this.el.clientHeight;if (document.defaultView && document.defaultView.getComputedStyle) {
        var n = document.defaultView.getComputedStyle(this.el);n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10));
      }return { width: t, height: e };
    } }, Id.prototype = { constructor: Id, _enterable: !0, update: function update() {}, show: function show() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0;
    }, setContent: function setContent(t, e, n) {
      this.el && this._zr.remove(this.el);for (var i = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {
        var l = r.indexOf(o),
            u = r.substr(s + a.length, l - s - a.length);i["marker" + u] = u.indexOf("sub") > -1 ? { textWidth: 4, textHeight: 4, textBorderRadius: 2, textBackgroundColor: e[u], textOffset: [3, 0] } : { textWidth: 10, textHeight: 10, textBorderRadius: 5, textBackgroundColor: e[u] }, r = r.substr(l + 1), s = r.indexOf("{marker");
      }this.el = new iv({ style: { rich: i, text: t, textLineHeight: 20, textBackgroundColor: n.get("backgroundColor"), textBorderRadius: n.get("borderRadius"), textFill: n.get("textStyle.color"), textPadding: n.get("padding") }, z: n.get("z") }), this._zr.add(this.el);var h = this;this.el.on("mouseover", function () {
        h._enterable && (clearTimeout(h._hideTimeout), h._show = !0), h._inContent = !0;
      }), this.el.on("mouseout", function () {
        h._enterable && h._show && h.hideLater(h._hideDelay), h._inContent = !1;
      });
    }, setEnterable: function setEnterable(t) {
      this._enterable = t;
    }, getSize: function getSize() {
      var t = this.el.getBoundingRect();return [t.width, t.height];
    }, moveTo: function moveTo(t, e) {
      this.el && this.el.attr("position", [t, e]);
    }, hide: function hide() {
      this.el.hide(), this._show = !1;
    }, hideLater: function hideLater(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());
    }, isShow: function isShow() {
      return this._show;
    }, getOuterSize: function getOuterSize() {
      return this.getSize();
    } };var Sw = y,
      Mw = f,
      Tw = qa,
      Cw = new fv({ shape: { x: -1, y: -1, width: 2, height: 2 } });Jl({ type: "tooltip", init: function init(t, e) {
      if (!Rd.node) {
        var n = t.getComponent("tooltip"),
            i = n.get("renderMode");this._renderMode = $i(i);var r;"html" === this._renderMode ? (r = new Cd(e.getDom(), e), this._newLine = "<br/>") : (r = new Id(e), this._newLine = "\n"), this._tooltipContent = r;
      }
    }, render: function render(t, e, n) {
      if (!Rd.node) {
        this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");var i = this._tooltipContent;i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();
      }
    }, _initGlobalListener: function _initGlobalListener() {
      var t = this._tooltipModel,
          e = t.get("triggerOn");td("itemTooltip", this._api, Sw(function (t, n, i) {
        "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i));
      }, this));
    }, _keepShow: function _keepShow() {
      var t = this._tooltipModel,
          e = this._ecModel,
          n = this._api;if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
        var i = this;clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
          i.manuallyShowTip(t, e, n, { x: i._lastX, y: i._lastY });
        });
      }
    }, manuallyShowTip: function manuallyShowTip(t, e, n, i) {
      if (i.from !== this.uid && !Rd.node) {
        var r = Dd(i, n);this._ticket = "";var a = i.dataByCoordSys;if (i.tooltip && null != i.x && null != i.y) {
          var o = Cw;o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({ offsetX: i.x, offsetY: i.y, target: o }, r);
        } else if (a) this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, event: {}, dataByCoordSys: i.dataByCoordSys, tooltipOption: i.tooltipOption }, r);else if (null != i.seriesIndex) {
          if (this._manuallyAxisShowTip(t, e, n, i)) return;var s = ow(i, e),
              l = s.point[0],
              u = s.point[1];null != l && null != u && this._tryShow({ offsetX: l, offsetY: u, position: i.position, target: s.el, event: {} }, r);
        } else null != i.x && null != i.y && (n.dispatchAction({ type: "updateAxisPointer", x: i.x, y: i.y }), this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, target: n.getZr().findHover(i.x, i.y).target, event: {} }, r));
      }
    }, manuallyHideTip: function manuallyHideTip(t, e, n, i) {
      var r = this._tooltipContent;!this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Dd(i, n));
    }, _manuallyAxisShowTip: function _manuallyAxisShowTip(t, e, n, i) {
      var r = i.seriesIndex,
          a = i.dataIndex,
          o = e.getComponent("axisPointer").coordSysAxesInfo;if (null != r && null != a && null != o) {
        var s = e.getSeriesByIndex(r);if (s) {
          var l = s.getData(),
              t = kd([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);if ("axis" === t.get("trigger")) return n.dispatchAction({ type: "updateAxisPointer", seriesIndex: r, dataIndex: a, position: i.position }), !0;
        }
      }
    }, _tryShow: function _tryShow(t, e) {
      var n = t.target,
          i = this._tooltipModel;if (i) {
        this._lastX = t.offsetX, this._lastY = t.offsetY;var r = t.dataByCoordSys;r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e));
      }
    }, _showOrMove: function _showOrMove(t, e) {
      var n = t.get("showDelay");e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e();
    }, _showAxisTooltip: function _showAxisTooltip(t, e) {
      var n = this._ecModel,
          i = this._tooltipModel,
          a = [e.offsetX, e.offsetY],
          o = [],
          s = [],
          l = kd([e.tooltipOption, i]),
          u = this._renderMode,
          h = this._newLine,
          c = {};Mw(t, function (t) {
        Mw(t.dataByAxis, function (t) {
          var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
              i = t.value,
              a = [];if (e && null != i) {
            var l = vd(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);f(t.seriesDataIndices, function (o) {
              var h = n.getSeriesByIndex(o.seriesIndex),
                  d = o.dataIndexInside,
                  f = h && h.getDataParams(d);if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = ih(e.axis, i), f.axisValueLabel = l, f) {
                s.push(f);var p,
                    g = h.formatTooltip(d, !0, null, u);if (S(g)) {
                  p = g.html;var v = g.markers;r(c, v);
                } else p = g;a.push(p);
              }
            });var d = l;o.push("html" !== u ? a.join(h) : (d ? co(d) + h : "") + a.join(h));
          }
        });
      }, this), o.reverse(), o = o.join(this._newLine + this._newLine);var d = e.position;this._showOrMove(l, function () {
        this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c);
      });
    }, _showSeriesItemTooltip: function _showSeriesItemTooltip(t, e, n) {
      var i = this._ecModel,
          r = e.seriesIndex,
          a = i.getSeriesByIndex(r),
          o = e.dataModel || a,
          s = e.dataIndex,
          l = e.dataType,
          u = o.getData(),
          h = kd([u.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
          c = h.get("trigger");if (null == c || "item" === c) {
        var d,
            f,
            p = o.getDataParams(s, l),
            g = o.formatTooltip(s, !1, l, this._renderMode);S(g) ? (d = g.html, f = g.markers) : (d = g, f = null);var v = "item_" + o.name + "_" + s;this._showOrMove(h, function () {
          this._showTooltipContent(h, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f);
        }), n({ type: "showTip", dataIndexInside: s, dataIndex: u.getRawIndex(s), seriesIndex: r, from: this.uid });
      }
    }, _showComponentItemTooltip: function _showComponentItemTooltip(t, e, n) {
      var i = e.tooltip;if ("string" == typeof i) {
        var r = i;i = { content: r, formatter: r };
      }var a = new Na(i, this._tooltipModel, this._ecModel),
          o = a.get("content"),
          s = Math.random();this._showOrMove(a, function () {
        this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);
      }), n({ type: "showTip", from: this.uid });
    }, _showTooltipContent: function _showTooltipContent(t, e, n, i, r, a, o, s, l) {
      if (this._ticket = "", t.get("showContent") && t.get("show")) {
        var u = this._tooltipContent,
            h = t.get("formatter");o = o || t.get("position");var c = e;if (h && "string" == typeof h) c = fo(h, n, !0);else if ("function" == typeof h) {
          var d = Sw(function (e, i) {
            e === this._ticket && (u.setContent(i, l, t), this._updatePosition(t, o, r, a, u, n, s));
          }, this);this._ticket = i, c = h(n, i, d);
        }u.setContent(c, l, t), u.show(t), this._updatePosition(t, o, r, a, u, n, s);
      }
    }, _updatePosition: function _updatePosition(t, e, n, i, r, a, o) {
      var s = this._api.getWidth(),
          l = this._api.getHeight();e = e || t.get("position");var u = r.getSize(),
          h = t.get("align"),
          c = t.get("verticalAlign"),
          d = o && o.getBoundingRect().clone();if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, { viewSize: [s, l], contentSize: u.slice() })), x(e)) n = Tw(e[0], s), i = Tw(e[1], l);else if (S(e)) {
        e.width = u[0], e.height = u[1];var f = xo(e, { width: s, height: l });n = f.x, i = f.y, h = null, c = null;
      } else if ("string" == typeof e && o) {
        var p = Od(e, d, u);n = p[0], i = p[1];
      } else {
        var p = Ad(n, i, r, s, l, h ? null : 20, c ? null : 20);n = p[0], i = p[1];
      }if (h && (n -= Ld(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Ld(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {
        var p = Pd(n, i, r, s, l);n = p[0], i = p[1];
      }r.moveTo(n, i);
    }, _updateContentNotChangedOnAxis: function _updateContentNotChangedOnAxis(t) {
      var e = this._lastDataByCoordSys,
          n = !!e && e.length === t.length;return n && Mw(e, function (e, i) {
        var r = e.dataByAxis || {},
            a = t[i] || {},
            o = a.dataByAxis || [];n &= r.length === o.length, n && Mw(r, function (t, e) {
          var i = o[e] || {},
              r = t.seriesDataIndices || [],
              a = i.seriesDataIndices || [];n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length, n && Mw(r, function (t, e) {
            var i = a[e];n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex;
          });
        });
      }), this._lastDataByCoordSys = t, !!n;
    }, _hide: function _hide(t) {
      this._lastDataByCoordSys = null, t({ type: "hideTip", from: this.uid });
    }, dispose: function dispose(t, e) {
      Rd.node || (this._tooltipContent.hide(), od("itemTooltip", e));
    } }), jl({ type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip" }, function () {}), jl({ type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip" }, function () {}), t.version = Oy, t.dependencies = Ly, t.PRIORITY = Wy, t.init = Bl, t.connect = zl, t.disConnect = Rl, t.disconnect = l_, t.dispose = Fl, t.getInstanceByDom = Nl, t.getInstanceById = Hl, t.registerTheme = Vl, t.registerPreprocessor = Wl, t.registerProcessor = Gl, t.registerPostUpdate = Xl, t.registerAction = jl, t.registerCoordinateSystem = Yl, t.getCoordinateSystemDimensions = ql, t.registerLayout = Ul, t.registerVisual = Zl, t.registerLoading = Kl, t.extendComponentModel = Ql, t.extendComponentView = Jl, t.extendSeriesModel = tu, t.extendChartView = eu, t.setCanvasCreator = nu, t.registerMap = iu, t.getMap = ru, t.dataTool = u_, t.zrender = Hp, t.number = Vv, t.format = Zv, t.throttle = Ns, t.helper = sx, t.matrix = pf, t.vector = rf, t.color = Lf, t.parseGeoJSON = ux, t.parseGeoJson = fx, t.util = px, t.graphic = gx, t.List = __, t.Model = Na, t.Axis = dx, t.env = Rd;
});