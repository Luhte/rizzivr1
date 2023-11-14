(()=>{"use strict";function e(e,o){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.id=e,t.href=o,t.addEventListener("load",(function(){for(var o=document.querySelectorAll("link[id="+e+"]"),t=0;t<o.length-1;t++)o[t].parentNode.removeChild(o[t])})),document.head.appendChild(t)}var o="4b5c1d104b39d6487d39dfc077bdd41d6ea4a761",t=function(e,o){var t=document.createElement("div");t.style.cssText="color:white;background-color:red;padding:5em;font-weight:bold;text-align:center;",t.innerHTML=e+'<br/><b>More information can be found at<br/><br/><a href="https://help.spreadshop.com/hc/en-us/articles/360010529039">https://help.spreadshop.com/hc/en-us/articles/360010529039</a></b>',o?o.parentNode.insertBefore(t,o):document.body.appendChild(t)};function n(n){!function(e){if(!e||"object"!=typeof e){var o="Could not embed SpreadShop: No 'spread_shop_config' object found in window";throw t(o),new Error(o)}["baseId","prefix","shopName"].forEach((function(o){if(!e[o])throw t("<h2>Could not embed your SpreadShop!</h2><p>Please provide a '"+o+"' in the spread_shop_config object.</p>"),new Error("Could not embed SpreadShop: Element with id '"+e.baseId+"' not found")})),e.integrationProvider&&(e.integrationProvider.match(/^[A-Za-z\s0-9.\-_]*$/i)||(console.error("[SpreadShop] Invalid integrationProvider '"+e.integrationProvider+"' found - will not use this! Valid values are strings/numbers (and whitespaces, ., -, _)."),delete e.integrationProvider))}(n);var r=document.getElementById(n.baseId);!function(e,o){if(!o){var n="<h2>Could not embed your SpreadShop!</h2><p>Please add a container with the id '"+e.baseId+"' to your HTML file.</p>";throw t(n),new Error("Could not embed SpreadShop: Element with id '"+e.baseId+"' not found")}}(n,r),function(e,o){null===document.doctype&&(console.error("[SpreadShop] Could embed shop '"+e.shopName+"' because of missing doctype. Please add '<!DOCTYPE html>' at the beginning of your html file."),t('\n    <h2>Could not properly render your SpreadShop!</h2>\n    <p>This HTML Document does not specify a doctype. This can lead to very strange layout and styling errors.</p> \n    <p>Please add \'&lt;!DOCTYPE html&gt;\' at the beginning of your html file.</p>\n    <br />\n    <small>For more information read the documentation of <a href="https://www.w3schools.com/tags/tag_doctype.asp">doctype</a> and <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mozilla_quirks_mode_behavior">quirks mode</a>.</small>\n  ',o))}(n,r);var d,a=("/",-1!==(d=n.prefix).indexOf("/",d.length-1)?n.prefix.substring(0,n.prefix.length-1):n.prefix);a=a.replace("shop.spreadshirt.",n.shopName+".myspreadshop."),n.prefix=a,window.sprd_public_path=a+"/js/",function(e){var n=document.createElement("script");n.type="text/javascript",n.src=e+"/js/shop.bundle."+o+".js",n.onerror=function(){t("Could not embed SpreadShop: Failed to load shop script")},document.head.appendChild(n)}(a),function(t,n){e("sprd-css",t+"/shopfiles/css/shop_prefixed."+o+".css"),e("sprd-custom-css",t+"/"+n.shopName+"/shopData/custom.css?locale="+n.locale+"&version="+o+(n.loadFonts?"&loadFonts=true":""))}(a,n)}var r=!1,d=window.spread_shop_config;d&&"object"==typeof d&&document.getElementById(d.baseId)&&(n(d),r=!0),r||document.addEventListener("DOMContentLoaded",(function(){n(d)}))})();