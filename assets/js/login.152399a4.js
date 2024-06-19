"use strict";
(self["webpackChunkholori"] = self["webpackChunkholori"] || []).push([
    [535], {
        44158: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return l
                }
            });
            var s = function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "summary has-text-white p-5 is-flex is-flex-direction-column is-justify-content-center is-flex-1"
                    }, [t("o-button", {
                        staticClass: "compare-button is-block ml-auto",
                        attrs: {
                            variant: "primary",
                            size: "large"
                        },
                        on: {
                            click: function(t) {
                                return e.navigate("Compare")
                            }
                        }
                    }, [e._v(" Go to calculator ")]), t("o-carousel", {
                        attrs: {
                            "scene-class": "carousel-height",
                            "items-class": "carousel-height",
                            autoplay: "",
                            "pause-hover": "",
                            repeat: "",
                            interval: 5e3
                        }
                    }, [t("o-carousel-item", {
                        staticClass: "is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
                    }, [t("span", {
                        staticClass: "is-size-3 mb-3 has-text-centered has-text-weight-bold"
                    }, [e._v(" Terraform diagram in Pull Request ")]), t("o-icon", {
                        staticClass: "pull-request",
                        attrs: {
                            icon: "source-pull",
                            size: "large"
                        }
                    }), t("div", {
                        staticClass: "carousel-image",
                        staticStyle: {
                            "background-image": "url(/login-carousel/slide1.png)"
                        },
                        attrs: {
                            title: "Terraform diagram in Pull Request"
                        }
                    })], 1), t("o-carousel-item", {
                        staticClass: "is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
                    }, [t("span", {
                        staticClass: "is-size-3 mb-5 has-text-centered has-text-weight-bold"
                    }, [e._v(" Import from your existing infrastructure ")]), t("div", {
                        staticClass: "carousel-image",
                        staticStyle: {
                            "background-image": "url(/login-carousel/slide2.png)"
                        },
                        attrs: {
                            title: "Import from your existing infrastructure"
                        }
                    })]), t("o-carousel-item", {
                        staticClass: "is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
                    }, [t("span", {
                        staticClass: "is-size-3 mb-5 has-text-centered has-text-weight-bold"
                    }, [e._v(" Estimate the cost of your infrastructure ")]), t("div", {
                        staticClass: "carousel-image",
                        staticStyle: {
                            "background-image": "url(/login-carousel/slide3.png)"
                        },
                        attrs: {
                            title: "Estimate the cost of your infrastructure"
                        }
                    })])], 1)], 1)
                },
                r = [],
                a = {
                    name: "HomeSummary"
                },
                o = a,
                n = i(1001),
                c = (0, n.Z)(o, s, r, !1, null, "47e18840", null),
                l = c.exports
        },
        64436: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return l
                }
            });
            i(70560);
            var s = function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "is-flex is-justify-content-space-between"
                    }, [t("router-link", {
                        attrs: {
                            to: {
                                name: "Login"
                            },
                            custom: ""
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function({
                                navigate: i
                            }) {
                                return [t("picture", {
                                    staticClass: "is-clickable",
                                    attrs: {
                                        role: "link"
                                    },
                                    on: {
                                        click: i,
                                        keypress: function(t) {
                                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : i.apply(null, arguments)
                                        }
                                    }
                                }, [t("img", {
                                    attrs: {
                                        src: `${e.publicPath}holori/navbar.svg`,
                                        alt: "Holori Logo",
                                        width: "250"
                                    }
                                })])]
                            }
                        }])
                    }), t("button", {
                        staticClass: "button button-calc is-display-none is-primary is-large mr-2",
                        on: {
                            click: function(t) {
                                return e.$router.push("/compare")
                            }
                        }
                    }, [e._v(" Calculator ")])], 1)
                },
                r = [],
                a = {
                    name: "LoginHeader",
                    data() {
                        return {
                            publicPath: "/"
                        }
                    }
                },
                o = a,
                n = i(1001),
                c = (0, n.Z)(o, s, r, !1, null, "66d6a952", null),
                l = c.exports
        },
        15212: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return g
                }
            });
            var s = function() {
                    var e = this,
                        t = e._self._c;
                    return t("section", [e._m(0), t("vue-recaptcha", {
                        ref: "recaptcha",
                        staticClass: "text-align-center mt-4",
                        attrs: {
                            sitekey: "6LflZMYgAAAAAE-U42ci45uoY0uV-nB7ngYObM1R",
                            "load-recaptcha-script": !0
                        },
                        on: {
                            render: e.onRender,
                            verify: e.onVerify,
                            expired: e.onExpired
                        }
                    }, [t("o-button", {
                        staticClass: "is-medium",
                        attrs: {
                            disabled: e.disabled,
                            "native-type": "submit",
                            variant: "primary"
                        }
                    }, [e._v(" " + e._s(e.text) + " ")])], 1)], 1)
                },
                r = [function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "recaptcha-branding has-text-justified my-2"
                    }, [e._v(" This site is protected by reCAPTCHA and the Google "), t("a", {
                        attrs: {
                            href: "https://policies.google.com/privacy"
                        }
                    }, [e._v("Privacy Policy")]), e._v(" and "), t("a", {
                        attrs: {
                            href: "https://policies.google.com/terms"
                        }
                    }, [e._v("Terms of Service")]), e._v(" apply. ")])
                }];
            i(70560);

            function a() {
                return a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }, a.apply(this, arguments)
            }
            var o = function() {
                    var e = !1,
                        t = [],
                        i = function(i) {
                            if (!e) {
                                e = !0;
                                for (var s = 0, r = t.length; s < r; s++) t[s](i)
                            }
                        },
                        s = function(i) {
                            e ? i() : t.push(i)
                        },
                        r = {
                            resolved: function() {
                                return e
                            },
                            resolve: i,
                            promise: {
                                then: s
                            }
                        };
                    return r
                },
                n = Object.prototype.hasOwnProperty;

            function c() {
                var e = o();
                return {
                    notify: function() {
                        e.resolve()
                    },
                    wait: function() {
                        return e.promise
                    },
                    render: function(e, t, i) {
                        this.wait().then((function() {
                            i(window.grecaptcha.render(e, t))
                        }))
                    },
                    reset: function(e) {
                        "undefined" !== typeof e && (this.assertLoaded(), this.wait().then((function() {
                            return window.grecaptcha.reset(e)
                        })))
                    },
                    execute: function(e) {
                        "undefined" !== typeof e && (this.assertLoaded(), this.wait().then((function() {
                            return window.grecaptcha.execute(e)
                        })))
                    },
                    checkRecaptchaLoad: function() {
                        n.call(window, "grecaptcha") && n.call(window.grecaptcha, "render") && this.notify()
                    },
                    assertLoaded: function() {
                        if (!e.resolved()) throw new Error("ReCAPTCHA has not been loaded")
                    }
                }
            }
            var l = c();
            "undefined" !== typeof window && (window.vueRecaptchaApiLoaded = l.notify);
            var d = {
                    name: "VueRecaptcha",
                    props: {
                        sitekey: {
                            type: String,
                            required: !0
                        },
                        theme: {
                            type: String
                        },
                        badge: {
                            type: String
                        },
                        type: {
                            type: String
                        },
                        size: {
                            type: String
                        },
                        tabindex: {
                            type: String
                        },
                        loadRecaptchaScript: {
                            type: Boolean,
                            default: !1
                        },
                        recaptchaScriptId: {
                            type: String,
                            default: "__RECAPTCHA_SCRIPT"
                        },
                        recaptchaHost: {
                            type: String,
                            default: "www.google.com"
                        },
                        language: {
                            type: String,
                            default: ""
                        }
                    },
                    beforeMount: function() {
                        if (this.loadRecaptchaScript && !document.getElementById(this.recaptchaScriptId)) {
                            var e = document.createElement("script");
                            e.id = this.recaptchaScriptId, e.src = "https://" + this.recaptchaHost + "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" + this.language, e.async = !0, e.defer = !0, document.head.appendChild(e)
                        }
                    },
                    mounted: function() {
                        var e = this;
                        l.checkRecaptchaLoad();
                        var t = a({}, this.$props, {
                                callback: this.emitVerify,
                                "expired-callback": this.emitExpired,
                                "error-callback": this.emitError
                            }),
                            i = this.$slots["default"] ? this.$el.children[0] : this.$el;
                        l.render(i, t, (function(t) {
                            e.$widgetId = t, e.$emit("render", t)
                        }))
                    },
                    methods: {
                        reset: function() {
                            l.reset(this.$widgetId)
                        },
                        execute: function() {
                            l.execute(this.$widgetId)
                        },
                        emitVerify: function(e) {
                            this.$emit("verify", e)
                        },
                        emitExpired: function() {
                            this.$emit("expired")
                        },
                        emitError: function() {
                            this.$emit("error")
                        }
                    },
                    render: function(e) {
                        return e("div", {}, this.$slots["default"])
                    }
                },
                u = d,
                p = {
                    name: "RecaptchaButton",
                    components: {
                        "vue-recaptcha": u
                    },
                    props: {
                        value: {
                            type: String,
                            required: !0
                        },
                        text: {
                            type: String,
                            required: !0
                        },
                        disabled: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    methods: {
                        onVerify: function(e) {
                            this.$emit("input", e), this.$emit("verified")
                        },
                        onExpired: function() {
                            this.$emit("input", "")
                        },
                        onRender() {
                            this.$emit("ready")
                        },
                        reset() {
                            this.$refs.recaptcha.reset()
                        }
                    }
                },
                h = p,
                m = i(1001),
                f = (0, m.Z)(h, s, r, !1, null, "255febc2", null),
                g = f.exports
        },
        53068: function(e, t, i) {
            i.r(t), i.d(t, {
                default: function() {
                    return y
                }
            });
            var s = function() {
                    var e = this,
                        t = e._self._c;
                    return t("section", {
                        staticClass: "is-flex is-min-height-100vh"
                    }, [t("div", {
                        staticClass: "p-5 is-flex is-flex-direction-column is-flex-1 has-background-white"
                    }, [t("LoginHeader"), t("div", {
                        staticClass: "m-auto form"
                    }, [t("p", {
                        staticClass: "is-white-space-no-wrap has-text-centered is-size-2 has-text-weight-semibold"
                    }, [e._v(" " + e._s(e.formTitle) + " ")]), "Login" === e.$route.name ? t("form", {
                        ref: "form",
                        staticClass: "mt-5 is-flex is-flex-direction-column",
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.login.apply(null, arguments)
                            }
                        }
                    }, [e.loginError ? t("o-notification", {
                        staticClass: "px-4 py-1",
                        attrs: {
                            variant: "danger",
                            role: "alert",
                            icon: "alert-circle-outline"
                        }
                    }, [t("div", {
                        staticClass: "my-3"
                    }, [e._v(" Unable to login! "), t("br"), e._v(" " + e._s(e.loginError) + " ")])]) : e._e(), t("o-field", [t("o-input", {
                        attrs: {
                            type: "email",
                            placeholder: "Enter your email",
                            "validation-message": e.emailMessage,
                            minlength: "5",
                            maxlength: "96",
                            required: "",
                            autofocus: ""
                        },
                        model: {
                            value: e.email,
                            callback: function(t) {
                                e.email = t
                            },
                            expression: "email"
                        }
                    })], 1), t("o-field", [t("o-input", {
                        attrs: {
                            type: "password",
                            placeholder: "Enter your password",
                            "validation-message": e.passwordMessage,
                            minlength: "8",
                            maxlength: "64",
                            required: "",
                            "password-reveal": !e.passwordEmpty
                        },
                        model: {
                            value: e.password,
                            callback: function(t) {
                                e.password = t
                            },
                            expression: "password"
                        }
                    })], 1), t("router-link", {
                        staticClass: "is-size-7 has-text-right",
                        attrs: {
                            to: "/resetPassword",
                            custom: ""
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function({
                                navigate: i
                            }) {
                                return [t("a", {
                                    attrs: {
                                        role: "link"
                                    },
                                    on: {
                                        click: i,
                                        keypress: function(t) {
                                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : i.apply(null, arguments)
                                        }
                                    }
                                }, [e._v(" Forgot password? ")])]
                            }
                        }], null, !1, 1252698708)
                    }), t("RecaptchaButton", {
                        ref: "recaptchaButton",
                        attrs: {
                            text: "Continue",
                            disabled: e.recaptchaDisabled
                        },
                        on: {
                            ready: function(t) {
                                e.recaptchaReady = !0
                            },
                            verified: e.login
                        },
                        model: {
                            value: e.captchaResponse,
                            callback: function(t) {
                                e.captchaResponse = t
                            },
                            expression: "captchaResponse"
                        }
                    })], 1) : [e.isRegistered ? t("div", {
                        staticClass: "container mt-6 is-size-5 is-max-desktop"
                    }, [t("h2", {
                        staticClass: "is-size-3 mb-4 has-text-centered"
                    }, [e._v(" You are now registered ! ")]), t("p", [e._v(" Please check your emails and to find the one we just sent you to activate your account. ")])]) : t("form", {
                        ref: "form",
                        staticClass: "mt-5 mx-auto is-flex is-flex-direction-column has-text-left",
                        on: {
                            submit: function(t) {
                                t.preventDefault(), e.isLoading = !0
                            }
                        }
                    }, [e.registerError ? t("o-notification", {
                        staticClass: "px-4 py-1",
                        attrs: {
                            variant: "danger",
                            role: "alert",
                            icon: "alert-circle-outline"
                        }
                    }, [t("div", {
                        staticClass: "my-3"
                    }, [e._v(" Registration failed ! "), t("br"), e._v(" " + e._s(e.registerError) + " ")])]) : e._e(), t("o-field", [t("o-input", {
                        attrs: {
                            title: "Email",
                            autocomplete: "email",
                            type: "email",
                            placeholder: "Enter your email",
                            "validation-message": e.emailMessage,
                            minlength: "5",
                            maxlength: "96",
                            required: ""
                        },
                        model: {
                            value: e.email,
                            callback: function(t) {
                                e.email = t
                            },
                            expression: "email"
                        }
                    })], 1), t("o-field", [t("o-input", {
                        attrs: {
                            title: "Password",
                            autocomplete: "new-password",
                            type: "password",
                            placeholder: "Your password",
                            "validation-message": e.passwordMessage,
                            minlength: "8",
                            maxlength: "64",
                            "password-reveal": !e.passwordEmpty,
                            required: ""
                        },
                        model: {
                            value: e.password,
                            callback: function(t) {
                                e.password = t
                            },
                            expression: "password"
                        }
                    })], 1), t("PasswordFormat"), t("o-field", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.passwordEmpty,
                            expression: "!passwordEmpty"
                        }]
                    }, [t("o-input", {
                        class: {
                            passnotmatch: !e.passwordMatch && !e.passwordConfirmationEmpty
                        },
                        attrs: {
                            title: "Confirm password",
                            autocomplete: "new-password",
                            type: "password",
                            placeholder: "Confirm your password",
                            "validation-message": e.passwordConfirmationMessage,
                            minlength: "8",
                            maxlength: "64",
                            "password-reveal": !e.passwordConfirmationEmpty,
                            required: ""
                        },
                        model: {
                            value: e.passwordConfirmation,
                            callback: function(t) {
                                e.passwordConfirmation = t
                            },
                            expression: "passwordConfirmation"
                        }
                    })], 1), t("o-field", [t("o-switch", {
                        model: {
                            value: e.newsletter,
                            callback: function(t) {
                                e.newsletter = t
                            },
                            expression: "newsletter"
                        }
                    }, [e._v(" I would like to receive Holori newsletter. ")])], 1), e._m(0), t("RecaptchaButton", {
                        ref: "recaptchaButton",
                        attrs: {
                            text: "Create your account",
                            disabled: !e.readyForRegistration || e.isLoading
                        },
                        on: {
                            verified: e.register
                        },
                        model: {
                            value: e.captchaResponse,
                            callback: function(t) {
                                e.captchaResponse = t
                            },
                            expression: "captchaResponse"
                        }
                    })], 1)], e.isRegistered ? e._e() : t("div", [t("span", {
                        staticClass: "or is-block has-text-centered my-5"
                    }, [e._v(" or ")]), t("div", {
                        staticClass: "is-flex-grow-1"
                    }), t("div", {
                        staticClass: "sso-providers"
                    }, [e.ssoProviders.length ? e._l(e.ssoProviders, (function(e) {
                        return t("SSOButton", {
                            key: e.id,
                            ref: `sso-provider-${e.id}`,
                            refInFor: !0,
                            attrs: {
                                provider: e
                            }
                        })
                    })) : [e._v(" Loading SSO providers… ")]], 2), t("div", {
                        staticClass: "is-flex-grow-1"
                    }), t("div", {
                        staticClass: "mt-1 py-1"
                    }, [t("hr", {
                        staticClass: "is-border-t-gray my-5"
                    }), t("p", {
                        staticClass: "has-text-centered is-size-5 is-white-space-no-wrap"
                    }, ["Login" === e.$route.name ? [e._v(" Don't have Holori account? "), t("a", {
                        attrs: {
                            href: "/register"
                        }
                    }, [e._v("Sign up")])] : [e._v(" Already have Holori account? "), t("a", {
                        attrs: {
                            href: "/login"
                        }
                    }, [e._v("Log in")])]], 2)])]), t("o-loading", {
                        attrs: {
                            active: e.isLoading,
                            "is-full-page": !1
                        }
                    })], 2)], 1), t("transition", {
                        attrs: {
                            name: "fade-x",
                            mode: "out-in"
                        }
                    }, [e.isRegistered ? e._e() : t("HomeSummary")], 1)], 1)
                },
                r = [function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "is-size-7 has-text-justified my-4"
                    }, [e._v(" By signing up, I accept the "), t("a", {
                        attrs: {
                            href: ""
                        }
                    }, [e._v("Terms of Service")]), e._v(" and "), t("a", {
                        attrs: {
                            href: ""
                        }
                    }, [e._v("Privacy Policy")])])
                }],
                a = (i(70560), i(25361)),
                o = i(48659),
                n = i(64436),
                c = i(15212),
                l = i(44158),
                d = i(27200),
                u = i(92824),
                p = i(28079),
                h = i(46693),
                m = {
                    name: "LoginView",
                    components: {
                        HomeSummary: l.Z,
                        LoginHeader: n.Z,
                        RecaptchaButton: c.Z,
                        SSOButton: p.Z
                    },
                    mixins: [h.n],
                    data() {
                        return {
                            publicPath: "/",
                            isRegistered: !1,
                            loginError: !1,
                            registerError: !1,
                            isLoading: !1,
                            captchaResponse: "",
                            readyForLogin: !1,
                            readyForRegistration: !1,
                            recaptchaReady: !1,
                            email: "",
                            password: "",
                            passwordConfirmation: "",
                            newsletter: !1,
                            update: !1
                        }
                    },
                    computed: { ...(0, o.rn)(d.c, ["isLoggedIn"]),
                        ...(0, o.rn)(u.G, ["ssoProviders"]),
                        formTitle() {
                            return "Login" === this.$route.name ? "Log in to your account" : "Sign up for free"
                        },
                        emailMessage() {
                            return this.email.length < 5 ? "Minimum 5 characters required" : this.email.length > 96 ? "Maximum 96 characters allowed" : this.email.includes("@") ? "Email is not valid" : "Missing @ character"
                        },
                        loginFormWatch() {
                            return `${this.email}|${this.password}|${this.captchaResponse}`
                        },
                        registerFormWatch() {
                            return `${this.name}|${this.email}|${this.password}|${this.passwordConfirmation}|${this.captchaResponse}`
                        },
                        passwordEmpty() {
                            return "" === this.password
                        },
                        passwordConfirmationEmpty() {
                            return "" === this.passwordConfirmation
                        },
                        passwordMatch() {
                            return this.password === this.passwordConfirmation
                        },
                        recaptchaDisabled() {
                            return !this.readyForLogin || !this.recaptchaReady
                        }
                    },
                    watch: {
                        loginFormWatch() {
                            this.readyForLogin = this.$refs.form ? .checkValidity() || !1
                        },
                        registerFormWatch() {
                            this.readyForRegistration = this.$refs.form ? .checkValidity() && this.passwordMatch || !1
                        }
                    },
                    mounted() {
                        this.getSSOProviders().then((() => {
                            const {
                                sso: e
                            } = this.$route.query;
                            e && this.$nextTick((() => {
                                this.$refs[`sso-provider-${e}`][0].login()
                            }))
                        }))
                    },
                    methods: { ...(0, o.nv)(d.c, {
                            performLogin: "login",
                            performRegister: "register"
                        }),
                        ...(0, o.nv)(u.G, ["getSSOProviders"]),
                        login: (0, a.Ds)((function() {
                            this.loginError = !1, this.isLoading = !0, this.readyForLogin = !1;
                            const e = new FormData;
                            e.append("grant_type", "password"), e.append("username", this.email), e.append("password", this.password), e.append("captcha", this.captchaResponse), this.performLogin(e).then((({
                                first_login_date: e
                            }) => {
                                const t = null === e ? {
                                    name: "Onboarding"
                                } : this.$router.currentRoute.query.redirect;
                                this.$router.push(t)
                            }), (({
                                response: {
                                    data: {
                                        detail: e
                                    }
                                }
                            }) => {
                                this.isLoading = !1, this.loginError = e, this.$refs.recaptchaButton && this.$refs.recaptchaButton.reset()
                            }))
                        })),
                        register: function() {
                            this.registerError = !1, this.readyForRegistration = !1, this.isLoading = !0;
                            const {
                                email: e,
                                password: t
                            } = this, i = e.match(/([A-Za-z0-9]+)(?:[+_-].*)*@.*/), s = {
                                name: i[1] || e.split("@")[0],
                                email: e,
                                password: t,
                                captcha: this.captchaResponse,
                                receive_newsletter: this.newsletter
                            };
                            this.performRegister(s).then((() => {
                                this.isRegistered = !0
                            }), (({
                                response: {
                                    data: {
                                        detail: e
                                    }
                                }
                            }) => {
                                this.registerError = e, this.$refs.recaptchaButton.reset()
                            })).then((() => {
                                this.isLoading = !1
                            }))
                        }
                    }
                },
                f = m,
                g = i(1001),
                v = (0, g.Z)(f, s, r, !1, null, "7383d2a5", null),
                y = v.exports
        }
    }
]);
//# sourceMappingURL=login.152399a4.js.map