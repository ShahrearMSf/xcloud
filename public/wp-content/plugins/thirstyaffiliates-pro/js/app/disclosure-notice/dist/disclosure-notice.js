!function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,o){"use strict";function r(){i(),jQuery("body").on("mouseenter",".tap-disclosure-notice-icon",c),jQuery("body").on("mouseleave",".tap-disclosure-notice-tooltip,.tap-disclosure-notice-icon",l),jQuery("body").on("mouseenter",".tap-disclosure-notice-tooltip",u)}function i(){var t=document.querySelectorAll("body a"),e=0;if(!("object"!=(void 0===t?"undefined":d(t))||t.length<0)){var o=!0,r=!1,i=void 0;try{for(var c,l=t[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;"object"==(void 0===u?"undefined":d(u))&&(s(u.getAttribute("href"))||u.dataset.linkid)&&(a(u),e++)}}catch(t){r=!0,i=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}e&&tap_disclosure_notice_vars.display_bottom_post&&n()}}function n(){var t=(tap_disclosure_notice_vars.content_selector||"body #post-%d").replace(/%d/g,tap_disclosure_notice_vars.post_id),e=document.querySelectorAll(t),o='<a href="'+tap_disclosure_notice_vars.disclosure_page+'" target="_blank">'+tap_disclosure_notice_vars.notice_link_text+"</a>",r=tap_disclosure_notice_vars.bottom_post_message.replace("{{disclosure_link}}",o),i='<div class="tap_disclosure_notice_bottom_post">'+r+"</div>";jQuery(e).append(i)}function s(t){if("string"==typeof t&&t){t=t.replace("http:","{protocol}").replace("https:","{protocol}");var e=jQuery.map(thirsty_global_vars.link_prefixes,function(t){return[t]}),o=t.replace(thirsty_global_vars.home_url,"").replace("{protocol}",""),r=void 0,i=void 0;return o=0==o.indexOf("/")?o.replace("/",""):o,r=o.substr(0,o.indexOf("/")),i=t.replace("/"+r+"/","/"+thirsty_global_vars.link_prefix+"/").replace("{protocol}",window.location.protocol),!!(r&&jQuery.inArray(r,e)>-1)&&i}}function a(t){if(tap_disclosure_notice_vars.display_icon){jQuery(t).append('\n        <span class="tap-disclosure-notice-icon">\n            <i class="dashicons dashicons-info"></i>\n        </span>\n    ')}}function c(){var t=jQuery(this),e=jQuery("body");if(1!=t.data("markup")){var o='<a href="'+tap_disclosure_notice_vars.disclosure_page+'" target="_blank">'+tap_disclosure_notice_vars.notice_link_text+"</a>",r=tap_disclosure_notice_vars.notice_icon_message.replace("{{disclosure_link}}",o),i='<div class="tap-disclosure-notice-tooltip">'+r+"</div>";e.find(".tap-disclosure-notice-tooltip").remove(),e.append(i),t.data("markup",!0);var n=e.find(".tap-disclosure-notice-tooltip"),s=t.offset().left-n.width()/2,a=t.offset().top-n.height()-20;n.css({top:a,left:s}).addClass("show").data("icon",t)}}function l(){var t=jQuery(".tap-disclosure-notice-tooltip");t.addClass("fade"),t.data("showtimeout",setTimeout(function(){return t.removeClass("show")},500)),jQuery(".tap-disclosure-notice-icon").data("markup",!1)}function u(){var t=jQuery(this);clearTimeout(t.data("showtimeout")),t.removeClass("fade"),t.addClass("show")}Object.defineProperty(e,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=r},function(t,e){},function(t,e,o){"use strict";var r=o(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r);o(1),jQuery(document).ready(function(){(0,i.default)()})}]);