(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70fda381"],{"107c":function(e,i,s){"use strict";var n=s("d039"),t=s("da84"),r=t.RegExp;e.exports=n((function(){var e=r("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"129f":function(e,i,s){"use strict";e.exports=Object.is||function(e,i){return e===i?0!==e||1/e===1/i:e!=e&&i!=i}},"14c3":function(e,i,s){"use strict";var n=s("c65b"),t=s("825a"),r=s("1626"),o=s("c6b6"),a=s("9263"),l=TypeError;e.exports=function(e,i){var s=e.exec;if(r(s)){var u=n(s,e,i);return null!==u&&t(u),u}if("RegExp"===o(e))return n(a,e,i);throw l("RegExp#exec called on incompatible receiver")}},"1e5d":function(e,i,s){"use strict";var n=function(){var e=this;e._self._c;return e._m(0)},t=[function(){var e=this,i=e._self._c;return i("div",{staticClass:"footer_wrap"},[i("div",{staticClass:"flex-grow-1"}),i("div",{staticClass:"app-footer"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-9"},[i("p",[i("strong",[e._v("Gull - Vuejs Admin Dashboard Template")])]),i("p",[e._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis beatae officia saepe perferendis voluptatum minima eveniet voluptates dolorum, temporibus nisi maxime nesciunt totam repudiandae commodi sequi dolor quibusdam sunt. ")])])]),i("div",{staticClass:"footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"},[i("div",{staticClass:"d-flex align-items-center"},[i("img",{staticClass:"logo",attrs:{src:s("9d64"),alt:""}}),i("div",[i("div",[i("p",{staticClass:"m-0"},[e._v("© 2019-2022 UI-Lib")]),i("p",{staticClass:"m-0"},[e._v("All rights reserved")])])]),i("span",{staticClass:"flex-grow-1"})])])])])}],r={data:function(){return{}},methods:{}},o=r,a=s("2877"),l=Object(a["a"])(o,n,t,!1,null,"6ba6fbd1",null);i["a"]=l.exports},"466d":function(e,i,s){"use strict";var n=s("c65b"),t=s("d784"),r=s("825a"),o=s("7234"),a=s("50c4"),l=s("577e"),u=s("1d80"),c=s("dc4a"),d=s("8aa5"),m=s("14c3");t("match",(function(e,i,s){return[function(i){var s=u(this),t=o(i)?void 0:c(i,e);return t?n(t,i,s):new RegExp(i)[e](l(s))},function(e){var n=r(this),t=l(e),o=s(i,n,t);if(o.done)return o.value;if(!n.global)return m(n,t);var u=n.unicode;n.lastIndex=0;var c,f=[],w=0;while(null!==(c=m(n,t))){var p=l(c[0]);f[w]=p,""===p&&(n.lastIndex=d(t,a(n.lastIndex),u)),w++}return 0===w?null:f}]}))},"841c":function(e,i,s){"use strict";var n=s("c65b"),t=s("d784"),r=s("825a"),o=s("7234"),a=s("1d80"),l=s("129f"),u=s("577e"),c=s("dc4a"),d=s("14c3");t("search",(function(e,i,s){return[function(i){var s=a(this),t=o(i)?void 0:c(i,e);return t?n(t,i,s):new RegExp(i)[e](u(s))},function(e){var n=r(this),t=u(e),o=s(i,n,t);if(o.done)return o.value;var a=n.lastIndex;l(a,0)||(n.lastIndex=0);var c=d(n,t);return l(n.lastIndex,a)||(n.lastIndex=a),null===c?-1:c.index}]}))},"8aa5":function(e,i,s){"use strict";var n=s("6547").charAt;e.exports=function(e,i,s){return i+(s?n(e,i).length:1)}},9029:function(e,i){e.exports=function(e){var i={};function s(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}return s.m=e,s.c=i,s.d=function(e,i,n){s.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},s.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(i,"a",i),i},s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},s.p="",s(s.s=1)}([function(e,i,s){"use strict";var n={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0},t={CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari",EDGE_CHROMIUM:"Edge Chromium"},r={IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone",WINDOWS:"Windows",MAC_OS:"Mac OS"},o={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1};e.exports={BROWSER_TYPES:t,DEVICE_TYPES:n,OS_TYPES:r,defaultData:o}},function(e,i,s){"use strict";var n=s(2),t=s(0),r=t.BROWSER_TYPES,o=t.OS_TYPES,a=t.DEVICE_TYPES,l=s(4),u=l.checkType,c=l.broPayload,d=l.mobilePayload,m=l.wearPayload,f=l.consolePayload,w=l.stvPayload,p=l.getNavigatorInstance,v=l.isIOS13Check,b=new n,g=b.getBrowser(),h=b.getDevice(),x=b.getEngine(),E=b.getOS(),S=b.getUA(),y=r.CHROME,O=r.CHROMIUM,C=r.IE,T=r.INTERNET_EXPLORER,I=r.OPERA,k=r.FIREFOX,A=r.SAFARI,R=r.EDGE,_=r.YANDEX,N=r.MOBILE_SAFARI,M=a.MOBILE,P=a.TABLET,V=a.SMART_TV,B=a.BROWSER,L=a.WEARABLE,D=a.CONSOLE,F=o.ANDROID,W=o.WINDOWS_PHONE,z=o.IOS,j=o.WINDOWS,U=o.MAC_OS,G=function(){return h.type===M},q=function(){return h.type===P},Y=function(){switch(h.type){case M:case P:return!0;default:return!1}},X=function(){return E.name===o.WINDOWS&&"10"===E.version&&("string"===typeof S&&-1!==S.indexOf("Edg/"))},H=function(){return h.type===V},$=function(){return h.type===B},K=function(){return h.type===L},Q=function(){return h.type===D},Z=function(){return E.name===F},J=function(){return E.name===j},ee=function(){return E.name===U},ie=function(){return E.name===W},se=function(){return E.name===z},ne=function(){return g.name===y},te=function(){return g.name===k},re=function(){return g.name===O},oe=function(){return g.name===R},ae=function(){return g.name===_},le=function(){return g.name===A||g.name===N},ue=function(){return g.name===N},ce=function(){return g.name===I},de=function(){return g.name===T||g.name===C},me=function(){var e=p(),i=e&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)},fe=function(){var e=p();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},we=function(){return v("iPad")},pe=function(){return v("iPhone")},ve=function(){return v("iPod")},be=function(){return g.major},ge=function(){return g.version},he=function(){return E.version?E.version:"none"},xe=function(){return E.name?E.name:"none"},Ee=function(){return g.name},Se=function(){return h.vendor?h.vendor:"none"},ye=function(){return h.model?h.model:"none"},Oe=function(){return x.name},Ce=function(){return x.version},Te=function(){return S},Ie=function(){return h.type},ke=H(),Ae=Q(),Re=K(),_e=ue()||we(),Ne=re(),Me=Y()||we(),Pe=G(),Ve=q()||we(),Be=$(),Le=Z(),De=ie(),Fe=se()||we(),We=ne(),ze=te(),je=le(),Ue=ce(),Ge=de(),qe=he(),Ye=xe(),Xe=be(),He=ge(),$e=Ee(),Ke=Se(),Qe=ye(),Ze=Oe(),Je=Ce(),ei=Te(),ii=oe()||X(),si=ae(),ni=Ie(),ti=fe(),ri=we(),oi=pe(),ai=ve(),li=me(),ui=X(),ci=oe(),di=J(),mi=ee(),fi=u(h.type);function wi(){var e=fi.isBrowser,i=fi.isMobile,s=fi.isTablet,n=fi.isSmartTV,t=fi.isConsole,r=fi.isWearable;return e?c(e,g,x,E,S):n?w(n,x,E,S):t?f(t,x,E,S):i||s?d(fi,h,E,S):r?m(r,x,E,S):void 0}e.exports={deviceDetect:wi,isSmartTV:ke,isConsole:Ae,isWearable:Re,isMobileSafari:_e,isChromium:Ne,isMobile:Me,isMobileOnly:Pe,isTablet:Ve,isBrowser:Be,isAndroid:Le,isWinPhone:De,isIOS:Fe,isChrome:We,isFirefox:ze,isSafari:je,isOpera:Ue,isIE:Ge,osVersion:qe,osName:Ye,fullBrowserVersion:Xe,browserVersion:He,browserName:$e,mobileVendor:Ke,mobileModel:Qe,engineName:Ze,engineVersion:Je,getUA:ei,isEdge:ii,isYandex:si,deviceType:ni,isIOS13:ti,isIPad13:ri,isIPhone13:oi,isIPod13:ai,isElectron:li,isEdgeChromium:ui,isLegacyEdge:ci,isWindows:di,isMacOs:mi}},function(e,i,s){var n;
/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */(function(t,r){"use strict";var o="0.7.18",a="",l="?",u="function",c="undefined",d="object",m="string",f="major",w="model",p="name",v="type",b="vendor",g="version",h="architecture",x="console",E="mobile",S="tablet",y="smarttv",O="wearable",C="embedded",T={extend:function(e,i){var s={};for(var n in e)i[n]&&i[n].length%2===0?s[n]=i[n].concat(e[n]):s[n]=e[n];return s},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===m?e.replace(/[^\d\.]/g,"").split(".")[0]:r},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},I={rgx:function(e,i){var s,n,t,o,a,l,c=0;while(c<i.length&&!a){var m=i[c],f=i[c+1];s=n=0;while(s<m.length&&!a)if(a=m[s++].exec(e),a)for(t=0;t<f.length;t++)l=a[++n],o=f[t],typeof o===d&&o.length>0?2==o.length?typeof o[1]==u?this[o[0]]=o[1].call(this,l):this[o[0]]=o[1]:3==o.length?typeof o[1]!==u||o[1].exec&&o[1].test?this[o[0]]=l?l.replace(o[1],o[2]):r:this[o[0]]=l?o[1].call(this,l,o[2]):r:4==o.length&&(this[o[0]]=l?o[3].call(this,l.replace(o[1],o[2])):r):this[o]=l||r;c+=2}},str:function(e,i){for(var s in i)if(typeof i[s]===d&&i[s].length>0){for(var n=0;n<i[s].length;n++)if(T.has(i[s][n],e))return s===l?r:s}else if(T.has(i[s],e))return s===l?r:s;return e}},k={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},A={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[p,g],[/(opios)[\/\s]+([\w\.]+)/i],[[p,"Opera Mini"],g],[/\s(opr)\/([\w\.]+)/i],[[p,"Opera"],g],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[p,g],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[p,"IE"],g],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[p,"Edge"],g],[/(yabrowser)\/([\w\.]+)/i],[[p,"Yandex"],g],[/(puffin)\/([\w\.]+)/i],[[p,"Puffin"],g],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[p,"UCBrowser"],g],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],g],[/(micromessenger)\/([\w\.]+)/i],[[p,"WeChat"],g],[/(qqbrowserlite)\/([\w\.]+)/i],[p,g],[/(QQ)\/([\d\.]+)/i],[p,g],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[p,g],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[p,g],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[p,g],[/(MetaSr)[\/\s]?([\w\.]+)/i],[p],[/(LBBROWSER)/i],[p],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[g,[p,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[g,[p,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[g,[p,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[p,/(.+)/,"$1 WebView"],g],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[p,/(.+(?:g|us))(.+)/,"$1 $2"],g],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[g,[p,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[p,g],[/(dolfin)\/([\w\.]+)/i],[[p,"Dolphin"],g],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[p,"Chrome"],g],[/(coast)\/([\w\.]+)/i],[[p,"Opera Coast"],g],[/fxios\/([\w\.-]+)/i],[g,[p,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[g,[p,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[g,p],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[p,"GSA"],g],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[p,[g,I.str,k.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[p,g],[/(navigator|netscape)\/([\w\.-]+)/i],[[p,"Netscape"],g],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[p,g]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,T.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[h,/ower/,"",T.lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[h,T.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[w,b,[v,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[w,[b,"Apple"],[v,S]],[/(apple\s{0,1}tv)/i],[[w,"Apple TV"],[b,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[b,w,[v,S]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[w,[b,"Amazon"],[v,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[w,I.str,k.device.amazon.model],[b,"Amazon"],[v,E]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[w,b,[v,E]],[/\((ip[honed|\s\w*]+);/i],[w,[b,"Apple"],[v,E]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[b,w,[v,E]],[/\(bb10;\s(\w+)/i],[w,[b,"BlackBerry"],[v,E]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[w,[b,"Asus"],[v,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[b,"Sony"],[w,"Xperia Tablet"],[v,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[w,[b,"Sony"],[v,E]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[b,w,[v,x]],[/android.+;\s(shield)\sbuild/i],[w,[b,"Nvidia"],[v,x]],[/(playstation\s[34portablevi]+)/i],[w,[b,"Sony"],[v,x]],[/(sprint\s(\w+))/i],[[b,I.str,k.device.sprint.vendor],[w,I.str,k.device.sprint.model],[v,E]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[b,w,[v,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[b,[w,/_/g," "],[v,E]],[/(nexus\s9)/i],[w,[b,"HTC"],[v,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[w,[b,"Huawei"],[v,E]],[/(microsoft);\s(lumia[\s\w]+)/i],[b,w,[v,E]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[w,[b,"Microsoft"],[v,x]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[b,"Microsoft"],[v,E]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[w,[b,"Motorola"],[v,E]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[b,"Motorola"],[v,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[b,T.trim],[w,T.trim],[v,y]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[b,"Samsung"],[v,y]],[/\(dtv[\);].+(aquos)/i],[w,[b,"Sharp"],[v,y]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[b,"Samsung"],w,[v,S]],[/smart-tv.+(samsung)/i],[b,[v,y],w],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[b,"Samsung"],w,[v,E]],[/sie-(\w*)/i],[w,[b,"Siemens"],[v,E]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[b,"Nokia"],w,[v,E]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[w,[b,"Acer"],[v,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[w,[b,"LG"],[v,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[b,"LG"],w,[v,S]],[/(lg) netcast\.tv/i],[b,w,[v,y]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[w,[b,"LG"],[v,E]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[w,[b,"Lenovo"],[v,S]],[/linux;.+((jolla));/i],[b,w,[v,E]],[/((pebble))app\/[\d\.]+\s/i],[b,w,[v,O]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[b,w,[v,E]],[/crkey/i],[[w,"Chromecast"],[b,"Google"]],[/android.+;\s(glass)\s\d/i],[w,[b,"Google"],[v,O]],[/android.+;\s(pixel c)\s/i],[w,[b,"Google"],[v,S]],[/android.+;\s(pixel xl|pixel)\s/i],[w,[b,"Google"],[v,E]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[b,"Xiaomi"],[v,E]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[b,"Xiaomi"],[v,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[w,[b,"Meizu"],[v,S]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[w,[b,"OnePlus"],[v,E]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[w,[b,"RCA"],[v,S]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[w,[b,"Dell"],[v,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[w,[b,"Verizon"],[v,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[b,"Barnes & Noble"],w,[v,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[w,[b,"NuVision"],[v,S]],[/android.+;\s(k88)\sbuild/i],[w,[b,"ZTE"],[v,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[w,[b,"Swiss"],[v,E]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[w,[b,"Swiss"],[v,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[w,[b,"Zeki"],[v,S]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[b,"Dragon Touch"],w,[v,S]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[w,[b,"Insignia"],[v,S]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[w,[b,"NextBook"],[v,S]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[b,"Voice"],w,[v,E]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[b,"LvTel"],w,[v,E]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[w,[b,"Envizen"],[v,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[b,w,[v,S]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[w,[b,"MachSpeed"],[v,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[b,w,[v,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[w,[b,"Rotor"],[v,S]],[/android.+(KS(.+))\s+build/i],[w,[b,"Amazon"],[v,S]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[b,w,[v,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,T.lowerize],b,w],[/(android[\w\.\s\-]{0,9});.+build/i],[w,[b,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[g,[p,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[p,g],[/rv\:([\w\.]{1,9}).+(gecko)/i],[g,p]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[p,g],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[p,[g,I.str,k.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[p,"Windows"],[g,I.str,k.os.windows.version]],[/\((bb)(10);/i],[[p,"BlackBerry"],g],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[p,g],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[p,"Symbian"],g],[/\((series40);/i],[p],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[p,"Firefox OS"],g],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[p,g],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[p,"Chromium OS"],g],[/(sunos)\s?([\w\.\d]*)/i],[[p,"Solaris"],g],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[p,g],[/(haiku)\s(\w+)/i],[p,g],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[g,/_/g,"."],[p,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[p,"Mac OS"],[g,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[p,g]]},R=function(e,i){if("object"===typeof e&&(i=e,e=r),!(this instanceof R))return new R(e,i).getResult();var s=e||(t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:a),n=i?T.extend(A,i):A;return this.getBrowser=function(){var e={name:r,version:r};return I.rgx.call(e,s,n.browser),e.major=T.major(e.version),e},this.getCPU=function(){var e={architecture:r};return I.rgx.call(e,s,n.cpu),e},this.getDevice=function(){var e={vendor:r,model:r,type:r};return I.rgx.call(e,s,n.device),e},this.getEngine=function(){var e={name:r,version:r};return I.rgx.call(e,s,n.engine),e},this.getOS=function(){var e={name:r,version:r};return I.rgx.call(e,s,n.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(e){return s=e,this},this};R.VERSION=o,R.BROWSER={NAME:p,MAJOR:f,VERSION:g},R.CPU={ARCHITECTURE:h},R.DEVICE={MODEL:w,VENDOR:b,TYPE:v,CONSOLE:x,MOBILE:E,SMARTTV:y,TABLET:S,WEARABLE:O,EMBEDDED:C},R.ENGINE={NAME:p,VERSION:g},R.OS={NAME:p,VERSION:g},typeof i!==c?(typeof e!==c&&e.exports&&(i=e.exports=R),i.UAParser=R):"function"===u&&s(3)?(n=function(){return R}.call(i,s,i,e),n===r||(e.exports=n)):t&&(t.UAParser=R);var _=t&&(t.jQuery||t.Zepto);if(typeof _!==c){var N=new R;_.ua=N.getResult(),_.ua.get=function(){return N.getUA()},_.ua.set=function(e){N.setUA(e);var i=N.getResult();for(var s in i)_.ua[s]=i[s]}}})("object"===typeof window?window:this)},function(e,i){(function(i){e.exports=i}).call(i,{})},function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},t=s(0),r=t.DEVICE_TYPES,o=t.defaultData,a=function(e){switch(e){case r.MOBILE:return{isMobile:!0};case r.TABLET:return{isTablet:!0};case r.SMART_TV:return{isSmartTV:!0};case r.CONSOLE:return{isConsole:!0};case r.WEARABLE:return{isWearable:!0};case r.BROWSER:return{isBrowser:!0};default:return o}},l=function(e,i,s,n,t){return{isBrowser:e,browserMajorVersion:i.major,browserFullVersion:i.version,browserName:i.name,engineName:s.name||!1,engineVersion:s.version,osName:n.name,osVersion:n.version,userAgent:t}},u=function(e,i,s,t){return n({},e,{vendor:i.vendor,model:i.model,os:s.name,osVersion:s.version,ua:t})},c=function(e,i,s,n){return{isSmartTV:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:n}},d=function(e,i,s,n){return{isConsole:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:n}},m=function(e,i,s,n){return{isWearable:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:n}},f=i.getNavigatorInstance=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},w=i.isIOS13Check=function(e){var i=f();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};e.exports={checkType:a,broPayload:l,mobilePayload:u,stvPayload:c,consolePayload:d,wearPayload:m,getNavigatorInstance:f,isIOS13Check:w}}])},9263:function(e,i,s){"use strict";var n=s("c65b"),t=s("e330"),r=s("577e"),o=s("ad6d"),a=s("9f7f"),l=s("5692"),u=s("7c73"),c=s("69f3").get,d=s("fce3"),m=s("107c"),f=l("native-string-replace",String.prototype.replace),w=RegExp.prototype.exec,p=w,v=t("".charAt),b=t("".indexOf),g=t("".replace),h=t("".slice),x=function(){var e=/a/,i=/b*/g;return n(w,e,"a"),n(w,i,"a"),0!==e.lastIndex||0!==i.lastIndex}(),E=a.BROKEN_CARET,S=void 0!==/()??/.exec("")[1],y=x||S||E||d||m;y&&(p=function(e){var i,s,t,a,l,d,m,y=this,O=c(y),C=r(e),T=O.raw;if(T)return T.lastIndex=y.lastIndex,i=n(p,T,C),y.lastIndex=T.lastIndex,i;var I=O.groups,k=E&&y.sticky,A=n(o,y),R=y.source,_=0,N=C;if(k&&(A=g(A,"y",""),-1===b(A,"g")&&(A+="g"),N=h(C,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==v(C,y.lastIndex-1))&&(R="(?: "+R+")",N=" "+N,_++),s=new RegExp("^(?:"+R+")",A)),S&&(s=new RegExp("^"+R+"$(?!\\s)",A)),x&&(t=y.lastIndex),a=n(w,k?s:y,N),k?a?(a.input=h(a.input,_),a[0]=h(a[0],_),a.index=y.lastIndex,y.lastIndex+=a[0].length):y.lastIndex=0:x&&a&&(y.lastIndex=y.global?a.index+a[0].length:t),S&&a&&a.length>1&&n(f,a[0],s,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&I)for(a.groups=d=u(null),l=0;l<I.length;l++)m=I[l],d[m[0]]=a[m[1]];return a}),e.exports=p},"9d64":function(e,i,s){e.exports=s.p+"img/logo.e6608349.png"},"9ea9":function(e,i,s){"use strict";s("ac1f"),s("841c");var n=function(){var e=this,i=e._self._c;return i("div",{staticClass:"search-ui",class:{open:e.isSearchOpen}},[i("div",{staticClass:"search-header"},[i("img",{staticClass:"logo",attrs:{src:s("9d64"),alt:""}}),i("button",{staticClass:"search-close btn btn-icon bg-transparent float-right mt-2",on:{click:e.closeSearch}},[i("i",{staticClass:"i-Close-Window text-22 text-muted"})])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Type here",autofocus:""},domProps:{value:e.search},on:{input:function(i){i.target.composing||(e.search=i.target.value)}}}),e._m(0),i("vue-perfect-scrollbar",{staticClass:"search-height rtl-ps-none ps",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i("div",{staticClass:"search-results list-horizontal"},e._l(e.filterProducts,(function(s,n){return i("router-link",{key:n,staticClass:"list-item col-md-12 p-0",attrs:{tag:"div",to:"/app/apps/product-detail"}},[i("div",{staticClass:"card o-hidden flex-row mb-30 d-flex"},[i("div",{staticClass:"list-thumb d-flex"},[i("img",{attrs:{src:s.img,alt:""}})]),i("div",{staticClass:"flex-grow-1 pl-2 d-flex"},[i("div",{staticClass:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row"},[i("a",{staticClass:"w-40 w-sm-100",attrs:{href:""}},[i("div",{staticClass:"item-title"},[e._v(e._s(s.title))])]),i("p",{staticClass:"m-0 text-muted text-small w-15 w-sm-100"},[e._v("Gadget")]),i("p",{staticClass:"m-0 text-muted text-small w-15 w-sm-100"},[e._v(" $ "+e._s(s.productPrice)+" ")]),i("p",{staticClass:"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"},[i("span",{staticClass:"badge",class:s.badgeColor},[e._v(e._s(s.discount))])])])])])])})),1)])],1)},t=[function(){var e=this,i=e._self._c;return i("div",{staticClass:"search-title"},[i("span",{staticClass:"text-muted"},[e._v("Search results")])])}],r=(s("4de4"),s("d3b7"),s("466d"),s("157e")),o={props:["isSearchOpen"],data:function(){return{issearchClose:!1,products:r["a"],search:""}},methods:{closeSearch:function(){this.$emit("closeSearch",{isSearchOpen:!1})}},computed:{filterProducts:function(){var e=this;return this.products.filter((function(i){return i.title.toLowerCase().match(e.search.toLowerCase())}))}}},a=o,l=s("2877"),u=Object(l["a"])(a,n,t,!1,null,null,null);i["a"]=u.exports},"9f7f":function(e,i,s){"use strict";var n=s("d039"),t=s("da84"),r=t.RegExp,o=n((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||n((function(){return!r("a","y").sticky})),l=o||n((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:a,UNSUPPORTED_Y:o}},ac1f:function(e,i,s){"use strict";var n=s("23e7"),t=s("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==t},{exec:t})},ad6d:function(e,i,s){"use strict";var n=s("825a");e.exports=function(){var e=n(this),i="";return e.hasIndices&&(i+="d"),e.global&&(i+="g"),e.ignoreCase&&(i+="i"),e.multiline&&(i+="m"),e.dotAll&&(i+="s"),e.unicode&&(i+="u"),e.unicodeSets&&(i+="v"),e.sticky&&(i+="y"),i}},c7db:function(e,i,s){"use strict";var n=s("2b0e");n="default"in n?n["default"]:n;var t="2.2.2",r=/^2\./.test(n.version);r||n.util.warn("VueClickaway "+t+" only supports Vue 2.x, and does not support Vue "+n.version);var o="_vue_clickaway_handler";function a(e,i,s){l(e);var n=s.context,t=i.value;if("function"===typeof t){var r=!1;setTimeout((function(){r=!0}),0),e[o]=function(i){var s=i.path||(i.composedPath?i.composedPath():void 0);if(r&&(s?s.indexOf(e)<0:!e.contains(i.target)))return t.call(n,i)},document.documentElement.addEventListener("click",e[o],!1)}}function l(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var u={bind:a,update:function(e,i){i.value!==i.oldValue&&a(e,i)},unbind:l},c={directives:{onClickaway:u}};i.version=t,i.directive=u,i.mixin=c},d784:function(e,i,s){"use strict";s("ac1f");var n=s("4625"),t=s("cb2d"),r=s("9263"),o=s("d039"),a=s("b622"),l=s("9112"),u=a("species"),c=RegExp.prototype;e.exports=function(e,i,s,d){var m=a(e),f=!o((function(){var i={};return i[m]=function(){return 7},7!=""[e](i)})),w=f&&!o((function(){var i=!1,s=/a/;return"split"===e&&(s={},s.constructor={},s.constructor[u]=function(){return s},s.flags="",s[m]=/./[m]),s.exec=function(){return i=!0,null},s[m](""),!i}));if(!f||!w||s){var p=n(/./[m]),v=i(m,""[e],(function(e,i,s,t,o){var a=n(e),l=i.exec;return l===r||l===c.exec?f&&!o?{done:!0,value:p(i,s,t)}:{done:!0,value:a(s,i,t)}:{done:!1}}));t(String.prototype,e,v[0]),t(c,m,v[1])}d&&l(c[m],"sham",!0)}},ed08:function(e,i,s){"use strict";var n=function(){var e=window.document,i=e.documentElement,s=i.requestFullscreen||i.mozRequestFullScreen||i.webkitRequestFullScreen||i.msRequestFullscreen,n=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?n.call(e):s.call(i)};i["a"]={toggleFullScreen:n}},fce3:function(e,i,s){"use strict";var n=s("d039"),t=s("da84"),r=t.RegExp;e.exports=n((function(){var e=r(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);