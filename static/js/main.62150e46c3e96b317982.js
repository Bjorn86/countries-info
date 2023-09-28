/*! For license information please see main.62150e46c3e96b317982.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n={190:(e,t,r)=>{var n=r(378),i=r(634),a=r(783),o=r(883),c=r(935),s=r(615),l=r.n(s),u=r(624),d=r(246);function h(e){var t=e.isDarkTheme,r=e.onThemeSwitchClick;return(0,d.jsx)("header",{className:(0,u.Z)("header",{header_theme_dark:t}),children:(0,d.jsxs)("div",{className:"header__wrapper",children:[(0,d.jsxs)(c.Z5,{children:[(0,d.jsx)(c.AW,{path:"/",element:(0,d.jsx)("h1",{className:(0,u.Z)("header__title",{header__title_theme_dark:t}),children:"Where in the world?"})}),(0,d.jsx)(c.AW,{path:":countryCode",element:(0,d.jsx)(a.rU,{to:"/",className:"header__link",children:(0,d.jsx)("h2",{className:(0,u.Z)("header__title",{header__title_theme_dark:t}),children:"Where in the world?"})})})]}),(0,d.jsx)("button",{className:(0,u.Z)("header__btn",{header__btn_theme_dark:t}),type:"button",onClick:r,children:t?"Light Mode":"Dark Mode"})]})})}const p=h;function f(e){var t=e.isDarkTheme,r=e.onSearchChange,n=e.searchTerm;return(0,d.jsx)("form",{className:"search",role:"search",children:(0,d.jsx)("input",{className:(0,u.Z)("search__input",{search__input_theme_dark:t}),id:"search-input",type:"search",name:"search","aria-label":"Search for a country",autoComplete:"off",placeholder:"Search for a country...",value:n,onChange:function(e){return r(e.target.value)}})})}h.propTypes={isDarkTheme:l().bool.isRequired,onThemeSwitchClick:l().func.isRequired};const m=f;f.propTypes={isDarkTheme:l().bool.isRequired,onSearchChange:l().func.isRequired,searchTerm:l().string.isRequired};var _=r(425),g=["All regions","Africa","Americas","Antarctic","Asia","Europe","Oceania"],y="Escape",v="SpaceBar",k="Enter",b="ArrowUp",j="ArrowDown",x="Home",w="End";function O(e){var t=e.isDarkTheme,r=e.isOptionsOpen,n=e.onOptionMenuClick,i=e.onOptionSelect,a=e.toSwitchOptions,o=e.selectedOption,c=e.optionsList,s=function(e,t){switch(e.key){case v:case k:e.preventDefault(),i(t)}},l=function(e){switch(e.preventDefault(),e.key){case y:n(e);break;case b:a(o-1>=0?o-1:c.length-1);break;case j:a(o===c.length-1?0:o+1);break;case x:a(0);break;case w:a(c.length-1)}};return(0,d.jsxs)("div",{className:"region-select",children:[(0,d.jsx)("button",{className:(0,u.Z)("region-select__btn",{"region-select__btn_theme_dark":t}),type:"button",onClick:n,onKeyDown:l,"aria-haspopup":"listbox","aria-expanded":r,children:c[o]}),(0,d.jsx)("ul",{className:(0,u.Z)("region-select__list",{"region-select__list_theme_dark":t},{"region-select__list_open":r}),role:"listbox","aria-activedescendant":c[o],"aria-labelledby":c[o],tabIndex:0,onKeyDown:l,children:c.map((function(e,r){return(0,d.jsx)("li",{className:(0,u.Z)("region-select__item",{"region-select__item_theme_dark":t}),id:e,role:"option","aria-selected":o===r,tabIndex:0,onKeyDown:s(r),onClick:function(){i(r)},children:e},(0,_.Z)())}))})]})}const N=O;function S(e){var t=e.isDarkTheme,r=e.onSearchChange,n=e.searchTerm,i=e.isOptionsOpen,a=e.onOptionMenuClick,o=e.onOptionSelect,c=e.toSwitchOptions,s=e.selectedOption,l=e.optionsList;return(0,d.jsx)("section",{className:"filter","aria-label":"Section with search and filters",children:(0,d.jsxs)("div",{className:"filter__wrapper",children:[(0,d.jsx)(m,{isDarkTheme:t,onSearchChange:r,searchTerm:n}),(0,d.jsx)(N,{isDarkTheme:t,isOptionsOpen:i,onOptionMenuClick:a,onOptionSelect:o,toSwitchOptions:c,selectedOption:s,optionsList:l})]})})}O.propTypes={isDarkTheme:l().bool.isRequired,isOptionsOpen:l().bool.isRequired,onOptionMenuClick:l().func.isRequired,onOptionSelect:l().func.isRequired,toSwitchOptions:l().func.isRequired,selectedOption:l().number.isRequired,optionsList:l().arrayOf(l().string).isRequired};const T=S;function C(e){var t=e.isDarkTheme,r=e.onThemeSwitchClick,n=e.onSearchChange,i=e.searchTerm,a=e.isOptionsOpen,o=e.onOptionMenuClick,s=e.onOptionSelect,l=e.toSwitchOptions,h=e.selectedOption,f=e.optionsList;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{isDarkTheme:t,onThemeSwitchClick:r}),(0,d.jsxs)("main",{className:(0,u.Z)("page-content",{"page-content_theme_dark":t}),children:[(0,d.jsx)(c.Z5,{children:(0,d.jsx)(c.AW,{path:"/",element:(0,d.jsx)(T,{isDarkTheme:t,onSearchChange:n,searchTerm:i,isOptionsOpen:a,onOptionMenuClick:o,onOptionSelect:s,toSwitchOptions:l,selectedOption:h,optionsList:f})})}),(0,d.jsx)(c.j3,{})]})]})}S.propTypes={isDarkTheme:l().bool.isRequired,onSearchChange:l().func.isRequired,searchTerm:l().string.isRequired,isOptionsOpen:l().bool.isRequired,onOptionMenuClick:l().func.isRequired,onOptionSelect:l().func.isRequired,toSwitchOptions:l().func.isRequired,selectedOption:l().number.isRequired,optionsList:l().arrayOf(l().string).isRequired};const R=C;function Z(e){var t=e.isDarkTheme;return(0,d.jsxs)("section",{className:"not-found",children:[(0,d.jsx)("h1",{className:(0,u.Z)("not-found__title",{"not-found__title_theme_dark":t}),children:"404 - Page Not Found"}),(0,d.jsx)("p",{className:(0,u.Z)("not-found__description",{"not-found__description_theme_dark":t}),children:"Sorry, the page you are looking for could not be found."}),(0,d.jsx)(a.rU,{to:"/",className:(0,u.Z)("not-found__link",{"not-found__link_theme_dark":t}),children:"Go back to the main page"})]})}C.propTypes={isDarkTheme:l().bool.isRequired,onThemeSwitchClick:l().func.isRequired,onSearchChange:l().func.isRequired,searchTerm:l().string.isRequired,isOptionsOpen:l().bool.isRequired,onOptionMenuClick:l().func.isRequired,onOptionSelect:l().func.isRequired,toSwitchOptions:l().func.isRequired,selectedOption:l().number.isRequired,optionsList:l().arrayOf(l().string).isRequired};const q=Z;function L(e){var t=e.isDarkTheme;return(0,d.jsx)("div",{className:(0,u.Z)("preloader",{preloader_theme_dark:t})})}Z.propTypes={isDarkTheme:l().bool.isRequired};const D=L;function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,o,c=[],s=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(e){var t,r=e.isDarkTheme,i=e.cards,s=(0,c.UO)().countryCode,l=(0,c.s0)(),h=E((0,n.useState)(null),2),p=h[0],f=h[1],m=E((0,n.useState)(!0),2),g=m[0],y=m[1];(0,n.useEffect)((function(){f(null);var e=i.find((function(e){return e.cca3===s.toUpperCase()}));f(e),y(!1)}),[i,s,y]);var v=(0,n.useCallback)((function(e){return Object.values(e.languages).join(", ")||"the country does not have an official language"}),[]),k=(0,n.useCallback)((function(e){var t=Object.keys(e.currencies).map((function(t){return e.currencies[t].name}));return t.length>0?t.join(", "):"the country does not have an official currency"}),[]),b=(0,n.useCallback)((function(e,t){var n=e.borders,i=[];return n.forEach((function(e){t.forEach((function(t){e===t.cca3&&i.push(t.name.common)}))})),0!==i.length?i.map((function(e,t){return(0,d.jsx)(a.rU,{to:"/".concat(n[t].toLowerCase()),className:(0,u.Z)("detail-page__link-country",{"detail-page__link-country_theme_dark":r}),children:e},(0,_.Z)())})):(0,d.jsx)("p",{className:(0,u.Z)("detail-page__description-info","detail-page__description-info_position_bottom",{"detail-page__description-info_theme_dark":r}),children:"the country has no land borders"})}),[r]),j=(0,n.useCallback)((function(){var e;(null===(e=window.history.state)||void 0===e?void 0:e.idx)>0?l(-1):l("/",{replace:!0})}),[l]);return g?(0,d.jsx)(D,{isDarkTheme:r}):p||g?(0,d.jsxs)("section",{className:"detail-page",children:[(0,d.jsxs)(o.ql,{children:[(0,d.jsx)("meta",{name:"description",content:"".concat(p.name.common," - country information")}),(0,d.jsx)("meta",{name:"keywords",content:"".concat(p.name.common,", information, capital, currency, language, population, guide")}),(0,d.jsx)("title",{children:"Countries Info - ".concat(p.name.common)})]}),(0,d.jsx)("button",{className:(0,u.Z)("detail-page__btn-back",{"detail-page__btn-back_theme_dark":r}),type:"button",onClick:j,children:"Back"}),(0,d.jsxs)("article",{className:"detail-page__wrapper",children:[(0,d.jsx)("img",{className:(0,u.Z)("detail-page__flag",{"detail-page__flag_theme_dark":r}),src:p.flags.svg,alt:p.flags.alt||"The flag of ".concat(p.name.common)}),(0,d.jsxs)("div",{className:"detail-page__description-wrapper",children:[(0,d.jsx)("h1",{className:(0,u.Z)("detail-page__country-name",{"detail-page__country-name_theme_dark":r}),children:p.name.common}),(0,d.jsxs)("div",{className:"detail-page__list-wrapper",children:[(0,d.jsxs)("ul",{className:"detail-page__description-list detail-page__description-list_position_left",children:[(0,d.jsxs)("li",{className:(0,u.Z)("detail-page__description-info",{"detail-page__description-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("detail-page__description-info-accent",{"detail-page__description-info-accent_theme_dark":r}),children:"Native Name:"})," ",(null===(t=Object.values(p.name.nativeName)[0])||void 0===t?void 0:t.common)||p.name.common]}),(0,d.jsxs)("li",{className:(0,u.Z)("detail-page__description-info",{"detail-page__description-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("detail-page__description-info-accent",{"detail-page__description-info-accent_theme_dark":r}),children:"Population:"})," ",(new Intl.NumberFormat).format(p.population)]}),(0,d.jsxs)("li",{className:(0,u.Z)("detail-page__description-info",{"detail-page__description-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("detail-page__description-info-accent",{"detail-page__description-info-accent_theme_dark":r}),children:"Region:"})," ",p.region]}),(0,d.jsxs)("li",{className:(0,u.Z)("detail-page__description-info",{"detail-page__description-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("detail-page__description-info-accent",{"detail-page__description-info-accent_theme_dark":r}),children:"Sub Region:"})," ",p.subregion||"the country does not have a subregion"]}),(0,d.jsxs)("li",{className:(0,u.Z)("detail-page__description-info",{"detail-page__description-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("detail-page__description-info-accent",{"detail-page__description-info-accent_theme_dark":r}),children:"Capital:"})," ",p.capital.join(", ")||"the country has no capital"]})]}),(0,d.jsxs)("ul",{className:"detail-page__description-list detail-page__description-list_position_bottom",children:[(0,d.jsxs)("li",{className:(0,u.Z)("detail-page__description-info",{"detail-page__description-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("detail-page__description-info-accent",{"detail-page__description-info-accent_theme_dark":r}),children:"Top Level Domain:"})," ",p.tld.join(", ")||"the country has no top level domain"]}),(0,d.jsxs)("li",{className:(0,u.Z)("detail-page__description-info",{"detail-page__description-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("detail-page__description-info-accent",{"detail-page__description-info-accent_theme_dark":r}),children:"Currencies:"})," ",k(p)]}),(0,d.jsxs)("li",{className:(0,u.Z)("detail-page__description-info",{"detail-page__description-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("detail-page__description-info-accent",{"detail-page__description-info-accent_theme_dark":r}),children:"Languages:"})," ",v(p)]})]})]}),p.borders&&(0,d.jsxs)("div",{className:"detail-page__border-wrapper",children:[(0,d.jsx)("p",{className:(0,u.Z)("detail-page__border-info",{"detail-page__border-info_theme_dark":r}),children:"Border Countries:"}),(0,d.jsx)("div",{className:"detail-page__border-link-wrapper",children:b(p,i)})]})]})]})]}):(0,d.jsx)(q,{isDarkTheme:r})}L.propTypes={isDarkTheme:l().bool.isRequired};const I=P;function M(e){var t=e.card,r=e.isDarkTheme;return(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("img",{className:(0,u.Z)("card__country-flag",{"card__country-flag_theme_dark":r}),src:t.flags.svg,alt:t.flags.alt||"The flag of ".concat(t.name.common)}),(0,d.jsxs)("div",{className:(0,u.Z)("card__description-wrapper",{"card__description-wrapper_theme_dark":r}),children:[(0,d.jsx)("h2",{className:(0,u.Z)("card__country-name",{"card__country-name_theme_dark":r}),children:t.name.common}),(0,d.jsxs)("ul",{className:"card__country-description-list",children:[(0,d.jsxs)("li",{className:(0,u.Z)("card__country-info",{"card__country-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("card__country-info-accent",{"card__country-info-accent_theme_dark":r}),children:"Population:"})," ",(new Intl.NumberFormat).format(t.population)]}),(0,d.jsxs)("li",{className:(0,u.Z)("card__country-info",{"card__country-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("card__country-info-accent",{"card__country-info-accent_theme_dark":r}),children:"Region:"})," ",t.region]}),(0,d.jsxs)("li",{className:(0,u.Z)("card__country-info",{"card__country-info_theme_dark":r}),children:[(0,d.jsx)("span",{className:(0,u.Z)("card__country-info-accent",{"card__country-info-accent_theme_dark":r}),children:"Capital:"})," ",t.capital.join(", ")||"there is no capital"]})]})]})]})}P.propTypes={cards:l().arrayOf(l().shape({})).isRequired,isDarkTheme:l().bool.isRequired};const U=M;function F(e){var t=e.isDarkTheme,r=e.cards,n=e.searchResult;return(0,d.jsx)("section",{className:"cards","aria-label":"Section with country cards",children:n&&0===n.length?(0,d.jsx)("p",{className:(0,u.Z)("cards__not-found",{"cards__not-found_theme_dark":t}),children:"The search yielded no results. Please change the search query."}):(0,d.jsx)("ul",{className:"cards__wrapper",children:n?n.map((function(e){return(0,d.jsx)("li",{className:(0,u.Z)("cards__item",{cards__item_theme_dark:t}),children:(0,d.jsx)(a.rU,{to:e.cca3.toLowerCase(),className:"cards__item-link",children:(0,d.jsx)(U,{card:e,isDarkTheme:t})})},(0,_.Z)())})):r.map((function(e){return(0,d.jsx)("li",{className:(0,u.Z)("cards__item",{cards__item_theme_dark:t}),children:(0,d.jsx)(a.rU,{to:e.cca3.toLowerCase(),className:"cards__item-link",children:(0,d.jsx)(U,{card:e,isDarkTheme:t})})},(0,_.Z)())}))})})}M.propTypes={card:l().shape({name:l().shape({common:l().string.isRequired}).isRequired,flags:l().shape({svg:l().string.isRequired,alt:l().string}).isRequired,population:l().number.isRequired,region:l().string.isRequired,capital:l().arrayOf(l().string).isRequired}).isRequired,isDarkTheme:l().bool.isRequired};const G=F;F.propTypes={isDarkTheme:l().bool.isRequired,cards:l().arrayOf(l().shape({})).isRequired,searchResult:l().arrayOf(l().shape({}))},F.defaultProps={searchResult:null};var W="https://restcountries.com/v3.1",B="?fields=name,cca3,capital,tld,subregion,region,population,borders,currencies,languages,flags";function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Y(){Y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,i){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),c=new O(i||[]);return n(o,"_invoke",{value:b(e,r,c)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function h(){}function p(){}function f(){}var m={};s(m,a,(function(){return this}));var _=Object.getPrototypeOf,g=_&&_(_(N([])));g&&g!==t&&r.call(g,a)&&(m=g);var y=f.prototype=h.prototype=Object.create(m);function v(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function i(n,a,o,c){var s=u(e[n],e,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==K(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,o,c)}),(function(e){i("throw",e,o,c)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return i("throw",e,o,c)}))}c(s.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){i(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function b(e,t,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return S()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=j(o,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=u(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=f,n(y,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:p,configurable:!0}),p.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(k.prototype),s(k.prototype,o,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new k(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(y),s(y,c,"Generator"),s(y,a,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;w(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function $(e,t,r,n,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,i)}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,o,c=[],s=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const z=function(){var e=H((0,n.useState)(!1),2),t=e[0],r=e[1],i=H((0,n.useState)(null),2),a=i[0],s=i[1],l=H((0,n.useState)(""),2),u=l[0],h=l[1],p=H((0,n.useState)(!1),2),f=p[0],m=p[1],_=H((0,n.useState)(0),2),v=_[0],k=_[1],b=H((0,n.useState)(null),2),j=b[0],x=b[1],w=H((0,n.useState)(!0),2),O=w[0],N=w[1],S=function(){var e,t=(e=Y().mark((function e(){var t;return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(W,"/all").concat(B)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error: ".concat(e.status," ").concat(e.statusText)))}));case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.prev=10,N(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})),function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){$(a,n,i,o,c,"next",e)}function c(e){$(a,n,i,o,c,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),T=(0,n.useCallback)((function(){var e=JSON.parse(localStorage.getItem("isDarkTheme"));e||(e=t,localStorage.setItem("isDarkTheme",t)),r(e)}),[t]),C=(0,n.useCallback)((function(e){if(e)if(!v&&u){var t=e.filter((function(e){return e.name.common.toLowerCase().includes(u.toLowerCase())}));x(t)}else if(v&&u){var r=e.filter((function(e){return e.region===g[v]})).filter((function(e){return e.name.common.toLowerCase().includes(u.toLowerCase())}));x(r)}else if(v&&!u){var n=e.filter((function(e){return e.region===g[v]}));x(n)}else x(null)}),[v,u]),Z=(0,n.useCallback)((function(e){h(e)}),[]),q=(0,n.useCallback)((function(){r(!t),localStorage.setItem("isDarkTheme",!t)}),[t]),L=(0,n.useCallback)((function(e){e.key===y?m(!1):m(!f)}),[f]),E=(0,n.useCallback)((function(e){k(e)}),[]),A=(0,n.useCallback)((function(e){k(e),m(!1)}),[]);return(0,n.useEffect)((function(){S()}),[]),(0,n.useEffect)((function(){C(a)}),[a,C]),(0,n.useEffect)((function(){T()}),[T]),O?(0,d.jsx)(D,{isDarkTheme:t}):a&&(0,d.jsxs)("div",{className:"app__content",children:[(0,d.jsxs)(o.ql,{children:[(0,d.jsx)("meta",{name:"description",content:"Countries Info App"}),(0,d.jsx)("meta",{name:"keywords",content:"countries, information, capital, currency, language, population, guide"}),(0,d.jsx)("title",{children:"Countries Info"})]}),(0,d.jsx)(c.Z5,{children:(0,d.jsxs)(c.AW,{path:"/*",element:(0,d.jsx)(R,{isDarkTheme:t,onThemeSwitchClick:q,onSearchChange:Z,searchTerm:u,isOptionsOpen:f,onOptionMenuClick:L,onOptionSelect:A,toSwitchOptions:E,selectedOption:v,optionsList:g}),children:[(0,d.jsx)(c.AW,{index:!0,element:(0,d.jsx)(G,{isDarkTheme:t,cards:a,searchResult:j})}),(0,d.jsx)(c.AW,{path:":countryCode",element:(0,d.jsx)(I,{isDarkTheme:t,cards:a})})]})})]})};i.createRoot(document.getElementById("root")).render((0,d.jsx)(n.StrictMode,{children:(0,d.jsx)(o.B6,{children:(0,d.jsx)(a.UT,{children:(0,d.jsx)(z,{})})})}))}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=(t,r,n,i)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],c=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(c=!1,i<o&&(o=i));if(c){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);a.r(i);var o={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,a.d(i,o),i},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[o,c,s]=r,l=0;if(o.some((t=>0!==e[t]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(s)var u=s(a)}for(t&&t(r);l<o.length;l++)i=o[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=a.O(void 0,[763],(()=>a(190)));o=a.O(o)})();