(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ui(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Lh(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},es={duration:.5,overwrite:!1,delay:0},tc,Vt,St,Ln=1e8,st=1/Ln,Sl=Math.PI*2,Cd=Sl/4,Pd=0,Rh=Math.sqrt,Dd=Math.cos,Ld=Math.sin,It=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},_i=function(e){return typeof e=="number"},nc=function(e){return typeof e>"u"},ni=function(e){return typeof e=="object"},sn=function(e){return e!==!1},Ih=function(){return typeof window<"u"},oa=function(e){return mt(e)||It(e)},Oh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ht=Array.isArray,wl=/(?:-?\.?\d|\.)+/gi,Fh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ao=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zh=/[+-]=-?[.\d]+/,Nh=/[^,'"\[\]\s]+/gi,Rd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,An,Tl,ic,Sn={},to={},Uh,kh=function(e){return(to=hr(e,Sn))&&wn},rc=function(e,t){},no=function(e,t){return!t&&void 0},Bh=function(e,t){return e&&(Sn[e]=t)&&to&&(to[e]=t)||Sn},Xs=function(){return 0},Id={suppressEvents:!0,isStart:!0,kill:!1},Ha={suppressEvents:!0,kill:!1},Od={suppressEvents:!0},sc={},Li=[],El={},Gh,mn={},Co={},Dc=30,Wa=[],ac="",oc=function(e){var t=e[0],n,i;if(ni(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wa.length;i--&&!Wa[i].targetTest(t););n=Wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new uf(e[i],n)))||e.splice(i,1);return e},nr=function(e){return e._gsap||oc(Rn(e))[0]._gsap},Vh=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():nc(n)&&e.getAttribute&&e.getAttribute(t)||n},an=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},jr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fd=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},io=function(){var e=Li.length,t=Li.slice(0),n,i;for(El={},Li.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hh=function(e,t,n,i){Li.length&&!Vt&&io(),e.render(t,n,i||Vt&&t<0&&(e._initted||e._startAt)),Li.length&&!Vt&&io()},Wh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Nh).length<2?t:It(e)?e.trim():e},Xh=function(e){return e},zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zd=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},hr=function(e,t){for(var n in t)e[n]=t[n];return e},Lc=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ni(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ro=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Is=function(e){var t=e.parent||ht,n=e.keyframes?zd(Ht(e.keyframes)):zn;if(sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Nd=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},qh=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},mo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Fi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ir=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ud=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Al=function(e,t,n,i){return e._startAt&&(Vt?e._startAt.revert(Ha):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},kd=function o(e){return!e||e._ts&&o(e.parent)},Rc=function(e){return e._repeat?ts(e._tTime,e=e.duration()+e._rDelay)*e:0},ts=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},so=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},go=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},_o=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),go(e),n._dirty||ir(n,e)),e},Yh=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=so(e.rawTime(),t),(!t._dur||na(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),ir(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Jn=function(e,t,n,i){return t.parent&&Fi(t),t._start=zt((_i(n)?n:n||e!==ht?En(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qh(e,t,"_first","_last",e._sort?"_start":0),Cl(t)||(e._recent=t),i||Yh(e,t),e._ts<0&&_o(e,e._tTime),e},jh=function(e,t){return(Sn.ScrollTrigger||rc("scrollTrigger",t))&&Sn.ScrollTrigger.create(t,e)},$h=function(e,t,n,i,r){if(cc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gh!==gn.frame)return Li.push(e),e._lazy=[r,i],1},Bd=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Cl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gd=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Bd(e)&&!(!e._initted&&Cl(e))||(e._ts<0||e._dp._ts<0)&&!Cl(e))?0:1,s=e._rDelay,l=0,c,u,f;if(s&&e._repeat&&(l=na(0,e._tDur,t),u=ts(l,s),e._yoyo&&u&1&&(a=1-a),u!==ts(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Vt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&$h(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Al(e,t,n,!0),e._onUpdate&&!n&&In(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Fi(e,1),!n&&!Vt&&(In(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Vd=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ns=function(e,t,n,i){var r=e._repeat,a=zt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:zt(a*(r+1)+e._rDelay*r):a,s>0&&!i&&_o(e,e._tTime=e._tDur*s),e.parent&&go(e),n||ir(e.parent,e),e},Ic=function(e){return e instanceof rn?ir(e):ns(e,e._dur)},Hd={_start:0,endTime:Xs,totalDuration:Xs},En=function o(e,t,n){var i=e.labels,r=e._recent||Hd,a=e.duration()>=Ln?r.endTime(!1):e._dur,s,l,c;return It(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(Ht(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},Os=function(e,t,n){var i=_i(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;a.immediateRender=sn(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Et(t[0],a,t[r+1])},Gi=function(e,t){return e||e===0?t(e):t},na=function(e,t,n){return n<e?e:n>t?t:n},Gt=function(e,t){return!It(e)||!(t=Rd.exec(e))?"":t[1]},Wd=function(e,t,n){return Gi(n,function(i){return na(e,t,i)})},Pl=[].slice,Zh=function(e,t){return e&&ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ni(e[0]))&&!e.nodeType&&e!==An},Xd=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return It(i)&&!t||Zh(i,1)?(r=n).push.apply(r,Rn(i)):n.push(i)})||n},Rn=function(e,t,n){return St&&!t&&St.selector?St.selector(e):It(e)&&!n&&(Tl||!is())?Pl.call((t||ic).querySelectorAll(e),0):Ht(e)?Xd(e,n):Zh(e)?Pl.call(e,0):e?[e]:[]},Dl=function(e){return e=Rn(e)[0]||no("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Rn(t,n.querySelectorAll?n:n===e?no("Invalid scope")||ic.createElement("div"):e)}},Kh=function(e){return e.sort(function(){return .5-Math.random()})},Jh=function(e){if(mt(e))return e;var t=ni(e)?e:{each:e},n=rr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,f=i;return It(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],f=i[1]),function(h,m,g){var d=(g||t).length,p=a[d],_,M,v,b,y,E,A,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Ln])[1],!T){for(A=-Ln;A<(A=g[T++].getBoundingClientRect().left)&&T<d;);T--}for(p=a[d]=[],_=l?Math.min(T,d)*u-.5:i%T,M=T===Ln?0:l?d*f/T-.5:i/T|0,A=0,x=Ln,E=0;E<d;E++)v=E%T-_,b=M-(E/T|0),p[E]=y=c?Math.abs(c==="y"?b:v):Rh(v*v+b*b),y>A&&(A=y),y<x&&(x=y);i==="random"&&Kh(p),p.max=A-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=Gt(t.amount||t.each)||0,n=n&&d<0?of(n):n}return d=(p[h]-p.min)/p.max||0,zt(p.b+(n?n(d):d)*p.v)+p.u}},Ll=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_i(n)?0:Gt(n))}},Qh=function(e,t){var n=Ht(e),i,r;return!n&&ni(e)&&(i=n=e.radius||Ln,e.values?(e=Rn(e.values),(r=!_i(e[0]))&&(i*=i)):e=Ll(e.increment)),Gi(t,n?mt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ln,u=0,f=e.length,h,m;f--;)r?(h=e[f].x-s,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-s),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,r||u===a||_i(a)?u:u+Gt(a)}:Ll(e))},ef=function(e,t,n,i){return Gi(Ht(e)?!t:n===!0?!!(n=0):!i,function(){return Ht(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qd=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Yd=function(e,t){return function(n){return e(parseFloat(n))+(t||Gt(n))}},jd=function(e,t,n){return nf(e,t,0,1,n)},tf=function(e,t,n){return Gi(n,function(i){return e[~~t(i)]})},$d=function o(e,t,n){var i=t-e;return Ht(e)?tf(e,o(0,e.length),t):Gi(n,function(r){return(i+(r-e)%i)%i+e})},Zd=function o(e,t,n){var i=t-e,r=i*2;return Ht(e)?tf(e,o(0,e.length-1),t):Gi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},qs=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Nh:wl),n+=e.substr(t,i-t)+ef(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},nf=function(e,t,n,i,r){var a=t-e,s=i-n;return Gi(r,function(l){return n+((l-e)/a*s||0)})},Kd=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=It(e),s={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ht(e)&&!Ht(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(o(e[c-1],e[c]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=hr(Ht(e)?[]:{},e));if(!u){for(l in t)lc.call(s,e,l,"get",t[l]);r=function(g){return fc(g,s)||(a?e.p:e)}}}return Gi(n,r)},Oc=function(e,t,n){var i=e.labels,r=Ln,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},In=function(e,t,n){var i=e.vars,r=i[t],a=St,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Li.length&&io(),s&&(St=s),u=l?r.apply(c,l):r.call(c),St=a,u},Es=function(e){return Fi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&In(e,"onInterrupt"),e},Hr,Jd=function(e){e=!e.name&&e.default||e;var t=e.name,n=mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Xs,render:fc,add:lc,kill:pp,modifier:dp,rawVars:0},a={targetTest:0,get:0,getSetter:hc,aliases:{},register:0};if(is(),e!==i){if(mn[t])return;zn(i,zn(ro(e,r),a)),hr(i.prototype,hr(r,ro(e,a))),mn[i.prop=t]=i,e.targetTest&&(Wa.push(i),sc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Bh(t,i),e.register&&e.register(wn,i,on)},rt=255,As={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Po=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},rf=function(e,t,n){var i=e?_i(e)?[e>>16,e>>8&rt,e&rt]:0:As.black,r,a,s,l,c,u,f,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),As[e])i=As[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(wl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Po(l+1/3,r,a),i[1]=Po(l,r,a),i[2]=Po(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Fh),n&&i.length<4&&(i[3]=1),i}else i=e.match(wl)||As.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/rt,a=i[1]/rt,s=i[2]/rt,f=Math.max(r,a,s),h=Math.min(r,a,s),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===r?(a-s)/m+(a<s?6:0):f===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},sf=function(e){var t=[],n=[],i=-1;return e.split(Ri).forEach(function(r){var a=r.match(Vr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Fc=function(e,t,n){var i="",r=(e+i).match(Ri),a=t?"hsla(":"rgba(",s=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=rf(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=sf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ri,"1").split(Vr),f=c.length-1;s<f;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Ri),f=c.length-1;s<f;s++)i+=c[s]+r[s];return i+c[f]},Ri=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in As)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Qd=/hsl[a]?\(/,af=function(e){var t=e.join(" "),n;if(Ri.lastIndex=0,Ri.test(t))return n=Qd.test(t),e[1]=Fc(e[1],n),e[0]=Fc(e[0],n,sf(e[1])),!0},Ys,gn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,f,h,m,g=function d(p){var _=o()-i,M=p===!0,v,b,y,E;if(_>e&&(n+=_-t),i+=_,y=i-n,v=y-a,(v>0||M)&&(E=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,a+=v+(v>=r?4:r-v),b=1),M||(l=c(d)),b)for(m=0;m<s.length;m++)s[m](y,h,E,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Uh&&(!Tl&&Ih()&&(An=Tl=window,ic=An.document||{},Sn.gsap=wn,(An.gsapVersions||(An.gsapVersions=[])).push(wn.version),kh(to||An.GreenSockGlobals||!An.gsap&&An||{}),u=An.requestAnimationFrame),l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Ys=1,g(2))},sleep:function(){(u?An.cancelAnimationFrame:clearTimeout)(l),Ys=0,c=Xs},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),a=f.time*1e3+r},add:function(p,_,M){var v=_?function(b,y,E,A){p(b,y,E,A),f.remove(v)}:p;return f.remove(p),s[M?"unshift":"push"](v),is(),v},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},f}(),is=function(){return!Ys&&gn.wake()},Ke={},ep=/^[\d.\-M][\d.\-,\s]/,tp=/["']/g,np=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(tp,"").trim():+c,i=l.substr(s+1).trim();return t},ip=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},rp=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[np(t[1])]:ip(e).split(",").map(Wh)):Ke._CE&&ep.test(e)?Ke._CE("",e):n},of=function(e){return function(t){return 1-e(1-t)}},lf=function o(e,t){for(var n=e._first,i;n;)n instanceof rn?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},rr=function(e,t){return e&&(mt(e)?e:Ke[e]||rp(e))||t},xr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return an(e,function(s){Ke[s]=Sn[s]=r,Ke[a=s.toLowerCase()]=n;for(var l in r)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[s+"."+l]=r[l]}),r},cf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Do=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Sl*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ld((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:cf(s);return r=Sl/r,l.config=function(c,u){return o(e,c,u)},l},Lo=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:cf(n);return i.config=function(r){return o(e,r)},i};an("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;xr(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;xr("Elastic",Do("in"),Do("out"),Do());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};xr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);xr("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});xr("Circ",function(o){return-(Rh(1-o*o)-1)});xr("Sine",function(o){return o===1?1:-Dd(o*Cd)+1});xr("Back",Lo("in"),Lo("out"),Lo());Ke.SteppedEase=Ke.steps=Sn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-st;return function(s){return((i*na(0,a,s)|0)+r)*n}}};es.ease=Ke["quad.out"];an("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return ac+=o+","+o+"Params,"});var uf=function(e,t){this.id=Pd++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vh,this.set=t?t.getSetter:hc},rs=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ns(this,+t.duration,1,1),this.data=t.data,St&&(this._ctx=St,St.data.push(this)),Ys||gn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(is(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(_o(this,n),!r._dp||r.parent||Yh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Rc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Rc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ts(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?so(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(na(-this._delay,this._tDur,i),!0),go(this),Ud(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Jn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?so(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Od);var i=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ic(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ic(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(En(this,n),sn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,sn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-st)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=mt(n)?n:Xh,s=function(){var c=i.then;i.then=null,mt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Es(this)},o}();zn(rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var rn=function(o){Lh(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=sn(n.sortChildren),ht&&Jn(n.parent||ht,ui(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&jh(ui(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Os(0,arguments,this),this},t.from=function(i,r,a){return Os(1,arguments,this),this},t.fromTo=function(i,r,a,s){return Os(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Is(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Et(i,r,En(this,a),1),this},t.call=function(i,r,a){return Jn(this,Et.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Et(i,a,En(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,Is(a).immediateRender=sn(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,f){return s.startAt=a,Is(s).immediateRender=sn(s.immediateRender),this.staggerTo(i,r,s,l,c,u,f)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,d,p,_,M,v,b,y,E,A;if(this!==ht&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),h=u,b=this._start,v=this._ts,_=!v,f&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(h=zt(u%p),u===l?(d=this._repeat,h=c):(d=~~(u/p),d&&d===u/p&&(h=c,d--),h>c&&(h=c)),y=ts(this._tTime,p),!s&&this._tTime&&y!==d&&(y=d),E&&d&1&&(h=c-h,A=1),d!==y&&!this._lock){var x=E&&y&1,T=x===(E&&d&1);if(d<y&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(A?0:zt(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;lf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Vd(this,zt(s),zt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&h&&!r&&(In(this,"onStart"),this._tTime!==u))return this;if(h>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,a),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-st);break}}m=g}else{m=this._last;for(var L=i<0?i:h;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||Vt&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=L?-st:st);break}}m=g}}if(M&&!r&&(this.pause(),M.render(h>=s?0:-st)._zTime=h>=s?1:-1,this._ts))return this._start=b,go(this),this.render(i,r,a);this._onUpdate&&!r&&In(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fi(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(In(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(_i(r)||(r=En(this,r,i)),!(i instanceof rs)){if(Ht(i))return i.forEach(function(s){return a.add(s,r)}),this;if(It(i))return this.addLabel(i,r);if(mt(i))i=Et.delayedCall(0,i);else return this}return this!==i?Jn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Ln);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Et?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return It(i)?this.removeLabel(i):mt(i)?this.killTweensOf(i):(mo(this,i),i===this._recent&&(this._recent=this._last),ir(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=En(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=Et.delayedCall(0,r||Xs,a);return s.data="isPause",this._hasPause=1,Jn(this,s,En(this,i))},t.removePause=function(i){var r=this._first;for(i=En(this,i);r;)r._start===i&&r.data==="isPause"&&Fi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Ti!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Rn(i),l=this._first,c=_i(r),u;l;)l instanceof Et?Fd(l._targets,s)&&(c?(!Ti||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=En(a,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,g=Et.to(a,zn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&ns(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,zn({startAt:{time:En(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Oc(this,En(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Oc(this,En(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ir(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ir(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=Ln,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,Jn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;ns(a,a===ht&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ht._ts&&(Hh(ht,so(i,ht)),Gh=gn.frame),gn.frame>=Dc){Dc+=Mn.autoSleep||120;var r=ht._first;if((!r||!r._ts)&&Mn.autoSleep&&gn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||gn.sleep()}}},e}(rs);zn(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var sp=function(e,t,n,i,r,a,s){var l=new on(this._pt,e,t,0,1,gf,null,r),c=0,u=0,f,h,m,g,d,p,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=qs(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(Ao)||[];f=Ao.exec(i);)g=f[0],d=i.substring(c,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?jr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Ao.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(zh.test(i)||_)&&(l.e=0),this._pt=l,l},lc=function(e,t,n,i,r,a,s,l,c,u){mt(i)&&(i=i(r||0,e,a));var f=e[t],h=n!=="get"?n:mt(f)?c?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=mt(f)?c?up:pf:uc,g;if(It(i)&&(~i.indexOf("random(")&&(i=qs(i)),i.charAt(1)==="="&&(g=jr(h,i)+(Gt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Rl)return!isNaN(h*i)&&i!==""?(g=new on(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?fp:mf,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!f&&!(t in e)&&rc(t,i),sp.call(this,e,t,h,i,m,l||Mn.stringFilter,c))},ap=function(e,t,n,i,r){if(mt(e)&&(e=Fs(e,r,t,n,i)),!ni(e)||e.style&&e.nodeType||Ht(e)||Oh(e))return It(e)?Fs(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=Fs(e[s],r,t,n,i);return a},hf=function(e,t,n,i,r,a){var s,l,c,u;if(mn[e]&&(s=new mn[e]).init(r,s.rawVars?t[e]:ap(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new on(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Hr))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Ti,Rl,cc=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,M=e._targets,v=e.parent,b=v&&v.data==="nested"?v.vars.targets:M,y=e._overwrite==="auto"&&!tc,E=e.timeline,A,x,T,L,U,q,F,R,B,W,K,k,Q;if(E&&(!g||!r)&&(r="none"),e._ease=rr(r,es.ease),e._yEase=m?of(rr(m===!0?r:m,es.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(R=M[0]?nr(M[0]).harness:0,k=R&&i[R.prop],A=ro(i,sc),_&&(_._zTime<0&&_.progress(1),t<0&&h&&s&&!d?_.render(-1,!0):_.revert(h&&p?Ha:Id),_._lazy=0),a){if(Fi(e._startAt=Et.set(M,zn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!_&&sn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!s&&!d)&&e._startAt.revert(Ha),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(s=!1),T=zn({overwrite:!1,data:"isFromStart",lazy:s&&!_&&sn(l),immediateRender:s,stagger:0,parent:v},A),k&&(T[R.prop]=k),Fi(e._startAt=Et.set(M,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(Ha):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&sn(l)||l&&!p,x=0;x<M.length;x++){if(U=M[x],F=U._gsap||oc(M)[x]._gsap,e._ptLookup[x]=W={},El[F.id]&&Li.length&&io(),K=b===M?x:b.indexOf(U),R&&(B=new R).init(U,k||A,e,K,b)!==!1&&(e._pt=L=new on(e._pt,U,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(P){W[P]=L}),B.priority&&(q=1)),!R||k)for(T in A)mn[T]&&(B=hf(T,A,e,K,U,b))?B.priority&&(q=1):W[T]=L=lc.call(e,U,T,"get",A[T],K,b,0,i.stringFilter);e._op&&e._op[x]&&e.kill(U,e._op[x]),y&&e._pt&&(Ti=e,ht.killTweensOf(U,W,e.globalTime(t)),Q=!e.parent,Ti=0),e._pt&&l&&(El[F.id]=1)}q&&_f(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&E.render(Ln,!0,!0)},op=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Rl=1,e.vars[t]="+=0",cc(e,s),Rl=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=vt(n)+Gt(u.e)),u.b&&(u.b=c.s+Gt(u.b))},lp=function(e,t){var n=e[0]?nr(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=hr({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},cp=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(Ht(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},Fs=function(e,t,n,i,r){return mt(e)?e.call(t,n,i,r):It(e)&&~e.indexOf("random(")?qs(e):e},ff=ac+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",df={};an(ff+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return df[o]=1});var Et=function(o){Lh(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Is(i))||this;var l=s.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,M=i.parent||ht,v=(Ht(n)||Oh(n)?_i(n[0]):"length"in i)?[n]:Rn(n),b,y,E,A,x,T,L,U;if(s._targets=v.length?oc(v):no("GSAP target "+n+" not found. https://greensock.com",!Mn.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||h||oa(c)||oa(u)){if(i=s.vars,b=s.timeline=new rn({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:v}),b.kill(),b.parent=b._dp=ui(s),b._start=0,h||oa(c)||oa(u)){if(A=v.length,L=h&&Jh(h),ni(h))for(x in h)~ff.indexOf(x)&&(U||(U={}),U[x]=h[x]);for(y=0;y<A;y++)E=ro(i,df),E.stagger=0,_&&(E.yoyoEase=_),U&&hr(E,U),T=v[y],E.duration=+Fs(c,ui(s),y,T,v),E.delay=(+Fs(u,ui(s),y,T,v)||0)-s._delay,!h&&A===1&&E.delay&&(s._delay=u=E.delay,s._start+=u,E.delay=0),b.to(T,E,L?L(y,T,v):0),b._ease=Ke.none;b.duration()?c=u=0:s.timeline=0}else if(g){Is(zn(b.vars.defaults,{ease:"none"})),b._ease=rr(g.ease||i.ease||"none");var q=0,F,R,B;if(Ht(g))g.forEach(function(W){return b.to(v,W,">")}),b.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||cp(x,g[x],E,g.easeEach);for(x in E)for(F=E[x].sort(function(W,K){return W.t-K.t}),q=0,y=0;y<F.length;y++)R=F[y],B={ease:R.e,duration:(R.t-(y?F[y-1].t:0))/100*c},B[x]=R.v,b.to(v,B,q),q+=B.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||s.duration(c=b.duration())}else s.timeline=0;return m===!0&&!tc&&(Ti=ui(s),ht.killTweensOf(v),Ti=0),Jn(M,ui(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(f||!c&&!g&&s._start===zt(M._time)&&sn(f)&&kd(ui(s))&&M.data!=="nested")&&(s._tTime=-st,s.render(Math.max(0,-u)||0)),p&&jh(ui(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-st&&!u?l:i<st?0:i,h,m,g,d,p,_,M,v,b;if(!c)Gd(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(h=zt(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(b=this._yEase,h=c-h),p=ts(this._tTime,d),h===s&&!a&&this._initted)return this._tTime=f,this;g!==p&&(v&&this._yEase&&lf(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(zt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if($h(this,u?i:h,a,r,f))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!s&&!r&&(In(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;v&&v.render(i<0?i:!h&&_?-st:v._dur*v._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Al(this,i,r,a),In(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&In(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Al(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Fi(this,1),!r&&!(u&&!s)&&(f||s||_)&&(In(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){Ys||gn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||cc(this,l),c=this._ease(l/this._dur),op(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(_o(this,0),this.parent||qh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Es(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ti&&Ti.vars.overwrite!==!0)._first||Es(this),this.parent&&a!==this.timeline.totalDuration()&&ns(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Rn(i):s,c=this._ptLookup,u=this._pt,f,h,m,g,d,p,_;if((!r||r==="all")&&Nd(s,l))return r==="all"&&(this._pt=0),Es(this);for(f=this._op=this._op||[],r!=="all"&&(It(r)&&(d={},an(r,function(M){return d[M]=1}),r=d),r=lp(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){h=c[_],r==="all"?(f[_]=r,g=h,m={}):(m=f[_]=f[_]||{},g=r);for(d in g)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&mo(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Es(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Os(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return Os(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return ht.killTweensOf(i,r,a)},e}(rs);zn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});an("staggerTo,staggerFrom,staggerFromTo",function(o){Et[o]=function(){var e=new rn,t=Pl.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var uc=function(e,t,n){return e[t]=n},pf=function(e,t,n){return e[t](n)},up=function(e,t,n,i){return e[t](i.fp,n)},hp=function(e,t,n){return e.setAttribute(t,n)},hc=function(e,t){return mt(e[t])?pf:nc(e[t])&&e.setAttribute?hp:uc},mf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},fc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dp=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},pp=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?mo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},mp=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},_f=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},on=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||mf,this.d=l||this,this.set=c||uc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=mp,this.m=n,this.mt=r,this.tween=i},o}();an(ac+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return sc[o]=1});Sn.TweenMax=Sn.TweenLite=Et;Sn.TimelineLite=Sn.TimelineMax=rn;ht=new rn({sortChildren:!1,defaults:es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mn.stringFilter=af;var ss=[],Xa={},gp=[],zc=0,Ro=function(e){return(Xa[e]||gp).map(function(t){return t()})},Il=function(){var e=Date.now(),t=[];e-zc>2&&(Ro("matchMediaInit"),ss.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=An.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ro("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),zc=e,Ro("matchMedia"))},xf=function(){function o(t,n){this.selector=n&&Dl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){mt(n)&&(r=i,i=n,n=mt);var a=this,s=function(){var c=St,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Dl(r)),St=a,f=i.apply(a,arguments),mt(f)&&a._r.push(f),St=c,a.selector=u,a.isReverted=!1,f};return a.last=s,n===mt?s(a):n?a[n]=s:s},e.ignore=function(n){var i=St;St=null,n(this),St=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof rs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=ss.indexOf(this);~s&&ss.splice(s,1)}},e.revert=function(n){this.kill(n||{})},o}(),_p=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){ni(n)||(n={matches:n});var a=new xf(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=An.matchMedia(n[c]),l&&(ss.indexOf(a)<0&&ss.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Il):l.addEventListener("change",Il)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ao={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Jd(i)})},timeline:function(e){return new rn(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){It(e)&&(e=Rn(e)[0]);var r=nr(e||{}).get,a=n?Xh:Wh;return n==="native"&&(n=""),e&&(t?a((mn[t]&&mn[t].get||r)(e,t,n,i)):function(s,l,c){return a((mn[s]&&mn[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=Rn(e),e.length>1){var i=e.map(function(u){return wn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var a=mn[t],s=nr(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Hr._pt=0,f.init(e,n?u+n:u,Hr,0,[e]),f.render(1,f),Hr._pt&&fc(1,Hr)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=wn.to(e,hr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rr(e.ease,es.ease)),Lc(es,e||{})},config:function(e){return Lc(Mn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!mn[s]&&!Sn[s]&&no(t+" effect requires "+s+" plugin.")}),Co[t]=function(s,l,c){return n(Rn(s),zn(l||{},r),c)},a&&(rn.prototype[t]=function(s,l,c){return this.add(Co[t](s,ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=rr(t)},parseEase:function(e,t){return arguments.length?rr(e,t):Ke},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new rn(e),i,r;for(n.smoothChildTiming=sn(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,i=ht._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Jn(n,i,i._start-i._delay),i=r;return Jn(ht,n,0),n},context:function(e,t){return e?new xf(e,t):St},matchMedia:function(e){return new _p(e)},matchMediaRefresh:function(){return ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Il()},addEventListener:function(e,t){var n=Xa[e]||(Xa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:$d,wrapYoyo:Zd,distribute:Jh,random:ef,snap:Qh,normalize:jd,getUnit:Gt,clamp:Wd,splitColor:rf,toArray:Rn,selector:Dl,mapRange:nf,pipe:qd,unitize:Yd,interpolate:Kd,shuffle:Kh},install:kh,effects:Co,ticker:gn,updateRoot:rn.updateRoot,plugins:mn,globalTimeline:ht,core:{PropTween:on,globals:Bh,Tween:Et,Timeline:rn,Animation:rs,getCache:nr,_removeLinkedListItem:mo,reverting:function(){return Vt},context:function(e){return e&&St&&(St.data.push(e),e._ctx=St),St},suppressOverwrites:function(e){return tc=e}}};an("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ao[o]=Et[o]});gn.add(rn.updateRoot);Hr=ao.to({},{duration:0});var xp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},vp=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=xp(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Io=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(It(r)&&(l={},an(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}vp(s,r)}}}},wn=ao.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Io("roundProps",Ll),Io("modifiers"),Io("snap",Qh))||ao;Et.version=rn.version=wn.version="3.11.4";Uh=1;Ih()&&is();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nc,Ei,$r,dc,Qi,Uc,pc,yp=function(){return typeof window<"u"},xi={},$i=180/Math.PI,Zr=Math.PI/180,yr=Math.atan2,kc=1e8,mc=/([A-Z])/g,Mp=/(left|right|width|margin|padding|x)/i,bp=/[\s,\(]\S/,pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ol=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Tp=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ep=function(e,t,n){return e.style[t]=n},Ap=function(e,t,n){return e.style.setProperty(t,n)},Cp=function(e,t,n){return e._gsap[t]=n},Pp=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Dp=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Lp=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},ft="transform",qn=ft+"Origin",Rp=function(e,t){var n=this,i=this.target,r=i.style;if(e in xi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=hi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:hi(i,e)),this.props.indexOf(ft)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=ft}(r||t)&&this.props.push(e,t,r[e])},Mf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ip=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(mc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=pc(),r&&!r.isStart&&!n[ft]&&(Mf(n),i.uncache=1)}},bf=function(e,t){var n={target:e,props:[],revert:Ip,save:Rp};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Sf,Fl=function(e,t){var n=Ei.createElementNS?Ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ei.createElement(e);return n.style?n:Ei.createElement(e)},Qn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(mc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,as(t)||t,1)||""},Bc="O,Moz,ms,Ms,Webkit".split(","),as=function(e,t,n){var i=t||Qi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Bc[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Bc[a]:"")+e},zl=function(){yp()&&window.document&&(Nc=window,Ei=Nc.document,$r=Ei.documentElement,Qi=Fl("div")||{style:{}},Fl("div"),ft=as(ft),qn=ft+"Origin",Qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sf=!!as("perspective"),pc=wn.core.reverting,dc=1)},Oo=function o(e){var t=Fl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if($r.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),$r.removeChild(t),this.style.cssText=r,a},Gc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},wf=function(e){var t;try{t=e.getBBox()}catch{t=Oo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Oo||(t=Oo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Gc(e,["x","cx","x1"])||0,y:+Gc(e,["y","cy","y1"])||0,width:0,height:0}:t},Tf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&wf(e))},js=function(e,t){if(t){var n=e.style;t in xi&&t!==qn&&(t=ft),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(mc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ai=function(e,t,n,i,r,a){var s=new on(e._pt,t,n,0,1,a?yf:vf);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Vc={deg:1,rad:1,turn:1},Op={grid:1,flex:1},zi=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=Qi.style,l=Mp.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",m=i==="%",g,d,p,_;return i===a||!r||Vc[i]||Vc[a]?r:(a!=="px"&&!h&&(r=o(e,t,n,"px")),_=e.getCTM&&Tf(e),(m||a==="%")&&(xi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],vt(m?r/g*f:r/100*g)):(s[l?"width":"height"]=f+(h?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Ei||!d.appendChild)&&(d=Ei.body),p=d._gsap,p&&m&&p.width&&l&&p.time===gn.time&&!p.uncache?vt(r/p.width*f):((m||a==="%")&&!Op[Qn(d,"display")]&&(s.position=Qn(e,"position")),d===e&&(s.position="static"),d.appendChild(Qi),g=Qi[u],d.removeChild(Qi),s.position="absolute",l&&m&&(p=nr(d),p.time=gn.time,p.width=d[u]),vt(h?g*r/f:g&&r?f/g*r:0))))},hi=function(e,t,n,i){var r;return dc||zl(),t in pi&&t!=="transform"&&(t=pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),xi[t]&&t!=="transform"?(r=Zs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:lo(Qn(e,qn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=oo[t]&&oo[t](e,t,n)||Qn(e,t)||Vh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?zi(e,t,r,n)+n:r},Fp=function(e,t,n,i){if(!n||n==="none"){var r=as(t,e,1),a=r&&Qn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Qn(e,"borderTopColor"))}var s=new on(this._pt,e.style,t,0,1,gf),l=0,c=0,u,f,h,m,g,d,p,_,M,v,b,y;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Qn(e,t)||i,e.style[t]=n),u=[n,i],af(u),n=u[0],i=u[1],h=n.match(Vr)||[],y=i.match(Vr)||[],y.length){for(;f=Vr.exec(i);)p=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(d=h[c++]||"")&&(m=parseFloat(d)||0,b=d.substr((m+"").length),p.charAt(1)==="="&&(p=jr(m,p)+b),_=parseFloat(p),v=p.substr((_+"").length),l=Vr.lastIndex-v.length,v||(v=v||Mn.units[t]||b,l===i.length&&(i+=v,s.e+=v)),b!==v&&(m=zi(e,t,d,v)||0),s._pt={_next:s._pt,p:M||c===1?M:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?yf:vf;return zh.test(i)&&(s.e=0),this._pt=s,s},Hc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zp=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Hc[n]||n,t[1]=Hc[i]||i,t.join(" ")},Np=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],xi[s]&&(l=1,s=s==="transformOrigin"?qn:ft),js(n,s);l&&(js(n,ft),a&&(a.svg&&n.removeAttribute("transform"),Zs(n,1),a.uncache=1,Mf(i)))}},oo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new on(e._pt,t,n,0,0,Np);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},$s=[1,0,0,1,0,0],Ef={},Af=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wc=function(e){var t=Qn(e,ft);return Af(t)?$s:t.substr(7).match(Fh).map(vt)},gc=function(e,t){var n=e._gsap||nr(e),i=e.style,r=Wc(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?$s:r):(r===$s&&!e.offsetParent&&e!==$r&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,$r.appendChild(e)),r=Wc(e),l?i.display=l:js(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):$r.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Nl=function(e,t,n,i,r,a){var s=e._gsap,l=r||gc(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,f=s.xOffset||0,h=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],M=l[5],v=t.split(" "),b=parseFloat(v[0])||0,y=parseFloat(v[1])||0,E,A,x,T;n?l!==$s&&(A=m*p-g*d)&&(x=b*(p/A)+y*(-d/A)+(d*M-p*_)/A,T=b*(-g/A)+y*(m/A)-(m*M-g*_)/A,b=x,y=T):(E=wf(e),b=E.x+(~v[0].indexOf("%")?b/100*E.width:b),y=E.y+(~(v[1]||v[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&s.smooth?(_=b-c,M=y-u,s.xOffset=f+(_*m+M*d)-_,s.yOffset=h+(_*g+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=y,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[qn]="0px 0px",a&&(Ai(a,s,"xOrigin",c,b),Ai(a,s,"yOrigin",u,y),Ai(a,s,"xOffset",f,s.xOffset),Ai(a,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+y)},Zs=function(e,t){var n=e._gsap||new uf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=Qn(e,qn)||"0",u,f,h,m,g,d,p,_,M,v,b,y,E,A,x,T,L,U,q,F,R,B,W,K,k,Q,P,V,Y,ne,te,ae;return u=f=h=d=p=_=M=v=b=0,m=g=1,n.svg=!!(e.getCTM&&Tf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ft]!=="none"?l[ft]:"")),i.scale=i.rotate=i.translate="none"),A=gc(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Nl(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,E=n.yOrigin||0,A!==$s&&(U=A[0],q=A[1],F=A[2],R=A[3],u=B=A[4],f=W=A[5],A.length===6?(m=Math.sqrt(U*U+q*q),g=Math.sqrt(R*R+F*F),d=U||q?yr(q,U)*$i:0,M=F||R?yr(F,R)*$i+d:0,M&&(g*=Math.abs(Math.cos(M*Zr))),n.svg&&(u-=y-(y*U+E*F),f-=E-(y*q+E*R))):(ae=A[6],ne=A[7],P=A[8],V=A[9],Y=A[10],te=A[11],u=A[12],f=A[13],h=A[14],x=yr(ae,Y),p=x*$i,x&&(T=Math.cos(-x),L=Math.sin(-x),K=B*T+P*L,k=W*T+V*L,Q=ae*T+Y*L,P=B*-L+P*T,V=W*-L+V*T,Y=ae*-L+Y*T,te=ne*-L+te*T,B=K,W=k,ae=Q),x=yr(-F,Y),_=x*$i,x&&(T=Math.cos(-x),L=Math.sin(-x),K=U*T-P*L,k=q*T-V*L,Q=F*T-Y*L,te=R*L+te*T,U=K,q=k,F=Q),x=yr(q,U),d=x*$i,x&&(T=Math.cos(x),L=Math.sin(x),K=U*T+q*L,k=B*T+W*L,q=q*T-U*L,W=W*T-B*L,U=K,B=k),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=vt(Math.sqrt(U*U+q*q+F*F)),g=vt(Math.sqrt(W*W+ae*ae)),x=yr(B,W),M=Math.abs(x)>2e-4?x*$i:0,b=te?1/(te<0?-te:te):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Af(Qn(e,ft)),K&&e.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=vt(m),n.scaleY=vt(g),n.rotation=vt(d)+s,n.rotationX=vt(p)+s,n.rotationY=vt(_)+s,n.skewX=M+s,n.skewY=v+s,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[qn]=lo(c)),n.xOffset=n.yOffset=0,n.force3D=Mn.force3D,n.renderTransform=n.svg?kp:Sf?Cf:Up,n.uncache=0,n},lo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fo=function(e,t,n){var i=Gt(t);return vt(parseFloat(t)+parseFloat(zi(e,"x",n+"px",i)))+i},Up=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cf(e,t)},Wi="0deg",ms="0px",Xi=") ",Cf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,v=n.zOrigin,b="",y=_==="auto"&&e&&e!==1||_===!0;if(v&&(f!==Wi||u!==Wi)){var E=parseFloat(u)*Zr,A=Math.sin(E),x=Math.cos(E),T;E=parseFloat(f)*Zr,T=Math.cos(E),a=Fo(M,a,A*T*-v),s=Fo(M,s,-Math.sin(E)*-v),l=Fo(M,l,x*T*-v+v)}p!==ms&&(b+="perspective("+p+Xi),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(y||a!==ms||s!==ms||l!==ms)&&(b+=l!==ms||y?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Xi),c!==Wi&&(b+="rotate("+c+Xi),u!==Wi&&(b+="rotateY("+u+Xi),f!==Wi&&(b+="rotateX("+f+Xi),(h!==Wi||m!==Wi)&&(b+="skew("+h+", "+m+Xi),(g!==1||d!==1)&&(b+="scale("+g+", "+d+Xi),M.style[ft]=b||"translate(0, 0)"},kp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,v=parseFloat(a),b=parseFloat(s),y,E,A,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zr,c*=Zr,y=Math.cos(l)*f,E=Math.sin(l)*f,A=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Zr,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,E*=T)),y=vt(y),E=vt(E),A=vt(A),x=vt(x)):(y=f,x=h,E=A=0),(v&&!~(a+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(v=zi(m,"x",a,"px"),b=zi(m,"y",s,"px")),(g||d||p||_)&&(v=vt(v+g-(g*y+d*A)+p),b=vt(b+d-(g*E+d*x)+_)),(i||r)&&(T=m.getBBox(),v=vt(v+i/100*T.width),b=vt(b+r/100*T.height)),T="matrix("+y+","+E+","+A+","+x+","+v+","+b+")",m.setAttribute("transform",T),M&&(m.style[ft]=T)},Bp=function(e,t,n,i,r){var a=360,s=It(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?$i:1),c=l-i,u=i+c+"deg",f,h;return s&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*kc)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*kc)%a-~~(c/a)*a)),e._pt=h=new on(e._pt,t,n,i,c,Sp),h.e=u,h.u="deg",e._props.push(n),h},Xc=function(e,t){for(var n in t)e[n]=t[n];return e},Gp=function(e,t,n){var i=Xc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,f,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ft]=t,s=Zs(n,1),js(n,ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ft],a[ft]=t,s=Zs(n,1),a[ft]=c);for(l in xi)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=Gt(c),g=Gt(u),f=m!==g?zi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new on(e._pt,s,l,f,h-f,Ol),e._pt.u=g||0,e._props.push(l));Xc(s,i)};an("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});oo[e>1?"border"+o:o]=function(s,l,c,u,f){var h,m;if(arguments.length<4)return h=a.map(function(g){return hi(s,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=h[d]=h[d]||h[(d-1)/2|0]}),s.init(l,m,f)}});var Pf={name:"css",register:zl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,f,h,m,g,d,p,_,M,v,b,y,E,A,x;dc||zl(),this.styles=this.styles||bf(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(mn[d]&&hf(d,t,n,i,e,r)))){if(m=typeof u,g=oo[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=qs(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Ri.lastIndex=0,Ri.test(c)||(p=Gt(c),_=Gt(u)),_?p!==_&&(c=zi(e,d,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),x.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],It(c)&&~c.indexOf("random(")&&(c=qs(c)),Gt(c+"")||(c+=Mn.units[d]||Gt(hi(e,d))||""),(c+"").charAt(1)==="="&&(c=hi(e,d))):c=hi(e,d),h=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),d in pi&&(d==="autoAlpha"&&(h===1&&hi(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,s.visibility),Ai(this,s,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=pi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in xi,v){if(this.styles.save(d),b||(y=e._gsap,y.renderTransform&&!t.parseTransform||Zs(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,b=this._pt=new on(this._pt,s,ft,0,1,y.renderTransform,y,0,-1),b.dep=1),d==="scale")this._pt=new on(this._pt,y,"scaleY",y.scaleY,(M?jr(y.scaleY,M+f):f)-y.scaleY||0,Ol),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(qn,0,s[qn]),u=zp(u),y.svg?Nl(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&Ai(this,y,"zOrigin",y.zOrigin,_),Ai(this,s,d,lo(c),lo(u)));continue}else if(d==="svgOrigin"){Nl(e,u,1,E,0,this);continue}else if(d in Ef){Bp(this,y,d,h,M?jr(h,M+u):u);continue}else if(d==="smoothOrigin"){Ai(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){Gp(this,u,e);continue}}else d in s||(d=as(d)||d);if(v||(f||f===0)&&(h||h===0)&&!bp.test(u)&&d in s)p=(c+"").substr((h+"").length),f||(f=0),_=Gt(u)||(d in Mn.units?Mn.units[d]:p),p!==_&&(h=zi(e,d,c,_)),this._pt=new on(this._pt,v?y:s,d,h,(M?jr(h,M+f):f)-h,!v&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Tp:Ol),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=wp);else if(d in s)Fp.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,r);else if(d!=="parseTransform"){rc(d,u);continue}v||(d in s?x.push(d,0,s[d]):x.push(d,1,c||e[d])),a.push(d)}}A&&_f(this)},render:function(e,t){if(t.tween._time||!pc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hi,aliases:pi,getSetter:function(e,t,n){var i=pi[t];return i&&i.indexOf(",")<0&&(t=i),t in xi&&t!==qn&&(e._gsap.x||hi(e,"x"))?n&&Uc===n?t==="scale"?Pp:Cp:(Uc=n||{})&&(t==="scale"?Dp:Lp):e.style&&!nc(e.style[t])?Ep:~t.indexOf("-")?Ap:hc(e,t)},core:{_removeProperty:js,_getMatrix:gc}};wn.utils.checkPrefix=as;wn.core.getStyleSaver=bf;(function(o,e,t,n){var i=an(o+","+e+","+t,function(r){xi[r]=1});an(e,function(r){Mn.units[r]="deg",Ef[r]=1}),pi[i[13]]=o+","+e,an(n,function(r){var a=r.split(":");pi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");an("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Mn.units[o]="px"});wn.registerPlugin(Pf);var _c=wn.registerPlugin(Pf)||wn;_c.core.Tween;function qc(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function Vp(o,e,t){return e&&qc(o.prototype,e),t&&qc(o,t),o}/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nt,Ul,_n,Ci,Pi,Kr,Df,Zi,zs,Lf,mi,Bn,Rf,If=function(){return Nt||typeof window<"u"&&(Nt=window.gsap)&&Nt.registerPlugin&&Nt},Of=1,Wr=[],Ye=[],ei=[],Ns=Date.now,kl=function(e,t){return t},Hp=function(){var e=zs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ye),i.push.apply(i,ei),Ye=n,ei=i,kl=function(a,s){return t[a](s)}},Ii=function(e,t){return~ei.indexOf(e)&&ei[ei.indexOf(e)+1][t]},Us=function(e){return!!~Lf.indexOf(e)},en=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Xt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},la="scrollLeft",ca="scrollTop",Bl=function(){return mi&&mi.isPressed||Ye.cache++},co=function(e,t){var n=function i(r){if(r||r===0){Of&&(_n.history.scrollRestoration="manual");var a=mi&&mi.isPressed;r=i.v=Math.round(r)||(mi&&mi.iOS?1:0),e(r),i.cacheID=Ye.cache,a&&kl("ss",r)}else(t||Ye.cache!==i.cacheID||kl("ref"))&&(i.cacheID=Ye.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Zt={s:la,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:co(function(o){return arguments.length?_n.scrollTo(o,At.sc()):_n.pageXOffset||Ci[la]||Pi[la]||Kr[la]||0})},At={s:ca,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Zt,sc:co(function(o){return arguments.length?_n.scrollTo(Zt.sc(),o):_n.pageYOffset||Ci[ca]||Pi[ca]||Kr[ca]||0})},tn=function(e){return Nt.utils.toArray(e)[0]||(typeof e=="string"&&Nt.config().nullTargetWarn!==!1?void 0:null)},Ni=function(e,t){var n=t.s,i=t.sc;Us(e)&&(e=Ci.scrollingElement||Pi);var r=Ye.indexOf(e),a=i===At.sc?1:2;!~r&&(r=Ye.push(e)-1),Ye[r+a]||e.addEventListener("scroll",Bl);var s=Ye[r+a],l=s||(Ye[r+a]=co(Ii(e,n),!0)||(Us(e)?i:co(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,s||(l.smooth=Nt.getProperty(e,"scrollBehavior")==="smooth"),l},Gl=function(e,t,n){var i=e,r=e,a=Ns(),s=a,l=t||50,c=Math.max(500,l*3),u=function(g,d){var p=Ns();d||p-a>l?(r=i,i=g,s=a,a=p):n?i+=g:i=r+(g-r)/(p-s)*(a-s)},f=function(){r=i=n?0:i,s=a=0},h=function(g){var d=s,p=r,_=Ns();return(g||g===0)&&g!==i&&u(g),a===s||_-s>c?0:(i+(n?p:-p))/((n?_:a)-d)*1e3};return{update:u,reset:f,getVelocity:h}},gs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Yc=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ff=function(){zs=Nt.core.globals().ScrollTrigger,zs&&zs.core&&Hp()},zf=function(e){return Nt=e||If(),Nt&&typeof document<"u"&&document.body&&(_n=window,Ci=document,Pi=Ci.documentElement,Kr=Ci.body,Lf=[_n,Ci,Pi,Kr],Nt.utils.clamp,Rf=Nt.core.context||function(){},Zi="onpointerenter"in Kr?"pointer":"mouse",Df=wt.isTouch=_n.matchMedia&&_n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bn=wt.eventTypes=("ontouchstart"in Pi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Of=0},500),Ff(),Ul=1),Ul};Zt.op=At;Ye.cache=0;var wt=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){Ul||zf(Nt),zs||Ff();var i=n.tolerance,r=n.dragMinimum,a=n.type,s=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,_=n.onDragEnd,M=n.onDrag,v=n.onPress,b=n.onRelease,y=n.onRight,E=n.onLeft,A=n.onUp,x=n.onDown,T=n.onChangeX,L=n.onChangeY,U=n.onChange,q=n.onToggleX,F=n.onToggleY,R=n.onHover,B=n.onHoverEnd,W=n.onMove,K=n.ignoreCheck,k=n.isNormalizer,Q=n.onGestureStart,P=n.onGestureEnd,V=n.onWheel,Y=n.onEnable,ne=n.onDisable,te=n.onClick,ae=n.scrollSpeed,H=n.capture,Ie=n.allowClicks,pe=n.lockAxis,De=n.onLockAxis;this.target=s=tn(s)||Pi,this.vars=n,m&&(m=Nt.utils.toArray(m)),i=i||1e-9,r=r||0,g=g||1,ae=ae||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(_n.getComputedStyle(Kr).lineHeight)||22);var he,Fe,me,ye,Qe,tt,$e,X=this,et=0,Le=0,_t=Ni(s,Zt),ct=Ni(s,At),C=_t(),S=ct(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Bn[0]==="pointerdown",re=Us(s),ee=s.ownerDocument||Ci,oe=[0,0,0],Te=[0,0,0],D=0,z=function(){return D=Ns()},le=function(ce,se){return(X.event=ce)&&m&&~m.indexOf(ce.target)||se&&J&&ce.pointerType!=="touch"||K&&K(ce,se)},ge=function(){X._vx.reset(),X._vy.reset(),Fe.pause(),f&&f(X)},ue=function(){var ce=X.deltaX=Yc(oe),se=X.deltaY=Yc(Te),Se=Math.abs(ce)>=i,Re=Math.abs(se)>=i;U&&(Se||Re)&&U(X,ce,se,oe,Te),Se&&(y&&X.deltaX>0&&y(X),E&&X.deltaX<0&&E(X),T&&T(X),q&&X.deltaX<0!=et<0&&q(X),et=X.deltaX,oe[0]=oe[1]=oe[2]=0),Re&&(x&&X.deltaY>0&&x(X),A&&X.deltaY<0&&A(X),L&&L(X),F&&X.deltaY<0!=Le<0&&F(X),Le=X.deltaY,Te[0]=Te[1]=Te[2]=0),(ye||me)&&(W&&W(X),me&&(M(X),me=!1),ye=!1),tt&&!(tt=!1)&&De&&De(X),Qe&&(V(X),Qe=!1),he=0},Me=function(ce,se,Se){oe[Se]+=ce,Te[Se]+=se,X._vx.update(ce),X._vy.update(se),c?he||(he=requestAnimationFrame(ue)):ue()},ve=function(ce,se){pe&&!$e&&(X.axis=$e=Math.abs(ce)>Math.abs(se)?"x":"y",tt=!0),$e!=="y"&&(oe[2]+=ce,X._vx.update(ce,!0)),$e!=="x"&&(Te[2]+=se,X._vy.update(se,!0)),c?he||(he=requestAnimationFrame(ue)):ue()},Ne=function(ce){if(!le(ce,1)){ce=gs(ce,u);var se=ce.clientX,Se=ce.clientY,Re=se-X.x,ze=Se-X.y,Mt=X.isDragging;X.x=se,X.y=Se,(Mt||Math.abs(X.startX-se)>=r||Math.abs(X.startY-Se)>=r)&&(M&&(me=!0),Mt||(X.isDragging=!0),ve(Re,ze),Mt||p&&p(X))}},_e=X.onPress=function(ke){le(ke,1)||(X.axis=$e=null,Fe.pause(),X.isPressed=!0,ke=gs(ke),et=Le=0,X.startX=X.x=ke.clientX,X.startY=X.y=ke.clientY,X._vx.reset(),X._vy.reset(),en(k?s:ee,Bn[1],Ne,u,!0),X.deltaX=X.deltaY=0,v&&v(X))},We=function(ce){if(!le(ce,1)){Xt(k?s:ee,Bn[1],Ne,!0);var se=!isNaN(X.y-X.startY),Se=X.isDragging&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Re=gs(ce);!Se&&se&&(X._vx.reset(),X._vy.reset(),u&&Ie&&Nt.delayedCall(.08,function(){if(Ns()-D>300&&!ce.defaultPrevented){if(ce.target.click)ce.target.click();else if(ee.createEvent){var ze=ee.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,_n,1,Re.screenX,Re.screenY,Re.clientX,Re.clientY,!1,!1,!1,!1,0,null),ce.target.dispatchEvent(ze)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,f&&!k&&Fe.restart(!0),_&&Se&&_(X),b&&b(X,Se)}},O=function(ce){return ce.touches&&ce.touches.length>1&&(X.isGesturing=!0)&&Q(ce,X.isDragging)},$=function(){return(X.isGesturing=!1)||P(X)},ie=function(ce){if(!le(ce)){var se=_t(),Se=ct();Me((se-C)*ae,(Se-S)*ae,1),C=se,S=Se,f&&Fe.restart(!0)}},fe=function(ce){if(!le(ce)){ce=gs(ce,u),V&&(Qe=!0);var se=(ce.deltaMode===1?l:ce.deltaMode===2?_n.innerHeight:1)*g;Me(ce.deltaX*se,ce.deltaY*se,0),f&&!k&&Fe.restart(!0)}},be=function(ce){if(!le(ce)){var se=ce.clientX,Se=ce.clientY,Re=se-X.x,ze=Se-X.y;X.x=se,X.y=Se,ye=!0,(Re||ze)&&ve(Re,ze)}},qe=function(ce){X.event=ce,R(X)},it=function(ce){X.event=ce,B(X)},dt=function(ce){return le(ce)||gs(ce,u)&&te(X)};Fe=X._dc=Nt.delayedCall(h||.25,ge).pause(),X.deltaX=X.deltaY=0,X._vx=Gl(0,50,!0),X._vy=Gl(0,50,!0),X.scrollX=_t,X.scrollY=ct,X.isDragging=X.isGesturing=X.isPressed=!1,Rf(this),X.enable=function(ke){return X.isEnabled||(en(re?ee:s,"scroll",Bl),a.indexOf("scroll")>=0&&en(re?ee:s,"scroll",ie,u,H),a.indexOf("wheel")>=0&&en(s,"wheel",fe,u,H),(a.indexOf("touch")>=0&&Df||a.indexOf("pointer")>=0)&&(en(s,Bn[0],_e,u,H),en(ee,Bn[2],We),en(ee,Bn[3],We),Ie&&en(s,"click",z,!1,!0),te&&en(s,"click",dt),Q&&en(ee,"gesturestart",O),P&&en(ee,"gestureend",$),R&&en(s,Zi+"enter",qe),B&&en(s,Zi+"leave",it),W&&en(s,Zi+"move",be)),X.isEnabled=!0,ke&&ke.type&&_e(ke),Y&&Y(X)),X},X.disable=function(){X.isEnabled&&(Wr.filter(function(ke){return ke!==X&&Us(ke.target)}).length||Xt(re?ee:s,"scroll",Bl),X.isPressed&&(X._vx.reset(),X._vy.reset(),Xt(k?s:ee,Bn[1],Ne,!0)),Xt(re?ee:s,"scroll",ie,H),Xt(s,"wheel",fe,H),Xt(s,Bn[0],_e,H),Xt(ee,Bn[2],We),Xt(ee,Bn[3],We),Xt(s,"click",z,!0),Xt(s,"click",dt),Xt(ee,"gesturestart",O),Xt(ee,"gestureend",$),Xt(s,Zi+"enter",qe),Xt(s,Zi+"leave",it),Xt(s,Zi+"move",be),X.isEnabled=X.isPressed=X.isDragging=!1,ne&&ne(X))},X.kill=X.revert=function(){X.disable();var ke=Wr.indexOf(X);ke>=0&&Wr.splice(ke,1),mi===X&&(mi=0)},Wr.push(X),k&&Us(s)&&(mi=X),X.enable(d)},Vp(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();wt.version="3.11.4";wt.create=function(o){return new wt(o)};wt.register=zf;wt.getAll=function(){return Wr.slice()};wt.getById=function(o){return Wr.filter(function(e){return e.vars.id===o})[0]};If()&&Nt.registerPlugin(wt);/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,kr,Ze,lt,Hn,pt,Nf,uo,ho,Xr,qa,ua,Bt,xo,Vl,jt,jc,$c,Br,Uf,zo,kf,dn,Bf,Gf,Vf,wi,Hl,xc,No,ha=1,$t=Date.now,Uo=$t(),On=0,fa=0,Zc=function(){return xo=1},Kc=function(){return xo=0},$n=function(e){return e},Cs=function(e){return Math.round(e*1e5)/1e5||0},Hf=function(){return typeof window<"u"},Wf=function(){return Ce||Hf()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},fr=function(e){return!!~Nf.indexOf(e)},Xf=function(e){return Ii(e,"getBoundingClientRect")||(fr(e)?function(){return Ja.width=Ze.innerWidth,Ja.height=Ze.innerHeight,Ja}:function(){return fi(e)})},Wp=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Ii(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Ze["inner"+r]:e["client"+r])||0}},Xp=function(e,t){return!t||~ei.indexOf(e)?Xf(e):function(){return Ja}},Di=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return(n="scroll"+i)&&(a=Ii(e,n))?a()-Xf(e)()[r]:fr(e)?(Hn[n]||pt[n])-(Ze["inner"+i]||Hn["client"+i]||pt["client"+i]):e[n]-e["offset"+i]},da=function(e,t){for(var n=0;n<Br.length;n+=3)(!t||~t.indexOf(Br[n+1]))&&e(Br[n],Br[n+1],Br[n+2])},Gn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},Ps=function(e){return typeof e=="number"},Ya=function(e){return typeof e=="object"},_s=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ko=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Mr=Math.abs,qf="left",Yf="top",vc="right",yc="bottom",sr="width",ar="height",ks="Right",Bs="Left",Gs="Top",Vs="Bottom",xt="padding",Cn="margin",os="Width",Mc="Height",Ot="px",Wn=function(e){return Ze.getComputedStyle(e)},qp=function(e){var t=Wn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Jc=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},fi=function(e,t){var n=t&&Wn(e)[Vl]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Wl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},jf=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Yp=function(e){return function(t){return Ce.utils.snap(jf(e),t)}},bc=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var s;if(!r)return t(i);if(r>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var s=t(i);return!r||Math.abs(s-i)<a||s-i<0==r<0?s:t(r<0?i-e:i+e)}},jp=function(e){return function(t,n){return bc(jf(e))(t,n.direction)}},pa=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ft=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Rt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ma=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},Qc={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ga={toggleActions:"play",anticipatePin:0},fo={top:0,left:0,center:.5,bottom:1,right:1},ja=function(e,t){if(Gn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in fo?fo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},_a=function(e,t,n,i,r,a,s,l){var c=r.startColor,u=r.endColor,f=r.fontSize,h=r.indent,m=r.fontWeight,g=lt.createElement("div"),d=fr(n)||Ii(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=d?pt:n,M=e.indexOf("start")!==-1,v=M?c:u,b="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(b+=(i===At?vc:yc)+":"+(a+parseFloat(h))+"px;"),s&&(b+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],$a(g,0,i,M),g},$a=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+os]=1,r["border"+s+os]=0,r[n.p]=t+"px",Ce.set(e,r)},Xe=[],Xl={},Ks,eu=function(){return $t()-On>34&&(Ks||(Ks=requestAnimationFrame(Ui)))},br=function(){(!dn||!dn.isPressed||dn.startX>pt.clientWidth)&&(Ye.cache++,dn?Ks||(Ks=requestAnimationFrame(Ui)):Ui(),On||pr("scrollStart"),On=$t())},Bo=function(){Vf=Ze.innerWidth,Gf=Ze.innerHeight},Ds=function(){Ye.cache++,!Bt&&!kf&&!lt.fullscreenElement&&!lt.webkitFullscreenElement&&(!Bf||Vf!==Ze.innerWidth||Math.abs(Ze.innerHeight-Gf)>Ze.innerHeight*.25)&&uo.restart(!0)},dr={},$p=[],$f=function o(){return Rt(Je,"scrollEnd",o)||er(!0)},pr=function(e){return dr[e]&&dr[e].map(function(t){return t()})||$p},pn=[],Zf=function(e){for(var t=0;t<pn.length;t+=5)(!e||pn[t+4]&&pn[t+4].query===e)&&(pn[t].style.cssText=pn[t+1],pn[t].getBBox&&pn[t].setAttribute("transform",pn[t+2]||""),pn[t+3].uncache=1)},Sc=function(e,t){var n;for(jt=0;jt<Xe.length;jt++)n=Xe[jt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Zf(t),t||pr("revert")},Kf=function(e,t){Ye.cache++,(t||!Vn)&&Ye.forEach(function(n){return Kt(n)&&n.cacheID++&&(n.rec=0)}),Gn(e)&&(Ze.history.scrollRestoration=xc=e)},Vn,or=0,tu,Zp=function(){if(tu!==or){var e=tu=or;requestAnimationFrame(function(){return e===or&&er(!0)})}},er=function(e,t){if(On&&!e){Ft(Je,"scrollEnd",$f);return}Vn=Je.isRefreshing=!0,Ye.forEach(function(i){return Kt(i)&&i.cacheID++&&(i.rec=i())});var n=pr("refreshInit");Uf&&Je.sort(),t||Sc(),Ye.forEach(function(i){Kt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Xe.slice(0).forEach(function(i){return i.refresh()}),Xe.forEach(function(i,r){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-s),i.revert(!1,1)}}),Xe.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Di(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ye.forEach(function(i){Kt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Kf(xc,1),uo.pause(),or++,Ui(2),Xe.forEach(function(i){return Kt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Vn=Je.isRefreshing=!1,pr("refresh")},nu=0,Za=1,Hs,Ui=function(e){if(!Vn||e===2){Je.isUpdating=!0,Hs&&Hs.update(0);var t=Xe.length,n=$t(),i=n-Uo>=50,r=t&&Xe[0].scroll();if(Za=nu>r?-1:1,nu=r,i&&(On&&!xo&&n-On>200&&(On=0,pr("scrollEnd")),qa=Uo,Uo=n),Za<0){for(jt=t;jt-- >0;)Xe[jt]&&Xe[jt].update(0,i);Za=1}else for(jt=0;jt<t;jt++)Xe[jt]&&Xe[jt].update(0,i);Je.isUpdating=!1}Ks=0},ql=[qf,Yf,yc,vc,Cn+Vs,Cn+ks,Cn+Gs,Cn+Bs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ka=ql.concat([sr,ar,"boxSizing","max"+os,"max"+Mc,"position",Cn,xt,xt+Gs,xt+ks,xt+Vs,xt+Bs]),Kp=function(e,t,n){Jr(n);var i=e._gsap;if(i.spacerIsNative)Jr(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Go=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=ql.length,a=t.style,s=e.style,l;r--;)l=ql[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[yc]=s[vc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[sr]=Wl(e,Zt)+Ot,a[ar]=Wl(e,At)+Ot,a[xt]=s[Cn]=s[Yf]=s[qf]="0",Jr(i),s[sr]=s["max"+os]=n[sr],s[ar]=s["max"+Mc]=n[ar],s[xt]=n[xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Jp=/([A-Z])/g,Jr=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(Jp,"-$1").toLowerCase())}},xa=function(e){for(var t=Ka.length,n=e.style,i=[],r=0;r<t;r++)i.push(Ka[r],n[Ka[r]]);return i.t=e,i},Qp=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,s;a<r;a+=2)s=e[a],i.push(s,s in t?t[s]:e[a+1]);return i.t=e.t,i},Ja={left:0,top:0},iu=function(e,t,n,i,r,a,s,l,c,u,f,h,m){Kt(e)&&(e=e(l)),Gn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?ja("0"+e.substr(3),n):0));var g=m?m.time():0,d,p,_;if(m&&m.seek(0),Ps(e))s&&$a(s,n,i,!0);else{Kt(t)&&(t=t(l));var M=(e||"0").split(" "),v,b,y,E;_=tn(t)||pt,v=fi(_)||{},(!v||!v.left&&!v.top)&&Wn(_).display==="none"&&(E=_.style.display,_.style.display="block",v=fi(_),E?_.style.display=E:_.style.removeProperty("display")),b=ja(M[0],v[i.d]),y=ja(M[1]||"0",n),e=v[i.p]-c[i.p]-u+b+r-y,s&&$a(s,y,i,n-y<20||s._isStart&&y>20),n-=n-y}if(a){var A=e+n,x=a._isStart;d="scroll"+i.d2,$a(a,A,i,x&&A>20||!x&&(f?Math.max(pt[d],Hn[d]):a.parentNode[d])<=A+1),f&&(c=fi(s),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ot))}return m&&_&&(d=fi(_),m.seek(h),p=fi(_),m._caScrollDist=d[i.p]-p[i.p],e=e/m._caScrollDist*h),m&&m.seek(g),m?e:Math.round(e)},em=/(webkit|moz|length|cssText|inset)/i,ru=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,s;if(t===pt){e._stOrig=r.cssText,s=Wn(e);for(a in s)!+a&&!em.test(a)&&s[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=s[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},su=function(e,t){var n=Ni(e,t),i="_scroll"+t.p2,r,a,s=function l(c,u,f,h,m){var g=l.tween,d=u.onComplete,p={};return f=f||n(),m=h&&m||0,h=h||c-f,g&&g.kill(),r=Math.round(f),u[i]=c,u.modifiers=p,p[i]=function(_){return _=Math.round(n()),_!==r&&_!==a&&Math.abs(_-r)>3&&Math.abs(_-a)>3?(g.kill(),l.tween=0):_=f+h*g.ratio+m*g.ratio*g.ratio,a=r,r=Math.round(_)},u.onUpdate=function(){Ye.cache++,Ui()},u.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=Ce.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ft(e,"wheel",n.wheelHandler),s},Je=function(){function o(t,n){kr||o.register(Ce),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fa){this.update=this.refresh=this.kill=$n;return}n=Jc(Gn(n)||Ps(n)||n.nodeType?{trigger:n}:n,ga);var r=n,a=r.onUpdate,s=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,f=r.scrub,h=r.trigger,m=r.pin,g=r.pinSpacing,d=r.invalidateOnRefresh,p=r.anticipatePin,_=r.onScrubComplete,M=r.onSnapComplete,v=r.once,b=r.snap,y=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,x=r.fastScrollEnd,T=r.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Zt:At,U=!f&&f!==0,q=tn(n.scroller||Ze),F=Ce.core.getCache(q),R=fr(q),B=("pinType"in n?n.pinType:Ii(q,"pinType")||R&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=U&&n.toggleActions.split(" "),k="markers"in n?n.markers:ga.markers,Q=R?0:parseFloat(Wn(q)["border"+L.p2+os])||0,P=this,V=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Y=Wp(q,R,L),ne=Xp(q,R),te=0,ae=0,H=Ni(q,L),Ie,pe,De,he,Fe,me,ye,Qe,tt,$e,X,et,Le,_t,ct,C,S,J,re,ee,oe,Te,D,z,le,ge,ue,Me,ve,Ne,_e,We,O,$,ie,fe,be,qe,it;if(Hl(P),P._dir=L,p*=45,P.scroller=q,P.scroll=A?A.time.bind(A):H,he=H(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Uf=1,n.refreshPriority===-9999&&(Hs=P)),F.tweenScroll=F.tweenScroll||{top:su(q,At),left:su(q,Zt)},P.tweenTo=Ie=F.tweenScroll[L.p],P.scrubDuration=function(se){We=Ps(se)&&se,We?_e?_e.duration(se):_e=Ce.to(i,{ease:"expo",totalProgress:"+=0.001",duration:We,paused:!0,onComplete:function(){return _&&_(P)}}):(_e&&_e.progress(1).kill(),_e=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),ve=0,l||(l=i.vars.id)),Xe.push(P),b&&((!Ya(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in pt.style&&Ce.set(R?[pt,Hn]:q,{scrollBehavior:"auto"}),Ye.forEach(function(se){return Kt(se)&&se.target===(R?lt.scrollingElement||Hn:q)&&(se.smooth=!1)}),De=Kt(b.snapTo)?b.snapTo:b.snapTo==="labels"?Yp(i):b.snapTo==="labelsDirectional"?jp(i):b.directional!==!1?function(se,Se){return bc(b.snapTo)(se,$t()-ae<500?0:Se.direction)}:Ce.utils.snap(b.snapTo),O=b.duration||{min:.1,max:2},O=Ya(O)?Xr(O.min,O.max):Xr(O,O),$=Ce.delayedCall(b.delay||We/2||.1,function(){var se=H(),Se=$t()-ae<500,Re=Ie.tween;if((Se||Math.abs(P.getVelocity())<10)&&!Re&&!xo&&te!==se){var ze=(se-me)/Le,Mt=i&&!U?i.totalProgress():ze,Ge=Se?0:(Mt-Ne)/($t()-qa)*1e3||0,w=Ce.utils.clamp(-ze,1-ze,Mr(Ge/2)*Ge/.185),N=ze+(b.inertia===!1?0:w),Z=Xr(0,1,De(N,P)),I=Math.round(me+Z*Le),j=b,we=j.onStart,xe=j.onInterrupt,Ee=j.onComplete;if(se<=ye&&se>=me&&I!==se){if(Re&&!Re._initted&&Re.data<=Mr(I-se))return;b.inertia===!1&&(w=Z-ze),Ie(I,{duration:O(Mr(Math.max(Mr(N-Mt),Mr(Z-Mt))*.185/Ge/.05||0)),ease:b.ease||"power3",data:Mr(I-se),onInterrupt:function(){return $.restart(!0)&&xe&&xe(P)},onComplete:function(){P.update(),te=H(),ve=Ne=i&&!U?i.totalProgress():P.progress,M&&M(P),Ee&&Ee(P)}},se,w*Le,I-se-w*Le),we&&we(P,Ie.tween)}}else P.isActive&&te!==se&&$.restart(!0)}).pause()),l&&(Xl[l]=P),h=P.trigger=tn(h||m),it=h&&h._gsap&&h._gsap.stRevert,it&&(it=it(P)),m=m===!0?h:tn(m),Gn(s)&&(s={targets:h,className:s}),m&&(g===!1||g===Cn||(g=!g&&m.parentNode&&m.parentNode.style&&Wn(m.parentNode).display==="flex"?!1:xt),P.pin=m,pe=Ce.core.getCache(m),pe.spacer?_t=pe.pinState:(E&&(E=tn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),pe.spacerIsNative=!!E,E&&(pe.spacerState=xa(E))),pe.spacer=S=E||lt.createElement("div"),S.classList.add("pin-spacer"),l&&S.classList.add("pin-spacer-"+l),pe.pinState=_t=xa(m)),n.force3D!==!1&&Ce.set(m,{force3D:!0}),P.spacer=S=pe.spacer,Me=Wn(m),D=Me[g+L.os2],re=Ce.getProperty(m),ee=Ce.quickSetter(m,L.a,Ot),Go(m,S,Me),C=xa(m)),k){et=Ya(k)?Jc(k,Qc):Qc,$e=_a("scroller-start",l,q,L,et,0),X=_a("scroller-end",l,q,L,et,0,$e),J=$e["offset"+L.op.d2];var dt=tn(Ii(q,"content")||q);Qe=this.markerStart=_a("start",l,dt,L,et,J,0,A),tt=this.markerEnd=_a("end",l,dt,L,et,J,0,A),A&&(qe=Ce.quickSetter([Qe,tt],L.a,Ot)),!B&&!(ei.length&&Ii(q,"fixedMarkers")===!0)&&(qp(R?pt:q),Ce.set([$e,X],{force3D:!0}),le=Ce.quickSetter($e,L.a,Ot),ue=Ce.quickSetter(X,L.a,Ot))}if(A){var ke=A.vars.onUpdate,ce=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),ke&&ke.apply(ce||[])})}P.previous=function(){return Xe[Xe.indexOf(P)-1]},P.next=function(){return Xe[Xe.indexOf(P)+1]},P.revert=function(se,Se){if(!Se)return P.kill(!0);var Re=se!==!1||!P.enabled,ze=Bt;Re!==P.isReverted&&(Re&&(fe=Math.max(H(),P.scroll.rec||0),ie=P.progress,be=i&&i.progress()),Qe&&[Qe,tt,$e,X].forEach(function(Mt){return Mt.style.display=Re?"none":"block"}),Re&&(Bt=1,P.update(Re)),m&&(!y||!P.isActive)&&(Re?Kp(m,S,_t):Go(m,S,Wn(m),z)),Re||P.update(Re),Bt=ze,P.isReverted=Re)},P.refresh=function(se,Se){if(!((Bt||!P.enabled)&&!Se)){if(m&&se&&On){Ft(o,"scrollEnd",$f);return}!Vn&&V&&V(P),Bt=1,ae=$t(),Ie.tween&&(Ie.tween.kill(),Ie.tween=0),_e&&_e.pause(),d&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;for(var Re=Y(),ze=ne(),Mt=A?A.duration():Di(q,L),Ge=0,w=0,N=n.end,Z=n.endTrigger||h,I=n.start||(n.start===0||!h?0:m?"0 0":"0 100%"),j=P.pinnedContainer=n.pinnedContainer&&tn(n.pinnedContainer),we=h&&Math.max(0,Xe.indexOf(P))||0,xe=we,Ee,Ae,Ve,Be,Pe,Ue,ut,ln,jn,at,Oe;xe--;)Ue=Xe[xe],Ue.end||Ue.refresh(0,1)||(Bt=1),ut=Ue.pin,ut&&(ut===h||ut===m)&&!Ue.isReverted&&(at||(at=[]),at.unshift(Ue),Ue.revert(!0,!0)),Ue!==Xe[xe]&&(we--,xe--);for(Kt(I)&&(I=I(P)),me=iu(I,h,Re,L,H(),Qe,$e,P,ze,Q,B,Mt,A)||(m?-.001:0),Kt(N)&&(N=N(P)),Gn(N)&&!N.indexOf("+=")&&(~N.indexOf(" ")?N=(Gn(I)?I.split(" ")[0]:"")+N:(Ge=ja(N.substr(2),Re),N=Gn(I)?I:me+Ge,Z=h)),ye=Math.max(me,iu(N||(Z?"100% 0":Mt),Z,Re,L,H()+Ge,tt,X,P,ze,Q,B,Mt,A))||-.001,Le=ye-me||(me-=.01)&&.001,Ge=0,xe=we;xe--;)Ue=Xe[xe],ut=Ue.pin,ut&&Ue.start-Ue._pinPush<=me&&!A&&Ue.end>0&&(Ee=Ue.end-Ue.start,(ut===h&&Ue.start-Ue._pinPush<me||ut===j)&&!Ps(I)&&(Ge+=Ee*(1-Ue.progress)),ut===m&&(w+=Ee));if(me+=Ge,ye+=Ge,P._pinPush=w,Qe&&Ge&&(Ee={},Ee[L.a]="+="+Ge,j&&(Ee[L.p]="-="+H()),Ce.set([Qe,tt],Ee)),m)Ee=Wn(m),Be=L===At,Ve=H(),oe=parseFloat(re(L.a))+w,!Mt&&ye>1&&(Oe=(R?lt.scrollingElement||Hn:q).style,Oe={style:Oe,value:Oe["overflow"+L.a.toUpperCase()]},Oe["overflow"+L.a.toUpperCase()]="scroll"),Go(m,S,Ee),C=xa(m),Ae=fi(m,!0),ln=B&&Ni(q,Be?Zt:At)(),g&&(z=[g+L.os2,Le+w+Ot],z.t=S,xe=g===xt?Wl(m,L)+Le+w:0,xe&&z.push(L.d,xe+Ot),Jr(z),j&&Xe.forEach(function(ri){ri.pin===j&&ri.vars.pinSpacing!==!1&&(ri._subPinOffset=!0)}),B&&H(fe)),B&&(Pe={top:Ae.top+(Be?Ve-me:ln)+Ot,left:Ae.left+(Be?ln:Ve-me)+Ot,boxSizing:"border-box",position:"fixed"},Pe[sr]=Pe["max"+os]=Math.ceil(Ae.width)+Ot,Pe[ar]=Pe["max"+Mc]=Math.ceil(Ae.height)+Ot,Pe[Cn]=Pe[Cn+Gs]=Pe[Cn+ks]=Pe[Cn+Vs]=Pe[Cn+Bs]="0",Pe[xt]=Ee[xt],Pe[xt+Gs]=Ee[xt+Gs],Pe[xt+ks]=Ee[xt+ks],Pe[xt+Vs]=Ee[xt+Vs],Pe[xt+Bs]=Ee[xt+Bs],ct=Qp(_t,Pe,y),Vn&&H(0)),i?(jn=i._initted,zo(1),i.render(i.duration(),!0,!0),Te=re(L.a)-oe+Le+w,ge=Math.abs(Le-Te)>1,B&&ge&&ct.splice(ct.length-2,2),i.render(0,!0,!0),jn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zo(0)):Te=Le,Oe&&(Oe.value?Oe.style["overflow"+L.a.toUpperCase()]=Oe.value:Oe.style.removeProperty("overflow-"+L.a));else if(h&&H()&&!A)for(Ae=h.parentNode;Ae&&Ae!==pt;)Ae._pinOffset&&(me-=Ae._pinOffset,ye-=Ae._pinOffset),Ae=Ae.parentNode;at&&at.forEach(function(ri){return ri.revert(!1,!0)}),P.start=me,P.end=ye,he=Fe=Vn?fe:H(),!A&&!Vn&&(he<fe&&H(fe),P.scroll.rec=0),P.revert(!1,!0),$&&(te=-1,P.isActive&&H(me+Le*ie),$.restart(!0)),Bt=0,i&&U&&(i._initted||be)&&i.progress()!==be&&i.progress(be,!0).render(i.time(),!0,!0),(ie!==P.progress||A)&&(i&&!U&&i.totalProgress(ie,!0),P.progress=(he-me)/Le===ie?0:ie),m&&g&&(S._pinOffset=Math.round(P.progress*Te)),u&&!Vn&&u(P)}},P.getVelocity=function(){return(H()-Fe)/($t()-qa)*1e3||0},P.endAnimation=function(){_s(P.callbackAnimation),i&&(_e?_e.progress(1):i.paused()?U||_s(i,P.direction<0,1):_s(i,i.reversed()))},P.labelToScroll=function(se){return i&&i.labels&&(me||P.refresh()||me)+i.labels[se]/i.duration()*Le||0},P.getTrailing=function(se){var Se=Xe.indexOf(P),Re=P.direction>0?Xe.slice(0,Se).reverse():Xe.slice(Se+1);return(Gn(se)?Re.filter(function(ze){return ze.vars.preventOverlaps===se}):Re).filter(function(ze){return P.direction>0?ze.end<=me:ze.start>=ye})},P.update=function(se,Se,Re){if(!(A&&!Re&&!se)){var ze=Vn?fe:P.scroll(),Mt=se?0:(ze-me)/Le,Ge=Mt<0?0:Mt>1?1:Mt||0,w=P.progress,N,Z,I,j,we,xe,Ee,Ae;if(Se&&(Fe=he,he=A?H():ze,b&&(Ne=ve,ve=i&&!U?i.totalProgress():Ge)),p&&!Ge&&m&&!Bt&&!ha&&On&&me<ze+(ze-Fe)/($t()-qa)*p&&(Ge=1e-4),Ge!==w&&P.enabled){if(N=P.isActive=!!Ge&&Ge<1,Z=!!w&&w<1,xe=N!==Z,we=xe||!!Ge!=!!w,P.direction=Ge>w?1:-1,P.progress=Ge,we&&!Bt&&(I=Ge&&!w?0:Ge===1?1:w===1?2:3,U&&(j=!xe&&K[I+1]!=="none"&&K[I+1]||K[I],Ae=i&&(j==="complete"||j==="reset"||j in i))),T&&(xe||Ae)&&(Ae||f||!i)&&(Kt(T)?T(P):P.getTrailing(T).forEach(function(Ue){return Ue.endAnimation()})),U||(_e&&!Bt&&!ha?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",Ge,i._tTime/i._tDur):(_e.vars.totalProgress=Ge,_e.invalidate().restart())):i&&i.totalProgress(Ge,!!Bt)),m){if(se&&g&&(S.style[g+L.os2]=D),!B)ee(Cs(oe+Te*Ge));else if(we){if(Ee=!se&&Ge>w&&ye+1>ze&&ze+1>=Di(q,L),y)if(!se&&(N||Ee)){var Ve=fi(m,!0),Be=ze-me;ru(m,pt,Ve.top+(L===At?Be:0)+Ot,Ve.left+(L===At?0:Be)+Ot)}else ru(m,S);Jr(N||Ee?ct:C),ge&&Ge<1&&N||ee(oe+(Ge===1&&!Ee?Te:0))}}b&&!Ie.tween&&!Bt&&!ha&&$.restart(!0),s&&(xe||v&&Ge&&(Ge<1||!No))&&ho(s.targets).forEach(function(Ue){return Ue.classList[N||v?"add":"remove"](s.className)}),a&&!U&&!se&&a(P),we&&!Bt?(U&&(Ae&&(j==="complete"?i.pause().totalProgress(1):j==="reset"?i.restart(!0).pause():j==="restart"?i.restart(!0):i[j]()),a&&a(P)),(xe||!No)&&(c&&xe&&ko(P,c),W[I]&&ko(P,W[I]),v&&(Ge===1?P.kill(!1,1):W[I]=0),xe||(I=Ge===1?1:3,W[I]&&ko(P,W[I]))),x&&!N&&Math.abs(P.getVelocity())>(Ps(x)?x:2500)&&(_s(P.callbackAnimation),_e?_e.progress(1):_s(i,j==="reverse"?1:!Ge,1))):U&&a&&!Bt&&a(P)}if(ue){var Pe=A?ze/A.duration()*(A._caScrollDist||0):ze;le(Pe+($e._isFlipped?1:0)),ue(Pe)}qe&&qe(-ze/A.duration()*(A._caScrollDist||0))}},P.enable=function(se,Se){P.enabled||(P.enabled=!0,Ft(q,"resize",Ds),Ft(R?lt:q,"scroll",br),V&&Ft(o,"refreshInit",V),se!==!1&&(P.progress=ie=0,he=Fe=te=H()),Se!==!1&&P.refresh())},P.getTween=function(se){return se&&Ie?Ie.tween:_e},P.setPositions=function(se,Se){m&&(oe+=se-me,Te+=Se-se-Le,g===xt&&P.adjustPinSpacing(Se-se-Le)),P.start=me=se,P.end=ye=Se,Le=Se-se,P.update()},P.adjustPinSpacing=function(se){if(z){var Se=z.indexOf(L.d)+1;z[Se]=parseFloat(z[Se])+se+Ot,z[1]=parseFloat(z[1])+se+Ot,Jr(z)}},P.disable=function(se,Se){if(P.enabled&&(se!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Se||_e&&_e.pause(),fe=0,pe&&(pe.uncache=1),V&&Rt(o,"refreshInit",V),$&&($.pause(),Ie.tween&&Ie.tween.kill()&&(Ie.tween=0)),!R)){for(var Re=Xe.length;Re--;)if(Xe[Re].scroller===q&&Xe[Re]!==P)return;Rt(q,"resize",Ds),Rt(q,"scroll",br)}},P.kill=function(se,Se){P.disable(se,Se),_e&&!Se&&_e.kill(),l&&delete Xl[l];var Re=Xe.indexOf(P);Re>=0&&Xe.splice(Re,1),Re===jt&&Za>0&&jt--,Re=0,Xe.forEach(function(ze){return ze.scroller===P.scroller&&(Re=1)}),Re||Vn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Se||i.kill()),Qe&&[Qe,tt,$e,X].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),Hs===P&&(Hs=0),m&&(pe&&(pe.uncache=1),Re=0,Xe.forEach(function(ze){return ze.pin===m&&Re++}),Re||(pe.spacer=0)),n.onKill&&n.onKill(P)},P.enable(!1,!1),it&&it(P),!i||!i.add||Le?P.refresh():Ce.delayedCall(.01,function(){return me||ye||P.refresh()})&&(Le=.01)&&(me=ye=0),m&&Zp()},o.register=function(n){return kr||(Ce=n||Wf(),Hf()&&window.document&&o.enable(),kr=fa),kr},o.defaults=function(n){if(n)for(var i in n)ga[i]=n[i];return ga},o.disable=function(n,i){fa=0,Xe.forEach(function(a){return a[i?"kill":"disable"](n)}),Rt(Ze,"wheel",br),Rt(lt,"scroll",br),clearInterval(ua),Rt(lt,"touchcancel",$n),Rt(pt,"touchstart",$n),pa(Rt,lt,"pointerdown,touchstart,mousedown",Zc),pa(Rt,lt,"pointerup,touchend,mouseup",Kc),uo.kill(),da(Rt);for(var r=0;r<Ye.length;r+=3)ma(Rt,Ye[r],Ye[r+1]),ma(Rt,Ye[r],Ye[r+2])},o.enable=function(){if(Ze=window,lt=document,Hn=lt.documentElement,pt=lt.body,Ce&&(ho=Ce.utils.toArray,Xr=Ce.utils.clamp,Hl=Ce.core.context||$n,zo=Ce.core.suppressOverwrites||$n,xc=Ze.history.scrollRestoration||"auto",Ce.core.globals("ScrollTrigger",o),pt)){fa=1,wt.register(Ce),o.isTouch=wt.isTouch,wi=wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ft(Ze,"wheel",br),Nf=[Ze,lt,Hn,pt],Ce.matchMedia&&(o.matchMedia=function(l){var c=Ce.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ce.addEventListener("matchMediaInit",function(){return Sc()}),Ce.addEventListener("matchMediaRevert",function(){return Zf()}),Ce.addEventListener("matchMedia",function(){er(0,1),pr("matchMedia")}),Ce.matchMedia("(orientation: portrait)",function(){return Bo(),Bo})),Bo(),Ft(lt,"scroll",br);var n=pt.style,i=n.borderTopStyle,r=Ce.core.Animation.prototype,a,s;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=fi(pt),At.m=Math.round(a.top+At.sc())||0,Zt.m=Math.round(a.left+Zt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ua=setInterval(eu,250),Ce.delayedCall(.5,function(){return ha=0}),Ft(lt,"touchcancel",$n),Ft(pt,"touchstart",$n),pa(Ft,lt,"pointerdown,touchstart,mousedown",Zc),pa(Ft,lt,"pointerup,touchend,mouseup",Kc),Vl=Ce.utils.checkPrefix("transform"),Ka.push(Vl),kr=$t(),uo=Ce.delayedCall(.2,er).pause(),Br=[lt,"visibilitychange",function(){var l=Ze.innerWidth,c=Ze.innerHeight;lt.hidden?(jc=l,$c=c):(jc!==l||$c!==c)&&Ds()},lt,"DOMContentLoaded",er,Ze,"load",er,Ze,"resize",Ds],da(Ft),Xe.forEach(function(l){return l.enable(0,1)}),s=0;s<Ye.length;s+=3)ma(Rt,Ye[s],Ye[s+1]),ma(Rt,Ye[s],Ye[s+2])}},o.config=function(n){"limitCallbacks"in n&&(No=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ua)||(ua=i)&&setInterval(eu,i),"ignoreMobileResize"in n&&(Bf=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(da(Rt)||da(Ft,n.autoRefreshEvents||"none"),kf=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var r=tn(n),a=Ye.indexOf(r),s=fr(r);~a&&Ye.splice(a,s?6:2),i&&(s?ei.unshift(Ze,i,pt,i,Hn,i):ei.unshift(r,i))},o.clearMatchMedia=function(n){Xe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},o.isInViewport=function(n,i,r){var a=(Gn(n)?tn(n):n).getBoundingClientRect(),s=a[r?sr:ar]*i||0;return r?a.right-s>0&&a.left+s<Ze.innerWidth:a.bottom-s>0&&a.top+s<Ze.innerHeight},o.positionInViewport=function(n,i,r){Gn(n)&&(n=tn(n));var a=n.getBoundingClientRect(),s=a[r?sr:ar],l=i==null?s/2:i in fo?fo[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return r?(a.left+l)/Ze.innerWidth:(a.top+l)/Ze.innerHeight},o.killAll=function(n){if(Xe.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=dr.killAll||[];dr={},i.forEach(function(r){return r()})}},o}();Je.version="3.11.4";Je.saveStyles=function(o){return o?ho(o).forEach(function(e){if(e&&e.style){var t=pn.indexOf(e);t>=0&&pn.splice(t,5),pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),Hl())}}):pn};Je.revert=function(o,e){return Sc(!o,e)};Je.create=function(o,e){return new Je(o,e)};Je.refresh=function(o){return o?Ds():(kr||Je.register())&&er(!0)};Je.update=function(o){return++Ye.cache&&Ui(o===!0?2:0)};Je.clearScrollMemory=Kf;Je.maxScroll=function(o,e){return Di(o,e?Zt:At)};Je.getScrollFunc=function(o,e){return Ni(tn(o),e?Zt:At)};Je.getById=function(o){return Xl[o]};Je.getAll=function(){return Xe.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!On};Je.snapDirectional=bc;Je.addEventListener=function(o,e){var t=dr[o]||(dr[o]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(o,e){var t=dr[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(o,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var f=[],h=[],m=Ce.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||m.restart(!0),f.push(g.trigger),h.push(g),r<=f.length&&m.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&Kt(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return Kt(r)&&(r=r(),Ft(Je,"refresh",function(){return r=e.batchMax()})),ho(o).forEach(function(l){var c={};for(s in n)c[s]=n[s];c.trigger=l,t.push(Je.create(c))}),t};var au=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Vo=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(wt.isTouch?" pinch-zoom":""):"none",e===Hn&&o(pt,t)},va={auto:1,scroll:1},tm=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Ce.core.getCache(r),s=$t(),l;if(!a._isScrollT||s-a._isScrollT>2e3){for(;r&&r!==pt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(va[(l=Wn(r)).overflowY]||va[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!fr(r)&&(va[(l=Wn(r)).overflowY]||va[l.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Jf=function(e,t,n,i){return wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&tm,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ft(lt,wt.eventTypes[0],lu,!1,!0)},onDisable:function(){return Rt(lt,wt.eventTypes[0],lu,!0)}})},nm=/(input|label|select|textarea)/i,ou,lu=function(e){var t=nm.test(e.target.tagName);(t||ou)&&(e._gsapAllow=!0,ou=t)},im=function(e){Ya(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a,s,l=tn(e.target)||Hn,c=Ce.core.globals().ScrollSmoother,u=c&&c.get(),f=wi&&(e.content&&tn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),h=Ni(l,At),m=Ni(l,Zt),g=1,d=(wt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,p=0,_=Kt(i)?function(){return i(a)}:function(){return i||2.8},M,v,b=Jf(l,e.type,!0,r),y=function(){return v=!1},E=$n,A=$n,x=function(){s=Di(l,At),A=Xr(wi?1:0,s),n&&(E=Xr(0,Di(l,Zt))),M=or},T=function(){f._gsap.y=Cs(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(v){requestAnimationFrame(y);var K=Cs(a.deltaY/2),k=A(h.v-K);if(f&&k!==h.v+h.offset){h.offset=k-h.v;var Q=Cs((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+Q+", 0, 1)",f._gsap.y=Q+"px",h.cacheID=Ye.cache,Ui()}return!0}h.offset&&T(),v=!0},U,q,F,R,B=function(){x(),U.isActive()&&U.vars.scrollY>s&&(h()>s?U.progress(1)&&h(s):U.resetTo("scrollY",s))};return f&&Ce.set(f,{y:"+=0"}),e.ignoreCheck=function(W){return wi&&W.type==="touchmove"&&L()||g>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){var W=g;g=Cs((Ze.visualViewport&&Ze.visualViewport.scale||1)/d),U.pause(),W!==g&&Vo(l,g>1.01?!0:n?!1:"x"),q=m(),F=h(),x(),M=or},e.onRelease=e.onGestureStart=function(W,K){if(h.offset&&T(),!K)R.restart(!0);else{Ye.cache++;var k=_(),Q,P;n&&(Q=m(),P=Q+k*.05*-W.velocityX/.227,k*=au(m,Q,P,Di(l,Zt)),U.vars.scrollX=E(P)),Q=h(),P=Q+k*.05*-W.velocityY/.227,k*=au(h,Q,P,Di(l,At)),U.vars.scrollY=A(P),U.invalidate().duration(k).play(.01),(wi&&U.vars.scrollY>=s||Q>=s-1)&&Ce.to({},{onUpdate:B,duration:k})}},e.onWheel=function(){U._ts&&U.pause(),$t()-p>1e3&&(M=0,p=$t())},e.onChange=function(W,K,k,Q,P){if(or!==M&&x(),K&&n&&m(E(Q[2]===K?q+(W.startX-W.x):m()+K-Q[1])),k){h.offset&&T();var V=P[2]===k,Y=V?F+W.startY-W.y:h()+k-P[1],ne=A(Y);V&&Y!==ne&&(F+=ne-Y),h(ne)}(k||K)&&Ui()},e.onEnable=function(){Vo(l,n?!1:"x"),Je.addEventListener("refresh",B),Ft(Ze,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),b.enable()},e.onDisable=function(){Vo(l,!0),Rt(Ze,"resize",B),Je.removeEventListener("refresh",B),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new wt(e),a.iOS=wi,wi&&!h()&&h(1),wi&&Ce.ticker.add($n),R=a._dc,U=Ce.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:R.vars.onComplete}),a};Je.sort=function(o){return Xe.sort(o||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(o){return new wt(o)};Je.normalizeScroll=function(o){if(typeof o>"u")return dn;if(o===!0&&dn)return dn.enable();if(o===!1)return dn&&dn.kill();var e=o instanceof wt?o:im(o);return dn&&dn.target===e.target&&dn.kill(),fr(e.target)&&(dn=e),e};Je.core={_getVelocityProp:Gl,_inputObserver:Jf,_scrollers:Ye,_proxies:ei,bridge:{ss:function(){On||pr("scrollStart"),On=$t()},ref:function(){return Bt}}};Wf()&&Ce.registerPlugin(Je);class rm{lerp(e,t,n){return e*(1-n)+t*n}clamp(e,t,n){return t>e?t:n<e?n:e}hoop(e,t,n){const i=n-t+1;let r=(e-t)%i;return 0>r&&(r=i+r),r+t}delay(e){return new Promise(t=>{setTimeout(()=>{t()},e)})}getParameter(e){e=e.replace(/[\[\]]/g,"\\$&");let t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=t.exec(window.location.href);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}}class sm{constructor(e){this.body=e,this.bodyClassList=this.body.classList,this.ua=window.navigator.userAgent.toLowerCase(),this.data={browser:"",os:"",device:"",iphone:""},this.checkBrowser(),this.checkOs(),this.checkDevice(),this.checkiPhone()}checkBrowser(){this.ua.indexOf("edge")!==-1||this.ua.indexOf("edga")!==-1||this.ua.indexOf("edgios")!==-1?this.data.browser="edge":this.ua.indexOf("opera")!==-1||this.ua.indexOf("opr")!==-1?this.data.browser="opera":this.ua.indexOf("samsungbrowser")!==-1?this.data.browser="samsung":this.ua.indexOf("ucbrowser")!==-1?this.data.browser="uc":this.ua.indexOf("chrome")!==-1||this.ua.indexOf("crios")!==-1?this.data.browser="chrome":this.ua.indexOf("firefox")!==-1||this.ua.indexOf("fxios")!==-1?this.data.browser="firefox":this.ua.indexOf("safari")!==-1?this.data.browser="safari":this.ua.indexOf("msie")!==-1||this.ua.indexOf("trident")!==-1?(this.data.browser="ie",alert("このブラウザは現在サポートされておりません。")):this.data.browser="",this.data.browser!=""&&this.bodyClassList.add(this.data.browser)}checkOs(){this.ua.indexOf("windows nt")!==-1?this.data.os="windows":this.ua.indexOf("android")!==-1?this.data.os="android":this.ua.indexOf("iphone")!==-1||this.ua.indexOf("ipad")!==-1?this.data.os="ios":this.ua.indexOf("mac os x")!==-1?this.data.os="macos":this.data.os="",this.data.os!=""&&this.bodyClassList.add(this.data.os)}checkDevice(){this.ua.indexOf("iphone")!==-1||this.ua.indexOf("android")!==-1&&this.ua.indexOf("Mobile")>0?this.data.device="mobile":this.ua.indexOf("ipad")!==-1||this.ua.indexOf("android")!==-1?this.data.device="tablet":this.ua.indexOf("ipad")>-1||this.ua.indexOf("macintosh")>-1&&"ontouchend"in document?this.data.device="tablet":this.data.device="pc",this.data.device!=""&&this.bodyClassList.add(this.data.device)}checkiPhone(){this.ua.indexOf("iphone")!==-1?this.data.iphone="iphone":this.data.iphone="",this.data.iphone!=""&&this.bodyClassList.add(this.data.iphone)}}function cu(o,e){const t=e*.01,n=o>e?o:e,i=o>e?e:o;document.documentElement.style.setProperty("--vh",t+"px"),document.documentElement.style.setProperty("--longer",n+"px"),document.documentElement.style.setProperty("--shorter",i+"px")}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="148",Sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},am=0,uu=1,om=2,Qf=1,lm=2,Ls=3,mr=0,Fn=1,vo=2,ya=3,Oi=0,lr=1,hu=2,fu=3,du=4,cm=5,Gr=100,um=101,hm=102,pu=103,mu=104,fm=200,dm=201,pm=202,mm=203,ed=204,td=205,gm=206,_m=207,xm=208,vm=209,ym=210,Mm=0,bm=1,Sm=2,Yl=3,wm=4,Tm=5,Em=6,Am=7,nd=0,Cm=1,Pm=2,ti=0,Dm=1,Lm=2,Rm=3,Im=4,Om=5,id=300,ls=301,cs=302,jl=303,$l=304,yo=306,Zl=1e3,xn=1001,Kl=1002,yt=1003,gu=1004,Ho=1005,Pn=1006,Fm=1007,Js=1008,gr=1009,zm=1010,Nm=1011,rd=1012,Um=1013,tr=1014,gi=1015,Qs=1016,km=1017,Bm=1018,Qr=1020,Gm=1021,Vm=1022,vn=1023,Hm=1024,Wm=1025,cr=1026,us=1027,Xm=1028,qm=1029,Ym=1030,jm=1031,$m=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,_u=35840,xu=35841,vu=35842,yu=35843,Zm=36196,Mu=37492,bu=37496,Su=37808,wu=37809,Tu=37810,Eu=37811,Au=37812,Cu=37813,Pu=37814,Du=37815,Lu=37816,Ru=37817,Iu=37818,Ou=37819,Fu=37820,zu=37821,Nu=36492,ki=3e3,ot=3001,Km=3200,Jm=3201,Qm=0,eg=1,Zn="srgb",ea="srgb-linear",jo=7680,tg=519,Uu=35044,ku="300 es",Jl=1035;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$o=Math.PI/180,Bu=180/Math.PI;function ia(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[o&255]+kt[o>>8&255]+kt[o>>16&255]+kt[o>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function nn(o,e,t){return Math.max(e,Math.min(t,o))}function ng(o,e){return(o%e+e)%e}function Zo(o,e,t){return(1-t)*o+t*e}function Gu(o){return(o&o-1)===0&&o!==0}function Ql(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ma(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function un(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(){yn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],M=i[1],v=i[4],b=i[7],y=i[2],E=i[5],A=i[8];return r[0]=a*d+s*M+l*y,r[3]=a*p+s*v+l*E,r[6]=a*_+s*b+l*A,r[1]=c*d+u*M+f*y,r[4]=c*p+u*v+f*E,r[7]=c*_+u*b+f*A,r[2]=h*d+m*M+g*y,r[5]=h*p+m*v+g*E,r[8]=h*_+m*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*a-s*c,h=s*l-u*r,m=c*r-a*l,g=t*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*a)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new yn;function sd(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ta(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ur(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Qa(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Jo={[Zn]:{[ea]:ur},[ea]:{[Zn]:Qa}},qt={legacyMode:!0,get workingColorSpace(){return ea},set workingColorSpace(o){},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Jo[e]&&Jo[e][t]!==void 0){const n=Jo[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={r:0,g:0,b:0},Nn={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Qo(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Sa(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qt.workingColorSpace){if(e=ng(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Qo(a,r,e+1/3),this.g=Qo(a,r,e),this.b=Qo(a,r,e-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zn){function n(r){r!==void 0&&parseFloat(r)<1}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,qt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,qt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const n=ad[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return qt.fromWorkingColorSpace(Sa(this,Tt),e),nn(Tt.r*255,0,255)<<16^nn(Tt.g*255,0,255)<<8^nn(Tt.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Sa(this,Tt),t);const n=Tt.r,i=Tt.g,r=Tt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Sa(this,Tt),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Zn){return qt.fromWorkingColorSpace(Sa(this,Tt),e),e!==Zn?`color(${e} ${Tt.r} ${Tt.g} ${Tt.b})`:`rgb(${Tt.r*255|0},${Tt.g*255|0},${Tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Nn),Nn.h+=e,Nn.s+=t,Nn.l+=n,this.setHSL(Nn.h,Nn.s,Nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(ba);const n=Zo(Nn.h,ba.h,t),i=Zo(Nn.s,ba.s,t),r=Zo(Nn.l,ba.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}nt.NAMES=ad;let Tr;class od{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=ta("canvas")),Tr.width=e.width,Tr.height=e.height;const n=Tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ur(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return e}}class ld{constructor(e=null){this.isSource=!0,this.uuid=ia(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(el(i[a].image)):r.push(el(i[a]))}else r=el(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function el(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?od.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:{}}let ig=0;class Jt extends vr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=xn,i=xn,r=Pn,a=Js,s=vn,l=gr,c=Jt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=ia(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zl:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zl:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=id;Jt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(m+1)/2,y=(_+1)/2,E=(u+h)/4,A=(f+d)/4,x=(g+p)/4;return v>b&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):b>y?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=A/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-d)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bi extends vr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cd extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rg extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==g){let p=1-s;const _=l*h+c*m+u*g+f*d,M=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const y=Math.sqrt(v),E=Math.atan2(y,_*M);p=Math.sin(p*E)/y,s=Math.sin(s*E)/y}const b=s*M;if(l=l*p+h*b,c=c*p+m*b,u=u*p+g*b,f=f*p+d*b,p===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-s*m,e[t+2]=c*g+u*m+s*h-l*f,e[t+3]=u*g-s*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),f=s(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>f){const m=2*Math.sqrt(1+n-s-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,f=l*i+r*n-a*t,h=-r*t-a*n-s*i;return this.x=c*l+h*-r+u*-s-f*-a,this.y=u*l+h*-a+f*-r-c*-s,this.z=f*l+h*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new G,Vu=new _r;class ra{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)qi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(qi)}else n.boundingBox===null&&n.computeBoundingBox(),nl.copy(n.boundingBox),nl.applyMatrix4(e.matrixWorld),this.union(nl);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),wa.subVectors(this.max,xs),Er.subVectors(e.a,xs),Ar.subVectors(e.b,xs),Cr.subVectors(e.c,xs),yi.subVectors(Ar,Er),Mi.subVectors(Cr,Ar),Yi.subVectors(Er,Cr);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Yi.z,Yi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Yi.z,0,-Yi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Yi.y,Yi.x,0];return!il(t,Er,Ar,Cr,wa)||(t=[1,0,0,0,1,0,0,0,1],!il(t,Er,Ar,Cr,wa))?!1:(Ta.crossVectors(yi,Mi),t=[Ta.x,Ta.y,Ta.z],il(t,Er,Ar,Cr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new G,new G,new G,new G,new G,new G,new G,new G],qi=new G,nl=new ra,Er=new G,Ar=new G,Cr=new G,yi=new G,Mi=new G,Yi=new G,xs=new G,wa=new G,Ta=new G,ji=new G;function il(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){ji.fromArray(o,r);const s=i.x*Math.abs(ji.x)+i.y*Math.abs(ji.y)+i.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=n.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const sg=new ra,vs=new G,rl=new G;class Mo{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(rl)),this.expandByPoint(vs.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new G,sl=new G,Ea=new G,bi=new G,al=new G,Aa=new G,ol=new G;class ud{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.direction).multiplyScalar(t).add(this.origin),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sl.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(sl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ea),s=bi.dot(this.direction),l=-bi.dot(Ea),c=bi.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-s,h=a*s-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+a*h+2*s)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+s)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(a*r+s)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ea).multiplyScalar(h).add(sl),m}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){al.subVectors(t,e),Aa.subVectors(n,e),ol.crossVectors(al,Aa);let a=this.direction.dot(ol),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=s*this.direction.dot(Aa.crossVectors(bi,Aa));if(l<0)return null;const c=s*this.direction.dot(al.cross(bi));if(c<0||l+c>a)return null;const u=-s*bi.dot(ol);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,f,h,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*f,g=s*u,d=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-d*c,t[9]=-s*l,t[2]=d-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h+d*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=d+h*s,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h-d*s,t[4]=-a*f,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=d-h*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=s*u,d=s*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=s*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,og)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Si.crossVectors(n,hn),Si.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Si.crossVectors(n,hn)),Si.normalize(),Ca.crossVectors(hn,Si),i[0]=Si.x,i[4]=Ca.x,i[8]=hn.x,i[1]=Si.y,i[5]=Ca.y,i[9]=hn.y,i[2]=Si.z,i[6]=Ca.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],M=n[3],v=n[7],b=n[11],y=n[15],E=i[0],A=i[4],x=i[8],T=i[12],L=i[1],U=i[5],q=i[9],F=i[13],R=i[2],B=i[6],W=i[10],K=i[14],k=i[3],Q=i[7],P=i[11],V=i[15];return r[0]=a*E+s*L+l*R+c*k,r[4]=a*A+s*U+l*B+c*Q,r[8]=a*x+s*q+l*W+c*P,r[12]=a*T+s*F+l*K+c*V,r[1]=u*E+f*L+h*R+m*k,r[5]=u*A+f*U+h*B+m*Q,r[9]=u*x+f*q+h*W+m*P,r[13]=u*T+f*F+h*K+m*V,r[2]=g*E+d*L+p*R+_*k,r[6]=g*A+d*U+p*B+_*Q,r[10]=g*x+d*q+p*W+_*P,r[14]=g*T+d*F+p*K+_*V,r[3]=M*E+v*L+b*R+y*k,r[7]=M*A+v*U+b*B+y*Q,r[11]=M*x+v*q+b*W+y*P,r[15]=M*T+v*F+b*K+y*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*l*f-i*c*f-r*s*h+n*c*h+i*s*m-n*l*m)+d*(+t*l*m-t*c*h+r*a*h-i*a*m+i*c*u-r*l*u)+p*(+t*c*f-t*s*m-r*a*f+n*a*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*f+t*s*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],M=f*p*c-d*h*c+d*l*m-s*p*m-f*l*_+s*h*_,v=g*h*c-u*p*c-g*l*m+a*p*m+u*l*_-a*h*_,b=u*d*c-g*f*c+g*s*m-a*d*m-u*s*_+a*f*_,y=g*f*l-u*d*l-g*s*h+a*d*h+u*s*p-a*f*p,E=t*M+n*v+i*b+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=M*A,e[1]=(d*h*r-f*p*r-d*i*m+n*p*m+f*i*_-n*h*_)*A,e[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*A,e[3]=(f*l*r-s*h*r-f*i*c+n*h*c+s*i*m-n*l*m)*A,e[4]=v*A,e[5]=(u*p*r-g*h*r+g*i*m-t*p*m-u*i*_+t*h*_)*A,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*_-t*l*_)*A,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*m+t*l*m)*A,e[8]=b*A,e[9]=(g*f*r-u*d*r-g*n*m+t*d*m+u*n*_-t*f*_)*A,e[10]=(a*d*r-g*s*r+g*n*c-t*d*c-a*n*_+t*s*_)*A,e[11]=(u*s*r-a*f*r-u*n*c+t*f*c+a*n*m-t*s*m)*A,e[12]=y*A,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*p+t*f*p)*A,e[14]=(g*s*i-a*d*i-g*n*l+t*d*l+a*n*p-t*s*p)*A,e[15]=(a*f*i-u*s*i+u*n*l-t*f*l-a*n*h+t*s*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,f=s+s,h=r*c,m=r*u,g=r*f,d=a*u,p=a*f,_=s*f,M=l*c,v=l*u,b=l*f,y=n.x,E=n.y,A=n.z;return i[0]=(1-(d+_))*y,i[1]=(m+b)*y,i[2]=(g-v)*y,i[3]=0,i[4]=(m-b)*E,i[5]=(1-(h+_))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(g+v)*A,i[9]=(p-M)*A,i[10]=(1-(h+d))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pr.set(i[0],i[1],i[2]).length();const a=Pr.set(i[4],i[5],i[6]).length(),s=Pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Un.copy(this);const c=1/r,u=1/a,f=1/s;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),f=(t+e)*l,h=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pr=new G,Un=new gt,ag=new G(0,0,0),og=new G(1,1,1),Si=new G,Ca=new G,hn=new G,Hu=new gt,Wu=new _r;class sa{constructor(e=0,t=0,n=0,i=sa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){}}sa.DefaultOrder="XYZ";sa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lg=0;const Xu=new G,Dr=new _r,oi=new gt,Pa=new G,ys=new G,cg=new G,ug=new _r,qu=new G(1,0,0),Yu=new G(0,1,0),ju=new G(0,0,1),hg={type:"added"},$u={type:"removed"};class Qt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DefaultUp.clone();const e=new G,t=new sa,n=new _r,i=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new yn}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Qt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DefaultMatrixWorldAutoUpdate,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ys,Pa,this.up):oi.lookAt(Pa,ys,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(oi),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hg)),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($u)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($u)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qt.DefaultUp=new G(0,1,0);Qt.DefaultMatrixAutoUpdate=!0;Qt.DefaultMatrixWorldAutoUpdate=!0;const kn=new G,li=new G,ll=new G,ci=new G,Lr=new G,Rr=new G,Zu=new G,cl=new G,ul=new G,hl=new G;class di{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kn.subVectors(i,t),li.subVectors(n,t),ll.subVectors(e,t);const a=kn.dot(kn),s=kn.dot(li),l=kn.dot(ll),c=li.dot(li),u=li.dot(ll),f=a*c-s*s;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(c*l-s*u)*h,g=(a*u-s*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,ci),l.set(0,0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(s,ci.z),l}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),li.subVectors(e,t),kn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),kn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return di.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Lr.subVectors(i,n),Rr.subVectors(r,n),cl.subVectors(e,n);const l=Lr.dot(cl),c=Rr.dot(cl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,i);const u=Lr.dot(ul),f=Rr.dot(ul);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Lr,a);hl.subVectors(e,r);const m=Lr.dot(hl),g=Rr.dot(hl);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Rr,s);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Zu.subVectors(r,i),s=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(Zu,s);const _=1/(p+d+h);return a=d*_,s=h*_,t.copy(n).addScaledVector(Lr,a).addScaledVector(Rr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fg=0;class aa extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=lr,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const i=this[t];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fd extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new G,Da=new je;class Yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){}copyVector2sArray(){}copyVector3sArray(){}copyVector4sArray(){}}class dd extends Yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pd extends Yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bn extends Yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dg=0;const Tn=new gt,fl=new Qt,Ir=new G,fn=new ra,Ms=new ra,Lt=new G;class ii extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?pd:dd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new yn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];Ms.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(fn.min,Ms.min),fn.expandByPoint(Lt),Lt.addVectors(fn.max,Ms.max),fn.expandByPoint(Lt)):(fn.expandByPoint(Ms.min),fn.expandByPoint(Ms.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Lt.fromBufferAttribute(s,c),l&&(Ir.fromBufferAttribute(e,c),Lt.add(Ir)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new G,u[L]=new G;const f=new G,h=new G,m=new G,g=new je,d=new je,p=new je,_=new G,M=new G;function v(L,U,q){f.fromArray(i,L*3),h.fromArray(i,U*3),m.fromArray(i,q*3),g.fromArray(a,L*2),d.fromArray(a,U*2),p.fromArray(a,q*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const F=1/(d.x*p.y-p.x*d.y);isFinite(F)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(F),M.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(F),c[L].add(_),c[U].add(_),c[q].add(_),u[L].add(M),u[U].add(M),u[q].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let L=0,U=b.length;L<U;++L){const q=b[L],F=q.start,R=q.count;for(let B=F,W=F+R;B<W;B+=3)v(n[B+0],n[B+1],n[B+2])}const y=new G,E=new G,A=new G,x=new G;function T(L){A.fromArray(r,L*3),x.copy(A);const U=c[L];y.copy(U),y.sub(A.multiplyScalar(A.dot(U))).normalize(),E.crossVectors(x,U);const F=E.dot(u[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=F}for(let L=0,U=b.length;L<U;++L){const q=b[L],F=q.start,R=q.count;for(let B=F,W=F+R;B<W;B+=3)T(n[B+0]),T(n[B+1]),T(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new G,r=new G,a=new G,s=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Yn(h,u,f)}if(this.index===null)return this;const t=new ii,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new gt,Or=new ud,dl=new Mo,bs=new G,Ss=new G,ws=new G,pl=new G,La=new G,Ra=new je,Ia=new je,Oa=new je,ml=new G,Fa=new G;let Xn=class extends Qt{constructor(e=new ii,t=new fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){La.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],f=r[l];u!==0&&(pl.fromBufferAttribute(f,e),a?La.addScaledVector(pl,u):La.addScaledVector(pl.sub(t),u))}t.add(La)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),e.ray.intersectsSphere(dl)===!1)||(Ku.copy(r).invert(),Or.copy(e.ray).applyMatrix4(Ku),n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=i[d.materialIndex],_=Math.max(d.start,h.start),M=Math.min(s.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,b=M;v<b;v+=3){const y=s.getX(v),E=s.getX(v+1),A=s.getX(v+2);a=za(this,p,e,Or,c,u,y,E,A),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=s.getX(d),M=s.getX(d+1),v=s.getX(d+2);a=za(this,i,e,Or,c,u,_,M,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=i[d.materialIndex],_=Math.max(d.start,h.start),M=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,b=M;v<b;v+=3){const y=v,E=v+1,A=v+2;a=za(this,p,e,Or,c,u,y,E,A),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=d,M=d+1,v=d+2;a=za(this,i,e,Or,c,u,_,M,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}};function pg(o,e,t,n,i,r,a,s){let l;if(e.side===Fn?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===mr,s),l===null)return null;Fa.copy(s),Fa.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:o}}function za(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,bs),o.getVertexPosition(s,Ss),o.getVertexPosition(l,ws);const c=pg(o,e,t,n,bs,Ss,ws,ml);if(c){i&&(Ra.fromBufferAttribute(i,a),Ia.fromBufferAttribute(i,s),Oa.fromBufferAttribute(i,l),c.uv=di.getUV(ml,bs,Ss,ws,Ra,Ia,Oa,new je)),r&&(Ra.fromBufferAttribute(r,a),Ia.fromBufferAttribute(r,s),Oa.fromBufferAttribute(r,l),c.uv2=di.getUV(ml,bs,Ss,ws,Ra,Ia,Oa,new je));const u={a,b:s,c:l,normal:new G,materialIndex:0};di.getNormal(bs,Ss,ws,u.normal),c.face=u}return c}class fs extends ii{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(f,2));function g(d,p,_,M,v,b,y,E,A,x,T){const L=b/A,U=y/x,q=b/2,F=y/2,R=E/2,B=A+1,W=x+1;let K=0,k=0;const Q=new G;for(let P=0;P<W;P++){const V=P*U-F;for(let Y=0;Y<B;Y++){const ne=Y*L-q;Q[d]=ne*M,Q[p]=V*v,Q[_]=R,c.push(Q.x,Q.y,Q.z),Q[d]=0,Q[p]=0,Q[_]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(Y/A),f.push(1-P/x),K+=1}}for(let P=0;P<x;P++)for(let V=0;V<A;V++){const Y=h+V+B*P,ne=h+V+B*(P+1),te=h+(V+1)+B*(P+1),ae=h+(V+1)+B*P;l.push(Y,ne,ae),l.push(ne,te,ae),k+=6}s.addGroup(m,k,T),m+=k,h+=K}}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(o){const e={};for(let t=0;t<o.length;t++){const n=hs(o[t]);for(const i in n)e[i]=n[i]}return e}function mg(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function md(o){return o.getRenderTarget()===null&&o.outputEncoding===ot?Zn:ea}const gg={clone:hs,merge:Yt};var _g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tc extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends Tc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bu*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=-90,zr=1;class vg extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dn(Fr,zr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Dn(Fr,zr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Dn(Fr,zr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Dn(Fr,zr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Dn(Fr,zr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Dn(Fr,zr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ti,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class gd extends Jt{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yg extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fs(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Oi});r.uniforms.tEquirect.value=t;const a=new Xn(i,r),s=t.minFilter;return t.minFilter===Js&&(t.minFilter=Pn),new vg(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const gl=new G,Mg=new G,bg=new yn;class Ki{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gl.subVectors(n,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bg.getNormalMatrix(e),i=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Mo,Na=new G;class _d{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,r=new Ki,a=new Ki){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],M=n[14],v=n[15];return t[0].setComponents(s-i,f-l,d-h,v-p).normalize(),t[1].setComponents(s+i,f+l,d+h,v+p).normalize(),t[2].setComponents(s+r,f+c,d+m,v+_).normalize(),t[3].setComponents(s-r,f-c,d-m,v-_).normalize(),t[4].setComponents(s-a,f-u,d-g,v-M).normalize(),t[5].setComponents(s+a,f+u,d+g,v+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xd(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Sg(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,m=u.updateRange;o.bindBuffer(f,c),m.count===-1?o.bufferSubData(f,0,h):(t?o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:s,update:l}}class bo extends ii{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,f=e/s,h=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const M=_*h-a;for(let v=0;v<c;v++){const b=v*f-r;g.push(b,-M,0),d.push(0,0,1),p.push(v/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<s;M++){const v=M+c*_,b=M+c*(_+1),y=M+1+c*(_+1),E=M+1+c*_;m.push(v,b,E),m.push(b,y,E)}this.setIndex(m),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(p,2))}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg="vec3 transformed = vec3( position );",Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,v_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,F_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,U_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,W_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,X_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,r0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,p0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,m0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,g0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,x0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,v0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,y0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,C0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ex=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:wg,alphamap_pars_fragment:Tg,alphatest_fragment:Eg,alphatest_pars_fragment:Ag,aomap_fragment:Cg,aomap_pars_fragment:Pg,begin_vertex:Dg,beginnormal_vertex:Lg,bsdfs:Rg,iridescence_fragment:Ig,bumpmap_pars_fragment:Og,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Ug,color_fragment:kg,color_pars_fragment:Bg,color_pars_vertex:Gg,color_vertex:Vg,common:Hg,cube_uv_reflection_fragment:Wg,defaultnormal_vertex:Xg,displacementmap_pars_vertex:qg,displacementmap_vertex:Yg,emissivemap_fragment:jg,emissivemap_pars_fragment:$g,encodings_fragment:Zg,encodings_pars_fragment:Kg,envmap_fragment:Jg,envmap_common_pars_fragment:Qg,envmap_pars_fragment:e_,envmap_pars_vertex:t_,envmap_physical_pars_fragment:d_,envmap_vertex:n_,fog_vertex:i_,fog_pars_vertex:r_,fog_fragment:s_,fog_pars_fragment:a_,gradientmap_pars_fragment:o_,lightmap_fragment:l_,lightmap_pars_fragment:c_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:h_,lights_pars_begin:f_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:__,lights_physical_fragment:x_,lights_physical_pars_fragment:v_,lights_fragment_begin:y_,lights_fragment_maps:M_,lights_fragment_end:b_,logdepthbuf_fragment:S_,logdepthbuf_pars_fragment:w_,logdepthbuf_pars_vertex:T_,logdepthbuf_vertex:E_,map_fragment:A_,map_pars_fragment:C_,map_particle_fragment:P_,map_particle_pars_fragment:D_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:R_,morphcolor_vertex:I_,morphnormal_vertex:O_,morphtarget_pars_vertex:F_,morphtarget_vertex:z_,normal_fragment_begin:N_,normal_fragment_maps:U_,normal_pars_fragment:k_,normal_pars_vertex:B_,normal_vertex:G_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:W_,clearcoat_pars_fragment:X_,iridescence_pars_fragment:q_,output_fragment:Y_,packing:j_,premultiplied_alpha_fragment:$_,project_vertex:Z_,dithering_fragment:K_,dithering_pars_fragment:J_,roughnessmap_fragment:Q_,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:n0,shadowmap_vertex:i0,shadowmask_pars_fragment:r0,skinbase_vertex:s0,skinning_pars_vertex:a0,skinning_vertex:o0,skinnormal_vertex:l0,specularmap_fragment:c0,specularmap_pars_fragment:u0,tonemapping_fragment:h0,tonemapping_pars_fragment:f0,transmission_fragment:d0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:_0,uv2_pars_fragment:x0,uv2_pars_vertex:v0,uv2_vertex:y0,worldpos_vertex:M0,background_vert:b0,background_frag:S0,backgroundCube_vert:w0,backgroundCube_frag:T0,cube_vert:E0,cube_frag:A0,depth_vert:C0,depth_frag:P0,distanceRGBA_vert:D0,distanceRGBA_frag:L0,equirect_vert:R0,equirect_frag:I0,linedashed_vert:O0,linedashed_frag:F0,meshbasic_vert:z0,meshbasic_frag:N0,meshlambert_vert:U0,meshlambert_frag:k0,meshmatcap_vert:B0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:H0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:q0,meshphysical_frag:Y0,meshtoon_vert:j0,meshtoon_frag:$0,points_vert:Z0,points_frag:K0,shadow_vert:J0,shadow_frag:Q0,sprite_vert:ex,sprite_frag:tx},de={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yn},uv2Transform:{value:new yn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}}},Kn={basic:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Yt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Yt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Yt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Yt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Yt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Yt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new yn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Yt([de.common,de.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Yt([de.lights,de.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Kn.physical={uniforms:Yt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ua={r:0,b:0,g:0};function nx(o,e,t,n,i,r,a){const s=new nt(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function g(p,_){let M=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const b=o.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?d(s,l):v&&v.isColor&&(d(v,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===yo)?(u===void 0&&(u=new Xn(new fs(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:hs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==ot,(f!==v||h!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xn(new bo(2,2),new vi({name:"BackgroundMaterial",uniforms:hs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){p.getRGB(Ua,md(o)),n.buffers.color.setClear(Ua.r,Ua.g,Ua.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(s,l)},render:g}}function ix(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function f(R,B,W,K,k){let Q=!1;if(a){const P=d(K,W,B);c!==P&&(c=P,m(c.object)),Q=_(R,K,W,k),Q&&M(R,K,W,k)}else{const P=B.wireframe===!0;(c.geometry!==K.id||c.program!==W.id||c.wireframe!==P)&&(c.geometry=K.id,c.program=W.id,c.wireframe=P,Q=!0)}k!==null&&t.update(k,34963),(Q||u)&&(u=!1,x(R,B,W,K),k!==null&&o.bindBuffer(34963,t.get(k).buffer))}function h(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,B,W){const K=W.wireframe===!0;let k=s[R.id];k===void 0&&(k={},s[R.id]=k);let Q=k[B.id];Q===void 0&&(Q={},k[B.id]=Q);let P=Q[K];return P===void 0&&(P=p(h()),Q[K]=P),P}function p(R){const B=[],W=[],K=[];for(let k=0;k<i;k++)B[k]=0,W[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:K,object:R,attributes:{},index:null}}function _(R,B,W,K){const k=c.attributes,Q=B.attributes;let P=0;const V=W.getAttributes();for(const Y in V)if(V[Y].location>=0){const te=k[Y];let ae=Q[Y];if(ae===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;P++}return c.attributesNum!==P||c.index!==K}function M(R,B,W,K){const k={},Q=B.attributes;let P=0;const V=W.getAttributes();for(const Y in V)if(V[Y].location>=0){let te=Q[Y];te===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),k[Y]=ae,P++}c.attributes=k,c.attributesNum=P,c.index=K}function v(){const R=c.newAttributes;for(let B=0,W=R.length;B<W;B++)R[B]=0}function b(R){y(R,0)}function y(R,B){const W=c.newAttributes,K=c.enabledAttributes,k=c.attributeDivisors;W[R]=1,K[R]===0&&(o.enableVertexAttribArray(R),K[R]=1),k[R]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),k[R]=B)}function E(){const R=c.newAttributes,B=c.enabledAttributes;for(let W=0,K=B.length;W<K;W++)B[W]!==R[W]&&(o.disableVertexAttribArray(W),B[W]=0)}function A(R,B,W,K,k,Q){n.isWebGL2===!0&&(W===5124||W===5125)?o.vertexAttribIPointer(R,B,W,k,Q):o.vertexAttribPointer(R,B,W,K,k,Q)}function x(R,B,W,K){if(n.isWebGL2===!1&&(R.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const k=K.attributes,Q=W.getAttributes(),P=B.defaultAttributeValues;for(const V in Q){const Y=Q[V];if(Y.location>=0){let ne=k[V];if(ne===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const te=ne.normalized,ae=ne.itemSize,H=t.get(ne);if(H===void 0)continue;const Ie=H.buffer,pe=H.type,De=H.bytesPerElement;if(ne.isInterleavedBufferAttribute){const he=ne.data,Fe=he.stride,me=ne.offset;if(he.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)y(Y.location+ye,he.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<Y.locationSize;ye++)b(Y.location+ye);o.bindBuffer(34962,Ie);for(let ye=0;ye<Y.locationSize;ye++)A(Y.location+ye,ae/Y.locationSize,pe,te,Fe*De,(me+ae/Y.locationSize*ye)*De)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<Y.locationSize;he++)y(Y.location+he,ne.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<Y.locationSize;he++)b(Y.location+he);o.bindBuffer(34962,Ie);for(let he=0;he<Y.locationSize;he++)A(Y.location+he,ae/Y.locationSize,pe,te,ae*De,ae/Y.locationSize*he*De)}}else if(P!==void 0){const te=P[V];if(te!==void 0)switch(te.length){case 2:o.vertexAttrib2fv(Y.location,te);break;case 3:o.vertexAttrib3fv(Y.location,te);break;case 4:o.vertexAttrib4fv(Y.location,te);break;default:o.vertexAttrib1fv(Y.location,te)}}}}E()}function T(){q();for(const R in s){const B=s[R];for(const W in B){const K=B[W];for(const k in K)g(K[k].object),delete K[k];delete B[W]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const W in B){const K=B[W];for(const k in K)g(K[k].object),delete K[k];delete B[W]}delete s[R.id]}function U(R){for(const B in s){const W=s[B];if(W[R.id]===void 0)continue;const K=W[R.id];for(const k in K)g(K[k].object),delete K[k];delete W[R.id]}}function q(){F(),u=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:b,disableUnusedAttributes:E}}function rx(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,m;if(i)h=o,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null)return;h[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=s,this.renderInstances=l}function sx(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=o.getParameter(34930),h=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),M=o.getParameter(36349),v=h>0,b=a||e.has("OES_texture_float"),y=v&&b,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:E}}function ax(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ki,s=new yn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||i;return i=h,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=o.get(f);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,v=M*4;let b=_.clippingState||null;l.value=b,b=u(g,h,v,m);for(let y=0;y!==v;++y)b[y]=t[y];_.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,M=h.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let v=0,b=m;v!==d;++v,b+=4)a.copy(f[v]).applyMatrix4(M,s),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function ox(o){let e=new WeakMap;function t(a,s){return s===jl?a.mapping=ls:s===$l&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===jl||s===$l)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yg(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class lx extends Tc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,Ju=[.125,.215,.35,.446,.526,.582],Yr=20,_l=new lx,Qu=new nt;let xl=null;const Ji=(1+Math.sqrt(5))/2,Ur=1/Ji,eh=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Ji,Ur),new G(0,Ji,-Ur),new G(Ur,0,Ji),new G(-Ur,0,Ji),new G(Ji,Ur,0),new G(-Ji,Ur,0)];class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl),e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Qs,format:vn,encoding:ki,depthBuffer:!1},i=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cx(r)),this._blurMaterial=ux(r,e,t)}return i}_compileMaterial(e){const t=new Xn(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,i){const s=new Dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Qu),u.toneMapping=ti,u.autoClear=!1;const m=new fd({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new Xn(new fs,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Qu),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):M===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const v=this._cubeSize;ka(i,M*v,_>2?v:0,v,v),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Xn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;ka(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=eh[(i-1)%eh.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial,u=3,f=new Xn(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yr-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):Yr;p>Yr;const _=[];let M=0;for(let A=0;A<Yr;++A){const x=A/d,T=Math.exp(-x*x/2);_.push(T),A===0?M+=T:A<p&&(M+=2*T)}for(let A=0;A<_.length;A++)_[A]=_[A]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const b=this._sizeLods[i],y=3*b*(i>v-qr?i-v+qr:0),E=4*(this._cubeSize-b);ka(t,y,E,3*b,2*b),l.setRenderTarget(t),l.render(f,_l)}}function cx(o){const e=[],t=[],n=[];let i=o;const r=o-qr+1+Ju.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-qr?l=Ju[a-o+qr-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,_=1,M=new Float32Array(d*g*m),v=new Float32Array(p*g*m),b=new Float32Array(_*g*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,x=E>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];M.set(T,d*g*E),v.set(h,p*g*E);const L=[E,E,E,E,E,E];b.set(L,_*g*E)}const y=new ii;y.setAttribute("position",new Yn(M,d)),y.setAttribute("uv",new Yn(v,p)),y.setAttribute("faceIndex",new Yn(b,_)),e.push(y),i>qr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nh(o,e,t){const n=new Bi(o,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function ux(o,e,t){const n=new Float32Array(Yr),i=new G(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ih(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function rh(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hx(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===jl||l===$l,u=l===ls||l===cs;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new th(o)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new th(o));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fx(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i}}}function dx(o,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let v=0,b=M.length;v<b;v+=3){const y=M[v+0],E=M[v+1],A=M[v+2];h.push(y,E,E,A,A,y)}}else{const M=g.array;d=g.version;for(let v=0,b=M.length/3-1;v<b;v+=3){const y=v+0,E=v+1,A=v+2;h.push(y,E,E,A,A,y)}}const p=new(sd(h)?pd:dd)(h,1);p.version=d;const _=r.get(f);_&&e.remove(_),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function px(o,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,m){o.drawElements(r,m,s,h*l),t.update(m,r,1)}function f(h,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null)return;d[p](r,m,s,h*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function mx(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gx(o,e){return o[0]-e[0]}function _x(o,e){return Math.abs(e[1])-Math.abs(o[1])}function xx(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ut,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let W=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",W)};var g=W;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let L=0;b===!0&&(L=1),y===!0&&(L=2),E===!0&&(L=3);let U=u.attributes.position.count*L,q=1;U>e.maxTextureSize&&(q=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*q*4*p),R=new cd(F,U,q,p);R.type=gi,R.needsUpdate=!0;const B=L*4;for(let K=0;K<p;K++){const k=A[K],Q=x[K],P=T[K],V=U*q*4*K;for(let Y=0;Y<k.count;Y++){const ne=Y*B;b===!0&&(a.fromBufferAttribute(k,Y),F[V+ne+0]=a.x,F[V+ne+1]=a.y,F[V+ne+2]=a.z,F[V+ne+3]=0),y===!0&&(a.fromBufferAttribute(Q,Y),F[V+ne+4]=a.x,F[V+ne+5]=a.y,F[V+ne+6]=a.z,F[V+ne+7]=0),E===!0&&(a.fromBufferAttribute(P,Y),F[V+ne+8]=a.x,F[V+ne+9]=a.y,F[V+ne+10]=a.z,F[V+ne+11]=P.itemSize===4?a.w:1)}}_={count:p,texture:R,size:new je(U,q)},r.set(u,_),u.addEventListener("dispose",W)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const v=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",v),h.getUniforms().setValue(o,"morphTargetInfluences",m),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const E=p[y];E[0]=y,E[1]=m[y]}p.sort(_x);for(let y=0;y<8;y++)y<d&&p[y][1]?(s[y][0]=p[y][0],s[y][1]=p[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(gx);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const E=s[y],A=E[0],x=E[1];A!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+y)!==_[A]&&u.setAttribute("morphTarget"+y,_[A]),M&&u.getAttribute("morphNormal"+y)!==M[A]&&u.setAttribute("morphNormal"+y,M[A]),i[y]=x,v+=x):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),M&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(o,"morphTargetBaseInfluence",b),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function vx(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const vd=new Jt,yd=new cd,Md=new rg,bd=new gd,sh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function ds(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=sh[i];if(r===void 0&&(r=new Float32Array(i),sh[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function Ct(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Pt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function So(o,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function yx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Mx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;o.uniform2fv(this.addr,e),Pt(t,e)}}function bx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;o.uniform3fv(this.addr,e),Pt(t,e)}}function Sx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;o.uniform4fv(this.addr,e),Pt(t,e)}}function wx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;ch.set(n),o.uniformMatrix2fv(this.addr,!1,ch),Pt(t,n)}}function Tx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;lh.set(n),o.uniformMatrix3fv(this.addr,!1,lh),Pt(t,n)}}function Ex(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;oh.set(n),o.uniformMatrix4fv(this.addr,!1,oh),Pt(t,n)}}function Ax(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Cx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;o.uniform2iv(this.addr,e),Pt(t,e)}}function Px(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;o.uniform3iv(this.addr,e),Pt(t,e)}}function Dx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;o.uniform4iv(this.addr,e),Pt(t,e)}}function Lx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Rx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;o.uniform2uiv(this.addr,e),Pt(t,e)}}function Ix(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;o.uniform3uiv(this.addr,e),Pt(t,e)}}function Ox(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;o.uniform4uiv(this.addr,e),Pt(t,e)}}function Fx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||vd,i)}function zx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Md,i)}function Nx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bd,i)}function Ux(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yd,i)}function kx(o){switch(o){case 5126:return yx;case 35664:return Mx;case 35665:return bx;case 35666:return Sx;case 35674:return wx;case 35675:return Tx;case 35676:return Ex;case 5124:case 35670:return Ax;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Dx;case 5125:return Lx;case 36294:return Rx;case 36295:return Ix;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}function Bx(o,e){o.uniform1fv(this.addr,e)}function Gx(o,e){const t=ds(e,this.size,2);o.uniform2fv(this.addr,t)}function Vx(o,e){const t=ds(e,this.size,3);o.uniform3fv(this.addr,t)}function Hx(o,e){const t=ds(e,this.size,4);o.uniform4fv(this.addr,t)}function Wx(o,e){const t=ds(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Xx(o,e){const t=ds(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function qx(o,e){const t=ds(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Yx(o,e){o.uniform1iv(this.addr,e)}function jx(o,e){o.uniform2iv(this.addr,e)}function $x(o,e){o.uniform3iv(this.addr,e)}function Zx(o,e){o.uniform4iv(this.addr,e)}function Kx(o,e){o.uniform1uiv(this.addr,e)}function Jx(o,e){o.uniform2uiv(this.addr,e)}function Qx(o,e){o.uniform3uiv(this.addr,e)}function ev(o,e){o.uniform4uiv(this.addr,e)}function tv(o,e,t){const n=this.cache,i=e.length,r=So(t,i);Ct(n,r)||(o.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||vd,r[a])}function nv(o,e,t){const n=this.cache,i=e.length,r=So(t,i);Ct(n,r)||(o.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Md,r[a])}function iv(o,e,t){const n=this.cache,i=e.length,r=So(t,i);Ct(n,r)||(o.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bd,r[a])}function rv(o,e,t){const n=this.cache,i=e.length,r=So(t,i);Ct(n,r)||(o.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yd,r[a])}function sv(o){switch(o){case 5126:return Bx;case 35664:return Gx;case 35665:return Vx;case 35666:return Hx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return Yx;case 35667:case 35671:return jx;case 35668:case 35672:return $x;case 35669:case 35673:return Zx;case 5125:return Kx;case 36294:return Jx;case 36295:return Qx;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}class av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=kx(t.type)}}class ov{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=sv(t.type)}}class lv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function uh(o,e){o.seq.push(e),o.map[e.id]=e}function cv(o,e,t){const n=o.name,i=n.length;for(vl.lastIndex=0;;){const r=vl.exec(n),a=vl.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){uh(t,c===void 0?new av(s,o,e):new ov(s,o,e));break}else{let f=t.map[s];f===void 0&&(f=new lv(s),uh(t,f)),t=f}}}class eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);cv(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function hh(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let uv=0;function hv(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function fv(o){switch(o){case ki:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return["Linear","( value )"]}}function fh(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+hv(o.getShaderSource(e),a)}else return i}function dv(o,e){const t=fv(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function pv(o,e){let t;switch(e){case Dm:t="Linear";break;case Lm:t="Reinhard";break;case Rm:t="OptimizedCineon";break;case Im:t="ACESFilmic";break;case Om:t="Custom";break;default:t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mv(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function gv(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _v(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function Rs(o){return o!==""}function dh(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(o){return o.replace(xv,vv)}function vv(o,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ec(t)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(o){return o.replace(yv,Mv)}function Mv(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gh(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bv(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lm?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ls&&(e="SHADOWMAP_TYPE_VSM"),e}function Sv(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wv(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Tv(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case Cm:e="ENVMAP_BLENDING_MIX";break;case Pm:e="ENVMAP_BLENDING_ADD";break}return e}function Ev(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Av(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=bv(t),c=Sv(t),u=wv(t),f=Tv(t),h=Ev(t),m=t.isWebGL2?"":mv(t),g=gv(r),d=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Rs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Rs).join(`
`),_.length>0&&(_+=`
`)):(p=[gh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),_=[m,gh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?He.tonemapping_pars_fragment:"",t.toneMapping!==ti?pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,dv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=ec(a),a=dh(a,t),a=ph(a,t),s=ec(s),s=dh(s,t),s=ph(s,t),a=mh(a),s=mh(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=M+p+a,b=M+_+s,y=hh(i,35633,v),E=hh(i,35632,b);if(i.attachShader(d,y),i.attachShader(d,E),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const T=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(y).trim(),U=i.getShaderInfoLog(E).trim();let q=!0,F=!0;if(i.getProgramParameter(d,35714)===!1){q=!1;const R=fh(i,y,"vertex"),B=fh(i,E,"fragment")}else T!==""||(L===""||U==="")&&(F=!1);F&&(this.diagnostics={runnable:q,programLog:T,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:_}})}i.deleteShader(y),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new eo(i,d)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=_v(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=uv++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=E,this}let Cv=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dv(e),t.set(e,n)),n}}class Dv{constructor(e){this.id=Cv++,this.code=e,this.usedTimes=0}}function Lv(o,e,t,n,i,r,a){const s=new hd,l=new Pv,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,L,U,q){const F=U.fog,R=q.geometry,B=x.isMeshStandardMaterial?U.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),K=W&&W.mapping===yo?W.image.height:null,k=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),x.precision);const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,P=Q!==void 0?Q.length:0;let V=0;R.morphAttributes.position!==void 0&&(V=1),R.morphAttributes.normal!==void 0&&(V=2),R.morphAttributes.color!==void 0&&(V=3);let Y,ne,te,ae;if(k){const Fe=Kn[k];Y=Fe.vertexShader,ne=Fe.fragmentShader}else Y=x.vertexShader,ne=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),ae=l.getFragmentShaderID(x);const H=o.getRenderTarget(),Ie=x.alphaTest>0,pe=x.clearcoat>0,De=x.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:x.type,vertexShader:Y,fragmentShader:ne,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:H===null?o.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:ki,map:!!x.map,matcap:!!x.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:K,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===eg,tangentSpaceNormalMap:x.normalMapType===Qm,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===ot,clearcoat:pe,clearcoatMap:pe&&!!x.clearcoatMap,clearcoatRoughnessMap:pe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!x.clearcoatNormalMap,iridescence:De,iridescenceMap:De&&!!x.iridescenceMap,iridescenceThicknessMap:De&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===lr,alphaMap:!!x.alphaMap,alphaTest:Ie,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:ti,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vo,flipSided:x.side===Fn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(T,x),M(T,x),T.push(o.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.physicallyCorrectLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.specularIntensityMap&&s.enable(15),T.specularColorMap&&s.enable(16),T.transmission&&s.enable(17),T.transmissionMap&&s.enable(18),T.thicknessMap&&s.enable(19),T.sheen&&s.enable(20),T.sheenColorMap&&s.enable(21),T.sheenRoughnessMap&&s.enable(22),T.decodeVideoTexture&&s.enable(23),T.opaque&&s.enable(24),x.push(s.mask)}function v(x){const T=g[x.type];let L;if(T){const U=Kn[T];L=gg.clone(U.uniforms)}else L=x.uniforms;return L}function b(x,T){let L;for(let U=0,q=c.length;U<q;U++){const F=c[U];if(F.cacheKey===T){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Av(o,T,x,r),c.push(L)),L}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function Rv(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Iv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function _h(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function xh(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,m,g,d,p){let _=o[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},o[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),e++,_}function s(f,h,m,g,d,p){const _=a(f,h,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,h,m,g,d,p){const _=a(f,h,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||Iv),n.length>1&&n.sort(h||_h),i.length>1&&i.sort(h||_h)}function u(){for(let f=e,h=o.length;f<h;f++){const m=o[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Ov(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new xh,o.set(n,[a])):i>=r.length?(a=new xh,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function Fv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new nt};break;case"SpotLight":t={position:new G,direction:new G,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=t,t}}}function zv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Nv=0;function Uv(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function kv(o,e){const t=new Fv,n=zv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,a=new gt,s=new gt;function l(u,f){let h=0,m=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,p=0,_=0,M=0,v=0,b=0,y=0,E=0,A=0,x=0;u.sort(Uv);const T=f!==!0?Math.PI:1;for(let U=0,q=u.length;U<q;U++){const F=u[U],R=F.color,B=F.intensity,W=F.distance,K=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=R.r*B*T,m+=R.g*B*T,g+=R.b*B*T;else if(F.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(F.sh.coefficients[k],B);else if(F.isDirectionalLight){const k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){const Q=F.shadow,P=n.get(F);P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,i.directionalShadow[d]=P,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=F.shadow.matrix,b++}i.directional[d]=k,d++}else if(F.isSpotLight){const k=t.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(R).multiplyScalar(B*T),k.distance=W,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,i.spot[_]=k;const Q=F.shadow;if(F.map&&(i.spotLightMap[A]=F.map,A++,Q.updateMatrices(F),F.castShadow&&x++),i.spotLightMatrix[_]=Q.matrix,F.castShadow){const P=n.get(F);P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=K,E++}_++}else if(F.isRectAreaLight){const k=t.get(F);k.color.copy(R).multiplyScalar(B),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),i.rectArea[M]=k,M++}else if(F.isPointLight){const k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*T),k.distance=F.distance,k.decay=F.decay,F.castShadow){const Q=F.shadow,P=n.get(F);P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,P.shadowCameraNear=Q.camera.near,P.shadowCameraFar=Q.camera.far,i.pointShadow[p]=P,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=F.shadow.matrix,y++}i.point[p]=k,p++}else if(F.isHemisphereLight){const k=t.get(F);k.skyColor.copy(F.color).multiplyScalar(B*T),k.groundColor.copy(F.groundColor).multiplyScalar(B*T),i.hemi[v]=k,v++}}M>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0&&(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==v||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==E||L.numSpotMaps!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+A-x,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=x,L.directionalLength=d,L.pointLength=p,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=v,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=E,L.numSpotMaps=A,i.version=Nv++)}function c(u,f){let h=0,m=0,g=0,d=0,p=0;const _=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const b=u[M];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(b.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),s.identity(),a.copy(b.matrixWorld),a.premultiply(_),s.extractRotation(a),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),d++}else if(b.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function vh(o,e){const t=new kv(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function s(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Bv(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new vh(o,e),t.set(r,[l])):a>=s.length?(l=new vh(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Gv extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vv extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xv(o,e,t){let n=new _d;const i=new je,r=new je,a=new Ut,s=new Gv({depthPacking:Jm}),l=new Vv,c={},u=t.maxTextureSize,f={0:Fn,1:mr,2:vo},h=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Hv,fragmentShader:Wv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ii;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Xn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qf,this.render=function(b,y,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const A=o.getRenderTarget(),x=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Oi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let U=0,q=b.length;U<q;U++){const F=b[U],R=F.shadow;if(R===void 0||R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const K=this.type!==Ls?{minFilter:yt,magFilter:yt}:{};R.map=new Bi(i.x,i.y,K),R.map.texture.name=F.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const W=R.getViewportCount();for(let K=0;K<W;K++){const k=R.getViewport(K);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(a),R.updateMatrices(F,K),n=R.getFrustum(),v(y,E,R.camera,F,this.type)}R.isPointLightShadow!==!0&&this.type===Ls&&_(R,E),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(A,x,T)};function _(b,y){const E=e.update(d);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bi(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(y,null,E,h,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(y,null,E,m,d,null)}function M(b,y,E,A,x,T){let L=null;const U=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)L=U;else if(L=E.isPointLight===!0?l:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const q=L.uuid,F=y.uuid;let R=c[q];R===void 0&&(R={},c[q]=R);let B=R[F];B===void 0&&(B=L.clone(),R[F]=B),L=B}return L.visible=y.visible,L.wireframe=y.wireframe,T===Ls?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:f[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.map=y.map,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=A,L.farDistance=x),L}function v(b,y,E,A,x){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ls)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const U=e.update(b),q=b.material;if(Array.isArray(q)){const F=U.groups;for(let R=0,B=F.length;R<B;R++){const W=F[R],K=q[W.materialIndex];if(K&&K.visible){const k=M(b,K,A,E.near,E.far,x);o.renderBufferDirect(E,null,U,k,b,W)}}}else if(q.visible){const F=M(b,q,A,E.near,E.far,x);o.renderBufferDirect(E,null,U,F,b,null)}}const L=b.children;for(let U=0,q=L.length;U<q;U++)v(L[U],y,E,A,x)}}function qv(o,e,t){const n=t.isWebGL2;function i(){let O=!1;const $=new Ut;let ie=null;const fe=new Ut(0,0,0,0);return{setMask:function(be){ie!==be&&!O&&(o.colorMask(be,be,be,be),ie=be)},setLocked:function(be){O=be},setClear:function(be,qe,it,dt,ke){ke===!0&&(be*=dt,qe*=dt,it*=dt),$.set(be,qe,it,dt),fe.equals($)===!1&&(o.clearColor(be,qe,it,dt),fe.copy($))},reset:function(){O=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let O=!1,$=null,ie=null,fe=null;return{setTest:function(be){be?Ie(2929):pe(2929)},setMask:function(be){$!==be&&!O&&(o.depthMask(be),$=be)},setFunc:function(be){if(ie!==be){switch(be){case Mm:o.depthFunc(512);break;case bm:o.depthFunc(519);break;case Sm:o.depthFunc(513);break;case Yl:o.depthFunc(515);break;case wm:o.depthFunc(514);break;case Tm:o.depthFunc(518);break;case Em:o.depthFunc(516);break;case Am:o.depthFunc(517);break;default:o.depthFunc(515)}ie=be}},setLocked:function(be){O=be},setClear:function(be){fe!==be&&(o.clearDepth(be),fe=be)},reset:function(){O=!1,$=null,ie=null,fe=null}}}function a(){let O=!1,$=null,ie=null,fe=null,be=null,qe=null,it=null,dt=null,ke=null;return{setTest:function(ce){O||(ce?Ie(2960):pe(2960))},setMask:function(ce){$!==ce&&!O&&(o.stencilMask(ce),$=ce)},setFunc:function(ce,se,Se){(ie!==ce||fe!==se||be!==Se)&&(o.stencilFunc(ce,se,Se),ie=ce,fe=se,be=Se)},setOp:function(ce,se,Se){(qe!==ce||it!==se||dt!==Se)&&(o.stencilOp(ce,se,Se),qe=ce,it=se,dt=Se)},setLocked:function(ce){O=ce},setClear:function(ce){ke!==ce&&(o.clearStencil(ce),ke=ce)},reset:function(){O=!1,$=null,ie=null,fe=null,be=null,qe=null,it=null,dt=null,ke=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,v=null,b=null,y=null,E=null,A=null,x=null,T=!1,L=null,U=null,q=null,F=null,R=null;const B=o.getParameter(35661);let W=!1,K=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=K>=2);let Q=null,P={};const V=o.getParameter(3088),Y=o.getParameter(2978),ne=new Ut().fromArray(V),te=new Ut().fromArray(Y);function ae(O,$,ie){const fe=new Uint8Array(4),be=o.createTexture();o.bindTexture(O,be),o.texParameteri(O,10241,9728),o.texParameteri(O,10240,9728);for(let qe=0;qe<ie;qe++)o.texImage2D($+qe,0,6408,1,1,0,6408,5121,fe);return be}const H={};H[3553]=ae(3553,3553,1),H[34067]=ae(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(2929),l.setFunc(Yl),$e(!1),X(uu),Ie(2884),Qe(Oi);function Ie(O){h[O]!==!0&&(o.enable(O),h[O]=!0)}function pe(O){h[O]!==!1&&(o.disable(O),h[O]=!1)}function De(O,$){return m[O]!==$?(o.bindFramebuffer(O,$),m[O]=$,n&&(O===36009&&(m[36160]=$),O===36160&&(m[36009]=$)),!0):!1}function he(O,$){let ie=d,fe=!1;if(O)if(ie=g.get($),ie===void 0&&(ie=[],g.set($,ie)),O.isWebGLMultipleRenderTargets){const be=O.texture;if(ie.length!==be.length||ie[0]!==36064){for(let qe=0,it=be.length;qe<it;qe++)ie[qe]=36064+qe;ie.length=be.length,fe=!0}}else ie[0]!==36064&&(ie[0]=36064,fe=!0);else ie[0]!==1029&&(ie[0]=1029,fe=!0);fe&&(t.isWebGL2?o.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Fe(O){return p!==O?(o.useProgram(O),p=O,!0):!1}const me={[Gr]:32774,[um]:32778,[hm]:32779};if(n)me[pu]=32775,me[mu]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(me[pu]=O.MIN_EXT,me[mu]=O.MAX_EXT)}const ye={[fm]:0,[dm]:1,[pm]:768,[ed]:770,[ym]:776,[xm]:774,[gm]:772,[mm]:769,[td]:771,[vm]:775,[_m]:773};function Qe(O,$,ie,fe,be,qe,it,dt){if(O===Oi){_===!0&&(pe(3042),_=!1);return}if(_===!1&&(Ie(3042),_=!0),O!==cm){if(O!==M||dt!==T){if((v!==Gr||E!==Gr)&&(o.blendEquation(32774),v=Gr,E=Gr),dt)switch(O){case lr:o.blendFuncSeparate(1,771,1,771);break;case hu:o.blendFunc(1,1);break;case fu:o.blendFuncSeparate(0,769,0,1);break;case du:o.blendFuncSeparate(0,768,0,770);break;default:break}else switch(O){case lr:o.blendFuncSeparate(770,771,1,771);break;case hu:o.blendFunc(770,1);break;case fu:o.blendFuncSeparate(0,769,0,1);break;case du:o.blendFunc(0,768);break;default:break}b=null,y=null,A=null,x=null,M=O,T=dt}return}be=be||$,qe=qe||ie,it=it||fe,($!==v||be!==E)&&(o.blendEquationSeparate(me[$],me[be]),v=$,E=be),(ie!==b||fe!==y||qe!==A||it!==x)&&(o.blendFuncSeparate(ye[ie],ye[fe],ye[qe],ye[it]),b=ie,y=fe,A=qe,x=it),M=O,T=!1}function tt(O,$){O.side===vo?pe(2884):Ie(2884);let ie=O.side===Fn;$&&(ie=!ie),$e(ie),O.blending===lr&&O.transparent===!1?Qe(Oi):Qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),s.setMask(O.colorWrite);const fe=O.stencilWrite;c.setTest(fe),fe&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ie(32926):pe(32926)}function $e(O){L!==O&&(O?o.frontFace(2304):o.frontFace(2305),L=O)}function X(O){O!==am?(Ie(2884),O!==U&&(O===uu?o.cullFace(1029):O===om?o.cullFace(1028):o.cullFace(1032))):pe(2884),U=O}function et(O){O!==q&&(W&&o.lineWidth(O),q=O)}function Le(O,$,ie){O?(Ie(32823),(F!==$||R!==ie)&&(o.polygonOffset($,ie),F=$,R=ie)):pe(32823)}function _t(O){O?Ie(3089):pe(3089)}function ct(O){O===void 0&&(O=33984+B-1),Q!==O&&(o.activeTexture(O),Q=O)}function C(O,$,ie){ie===void 0&&(Q===null?ie=33984+B-1:ie=Q);let fe=P[ie];fe===void 0&&(fe={type:void 0,texture:void 0},P[ie]=fe),(fe.type!==O||fe.texture!==$)&&(Q!==ie&&(o.activeTexture(ie),Q=ie),o.bindTexture(O,$||H[O]),fe.type=O,fe.texture=$)}function S(){const O=P[Q];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{o.compressedTexImage2D.apply(o,arguments)}catch{}}function re(){try{o.compressedTexImage3D.apply(o,arguments)}catch{}}function ee(){try{o.texSubImage2D.apply(o,arguments)}catch{}}function oe(){try{o.texSubImage3D.apply(o,arguments)}catch{}}function Te(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch{}}function D(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch{}}function z(){try{o.texStorage2D.apply(o,arguments)}catch{}}function le(){try{o.texStorage3D.apply(o,arguments)}catch{}}function ge(){try{o.texImage2D.apply(o,arguments)}catch{}}function ue(){try{o.texImage3D.apply(o,arguments)}catch{}}function Me(O){ne.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function ve(O){te.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),te.copy(O))}function Ne(O,$){let ie=f.get($);ie===void 0&&(ie=new WeakMap,f.set($,ie));let fe=ie.get(O);fe===void 0&&(fe=o.getUniformBlockIndex($,O.name),ie.set(O,fe))}function _e(O,$){const fe=f.get($).get(O);u.get($)!==fe&&(o.uniformBlockBinding($,fe,O.__bindingPointIndex),u.set($,fe))}function We(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},Q=null,P={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,v=null,b=null,y=null,E=null,A=null,x=null,T=!1,L=null,U=null,q=null,F=null,R=null,ne.set(0,0,o.canvas.width,o.canvas.height),te.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ie,disable:pe,bindFramebuffer:De,drawBuffers:he,useProgram:Fe,setBlending:Qe,setMaterial:tt,setFlipSided:$e,setCullFace:X,setLineWidth:et,setPolygonOffset:Le,setScissorTest:_t,activeTexture:ct,bindTexture:C,unbindTexture:S,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:ge,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:_e,texStorage2D:z,texStorage3D:le,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:Te,compressedTexSubImage3D:D,scissor:Me,viewport:ve,reset:We}}function Yv(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,S){return _?new OffscreenCanvas(C,S):ta("canvas")}function v(C,S,J,re){let ee=1;if((C.width>re||C.height>re)&&(ee=re/Math.max(C.width,C.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=S?Ql:Math.floor,Te=oe(ee*C.width),D=oe(ee*C.height);d===void 0&&(d=M(Te,D));const z=J?M(Te,D):d;return z.width=Te,z.height=D,z.getContext("2d").drawImage(C,0,0,Te,D),z}else return"data"in C,C;return C}function b(C){return Gu(C.width)&&Gu(C.height)}function y(C){return s?!1:C.wrapS!==xn||C.wrapT!==xn||C.minFilter!==yt&&C.minFilter!==Pn}function E(C,S){return C.generateMipmaps&&S&&C.minFilter!==yt&&C.minFilter!==Pn}function A(C){o.generateMipmap(C)}function x(C,S,J,re,ee=!1){if(s===!1)return S;if(C!==null&&o[C]!==void 0)return o[C];let oe=S;return S===6403&&(J===5126&&(oe=33326),J===5131&&(oe=33325),J===5121&&(oe=33321)),S===33319&&(J===5126&&(oe=33328),J===5131&&(oe=33327),J===5121&&(oe=33323)),S===6408&&(J===5126&&(oe=34836),J===5131&&(oe=34842),J===5121&&(oe=re===ot&&ee===!1?35907:32856),J===32819&&(oe=32854),J===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function T(C,S,J){return E(C,J)===!0||C.isFramebufferTexture&&C.minFilter!==yt&&C.minFilter!==Pn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function L(C){return C===yt||C===gu||C===Ho?9728:9729}function U(C){const S=C.target;S.removeEventListener("dispose",U),F(S),S.isVideoTexture&&g.delete(S)}function q(C){const S=C.target;S.removeEventListener("dispose",q),B(S)}function F(C){const S=n.get(C);if(S.__webglInit===void 0)return;const J=C.source,re=p.get(J);if(re){const ee=re[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(C),Object.keys(re).length===0&&p.delete(J)}n.remove(C)}function R(C){const S=n.get(C);o.deleteTexture(S.__webglTexture);const J=C.source,re=p.get(J);delete re[S.__cacheKey],a.memory.textures--}function B(C){const S=C.texture,J=n.get(C),re=n.get(S);if(re.__webglTexture!==void 0&&(o.deleteTexture(re.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)o.deleteFramebuffer(J.__webglFramebuffer[ee]),J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer[ee]);else{if(o.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&o.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ee=0;ee<J.__webglColorRenderbuffer.length;ee++)J.__webglColorRenderbuffer[ee]&&o.deleteRenderbuffer(J.__webglColorRenderbuffer[ee]);J.__webglDepthRenderbuffer&&o.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,oe=S.length;ee<oe;ee++){const Te=n.get(S[ee]);Te.__webglTexture&&(o.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(S[ee])}n.remove(S),n.remove(C)}let W=0;function K(){W=0}function k(){const C=W;return C>=l,W+=1,C}function Q(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function P(C,S){const J=n.get(C);if(C.isVideoTexture&&_t(C),C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){const re=C.image;if(re!==null){if(re.complete!==!1){pe(J,C,S);return}}}t.bindTexture(3553,J.__webglTexture,33984+S)}function V(C,S){const J=n.get(C);if(C.version>0&&J.__version!==C.version){pe(J,C,S);return}t.bindTexture(35866,J.__webglTexture,33984+S)}function Y(C,S){const J=n.get(C);if(C.version>0&&J.__version!==C.version){pe(J,C,S);return}t.bindTexture(32879,J.__webglTexture,33984+S)}function ne(C,S){const J=n.get(C);if(C.version>0&&J.__version!==C.version){De(J,C,S);return}t.bindTexture(34067,J.__webglTexture,33984+S)}const te={[Zl]:10497,[xn]:33071,[Kl]:33648},ae={[yt]:9728,[gu]:9984,[Ho]:9986,[Pn]:9729,[Fm]:9985,[Js]:9987};function H(C,S,J){if(J?(o.texParameteri(C,10242,te[S.wrapS]),o.texParameteri(C,10243,te[S.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,te[S.wrapR]),o.texParameteri(C,10240,ae[S.magFilter]),o.texParameteri(C,10241,ae[S.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),S.wrapS!==xn||S.wrapT,o.texParameteri(C,10240,L(S.magFilter)),o.texParameteri(C,10241,L(S.minFilter)),S.minFilter!==yt&&S.minFilter),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===yt||S.minFilter!==Ho&&S.minFilter!==Js||S.type===gi&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ie(C,S){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",U));const re=S.source;let ee=p.get(re);ee===void 0&&(ee={},p.set(re,ee));const oe=Q(S);if(oe!==C.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ee[oe].usedTimes++;const Te=ee[C.__cacheKey];Te!==void 0&&(ee[C.__cacheKey].usedTimes--,Te.usedTimes===0&&R(S)),C.__cacheKey=oe,C.__webglTexture=ee[oe].texture}return J}function pe(C,S,J){let re=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=35866),S.isData3DTexture&&(re=32879);const ee=Ie(C,S),oe=S.source;t.bindTexture(re,C.__webglTexture,33984+J);const Te=n.get(oe);if(oe.version!==Te.__version||ee===!0){t.activeTexture(33984+J),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const D=y(S)&&b(S.image)===!1;let z=v(S.image,D,!1,u);z=ct(S,z);const le=b(z)||s,ge=r.convert(S.format,S.encoding);let ue=r.convert(S.type),Me=x(S.internalFormat,ge,ue,S.encoding,S.isVideoTexture);H(re,S,le);let ve;const Ne=S.mipmaps,_e=s&&S.isVideoTexture!==!0,We=Te.__version===void 0||ee===!0,O=T(S,z,le);if(S.isDepthTexture)Me=6402,s?S.type===gi?Me=36012:S.type===tr?Me=33190:S.type===Qr?Me=35056:Me=33189:S.type,S.format===cr&&Me===6402&&S.type!==rd&&S.type!==tr&&(S.type=tr,ue=r.convert(S.type)),S.format===us&&Me===6402&&(Me=34041,S.type!==Qr&&(S.type=Qr,ue=r.convert(S.type))),We&&(_e?t.texStorage2D(3553,1,Me,z.width,z.height):t.texImage2D(3553,0,Me,z.width,z.height,0,ge,ue,null));else if(S.isDataTexture)if(Ne.length>0&&le){_e&&We&&t.texStorage2D(3553,O,Me,Ne[0].width,Ne[0].height);for(let $=0,ie=Ne.length;$<ie;$++)ve=Ne[$],_e?t.texSubImage2D(3553,$,0,0,ve.width,ve.height,ge,ue,ve.data):t.texImage2D(3553,$,Me,ve.width,ve.height,0,ge,ue,ve.data);S.generateMipmaps=!1}else _e?(We&&t.texStorage2D(3553,O,Me,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,ge,ue,z.data)):t.texImage2D(3553,0,Me,z.width,z.height,0,ge,ue,z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){_e&&We&&t.texStorage3D(35866,O,Me,Ne[0].width,Ne[0].height,z.depth);for(let $=0,ie=Ne.length;$<ie;$++)ve=Ne[$],S.format!==vn?ge!==null&&(_e?t.compressedTexSubImage3D(35866,$,0,0,0,ve.width,ve.height,z.depth,ge,ve.data,0,0):t.compressedTexImage3D(35866,$,Me,ve.width,ve.height,z.depth,0,ve.data,0,0)):_e?t.texSubImage3D(35866,$,0,0,0,ve.width,ve.height,z.depth,ge,ue,ve.data):t.texImage3D(35866,$,Me,ve.width,ve.height,z.depth,0,ge,ue,ve.data)}else{_e&&We&&t.texStorage2D(3553,O,Me,Ne[0].width,Ne[0].height);for(let $=0,ie=Ne.length;$<ie;$++)ve=Ne[$],S.format!==vn?ge!==null&&(_e?t.compressedTexSubImage2D(3553,$,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(3553,$,Me,ve.width,ve.height,0,ve.data)):_e?t.texSubImage2D(3553,$,0,0,ve.width,ve.height,ge,ue,ve.data):t.texImage2D(3553,$,Me,ve.width,ve.height,0,ge,ue,ve.data)}else if(S.isDataArrayTexture)_e?(We&&t.texStorage3D(35866,O,Me,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,ge,ue,z.data)):t.texImage3D(35866,0,Me,z.width,z.height,z.depth,0,ge,ue,z.data);else if(S.isData3DTexture)_e?(We&&t.texStorage3D(32879,O,Me,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,ge,ue,z.data)):t.texImage3D(32879,0,Me,z.width,z.height,z.depth,0,ge,ue,z.data);else if(S.isFramebufferTexture){if(We)if(_e)t.texStorage2D(3553,O,Me,z.width,z.height);else{let $=z.width,ie=z.height;for(let fe=0;fe<O;fe++)t.texImage2D(3553,fe,Me,$,ie,0,ge,ue,null),$>>=1,ie>>=1}}else if(Ne.length>0&&le){_e&&We&&t.texStorage2D(3553,O,Me,Ne[0].width,Ne[0].height);for(let $=0,ie=Ne.length;$<ie;$++)ve=Ne[$],_e?t.texSubImage2D(3553,$,0,0,ge,ue,ve):t.texImage2D(3553,$,Me,ge,ue,ve);S.generateMipmaps=!1}else _e?(We&&t.texStorage2D(3553,O,Me,z.width,z.height),t.texSubImage2D(3553,0,0,0,ge,ue,z)):t.texImage2D(3553,0,Me,ge,ue,z);E(S,le)&&A(re),Te.__version=oe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function De(C,S,J){if(S.image.length!==6)return;const re=Ie(C,S),ee=S.source;t.bindTexture(34067,C.__webglTexture,33984+J);const oe=n.get(ee);if(ee.version!==oe.__version||re===!0){t.activeTexture(33984+J),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,z=[];for(let $=0;$<6;$++)!Te&&!D?z[$]=v(S.image[$],!1,!0,c):z[$]=D?S.image[$].image:S.image[$],z[$]=ct(S,z[$]);const le=z[0],ge=b(le)||s,ue=r.convert(S.format,S.encoding),Me=r.convert(S.type),ve=x(S.internalFormat,ue,Me,S.encoding),Ne=s&&S.isVideoTexture!==!0,_e=oe.__version===void 0||re===!0;let We=T(S,le,ge);H(34067,S,ge);let O;if(Te){Ne&&_e&&t.texStorage2D(34067,We,ve,le.width,le.height);for(let $=0;$<6;$++){O=z[$].mipmaps;for(let ie=0;ie<O.length;ie++){const fe=O[ie];S.format!==vn?ue!==null&&(Ne?t.compressedTexSubImage2D(34069+$,ie,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(34069+$,ie,ve,fe.width,fe.height,0,fe.data)):Ne?t.texSubImage2D(34069+$,ie,0,0,fe.width,fe.height,ue,Me,fe.data):t.texImage2D(34069+$,ie,ve,fe.width,fe.height,0,ue,Me,fe.data)}}}else{O=S.mipmaps,Ne&&_e&&(O.length>0&&We++,t.texStorage2D(34067,We,ve,z[0].width,z[0].height));for(let $=0;$<6;$++)if(D){Ne?t.texSubImage2D(34069+$,0,0,0,z[$].width,z[$].height,ue,Me,z[$].data):t.texImage2D(34069+$,0,ve,z[$].width,z[$].height,0,ue,Me,z[$].data);for(let ie=0;ie<O.length;ie++){const be=O[ie].image[$].image;Ne?t.texSubImage2D(34069+$,ie+1,0,0,be.width,be.height,ue,Me,be.data):t.texImage2D(34069+$,ie+1,ve,be.width,be.height,0,ue,Me,be.data)}}else{Ne?t.texSubImage2D(34069+$,0,0,0,ue,Me,z[$]):t.texImage2D(34069+$,0,ve,ue,Me,z[$]);for(let ie=0;ie<O.length;ie++){const fe=O[ie];Ne?t.texSubImage2D(34069+$,ie+1,0,0,ue,Me,fe.image[$]):t.texImage2D(34069+$,ie+1,ve,ue,Me,fe.image[$])}}}E(S,ge)&&A(34067),oe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function he(C,S,J,re,ee){const oe=r.convert(J.format,J.encoding),Te=r.convert(J.type),D=x(J.internalFormat,oe,Te,J.encoding);n.get(S).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,D,S.width,S.height,S.depth,0,oe,Te,null):t.texImage2D(ee,0,D,S.width,S.height,0,oe,Te,null)),t.bindFramebuffer(36160,C),Le(S)?h.framebufferTexture2DMultisampleEXT(36160,re,ee,n.get(J).__webglTexture,0,et(S)):(ee===3553||ee>=34069&&ee<=34074)&&o.framebufferTexture2D(36160,re,ee,n.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(C,S,J){if(o.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let re=33189;if(J||Le(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===gi?re=36012:ee.type===tr&&(re=33190));const oe=et(S);Le(S)?h.renderbufferStorageMultisampleEXT(36161,oe,re,S.width,S.height):o.renderbufferStorageMultisample(36161,oe,re,S.width,S.height)}else o.renderbufferStorage(36161,re,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const re=et(S);J&&Le(S)===!1?o.renderbufferStorageMultisample(36161,re,35056,S.width,S.height):Le(S)?h.renderbufferStorageMultisampleEXT(36161,re,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<re.length;ee++){const oe=re[ee],Te=r.convert(oe.format,oe.encoding),D=r.convert(oe.type),z=x(oe.internalFormat,Te,D,oe.encoding),le=et(S);J&&Le(S)===!1?o.renderbufferStorageMultisample(36161,le,z,S.width,S.height):Le(S)?h.renderbufferStorageMultisampleEXT(36161,le,z,S.width,S.height):o.renderbufferStorage(36161,z,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function me(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const re=n.get(S.depthTexture).__webglTexture,ee=et(S);if(S.depthTexture.format===cr)Le(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,ee):o.framebufferTexture2D(36160,36096,3553,re,0);else if(S.depthTexture.format===us)Le(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,ee):o.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function ye(C){const S=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");me(S.__webglFramebuffer,C)}else if(J){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=o.createRenderbuffer(),Fe(S.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Fe(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Qe(C,S,J){const re=n.get(C);S!==void 0&&he(re.__webglFramebuffer,C,C.texture,36064,3553),J!==void 0&&ye(C)}function tt(C){const S=C.texture,J=n.get(C),re=n.get(S);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture()),re.__version=S.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Te=b(C)||s;if(ee){J.__webglFramebuffer=[];for(let D=0;D<6;D++)J.__webglFramebuffer[D]=o.createFramebuffer()}else{if(J.__webglFramebuffer=o.createFramebuffer(),oe&&i.drawBuffers){const D=C.texture;for(let z=0,le=D.length;z<le;z++){const ge=n.get(D[z]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),a.memory.textures++)}}if(s&&C.samples>0&&Le(C)===!1){const D=oe?S:[S];J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let z=0;z<D.length;z++){const le=D[z];J.__webglColorRenderbuffer[z]=o.createRenderbuffer(),o.bindRenderbuffer(36161,J.__webglColorRenderbuffer[z]);const ge=r.convert(le.format,le.encoding),ue=r.convert(le.type),Me=x(le.internalFormat,ge,ue,le.encoding,C.isXRRenderTarget===!0),ve=et(C);o.renderbufferStorageMultisample(36161,ve,Me,C.width,C.height),o.framebufferRenderbuffer(36160,36064+z,36161,J.__webglColorRenderbuffer[z])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Fe(J.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,re.__webglTexture),H(34067,S,Te);for(let D=0;D<6;D++)he(J.__webglFramebuffer[D],C,S,36064,34069+D);E(S,Te)&&A(34067),t.unbindTexture()}else if(oe){const D=C.texture;for(let z=0,le=D.length;z<le;z++){const ge=D[z],ue=n.get(ge);t.bindTexture(3553,ue.__webglTexture),H(3553,ge,Te),he(J.__webglFramebuffer,C,ge,36064+z,3553),E(ge,Te)&&A(3553)}t.unbindTexture()}else{let D=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&s&&(D=C.isWebGL3DRenderTarget?32879:35866),t.bindTexture(D,re.__webglTexture),H(D,S,Te),he(J.__webglFramebuffer,C,S,36064,D),E(S,Te)&&A(D),t.unbindTexture()}C.depthBuffer&&ye(C)}function $e(C){const S=b(C)||s,J=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ee=J.length;re<ee;re++){const oe=J[re];if(E(oe,S)){const Te=C.isWebGLCubeRenderTarget?34067:3553,D=n.get(oe).__webglTexture;t.bindTexture(Te,D),A(Te),t.unbindTexture()}}}function X(C){if(s&&C.samples>0&&Le(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],J=C.width,re=C.height;let ee=16384;const oe=[],Te=C.stencilBuffer?33306:36096,D=n.get(C),z=C.isWebGLMultipleRenderTargets===!0;if(z)for(let le=0;le<S.length;le++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let le=0;le<S.length;le++){oe.push(36064+le),C.depthBuffer&&oe.push(Te);const ge=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(ge===!1&&(C.depthBuffer&&(ee|=256),C.stencilBuffer&&(ee|=1024)),z&&o.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[le]),ge===!0&&(o.invalidateFramebuffer(36008,[Te]),o.invalidateFramebuffer(36009,[Te])),z){const ue=n.get(S[le]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ue,0)}o.blitFramebuffer(0,0,J,re,0,0,J,re,ee,9728),m&&o.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let le=0;le<S.length;le++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,D.__webglColorRenderbuffer[le]);const ge=n.get(S[le]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,ge,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function et(C){return Math.min(f,C.samples)}function Le(C){const S=n.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(C){const S=a.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function ct(C,S){const J=C.encoding,re=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Jl||J!==ki&&J===ot&&s===!1&&(e.has("EXT_sRGB")===!0&&re===vn?(C.format=Jl,C.minFilter=Pn,C.generateMipmaps=!1):S=od.sRGBToLinear(S)),S}this.allocateTextureUnit=k,this.resetTextureUnits=K,this.setTexture2D=P,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=ne,this.rebindTextures=Qe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Le}function jv(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===gr)return 5121;if(r===km)return 32819;if(r===Bm)return 32820;if(r===zm)return 5120;if(r===Nm)return 5122;if(r===rd)return 5123;if(r===Um)return 5124;if(r===tr)return 5125;if(r===gi)return 5126;if(r===Qs)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Gm)return 6406;if(r===vn)return 6408;if(r===Hm)return 6409;if(r===Wm)return 6410;if(r===cr)return 6402;if(r===us)return 34041;if(r===Vm)return 6408;if(r===Jl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Xm)return 6403;if(r===qm)return 36244;if(r===Ym)return 33319;if(r===jm)return 33320;if(r===$m)return 36249;if(r===Wo||r===Xo||r===qo||r===Yo)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_u||r===xu||r===vu||r===yu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===_u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zm)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mu||r===bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Mu)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===bu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Su||r===wu||r===Tu||r===Eu||r===Au||r===Cu||r===Pu||r===Du||r===Lu||r===Ru||r===Iu||r===Ou||r===Fu||r===zu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Su)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Tu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Au)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Du)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ru)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Iu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ou)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Nu)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Qr?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class $v extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zv={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),_=this._getHandJoint(c,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Zv)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ba;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Kv extends Jt{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:cr,u!==cr&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cr&&(n=tr),n===void 0&&u===us&&(n=Qr),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class Jv extends vr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],M=[],v=new Set,b=new Map,y=new Dn;y.layers.enable(1),y.viewport=new Ut;const E=new Dn;E.layers.enable(2),E.viewport=new Ut;const A=[y,E],x=new $v;x.layers.enable(1),x.layers.enable(2);let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=_[V];return Y===void 0&&(Y=new yl,_[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=_[V];return Y===void 0&&(Y=new yl,_[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=_[V];return Y===void 0&&(Y=new yl,_[V]=Y),Y.getHandSpace()};function U(V){const Y=M.indexOf(V.inputSource);if(Y===-1)return;const ne=_[Y];ne!==void 0&&ne.dispatchEvent({type:V.type,data:V.inputSource})}function q(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",F);for(let V=0;V<_.length;V++){const Y=M[V];Y!==null&&(M[V]=null,_[V].disconnect(Y))}T=null,L=null,e.setRenderTarget(d),h=null,f=null,u=null,i=null,p=null,P.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting},this.setReferenceSpaceType=function(V){s=V,n.isPresenting},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",q),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:h}),p=new Bi(h.framebufferWidth,h.framebufferHeight,{format:vn,type:gr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let Y=null,ne=null,te=null;g.depth&&(te=g.stencil?35056:33190,Y=g.stencil?us:cr,ne=g.stencil?Qr:tr);const ae={colorFormat:32856,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ae),i.updateRenderState({layers:[f]}),p=new Bi(f.textureWidth,f.textureHeight,{format:vn,type:gr,depthTexture:new Kv(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const H=e.properties.get(p);H.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),P.setContext(i),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(V){for(let Y=0;Y<V.removed.length;Y++){const ne=V.removed[Y],te=M.indexOf(ne);te>=0&&(M[te]=null,_[te].disconnect(ne))}for(let Y=0;Y<V.added.length;Y++){const ne=V.added[Y];let te=M.indexOf(ne);if(te===-1){for(let H=0;H<_.length;H++)if(H>=M.length){M.push(ne),te=H;break}else if(M[H]===null){M[H]=ne,te=H;break}if(te===-1)break}const ae=_[te];ae&&ae.connect(ne)}}const R=new G,B=new G;function W(V,Y,ne){R.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(ne.matrixWorld);const te=R.distanceTo(B),ae=Y.projectionMatrix.elements,H=ne.projectionMatrix.elements,Ie=ae[14]/(ae[10]-1),pe=ae[14]/(ae[10]+1),De=(ae[9]+1)/ae[5],he=(ae[9]-1)/ae[5],Fe=(ae[8]-1)/ae[0],me=(H[8]+1)/H[0],ye=Ie*Fe,Qe=Ie*me,tt=te/(-Fe+me),$e=tt*-Fe;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX($e),V.translateZ(tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const X=Ie+tt,et=pe+tt,Le=ye-$e,_t=Qe+(te-$e),ct=De*pe/et*X,C=he*pe/et*X;V.projectionMatrix.makePerspective(Le,_t,ct,C,X,et)}function K(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;x.near=E.near=y.near=V.near,x.far=E.far=y.far=V.far,(T!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,L=x.far);const Y=V.parent,ne=x.cameras;K(x,Y);for(let ae=0;ae<ne.length;ae++)K(ne[ae],Y);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),V.matrix.copy(x.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const te=V.children;for(let ae=0,H=te.length;ae<H;ae++)te[ae].updateMatrixWorld(!0);ne.length===2?W(x,y,E):x.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(V){f!==null&&(f.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.getPlanes=function(){return v};let k=null;function Q(V,Y){if(c=Y.getViewerPose(l||a),m=Y,c!==null){const ne=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let te=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,te=!0);for(let ae=0;ae<ne.length;ae++){const H=ne[ae];let Ie=null;if(h!==null)Ie=h.getViewport(H);else{const De=u.getViewSubImage(f,H);Ie=De.viewport,ae===0&&(e.setRenderTargetTextures(p,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let pe=A[ae];pe===void 0&&(pe=new Dn,pe.layers.enable(ae),pe.viewport=new Ut,A[ae]=pe),pe.matrix.fromArray(H.transform.matrix),pe.projectionMatrix.fromArray(H.projectionMatrix),pe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ae===0&&x.matrix.copy(pe.matrix),te===!0&&x.cameras.push(pe)}}for(let ne=0;ne<_.length;ne++){const te=M[ne],ae=_[ne];te!==null&&ae!==void 0&&ae.update(te,Y,l||a)}if(k&&k(V,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let ne=null;for(const te of v)Y.detectedPlanes.has(te)||(ne===null&&(ne=[]),ne.push(te));if(ne!==null)for(const te of ne)v.delete(te),b.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of Y.detectedPlanes)if(!v.has(te))v.add(te),b.set(te,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const ae=b.get(te);te.lastChangedTime>ae&&(b.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}m=null}const P=new xd;P.setAnimationLoop(Q),this.setAnimationLoop=function(V){k=V},this.dispose=function(){}}}function Qv(o,e){function t(d,p){p.color.getRGB(d.fogColor.value,md(o)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,v)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,M):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Fn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Fn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=M*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Fn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ey(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(M,v){const b=v.program;n.uniformBlockBinding(M,b)}function c(M,v){let b=i[M.id];b===void 0&&(g(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",p));const y=v.program;n.updateUBOMapping(M,y);const E=e.render.frame;r[M.id]!==E&&(h(M),r[M.id]=E)}function u(M){const v=f();M.__bindingPointIndex=v;const b=o.createBuffer(),y=M.__size,E=M.usage;return o.bindBuffer(35345,b),o.bufferData(35345,y,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,b),b}function f(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return 0}function h(M){const v=i[M.id],b=M.uniforms,y=M.__cache;o.bindBuffer(35345,v);for(let E=0,A=b.length;E<A;E++){const x=b[E];if(m(x,E,y)===!0){const T=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let U=0;for(let q=0;q<L.length;q++){const F=L[q],R=d(F);typeof F=="number"?(x.__data[0]=F,o.bufferSubData(35345,T+U,x.__data)):F.isMatrix3?(x.__data[0]=F.elements[0],x.__data[1]=F.elements[1],x.__data[2]=F.elements[2],x.__data[3]=F.elements[0],x.__data[4]=F.elements[3],x.__data[5]=F.elements[4],x.__data[6]=F.elements[5],x.__data[7]=F.elements[0],x.__data[8]=F.elements[6],x.__data[9]=F.elements[7],x.__data[10]=F.elements[8],x.__data[11]=F.elements[0]):(F.toArray(x.__data,U),U+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,T,x.__data)}}o.bindBuffer(35345,null)}function m(M,v,b){const y=M.value;if(b[v]===void 0){if(typeof y=="number")b[v]=y;else{const E=Array.isArray(y)?y:[y],A=[];for(let x=0;x<E.length;x++)A.push(E[x].clone());b[v]=A}return!0}else if(typeof y=="number"){if(b[v]!==y)return b[v]=y,!0}else{const E=Array.isArray(b[v])?b[v]:[b[v]],A=Array.isArray(y)?y:[y];for(let x=0;x<E.length;x++){const T=E[x];if(T.equals(A[x])===!1)return T.copy(A[x]),!0}}return!1}function g(M){const v=M.uniforms;let b=0;const y=16;let E=0;for(let A=0,x=v.length;A<x;A++){const T=v[A],L={boundary:0,storage:0},U=Array.isArray(T.value)?T.value:[T.value];for(let q=0,F=U.length;q<F;q++){const R=U[q],B=d(R);L.boundary+=B.boundary,L.storage+=B.storage}if(T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,A>0){E=b%y;const q=y-E;E!==0&&q-L.boundary<0&&(b+=y-E,T.__offset=b)}b+=L.storage}return E=b%y,E>0&&(b+=y-E),M.__size=b,M.__cache={},this}function d(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture,v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function _(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function ty(){const o=ta("canvas");return o.style.display="block",o}function Sd(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:ty(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ki,this.physicallyCorrectLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const d=this;let p=!1,_=0,M=0,v=null,b=-1,y=null;const E=new Ut,A=new Ut;let x=null,T=e.width,L=e.height,U=1,q=null,F=null;const R=new Ut(0,0,T,L),B=new Ut(0,0,T,L);let W=!1;const K=new _d;let k=!1,Q=!1,P=null;const V=new gt,Y=new je,ne=new G,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return v===null?U:1}let H=t;function Ie(w,N){for(let Z=0;Z<w.length;Z++){const I=w[Z],j=e.getContext(I,N);if(j!==null)return j}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),H===null){const N=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&N.shift(),H=Ie(N,w),H===null)throw Ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw w}let pe,De,he,Fe,me,ye,Qe,tt,$e,X,et,Le,_t,ct,C,S,J,re,ee,oe,Te,D,z,le;function ge(){pe=new fx(H),De=new sx(H,pe,o),pe.init(De),D=new jv(H,pe,De),he=new qv(H,pe,De),Fe=new mx,me=new Rv,ye=new Yv(H,pe,he,me,De,D,Fe),Qe=new ox(d),tt=new hx(d),$e=new Sg(H,De),z=new ix(H,pe,$e,De),X=new dx(H,$e,Fe,z),et=new vx(H,X,$e,Fe),ee=new xx(H,De,ye),S=new ax(me),Le=new Lv(d,Qe,tt,pe,De,z,S),_t=new Qv(d,me),ct=new Ov,C=new Bv(pe,De),re=new nx(d,Qe,tt,he,et,u,a),J=new Xv(d,et,De),le=new ey(H,Fe,De,he),oe=new rx(H,pe,Fe,De),Te=new px(H,pe,Fe,De),Fe.programs=Le.programs,d.capabilities=De,d.extensions=pe,d.properties=me,d.renderLists=ct,d.shadowMap=J,d.state=he,d.info=Fe}ge();const ue=new Jv(d,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(T,L,!1))},this.getSize=function(w){return w.set(T,L)},this.setSize=function(w,N,Z){ue.isPresenting||(T=w,L=N,e.width=Math.floor(w*U),e.height=Math.floor(N*U),Z!==!1&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N))},this.getDrawingBufferSize=function(w){return w.set(T*U,L*U).floor()},this.setDrawingBufferSize=function(w,N,Z){T=w,L=N,U=Z,e.width=Math.floor(w*Z),e.height=Math.floor(N*Z),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,N,Z,I){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,N,Z,I),he.viewport(E.copy(R).multiplyScalar(U).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,N,Z,I){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,N,Z,I),he.scissor(A.copy(B).multiplyScalar(U).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(w){he.setScissorTest(W=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(w=!0,N=!0,Z=!0){let I=0;w&&(I|=16384),N&&(I|=256),Z&&(I|=1024),H.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),ct.dispose(),C.dispose(),me.dispose(),Qe.dispose(),tt.dispose(),et.dispose(),z.dispose(),le.dispose(),Le.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fe),ue.removeEventListener("sessionend",be),P&&(P.dispose(),P=null),qe.stop()};function Me(w){w.preventDefault(),p=!0}function ve(){p=!1;const w=Fe.autoReset,N=J.enabled,Z=J.autoUpdate,I=J.needsUpdate,j=J.type;ge(),Fe.autoReset=w,J.enabled=N,J.autoUpdate=Z,J.needsUpdate=I,J.type=j}function Ne(w){}function _e(w){const N=w.target;N.removeEventListener("dispose",_e),We(N)}function We(w){O(w),me.remove(w)}function O(w){const N=me.get(w).programs;N!==void 0&&(N.forEach(function(Z){Le.releaseProgram(Z)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,Z,I,j,we){N===null&&(N=te);const xe=j.isMesh&&j.matrixWorld.determinant()<0,Ee=ze(w,N,Z,I,j);he.setMaterial(I,xe);let Ae=Z.index,Ve=1;I.wireframe===!0&&(Ae=X.getWireframeAttribute(Z),Ve=2);const Be=Z.drawRange,Pe=Z.attributes.position;let Ue=Be.start*Ve,ut=(Be.start+Be.count)*Ve;we!==null&&(Ue=Math.max(Ue,we.start*Ve),ut=Math.min(ut,(we.start+we.count)*Ve)),Ae!==null?(Ue=Math.max(Ue,0),ut=Math.min(ut,Ae.count)):Pe!=null&&(Ue=Math.max(Ue,0),ut=Math.min(ut,Pe.count));const ln=ut-Ue;if(ln<0||ln===1/0)return;z.setup(j,I,Ee,Z,Ae);let jn,at=oe;if(Ae!==null&&(jn=$e.get(Ae),at=Te,at.setIndex(jn)),j.isMesh)I.wireframe===!0?(he.setLineWidth(I.wireframeLinewidth*ae()),at.setMode(1)):at.setMode(4);else if(j.isLine){let Oe=I.linewidth;Oe===void 0&&(Oe=1),he.setLineWidth(Oe*ae()),j.isLineSegments?at.setMode(1):j.isLineLoop?at.setMode(2):at.setMode(3)}else j.isPoints?at.setMode(0):j.isSprite&&at.setMode(4);if(j.isInstancedMesh)at.renderInstances(Ue,ln,j.count);else if(Z.isInstancedBufferGeometry){const Oe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ri=Math.min(Z.instanceCount,Oe);at.renderInstances(Ue,ln,ri)}else at.render(Ue,ln)},this.compile=function(w,N){function Z(I,j,we){I.transparent===!0&&I.side===ya?(I.side=Fn,I.needsUpdate=!0,Se(I,j,we),I.side=mr,I.needsUpdate=!0,Se(I,j,we),I.side=ya):Se(I,j,we)}h=C.get(w),h.init(),g.push(h),w.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(d.physicallyCorrectLights),w.traverse(function(I){const j=I.material;if(j)if(Array.isArray(j))for(let we=0;we<j.length;we++){const xe=j[we];Z(xe,w,I)}else Z(j,w,I)}),g.pop(),h=null};let $=null;function ie(w){$&&$(w)}function fe(){qe.stop()}function be(){qe.start()}const qe=new xd;qe.setAnimationLoop(ie),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(w){$=w,ue.setAnimationLoop(w),w===null?qe.stop():qe.start()},ue.addEventListener("sessionstart",fe),ue.addEventListener("sessionend",be),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0||p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,N,v),h=C.get(w,g.length),h.init(),g.push(h),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(V),Q=this.localClippingEnabled,k=S.init(this.clippingPlanes,Q,N),f=ct.get(w,m.length),f.init(),m.push(f),it(w,N,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(q,F),k===!0&&S.beginShadows();const Z=h.state.shadowsArray;if(J.render(Z,w,N),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(f,w),h.setupLights(d.physicallyCorrectLights),N.isArrayCamera){const I=N.cameras;for(let j=0,we=I.length;j<we;j++){const xe=I[j];dt(f,w,xe,xe.viewport)}}else dt(f,w,N);v!==null&&(ye.updateMultisampleRenderTarget(v),ye.updateRenderTargetMipmap(v)),w.isScene===!0&&w.onAfterRender(d,w,N),z.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function it(w,N,Z,I){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){I&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);const xe=et.update(w),Ee=w.material;Ee.visible&&f.push(w,xe,Ee,Z,ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Fe.render.frame&&(w.skeleton.update(),w.skeleton.frame=Fe.render.frame),!w.frustumCulled||K.intersectsObject(w))){I&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);const xe=et.update(w),Ee=w.material;if(Array.isArray(Ee)){const Ae=xe.groups;for(let Ve=0,Be=Ae.length;Ve<Be;Ve++){const Pe=Ae[Ve],Ue=Ee[Pe.materialIndex];Ue&&Ue.visible&&f.push(w,xe,Ue,Z,ne.z,Pe)}}else Ee.visible&&f.push(w,xe,Ee,Z,ne.z,null)}}const we=w.children;for(let xe=0,Ee=we.length;xe<Ee;xe++)it(we[xe],N,Z,I)}function dt(w,N,Z,I){const j=w.opaque,we=w.transmissive,xe=w.transparent;h.setupLightsView(Z),we.length>0&&ke(j,N,Z),I&&he.viewport(E.copy(I)),j.length>0&&ce(j,N,Z),we.length>0&&ce(we,N,Z),xe.length>0&&ce(xe,N,Z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ke(w,N,Z){const I=De.isWebGL2;P===null&&(P=new Bi(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Qs:gr,minFilter:Js,samples:I&&r===!0?4:0})),d.getDrawingBufferSize(Y),I?P.setSize(Y.x,Y.y):P.setSize(Ql(Y.x),Ql(Y.y));const j=d.getRenderTarget();d.setRenderTarget(P),d.clear();const we=d.toneMapping;d.toneMapping=ti,ce(w,N,Z),d.toneMapping=we,ye.updateMultisampleRenderTarget(P),ye.updateRenderTargetMipmap(P),d.setRenderTarget(j)}function ce(w,N,Z){const I=N.isScene===!0?N.overrideMaterial:null;for(let j=0,we=w.length;j<we;j++){const xe=w[j],Ee=xe.object,Ae=xe.geometry,Ve=I===null?xe.material:I,Be=xe.group;Ee.layers.test(Z.layers)&&se(Ee,N,Z,Ae,Ve,Be)}}function se(w,N,Z,I,j,we){w.onBeforeRender(d,N,Z,I,j,we),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(d,N,Z,I,w,we),j.transparent===!0&&j.side===ya?(j.side=Fn,j.needsUpdate=!0,d.renderBufferDirect(Z,N,I,j,w,we),j.side=mr,j.needsUpdate=!0,d.renderBufferDirect(Z,N,I,j,w,we),j.side=ya):d.renderBufferDirect(Z,N,I,j,w,we),w.onAfterRender(d,N,Z,I,j,we)}function Se(w,N,Z){N.isScene!==!0&&(N=te);const I=me.get(w),j=h.state.lights,we=h.state.shadowsArray,xe=j.state.version,Ee=Le.getParameters(w,j.state,we,N,Z),Ae=Le.getProgramCacheKey(Ee);let Ve=I.programs;I.environment=w.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(w.isMeshStandardMaterial?tt:Qe).get(w.envMap||I.environment),Ve===void 0&&(w.addEventListener("dispose",_e),Ve=new Map,I.programs=Ve);let Be=Ve.get(Ae);if(Be!==void 0){if(I.currentProgram===Be&&I.lightsStateVersion===xe)return Re(w,Ee),Be}else Ee.uniforms=Le.getUniforms(w),w.onBuild(Z,Ee,d),w.onBeforeCompile(Ee,d),Be=Le.acquireProgram(Ee,Ae),Ve.set(Ae,Be),I.uniforms=Ee.uniforms;const Pe=I.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=S.uniform),Re(w,Ee),I.needsLights=Ge(w),I.lightsStateVersion=xe,I.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ue=Be.getUniforms(),ut=eo.seqWithValue(Ue.seq,Pe);return I.currentProgram=Be,I.uniformsList=ut,Be}function Re(w,N){const Z=me.get(w);Z.outputEncoding=N.outputEncoding,Z.instancing=N.instancing,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function ze(w,N,Z,I,j){N.isScene!==!0&&(N=te),ye.resetTextureUnits();const we=N.fog,xe=I.isMeshStandardMaterial?N.environment:null,Ee=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ki,Ae=(I.isMeshStandardMaterial?tt:Qe).get(I.envMap||xe),Ve=I.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Be=!!I.normalMap&&!!Z.attributes.tangent,Pe=!!Z.morphAttributes.position,Ue=!!Z.morphAttributes.normal,ut=!!Z.morphAttributes.color,ln=I.toneMapped?d.toneMapping:ti,jn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=jn!==void 0?jn.length:0,Oe=me.get(I),ri=h.state.lights;if(k===!0&&(Q===!0||w!==y)){const cn=w===y&&I.id===b;S.setState(I,w,cn)}let Dt=!1;I.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ri.state.version||Oe.outputEncoding!==Ee||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Ae||I.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==S.numPlanes||Oe.numIntersection!==S.numIntersection)||Oe.vertexAlphas!==Ve||Oe.vertexTangents!==Be||Oe.morphTargets!==Pe||Oe.morphNormals!==Ue||Oe.morphColors!==ut||Oe.toneMapping!==ln||De.isWebGL2===!0&&Oe.morphTargetsCount!==at)&&(Dt=!0):(Dt=!0,Oe.__version=I.version);let Vi=Oe.currentProgram;Dt===!0&&(Vi=Se(I,N,j));let Cc=!1,ps=!1,wo=!1;const Wt=Vi.getUniforms(),Hi=Oe.uniforms;if(he.useProgram(Vi.program)&&(Cc=!0,ps=!0,wo=!0),I.id!==b&&(b=I.id,ps=!0),Cc||y!==w){if(Wt.setValue(H,"projectionMatrix",w.projectionMatrix),De.logarithmicDepthBuffer&&Wt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,ps=!0,wo=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const cn=Wt.map.cameraPosition;cn!==void 0&&cn.setValue(H,ne.setFromMatrixPosition(w.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Wt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||j.isSkinnedMesh)&&Wt.setValue(H,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){Wt.setOptional(H,j,"bindMatrix"),Wt.setOptional(H,j,"bindMatrixInverse");const cn=j.skeleton;cn&&De.floatVertexTextures&&(cn.boneTexture===null&&cn.computeBoneTexture(),Wt.setValue(H,"boneTexture",cn.boneTexture,ye),Wt.setValue(H,"boneTextureSize",cn.boneTextureSize))}const To=Z.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&De.isWebGL2===!0)&&ee.update(j,Z,I,Vi),(ps||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,Wt.setValue(H,"receiveShadow",j.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Hi.envMap.value=Ae,Hi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ps&&(Wt.setValue(H,"toneMappingExposure",d.toneMappingExposure),Oe.needsLights&&Mt(Hi,wo),we&&I.fog===!0&&_t.refreshFogUniforms(Hi,we),_t.refreshMaterialUniforms(Hi,I,U,L,P),eo.upload(H,Oe.uniformsList,Hi,ye)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(eo.upload(H,Oe.uniformsList,Hi,ye),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Wt.setValue(H,"center",j.center),Wt.setValue(H,"modelViewMatrix",j.modelViewMatrix),Wt.setValue(H,"normalMatrix",j.normalMatrix),Wt.setValue(H,"modelMatrix",j.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const cn=I.uniformsGroups;for(let Eo=0,Ad=cn.length;Eo<Ad;Eo++)if(De.isWebGL2){const Pc=cn[Eo];le.update(Pc,Vi),le.bind(Pc,Vi)}}return Vi}function Mt(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Ge(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(w,N,Z){me.get(w.texture).__webglTexture=N,me.get(w.depthTexture).__webglTexture=Z;const I=me.get(w);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=Z===void 0,I.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){const Z=me.get(w);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,Z=0){v=w,_=N,M=Z;let I=!0,j=null,we=!1,xe=!1;if(w){const Ae=me.get(w);Ae.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),I=!1):Ae.__webglFramebuffer===void 0?ye.setupRenderTarget(w):Ae.__hasExternalTextures&&ye.rebindTextures(w,me.get(w.texture).__webglTexture,me.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);const Be=me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Be[N],we=!0):De.isWebGL2&&w.samples>0&&ye.useMultisampledRTT(w)===!1?j=me.get(w).__webglMultisampledFramebuffer:j=Be,E.copy(w.viewport),A.copy(w.scissor),x=w.scissorTest}else E.copy(R).multiplyScalar(U).floor(),A.copy(B).multiplyScalar(U).floor(),x=W;if(he.bindFramebuffer(36160,j)&&De.drawBuffers&&I&&he.drawBuffers(w,j),he.viewport(E),he.scissor(A),he.setScissorTest(x),we){const Ae=me.get(w.texture);H.framebufferTexture2D(36160,36064,34069+N,Ae.__webglTexture,Z)}else if(xe){const Ae=me.get(w.texture),Ve=N||0;H.framebufferTextureLayer(36160,36064,Ae.__webglTexture,Z||0,Ve)}b=-1},this.readRenderTargetPixels=function(w,N,Z,I,j,we,xe){if(!(w&&w.isWebGLRenderTarget))return;let Ee=me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){he.bindFramebuffer(36160,Ee);try{const Ae=w.texture,Ve=Ae.format,Be=Ae.type;if(Ve!==vn&&D.convert(Ve)!==H.getParameter(35739))return;const Pe=Be===Qs&&(pe.has("EXT_color_buffer_half_float")||De.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Be!==gr&&D.convert(Be)!==H.getParameter(35738)&&!(Be===gi&&(De.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Pe)return;N>=0&&N<=w.width-I&&Z>=0&&Z<=w.height-j&&H.readPixels(N,Z,I,j,D.convert(Ve),D.convert(Be),we)}finally{const Ae=v!==null?me.get(v).__webglFramebuffer:null;he.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(w,N,Z=0){const I=Math.pow(2,-Z),j=Math.floor(N.image.width*I),we=Math.floor(N.image.height*I);ye.setTexture2D(N,0),H.copyTexSubImage2D(3553,Z,0,0,w.x,w.y,j,we),he.unbindTexture()},this.copyTextureToTexture=function(w,N,Z,I=0){const j=N.image.width,we=N.image.height,xe=D.convert(Z.format),Ee=D.convert(Z.type);ye.setTexture2D(Z,0),H.pixelStorei(37440,Z.flipY),H.pixelStorei(37441,Z.premultiplyAlpha),H.pixelStorei(3317,Z.unpackAlignment),N.isDataTexture?H.texSubImage2D(3553,I,w.x,w.y,j,we,xe,Ee,N.image.data):N.isCompressedTexture?H.compressedTexSubImage2D(3553,I,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,xe,N.mipmaps[0].data):H.texSubImage2D(3553,I,w.x,w.y,xe,Ee,N.image),I===0&&Z.generateMipmaps&&H.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(w,N,Z,I,j=0){if(d.isWebGL1Renderer)return;const we=w.max.x-w.min.x+1,xe=w.max.y-w.min.y+1,Ee=w.max.z-w.min.z+1,Ae=D.convert(I.format),Ve=D.convert(I.type);let Be;if(I.isData3DTexture)ye.setTexture3D(I,0),Be=32879;else if(I.isDataArrayTexture)ye.setTexture2DArray(I,0),Be=35866;else return;H.pixelStorei(37440,I.flipY),H.pixelStorei(37441,I.premultiplyAlpha),H.pixelStorei(3317,I.unpackAlignment);const Pe=H.getParameter(3314),Ue=H.getParameter(32878),ut=H.getParameter(3316),ln=H.getParameter(3315),jn=H.getParameter(32877),at=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;H.pixelStorei(3314,at.width),H.pixelStorei(32878,at.height),H.pixelStorei(3316,w.min.x),H.pixelStorei(3315,w.min.y),H.pixelStorei(32877,w.min.z),Z.isDataTexture||Z.isData3DTexture?H.texSubImage3D(Be,j,N.x,N.y,N.z,we,xe,Ee,Ae,Ve,at.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,j,N.x,N.y,N.z,we,xe,Ee,Ae,at.data):H.texSubImage3D(Be,j,N.x,N.y,N.z,we,xe,Ee,Ae,Ve,at),H.pixelStorei(3314,Pe),H.pixelStorei(32878,Ue),H.pixelStorei(3316,ut),H.pixelStorei(3315,ln),H.pixelStorei(32877,jn),j===0&&I.generateMipmaps&&H.generateMipmap(Be),he.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ye.setTextureCube(w,0):w.isData3DTexture?ye.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ye.setTexture2DArray(w,0):ye.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){_=0,M=0,v=null,he.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ny extends Sd{}ny.prototype.isWebGL1Renderer=!0;class wd extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return this.matrixWorldAutoUpdate}set autoUpdate(e){this.matrixWorldAutoUpdate=e}}class iy extends Jt{constructor(e=null,t=1,n=1,i,r,a,s,l,c=yt,u=yt,f,h){super(null,a,s,l,c,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po extends Yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yh=new gt,Mh=new gt,Ga=[],ry=new gt,Ts=new Xn;class sy extends Xn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,ry)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,yh),Mh.multiplyMatrices(n,yh),Ts.matrixWorld=Mh,Ts.raycast(e,Ga);for(let a=0,s=Ga.length;a<s;a++){const l=Ga[a];l.instanceId=r,l.object=this,t.push(l)}Ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ac extends aa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bh=new G,Sh=new G,wh=new gt,Ml=new ud,Va=new Mo;class ay extends Qt{constructor(e=new ii,t=new Ac){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)bh.fromBufferAttribute(t,i-1),Sh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bh.distanceTo(Sh);e.setAttribute("lineDistance",new bn(n,1))}return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;wh.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(wh);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new G,u=new G,f=new G,h=new G,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let v=_,b=M-1;v<b;v+=m){const y=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,E),Ml.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(h);x<e.near||x>e.far||t.push({distance:x,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let v=_,b=M-1;v<b;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Ml.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const Th=new G,Eh=new G;class Td extends ay{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Th.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Th.distanceTo(Eh);e.setAttribute("lineDistance",new bn(n,1))}return this}}const Ah={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class oy{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const ly=new oy;class Ed{constructor(e){this.manager=e!==void 0?e:ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class cy extends Ed{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ah.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=ta("img");function l(){u(),Ah.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class uy extends Ed{constructor(e){super(e)}load(e,t,n,i){const r=new Jt,a=new cy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ch{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hy extends Td{constructor(e=10,t=10,n=4473924,i=8947848){n=new nt(n),i=new nt(i);const r=t/2,a=e/t,s=e/2,l=[],c=[];for(let h=0,m=0,g=-s;h<=t;h++,g+=a){l.push(-s,0,g,s,0,g),l.push(g,0,-s,g,0,s);const d=h===r?n:i;d.toArray(c,m),m+=3,d.toArray(c,m),m+=3,d.toArray(c,m),m+=3,d.toArray(c,m),m+=3}const u=new ii;u.setAttribute("position",new bn(l,3)),u.setAttribute("color",new bn(c,3));const f=new Ac({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fy extends Td{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ii;i.setAttribute("position",new bn(t,3)),i.setAttribute("color",new bn(n,3));const r=new Ac({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new nt,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=wc));const Ph={type:"change"},bl={type:"start"},Dh={type:"end"};class dy extends vr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",ct),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ph),n.update(),r=i.NONE},this.update=function(){const D=new G,z=new _r().setFromUnitVectors(e.up,new G(0,1,0)),le=z.clone().invert(),ge=new G,ue=new _r,Me=2*Math.PI;return function(){const Ne=n.object.position;D.copy(Ne).sub(n.target),D.applyQuaternion(z),s.setFromVector3(D),n.autoRotate&&r===i.NONE&&T(A()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let _e=n.minAzimuthAngle,We=n.maxAzimuthAngle;return isFinite(_e)&&isFinite(We)&&(_e<-Math.PI?_e+=Me:_e>Math.PI&&(_e-=Me),We<-Math.PI?We+=Me:We>Math.PI&&(We-=Me),_e<=We?s.theta=Math.max(_e,Math.min(We,s.theta)):s.theta=s.theta>(_e+We)/2?Math.max(_e,s.theta):Math.min(We,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(s),D.applyQuaternion(le),Ne.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ge.distanceToSquared(n.object.position)>a||8*(1-ue.dot(n.object.quaternion))>a?(n.dispatchEvent(Ph),ge.copy(n.object.position),ue.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",Qe),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",_t),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",$e),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ct)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Ch,l=new Ch;let c=1;const u=new G;let f=!1;const h=new je,m=new je,g=new je,d=new je,p=new je,_=new je,M=new je,v=new je,b=new je,y=[],E={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function T(D){l.theta-=D}function L(D){l.phi-=D}const U=function(){const D=new G;return function(le,ge){D.setFromMatrixColumn(ge,0),D.multiplyScalar(-le),u.add(D)}}(),q=function(){const D=new G;return function(le,ge){n.screenSpacePanning===!0?D.setFromMatrixColumn(ge,1):(D.setFromMatrixColumn(ge,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(le),u.add(D)}}(),F=function(){const D=new G;return function(le,ge){const ue=n.domElement;if(n.object.isPerspectiveCamera){const Me=n.object.position;D.copy(Me).sub(n.target);let ve=D.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),U(2*le*ve/ue.clientHeight,n.object.matrix),q(2*ge*ve/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(le*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),q(ge*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):n.enablePan=!1}}();function R(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),f=!0):n.enableZoom=!1}function B(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),f=!0):n.enableZoom=!1}function W(D){h.set(D.clientX,D.clientY)}function K(D){M.set(D.clientX,D.clientY)}function k(D){d.set(D.clientX,D.clientY)}function Q(D){m.set(D.clientX,D.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const z=n.domElement;T(2*Math.PI*g.x/z.clientHeight),L(2*Math.PI*g.y/z.clientHeight),h.copy(m),n.update()}function P(D){v.set(D.clientX,D.clientY),b.subVectors(v,M),b.y>0?R(x()):b.y<0&&B(x()),M.copy(v),n.update()}function V(D){p.set(D.clientX,D.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),F(_.x,_.y),d.copy(p),n.update()}function Y(D){D.deltaY<0?B(x()):D.deltaY>0&&R(x()),n.update()}function ne(D){let z=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),z=!0;break}z&&(D.preventDefault(),n.update())}function te(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const D=.5*(y[0].pageX+y[1].pageX),z=.5*(y[0].pageY+y[1].pageY);h.set(D,z)}}function ae(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const D=.5*(y[0].pageX+y[1].pageX),z=.5*(y[0].pageY+y[1].pageY);d.set(D,z)}}function H(){const D=y[0].pageX-y[1].pageX,z=y[0].pageY-y[1].pageY,le=Math.sqrt(D*D+z*z);M.set(0,le)}function Ie(){n.enableZoom&&H(),n.enablePan&&ae()}function pe(){n.enableZoom&&H(),n.enableRotate&&te()}function De(D){if(y.length==1)m.set(D.pageX,D.pageY);else{const le=Te(D),ge=.5*(D.pageX+le.x),ue=.5*(D.pageY+le.y);m.set(ge,ue)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const z=n.domElement;T(2*Math.PI*g.x/z.clientHeight),L(2*Math.PI*g.y/z.clientHeight),h.copy(m)}function he(D){if(y.length===1)p.set(D.pageX,D.pageY);else{const z=Te(D),le=.5*(D.pageX+z.x),ge=.5*(D.pageY+z.y);p.set(le,ge)}_.subVectors(p,d).multiplyScalar(n.panSpeed),F(_.x,_.y),d.copy(p)}function Fe(D){const z=Te(D),le=D.pageX-z.x,ge=D.pageY-z.y,ue=Math.sqrt(le*le+ge*ge);v.set(0,ue),b.set(0,Math.pow(v.y/M.y,n.zoomSpeed)),R(b.y),M.copy(v)}function me(D){n.enableZoom&&Fe(D),n.enablePan&&he(D)}function ye(D){n.enableZoom&&Fe(D),n.enableRotate&&De(D)}function Qe(D){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",tt),n.domElement.addEventListener("pointerup",$e)),re(D),D.pointerType==="touch"?C(D):et(D))}function tt(D){n.enabled!==!1&&(D.pointerType==="touch"?S(D):Le(D))}function $e(D){ee(D),y.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",$e)),n.dispatchEvent(Dh),r=i.NONE}function X(D){ee(D)}function et(D){let z;switch(D.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Sr.DOLLY:if(n.enableZoom===!1)return;K(D),r=i.DOLLY;break;case Sr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;k(D),r=i.PAN}else{if(n.enableRotate===!1)return;W(D),r=i.ROTATE}break;case Sr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;W(D),r=i.ROTATE}else{if(n.enablePan===!1)return;k(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(bl)}function Le(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(D);break;case i.DOLLY:if(n.enableZoom===!1)return;P(D);break;case i.PAN:if(n.enablePan===!1)return;V(D);break}}function _t(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(bl),Y(D),n.dispatchEvent(Dh))}function ct(D){n.enabled===!1||n.enablePan===!1||ne(D)}function C(D){switch(oe(D),y.length){case 1:switch(n.touches.ONE){case wr.ROTATE:if(n.enableRotate===!1)return;te(),r=i.TOUCH_ROTATE;break;case wr.PAN:if(n.enablePan===!1)return;ae(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case wr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(),r=i.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(bl)}function S(D){switch(oe(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;me(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(D),n.update();break;default:r=i.NONE}}function J(D){n.enabled!==!1&&D.preventDefault()}function re(D){y.push(D)}function ee(D){delete E[D.pointerId];for(let z=0;z<y.length;z++)if(y[z].pointerId==D.pointerId){y.splice(z,1);return}}function oe(D){let z=E[D.pointerId];z===void 0&&(z=new je,E[D.pointerId]=z),z.set(D.pageX,D.pageY)}function Te(D){const z=D.pointerId===y[0].pointerId?y[1]:y[0];return E[z.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",Qe),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",_t,{passive:!1}),this.update()}}class py{constructor(e){this.controls=new dy(e.camera,e.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.2,GUI!=null&&this.controls!=null&&this.addGui()}addGui(){const e=GUI.addFolder("controls");e.close(),e.add(this.controls,"enabled").onChange(t=>{this.controls.enabled=t})}disableDamping(){this.controls.enableDamping=!1}update(){this.controls!=null&&this.controls.update()}}var Ws=function(){var o=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++o%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";o=u}var i=(performance||Date).now(),r=i,a=0,s=t(new Ws.Panel("FPS","#0ff","#002")),l=t(new Ws.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ws.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(l.update(u-i,200),u>=r+1e3&&(s.update(a*1e3/(u-r),100),r=u,a=0,c)){var f=performance.memory;c.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:e,setMode:n}};Ws.Panel=function(o,e,t){var n=1/0,i=0,r=Math.round,a=r(window.devicePixelRatio||1),s=80*a,l=48*a,c=3*a,u=2*a,f=3*a,h=15*a,m=74*a,g=30*a,d=document.createElement("canvas");d.width=s,d.height=l,d.style.cssText="width:80px;height:48px";var p=d.getContext("2d");return p.font="bold "+9*a+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,s,l),p.fillStyle=e,p.fillText(o,c,u),p.fillRect(f,h,m,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(f,h,m,g),{dom:d,update:function(_,M){n=Math.min(n,_),i=Math.max(i,_),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,s,h),p.fillStyle=e,p.fillText(r(_)+" "+o+" ("+r(n)+"-"+r(i)+")",c,u),p.drawImage(d,f+a,h,m-a,g,f,h,m-a,g),p.fillRect(f+m-a,h,a,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(f+m-a,h,a,r((1-_/M)*g))}}};const my=Ws;class gy{constructor(e=document.body){if(this.body=e,this.stats=null,MODE){this.stats=new my;const t=this.stats.domElement,n=t.style;n.position="fixed",n.top="0px",n.left="0px",n.right="initial",n.bottom="initial",n.zIndex="9999",this.body.appendChild(t)}}raf(){this.stats!=null&&this.stats.update()}}class _y{constructor(){this.gui=null,window.GUI=null}toOpen(){window.GUI!=null&&this.gui.open()}toClose(){window.GUI!=null&&this.gui.close()}}class xy{constructor(e,t){this.params=e,this.bool=t,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.stats=null,this.setRenderer(),this.setScene(),this.setCamera()}updateRenderer(){this.renderer!=null&&(this.renderer.setSize(this.params.w,this.params.h),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)))}setRenderer(){this.renderer=new Sd({antialias:!0,alpha:!0}),this.updateRenderer();const e=document.getElementById("world");e&&e.appendChild(this.renderer.domElement)}setScene(){this.scene=new wd,this.scene.background=new nt("#ebfbff"),GUI!=null&&GUI.addFolder("scene").addColor(this.scene,"background").name("background").onChange(t=>{this.scene.background=new nt(t)}),MODE&&(this.scene.add(new hy(1e3,100)),this.scene.add(new fy(100)))}updateCamera(){this.camera!=null&&(this.camera.lookAt(new G(0,0,0)),this.camera.aspect=this.params.w/this.params.h,this.camera.position.x=0,this.camera.position.y=0,this.camera.position.z=16,this.camera.far=this.configCamera.far,this.camera.updateProjectionMatrix())}setCamera(){this.configCamera={fov:60,aspect:this.params.w/this.params.h,near:.01,far:100},this.camera=new Dn(this.configCamera.fov,this.configCamera.aspect,this.configCamera.near,this.configCamera.far),this.updateCamera()}raf(){this.renderer!=null&&this.renderer.render(this.scene,this.camera)}resize(e){this.bool.isMatchMediaWidth=e.isMatchMediaWidth,this.params.w=e.w,this.params.h=e.h,this.params.aspect=e.aspect,this.params.shorter=e.shorter,this.params.longer=e.longer,this.updateRenderer(),this.updateCamera()}}class vy{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let i=gi;const r=new wd,a=new Tc;a.position.z=1;const s={passThruTexture:{value:null}},l=f(m(),s),c=new Xn(new bo(2,2),l);r.add(c),this.setDataType=function(g){return i=g,this},this.addVariable=function(g,d,p){const _=this.createShaderMaterial(d),M={name:g,initialValueTexture:p,material:_,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:yt,magFilter:yt};return this.variables.push(M),M},this.setVariableDependencies=function(g,d){g.dependencies=d},this.init=function(){if(n.capabilities.isWebGL2===!1&&n.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let g=0;g<this.variables.length;g++){const d=this.variables[g];d.renderTargets[0]=this.createRenderTarget(e,t,d.wrapS,d.wrapT,d.minFilter,d.magFilter),d.renderTargets[1]=this.createRenderTarget(e,t,d.wrapS,d.wrapT,d.minFilter,d.magFilter),this.renderTexture(d.initialValueTexture,d.renderTargets[0]),this.renderTexture(d.initialValueTexture,d.renderTargets[1]);const p=d.material,_=p.uniforms;if(d.dependencies!==null)for(let M=0;M<d.dependencies.length;M++){const v=d.dependencies[M];if(v.name!==d.name){let b=!1;for(let y=0;y<this.variables.length;y++)if(v.name===this.variables[y].name){b=!0;break}if(!b)return"Variable dependency not found. Variable="+d.name+", dependency="+v.name}_[v.name]={value:null},p.fragmentShader=`
uniform sampler2D `+v.name+`;
`+p.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const g=this.currentTextureIndex,d=this.currentTextureIndex===0?1:0;for(let p=0,_=this.variables.length;p<_;p++){const M=this.variables[p];if(M.dependencies!==null){const v=M.material.uniforms;for(let b=0,y=M.dependencies.length;b<y;b++){const E=M.dependencies[b];v[E.name].value=E.renderTargets[g].texture}}this.doRenderTarget(M.material,M.renderTargets[d])}this.currentTextureIndex=d},this.getCurrentRenderTarget=function(g){return g.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(g){return g.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){var d;c.geometry.dispose(),c.material.dispose();const g=this.variables;for(let p=0;p<g.length;p++){const _=g[p];(d=_.initialValueTexture)==null||d.dispose();const M=_.renderTargets;for(let v=0;v<M.length;v++)M[v].dispose()}};function u(g){g.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=u;function f(g,d){d=d||{};const p=new vi({uniforms:d,vertexShader:h(),fragmentShader:g});return u(p),p}this.createShaderMaterial=f,this.createRenderTarget=function(g,d,p,_,M,v){return g=g||e,d=d||t,p=p||xn,_=_||xn,M=M||yt,v=v||yt,new Bi(g,d,{wrapS:p,wrapT:_,minFilter:M,magFilter:v,format:vn,type:i,depthBuffer:!1})},this.createTexture=function(){const g=new Float32Array(e*t*4),d=new iy(g,e,t,vn,gi);return d.needsUpdate=!0,d},this.renderTexture=function(g,d){s.passThruTexture.value=g,this.doRenderTarget(l,d),s.passThruTexture.value=null},this.doRenderTarget=function(g,d){const p=n.getRenderTarget(),_=n.xr.enabled,M=n.shadowMap.autoUpdate,v=n.outputEncoding,b=n.toneMapping;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,n.outputEncoding=ki,n.toneMapping=ti,c.material=g,n.setRenderTarget(d),n.render(r,a),c.material=l,n.xr.enabled=_,n.shadowMap.autoUpdate=M,n.outputEncoding=v,n.toneMapping=b,n.setRenderTarget(p)};function h(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function m(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}var yy=`uniform float uTime;
uniform float uProgress;
uniform sampler2D uInitPositionTexture;

const float SPEED = 0.1;

vec3 mod289(vec3 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}

vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}

vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}

vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  
  
  
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  
  
  float n_ = 0.142857142857; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ ); 

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  
  
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}
vec3 snoiseVec3( vec3 x ){
  float s  = snoise(vec3( x ));
  float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
  float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
  vec3 c = vec3( s , s1 , s2 );
  return c;
}

vec3 curlNoise( vec3 p ){
  const float e = .1;
  vec3 dx = vec3( e   , 0.0 , 0.0 );
  vec3 dy = vec3( 0.0 , e   , 0.0 );
  vec3 dz = vec3( 0.0 , 0.0 , e   );

  vec3 p_x0 = snoiseVec3( p - dx );
  vec3 p_x1 = snoiseVec3( p + dx );
  vec3 p_y0 = snoiseVec3( p - dy );
  vec3 p_y1 = snoiseVec3( p + dy );
  vec3 p_z0 = snoiseVec3( p - dz );
  vec3 p_z1 = snoiseVec3( p + dz );

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / ( 2.0 * e );
  return normalize( vec3( x , y , z ) * divisor );
}

void main()	{
	vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 posTexture = texture2D(positionTexture, uv);
	vec3 pos = posTexture.xyz;

	float life = posTexture.w;
  life += 0.00225;
  if(life > 1.0) {
		vec4 initPosTexture = texture2D(uInitPositionTexture, uv);
		pos = initPosTexture.xyz;
		life = 0.0;
  };

  pos += curlNoise(pos * (0.1)) * SPEED;

	gl_FragColor = vec4(pos, life );
}`;class My{constructor(e,t,n){this.renderer=e,this.w=t,this.h=n,this.init()}init(){this.gpuCompute=new vy(this.w,this.h,this.renderer);const e=this.gpuCompute.createTexture(),t=e.image.data,n=(i,r)=>Math.random()*(r-i)+i;for(let i=0;i<t.length;i+=4){const r=Math.random()*2*Math.PI,a=Math.random()*Math.PI,s=n(3,5),l=s*Math.cos(r)*Math.cos(a),c=s*Math.sin(r),u=s*Math.cos(r)*Math.sin(a),f=n(0,1);t[i+0]=l,t[i+1]=c,t[i+2]=u,t[i+3]=f}this.position=this.gpuCompute.addVariable("positionTexture",yy,e),this.gpuCompute.setVariableDependencies(this.position,[this.position]),this.position.material.uniforms.uInitPositionTexture={value:e.clone()},this.position.material.uniforms.uTime={value:0},this.position.material.uniforms.uProgress={value:0},this.gpuCompute.init()}raf(e){this.gpuCompute.compute(),this.position.material.uniforms.uTime.value=e}}function by(o){const e=new uy().load(o);return e.encoding=ot,e}var Sy=`varying vec2 vUv;
varying vec2 vRand2d;

uniform sampler2D uMapTexture;

uniform vec3 uFogColor;
varying float vFogFactor;

const vec3 WHITE = vec3(1.0);

void main() {
	vec4 texture = texture2D(uMapTexture, vUv);
	vec3 uvColor = vec3(vUv, 1.0);
	vec3 mixColor = mix(uvColor, WHITE, .9);
	vec3 color = texture.rgb + mixColor;
	color.r = color.r - vRand2d.x;
	color.g = color.g - vRand2d.y;

	color = mix(uFogColor, color, vFogFactor);

	gl_FragColor = vec4(color, 1.0);
}`,wy=`attribute vec2 aUv;
attribute vec2 aRand2d;

varying vec2 vUv;
varying vec2 vRand2d;

uniform float uTime;
uniform float uProgress;
uniform float uScale;
uniform vec3 uCubeScale;
uniform sampler2D uPositionTexture;

varying float vFogFactor;
uniform vec3 uEyePosition;
uniform float uFogStart;
uniform float uFogEnd;

const float fogNear = 0.1;
const float fogFar  = 50.0;
const float fogLinerDepth = 1.0 / (fogFar - fogNear);

const float ENHANCE = 10.;

vec3 rotateX(vec3 v, float angle){
  float s = sin(angle);
  float c = cos(angle);
  return vec3(
    v.x,
    c * v.y + -s * v.z,
    s * v.y + c * v.z
  );
}

vec3 rotateY(vec3 v, float angle){
  float s = sin(angle);
  float c = cos(angle);
  return vec3(
    c * v.x + s * v.z,
    v.y,
    -s * v.x + c * v.z
  );
}

vec3 rotateZ(vec3 v, float angle){
  float s = sin(angle);
  float c = cos(angle);
  return vec3(
    c * v.x + -s * v.y,
    s * v.x + c * v.y,
    v.z
  );
}

void main() {
	vUv = uv;
	vRand2d = aRand2d;

	vec4 currentTexture = texture2D(uPositionTexture, aUv);
	

	float alpha = currentTexture.a;
	float alphaEnhance = alpha * ENHANCE;
	float scale = clamp(alphaEnhance - 1., 0.0, 1.0);

	float csx = uCubeScale.x;
	float csy = uCubeScale.y;
	float csz = uCubeScale.z;

	float delay = vRand2d.x * 10.;
	float duration = (delay * -1.) + (delay * uScale) + uScale;
	float progress = clamp(duration, 0.0, 1.0);

	vec3 pos = position;
	pos = rotateX(pos, uTime * -1.);
  pos = rotateY(pos, uTime);
  pos = rotateZ(pos, uTime * -1.);
	pos *= vec3(
		(csx + (alpha / csx)) * progress,
		(csy + (alpha / csy)) * progress,
		(csz + (alpha / csz)) * progress
	);
	pos *= clamp(1.0 - currentTexture.w, 0.0, 1.0);

	vec4 instanceMatrixPosition = instanceMatrix * vec4(pos * scale, 1.0);
	vec3 lastPosition = currentTexture.xyz + instanceMatrixPosition.xyz;
	vec4 mvPosition = modelViewMatrix * vec4(lastPosition, 1.0);

  float fogLinerPos = length(uEyePosition - mvPosition.xyz) * fogLinerDepth;
  vFogFactor = clamp((uFogEnd - fogLinerPos) / (uFogEnd - uFogStart), 0.0, 1.0);

	gl_Position = projectionMatrix * mvPosition;
}`;class Ty{constructor(e,t,n,i){this.body=e,this.stage=i,this.params=t,this.bool=n,this.simulation=null,this.mesh=null,this.config={box:{x:.75,y:.75,z:.75},size:{w:16,h:16},amount:0},this.config.amount=this.config.size.w*this.config.size.h,this.isOnce=!1,this.init()}init(){const e=(f,h)=>Math.random()*(h-f)+f,t=this.config.size.w,n=this.config.size.h,i=this.config.amount;this.simulation=new My(this.stage.renderer,t,n);const r=[],a=[];for(let f=0;f<t;f++)for(let h=0;h<n;h++)r.push(f/t,h/n),a.push(e(0,1),e(0,1));const s=new fs(1,1,1);s.setAttribute("aUv",new po(new Float32Array(r),2)),s.setAttribute("aRand2d",new po(new Float32Array(a),2));const l=new vi({fragmentShader:Sy,vertexShader:wy,uniforms:{uTime:{type:"f",value:0},uProgress:{type:"f",value:0},uCubeScale:{type:"v3",value:new G(this.config.box.x,this.config.box.y,this.config.box.z)},uPositionTexture:{type:"t",value:null},uMapTexture:{type:"t",value:by("assets/img/texture/map.webp")},uScale:{type:"f",value:0},uEyePosition:{type:"v3",value:this.stage.camera.position},uFogStart:{type:"f",value:.5},uFogEnd:{type:"f",value:1},uFogColor:{type:"v3",value:new nt(this.stage.scene.background)}},transparent:!0,opacity:1,side:vo,blending:lr});this.mesh=new sy(s,l,i);const c=new gt,u=new Qt;for(let f=0;f<i;f++)u.rotation.setFromVector3(new G().random().multiplyScalar(Math.PI)),u.updateMatrix(),c.setPosition(0,0,0),this.mesh.setMatrixAt(f,u.matrix);if(this.stage.scene.add(this.mesh),GUI!=null){const f={isCheckBlending:!1},h=GUI.addFolder("InstancedMesh");h.add(f,"isCheckBlending").name("MultiplyBlending").onChange(m=>{this.mesh.material.blending=m?4:1}),h.add(this.mesh.material.uniforms.uProgress,"value",0,1).name("uProgress").onChange(m=>{this.mesh.material.uniforms.uProgress.value=m})}}resize(e){}raf(e){this.mesh!=null&&this.simulation!=null&&(this.simulation.raf(e),this.mesh.material.uniforms.uTime.value=e,this.mesh.material.uniforms.uPositionTexture.value=this.simulation.gpuCompute.getCurrentRenderTarget(this.simulation.position).texture,this.isOnce||(this.isOnce=!0,this.body.classList.add("is-enter"),GSAP.to(this.mesh.material.uniforms.uScale,{duration:6,value:1,ease:"power4.out"})))}}class Ey{constructor(e,t,n){this.body=e,this.params=t,this.bool=n,this.isInit=!1,this.gui=null,this.stats=null,this.stage=null,this.mesh=null,this.controls=null,this.setModule()}setModule(){this.gui=new _y,this.stats=new gy(this.body),this.stage=new xy(this.params,this.bool),this.mesh=new Ty(this.body,this.params,this.bool,this.stage),this.controls=new py(this.stage)}raf(e){this.mesh!=null&&this.mesh.raf(e),this.stage!=null&&this.stage.raf(),this.controls!=null&&this.controls.update(),this.stats!=null&&this.stats.raf()}resize(e){this.bool.isMatchMediaWidth=e.isMatchMediaWidth,this.params.w=e.w,this.params.h=e.h,this.params.aspect=e.aspect,this.params.shorter=e.shorter,this.params.longer=e.longer,this.mesh!=null&&this.mesh.resize(e),this.stage!=null&&this.stage.resize(e)}init(){}}_c.registerPlugin(Je);window.MODE=!1;window.GSAP=_c;window.G=new rm;window.addEventListener("DOMContentLoaded",o=>{const e=document.body,t=new sm(e),n={w:window.innerWidth,h:window.innerHeight,beforeWidth:window.innerWidth,longer:0,shorter:0,aspect:0};n.aspect=n.w/n.h,n.longer=n.w>n.h?n.w:n.h,n.shorter=n.w<n.h?n.w:n.h;const i={isMatchMediaWidth:window.matchMedia("(max-width: 768px)").matches,isMatchMediaHover:window.matchMedia("(hover: hover)").matches,isPc:t.data.device==="pc",isIphone:t.data.iphone==="iphone",isDeve:MODE};cu(n.w,n.h);const r=new Ey(e,n,i),a=()=>{const u=performance.now()/1e3;r.raf(u)},s=()=>{i.isMatchMediaWidth=window.matchMedia("(max-width: 768px)").matches,n.w=window.innerWidth,n.h=window.innerHeight,n.aspect=n.w/n.h,n.longer=n.w>n.h?n.w:n.h,n.shorter=n.w<n.h?n.w:n.h;const u={isMatchMediaWidth:i.isMatchMediaWidth,w:n.w,h:n.h,aspect:n.aspect,longer:n.longer,shorter:n.shorter};cu(n.w,n.h),r.resize(u)};let l=null;const c=()=>{window.orientation!=0&&n.w<n.h&&(clearTimeout(l),l=setTimeout(()=>{window.location.reload()},300))};r.init(),GSAP.ticker.add(a),GSAP.ticker.fps(30),s(),window.addEventListener("resize",s,{passive:!0}),i.isPc||window.addEventListener("orientationchange",c)});
