$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>$(this).height()-$("nav").height()?($("nav").addClass("nav-fixed"),$("nav > div.logo").fadeIn(),$("nav > div.nav-toggle").fadeIn()):($("nav").removeClass("nav-fixed"),$("nav > div.logo").fadeOut(),$("nav > div.nav-toggle").fadeOut())}),$(".nav-icon").click(function(){$(".nav-full").toggleClass("active"),$(".page").toggleClass("active"),$(this).find("img").toggle()}),$(".nav-full").find("a").click(function(){$(".nav-full").toggleClass("active"),$(".page").toggleClass("active"),$(".nav-icon").find("img").toggle()}),$("pre code").each(function(a,n){hljs.highlightBlock(n)})});