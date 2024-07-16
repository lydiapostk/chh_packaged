"use strict";
exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 6371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ It)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(3652);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(4612);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-computed.js
function use_computed_i(e,o){let[u,t]=(0,react_.useState)(e),r=(0,use_latest_value/* useLatestValue */.E)(e);return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>t(r.current),[r,t,...o]),u}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-controllable.js
var use_controllable = __webpack_require__(3013);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(2264);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id = __webpack_require__(6304);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js + 1 modules
var use_outside_click = __webpack_require__(317);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var use_resolve_button_type = __webpack_require__(986);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(1464);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/get-text-value.js
let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=(r=e.innerText)!=null?r:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let u=!1;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=!0;let l=u?(i=t.innerText)!=null?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}function g(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map(l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():o(r).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s(c){let t=(0,react_.useRef)(""),r=(0,react_.useRef)("");return (0,use_event/* useEvent */.z)(()=>{let e=c.current;if(!e)return"";let u=e.innerText;if(t.current===u)return r.current;let n=g(e).trim().toLowerCase();return t.current=u,r.current=n,n})}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
function t(e){return[e.screenX,e.screenY]}function use_tracked_pointer_u(){let e=(0,react_.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(r){e.current=t(r)}}}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
var internal_hidden = __webpack_require__(9042);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(1430);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
var bugs = __webpack_require__(5410);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u(l){throw new Error("Unexpected object: "+l)}var calculate_active_index_c=(i=>(i[i.First=0]="First",i[i.Previous=1]="Previous",i[i.Next=2]="Next",i[i.Last=3]="Last",i[i.Specific=4]="Specific",i[i.Nothing=5]="Nothing",i))(calculate_active_index_c||{});function f(l,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),s=r!=null?r:-1;switch(l.focus){case 0:{for(let e=0;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 1:{for(let e=s-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 2:{for(let e=s+1;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 3:{for(let e=t.length-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 4:{for(let e=0;e<t.length;++e)if(n.resolveId(t[e],e,t)===l.id)return e;return r}case 5:return null;default:u(l)}}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
var disposables = __webpack_require__(2698);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.js
var focus_management = __webpack_require__(3110);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/form.js
var utils_form = __webpack_require__(5381);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(8118);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
var owner = __webpack_require__(1506);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(1147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard = __webpack_require__(4208);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/listbox/listbox.js
var Be=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Be||{}),He=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(He||{}),Ge=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ge||{}),Ne=(i=>(i[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i[i.RegisterLabel=7]="RegisterLabel",i))(Ne||{});function z(e,a=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=(0,focus_management/* sortByDomNode */.z2)(a(e.options.slice()),t=>t.dataRef.current.domRef.current),l=n?r.indexOf(n):null;return l===-1&&(l=null),{options:r,activeOptionIndex:l}}let je={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let a=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(l=>n(l.dataRef.current.value));return r!==-1&&(a=r),{...e,listboxState:0,activeOptionIndex:a}},[2](e,a){var l;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=z(e),r=f(a,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:r,activationTrigger:(l=a.trigger)!=null?l:1}},[3]:(e,a)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,l=e.searchQuery+a.value.toLowerCase(),p=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(i=>{var b;return!i.dataRef.current.disabled&&((b=i.dataRef.current.textValue)==null?void 0:b.startsWith(l))}),u=p?e.options.indexOf(p):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeOptionIndex:u,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,a)=>{let n={id:a.id,dataRef:a.dataRef},r=z(e,l=>[...l,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},[6]:(e,a)=>{let n=z(e,r=>{let l=r.findIndex(t=>t.id===a.id);return l!==-1&&r.splice(l,1),r});return{...e,...n,activationTrigger:1}},[7]:(e,a)=>({...e,labelId:a.id})},J=(0,react_.createContext)(null);J.displayName="ListboxActionsContext";function k(e){let a=(0,react_.useContext)(J);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}return a}let q=(0,react_.createContext)(null);q.displayName="ListboxDataContext";function w(e){let a=(0,react_.useContext)(q);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return a}function Ve(e,a){return (0,match/* match */.E)(a.type,je,e,a)}let Ke=react_.Fragment;function Qe(e,a){let{value:n,defaultValue:r,form:l,name:t,onChange:p,by:u=(s,c)=>s===c,disabled:i=!1,horizontal:b=!1,multiple:R=!1,...m}=e;const P=b?"horizontal":"vertical";let S=(0,use_sync_refs/* useSyncRefs */.T)(a),[g=R?[]:void 0,x]=(0,use_controllable/* useControllable */.q)(n,p,r),[T,o]=(0,react_.useReducer)(Ve,{dataRef:(0,react_.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),L=(0,react_.useRef)({static:!1,hold:!1}),U=(0,react_.useRef)(null),B=(0,react_.useRef)(null),W=(0,react_.useRef)(null),I=(0,use_event/* useEvent */.z)(typeof u=="string"?(s,c)=>{let O=u;return(s==null?void 0:s[O])===(c==null?void 0:c[O])}:u),A=(0,react_.useCallback)(s=>(0,match/* match */.E)(d.mode,{[1]:()=>g.some(c=>I(c,s)),[0]:()=>I(g,s)}),[g]),d=(0,react_.useMemo)(()=>({...T,value:g,disabled:i,mode:R?1:0,orientation:P,compare:I,isSelected:A,optionsPropsRef:L,labelRef:U,buttonRef:B,optionsRef:W}),[g,i,R,T]);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{T.dataRef.current=d},[d]),(0,use_outside_click/* useOutsideClick */.O)([d.buttonRef,d.optionsRef],(s,c)=>{var O;o({type:1}),(0,focus_management/* isFocusableElement */.sP)(c,focus_management/* FocusableMode */.tJ.Loose)||(s.preventDefault(),(O=d.buttonRef.current)==null||O.focus())},d.listboxState===0);let H=(0,react_.useMemo)(()=>({open:d.listboxState===0,disabled:i,value:g}),[d,i,g]),ie=(0,use_event/* useEvent */.z)(s=>{let c=d.options.find(O=>O.id===s);c&&X(c.dataRef.current.value)}),re=(0,use_event/* useEvent */.z)(()=>{if(d.activeOptionIndex!==null){let{dataRef:s,id:c}=d.options[d.activeOptionIndex];X(s.current.value),o({type:2,focus:calculate_active_index_c.Specific,id:c})}}),ae=(0,use_event/* useEvent */.z)(()=>o({type:0})),le=(0,use_event/* useEvent */.z)(()=>o({type:1})),se=(0,use_event/* useEvent */.z)((s,c,O)=>s===calculate_active_index_c.Specific?o({type:2,focus:calculate_active_index_c.Specific,id:c,trigger:O}):o({type:2,focus:s,trigger:O})),pe=(0,use_event/* useEvent */.z)((s,c)=>(o({type:5,id:s,dataRef:c}),()=>o({type:6,id:s}))),ue=(0,use_event/* useEvent */.z)(s=>(o({type:7,id:s}),()=>o({type:7,id:null}))),X=(0,use_event/* useEvent */.z)(s=>(0,match/* match */.E)(d.mode,{[0](){return x==null?void 0:x(s)},[1](){let c=d.value.slice(),O=c.findIndex(C=>I(C,s));return O===-1?c.push(s):c.splice(O,1),x==null?void 0:x(c)}})),de=(0,use_event/* useEvent */.z)(s=>o({type:3,value:s})),ce=(0,use_event/* useEvent */.z)(()=>o({type:4})),fe=(0,react_.useMemo)(()=>({onChange:X,registerOption:pe,registerLabel:ue,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce}),[]),Te={ref:S},G=(0,react_.useRef)(null),be=(0,use_disposables/* useDisposables */.G)();return (0,react_.useEffect)(()=>{G.current&&r!==void 0&&be.addEventListener(G.current,"reset",()=>{x==null||x(r)})},[G,x]),react_.createElement(J.Provider,{value:fe},react_.createElement(q.Provider,{value:d},react_.createElement(open_closed/* OpenClosedProvider */.up,{value:(0,match/* match */.E)(d.listboxState,{[0]:open_closed/* State */.ZM.Open,[1]:open_closed/* State */.ZM.Closed})},t!=null&&g!=null&&(0,utils_form/* objectToFormEntries */.t)({[t]:g}).map(([s,c],O)=>react_.createElement(internal_hidden/* Hidden */._,{features:internal_hidden/* Features */.A.Hidden,ref:O===0?C=>{var Y;G.current=(Y=C==null?void 0:C.closest("form"))!=null?Y:null}:void 0,...(0,render/* compact */.oA)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:s,value:c})})),(0,render/* render */.sY)({ourProps:Te,theirProps:m,slot:H,defaultTag:Ke,name:"Listbox"}))))}let We="button";function Xe(e,a){var x;let n=(0,use_id/* useId */.M)(),{id:r=`headlessui-listbox-button-${n}`,...l}=e,t=w("Listbox.Button"),p=k("Listbox.Button"),u=(0,use_sync_refs/* useSyncRefs */.T)(t.buttonRef,a),i=(0,use_disposables/* useDisposables */.G)(),b=(0,use_event/* useEvent */.z)(T=>{switch(T.key){case keyboard/* Keys */.R.Space:case keyboard/* Keys */.R.Enter:case keyboard/* Keys */.R.ArrowDown:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(calculate_active_index_c.First)});break;case keyboard/* Keys */.R.ArrowUp:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(calculate_active_index_c.Last)});break}}),R=(0,use_event/* useEvent */.z)(T=>{switch(T.key){case keyboard/* Keys */.R.Space:T.preventDefault();break}}),m=(0,use_event/* useEvent */.z)(T=>{if((0,bugs/* isDisabledReactIssue7711 */.P)(T.currentTarget))return T.preventDefault();t.listboxState===0?(p.closeListbox(),i.nextFrame(()=>{var o;return(o=t.buttonRef.current)==null?void 0:o.focus({preventScroll:!0})})):(T.preventDefault(),p.openListbox())}),P=use_computed_i(()=>{if(t.labelId)return[t.labelId,r].join(" ")},[t.labelId,r]),S=(0,react_.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),g={ref:u,id:r,type:(0,use_resolve_button_type/* useResolveButtonType */.f)(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(x=t.optionsRef.current)==null?void 0:x.id,"aria-expanded":t.listboxState===0,"aria-labelledby":P,disabled:t.disabled,onKeyDown:b,onKeyUp:R,onClick:m};return (0,render/* render */.sY)({ourProps:g,theirProps:l,slot:S,defaultTag:We,name:"Listbox.Button"})}let $e="label";function ze(e,a){let n=(0,use_id/* useId */.M)(),{id:r=`headlessui-listbox-label-${n}`,...l}=e,t=w("Listbox.Label"),p=k("Listbox.Label"),u=(0,use_sync_refs/* useSyncRefs */.T)(t.labelRef,a);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>p.registerLabel(r),[r]);let i=(0,use_event/* useEvent */.z)(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}),b=(0,react_.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]);return (0,render/* render */.sY)({ourProps:{ref:u,id:r,onClick:i},theirProps:l,slot:b,defaultTag:$e,name:"Listbox.Label"})}let Je="ul",qe=render/* Features */.AN.RenderStrategy|render/* Features */.AN.Static;function Ye(e,a){var T;let n=(0,use_id/* useId */.M)(),{id:r=`headlessui-listbox-options-${n}`,...l}=e,t=w("Listbox.Options"),p=k("Listbox.Options"),u=(0,use_sync_refs/* useSyncRefs */.T)(t.optionsRef,a),i=(0,use_disposables/* useDisposables */.G)(),b=(0,use_disposables/* useDisposables */.G)(),R=(0,open_closed/* useOpenClosed */.oJ)(),m=(()=>R!==null?(R&open_closed/* State */.ZM.Open)===open_closed/* State */.ZM.Open:t.listboxState===0)();(0,react_.useEffect)(()=>{var L;let o=t.optionsRef.current;o&&t.listboxState===0&&o!==((L=(0,owner/* getOwnerDocument */.r)(o))==null?void 0:L.activeElement)&&o.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let P=(0,use_event/* useEvent */.z)(o=>{switch(b.dispose(),o.key){case keyboard/* Keys */.R.Space:if(t.searchQuery!=="")return o.preventDefault(),o.stopPropagation(),p.search(o.key);case keyboard/* Keys */.R.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:L}=t.options[t.activeOptionIndex];p.onChange(L.current.value)}t.mode===0&&(p.closeListbox(),(0,disposables/* disposables */.k)().nextFrame(()=>{var L;return(L=t.buttonRef.current)==null?void 0:L.focus({preventScroll:!0})}));break;case (0,match/* match */.E)(t.orientation,{vertical:keyboard/* Keys */.R.ArrowDown,horizontal:keyboard/* Keys */.R.ArrowRight}):return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index_c.Next);case (0,match/* match */.E)(t.orientation,{vertical:keyboard/* Keys */.R.ArrowUp,horizontal:keyboard/* Keys */.R.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index_c.Previous);case keyboard/* Keys */.R.Home:case keyboard/* Keys */.R.PageUp:return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index_c.First);case keyboard/* Keys */.R.End:case keyboard/* Keys */.R.PageDown:return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index_c.Last);case keyboard/* Keys */.R.Escape:return o.preventDefault(),o.stopPropagation(),p.closeListbox(),i.nextFrame(()=>{var L;return(L=t.buttonRef.current)==null?void 0:L.focus({preventScroll:!0})});case keyboard/* Keys */.R.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(p.search(o.key),b.setTimeout(()=>p.clearSearch(),350));break}}),S=use_computed_i(()=>{var o;return(o=t.buttonRef.current)==null?void 0:o.id},[t.buttonRef.current]),g=(0,react_.useMemo)(()=>({open:t.listboxState===0}),[t]),x={"aria-activedescendant":t.activeOptionIndex===null||(T=t.options[t.activeOptionIndex])==null?void 0:T.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:r,onKeyDown:P,role:"listbox",tabIndex:0,ref:u};return (0,render/* render */.sY)({ourProps:x,theirProps:l,slot:g,defaultTag:Je,features:qe,visible:m,name:"Listbox.Options"})}let Ze="li";function et(e,a){let n=(0,use_id/* useId */.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=!1,value:t,...p}=e,u=w("Listbox.Option"),i=k("Listbox.Option"),b=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===r:!1,R=u.isSelected(t),m=(0,react_.useRef)(null),P=s(m),S=(0,use_latest_value/* useLatestValue */.E)({disabled:l,value:t,domRef:m,get textValue(){return P()}}),g=(0,use_sync_refs/* useSyncRefs */.T)(a,m);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{if(u.listboxState!==0||!b||u.activationTrigger===0)return;let A=(0,disposables/* disposables */.k)();return A.requestAnimationFrame(()=>{var d,H;(H=(d=m.current)==null?void 0:d.scrollIntoView)==null||H.call(d,{block:"nearest"})}),A.dispose},[m,b,u.listboxState,u.activationTrigger,u.activeOptionIndex]),(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>i.registerOption(r,S),[S,r]);let x=(0,use_event/* useEvent */.z)(A=>{if(l)return A.preventDefault();i.onChange(t),u.mode===0&&(i.closeListbox(),(0,disposables/* disposables */.k)().nextFrame(()=>{var d;return(d=u.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})}))}),T=(0,use_event/* useEvent */.z)(()=>{if(l)return i.goToOption(calculate_active_index_c.Nothing);i.goToOption(calculate_active_index_c.Specific,r)}),o=use_tracked_pointer_u(),L=(0,use_event/* useEvent */.z)(A=>o.update(A)),U=(0,use_event/* useEvent */.z)(A=>{o.wasMoved(A)&&(l||b||i.goToOption(calculate_active_index_c.Specific,r,0))}),B=(0,use_event/* useEvent */.z)(A=>{o.wasMoved(A)&&(l||b&&i.goToOption(calculate_active_index_c.Nothing))}),W=(0,react_.useMemo)(()=>({active:b,selected:R,disabled:l}),[b,R,l]);return (0,render/* render */.sY)({ourProps:{id:r,ref:g,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":R,disabled:void 0,onClick:x,onFocus:T,onPointerEnter:L,onMouseEnter:L,onPointerMove:U,onMouseMove:U,onPointerLeave:B,onMouseLeave:B},theirProps:p,slot:W,defaultTag:Ze,name:"Listbox.Option"})}let tt=(0,render/* forwardRefWithAs */.yV)(Qe),ot=(0,render/* forwardRefWithAs */.yV)(Xe),nt=(0,render/* forwardRefWithAs */.yV)(ze),it=(0,render/* forwardRefWithAs */.yV)(Ye),rt=(0,render/* forwardRefWithAs */.yV)(et),It=Object.assign(tt,{Button:ot,Label:nt,Options:it,Option:rt});


/***/ }),

/***/ 2632:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ we)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-controllable.js
var use_controllable = __webpack_require__(3013);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(2264);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id = __webpack_require__(6304);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var use_resolve_button_type = __webpack_require__(986);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(1464);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
var internal_hidden = __webpack_require__(9042);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
var bugs = __webpack_require__(5410);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/form.js
var utils_form = __webpack_require__(5381);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(1147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/description/description.js
var description = __webpack_require__(1858);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard = __webpack_require__(4208);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(3652);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/label/label.js
let d=(0,react_.createContext)(null);function u(){let a=(0,react_.useContext)(d);if(a===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return a}function F(){let[a,t]=(0,react_.useState)([]);return[a.length>0?a.join(" "):void 0,(0,react_.useMemo)(()=>function(e){let s=(0,use_event/* useEvent */.z)(r=>(t(l=>[...l,r]),()=>t(l=>{let n=l.slice(),p=n.indexOf(r);return p!==-1&&n.splice(p,1),n}))),o=(0,react_.useMemo)(()=>({register:s,slot:e.slot,name:e.name,props:e.props}),[s,e.slot,e.name,e.props]);return react_.createElement(d.Provider,{value:o},e.children)},[t])]}let A="label";function h(a,t){let i=(0,use_id/* useId */.M)(),{id:e=`headlessui-label-${i}`,passive:s=!1,...o}=a,r=u(),l=(0,use_sync_refs/* useSyncRefs */.T)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>r.register(e),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in o&&delete o.onClick),(0,render/* render */.sY)({ourProps:n,theirProps:o,slot:r.slot||{},defaultTag:A,name:r.name||"Label"})}let v=(0,render/* forwardRefWithAs */.yV)(h),B=Object.assign(v,{});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/switch/switch.js
let b=(0,react_.createContext)(null);b.displayName="GroupContext";let Y=react_.Fragment;function Z(s){var d;let[n,p]=(0,react_.useState)(null),[c,f]=F(),[r,h]=(0,description/* useDescriptions */.f)(),l=(0,react_.useMemo)(()=>({switch:n,setSwitch:p,labelledby:c,describedby:r}),[n,p,c,r]),T={},y=s;return react_.createElement(h,{name:"Switch.Description"},react_.createElement(f,{name:"Switch.Label",props:{htmlFor:(d=l.switch)==null?void 0:d.id,onClick(t){n&&(t.currentTarget.tagName==="LABEL"&&t.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},react_.createElement(b.Provider,{value:l},(0,render/* render */.sY)({ourProps:T,theirProps:y,defaultTag:Y,name:"Switch.Group"}))))}let ee="button";function te(s,n){let p=(0,use_id/* useId */.M)(),{id:c=`headlessui-switch-${p}`,checked:f,defaultChecked:r=!1,onChange:h,name:l,value:T,form:y,...d}=s,t=(0,react_.useContext)(b),u=(0,react_.useRef)(null),g=(0,use_sync_refs/* useSyncRefs */.T)(u,n,t===null?null:t.setSwitch),[o,a]=(0,use_controllable/* useControllable */.q)(f,h,r),S=(0,use_event/* useEvent */.z)(()=>a==null?void 0:a(!o)),D=(0,use_event/* useEvent */.z)(e=>{if((0,bugs/* isDisabledReactIssue7711 */.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),S()}),C=(0,use_event/* useEvent */.z)(e=>{e.key===keyboard/* Keys */.R.Space?(e.preventDefault(),S()):e.key===keyboard/* Keys */.R.Enter&&(0,utils_form/* attemptSubmit */.g)(e.currentTarget)}),L=(0,use_event/* useEvent */.z)(e=>e.preventDefault()),x=(0,react_.useMemo)(()=>({checked:o}),[o]),v={id:c,ref:g,role:"switch",type:(0,use_resolve_button_type/* useResolveButtonType */.f)(s,u),tabIndex:0,"aria-checked":o,"aria-labelledby":t==null?void 0:t.labelledby,"aria-describedby":t==null?void 0:t.describedby,onClick:D,onKeyUp:C,onKeyPress:L},G=(0,use_disposables/* useDisposables */.G)();return (0,react_.useEffect)(()=>{var w;let e=(w=u.current)==null?void 0:w.closest("form");e&&r!==void 0&&G.addEventListener(e,"reset",()=>{a(r)})},[u,a]),react_.createElement(react_.Fragment,null,l!=null&&o&&react_.createElement(internal_hidden/* Hidden */._,{features:internal_hidden/* Features */.A.Hidden,...(0,render/* compact */.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:y,checked:o,name:l,value:T})}),(0,render/* render */.sY)({ourProps:v,theirProps:d,slot:x,defaultTag:ee,name:"Switch"}))}let ne=(0,render/* forwardRefWithAs */.yV)(te),re=Z,we=Object.assign(ne,{Group:re,Label:B,Description:description/* Description */.d});


/***/ }),

/***/ 3013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2264);
function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=l!==void 0,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__/* .useEvent */ .z)(n=>(e||s(n),r==null?void 0:r(n)))]}


/***/ }),

/***/ 5381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ p),
/* harmony export */   t: () => (/* binding */ e)
/* harmony export */ });
function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):typeof t=="boolean"?i.push([s,t?"1":"0"]):typeof t=="string"?i.push([s,t]):typeof t=="number"?i.push([s,`${t}`]):t==null?i.push([s,""]):e(t,s,i)}function p(i){var t,r;let s=(t=i==null?void 0:i.form)!=null?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(r=s.requestSubmit)==null||r.call(s)}}


/***/ }),

/***/ 7515:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);

function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

};
;