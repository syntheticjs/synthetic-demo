_base64DecodeString = function() {
    var fromCharCode = String.fromCharCode;
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var cb_decode = function(cccc) {
        var len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [ fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255) ];
        chars.length -= [ 0, 0, 2, 1 ][padlen];
        return chars.join("");
    };
    var atob = function(a) {
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var re_btou = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g");
    var cb_btou = function(cccc) {
        switch (cccc.length) {
          case 4:
            var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
            return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);

          case 3:
            return fromCharCode((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));

          default:
            return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var _decode = function(a) {
        return btou(atob(a));
    };
    return function(a) {
        return _decode(String(a).replace(/[-_]/g, function(m0) {
            return m0 == "-" ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
    };
}();

(function(m, o, r, u, l, u, s) {
    var template = _base64DecodeString("PGNvbnRlbnQ+DQoJPHNlY3Rpb24+DQoJCTxoMT4mbHQ7e3todG1sLnRhZ25hbWV9fSZndDs8L2gxPg0KCQk8c3VtbWFyeT4NCgkJCTxwPnt7aHRtbC5kZXNjcmlwdGlvbn19PC9wPg0KCQk8L3N1bW1hcnk+DQoJCTxkaXYgY2xhc3M9ImRlbW8iPg0KCQkJe3todG1sLmRlbW99fQ0KCQk8L2Rpdj4NCgkJPHN1bW1hcnk+DQoJCQk8aDI+VXNhZ2U6PC9oMj4NCgkJCTxwcmU+PGNvZGU+PCEtLQ0KLS0+Jmx0OzxzcGFuIGNsYXNzPSJpdGFnbmFtZSI+e3todG1sLnRhZ25hbWV9fTwvc3Bhbj4gJmd0Ow0KDQombHQ7LzxzcGFuIGNsYXNzPSJpdGFnbmFtZSI+e3todG1sLnRhZ25hbWV9fTwvc3Bhbj4mZ3Q7PCEtLQ0KLS0+PC9jb2RlPjwvcHJlPg0KCQk8L3N1bW1hcnk+DQoJPHNlY3Rpb24+DQo8L2NvbnRlbnQ+");
    (function(tpl) {
        Synthetic.createComponent("synthetic-demo", function($component) {
            $component.template(tpl);
        });
    })(template);
})();