/*! jQuery UI - v1.11.4 - 2015-09-25
* http://jqueryui.com
* Includes: core.js, widget.js, position.js, autocomplete.js, datepicker.js, menu.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(u.inline?u.dpDiv.parent()[0]:u.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var h=0,l=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=l.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=l.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget,function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i
})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var u;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),u===n&&(u=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,u=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,N,M,C,P,A,I,H,z,F,E,W,O,L,j=new Date,R=this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())),Y=this._get(e,"isRTL"),J=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),K=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),U=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),G=1!==V[0]||1!==V[1],X=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-U,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-V[0]*V[1]+1,$.getDate())),t=Q&&Q>t?Q:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-q,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+q,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?X:R,o=K?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=J?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;V[0]>w;w++){for(k="",this.maxRows=4,T=0;V[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",N="",G){if(N+="<div class='ui-datepicker-group",V[1]>1)switch(T){case 0:N+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case V[1]-1:N+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:N+=" ui-datepicker-group-middle",S=""}N+="'>"}for(N+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,Q,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)C=(x+u)%7,M+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[C]+"'>"+p[C]+"</span></th>";for(N+=M+"</tr></thead><tbody>",P=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,P)),A=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((A+P)/7),H=G?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-A)),F=0;H>F;F++){for(N+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)W=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],O=z.getMonth()!==Z,L=O&&!y||!W[0]||Q&&Q>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(O?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(O&&!v?"":" "+W[1]+(z.getTime()===X.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(O&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(O&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===X.getTime()?" ui-state-active":"")+(O?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);
N+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),N+="</tbody></table>"+(G?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=N}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker});

/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);


/*
 *  EXPEDIA SEARCH WIZARD
 */

/**
 * Created by gamini_d on 7/17/14.
 */


Eyepax = {};
Eyepax.Globals = {
    Dest: 'sri',
    MaxTravellers: 6, // set maximum number of travellers
    MaxRooms: [1,2,3,4,5,6,7,8],//set Maximum number of Rooms
    MaxRoomsFH: [1,2,3,4],//set Maximum number of Rooms
    MaxAdults:[1,2,3,4,5,6],
    MaxChildren:[0,1,2,3,4,5],
    ChildAges: [-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    MaxDestinations: [1,2,3],
    CalanderMonths:2,
    WinW:1024,
    WinH:600,
    Stars: [
        {key:"Afficher tout ", value:0},
        {key:"1 étoile ou plus", value:10},
        {key:"2 étoiles ou plus", value:20},
        {key:"3 étoiles ou plus", value:30},
        {key:"4 étoiles ou plus", value:40},
        {key:"5 étoiles", value:50}
    ],
    FlightSeveralDestinations: [1,2,3,4,5,6],
    AirLineClasses:[
        {key:"economy", value:'Classe Économie'},
        {key:"premium", value:"Première classe"},
        {key:"first", value:'Affaires'},        
        {key:"business", value:'Premium Voyageur'}
               
    ],
    AirLines: [
        {key:"UX", value:"Air Europa"}, 
        {key:"JP", value:"Adria Airways"}, 
        {key:"A3", value:"Aegean"}, 
        {key:"EI", value:"Aer Lingus"}, 
        {key:"SU", value:"Aeroflot-Russian Airlines"}, 
        {key:"AR", value:"Aerolineas Argentinas"}, 
        {key:"AM", value:"Aeromexico"}, 
        {key:"VV", value:"Aerosvit Airlines"}, 
        {key:"3S", value:"Air Antilles"}, 
        {key:"3O", value:"Air Arabia Maroc"}, 
        {key:"KC", value:"Air Astana"}, 
        {key:"BT", value:"Air Baltic"}, 
        {key:"AC", value:"Air Canada"}, 
        {key:"AF", value:"Air France"}, 
        {key:"AI", value:"Air India"}, 
        {key:"LT", value:"Air Lituanica"}, 
        {key:"MD", value:"Air Madagascar"}, 
        {key:"KM", value:"Air Malta"}, 
        {key:"MK", value:"Air Mauritius"}, 
        {key:"SW", value:"Air Namibia"}, 
        {key:"NZ", value:"Air New Zealand"}, 
        {key:"OG", value:"Air Onix"}, 
        {key:"JU", value:"Air Serbia"}, 
        {key:"HM", value:"Air Seychelles"}, 
        {key:"VT", value:"Air Tahiti"}, 
        {key:"TN", value:"Air Tahiti Nui"}, 
        {key:"TS", value:"Air Transat"}, 
        {key:"AB", value:"airberlin"}, 
        {key:"AZ", value:"Alitalia"}, 
        {key:"NH", value:"All Nippon Airways"}, 
        {key:"AA", value:"American Airlines"}, 
        {key:"W3", value:"Arik Air International"}, 
        {key:"IQ", value:"Augsburg Airways"}, 
        {key:"OS", value:"Austrian Airlines"}, 
        {key:"4T", value:"Belair Airlines"}, 
        {key:"NT", value:"Binter Canarias"}, 
        {key:"/V", value:"Blu-Express"}, 
        {key:"OB", value:"Boliviana De Aviacion"}, 
        {key:"BA", value:"British Airways"}, 
        {key:"SN", value:"Brussels Airlines"}, 
        {key:"FB", value:"Bulgaria Air"}, 
        {key:"V3", value:"Carpatair"}, 
        {key:"CX", value:"Cathay Pacific"}, 
        {key:"CI", value:"China Airlines"}, 
        {key:"MU", value:"China Eastern Airlines"}, 
        {key:"CF", value:"City Airline"}, 
        {key:"DE", value:"Condor"}, 
        {key:"CM", value:"Copa"}, 
        {key:"OU", value:"Croatia Airlines"}, 
        {key:"OK", value:"Czech Airlines"}, 
        {key:"DL", value:"Delta"}, 
        {key:"B5", value:"East African Safari Air Express"}, 
        {key:"LY", value:"El Al"}, 
        {key:"EK", value:"Emirates"}, 
        {key:"OV", value:"Estonian Air"}, 
        {key:"EY", value:"Etihad Airways"}, 
        {key:"7V", value:"Federal Air"}, 
        {key:"AY", value:"Finnair"}, 
        {key:"4U", value:"Germanwings"}, 
        {key:"GF", value:"Gulf Air"}, 
        {key:"HU", value:"Hainan Airlines"}, 
        {key:"2L", value:"Helvetic Airways"}, 
        {key:"HX", value:"Hong Kong Airlines"}, 
        {key:"IB", value:"Iberia"}, 
        {key:"FI", value:"Icelandair"}, 
        {key:"4O", value:"Interjet"}, 
        {key:"JL", value:"Japan Airlines"}, 
        {key:"KQ", value:"Kenya Airways"}, 
        {key:"KL", value:"KLM"}, 
        {key:"LA", value:"LAN Airlines"}, 
        {key:"4M", value:"Lan Argentina"}, 
        {key:"XL", value:"LAN Ecuador"}, 
        {key:"LP", value:"LAN Peru"}, 
        {key:"LO", value:"LOT-Polish Airlines"}, 
        {key:"LH", value:"Lufthansa"}, 
        {key:"LG", value:"Luxair"}, 
        {key:"MH", value:"Malaysia Airlines"}, 
        {key:"IG", value:"Meridiana fly"}, 
        {key:"ME", value:"Middle East Airlines"}, 
        {key:"ZB", value:"Monarch Airlines"}, 
        {key:"HG", value:"Niki"}, 
        {key:"DY", value:"Norwegian Air Shuttle"}, 
        {key:"OL", value:"OLT-Ostfriesische Lufttransport"}, 
        {key:"OA", value:"Olympic"}, 
        {key:"QF", value:"Qantas Airways"}, 
        {key:"QR", value:"Qatar Airways"}, 
        {key:"AT", value:"Royal Air Maroc"}, 
        {key:"RJ", value:"Royal Jordanian"}, 
        {key:"WB", value:"Rwandair"}, 
        {key:"S7", value:"S7 Airlines"}, 
        {key:"SK", value:"SAS"}, 
        {key:"SQ", value:"Singapore Airlines"}, 
        {key:"JZ", value:"Skyways"}, 
        {key:"QS", value:"Smart Wings"}, 
        {key:"SA", value:"South African Airways"}, 
        {key:"LX", value:"Swiss International Air Lines"}, 
        {key:"JJ", value:"TAM Airlines"}, 
        {key:"TP", value:"TAP Portugal"}, 
        {key:"RO", value:"Tarom-Romanian Air Transport"}, 
        {key:"TG", value:"Thai Airways International"}, 
        {key:"UN", value:"Transaero Airlines"}, 
        {key:"TO", value:"Transavia France"}, 
        {key:"HV", value:"Transavia Holland"}, 
        {key:"TU", value:"Tunis Air"}, 
        {key:"PS", value:"Ukraine International Airlines"}, 
        {key:"UA", value:"United"}, 
        {key:"US", value:"US Airways"}, 
        {key:"VN", value:"Vietnam Airlines"}, 
        {key:"VS", value:"Virgin Atlantic"}, 
        {key:"V7", value:"Volotea"}, 
        {key:"VY", value:"Vueling Airlines"}, 
        {key:"2W", value:"Welcome Air"}, 
        {key:"W6", value:"Wizz Air"}, 
        {key:"K/", value:"Wow Air"}
    ],
    CarType: [/*car option types - nee to match with the service*/
        {value:"0", key:"Aucune préférence"}, 
        {value:"2", key:"Économique"}, 
        {value:"5", key:"Compacte"}, 
        {value:"3", key:"Intermédiaire"}, 
        {value:"6", key:"Standard"}, 
        {value:"4", key:"Berline"}, 
        {value:"9", key:"Haut de gamme"}, 
        {value:"7", key:"Luxe"}, 
        {value:"12", key:"Cabriolet"}, 
        {value:"8", key:"Monospace"}, 
        {value:"11", key:"Utilitaire version sport"}, 
        {value:"15", key:"Sportive"}
    ],
    CarOptions: [/*additional car options - need to match woth the service*/
        {value:"sesr", key:"Porte-skis"}, 
        {value:"seis", key:"Siège bébé"}, 
        {value:"sets", key:"Siège enfant"}, 
        {value:"sesc", key:"Chaînes"},
        {value:"sens", key:"Système de navigation"}
    ],
};
Eyepax.ServiceURL = {
    BaseDestURL: "http://suggest.expedia.com/hint/es/v1/ac/fr_FR/",
    BaseOriginURL: "http://suggest.expedia.com/hint/es/v1/ac/fr_FR/",
    BaseHotelRquestURL: "http://www.expedia.fr/Hotel-Search?storedCheckoutField=&storedCheckinField=&lang=1036#",
    BasePackageRquestURL: "http://www.expedia.fr/packagesearch?subm=1&dsct=&dlvl=&rtmn=&rtmx=&",
    BaseFlightSearchURL: "http://www.expedia.fr/Flights-Search?",
    BaseMultiFlightSearchURL: "http://www.expedia.fr/Flight-SearchResults?",
    BaseCocheURL:"http://suggest.expedia.com/hint/es/v3/ac/fr_FR/",
    BaseHotelFlightURL:"http://www.expedia.fr/pubspec/scripts/eap.asp?GOTO=PACKAGEWIZ&",
    HotelDestinationParams:"?type=31&ab=&lob=HOTELS&format=json&dest=false&_=1405667138761",
    BaseFlightHotelURL:"http://www.expedia.fr/pubspec/scripts/eap.asp?GOTO=PACKAGEWIZ&",
    //DestinationParams : "?type=95&ab=&lob=PACKAGES&format=json&dest=false&_=1405667138761",
    //OriginParams: "?type=95&ab=&lob=PACKAGES&format=json&dest=false&_=1406527187931",
    //CocheParams:"?format=json&type=31&lob=CARS&dest=false",
    HotelParams:"?format=json&type=31&lob=HOTELS&dest=false&ab=909.1",
    PackageParams:"?type=95&ab=&lob=PACKAGES&format=json&dest=false",
    FlightParams:"?type=95&ab=&lob=FLIGHTS&format=json&dest=false",
    CochePicUpParams:"?format=json&type=31&lob=CARS&dest=false",
    CochePicParams:"",
    CocheAirportParams:"?format=json&type=1&lob=CARS&dest=false",
    BaseCocheSearchURL: "http://www.expedia.fr/carsearch?dagv=1&"

};
Eyepax.Locale = {};
Eyepax.Locale.Labels = [
    /* -- variable needed in js object and html --*/
    {key:"childlbl", value:"Enfant"}, /* Label on top of the child age selector */
    {key:"roomlbl", value:"Habitación"},
    /*common labels - hotels, destinations dates etc*/
    {key:"hotellbl", value:'Hôtel'},
    {key:"flightlbl", value:'Vol'},
    {key:"flighthotellbl", value:'Vol + Hôtel'},
    {key:"destlbl", value:"À destination de"},
    {key:"roomslbl", value:"Chambres"},    
    {key:"originlbl", value:"Au départ de"},
    {key:"outlbl", value:"Départ"},
    {key:"backlbl", value:"Retour"},
    {key:"checklbl", value:"Arrivée"},
    {key:"hotelnamelbl", value:"Nom de l'hôtel"},
    {key:"hotelclasslbl", value:"Catégorie de l'hôtel"},
    {key:"searchlbl", value:"Rechercher"},
    {key:"nodateslbl", value:"No sé las fechas"},
    {key:"advancedlbl", value:"Plus d'options"},
    {key:"hideadvancedlbl", value:"Hide Options"},
    /*common labels - humans, ages etc*/ 
    {key:"adultslbl", value:"Adultes(18 +)"},
    {key:"childrenslbl", value:"Enfants(0 - 17)"},
    {key:"addflightlbl", value:"Ajouter un vol"},
    {key:"flightfromlbl", value:"Vol depuis"},
        
    /* --- Flight Tab labels ---*/
    {key:"returnlbl", value:"Aller-retour"},
    {key:"onewaylbl", value:"Aller simple"},
    {key:"severallbl", value:"Plusieurs destinations"},
    {key:"directlbl", value:"Vol direct uniquement"},
    {key:"refundablelbl", value:"Vols remboursables"},
    {key:"preferedairlinelbl", value:"Compagnie souhaitée"},
    {key:"airlineclasslbl", value:"Classe"},
    {key:"entrancelbl", value:"Arrivée"},
    {key:"exitlbl", value:"Départ"},
    {key:"addhotellbl", value:"Ajouter un hôtel"},
    {key:"addcarlbl", value:"Ajouter une voiture"},
    {key:"addcardesclbl", value:"Une voiture sera ajoutée à votre recherche. Vous pourrez personnaliser votre choix de voiture à une date ultérieure."},
    /* ---- Flight and Hotel Tab Labels ---*/
    {key:"partoftriplbl", value:"Je cherche un hôtel pour une partie de mon voyage uniquement."},
    /* -----car Tab----------------------- */
    {key:"cochelbl", value:"Voiture"},
    {key:"pickuploclbl", value:"Lieu de prise en charge"},
    {key:"airportdelilbl", value:"Lieu de restitution"},
    {key:"pickdatelbl", value:"Date de prise en charge"},
    {key:"timelbl", value:"temps"},
    {key:"deliverylbl", value:"Date de restitution"},
    {key:"cochetypelbl", value:"Type de voiture de location"},
    {key:"hidecocheadvancedlbl", value:"Hide Additional Options"},
    {key:"cocheadvancedlbl", value:"Afficher les options"},
    {key:"learnmorelbl", value:"Más información"},
    {key:"extraitemslbl", value:"Équipements spéciaux"},
    {key:"citylbl", value:"Région/ville"},
    {key:"attractionlbl", value:"Attractions"},
    {key:"airportlbl", value:"Aéroports"},
    {key:"learnmoretxtlbl", value:"Es posible que el equipamiento especial no esté disponible para todos los coches o en todas las agencias de alquiler. Se trata de solicitudes cuya disponibilidad no se garantiza. Te recomendamos que te pongas en contacto con la compañía de alquiler de coches para confirmar la disponibilidad. Pueden aplicarse cargos adicionales."},
    /*----Error Labels----*/
    {key:"errheaderlbl", value:"Veuillez corriger les erreurs ci-dessous."}
    //----End Error Labels----//
];
Eyepax.Locale.MonthsShort = ['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUN', 'JUL', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC'];
Eyepax.Locale.DaysShort = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
Eyepax.Data = {
    Destination: "",
    Origin: "",
    StartDate: "",
    EndDate:"",
    Nodate: false,
    Hotelforpart: false,
    NumRoom:1,
    Rooms:[{Count:1,ID:"Room1", Adults:2, Childs:0, MaxAdults:Eyepax.Globals.MaxAdults, MaxChildren:Eyepax.Globals.MaxChildren, MaxRooms: Eyepax.Globals.MaxRooms, ChildAges:Eyepax.Globals.ChildAges }],
    Entrance: 0,
    Exit: 0
};
Eyepax.FlightData = {
    Destination: "",
    Origin: "",
    StartDate: "",
    EndDate:"",
    TripType: "RoundTrip",
    NumRoom:1,
    TravellerCombo: [{Count:1,ID:"Room1", Adults:2, Childs:0, MaxAdults:Eyepax.Globals.MaxAdults, MaxChildren:Eyepax.Globals.MaxChildren, MaxRooms: Eyepax.Globals.MaxRooms, ChildAges:Eyepax.Globals.ChildAges }],
    MultiDestination: []
};
Eyepax.Validation = {};
Eyepax.Validation.Types = ['maxnum', 'empty', 'age'];
Eyepax.Validation.Flight = {};
Eyepax.Validation.ErrorMSG = [
    {key: 'empty', value: 'Veuillez remplir le champ en surbrillance relatif au lieu de départ, situé ci-dessous.', showed: false},
    {key: 'maxnum', value: 'Une réservation peut comprendre uniquement entre 1 et 6 personnes sur notre site. Veuillez modifier le nombre de voyageurs pour votre recherche.', showed: false},
    {key: 'age', value: 'Veuillez indiquer ci-dessous l\'âge des enfants.', showed: false}
];
Eyepax.Validation.FandH = {};


$(document).ready(function () {
        
            /* set default values*/
            if(typeof(xp_destination) != "undefined" && xp_destination !== null && xp_destination != "") {

                xp_destination = xp_destination.replace("#", "");
                var xp_originH = xp_destination;
                var xp_originFH = xp_destination;
                var xp_originF = xp_destination;
                var xp_startC = xp_destination;

                getDefualtsearchVal(Eyepax.ServiceURL.BaseDestURL, Eyepax.ServiceURL.HotelParams, xp_destination, 'r', 'f', 'id', 'a', 'jsonp', 'customeventH', 'hotel');
                $(document).on('customeventH', function(e, defaultval){
                    $('#H-Destination').val(defaultval.value);
                    //$("#H-Destination").data("destiid", defaultval.id);
                    $("#H-Destination").attr("data-destiid", defaultval.id);
                    $("#H-Destination").attr("data-desticode", defaultval.code);
                    $('#FH-Destination').val(defaultval.value);
                });            
            }
            /*if(typeof(xp_originFH) != "undefined" && xp_originFH !== null) {

                getDefualtsearchVal(Eyepax.ServiceURL.BaseOriginURL, Eyepax.ServiceURL.PackageParam, xp_originFH, 'r', 'f', 'id', 'jsonp', 'defaultsetterFH');
                $(document).on('defaultsetterFH', function(e, defaultval){
                    $('#FH-Origin').val(defaultval.value);
                    //$('#FH-Destination').val(defaultval.value);
                    //$("#H-Destination").data("destiID", defaultval.id);
                });            
            }*/
            if(typeof(xp_originF) != "undefined" && xp_originF !== null) {
                getDefualtsearchVal(Eyepax.ServiceURL.BaseOriginURL, Eyepax.ServiceURL.PackageParams, xp_originF, 'r', 'f', 'id', 'a', 'jsonp', 'defaultsetterOFH', 'flight');
                $(document).on('defaultsetterOFH', function(e, defaultval){
                    $('#F-Destination').val(defaultval.value);
                    //$('#FH-Destination').val(defaultval.value);
                    //$("#H-Destination").data("destiID", defaultval.id);
                });            
            } 
            /*set defaul value for Car option*/  
            if(typeof(xp_startC) != "undefined" && xp_startC !== null) {
                getDefualtsearchVal(Eyepax.ServiceURL.BaseCocheURL, Eyepax.ServiceURL.CochePicParams, xp_startC, 'sr', 'f', 'id', 'a', 'jsonp', 'defaultsetterC', 'car');
                $(document).on('defaultsetterC', function(e, defaultval){
                    $('#C-pickuplocation').val(defaultval.value);
                    $("#C-airportdeli").attr('disabled','disabled').fadeTo('slow',.6);
                    $("#C-airportdeli").parent().attr('disabled','disabled').fadeTo('slow',.6); 
                    //$('#FH-Destination').val(defaultval.value);
                    //$("#H-Destination").data("destiID", defaultval.id);
                });            
            } 


        Eyepax.Globals.WinW = $(window).width();
        $(window).resize(function()
        {
            calandercountsetter();
            Eyepax.Globals.WinW = $(window).width();
            // datepicker distance from right
            
            var datepickerpopup = $("#ui-datepicker-div");
            if(datepickerpopup.is(':visible')){
                var elemleft = $('#ui-datepicker-div').offset().left;
                var rightgap = Eyepax.Globals.WinW - ($('#ui-datepicker-div').offset().left + $('#ui-datepicker-div').width());  
                if(rightgap <0){
                    elemleft = elemleft + rightgap;
                    $('#ui-datepicker-div').css('left', elemleft);
                    $(datepickerpopup).find('.tooltip-arrow').css('margin-left', -(rightgap));
                }
            }        
        });

        /*remove ie8 body tag styles*/
        $("body").removeAttr('style');
        /*add place holder text on IE8*/
        ieplaceholderadder();

        //set calander months for different size views
        calandercountsetter();
        
    var tabContainer = {
        searchWrapper: $("#searchwrapper"),
        hotelContainer: $('#hotel'),
        activeTab: $('.tab-content .tab-pane.active'),
        config:{
            tab:"hotel1"
        },



        initHotel: function(config){
	        
            $.extend(this.config, config);
            //add localization
            addLocalization(tabContainer);

            //adding rooms
            //default room
            var fmaxroom = $("#H-NumRoom");
            fmaxroom.html("");
            $("#maxroomsTmplsp").tmpl(Eyepax).appendTo(fmaxroom);
            $(".extrooms").html("");
            $( "#adultchildTmpl" ).tmpl(Eyepax.Data.Rooms).appendTo(".extrooms");
            $(".hotelrating").html("");
            $( "#hotelrating" ).tmpl(Eyepax.Globals.Stars).appendTo(".hotelrating");
            //----

            /* set dates to dateless search */
            $(tabContainer.hotelContainer).find("#dateless").change(function() {
                if($(this).is(':checked')){
                    var newdate = new Date();
                    var numberOfDaysToAdd = 14;
                    var dateRange = 4;
                    var firstdate = newdate.setDate(newdate.getDate() + numberOfDaysToAdd);
                    var seconddate = new Date(firstdate);
                    seconddate.setDate(seconddate.getDate() + dateRange);
                    var tempnewdate = $.datepicker.formatDate('dd/mm/yy', new Date(newdate));
                    var tempsecnddate = $.datepicker.formatDate('dd/mm/yy', new Date(seconddate));
                    $(tabContainer.hotelContainer).find( "#H-startDate" ).datepicker('setDate', tempnewdate);
                    $(tabContainer.hotelContainer).find( "#H-endDate" ).val(tempsecnddate);
                }
                else{
                     $(tabContainer.hotelContainer).find( "#H-startDate" ).val("");
                     $(tabContainer.hotelContainer).find( "#H-endDate" ).val("");
                }
                
            });

            var numrooms = $(".numrooms");
            var roomElem = $(tabContainer.activeTab.find(numrooms)[0]);
            roomElem.on("change", function(){
                var numRooms = this.value;
                var rooms = [];
                var temprooms;
                if(numRooms > 0){
                    var tempnumrooms = 0;
                    if((1 < Eyepax.Data.Rooms.length) &&(Eyepax.Data.Rooms.length < numRooms)){
                        tempnumrooms = numRooms - Eyepax.Data.Rooms.length;
                        insertRooms(Eyepax.Data.Rooms.length+1, rooms, numRooms);
                    }
                    else if(Eyepax.Data.Rooms.length == 1){
                        insertRooms(2, rooms, numRooms);
                    }
                    else if(Eyepax.Data.Rooms.length > numRooms){
                        Eyepax.Data.Rooms.splice(numRooms, Eyepax.Data.Rooms.length-numRooms);
                    }

                    var temprooms = Eyepax.Data.Rooms.slice(0);
                }
                /*else{
                        Eyepax.Data.Rooms.splice(1, Eyepax.Data.Rooms.length-1);
                        if(!Eyepax.Data.Rooms.length ==1){
                            temprooms = Eyepax.Data.Rooms.slice(0);
                            temprooms.shift();
                        }
                        else{
                            temprooms = Eyepax.Data.Rooms.slice(0);
                        }
                        
                }*/
                $(".extrooms").html("");
                $( "#adultchildTmpl" ).tmpl(temprooms).appendTo(".extrooms");

                /////////
                var numAdultelem = $(".extrooms").find('.number-of-travellersA');
                numAdultelem.on("change", function(){
                    var adultCount = this.value;
                    var relatedRoom = $(this).data('room');
                    var currentRoom = findRoom(relatedRoom);
                    currentRoom[0].Adults = adultCount;
                });
                /////////

                //adding Childs with ages
                var numChildselems = $(".extrooms").find('.number-of-travellersC');
                 numChildselems.on("change", function(){
                    var numChilds = this.value;
                    var relatedRoom = $(this).data('room');
                     var addtochildages = $(this).parents("#H-" + relatedRoom).next(".childages");
                    var currentRoom = findRoom(relatedRoom);
                    if(currentRoom[0].Childs == 0){
                        var tempChilds = [];
                        for(var i = 1; numChilds >= i; i++){
                            var tempChild = {};
                            //tempChild.key = "Child" + i;
                            tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                            tempChild.value = -1;
                            tempChilds.push(tempChild);
                        }
                        currentRoom[0].Childs = tempChilds;
                    }
                    else if((0 < currentRoom[0].Childs.length) &&(currentRoom[0].Childs.length < numChilds)){
                        for(var i = currentRoom[0].Childs.length+1; numChilds >= i; i++){
                            var tempChild = {};
                            tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                            tempChild.value = -1;
                            currentRoom[0].Childs.push(tempChild);
                        }
                    }
                    else if(currentRoom[0].Childs.length > numChilds){
                        currentRoom[0].Childs.splice(numChilds, currentRoom[0].Childs.length-numChilds);
                    }

                     addtochildages.html("");
                    $( "#childageTmpl" ).tmpl(currentRoom[0]).appendTo(addtochildages);
                    $(addtochildages).show();


                    addCHildAgetoObj($(tabContainer.hotelContainer).find('.section-children-ages'));
                    ///addCHildAgetoObj($(fhTab).find('.section-children-ages'));
                    /////////
                });
                // to do - cleanup
                var addtochildages1 = $("#hotel .room-traveller-combo").find("#H-Room1").next(".childages");
                addtochildages1.remove();
                //insertFirstRoom($(".room-traveller-combo"), $("#hotelOnly-1"));
                removeFirstRoom($(".room-traveller-combo"));

            });

            // to do - cleanup
            //////////////////////
            /////////
                var numAdultelem = $("#hotelOnly-1").find('.number-of-travellersA');
                numAdultelem.on("change", function(){
                    var adultCount = this.value;
                    var relatedRoom = $(this).data('room');
                    var currentRoom = findRoom(relatedRoom);
                    currentRoom[0].Adults = adultCount;
                });
                /////////

                //adding Childs with ages
                //var numChildselems = $("#hotelOnly-1").find('.number-of-travellersC');
                var numChildselems = $(tabContainer.hotelContainer).find('.number-of-travellersC');
                 numChildselems.on("change", function(){
                    var numChilds = this.value;
                    var relatedRoom = $(this).data('room');
                     //var addtochildages = $(this).parents("#H-" + relatedRoom).next(".childages");
                     var addtochildages = $("#hotel .room-traveller-combo").find("#H-" + relatedRoom).next(".childages");
                    var currentRoom = findRoom(relatedRoom);
                    if(currentRoom[0].Childs == 0){
                        var tempChilds = [];
                        for(var i = 1; numChilds >= i; i++){
                            var tempChild = {};
                            tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                            tempChild.value = -1;
                            tempChilds.push(tempChild);
                        }
                        currentRoom[0].Childs = tempChilds;
                    }
                    else if((0 < currentRoom[0].Childs.length) &&(currentRoom[0].Childs.length < numChilds)){
                        for(var i = currentRoom[0].Childs.length+1; numChilds >= i; i++){
                            var tempChild = {};
                            tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                            tempChild.value = -1;
                            currentRoom[0].Childs.push(tempChild);
                        }
                    }
                    else if(currentRoom[0].Childs.length > numChilds){
                        currentRoom[0].Childs.splice(numChilds, currentRoom[0].Childs.length-numChilds);
                    }

                    //addtochildages.remove();
                    addtochildages = $("#hotel").find("#H-" + relatedRoom).next(".childages");
                    addtochildages.html("");
                    $( "#childageTmpl" ).tmpl(currentRoom[0]).appendTo(addtochildages);
                    $(addtochildages).show();

                    addCHildAgetoObj($(tabContainer.hotelContainer).find('.section-children-ages'));

                });
                    /////////
            //////////////////////
            // to do - cleanup
            var addtochildages1 = $("#hotel .room-traveller-combo").find("#H-Room1").next(".childages");
            addtochildages1.remove();
            //insert first room if Rooms = 1 and no childs Childs = 0
            var $Rooms = Eyepax.Data.Rooms;
            if(($Rooms.length == 1) && ($Rooms[0].Childs == 0)) {
                insertFirstRoom($(".room-traveller-combo"), $("#hotelOnly-1"));
            }
            else{
                $("#hotel .room-traveller-combo").find("#H-Room1").remove();
                $("#hotel .room-traveller-combo").find(".childages").remove();
                //addtochildages1.remove();
            }            


            /*$("#hotel #advanced-options").off('click').on('click', function(){
                $this = $(this);
                $("#hotelOnly-additionalOptions").toggle(function(){
                    if($("#hotelOnly-additionalOptions").is(":visible")){
                        $this.find('span.icon').css('transform', 'rotate(-180deg)');
                    }
                    else{
                        $this.find('span.icon').css('transform', 'rotate(0deg)');
                    }
                    
                    //$this.find("span.icon-expand").toggleClass("icon-expand-after");

                });
            });*/
            $("#hotel").find("#addflight").change(function() {
                var partflight = $("#hotel").find("#hotelOnly-additionalOptions");

                if($(this).is(":checked")) {
                    partflight.slideDown();
                    $(partflight).find('.ui-autocomplete-input').attr('data-validate', 'true');//data-validatetype maxnum number-of-travellersC
                    //$(tabContainer.hotelContainer).find('.number-of-travellersC, .number-of-travellersA').attr('data-validatetype', 'maxnum');
                }
                else{
                    partflight.slideUp();
                    $(partflight).find('.ui-autocomplete-input').attr('data-validate', 'false');
                    //$(tabContainer.hotelContainer).find('.number-of-travellersC, .number-of-travellersA').removeAttr('data-validatetype');
                }
            });

            ///////////////////////////////
            var tempelemhide = $("#hotel .room-traveller-combo").find(".childages");
            if($.trim($(tempelemhide).html()) === ""){
                $(tempelemhide).hide();
            }
            /////////////////////////////

            //submit button click
            $("#hotel #H-searchButtonExt1").on('click', function(event) {
                var hotelTab = $("#hotel");
                if(validate(hotelTab)){
                    Eyepax.Data.DestinationV = hotelTab.find('#H-Destination').val();
                    Eyepax.Data.Destination = hotelTab.find('#H-Destination').data("destiid");
                    Eyepax.Data.FrAirport = hotelTab.find('#H-Flightfrom').val();
                    Eyepax.Data.DestID = Eyepax.Data.Destination + ":" + hotelTab.find('#H-Destination').data("desticode");
                    //Eyepax.Data.Destination = hotelTab.find('#H-Destination').val();
                    Eyepax.Data.StartDate = hotelTab.find('#H-startDate').val();
                    Eyepax.Data.EndDate = hotelTab.find('#H-endDate').val();
                    if(hotelTab.find('#addflight').is(':checked')){
                        Eyepax.Data.FlightFrom = hotelTab.find("#H-Flightfrom").val();
                        sendRequestwithflight(Eyepax.Data);
                    }
                        
                    else{
                        sendRequest(Eyepax.Data);
                    }                        
                }
                else{
                    return false;
                }

            });
        },
        initFlight: function(flightTab){

            var addhotel = $("#addhotel");
            var addcar = $("#addcar");

            /*add localization*/
            addLocalization(tabContainer);            

            addhotel.hide();
            addcar.hide();

            /*add elements with jquery templates*/
            var traverlercombo = $(flightTab).find('.extrooms');
            traverlercombo.html("");
            $( "#adultchildTmpl" ).tmpl(Eyepax.FlightData.TravellerCombo[0]).appendTo(traverlercombo);
            /*add adult count*/
            var numAdultelem = $(traverlercombo).find('.number-of-travellersA');
            numAdultelem.on("change", function(){
                var adultCount = this.value;
                var relatedRoom = $(this).data('room');
                var currentRoom = findRoomother(relatedRoom, Eyepax.FlightData.TravellerCombo);
                currentRoom[0].Adults = adultCount;
            });

            /*adding Childs with ages - elements*/
            var numChildselems = $(traverlercombo).find('.number-of-travellersC');
             numChildselems.on("change", function(){
                var numChilds = this.value;
                var relatedRoom = $(this).data('room');
                 var addtochildages = $(this).parents("#H-" + relatedRoom).next(".childages");
                //var currentRoom = findRoom(relatedRoom);
                var currentRoom = findRoomother(relatedRoom, Eyepax.FlightData.TravellerCombo);
                if(currentRoom[0].Childs == 0){
                    var tempChilds = [];
                    for(var i = 1; numChilds >= i; i++){
                        var tempChild = {};
                        tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                        tempChild.value = -1;
                        tempChilds.push(tempChild);
                    }
                    currentRoom[0].Childs = tempChilds;
                }
                else if((0 < currentRoom[0].Childs.length) &&(currentRoom[0].Childs.length < numChilds)){
                    for(var i = currentRoom[0].Childs.length+1; numChilds >= i; i++){
                        var tempChild = {};
                        tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                        tempChild.value = -1;
                        currentRoom[0].Childs.push(tempChild);
                    }
                }
                else if(currentRoom[0].Childs.length > numChilds){
                    currentRoom[0].Childs.splice(numChilds, currentRoom[0].Childs.length-numChilds);
                }

                //removeFirstRoom($(flightTab).find(".room-traveller-combo"));
                 addtochildages.html("");
                $( "#childageTmpl" ).tmpl(currentRoom[0]).appendTo(addtochildages);
                $(addtochildages).show();

                //addCHildAgetoObj($(".extrooms"));
                addCHildAgetoObj($(flightTab).find('.section-children-ages'));
                /////////section-children-ages
            });
            flightTab.find(".room-traveller-combo").html("");
            insertFirstRoom(flightTab.find(".room-traveller-combo"), flightTab.find(".extrooms #hotelOnly-1"));

            /*add airlines*/
            var arilines = $(flightTab).find('#F-Airline');
            //arilines.html("");
            arilines.html('<option value="" selected="selected">Sans preference</option>');
            $( "#airlinesTmpl" ).tmpl(Eyepax.Globals.AirLines).appendTo(arilines);
            /*add airline classes*/
            var arilineclasses = $(flightTab).find('#F-Class');
            arilineclasses.html("");
            $( "#airlineclassesTmpl" ).tmpl(Eyepax.Globals.AirLineClasses).appendTo(arilineclasses);

            $(flightTab).find('#FaddH-startDate').removeAttr('data-validate');
            $(flightTab).find('#FaddH-endDate').removeAttr('data-validate');
            
            var addedareas = $(flightTab).find('.addareas');
            //get check box options
            var flightTypes = $("#flight .flight-type-select input[type=radio]");
            flightTypes.on('change', function(){
                $this = $(this);
                var triptype = $(this).data('type');
                switch (triptype){
                    case "roundtrip":
                        resetErrorMSGStatus();
                        showRoundTripItems(flightTab);
                        flightTab.removeClass('multidesti');
                        $("#flight .showinlinethird").css('top','121px')
                        $(flightTab).find('#FaddH-startDate').removeAttr('data-validate');
                        $(flightTab).find('#FaddH-endDate').removeAttr('data-validate');
                        addedareas.show();
                        break;
                    case "oneway":
                        resetErrorMSGStatus();
                        showOnewayTripItems(flightTab);
                        $("#flight .showinlinethird").css('top','121px')
                        flightTab.removeClass('multidesti');
                        $(flightTab).find('#FaddH-startDate').removeAttr('data-validate');
                        $(flightTab).find('#FaddH-endDate').removeAttr('data-validate');
                        addedareas.hide();
                        break;
                    case "multi":
                        resetErrorMSGStatus();                        
                        showMulticityItems(flightTab);
                        $("#flight .showinlinethird").css('top','80px')
                        flightTab.addClass('multidesti');
                        $(flightTab).find('#FaddH-startDate').removeAttr('data-validate');
                        $(flightTab).find('#FaddH-endDate').removeAttr('data-validate');
                        addedareas.hide();
                        ieplaceholderadder();
                        break;
                }
            });           


            $("#F-advanced-options").off('click').on('click', function(){
                $this = $(this);
                $("#flightOnly-additionalOptions").toggle(function(){
                    if($("#flightOnly-additionalOptions").is(":visible")){
                        $this.find('span.icon').css('transform', 'rotate(-180deg)');
                    }
                    else{
                        $this.find('span.icon').css('transform', 'rotate(0deg)');
                    }
                    
                    //$this.find("span.icon-expand").toggleClass("icon-expand-after");

                });
            });

            $(flightTab).find('.room-traveller-combo').show();

            $("#F-addhotel").off('click').on('click', function(){
                $this = $(this);
                addhotel.toggle(function(){
                    if(addhotel.is(":visible")){
                        var faddhmaxroom = $("#FaddH-NumRoom");
                        faddhmaxroom.html("");
                        $("#maxroomsTmplsp").tmpl(Eyepax).appendTo(faddhmaxroom);
                        $(".extroomsflight").html("");
                        $( "#adultchildTmpl" ).tmpl(Eyepax.FlightData.TravellerCombo[0]).appendTo(".extroomsflight");
                        $(flightTab).find('.room-traveller-combo').hide();
                        $(flightTab).find('.extrooms').hide();
                        $(flightTab).find('#FaddH-NumRoom').val(Eyepax.FlightData.TravellerCombo.length);
                        $(flightTab).find('#FaddH-startDate').removeAttr('data-validate');
                        $(flightTab).find('#FaddH-endDate').removeAttr('data-validate');

                        $(flightTab).find('#H-NumAdult1').removeAttr('data-validatetype');
                        $(flightTab).find('#H-NumChild1').removeAttr('data-validatetype');

                        ///////////////////////////////////////////////////////////////////
                        var numrooms = $(".numrooms-FaddH");
                        var roomElem = $($(flightTab).find(numrooms)[0]);
                        roomElem.on("change", function(){
                            var numRooms = this.value;
                            var rooms = [];
                            var temprooms;
                            if(numRooms > 0){
                                var tempnumrooms = 0;
                                if((1 < Eyepax.FlightData.TravellerCombo.length) &&(Eyepax.FlightData.TravellerCombo.length < numRooms)){
                                    tempnumrooms = numRooms - Eyepax.FlightData.TravellerCombo.length;
                                    insertRooms(Eyepax.FlightData.TravellerCombo.length+1, rooms, numRooms, Eyepax.FlightData.TravellerCombo);
                                }
                                else if(Eyepax.FlightData.TravellerCombo.length == 1){
                                    insertRooms(2, rooms, numRooms, Eyepax.FlightData.TravellerCombo);
                                }
                                else if(Eyepax.FlightData.TravellerCombo.length > numRooms){
                                    Eyepax.FlightData.TravellerCombo.splice(numRooms, Eyepax.FlightData.TravellerCombo.length-numRooms);
                                }

                                var temprooms = Eyepax.FlightData.TravellerCombo.slice(0);
                            }
                            /*else{
                                    Eyepax.Data.Rooms.splice(1, Eyepax.Data.Rooms.length-1);
                                    if(!Eyepax.Data.Rooms.length ==1){
                                        temprooms = Eyepax.Data.Rooms.slice(0);
                                        temprooms.shift();
                                    }
                                    else{
                                        temprooms = Eyepax.Data.Rooms.slice(0);
                                    }
                                    
                            }*/
                            $(".extroomsflight").html("");
                            $( "#adultchildTmpl" ).tmpl(temprooms).appendTo(".extroomsflight");

                            /////////
                            var numAdultelem = $(".extroomsflight").find('.number-of-travellersA');
                            numAdultelem.on("change", function(){
                                var adultCount = this.value;
                                var relatedRoom = $(this).data('room');
                                var currentRoom = findRoom(relatedRoom, Eyepax.FlightData.TravellerCombo);
                                currentRoom[0].Adults = adultCount;
                            });
                            /////////

                            //adding Childs with ages
                            var numChildselems = $(".extroomsflight").find('.number-of-travellersC');
                            numChildselems.on("change", function(){
                                var numChilds = this.value;
                                var relatedRoom = $(this).data('room');
                                 var addtochildages = $(this).parents("#H-" + relatedRoom).next(".childages");
                                var currentRoom = findRoom(relatedRoom, Eyepax.FlightData.TravellerCombo);
                                if(currentRoom[0].Childs == 0){
                                    var tempChilds = [];
                                    for(var i = 1; numChilds >= i; i++){
                                        var tempChild = {};
                                        //tempChild.key = "Child" + i;
                                        tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                                        tempChild.value = -1;
                                        tempChilds.push(tempChild);
                                    }
                                    currentRoom[0].Childs = tempChilds;
                                }
                                else if((0 < currentRoom[0].Childs.length) &&(currentRoom[0].Childs.length < numChilds)){
                                    for(var i = currentRoom[0].Childs.length+1; numChilds >= i; i++){
                                        var tempChild = {};
                                        tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                                        tempChild.value = -1;
                                        currentRoom[0].Childs.push(tempChild);
                                    }
                                }
                                else if(currentRoom[0].Childs.length > numChilds){
                                    currentRoom[0].Childs.splice(numChilds, currentRoom[0].Childs.length-numChilds);
                                }

                                 addtochildages.html("");
                                $( "#childageTmpl" ).tmpl(currentRoom[0]).appendTo(addtochildages);
                                $(addtochildages).show();


                                addCHildAgetoObj($(flightTab).find('.section-children-ages'));
                                ///addCHildAgetoObj($(fhTab).find('.section-children-ages'));
                                /////////
                            });
                            // to do - cleanup
                            var addtochildages1 = $("#hotel .room-traveller-combo-flight").find("#H-Room1").next(".childages");
                            addtochildages1.remove();
                            //insertFirstRoom($(".room-traveller-combo"), $("#hotelOnly-1"));
                            //removeFirstRoom($(".room-traveller-combo"));

                        });
                            /************** for not changing rooms *****************/
                            /////////
                            var numAdultelem = $(".extroomsflight").find('.number-of-travellersA');
                            numAdultelem.on("change", function(){
                                var adultCount = this.value;
                                var relatedRoom = $(this).data('room');
                                var currentRoom = findRoom(relatedRoom, Eyepax.FlightData.TravellerCombo);
                                currentRoom[0].Adults = adultCount;
                            });
                            /////////

                            //adding Childs with ages
                            var numChildselems = $(".extroomsflight").find('.number-of-travellersC');
                            numChildselems.on("change", function(){
                                var numChilds = this.value;
                                var relatedRoom = $(this).data('room');
                                 var addtochildages = $(this).parents("#H-" + relatedRoom).next(".childages");
                                var currentRoom = findRoom(relatedRoom, Eyepax.FlightData.TravellerCombo);
                                if(currentRoom[0].Childs == 0){
                                    var tempChilds = [];
                                    for(var i = 1; numChilds >= i; i++){
                                        var tempChild = {};
                                        //tempChild.key = "Child" + i;
                                        tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                                        tempChild.value = -1;
                                        tempChilds.push(tempChild);
                                    }
                                    currentRoom[0].Childs = tempChilds;
                                }
                                else if((0 < currentRoom[0].Childs.length) &&(currentRoom[0].Childs.length < numChilds)){
                                    for(var i = currentRoom[0].Childs.length+1; numChilds >= i; i++){
                                        var tempChild = {};
                                        tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                                        tempChild.value = -1;
                                        currentRoom[0].Childs.push(tempChild);
                                    }
                                }
                                else if(currentRoom[0].Childs.length > numChilds){
                                    currentRoom[0].Childs.splice(numChilds, currentRoom[0].Childs.length-numChilds);
                                }

                                 addtochildages.html("");
                                $( "#childageTmpl" ).tmpl(currentRoom[0]).appendTo(addtochildages);
                                $(addtochildages).show();


                                addCHildAgetoObj($(flightTab).find('.section-children-ages'));
                                ///addCHildAgetoObj($(fhTab).find('.section-children-ages'));
                                /////////
                            });
                            /****************** end for not changing rooms ********************/
                        ///////////////////////////////////////////////////////////////////
                    }
                    else{
                        //$this.find('span.icon').css('transform', 'rotate(0deg)');
                        $(flightTab).find('.room-traveller-combo').show();
                        $(flightTab).find('.extrooms').hide();
                        $(flightTab).find('#H-Room1').show();
                        $(flightTab).find('#H-NumAdult1').attr('data-validatetype', 'maxnum');
                        $(flightTab).find('#H-NumChild1').attr('data-validatetype', 'maxnum');
                        var addedhotelarea = $(flightTab).find('#addhotel');
                        $(addedhotelarea).find('.number-of-travellersA').removeAttr('data-validatetype');
                        $(addedhotelarea).find('.number-of-travellersC').removeAttr('data-validatetype');
                    }
                });
            });
            $("#F-addcar").off('click').on('click', function(){
                $this = $(this);
                addcar.toggle(200);
            });

            //submit button click
            $(flightTab).find("#F-searchButtonExt1").on('click', function(event) {
                //set validation data attribute for multicity fields if partially selected
                var triptype = $('input[name=TripType]:checked', $(flightTab)).val();
                if(triptype === "multi"){
                    var multifields = $(flightTab).find(".multicity");
                    $.each(multifields, function(index, elemrow) {
                        var inputelems = $(elemrow).find('input');
                        var needvalidate = false;
                        $.each(inputelems, function(j, inputelem) {
                            if(inputelem.value != ""){
                                needvalidate = true;
                            }
                        });
                        if(needvalidate){
                            $(inputelems).attr({"data-validate": true, "data-validatetype": "empty"});
                        }
                        
                    });
                }

                if(validate(flightTab)){
                    datastr = {};
                    Eyepax.FlightData.Origin = flightTab.find('#F-Origin').val();
                    Eyepax.FlightData.Destination = flightTab.find('#F-Destination').val();

                    Eyepax.FlightData.NumRoom = 1;
                    //var triptype = $('input[name=TripType]:checked', $(flightTab)).val();
                    //datastr.trip = triptype;
                    Eyepax.FlightData.TripType = triptype;
                    Eyepax.FlightData.DataLegs = {};
                    switch (triptype){
                        case "roundtrip":
                            Eyepax.FlightData.StartDate = flightTab.find('#F-startDate').val();
                            Eyepax.FlightData.EndDate = flightTab.find('#F-endDate').val();
                            Eyepax.FlightData.MultiDestination = [];
                            if(addhotel.is(":visible")){
                                datastr.PackageType = 2;
                                if(addcar.is(":visible")){
                                    datastr.PackageType = 1;
                                    //datastr.FrAirport = flightTab.find('#F-Origin').data('desticode');
                                }
                                else{
                                    //datastr.FrAirport = Eyepax.FlightData.Origin;
                                }
                                datastr.FrAirport = Eyepax.FlightData.Origin;
                                datastr.DestName = Eyepax.FlightData.Destination;
                                datastr.FromDate = Eyepax.FlightData.StartDate;
                                datastr.ToDate = Eyepax.FlightData.EndDate;
                                if((flightTab.find('#FaddH-startDate').val() != "") && (flightTab.find('#FaddH-endDate').val() != "")){
                                    datastr.FlexFromDate = flightTab.find('#FaddH-startDate').val();
                                    datastr.FlexToDate = flightTab.find('#FaddH-endDate').val();
                                }
                                datastr.InfantInSeat=0;
                                datastr.needUTF8Decode=true;
                                datastr.lang=1036;
                                datastr. Direct=0;
                                var url = "";
                                if(Eyepax.FlightData.TravellerCombo.length > 0){
                                    var roomcounter = 0;
                                    datastr.NumRoom = Eyepax.FlightData.TravellerCombo.length;
                                    $.each(Eyepax.FlightData.TravellerCombo, function(i, room){          

                                        roomcounter = roomcounter + 1;

                                        datastr[ "NumAdult" + roomcounter] = room.Adults;

                                        if($.isArray(room.Childs)){
                                            datastr[ "NumChild" + roomcounter] = room.Childs.length;
                                            var childcounter = 0;
                                            $.each(room.Childs, function(index, child) {
                                                childcounter = childcounter + 1;
                                                datastr[ "Rm" + roomcounter + "Child" + childcounter + "Age"] = child.value;
                                            });
                                        }
                                        else
                                            datastr["NumChild" + roomcounter] = 0;
                                    });        
                                }
                                url = getURL(Eyepax.ServiceURL.BaseFlightHotelURL, datastr);
                                window.location.href = url;
                                return false;

                            }

                            Eyepax.FlightData.DataLegs["leg1"] = "from:" + Eyepax.FlightData.Origin + ",to:" + Eyepax.FlightData.Destination + ",departure:" + Eyepax.FlightData.StartDate + "TANYT";
                            Eyepax.FlightData.DataLegs["leg2"] = "from:" + Eyepax.FlightData.Destination + ",to:" + Eyepax.FlightData.Origin + ",departure:" + Eyepax.FlightData.EndDate + "TANYT";
                            datastr["leg1"] = "from:" + Eyepax.FlightData.Origin + ",to:" + Eyepax.FlightData.Destination + ",departure:" + Eyepax.FlightData.StartDate + "TANYT";
                            datastr["leg2"] = "from:" + Eyepax.FlightData.Destination + ",to:" + Eyepax.FlightData.Origin + ",departure:" + Eyepax.FlightData.EndDate + "TANYT";
                            break;
                        case "oneway":
                            Eyepax.FlightData.StartDate = flightTab.find('#F-startDate').val();
                            Eyepax.FlightData.EndDate = '';
                            Eyepax.FlightData.MultiDestination = [];

                            Eyepax.FlightData.DataLegs["leg1"] = "from:" + Eyepax.FlightData.Origin + "to:" + Eyepax.FlightData.Destination + ",departure:" + Eyepax.FlightData.StartDate;
                            datastr["leg1"] = "from:" + Eyepax.FlightData.Origin + ",to:" + Eyepax.FlightData.Destination + ",departure:" + Eyepax.FlightData.StartDate + "TANYT";
                            break;
                        case "multi":
                            Eyepax.FlightData.StartDate = '';
                            Eyepax.FlightData.EndDate = '';
                            var multicityElem = $(flightTab).find("#multiDestinationsDiv");

                            $.each(Eyepax.FlightData.MultiDestination, function(index, item) {
                                 var id = item.ID;

                                 var elemrow = $(multicityElem).find('.' + id);
                                 $.each($(elemrow).find('input'), function(index, inputbox) {
                                      switch($(inputbox).attr('name')){
                                        case "FrAirport":
                                            item.Origin = $(inputbox).val();
                                            break;
                                        case "ToAirport":
                                            item.Destination = $(inputbox).val();
                                            break;
                                        case "FromDate":
                                            item.Out = $(inputbox).val();
                                            break;
                                      }

                                 });
                                 Eyepax.FlightData.DataLegs["leg" + (index + 1)] = "from:"+item.Origin+",frCode:,to:"+item.Destination+",toCode:,departure:"+item.Out + "TANYT";
                                 datastr["leg" + (index + 1)] = "from:"+item.Origin+",frCode:,to:"+item.Destination+",toCode:,departure:"+item.Out + "TANYT";
                            });
                            break;
                    }
                    datastr.trip = triptype;
                    Eyepax.FlightData.DirectFlight = flightTab.find('#directFlightsOnly').prop('checked');
                    Eyepax.FlightData.FlightRefundable = flightTab.find('#refundableFlightsOnly').prop('checked');
                    Eyepax.FlightData.AirLine = flightTab.find('#F-Airline').val();
                    Eyepax.FlightData.AirLineClass = flightTab.find('#F-Class').val();


                    if(Eyepax.FlightData.TravellerCombo.length > 0){
                        var adults = 0;
                        var children = "0";
                        var seniors = 0;
                        var infantinlap = "Y";
                        var roomcounter = 0;
                        $.each(Eyepax.FlightData.TravellerCombo, function(i, combo){

                            adults = combo.Adults;
                            if($.isArray(combo.Childs)){
                                children = "";
                                children = combo.Childs.length.toString() + "[";
                                $.each(combo.Childs, function(index, child) {
                                    if(combo.Childs.length == index+1){
                                        children = children + child.value.toString();
                                    }
                                    else{
                                        children = children + child.value.toString() + ";";
                                    }                          
                                    
                                });
                                children = children + "]";
                            }
                        });

                        datastr.passengers = "children:" + children + ",adults:" + adults + ",seniors:" + seniors + ",infantinlap:Y";
                    }
                    var maxhops = 0;
                    var nopenalty = "N";
                    var optionsstr = "";
                    if(Eyepax.FlightData.FlightRefundable)
                        nopenalty = "Y";
                    optionsstr = "cabinclass:" + Eyepax.FlightData.AirLineClass;
                    if(Eyepax.FlightData.DirectFlight)
                        optionsstr = optionsstr + ",maxhops:" + maxhops;
                    if(Eyepax.FlightData.AirLine == ""){
                        optionsstr = optionsstr + ",nopenalty:" + nopenalty + ",sortby:price";
                    }
                    else{
                        optionsstr = optionsstr + ",nopenalty:" + nopenalty + ",sortby:price,carrier:" + Eyepax.FlightData.AirLine;
                    }
                    
                    
                    /*datastr.options = "cabinclass:" + Eyepax.FlightData.AirLineClass + ",nopenalty:" + nopenalty + ",sortby:price,carrier:" + Eyepax.FlightData.AirLine;*/
                    datastr.options = optionsstr;
                    datastr.mode = "search";

                    if(datastr.trip == "multi"){
                        //window.location.href = getURL(Eyepax.ServiceURL.BaseFlightSearchURL, datastr);
                        window.location.href = getURL(Eyepax.ServiceURL.BaseMultiFlightSearchURL, datastr);
                    }
                    else{
                        //window.location.href = getURL(Eyepax.ServiceURL.BaseMultiFlightSearchURL, datastr);
                        window.location.href = getURL(Eyepax.ServiceURL.BaseFlightSearchURL, datastr);
                    }


                }
                else{
                    return false;
                }
            });
            /*var roomchamber = tabContainer.searchWrapper.find('#hotelOnly-1');
            if( typeof $(roomchamber).html() !== 'undefined'){
               if($(roomchamber).html().trim() == ""){
                    roomchamber.hide();
                } 
            }*/
        },
        initFandH: function(fhTab){
            var fhaddcar = $("#fhaddcar");

            /*add localization*/
            addLocalization(tabContainer); 
            fhaddcar.hide();

            /* show/hide part of hotel data*/
            $(fhTab).find("#partialHotelBooking").change(function() {
                var partdates = $(fhTab).find(".partdates");

                if($(this).is(":checked")) {
                    partdates.slideDown();
                    $(partdates).find('.datepicker2').attr('data-validate', 'true');
                }
                else{
                    partdates.slideUp();
                    $(partdates).find('.datepicker2').attr('data-validate', 'false');
                }
            });

            /*
            * add elements with jquery templates
            */
            var numrooms = $(fhTab).find('.fhnumrooms');
            var roomElem = $(fhTab.find(numrooms)[0]);
            var fhmaxroom = $("#FH-NumRoom");
            fhmaxroom.html("");
            //$("#maxroomsTmpl").tmpl(Eyepax.Globals.MaxRoomsFH).appendTo(fhmaxroom);
            $("#maxroomsTmplspf").tmpl(Eyepax).appendTo(fhmaxroom);
            var extrooms = $(fhTab).find('.extrooms');
            $(extrooms).html("");
            if(Eyepax.Data.Rooms.length > Eyepax.Globals.MaxRoomsFH.length){
                Eyepax.Data.Rooms.splice(Eyepax.Globals.MaxRoomsFH.length, Eyepax.Data.Rooms.length);
            }

            //var fhrooms = Eyepax.Data.Rooms.slice(0, Eyepax.Globals.MaxRoomsFH.length);
            $( "#adultchildTmpl" ).tmpl(Eyepax.Data.Rooms).appendTo(extrooms);

            //add room data to object
            //var numrooms = $(".numrooms");
            var roomElem = $(fhTab.find('.fhnumrooms'));
            roomElem.on("change", function(){
                var numRooms = this.value;
                var rooms = [];
                var temprooms;
                if(numRooms > 0){
                    var tempnumrooms = 0;
                    if((1 < Eyepax.Data.Rooms.length) &&(Eyepax.Data.Rooms.length < numRooms)){
                        tempnumrooms = numRooms - Eyepax.Data.Rooms.length;
                        insertRooms(Eyepax.Data.Rooms.length+1, rooms, numRooms);
                    }
                    else if(Eyepax.Data.Rooms.length == 1){
                        insertRooms(2, rooms, numRooms);
                    }
                    else if(Eyepax.Data.Rooms.length > numRooms){
                        Eyepax.Data.Rooms.splice(numRooms, Eyepax.Data.Rooms.length-numRooms);
                    }

                    var temprooms = Eyepax.Data.Rooms.slice(0);
                    //temprooms.shift();

                }
                /*else{
                        Eyepax.Data.Rooms.splice(1, Eyepax.Data.Rooms.length-1);
                        if(!Eyepax.Data.Rooms.length ==1){
                            temprooms = Eyepax.Data.Rooms.slice(0);
                            temprooms.shift();
                        }
                        else{
                            temprooms = Eyepax.Data.Rooms.slice(0);
                        }
                }*/
                extrooms.html("");
                $( "#adultchildTmpl" ).tmpl(temprooms).appendTo(extrooms);

                /////////
                var numAdultelem = $(extrooms).find('.number-of-travellersA');
                numAdultelem.on("change", function(){
                    var adultCount = this.value;
                    var relatedRoom = $(this).data('room');
                    var currentRoom = findRoom(relatedRoom);
                    currentRoom[0].Adults = adultCount;
                });
                /////////

                //adding Childs with ages - elements
                //var numChildselems = $(extrooms).find('.number-of-travellersC');
                var numChildselems = $(fhTab).find('.number-of-travellersC');
                 numChildselems.on("change", function(){
                    var numChilds = this.value;
                    var relatedRoom = $(this).data('room');
                     var addtochildages = $(this).parents("#H-" + relatedRoom).next(".childages");
                    var currentRoom = findRoom(relatedRoom);
                    if(currentRoom[0].Childs == 0){
                        var tempChilds = [];
                        for(var i = 1; numChilds >= i; i++){
                            var tempChild = {};
                            tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                            tempChild.value = -1;
                            tempChilds.push(tempChild);
                        }
                        currentRoom[0].Childs = tempChilds;
                    }
                    else if((0 < currentRoom[0].Childs.length) &&(currentRoom[0].Childs.length < numChilds)){
                        for(var i = currentRoom[0].Childs.length+1; numChilds >= i; i++){
                            var tempChild = {};
                            tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                            tempChild.value = -1;
                            currentRoom[0].Childs.push(tempChild);
                        }
                    }
                    else if(currentRoom[0].Childs.length > numChilds){
                        currentRoom[0].Childs.splice(numChilds, currentRoom[0].Childs.length-numChilds);
                    }

                     addtochildages.html("");
                    $( "#childageTmpl" ).tmpl(currentRoom[0]).appendTo(addtochildages);
                    $(addtochildages).show();

                    //addCHildAgetoObj($(".extrooms"));
                    addCHildAgetoObj($(fhTab).find('.section-children-ages'));
                    /////////section-children-ages
                });
                // to do - cleanup
                var addtochildages1 = $("#fandh .room-traveller-combo").find("#H-Room1").next(".childages");
                addtochildages1.remove();
                //insertFirstRoom(fhTab.find(".room-traveller-combo"), fhTab.find("#hotelOnly-1"));
                removeFirstRoom($(fhTab).find(".room-traveller-combo"));

            });

            //////////////////////////
            /////////
                var numAdultelem = $(extrooms).find('.number-of-travellersA');
                numAdultelem.on("change", function(){
                    var adultCount = this.value;
                    var relatedRoom = $(this).data('room');
                    var currentRoom = findRoom(relatedRoom);
                    currentRoom[0].Adults = adultCount;
                });
                /////////

                //adding children with ages
                var numChildselems = $(extrooms).find('.number-of-travellersC');
                 numChildselems.on("change", function(){
                    var numChilds = this.value;
                    var relatedRoom = $(this).data('room');
                     //var addtochildages = $(this).parents("#H-" + relatedRoom).next(".childages");
                     var addtochildages = $("#fandh .room-traveller-combo").find("#H-" + relatedRoom).next(".childages");
                    var currentRoom = findRoom(relatedRoom);
                    if(currentRoom[0].Childs == 0){
                        var tempChilds = [];
                        for(var i = 1; numChilds >= i; i++){
                            var tempChild = {};
                            tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                            tempChild.value = -1;
                            tempChilds.push(tempChild);
                        }
                        currentRoom[0].Childs = tempChilds;
                    }
                    else if((0 < currentRoom[0].Childs.length) &&(currentRoom[0].Childs.length < numChilds)){
                        for(var i = currentRoom[0].Childs.length+1; numChilds >= i; i++){
                            var tempChild = {};
                            tempChild.key = Eyepax.Locale.Labels[0].value + " " + i;
                            tempChild.value = -1;
                            currentRoom[0].Childs.push(tempChild);
                        }
                    }
                    else if(currentRoom[0].Childs.length > numChilds){
                        currentRoom[0].Childs.splice(numChilds, currentRoom[0].Childs.length-numChilds);
                    }

                    /*addtochildages.html("");
                    $( "#childageTmpl" ).tmpl(currentRoom[0]).appendTo(addtochildages);
                    $(addtochildages).show();*/

                    addtochildages = $(fhTab).find("#H-" + relatedRoom).next(".childages");
                    addtochildages.html("");
                    $( "#childageTmpl" ).tmpl(currentRoom[0]).appendTo(addtochildages);
                    $(addtochildages).show();

                    //addCHildAgetoObj($(".room-traveller-combo"));
                    addCHildAgetoObj($(fhTab).find('.section-children-ages'));
                });
                    /////////
            //////////////////////
            // to do - cleanup
            var addtochildages1 = $("#fandh .room-traveller-combo").find("#H-Room1").next(".childages");
            addtochildages1.remove();
            //insertFirstRoom($(".room-traveller-combo"), $("#hotelOnly-1"));

            //insert first room if Rooms = 1 and no childs Childs = 0
            var $Rooms = Eyepax.Data.Rooms;
            if(($Rooms.length == 1) && ($Rooms[0].Childs == 0)) {
                insertFirstRoom(fhTab.find(".room-traveller-combo"), fhTab.find("#hotelOnly-1"));
            }
            else{
                $(fhTab.find(".room-traveller-combo")).find("#H-Room1").remove();
                $(fhTab.find(".room-traveller-combo")).find(".childages").remove();
                //addtochildages1.remove();
            }

            ///////////////////////////////
            var tempelemhide = $("#fandh .room-traveller-combo").find(".childages");
            if($.trim($(tempelemhide).html()) === ""){
                $(tempelemhide).hide();
            }
            /////////////////////////////    

            $("#FH-addcar").off('click').on('click', function(){
                $this = $(this);
                fhaddcar.toggle(200);
            });

            //submit button click
            $(fhTab).find('#FH-searchButton').on('click', function(event) {

                if(validate(fhTab)){
                    /*Eyepax.Data.Destination = fhTab.find('#FH-Destination').val();
                    Eyepax.Data.Origin = fhTab.find('#FH-Origin').val();
                    Eyepax.Data.StartDate = fhTab.find('#FH-startDate').val();

                    Eyepax.Data.EndDate = fhTab.find('#FH-endDate').val();
                    Eyepax.Data.NumRoom = fhTab.find('#FH-NumRoom').val();
                    Eyepax.Data.Nodate = false;
                    Eyepax.Data.Hotelforpart = fhTab.find('#partialHotelBooking').prop('checked');
                    if(fhTab.find('.partdates').is(':visible')){
                        Eyepax.Data.Entrance = fhTab.find('#FH-entrance').val();
                        Eyepax.Data.Exit = fhTab.find('#FH-exit').val();
                    }
                    sendRequestFH(Eyepax.Data);*/
                    datastr = {};
                    datastr.PackageType = 2;
                    if(fhaddcar.is(":visible")){
                        datastr.PackageType = 1;
                        //datastr.FrAirport = flightTab.find('#F-Origin').data('desticode');
                    }
                    else{
                        //datastr.FrAirport = Eyepax.FlightData.Origin;
                    }
                    datastr.FrAirport = fhTab.find('#FH-Origin').val();
                    datastr.DestName = fhTab.find('#FH-Destination').val();
                    datastr.FromDate = fhTab.find('#FH-startDate').val();
                    datastr.ToDate = fhTab.find('#FH-endDate').val();
                    if((fhTab.find('#FH-entrance').val() != "") && (fhTab.find('#FH-exit').val() != "")){
                        datastr.FlexFromDate = fhTab.find('#FH-entrance').val();
                        datastr.FlexToDate = fhTab.find('#FH-exit').val();
                    }
                    datastr.InfantInSeat=0;
                    datastr.needUTF8Decode=true;
                    datastr.lang=1036;
                    if($(fhTab).find('#directFlightsOnly').is(':checked'))
                        datastr.Direct=1;
                    else
                        datastr.Direct=0;
                    var url = "";
                    if(Eyepax.Data.Rooms.length > 0){
                        var roomcounter = 0;
                        datastr.NumRoom = Eyepax.Data.Rooms.length;
                        $.each(Eyepax.Data.Rooms, function(i, room){          

                            roomcounter = roomcounter + 1;

                            datastr[ "NumAdult" + roomcounter] = room.Adults;

                            if($.isArray(room.Childs)){
                                datastr[ "NumChild" + roomcounter] = room.Childs.length;
                                var childcounter = 0;
                                $.each(room.Childs, function(index, child) {
                                    childcounter = childcounter + 1;
                                    datastr[ "Rm" + roomcounter + "Child" + childcounter + "Age"] = child.value;
                                });
                            }
                            else
                                datastr["NumChild" + roomcounter] = 0;
                        });        
                    }
                    url = getURL(Eyepax.ServiceURL.BaseFlightHotelURL, datastr);
                    window.location.href = url;
                    return false;

                    
                }
                else{
                    return false;
                }

            });
        },
        initCoche: function(cTab){
            //add localization
            var pickupcategory = '';
            var pickupcategorycode = '';
            addLocalization(tabContainer);

            var cartype = $(cTab).find('#C-cochetype');
            var caroptions = $(cTab).find('#caroptionsarea');

           $("#coche #c-advance-option-button").off('click').on('click', function(){
                $this = $(this);
                $("#aditionalopt").toggle(function(){
                    if($("#aditionalopt").is(":visible")){
                        $this.find('span.icon').css('transform', 'rotate(-180deg)');
                    }
                    else{
                        $this.find('span.icon').css('transform', 'rotate(0deg)');
                    }
                    
                    //$this.find("span.icon-expand").toggleClass("icon-expand-after");

                });
            });

            // populate coche types 
            cartype.html("");
            $( "#cartypesTmpl" ).tmpl(Eyepax.Globals.CarType).appendTo(cartype);
            // populate coche additional options
            caroptions.html("");
            $( "#caroptionsTmpl" ).tmpl(Eyepax.Globals.CarOptions).appendTo(caroptions);

            //init autucomplete for Picup location 

            ////////////////////
            $.widget( "custom.catcomplete", $.ui.autocomplete, {
                _create: function() {
                  this._super();
                  this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
                },
                _renderMenu: function( ul, items ) {
                  var that = this,
                    currentCategory = "";
                  $.each( items, function( index, item ) {
                    var li;
                    if ( item.category != currentCategory ) {
                        
                        if(item.category === "AIRPORT"){
                            /*$.each(Eyepax.Locale.Labels, function(index, obj) {
                                 if(obj.key == "airportlbl")
                            });*/
                            ul.append( "<li class='ui-autocomplete-category-line'></li>" );
                            ul.append( "<li class='ui-autocomplete-category'>" + carsuggestlocale("airportlbl") + "</li>" );
                        }
                        else if (item.category === "CITY") {
                            //ul.append( "<li class='ui-autocomplete-category'><span class='icon icon-location'></span></li>" );
                            ul.append( "<li class='ui-autocomplete-category'>" + carsuggestlocale("citylbl") + "</li>" );
                        } 
                        else if(item.category === "ATTRACTION"){
                            ul.append( "<li class='ui-autocomplete-category-line'></li>" );
                            ul.append( "<li class='ui-autocomplete-category'>" + carsuggestlocale("attractionlbl") + "</li>" );
                        }
                        
                        else{
                            ul.append( "<li class='ui-autocomplete-category'><span class='icon icon-packages'></span>" + item.category + "</li>" );
                        }
                      
                      currentCategory = item.category;
                    }
                    li = that._renderItemData( ul, item );
                    if ( item.category ) {
                      li.attr({"aria-label": item.category, "data-code": item.code});
                    }
                  });
                }
              });
            ////////////////////

            $( "#C-pickuplocation" ).catcomplete({
                //source: Eyepax.ServiceURL.Destination,
                source: function( request, response ) {
                    $.ajax({
                        url: creatautocompleteURL(Eyepax.ServiceURL.BaseCocheURL, Eyepax.ServiceURL.CochePicUpParams, request.term),
                        data: function(){
                            //Eyepax.Globals.Dest = request.term;
                        },
                        dataType: "jsonp",
                        type:'Get',
                        success: function( data ) {

                            response( $.map( data.sr, function( item ) {
                                return {"label":item.f, "code":item.a, "category": item.t};


                            }));
                        }
                    });
                },
                focus: function (event, ui) {
                    this.value = ui.item.value;
                    event.preventDefault(); // Prevent the default focus behavior.
                },
                open: function(event, ui) {
                    //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
                    //{
                        $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
                    //}
                    if(Eyepax.Globals.WinW <= 600){
                        setautocompletewidth("#C-pickuplocation");
                    }
                },
                minLength: 3,
                select: function( event, ui ) {
                        pickupcategory = ui.item.category;
                        pickupcategorycode = ui.item.code;
                        if(pickupcategory === "AIRPORT"){
                            //$(cTab).find('#airportdelivery').show();
                            $(cTab).find('#airportdelivery').removeAttr('disabled style').children().removeAttr('disabled style').fadeTo('slow', 1);
                        }
                        else{
                            //$(cTab).find('#airportdelivery').hide();
                            $(cTab).find('#airportdelivery').children().attr('disabled','disabled').fadeTo('slow',.6);
                        }
                    }
            });
            //init autucomplete for delivery location

            ////////////////////
            $.widget( "custom.catcompleteairport", $.ui.autocomplete, {
                _create: function() {
                  this._super();
                  this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
                },
                _renderMenu: function( ul, items ) {
                  var that = this,
                    currentCategory = "";
                  $.each( items, function( index, item ) {
                    var li;
                    if(item.category == "AIRPORT"){
                        if ( item.category != currentCategory ) {
                          //ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                          ul.append( "<li class='ui-autocomplete-category'><span class='icon icon-flights'></span>" + item.category + "</li>" );
                          currentCategory = item.category;
                        }
                        li = that._renderItemData( ul, item );
                        if ( item.category ) {
                          li.attr({"aria-label": item.category, "data-code": item.code});
                        }
                    }

                  });
                }
              });
            ////////////////////

            $( "#C-airportdeli" ).catcompleteairport({
                //source: Eyepax.ServiceURL.Destination,
                source: function( request, response ) {
                    $.ajax({
                        url: creatautocompleteURL(Eyepax.ServiceURL.BaseCocheURL, Eyepax.ServiceURL.CocheAirportParams, request.term),
                        data: function(){
                            //Eyepax.Globals.Dest = request.term;
                        },
                        dataType: "jsonp",
                        type:'Get',
                        success: function( data ) {

                            response( $.map( data.sr, function( item ) {
                                return {"label":item.f, "code":item.a, "category": item.t};


                            }));
                        }
                    });
                },
                focus: function (event, ui) {
                    this.value = ui.item.value;
                    event.preventDefault(); // Prevent the default focus behavior.
                },
                open: function(event, ui) {
                    //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
                    //{
                        $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
                    //}
                    if(Eyepax.Globals.WinW <= 600){
                        setautocompletewidth("#C-airportdeli");
                    }
                },
                minLength: 3
            });

            // date pickers
            $( "#C-pickupDate" ).datepicker({
                //defaultDate: "+1w",
                //changeMonth: true,
                numberOfMonths: Eyepax.Globals.CalanderMonths,
                dateFormat: 'dd/mm/yy',
                beforeShow: function(input, inst) {
                    datepopupdirection(input, inst);
                },
                minDate: new Date(),
                monthNames: Eyepax.Locale.MonthsShort,
                dayNamesMin: Eyepax.Locale.DaysShort,
                onSelect: function(dateText, inst) {
                  if($('#C-deliverydate').val() == '') {
                    var current_date = $.datepicker.parseDate('dd/mm/yy', dateText);
                    current_date.setDate(current_date.getDate());
                    $('#C-deliverydate').datepicker('setDate', current_date);
                  }
                },
                onClose: function(selectedDate, test) {
                    if(selectedDate != ""){
                        $( "#C-deliverydate" ).datepicker( "option", "minDate", selectedDate );
                        var $date=new Date($( "#C-pickupDate" ).datepicker( "getDate" ));
                        $date.setDate($date.getDate());
                        $( "#C-deliverydate" ).datepicker('setDate', $date);

                    }
                }
            });
            $("#C-pickupDate").blur(function() {
                $(document).click(function(event) {        
                    if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#C-pickupDate'))){
                       $( "#C-pickupDate" ).datepicker("hide");
                    }
                    else {
                        datepopupdirectionopt(event.target, "#ui-datepicker-div");
                    }
                });
              });
            $( "#C-deliverydate" ).datepicker({
                //defaultDate: "+1w",
                //changeMonth: true,
                numberOfMonths: Eyepax.Globals.CalanderMonths,
                dateFormat: 'dd/mm/yy',
                beforeShow: function(input, inst) {
                    datepopupdirection(input, inst);
                },
                minDate: new Date(),
                monthNames: Eyepax.Locale.MonthsShort,
                dayNamesMin: Eyepax.Locale.DaysShort,
                onClose: function( selectedDate ) {
                    if(selectedDate != ""){
                        //$( "#C-pickupDate" ).datepicker( "option", "maxDate", selectedDate );
                    }
                }
            });
            $("#C-deliverydate").blur(function() {
                $(document).click(function(event) {        
                    if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#C-deliverydate'))){
                       $( "#C-deliverydate" ).datepicker("hide");
                    }
                    else {
                        datepopupdirectionopt(event.target, "#ui-datepicker-div");
                    }
                });
              });
            ////////////////////

            //submit button click
            $(cTab).find('#C-searchButton').on('click', function(event) {

                if(validate(cTab)){
                    datastr = {};

                    datastr.subm = 1;
                    
                    datastr.locn = $(cTab).find('#C-pickuplocation').val();

                    if(pickupcategory === "AIRPORT"){
                        //$(cTab).find('#C-airportdeli').show();
                        datastr.fdrp = 1;
                        datastr.loc2 = $(cTab).find('#C-airportdeli').val();
                        datastr.styp = 1;
                    }
                    else{
                        //$(cTab).find('#C-airportdeli').hide();
                        datastr.fdrp = 0;
                        datastr.styp = 2;
                    }


                    datastr.date1 = cTab.find('#C-pickupDate').val();
                    datastr.date2 = cTab.find('#C-deliverydate').val();
                    datastr.time1 = cTab.find('#C-pickuptime').val();
                    datastr.time2 = cTab.find('#C-deliverytime').val();
                    datastr.kind = cTab.find('#C-cochetype').val();
                    datastr.ttyp = 2;
                    datastr.acop = 2;


                    $.each($(cTab).find('#caroptionsarea input:checked'), function(index, elem) {
                         datastr[$(elem).attr('id')] = $(elem).val();
                    });
                    datastr.rdct = 1;
                    window.location.href = getURL(Eyepax.ServiceURL.BaseCocheSearchURL, datastr);
                }
                else{
                    return false;
                }

            });
        }
    };
    
    //initialize hotel tab while loading
    tabContainer.initHotel({tab:"hotel"});
    

    $('#flightAndHotel-tab').on('shown.bs.tab', function (e) {
      //e.target // activated tab
      //e.relatedTarget // previous tab
      var fhTab = $("#fandh");
      tabContainer.initFandH(fhTab);
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        //e.target // activated tab
        //e.relatedTarget // previous tab
        var roomchamber = $($(this).attr('href')).find('#hotelOnly-1');
        if( typeof $(roomchamber).html() !== 'undefined'){
           if($.trim($(roomchamber).html()) == ""){
                roomchamber.hide();
                //$(roomchamber).css("border", "none");
            } 
        }
    });

    /*initialize tabs onloading*/
    var tabsnavs = $(".nav-tabs").find("li a");
    
    if(tabsnavs.length > 0){
	    
	    
        //$.each(tabsnavs, function(i, tabnav){
        tabsnavs.on('click', function(){
	        
            var tabtype = $(this).data('lob');
            switch (tabtype){
                case "hotelOnly":
                    tabContainer.initHotel({tab:"hotel"});
                    break;
                case "flightOnly":
                    var flightTab = $("#flight");
                    tabContainer.initFlight(flightTab);
                    break;
                case "flightAndHotel":
                    var fhTab = $("#fandh");
                    tabContainer.initFandH(fhTab);
                    break;
                case "coche":
                    var cTab = $("#coche");
                    tabContainer.initCoche(cTab);
                    break;
            }
        });
        var roomchamber = tabContainer.searchWrapper.find('#hotelOnly-1');
        if( typeof $(roomchamber).html() !== 'undefined'){
           if($.trim($(roomchamber).html()) == ""){
                roomchamber.hide();
                //$(roomchamber).css("border", "none");
            } 
        }
    }


    
    /**
     *
     * auto complete boxes
     **/

    $( "#H-Destination" ).autocomplete({
        //source: Eyepax.ServiceURL.Destination,
        source: function( request, response ) {
            $.ajax({
                url: creatautocompleteURL(Eyepax.ServiceURL.BaseDestURL, Eyepax.ServiceURL.HotelParams, request.term),
                data: function(){
                    //Eyepax.Globals.Dest = request.term;
                },
                dataType: "jsonp",
                type:'Get',
                success: function( data ) {
                    //var aa = data;
                    response( $.map( data.r, function( item ) {
                        return {
                            
                            label: item.id,
                            value: item.f
                        }
                    }));
                }
            });
        },        
        select: function(event, ui) {
            //event.preventDefault();
            $("#H-Destination").data("destiID", ui.item.label);
        },
        focus: function (event, ui) {
            this.value = ui.item.value;
            event.preventDefault(); // Prevent the default focus behavior.
        },
        open: function(event, ui) {
            //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
            //{
                //$('.ui-autocomplete').remove('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
                $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
            //}
            if(Eyepax.Globals.WinW <= 600){
                setautocompletewidth("#H-Destination");
            }
        },
        minLength: 3
    }).autocomplete( "instance" )._renderItem = function( ul, item ) {
        //$(ul).after("<span>sss</span>");
        return $( "<li>" )
            .append( "<span data-tid='typeahead-icon0' class='icon icon-hotels'></span>" + item.value + "</li>" )
            .addClass('ui-menu-item')
            .appendTo( ul);
    };
    $( "#FH-Destination" ).autocomplete({
        //source: Eyepax.ServiceURL.Destination,
        source: function( request, response ) {
            $.ajax({
                url: creatautocompleteURL(Eyepax.ServiceURL.BaseDestURL, Eyepax.ServiceURL.PackageParams, request.term),
                data: function(){
                    Eyepax.Globals.Dest = request.term;
                },
                dataType: "jsonp",
                type:'Get',
                success: function( data ) {
                    //var aa = data;
                    response( $.map( data.r, function( item ) {
                        return {
                            label: item.d,
                            value: item.f
                        }
                    }));
                }
            });
        },
        focus: function (event, ui) {
            this.value = ui.item.value;
            event.preventDefault(); // Prevent the default focus behavior.
        },
        open: function(event, ui) {
            //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
            //{
                $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
            //}
            if(Eyepax.Globals.WinW <= 600){
                setautocompletewidth("#FH-Destination");
            }
        },
        minLength: 3
        /*select: function( event, ui ) {
            *//*log( ui.item ?
                "Selected: " + ui.item.value + " aka " + ui.item.id :
                "Nothing selected, input was " + this.value );*//*
            var aa = ui;
        }*/
    }).autocomplete( "instance" )._renderItem = function( ul, item ) {
        //$(ul).after("<span>sss</span>");
        return $( "<li>" )
            .append( "<span data-tid='typeahead-icon0' class='icon icon-flights'></span>" + item.label + "</li>" )
            .appendTo( ul);
        //return $(ul).after("<span>sss</span>");
    };
    $( "#F-Destination" ).autocomplete({
        //source: Eyepax.ServiceURL.Destination,
        source: function( request, response ) {
            $.ajax({
                url: creatautocompleteURL(Eyepax.ServiceURL.BaseOriginURL, Eyepax.ServiceURL.FlightParams, request.term),
                data: function(){
                    Eyepax.Globals.Dest = request.term;
                },
                dataType: "jsonp",
                type:'Get',
                success: function( data ) {
                    //var aa = data;
                    response( $.map( data.r, function( item ) {
                        return {
                            label: item.d,
                            value: item.f
                        }
                    }));
                }
            });
        },
        open: function(event, ui) {
            //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
            //{
                $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
            //}
            if(Eyepax.Globals.WinW <= 600){
                setautocompletewidth("#F-Destination");
            }
        },
        focus: function (event, ui) {
            this.value = ui.item.value;
            event.preventDefault(); // Prevent the default focus behavior.
        },
        minLength: 3
        /*select: function( event, ui ) {
            *//*log( ui.item ?
                "Selected: " + ui.item.value + " aka " + ui.item.id :
                "Nothing selected, input was " + this.value );*//*
            var aa = ui;
        }*/
    }).autocomplete( "instance" )._renderItem = function( ul, item ) {
        //$(ul).after("<span>sss</span>");
        return $( "<li>" )
            .append( "<span data-tid='typeahead-icon0' class='icon icon-flights'></span>" + item.label + "</li>" )
            .appendTo( ul);
        //return $(ul).after("<span>sss</span>");
    };
    $( "#FH-Origin" ).autocomplete({
        source: function( request, response ) {
            $.ajax({
                url: creatautocompleteURL(Eyepax.ServiceURL.BaseOriginURL, Eyepax.ServiceURL.PackageParams, request.term),
                data: function(){
                    Eyepax.Globals.Dest = request.term;
                },
                dataType: "jsonp",
                type:'Get',
                success: function( data ) {
                    //var aa = data;
                    response( $.map( data.r, function( item ) {
                        return {
                            label: item.d,
                            value: item.f
                        }
                    }));
                }
            });
        },
        focus: function (event, ui) {
            this.value = ui.item.value;
            event.preventDefault(); // Prevent the default focus behavior.
        },
        open: function(event, ui) {
            //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
            //{
                $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
            //}
            if(Eyepax.Globals.WinW <= 600){
                setautocompletewidth("#FH-Origin");
            }
        },
        minLength: 3
    }).autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
            .append( "<span data-tid='typeahead-icon0' class='icon icon-flights'></span>" + item.label + "</li>" )
            .appendTo( ul);
    };
    $( "#H-Flightfrom" ).autocomplete({
        source: function( request, response ) {
            $.ajax({
                url: creatautocompleteURL(Eyepax.ServiceURL.BaseOriginURL, Eyepax.ServiceURL.PackageParams, request.term),
                data: function(){
                    Eyepax.Globals.Dest = request.term;
                },
                dataType: "jsonp",
                type:'Get',
                success: function( data ) {
                    //var aa = data;
                    response( $.map( data.r, function( item ) {
                        return {
                            label: item.d,
                            value: item.f
                        }
                    }));
                }
            });
        },
        focus: function (event, ui) {
            this.value = ui.item.value;
            event.preventDefault(); // Prevent the default focus behavior.
        },
        open: function(event, ui) {
            //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
            //{
                $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
            //}
            if(Eyepax.Globals.WinW <= 600){
                setautocompletewidth("#H-Flightfrom");
            }
        },
        minLength: 3
    }).autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
            .append( "<span data-tid='typeahead-icon0' class='icon icon-flights'></span>" + item.label + "</li>" )
            .appendTo( ul);
    };
    $( "#F-Origin" ).autocomplete({
      source: function( request, response ) {
        $.ajax({
          url: creatautocompleteURL(Eyepax.ServiceURL.BaseOriginURL, Eyepax.ServiceURL.FlightParams, request.term),
          data: function(){
            Eyepax.Globals.Dest = request.term;
          },
          dataType: "jsonp",
          type:'Get',
          success: function( data ) {
            //var aa = data;
            response( $.map( data.r, function( item ) {
              return {
                label: item.d,
                value: item.f,
                code: item.a
              }
            }));
          }
        });
      },
      select: function(event, ui) {
            //event.preventDefault();
            $("#F-Origin").attr("data-destiID", ui.item.value);
            $("#F-Origin").attr("data-desticode", ui.item.code);
        },
        focus: function (event, ui) {
            this.value = ui.item.value;
            event.preventDefault(); // Prevent the default focus behavior.
        },
      open: function(event, ui) {
        //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
        //{
          $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
        //}
        if(Eyepax.Globals.WinW <= 600){
            setautocompletewidth("#F-Origin");
        }
      },
      minLength: 3
    }).autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<span data-tid='typeahead-icon0' class='icon icon-flights'></span>" + item.label + "</li>" )
        .appendTo( ul);
    };

    //var lm = $(cTab).find('#C-moredetails span.lm');
          //$('#C-moredetails span.lm').tooltip({ content: "Awesome title!" });

  /*$(document).ready(function () {
    $('#datepicker').datepicker({
      beforeShowDay: function (date) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#H-startDate").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#H-endDate").val());
        debugger
        if (date >= date1 && date <= date2) {
          return [true, 'ui-state-error', ''];
        }
        return [true, '', ''];
      }
    });
  });
//$("#d").after("<p>" + dateRangeText + "</p>");
  $("#H-endDate").datepicker();
  $("#H-startDate").datepicker({
    onSelect: function (dateText, inst) {
      var date = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
      $("#H-endDate").datepicker("option", "minDate", date);
    }
  });*/
    /**
     *
     * date pickers
     **/

    $( "#H-startDate" ).datepicker({
        defaultDate: +1,
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
            /*setTimeout(function () {
                if((inst.dpDiv.outerHeight() + 20 > Math.abs((window.innerHeight - ($(input).offset().top - $(window).scrollTop() + $(input).height())))) && (Math.abs((window.innerHeight - ($(input).offset().top - $(window).scrollTop() + $(input).height()))) > 0) ){
                    //insertArrow('tooltip-arrow');
                    insertArrow('tooltip-arrow-bt');
                }
                else{
                    //insertArrowBelow();
                    insertArrow('tooltip-arrow');
                    //insertArrow('tooltip-arrow-bt');
                }
            //inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
        }, 0);*/
            
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onSelect: function(dateText, inst) {
          if($('#H-endDate').val() == '') {
            var current_date = $.datepicker.parseDate('dd/mm/yy', dateText);
            current_date.setDate(current_date.getDate()+1);
            $('#H-endDate').datepicker('setDate', current_date);
          }
        },
        onClose: function(selectedDate, test) {
            if(selectedDate != ""){
              var $date = new Date($( "#H-startDate" ).datepicker( "getDate" ));
              $date.setDate($date.getDate()+1);

              $( "#H-endDate" ).datepicker( "option", "minDate", $date );// set cal disable same date
              $( "#H-endDate" ).datepicker('setDate', $date);

              /* set the max date range 2months */
              var $minusDate = new Date($( "#H-startDate" ).datepicker( "getDate" ));
              $minusDate.setDate($minusDate.getDate()-1);
              var maxDate = new Date($minusDate);
              maxDate.setMonth(maxDate.getMonth()+ 2);
              $( "#H-endDate" ).datepicker( "option", "maxDate", maxDate );
            }            
        }
        
    });
    $("#H-startDate").blur(function() {
        
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#H-startDate'))){
               $( "#H-startDate" ).datepicker("hide");
            } 
            else {
                //insertArrow();
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
                //$( "#H-startDate" ).datepicker("show");
            }
        });
      });
    
    $( "#H-endDate" ).datepicker({
        //defaultDate: "+1w",
        //changeMonth: true,
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            //insertArrow();
            datepopupdirection(input, inst);
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onClose: function( selectedDate ) {
            if(selectedDate != ""){
                /*$( "#H-startDate" ).datepicker( "option", "maxDate", selectedDate );*/
            }
        }
    });
    $("#H-endDate").blur(function() {        
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#H-endDate'))){
               $( "#H-endDate" ).datepicker("hide");
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
    $( "#FH-startDate" ).datepicker({
        //defaultDate: "+1w",
        //changeMonth: true,
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onSelect: function(dateText, inst) {
          if($('#FH-endDate').val() == '') {
            var current_date = $.datepicker.parseDate('dd/mm/yy', dateText);
            current_date.setDate(current_date.getDate()+1);
            $('#FH-endDate').datepicker('setDate', current_date);
            $( "#FH-exit" ).datepicker( "option", "minDate", current_date );
            $( "#FH-exit" ).datepicker( "option", "maxDate", current_date );
            //$( "#FH-exit" ).datepicker( "option", "maxDate", current_date );
            //$( "#FH-entrance" ).datepicker( "option", "maxDate", current_date );
          }
        },
        onClose: function(selectedDate, test) {
            if(selectedDate != ""){
                $( "#FH-endDate" ).datepicker( "option", "minDate", selectedDate );
                $( "#FH-entrance" ).datepicker( "option", "minDate", selectedDate );
                $( "#FH-entrance" ).datepicker( "option", "maxDate", selectedDate );
                $( "#FH-entrance" ).datepicker('setDate', null);
                $( "#FH-exit" ).datepicker('setDate', null);               

                var $date=new Date($( "#FH-startDate" ).datepicker( "getDate" ));
                $date.setDate($date.getDate()+1);

                $( "#FH-endDate" ).datepicker( "option", "minDate", $date );// set cal disable same date
                $( "#FH-endDate" ).datepicker('setDate', $date);
                $( "#FH-exit" ).datepicker( "option", "minDate", $date );
                $( "#FH-exit" ).datepicker( "option", "maxDate", $date );

                /*var maxDate = $.datepicker.parseDate('dd/mm/yy', $('#FH-startDate').val());
                maxDate.setMonth(maxDate.getMonth()+ 2);*/
                var $minusDate = new Date($( "#FH-startDate" ).datepicker( "getDate" ));
                $minusDate.setDate($minusDate.getDate()-1);

                var maxDate = new Date($( "#FH-startDate" ).datepicker( "getDate" ));
                maxDate.setDate(maxDate.getDate()+26);
                $( "#FH-endDate" ).datepicker( "option", "maxDate", maxDate );

            }            
        }
        
    });
    $("#FH-startDate").blur(function() {
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#FH-startDate'))){
               $( "#FH-startDate" ).datepicker("hide");
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
    $( "#FH-endDate" ).datepicker({
        //defaultDate: "+1w",
        //changeMonth: true,
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onClose: function( selectedDate ) {
            if(selectedDate != ""){
                var $minusDate = new Date($( "#FH-endDate" ).datepicker( "getDate" ));
                $minusDate.setDate($minusDate.getDate()-1);
                $( "#FH-entrance" ).datepicker( "option", "maxDate", $minusDate );
                $( "#FH-exit" ).datepicker( "option", "maxDate", selectedDate );
                
                $( "#FH-entrance" ).datepicker('setDate', null);
                $( "#FH-exit" ).datepicker('setDate', null);
            }
        }
    });
    $("#FH-endDate").blur(function() {
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#FH-endDate'))){
               $( "#FH-endDate" ).datepicker("hide");
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
    //flight tab datepicker
    $( "#F-startDate" ).datepicker({
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onSelect: function(dateText, inst) {
          if($('#F-endDate').val() == '') {
            var current_date = $.datepicker.parseDate('dd/mm/yy', dateText);
            current_date.setDate(current_date.getDate()+1);
            $('#F-endDate').datepicker('setDate', current_date);
            $( "#FaddH-startDate" ).datepicker( "option", "minDate", current_date );
            $( "#FaddH-startDate" ).datepicker( "option", "maxDate", current_date );
          }
        },
        onClose: function(selectedDate, test) {
            if(selectedDate != ""){
                //if($("#back").is('visible')){
                  var $date=new Date($( "#F-startDate" ).datepicker( "getDate" ));
                  $date.setDate($date.getDate()+1);
                    $( "#F-endDate" ).datepicker( "option", "minDate", $date );// set cal disable same date
                    $( "#F-endDate" ).datepicker('setDate', $date);
                    $( "#FaddH-startDate" ).datepicker( "option", "minDate", selectedDate );
                    $( "#FaddH-startDate" ).datepicker( "option", "maxDate", selectedDate );
                    $( "#FaddH-startDate" ).datepicker('setDate', null);
                    $( "#FaddH-endDate" ).datepicker('setDate', null);               

                    var $date=new Date($( "#F-endDate" ).datepicker( "getDate" ));
                    $date.setDate($date.getDate()+1);

                    $( "#F-endDate" ).datepicker( "option", "minDate", $date );// set cal disable same date
                    $( "#F-endDate" ).datepicker('setDate', $date);
                    $( "#FaddH-endDate" ).datepicker( "option", "minDate", $date );
                    $( "#FaddH-endDate" ).datepicker( "option", "maxDate", $date );

                    /*var maxDate = $.datepicker.parseDate('dd/mm/yy', $('#FH-startDate').val());
                    maxDate.setMonth(maxDate.getMonth()+ 2);*/
                    var $minusDate = new Date($( "#F-startDate" ).datepicker( "getDate" ));
                    $minusDate.setDate($minusDate.getDate()-1);

                    var maxDate = new Date($( "#F-startDate" ).datepicker( "getDate" ));
                    maxDate.setDate(maxDate.getDate()+26);
                    $( "#F-endDate" ).datepicker( "option", "maxDate", maxDate );
                //}
            }
                        
        }
        
    });
    $("#F-startDate").blur(function() {
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#F-startDate'))){
               $( "#F-startDate" ).datepicker("hide");
               //$( "#F-startDate" ).datepicker( "destroy" );
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
    $( "#FaddH-startDate" ).datepicker({
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onSelect: function(dateText, inst) {
          if($('#FaddH-endDate').val() == '') {
            var current_date = $.datepicker.parseDate('dd/mm/yy', dateText);
            current_date.setDate(current_date.getDate()+1);
            $('#FaddH-endDate').datepicker('setDate', current_date);
          }
        },
        onClose: function(selectedDate, test) {
            if(selectedDate != ""){
                //if($("#back").is('visible')){
                  var $date=new Date($( "#FaddH-startDate" ).datepicker( "getDate" ));
                  $date.setDate($date.getDate()+1);
                    $( "#FaddH-endDate" ).datepicker( "option", "minDate", $date );// set cal disable same date
                    $( "#FaddH-endDate" ).datepicker('setDate', $date);
                //}
            }
                        
        }
        
    });
    $("#FaddH-startDate").blur(function() {
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#FaddH-startDate'))){
               $( "#FaddH-startDate" ).datepicker("hide");
               //$( "#F-startDate" ).datepicker( "destroy" );
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
    $( "#F-endDate" ).datepicker({
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onClose: function( selectedDate ) {
            if(selectedDate != ""){
                var $minusDate = new Date($( "#F-endDate" ).datepicker( "getDate" ));
                $minusDate.setDate($minusDate.getDate()-1);
                $( "#FaddH-startDate" ).datepicker( "option", "maxDate", $minusDate );
                $( "#FaddH-endDate" ).datepicker( "option", "maxDate", selectedDate );
                
                $( "#FaddH-startDate" ).datepicker('setDate', null);
                $( "#FaddH-endDate" ).datepicker('setDate', null);               
            }
        }
    });
    $("#F-endDate").blur(function() {
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#F-endDate'))){
               $( "#F-endDate" ).datepicker("hide");
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
    $( "#FaddH-endDate" ).datepicker({
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onClose: function( selectedDate ) {
            if(selectedDate != ""){
                /*$( "#H-startDate" ).datepicker( "option", "maxDate", selectedDate );*/                
            }
        }
    });
    $("#FaddH-endDate").blur(function() {
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#FaddH-endDate'))){
               $( "#FaddH-endDate" ).datepicker("hide");
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
     $( "#FH-entrance" ).datepicker({
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onSelect: function(dateText, inst) {
          if($('#FH-exit').val() == '') {
            var current_date = $.datepicker.parseDate('dd/mm/yy', dateText);
            current_date.setDate(current_date.getDate()+1);
            $('#FH-exit').datepicker('setDate', current_date);
            //$( "#FH-exit" ).datepicker( "option", "maxDate", current_date );
          }
        },
        onClose: function(selectedDate, test) {
            if(selectedDate != ""){
              var $date=new Date($( "#FH-entrance" ).datepicker( "getDate" ));
              $date.setDate($date.getDate()+1);
                $( "#FH-exit" ).datepicker( "option", "minDate", $date );// set cal disable same date
                $( "#FH-exit" ).datepicker('setDate', $date);

            }            
        }
        
    });
    $("#FH-entrance").blur(function() {
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#FH-entrance'))){
               $( "#FH-entrance" ).datepicker("hide");
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
    $( "#FH-exit" ).datepicker({
        numberOfMonths: Eyepax.Globals.CalanderMonths,
        dateFormat: 'dd/mm/yy',
        beforeShow: function(input, inst) {
            datepopupdirection(input, inst);
            /*$('#ui-datepicker-div .ui-datepicker-prev').on('click', insertArrow);
            $('#ui-datepicker-div .ui-datepicker-prev span').on('click', insertArrow);*/
            $('#ui-datepicker-div .ui-datepicker-prev').on('click', datepopupdirectionopt("#H-startDate", "#ui-datepicker-div"));
            $('#ui-datepicker-div .ui-datepicker-prev span').on('click', datepopupdirectionopt("#H-startDate", "#ui-datepicker-div"));
        },
        minDate: new Date(),
        monthNames: Eyepax.Locale.MonthsShort,
        dayNamesMin: Eyepax.Locale.DaysShort,
        onClose: function( selectedDate ) {
            if(selectedDate != ""){
                $( "#H-entrance" ).datepicker( "option", "maxDate", selectedDate );
            }
        }
    });
    $("#FH-exit").blur(function() {
        $(document).click(function(event) {        
            if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('#FH-exit'))){
               $( "#FH-exit" ).datepicker("hide");
            }
            else {
                datepopupdirectionopt(event.target, "#ui-datepicker-div");
            }
        });
      });
    //$('#ui-datepicker-div').delegate('.ui-datepicker-prev, .ui-datepicker-next', 'click', insertArrow);
    $('#ui-datepicker-div .ui-datepicker-prev span').on('click', insertArrow);


    $('.nav-tabs a').click(function (e) {
      /*remove error messages and classes*/
      removeError("#searchwrapper");
      resetErrorMSGStatus();
    })

/*})(jQuery);*/

});

//add child ages to object
function addCHildAgetoObj(elem){
    //var childAges = $(".extrooms").find('.childage');
    var childAges = $(elem).find('.childage');
    childAges.on("change", function(){
        var childage = this.value;
        var relatedchildid = $(this).data('child');
        var relatedRoom = $(this).data('room');
        var currentRoom;
        if($(elem).parents('#flight').length > 0){
            currentRoom = findRoomother(relatedRoom, Eyepax.FlightData.TravellerCombo);
        }
        else if($(elem).parents('#addhotel').length > 0 && $(elem).parents('#addhotel').is(':visible')){
            currentRoom = findRoomother(relatedRoom, Eyepax.FlightData.TravellerCombo);
        }
        else{
            currentRoom = findRoomother(relatedRoom, Eyepax.Data.Rooms);
        }
        //var currentRoom = findRoomother(relatedRoom, Eyepax.FlightData.TravellerCombo);
        var relatedChild = findChild(currentRoom[0].Childs, relatedchildid);
        relatedChild[0].value = childage;
    });
}


function showRoundTripItems(flightTab){
    flightTab.find("#onwaydestination").show();
    flightTab.find("#multiDestinationsDiv").hide();
    flightTab.find("#back").show();
    flightTab.find("#out").show();
    removeError(flightTab);
    validateEnabler(flightTab, ['#F-endDate', '#F-startDate', '#F-Origin', '#F-Destination'], []);
}
function showOnewayTripItems(flightTab){
    flightTab.find("#onwaydestination").show();
    flightTab.find("#multiDestinationsDiv").hide();
    flightTab.find("#back").hide();
    flightTab.find("#out").show();
    removeError(flightTab);
    validateEnabler(flightTab, ['#F-startDate', '#F-Origin', '#F-Destination'], ['#F-endDate']);
}

function showMulticityItems(flightTab){
    flightTab.find("#onwaydestination").hide();
    flightTab.find("#multiDestinationsDiv").show();
    flightTab.find("#back").hide();
    flightTab.find("#out").hide();
    removeError(flightTab);
    validateEnabler(flightTab, [], ['#F-endDate', '#F-startDate', '#F-Origin', '#F-Destination']);
    var multidest = $("#multiDestinationsDiv");
    multidest.html("");
    $("#multicityTmpl").tmpl(Eyepax.Globals.MaxDestinations).appendTo(multidest);

    if(Eyepax.FlightData.MultiDestination.length > 0){
        var firstElem = Eyepax.FlightData.MultiDestination[0];
        if($.type(Eyepax.FlightData.MultiDestination[0]) === "object"){
            if(firstElem.Origin == '' || firstElem.Destination == '' || firstElem.Out == ''){
                Eyepax.FlightData.MultiDestination.length = 0;
            }
        }
    }

    if (!Eyepax.FlightData.MultiDestination.length > 0) {
        for(var i = 1; Eyepax.Globals.MaxDestinations.length >= i; i++){
            var tempmultidesti = {};
            tempmultidesti.ID = 'destination' + i;
            tempmultidesti.Origin = '';
            tempmultidesti.Destination= '';
            tempmultidesti.Out = '';
            Eyepax.FlightData.MultiDestination.push(tempmultidesti);

            /*initialize dynamic date pickers and autocompletes for multiple destination option*/
            $('.fmulticitydate' + i).datepicker({
            numberOfMonths: Eyepax.Globals.CalanderMonths,
            dateFormat: 'dd/mm/yy',
            beforeShow: function(input, inst) {
                datepopupdirection(input, inst);
            },
            minDate: new Date(),
            monthNames: Eyepax.Locale.MonthsShort,
            dayNamesMin: Eyepax.Locale.DaysShort        
            });
            $('.multidestDatepicker').blur(function() {
                $that = $('.multidestDatepicker');
                $(document).click(function(event) {        
                    if(!($(event.target).is('.ui-datepicker-next')) && !($(event.target).is('.ui-datepicker-prev')) && !($(event.target).is('.multidestDatepicker'))){
                       $( '.multidestDatepicker').datepicker("hide");
                    }
                    else {
                        //datepopupdirectionopt("#H-startDate", "#ui-datepicker-div");
                        datepopupdirectionopt(event.target, "#ui-datepicker-div");
                    }
                });
            });
            
            $( "#multiorigin" + i ).autocomplete({
            source: function( request, response ) {
                $.ajax({
                    url: creatautocompleteURL(Eyepax.ServiceURL.BaseOriginURL, Eyepax.ServiceURL.FlightParams, request.term),
                    data: function(){
                        Eyepax.Globals.Dest = request.term;
                    },
                    dataType: "jsonp",
                    type:'Get',
                    success: function( data ) {
                        //var aa = data;
                        response( $.map( data.r, function( item ) {
                            return {
                                label: item.d,
                                value: item.f
                            }
                        }));
                    }
                });
            },
            focus: function (event, ui) {
                this.value = ui.item.value;
                event.preventDefault(); // Prevent the default focus behavior.
            },
            open: function(event, ui) {
                //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
                //{
                    $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
                //}
                if(Eyepax.Globals.WinW <= 600){
                    setautocompletewidth("#multiorigin" + i);
                }
            },
            minLength: 3
            }).autocomplete( "instance" )._renderItem = function( ul, item ) {
                return $( "<li>" )
                    .append( "<span data-tid='typeahead-icon0' class='icon icon-flights'></span>" + item.label + "</li>" )
                    .appendTo( ul);
            };
            $( "#multidestination" + i ).autocomplete({
            source: function( request, response ) {
                $.ajax({
                    url: creatautocompleteURL(Eyepax.ServiceURL.BaseDestURL, Eyepax.ServiceURL.FlightParams, request.term),
                    data: function(){
                        Eyepax.Globals.Dest = request.term;
                    },
                    dataType: "jsonp",
                    type:'Get',
                    success: function( data ) {
                        //var aa = data;
                        response( $.map( data.r, function( item ) {
                            return {
                                label: item.d,
                                value: item.f
                            }
                        }));
                    }
                });
            },
            focus: function (event, ui) {
                this.value = ui.item.value;
                event.preventDefault(); // Prevent the default focus behavior.
            },
            open: function(event, ui) {
                //if(!($('.ui-autocomplete').find('span.tooltip-arrow-border').length > 0))
                //{
                    $('.ui-autocomplete').css('margin-top', '10px').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: 0px; margin-right: 0px;"></span>');
                //}
                if(Eyepax.Globals.WinW <= 600){
                    setautocompletewidth("#multidestination" + i);
                }
            },
            minLength: 3
            }).autocomplete( "instance" )._renderItem = function( ul, item ) {
                return $( "<li>" )
                    .append( "<span data-tid='typeahead-icon0' class='icon icon-flights'></span>" + item.label + "</li>" )
                    .appendTo( ul);
            };

            //////////////
        } 
    }
    
}




/*function insertRooms(counter, temparray, rooms){
    for(var i = counter; i<=rooms; i++){
        temparray.push(i);
        var tempRoom = {};
        tempRoom.Count = i;
        tempRoom.Adults = 2;
        tempRoom.Childs = 0;
        tempRoom.ID = "Room" + i;
        tempRoom.MaxAdults = Eyepax.Globals.MaxAdults;
        tempRoom.MaxChildren = Eyepax.Globals.MaxChildren;
        tempRoom.MaxRooms = Eyepax.Globals.MaxRooms;
        tempRoom.ChildAges = Eyepax.Globals.ChildAges;
        Eyepax.Data.Rooms.push(tempRoom);
    }
}*/
function insertRooms(counter, temparray, rooms, roomobj){
    for(var i = counter; i<=rooms; i++){
        temparray.push(i);
        var tempRoom = {};
        tempRoom.Count = i;
        tempRoom.Adults = 2;
        tempRoom.Childs = 0;
        tempRoom.ID = "Room" + i;
        tempRoom.MaxAdults = Eyepax.Globals.MaxAdults;
        tempRoom.MaxChildren = Eyepax.Globals.MaxChildren;
        tempRoom.MaxRooms = Eyepax.Globals.MaxRooms;
        tempRoom.ChildAges = Eyepax.Globals.ChildAges;
        
        if(typeof(roomobj) != "undefined")
            roomobj.push(tempRoom);
        else
            Eyepax.Data.Rooms.push(tempRoom);
    }
}
/*function findRoom(roomid){
    return $.grep(Eyepax.Data.Rooms, function(item){
        return item.ID == roomid;
    });
};*/
function findRoom(roomid, roomobj){
    if (typeof(roomobj) != 'undefined') {
        return $.grep(roomobj, function(item){
            return item.ID == roomid;
        });    
    }
    else{
        return $.grep(Eyepax.Data.Rooms, function(item){
            return item.ID == roomid;
        });
    }
};
function findRoomother(roomid, roomsarray){
    return $.grep(roomsarray, function(item){
        return item.ID == roomid;
    });
};
function findChild(obj, childid){
    return $.grep(obj, function(item){
        return item.key == childid;
    });
};
function insertFirstRoom(roomappendLoc, roomexistingLoc){
    //var roomCombo = $(".room-traveller-combo");
    var room = roomappendLoc.find('#H-Room1')
    roomappendLoc.children('.cols-row').remove();
    //if(room.length > 0){
        //var room1 = $("#hotelOnly-1");
        room.remove();
        roomexistingLoc.find("h5").hide();
        roomexistingLoc.children().removeClass("cols-nested");
        //oomexistingLoc.children().appendTo(".room-traveller-combo");
        roomexistingLoc.children().appendTo(roomappendLoc);
        $(roomexistingLoc[0].children).appendTo(roomappendLoc);
    //}    
}
function removeFirstRoom(roomappendLoc){
    var room = roomappendLoc.find('#H-Room1')
    roomappendLoc.children('.cols-row').remove();
    room.remove();        
}
function validate(tab){
    //resetErrorMSGStatus();
    var validatableElem = $(tab).find('[data-validate="true"]');
    //check for if ie 8 place holder values

    var validArray = [];
    var isvalidate = true;
    if($("#searchwrapper").hasClass('lt-ie9')){
         
        $.each(validatableElem, function(index, elem) {
                 var inputpalceholder = $(elem).attr('placeholder');
                 if($(elem).val() === inputpalceholder){
                    isvalidate = false
                    $(elem).addClass('error');
                    showErrorMSG(isvalidate, "empty", tab);                     
                 }
                 else{
                    var validationtype = $(elem).data('validatetype');
                    //if need to validate
                    if($.inArray(validationtype, Eyepax.Validation.Types) > -1){
                        //validate the element
                        switch(validationtype){
                            case "empty":
                                if(isvalidate){
                                    isvalidate = validateEmpty(elem);
                                    showErrorMSG(isvalidate, "empty", tab);
                                }
                                else{
                                    //isvalidate = validateEmpty(elem);
                                    if(!validateEmpty(elem))
                                        showErrorMSG(validateEmpty(elem), "empty", tab);
                                }
                                
                                break;
                            case "age":
                                if(isvalidate){
                                    isvalidate = validateEmpty(elem);
                                    showErrorMSG(isvalidate, "age", tab);
                                }
                                else{
                                    if(!validateEmpty(elem))
                                        showErrorMSG(isvalidate, "age", tab);
                                }
                                break;
                        }
                    }
                 }                 
            });     
    }
    else{
        //showErrorMSG(true, "empty", tab);
        $.each(validatableElem, function(index, elem) {
            //check for validation types
            var validationtype = $(elem).data('validatetype');
            //if need to validate
            if($.inArray(validationtype, Eyepax.Validation.Types) > -1){
                //validate the element
                switch(validationtype){
                    case "empty":
                        if(isvalidate){
                            isvalidate = validateEmpty(elem);
                            showErrorMSG(isvalidate, "empty", tab);
                        }
                        else{
                            //isvalidate = validateEmpty(elem);
                            if(!validateEmpty(elem))
                                showErrorMSG(validateEmpty(elem), "empty", tab);
                        }
                        
                        break;
                    case "age":
                        if(isvalidate){
                            isvalidate = validateEmpty(elem);
                            showErrorMSG(isvalidate, "age", tab);
                        }
                        else{
                            if(!validateEmpty(elem))
                                showErrorMSG(isvalidate, "age", tab);
                        }
                        break;
                }
            }
        });
    }

    
    //check for maximum travellers
    //var maxnumelems = $(validatableElem).find('[data-validatetype="maxnum"]');
    var tabid = $(tab).attr('id');
    if((tabid === 'flight') || (tabid === 'fandh') || (tabid === 'hotel')){
        var maxnumelems = $(tab).find('[data-validatetype="maxnum"][data-validate="true"]');
        var tempnumtravellers = 0;
        $.each(maxnumelems, function(index, maxnumelem) {
             tempnumtravellers = tempnumtravellers + parseInt($(maxnumelem).val());
        });
        if(tempnumtravellers > Eyepax.Globals.MaxTravellers){
            $(maxnumelems).addClass('error');
            $(maxnumelems).parent('label').addClass('invalid');
            isvalidate = false;
            showErrorMSG(false, "maxnum", tab);
        }
        if((tempnumtravellers <= Eyepax.Globals.MaxTravellers) && isvalidate){
            $(maxnumelems).removeClass('error');
            $(maxnumelems).parent('label').removeClass('invalid');
            $(validatableElem).removeClass('error');
            if(isvalidate){
                showErrorMSG(true, "maxnum", tab);
                return true;
            }
        }
    }
    
    if(!isvalidate)
        return false;
    else
        return true;
}
function validateEmpty(elem){
    if(($(elem).val() == "null") || ($(elem).val() == "") || ($(elem).val() == "-1")){
        $(elem).addClass('error');
        //remove errror class on submit button click
        return false;
    }
    else{
        return true;
    }
}
function showErrorMSG(isvalidate, errortype, tab){
    if(isvalidate){
        $(tab).find('p.validation-msg').hide();
        $(tab).find('ul.errors').html("").hide();
        resetErrorMSGStatus();
    }
    else{
        //$(tab).find('ul.errors').html("");
       $.each(Eyepax.Validation.ErrorMSG, function(index, msgobj) {
            if((msgobj.key == errortype) && !(msgobj.showed)){
                var errorelem = '<li><span class="icon"></span>' + msgobj.value + '</li>';
                $(tab).find('ul.errors').append(errorelem).show();
                $(tab).find('p.validation-msg').show();
                //$(tab).find('ul.errors').show();
                msgobj.showed = true;
            }
       });
    }
}
function addLocalization(tabContainer){
    if(!tabContainer.searchWrapper.hasClass("locale")){
        //localization
        $.each(tabContainer.searchWrapper.find("[data-lbl]"), function(i, elem){
            var dalalbl = $(elem).data("lbl");
            var localeval = $.grep(Eyepax.Locale.Labels, function(item){
                return item.key == dalalbl;
            });
            $(elem).text(localeval[0].value);
        });
        tabContainer.searchWrapper.addClass('locale');
        //end loaclization
    }
}
function creatautocompleteURL(baseurl, params, searchword){
    return baseurl + searchword + params;
}
function validateEnabler(tab, itemstoEnable, itemstoDisable){
    /* itemstoEnable = ['#item1', '.item2'....]*/
    /* itemstoDisable = ['#item3', '.item4'....]*/
    /*Enable to validate elements*/
    $.each(itemstoEnable, function(index, item) {
         $(tab).find(item).attr('data-validate', true);
    });
    /*Disable from validating elements*/
    $.each(itemstoDisable, function(index, item) {
         $(tab).find(item).removeAttr('data-validate');
    });
}
function removeError(tab){
    $(tab).find('p.validation-msg').hide();
    $(tab).find('ul.errors').html("").hide();

    $(tab).find('.error').removeClass('error');
}
function resetErrorMSGStatus(){
    /*reset error message status to false*/
    $.each(Eyepax.Validation.ErrorMSG, function(index, msgobj) {
            msgobj.showed = false;
       });    
}
function sendRequest(dataobj){
    datastr = {};
    datastr.regionId = Eyepax.Data.Destination;
    datastr.origin = Eyepax.Data.Origin;
    datastr.children = '';
    datastr.hotelName = Eyepax.Data.HotelName;
    datastr.star = Eyepax.Data.HotelStar;
    var url = "";
    //if(!Eyepax.Data.Nodate){
        datastr.startDate = Eyepax.Data.StartDate;
        datastr.endDate = Eyepax.Data.EndDate;
    //}   
    
    if(Eyepax.Data.Rooms.length > 0){
        var adultsstr = '';
        var childrenstr = '';
        var roomcounter = 0;
        $.each(Eyepax.Data.Rooms, function(i, room){
            /* create adults string - adults=1,1,1 */
            if(i > 0){
                if(adultsstr != '')
                    adultsstr = adultsstr + ',';
                if(childrenstr != '')
                    childrenstr = childrenstr + ',';
            }

            adultsstr = adultsstr + room.Adults;
            roomcounter = roomcounter + 1;
            if($.isArray(room.Childs)){
                $.each(room.Childs, function(index, child) {
                    /*creat string with child ages - children=1_3 ,2_2 ,2_7 */

                    if(index > 0)
                        childrenstr = childrenstr + ',';

                    childrenstr = childrenstr + (roomcounter + "_" + child.value);
                    /*if(room.Childs.length == 1)
                        childrenstr = childrenstr + ',';*/
                });
                //childrenstr = childrenstr + ',';
            }
        });
        datastr.adults = adultsstr;
        if(childrenstr.substr(childrenstr.length - 1) === ','){
            datastr.children = childrenstr.slice(0,-1);
        }
        else{
            datastr.children = childrenstr;
        }
        
    }
    /* delete empty values*/
    $.each( datastr, function( key, value ) {
      if(value == "")
        delete datastr[key];
    });

    if(!(Eyepax.Data.HotelStar == 0)){
        url = getURL(Eyepax.ServiceURL.BaseHotelRquestURL, datastr) + "&star=50";
    }
    else{
        url = getURL(Eyepax.ServiceURL.BaseHotelRquestURL, datastr);
    }
    window.location.href = url;
        
}
function sendRequestwithflight(dataobj){
    datastr = {};
    datastr.FrAirport = Eyepax.Data.FrAirport;
    datastr.DestName = Eyepax.Data.DestinationV;
    datastr.DestID = Eyepax.Data.DestID;
    datastr.InfantInSeat = 0;
    datastr.PackageType = 2;
    datastr.Direct = 0;
    var url = "";
    datastr.FromDate = Eyepax.Data.StartDate;
    datastr.ToDate = Eyepax.Data.EndDate;
    datastr.needUTF8Decode=true;
    
    if(Eyepax.Data.Rooms.length > 0){
        var roomcounter = 0;
        datastr.NumRoom = Eyepax.Data.Rooms.length;
        $.each(Eyepax.Data.Rooms, function(i, room){
            /*NumRoom=2
            NumAdult1=1
            NumChild1=3
            Rm1Child1Age=4
            Rm1Child2Age=7
            Rm1Child3Age=11
            NumAdult2=1
            NumChild2=1
            Rm2Child1Age=3*/            

            roomcounter = roomcounter + 1;

            datastr[ "NumAdult" + roomcounter] = room.Adults;

            if($.isArray(room.Childs)){
                datastr[ "NumChild" + roomcounter] = room.Childs.length;
                var childcounter = 0;
                $.each(room.Childs, function(index, child) {
                    childcounter = childcounter + 1;
                    datastr[ "Rm" + roomcounter + "Child" + childcounter + "Age"] = child.value;
                });
            }
            else
                datastr["NumChild" + roomcounter] = 0;
        });        
    }
    /* delete empty values*/
    /*$.each( datastr, function( key, value ) {
      if(value == "")
        delete datastr[key];
    }); */
//console.dir(datastr);
    url = getURL(Eyepax.ServiceURL.BaseHotelFlightURL, datastr);
    
    window.location.href = url;
        
}

/**dinithi.k@eyepax.com
 * Flight + Hotel button submit
 * @param dataobj
 */
function sendRequestFH(dataobj){
  datastr = {};
  datastr.dnam = Eyepax.Data.Destination;
  datastr.dcty = Eyepax.Data.Origin;
  datastr.children = '';
  datastr.hotelOption = Eyepax.Data.Hotelforpart;

  if(!Eyepax.Data.Nodate){
    datastr.ddpt1 = Eyepax.Data.StartDate;
    datastr.drtn1 = Eyepax.Data.EndDate;
  }

  if(datastr.hotelOption == true){
    datastr.idte1 = Eyepax.Data.Entrance;
    datastr.odte1 = Eyepax.Data.Exit;
    datastr.flxd1=1
  }

  if(Eyepax.Data.Rooms.length > 0){
    var adultsstr = '';
    var childrenstr = '';
    var childrencnt = '';
    var adultscnt = '';
    var crom = 1;

    $.each(Eyepax.Data.Rooms, function(i, room){
      /*create adults string - cadu1=1&cadu2=2*/
      if(i > 0)
        crom = crom + 1;

        datastr['cadu'+crom] = room.Adults;

        if(room.Childs==0)
          childcnt = 0;
        else
          childcnt = Object.keys(room.Childs).length;

          datastr['ckdr'+crom] = childcnt;


      if($.isArray(room.Childs)){
        $.each(room.Childs, function(index, child) {
          datastr['age'+(i+1) +''+ (index+1)] = child.value;
        });

      }
    });

  }
  adultscnt = adultscnt.slice(0,-5);
  childrencnt = childrencnt.slice(0,-5);
  childrenstr = childrenstr.slice(0,-4);
  datastr.tdpt1='';
  datastr.trtn1='';
  datastr.ffst=0;
  datastr.crom = crom;
  datastr.rfrr = 'global-merch.cat.cheapdeals.wizard';

  /* delete empty values*/
  $.each( datastr, function( key, value ) {
    if(value == "")
      delete datastr[key];
  });

  window.location.href = getURL(Eyepax.ServiceURL.BasePackageRquestURL, datastr);

}

/* generate url for rediraction*/
function getURL(theUrl, extraParameters) {
    var extraParametersEncoded = $.param(extraParameters);
    //var seperator = theUrl.indexOf('?') == -1 ? "?" : "&";
    //console.log(extraParametersEncoded);
    //return(theUrl + seperator + extraParametersEncoded);
     return(theUrl + extraParametersEncoded);
}
function encodeRFC5987ValueChars (str) {
    return encodeURIComponent(str).
        // Note that although RFC3986 reserves "!", RFC5987 does not,
        // so we do not need to escape it
        replace(/['()]/g, escape). // i.e., %27 %28 %29
        replace(/\*/g, '%2A').
            // The following are not required for percent-encoding per RFC5987, 
            //  so we can allow for a little better readability over the wire: |`^
            replace(/%(?:7C|60|5E)/g, unescape);
}

function ieplaceholderadder(){
    var ieinputs =  $(".lt-ie9").find('input');
        if(ieinputs.length > 0){
            $.each(ieinputs, function(index, input) {
                 var inputpalceholder = $(input).attr('placeholder');
                 $(input).val($(input).attr('placeholder')).addClass('placeholderspolyfill');

                 //if focus on remove place holder text
                 //if focus out add place holder text if input box val is empty, else dont and remove ashe font color(remove placeholderspolyfill class)
                 $(input).focusin(function(event) {
                     if($(input).val() === inputpalceholder){
                        $(input).val("").removeClass('placeholderspolyfill');                        
                     }
                     else{
                        $(input).removeClass('placeholderspolyfill');
                     }
                 });
                 $(input).focusout(function(event) {
                     if($(input).val() == ""){
                        $(input).val(inputpalceholder).addClass('placeholderspolyfill');                        
                     }
                     else{
                        $(input).removeClass('placeholderspolyfill');
                     }
                 });
            });
        }
}
function ieplaceholderaddervaluecheck(elements){
    var isvalid = true;
        if(elements.length > 0){
            $.each(elements, function(index, elem) {
                 var inputpalceholder = $(elem).attr('placeholder');
                 if($(elem).val() === inputpalceholder){
                    isvalid = false;                        
                 }
                 else{
                    //isvalid = true;
                 }                 
            });
        }
}
function calandercountsetter(){
    var windowW = $(window).width();
    if(windowW <= 600){
        Eyepax.Globals.CalanderMonths = 1;
    }
    else{
        Eyepax.Globals.CalanderMonths = 2;
    }
}
function setautocompletewidth(elem){
    $('.ui-autocomplete').width($(elem).outerWidth());
}
function datepopupdirection(input2, inst){   
    setTimeout(function () {
        var divleft = inst.dpDiv.offset().left;
        var inputleft = $(input2).offset().left;
        var toright = 0;
        var divh = inst.dpDiv.height() - 4;
        if(inputleft > divleft){
            toright = inputleft - divleft
        }
    
        if((inst.dpDiv.outerHeight() + 8 > Math.abs((window.innerHeight - ($(input2).offset().top - $(window).scrollTop() + $(input2).height())))) && (Math.abs((window.innerHeight - ($(input2).offset().top - $(window).scrollTop() + $(input2).height()))) > 0) ){
            insertArrow('tooltip-arrow-bt', toright, divh);
        }
        else{
            insertArrow('tooltip-arrow', toright, 0);
        }
    }, 0);
}
function datepopupdirectionopt(input1, div1){
    setTimeout(function () {
        var divleft = $(div1).offset().left;
        var inputleft = $(input1).offset().left;
        var toright = 0;
        var divh = $(div1).height() - 4;
        if(inputleft > divleft){
            toright = inputleft - divleft
        }
        
        if(($(div1).outerHeight() + 8 > Math.abs((window.innerHeight - ($(input1).offset().top - $(window).scrollTop() + $(input1).height())))) && (Math.abs((window.innerHeight - ($(input1).offset().top - $(window).scrollTop() + $(input1).height()))) > 0) ){
            insertArrow('tooltip-arrow-bt', toright, divh);
        }
        else{
            insertArrow('tooltip-arrow', toright, 0);
        }
    }, 0);
}
function insertArrow(cssclass, mleft, top) {
    clearTimeout(insertArrow.timer);

    if ($('#ui-datepicker-div .ui-datepicker-calendar').is(':visible')){
       
            //$('#ui-datepicker-div').remove('.tooltip-arrow-border, ' + cssclass);
        $('#ui-datepicker-div').find('.tooltip-arrow-border, .tooltip-arrow, .tooltip-arrow-bt').remove();    
        
            if(top == 0){
                $('#ui-datepicker-div').prepend('<span class="tooltip-arrow-border"></span><span class="' + cssclass + '" style="margin-left: ' + mleft + 'px; margin-right: 0px;"></span>');
            }
            else{
                $('#ui-datepicker-div').prepend('<span class="tooltip-arrow-border"></span><span class="' + cssclass + '" style="margin-left: ' + mleft + 'px; margin-right: 0px; top:' + top + 'px;"></span>');
            }            
                   
    }        
    else
        insertArrow.timer = setTimeout(insertArrow, 10);
}
function insertArrowBelow(message, mleft) {
    clearTimeout(insertArrowBelow.timer);

    if ($('#ui-datepicker-div .ui-datepicker-calendar').is(':visible'))
        $('#ui-datepicker-div').append('<span class="tooltip-arrow-border"></span><span class="tooltip-arrow" style="margin-left: ' + mleft + 'px; margin-right: 0px;"></span>');
    else
        insertArrowBelow.timer = setTimeout(insertArrowBelow, 10);
}

/***
    function to select default value for the destination and airport fields when page load
        always select the value from first object
    parameters: 
        serviceurlbase - URL base section for the service
        searviceurlparams - parameters needed to pase for the service with the serviceurlbase url
        destination - destination to be searched
        arrayselector - select the object array from the result
        valueselector - to identify the correct value from different json objects(from the result)
        datatype - jsonp, json etc

***/
function getDefualtsearchVal(serviceurlbase, searviceurlparams, destination, arrayselector, valueselector, idselector, regioncode, datatype, customevent, type){
    var defaultval = {};
    $.ajax({
        url: creatautocompleteURL(serviceurlbase, searviceurlparams, destination),
        dataType: datatype,//"jsonp",
        type:'Get',
        success: function( data ) {
            var iscode = false;
            if(type == "car"){
                var locationType = "";
                $.each(data[arrayselector], function(index, obj) {
                    if(locationType == ""){
                        if(obj['t'] == 'CITY'){
                            locationType = 'city';
                            if(typeof(regioncode) != "undefined")
                                iscode = true;
                            
                            if(data[arrayselector].length > 0){
                                defaultval['value'] = obj[valueselector];
                                defaultval['id'] = obj[idselector];
                                if(iscode)
                                    defaultval['code'] = obj[regioncode];
                            }
                            else{
                                defaultval['value'] = "";
                                defaultval['id'] = "";
                                if(iscode)
                                    defaultval['code'] = "";
                            }
                        }
                    }
                });

            }
            else{
                if(typeof(regioncode) != "undefined")
                    iscode = true;
                
                if(data[arrayselector].length > 0){
                    defaultval['value'] = data[arrayselector][0][valueselector];
                    defaultval['id'] = data[arrayselector][0][idselector];
                    if(iscode)
                        defaultval['code'] = data[arrayselector][0][regioncode];
                }
                else{
                    defaultval['value'] = "";
                    defaultval['id'] = "";
                    if(iscode)
                        defaultval['code'] = "";
                }
            }
            
            $(document).trigger(customevent, defaultval);                
        }
    });
}
function carsuggestlocale(type){
    var localetype = "";
    $.each(Eyepax.Locale.Labels, function(index, obj) {
         if(obj.key == type)
            localetype = obj.value;
    });
    return localetype;
}