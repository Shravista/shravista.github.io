!function(){"use strict";var t={645:function(t,e){e.x=void 0,e.x="3.2.2"},586:function(t,e,a){var n,s,r=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.CasesConfiguration=e.CasesMethods=e.CasesTags=e.CasesBeginItem=void 0;var i=a(783),u=a(691),m=o(a(938)),p=o(a(594)),l=o(a(844)),c=a(916),h=a(964),x=a(419),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"cases-begin"},enumerable:!1,configurable:!0}),e.prototype.checkItem=function(e){return e.isKind("end")&&e.getName()===this.getName()&&this.getProperty("end")?(this.setProperty("end",!1),[[],!0]):t.prototype.checkItem.call(this,e)},e}(c.BeginItem);e.CasesBeginItem=f;var M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.subcounter=0,e}return r(e,t),e.prototype.start=function(e,a,n){this.subcounter=0,t.prototype.start.call(this,e,a,n)},e.prototype.autoTag=function(){null==this.currentTag.tag&&("subnumcases"===this.currentTag.env?(0===this.subcounter&&this.counter++,this.subcounter++,this.tag(this.formatNumber(this.counter,this.subcounter),!1)):(0!==this.subcounter&&"numcases-left"===this.currentTag.env||this.counter++,this.tag(this.formatNumber(this.counter),!1)))},e.prototype.formatNumber=function(t,e){return void 0===e&&(e=null),t.toString()+(null===e?"":String.fromCharCode(96+e))},e}(h.AmsTags);e.CasesTags=M,e.CasesMethods={NumCases:function(t,e){if(t.stack.env.closing===e.getName()){delete t.stack.env.closing,t.Push(t.itemFactory.create("end").setProperty("name",e.getName()));var a=t.stack.Top(),n=a.Last,s=m.default.copyNode(n,t),r=a.getProperty("left");return x.EmpheqUtil.left(n,s,r+"\\empheqlbrace\\,",t,"numcases-left"),t.Push(t.itemFactory.create("end").setProperty("name",e.getName())),null}r=t.GetArgument("\\begin{"+e.getName()+"}");e.setProperty("left",r);var o=p.default.EqnArray(t,e,!0,!0,"ll");return o.arraydef.displaystyle=!1,o.arraydef.rowspacing=".2em",o.setProperty("numCases",!0),t.Push(e),o},Entry:function(t,e){if(!t.stack.Top().getProperty("numCases"))return p.default.Entry(t,e);t.Push(t.itemFactory.create("cell").setProperties({isEntry:!0,name:e}));for(var a=t.string,n=0,s=t.i,r=a.length;s<r;){var o=a.charAt(s);if("{"===o)n++,s++;else if("}"===o){if(0===n)break;n--,s++}else{if("&"===o&&0===n)throw new l.default("ExtraCasesAlignTab","Extra alignment tab in text for numcase environment");if("\\"===o&&0===n){var i=(a.slice(s+1).match(/^[a-z]+|./i)||[])[0];if("\\"===i||"cr"===i||"end"===i||"label"===i)break;s+=i.length}else s++}}var u=a.substr(t.i,s-t.i).replace(/^\s*/,"");t.PushAll(m.default.internalMath(t,u,0)),t.i=s}},new u.EnvironmentMap("cases-env",x.EmpheqUtil.environment,{numcases:["NumCases","cases"],subnumcases:["NumCases","cases"]},e.CasesMethods),new u.MacroMap("cases-macros",{"&":"Entry"},e.CasesMethods),e.CasesConfiguration=i.Configuration.create("cases",{handler:{environment:["cases-env"],character:["cases-macros"]},items:(s={},s[f.prototype.kind]=f,s),tags:{cases:M}})},155:function(t,e){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,e.bK=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},783:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,e.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},938:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.ParseUtil.default},691:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parseResult=MathJax._.input.tex.SymbolMap.parseResult,e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},844:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.TexError.default},916:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.StartItem=MathJax._.input.tex.base.BaseItems.StartItem,e.StopItem=MathJax._.input.tex.base.BaseItems.StopItem,e.OpenItem=MathJax._.input.tex.base.BaseItems.OpenItem,e.CloseItem=MathJax._.input.tex.base.BaseItems.CloseItem,e.PrimeItem=MathJax._.input.tex.base.BaseItems.PrimeItem,e.SubsupItem=MathJax._.input.tex.base.BaseItems.SubsupItem,e.OverItem=MathJax._.input.tex.base.BaseItems.OverItem,e.LeftItem=MathJax._.input.tex.base.BaseItems.LeftItem,e.Middle=MathJax._.input.tex.base.BaseItems.Middle,e.RightItem=MathJax._.input.tex.base.BaseItems.RightItem,e.BeginItem=MathJax._.input.tex.base.BaseItems.BeginItem,e.EndItem=MathJax._.input.tex.base.BaseItems.EndItem,e.StyleItem=MathJax._.input.tex.base.BaseItems.StyleItem,e.PositionItem=MathJax._.input.tex.base.BaseItems.PositionItem,e.CellItem=MathJax._.input.tex.base.BaseItems.CellItem,e.MmlItem=MathJax._.input.tex.base.BaseItems.MmlItem,e.FnItem=MathJax._.input.tex.base.BaseItems.FnItem,e.NotItem=MathJax._.input.tex.base.BaseItems.NotItem,e.NonscriptItem=MathJax._.input.tex.base.BaseItems.NonscriptItem,e.DotsItem=MathJax._.input.tex.base.BaseItems.DotsItem,e.ArrayItem=MathJax._.input.tex.base.BaseItems.ArrayItem,e.EqnArrayItem=MathJax._.input.tex.base.BaseItems.EqnArrayItem,e.EquationItem=MathJax._.input.tex.base.BaseItems.EquationItem},594:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.base.BaseMethods.default},964:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.AmsTags=MathJax._.input.tex.ams.AmsConfiguration.AmsTags,e.AmsConfiguration=MathJax._.input.tex.ams.AmsConfiguration.AmsConfiguration},419:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.EmpheqUtil=MathJax._.input.tex.empheq.EmpheqUtil.EmpheqUtil}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}var n=a(155),s=a(645),r=a(586);MathJax.loader&&MathJax.loader.checkVersion("[tex]/cases",s.x,"tex-extension"),(0,n.bK)({_:{input:{tex:{cases:{CasesConfiguration:r}}}}})}();