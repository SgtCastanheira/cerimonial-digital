import{b as he,c as ge}from"./chunk-2FYWBOBS.js";import{a as re}from"./chunk-WNC4DTR2.js";import"./chunk-BYQGBEU6.js";import"./chunk-LLW7SJKE.js";import{a as me,b as be}from"./chunk-CMOAMV2E.js";import{b as se,d as le,e as de,f as ce}from"./chunk-JPVLNB5W.js";import"./chunk-OAVBPRLS.js";import{a as dt}from"./chunk-E3VFGXZV.js";import{h as It}from"./chunk-ATEP7IBW.js";import{a as pe,b as _e,c as wt,d as ct,e as mt,f as ue,g as bt,h as pt,i as _t}from"./chunk-IBOHU5O6.js";import"./chunk-2EQODPKR.js";import{c as oe,d as st,f as lt}from"./chunk-TW5BGPGG.js";import{$a as x,$b as ae,A as Ht,Ab as ot,Ba as I,Ca as qt,Da as H,Ea as $,Fa as xt,G as Nt,Ga as Zt,Gb as Ut,H as zt,Hb as kt,I as Z,Ib as Xt,J as jt,K as A,La as Yt,Lb as Tt,Ma as R,Mb as rt,Na as p,Oa as _,P as $t,Pa as z,Q as Qt,Qa as w,Ra as M,S as N,Sa as u,Ta as s,U as m,Ua as r,Ub as Jt,Va as D,Vb as te,Y as S,Z as P,Za as j,Zb as ee,_b as ne,aa as vt,ab as b,ac as ie,bb as tt,c as L,cb as et,db as nt,e as W,ea as T,eb as Q,f as F,fa as O,fb as h,gb as g,h as Ft,hb as Ct,ib as Kt,j as At,ja as Y,jb as v,ka as Vt,kb as at,la as K,lb as c,mb as f,na as E,nb as C,oa as Wt,pb as V,ra as d,sa as U,ta as X,u as Ot,v as G,va as yt,w as q,wa as J,xa as Gt,yb as it,zb as k}from"./chunk-PQPV7GJL.js";var Mt=class{_box;_destroyed=new F;_resizeSubject=new F;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new W(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),e.unsubscribe(),this._elementObservables.delete(o)}}).pipe(q(t=>t.some(e=>e.target===o)),Nt({bufferSize:1,refCount:!0}),A(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},fe=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=m(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let a=e?.box||"content-box";return this._observers.has(a)||this._observers.set(a,new Mt(a)),this._observers.get(a).observe(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$t({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Rt=["*"];function De(n,o){n&1&&et(0)}var Re=["tabListContainer"],Be=["tabList"],Le=["tabListInner"],Fe=["nextPaginator"],Ae=["previousPaginator"],Oe=["content"];function He(n,o){}var Ne=["tabBodyWrapper"],ze=["tabHeader"];function je(n,o){}function $e(n,o){if(n&1&&xt(0,je,0,0,"ng-template",12),n&2){let t=b().$implicit;u("cdkPortalOutlet",t.templateLabel)}}function Qe(n,o){if(n&1&&c(0),n&2){let t=b().$implicit;f(t.textLabel)}}function Ve(n,o){if(n&1){let t=j();s(0,"div",7,2),x("click",function(){let a=S(t),i=a.$implicit,l=a.$index,y=b(),B=Ct(1);return P(y._handleClick(i,B,l))})("cdkFocusChange",function(a){let i=S(t).$index,l=b();return P(l._tabFocusChanged(a,i))}),D(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),p(6,$e,1,1,null,12)(7,Qe,1,1),r()()()}if(n&2){let t=o.$implicit,e=o.$index,a=Ct(1),i=b();at(t.labelClass),v("mdc-tab--active",i.selectedIndex===e),u("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),R("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),d(3),u("matRippleTrigger",a)("matRippleDisabled",t.disabled||i.disableRipple),d(3),_(t.templateLabel?6:7)}}function We(n,o){n&1&&et(0)}function Ge(n,o){if(n&1){let t=j();s(0,"mat-tab-body",13),x("_onCentered",function(){S(t);let a=b();return P(a._removeTabBodyWrapperHeight())})("_onCentering",function(a){S(t);let i=b();return P(i._setTabBodyWrapperHeight(a))})("_beforeCentering",function(a){S(t);let i=b();return P(i._bodyCentered(a))}),r()}if(n&2){let t=o.$implicit,e=o.$index,a=b();at(t.bodyClass),u("id",a._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",a.animationDuration)("preserveContent",a.preserveContent),R("tabindex",a.contentTabIndex!=null&&a.selectedIndex===e?a.contentTabIndex:null)("aria-labelledby",a._getTabLabelId(t,e))("aria-hidden",a.selectedIndex!==e)}}var qe=new N("MatTabContent"),Ze=(()=>{class n{template=m(X);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=H({type:n,selectors:[["","matTabContent",""]],features:[V([{provide:qe,useExisting:n}])]})}return n})(),Ye=new N("MatTabLabel"),Ce=new N("MAT_TAB"),Ke=(()=>{class n extends _e{_closestTab=m(Ce,{optional:!0});static \u0275fac=(()=>{let t;return function(a){return(t||(t=K(n)))(a||n)}})();static \u0275dir=H({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[V([{provide:Ye,useExisting:n}]),$]})}return n})(),ke=new N("MAT_TAB_GROUP"),Bt=(()=>{class n{_viewContainerRef=m(Gt);_closestTabGroup=m(ke,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new F;position=null;origin=null;isActive=!1;constructor(){m(Ut).load(ie)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new pe(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["mat-tab"]],contentQueries:function(e,a,i){if(e&1&&nt(i,Ke,5)(i,Ze,7,X),e&2){let l;h(l=g())&&(a.templateLabel=l.first),h(l=g())&&(a._explicitContent=l.first)}},viewQuery:function(e,a){if(e&1&&Q(X,7),e&2){let i;h(i=g())&&(a._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,a){e&2&&R("id",null)},inputs:{disabled:[2,"disabled","disabled",k],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[V([{provide:Ce,useExisting:n}]),Vt],ngContentSelectors:Rt,decls:1,vars:0,template:function(e,a){e&1&&(tt(),Zt(0,De,1,0,"ng-template"))},encapsulation:2})}return n})(),St="mdc-tab-indicator--active",ve="mdc-tab-indicator--no-transition",Pt=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let t=this._items.find(a=>a.elementRef.nativeElement===o),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let a=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(a),this._currentItem=t}}},Ue=(()=>{class n{_elementRef=m(E);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(St);return}let a=e.getBoundingClientRect(),i=t.width/a.width,l=t.left-a.left;e.classList.add(ve),this._inkBarContentElement.style.setProperty("transform",`translateX(${l}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(ve),e.classList.add(St),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(St)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),a=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=H({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",k]}})}return n})();var Te=(()=>{class n extends Ue{elementRef=m(E);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(a){return(t||(t=K(n)))(a||n)}})();static \u0275dir=H({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,a){e&2&&(R("aria-disabled",!!a.disabled),v("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:[2,"disabled","disabled",k]},features:[$]})}return n})(),ye={passive:!0},Xe=650,Je=100,tn=(()=>{class n{_elementRef=m(E);_changeDetectorRef=m(it);_viewportRuler=m(ge);_dir=m(kt,{optional:!0});_ngZone=m(O);_platform=m(Tt);_sharedResizeObserver=m(fe);_injector=m(vt);_renderer=m(yt);_animationsDisabled=rt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new F;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new F;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new T;indexFocused=new T;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),ye),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),ye))}ngAfterContentInit(){let t=this._dir?this._dir.change:At("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Ht(32),A(this._destroyed)),a=this._viewportRuler.change(150).pipe(A(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ne(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),U(i,{injector:this._injector}),G(t,a,e,this._items.changes,this._itemsResized()).pipe(A(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l)})}_itemsResized(){return typeof ResizeObserver!="function"?Ft:this._items.changes.pipe(Z(this._items),jt(t=>new W(e=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(i=>e.next(i));return t.forEach(i=>a.observe(i.elementRef.nativeElement)),()=>{a.disconnect()}}))),zt(1),q(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ee(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,a=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:l}=e.elementRef.nativeElement,y,B;this._getLayoutDirection()=="ltr"?(y=i,B=y+l):(B=this._tabListInner.nativeElement.offsetWidth-i,y=B-l);let ft=this.scrollDistance,Lt=this.scrollDistance+a;y<ft?this.scrollDistance-=ft-y:B>Lt&&(this.scrollDistance+=Math.min(B-Lt,y-ft))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,a=t-e>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ot(Xe,Je).pipe(A(G(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:i}=this._scrollHeader(t);(i===0||i>=a)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=H({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",k],selectedIndex:[2,"selectedIndex","selectedIndex",ot]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),en=(()=>{class n extends tn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Pt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(a){return(t||(t=K(n)))(a||n)}})();static \u0275cmp=I({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,a,i){if(e&1&&nt(i,Te,4),e&2){let l;h(l=g())&&(a._items=l)}},viewQuery:function(e,a){if(e&1&&Q(Re,7)(Be,7)(Le,7)(Fe,5)(Ae,5),e&2){let i;h(i=g())&&(a._tabListContainer=i.first),h(i=g())&&(a._tabList=i.first),h(i=g())&&(a._tabListInner=i.first),h(i=g())&&(a._nextPaginator=i.first),h(i=g())&&(a._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,a){e&2&&v("mat-mdc-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-mdc-tab-header-rtl",a._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",k]},features:[$],ngContentSelectors:Rt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,a){e&1&&(tt(),s(0,"div",5,0),x("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(l){return a._handlePaginatorPress("before",l)})("touchend",function(){return a._stopInterval()}),D(2,"div",6),r(),s(3,"div",7,1),x("keydown",function(l){return a._handleKeydown(l)}),s(5,"div",8,2),x("cdkObserveContent",function(){return a._onContentChanges()}),s(7,"div",9,3),et(9),r()()(),s(10,"div",10,4),x("mousedown",function(l){return a._handlePaginatorPress("after",l)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),D(12,"div",6),r()),e&2&&(v("mat-mdc-tab-header-pagination-disabled",a._disableScrollBefore),u("matRippleDisabled",a._disableScrollBefore||a.disableRipple),d(3),v("_mat-animation-noopable",a._animationsDisabled),d(2),R("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null),d(5),v("mat-mdc-tab-header-pagination-disabled",a._disableScrollAfter),u("matRippleDisabled",a._disableScrollAfter||a.disableRipple))},dependencies:[It,te],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return n})(),nn=new N("MAT_TABS_CONFIG"),xe=(()=>{class n extends wt{_host=m(Et);_ngZone=m(O);_centeringSub=L.EMPTY;_leavingSub=L.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Z(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=H({type:n,selectors:[["","matTabBodyHost",""]],features:[$]})}return n})(),Et=(()=>{class n{_elementRef=m(E);_dir=m(kt,{optional:!0});_ngZone=m(O);_injector=m(vt);_renderer=m(yt);_diAnimationsDisabled=rt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=L.EMPTY;_position;_previousPosition;_onCentering=new T;_beforeCentering=new T;_afterLeavingCenter=new T;_onCentered=new T(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=m(it);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),U(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),a.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),U(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,a){if(e&1&&Q(xe,5)(Oe,5),e&2){let i;h(i=g())&&(a._portalHost=i.first),h(i=g())&&(a._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,a){e&2&&R("inert",a._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,a){e&1&&(s(0,"div",1,0),xt(2,He,0,0,"ng-template",2),r()),e&2&&v("mat-tab-body-content-left",a._position==="left")("mat-tab-body-content-right",a._position==="right")("mat-tab-body-content-can-animate",a._position==="center"||a._previousPosition==="center")},dependencies:[xe,he],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return n})(),Ie=(()=>{class n{_elementRef=m(E);_changeDetectorRef=m(it);_ngZone=m(O);_tabsSubscription=L.EMPTY;_tabLabelSubscription=L.EMPTY;_tabBodySubscription=L.EMPTY;_diAnimationsDisabled=rt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Wt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new T;focusChange=new T;animationDone=new T;selectedTabChange=new T(!0);_groupId;_isServer=!m(Tt).isBrowser;constructor(){let t=m(nn,{optional:!0});this._groupId=m(ae).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,i)=>a.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,a)=>{e.position=a-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),a;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,a=e[i];break}!a&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Z(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Dt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=G(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,a){e.focusIndex=a,t.disabled||(this.selectedIndex=a)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,a)=>e._setActiveClass(a===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,a,i){if(e&1&&nt(i,Bt,5),e&2){let l;h(l=g())&&(a._allTabs=l)}},viewQuery:function(e,a){if(e&1&&Q(Ne,5)(ze,5)(Et,5),e&2){let i;h(i=g())&&(a._tabBodyWrapper=i.first),h(i=g())&&(a._tabHeader=i.first),h(i=g())&&(a._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,a){e&2&&(R("mat-align-tabs",a.alignTabs),at("mat-"+(a.color||"primary")),Kt("--mat-tab-animation-duration",a.animationDuration),v("mat-mdc-tab-group-dynamic-height",a.dynamicHeight)("mat-mdc-tab-group-inverted-header",a.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",a.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",k],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",k],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",k],selectedIndex:[2,"selectedIndex","selectedIndex",ot],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ot],disablePagination:[2,"disablePagination","disablePagination",k],disableRipple:[2,"disableRipple","disableRipple",k],preserveContent:[2,"preserveContent","preserveContent",k],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[V([{provide:ke,useExisting:n}])],ngContentSelectors:Rt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,a){e&1&&(tt(),s(0,"mat-tab-header",3,0),x("indexFocused",function(l){return a._focusChanged(l)})("selectFocusedIndex",function(l){return a.selectedIndex=l}),w(2,Ve,8,17,"div",4,z),r(),p(4,We,1,0),s(5,"div",5,1),w(7,Ge,1,10,"mat-tab-body",6,z),r()),e&2&&(u("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),Yt("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby),d(2),M(a._tabs),d(2),_(a._isServer?4:-1),d(),v("_mat-animation-noopable",a._animationsDisabled()),d(2),M(a._tabs))},dependencies:[en,Te,Jt,It,wt,Et],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return n})(),Dt=class{index;tab};var we=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=qt({type:n});static \u0275inj=Qt({imports:[Xt]})}return n})();var rn=(n,o)=>o.id,sn=(n,o)=>o.label;function ln(n,o){n&1&&(s(0,"span",9),c(1,"ETAPA ATUAL"),r())}function dn(n,o){if(n&1&&(s(0,"p",11)(1,"span",1),c(2,"Artista"),r(),c(3),r()),n&2){let t=b().$implicit;d(3),C(" ",t.artist)}}function cn(n,o){if(n&1&&(s(0,"p",11)(1,"span",1),c(2,"V\xEDdeo"),r(),c(3),r()),n&2){let t=b().$implicit;d(3),C(" ",t.videoTitle)}}function mn(n,o){if(n&1&&(s(0,"p",11)(1,"span",1),c(2,"Estrutura"),r(),c(3),r()),n&2){let t=b().$implicit;d(3),C(" ",t.structure)}}function bn(n,o){if(n&1&&(s(0,"li"),c(1),r()),n&2){let t=o.$implicit;d(),f(t)}}function pn(n,o){if(n&1&&(s(0,"ul",12),w(1,bn,2,1,"li",null,z),r()),n&2){let t=b().$implicit;d(),M(t.notes)}}function _n(n,o){if(n&1&&(s(0,"div",16)(1,"span",17),c(2),r(),s(3,"p",18),c(4),r()()),n&2){let t=o.$implicit;d(2),f(t.label),d(2),f(t.text)}}function un(n,o){if(n&1&&(s(0,"span",1),c(1,"Letra"),r(),s(2,"div",15),w(3,_n,5,2,"div",16,sn),r()),n&2){let t=b().$implicit;d(3),M(t.lyricsBySection)}}function hn(n,o){if(n&1&&(s(0,"span",1),c(1,"Letra"),r(),s(2,"p",18),c(3),r()),n&2){let t=b().$implicit;d(3),f(t.lyrics)}}function gn(n,o){if(n&1){let t=j();s(0,"tr")(1,"td"),c(2),r(),s(3,"td")(4,"input",19),x("ngModelChange",function(a){let i=S(t).$implicit,l=b(3);return P(l.state.setPadrinhoTime(i,"entrada",a))}),r()(),s(5,"td")(6,"input",19),x("ngModelChange",function(a){let i=S(t).$implicit,l=b(3);return P(l.state.setPadrinhoTime(i,"chegada",a))}),r()()()}if(n&2){let t=o.$implicit,e=b(3);d(2),f(t),d(2),u("ngModel",e.state.getPadrinhoTime(t,"entrada")),d(2),u("ngModel",e.state.getPadrinhoTime(t,"chegada"))}}function fn(n,o){if(n&1&&(s(0,"div",14)(1,"span",1),c(2,"Tempo individual de cada casal"),r(),s(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7,"Casal"),r(),s(8,"th"),c(9,"Entrada"),r(),s(10,"th"),c(11,"Chegada"),r()()(),s(12,"tbody"),w(13,gn,7,3,"tr",null,z),r()()()),n&2){let t=b(2);d(13),M(t.padrinhosNames)}}function vn(n,o){if(n&1){let t=j();s(0,"mat-expansion-panel",4)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"span",5),x("click",function(a){return a.stopPropagation()}),s(4,"mat-checkbox",6),x("change",function(){let a=S(t).$implicit,i=b();return P(i.state.toggleSongPlayed(a.id))}),r()(),s(5,"span",7),c(6),r(),c(7),s(8,"span",8),c(9),r(),p(10,ln,2,0,"span",9),r()(),s(11,"div",10),p(12,dn,4,1,"p",11),p(13,cn,4,1,"p",11),p(14,mn,4,1,"p",11),s(15,"p",11)(16,"span",1),c(17,"Instrumenta\xE7\xE3o"),r(),c(18),r(),p(19,pn,3,0,"ul",12),p(20,un,5,0)(21,hn,4,1),D(22,"app-youtube-player",13),p(23,fn,15,0,"div",14),r()()}if(n&2){let t,e,a,i=o.$implicit,l=b();v("is-current",i.id===((t=l.state.currentSong())==null?null:t.id))("is-played",l.state.isSongPlayed(i.id)),u("id","song-"+i.id)("expanded",i.id===((e=l.state.currentSong())==null?null:e.id)),d(4),u("checked",l.state.isSongPlayed(i.id)),d(2),f(i.order.toString().padStart(2,"0")),d(),C(" ",i.title," "),d(2),C("- ",(l.stepBySongId[i.id]==null?null:l.stepBySongId[i.id].stepTitle)??i.usage),d(),_(i.id===((a=l.state.currentSong())==null?null:a.id)?10:-1),d(2),_(i.artist?12:-1),d(),_(i.videoTitle?13:-1),d(),_(i.structure?14:-1),d(4),C(" ",i.instrumentation),d(),_(i.notes!=null&&i.notes.length?19:-1),d(),_(i.lyricsBySection!=null&&i.lyricsBySection.length?20:i.lyrics?21:-1),d(2),u("url",i.youtubeUrl)("title",i.title),d(),_(i.id==="quao-lindo-esse-nome-e"?23:-1)}}function yn(){let n={};for(let o of lt){o.songId&&!n[o.songId]&&(n[o.songId]={stepId:o.id,stepTitle:o.title,participants:o.participants,participantsList:o.participantsList});for(let t of o.phases??[])n[t.songId]||(n[t.songId]={stepId:o.id,stepTitle:o.title,participants:o.participants,participantsList:o.participantsList})}return n}var ht=class n{constructor(o){this.el=o;Y(()=>{let t=this.state.currentSong()?.id;t&&queueMicrotask(()=>{this.el.nativeElement.querySelector(`#song-${t}`)?.scrollIntoView({behavior:"smooth",block:"start"})})})}el;songs=[...st].sort((o,t)=>o.order-t.order);padrinhosNames=oe.map(o=>o.name);state=m(dt);stepBySongId=yn();static \u0275fac=function(t){return new(t||n)(J(E))};static \u0275cmp=I({type:n,selectors:[["app-song-catalog"]],decls:6,vars:1,consts:[[1,"catalog"],[1,"field-label"],["multi","false"],[3,"id","expanded","is-current","is-played"],[3,"id","expanded"],[1,"checkbox-wrap",3,"click"],["aria-label","Marcar m\xFAsica como j\xE1 tocada",3,"change","checked"],[1,"song-order"],[1,"song-moment"],[1,"current-badge"],[1,"song-detail"],[1,"detail-line"],[1,"notes-list"],[3,"url","title"],[1,"couples-table"],[1,"lyrics-block"],[1,"lyrics-part"],[1,"lyrics-part-label"],[1,"lyrics-running"],["placeholder","--:--",1,"couple-input",3,"ngModelChange","ngModel"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"span",1),c(2),r(),s(3,"mat-accordion",2),w(4,vn,24,20,"mat-expansion-panel",3,rn),r()()),t&2&&(d(2),C("Banco de m\xFAsicas \u2014 ",e.songs.length," cadastradas"),d(2),M(e.songs))},dependencies:[be,me,_t,pt,ct,mt,bt,ce,se,le,de,re],styles:[".catalog[_ngcontent-%COMP%]{margin-top:8px}.catalog[_ngcontent-%COMP%] > .field-label[_ngcontent-%COMP%]{display:block;margin-bottom:8px}.song-order[_ngcontent-%COMP%]{color:var(--ink);font-weight:700;margin-right:8px;font-family:var(--font-display)}.song-moment[_ngcontent-%COMP%]{font-size:.78rem;font-weight:600;color:var(--ink);margin-left:4px}.current-badge[_ngcontent-%COMP%]{margin-left:8px;font-size:.62rem;font-weight:700;letter-spacing:.08em;color:var(--ink);background:var(--gold-soft);border-radius:999px;padding:2px 8px;vertical-align:middle}  .mat-expansion-panel.is-current{border:1px solid var(--gold);box-shadow:0 0 0 1px var(--gold)}.checkbox-wrap[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:2px}  .mat-expansion-panel.is-played{opacity:.55}  .mat-expansion-panel.is-played .mat-expansion-panel-header-title{text-decoration:line-through}  .mat-expansion-panel-header{height:auto!important;min-height:56px;padding:14px 16px}  .mat-expansion-panel-header-title{flex-basis:100%!important;white-space:normal!important;flex-wrap:wrap!important}  .mat-expansion-panel-header-description{white-space:normal!important}  .mat-content{flex-wrap:wrap;row-gap:2px}  .mat-expansion-panel-header-description{flex-basis:100%;margin-top:2px;justify-content:flex-start;color:var(--gold)!important;font-weight:700}.song-detail[_ngcontent-%COMP%]{padding-top:4px}.detail-line[_ngcontent-%COMP%]{margin:6px 0;font-size:.92rem}.detail-line[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]{display:inline;margin-right:6px}.participants-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:4px 12px;margin:4px 0 8px;padding:0;list-style:none}.participants-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.88rem;padding:2px 8px;background:var(--paper-dim);border-radius:6px;cursor:pointer;-webkit-user-select:none;user-select:none;transition:opacity .15s ease}.participants-grid[_ngcontent-%COMP%]   li.is-marked[_ngcontent-%COMP%]{opacity:.5;text-decoration:line-through}.notes-list[_ngcontent-%COMP%]{margin:8px 0;padding-left:18px;font-size:.88rem;color:var(--ink-soft)}.lyrics-block[_ngcontent-%COMP%]{background:var(--paper-dim);border-radius:12px;padding:4px 12px;margin:8px 0 4px}.lyrics-part[_ngcontent-%COMP%]{padding:10px 0}.lyrics-part[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px dashed var(--line)}.lyrics-part-label[_ngcontent-%COMP%]{display:block;font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:6px}.lyrics-running[_ngcontent-%COMP%]{white-space:pre-line;margin:0;font-size:.92rem;line-height:1.6;color:var(--ink-soft)}.couples-table[_ngcontent-%COMP%]{margin-top:16px;overflow-x:auto}.couples-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.82rem;margin-top:8px}.couples-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .couples-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left;padding:6px 8px;border-bottom:1px solid var(--line)}.couples-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#8a8477;font-weight:700;font-size:.7rem;text-transform:uppercase;letter-spacing:.05em}.couple-input[_ngcontent-%COMP%]{width:60px;border:1px solid var(--line);border-radius:8px;padding:6px 8px;font-size:.82rem;font-family:inherit;color:var(--ink);background:var(--paper);text-align:center}.couple-input[_ngcontent-%COMP%]:focus{outline:2px solid var(--gold);outline-offset:1px}"]})};var xn=(n,o)=>o.id,Cn=(n,o)=>o.label;function kn(n,o){n&1&&(s(0,"span",6),c(1),r()),n&2&&(d(),C("- ",o.stepTitle))}function Tn(n,o){n&1&&(s(0,"span",7),c(1,"ETAPA ATUAL"),r())}function In(n,o){if(n&1&&(s(0,"mat-panel-description"),c(1),r()),n&2){let t=b().$implicit;d(),f(t.artist)}}function wn(n,o){if(n&1&&(s(0,"div",11)(1,"span",12),c(2),r(),s(3,"p",9),c(4),r()()),n&2){let t=o.$implicit;d(2),f(t.label),d(2),f(t.text)}}function Mn(n,o){if(n&1&&w(0,wn,5,2,"div",11,Cn),n&2){let t=b().$implicit;M(t.lyricsBySection)}}function Sn(n,o){if(n&1&&(s(0,"p",9),c(1),r()),n&2){let t=b().$implicit;d(),f(t.lyrics)}}function Pn(n,o){n&1&&(s(0,"p",10),c(1,"Sem letra cadastrada."),r())}function En(n,o){if(n&1&&(s(0,"mat-expansion-panel",4)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"span",5),c(4),r(),c(5),p(6,kn,2,1,"span",6),p(7,Tn,2,0,"span",7),r(),p(8,In,2,1,"mat-panel-description"),r(),s(9,"div",8),p(10,Mn,2,0)(11,Sn,2,1,"p",9)(12,Pn,2,0,"p",10),r()()),n&2){let t,e,a,i,l=o.$implicit,y=b();v("is-current",l.id===((t=y.state.currentSong())==null?null:t.id)),u("id","fabi-song-"+l.id)("expanded",l.id===((e=y.state.currentSong())==null?null:e.id)),d(4),f(l.order.toString().padStart(2,"0")),d(),C(" ",l.title," "),d(),_((a=y.stepBySongId[l.id])?6:-1,a),d(),_(l.id===((i=y.state.currentSong())==null?null:i.id)?7:-1),d(),_(l.artist?8:-1),d(2),_(l.lyricsBySection!=null&&l.lyricsBySection.length?10:l.lyrics?11:12)}}function Dn(){let n={};for(let o of lt){o.songId&&!n[o.songId]&&(n[o.songId]={stepId:o.id,stepTitle:o.title,participants:o.participants});for(let t of o.phases??[])n[t.songId]||(n[t.songId]={stepId:o.id,stepTitle:o.title,participants:o.participants})}return n}var gt=class n{constructor(o){this.el=o;Y(()=>{let t=this.state.currentSong()?.id;t&&queueMicrotask(()=>{this.el.nativeElement.querySelector(`#fabi-song-${t}`)?.scrollIntoView({behavior:"smooth",block:"start"})})})}el;musicianFilter;state=m(dt);stepBySongId=Dn();get songs(){let o=[...st].sort((t,e)=>t.order-e.order);return this.musicianFilter?o.filter(t=>t.instrumentation.includes(this.musicianFilter)):o}static \u0275fac=function(t){return new(t||n)(J(E))};static \u0275cmp=I({type:n,selectors:[["app-fabi-songbook"]],inputs:{musicianFilter:"musicianFilter"},decls:6,vars:1,consts:[[1,"fabi-book"],[1,"field-label"],["multi","false"],[3,"id","expanded","is-current"],[3,"id","expanded"],[1,"song-order"],[1,"song-moment"],[1,"current-badge"],[1,"fabi-lyrics"],[1,"lyrics-running"],[1,"lyrics-empty"],[1,"lyrics-part"],[1,"lyrics-part-label"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"span",1),c(2),r(),s(3,"mat-accordion",2),w(4,En,13,10,"mat-expansion-panel",3,xn),r()()),t&2&&(d(2),C("Letras para cantar \u2014 ",e.songs.length," m\xFAsicas"),d(2),M(e.songs))},dependencies:[_t,pt,ct,mt,bt,ue],styles:[".fabi-book[_ngcontent-%COMP%]{margin-top:8px}.fabi-book[_ngcontent-%COMP%] > .field-label[_ngcontent-%COMP%]{display:block;margin-bottom:8px}.song-order[_ngcontent-%COMP%]{color:var(--ink);font-weight:700;margin-right:8px;font-family:var(--font-display)}.current-badge[_ngcontent-%COMP%]{margin-left:8px;font-size:.62rem;font-weight:700;letter-spacing:.08em;color:var(--ink);background:var(--gold-soft);border-radius:999px;padding:2px 8px;vertical-align:middle}  .fabi-book .mat-expansion-panel.is-current{border:1px solid var(--gold);box-shadow:0 0 0 1px var(--gold)}  .fabi-book .mat-expansion-panel-header{height:auto!important;min-height:56px;padding:14px 16px}.fabi-lyrics[_ngcontent-%COMP%]{padding-top:4px}.song-moment[_ngcontent-%COMP%]{font-size:.78rem;font-weight:600;color:var(--ink);margin-left:4px}.lyrics-part[_ngcontent-%COMP%]{padding:14px 0}.lyrics-part[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px dashed var(--line)}.lyrics-part-label[_ngcontent-%COMP%]{display:block;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:8px}.lyrics-running[_ngcontent-%COMP%]{white-space:pre-line;margin:0;font-family:var(--font-display);font-size:1.35rem;line-height:1.7;color:var(--ink)}.lyrics-empty[_ngcontent-%COMP%]{color:var(--ink-soft);font-style:italic;margin:0}"]})};var Se=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["app-musicians"]],decls:8,vars:0,consts:[[1,"container-page"],[1,"font-display","page-title"],["animationDuration","0ms"],["label","Banco de M\xFAsicas"],["label","Fabi"],["musicianFilter","Fabiana"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"h1",1),c(2,"Modo M\xFAsicos"),r(),s(3,"mat-tab-group",2)(4,"mat-tab",3),D(5,"app-song-catalog"),r(),s(6,"mat-tab",4),D(7,"app-fabi-songbook",5),r()()())},dependencies:[we,Bt,Ie,ht,gt],encapsulation:2})};export{Se as Musicians};
