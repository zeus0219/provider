/**handles:swv,contact-form-7,sl-fetch**/
(() => {
  "use strict";
  var s = {
      d: (t, e) => {
        for (var i in e)
          s.o(e, i) &&
            !s.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    o = {},
    t;
  function e(t) {
    if (((this.formData = {}), (this.tree = {}), !(t instanceof FormData)))
      return this;
    this.formData = t;
    const s = () => {
      const i = new Map();
      return (
        (i.largestIndex = 0),
        (i.set = function (t, e) {
          "" === t
            ? (t = i.largestIndex++)
            : /^[0-9]+$/.test(t) &&
              ((t = parseInt(t)),
              i.largestIndex <= t && (i.largestIndex = t + 1)),
            Map.prototype.set.call(i, t, e);
        }),
        i
      );
    };
    this.tree = s();
    const e =
      /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
    for (const [t, i] of this.formData) {
      const o = t.match(e);
      if (o)
        if ("" === o.groups.array) this.tree.set(o.groups.name, i);
        else {
          const t = [
            ...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi),
          ].map(([t, e]) => e);
          t.unshift(o.groups.name);
          const e = t.pop();
          t.reduce((t, e) => {
            if (
              (/^[0-9]+$/.test(e) && (e = parseInt(e)), t.get(e) instanceof Map)
            )
              return t.get(e);
            var i = s();
            return t.set(e, i), i;
          }, this.tree).set(e, i);
        }
    }
  }
  s.r(o),
    s.d(o, {
      all: () => M,
      any: () => F,
      date: () => d,
      dayofweek: () => v,
      email: () => a,
      enum: () => u,
      file: () => h,
      maxdate: () => j,
      maxfilesize: () => I,
      maxitems: () => g,
      maxlength: () => y,
      maxnumber: () => A,
      mindate: () => z,
      minfilesize: () => $,
      minitems: () => w,
      minlength: () => x,
      minnumber: () => b,
      number: () => f,
      required: () => i,
      requiredfile: () => n,
      tel: () => c,
      time: () => m,
      url: () => l,
    }),
    (e.prototype.entries = function () {
      return this.tree.entries();
    }),
    (e.prototype.get = function (t) {
      return this.tree.get(t);
    }),
    (e.prototype.getAll = function (t) {
      if (!this.has(t)) return [];
      const o = (t) => {
        const e = [];
        if (t instanceof Map) for (var [i, s] of t) e.push(...o(s));
        else "" !== t && e.push(t);
        return e;
      };
      return o(this.get(t));
    }),
    (e.prototype.has = function (t) {
      return this.tree.has(t);
    }),
    (e.prototype.keys = function () {
      return this.tree.keys();
    }),
    (e.prototype.values = function () {
      return this.tree.values();
    });
  const r = e;
  function p({ rule: t, field: e, error: i, ...s }) {
    (this.rule = t), (this.field = e), (this.error = i), (this.properties = s);
  }
  const i = function (t) {
      if (0 === t.getAll(this.field).length) throw new p(this);
    },
    n = function (t) {
      if (0 === t.getAll(this.field).length) throw new p(this);
    },
    a = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if ((t = t.trim()).length < 6) return !1;
          if (-1 === t.indexOf("@", 1)) return !1;
          if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
          const [e, i] = t.split("@", 2);
          if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
          if (/\.{2,}/.test(i)) return !1;
          if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i)) return !1;
          var t = i.split(".");
          if (t.length < 2) return !1;
          for (const s of t) {
            if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(s)) return !1;
            if (!/^[a-z0-9-]+$/i.test(s)) return !1;
          }
          return !0;
        })
      )
        throw new p(this);
    },
    l = function (t) {
      const e = t.getAll(this.field);
      if (
        !e.every((t) => {
          if ("" === (t = t.trim())) return !1;
          try {
            return (
              -1 !==
              [
                "http",
                "https",
                "ftp",
                "ftps",
                "mailto",
                "news",
                "irc",
                "irc6",
                "ircs",
                "gopher",
                "nntp",
                "feed",
                "telnet",
                "mms",
                "rtsp",
                "sms",
                "svn",
                "tel",
                "fax",
                "xmpp",
                "webcal",
                "urn",
              ].indexOf(new URL(t).protocol.replace(/:$/, ""))
            );
          } catch {
            return !1;
          }
        })
      )
        throw new p(this);
    },
    c = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, "")),
              /^[+]?[0-9]+$/.test(t)
            )
          )
      )
        throw new p(this);
    },
    f = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) ||
                !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)
            )
          )
      )
        throw new p(this);
    },
    d = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if (((t = t.trim()), !/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)))
            return !1;
          const e = new Date(t);
          return !Number.isNaN(e.valueOf());
        })
      )
        throw new p(this);
    },
    m = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          var e = t.trim().match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);
          if (!e) return !1;
          var i = parseInt(e[1]),
            t = parseInt(e[2]),
            e = e[3] ? parseInt(e[3]) : 0;
          return 0 <= i && i <= 23 && 0 <= t && t <= 59 && 0 <= e && e <= 59;
        })
      )
        throw new p(this);
    },
    h = function (t) {
      if (
        !t.getAll(this.field).every(
          (e) =>
            e instanceof File &&
            this.accept?.some((t) =>
              /^\.[a-z0-9]+$/i.test(t)
                ? e.name.toLowerCase().endsWith(t.toLowerCase())
                : ((t) => {
                    const e = [],
                      i = t.match(
                        /^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i
                      );
                    if (i) {
                      const t = i.groups.toplevel.toLowerCase(),
                        n = i.groups.sub.toLowerCase();
                      for (var [s, o] of (() => {
                        const t = new Map();
                        return (
                          t.set("jpg|jpeg|jpe", "image/jpeg"),
                          t.set("gif", "image/gif"),
                          t.set("png", "image/png"),
                          t.set("bmp", "image/bmp"),
                          t.set("tiff|tif", "image/tiff"),
                          t.set("webp", "image/webp"),
                          t.set("ico", "image/x-icon"),
                          t.set("heic", "image/heic"),
                          t.set("asf|asx", "video/x-ms-asf"),
                          t.set("wmv", "video/x-ms-wmv"),
                          t.set("wmx", "video/x-ms-wmx"),
                          t.set("wm", "video/x-ms-wm"),
                          t.set("avi", "video/avi"),
                          t.set("divx", "video/divx"),
                          t.set("flv", "video/x-flv"),
                          t.set("mov|qt", "video/quicktime"),
                          t.set("mpeg|mpg|mpe", "video/mpeg"),
                          t.set("mp4|m4v", "video/mp4"),
                          t.set("ogv", "video/ogg"),
                          t.set("webm", "video/webm"),
                          t.set("mkv", "video/x-matroska"),
                          t.set("3gp|3gpp", "video/3gpp"),
                          t.set("3g2|3gp2", "video/3gpp2"),
                          t.set("txt|asc|c|cc|h|srt", "text/plain"),
                          t.set("csv", "text/csv"),
                          t.set("tsv", "text/tab-separated-values"),
                          t.set("ics", "text/calendar"),
                          t.set("rtx", "text/richtext"),
                          t.set("css", "text/css"),
                          t.set("htm|html", "text/html"),
                          t.set("vtt", "text/vtt"),
                          t.set("dfxp", "application/ttaf+xml"),
                          t.set("mp3|m4a|m4b", "audio/mpeg"),
                          t.set("aac", "audio/aac"),
                          t.set("ra|ram", "audio/x-realaudio"),
                          t.set("wav", "audio/wav"),
                          t.set("ogg|oga", "audio/ogg"),
                          t.set("flac", "audio/flac"),
                          t.set("mid|midi", "audio/midi"),
                          t.set("wma", "audio/x-ms-wma"),
                          t.set("wax", "audio/x-ms-wax"),
                          t.set("mka", "audio/x-matroska"),
                          t.set("rtf", "application/rtf"),
                          t.set("js", "application/javascript"),
                          t.set("pdf", "application/pdf"),
                          t.set("swf", "application/x-shockwave-flash"),
                          t.set("class", "application/java"),
                          t.set("tar", "application/x-tar"),
                          t.set("zip", "application/zip"),
                          t.set("gz|gzip", "application/x-gzip"),
                          t.set("rar", "application/rar"),
                          t.set("7z", "application/x-7z-compressed"),
                          t.set("exe", "application/x-msdownload"),
                          t.set("psd", "application/octet-stream"),
                          t.set("xcf", "application/octet-stream"),
                          t.set("doc", "application/msword"),
                          t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                          t.set("wri", "application/vnd.ms-write"),
                          t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                          t.set("mdb", "application/vnd.ms-access"),
                          t.set("mpp", "application/vnd.ms-project"),
                          t.set(
                            "docx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ),
                          t.set(
                            "docm",
                            "application/vnd.ms-word.document.macroEnabled.12"
                          ),
                          t.set(
                            "dotx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
                          ),
                          t.set(
                            "dotm",
                            "application/vnd.ms-word.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlsx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          ),
                          t.set(
                            "xlsm",
                            "application/vnd.ms-excel.sheet.macroEnabled.12"
                          ),
                          t.set(
                            "xlsb",
                            "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
                          ),
                          t.set(
                            "xltx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
                          ),
                          t.set(
                            "xltm",
                            "application/vnd.ms-excel.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlam",
                            "application/vnd.ms-excel.addin.macroEnabled.12"
                          ),
                          t.set(
                            "pptx",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                          ),
                          t.set(
                            "pptm",
                            "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
                          ),
                          t.set(
                            "ppsx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
                          ),
                          t.set(
                            "ppsm",
                            "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
                          ),
                          t.set(
                            "potx",
                            "application/vnd.openxmlformats-officedocument.presentationml.template"
                          ),
                          t.set(
                            "potm",
                            "application/vnd.ms-powerpoint.template.macroEnabled.12"
                          ),
                          t.set(
                            "ppam",
                            "application/vnd.ms-powerpoint.addin.macroEnabled.12"
                          ),
                          t.set(
                            "sldx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slide"
                          ),
                          t.set(
                            "sldm",
                            "application/vnd.ms-powerpoint.slide.macroEnabled.12"
                          ),
                          t.set(
                            "onetoc|onetoc2|onetmp|onepkg",
                            "application/onenote"
                          ),
                          t.set("oxps", "application/oxps"),
                          t.set("xps", "application/vnd.ms-xpsdocument"),
                          t.set(
                            "odt",
                            "application/vnd.oasis.opendocument.text"
                          ),
                          t.set(
                            "odp",
                            "application/vnd.oasis.opendocument.presentation"
                          ),
                          t.set(
                            "ods",
                            "application/vnd.oasis.opendocument.spreadsheet"
                          ),
                          t.set(
                            "odg",
                            "application/vnd.oasis.opendocument.graphics"
                          ),
                          t.set(
                            "odc",
                            "application/vnd.oasis.opendocument.chart"
                          ),
                          t.set(
                            "odb",
                            "application/vnd.oasis.opendocument.database"
                          ),
                          t.set(
                            "odf",
                            "application/vnd.oasis.opendocument.formula"
                          ),
                          t.set("wp|wpd", "application/wordperfect"),
                          t.set("key", "application/vnd.apple.keynote"),
                          t.set("numbers", "application/vnd.apple.numbers"),
                          t.set("pages", "application/vnd.apple.pages"),
                          t
                        );
                      })())
                        (("*" === n && o.startsWith(t + "/")) || o === i[0]) &&
                          e.push(...s.split("|"));
                    }
                    return e;
                  })(t).some(
                    (t) => (
                      (t = "." + t.trim()),
                      e.name.toLowerCase().endsWith(t.toLowerCase())
                    )
                  )
            )
        )
      )
        throw new p(this);
    },
    u = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((e) => this.accept?.some((t) => e === String(t)))
      )
        throw new p(this);
    },
    v = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          const e = 0 === (t = new Date(t).getDay()) ? 7 : t;
          var t;
          return this.accept?.some((t) => e === parseInt(t));
        })
      )
        throw new p(this);
    },
    w = function (t) {
      if (t.getAll(this.field).length < parseInt(this.threshold))
        throw new p(this);
    },
    g = function (t) {
      var t = t.getAll(this.field);
      if (parseInt(this.threshold) < t.length) throw new p(this);
    },
    x = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (i += t.length);
        }),
        0 !== i && i < parseInt(this.threshold))
      )
        throw new p(this);
    },
    y = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (i += t.length);
        }),
        parseInt(this.threshold) < i)
      )
        throw new p(this);
    },
    b = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(t) < parseFloat(this.threshold)))
      )
        throw new p(this);
    },
    A = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(this.threshold) < parseFloat(t)))
      )
        throw new p(this);
    },
    z = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                t < this.threshold
              )
            )
          )
      )
        throw new p(this);
    },
    j = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                this.threshold < t
              )
            )
          )
      )
        throw new p(this);
    },
    $ = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (i += t.size);
        }),
        i < parseInt(this.threshold))
      )
        throw new p(this);
    },
    I = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (i += t.size);
        }),
        parseInt(this.threshold) < i)
      )
        throw new p(this);
    },
    O = ({ ruleObj: t, options: e }) => {
      const { rule: i, ...s } = t;
      return (
        "function" == typeof o[i] &&
        ("function" != typeof o[i].matches || o[i].matches(s, e))
      );
    },
    E = ({ ruleObj: t, formDataTree: e, options: i }) => {
      var { rule: s } = t;
      o[s].call(t, e, i);
    },
    k = [],
    D = (t) => [...k].reduce((e, i) => (t) => i(t, e), t),
    M = function (e, i = {}) {
      const t = (this.rules ?? []).filter((t) => O({ ruleObj: t, options: i })),
        s = D(E);
      if (
        !t.every((t) => {
          try {
            s({ ruleObj: t, formDataTree: e, options: i });
          } catch (t) {
            if (!(t instanceof p)) throw t;
            if (void 0 !== t.error) throw t;
            return !1;
          }
          return !0;
        })
      )
        throw new p(this);
    },
    F = function (e, i = {}) {
      const t = (this.rules ?? []).filter((t) => O({ ruleObj: t, options: i })),
        s = D(E);
      if (
        !t.some((t) => {
          try {
            s({ ruleObj: t, formDataTree: e, options: i });
          } catch (t) {
            if (!(t instanceof p)) throw t;
            return !1;
          }
          return !0;
        })
      )
        throw new p(this);
    };
  window.swv = {
    validators: o,
    validate: (t, e, i = {}) => {
      const s = (t.rules ?? []).filter((t) => O({ ruleObj: t, options: i }));
      if (!s.length) return new Map();
      const o = D(E),
        n = new r(e),
        a = s.reduce((t, e) => {
          try {
            o({ ruleObj: e, formDataTree: n, options: i });
          } catch (e) {
            if (!(e instanceof p)) throw e;
            if (void 0 !== e.field && !t.has(e.field) && void 0 !== e.error)
              return t.set(e.field, e);
          }
          return t;
        }, new Map());
      for (const t of n.keys())
        a.has(t) || a.set(t, { validInputs: n.getAll(t) });
      return a;
    },
    use: (t) => {
      k.push(t);
    },
    ...(null !== (t = window.swv) && void 0 !== t ? t : {}),
  };
})();
(() => {
  "use strict";
  const n = window.wp.i18n,
    c = (e) => Math.abs(parseInt(e, 10)),
    o = (e, t, a) => {
      var a = new CustomEvent(`wpcf7${t}`, { bubbles: !0, detail: a });
      (e = "string" == typeof e ? document.querySelector(e) : e).dispatchEvent(
        a
      );
    },
    l = (e, t) => {
      const a = new Map([
        ["init", "init"],
        ["validation_failed", "invalid"],
        ["acceptance_missing", "unaccepted"],
        ["spam", "spam"],
        ["aborted", "aborted"],
        ["mail_sent", "sent"],
        ["mail_failed", "failed"],
        ["submitting", "submitting"],
        ["resetting", "resetting"],
        ["validating", "validating"],
        ["payment_required", "payment-required"],
      ]);
      a.has(t) && (t = a.get(t)),
        Array.from(a.values()).includes(t) ||
          (t = `custom-${(t = (t = t
            .replace(/[^0-9a-z]+/i, " ")
            .trim()).replace(/\s+/, "-"))}`);
      var r = e.getAttribute("data-status");
      if (
        ((e.wpcf7.status = t),
        e.setAttribute("data-status", t),
        e.classList.add(t),
        r && r !== t)
      ) {
        e.classList.remove(r);
        const t = {
          contactFormId: e.wpcf7.id,
          pluginVersion: e.wpcf7.pluginVersion,
          contactFormLocale: e.wpcf7.locale,
          unitTag: e.wpcf7.unitTag,
          containerPostId: e.wpcf7.containerPost,
          status: e.wpcf7.status,
          prevStatus: r,
        };
        o(e, "statuschanged", t);
      }
      return t;
    },
    s = (e) => {
      const { root: f, namespace: u = "contact-form-7/v1" } = wpcf7.api;
      return t.reduceRight(
        (t, a) => (e) => a(e, t),
        (e) => {
          let t,
            a,
            {
              url: r,
              path: n,
              endpoint: o,
              headers: c,
              body: s,
              data: i,
              ...l
            } = e;
          "string" == typeof o &&
            ((t = u.replace(/^\/|\/$/g, "")),
            (a = o.replace(/^\//, "")),
            (n = a ? t + "/" + a : t)),
            "string" == typeof n &&
              (-1 !== f.indexOf("?") && (n = n.replace("?", "&")),
              (n = n.replace(/^\//, "")),
              (r = f + n)),
            (c = { Accept: "application/json, */*;q=0.1", ...c }),
            delete c["X-WP-Nonce"],
            i &&
              ((s = JSON.stringify(i)),
              (c["Content-Type"] = "application/json"));
          const p = {
              code: "fetch_error",
              message: "You are probably offline.",
            },
            d = {
              code: "invalid_json",
              message: "The response is not a valid JSON response.",
            };
          return window
            .fetch(r || n || window.location.href, {
              ...l,
              headers: c,
              body: s,
            })
            .then(
              (e) =>
                Promise.resolve(e)
                  .then((e) => {
                    if (200 <= e.status && e.status < 300) return e;
                    throw e;
                  })
                  .then((e) => {
                    if (204 === e.status) return null;
                    if (e && e.json)
                      return e.json().catch(() => {
                        throw d;
                      });
                    throw d;
                  }),
              () => {
                throw p;
              }
            );
        }
      )(e);
    },
    t = [];
  function a(a, r = {}) {
    const { target: n, scope: o = a, ...e } = r;
    if (void 0 !== a.wpcf7?.schema) {
      const c = { ...a.wpcf7.schema };
      if (void 0 !== n) {
        if (!a.contains(n)) return;
        if (!n.closest(".wpcf7-form-control-wrap[data-name]")) return;
        if (n.closest(".novalidate")) return;
      }
      const s = o.querySelectorAll(".wpcf7-form-control-wrap"),
        i = Array.from(s).reduce(
          (r, e) => (
            e.closest(".novalidate") ||
              e
                .querySelectorAll(":where( input, textarea, select ):enabled")
                .forEach((e) => {
                  if (e.name)
                    switch (e.type) {
                      case "button":
                      case "image":
                      case "reset":
                      case "submit":
                        break;
                      case "checkbox":
                      case "radio":
                        e.checked && r.append(e.name, e.value);
                        break;
                      case "select-multiple":
                        for (const t of e.selectedOptions)
                          r.append(e.name, t.value);
                        break;
                      case "file":
                        for (const a of e.files) r.append(e.name, a);
                        break;
                      default:
                        r.append(e.name, e.value);
                    }
                }),
            r
          ),
          new FormData()
        ),
        t = a.getAttribute("data-status");
      Promise.resolve(l(a, "validating"))
        .then((e) => {
          if (void 0 !== swv) {
            const e = swv.validate(c, i, r);
            for (const r of s)
              if (void 0 !== r.dataset.name) {
                var t = r.dataset.name;
                if (e.has(t)) {
                  const { error: r, validInputs: n } = e.get(t);
                  d(a, t),
                    void 0 !== r && p(a, t, r, { scope: o }),
                    f(a, t, null != n ? n : []);
                }
                if (r.contains(n)) break;
              }
          }
        })
        .finally(() => {
          l(a, t);
        });
    }
  }
  s.use = (e) => {
    t.unshift(e);
  };
  const p = (t, e, a, r) => {
      const { scope: n = t, ...o } = null != r ? r : {},
        c = `${t.wpcf7?.unitTag}-ve-${e}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
        s = t.querySelector(
          `.wpcf7-form-control-wrap[data-name="${e}"] .wpcf7-form-control`
        );
      (() => {
        const e = document.createElement("li");
        e.setAttribute("id", c),
          s && s.id
            ? e.insertAdjacentHTML("beforeend", `<a href="#${s.id}">${a}</a>`)
            : e.insertAdjacentText("beforeend", a),
          t.wpcf7.parent
            .querySelector(".screen-reader-response ul")
            .appendChild(e);
      })(),
        n
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${e}"]`)
          .forEach((e) => {
            const t = document.createElement("span");
            t.classList.add("wpcf7-not-valid-tip"),
              t.setAttribute("aria-hidden", "true"),
              t.insertAdjacentText("beforeend", a),
              e.appendChild(t),
              e.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "true");
              }),
              e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.classList.add("wpcf7-not-valid"),
                  e.setAttribute("aria-describedby", c),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity(a),
                  e.closest(".use-floating-validation-tip") &&
                    (e.addEventListener("focus", (e) => {
                      t.setAttribute("style", "display: none");
                    }),
                    t.addEventListener("click", (e) => {
                      t.setAttribute("style", "display: none");
                    }));
              });
          });
    },
    d = (e, t) => {
      var a = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
      e.wpcf7.parent
        .querySelector(`.screen-reader-response ul li#${a}`)
        ?.remove(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((e) => {
            e.querySelector(".wpcf7-not-valid-tip")?.remove(),
              e.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "false");
              }),
              e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.removeAttribute("aria-describedby"),
                  e.classList.remove("wpcf7-not-valid"),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity("");
              });
          });
    },
    f = (e, r, t) => {
      e.querySelectorAll(`[data-reflection-of="${r}"]`).forEach((a) => {
        if ("output" === a.tagName.toLowerCase()) {
          const r = a;
          0 === t.length && t.push(r.dataset.default),
            t.slice(0, 1).forEach((e) => {
              e instanceof File && (e = e.name), (r.textContent = e);
            });
        } else
          a.querySelectorAll("output").forEach((e) => {
            e.hasAttribute("data-default")
              ? 0 === t.length
                ? e.removeAttribute("hidden")
                : e.setAttribute("hidden", "hidden")
              : e.remove();
          }),
            t.forEach((e) => {
              e instanceof File && (e = e.name);
              const t = document.createElement("output");
              t.setAttribute("name", r), (t.textContent = e), a.appendChild(t);
            });
      });
    };
  function r(a, e = {}) {
    if (wpcf7.blocked) return i(a), void l(a, "submitting");
    const t = new FormData(a);
    e.submitter &&
      e.submitter.name &&
      t.append(e.submitter.name, e.submitter.value);
    const r = {
      contactFormId: a.wpcf7.id,
      pluginVersion: a.wpcf7.pluginVersion,
      contactFormLocale: a.wpcf7.locale,
      unitTag: a.wpcf7.unitTag,
      containerPostId: a.wpcf7.containerPost,
      status: a.wpcf7.status,
      inputs: Array.from(t, (e) => {
        const t = e[0],
          a = e[1];
        return !t.match(/^_/) && { name: t, value: a };
      }).filter((e) => !1 !== e),
      formData: t,
    };
    s({
      endpoint: `contact-forms/${a.wpcf7.id}/feedback`,
      method: "POST",
      body: t,
      wpcf7: { endpoint: "feedback", form: a, detail: r },
    })
      .then((e) => {
        var t = l(a, e.status);
        return (
          (r.status = e.status),
          (r.apiResponse = e),
          ["invalid", "unaccepted", "spam", "aborted"].includes(t)
            ? o(a, t, r)
            : ["sent", "failed"].includes(t) && o(a, `mail${t}`, r),
          o(a, "submit", r),
          e
        );
      })
      .then((t) => {
        t.posted_data_hash &&
          (a.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
            t.posted_data_hash),
          "mail_sent" === t.status &&
            (a.reset(), (a.wpcf7.resetOnMailSent = !0)),
          t.invalid_fields &&
            t.invalid_fields.forEach((e) => {
              p(a, e.field, e.message);
            }),
          a.wpcf7.parent
            .querySelector('.screen-reader-response [role="status"]')
            .insertAdjacentText("beforeend", t.message),
          a.querySelectorAll(".wpcf7-response-output").forEach((e) => {
            e.innerText = t.message;
          });
      })
      .catch((e) => console.error(e));
  }
  s.use((e, t) => {
    if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
      const { form: t, detail: a } = e.wpcf7;
      i(t), o(t, "beforesubmit", a), l(t, "submitting");
    }
    return t(e);
  });
  const i = (t) => {
    t.querySelectorAll(".wpcf7-form-control-wrap").forEach((e) => {
      e.dataset.name && d(t, e.dataset.name);
    }),
      (t.wpcf7.parent.querySelector(
        '.screen-reader-response [role="status"]'
      ).innerText = ""),
      t.querySelectorAll(".wpcf7-response-output").forEach((e) => {
        e.innerText = "";
      });
  };
  function u(t) {
    const e = new FormData(t),
      a = {
        contactFormId: t.wpcf7.id,
        pluginVersion: t.wpcf7.pluginVersion,
        contactFormLocale: t.wpcf7.locale,
        unitTag: t.wpcf7.unitTag,
        containerPostId: t.wpcf7.containerPost,
        status: t.wpcf7.status,
        inputs: Array.from(e, (e) => {
          const t = e[0],
            a = e[1];
          return !t.match(/^_/) && { name: t, value: a };
        }).filter((e) => !1 !== e),
        formData: e,
      };
    s({
      endpoint: `contact-forms/${t.wpcf7.id}/refill`,
      method: "GET",
      wpcf7: { endpoint: "refill", form: t, detail: a },
    })
      .then((e) => {
        t.wpcf7.resetOnMailSent
          ? (delete t.wpcf7.resetOnMailSent, l(t, "mail_sent"))
          : l(t, "init"),
          (a.apiResponse = e),
          o(t, "reset", a);
      })
      .catch((e) => console.error(e));
  }
  s.use((e, t) => {
    if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
      const { form: t, detail: a } = e.wpcf7;
      i(t), l(t, "resetting");
    }
    return t(e);
  });
  const m = (e, t) => {
      for (const a in t) {
        const r = t[a];
        e.querySelectorAll(`input[name="${a}"]`).forEach((e) => {
          e.value = "";
        }),
          e
            .querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`)
            .forEach((e) => {
              e.setAttribute("src", r);
            });
        const n = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
        n &&
          e
            .querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`)
            .forEach((e) => {
              e.value = n[1];
            });
      }
    },
    w = (e, t) => {
      for (const a in t) {
        const r = t[a][0],
          n = t[a][1];
        e.querySelectorAll(
          `.wpcf7-form-control-wrap[data-name="${a}"]`
        ).forEach((e) => {
          (e.querySelector(`input[name="${a}"]`).value = ""),
            (e.querySelector(".wpcf7-quiz-label").textContent = r),
            (e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value =
              n);
        });
      }
    };
  function h(t) {
    const e = new FormData(t);
    var a, r, n;
    (t.wpcf7 = {
      id: c(e.get("_wpcf7")),
      status: t.getAttribute("data-status"),
      pluginVersion: e.get("_wpcf7_version"),
      locale: e.get("_wpcf7_locale"),
      unitTag: e.get("_wpcf7_unit_tag"),
      containerPost: c(e.get("_wpcf7_container_post")),
      parent: t.closest(".wpcf7"),
      get schema() {
        return wpcf7.schemas.get(this.id);
      },
    }),
      wpcf7.schemas.set(t.wpcf7.id, void 0),
      t.querySelectorAll(".has-spinner").forEach((e) => {
        e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>');
      }),
      (n = t).querySelectorAll(".wpcf7-exclusive-checkbox").forEach((e) => {
        e.addEventListener("change", (t) => {
          var e = t.target.getAttribute("name");
          n.querySelectorAll(`input[type="checkbox"][name="${e}"]`).forEach(
            (e) => {
              e !== t.target && (e.checked = !1);
            }
          );
        });
      }),
      (r = t).querySelectorAll(".has-free-text").forEach((e) => {
        const t = e.querySelector("input.wpcf7-free-text"),
          a = e.querySelector('input[type="checkbox"], input[type="radio"]');
        (t.disabled = !a.checked),
          r.addEventListener("change", (e) => {
            (t.disabled = !a.checked), e.target === a && a.checked && t.focus();
          });
      }),
      t.querySelectorAll(".wpcf7-validates-as-url").forEach((a) => {
        a.addEventListener("change", (e) => {
          let t = a.value.trim();
          t &&
            !t.match(/^[a-z][a-z0-9.+-]*:/i) &&
            -1 !== t.indexOf(".") &&
            ((t = t.replace(/^\/+/, "")), (t = "http://" + t)),
            (a.value = t);
        });
      }),
      ((e) => {
        if (
          e.querySelector(".wpcf7-acceptance") &&
          !e.classList.contains("wpcf7-acceptance-as-validation")
        ) {
          const t = () => {
            let a = !0;
            e.querySelectorAll(".wpcf7-acceptance").forEach((e) => {
              var t;
              a &&
                !e.classList.contains("optional") &&
                ((t = e.querySelector('input[type="checkbox"]')),
                ((e.classList.contains("invert") && t.checked) ||
                  (!e.classList.contains("invert") && !t.checked)) &&
                  (a = !1));
            }),
              e.querySelectorAll(".wpcf7-submit").forEach((e) => {
                e.disabled = !a;
              });
          };
          t(),
            e.addEventListener("change", (e) => {
              t();
            }),
            e.addEventListener("wpcf7reset", (e) => {
              t();
            });
        }
      })(t),
      ((n) => {
        const o = (e, t) => {
            var a = c(e.getAttribute("data-starting-value")),
              r = c(e.getAttribute("data-maximum-value")),
              n = c(e.getAttribute("data-minimum-value")),
              a = e.classList.contains("down")
                ? a - t.value.length
                : t.value.length;
            e.setAttribute("data-current-value", a),
              (e.innerText = a),
              r && r < t.value.length
                ? e.classList.add("too-long")
                : e.classList.remove("too-long"),
              n && t.value.length < n
                ? e.classList.add("too-short")
                : e.classList.remove("too-short");
          },
          t = (r) => {
            (r = { init: !1, ...r }),
              n.querySelectorAll(".wpcf7-character-count").forEach((t) => {
                const e = t.getAttribute("data-target-name"),
                  a = n.querySelector(`[name="${e}"]`);
                a &&
                  ((a.value = a.defaultValue),
                  o(t, a),
                  r.init &&
                    a.addEventListener("keyup", (e) => {
                      o(t, a);
                    }));
              });
          };
        t({ init: !0 }),
          n.addEventListener("wpcf7reset", (e) => {
            t();
          });
      })(t),
      window.addEventListener("load", (e) => {
        wpcf7.cached && t.reset();
      }),
      t.addEventListener("reset", (e) => {
        wpcf7.reset(t);
      }),
      t.addEventListener("submit", (e) => {
        wpcf7.submit(t, { submitter: e.submitter }), e.preventDefault();
      }),
      t.addEventListener("wpcf7submit", (e) => {
        e.detail.apiResponse.captcha && m(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && w(t, e.detail.apiResponse.quiz);
      }),
      t.addEventListener("wpcf7reset", (e) => {
        e.detail.apiResponse.captcha && m(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && w(t, e.detail.apiResponse.quiz);
      }),
      t.addEventListener("change", (e) => {
        e.target.closest(".wpcf7-form-control") &&
          wpcf7.validate(t, { target: e.target });
      }),
      t.addEventListener("wpcf7statuschanged", (e) => {
        var e = e.detail.status;
        t.querySelectorAll(".active-on-any").forEach((e) => {
          e.removeAttribute("inert"), e.classList.remove("active-on-any");
        }),
          t.querySelectorAll(`.inert-on-${e}`).forEach((e) => {
            e.setAttribute("inert", "inert"), e.classList.add("active-on-any");
          });
      });
  }
  document.addEventListener("DOMContentLoaded", (e) => {
    var t;
    if ("undefined" != typeof wpcf7)
      if (void 0 !== wpcf7.api)
        if ("function" == typeof window.fetch)
          if ("function" == typeof window.FormData)
            if ("function" == typeof NodeList.prototype.forEach)
              if ("function" == typeof String.prototype.replaceAll) {
                (wpcf7 = {
                  init: h,
                  submit: r,
                  reset: u,
                  validate: a,
                  schemas: new Map(),
                  ...(null !== (t = wpcf7) && void 0 !== t ? t : {}),
                }),
                  document.querySelectorAll("form .wpcf7").forEach((e) => {
                    const t = document.createElement("p");
                    t.setAttribute("class", "wpcf7-form-in-wrong-place");
                    const a = document.createElement("strong");
                    a.append((0, n.__)("Error:", "contact-form-7"));
                    var r = (0, n.__)(
                      "This contact form is placed in the wrong place.",
                      "contact-form-7"
                    );
                    t.append(a, " ", r), e.replaceWith(t);
                  }),
                  document.querySelectorAll(".wpcf7 > form").forEach((e) => {
                    wpcf7.init(e),
                      e.closest(".wpcf7").classList.replace("no-js", "js");
                  });
                for (const n of wpcf7.schemas.keys())
                  s({
                    endpoint: `contact-forms/${n}/feedback/schema`,
                    method: "GET",
                  }).then((e) => {
                    wpcf7.schemas.set(n, e);
                  });
              } else
                console.error(
                  "Your browser does not support String.replaceAll()."
                );
            else
              console.error(
                "Your browser does not support NodeList.forEach()."
              );
          else
            console.error("Your browser does not support window.FormData().");
        else console.error("Your browser does not support window.fetch().");
      else console.error("wpcf7.api is not defined.");
    else console.error("wpcf7 is not defined.");
  });
})();
!(function (e) {
  "use strict";
  console.log("log public");
  const l = e(".slf_iframewrapper"),
    n = "https://slotslaunch.com/iframe";
  e("img, span", l).on("click", function () {
    const a = e(this).parent(l);
    var t = a.attr("data-gid");
    if ((console.log(t), t && slfetch.api_token)) {
      const s = `<iframe class="slfetch_iframe" allowfullscreen src=${n}/${t}?token=${slfetch.api_token}></iframe>`;
      e("img", a).fadeOut("fast", () => {
        a.empty().append(s).addClass("playing"), e("span", a).fadeOut("fast");
      });
    }
  });
})(jQuery);
