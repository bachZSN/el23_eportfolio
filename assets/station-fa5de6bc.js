class L{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const j="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class te{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(j+"/configuration.html"+e)}async function ne(t,e){const n=await WA.room.getTiledMap(),r=new Map;return X(n.layers,r,t,e),r}function X(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(n&&o.name!==n||r&&!r.includes(s.name))continue;e.set(s.name,new te(s))}}else o.type==="group"&&X(o.layers,e,n,r)}let R;async function E(){return R===void 0&&(R=re()),R}async function re(){return oe(await WA.room.getTiledMap())}function oe(t){const e=new Map;return Y(t.layers,"",e),e}function Y(t,e,n){for(const r of t)r.type==="group"?Y(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function se(){const t=await E(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function ae(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)s[i+a*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),n=Math.min(n,a),r=Math.max(r,a));return{top:n,left:e,right:o+1,bottom:r+1}}function Z(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const a=ae(s);a.left<e&&(e=a.left),a.top<n&&(n=a.top),a.right>o&&(o=a.right),a.bottom>r&&(r=a.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ie=Object.prototype.toString,W=Array.isArray||function(e){return ie.call(e)==="[object Array]"};function I(t){return typeof t=="function"}function ue(t){return W(t)?"array":typeof t}function V(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(t,e){return t!=null&&typeof t=="object"&&e in t}function le(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var ce=RegExp.prototype.test;function fe(t,e){return ce.call(t,e)}var pe=/\S/;function ge(t){return!fe(pe,t)}var he={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function de(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return he[n]})}var ye=/\s*/,me=/\s+/,D=/\s*=/,ve=/\s*\}/,be=/#|\^|\/|>|\{|&|=|!/;function we(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],a=!1,i=!1,u="",c=0;function f(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var d,m,T;function S(b){if(typeof b=="string"&&(b=b.split(me,2)),!W(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(V(b[0])+"\\s*"),m=new RegExp("\\s*"+V(b[1])),T=new RegExp("\\s*"+V("}"+b[1]))}S(e||h.tags);for(var l=new M(t),v,g,y,C,k,w;!l.eos();){if(v=l.pos,y=l.scanUntil(d),y)for(var B=0,ee=y.length;B<ee;++B)C=y.charAt(B),ge(C)?(s.push(o.length),u+=C):(i=!0,n=!0,u+=" "),o.push(["text",C,v,v+1]),v+=1,C===`
`&&(f(),u="",c=0,n=!1);if(!l.scan(d))break;if(a=!0,g=l.scan(be)||"name",l.scan(ye),g==="="?(y=l.scanUntil(D),l.scan(D),l.scanUntil(m)):g==="{"?(y=l.scanUntil(T),l.scan(ve),l.scanUntil(m),g="&"):y=l.scanUntil(m),!l.scan(m))throw new Error("Unclosed tag at "+l.pos);if(g==">"?k=[g,y,v,l.pos,u,c,n]:k=[g,y,v,l.pos],c++,o.push(k),g==="#"||g==="^")r.push(k);else if(g==="/"){if(w=r.pop(),!w)throw new Error('Unopened section "'+y+'" at '+v);if(w[1]!==y)throw new Error('Unclosed section "'+w[1]+'" at '+v)}else g==="name"||g==="{"||g==="&"?i=!0:g==="="&&S(y)}if(f(),w=r.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+l.pos);return We(Ae(o))}function Ae(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function We(t){for(var e=[],n=e,r=[],o,s,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function M(t){this.string=t,this.tail=t,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function A(t,e){this.view=t,this.cache={".":this.view},this.parent=e}A.prototype.push=function(e){return new A(e,this)};A.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=_(s,a[i])||le(s,a[i])),s=s[a[i++]];else s=o.view[e],u=_(o.view,e);if(u){r=s;break}o=o.parent}n[e]=r}return I(r)&&(r=r.call(this.view)),r};function p(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};p.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||h.tags).join(":"),s=typeof r<"u",a=s?r.get(o):void 0;return a==null&&(a=we(e,n),s&&r.set(o,a)),a};p.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=n instanceof A?n:new A(n,void 0);return this.renderTokens(a,i,r,e,o)};p.prototype.renderTokens=function(e,n,r,o,s){for(var a="",i,u,c,f=0,d=e.length;f<d;++f)c=void 0,i=e[f],u=i[0],u==="#"?c=this.renderSection(i,n,r,o,s):u==="^"?c=this.renderInverted(i,n,r,o,s):u===">"?c=this.renderPartial(i,n,r,s):u==="&"?c=this.unescapedValue(i,n):u==="name"?c=this.escapedValue(i,n,s):u==="text"&&(c=this.rawValue(i)),c!==void 0&&(a+=c);return a};p.prototype.renderSection=function(e,n,r,o,s){var a=this,i="",u=n.lookup(e[1]);function c(m){return a.render(m,n,r,s)}if(u){if(W(u))for(var f=0,d=u.length;f<d;++f)i+=this.renderTokens(e[4],n.push(u[f]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],n.push(u),r,o,s);else if(I(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),c),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],n,r,o,s);return i}};p.prototype.renderInverted=function(e,n,r,o,s){var a=n.lookup(e[1]);if(!a||W(a)&&a.length===0)return this.renderTokens(e[4],n,r,o,s)};p.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!r)&&(s[a]=o+s[a]);return s.join(`
`)};p.prototype.renderPartial=function(e,n,r,o){if(r){var s=this.getConfigTags(o),a=I(r)?r(e[1]):r[e[1]];if(a!=null){var i=e[6],u=e[5],c=e[4],f=a;u==0&&c&&(f=this.indentPartial(a,c,i));var d=this.parse(f,s);return this.renderTokens(d,n,r,f,o)}}};p.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};p.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||h.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};p.prototype.rawValue=function(e){return e[1]};p.prototype.getConfigTags=function(e){return W(e)?e:e&&typeof e=="object"?e.tags:void 0};p.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!W(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){P.templateCache=t},get templateCache(){return P.templateCache}},P=new p;h.clearCache=function(){return P.clearCache()};h.parse=function(e,n){return P.parse(e,n)};h.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ue(e)+'" was given as the first argument for mustache#render(template, view, partials)');return P.render(e,n,r,o)};h.escape=de;h.Scanner=M;h.Context=A;h.Writer=p;class z{constructor(e,n){this.template=e,this.state=n,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],a=r[4];["name","&","#","^"].includes(o)&&n.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,n)}}}async function Se(){var t;const e=await se();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new z(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await N(n.name,o.name,a),s.onChange(async i=>{await N(n.name,o.name,i)})}}}async function Ce(){var t;const e=await E();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new z(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();q(n,s.name,i),a.onChange(u=>{q(n,s.name,u)})}}}async function N(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function q(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let G,x=0,U=0;function K(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Le(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Q(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Pe(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Q(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function J(t){return t.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function Q(t){const e=J(t),n=Z(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(x-r,2)+Math.pow(U-o,2))}function Ee(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Le(t):Pe(t),K(t)}),K(t)}function Me(t,e,n,r){const o=t.name;let s,a,i=!1;const u=n.getString("tag");let c=!0;u&&!WA.player.tags.includes(u)&&(c=!1);const f=!!u;function d(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function T(l){const v=Z(J(e.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:v.right*32,y:v.top*32,width:32*3,height:32*4},allowApi:!0})}function S(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!c||!f)&&(n.getString("code")||n.getString("codeVariable"))){T(o);return}c&&(WA.state[e.name]?d():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),S()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),a&&WA.state[e.name]===!0&&S(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Te(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-x,2)+Math.pow(t.y-U,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function ke(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Te(t)})}function Be(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Re(t){t=t??j;const e=await ne();G=await E();for(const n of e.values())n.properties.get("door")&&Ee(n),n.properties.get("bell")&&ke(n);for(const n of G.values()){const r=new L(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');Me(n,a,r,t)}const s=r.getString("bellVariable");s&&Be(s,r,n.name)}WA.player.onPlayerMove(n=>{x=n.x,U=n.y})}function Ve(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),a=t.getString("tag");Ge(n,e,r,o,s,a)}}function Ge(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function je(){const t=await E();for(const e of t.values()){const n=new L(e.properties);Ve(n,e.name)}}let $;async function Ie(t){const e=await WA.room.getTiledMap();t=t??j,$=await E();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new L(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of $.values()){const a=new L(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&xe(i.split(","),s.name,a)}}}function xe(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=n.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>O(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=n.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():O(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function Ue(){return WA.onInit().then(()=>{Re().catch(t=>console.error(t)),je().catch(t=>console.error(t)),Ie().catch(t=>console.error(t)),Ce().catch(t=>console.error(t)),Se().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");var Oe=WA.sound.loadSound("../audio/japanese_school_bell.mp3"),_e={volume:1,loop:!1,rate:3,detune:0,delay:0,seek:0,mute:!1},F=WA.sound.loadSound("../audio/bgm.mp3"),De={volume:.05,loop:!0,rate:1,detune:0,delay:0,seek:0,mute:!1};WA.onInit().then(()=>{$e(),He(),Xe()}).catch(t=>console.error(t));function Ne(){Oe.play(_e)}function H(){WA.state.bellIsOn=!WA.state.bellIsOn}function qe(){F.play(De)}function Ke(){F.stop()}function $e(){console.log("Scripting Room API ready"),console.log("Player tags: ",WA.player.tags),Ue().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}function He(){WA.room.onEnterLayer("Util/bgmLayer").subscribe(()=>{WA.ui.openPopup("bgmPopUp","Hintergrundmusik abspielen",[{label:"Spielen",className:"success",callback:t=>{qe(),t.close()}},{label:"Stoppen",className:"primary",callback:t=>{Ke(),t.close()}}])})}function Xe(){WA.room.onEnterLayer("Util/leverLayer").subscribe(()=>{WA.ui.openPopup("klingelPopUp","Möchtest du die Glocke läuten",[{label:"Läuten",className:"success",callback:t=>{H(),H(),t.close()}},{label:"Schließen",className:"primary",callback:t=>{t.close()}}])}),WA.state.onVariableChange("bellIsOn").subscribe(t=>{t&&Ne()})}