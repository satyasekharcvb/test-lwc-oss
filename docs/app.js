!(function (e) {
    function t(t) {
        for (
            var i, r, n = t[0], h = t[1], l = t[2], d = 0, p = [];
            d < n.length;
            d++
        )
            (r = n[d]),
                Object.prototype.hasOwnProperty.call(o, r) &&
                    o[r] &&
                    p.push(o[r][0]),
                (o[r] = 0);
        for (i in h)
            Object.prototype.hasOwnProperty.call(h, i) && (e[i] = h[i]);
        for (c && c(t); p.length; ) p.shift()();
        return a.push.apply(a, l || []), s();
    }
    function s() {
        for (var e, t = 0; t < a.length; t++) {
            for (var s = a[t], i = !0, n = 1; n < s.length; n++) {
                var h = s[n];
                0 !== o[h] && (i = !1);
            }
            i && (a.splice(t--, 1), (e = r((r.s = s[0]))));
        }
        return e;
    }
    var i = {},
        o = { 1: 0 },
        a = [];
    function r(t) {
        if (i[t]) return i[t].exports;
        var s = (i[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
    }
    (r.m = e),
        (r.c = i),
        (r.d = function (e, t, s) {
            r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (r.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (r.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var i in e)
                    r.d(
                        s,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return s;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return r.d(t, 'a', t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = './');
    var n = (window.webpackJsonp = window.webpackJsonp || []),
        h = n.push.bind(n);
    (n.push = t), (n = n.slice());
    for (var l = 0; l < n.length; l++) t(n[l]);
    var c = h;
    a.push([1, 0]), s();
})([
    ,
    function (e, t, s) {
        e.exports = s(3);
    },
    function (e, t) {
        var s;
        s = (function () {
            return this;
        })();
        try {
            s = s || new Function('return this')();
        } catch (e) {
            'object' == typeof window && (s = window);
        }
        e.exports = s;
    },
    function (e, t, s) {
        'use strict';
        s.r(t);
        var i = s(0);
        var o = [
            function (e, t, s) {
                return [
                    '.container',
                    t,
                    '{width:70vw;margin:1rem auto}header',
                    t,
                    '{line-height:30px}'
                ].join('');
            }
        ];
        var a = [
            function (e, t, s) {
                return [
                    '.header',
                    t,
                    '{background:#a0f;color:#fff;font-size:1rem}.game-container',
                    t,
                    '{width:100%;height:60vh;background:#c1ff46;text-align:center}.game-container',
                    t,
                    ' div',
                    t,
                    '{width:20px;height:20px;background:#e6fabe;display:inline-block}.snake',
                    t,
                    '{background:green!important}.food',
                    t,
                    '{background:red!important;border-radius:50%}'
                ].join('');
            }
        ];
        function r(e, t, s, i) {
            const { t: o, d: a, h: r, k: n, i: h } = e;
            return [
                r('div', { classMap: { header: !0 }, key: 0 }, [
                    o('Score: '),
                    a(t.score)
                ]),
                r(
                    'div',
                    { classMap: { 'game-container': !0 }, key: 2 },
                    h(t.gameBlocks, function (e) {
                        return r(
                            'div',
                            { className: e.class, key: n(1, e.id) },
                            [o(' ')]
                        );
                    })
                )
            ];
        }
        var n = Object(i.registerTemplate)(r);
        (r.stylesheets = []),
            a && r.stylesheets.push.apply(r.stylesheets, a),
            (r.stylesheetTokens = {
                hostAttribute: 'my-game-_game-host',
                shadowAttribute: 'my-game-_game'
            });
        class h extends i.LightningElement {
            constructor(...e) {
                super(...e),
                    (this.blockSize = 20),
                    (this.gameBlocks = []),
                    (this.score = 0),
                    (this.renderComplete = !1),
                    (this.xSpeed = 1),
                    (this.ySpeed = 0),
                    (this.xHead = 0),
                    (this.yHead = 0),
                    (this.xMax = void 0),
                    (this.yMax = void 0),
                    (this.tail = []);
            }
            startGame() {
                setInterval(() => {
                    this.move();
                }, 300);
            }
            move() {
                const e = `${this.xHead}:${this.yHead}`;
                (this.xHead += this.xSpeed),
                    (this.yHead += this.ySpeed),
                    this.xHead >= this.xMax && (this.xHead = 0),
                    this.xHead < 0 && (this.xHead = this.xMax - 1),
                    this.yHead >= this.yMax && (this.yHead = 0),
                    this.yHead < 0 && (this.yHead = this.yMax - 1);
                let t = this.gameBlocks.findIndex(
                    (e) => e.id === `${this.xHead}:${this.yHead}`
                );
                if (
                    ((this.gameBlocks[t].snake = !0),
                    (this.gameBlocks[t].class = 'snake'),
                    this.gameBlocks[t].food)
                )
                    this.score++,
                        this.tail.unshift(e),
                        (this.gameBlocks[t].food = !1),
                        this.generateFood();
                else {
                    this.tail.unshift(e);
                    const t = this.tail.pop(),
                        s = this.gameBlocks.findIndex((e) => e.id === t);
                    (this.gameBlocks[s].snake = !1),
                        (this.gameBlocks[s].class = '');
                }
                this.tail.includes(`${this.xHead}:${this.yHead}`) &&
                    (alert('game over'), (this.score = 0), (this.tail = []));
            }
            addKeyboardControls() {
                window.addEventListener('keydown', (e) => {
                    switch ((e.preventDefault(), e.key)) {
                        case 'ArrowUp':
                            (this.xSpeed = 0), (this.ySpeed = -1);
                            break;
                        case 'ArrowDown':
                            (this.xSpeed = 0), (this.ySpeed = 1);
                            break;
                        case 'ArrowLeft':
                            (this.xSpeed = -1), (this.ySpeed = 0);
                            break;
                        case 'ArrowRight':
                            (this.xSpeed = 1), (this.ySpeed = 0);
                    }
                });
            }
            generateFood() {
                const e = Math.floor(Math.random() * (this.xMax - 1)),
                    t = Math.floor(Math.random() * (this.yMax - 1));
                console.log('food method called');
                const s = this.gameBlocks.findIndex(
                    (s) => s.id === `${e}:${t}`
                );
                (this.gameBlocks[s].food = !0),
                    (this.gameBlocks[s].class = 'food');
            }
            renderedCallback() {
                if (!this.renderComplete) {
                    let e = this.template.querySelector('.game-container')
                            .clientWidth,
                        t = this.template.querySelector('.game-container')
                            .clientHeight;
                    (this.xMax = Math.floor(e / this.blockSize)),
                        (this.yMax = Math.floor(t / this.blockSize));
                    let s = [];
                    for (let e = 0; e < this.yMax; e++)
                        for (let t = 0; t < this.xMax; t++) {
                            let i;
                            (i =
                                0 === t && 0 === e
                                    ? {
                                          id: `${t}:${e}`,
                                          snake: !0,
                                          food: !1,
                                          class: 'snake'
                                      }
                                    : {
                                          id: `${t}:${e}`,
                                          snake: !1,
                                          food: !1,
                                          class: ''
                                      }),
                                s.push(i);
                        }
                    (this.gameBlocks = s),
                        (this.renderComplete = !0),
                        this.addKeyboardControls(),
                        this.generateFood(),
                        this.startGame();
                }
            }
        }
        Object(i.registerDecorators)(h, {
            track: { gameBlocks: 1 },
            fields: [
                'blockSize',
                'score',
                'renderComplete',
                'xSpeed',
                'ySpeed',
                'xHead',
                'yHead',
                'xMax',
                'yMax',
                'tail'
            ]
        });
        var l = Object(i.registerComponent)(h, { tmpl: n });
        function c(e, t, s, i) {
            const { c: o } = e;
            return [o('my-game', l, { key: 0 }, [])];
        }
        var d = Object(i.registerTemplate)(c);
        (c.stylesheets = []),
            o && c.stylesheets.push.apply(c.stylesheets, o),
            (c.stylesheetTokens = {
                hostAttribute: 'my-app-_app-host',
                shadowAttribute: 'my-app-_app'
            });
        class p extends i.LightningElement {}
        var u = Object(i.registerComponent)(p, { tmpl: d });
        const f = Object(i.createElement)('my-app', { is: u });
        document.querySelector('#main').appendChild(f);
    }
]);
