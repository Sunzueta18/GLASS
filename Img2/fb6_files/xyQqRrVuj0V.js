if (self.CavalryLogger) { CavalryLogger.start_js(["+osYv"]); }

__d("LWICometWelcomeMessageModalWrapperQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5093464840679488",metadata:{},name:"LWICometWelcomeMessageModalWrapperQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("BaseSlider.react",["fbt","CometComponentWithKeyCommands.react","CometKeys","Locale","Pressable.react","React","recoverableViolation","stylex","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j={rail:{backgroundColor:"pwoa4pd7",borderTopStartRadius:"s8bnoagg",borderTopEndRadius:"bn9qtmzc",borderBottomEndRadius:"hp05c5td",borderBottomStartRadius:"b6jg2yqc",display:"a8c37x1j",height:"mw227v9j",position:"pmk7jnqg",width:"k4urcfbm"},root:{boxSizing:"cjfnh4rs",cursor:"nhd2j8a9",display:"q9uorilb",height:"mw227v9j",paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05",position:"l9j0dhe7",touchAction:"gokke00a",width:"k4urcfbm"},thumb:{backgroundColor:"q2y6ezfg",borderTopColor:"qbxu24ho",borderEndColor:"bxzzcbxg",borderBottomColor:"lxuwth05",borderStartColor:"h2mp5456",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"frvqaej8",borderEndWidth:"ed0hlay0",borderBottomWidth:"afxsp9o4",borderStartWidth:"jcgfde61",bottom:"i09qtzwb",boxShadow:"ibrqsekg",boxSizing:"rq0escxv",cursor:"nhd2j8a9",height:"jnigpg78",marginStart:"e5bbllhu",outline:"lzcic4wl",position:"pmk7jnqg",top:"kr520xx4",width:"odw8uiq3"},thumbFocusVisible:{borderTopColor:"ng4oes9w",borderEndColor:"epui8hbc",borderBottomColor:"nxp5a7ae",borderStartColor:"og13rbbo",boxShadow:"gxj1dplq"},thumbWrapper:{marginEnd:"o3lre8g0",marginStart:"gu00c43d",marginTop:"sv5sfqaa",position:"l9j0dhe7"},track:{backgroundColor:"is6700om",borderTopStartRadius:"s8bnoagg",borderTopEndRadius:"bn9qtmzc",borderBottomEndRadius:"hp05c5td",borderBottomStartRadius:"b6jg2yqc",display:"a8c37x1j",height:"mw227v9j",position:"pmk7jnqg"}};function k(a,b){a=a.reduce(function(a,c,d){c=Math.abs(b-c);return a==null||c<a.distance||c===a.distance?{distance:c,index:d}:a},null);return(a=a==null?void 0:a.index)!=null?a:0}function l(a,b,c){return(a-b)*100/(c-b)}function m(a,b,c){return Math.min(Math.max(a,b),c)}function n(a){return a.toString()}function o(a,b){return a+b}function p(a){var b=i.useRef(a);i.useEffect(function(){b.current=a});return i.useCallback(function(a){return b.current(a)},[])}function q(a,b){a=a.changedTouches;if(b==null||!a)return null;for(var c=0;c<a.length;++c){var d=a[c];if(d.identifier===b)return d.pageX}return null}function a(a){var c,d=a.ariaLabel,e=a.ariaLabelledBy,f=a.ariaValueText,r=f===void 0?n:f;f=a.disabled;var s=f===void 0?!1:f;f=a.max;var t=f===void 0?100:f;f=a.min;var u=f===void 0?0:f,v=a.onChange,w=a.onChangeSettled;f=a.step;var x=f===void 0?1:f;f=a.thumbMargin;f===void 0?0:f;var y=a.values,z=a.xstyleThumb,A=b("useCometUniqueID")(),B=i.useRef(null),C=i.useRef(0),D=i.useRef(null),E=i.useRef(null),F=i.useMemo(function(){var a=typeof y==="number"?[y]:[].concat(y);a.sort(function(a,b){return a-b});return a},[y]);f=l(F.length>1?F[0]:u,u,t);a=l(F[F.length-1],u,t)-f;f=(c={},c[b("Locale").isRTL()?"right":"left"]=f+"%",c.width=a+"%",c);var G=i.useCallback(function(){if(C.current!=null&&B.current){var a=B.current.querySelector("#"+o(A,C.current));a!=null&&a.focus()}},[A]),H=i.useCallback(function(a){var c,d=a.eventX;a=a.isMove;a=a===void 0?!1:a;var e=B.current;if(e==null){b("recoverableViolation")("Slider Ref should have been set","comet_ui");return null}if(s)return null;c=(c=e.ownerDocument.defaultView)!=null?c:window;e=e.getBoundingClientRect();var f=e.left;e=e.width;d=(d-f-c.pageXOffset)/e;b("Locale").isRTL()&&(d=1-d);f=m(Math.round(((t-u)*d+u)/x)*x,u,t);c=a?C.current:k(F,f);e=F;if(F[c]!==f){d=[].concat(F);d[c]=f;d.sort(function(a,b){return a-b});e=d}C.current=e.indexOf(f);return e},[s,t,u,x,F]),I=p(function(a){a=H({eventX:a.pageX,isMove:!0});a!=null&&v&&v(a);G()}),J=p(function(a){a=H({eventX:a.pageX});a!=null&&w&&w(a);window.removeEventListener("mousemove",I,!0);window.removeEventListener("mouseup",J,!0)});a=p(function(a){if(s)return;var b=window.navigator.userAgent.indexOf("MSIE")>=0;b||a.preventDefault();b=H({eventX:a.pageX});b!=null&&v&&v(b);G();window.addEventListener("mousemove",I,!0);window.addEventListener("mouseup",J,!0)});var K=p(function(a){a=q(a,D.current);if(a==null)return;a=H({eventX:a,isMove:!0});a!=null&&v&&v(a);G()}),L=p(function(a){a=q(a,D.current);if(a==null)return;a=H({eventX:a});a!=null&&w&&w(a);window.removeEventListener("touchmove",K,!0);window.removeEventListener("touchend",L,!0)});c=p(function(a){if(s)return;a.preventDefault();var b=a.changedTouches[0];b!=null&&(D.current=b.identifier);b=q(a,D.current);if(b==null)return;a=H({eventX:b});a!=null&&v&&v(a);G();window.addEventListener("touchmove",K,!0);window.addEventListener("touchend",L,!0)});i.useEffect(function(){if(s)return;return function(){window.removeEventListener("mousemove",I,!0),window.removeEventListener("mouseup",J,!0),window.removeEventListener("touchmove",K,!0),window.removeEventListener("touchend",L,!0)}},[s,I,J,L,K,c]);var M=i.useCallback(function(a){var b=E.current;if(b!=null){a=m(Math.round(a/x)*x,u,t);if(F[b]!==a){var c=[].concat(F);c[b]=a;c.sort(function(a,b){return a-b});v&&v(c);w&&w(c)}}},[t,u,v,w,x,F]),N=(t-u)/10,O=i.useMemo(function(){var a;return[{command:{key:(a=b("CometKeys")).HOME},description:g._("Establece el control deslizante en su valor m\u00ednimo."),handler:function(){E.current!=null&&M(u)}},{command:{key:a.END},description:g._("Establece el control deslizante en su valor m\u00e1ximo."),handler:function(){E.current!=null&&M(t)}},{command:{key:a.PAGE_DOWN},description:g._("Reduce el valor del control deslizante varios espacios. En este caso, salta un 10\u0025."),handler:function(){E.current!=null&&M(F[E.current]-N)}},{command:{key:a.PAGE_UP},description:g._("Aumenta el valor del control deslizante varios espacios. En este caso, salta un 10\u0025."),handler:function(){E.current!=null&&M(F[E.current]+N)}},{command:{key:a.LEFT},description:g._("Reduce el valor del control deslizante un espacio."),handler:function(){E.current!=null&&M(F[E.current]-x)}},{command:{key:a.DOWN},description:g._("Reduce el valor del control deslizante un espacio."),handler:function(){E.current!=null&&M(F[E.current]-x)}},{command:{key:a.RIGHT},description:g._("Aumenta el valor del control deslizante un espacio."),handler:function(){E.current!=null&&M(F[E.current]+x)}},{command:{key:a.UP},description:g._("Aumenta el valor del control deslizante un espacio."),handler:function(){E.current!=null&&M(F[E.current]+x)}}]},[t,u,M,x,N,F]);return i.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:O,children:i.jsxs("div",{className:(h||(h=b("stylex")))(j.root),onMouseDown:a,onTouchStart:c,ref:B,role:"none",children:[i.jsx("div",{className:h(j.rail)}),i.jsx("div",{className:h(j.track),style:f}),i.jsx("div",{className:h(j.thumbWrapper),children:F.map(function(a,c){var f=l(a,u,t);return i.jsx(b("Pressable.react"),{accessibilityLabel:d,accessibilityRelationship:{labelledby:e},accessibilityRole:"slider",accessibilityState:{disabled:s,orientation:"horizontal"},accessibilityValue:{max:t,min:u,now:a,text:r(a)},disabled:s,nativeID:o(A,c),onBlur:function(){E.current=null},onFocus:function(){E.current=c},style:(a={},a[b("Locale").isRTL()?"right":"left"]=f+"%",a),xstyle:function(a){return[j.thumb,a.focusVisible&&j.thumbFocusVisible,typeof z==="function"?z(a):z]}},c)})})]})})}}),null);
__d("CometSlider.react",["BaseSlider.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.disabled,d=a.getRangeLabel,e=a.label,f=a.max,h=a.min,i=a.onChange,j=a.onChangeSettled,k=a.step;a=a.value;return g.jsx(b("BaseSlider.react"),{ariaLabel:e,ariaValueText:d,disabled:c,max:f,min:h,onChange:function(a){i(a[0])},onChangeSettled:function(a){j&&j(a[0])},step:k,values:[a]})}}),null);
__d("LWICometWelcomeMessageModalWrapper.entrypoint",["JSResourceForInteraction","LWICometWelcomeMessageModalWrapperQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("JSResourceForInteraction")("LWICometWelcomeMessageModalWrapper.react").__setRef("LWICometWelcomeMessageModalWrapper.entrypoint");c={getPreloadProps:function(a){var c=a.pageID;a=a.storyID;return{queries:{queryReference:{parameters:b("LWICometWelcomeMessageModalWrapperQuery$Parameters"),variables:{pageID:c,storyID:a}}}}},root:a};e.exports=c}),null);
__d("LWICometWelcomeMessageSubsection.react",["fbt","CometEntryPointDialogTrigger.react","CometLink.react","CometRow.react","CometRowItem.react","CometTransientDialogProvider.react","ContentRefComet","LWICometWelcomeMessageModalWrapper.entrypoint","React","TetraButton.react","TetraTextPairing.react","stylex","unrecoverableViolation","useLWILoggerContext","withLWICometSpecPart"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.adgroupSpecs;a=a.selectedAdgroupID;var d=b("useLWILoggerContext")();d=d.pageID;a=(c=c[a].creative)==null?void 0:c.object_story_id;if(a==null)throw b("unrecoverableViolation")("Story id cannot be null in LWICometWelcomeMessageModal","pages_lwi");return h.jsxs("div",{className:"f10w8fjw l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 qsy8amke",children:[h.jsx("div",{className:"pzdrnzhu tw6a2znq d1544ag0",children:h.jsx(b("TetraTextPairing.react"),{body:h.jsxs(h.Fragment,{children:[g._("Configura la experiencia de bienvenida que las personas ver\u00e1n en Messenger despu\u00e9s de hacer clic en tu anuncio.")," ",h.jsx(b("CometLink.react"),{href:b("ContentRefComet").get("LEARN_MORE","LWI_WELCOME_MESSAGE"),target:"_blank",children:g._("M\u00e1s informaci\u00f3n")})]}),headline:g._("Mensaje de bienvenida"),level:4,reduceEmphasis:!0})}),h.jsx(b("CometRow.react"),{children:h.jsx(b("CometRowItem.react"),{expanding:!0,children:h.jsx(b("CometTransientDialogProvider.react"),{children:h.jsx(b("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:b("LWICometWelcomeMessageModalWrapper.entrypoint"),otherProps:{},preloadParams:{pageID:d,storyID:a},children:function(a){return h.jsx(b("TetraButton.react"),{label:g._("Editar mensaje de bienvenida"),onPress:a,type:"secondary"})}})})})})]})}c=b("withLWICometSpecPart")(a,function(a){return{adgroupSpecs:a.adgroupSpecs,selectedAdgroupID:a.selectedAdgroupID}});e.exports=c}),null);
__d("useLWICometSAFRContext",["LWICometSAFRContext","React","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useContext(b("LWICometSAFRContext"));if(a==null)throw b("unrecoverableViolation")("LWI Comet SAFR context not set","pages_lwi");return a}}),null);