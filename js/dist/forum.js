(()=>{var t={n:o=>{var s=o&&o.__esModule?()=>o.default:()=>o;return t.d(s,{a:s}),s},d:(o,s)=>{for(var n in s)t.o(s,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:s[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const s=duroom.core.compat["forum/app"];var n=t.n(s);const c=duroom.core.compat["common/Model"];var r=t.n(c);const e=duroom.core.compat["common/models/Discussion"];var i=t.n(e);function a(t,o){return a=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},a(t,o)}const u=duroom.core.compat["forum/components/EventPost"];var p=function(t){var o,s;function n(){return t.apply(this,arguments)||this}s=t,(o=n).prototype=Object.create(s.prototype),o.prototype.constructor=o,a(o,s);var c=n.prototype;return c.icon=function(){return"fas fa-thumbtack"},c.descriptionKey=function(){return this.attrs.post.content().sticky?"duroom-sticky.forum.post_stream.discussion_stickied_text":"duroom-sticky.forum.post_stream.discussion_unstickied_text"},n}(t.n(u)());const f=duroom.core.compat["common/extend"],l=duroom.core.compat["common/components/Badge"];var d=t.n(l);const y=duroom.core.compat["forum/utils/DiscussionControls"];var k=t.n(y);const v=duroom.core.compat["forum/components/DiscussionPage"];var b=t.n(v);const h=duroom.core.compat["common/components/Button"];var _=t.n(h);const S=duroom.core.compat["forum/states/DiscussionListState"];var P=t.n(S);const g=duroom.core.compat["forum/components/DiscussionListItem"];var x=t.n(g);const O=duroom.core.compat["forum/components/IndexPage"];var j=t.n(O);const D=duroom.core.compat["common/utils/string"],I=duroom.core.compat["common/utils/classList"];var L=t.n(I);n().initializers.add("duroom-sticky",(function(){n().postComponents.discussionStickied=p,i().prototype.isSticky=r().attribute("isSticky"),i().prototype.canSticky=r().attribute("canSticky"),(0,f.extend)(i().prototype,"badges",(function(t){this.isSticky()&&t.add("sticky",d().component({type:"sticky",label:n().translator.trans("duroom-sticky.forum.badge.sticky_tooltip"),icon:"fas fa-thumbtack"}),10)})),(0,f.extend)(k(),"moderationControls",(function(t,o){o.canSticky()&&t.add("sticky",_().component({icon:"fas fa-thumbtack",onclick:this.stickyAction.bind(o)},n().translator.trans(o.isSticky()?"duroom-sticky.forum.discussion_controls.unsticky_button":"duroom-sticky.forum.discussion_controls.sticky_button")))})),k().stickyAction=function(){this.save({isSticky:!this.isSticky()}).then((function(){n().current.matches(b())&&n().current.get("stream").update(),m.redraw()}))},(0,f.extend)(P().prototype,"requestParams",(function(t){(n().current.matches(j())||n().current.matches(b()))&&t.include.push("firstPost")})),(0,f.extend)(x().prototype,"infoItems",(function(t){var o=this.attrs.discussion;if(o.isSticky()&&!this.attrs.params.q&&!o.lastReadPostNumber()){var s=o.firstPost();if(s){var n=(0,D.truncate)(s.contentPlain(),175);t.add("excerpt",m("div",null,n),-100)}}})),(0,f.extend)(x().prototype,"elementAttrs",(function(t){this.attrs.discussion.isSticky()&&(t.className=L()(t.className,"DiscussionListItem--sticky"))}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map