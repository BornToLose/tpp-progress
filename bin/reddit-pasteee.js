var Reddit;!function(t){var e;(function(t){var o=(Object.defineProperty(e.prototype,"Duration",{get:function(){return this.NextEntryTimestamp-this.Timestamp},enumerable:!1,configurable:!0}),e);function e(t,e){this.Timestamp=t,this.Text=e}t.Entry=o;var r=(n.prototype.Add=function(t){this.Entries.unshift(t),t.Duration>this.Longest&&(this.Longest=t.Duration),(this.Shortest<0||t.Duration<this.Shortest)&&(this.Shortest=t.Duration)},n);function n(t){void 0===t&&(t=[]),this.Entries=t,this.Longest=-1,this.Shortest=-1}function i(t){var e=$(t).find("ol li"),n=new r,i=null;return e.each(function(){var t=function(t){if(!t)return null;var e=(t=t.trim()).split(" "),n=Math.floor(Date.parse(e.shift().replace("+00:00:","Z"))/1e3);return new o(n,e.join(" "))}($(this).text());t.NextEntryTimestamp=i?i.Timestamp:0,!t.NextEntryTimestamp||10<t.Duration?(i=t,n.Add(t)):i.Text=t.Text+"\n"+i.Text}),n}t.EntryCollection=r;var s={};function a(e){var n;Object.keys(s).forEach(function(t){0<e.indexOf(t)&&(n=t)}),s[n].resolve(i(e))}function u(t){var e=$.Deferred();return s[t]=e,document.write=a,$("<script>").attr("src",t.replace(".ee/p/",".ee/e/")).appendTo($(document.head)),e.promise()}t.Fetch=u,t.Test=function(){return u("https://paste.ee/p/9zU5C").then(function(t){console.log("Colosseum"),console.log(t)}),u("https://paste.ee/p/DcMdp").then(function(t){console.log("X"),console.log(t)}),"Started test"}})((e=t.Pasteee||(t.Pasteee={})).Live||(e.Live={}))}(Reddit=Reddit||{});