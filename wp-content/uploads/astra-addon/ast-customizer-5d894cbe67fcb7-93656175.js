!function(t){t.fn.isInViewport=function(){var e=t(this).offset().top,a=e+t(this).outerHeight(),s=t(window).scrollTop(),n=s+t(window).height();return s<a&&e<n};astraAddon.main_menu_flyout_alignment,astraAddon.above_menu_flyout_alignment,astraAddon.below_menu_flyout_alignment;AstraMenu={init:function(){this._bind(),document.querySelector("body").addEventListener("astraMenuHashLinkClicked",function(e){AstraMenu._close_fullscreen(e),AstraMenu._close_offcanvas(e)})},_bind:function(){(astraAddon.off_canvas_enable||"")&&(t(document).on("click","."+astraAddon.off_canvas_trigger_class,{class:"ast-off-canvas-overlay"},AstraMenu._enable_offcanvas_overlay),t(document).on("click touchstart",".astra-off-canvas-sidebar-wrapper, .astra-off-canvas-sidebar-wrapper .ast-shop-filter-close",{class:"ast-off-canvas-overlay"},AstraMenu._close_offcanvas)),t(document).on("click",".ast-flyout-above-menu-enable .ast-above-header .menu-toggle",AstraMenu._open_above_offcanvas),t(document).on("click touchstart",".ast-flyout-above-menu-overlay .ast-above-header-navigation-wrap, .ast-flyout-above-menu-overlay .ast-above-header .ast-nav-close",AstraMenu._close_above_offcanvas),t(document).on("click",".ast-flyout-below-menu-enable .ast-below-header .menu-toggle",AstraMenu._open_below_offcanvas),t(document).on("click touchstart",".ast-flyout-below-menu-overlay .ast-below-header-navigation-wrap, .ast-flyout-below-menu-overlay .ast-below-header .ast-nav-close",AstraMenu._close_below_offcanvas),t(document).on("click",".ast-fullscreen-below-menu-enable .ast-below-header .menu-toggle",AstraMenu._open_below_fullscreen),t(document).on("click",".ast-fullscreen-below-menu-overlay .ast-below-header .close",AstraMenu._close_below_fullscreen),t(document).on("click",".ast-fullscreen-above-menu-enable .ast-above-header .menu-toggle",AstraMenu._open_above_fullscreen),t(document).on("click",".ast-fullscreen-above-menu-overlay .ast-above-header .close",AstraMenu._close_above_fullscreen),t(document).on("click",".ast-flyout-menu-enable .main-header-bar .menu-toggle",{class:"ast-flyout-menu-overlay"},AstraMenu._enable_primary_menu_overlay),t(document).on("click touchstart",".ast-flyout-menu-overlay .main-header-bar-navigation, .ast-flyout-menu-overlay .main-header-bar .ast-nav-close",{class:"ast-flyout-menu-overlay"},AstraMenu._close_offcanvas),t(document).on("click",".ast-flyout-menu-overlay .main-header-bar-navigation",{class:"toggled"},AstraMenu._toggle_menu),t(document).on("click",".ast-fullscreen-menu-enable .main-header-bar .menu-toggle",AstraMenu._open_fullscreen),t(document).on("click",".ast-fullscreen-menu-overlay .main-header-bar .close",AstraMenu._close_fullscreen),t(document).on("click",".ast-fullscreen-menu-overlay .main-header-bar .close",{class:"toggled"},AstraMenu._toggle_menu),t(document).on("ready",AstraMenu._wp_admin_bar_visible),t(window).on("scroll",AstraMenu._wp_admin_bar_visible)},_open_above_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-above-menu-overlay"),t(".ast-above-header-navigation-wrap .close").length||(t(".ast-above-header-navigation-wrap").prepend('<span class="close"></span>'),t(".ast-above-header-navigation-wrap .close").css("right",s-a))},_open_below_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-below-menu-overlay"),t(".ast-below-header-navigation-wrap .close").length||(t(".ast-below-header-navigation-wrap").prepend('<span class="close"></span>'),t(".ast-below-header-navigation-wrap .close").css("right",s-a))},_open_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-menu-overlay"),t("html").addClass("ast-fullscreen-active"),t(".main-header-bar nav .close").length||(t(".main-header-bar nav").prepend('<span class="close"></span>'),t(".main-header-bar nav .close").css("right",s-a)),t(".ast-primary-menu-disabled .ast-header-custom-item .close").length||t(".ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap").prepend('<span class="close"></span>')},_enable_offcanvas_overlay:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass(e.data.class)},_enable_primary_menu_overlay:function(e){e.preventDefault(),t(".main-header-bar-navigation .close").length||t(".main-navigation").before('<span class="ast-nav-close close"></span>'),t(".ast-merge-header-navigation-wrap .close").length||t(".ast-merge-header-navigation-wrap").append('<span class="ast-nav-close close"></span>'),t("div.ast-masthead-custom-menu-items .close").length||t("div.ast-masthead-custom-menu-items").append('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass(e.data.class),t("html").addClass("ast-offcanvas-active")},_open_above_offcanvas:function(e){e.preventDefault(),t(".ast-above-header-section .close").length||t(".ast-above-header-navigation").prepend('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass("ast-flyout-above-menu-overlay")},_close_above_offcanvas:function(e){e.target===this&&(t("html").removeClass("ast-flyout-above-menu-overlay"),t(".ast-above-header .menu-toggle").removeClass("toggled"),t(".ast-above-header").removeClass("toggle-on"),astraAddon.sticky_active&&t("html").css("overflow",""))},_open_below_offcanvas:function(e){e.preventDefault(),t(".ast-below-header-actual-nav .close").length||t(".ast-below-header-actual-nav").prepend('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass("ast-flyout-below-menu-overlay")},_close_below_offcanvas:function(e){e.target===this&&(t("html").removeClass("ast-flyout-below-menu-overlay"),t(".ast-below-header .menu-toggle").removeClass("toggled"),t(".ast-below-header").removeClass("toggle-on"),astraAddon.sticky_active&&t("html").css("overflow",""))},_close_offcanvas:function(e){e.target!==this&&"astraMenuHashLinkClicked"!==e.type||(e.data=e.data||{},e.data.class=e.data.class||"ast-flyout-menu-overlay ast-offcanvas-active",t("html").css({overflow:"","margin-left":"","margin-right":""}),t("html").removeClass(e.data.class),setTimeout(function(){t("html").removeClass("ast-offcanvas-active")},300))},_close_above_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-above-menu-overlay"),t(".ast-above-header-navigation").removeClass("toggle-on").hide(),t(".ast-above-header .menu-toggle").hasClass("toggled")&&t(".ast-above-header .menu-toggle").removeClass("toggled")},_close_below_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-below-menu-overlay"),t(".ast-below-header .menu-toggle").hasClass("toggled")&&t(".ast-below-header .menu-toggle").removeClass("toggled")},_close_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-menu-overlay"),setTimeout(function(){t("html").removeClass("ast-fullscreen-active")},500),t(".main-header-bar-navigation").removeClass("toggle-on").hide()},_toggle_menu:function(e){t(".main-header-bar .menu-toggle").hasClass(e.data.class)&&t(".main-header-bar .menu-toggle").removeClass(e.data.class),t("html").hasClass("ast-fullscreen-active")&&setTimeout(function(){t("html").removeClass("ast-fullscreen-active")},500)},_toggle_above_menu:function(e){t(".ast-above-header .menu-toggle").hasClass(e.data.class)&&t(".ast-above-header .menu-toggle").removeClass(e.data.class)},_wp_admin_bar_visible:function(e){var a=t("#wpadminbar");a.length&&(a.isInViewport()?t("body").hasClass("ast-admin-bar-visible")||t("body").addClass("ast-admin-bar-visible"):t("body").hasClass("ast-admin-bar-visible")&&t("body").removeClass("ast-admin-bar-visible"))}},t(function(){AstraMenu.init()})}(jQuery);!function(o,r,t){var s="astHookExtSticky",i=r.document,a=(jQuery(r).outerWidth(),jQuery(r).width()),n={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,active_shrink:!1,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"};function e(t,e){this.element=t,this.options=o.extend({},n,e),this._defaults=n,this._name=s,"1"==this.options.hide_on_scroll&&(this.navbarHeight=o(t).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}e.prototype.stick_me=function(t,e){var o=jQuery(t.element),s=jQuery(r).outerWidth(),i=parseInt(t.options.stick_upto_scroll),a=parseInt(o.parent().attr("data-stick-maxwidth")),n=parseInt(o.parent().attr("data-stick-gutter"));"enabled"==(astraAddon.hook_sticky_header||"")&&("desktop"==t.options.sticky_on_device&&astraAddon.hook_custom_header_break_point>s?t.stickRelease(t):"mobile"==t.options.sticky_on_device&&astraAddon.hook_custom_header_break_point<=s?t.stickRelease(t):jQuery(r).scrollTop()>i?"none"==t.options.header_style&&("enabled"==t.options.active_shrink&&t.hasShrink(t,"stick"),o.hasClass("ast-custom-header")&&(o.parent().css("min-height",o.outerHeight()),o.addClass("ast-header-sticky-active").stop().css({"max-width":a,top:n,"padding-top":t.options.shrink.padding_top,"padding-bottom":t.options.shrink.padding_bottom}),o.addClass("ast-sticky-shrunk").stop())):t.stickRelease(t)),"enabled"==(astraAddon.hook_sticky_footer||"")&&("desktop"==t.options.sticky_on_device&&astraAddon.hook_custom_footer_break_point>s?t.stickRelease(t):"mobile"==t.options.sticky_on_device&&astraAddon.hook_custom_footer_break_point<=s?t.stickRelease(t):(jQuery("body").addClass("ast-footer-sticky-active"),o.parent().css("min-height",o.outerHeight()),o.stop().css({"max-width":a})))},e.prototype.update_attrs=function(){var t=this,e=jQuery(t.element),o=parseInt(t.options.gutter),s=t.options.max_width;if("none"==t.options.header_style)var i=e.offset().top||0;"ast-box-layout"!=t.options.site_layout&&(s=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(t,e){jQuery(e).length&&"on"==jQuery(e).parent().attr("data-stick-support")&&(dependent_height=jQuery(e).outerHeight(),o+=parseInt(dependent_height),i-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<a&&(o+=parseInt(t.options.admin_bar_height_lg),i-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=a&&a<=782&&(o+=parseInt(t.options.admin_bar_height_sm),i-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(o+=parseInt(t.options.admin_bar_height_xs),i-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(o+=parseInt(jQuery("body").css("padding-top"),10),i-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(o+=parseInt(jQuery("html").css("padding-top"),10),i-=parseInt(jQuery("html").css("padding-top"),10)),t.options.stick_upto_scroll=i,"none"==t.options.header_style&&e.parent().css("min-height",e.outerHeight()).attr("data-stick-gutter",parseInt(o)).attr("data-stick-maxwidth",parseInt(s))},e.prototype.hasShrink=function(t,e){o(r).scrollTop()>jQuery(t.element).outerHeight()?jQuery("body").addClass("ast-shrink-custom-header"):jQuery("body").removeClass("ast-shrink-custom-header")},e.prototype.stickRelease=function(t){var e=jQuery(t.element);"enabled"==(astraAddon.hook_sticky_header||"")&&"none"==t.options.header_style&&(e.removeClass("ast-header-sticky-active").stop().css({"max-width":"",top:"",padding:""}),e.parent().css("min-height",""),e.removeClass("ast-sticky-shrunk").stop()),"enabled"==(astraAddon.hook_sticky_footer||"")&&jQuery("body").removeClass("ast-footer-sticky-active")},e.prototype.init=function(){if(jQuery(this.element)){var e=this,t=jQuery(e.element);parseInt(e.options.gutter),t.position().top;"none"==e.options.header_style&&t.wrap(e.options.wrap).parent().css("min-height",t.outerHeight()).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(e.options.max_width)),e.update_attrs(),jQuery(r).on("resize",function(){e.stickRelease(e),e.update_attrs(),e.stick_me(e)}),jQuery(r).on("scroll",function(){e.stick_me(e,"scroll")}),jQuery(i).ready(function(t){e.stick_me(e)})}},o.fn[s]=function(t){return this.each(function(){o.data(this,"plugin_"+s)||o.data(this,"plugin_"+s,new e(this,t))})};var d=jQuery("body").width(),_=astraAddon.site_layout||"",h=astraAddon.hook_sticky_header||"",p=astraAddon.hook_shrink_header||"";switch(sticky_header_on_devices=astraAddon.hook_sticky_header_on_devices||"desktop",site_layout_box_width=astraAddon.site_layout_box_width||1200,hook_sticky_footer=astraAddon.hook_sticky_footer||"",sticky_footer_on_devices=astraAddon.hook_sticky_footer_on_devices||"desktop",_){case"ast-box-layout":d=parseInt(site_layout_box_width)}jQuery(i).ready(function(t){"enabled"==h&&jQuery(".ast-custom-header").astHookExtSticky({sticky_on_device:sticky_header_on_devices,header_style:"none",site_layout:_,max_width:d,active_shrink:p}),"enabled"==hook_sticky_footer&&jQuery(".ast-custom-footer").astHookExtSticky({sticky_on_device:sticky_footer_on_devices,max_width:d,site_layout:_,header_style:"none"})})}(jQuery,window);!function(){var s=document.querySelector(".main-header-menu-toggle"),t=document.querySelector(".ast-below-header"),l=document.querySelector(".ast-below-header-actual-nav"),u=document.querySelector(".menu-above-header-toggle"),a=document.querySelector(".menu-below-header-toggle"),r=document.querySelector("html"),i=document.querySelectorAll(".ast-below-header"),c=document.querySelectorAll(".menu-below-header-toggle"),d=document.querySelectorAll(".ast-below-header-actual-nav");if(0<c.length){for(var e=0;e<c.length;e++)if(c[e].setAttribute("data-index",e),c[e].addEventListener("click",function(e){e.preventDefault();for(var t=this.getAttribute("data-index"),l=i[t].querySelectorAll(".menu-item-has-children, .page_item_has_children"),a=0;a<l.length;a++){l[a].classList.remove("ast-submenu-expanded");for(var o=l[a].querySelectorAll(".sub-menu, .children"),n=0;n<o.length;n++)o[n].style.display="none"}switch(this.getAttribute("rel")||""){case"below-header":toggleClass(i[t],"toggle-on"),toggleClass(c[t],"toggled"),i[t].classList.contains("toggle-on")?(d[t].style.display="block",r.classList.add("below-header-toggle-on")):(d[t].style.display="",r.classList.remove("below-header-toggle-on"))}},!1),void 0!==i[e]){var o=i[e].querySelectorAll("ul.ast-below-header-menu li");if(AstraNavigationMenu(o),document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link"))var n=i[e].querySelectorAll(".ast-header-break-point .ast-below-header-menu .ast-menu-toggle, .ast-header-break-point .ast-below-header-menu .menu-item-has-children > a");else n=i[e].querySelectorAll("ul.ast-below-header-menu .ast-menu-toggle");AstraToggleMenu(n)}}else{var g=document.querySelectorAll(".main-header-menu"),m=document.querySelectorAll(".ast-below-header-menu-items"),h=document.querySelectorAll(".main-header-menu-toggle");if(0<h.length&&0<m.length&&0==g.length)for(e=0;e<h.length;e++){var v=m[e].querySelectorAll("li");AstraNavigationMenu(v);var y=m[e].querySelectorAll(".ast-menu-toggle");AstraToggleMenu(y)}}null!=a&&(null!=s&&null!=l&&s.addEventListener("click",function(e){t.classList.remove("toggle-on"),l.style.display="none",null!=u&&u.classList.remove("toggled"),null!=a&&a.classList.remove("toggled")},!1),a.addEventListener("click",function(e){e.preventDefault(),null!=s&&s.classList.remove("toggled"),null!=u&&u.classList.remove("toggled");var t=document.querySelector(".ast-above-header");if(null!=t){t.classList.remove("toggle-on");var l=document.querySelector(".ast-above-header-navigation");null!=l&&(l.style.display="")}var a=document.querySelector(".main-header-bar-navigation");null!=a&&(a.classList.remove("toggle-on"),a.style.display="");var o=document.querySelector(".ast-below-header-navigation"),n=o.getBoundingClientRect(),r=Math.max(document.documentElement.clientHeight,window.innerHeight||0);o.style.maxHeight=Math.abs(r-n.top)+"px"},!1))}();!function(){var t=document.querySelector(".ast-above-header"),l=document.querySelector(".ast-above-header-navigation"),a=document.querySelector(".menu-above-header-toggle"),o=document.querySelector(".main-header-menu-toggle"),n=document.querySelector(".menu-below-header-toggle"),i=document.querySelector("html"),d=document.querySelectorAll(".ast-above-header"),c=document.querySelectorAll(".menu-above-header-toggle"),g=document.querySelectorAll(".ast-above-header-navigation");if(0<c.length){for(var e=0;e<c.length;e++)if(c[e].setAttribute("data-index",e),c[e].addEventListener("click",function(e){e.preventDefault();for(var t=this.getAttribute("data-index"),l=d[t].querySelectorAll(".menu-item-has-children, .page_item_has_children"),a=0;a<l.length;a++){l[a].classList.remove("ast-submenu-expanded");for(var o=l[a].querySelectorAll(".sub-menu, .children"),n=0;n<o.length;n++)o[n].style.display="none"}switch(this.getAttribute("rel")||""){case"above-header":toggleClass(d[t],"toggle-on"),toggleClass(c[t],"toggled"),d[t].classList.contains("toggle-on")?(g[t].style.display="block",i.classList.add("above-header-toggle-on")):(g[t].style.display="",i.classList.remove("above-header-toggle-on")),document.body.classList.add("ast-above-header-nav-open")}var r=document.querySelector(".ast-above-header-navigation"),s=r.getBoundingClientRect(),u=Math.max(document.documentElement.clientHeight,window.innerHeight||0);r.style.maxHeight=Math.abs(u-s.top)+"px"},!1),void 0!==d[e]){var r=d[e].querySelectorAll("ul.ast-above-header-menu li");if(AstraNavigationMenu(r),document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link"))var s=d[e].querySelectorAll(".ast-header-break-point .ast-above-header-menu .ast-menu-toggle, .ast-header-break-point .ast-above-header-menu .menu-item-has-children > a");else s=d[e].querySelectorAll("ul.ast-above-header-menu .ast-menu-toggle");AstraToggleMenu(s)}}else{var u=document.querySelectorAll(".main-header-menu"),m=document.querySelectorAll(".ast-above-header-menu-items"),v=document.querySelectorAll(".main-header-menu-toggle");if(0<v.length&&0<m.length&&0==u.length)for(e=0;e<v.length;e++){var h=m[e].querySelectorAll("li");AstraNavigationMenu(h);var y=m[e].querySelectorAll(".ast-menu-toggle");AstraToggleMenu(y)}}null!=a&&(null!=o&&null!=l&&o.addEventListener("click",function(e){t.classList.remove("toggle-on"),l.style.display="none",null!=a&&a.classList.remove("toggled"),null!=n&&n.classList.remove("toggled")},!1),a.addEventListener("click",function(e){e.preventDefault(),null!=o&&o.classList.remove("toggled"),null!=n&&n.classList.remove("toggled");var t=document.querySelector(".ast-below-header");if(null!=t){var l=document.querySelector(".ast-below-header-actual-nav");t.classList.remove("toggle-on"),null!=l&&(l.style.display="")}var a=document.querySelector(".main-header-bar-navigation");null!=a&&(a.classList.remove("toggle-on"),a.style.display="")},!1))}();!function(r,i,e){var a="astExtSticky",d=i.document,o=(jQuery(i).outerWidth(),jQuery(i).width()),s={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"},n=0;function t(e,t){this.element=e,this.options=r.extend({},s,t),this._defaults=s,this._name=a,"1"==this.options.hide_on_scroll&&(this.navbarHeight=r(e).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}t.prototype.stick_me=function(e,t){var a=jQuery(e.element);jQuery(i).outerWidth();if(stick_upto_scroll=parseInt(e.options.stick_upto_scroll),max_width=parseInt(a.parent().attr("data-stick-maxwidth")),gutter=parseInt(a.parent().attr("data-stick-gutter")),"desktop"==e.options.sticky_on_device&&jQuery("body").hasClass("ast-header-break-point"))e.stickRelease(e);else if("mobile"!=e.options.sticky_on_device||jQuery("body").hasClass("ast-header-break-point"))if(jQuery(i).scrollTop()>stick_upto_scroll){var s=a;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"stick"):"none"==e.options.header_style?(a.parent().css("min-height",a.outerHeight()),a.addClass("ast-sticky-active").stop().css({"max-width":max_width,top:gutter,"padding-top":e.options.shrink.padding_top,"padding-bottom":e.options.shrink.padding_bottom}),a.addClass("ast-sticky-shrunk").stop(),r(d).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"slide"==e.options.header_style?(s.css({top:gutter}),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),r("html").addClass("ast-header-stick-slide-active"),r(d).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"fade"==e.options.header_style&&(s.css({top:gutter}),s.addClass("ast-header-fade"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({opacity:"1"}),r("html").addClass("ast-header-stick-fade-active"),r(d).trigger("addStickyClass"),s.addClass("ast-header-sticked"))}else e.stickRelease(e);else e.stickRelease(e)},t.prototype.update_attrs=function(){var e=this,t=jQuery(e.element),a=parseInt(e.options.gutter),s=e.options.max_width;if("none"!=e.options.header_style||jQuery("body").hasClass("ast-sticky-toggled-off")){if(r("#masthead").length){var i=r("#masthead");d=i.offset().top+i.outerHeight()+100||0}}else var d=t.offset().top||0;"ast-box-layout"!=e.options.site_layout&&(s=jQuery("body").width()),e.options.dependent&&jQuery.each(e.options.dependent,function(e,t){jQuery(t).length&&"on"==jQuery(t).parent().attr("data-stick-support")&&(dependent_height=jQuery(t).outerHeight(),a+=parseInt(dependent_height),d-=parseInt(dependent_height))}),e.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<o&&(a+=parseInt(e.options.admin_bar_height_lg),d-=parseInt(e.options.admin_bar_height_lg)),e.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=o&&o<=782&&(a+=parseInt(e.options.admin_bar_height_sm),d-=parseInt(e.options.admin_bar_height_sm)),e.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(a+=parseInt(e.options.admin_bar_height_xs),d-=parseInt(e.options.admin_bar_height_xs)),e.options.body_padding_support&&(a+=parseInt(jQuery("body").css("padding-top"),10),d-=parseInt(jQuery("body").css("padding-top"),10)),e.options.html_padding_support&&(a+=parseInt(jQuery("html").css("padding-top"),10),d-=parseInt(jQuery("html").css("padding-top"),10)),e.options.stick_upto_scroll=d,"none"==e.options.header_style?t.parent().css("min-height",t.outerHeight()).attr("data-stick-gutter",parseInt(a)).attr("data-stick-maxwidth",parseInt(s)):(t.parent().attr("data-stick-gutter",parseInt(a)).attr("data-stick-maxwidth",parseInt(s)),"ast-padded-layout"===e.options.site_layout&&t.css("max-width",parseInt(s)))},t.prototype.hasScrolled=function(e,t){var a=r(i).scrollTop();if(!(Math.abs(n-a)<=5)){var s=jQuery(e.element);n<a&&0<a?jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up"):a+r(i).height()<r(d).height()&&jQuery(e.element).removeClass("ast-nav-up").addClass("ast-nav-down"),n=a,r(e.element).hasClass("ast-nav-up")||"stick"!=t?(s.css({transform:"translateY(-100%)"}).stop(),setTimeout(function(){s.removeClass("ast-sticky-active")},300),s.css({visibility:"hidden",top:""}),r(d).trigger("removeStickyClass"),r("html").removeClass("ast-header-stick-scroll-active"),s.removeClass("ast-header-sticked")):(s.css({top:gutter}),s.addClass("ast-header-sticked"),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),r(d).trigger("addStickyClass"),r("html").addClass("ast-header-stick-scroll-active"))}},t.prototype.stickRelease=function(e){var t=jQuery(e.element),a=t;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"release"):"none"==e.options.header_style?(t.removeClass("ast-sticky-active").stop().css({"max-width":"",top:"",padding:""}),t.parent().css("min-height",""),r(d).trigger("removeStickyClass"),a.removeClass("ast-header-sticked"),t.removeClass("ast-sticky-shrunk").stop()):"slide"==e.options.header_style?(a.removeClass("ast-sticky-active").stop().css({transform:"translateY(-100%)"}),a.css({visibility:"hidden",top:""}),r("html").removeClass("ast-header-stick-slide-active"),r(d).trigger("removeStickyClass"),a.removeClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.removeClass("ast-sticky-active").stop().css({opacity:"0"}),a.css({visibility:"hidden"}),a.removeClass("ast-header-sticked"),r(d).trigger("removeStickyClass"),r("html").removeClass("ast-header-stick-fade-active"))},t.prototype.init=function(){if(jQuery(this.element)){var t=this,e=jQuery(t.element);parseInt(t.options.gutter),e.position().top;"none"==t.options.header_style?e.wrap(t.options.wrap).parent().css("min-height",e.outerHeight()).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)):e.wrap(t.options.wrap).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)),t.update_attrs(),jQuery(i).on("resize",function(){t.stickRelease(t),t.update_attrs(),t.stick_me(t)}),jQuery(i).on("scroll",function(){t.stick_me(t,"scroll"),jQuery("body").hasClass("ast-sticky-toggled-off")&&(t.update_attrs(),t.stick_me(t,"scroll"))}),jQuery(d).ready(function(e){t.stick_me(t)})}},r.fn[a]=function(e){return this.each(function(){r.data(this,"plugin_"+a)||r.data(this,"plugin_"+a,new t(this,e))})};var h=jQuery("body"),l=h.width(),c=astraAddon.stick_header_meta||"default",p=astraAddon.header_main_stick||"",y=astraAddon.header_main_shrink||"",_=astraAddon.header_above_stick||"",m=astraAddon.header_below_stick||"",u=astraAddon.header_main_stick_meta||"",g=astraAddon.header_above_stick_meta||"",k=astraAddon.header_below_stick_meta||"",v=astraAddon.site_layout||"",b=(astraAddon.site_layout_padded_width,astraAddon.site_layout_box_width||1200),f=(astraAddon.site_content_width,astraAddon.sticky_header_on_devices||"desktop"),w=astraAddon.sticky_header_style||"none",j=astraAddon.sticky_hide_on_scroll||"",x=astraAddon.header_logo_width||"",Q=astraAddon.responsive_header_logo_width||"";if("disabled"!=c){if("enabled"===c&&(p=u,_=g,m=k),0<r("header .site-logo-img img").length){var C=r("header .site-logo-img img"),I=C.attr("height");if(void 0===I&&(I=C.height()),0==I&&(I=""),-1===I.toString().indexOf("%")&&(I+="px"),""!=Q.desktop||""!=Q.tablet||""!=Q.mobile)var S="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .site-logo-img .astra-logo-svg { width: "+Q.desktop+"px; } @media (max-width: 768px) { #masthead .site-logo-img .astra-logo-svg { width: "+Q.tablet+"px; } } @media (max-width: 544px) { #masthead .site-logo-img .astra-logo-svg{ width: "+Q.mobile+"px; } }  #masthead .site-logo-img img { max-height: "+I+"; width: auto; } </style>";else if(""!=x)S="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .site-logo-img .astra-logo-svg { width: "+x+"px; } #masthead .site-logo-img img { max-height: "+I+"; width: auto; } </style>";r("head").append(S)}if(p||_||m){switch(r(d).on("addStickyClass",function(){var e="";"1"!=p&&"on"!=p||(e+=" ast-primary-sticky-header-active"),"1"!=_&&"on"!=_||(e+=" ast-above-sticky-header-active"),"1"!=m&&"on"!=m||(e+=" ast-below-sticky-header-active"),r("body").addClass(e)}),r(d).on("removeStickyClass",function(){var e="";"1"!=p&&"on"!=p||(e+=" ast-primary-sticky-header-active"),"1"!=_&&"on"!=_||(e+=" ast-above-sticky-header-active"),"1"!=m&&"on"!=m||(e+=" ast-below-sticky-header-active"),r("body").removeClass(e)}),v){case"ast-box-layout":l=parseInt(b)}jQuery(d).ready(function(e){if("1"==j)"1"==y&&jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=_&&"on"!=_&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=p&&"on"!=p&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=m&&"on"!=m&&jQuery("#ast-fixed-header .ast-below-header").hide(),jQuery("#ast-fixed-header").astExtSticky({max_width:l,site_layout:v,sticky_on_device:f,header_style:"slide",hide_on_scroll:j});else if("none"==w)if("1"!=_&&"on"!=_||jQuery("#masthead .ast-above-header").astExtSticky({max_width:l,site_layout:v,sticky_on_device:f,header_style:w,hide_on_scroll:j}),"1"!=p&&"on"!=p||"1"!=m&&"on"!=m){if("1"==p||"on"==p){var t="";y&&(t={padding_top:"",padding_bottom:""}),jQuery("#masthead .main-header-bar").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:l,site_layout:v,shrink:t,sticky_on_device:f,header_style:w,hide_on_scroll:j}),jQuery("#masthead .ast-custom-header").astExtSticky({max_width:l,site_layout:v,shrink:t,sticky_on_device:f,header_style:w,hide_on_scroll:j})}"1"!=m&&"on"!=m||jQuery("body").hasClass("ast-header-break-point")||jQuery("#masthead .ast-below-header").astExtSticky({dependent:["#masthead .main-header-bar","#masthead .ast-above-header"],max_width:l,site_layout:v,sticky_on_device:f,header_style:w,hide_on_scroll:j})}else jQuery("#masthead .main-header-bar-wrap").wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead .ast-below-header-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .main-header-bar-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:l,site_layout:v,shrink:t,sticky_on_device:f,header_style:w,hide_on_scroll:j});else if(jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=_&&"on"!=_&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=p&&"on"!=p&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=m&&"on"!=m&&jQuery("#ast-fixed-header .ast-below-header").hide(),"1"==_||"on"==_||"1"==p||"on"==p||"1"==m||"on"==m){t="";y&&(t={padding_top:"",padding_bottom:""}),jQuery("#ast-fixed-header").astExtSticky({max_width:l,site_layout:v,shrink:t,sticky_on_device:f,header_style:w,hide_on_scroll:j})}"mobile"!=f&&"both"!=f||(jQuery("#masthead .main-header-menu-toggle").click(function(e){if(jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")){if(h.addClass("ast-sticky-toggled-off"),"none"==s.header_style&&(jQuery("#masthead .main-header-bar").hasClass("ast-sticky-active")||jQuery("#masthead .ast-stick-primary-below-wrapper").hasClass("ast-sticky-active"))){var t=jQuery(i).height(),a=0;jQuery("#masthead .ast-above-header")&&jQuery("#masthead .ast-above-header").length&&(a=jQuery("#masthead .ast-above-header").height()),"1"==j&&jQuery("html").css({overflow:"hidden"}),"1"!=y||"1"!=p&&"on"!=p||"1"!=m&&"on"!=m?jQuery("#masthead .main-header-bar.ast-sticky-active").css({"max-height":t-a+"px","overflow-y":"auto"}):jQuery("#masthead .ast-stick-primary-below-wrapper").css({"max-height":t-a+"px","overflow-y":"auto"})}}else h.addClass("ast-sticky-toggled-off"),jQuery("html").css({overflow:""}),"1"!=y||"1"!=p&&"on"!=p||"1"!=m&&"on"!=m?jQuery("#masthead .main-header-bar.ast-sticky-active").css({"max-height":"","overflow-y":""}):jQuery("#masthead .ast-stick-primary-below-wrapper").css({"max-height":"","overflow-y":""})}),jQuery("#ast-fixed-header .main-header-menu-toggle").click(function(e){if(jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass("toggled")){var t=jQuery(i).height();"1"==j&&jQuery("html").css({overflow:"hidden"}),jQuery("#ast-fixed-header").css({"max-height":t+"px","overflow-y":"auto"})}else jQuery("html").css({overflow:""}),jQuery("#ast-fixed-header").css({"max-height":"","overflow-y":""})}))})}}}(jQuery,window);jQuery,jQuery(document).ready(function(o){var r=document.querySelector("#page header");jQuery("#ast-scroll-top")&&jQuery("#ast-scroll-top").length&&(ast_scroll_top=function(){var o=jQuery("#ast-scroll-top"),e=o.css("content"),t=o.data("on-devices");if(e=e.replace(/[^0-9]/g,""),"both"==t||"desktop"==t&&"769"==e||"mobile"==t&&""==e){var l=window.pageYOffset||document.body.scrollTop;r&&r.length?l>r.offsetHeight+100?o.show():o.hide():300<jQuery(window).scrollTop()?o.show():o.hide()}else o.hide()},ast_scroll_top(),jQuery(window).on("scroll",function(){ast_scroll_top()}),jQuery("#ast-scroll-top").on("click",function(o){o.preventDefault(),jQuery("html,body").animate({scrollTop:0},200)}))});var items=document.getElementsByClassName("astra-megamenu-li");[].slice.call(items).forEach(function(w){jQuery(w).hover(function(){var e=jQuery(w).parents(".ast-container"),a=e.children(),t=e.parent(),s=jQuery(this);if(s.hasClass("full-width-mega")&&(a=jQuery(a).closest(".ast-container")),parseInt(jQuery(window).width())>parseInt(astra.break_point)){var n=a.width(),r=a.offset(),i=s.offset(),f=i.left-(r.left+parseFloat(a.css("paddingLeft"))),u=t.width(),l=t.offset(),o=i.left-(l.left+parseFloat(t.css("paddingLeft")));if(s.hasClass("menu-container-width-mega")){$target_container=jQuery(".main-navigation"),n=$target_container.width()+"px";var m=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),d=s.offset(),c=jQuery(window).width()-m-d.left;f=parseInt($target_container.width()-c)}s.hasClass("full-width-mega")?(s.find(".astra-full-megamenu-wrapper").css({left:"-"+o+"px",width:u}),s.find(".astra-megamenu").css({width:n})):s.find(".astra-megamenu").css({left:"-"+f+"px",width:n})}else s.find(".astra-megamenu").css({left:"",width:"","background-image":""}),s.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""})})}),[].slice.call(items).forEach(function(e){var a=jQuery(e).parents(".ast-container"),m=a.children(),d=a.parent(),c=jQuery(e);c.hasClass("full-width-mega")&&(m=jQuery(m).closest(".ast-container")),c.find(".menu-link").focusin(function(e){if(c.find(".sub-menu").addClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus"),parseInt(jQuery(window).width())>parseInt(astra.break_point)){var a=m.width(),t=m.offset(),s=c.offset(),n=s.left-(t.left+parseFloat(m.css("paddingLeft"))),r=d.width(),i=d.offset(),f=s.left-(i.left+parseFloat(d.css("paddingLeft")));if(c.hasClass("menu-container-width-mega")){$target_container=jQuery(".main-navigation"),a=$target_container.width()+"px";var u=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),l=c.offset(),o=jQuery(window).width()-u-l.left;n=parseInt($target_container.width()-o)}c.hasClass("full-width-mega")?(c.find(".astra-full-megamenu-wrapper").css({left:"-"+f+"px",width:r}),c.find(".astra-megamenu").css({width:a})):c.find(".astra-megamenu").css({left:"-"+n+"px",width:a})}else c.find(".astra-megamenu").css({left:"",width:"","background-image":""}),c.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""})}),c.find(".menu-link").keydown(function(e){9==e.which&&e.shiftKey&&(c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"))}),jQuery(e).find(".sub-menu .menu-item").last().focusout(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),jQuery(window).click(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),c.click(function(e){e.stopPropagation()})});!function(){var e,t;function n(e){var t=document.body.className;t=t.replace(e,""),document.body.className=t}function r(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function s(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}function l(e){if(document.body.classList.contains("ast-header-break-point")){var t=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar");if(null!==a&&null!==t){var o=t.offsetHeight,n=a.offsetHeight;if(o&&!document.body.classList.contains("ast-no-toggle-menu-enable"))var s=parseFloat(o)-parseFloat(n);else s=parseFloat(n);e.style.maxHeight=Math.abs(s)+"px"}}}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),o=0;a.length>o;o++)a[o].onclick=function(e){if(e.preventDefault(),e||(e=window.event),this.classList.contains("header-cover"))for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)for(var o=t[a].parentNode.querySelectorAll("a.astra-search-icon"),n=0;n<o.length;n++)o[n]==this&&(r(t[a]),t[a].querySelector("input.search-field").focus(),l(t[a]));else if(this.classList.contains("full-screen")){var s=document.getElementById("ast-seach-full-screen-form");s.classList.contains("full-screen")&&(r(s),c="full-screen",document.body.className+=" "+c,s.querySelector("input.search-field").focus())}var c};for(var c=document.getElementsByClassName("close"),i=(o=0,c.length);o<i;++o)c[o].onclick=function(e){e||(e=window.event);for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){s(t.parentNode),n("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){var t=document.getElementById("ast-seach-full-screen-form");null!=t&&(s(t),n("full-screen"));for(var a=document.querySelectorAll(".ast-search-box.header-cover"),o=0;o<a.length;o++)s(a[o])}},window.addEventListener("resize",function(){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""})}();