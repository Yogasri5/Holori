(function() {
    var e = {
            93296: function(e, t, s) {
                "use strict";
                s.d(t, {
                    Z: function() {
                        return c
                    }
                });
                var r = function() {
                        var e = this;
                        e._self._c;
                        return e._m(0)
                    },
                    i = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "mb-3 is-size-7"
                        }, [e._v(" Required format: "), t("ul", {
                            staticClass: "required-format"
                        }, [t("li", {
                            staticClass: "ml-3"
                        }, [e._v(" At least 8 characters ")]), t("li", {
                            staticClass: "ml-3"
                        }, [e._v(" At least 1 uppercase and 1 lowercase character ")]), t("li", {
                            staticClass: "ml-3"
                        }, [e._v(" At least 1 digit character ")])])])
                    }],
                    o = s(1001),
                    a = {},
                    n = (0, o.Z)(a, r, i, !1, null, "6b1fb8f2", null),
                    c = n.exports
            },
            59472: function(e, t, s) {
                "use strict";
                s.d(t, {
                    Z: function() {
                        return m
                    }
                });
                var r = function() {
                        var e = this,
                            t = e._self._c;
                        return t(e.position ? "o-tooltip" : "span", {
                            tag: "component",
                            staticClass: "is-relative is-inline-block",
                            class: {
                                [e.wrapperClass]: !0
                            },
                            attrs: {
                                title: e.position ? "" : e.title,
                                label: e.title,
                                position: e.position
                            },
                            on: {
                                click: e.doAction
                            }
                        }, [t("span", {
                            class: {
                                "quota-reached": !e.valid
                            }
                        }, [e._t("default")], 2)])
                    },
                    i = [],
                    o = s(48659),
                    a = s(27200),
                    n = s(67708),
                    c = s(14953),
                    l = s(41632),
                    u = {
                        props: {
                            quota: {
                                type: [String, Array],
                                required: !0
                            },
                            value: {
                                type: Number,
                                required: !1,
                                default: -1
                            },
                            disable: {
                                type: Boolean,
                                required: !1,
                                default: !1
                            },
                            position: {
                                type: String,
                                required: !1,
                                default: ""
                            },
                            titleValid: {
                                type: String,
                                required: !0
                            },
                            titleInvalid: {
                                type: String,
                                required: !0
                            },
                            text: {
                                type: String,
                                required: !1,
                                default: ""
                            },
                            wrapperClass: {
                                type: String,
                                required: !1,
                                default: ""
                            },
                            iconPosition: {
                                type: String,
                                required: !1,
                                default: "right"
                            },
                            freePricingPlan: {
                                type: Boolean,
                                required: !1,
                                default: !1
                            }
                        },
                        computed: { ...(0, o.rn)(a.c, ["hasReachedQuota", "getQuotaLimit"]),
                            ...(0, o.rn)(n.L, ["getPricingPlan"]),
                            valid() {
                                const {
                                    quota: e,
                                    value: t,
                                    freePricingPlan: s
                                } = this;
                                return s ? "free" !== this.getPricingPlan : Array.isArray(e) ? e.every((e => !this.hasReachedQuota(e))) : t > -1 ? t < this.getQuotaLimit(e) : !this.hasReachedQuota(e)
                            },
                            title() {
                                return this.valid ? this.titleValid : this.titleInvalid
                            },
                            modalText() {
                                return this.text || this.titleInvalid
                            }
                        },
                        methods: {
                            doAction() {
                                this.valid ? this.$emit("execute") : this.openModal()
                            },
                            async openModal() {
                                const e = this.$oruga.modal.open({
                                        component: c.Z,
                                        props: {
                                            text: this.modalText
                                        },
                                        trapFocus: !0
                                    }),
                                    t = await e.promise;
                                !0 === t && l.Z.dispatch("upgradePricingPlan")
                            }
                        }
                    },
                    d = u,
                    h = s(1001),
                    p = (0, h.Z)(d, r, i, !1, null, "45550cb0", null),
                    m = p.exports
            },
            99996: function(e, t, s) {
                "use strict";
                s.d(t, {
                    Z: function() {
                        return u
                    }
                });
                var r = function() {
                        var e = this,
                            t = e._self._c;
                        return t("o-button", {
                            staticClass: "is-block has-text-weight-bold mx-auto mt-5",
                            attrs: {
                                variant: "primary",
                                "icon-left": "arrow-up-bold-hexagon-outline",
                                "native-tag": "a"
                            },
                            on: {
                                click: e.click
                            }
                        }, [e._v(" Upgrade your account ")])
                    },
                    i = [],
                    o = s(41632),
                    a = {
                        props: {
                            redirect: {
                                type: Boolean,
                                required: !1,
                                default: !1
                            }
                        },
                        methods: {
                            click() {
                                this.$emit("click"), this.redirect && o.Z.dispatch("upgradePricingPlan")
                            }
                        }
                    },
                    n = a,
                    c = s(1001),
                    l = (0, c.Z)(n, r, i, !1, null, null, null),
                    u = l.exports
            },
            28079: function(e, t, s) {
                "use strict";
                s.d(t, {
                    Z: function() {
                        return d
                    }
                });
                var r = function() {
                        var e = this,
                            t = e._self._c;
                        return t("a", {
                            ref: "link",
                            staticClass: "button px-2 is-flex is-align-items-center is-justify-content-center is-border-radius-md",
                            attrs: {
                                href: e.getSSOURL(e.provider)
                            },
                            on: {
                                click: function(t) {
                                    return e.$emit("click", t)
                                }
                            }
                        }, [t("picture", {
                            staticClass: "is-flex mr-3"
                        }, [t("source", {
                            attrs: {
                                type: "image/avif",
                                srcset: `/companies/${e.provider.id}/logo.avif`
                            }
                        }), t("img", {
                            attrs: {
                                src: `/companies/${e.provider.id}/logo.png`,
                                alt: `${e.provider.name}`
                            }
                        })]), e._v(" " + e._s(e.provider.name) + " ")])
                    },
                    i = [],
                    o = s(48659),
                    a = s(27200),
                    n = {
                        props: {
                            provider: {
                                type: Object,
                                required: !0
                            }
                        },
                        methods: { ...(0, o.nv)(a.c, ["getAuthorizeCodeSSOURL"]),
                            getSSOURL(e) {
                                return this.getAuthorizeCodeSSOURL({
                                    provider: e.id,
                                    destination: this.$router.currentRoute.query.redirect
                                })
                            },
                            login() {
                                this.$refs.link.click()
                            }
                        }
                    },
                    c = n,
                    l = s(1001),
                    u = (0, l.Z)(c, r, i, !1, null, "380af98a", null),
                    d = u.exports
            },
            14953: function(e, t, s) {
                "use strict";
                s.d(t, {
                    Z: function() {
                        return u
                    }
                });
                var r = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card mx-auto"
                        }, [t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Upgrade your account ")]), t("o-button", {
                            staticClass: "ml-auto pl-4",
                            attrs: {
                                "icon-left": "close"
                            },
                            on: {
                                click: function(t) {
                                    return e.$emit("close")
                                }
                            }
                        })], 1), t("section", {
                            staticClass: "modal-card-body"
                        }, [t("p", {
                            domProps: {
                                innerHTML: e._s(e.text)
                            }
                        }), t("p", [e._v(" You can upgrade your account to a superior plan by clicking the button below: ")]), t("QuotaUpgradeButton", {
                            on: {
                                click: e.upgrade
                            }
                        })], 1)])
                    },
                    i = [],
                    o = s(99996),
                    a = {
                        name: "QuotaUpgrade",
                        components: {
                            QuotaUpgradeButton: o.Z
                        },
                        props: {
                            text: {
                                type: String,
                                required: !0
                            }
                        },
                        methods: {
                            upgrade() {
                                this.$emit("close", !0)
                            }
                        }
                    },
                    n = a,
                    c = s(1001),
                    l = (0, c.Z)(n, r, i, !1, null, null, null),
                    u = l.exports
            },
            40905: function(e, t, s) {
                "use strict";
                s.d(t, {
                    Z: function() {
                        return m
                    }
                });
                var r = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card",
                            staticStyle: {
                                width: "auto"
                            }
                        }, [t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Share project " + e._s(e.project.name) + " ")]), t("o-button", {
                            staticClass: "ml-auto pl-4",
                            attrs: {
                                "icon-left": "close"
                            },
                            on: {
                                click: e.closePopup
                            }
                        })], 1), t("section", {
                            staticClass: "modal-card-body"
                        }, [t("h3", {
                            staticClass: "has-text-weight-bold mb-2"
                        }, [e._v(" Individual user sharing ")]), !e.isAnythingLoading && e.shared_with.length < 1 ? t("p", {
                            staticClass: "mb-2"
                        }, [e._v(" This project is not shared to any users ")]) : e._e(), e._l(e.shared_with, (function(s, r) {
                            return t("o-field", {
                                key: s.id,
                                staticClass: "mb-2"
                            }, [t("o-input", {
                                attrs: {
                                    expanded: "",
                                    disabled: "",
                                    type: "email"
                                },
                                model: {
                                    value: s.email,
                                    callback: function(t) {
                                        e.$set(s, "email", t)
                                    },
                                    expression: "user.email"
                                }
                            }), t("o-button", {
                                attrs: {
                                    "icon-left": "close-circle-outline"
                                },
                                on: {
                                    click: function(t) {
                                        return e.shared_with.splice(r, 1)
                                    }
                                }
                            })], 1)
                        })), e._l(e.invitations, (function(s, r) {
                            return t("o-field", {
                                key: r,
                                staticClass: "mb-2"
                            }, [t("o-input", {
                                attrs: {
                                    expanded: "",
                                    type: "email",
                                    placeholder: "email to invite"
                                },
                                model: {
                                    value: e.invitations[r],
                                    callback: function(t) {
                                        e.$set(e.invitations, r, t)
                                    },
                                    expression: "invitations[index]"
                                }
                            }), t("o-button", {
                                attrs: {
                                    "icon-left": "close-circle-outline"
                                },
                                on: {
                                    click: function(t) {
                                        return e.invitations.splice(r, 1)
                                    }
                                }
                            })], 1)
                        })), t("QuotaFeature", {
                            attrs: {
                                quota: "project_shared_with",
                                value: e.shared_with.length + e.invitations.length,
                                "title-valid": "Add another invitation",
                                "title-invalid": "You cannot create an invitation to this project because you reached your maximum shared quota.",
                                "wrapper-class": "full-width",
                                "icon-position": "top-right"
                            },
                            on: {
                                execute: e.createInvitation
                            }
                        }, [t("o-button", {
                            staticClass: "mt-2 full-width",
                            attrs: {
                                variant: "primary",
                                "icon-left": "account-multiple-plus"
                            }
                        }, [e._v(" Add invitation ")])], 1), e.hasTeams ? [t("hr"), t("o-field", {
                            attrs: {
                                label: "Share to a team"
                            }
                        }, [t("o-select", {
                            attrs: {
                                placeholder: "select a team to share with",
                                expanded: ""
                            },
                            model: {
                                value: e.shared_with_team,
                                callback: function(t) {
                                    e.shared_with_team = t
                                },
                                expression: "shared_with_team"
                            }
                        }, [e.shared_with_team ? t("option", {
                            domProps: {
                                value: null
                            }
                        }, [e._v(" Remove team sharing ")]) : e._e(), t("optgroup", {
                            attrs: {
                                label: "Teams"
                            }
                        }, [e._l(e.teams, (function(s) {
                            return t("option", {
                                key: s.id,
                                domProps: {
                                    value: s.id
                                }
                            }, [e._v(" " + e._s(s.name) + " ")])
                        })), e.teams.length < 1 ? t("option", {
                            attrs: {
                                disabled: ""
                            }
                        }, [e._v(" No team ")]) : e._e()], 2)])], 1)] : e._e(), t("o-loading", {
                            attrs: {
                                active: e.isAnythingLoading > 0,
                                "full-page": !1
                            }
                        })], 2), t("footer", {
                            staticClass: "modal-card-foot"
                        }, [t("o-button", {
                            attrs: {
                                variant: "danger",
                                "icon-left": "cancel",
                                disabled: e.saveLoading
                            },
                            on: {
                                click: e.closePopup
                            }
                        }, [e._v(" Cancel ")]), t("o-button", {
                            staticClass: "ml-auto",
                            attrs: {
                                "icon-left": "content-save",
                                variant: "primary",
                                disabled: e.saveLoading
                            },
                            on: {
                                click: e.saveSharing
                            }
                        }, [e._v(" Save ")])], 1)])
                    },
                    i = [],
                    o = (s(70560), s(48659)),
                    a = s(17843),
                    n = s(20679),
                    c = s(67708),
                    l = s(59472),
                    u = {
                        name: "ShareProjectPopup",
                        components: {
                            QuotaFeature: l.Z
                        },
                        props: {
                            project: {
                                type: Object,
                                required: !0
                            }
                        },
                        data() {
                            return {
                                invitations: [],
                                shared_with: [],
                                shared_with_team: null,
                                error: null,
                                userLoading: 0,
                                saveLoading: !1
                            }
                        },
                        computed: { ...(0, o.rn)(a.A, ["teams", "isLoading", "hasTeams"]),
                            isFormValid() {
                                return "" !== this.team_name
                            },
                            isAnythingLoading() {
                                return this.userLoading > 0 || this.isLoading
                            }
                        },
                        mounted() {
                            this.invitations = [...this.project.invitations], this.shared_with_team = this.project.shared_with_team;
                            for (const e of this.project.shared_with) this.userLoading += 1, this.getUser(e)
                        },
                        methods: { ...(0, o.nv)(n.i, ["patch", "getPage"]),
                            ...(0, o.nv)(c.L, ["get"]),
                            async saveSharing() {
                                this.error = null, this.saveLoading = !0;
                                const e = {
                                    id: this.project.id,
                                    shared_with_team: this.shared_with_team,
                                    invitations: this.invitations.filter((e => "" !== e))
                                };
                                if (this.invitations !== this.project.invitations && await this.patch(e).then((() => {
                                        this.toast({
                                            message: `Project "${this.project.name}" has been shared successfully!`,
                                            variant: "success"
                                        })
                                    })).catch((e => {
                                        this.error = e
                                    })), this.error) return void(this.saveLoading = !1);
                                const t = [],
                                    s = this.shared_with.map((e => e.id));
                                for (const r of this.project.shared_with) s.includes(r) || t.push(r);
                                t.length > 0 && await this.unyokeUsers({
                                    id: this.project.id,
                                    unyokeUsers: t
                                }).catch((e => {
                                    this.error = e
                                })), this.error ? this.saveLoading = !1 : (this.saveLoading = !1, this.getPage(), this.closePopup())
                            },
                            async getUser(e) {
                                const t = await this.get(e);
                                this.shared_with.push(t.data), this.userLoading -= 1
                            },
                            closePopup() {
                                this.$emit("close")
                            },
                            createInvitation() {
                                this.invitations.push("")
                            }
                        }
                    },
                    d = u,
                    h = s(1001),
                    p = (0, h.Z)(d, r, i, !1, null, "0c45300a", null),
                    m = p.exports
            },
            55102: function(e, t, s) {
                "use strict";
                s.d(t, {
                    Ud: function() {
                        return n
                    },
                    eE: function() {
                        return a
                    }
                });
                var r = s(54582),
                    i = s(93069),
                    o = s.n(i);
                const a = r["default"].create({
                        baseURL: "/",
                        timeout: 6e4,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        paramsSerializer: {
                            serialize: e => o().stringify(e, {
                                skipNulls: !0,
                                indices: !1
                            })
                        }
                    }),
                    n = r["default"].create({
                        baseURL: "/",
                        timeout: 1e4,
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                t.ZP = a
            },
            92220: function(e, t, s) {
                "use strict";
                var r = s(55102),
                    i = s(1200);
                const o = i.Z + "account/",
                    a = i.Z + "token";
                t.ZP = {
                    register(e) {
                        return r.eE.post(o + "register", e)
                    },
                    resetPassword(e) {
                        return r.eE.post(o + "reset_password", e)
                    },
                    changePassword(e) {
                        return r.eE.put(o + "password", e)
                    },
                    changePasswordFromToken(e) {
                        return r.eE.post(o + "password", e)
                    },
                    verify(e) {
                        return r.eE.post(o + "verify", e)
                    },
                    login(e) {
                        return r.Ud.post(a, e)
                    },
                    logout() {
                        return r.eE.post(`${a}/logout`)
                    },
                    getAuthorizeCodeSSOURL(e) {
                        return `/${a}/login/${e}`
                    },
                    authorizeSSO(e, t, s) {
                        return r.Ud.post(`${a}/${e}/authorize?code=${t}${s?`&state=${s}`:""}`)
                    },
                    renewToken() {
                        return r.eE.get(a)
                    },
                    changeEmail(e) {
                        return r.eE.post(o + "new_email", e)
                    },
                    getQuotas() {
                        return r.eE.get(o + "quotas")
                    },
                    stripeCheckout(e, t) {
                        return r.eE.post(o + "stripe_checkout", {
                            plan_name: e,
                            period: t
                        })
                    },
                    stripePortal() {
                        return r.eE.post(o + "stripe_portal")
                    }
                }
            },
            19464: function(e, t, s) {
                "use strict";
                var r = s(54582),
                    i = s(55102),
                    o = s(1200),
                    a = s(84902);
                const n = "https://api.github.com/",
                    c = r["default"].create({
                        baseURL: n,
                        timeout: 6e4,
                        headers: {
                            Accept: "application/vnd.github+json",
                            "X-GitHub-Api-Version": "2022-11-28"
                        }
                    }),
                    l = e => {
                        c.defaults.headers.Authorization = `Bearer ${e}`
                    },
                    u = e => e.startsWith("@") ? e.substr(1) : e;
                t.ZP = {
                    getToken() {
                        return new Promise((e => {
                            c.defaults.headers.Authorization ? e() : i.eE.get(o.Z + "github/token").then((({
                                data: t
                            }) => {
                                const {
                                    access_token: s
                                } = t;
                                l(s), e()
                            }))
                        }))
                    },
                    getInstalledOrganizations(e) {
                        return new Promise(((t, s) => {
                            i.eE.get(o.Z + "github/installations").then((({
                                data: {
                                    apps: r
                                }
                            }) => {
                                const i = r.map((({
                                    organization_id: t
                                }) => this.getOrganization(t, e).catch((e => s(e)))));
                                Promise.all(i).then((e => {
                                    const s = e.filter((e => e && void 0 !== e.request)),
                                        i = s.map((e => {
                                            const {
                                                id: t,
                                                login: s,
                                                type: i
                                            } = e.data, o = "User" === i ? `@${s}` : s, a = r.find((e => e.organization_id === "" + t)), {
                                                installation_id: n
                                            } = a;
                                            return {
                                                id: t,
                                                installationID: n,
                                                login: o
                                            }
                                        }));
                                    t(i)
                                }), (e => s(e)))
                            }), (e => s(e)))
                        }))
                    },
                    async getUserAccount() {
                        return await this.getToken(), c.get("user")
                    },
                    async getOrganizations() {
                        return await this.getToken(), c.get("user/orgs")
                    },
                    async getOrganization(e, t = void 0) {
                        await this.getToken();
                        const s = e.startsWith("@") || e === "" + t ? "user" : `orgs/${e}`;
                        return c.get(s)
                    },
                    async getRepositoriesForOrganization(e, t) {
                        await this.getToken();
                        const s = e.startsWith("@") ? "user/repos" : `orgs/${e}/repos`;
                        return c.get(s, {
                            signal: t
                        })
                    },
                    getProjectsForName(e, t, s, r = void 0) {
                        return i.eE.get(o.Z + "github/installations/" + e + "/projects", {
                            signal: s,
                            params: {
                                name: t,
                                limit: r
                            }
                        })
                    },
                    async getPullRequestsForRepository(e, t, s, r, i = 10) {
                        return await this.getToken(), c.get(`repos/${u(e)}/${t}/pulls?page=${r}&per_page=${i}`, {
                            signal: s
                        })
                    },
                    async getPullRequest(e, t, s) {
                        return await this.getToken(), c.get(`repos/${u(e)}/${t}/pulls/${s}`)
                    },
                    async getCommit(e, t, s) {
                        return await this.getToken(), c.get(`repos/${u(e)}/${t}/commits/${s}`)
                    },
                    async getBranchesForRepository(e, t, s) {
                        await this.getToken();
                        const r = e.startsWith("@") ? e.substring(1) : e,
                            i = `repos/${r}/${t}/branches`;
                        return c.get(i, {
                            signal: s
                        })
                    },
                    importFromZIP(e, t, s, r) {
                        const o = `${n}repos/${t}/${s}/tarball/${r}`,
                            l = c.defaults.headers;
                        return i.eE.post(a.Z + "github/import", {
                            project_id: e,
                            tarball_url: o,
                            headers: {
                                Accept: l.Accept,
                                "X-GitHub-Api-Version": l["X-GitHub-Api-Version"],
                                Authorization: l.Authorization
                            }
                        })
                    }
                }
            },
            1200: function(e, t) {
                "use strict";
                const s = "api/main-server/";
                t.Z = s
            },
            4669: function(e, t, s) {
                "use strict";
                var r = s(55102),
                    i = s(1200);
                const o = i.Z + "projects";
                t.Z = {
                    getPage(e, t, s) {
                        return r.ZP.get(o, {
                            params: { ...s,
                                offset: e,
                                limit: t
                            }
                        })
                    },
                    create(e) {
                        return r.ZP.post(o, e)
                    },
                    get(e) {
                        return r.ZP.get(`${o}/${e}`)
                    },
                    getThumbnail(e) {
                        return r.ZP.get(`${o}/${e}/thumbnail`)
                    },
                    patch(e, t) {
                        return r.ZP.patch(`${o}/${e}`, t)
                    },
                    put(e, t) {
                        return r.ZP.put(`${o}/${e}`, t)
                    },
                    delete(e) {
                        return r.ZP.delete(`${o}/${e}`)
                    },
                    getHistory(e) {
                        return r.ZP.get(`${o}/${e}/history`)
                    },
                    favorite(e) {
                        return r.ZP.post(`${o}/${e}/favorite`)
                    },
                    unfavorite(e) {
                        return r.ZP.post(`${o}/${e}/unfavorite`)
                    },
                    unyoke_users(e) {
                        return r.ZP.post(`${o}/${e}/unyoke`)
                    },
                    accept_invitation(e) {
                        return r.ZP.post(`${o}/invitations/${e}`)
                    },
                    decline_invitation(e) {
                        return r.ZP.delete(`${o}/invitations/${e}`)
                    },
                    getTemplates() {
                        return r.ZP.get("/templates/list.json")
                    },
                    getTemplate(e) {
                        return r.ZP.get(`/templates/${e}/diagram.json`)
                    },
                    getTemplateThumbnail(e) {
                        return r.ZP.get(`/templates/${e}/thumbnail.png`, {
                            responseType: "blob"
                        })
                    }
                }
            },
            2228: function(e, t, s) {
                "use strict";
                var r = s(55102),
                    i = s(1200),
                    o = s(84902);
                const a = i.Z + "provider_accounts";
                t.Z = {
                    get(e) {
                        return r.ZP.get(a + "/" + e)
                    },
                    getPage(e, t, s) {
                        return r.ZP.get(a, {
                            cancelToken: null,
                            params: { ...s,
                                offset: e,
                                limit: t
                            }
                        })
                    },
                    addProviderAccount(e) {
                        return r.ZP.post(a, e)
                    },
                    updateProviderAccount(e, t) {
                        return r.ZP.patch(a + "/" + e, t)
                    },
                    deleteProviderAccount(e) {
                        return r.ZP.delete(a + "/" + e)
                    },
                    getSync(e) {
                        return r.ZP.get(a + "/" + e + "/sync")
                    },
                    getSyncHistory(e, t) {
                        return r.ZP.get(a + "/" + e + "/sync/history", {
                            params: t
                        })
                    },
                    verify(e) {
                        return r.ZP.post(o.Z + "provider_accounts/" + e + "/verify")
                    },
                    sync(e) {
                        return r.ZP.post(o.Z + "provider_accounts/" + e + "/sync")
                    },
                    getRegions(e) {
                        return r.ZP.get(o.Z + "provider_accounts/" + e + "/regions")
                    },
                    getServices(e) {
                        return r.ZP.get(o.Z + "provider_accounts/" + e + "/services")
                    }
                }
            },
            60956: function(e, t, s) {
                "use strict";
                var r = s(55102),
                    i = s(12538);
                const o = i.Z + "companies";
                t.Z = {
                    get() {
                        return r.ZP.get(o)
                    }
                }
            },
            52389: function(e, t, s) {
                "use strict";
                var r = s(55102),
                    i = s(12538);
                const o = i.Z + "filters";
                t.Z = {
                    get(e, t, s) {
                        return r.ZP.get(o + e, {
                            params: t,
                            signal: s
                        })
                    }
                }
            },
            12538: function(e, t) {
                "use strict";
                const s = "api/price-server/";
                t.Z = s
            },
            43058: function(e, t, s) {
                "use strict";
                var r = s(55102),
                    i = s(12538);
                const o = i.Z + "offers",
                    a = ({
                        sortDir: e,
                        sortBy: t
                    }) => {
                        if (t && e) return "tenancy" === t ? "asc" === e ? ["asc(dedicated)", "asc(baremetal)"] : ["desc(baremetal)", "desc(dedicated)"] : "price" === t ? null : `${e}(${t})`
                    };
                t.Z = {
                    getPage(e, t, s, i, n, c) {
                        const l = n ? a(n) : null;
                        return r.ZP.get(o + e, {
                            params: { ...i,
                                offset: t,
                                limit: s,
                                sort_by: l
                            },
                            signal: c
                        })
                    },
                    getOffers(e, t, s = "compute", i = void 0, a = {}) {
                        return r.ZP.get(o + "/" + s, {
                            params: { ...a,
                                company: e,
                                name: t,
                                location: i
                            }
                        })
                    },
                    get(e, t) {
                        return r.ZP.get(`${o}${e}${t}`)
                    }
                }
            },
            84902: function(e, t) {
                "use strict";
                const s = "api/provider-server/";
                t.Z = s
            },
            93553: function(e, t) {
                "use strict";
                const s = "mapping/";
                t.Z = s
            },
            17030: function(e, t, s) {
                "use strict";
                var r = s(55102),
                    i = s(93553);
                const o = i.Z;
                t.Z = {
                    get(e) {
                        return r.ZP.get(o + e)
                    },
                    getPublic(e) {
                        return r.ZP.get(`/${e}`)
                    }
                }
            },
            40739: function(e, t, s) {
                "use strict";
                s.d(t, {
                    L2: function() {
                        return u
                    },
                    Te: function() {
                        return h
                    },
                    Of: function() {
                        return d
                    }
                });
                var r = s(45195);
                const i = e => e.text ? "text-box" : "custom",
                    o = e => e.map((e => ({ ...e,
                        type: i(e),
                        comboId: Array.isArray(e.groups) ? e.groups[0] : ""
                    }))),
                    a = e => e.map((e => ({ ...e,
                        source: e.from,
                        target: e.to
                    }))),
                    n = e => Object.values(e).map((e => {
                        const t = Array.isArray(e.nodes) ? e.nodes : [],
                            s = Array.isArray(e.children) ? e.children : [],
                            r = [...t, ...s].map((e => typeof e === typeof {} ? e.id : e)),
                            i = { ...e,
                                nodes: t,
                                children: r,
                                type: "group"
                            };
                        return Array.isArray(e.parents) && (i.parentId = e.parents[0]), i
                    })).sort(((e, t) => e.nodes.length + e.children.length < t.nodes.length + t.children.length ? -1 : 1)),
                    c = e => {
                        const t = o(e.nodes),
                            s = a(e.edges),
                            r = n(e.groups || {});
                        return {
                            nodes: t,
                            edges: s,
                            combos: r,
                            version: e.version || 0
                        }
                    };
                var l = (e, t) => {
                    Object.assign(e, c(e));
                    for (let r = 0; r < e.combos.length; r++) {
                        const t = e.combos[r];
                        if (t.nodeBond) {
                            let s;
                            const i = e.nodes.find(((e, r) => e.id === t.nodeBond && (s = r, !0)));
                            if (!i) return void delete e.combos[r].nodeBond;
                            const o = t.id;
                            delete i.comboId, e.combos[r] = { ...t,
                                ...i,
                                id: o,
                                type: "group"
                            }, delete e.combos[r].nodeBond, delete e.combos[r].groupBond, e.nodes.splice(s, 1)
                        }
                    }
                    const s = e.nodes.filter((e => e.path)),
                        i = e.combos.filter((e => e.path)),
                        o = s.concat(i);
                    let a = 0;
                    const n = o.length,
                        l = () => t(n, a, e);
                    l();
                    for (let c = 0; c < e.combos.length; c++) e.combos[c].path && (0, r.g)(e.combos[c].path, 30, (t => {
                        a++, e.combos[c].image = t, l()
                    }));
                    for (let c = 0; c < e.nodes.length; c++) e.nodes[c].path && (0, r.g)(e.nodes[c].path, 50, (t => {
                        a++, e.nodes[c].image = t, l()
                    }))
                };
                const u = 1,
                    d = e => e < u,
                    h = (e, t) => {
                        const s = (s, r) => {
                            const i = (s, i) => {
                                t.max = s, t.value = i, i >= s && (e.version = r)
                            };
                            l(e, i)
                        };
                        switch (e.version) {
                            case 0:
                                s(l, 1)
                        }
                    }
            },
            95605: function(e, t, s) {
                "use strict";
                s.d(t, {
                    L: function() {
                        return r
                    }
                });
                s(70560);
                const r = (e, t, s, r) => {
                    const i = (e, t, s) => -1 !== s[t].findIndex((t => t.id === e)),
                        o = (e, t) => t.nodes.find((t => t.id === e)),
                        a = {
                            nodes: [],
                            edges: [],
                            combos: []
                        },
                        n = {
                            nodes: [],
                            edges: [],
                            combos: []
                        },
                        c = {
                            nodes: [],
                            edges: [],
                            combos: []
                        },
                        l = {
                            nodes: [],
                            combos: []
                        },
                        u = (e, t, s, i, o) => {
                            Object.keys(e).forEach((a => {
                                let n = e[a],
                                    u = t[a];
                                "object" === typeof e[a] && (n = JSON.stringify(n), u = JSON.stringify(u)), n !== u ? (l[i].push({ ...s,
                                    updated: !0
                                }), "function" === typeof r && r({
                                    id: s.id,
                                    key: `${o}/${a}`,
                                    value: e[a]
                                })) : c[i].push(s)
                            }))
                        },
                        d = ["combos", "nodes", "edges"];
                    d.forEach((s => {
                        const d = e[s] || [];
                        d.forEach((n => {
                            if ("text-box" === n.type && "empty" === n.notes) return;
                            const d = () => c[s].push(n);
                            if (i(n.id, s, t))
                                if ("nodes" === s || "combos" === s) {
                                    const i = o(n.id, t),
                                        a = o(n.id, e);
                                    if (void 0 !== i && void 0 !== a) {
                                        const e = i.terraform,
                                            t = a.terraform;
                                        if (e && t) {
                                            const i = Object.keys(t);
                                            i.length ? i.forEach((i => {
                                                const o = e[i],
                                                    a = t[i];
                                                "object" === typeof o ? u(o, a, n, s, i) : o !== a ? (l[s].push({ ...n,
                                                    updated: !0
                                                }), "function" === typeof r && r({
                                                    id: n.id,
                                                    key: i,
                                                    value: o
                                                })) : d()
                                            })) : d()
                                        } else d()
                                    } else d()
                                } else d();
                            else a[s].push({ ...n,
                                added: !0
                            })
                        }));
                        const h = t[s] || [];
                        h.forEach((t => {
                            "text-box" === t.type && "empty" === t.notes || i(t.id, s, e) || n[s].push({ ...t,
                                removed: !0
                            })
                        }))
                    }));
                    const h = Array.prototype.concat([], a.edges, n.edges, c.edges),
                        p = Array.prototype.concat([], a.nodes, n.nodes, c.nodes, l.nodes),
                        m = Array.prototype.concat([], a.combos, n.combos, c.combos, l.combos),
                        g = {
                            edges: Array.from(new Set(h)),
                            nodes: Array.from(new Set(p)),
                            combos: Array.from(new Set(m))
                        },
                        f = g.combos.filter((e => {
                            const {
                                id: t
                            } = e, s = g.nodes.some((e => e.comboId === t)), r = g.combos.some((e => e.parentId === t));
                            return !s && !r
                        }));
                    return f.forEach((e => {
                        const {
                            id: t
                        } = e, s = {
                            id: t + "-placeholder",
                            type: "text-box",
                            itemType: "node",
                            notes: "empty",
                            comboId: t
                        };
                        g.nodes.push(s)
                    })), s.read(g), f.forEach((e => {
                        const t = s.findById(e.id + "-placeholder").getContainer();
                        t.hide()
                    })), Array.prototype.concat([], a.edges, a.combos, a.nodes).forEach((e => {
                        const t = s.findById(e.id);
                        t && t.setState("added", !0)
                    })), Array.prototype.concat([], n.edges, n.combos, n.nodes).forEach((e => {
                        const t = s.findById(e.id);
                        t && t.setState("removed", !0)
                    })), Array.prototype.concat([], l.combos, l.nodes).forEach((e => {
                        const t = s.findById(e.id);
                        t && t.setState("updated", !0)
                    })), g
                }
            },
            45195: function(e, t, s) {
                "use strict";
                s.d(t, {
                    g: function() {
                        return a
                    }
                });
                s(13429);
                var r = s(93866),
                    i = s(55102);
                const o = e => btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
                        return String.fromCharCode("0x" + t)
                    }))),
                    a = (e, t, s) => {
                        const a = e => {
                                (0, r.parse)(e.data).then((e => {
                                    e.attributes.width = t, e.attributes.height = t;
                                    const i = (0, r.stringify)(e);
                                    s(`data:image/svg+xml;base64,${o(i)}`)
                                }))
                            },
                            n = () => {
                                i.ZP.get("/holori/logo.svg").then((e => a(e)))
                            };
                        i.ZP.get(`/diagram${e}.svg`).then((e => a(e))).catch(n)
                    }
            },
            41632: function(e, t) {
                "use strict";
                const s = {
                    on(e, t) {
                        document.addEventListener(e, (e => t(e.detail)))
                    },
                    dispatch(e, t) {
                        document.dispatchEvent(new CustomEvent(e, {
                            detail: t
                        }))
                    },
                    remove(e, t) {
                        document.removeEventListener(e, t)
                    }
                };
                t.Z = s
            },
            80167: function(e, t, s) {
                "use strict";
                s.d(t, {
                    q: function() {
                        return o
                    }
                });
                const r = "Holori",
                    i = "-",
                    o = e => `${r} ${i} ${e}`
            },
            46693: function(e, t, s) {
                "use strict";
                s.d(t, {
                    n: function() {
                        return u
                    },
                    t: function() {
                        return c
                    }
                });
                s(70560);
                var r = s(80167),
                    i = s(41632),
                    o = s(93296);
                const a = {
                        warning: "alert",
                        info: "information",
                        success: "check-circle",
                        danger: "close-circle"
                    },
                    n = {
                        hasIcon: !0,
                        iconSize: "medium",
                        rootClass: "toast-notification",
                        position: "bottom",
                        closable: !0,
                        duration: 5e3,
                        queue: !0
                    },
                    c = {
                        methods: {
                            setPageTitle(e) {
                                i.Z.dispatch("setPageTitle", e), this.$nextTick((() => {
                                    document.title = (0, r.q)(e)
                                }))
                            },
                            closeAllToasts() {
                                this.$oruga.notification.closeAll({
                                    action: "closeAll"
                                })
                            },
                            toast(e) {
                                this.$oruga.notification.open({ ...n,
                                    icon: a[e.variant || "info"],
                                    ...e
                                })
                            },
                            navigate(e, t = {}) {
                                this.$router.push({
                                    name: e,
                                    ...t
                                }).catch((() => {}))
                            },
                            backToProjects() {
                                this.$router.replace({
                                    name: "Projects"
                                })
                            }
                        }
                    },
                    l = e => e ? !e.length >= 8 ? "Minimum 8 characters required." : /\d+/.test(e) ? /[A-Z]+/.test(e) ? /[a-z]+/.test(e) ? "" : "At least 1 lowercase letter required." : "At least 1 uppercase letter required." : "At least 1 digit required." : "No password",
                    u = {
                        components: {
                            PasswordFormat: o.Z
                        },
                        computed: {
                            passwordPattern() {
                                return "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}"
                            },
                            passwordMessage() {
                                return l(this.password)
                            },
                            newPasswordMessage() {
                                return l(this.newPassword)
                            },
                            passwordConfirmationMessage() {
                                return l(this.newPasswordConfirmation)
                            }
                        }
                    }
            },
            27952: function(e, t, s) {
                "use strict";
                var r = s(82433),
                    i = s(27195),
                    o = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            attrs: {
                                id: "app"
                            }
                        }, [t("o-modal", {
                            attrs: {
                                active: e.calendlyOpen
                            },
                            on: {
                                close: function(t) {
                                    e.calendlyOpen = !1
                                }
                            }
                        }, [t("CalendlyModal", {
                            on: {
                                close: function(t) {
                                    e.calendlyOpen = !1
                                }
                            }
                        })], 1), t("o-modal", {
                            attrs: {
                                active: !!e.importingProjectID
                            },
                            on: {
                                close: e.importingModalClosed
                            }
                        }, [t("ImportingProjectModal", {
                            on: {
                                close: e.importingModalClosed
                            }
                        })], 1), t("o-modal", {
                            attrs: {
                                active: !!e.syncing
                            },
                            on: {
                                close: function(t) {
                                    return e.setSyncing(null)
                                }
                            }
                        }, [t("SyncingAccountModal", {
                            on: {
                                close: function(t) {
                                    return e.setSyncing(null)
                                }
                            }
                        })], 1), t("o-modal", {
                            attrs: {
                                active: e.github.help
                            },
                            on: {
                                close: function(t) {
                                    e.github.help = !1
                                }
                            }
                        }, [t("GithubHelpModal", {
                            on: {
                                close: function(t) {
                                    e.github.help = !1
                                }
                            }
                        })], 1), t("o-modal", {
                            attrs: {
                                active: e.github.install
                            }
                        }, [t("GithubInstallModal")], 1), e.displayNavBar ? t("NavBar", {
                            on: {
                                setTheme: e.setTheme
                            }
                        }) : e._e(), t("o-loading", {
                            attrs: {
                                active: e.isPageLoading,
                                "full-page": !0
                            }
                        }), t("Transition", {
                            attrs: {
                                mode: "out-in",
                                name: "fade"
                            }
                        }, [t("router-view", {
                            on: {
                                setTheme: e.setTheme
                            }
                        })], 1)], 1)
                    },
                    a = [],
                    n = (s(70560), s(41632)),
                    c = function() {
                        var e = this,
                            t = e._self._c;
                        return t("nav", {
                            staticClass: "navbar full-width is-fixed is-top-0",
                            attrs: {
                                role: "navigation",
                                "aria-label": "main navigation"
                            }
                        }, [t("o-modal", {
                            attrs: {
                                active: e.openHistory
                            },
                            on: {
                                close: function(t) {
                                    e.openHistory = !1
                                }
                            }
                        }, [t("ProjectHistory", {
                            on: {
                                close: function(t) {
                                    e.openHistory = !1
                                }
                            }
                        })], 1), t("o-modal", {
                            attrs: {
                                active: e.openShareProject
                            },
                            on: {
                                close: function(t) {
                                    e.openShareProject = !1
                                }
                            }
                        }, [t("ShareProject", {
                            attrs: {
                                project: e.project
                            },
                            on: {
                                close: function(t) {
                                    e.openShareProject = !1
                                }
                            }
                        })], 1), e.canHaveKeyboardShortcuts ? t("o-modal", {
                            attrs: {
                                active: e.keyboardShortcutsOpen
                            },
                            on: {
                                close: function(t) {
                                    e.keyboardShortcutsOpen = !1
                                }
                            }
                        }, [t("KeyboardShortcuts")], 1) : e._e(), t("o-modal", {
                            attrs: {
                                active: null !== e.deletingProviderAccount
                            },
                            on: {
                                close: function(t) {
                                    return e.setDeletingProviderAccount(null)
                                }
                            }
                        }, [t("DeleteProviderAccount", {
                            on: {
                                close: function(t) {
                                    return e.setDeletingProviderAccount(null)
                                }
                            }
                        })], 1), t("o-modal", {
                            attrs: {
                                active: null !== e.deletingTeam
                            },
                            on: {
                                close: function(t) {
                                    return e.setDeletingTeam(null)
                                }
                            }
                        }, [t("DeleteTeam", {
                            on: {
                                close: function(t) {
                                    return e.setDeletingTeam(null)
                                }
                            }
                        })], 1), t("div", {
                            staticClass: "navbar-brand is-flex is-align-items-center full-height is-align-content-center is-flex-shrink-2 ellipsis"
                        }, [t("a", {
                            staticClass: "navbar-item is-align-items-end",
                            attrs: {
                                href: e.getLogoRedirectURL,
                                role: "link"
                            }
                        }, [t("picture", [t("img", {
                            attrs: {
                                src: `${e.publicPath}holori/navbar.svg`,
                                alt: "Holori Logo",
                                width: "150"
                            }
                        })])]), t("a", {
                            staticClass: "ml-auto navbar-burger",
                            class: {
                                "is-active": e.mobileDropdown
                            },
                            attrs: {
                                role: "button",
                                "aria-label": "menu",
                                "aria-expanded": "false",
                                "data-target": "navbarBasicExample"
                            },
                            on: {
                                click: e.mobileMenuToggle
                            }
                        }, [t("span", {
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }), t("span", {
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }), t("span", {
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }), e.mobileDropdown ? t("div", {
                            staticClass: "dropdown is-active"
                        }, [t("MobileMenu", {
                            attrs: {
                                "display-navigation": e.isProject || e.isCompare || e.isProjectDiff,
                                "navigation-views": e.views,
                                "navigation-selected-view": e.selectedView,
                                "can-have-keyboard-shortcuts": e.canHaveKeyboardShortcuts
                            },
                            on: {
                                navigate: e.chooseView
                            }
                        }, [e.isCompare ? t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: function(t) {
                                    return e.gotoPage("Projects")
                                }
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "group"
                            }
                        }), e._v(" Project Calculator ")], 1) : e._e(), e.isProject ? [t("a", {
                            directives: [{
                                name: "keyboard-shortcut",
                                rawName: "v-keyboard-shortcut",
                                value: "Ctrl+H",
                                expression: "'Ctrl+H'"
                            }],
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: e.showHistory
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "history"
                            }
                        }), e._v(" History ")], 1), e.project ? .user === e.userID ? t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: e.shareProject
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "share-variant-outline"
                            }
                        }), e._v(" Share project ")], 1) : e.project ? .shared_with ? .includes(e.userID) ? t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: e.leaveProject
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "share-off"
                            }
                        }), e._v(" Leave project ")], 1) : e._e()] : e.isCompare || e.isProviderOffer ? e._e() : t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: function(t) {
                                    return e.gotoPage("Compare")
                                }
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "table-search"
                            }
                        }), e._v(" Calculator ")], 1)], 2)], 1) : e._e()])]), t("div", {
                            staticClass: "navbar-menu"
                        }, [t("div", {
                            staticClass: "navbar-end pl-0 is-flex-grow-1"
                        }, [e.isProject || e.isCompare || e.isProjectDiff || e.isProviderAccountDiff ? t("div", {
                            staticClass: "is-absolute full-width is-flex is-justify-content-center is-pointer-events-none"
                        }, [t("div", {
                            staticClass: "tabs is-pointer-events-all"
                        }, [t("ul", {
                            staticClass: "is-flex-grow-0"
                        }, e._l(Object.keys(e.views), (function(s) {
                            return t("li", {
                                key: s,
                                class: {
                                    "is-active": s.toLowerCase() === e.selectedView
                                },
                                attrs: {
                                    id: "navbar-" + s
                                }
                            }, [t("a", {
                                on: {
                                    click: e.chooseView
                                }
                            }, [t("o-icon", {
                                attrs: {
                                    icon: e.views[s]
                                }
                            }), t("span", {
                                staticClass: "is-size-5"
                            }, [e._v(e._s(s))])], 1)])
                        })), 0)])]) : t("div", {
                            staticClass: "p-2 horizontal-center is-left-half is-fixed is-size-3 is-flex-grow-2 is-border-radius-md"
                        }, [e.isCompare ? e._e() : t("transition", {
                            attrs: {
                                name: "fade-x",
                                mode: "out-in"
                            }
                        }, [t("strong", {
                            key: e.pageTitle
                        }, [e._v(" " + e._s(e.pageTitle) + " ")])])], 1), e.isCompare ? t("div", {
                            staticClass: "navbar-item p-2"
                        }, [t("o-button", {
                            staticClass: "has-text-weight-semibold",
                            attrs: {
                                title: "Project calculator",
                                variant: "primary",
                                "icon-left": "group"
                            },
                            on: {
                                click: function(t) {
                                    return e.gotoPage("Projects")
                                }
                            }
                        }, [e._v(" Project Calculator ")])], 1) : e._e(), e.isProject ? t("div", {
                            staticClass: "is-flex"
                        }, [t("div", {
                            staticClass: "navbar-item p-2"
                        }, [t("o-button", {
                            staticClass: "is-border-radius-full",
                            attrs: {
                                variant: "primary",
                                title: "Project history",
                                "icon-left": "history"
                            },
                            on: {
                                click: e.showHistory
                            }
                        })], 1), t("div", {
                            staticClass: "navbar-item p-2 navbar-share-button"
                        }, [e.project ? .user === e.userID ? t("o-button", {
                            staticClass: "is-border-radius-full",
                            attrs: {
                                variant: "primary",
                                title: "Share project",
                                "icon-left": "share-variant-outline"
                            },
                            on: {
                                click: e.shareProject
                            }
                        }) : e.project ? .shared_with ? .includes(e.userID) ? t("o-button", {
                            staticClass: "is-border-radius-full",
                            attrs: {
                                variant: "primary",
                                title: "Leave project",
                                "icon-left": "share-off"
                            },
                            on: {
                                click: e.leaveProject
                            }
                        }) : e._e()], 1)]) : e.isCompare || e.isProviderOffer ? e._e() : [t("div", {
                            staticClass: "navbar-item p-2"
                        }, [t("o-button", {
                            staticClass: "is-primary has-text-weight-semibold",
                            attrs: {
                                title: "Go to calculator",
                                "icon-left": "table-search"
                            },
                            on: {
                                click: function(t) {
                                    return e.$router.push({
                                        name: "Compare"
                                    })
                                }
                            }
                        }, [e._v(" Calculator ")])], 1)], e.isProviderOffer ? [t("div", {
                            staticClass: "navbar-item p-2"
                        }, [t("button", {
                            staticClass: "py-2 px-5 button is-border-radius-lg",
                            attrs: {
                                title: "Back to product list"
                            },
                            on: {
                                click: function(t) {
                                    return e.$router.push({
                                        name: "Compare"
                                    })
                                }
                            }
                        }, [e._v(" Product List ")])])] : e._e(), e.darkThemeAvailable ? t("div", {
                            staticClass: "navbar-item p-2"
                        }, [t("o-button", {
                            staticClass: "is-border-radius-full",
                            attrs: {
                                variant: "primary",
                                title: "Toggle dark mode",
                                "icon-left": "theme-light-dark"
                            },
                            on: {
                                click: function(t) {
                                    return e.$emit("setTheme", e.darkTheme = !e.darkTheme)
                                }
                            }
                        })], 1) : e._e(), t("div", {
                            staticClass: "navbar-item p-2"
                        }, [t("o-dropdown", {
                            attrs: {
                                "aria-role": "list",
                                position: "bottom-left"
                            },
                            scopedSlots: e._u([{
                                key: "trigger",
                                fn: function() {
                                    return [t("button", {
                                        staticClass: "button is-primary is-border-radius-full",
                                        attrs: {
                                            title: "Help"
                                        }
                                    }, [t("span", {
                                        staticClass: "icon is-small"
                                    }, [t("o-icon", {
                                        attrs: {
                                            icon: "help"
                                        }
                                    })], 1)])]
                                },
                                proxy: !0
                            }])
                        }, [t("HelpMenu", {
                            attrs: {
                                "can-have-keyboard-shortcuts": e.canHaveKeyboardShortcuts
                            }
                        })], 1)], 1), !e.isCompare && !e.isLoggedIn || e.isLoggedIn ? t("div", {
                            staticClass: "navbar-item p-2 is-size-5"
                        }, [t("UserMenu")], 1) : e._e()], 2)])], 1)
                    },
                    l = [],
                    u = s(48659),
                    d = function() {
                        var e = this,
                            t = e._self._c;
                        return t("o-dropdown", {
                            attrs: {
                                "aria-role": "list",
                                title: "Your account",
                                position: "bottom-left"
                            },
                            scopedSlots: e._u([{
                                key: "trigger",
                                fn: function() {
                                    return [t("button", {
                                        staticClass: "button is-primary is-border-radius-full"
                                    }, [t("span", {
                                        staticClass: "icon is-small icon-user"
                                    }, [t("div", {
                                        staticClass: "is-size-4"
                                    }, [e._v(" " + e._s(e.userFirstLetter) + " ")])])])]
                                },
                                proxy: !0
                            }])
                        }, [t("o-dropdown-item", {
                            staticClass: "is-flex is-align-items-center has-font-weight-bold",
                            attrs: {
                                "aria-role": "listitem",
                                title: "Your account"
                            },
                            on: {
                                click: function(t) {
                                    return e.$router.push({
                                        name: "Account"
                                    })
                                }
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "account"
                            }
                        }), e._v(" " + e._s(e.username) + " ")], 1), t("o-dropdown-item", {
                            staticClass: "is-flex is-align-items-center",
                            attrs: {
                                "aria-role": "listitem",
                                title: "Check your quotas"
                            },
                            on: {
                                click: e.gotoQuotas
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "apps-box"
                            }
                        }), e._v(" Quotas ")], 1), t("o-dropdown-item", {
                            staticClass: "is-flex is-align-items-center",
                            attrs: {
                                "aria-role": "listitem",
                                title: "Upgrade your plan"
                            },
                            on: {
                                click: e.upgradePlan
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "arrow-up-bold-hexagon-outline"
                            }
                        }), e._v(" Upgrade ")], 1), t("hr", {
                            staticClass: "my-1"
                        }), t("o-dropdown-item", {
                            staticClass: "is-flex is-align-items-center",
                            attrs: {
                                "aria-role": "listitem",
                                title: "Sign out"
                            },
                            on: {
                                click: e.logout
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "logout"
                            }
                        }), e._v(" Sign out ")], 1)], 1)
                    },
                    h = [],
                    p = s(92220),
                    m = s(67708),
                    g = {
                        computed: { ...(0, u.rn)(m.L, ["user", "getPricingPlan", "isStripeCustomer"]),
                            username() {
                                return this.user ? .name
                            },
                            userFirstLetter() {
                                return this.user ? .name.charAt(0).toUpperCase()
                            }
                        },
                        created() {
                            n.Z.on("upgradePricingPlan", this.upgradePlan)
                        },
                        beforeDestroy() {
                            n.Z.remove("upgradePricingPlan")
                        },
                        methods: {
                            upgradePlan(e) {
                                if (this.isStripeCustomer) n.Z.dispatch("startGlobalLoading"), p.ZP.stripePortal().then((e => {
                                    n.Z.dispatch("stopGlobalLoading"), location.href = e.data.url
                                }));
                                else {
                                    const t = {
                                        name: "UpgradePricingPlan"
                                    };
                                    if (e) {
                                        const {
                                            href: e
                                        } = this.$router.resolve(t);
                                        window.open(e, "_blank")
                                    } else this.$router.push(t).catch((() => {}))
                                }
                            },
                            gotoQuotas() {
                                this.$router.push({
                                    name: "Quotas"
                                }).catch((() => {}))
                            },
                            logout() {
                                n.Z.dispatch("logout")
                            }
                        }
                    },
                    f = g,
                    v = s(1001),
                    y = (0, v.Z)(f, d, h, !1, null, null, null),
                    P = y.exports,
                    b = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "dropdown-menu is-fixed",
                            attrs: {
                                id: "dropdown-menu",
                                role: "menu"
                            }
                        }, [t("div", {
                            staticClass: "dropdown-content"
                        }, [e.displayNavigation ? [e._l(Object.keys(e.navigationViews), (function(s) {
                            return t("a", {
                                key: s,
                                staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                                class: {
                                    "is-active": s.toLowerCase() === e.navigationSelectedView
                                },
                                on: {
                                    click: function(t) {
                                        return e.$emit("navigate", t)
                                    }
                                }
                            }, [t("o-icon", {
                                staticClass: "ml-0 mr-2",
                                attrs: {
                                    icon: e.navigationViews[s]
                                }
                            }), e._v(" " + e._s(s) + " ")], 1)
                        })), t("hr", {
                            staticClass: "dropdown-divider"
                        })] : e._e(), e._t("default"), t("hr", {
                            staticClass: "dropdown-divider"
                        }), t("HelpMenu", {
                            attrs: {
                                "can-have-keyboard-shortcuts": e.canHaveKeyboardShortcuts
                            }
                        }), t("hr", {
                            staticClass: "dropdown-divider"
                        }), t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: function(t) {
                                    return e.gotoPage("Account")
                                }
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "account"
                            }
                        }), e._v(" " + e._s(e.getUsername) + " ")], 1), t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: e.upgradePlan
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "apps-box"
                            }
                        }), e._v(" Current plan:  "), t("strong", {
                            staticClass: "is-capitalized"
                        }, [e._v(e._s(e.getPricingPlan))])], 1), t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: e.upgradePlan
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "arrow-up-bold-hexagon-outline"
                            }
                        }), e._v(" Upgrade ")], 1), t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            on: {
                                click: e.logout
                            }
                        }, [t("o-icon", {
                            staticClass: "ml-0 mr-2",
                            attrs: {
                                icon: "logout"
                            }
                        }), e._v(" Logout ")], 1)], 2)])
                    },
                    w = [],
                    _ = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", [t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            attrs: {
                                href: "https://doc.holori.com",
                                "aria-role": "listitem"
                            }
                        }, [t("o-icon", {
                            staticClass: "mr-2",
                            attrs: {
                                icon: "book-open-variant"
                            }
                        }), e._v(" Documentation ")], 1), e.canHaveKeyboardShortcuts ? t("a", {
                            directives: [{
                                name: "keyboard-shortcut",
                                rawName: "v-keyboard-shortcut",
                                value: "Ctrl+/",
                                expression: "'Ctrl+/'"
                            }],
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            attrs: {
                                "aria-role": "listitem"
                            },
                            on: {
                                click: e.openKeyboardShortcuts
                            }
                        }, [t("o-icon", {
                            staticClass: "mr-2",
                            attrs: {
                                icon: "keyboard"
                            }
                        }), e._v(" Keyboard Shortcuts ")], 1) : e._e(), t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            attrs: {
                                href: "https://www.youtube.com/@holori_cloud",
                                target: "_blank",
                                "aria-role": "listitem"
                            }
                        }, [t("o-icon", {
                            staticClass: "mr-2",
                            attrs: {
                                icon: "youtube"
                            }
                        }), e._v(" YouTube tutorials ")], 1), t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            attrs: {
                                "aria-role": "listitem"
                            },
                            on: {
                                click: e.openCalendly
                            }
                        }, [t("o-icon", {
                            staticClass: "mr-2",
                            attrs: {
                                icon: "bulletin-board"
                            }
                        }), e._v(" Dedicated onboarding ")], 1), t("a", {
                            staticClass: "dropdown-item is-flex is-align-items-center is-whitespace-normal",
                            attrs: {
                                href: "https://holori.com/contact",
                                target: "_blank",
                                "aria-role": "listitem"
                            }
                        }, [t("o-icon", {
                            staticClass: "mr-2",
                            attrs: {
                                icon: "chat-question"
                            }
                        }), e._v(" Contact Us ")], 1)])
                    },
                    C = [],
                    k = {
                        props: {
                            canHaveKeyboardShortcuts: {
                                type: Boolean,
                                required: !0
                            }
                        },
                        methods: {
                            openCalendly() {
                                n.Z.dispatch("openCalendly")
                            },
                            openKeyboardShortcuts() {
                                n.Z.dispatch("openKeyboardShortcuts")
                            }
                        }
                    },
                    j = k,
                    S = (0, v.Z)(j, _, C, !1, null, null, null),
                    Z = S.exports,
                    T = {
                        components: {
                            HelpMenu: Z
                        },
                        props: {
                            displayNavigation: {
                                type: Boolean,
                                required: !0
                            },
                            navigationViews: {
                                type: Object,
                                required: !0
                            },
                            navigationSelectedView: {
                                type: String,
                                required: !0
                            },
                            canHaveKeyboardShortcuts: {
                                type: Boolean,
                                required: !0
                            }
                        },
                        computed: { ...(0, u.rn)(m.L, ["getUsername", "getPricingPlan"])
                        },
                        methods: {
                            gotoPage(e) {
                                this.$router.push({
                                    name: e
                                })
                            },
                            upgradePlan() {
                                n.Z.dispatch("upgradePricingPlan")
                            },
                            logout() {
                                n.Z.dispatch("logout")
                            }
                        }
                    },
                    D = T,
                    A = (0, v.Z)(D, b, w, !1, null, "17139e86", null),
                    I = A.exports,
                    R = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card",
                            staticStyle: {
                                width: "auto"
                            }
                        }, [t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Project history log ")]), t("o-button", {
                            staticClass: "ml-auto pl-4",
                            attrs: {
                                "icon-left": "close"
                            },
                            on: {
                                click: e.closePopup
                            }
                        })], 1), t("section", {
                            staticClass: "modal-card-body"
                        }, [t("o-field", [t("o-input", {
                            ref: "input",
                            attrs: {
                                type: "search",
                                rounded: "",
                                clearable: "",
                                placeholder: "Search by date or user"
                            }
                        })], 1), t("div", {
                            staticClass: "history-list overflow"
                        }, [t("o-table", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.data.length,
                                expression: "data.length"
                            }],
                            attrs: {
                                detailed: "",
                                striped: "",
                                selected: e.selectedRow,
                                data: e.data,
                                columns: e.columns,
                                "sticky-header": !0,
                                "is-row-selectable": e.canSelectRow,
                                "opened-detailed": e.openedDetails,
                                "detail-key": "index"
                            },
                            on: {
                                "details-open": e.selectRow
                            },
                            scopedSlots: e._u([{
                                key: "detail",
                                fn: function(s) {
                                    return [t("div", {
                                        staticClass: "is-flex is-justify-content-center"
                                    }, [t("img", {
                                        staticStyle: {
                                            "max-height": "200px"
                                        },
                                        attrs: {
                                            src: s.row.thumbnail,
                                            alt: "No humbnail available"
                                        }
                                    })]), e.history[s.row.index].changes.diagram ? t("o-button", {
                                        on: {
                                            click: function(t) {
                                                return e.compare(s.row)
                                            }
                                        }
                                    }, [e._v(" Compare ")]) : e._e()]
                                }
                            }])
                        }), t("o-loading", {
                            attrs: {
                                active: e.isLoading,
                                "full-page": !1
                            }
                        })], 1)], 1), t("footer", {
                            staticClass: "modal-card-foot is-justify-content-center"
                        }, [e.canAccessHistory ? [e.selectedRow ? t("o-button", {
                            attrs: {
                                variant: "primary",
                                "icon-left": "file-restore-outline"
                            },
                            on: {
                                click: e.restore
                            }
                        }, [e._v(" Restore selected version ")]) : t("p", [e._v(" You can select an history entry to restore it. ")])] : [t("p", [e._v(" You cannot restore history because you are using a Free plan. ")]), t("p", [e._v(" Please click the button below to upgrade to a superior plan. This will allow you to restore a history entry. ")]), t("QuotaUpgradeButton", {
                            attrs: {
                                redirect: ""
                            },
                            on: {
                                click: e.closePopup
                            }
                        })]], 2)])
                    },
                    x = [],
                    L = s(43261),
                    O = s.n(L),
                    $ = s(20679),
                    z = s(27200),
                    q = s(43853),
                    U = s(99996),
                    H = s(95605),
                    E = {
                        name: "ProjectHistoryPopup",
                        components: {
                            QuotaUpgradeButton: U.Z
                        },
                        data() {
                            return {
                                isLoading: !0,
                                data: [],
                                users: {},
                                selectedRow: null,
                                columns: [{
                                    field: "date",
                                    label: "Date",
                                    width: "225"
                                }, {
                                    field: "user",
                                    label: "User",
                                    width: "100"
                                }, {
                                    field: "changes",
                                    label: "Changes"
                                }],
                                changes: "",
                                openedDetails: []
                            }
                        },
                        computed: { ...(0, u.rn)($.i, ["history", "project"]),
                            ...(0, u.rn)(z.c, ["userID"]),
                            ...(0, u.rn)(q.P, ["comparingRow", "settings"]),
                            ...(0, u.rn)(m.L, ["getQuota", "getPricingPlan"]),
                            diagram() {
                                return JSON.parse(this.project.diagram)
                            },
                            projectID() {
                                return this.project.id
                            },
                            projectName() {
                                return this.project.name
                            },
                            canAccessHistory() {
                                return "free" !== this.getPricingPlan
                            }
                        },
                        async mounted() {
                            await this.getHistory(this.projectID), this.data = [];
                            for (let e = this.history ? .length - 1; e >= 0; e--) {
                                const t = this.history[e],
                                    s = {};
                                if (s.date = new Date(t.date).toLocaleString("en-US", {
                                        dateStyle: "medium",
                                        timeStyle: "medium"
                                    }), s.thumbnail = t.changes.thumbnail, s.index = e, e) {
                                    this.changes = "";
                                    for (const e of Object.keys(t.changes)) {
                                        const s = t.changes[e];
                                        "deleted" === e ? (this.changes += this.changes ? ", " : "", this.changes += s ? "project deleted" : "project restored") : "shared_with" === e ? (this.changes += this.changes ? ", " : "", this.changes += "shared list updated") : "favorite_of" === e ? this.changes += "" : (this.changes += this.changes ? ", " : "", this.changes += e + " updated")
                                    }
                                    s.changes = this.changes
                                } else s.changes = "Initial diagram";
                                if (t.user !== this.userID) {
                                    const e = await this.get(t.user);
                                    e.data ? .name ? s.user = e.data.name : s.user = t.user
                                } else s.user = "You";
                                this.data.push(s)
                            }
                            null !== this.comparingRow && (this.openedDetails = [this.comparingRow], this.selectedRow = this.data.find((e => e.index === this.comparingRow)), this.setComparingRow(null)), this.isLoading = !1
                        },
                        methods: { ...(0, u.nv)(m.L, ["get"]),
                            ...(0, u.nv)($.i, ["patch", "getHistory", "setAutosave"]),
                            ...(0, u.nv)(q.P, ["saveDiagram", "setSaved", "setComparing", "setComparingRow", "addUpdatedTerraformKey"]),
                            closePopup() {
                                this.$emit("close")
                            },
                            restore() {
                                const {
                                    diagram: e,
                                    thumbnail: t
                                } = this.history[this.selectedRow.index].changes;
                                n.Z.dispatch("reloadDiagram", e), this.patch({
                                    id: this.projectID,
                                    diagram: e,
                                    thumbnail: t
                                }).then((() => {
                                    this.closePopup(), this.toast({
                                        message: `Project "${this.projectName}" has been restored to previous version`,
                                        variant: "success"
                                    })
                                }))
                            },
                            canSelectRow(e) {
                                const {
                                    index: t
                                } = e;
                                return t < this.history.length - 1
                            },
                            selectRow(e) {
                                this.canSelectRow(e) && (this.selectedRow = e)
                            },
                            compareTwoDiagrams: H.L,
                            compare(e) {
                                const {
                                    graphInstance: t
                                } = window;
                                t.emit("canvas:click");
                                const s = JSON.parse(this.history[e.index].changes.diagram),
                                    r = O()(this.diagram);
                                this.compareTwoDiagrams(r, s, t, this.addUpdatedTerraformKey);
                                const i = [...t.getNodes(), ...t.getCombos(), ...t.getEdges()];
                                for (const o of i) o.enableCapture(!1);
                                this.setComparing(!0), this.setComparingRow(e.index), this.setAutosave(!1), this.closePopup()
                            }
                        }
                    },
                    N = E,
                    F = (0, v.Z)(N, R, x, !1, null, "2bcaee6d", null),
                    M = F.exports,
                    B = s(40905),
                    Q = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyboard-shortcuts is-relative is-border-radius-2xl p-5"
                        }, [t("p", {
                            staticClass: "mb-5"
                        }, [e._v(" Here are some shortcuts you might find useful on this part of the application. ")]), t("div", {
                            staticClass: "is-flex is-flex-wrap-wrap"
                        }, e._l(e.shortcuts, (function(s, r) {
                            return t("div", {
                                key: "shorcut" + r,
                                staticClass: "shortcut is-flex is-align-items-center mb-3"
                            }, [t("div", {
                                staticClass: "keys is-flex is-align-items-center"
                            }, e._l(s.keys, (function(s) {
                                return t("kbd", {
                                    key: s,
                                    staticClass: "key is-border-radius-2xs"
                                }, [e._v(" " + e._s(s) + " ")])
                            })), 0), t("span", {
                                staticClass: "ml-3"
                            }, [e._v(e._s(s.action))])])
                        })), 0), e._m(0)])
                    },
                    G = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("p", {
                            staticClass: "mt-4"
                        }, [e._v(" You can leave this overlay at any time by pressing "), t("kbd", {
                            staticClass: "key is-border-radius-2xs"
                        }, [e._v("escape")])])
                    }],
                    V = {
                        data() {
                            return {
                                projectShortcuts: [{
                                    keys: ["escape"],
                                    action: "Unselect"
                                }, {
                                    keys: ["delete"],
                                    action: "Delete selection"
                                }, {
                                    keys: ["mouse click"],
                                    action: "Select an element"
                                }, {
                                    keys: ["mouse drag"],
                                    action: "Move diagram or selection"
                                }, {
                                    keys: ["mouse right click"],
                                    action: "Open context menu"
                                }, {
                                    keys: ["mouse wheel up"],
                                    action: "Zoom in"
                                }, {
                                    keys: ["mouse wheel down"],
                                    action: "Zoom out"
                                }, {
                                    keys: ["shift", "mouse drag"],
                                    action: "Drag Selection"
                                }, {
                                    keys: ["alt", "mouse drag"],
                                    action: "Move selection to change group size"
                                }, {
                                    keys: ["shift", "mouse left click"],
                                    action: "Add or remove element to selection"
                                }, {
                                    keys: ["ctrl", "c"],
                                    action: "Copy selected elements"
                                }, {
                                    keys: ["ctrl", "v"],
                                    action: "Paste copied elements"
                                }, {
                                    keys: ["ctrl", "shift", "v"],
                                    action: "Paste copied elements without keeping context"
                                }, {
                                    keys: ["ctrl", "e"],
                                    action: "Create an edge"
                                }, {
                                    keys: ["ctrl", "g"],
                                    action: "Create a group from the selection"
                                }, {
                                    keys: ["ctrl", "d"],
                                    action: "Duplicate selection"
                                }, {
                                    keys: ["ctrl", "a"],
                                    action: "Select all"
                                }, {
                                    keys: ["ctrl", "j"],
                                    action: "Rearrange diagram"
                                }, {
                                    keys: ["ctrl", "s"],
                                    action: "Save diagram"
                                }, {
                                    keys: ["ctrl", "r"],
                                    action: "Reload diagram"
                                }, {
                                    keys: ["ctrl", "z"],
                                    action: "Undo"
                                }, {
                                    keys: ["ctrl", "y"],
                                    action: "Redo"
                                }, {
                                    keys: ["tab"],
                                    action: "Toggle left sidebar"
                                }, {
                                    keys: ["ctrl", "shift", "/"],
                                    action: "Toggle right sidebar"
                                }],
                                dashboardShortcuts: [{
                                    keys: ["ctrl", "right"],
                                    action: "Go to next category"
                                }]
                            }
                        },
                        computed: {
                            shortcuts() {
                                return this.$route.name.startsWith("Project") ? this.projectShortcuts : this.dashboardShortcuts
                            }
                        }
                    },
                    K = V,
                    Y = (0, v.Z)(K, Q, G, !1, null, "7f8ffd82", null),
                    W = Y.exports,
                    J = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card",
                            staticStyle: {
                                width: "auto"
                            }
                        }, [e._m(0), t("div", {
                            staticClass: "modal-card-body"
                        }, [e._v(" Are you sure you want to delete the provider account "), t("strong", [e._v(" " + e._s(e.deleting ? .name) + " ")]), e._v(" ? ")]), t("footer", {
                            staticClass: "modal-card-foot"
                        }, [t("o-button", {
                            attrs: {
                                variant: "primary",
                                "icon-left": "close",
                                disabled: e.loading
                            },
                            on: {
                                click: e.closePopup
                            }
                        }, [e._v(" Cancel ")]), t("o-button", {
                            staticClass: "ml-auto",
                            attrs: {
                                variant: "danger",
                                "icon-left": "delete",
                                disabled: e.loading
                            },
                            on: {
                                click: e.confirmDeletion
                            }
                        }, [e._v(" Confirm deletion ")])], 1)])
                    },
                    X = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Delete provider account ")])])
                    }],
                    ee = s(45609),
                    te = {
                        data() {
                            return {
                                loading: !1
                            }
                        },
                        computed: { ...(0, u.rn)(ee.w, ["deleting"])
                        },
                        methods: { ...(0, u.nv)(ee.w, ["deleteProviderAccount", "getProviderAccounts"]),
                            ...(0, u.nv)(m.L, ["refresh"]),
                            confirmDeletion() {
                                this.loading = !0;
                                const {
                                    id: e,
                                    name: t
                                } = this.deleting;
                                this.deleteProviderAccount(e).then((() => {
                                    this.toast({
                                        message: `Provider account "${t}" has been deleted.`,
                                        variant: "success"
                                    }), this.refresh()
                                })).then((() => {
                                    this.loading = !1, this.getProviderAccounts(), this.closePopup();
                                    const t = this.$route;
                                    "ProviderAccount" === t.name && t.params.providerID === e && this.$router.replace({
                                        name: "Overview"
                                    })
                                }))
                            },
                            closePopup() {
                                this.$emit("close")
                            }
                        }
                    },
                    se = te,
                    re = (0, v.Z)(se, J, X, !1, null, null, null),
                    ie = re.exports,
                    oe = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card",
                            staticStyle: {
                                width: "auto"
                            }
                        }, [e._m(0), t("div", {
                            staticClass: "modal-card-body"
                        }, [e._v(" Are you sure you want to delete the team "), t("strong", [e._v(" " + e._s(e.deleting ? .name) + " ")]), e._v(" ? ")]), t("footer", {
                            staticClass: "modal-card-foot"
                        }, [t("o-button", {
                            attrs: {
                                variant: "primary",
                                "icon-left": "close",
                                disabled: e.loading
                            },
                            on: {
                                click: e.closePopup
                            }
                        }, [e._v(" Cancel ")]), t("o-button", {
                            staticClass: "ml-auto",
                            attrs: {
                                variant: "danger",
                                "icon-left": "delete",
                                disabled: e.loading
                            },
                            on: {
                                click: e.confirmDeletion
                            }
                        }, [e._v(" Confirm deletion ")])], 1)])
                    },
                    ae = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Delete pteam ")])])
                    }],
                    ne = s(17843),
                    ce = {
                        data() {
                            return {
                                loading: !1
                            }
                        },
                        computed: { ...(0, u.rn)(ne.A, ["deleting"])
                        },
                        methods: { ...(0, u.nv)(ne.A, ["delete", "getPage"]),
                            ...(0, u.nv)(m.L, ["refresh"]),
                            confirmDeletion() {
                                this.loading = !0;
                                const {
                                    id: e,
                                    name: t
                                } = this.deleting;
                                this.delete(e).then((() => {
                                    this.toast({
                                        message: `Team "${t}" has been deleted.`,
                                        variant: "success"
                                    }), this.refresh()
                                })).then((() => {
                                    this.loading = !1, this.getPage(), this.closePopup();
                                    const t = this.$route;
                                    "Team" === t.name && t.params.teamID === e && this.$router.replace({
                                        name: "Overview"
                                    })
                                }))
                            },
                            closePopup() {
                                this.$emit("close")
                            }
                        }
                    },
                    le = ce,
                    ue = (0, v.Z)(le, oe, ae, !1, null, null, null),
                    de = ue.exports,
                    he = {
                        name: "NavBar",
                        components: {
                            UserMenu: P,
                            MobileMenu: I,
                            HelpMenu: Z,
                            ProjectHistory: M,
                            ShareProject: B.Z,
                            KeyboardShortcuts: W,
                            DeleteProviderAccount: ie,
                            DeleteTeam: de
                        },
                        data() {
                            return {
                                customPageTitle: "",
                                darkTheme: !1,
                                darkThemeAvailable: !1,
                                publicPath: "/",
                                viewsProject: {
                                    Design: "pencil-ruler",
                                    Estimate: "calculator",
                                    Export: "export-variant"
                                },
                                viewsProjectDiff: {
                                    Visualize: "pencil-ruler",
                                    Compare: "compare",
                                    Diff: "vector-difference"
                                },
                                viewsProviderAccountDiff: {
                                    Visualize: "pencil-ruler",
                                    Compare: "compare",
                                    Diff: "vector-difference",
                                    Export: "export-variant"
                                },
                                viewsCompare: {
                                    Compute: "calculator",
                                    Storage: "database",
                                    Network: "network"
                                },
                                openHistory: !1,
                                openShareProject: !1,
                                mobileDropdown: !1,
                                calendlyOpen: !1,
                                keyboardShortcutsOpen: !1
                            }
                        },
                        computed: { ...(0, u.rn)(z.c, ["userID", "isLoggedIn"]),
                            ...(0, u.rn)($.i, ["project"]),
                            ...(0, u.rn)(ne.A, {
                                teams: "teams",
                                deletingTeam: "deleting"
                            }),
                            ...(0, u.rn)(ee.w, {
                                deletingProviderAccount: "deleting"
                            }),
                            pageTitle() {
                                return this.$route.meta.title || this.customPageTitle
                            },
                            selectedView() {
                                const {
                                    name: e,
                                    params: t
                                } = this.$route;
                                if (this.isProjectDiff) return e ? .replace("ProjectDiff", "").toLowerCase();
                                if (this.isProviderAccountDiff) return e ? .replace("ProviderAccountDiff", "").toLowerCase();
                                if (this.isProject) return e ? .replace("Project", "").toLowerCase(); {
                                    const {
                                        tab: e
                                    } = t;
                                    return e || "compute"
                                }
                            },
                            isProject() {
                                const {
                                    name: e
                                } = this.$route;
                                return e && "Projects" !== e && e.startsWith("Project")
                            },
                            isProjectDiff() {
                                const {
                                    name: e
                                } = this.$route;
                                return e && e.startsWith("ProjectDiff")
                            },
                            isProviderAccountDiff() {
                                const {
                                    name: e
                                } = this.$route;
                                return e && e.startsWith("ProviderAccountDiff")
                            },
                            isProjects() {
                                return "Projects" === this.$route.name
                            },
                            isCompare() {
                                return "Compare" === this.$route.name
                            },
                            isProviderOffer() {
                                return "ProviderOffer" === this.$route.name
                            },
                            views() {
                                return this.isCompare ? this.viewsCompare : this.isProjectDiff ? this.viewsProjectDiff : this.isProviderAccountDiff ? this.viewsProviderAccountDiff : this.isProject ? this.viewsProject : {}
                            },
                            canHaveKeyboardShortcuts() {
                                return this.isProject || this.isProjects
                            },
                            getLogoRedirectURL() {
                                return this.isLoggedIn ? this.$router.resolve({
                                    name: "Overview"
                                }).href : "/"
                            }
                        },
                        created() {
                            n.Z.on("setPageTitle", this.updatePageTitle), n.Z.on("openKeyboardShortcuts", this.openKeyboardShortcuts), n.Z.on("openHistory", this.showHistory)
                        },
                        beforeDestroy() {
                            n.Z.remove("setPageTitle", this.updatePageTitle), n.Z.remove("openKeyboardShortcuts", this.openKeyboardShortcuts), n.Z.remove("openHistory", this.showHistory)
                        },
                        methods: { ...(0, u.nv)(ne.A, {
                                setDeletingTeam: "setDeleting",
                                getPage: "getPage"
                            }),
                            ...(0, u.nv)(ee.w, {
                                setDeletingProviderAccount: "setDeleting"
                            }),
                            ...(0, u.nv)($.i, ["declineInvitation"]),
                            updatePageTitle(e) {
                                this.customPageTitle = e
                            },
                            logout() {
                                n.Z.dispatch("logout")
                            },
                            mobileMenuToggle() {
                                this.mobileDropdown = !this.mobileDropdown
                            },
                            showHistory() {
                                this.openHistory = !0
                            },
                            openKeyboardShortcuts() {
                                this.keyboardShortcutsOpen = !0
                            },
                            exportProj() {
                                this.$router.push({
                                    name: "ProjectExport",
                                    params: {
                                        id: this.$route.params.id
                                    }
                                }).catch((() => {}))
                            },
                            shareProject() {
                                this.getPage(), this.openShareProject = !0
                            },
                            async leaveProject() {
                                await this.declineInvitation(this.project.id), this.gotoPage("Projects")
                            },
                            gotoPage(e) {
                                this.$router.push({
                                    name: e
                                }).catch((() => {}))
                            },
                            chooseView(e) {
                                const t = e.target.innerText;
                                let s = {};
                                if (this.isCompare) s = {
                                    name: "Compare",
                                    params: {
                                        tab: t.toLowerCase()
                                    }
                                };
                                else if (this.isProjectDiff) s = {
                                    name: `ProjectDiff${t}`
                                };
                                else if (this.isProviderAccountDiff) {
                                    const e = this.$route.query;
                                    s = {
                                        name: `ProviderAccountDiff${t}`,
                                        query: e
                                    }
                                } else this.isProject && (s = {
                                    name: `Project${t}`
                                });
                                this.$router.push(s).catch((() => {}))
                            },
                            resetZoom() {
                                n.Z.dispatch("resetZoom")
                            },
                            gotoDesign() {
                                "Design" !== this.selectedView && this.gotoPage("ProjectDesign")
                            },
                            goToTeam(e) {
                                this.$router.push({
                                    name: "Team",
                                    params: {
                                        teamID: e
                                    }
                                }).catch((() => {}))
                            },
                            showDiagramFullscreen() {
                                this.gotoDesign(), this.$nextTick((() => n.Z.dispatch("showDiagramFullscreen")))
                            },
                            saveDiagramImage(e) {
                                this.gotoDesign(), this.$nextTick((() => {
                                    "svg" === e ? n.Z.dispatch("exportSvg") : n.Z.dispatch("exportImage")
                                }))
                            }
                        }
                    },
                    pe = he,
                    me = (0, v.Z)(pe, c, l, !1, null, "7aabc814", null),
                    ge = me.exports,
                    fe = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card mx-auto"
                        }, [t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Importing project… ")]), t("o-button", {
                            staticClass: "ml-auto pl-4",
                            attrs: {
                                "icon-left": "close"
                            },
                            on: {
                                click: e.closePopup
                            }
                        })], 1), t("section", {
                            staticClass: "modal-card-body"
                        }, [!e.timeout && e.importing ? [t("svg", {
                            staticClass: "is-block mx-auto mb-5",
                            attrs: {
                                id: "coffee",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512"
                            }
                        }, [t("path", {
                            staticClass: "steam steam1",
                            attrs: {
                                d: "M221.4,65.5l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5\n          c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1\n          c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C236.4,110.7,236.4,84.4,221.4,65.5z"
                            }
                        }), t("path", {
                            staticClass: "steam steam2",
                            attrs: {
                                d: "M274,86.9l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5\n          c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1\n          c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C289,132.1,289,105.7,274,86.9z"
                            }
                        }), t("path", {
                            staticClass: "steam steam3",
                            attrs: {
                                d: "M168.8,86.9l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5\n          c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1\n          c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C183.8,132.1,183.8,105.7,168.8,86.9z"
                            }
                        }), t("g", [t("path", {
                            staticClass: "coffee-cup",
                            attrs: {
                                d: "M489.5,209h-77.8v-20.1c0-5.2-4.3-9.5-9.5-9.5h-205c-5.2,0-9.5,4.2-9.5,9.5c0,5.2,4.3,9.5,9.5,9.5h195.5v72.8\n            c0,63.9-34.1,123.3-89.2,155.7H121.2C66.1,394.5,32,335.1,32,271.2v-72.8h63.6c5.2,0,9.5-4.2,9.5-9.5c0-5.2-4.3-9.5-9.5-9.5H22.5\n            c-5.2,0-9.5,4.2-9.5,9.5v82.3c0,35.9,9.6,71.1,27.9,101.7c12.3,20.7,28.3,39,47,53.9H22.5c-5.2,0-9.5,4.2-9.5,9.5\n            c0,34.5,28.1,62.6,62.6,62.6h296.2c34.5,0,62.6-28.1,62.6-62.6c0-5.2-4.3-9.5-9.5-9.5h-88.1c17.2-13.8,32.1-30.4,44-49h26.8\n            c50.4,0,91.4-41,91.4-91.4v-67.9C499,213.3,494.8,209,489.5,209z M414.4,445.8c-4.3,19.5-21.8,34.2-42.6,34.2H75.6\n            c-20.8,0-38.3-14.6-42.6-34.2h85.7H306H414.4z M411.7,271.2V266H442v20.4c0,19-15.5,34.5-34.5,34.5h-2.2\n            C409.5,304.7,411.7,288,411.7,271.2z M480,286.4c0,40-32.5,72.5-72.5,72.5h-16.2c3-6.2,5.7-12.5,8.1-19h8.1\n            c29.5,0,53.5-24,53.5-53.5v-29.9c0-5.2-4.3-9.5-9.5-9.5h-39.9v-19H480V286.4z"
                            }
                        }), t("path", {
                            staticClass: "coffee-cup",
                            attrs: {
                                d: "M148.9,198.4c2.5,0,4.9-1,6.7-2.8c1.8-1.8,2.8-4.2,2.8-6.7c0-2.5-1-4.9-2.8-6.7c-1.8-1.8-4.2-2.8-6.7-2.8s-4.9,1-6.7,2.8\n            c-1.8,1.8-2.8,4.2-2.8,6.7s1,4.9,2.8,6.7C144,197.4,146.4,198.4,148.9,198.4z"
                            }
                        }), t("path", {
                            staticClass: "coffee-cup",
                            attrs: {
                                d: "M321.4,379.6c28.4-28.7,44.7-68.2,44.7-108.4c0-5.2-4.3-9.5-9.5-9.5s-9.5,4.2-9.5,9.5c0,35.2-14.3,69.9-39.2,95\n            c-3.7,3.7-3.7,9.7,0.1,13.4c1.9,1.8,4.3,2.8,6.7,2.8C317.1,382.4,319.5,381.4,321.4,379.6z"
                            }
                        }), t("path", {
                            staticClass: "coffee-cup",
                            attrs: {
                                d: "M283.5,406.2c1.6,0,3.2-0.4,4.7-1.2l0.2-0.1c4.6-2.6,6.2-8.4,3.6-12.9c-2.6-4.6-8.4-6.2-12.9-3.6l-0.2,0.1\n            c-4.6,2.6-6.2,8.4-3.6,12.9C277,404.5,280.2,406.2,283.5,406.2z"
                            }
                        })])]), t("p", {
                            staticClass: "mb-3"
                        }, [e._v(" Your project is being imported. Depending on how many resources & regions you have selected, this might take a dozen of minutes. ")]), t("p", {
                            staticClass: "mb-5"
                        }, [e._v(" We suggest you grab a cup of coffee or tea and relax while we are taking care of everything… ")]), t("p", [e._v(' If you close this popup, go to "My Projects" to find your latest import when it\'s ready. ')])] : e._e(), e.timeout ? [t("o-notification", {
                            attrs: {
                                type: "warning",
                                variant: "warning"
                            }
                        }, [t("p", [e._v(" Your import is taking longer than expected, please verify your access and contact us if you are getting any further compations. ")])])] : e._e()], 2), t("footer", {
                            staticClass: "card-footer"
                        }, [t("o-button", {
                            staticClass: "card-footer-item is-border-top-radius-none",
                            attrs: {
                                variant: "primary"
                            },
                            on: {
                                click: e.closePopup
                            }
                        }, [e._v(" OK ")])], 1)])
                    },
                    ve = [],
                    ye = s(4669),
                    Pe = {
                        name: "ImportingProjectModal",
                        data() {
                            return {
                                publicPath: "/",
                                importing: !0,
                                timeout: !1
                            }
                        },
                        computed: { ...(0, u.rn)($.i, ["importingProjectID"])
                        },
                        created() {
                            this.watchImport(), this.stopImportAfterTimeout()
                        },
                        destroyed() {
                            this.stopTimers()
                        },
                        methods: { ...(0, u.nv)($.i, ["setImportingProjectID"]),
                            watchImport() {
                                this.refreshImportingTimeout = setInterval((() => {
                                    ye.Z.get(this.importingProjectID).then((({
                                        data: e
                                    }) => {
                                        this.importing = e.importing, this.importing || this.importSuccess(), this.importError(e)
                                    })).catch((e => {
                                        const {
                                            response: t
                                        } = e;
                                        t && 404 === t.status && this.importError({
                                            importing: !1,
                                            deleted: !0
                                        })
                                    }))
                                }), 5e3)
                            },
                            stopImportAfterTimeout() {
                                this.stopTimeout = setTimeout(this.importTimeout, 36e5)
                            },
                            importTimeout() {
                                this.timeout = !0, this.stopTimers()
                            },
                            stopTimers() {
                                clearInterval(this.refreshImportingTimeout), clearTimeout(this.stopTimeout)
                            },
                            closePopup() {
                                this.stopTimers(), this.setImportingProjectID(null), this.$emit("close")
                            },
                            getProjectURL() {
                                return this.$router.resolve({
                                    name: "ProjectDesign",
                                    params: {
                                        id: this.importingProjectID
                                    }
                                }).href
                            },
                            importSuccess() {
                                const e = this.getProjectURL();
                                this.stopTimers(), this.closePopup(), this.toast({
                                    message: `Your import is completed!<br><a href="${e}">Click here</a> to open it.`,
                                    variant: "success",
                                    duration: 3e4
                                })
                            },
                            importError(e) {
                                const {
                                    importing: t,
                                    deleted: s
                                } = e;
                                t && !s || (this.stopTimers(), this.closePopup(), s && this.toast({
                                    message: "There was an error while importing your project.",
                                    variant: "warning"
                                }))
                            }
                        }
                    },
                    be = Pe,
                    we = (0, v.Z)(be, fe, ve, !1, null, null, null),
                    _e = we.exports,
                    Ce = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card mx-auto"
                        }, [t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Syncing account… ")]), t("o-button", {
                            staticClass: "ml-auto pl-4",
                            attrs: {
                                "icon-left": "close"
                            },
                            on: {
                                click: e.closePopup
                            }
                        })], 1), t("section", {
                            staticClass: "modal-card-body"
                        }, [!e.timeout && e.importing ? [t("svg", {
                            staticClass: "is-block mx-auto mb-5",
                            attrs: {
                                id: "coffee",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512"
                            }
                        }, [t("path", {
                            staticClass: "steam steam1",
                            attrs: {
                                d: "M221.4,65.5l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5\n          c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1\n          c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C236.4,110.7,236.4,84.4,221.4,65.5z"
                            }
                        }), t("path", {
                            staticClass: "steam steam2",
                            attrs: {
                                d: "M274,86.9l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5\n          c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1\n          c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C289,132.1,289,105.7,274,86.9z"
                            }
                        }), t("path", {
                            staticClass: "steam steam3",
                            attrs: {
                                d: "M168.8,86.9l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5\n          c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1\n          c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C183.8,132.1,183.8,105.7,168.8,86.9z"
                            }
                        }), t("g", [t("path", {
                            staticClass: "coffee-cup",
                            attrs: {
                                d: "M489.5,209h-77.8v-20.1c0-5.2-4.3-9.5-9.5-9.5h-205c-5.2,0-9.5,4.2-9.5,9.5c0,5.2,4.3,9.5,9.5,9.5h195.5v72.8\n            c0,63.9-34.1,123.3-89.2,155.7H121.2C66.1,394.5,32,335.1,32,271.2v-72.8h63.6c5.2,0,9.5-4.2,9.5-9.5c0-5.2-4.3-9.5-9.5-9.5H22.5\n            c-5.2,0-9.5,4.2-9.5,9.5v82.3c0,35.9,9.6,71.1,27.9,101.7c12.3,20.7,28.3,39,47,53.9H22.5c-5.2,0-9.5,4.2-9.5,9.5\n            c0,34.5,28.1,62.6,62.6,62.6h296.2c34.5,0,62.6-28.1,62.6-62.6c0-5.2-4.3-9.5-9.5-9.5h-88.1c17.2-13.8,32.1-30.4,44-49h26.8\n            c50.4,0,91.4-41,91.4-91.4v-67.9C499,213.3,494.8,209,489.5,209z M414.4,445.8c-4.3,19.5-21.8,34.2-42.6,34.2H75.6\n            c-20.8,0-38.3-14.6-42.6-34.2h85.7H306H414.4z M411.7,271.2V266H442v20.4c0,19-15.5,34.5-34.5,34.5h-2.2\n            C409.5,304.7,411.7,288,411.7,271.2z M480,286.4c0,40-32.5,72.5-72.5,72.5h-16.2c3-6.2,5.7-12.5,8.1-19h8.1\n            c29.5,0,53.5-24,53.5-53.5v-29.9c0-5.2-4.3-9.5-9.5-9.5h-39.9v-19H480V286.4z"
                            }
                        }), t("path", {
                            staticClass: "coffee-cup",
                            attrs: {
                                d: "M148.9,198.4c2.5,0,4.9-1,6.7-2.8c1.8-1.8,2.8-4.2,2.8-6.7c0-2.5-1-4.9-2.8-6.7c-1.8-1.8-4.2-2.8-6.7-2.8s-4.9,1-6.7,2.8\n            c-1.8,1.8-2.8,4.2-2.8,6.7s1,4.9,2.8,6.7C144,197.4,146.4,198.4,148.9,198.4z"
                            }
                        }), t("path", {
                            staticClass: "coffee-cup",
                            attrs: {
                                d: "M321.4,379.6c28.4-28.7,44.7-68.2,44.7-108.4c0-5.2-4.3-9.5-9.5-9.5s-9.5,4.2-9.5,9.5c0,35.2-14.3,69.9-39.2,95\n            c-3.7,3.7-3.7,9.7,0.1,13.4c1.9,1.8,4.3,2.8,6.7,2.8C317.1,382.4,319.5,381.4,321.4,379.6z"
                            }
                        }), t("path", {
                            staticClass: "coffee-cup",
                            attrs: {
                                d: "M283.5,406.2c1.6,0,3.2-0.4,4.7-1.2l0.2-0.1c4.6-2.6,6.2-8.4,3.6-12.9c-2.6-4.6-8.4-6.2-12.9-3.6l-0.2,0.1\n            c-4.6,2.6-6.2,8.4-3.6,12.9C277,404.5,280.2,406.2,283.5,406.2z"
                            }
                        })])]), t("p", {
                            staticClass: "mb-3"
                        }, [e._v(" Your infrastructure is being imported. This process usually takes between 10-40 min depending on the size of your infrastructure. ")]), t("p", {
                            staticClass: "mb-5"
                        }, [e._v(" We suggest you grab a cup of coffee or tea and relax while we are taking care of everything… ")]), t("p", [e._v(' If you close this popup, go to "Provider Accounts" to find your account when it\'s ready. ')])] : e._e(), e.timeout ? [t("o-notification", {
                            attrs: {
                                type: "warning",
                                variant: "warning"
                            }
                        }, [t("p", [e._v(" Your import is taking longer than expected, please verify your access and contact us if you are getting any further compations. ")])])] : e._e()], 2), t("footer", {
                            staticClass: "card-footer"
                        }, [t("o-button", {
                            staticClass: "card-footer-item is-border-top-radius-none",
                            attrs: {
                                variant: "primary"
                            },
                            on: {
                                click: e.closePopup
                            }
                        }, [e._v(" OK ")])], 1)])
                    },
                    ke = [],
                    je = s(2228),
                    Se = {
                        name: "ImportingProjectModal",
                        data() {
                            return {
                                publicPath: "/",
                                importing: !0,
                                timeout: !1
                            }
                        },
                        computed: { ...(0, u.rn)(ee.w, ["syncing"])
                        },
                        created() {
                            this.watchImport(), this.stopImportAfterTimeout()
                        },
                        destroyed() {
                            this.stopTimers()
                        },
                        methods: { ...(0, u.nv)(ee.w, ["setSyncing"]),
                            watchImport() {
                                this.refreshImportingTimeout = setInterval((() => {
                                    je.Z.getSync(this.syncing).then((({
                                        data: e
                                    }) => {
                                        null !== e.last_sync_date && this.importSuccess()
                                    }))
                                }), 6e4)
                            },
                            stopImportAfterTimeout() {
                                this.stopTimeout = setTimeout(this.importTimeout, 36e5)
                            },
                            importTimeout() {
                                this.timeout = !0, this.stopTimers()
                            },
                            stopTimers() {
                                clearInterval(this.refreshImportingTimeout), clearTimeout(this.stopTimeout)
                            },
                            closePopup() {
                                this.stopTimers(), this.setSyncing(null), this.$emit("close")
                            },
                            getProviderAccountURL() {
                                return this.$router.resolve({
                                    name: "ProviderAccount",
                                    params: {
                                        providerID: this.syncing
                                    }
                                }).href
                            },
                            importSuccess() {
                                const e = this.getProviderAccountURL();
                                this.stopTimers(), this.closePopup(), this.toast({
                                    message: `Your import is completed!<br><a href="${e}">Click here</a> to open it.`,
                                    variant: "success",
                                    duration: 3e4
                                })
                            }
                        }
                    },
                    Ze = Se,
                    Te = (0, v.Z)(Ze, Ce, ke, !1, null, null, null),
                    De = Te.exports,
                    Ae = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card mx-auto"
                        }, [t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Install GitHub app ")]), t("o-button", {
                            staticClass: "ml-auto pl-4",
                            attrs: {
                                "icon-left": "close"
                            },
                            on: {
                                click: e.closePopup
                            }
                        })], 1), t("section", {
                            staticClass: "modal-card-body"
                        }, [t("p", {
                            staticClass: "has-text-centered"
                        }, [e._v(" You are trying to install the Holori GitHub App. In order to start the process, we first need you to connect your GitHub account to Holori. ")]), t("div", {
                            staticClass: "is-flex is-justify-content-center my-3"
                        }, [t("SSOButton", {
                            attrs: {
                                provider: {
                                    id: "github",
                                    name: "Login with GitHub"
                                }
                            },
                            on: {
                                click: e.logout
                            }
                        })], 1), t("p", {
                            staticClass: "has-text-centered"
                        }, [e._v(" Once done, you can come back here and start the Holori GitHub App installation. ")])]), t("footer", {
                            staticClass: "card-footer"
                        }, [t("o-button", {
                            staticClass: "card-footer-item is-border-top-radius-none",
                            attrs: {
                                variant: "primary"
                            },
                            on: {
                                click: e.closePopup
                            }
                        }, [e._v(" OK ")])], 1)])
                    },
                    Ie = [],
                    Re = s(28079),
                    xe = {
                        name: "ImportingProjectModal",
                        components: {
                            SSOButton: Re.Z
                        },
                        methods: {
                            closePopup() {
                                this.$emit("close")
                            },
                            logout(e) {
                                e.preventDefault(), this.closePopup(), window.localStorage.setItem("installGithubApp", "true"), n.Z.dispatch("logout", {
                                    sso: "github"
                                })
                            }
                        }
                    },
                    Le = xe,
                    Oe = (0, v.Z)(Le, Ae, Ie, !1, null, null, null),
                    $e = Oe.exports,
                    ze = function() {
                        var e = this;
                        e._self._c;
                        return e._m(0)
                    },
                    qe = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card mx-auto"
                        }, [t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Install GitHub app ")])]), t("section", {
                            staticClass: "modal-card-body"
                        }, [t("p", {
                            staticClass: "has-text-centered"
                        }, [e._v(" Redirecting you to GitHub App installation… ")])])])
                    }],
                    Ue = {
                        name: "ImportingProjectModal",
                        mounted() {
                            setTimeout((() => {
                                document.getElementById("github-app-install-link").click(), window.localStorage.removeItem("installGithubApp")
                            }), 1e3)
                        }
                    },
                    He = Ue,
                    Ee = (0, v.Z)(He, ze, qe, !1, null, null, null),
                    Ne = Ee.exports,
                    Fe = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "modal-card",
                            staticStyle: {
                                width: "auto"
                            }
                        }, [e._m(0), t("section", {
                            staticClass: "modal-card-body is-relative"
                        }, [t("o-loading", {
                            attrs: {
                                active: e.loading,
                                "full-page": !1
                            }
                        }), t("div", {
                            ref: "calendly",
                            staticClass: "calendly-inline-widget",
                            staticStyle: {
                                "min-width": "320px",
                                height: "600px"
                            },
                            attrs: {
                                "data-url": "https://calendly.com/holori/15min"
                            }
                        })], 1), t("footer", {
                            staticClass: "modal-card-foot"
                        }, [t("o-button", {
                            staticClass: "ml-auto",
                            attrs: {
                                variant: "primary",
                                "icon-left": "close"
                            },
                            on: {
                                click: function(t) {
                                    return e.$emit("close")
                                }
                            }
                        }, [e._v(" close ")])], 1)])
                    },
                    Me = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("header", {
                            staticClass: "modal-card-head"
                        }, [t("p", {
                            staticClass: "modal-card-title"
                        }, [e._v(" Get a dedicated onboarding ")])])
                    }],
                    Be = {
                        name: "CalendlyModal",
                        data() {
                            return {
                                loading: !0
                            }
                        },
                        mounted() {
                            const e = document.createElement("script");
                            e.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js"), e.onload = () => {
                                this.$refs.calendly.querySelector("iframe").onload = () => {
                                    setTimeout((() => {
                                        this.loading = !1
                                    }), 500)
                                }
                            }, document.head.appendChild(e)
                        }
                    },
                    Qe = Be,
                    Ge = (0, v.Z)(Qe, Fe, Me, !1, null, "cede1b3c", null),
                    Ve = Ge.exports,
                    Ke = s(92824),
                    Ye = s(87523);
                const We = ["Login", "Register", "ResetPassword", "ChangePassword", "ConnectSSO", "VerifyAccount", "Onboarding", "Pricing"];
                var Je = {
                        name: "App",
                        metaInfo: {
                            title: "Home",
                            titleTemplate: "Holori - %s"
                        },
                        components: {
                            NavBar: ge,
                            ImportingProjectModal: _e,
                            SyncingAccountModal: De,
                            GithubHelpModal: $e,
                            GithubInstallModal: Ne,
                            CalendlyModal: Ve
                        },
                        data() {
                            return {
                                root: null,
                                github: {
                                    help: !1,
                                    install: !1
                                },
                                isPageLoading: !1,
                                calendlyOpen: !1
                            }
                        },
                        computed: { ...(0, u.rn)(z.c, ["userID"]),
                            ...(0, u.rn)($.i, ["importingProjectID"]),
                            ...(0, u.rn)(ee.w, ["syncing"]),
                            ...(0, u.rn)(m.L, ["getGithubID", "hasPassedOnboarding"]),
                            currentPage() {
                                return this.$route
                            },
                            displayNavBar() {
                                return !We.includes(this.currentPage.name)
                            }
                        },
                        watch: {
                            getGithubID(e) {
                                e && (this.proceedToGitHubAppInstall(), this.getGithubUserAccount().then((() => {
                                    this.getGithubOrganizations()
                                })))
                            },
                            "$route.query.connect_github" (e) {
                                e && (n.Z.dispatch("openGithubAppHelp"), this.$router.replace({
                                    query: null
                                }))
                            },
                            userID(e) {
                                e && this.initUserData(this.userID)
                            }
                        },
                        beforeDestroy() {
                            n.Z.remove("logout"), n.Z.remove("openGithubAppHelp"), n.Z.remove("openCalendly", this.openCalendly)
                        },
                        created() {
                            this.getProvidersData(), this.getPricingPlans(), !this.user && this.userID && this.initUserData(this.userID), n.Z.on("openCalendly", this.openCalendly)
                        },
                        mounted() {
                            n.Z.on("startGlobalLoading", (() => {
                                this.isPageLoading = !0
                            })), n.Z.on("stopGlobalLoading", (() => {
                                this.isPageLoading = !1
                            })), n.Z.on("logout", (e => {
                                this.logout(e)
                            })), n.Z.on("openGithubAppHelp", (() => {
                                this.github.help = !0
                            })), this.root = document.documentElement, this.root.style.setProperty("--is-dark-theme", !1), this.root.setAttribute("data-theme", "light"), this.checkGitHubInstall()
                        },
                        methods: { ...(0, u.nv)(z.c, {
                                performLogout: "logout"
                            }),
                            ...(0, u.nv)(m.L, ["initUserData"]),
                            ...(0, u.nv)(Ke.G, ["getProvidersData", "getAllRegions", "getPricingPlans"]),
                            ...(0, u.nv)(Ye.H, {
                                getGithubUserAccount: "getUserAccount",
                                getGithubOrganizations: "getOrganizations"
                            }),
                            ...(0, u.nv)(ee.w, ["setSyncing"]),
                            logout(e = {}) {
                                this.performLogout().catch((() => {})).finally((() => {
                                    this.$router.push({
                                        path: "/",
                                        query: e
                                    }).catch((() => {}))
                                }))
                            },
                            setTheme(e) {
                                this.root.setAttribute("data-theme", e ? "dark" : "light")
                            },
                            importingModalClosed() {
                                n.Z.dispatch("importingModalClosed")
                            },
                            checkGitHubInstall() {
                                const {
                                    installation_id: e,
                                    setup_action: t
                                } = this.$route.query;
                                "install" === t && e && (this.toast({
                                    variant: "success",
                                    message: "Thank you for installing Holori GitHub App! You should now see your organizations on the left."
                                }), this.$router.replace({
                                    query: null
                                }))
                            },
                            proceedToGitHubAppInstall() {
                                this.getGithubID && this.hasPassedOnboarding && "true" === window.localStorage.getItem("installGithubApp") && (this.github.install = !0)
                            },
                            openCalendly() {
                                this.calendlyOpen = !0
                            }
                        }
                    },
                    Xe = Je,
                    et = (0, v.Z)(Xe, o, a, !1, null, null, null),
                    tt = et.exports,
                    st = s(80276);
                s(99096), s(38010), s(92259), s(4553);
                const rt = (0, u.WB)();
                rt.use(st.Z);
                var it = rt,
                    ot = s(36763),
                    at = s(58661),
                    nt = s(42241),
                    ct = s(80167);
                i["default"].use(nt.ZP);
                const lt = [{
                        path: "/offers/:providerName/:productName",
                        name: "ProviderOffer",
                        component: () => s.e(412).then(s.bind(s, 93171)),
                        props: !0,
                        meta: {
                            title: "Offers"
                        }
                    }, {
                        path: "/offers/:providerName",
                        name: "Provider",
                        component: () => s.e(412).then(s.bind(s, 81420)),
                        props: !0,
                        meta: {
                            title: "Provider"
                        }
                    }, {
                        path: "/compare/:tab?",
                        name: "Compare",
                        props: e => ({
                            tab: e.params.tab || "compute"
                        }),
                        component: () => Promise.all([s.e(361), s.e(888)]).then(s.bind(s, 89714)),
                        meta: {
                            title: "Compare"
                        }
                    }, {
                        path: "/login",
                        name: "Login",
                        component: () => Promise.all([s.e(361), s.e(535)]).then(s.bind(s, 53068)),
                        alias: ["/"],
                        meta: {
                            title: "Login"
                        }
                    }, {
                        path: "/authorize/:provider",
                        name: "Authorize",
                        component: () => s.e(818).then(s.bind(s, 59597)),
                        meta: {
                            title: "Login"
                        }
                    }, {
                        path: "/register",
                        name: "Register",
                        component: () => Promise.all([s.e(361), s.e(535)]).then(s.bind(s, 53068)),
                        meta: {
                            title: "Register"
                        }
                    }, {
                        path: "/verifyAccount",
                        name: "VerifyAccount",
                        component: () => s.e(354).then(s.bind(s, 37121)),
                        meta: {
                            title: "Verify Account"
                        }
                    }, {
                        path: "/verifyEmail",
                        name: "VerifyEmail",
                        component: () => s.e(371).then(s.bind(s, 57205)),
                        meta: {
                            title: "Verify Email"
                        }
                    }, {
                        path: "/resetPassword",
                        name: "ResetPassword",
                        component: () => s.e(58).then(s.bind(s, 56857)),
                        meta: {
                            title: "Reset Password"
                        }
                    }, {
                        path: "/changePassword",
                        name: "ChangePassword",
                        component: () => s.e(830).then(s.bind(s, 72785)),
                        meta: {
                            title: "Change Password"
                        }
                    }, {
                        path: "/welcome",
                        name: "Onboarding",
                        component: () => s.e(343).then(s.bind(s, 80186)),
                        meta: {
                            title: "Onboarding"
                        }
                    }, {
                        path: "/account",
                        name: "Account",
                        component: () => s.e(809).then(s.bind(s, 41063)),
                        meta: {
                            title: "My Account"
                        }
                    }, {
                        path: "/dashboard",
                        component: () => s.e(966).then(s.bind(s, 18678)),
                        children: [{
                            path: "",
                            name: "Overview",
                            component: () => s.e(806).then(s.bind(s, 40929)),
                            meta: {
                                title: "Home"
                            }
                        }, {
                            path: "import",
                            name: "Import",
                            component: () => s.e(6).then(s.bind(s, 92905)),
                            meta: {
                                title: "Import"
                            }
                        }, {
                            path: "projects/new/:type?/:template?",
                            name: "NewProject",
                            component: () => s.e(80).then(s.bind(s, 14478)),
                            props: !0,
                            meta: {
                                title: "New Project"
                            }
                        }, {
                            path: "projects/:category?",
                            name: "Projects",
                            props: e => ({
                                category: e.params.category,
                                teamID: Number(e.params.teamID)
                            }),
                            component: () => Promise.all([s.e(361), s.e(942), s.e(176)]).then(s.bind(s, 29866)),
                            meta: {
                                autoTitle: !0
                            }
                        }, {
                            path: "provider/new",
                            name: "NewProviderAccount",
                            component: () => s.e(340).then(s.bind(s, 49761)),
                            meta: {
                                title: "New Provider Account"
                            }
                        }, {
                            path: "provider/:providerID",
                            component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(534), s.e(389), s.e(24), s.e(350)]).then(s.bind(s, 186)),
                            props: e => ({
                                providerID: "demo" === e.params.providerID ? "demo" : Number(e.params.providerID)
                            }),
                            children: [{
                                path: "",
                                name: "ProviderAccount",
                                component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(534), s.e(389), s.e(24), s.e(350)]).then(s.bind(s, 82174))
                            }, {
                                path: "visualize",
                                name: "ProviderAccountDiffVisualize",
                                component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(534), s.e(389), s.e(24), s.e(350)]).then(s.bind(s, 66745)),
                                meta: {
                                    hideSidebar: !0
                                }
                            }, {
                                path: "compare",
                                name: "ProviderAccountDiffCompare",
                                component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(534), s.e(389), s.e(24), s.e(350)]).then(s.bind(s, 9599)),
                                meta: {
                                    hideSidebar: !0
                                }
                            }, {
                                path: "diff",
                                name: "ProviderAccountDiffDiff",
                                component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(534), s.e(389), s.e(24), s.e(350)]).then(s.bind(s, 47262)),
                                meta: {
                                    hideSidebar: !0
                                }
                            }, {
                                path: "export/:tab?",
                                name: "ProviderAccountDiffExport",
                                component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(534), s.e(389), s.e(24), s.e(350)]).then(s.bind(s, 58087)),
                                meta: {
                                    hideSidebar: !0
                                }
                            }]
                        }, {
                            path: "team/new",
                            name: "NewTeam",
                            component: () => s.e(768).then(s.bind(s, 97637)),
                            meta: {
                                title: "New Team"
                            }
                        }, {
                            path: "team/:teamID",
                            name: "Team",
                            props: e => ({
                                teamID: Number(e.params.teamID)
                            }),
                            component: () => Promise.all([s.e(361), s.e(942), s.e(609)]).then(s.bind(s, 20150)),
                            meta: {
                                autoTitle: !0
                            }
                        }, {
                            path: "gitaccount/:provider/:organization",
                            name: "GitAccount",
                            props: !0,
                            component: () => s.e(561).then(s.bind(s, 29206)),
                            meta: {
                                autoTitle: !0
                            }
                        }, {
                            path: "gitaccountdemo",
                            name: "GitAccountDemo",
                            component: () => s.e(206).then(s.bind(s, 73427)),
                            meta: {
                                title: "github-integration-examples"
                            }
                        }],
                        meta: {
                            title: "Dashboard"
                        }
                    }, {
                        path: "/project/:id",
                        component: () => s.e(242).then(s.bind(s, 15912)),
                        props: e => ({
                            id: Number(e.params.id),
                            installationID: e.query.installation_id || "",
                            providerName: e.query.provider || ""
                        }),
                        children: [{
                            path: "",
                            name: "ProjectDesign",
                            component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(534), s.e(389), s.e(598)]).then(s.bind(s, 97845)),
                            meta: {
                                autoTitle: !0
                            }
                        }, {
                            path: "estimate/:provider?",
                            name: "ProjectEstimate",
                            component: () => Promise.all([s.e(361), s.e(709), s.e(434)]).then(s.bind(s, 43833)),
                            props: !0,
                            meta: {
                                title: "Estimate"
                            }
                        }, {
                            path: "export/:tab?",
                            name: "ProjectExport",
                            component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(534), s.e(24), s.e(157)]).then(s.bind(s, 37109)),
                            props: !0,
                            meta: {
                                title: "Export"
                            }
                        }, {
                            path: "git/:providerName?/:installationID?",
                            props: ({
                                params: {
                                    providerName: e,
                                    installationID: t
                                }
                            }) => ({
                                providerName: e,
                                installationID: t
                            })
                        }]
                    }, {
                        path: "/diff/:projectID/:historyOrProject/:compareTo",
                        component: () => s.e(23).then(s.bind(s, 91460)),
                        props: e => ({
                            projectID: Number(e.params.projectID),
                            historyOrProject: e.params.historyOrProject,
                            compareTo: Number(e.params.compareTo)
                        }),
                        children: [{
                            name: "ProjectDiffVisualize",
                            path: "",
                            component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(907)]).then(s.bind(s, 988)),
                            meta: {
                                autoTitle: !0
                            }
                        }, {
                            name: "ProjectDiffCompare",
                            path: "compare",
                            component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(607)]).then(s.bind(s, 77460)),
                            meta: {
                                autoTitle: !0
                            }
                        }, {
                            name: "ProjectDiffDiff",
                            path: "diff",
                            component: () => Promise.all([s.e(361), s.e(709), s.e(20), s.e(837), s.e(118), s.e(927)]).then(s.bind(s, 13895)),
                            meta: {
                                autoTitle: !0
                            }
                        }]
                    }, {
                        path: "/pricing",
                        name: "Pricing",
                        meta: {
                            title: "Pricing"
                        },
                        component: () => s.e(717).then(s.bind(s, 55268))
                    }, {
                        path: "/quotas",
                        name: "Quotas",
                        meta: {
                            title: "Quotas"
                        },
                        component: () => s.e(815).then(s.bind(s, 6581))
                    }, {
                        path: "/upgrade",
                        name: "UpgradePricingPlan",
                        meta: {
                            title: "Upgrade your plan"
                        },
                        component: () => s.e(717).then(s.bind(s, 76475))
                    }, {
                        path: "/checkout/:stripeSessionId",
                        name: "Checkout",
                        props: !0,
                        component: () => s.e(231).then(s.bind(s, 60378))
                    }, {
                        path: "/checkout-result",
                        name: "CheckoutResult",
                        component: () => s.e(568).then(s.bind(s, 42872))
                    }, {
                        path: "*",
                        redirect: "/"
                    }],
                    ut = ["Account", "Onboarding", "Overview", "Projects", "Import", "Project", "ProjectDesign", "ProjectEstimate", "ProjectExport", "Dashboard", "NewProject", "ProviderAccount", "NewProviderAccount", "Team", "NewTeam", "VerifyEmail", "UpgradePricingPlan", "Quotas", "Checkout", "CheckoutResult", "ProjectDiffVisualize", "ProjectDiffCompare", "ProjectDiffDiff"],
                    dt = ["Login", "ConnectSSO", "Provider", "ProviderOffer", "Authorize", "Register", "ResetPassword", "VerifyAccount", "Pricing"],
                    ht = new nt.ZP({
                        mode: "history",
                        routes: lt,
                        linkActiveClass: "is-active"
                    });
                ht.beforeEach((async (e, t, s) => {
                    e.path !== t.path && n.Z.dispatch("setPageTitle", "");
                    for (const n in window.abortControllers) {
                        const e = window.abortControllers[n];
                        e && e.abort(), delete window.abortControllers[n]
                    }
                    const r = (0, z.c)();
                    let i = r.isLoggedIn;
                    const o = ut.includes(e.name),
                        a = dt.includes(e.name);
                    a && s(), !i || "Login" !== e.name && "ConnectSSO" !== e.name || s({
                        name: "Overview",
                        query: t.query
                    }), i || (n.Z.dispatch("startGlobalLoading"), await r.tryInitialLogin().catch((() => {})), i = r.isLoggedIn, n.Z.dispatch("stopGlobalLoading")), "Authorize" === e.name ? s() : o && !i ? (n.Z.dispatch("startLoadInitialToken"), await r.tryInitialLogin().catch((e => {
                        [500, 502].includes(e.response.status) && s({
                            name: "Login"
                        })
                    })), n.Z.dispatch("stopLoadInitialToken"), i = r.isLoggedIn, i ? s() : s({
                        name: "Login"
                    })) : "Login" !== e.name || null != e.query && null != e.query.redirect ? s() : s({
                        name: "Login",
                        query: { ...e.query,
                            redirect: "/" !== t.fullPath && ut.includes(t.name) ? t.fullPath.substring(1) : "dashboard"
                        }
                    })
                })), ht.afterEach((e => {
                    e.meta.autoTitle || i["default"].nextTick((() => {
                        document.title = (0, ct.q)(e.meta.title || "Home")
                    }))
                }));
                var pt = ht,
                    mt = s(55102),
                    gt = s(96026);

                function ft() {
                    const e = (0, z.c)();
                    mt.ZP.interceptors.request.use((t => {
                        const s = e.getAccessToken;
                        if (s && (t.headers.Authorization = `Bearer ${s}`), null !== t.cancelToken) {
                            const e = new AbortController;
                            t.signal = e.signal, window.abortControllers[t.url] = e
                        }
                        return t
                    }), (e => Promise.reject(e)));
                    const t = e => {
                        delete window.abortControllers[e]
                    };
                    mt.ZP.interceptors.response.use((e => (t(e.config.url), e)), (s => {
                        if (t(s.config.url), (0, gt.Mw)(s)) return Promise.reject(s);
                        const r = s.config || {};
                        return r._retry = !0, null == s ? .response || 401 !== s.response.status ? Promise.reject(s) : r.url === p.ZP.loginUrl ? (n.Z.dispatch("logout"), Promise.reject(s)) : r._retry ? Promise.reject(s) : void e.renewToken().then((() => Promise.resolve((0, mt.ZP)(r))), (e => (n.Z.dispatch("logout"), Promise.reject(e))))
                    }))
                }
                var vt = s(46693),
                    yt = {
                        inserted(e, t, s) {
                            const r = t.value.toLowerCase(),
                                i = r.split("+"),
                                o = i.includes("ctrl"),
                                a = i.includes("shift"),
                                n = i.pop();
                            e._handleKeyboardShortcut = t => {
                                const {
                                    ctrlKey: r,
                                    shiftKey: i,
                                    key: c,
                                    target: {
                                        tagName: l
                                    }
                                } = t;
                                if (!["INPUT", "TEXTAREA"].includes(l) && !(o && !r || a && !i) && c.toLowerCase() === n) {
                                    t.preventDefault();
                                    const {
                                        click: r
                                    } = s.data && s.data.on || s.componentOptions && s.componentOptions.listeners, i = "disabled" === e.getAttribute("disabled");
                                    r && !i && r(t)
                                }
                            }, document.addEventListener("keydown", e._handleKeyboardShortcut)
                        },
                        unbind(e) {
                            document.removeEventListener("keydown", e._handleKeyboardShortcut)
                        }
                    };
                window.Buffer = r.Buffer, window.abortControllers = {};
                const Pt = Object.assign(at.c, {
                    modal: { ...at.c.modal,
                        canCancel: ["escape", "outside", "button"]
                    }
                });
                i["default"].use(ot.ZP, Pt), i["default"].use(it), i["default"].directive("keyboard-shortcut", yt), ft(), i["default"].mixin(vt.t), new i["default"]({
                    render: e => e(tt),
                    router: pt
                }).$mount("#app")
            },
            27200: function(e, t, s) {
                "use strict";
                s.d(t, {
                    c: function() {
                        return n
                    }
                });
                var r = s(92220),
                    i = s(6865),
                    o = s(48659),
                    a = s(67708);
                const n = (0, o.Q_)("account", {
                    state: () => ({
                        email: "",
                        password: "",
                        accessToken: null,
                        userID: null,
                        tokenRefresher: null,
                        quotas: []
                    }),
                    persist: {
                        storage: localStorage,
                        paths: ["userID"]
                    },
                    getters: {
                        isLoggedIn(e) {
                            if (e.userID < 1 || !e.accessToken) return !1;
                            const t = (0, i.Z)(e.accessToken).exp;
                            return 1e3 * t >= Date.now()
                        },
                        getAccessToken: e => e.accessToken,
                        findQuota: e => t => {
                            const s = e.quotas.find((e => e.name === t));
                            if (s) return s;
                            const r = (0, a.L)();
                            return {
                                limit: r.getQuota(t),
                                current: r.getQuotaValue(t)
                            }
                        },
                        hasReachedQuota() {
                            return e => {
                                const t = this.findQuota(e);
                                if (t) {
                                    const {
                                        current: e,
                                        limit: s
                                    } = t;
                                    return null !== s && e >= s
                                } {
                                    const t = (0, a.L)();
                                    return t.hasReachedQuota(e)
                                }
                            }
                        },
                        getQuotaLimit() {
                            return e => this.findQuota(e) ? .limit || -1
                        }
                    },
                    actions: {
                        register(e) {
                            return r.ZP.register(e)
                        },
                        resetPassword(e) {
                            return r.ZP.resetPassword(e)
                        },
                        changePassword(e) {
                            return r.ZP.changePassword(e)
                        },
                        changePasswordFromToken(e) {
                            return r.ZP.changePasswordFromToken(e)
                        },
                        verify(e) {
                            return r.ZP.verify(e)
                        },
                        changeEmail(e) {
                            return r.ZP.changeEmail(e)
                        },
                        login(e) {
                            return new Promise(((t, s) => {
                                r.ZP.login(e).then((e => {
                                    this.onLogin(e).then((e => t(e)))
                                }), (e => s(e)))
                            }))
                        },
                        onLogin(e) {
                            this.resetTokenRefresher(), this.dropCredentials();
                            const t = (0, i.Z)(e.data.access_token),
                                s = t.exp,
                                r = +t.sub.replace("user:", "");
                            this.setUserID(r), this.setToken(e.data.access_token), this.setRefresher(s);
                            const o = (0, a.L)();
                            return new Promise((e => {
                                o.initUserData(r, e)
                            }))
                        },
                        getAuthorizeCodeSSOURL(e) {
                            return r.ZP.getAuthorizeCodeSSOURL(e.provider)
                        },
                        authorizeSSO(e) {
                            return new Promise(((t, s) => {
                                r.ZP.authorizeSSO(e.provider, e.code, e.state).then((e => {
                                    this.onLogin(e).then((e => {
                                        t(e)
                                    })).catch((e => s(e)))
                                }), (e => s(e)))
                            }))
                        },
                        setRefresher(e) {
                            const t = 1e3 * e - Date.now();
                            this.setTokenRefresher(setTimeout((() => {
                                this.renewToken()
                            }), t))
                        },
                        tryInitialLogin() {
                            return new Promise(((e, t) => {
                                r.ZP.renewToken().then((t => {
                                    this.onLogin(t), e()
                                }), (e => t(e)))
                            }))
                        },
                        renewToken() {
                            return this.resetTokenRefresher(), new Promise(((e, t) => {
                                r.ZP.renewToken().then((t => {
                                    this.setToken(t.data.access_token);
                                    const s = (0, i.Z)(t.data.access_token).exp;
                                    this.setRefresher(s), e(t)
                                }), (e => {
                                    this.logout(), t(e)
                                })).catch((() => {}))
                            }))
                        },
                        getQuotas() {
                            return new Promise(((e, t) => {
                                r.ZP.getQuotas().then((t => {
                                    this.setQuotas(t.data.quotas), e(t)
                                }), (e => {
                                    t(e)
                                }))
                            }))
                        },
                        logout() {
                            return r.ZP.logout().catch((() => {})).finally((() => {
                                this.resetTokenRefresher(), this.dropToken(), this.dropUserID(), this.dropCredentials();
                                const e = (0, a.L)();
                                e.setUser(null)
                            }))
                        },
                        setToken(e) {
                            this.accessToken = e
                        },
                        setUserID(e) {
                            this.userID = e
                        },
                        setIsNewUser(e) {
                            this.isNewUser = e
                        },
                        setQuotas(e) {
                            this.quotas = e
                        },
                        dropCredentials(e) {
                            this.email = "", this.password = ""
                        },
                        dropToken(e) {
                            this.accessToken = null
                        },
                        dropUserID(e) {
                            this.userID = 0
                        },
                        setTokenRefresher(e) {
                            this.tokenRefresher = e
                        },
                        resetTokenRefresher(e) {
                            this.tokenRefresher && (clearTimeout(this.tokenRefresher), this.tokenRefresher = null)
                        }
                    }
                })
            },
            99096: function(e, t, s) {
                "use strict";
                s.d(t, {
                    X: function() {
                        return l
                    }
                });
                var r = s(52389),
                    i = s(43058),
                    o = s(54582),
                    a = s(48659),
                    n = s(92259);
                const c = {
                        offerPage: [],
                        offerCount: 0,
                        offerRange: [0, 0],
                        offerPageSize: 50,
                        offerCurrentPage: 1,
                        abortControllers: {
                            offer_page: null,
                            filters: null
                        },
                        filtersRange: {
                            currency: [],
                            payment_period: ["hour"],
                            price: [0, 0],
                            cpu: [0, 0],
                            ram: [0, 0],
                            disk: [0, 0],
                            gpu: [0, 0],
                            internal_network_speed: [0, 0],
                            external_network_speed: [0, 0],
                            location: []
                        },
                        filters: {
                            name: null,
                            currency: null,
                            payment_period: "hour",
                            dedicated: null,
                            baremetal: null,
                            min_price: 0,
                            max_price: 0,
                            min_cpu: 0,
                            max_cpu: 0,
                            min_ram: 0,
                            max_ram: 0,
                            min_disk: 0,
                            max_disk: 0,
                            min_gpu: 0,
                            max_gpu: 0,
                            min_internal_network_speed: 0,
                            max_internal_network_speed: 0,
                            min_external_network_speed: 0,
                            max_external_network_speed: 0,
                            location: [],
                            company: [],
                            tags: []
                        },
                        sorting: {
                            sortBy: "price",
                            sortDir: "asc"
                        }
                    },
                    l = (0, a.Q_)("compute", {
                        state: () => c,
                        actions: {
                            initFilters(e) {
                                const t = {
                                    min_price: Math.floor(this.filtersRange.price[0]),
                                    max_price: this.filtersRange.price[1],
                                    min_cpu: this.filtersRange.cpu[0],
                                    max_cpu: this.filtersRange.cpu[1],
                                    min_ram: this.filtersRange.ram[0],
                                    max_ram: this.filtersRange.ram[1],
                                    min_disk: this.filtersRange.disk[0],
                                    max_disk: this.filtersRange.disk[1],
                                    min_gpu: this.filtersRange.gpu[0],
                                    max_gpu: this.filtersRange.gpu[1],
                                    min_internal_network_speed: this.filtersRange.internal_network_speed[0],
                                    max_internal_network_speed: this.filtersRange.internal_network_speed[1],
                                    min_external_network_speed: this.filtersRange.external_network_speed[0],
                                    max_external_network_speed: this.filtersRange.external_network_speed[1],
                                    name: null,
                                    location: [],
                                    company: [],
                                    tags: []
                                };
                                this.filters = { ...t,
                                    ...e
                                }
                            },
                            getFilters(e = c.filters.payment_period) {
                                const t = (0, n.C)();
                                return t.incrementLoading("filters"), this.abortControllers.filters ? .abort(), this.updateAbortControllers({
                                    filters: new AbortController
                                }), new Promise(((s, i) => {
                                    r.Z.get("/compute", {
                                        payment_period: e,
                                        currency: this.filters.currency
                                    }, this.abortControllers.filters.signal).then((e => {
                                        this.setFiltersRange(e.data), s()
                                    }), (e => {
                                        o["default"].isCancel(e) || (console.error(e), i(e))
                                    })).then((() => t.decrementLoading("filters")))
                                }))
                            },
                            async updateFilters(e) {
                                this.filters = { ...this.filters,
                                    ...e
                                }, await this.getFilters(), e.payment_period && await this.resetPriceRange()
                            },
                            getOfferPage() {
                                const e = (0, n.C)();
                                return e.incrementLoading("offers"), new Promise(((t, s) => {
                                    this.abortControllers.offer_page ? .abort(), this.updateAbortControllers({
                                        offer_page: new AbortController
                                    }), i.Z.getPage("/compute", (this.offerCurrentPage - 1) * this.offerPageSize, this.offerPageSize, this.filters, this.sorting, this.abortControllers.offer_page.signal).then((e => {
                                        const s = e.headers["content-range"].split(" ", 2)[1].split("/"),
                                            r = +s[1],
                                            i = s[0].split("-").map((e => parseInt(e, 10)));
                                        this.setOfferCount(r), this.setOfferRange(i), this.setOfferPage(e.data.offers), t()
                                    }), (e => {
                                        o["default"].isCancel(e) || (console.error(e), s(e))
                                    })).then((() => e.decrementLoading("offers")))
                                }))
                            },
                            updateOfferPageSize(e) {
                                this.setOfferPageSize(e), this.getOfferPage()
                            },
                            updateOfferCurrentPage(e) {
                                this.setOfferCurrentPage(e), this.getOfferPage()
                            },
                            resetPriceRange() {
                                this.updateFilters({
                                    min_price: Math.floor(this.filtersRange.price[0]),
                                    max_price: Math.ceil(this.filtersRange.price[1])
                                })
                            },
                            updateSort(e) {
                                this.sorting = e
                            },
                            setFiltersRange(e) {
                                this.filtersRange = e
                            },
                            setOfferCount(e) {
                                this.offerCount = e
                            },
                            setOfferRange(e) {
                                this.offerRange = e
                            },
                            setOfferPage(e) {
                                this.offerPage = e
                            },
                            setOfferPageSize(e) {
                                this.offerPageSize = e
                            },
                            setOfferCurrentPage(e) {
                                this.offerCurrentPage = e
                            },
                            updateAbortControllers(e) {
                                this.abortControllers = { ...this.abortControllers,
                                    ...e
                                }
                            }
                        }
                    })
            },
            38010: function(e, t, s) {
                "use strict";
                s.d(t, {
                    H: function() {
                        return l
                    }
                });
                var r = s(52389),
                    i = s(43058),
                    o = s(54582),
                    a = s(48659),
                    n = s(92259);
                const c = {
                        offerPage: [],
                        offerCount: 0,
                        offerRange: [0, 0],
                        offerPageSize: 50,
                        offerCurrentPage: 1,
                        abortControllers: {
                            offer_page: null,
                            filters: null
                        },
                        filtersRange: {
                            currency: [],
                            payment_period: ["hour"],
                            price: [0, 0],
                            family: [],
                            size: [0, 0],
                            io: [0, 0],
                            bandwidth: [0, 0],
                            location: []
                        },
                        filters: {
                            currency: null,
                            payment_period: "hour",
                            family: null,
                            size: 0,
                            io: 0,
                            bandwidth: 0,
                            location: [],
                            company: [],
                            tags: []
                        },
                        sorting: {
                            sortBy: "price",
                            sortDir: "asc"
                        }
                    },
                    l = (0, a.Q_)("storage", {
                        state: () => c,
                        actions: {
                            initFilters(e) {
                                const t = {
                                    family: null,
                                    size: 0,
                                    io: 0,
                                    bandwidth: 0,
                                    location: [],
                                    company: [],
                                    tags: []
                                };
                                this.filters = { ...t,
                                    ...e
                                }
                            },
                            getFilters(e = c.filters.payment_period) {
                                const t = (0, n.C)();
                                return t.incrementLoading("filters"), this.abortControllers.filters ? .abort(), this.updateAbortControllers({
                                    filters: new AbortController
                                }), new Promise(((s, i) => {
                                    r.Z.get("/storage", {
                                        payment_period: e,
                                        currency: this.filters.currency
                                    }, this.abortControllers.filters.signal).then((e => {
                                        this.setFiltersRange(e.data), s()
                                    }), (e => {
                                        o["default"].isCancel(e) || (console.error(e), i(e))
                                    })).then((() => t.decrementLoading("filters")))
                                }))
                            },
                            async updateFilters(e) {
                                this.filters = { ...this.filters,
                                    ...e
                                }, await this.getFilters(), e.payment_period && await this.resetPriceRange()
                            },
                            getOfferPage() {
                                const e = (0, n.C)();
                                return e.incrementLoading("offers"), new Promise(((t, s) => {
                                    this.abortControllers.offer_page ? .abort(), this.updateAbortControllers({
                                        offer_page: new AbortController
                                    }), i.Z.getPage("/storage", (this.offerCurrentPage - 1) * this.offerPageSize, this.offerPageSize, this.filters, this.sorting, this.abortControllers.offer_page.signal).then((e => {
                                        const s = e.headers["content-range"].split(" ", 2)[1].split("/"),
                                            r = +s[1],
                                            i = s[0].split("-").map((e => parseInt(e, 10)));
                                        this.setOfferCount(r), this.setOfferRange(i), this.setOfferPage(e.data.storage_offers), t()
                                    }), (e => {
                                        o["default"].isCancel(e) || (console.error(e), s(e))
                                    })).then((() => e.decrementLoading("offers")))
                                }))
                            },
                            updateOfferPageSize(e) {
                                this.setOfferPageSize(e), this.getOfferPage()
                            },
                            updateOfferCurrentPage(e) {
                                this.setOfferCurrentPage(e), this.getOfferPage()
                            },
                            resetPriceRange() {
                                this.updateFilters({
                                    min_price: Math.floor(this.filtersRange.price[0]),
                                    max_price: Math.ceil(this.filtersRange.price[1])
                                })
                            },
                            computeCost(e) {
                                let t = 0,
                                    s = 0,
                                    r = 0,
                                    i = 0,
                                    o = 0;
                                return e.product ? .prices.forEach((e => {
                                    switch (e.unit) {
                                        case "size_gio_month":
                                            s = e.value;
                                            break;
                                        case "size_gio_hour":
                                            r = e.value;
                                            break;
                                        case "io_month":
                                            i = e.value;
                                            break;
                                        case "bandwidth_mio_s_month":
                                            o = e.value;
                                            break;
                                        default:
                                            break
                                    }
                                })), e.fields.size && (r ? t += e.fields.size * r : s && (t += e.fields.size * s)), e.fields.io && i && (t += e.fields.io * i), e.fields.bandwidth && o && (t += e.fields.bandwidth * o), t
                            },
                            updateSort(e) {
                                this.sorting = e
                            },
                            setFiltersRange(e) {
                                this.filtersRange = e
                            },
                            setOfferCount(e) {
                                this.offerCount = e
                            },
                            setOfferRange(e) {
                                this.offerRange = e
                            },
                            setOfferPage(e) {
                                this.offerPage = e
                            },
                            setOfferPageSize(e) {
                                this.offerPageSize = e
                            },
                            setOfferCurrentPage(e) {
                                this.offerCurrentPage = e
                            },
                            updateAbortControllers(e) {
                                this.abortControllers = { ...this.abortControllers,
                                    ...e
                                }
                            }
                        }
                    })
            },
            92259: function(e, t, s) {
                "use strict";
                s.d(t, {
                    C: function() {
                        return u
                    }
                });
                s(70560);
                var r = s(60956),
                    i = s(55102),
                    o = s(12538);
                const a = o.Z + "tags";
                var n = {
                        get() {
                            return i.ZP.get(a)
                        }
                    },
                    c = s(48659),
                    l = s(92824);
                const u = (0, c.Q_)("compare", {
                    state: () => ({
                        loading: {
                            filters: 0,
                            offers: 0
                        },
                        companies: [],
                        tags: []
                    }),
                    getters: {
                        companyFromID: e => t => e.companies.find((e => e.id === t)),
                        companyFromName: e => t => t ? e.companies.find((e => e.name === t)) : void 0,
                        providerName() {
                            const e = (0, l.G)();
                            return t => e.providersData[this.companyFromID(t) ? .name] ? .name
                        }
                    },
                    actions: {
                        getTags() {
                            return this.incrementLoading("filters"), new Promise(((e, t) => {
                                n.get().then((t => {
                                    this.setTags(t.data.tags), e()
                                }), (e => {
                                    console.error(e), t(e)
                                })).then((() => this.decrementLoading("filters")))
                            }))
                        },
                        getCompanies() {
                            return this.incrementLoading("filters"), new Promise(((e, t) => {
                                r.Z.get().then((t => {
                                    for (const e of t.data.companies) this.addCompany(e);
                                    e()
                                }), (e => {
                                    console.error(e), t(e)
                                })).then((() => this.decrementLoading("filters")))
                            }))
                        },
                        addCompany(e) {
                            this.companies.map((e => e.id)).includes(e.id) || this.companies.push(e)
                        },
                        setTags(e) {
                            this.tags = e
                        },
                        incrementLoading(e) {
                            this.loading[e]++
                        },
                        decrementLoading(e) {
                            this.loading[e]--
                        }
                    }
                })
            },
            43853: function(e, t, s) {
                "use strict";
                s.d(t, {
                    B: function() {
                        return p
                    },
                    P: function() {
                        return g
                    }
                });
                var r = s(55102),
                    i = s(93553);
                const o = i.Z + "terraform/";
                var a = {
                        get(e) {
                            return r.ZP.get(o + e)
                        }
                    },
                    n = s(60956),
                    c = s(40739),
                    l = s(48659),
                    u = s(67708),
                    d = s(20679);
                const h = {
                        combos: [],
                        edges: [],
                        nodes: [],
                        version: c.L2
                    },
                    p = {
                        combos: [],
                        edges: [],
                        nodes: []
                    },
                    m = {
                        data: h,
                        selection: p,
                        uniqueSelection: {
                            combo: null,
                            edge: null,
                            node: null
                        },
                        addingNodePath: "",
                        canUndo: !1,
                        canRedo: !1,
                        saving: !1,
                        saved: !0,
                        undoSize: 0,
                        redoSize: 0,
                        terraformFields: {},
                        locations: [],
                        companies: [],
                        detailsTab: "general",
                        layouting: !1,
                        comparing: !1,
                        comparingRow: null,
                        updatedTerraformKeys: {},
                        settings: {}
                    },
                    g = (0, l.Q_)("diagram", {
                        state: () => m,
                        getters: {
                            getNodes: ({
                                data: {
                                    nodes: e
                                }
                            }) => e,
                            getCombos: ({
                                data: {
                                    combos: e
                                }
                            }) => e,
                            getEdges: ({
                                data: {
                                    edges: e
                                }
                            }) => e,
                            getData: e => e.data,
                            getGlobalSelection: ({
                                selection: {
                                    combos: e,
                                    edges: t,
                                    nodes: s
                                }
                            }) => [...e, ...t, ...s],
                            isSelected() {
                                return e => void 0 !== this.getGlobalSelection.find((t => t.id === e))
                            },
                            findById: ({
                                data: {
                                    combos: e,
                                    nodes: t
                                }
                            }) => s => {
                                const r = [...e, ...t];
                                let i = null;
                                for (const e of r)
                                    if (e.id === s) {
                                        i = e;
                                        break
                                    }
                                return i
                            },
                            getGlobalSelectionCount() {
                                return this.getGlobalSelection.length
                            },
                            hasUniqueSelection: ({
                                uniqueSelection: {
                                    combo: e,
                                    edge: t,
                                    node: s
                                }
                            }) => !!e || !!t || !!s,
                            getSelectedCombo({
                                uniqueSelection: e,
                                selection: t
                            }) {
                                return this.hasUniqueSelection ? e.combo : t.combos[0]
                            },
                            getSelectedEdge({
                                uniqueSelection: e,
                                selection: t
                            }) {
                                return this.hasUniqueSelection ? e.edge : t.edges[0]
                            },
                            getSelectedNode({
                                uniqueSelection: e,
                                selection: t
                            }) {
                                return this.hasUniqueSelection ? e.node : t.nodes[0]
                            },
                            getSelectedItem() {
                                return this.getSelectedNode || this.getSelectedCombo
                            },
                            getSelectedAnything() {
                                return this.getSelectedEdge || this.getSelectedItem
                            },
                            getItemTerraform: e => (t, s) => e.data[s + "s"].find((e => e.id === t)).terraform,
                            getUsedLocations: e => e.data.combos.filter((e => void 0 !== e.location)).map((e => e.location)),
                            canLeave: e => 0 === e.undoSize && e.saved && !e.saving,
                            getElementsNumber: ({
                                data: {
                                    nodes: e,
                                    combos: t,
                                    edges: s
                                }
                            }) => t.length + s.length + e.length,
                            hasReachedMaximumElementsNumber() {
                                const e = (0, u.L)();
                                return this.getElementsNumber >= e.getQuota("project_diagram_element")
                            },
                            isComparing: e => e.comparing,
                            getUpdatedTerraformKey: e => (t, s) => {
                                const r = e.updatedTerraformKeys[t];
                                if (r) {
                                    const e = s in r;
                                    if (e) {
                                        const e = r[s];
                                        return void 0 === e ? "<no value>" : e
                                    }
                                }
                            }
                        },
                        actions: {
                            setSelection(e) {
                                this.selection = e
                            },
                            clearSelection() {
                                this.selection = p
                            },
                            setUniqueSelection(e) {
                                this.uniqueSelection = e
                            },
                            clearUniqueSelection() {
                                this.uniqueSelection = {
                                    combo: null,
                                    edge: null,
                                    node: null
                                }
                            },
                            saveData(e) {
                                this.saveOriginalData(e), this.setSaved(!1)
                            },
                            saveOriginalData(e) {
                                this.data = JSON.parse(e)
                            },
                            setSaved(e) {
                                this.saved = e
                            },
                            reset() {
                                this.data = h
                            },
                            saveDiagram(e) {
                                return new Promise(((t, s) => {
                                    const r = JSON.stringify(this.data);
                                    this.saving = !0;
                                    const i = (0, d.i)(),
                                        o = { ...i.project,
                                            diagram: r,
                                            thumbnail: e,
                                            importing: null
                                        },
                                        a = i.savedProject,
                                        n = {
                                            id: i.project.id
                                        };
                                    for (const e in o) o[e] !== a[e] && (n[e] = o[e]);
                                    1 !== Object.keys(n).length && (this.setSaved(!0), !1 === n.importing && delete n.importing, i.patch(n).then((() => {
                                        this.saving = !1, t()
                                    })).catch(s))
                                }))
                            },
                            setCanUndo(e) {
                                this.canUndo = e
                            },
                            setCanRedo(e) {
                                this.canRedo = e
                            },
                            setUndoSize(e) {
                                this.undoSize = e
                            },
                            setRedoSize(e) {
                                this.redoSize = e
                            },
                            setAddingNodePath(e) {
                                this.addingNodePath = e
                            },
                            getTerraformFields(e) {
                                e in this.terraformFields || this.fetchTerraformFields(e)
                            },
                            fetchTerraformFields(e) {
                                a.get(e).then((({
                                    data: t
                                }) => {
                                    this.setTerraformFields({
                                        path: e,
                                        fields: t
                                    })
                                }))
                            },
                            setLocations(e) {
                                this.locations = e
                            },
                            loadCompanies() {
                                return new Promise((e => {
                                    n.Z.get().then((({
                                        data: t
                                    }) => {
                                        this.setCompanies(t.companies), e(t.companies)
                                    }), (() => {}), (() => {
                                        e(this.companies)
                                    }))
                                }))
                            },
                            setTerraformFields(e) {
                                this.terraformFields = { ...this.terraformFields,
                                    [e.path]: e.fields
                                }
                            },
                            setCompanies(e) {
                                this.companies = e
                            },
                            setDetailsTab(e) {
                                this.detailsTab = e
                            },
                            setLayouting(e) {
                                this.layouting = e
                            },
                            setComparing(e) {
                                this.comparing = e, e || this.cleanUpdatedTerraformKeys()
                            },
                            setComparingRow(e) {
                                this.comparingRow = e
                            },
                            cleanUpdatedTerraformKeys() {
                                this.updatedTerraformKeys = []
                            },
                            addUpdatedTerraformKey({
                                id: e,
                                key: t,
                                value: s
                            }) {
                                this.updatedTerraformKeys[e] = { ...this.updatedTerraformKeys[e],
                                    [t]: s
                                }
                            },
                            setSettings(e) {
                                this.settings = e
                            }
                        }
                    })
            },
            87523: function(e, t, s) {
                "use strict";
                s.d(t, {
                    H: function() {
                        return o
                    }
                });
                var r = s(19464),
                    i = s(48659);
                const o = (0, i.Q_)("github", {
                    state: () => ({
                        account: null,
                        organizations: [],
                        repositories: {},
                        repositoriesSearch: "",
                        pullRequests: {},
                        pullRequestsSearch: "",
                        pullRequestsPage: 1,
                        pullRequestsTotal: 10,
                        abortControllers: {
                            repositories: null,
                            pullRequests: null,
                            branches: null
                        }
                    }),
                    getters: {
                        getOrganizationByName: ({
                            organizations: e
                        }) => t => e.find((({
                            login: e
                        }) => e === t)),
                        getOrganizationIDByName() {
                            return e => this.getOrganizationByName(e) ? .id
                        },
                        getOrganizationInstallationIDByName() {
                            return e => this.getOrganizationByName(e) ? .installationID
                        },
                        getRepositories: ({
                            repositories: e
                        }) => Object.values(e),
                        getFilteredRepositories: ({
                            getRepositories: e,
                            repositoriesSearch: t
                        }) => {
                            const s = t.toLowerCase();
                            return e.filter((e => {
                                if (!s) return !0;
                                const {
                                    name: t
                                } = e;
                                return t.toLowerCase().includes(s)
                            }))
                        },
                        getPullRequests: ({
                            pullRequests: e
                        }) => Object.values(e),
                        getFilteredPullRequests: ({
                            getPullRequests: e,
                            pullRequestsSearch: t
                        }) => {
                            const s = t.toLowerCase();
                            return e.filter((e => {
                                if (!s) return !0;
                                const {
                                    commit: t,
                                    message: r,
                                    author: {
                                        name: i
                                    },
                                    number: o
                                } = e.info, a = [t, r, i, o].join(" ").toLowerCase();
                                return a.includes(s)
                            })).sort(((e, t) => e.updated > t.updated ? -1 : 1))
                        }
                    },
                    actions: {
                        reset() {
                            this.repositories = {}, this.pullRequests = {}
                        },
                        getUserAccount() {
                            return this.account = null, new Promise(((e, t) => {
                                r.ZP.getUserAccount().then((({
                                    data: t
                                }) => {
                                    this.account = t, e(t)
                                }))
                            }))
                        },
                        getOrganizations() {
                            return this.organizations = [], new Promise(((e, t) => {
                                r.ZP.getInstalledOrganizations(this.account.id).then((t => {
                                    this.organizations = t.sort(((e, t) => "User" === e.type ? -1 : 1)), e(t)
                                }))
                            }))
                        },
                        getOrganization(e) {
                            return new Promise(((t, s) => {
                                r.ZP.getOrganization(e).then((({
                                    data: e
                                }) => {
                                    t(e)
                                })).catch(s)
                            }))
                        },
                        getRepositoriesForOrganization(e) {
                            return this.repositories = {}, this.abortControllers.repositories ? .abort(), new Promise(((t, s) => {
                                this.abortControllers.repositories = new AbortController, r.ZP.getRepositoriesForOrganization(e, this.abortControllers.repositories.signal).then((({
                                    data: i
                                }) => {
                                    const o = i.map((t => {
                                        const {
                                            name: i,
                                            html_url: o
                                        } = t, a = this.getOrganizationInstallationIDByName(e);
                                        return a ? r.ZP.getProjectsForName(a, `${e}/${i}`, this.abortControllers.repositories.signal, 1).then((t => {
                                            const r = +t.headers["content-range"].split("/").pop();
                                            this.repositories = { ...this.repositories,
                                                [i]: {
                                                    name: i,
                                                    url: o,
                                                    status: "",
                                                    nbDiagrams: r,
                                                    latestPR: null
                                                }
                                            }, this.getLatestPullRequest(e, i).catch((e => {
                                                this.removeRepository(i), s(e)
                                            }))
                                        }), (() => {})) : null
                                    }));
                                    Promise.all(o).then((() => t()))
                                })).catch((() => s(new Error("Could not get list of repositories."))))
                            }))
                        },
                        removeRepository(e) {
                            const t = { ...this.repositories
                            };
                            delete t[e], this.repositories = t
                        },
                        getLatestPullRequest(e, t) {
                            return new Promise(((s, i) => {
                                r.ZP.getPullRequestsForRepository(e, t, null, 1, 1).then((({
                                    data: e
                                }) => {
                                    const r = e[0];
                                    r && this.updateRepository(t, {
                                        latestPR: r.number,
                                        latestPRUrl: r.html_url
                                    }), s()
                                })).catch((() => i(new Error("Could not get latest pull request."))))
                            }))
                        },
                        getPullRequestsForRepository(e, t) {
                            return this.pullRequests = {}, this.abortControllers.pullRequests ? .abort(), new Promise(((s, i) => {
                                this.abortControllers.pullRequests = new AbortController, r.ZP.getPullRequestsForRepository(e, t, this.abortControllers.pullRequests.signal, this.pullRequestsPage).then((({
                                    data: o,
                                    headers: {
                                        link: a
                                    }
                                }) => {
                                    if (a) {
                                        const e = a.match(/<https:\/\/api\.github\.com\/repositories\/\d+\/pulls\?page=(\d+)&per_page=\d+>; rel="last"/);
                                        if (e) {
                                            const t = parseInt(e[1]);
                                            this.pullRequestsTotal = 10 * t
                                        }
                                    } else this.pullRequestsTotal = 10;
                                    o.forEach((s => {
                                        const {
                                            number: o,
                                            html_url: a
                                        } = s, n = s.head.sha.substr(0, 7), c = {
                                            commit: n,
                                            message: null,
                                            author: {
                                                name: s.user.login
                                            },
                                            number: s.number
                                        };
                                        this.pullRequests = { ...this.pullRequests,
                                            [o]: {
                                                lastDiagram: "2 days ago",
                                                info: c,
                                                url: a,
                                                changes: null,
                                                updated: new Date(s.updated_at).getTime()
                                            }
                                        }, r.ZP.getCommit(e, t, n, this.abortControllers.pullRequests.signal).then((({
                                            data: e
                                        }) => {
                                            const {
                                                commit: {
                                                    message: t
                                                },
                                                stats: {
                                                    additions: s,
                                                    deletions: r
                                                }
                                            } = e;
                                            this.updatePullRequest(o, {
                                                info: { ...c,
                                                    message: t
                                                },
                                                changes: {
                                                    additions: s,
                                                    deletions: r
                                                }
                                            })
                                        })).catch((() => i(new Error("Could not get commit information."))));
                                        const l = this.getOrganizationByName(e);
                                        if (l) {
                                            const s = `${e}/${t} - ${o} -`,
                                                {
                                                    installationID: i
                                                } = l;
                                            r.ZP.getProjectsForName(i, s, this.abortControllers.pullRequests.signal, 1).then((({
                                                data: {
                                                    projects: e
                                                }
                                            }) => {
                                                const [t] = e;
                                                t ? this.updatePullRequest(o, {
                                                    projects: {
                                                        name: s,
                                                        installationID: i
                                                    }
                                                }) : this.updatePullRequest(o, {
                                                    projects: null
                                                })
                                            }), (() => {}))
                                        }
                                    })), s()
                                })).catch((e => {
                                    i(new Error("Could not get pull requests for repository."))
                                }))
                            }))
                        },
                        updateRepository(e, t) {
                            this.repositories = { ...this.repositories,
                                [e]: { ...this.repositories[e],
                                    ...t
                                }
                            }
                        },
                        updatePullRequest(e, t) {
                            this.pullRequests = { ...this.pullRequests,
                                [e]: { ...this.pullRequests[e],
                                    ...t
                                }
                            }
                        },
                        setRepositoriesSearch(e) {
                            this.repositoriesSearch = e
                        },
                        setPullRequestsSearch(e) {
                            this.pullRequestsSearch = e
                        },
                        setPullRequestsPage(e) {
                            this.pullRequestsPage = e
                        },
                        getRepositoriesList(e) {
                            return this.abortControllers.repositories ? .abort(), this.abortControllers.repositories = new AbortController, r.ZP.getRepositoriesForOrganization(e, this.abortControllers.repositories.signal)
                        },
                        getBranchesList(e, t) {
                            return this.abortControllers.branches ? .abort(), this.abortControllers.branches = new AbortController, r.ZP.getBranchesForRepository(e, t, this.abortControllers.branches.signal)
                        },
                        importFromZIP(e, t, s, i) {
                            return r.ZP.importFromZIP(e, t, s, i)
                        }
                    }
                })
            },
            92824: function(e, t, s) {
                "use strict";
                s.d(t, {
                    G: function() {
                        return a
                    }
                });
                s(70560);
                var r = s(17030),
                    i = s(43058),
                    o = s(48659);
                const a = (0, o.Q_)("mapping", {
                    state: () => ({
                        mapping: {},
                        providersData: {},
                        ssoProviders: [],
                        pricingPlans: [],
                        regions: [],
                        regionsReady: !1,
                        offers: {}
                    }),
                    getters: {
                        findPricingPlan: e => t => e.pricingPlans.find((e => e.stripe_id === t)),
                        getRegions: e => e.regions.sort(((e, t) => "aws" === e.provider && "aws" !== t.provider ? -1 : "azure" !== e.provider || ["aws", "azure"].includes(t.provider) ? "gcp" === e.provider && ["aws", "azure", "gcp"].includes(t.provider) ? -1 : 1 : -1)),
                        findHoloriValueForLocation: ({
                            regions: e
                        }) => ({
                            location: t,
                            provider: s
                        }) => {
                            if (!t || !s) return "";
                            const r = e.find((e => e.provider === s));
                            if (!r) return "";
                            const i = r.regions.find((e => e.providerValue === t));
                            return i ? i.holoriValue : ""
                        },
                        getHoloriValues: ({
                            regions: e
                        }) => e.map((e => e.regions.map((({
                            holoriValue: e
                        }) => e)))).reduce(((e, t) => e.concat(t)), [])
                    },
                    actions: {
                        getProvidersData() {
                            return new Promise((e => {
                                r.Z.get("providers.json").then((({
                                    data: t
                                }) => {
                                    this.providersData = t, e(t)
                                }))
                            }))
                        },
                        getSSOProviders() {
                            return r.Z.get("sso.json").then((({
                                data: e
                            }) => {
                                this.ssoProviders = e
                            }))
                        },
                        getPricingPlans() {
                            r.Z.getPublic("pricing_plans.json").then((({
                                data: e
                            }) => {
                                this.pricingPlans = e
                            }))
                        },
                        getAllRegions(e) {
                            this.regions = [], this.regionsReady = !1;
                            const t = e.map((({
                                name: e
                            }) => this.get(`${e}/configuration.json`).then((t => {
                                const s = Object.keys(t.regions).map((s => ({
                                    holoriValue: t.regions[s],
                                    providerValue: isNaN(s) ? s : t.regions[s],
                                    providerName: e
                                }))).sort(((e, t) => e.providerValue < t.providerValue ? -1 : 1));
                                this.regions.push({
                                    provider: e,
                                    regions: s
                                })
                            }))));
                            return Promise.all(t).then((() => {
                                this.regionsReady = !0
                            }))
                        },
                        get(e) {
                            return new Promise((t => {
                                const s = this.mapping[e];
                                s ? t(s) : r.Z.get(e).then((({
                                    data: s
                                }) => {
                                    this.mapping[e] = s, t(s)
                                }))
                            }))
                        },
                        getAll(e, t = !0) {
                            return new Promise((s => {
                                Promise.all(e.map(this.get)).then((() => {
                                    let r = {};
                                    e.forEach((e => {
                                        r = t ? { ...r,
                                            ...this.mapping[e]
                                        } : { ...r,
                                            [e]: this.mapping[e]
                                        }
                                    })), s(r)
                                }))
                            }))
                        },
                        getOffers(e, t, s, r, o) {
                            const a = JSON.stringify({
                                companyID: e,
                                productName: t,
                                type: s,
                                location: r,
                                ...o
                            });
                            return new Promise(((n, c) => {
                                const l = this.offers[a];
                                l ? n(l) : i.Z.getOffers(e, t, s, "" === r ? void 0 : r, { ...o,
                                    limit: 1
                                }).then((({
                                    data: e
                                }) => {
                                    const t = "compute" === s ? e.offers[0] : e.storage_offers[0];
                                    if (!t) return c(new Error("No product found"));
                                    const r = { ...t,
                                        product_type: s
                                    };
                                    this.offers[a] = r, n(r)
                                }))
                            }))
                        }
                    }
                })
            },
            20679: function(e, t, s) {
                "use strict";
                s.d(t, {
                    i: function() {
                        return p
                    }
                });
                s(70560);
                var r = s(48659),
                    i = s(27200),
                    o = s(4669),
                    a = s(55102),
                    n = s(84902),
                    c = {
                        import (e, t, s, r) {
                            return a.eE.post(n.Z + "provider_accounts/" + e + "/import", {
                                project_id: t,
                                regions: s,
                                services_options: r
                            })
                        },
                        uploadTerraformFile(e, t) {
                            const s = new FormData;
                            return s.append("project_id", e), s.append("uploaded_file", t), a.eE.post(n.Z + "terraform/import", s, {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            })
                        }
                    },
                    l = s(19464),
                    u = s(67708),
                    d = s(17843);
                const h = {
                        loading: 0,
                        autosave: !0,
                        autosaveDelay: 30,
                        projects: [],
                        currentPage: 1,
                        count: 0,
                        range: [0, 0],
                        pageSize: 20,
                        pageLabel: "Recent",
                        filters: {
                            name: "",
                            shared: !1,
                            deleted: !1,
                            templates: !1
                        },
                        sortBy: "desc(last_activity_date)",
                        history: [],
                        project: null,
                        readonly: !1,
                        savedProject: null,
                        companies: [],
                        selectedCompanies: [],
                        importingProjectID: null,
                        comparingProjectID: null
                    },
                    p = (0, r.Q_)("project", {
                        state: () => h,
                        getters: {
                            isLoading: e => e.loading > 0,
                            isImported: e => null !== e.project ? .imported,
                            projectID: e => e.project ? .id
                        },
                        actions: {
                            create(e) {
                                return o.Z.create(e)
                            },
                            edit(e) {
                                return new Promise(((t, s) => {
                                    o.Z.put(e.id, e).then((({
                                        data: e
                                    }) => {
                                        this.setProject(e), this.setSavedProject(e), t()
                                    }), (e => s(e)))
                                }))
                            },
                            patch(e) {
                                return new Promise(((t, s) => {
                                    o.Z.patch(e.id, e).then((({
                                        data: e
                                    }) => {
                                        this.setProject(e), this.setSavedProject(e), t()
                                    }), (e => s(e)))
                                }))
                            },
                            delete(e) {
                                return new Promise(((t, s) => {
                                    o.Z.delete(e).then((() => {
                                        this.changePage(this.currentPage), t()
                                    }), (e => s(e)))
                                }))
                            },
                            deleteAll() {
                                this.projects.forEach((e => {
                                    this.delete(e.id).then((() => {
                                        this.setProjects(this.projects.filter((t => t.id !== e.id)))
                                    }))
                                })), this.getPage().then((() => {
                                    if (this.projects.length) this.deleteAll();
                                    else {
                                        const e = (0, i.c)();
                                        e.getQuotas()
                                    }
                                }))
                            },
                            async restore(e) {
                                const t = {
                                    id: e,
                                    deleted: !1
                                };
                                await this.patch(t), await this.changePage(this.currentPage)
                            },
                            getFilteredPage(e) {
                                this.setCurrentPage(1), this.setFilters(e), this.getPage()
                            },
                            changePage(e) {
                                this.setCurrentPage(e), this.getPage()
                            },
                            changePageSize(e) {
                                this.setPageSize(e), this.getPage()
                            },
                            getProjects(e, t = {}) {
                                return new Promise((s => {
                                    o.Z.getPage(0, e, t).then((({
                                        data: e
                                    }) => {
                                        this.setProjects(e.projects)
                                    }))
                                }))
                            },
                            getPage() {
                                return new Promise((e => {
                                    this.incrementIsLoading();
                                    const t = (this.currentPage - 1) * this.pageSize;
                                    this.filters.templates ? this.getTemplates().then((s => {
                                        const r = this.filters.name || "",
                                            i = s.filter((e => e.name.toLowerCase().includes(r.toLowerCase()) && this.selectedCompanies.includes(e.provider)));
                                        this.setProjects(i), this.setCount(i.length), this.setRange([t + 1, Math.min(i.length, t + this.pageSize)]), this.decrementIsLoading(), e()
                                    })) : o.Z.getPage(t, this.pageSize, {
                                        sort_by: this.sortBy,
                                        ...this.filters
                                    }).then((({
                                        headers: t,
                                        data: s
                                    }) => {
                                        const r = t["content-range"].split(" ", 2)[1].split("/"),
                                            i = +r[1],
                                            o = r[0].split("-").map((e => parseInt(e, 10)));
                                        this.setCount(i), this.setRange(o), this.setProjects(s.projects), e()
                                    }), (e => {
                                        this.setProjects([])
                                    })).then((() => this.decrementIsLoading()))
                                }))
                            },
                            refreshProject(e) {
                                return new Promise(((t, s) => {
                                    o.Z.get(e).then((({
                                        data: r
                                    }) => {
                                        const {
                                            deleted: i
                                        } = r;
                                        i ? (this.projects = this.projects.filter((t => t.id !== e)), s(new Error("project was deleted"))) : (this.projects = this.projects.map((t => t.id === e ? r : t)), t(r))
                                    }))
                                }))
                            },
                            get(e) {
                                return this.setProject(null), this.setReadonly(!1), this.incrementIsLoading(), new Promise(((t, s) => {
                                    o.Z.get(e).then((e => {
                                        this.setProject(e.data), this.setSavedProject(e.data);
                                        const {
                                            user: s,
                                            shared_with: r,
                                            shared_with_team: i
                                        } = e.data;
                                        let o = !1;
                                        const a = (0, u.L)(),
                                            n = (0, d.A)();
                                        (!r.includes(a.getUserID) && s !== a.getUserID || i && !n.isOwnerOfTeam(i)) && (o = !0), this.setReadonly(o), t(e)
                                    }), (e => {
                                        this.setProject(null), s(e)
                                    })).then((() => this.decrementIsLoading()))
                                }))
                            },
                            getProjectThumbnail(e) {
                                return o.Z.getThumbnail(e).catch((() => {}))
                            },
                            getFromProvider(e, t, s) {
                                let r = null;
                                switch (t) {
                                    case "github":
                                        r = l.ZP.getProjectByID(s, e);
                                        break
                                }
                                if (r) return this.setProject(null), this.incrementIsLoading(), new Promise(((e, t) => {
                                    r.then((({
                                        data: t
                                    }) => {
                                        this.setProject(t), this.setReadonly(!0), this.setSavedProject(t), e(t)
                                    }), (e => {
                                        this.setProject(null), t(e)
                                    })).then((() => {
                                        this.decrementIsLoading()
                                    }))
                                }))
                            },
                            getHistory(e) {
                                return this.setHistory([]), new Promise(((t, s) => {
                                    o.Z.getHistory(e).then((({
                                        data: e
                                    }) => {
                                        this.setHistory(e.history), t()
                                    }), (e => {
                                        this.setHistory([]), s(e)
                                    }))
                                }))
                            },
                            async favorite(e) {
                                return await o.Z.favorite(e).catch((() => {}))
                            },
                            async unfavorite(e) {
                                return await o.Z.unfavorite(e).catch((() => {}))
                            },
                            unyokeUsers({
                                id: e,
                                unyokeUsers: t
                            }) {
                                return new Promise(((s, r) => {
                                    o.Z.unyoke_users(e, {
                                        users: t
                                    }).then((({
                                        data: e
                                    }) => {
                                        this.setProject(e), this.setSavedProject(e), s()
                                    }), (e => r(e)))
                                }))
                            },
                            acceptInvitation(e) {
                                return new Promise(((t, s) => {
                                    o.Z.accept_invitation(e).then((({
                                        data: e
                                    }) => {
                                        this.setProject(e), this.setSavedProject(e), t()
                                    }), (e => s(e)))
                                }))
                            },
                            declineInvitation({
                                commit: e
                            }, t) {
                                return new Promise(((e, s) => {
                                    o.Z.decline_invitation(t).then((({
                                        data: t
                                    }) => {
                                        this.setProject(t), this.setSavedProject(t), e()
                                    }), (e => s(e)))
                                }))
                            },
                            async setCompanies() {
                                const e = [];
                                this.getTemplates().then((t => {
                                    for (const s of t) {
                                        const t = e.find((e => e.name === s.provider));
                                        t ? t.count += 1 : e.push({
                                            name: s.provider,
                                            count: 1
                                        })
                                    }
                                    this.companies = e
                                }))
                            },
                            import ({
                                providerAccountID: e,
                                projectID: t,
                                regions: s,
                                serviceOptions: r
                            }) {
                                return c.import(e, t, s, r)
                            },
                            setProject(e) {
                                this.project = e
                            },
                            setSavedProject(e) {
                                this.savedProject = e
                            },
                            setProjects(e) {
                                this.projects = e
                            },
                            setHistory(e) {
                                this.history = e
                            },
                            toggleAutosave(e) {
                                this.autosave = !this.autosave
                            },
                            setAutosave(e) {
                                this.autosave = e
                            },
                            setAutosaveDelay(e) {
                                this.autosaveDelay = e
                            },
                            setPageSize(e) {
                                this.pageSize = e
                            },
                            setCurrentPage(e) {
                                this.currentPage = e
                            },
                            setPageLabel(e) {
                                this.pageLabel = e
                            },
                            setRange(e) {
                                this.range = e
                            },
                            setCount(e) {
                                this.count = e
                            },
                            setSelectedCompanies(e) {
                                this.selectedCompanies = e
                            },
                            incrementIsLoading(e) {
                                this.loading++
                            },
                            decrementIsLoading(e) {
                                this.loading--
                            },
                            setFilters(e) {
                                this.filters = { ...e
                                }
                            },
                            setImportingProjectID(e) {
                                this.importingProjectID = e
                            },
                            getTemplates() {
                                return new Promise(((e, t) => {
                                    o.Z.getTemplates().then((({
                                        data: t
                                    }) => {
                                        const s = Object.keys(t),
                                            r = s.map((e => ({
                                                id: e,
                                                ...t[e],
                                                thumbnail: `/templates/${e}/thumbnail.png`
                                            })));
                                        e(r)
                                    }), (e => t(e)))
                                }))
                            },
                            getTemplate(e) {
                                return new Promise(((t, s) => {
                                    o.Z.getTemplate(e).then((({
                                        data: s
                                    }) => {
                                        o.Z.getTemplateThumbnail(e).then((e => {
                                            const r = new FileReader;
                                            r.onloadend = function() {
                                                t({ ...s,
                                                    thumbnail: r.result
                                                })
                                            }, r.readAsDataURL(e.data)
                                        }))
                                    }), (e => s(e)))
                                }))
                            },
                            uploadTerraformFile(e, t) {
                                return c.uploadTerraformFile(e, t)
                            },
                            setSortBy(e) {
                                this.sortBy = e
                            },
                            setComparingProjectID(e) {
                                this.comparingProjectID = e
                            },
                            setReadonly(e) {
                                this.readonly = e
                            }
                        }
                    })
            },
            45609: function(e, t, s) {
                "use strict";
                s.d(t, {
                    w: function() {
                        return n
                    }
                });
                var r = s(2228),
                    i = s(48659),
                    o = s(27200);
                const a = {
                        providerAccounts: [],
                        loadingProviderAccounts: !1,
                        providerAccount: null,
                        sync: {
                            loading: !1,
                            last_sync_date: "",
                            last_sync_data: null,
                            last_sync_thumbnail: null
                        },
                        syncHistory: [],
                        syncParams: {
                            offset: 0,
                            sync_date_until: null,
                            sync_date_from: null,
                            sort_by: "desc(sync_date)",
                            limit: 10,
                            total: 0
                        },
                        syncing: null,
                        deleting: null
                    },
                    n = (0, i.Q_)("provider-accounts", {
                        state: () => a,
                        getters: {
                            mostRecentProviderAccounts: ({
                                providerAccounts: e
                            }) => e.slice(0, 5),
                            getName: ({
                                providerAccount: e
                            }) => e ? .name,
                            syncLoading: ({
                                sync: e
                            }) => e.loading,
                            lastSyncDate: ({
                                sync: e
                            }) => e.last_sync_date,
                            lastSyncData: ({
                                sync: e
                            }) => e.last_sync_data,
                            lastSyncThumbnail: ({
                                sync: e
                            }) => e.last_sync_thumbnail,
                            sortedSyncHistory: ({
                                syncHistory: e
                            }) => e.sort(((e, t) => {
                                const s = new Date(e.sync_date).getTime(),
                                    r = new Date(t.sync_date).getTime();
                                return s < r ? 1 : -1
                            })),
                            getSyncHistoryData: ({
                                syncHistory: e
                            }) => t => e.find((e => e.sync_date === t)) ? .sync_data,
                            syncPage: ({
                                syncParams: {
                                    offset: e,
                                    limit: t
                                }
                            }) => e / t + 1
                        },
                        actions: {
                            get(e) {
                                return this.setProviderAccount(null), r.Z.get(e).then((({
                                    data: e
                                }) => {
                                    this.providerAccount = e
                                }))
                            },
                            getProviderAccounts() {
                                return this.loadingProviderAccounts = !0, r.Z.getPage().then((({
                                    data: e
                                }) => {
                                    this.providerAccounts = e.provider_accounts, this.loadingProviderAccounts = !1
                                }))
                            },
                            addProviderAccount(e) {
                                return r.Z.addProviderAccount(e)
                            },
                            testProviderAccount(e) {
                                return r.Z.verify(e)
                            },
                            updateProviderAccount(e) {
                                return r.Z.updateProviderAccount(this.providerAccount.id, e)
                            },
                            getRegions(e) {
                                return r.Z.getRegions(e)
                            },
                            getServices(e) {
                                return r.Z.getServices(e)
                            },
                            setDeleting(e) {
                                this.deleting = e
                            },
                            deleteProviderAccount(e) {
                                return new Promise(((t, s) => {
                                    r.Z.deleteProviderAccount(e).then((() => {
                                        const e = (0, o.c)();
                                        e.getQuotas(), t()
                                    }), (e => s(e)))
                                }))
                            },
                            setProviderAccount(e) {
                                this.providerAccount = e
                            },
                            getSync(e) {
                                return this.setSync({
                                    loading: !0,
                                    last_sync_date: "",
                                    last_sync_data: null,
                                    last_sync_thumbnail: null
                                }), new Promise(((t, s) => {
                                    r.Z.getSync(e).then((e => {
                                        const {
                                            data: r
                                        } = e;
                                        r ? (this.setSync({
                                            loading: !1,
                                            ...r
                                        }), t(this.sync)) : s(new Error("Unable to sync"))
                                    }))
                                }))
                            },
                            setSync(e) {
                                this.sync = e
                            },
                            getSyncHistory(e, t = {}) {
                                return this.syncHistory = [], new Promise(((s, i) => {
                                    if ("demo" === e) return this.syncHistory = this.sync.history.map((e => {
                                        const t = JSON.parse(e);
                                        return {
                                            sync_data: t.changes.diagram,
                                            sync_date: t.date,
                                            sync_thumbnail: t.changes.thumbnail
                                        }
                                    })), s(this.syncHistory);
                                    r.Z.getSyncHistory(e, { ...this.syncParams,
                                        ...t
                                    }).then((e => {
                                        const {
                                            data: t,
                                            headers: r
                                        } = e;
                                        t ? (this.syncHistory = t.history_entries, this.syncParams.total = parseInt(r["content-range"].split("/")[1]), s(this.syncHistory)) : i(new Error("Unable to retrieve sync history"))
                                    }))
                                }))
                            },
                            getSyncHistoryEntry(e, t) {
                                return t === this.lastSyncDate ? new Promise((e => {
                                    const {
                                        lastSyncData: t,
                                        lastSyncDate: s
                                    } = this;
                                    e({
                                        sync_date: s,
                                        sync_data: t
                                    })
                                })) : new Promise(((s, i) => {
                                    if ("demo" === e) {
                                        const e = this.sync.history.find((e => {
                                            const s = JSON.parse(e);
                                            return s.date === t
                                        }));
                                        e || i(new Error("Could not get sync entry"));
                                        const r = JSON.parse(e);
                                        s({
                                            sync_data: r.changes.diagram,
                                            sync_date: r.date
                                        })
                                    } else r.Z.getSyncHistory(e, {
                                        sync_date_from: t,
                                        sync_date_until: t
                                    }).then((e => {
                                        const {
                                            data: r
                                        } = e;
                                        if (r) {
                                            const e = r.history_entries.find((e => e.sync_date === t));
                                            e ? s(e) : i(new Error("Could not get sync entry"))
                                        }
                                    }))
                                }))
                            },
                            startSync(e) {
                                return r.Z.sync(e)
                            },
                            setSyncPage(e) {
                                this.syncParams.offset = (e - 1) * this.syncParams.limit
                            },
                            setSyncDates(e, t) {
                                this.syncParams.sync_date_from = e, this.syncParams.sync_date_until = t
                            },
                            setSyncing(e) {
                                this.syncing = e
                            }
                        }
                    })
            },
            4553: function(e, t, s) {
                "use strict";
                s.d(t, {
                    D: function() {
                        return n
                    }
                });
                var r = s(60956),
                    i = s(43058),
                    o = s(48659);
                const a = {
                        company: null,
                        offers: [],
                        loaded: {},
                        offer: null,
                        locationName: "",
                        companyOffers: []
                    },
                    n = (0, o.Q_)("provider", {
                        state: () => a,
                        getters: {
                            getLocations: e => e.offers.map((e => e.location)),
                            getOfferFromLocation: e => t => e.offers.find((e => e.location === t)),
                            getOffersNames: e => Array.from(new Set(e.companyOffers.map((e => e.name)))),
                            getOffersLocations: e => t => {
                                const s = e.companyOffers.filter((e => e.name === t));
                                return s.map((e => e.location))
                            },
                            getProductDescription: e => t => {
                                const s = e.companyOffers.find((e => e.name === t));
                                return s.description
                            }
                        },
                        actions: {
                            async fetchProvidersInfo(e) {
                                await r.Z.get().then((({
                                    data: t
                                }) => {
                                    const {
                                        companies: s
                                    } = t, r = s.find((t => t.name === e));
                                    void 0 !== r && (this.company = r)
                                }))
                            },
                            fetchProviderOffers(e) {
                                const t = this.company.id;
                                return i.Z.getOffers(t, e).then((({
                                    data: e
                                }) => {
                                    this.offers = e.offers
                                }))
                            },
                            fetchOfferById(e) {
                                e in this.loaded ? this.offer = this.loaded[e] : i.Z.get("/compute/", e).then((({
                                    data: e
                                }) => {
                                    this.loaded[e.id] = e, this.offer = e
                                }))
                            },
                            fetchProviderOffersAll(e) {
                                return i.Z.getOffers(e, null).then((({
                                    data: e
                                }) => {
                                    this.companyOffers = e.offers
                                }))
                            }
                        }
                    })
            },
            17843: function(e, t, s) {
                "use strict";
                s.d(t, {
                    A: function() {
                        return d
                    }
                });
                var r = s(55102),
                    i = s(1200);
                const o = i.Z + "teams";
                var a = {
                        getPage(e, t, s) {
                            return r.ZP.get(o, {
                                params: { ...s,
                                    offset: e,
                                    limit: t
                                }
                            })
                        },
                        create(e) {
                            return r.ZP.post(o, e)
                        },
                        get(e) {
                            return r.ZP.get(`${o}/${e}`)
                        },
                        patch(e, t) {
                            return r.ZP.patch(`${o}/${e}`, t)
                        },
                        put(e, t) {
                            return r.ZP.put(`${o}/${e}`, t)
                        },
                        delete(e) {
                            return r.ZP.delete(`${o}/${e}`)
                        },
                        unyoke_users(e, t) {
                            return r.ZP.post(`${o}/${e}/unyoke`, t)
                        },
                        accept_invitation(e) {
                            return r.ZP.post(`${o}/invitations/${e}`)
                        },
                        decline_invitation(e) {
                            return r.ZP.delete(`${o}/invitations/${e}`)
                        }
                    },
                    n = s(48659),
                    c = s(67708),
                    l = s(27200);
                const u = {
                        isLoading: 0,
                        autosave: !0,
                        autosaveDelay: 30,
                        teams: [],
                        currentPage: 1,
                        count: 0,
                        range: [0, 0],
                        pageSize: 21,
                        pageLabel: "Recent",
                        filters: {
                            name: ""
                        },
                        team: null,
                        deleting: null
                    },
                    d = (0, n.Q_)("team", {
                        state: () => u,
                        getters: {
                            getTeamByID: e => t => e.teams.find((e => e.id === t)),
                            hasTeams: e => e.teams.length > 0,
                            isTeamOwner(e) {
                                const t = (0, c.L)();
                                return this.team ? .creator === t.getUserID
                            },
                            isOwnerOfTeam(e) {
                                const t = (0, c.L)();
                                return e => {
                                    const s = this.getTeamByID(e);
                                    return !!s && s.creator === t.getUserID
                                }
                            }
                        },
                        actions: {
                            create(e) {
                                return a.create(e)
                            },
                            edit(e) {
                                return new Promise(((t, s) => {
                                    a.put(e.id, e).then((({
                                        data: e
                                    }) => {
                                        this.setTeam(e), t()
                                    }), (e => s(e)))
                                }))
                            },
                            patch(e) {
                                return new Promise(((t, s) => {
                                    a.patch(e.id, e).then((({
                                        data: e
                                    }) => {
                                        this.setTeam(e), t()
                                    }), (e => s(e)))
                                }))
                            },
                            delete(e) {
                                return new Promise(((t, s) => {
                                    a.delete(e).then((() => {
                                        this.changePage(this.currentPage);
                                        const e = (0, l.c)();
                                        e.getQuotas(), t()
                                    }), (e => s(e)))
                                }))
                            },
                            unyokeUsers({
                                id: e,
                                unyokeUsers: t
                            }) {
                                return new Promise(((s, r) => {
                                    a.unyoke_users(e, {
                                        users: t
                                    }).then((({
                                        data: e
                                    }) => {
                                        this.setTeam(e), s()
                                    }), (e => r(e)))
                                }))
                            },
                            acceptInvitation(e) {
                                return new Promise(((t, s) => {
                                    a.accept_invitation(e).then((({
                                        data: e
                                    }) => {
                                        this.setTeam(e), t()
                                    }), (e => s(e)))
                                }))
                            },
                            declineInvitation(e) {
                                return new Promise(((t, s) => {
                                    a.decline_invitation(e).then((({
                                        data: e
                                    }) => {
                                        this.setTeam(e), t()
                                    }), (e => s(e)))
                                }))
                            },
                            getFilteredPage(e) {
                                this.setCurrentPage(1), this.setFilters(e), this.getPage()
                            },
                            changePage(e) {
                                this.setCurrentPage(e), this.getPage()
                            },
                            getPage() {
                                this.incrementIsLoading();
                                const e = (this.currentPage - 1) * this.pageSize;
                                a.getPage(e, this.pageSize, this.filters).then((({
                                    headers: e,
                                    data: t
                                }) => {
                                    const s = e["content-range"].split(" ", 2)[1].split("/"),
                                        r = +s[1],
                                        i = s[0].split("-").map((e => parseInt(e, 10)));
                                    this.setCount(r), this.setRange(i), this.setTeams(t.teams)
                                }), (e => {
                                    console.error(e), this.setTeams([])
                                })).then((() => this.decrementIsLoading()))
                            },
                            refreshTeam(e) {
                                a.get(e).then((({
                                    data: e
                                }) => {
                                    this.teams = this.teams.map((t => t.id === e.id ? e : t))
                                }))
                            },
                            get(e) {
                                return this.setTeam(null), this.incrementIsLoading(), new Promise(((t, s) => {
                                    a.get(e).then((e => {
                                        this.setTeam(e.data), t(e)
                                    }), (e => {
                                        this.setTeam(null), s(e)
                                    })).then((() => this.decrementIsLoading()))
                                }))
                            },
                            setDeleting(e) {
                                this.deleting = e
                            },
                            setTeam(e) {
                                this.team = e
                            },
                            setTeams(e) {
                                this.teams = e
                            },
                            setPageSize(e) {
                                this.pageSize = e
                            },
                            setCurrentPage(e) {
                                this.currentPage = e
                            },
                            setRange(e) {
                                this.range = e
                            },
                            setCount(e) {
                                this.count = e
                            },
                            incrementIsLoading() {
                                this.isLoading++
                            },
                            decrementIsLoading() {
                                this.isLoading--
                            },
                            setFilters(e) {
                                this.filters = { ...e
                                }
                            }
                        }
                    })
            },
            67708: function(e, t, s) {
                "use strict";
                s.d(t, {
                    L: function() {
                        return u
                    }
                });
                var r = s(48659),
                    i = s(55102),
                    o = s(1200);
                const a = o.Z + "users";
                var n = {
                        getUser(e) {
                            return i.ZP.get(`${a}/${e}`, {
                                cancelToken: null
                            })
                        },
                        patchUser(e, t) {
                            return i.ZP.patch(`${a}/${e}`, t)
                        },
                        deleteUser(e) {
                            return i.ZP.delete(`${a}/${e}`)
                        }
                    },
                    c = s(27200),
                    l = s(92824);
                const u = (0, r.Q_)("user", {
                    state: () => ({
                        user: null,
                        loadingUser: !1
                    }),
                    getters: {
                        getUserID: e => e.user ? .id,
                        getQuota: e => t => {
                            const s = e.user ? .[`maximum_${t}_number`];
                            return null === s ? 1 / 0 : s
                        },
                        getQuotaValue: e => t => e.user ? .[`${t}_number`] || 0,
                        hasReachedQuota() {
                            return e => this.getQuotaValue(e) >= this.getQuota(e)
                        },
                        getPricingPlan: e => e.user ? .pricing_plan,
                        getPricingPlanName: e => {
                            const t = (0, l.G)();
                            return t.findPricingPlan(e.user ? .pricing_plan) ? .name
                        },
                        getUsername: e => e.user ? .name,
                        isStripeCustomer: e => null !== e.user ? .stripe_customer_id,
                        getGithubID: ({
                            user: e
                        }) => e ? .github_id,
                        getGitlabID: ({
                            user: e
                        }) => e ? .gitlab_id,
                        getBitbucketID: ({
                            user: e
                        }) => e ? .bitbucket_id,
                        hasPassedOnboarding: ({
                            user: e
                        }) => null !== e ? .first_login_date
                    },
                    actions: {
                        get(e) {
                            return n.getUser(e)
                        },
                        refresh() {
                            this.user && this.get(this.user.id).then((e => {
                                this.setUser(e.data)
                            }))
                        },
                        initUserData(e, t = (() => {})) {
                            const s = (0, c.c)();
                            return this.loadingUser || !s.isLoggedIn ? new Promise((e => {
                                e()
                            })) : (this.setLoadingUser(!0), new Promise(((s, r) => {
                                this.get(e).then((({
                                    data: e
                                }) => {
                                    this.setUser(e), t(e), s(e)
                                }), (e => {
                                    r(e)
                                })).then((() => {
                                    this.setLoadingUser(!1)
                                }))
                            })))
                        },
                        patch(e) {
                            return new Promise(((t, s) => {
                                n.patchUser(e.id, e).then((e => {
                                    this.setUser(e.data), t()
                                }), (e => s(e)))
                            }))
                        },
                        setFirstLogin({
                            user: e,
                            ...t
                        }) {
                            return new Promise(((s, r) => {
                                this.patch({
                                    id: e.id,
                                    first_login: !0,
                                    ...t
                                }).then((() => s()), (e => r(e)))
                            }))
                        },
                        updateProviderTokens(e) {
                            return new Promise(((t, s) => {
                                this.patch({
                                    id: e.id,
                                    provider_tokens: e.provider_tokens
                                }).then((() => t()), (e => s(e)))
                            }))
                        },
                        delete(e) {
                            return n.deleteUser(e)
                        },
                        setUser(e) {
                            this.user = e
                        },
                        setLoadingUser(e) {
                            this.loadingUser = e
                        }
                    }
                })
            },
            24654: function() {}
        },
        t = {};

    function s(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, s), o.loaded = !0, o.exports
    }
    s.m = e,
        function() {
            var e = [];
            s.O = function(t, r, i, o) {
                if (!r) {
                    var a = 1 / 0;
                    for (u = 0; u < e.length; u++) {
                        r = e[u][0], i = e[u][1], o = e[u][2];
                        for (var n = !0, c = 0; c < r.length; c++)(!1 & o || a >= o) && Object.keys(s.O).every((function(e) {
                            return s.O[e](r[c])
                        })) ? r.splice(c--, 1) : (n = !1, o < a && (a = o));
                        if (n) {
                            e.splice(u--, 1);
                            var l = i();
                            void 0 !== l && (t = l)
                        }
                    }
                    return t
                }
                o = o || 0;
                for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
                e[u] = [r, i, o]
            }
        }(),
        function() {
            s.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return s.d(t, {
                    a: t
                }), t
            }
        }(),
        function() {
            s.d = function(e, t) {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }
        }(),
        function() {
            s.f = {}, s.e = function(e) {
                return Promise.all(Object.keys(s.f).reduce((function(t, r) {
                    return s.f[r](e, t), t
                }), []))
            }
        }(),
        function() {
            s.u = function(e) {
                return "assets/js/" + ({
                    6: "import",
                    23: "project-diff",
                    58: "resetPassword",
                    80: "new-project",
                    157: "export",
                    176: "projects",
                    206: "gitaccountdemo",
                    231: "checkout",
                    242: "project",
                    340: "new-provider",
                    343: "onboarding",
                    350: "provider-account",
                    354: "verifyAccount",
                    371: "verifyEmail",
                    412: "provider",
                    434: "estimate",
                    535: "login",
                    561: "gitaccount",
                    568: "checkout-result",
                    598: "design",
                    607: "project-diff-compare",
                    609: "team",
                    717: "pricing",
                    768: "new-team",
                    806: "overview",
                    809: "account",
                    815: "quotas",
                    818: "authorize",
                    830: "changePassword",
                    888: "compare",
                    907: "project-diff-visualize",
                    927: "project-diff-diff",
                    966: "dashboard"
                }[e] || e) + "." + {
                    6: "1f453788",
                    20: "ce5ce7df",
                    23: "7f611a5b",
                    24: "1cc376fb",
                    58: "5ead2fd4",
                    80: "dd1307c9",
                    118: "299cc641",
                    157: "2ba95780",
                    176: "e1f23af6",
                    206: "7faa4cdd",
                    231: "50b5e2bf",
                    242: "80da4db7",
                    340: "dead3962",
                    343: "d480c58c",
                    350: "ba45c45b",
                    354: "8fadc268",
                    361: "27007200",
                    371: "12bca73f",
                    389: "ad8a0a9e",
                    412: "8ba36390",
                    434: "80673f11",
                    534: "f6cb904d",
                    535: "152399a4",
                    561: "41233768",
                    568: "21292c07",
                    598: "8f0c4629",
                    607: "61a053c2",
                    609: "e4a73c9c",
                    709: "d818c567",
                    717: "1bc59478",
                    768: "3b93df76",
                    806: "e881a156",
                    809: "4ec7be00",
                    815: "afcb812e",
                    818: "a6020235",
                    830: "b77c89a2",
                    837: "c1f91772",
                    888: "58cf5317",
                    907: "425a4c1e",
                    927: "8e94cd01",
                    942: "5a1463dd",
                    966: "51974539"
                }[e] + ".js"
            }
        }(),
        function() {
            s.miniCssF = function(e) {
                return "css/" + {
                    6: "import",
                    58: "resetPassword",
                    80: "new-project",
                    157: "export",
                    176: "projects",
                    206: "gitaccountdemo",
                    340: "new-provider",
                    343: "onboarding",
                    350: "provider-account",
                    354: "verifyAccount",
                    412: "provider",
                    434: "estimate",
                    535: "login",
                    561: "gitaccount",
                    598: "design",
                    607: "project-diff-compare",
                    609: "team",
                    717: "pricing",
                    806: "overview",
                    809: "account",
                    815: "quotas",
                    830: "changePassword",
                    888: "compare",
                    907: "project-diff-visualize",
                    927: "project-diff-diff",
                    966: "dashboard"
                }[e] + ".css?_hash=" + {
                    6: "949d8923",
                    58: "699d4f0b",
                    80: "d9999104",
                    157: "44c4d60a",
                    176: "110be4bd",
                    206: "c56e1a1e",
                    340: "e7270cc5",
                    343: "aa98f4c1",
                    350: "78f41ae8",
                    354: "04a398b9",
                    412: "27f6f627",
                    434: "398bdc50",
                    535: "87952232",
                    561: "87870be7",
                    598: "d932b0dc",
                    607: "02d14cd0",
                    609: "05aa099c",
                    717: "33d0e8c3",
                    806: "26ebc743",
                    809: "a96ac3dc",
                    815: "dd02649b",
                    830: "40f7f43c",
                    888: "e13c728f",
                    907: "5c30fb9c",
                    927: "7b6d14bc",
                    966: "3f4092ff"
                }[e]
            }
        }(),
        function() {
            s.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            s.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        }(),
        function() {
            var e = {},
                t = "holori:";
            s.l = function(r, i, o, a) {
                if (e[r]) e[r].push(i);
                else {
                    var n, c;
                    if (void 0 !== o)
                        for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                            var d = l[u];
                            if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + o) {
                                n = d;
                                break
                            }
                        }
                    n || (c = !0, n = document.createElement("script"), n.charset = "utf-8", n.timeout = 120, s.nc && n.setAttribute("nonce", s.nc), n.setAttribute("data-webpack", t + o), n.src = r), e[r] = [i];
                    var h = function(t, s) {
                            n.onerror = n.onload = null, clearTimeout(p);
                            var i = e[r];
                            if (delete e[r], n.parentNode && n.parentNode.removeChild(n), i && i.forEach((function(e) {
                                    return e(s)
                                })), t) return t(s)
                        },
                        p = setTimeout(h.bind(null, void 0, {
                            type: "timeout",
                            target: n
                        }), 12e4);
                    n.onerror = h.bind(null, n.onerror), n.onload = h.bind(null, n.onload), c && document.head.appendChild(n)
                }
            }
        }(),
        function() {
            s.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            s.nmd = function(e) {
                return e.paths = [], e.children || (e.children = []), e
            }
        }(),
        function() {
            s.p = "/"
        }(),
        function() {
            if ("undefined" !== typeof document) {
                var e = function(e, t, s, r, i) {
                        var o = document.createElement("link");
                        o.rel = "stylesheet", o.type = "text/css";
                        var a = function(s) {
                            if (o.onerror = o.onload = null, "load" === s.type) r();
                            else {
                                var a = s && ("load" === s.type ? "missing" : s.type),
                                    n = s && s.target && s.target.href || t,
                                    c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                                c.code = "CSS_CHUNK_LOAD_FAILED", c.type = a, c.request = n, o.parentNode && o.parentNode.removeChild(o), i(c)
                            }
                        };
                        return o.onerror = o.onload = a, o.href = t, s ? s.parentNode.insertBefore(o, s.nextSibling) : document.head.appendChild(o), o
                    },
                    t = function(e, t) {
                        for (var s = document.getElementsByTagName("link"), r = 0; r < s.length; r++) {
                            var i = s[r],
                                o = i.getAttribute("data-href") || i.getAttribute("href");
                            if ("stylesheet" === i.rel && (o === e || o === t)) return i
                        }
                        var a = document.getElementsByTagName("style");
                        for (r = 0; r < a.length; r++) {
                            i = a[r], o = i.getAttribute("data-href");
                            if (o === e || o === t) return i
                        }
                    },
                    r = function(r) {
                        return new Promise((function(i, o) {
                            var a = s.miniCssF(r),
                                n = s.p + a;
                            if (t(a, n)) return i();
                            e(r, n, null, i, o)
                        }))
                    },
                    i = {
                        143: 0
                    };
                s.f.miniCss = function(e, t) {
                    var s = {
                        6: 1,
                        58: 1,
                        80: 1,
                        157: 1,
                        176: 1,
                        206: 1,
                        340: 1,
                        343: 1,
                        350: 1,
                        354: 1,
                        412: 1,
                        434: 1,
                        535: 1,
                        561: 1,
                        598: 1,
                        607: 1,
                        609: 1,
                        717: 1,
                        806: 1,
                        809: 1,
                        815: 1,
                        830: 1,
                        888: 1,
                        907: 1,
                        927: 1,
                        966: 1
                    };
                    i[e] ? t.push(i[e]) : 0 !== i[e] && s[e] && t.push(i[e] = r(e).then((function() {
                        i[e] = 0
                    }), (function(t) {
                        throw delete i[e], t
                    })))
                }
            }
        }(),
        function() {
            var e = {
                143: 0
            };
            s.f.j = function(t, r) {
                var i = s.o(e, t) ? e[t] : void 0;
                if (0 !== i)
                    if (i) r.push(i[2]);
                    else {
                        var o = new Promise((function(s, r) {
                            i = e[t] = [s, r]
                        }));
                        r.push(i[2] = o);
                        var a = s.p + s.u(t),
                            n = new Error,
                            c = function(r) {
                                if (s.o(e, t) && (i = e[t], 0 !== i && (e[t] = void 0), i)) {
                                    var o = r && ("load" === r.type ? "missing" : r.type),
                                        a = r && r.target && r.target.src;
                                    n.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", n.name = "ChunkLoadError", n.type = o, n.request = a, i[1](n)
                                }
                            };
                        s.l(a, c, "chunk-" + t, t)
                    }
            }, s.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, r) {
                    var i, o, a = r[0],
                        n = r[1],
                        c = r[2],
                        l = 0;
                    if (a.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (i in n) s.o(n, i) && (s.m[i] = n[i]);
                        if (c) var u = c(s)
                    }
                    for (t && t(r); l < a.length; l++) o = a[l], s.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return s.O(u)
                },
                r = self["webpackChunkholori"] = self["webpackChunkholori"] || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }();
    var r = s.O(void 0, [998], (function() {
        return s(27952)
    }));
    r = s.O(r)
})();
//# sourceMappingURL=app.3e3c4ffa.js.map