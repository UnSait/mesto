(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{mc:()=>te,E_:()=>oe,MK:()=>re,yx:()=>ne});var n=function(){function e(t,n,r,o,i,a,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardTemplate=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._ownerId=t.owner._id,this._cardId=t._id,this._handleCardClick=r,this._handleCardDelete=o,this._userInfo=i,this._addLike=a,this._dislike=s}var n,r;return n=e,(r=[{key:"_addListener",value:function(){var e=this;this._likeButton.addEventListener("click",(function(t){return e._like(t)})),this._deleteButton.addEventListener("click",(function(){e._handleCardDelete()})),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"removeCard",value:function(){this._newCard.remove()}},{key:"_removeDeleteButton",value:function(){var e=this;this._userInfo.then((function(t){t._id!==e._ownerId&&e._deleteButton.remove()}))}},{key:"_renderLikesInfo",value:function(e){var t=this;this._likes=e,this._likeCountElement.textContent=this._likes.length,this._userInfo.then((function(e){t._likes.forEach((function(n){n._id===e._id&&t._likeButton.classList.add("elements__element-button_active")}))}))}},{key:"_like",value:function(e){var t=this;e.target.classList.contains("elements__element-button_active")?this._dislike(this._cardId).then((function(n){t._likeCountElement.textContent=n.likes.length,e.target.classList.remove("elements__element-button_active")})).catch((function(e){return console.log("Не удалось выполнить:",e)})):this._addLike(this._cardId).then((function(n){t._likeCountElement.textContent=n.likes.length,e.target.classList.add("elements__element-button_active")})).catch((function(e){return console.log("Не удалось выполнить:",e)}))}},{key:"createCard",value:function(){return this._newCard=this._cardTemplate.querySelector(".elements__element-group").cloneNode(!0),this._cardImage=this._newCard.querySelector(".elements__element-photo"),this._deleteButton=this._newCard.querySelector(".elements__element-trash"),this._likeButton=this._newCard.querySelector(".elements__element-button"),this._likeCountElement=this._newCard.querySelector(".elements__element-like-count"),this._cardImage.alt=this._name,this._cardImage.src=this._link,this._newCard.querySelector(".elements__element-name").textContent=this._name,this._addListener(this._newCard),this._renderLikesInfo(this._likes),this._removeDeleteButton(),this._newCard}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=t}var t,n;return t=e,(n=[{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleClickClose=this._handleClickClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this._handleClickClose)}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("mousedown",this._handleClickClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){var t=e.target.classList.contains("popup__exite"),n=e.target.classList.contains("popup_active");(t||n)&&this.close()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(){return c(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".popup__place-photo"),r=this._popup.querySelector(".popup__place-name");n.src=e,n.alt=t,r.textContent=t,l(d(a.prototype),"open",this).call(this)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function C(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSumbit=t,n._submitForm=n._submitForm.bind(w(n)),n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__sumbit"),n._inputsForm=function(e){if(Array.isArray(e))return m(e)}(r=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputsForm.forEach((function(t){e[t.name]=t.value})),e}},{key:"changeHandler",value:function(e){this._handleSumbit=e}},{key:"_submitForm",value:function(e){e.preventDefault(),this._handleSumbit(this._getInputValues())}},{key:"setEventListeners",value:function(){b(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitForm)}},{key:"close",value:function(){b(S(a.prototype),"close",this).call(this),this._form.reset(),this._form.removeEventListener("submit",this._submitForm)}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.nameSelector,r=t.infoSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(n),this._infoSelector=document.querySelector(r),this._avatarSelector=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._nameSelector.textContent,userInfo:this._infoSelector.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameSelector.textContent=t,this._infoSelector.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._avatarSelector.src=t}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"getAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.textContent="",t.classList.remove(this._settings.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),R=document.querySelector(".popup-profile"),B=document.querySelector(".profile__edit-button"),T=R.querySelector(".popup__input_type_name"),U=R.querySelector(".popup__input_type_stasus"),A=R.querySelector(".popup__form"),x=document.querySelector(".popup-addCard"),D=document.querySelector(".profile__add-button"),V=x.querySelector(".popup__form-addCard"),F=(document.querySelector(".profile__avatar"),document.querySelector(".popup__form-avatar")),N=document.querySelector(".profile__avatar-btn"),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__sumbit",inactiveButtonClass:"popup__sumbit_inactive",inputErrorClass:"popup__input-error",errorClass:"popup__input-text-error"},J=new q(H,A),M=new q(H,V),z=new q(H,F),K=new _(".popup_full-Screen"),$=new E(".popup-profile",ne),G=new E(".popup-delete"),Q=new E(".popup-avatar",oe),W=new E(".popup-addCard",re),X=new O({nameSelector:".profile__name",infoSelector:".profile__status",avatarSelector:".profile__avatar"}),Y=new o(te,".elements__element"),Z=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"15f04902-1b2a-4e7f-8af1-0eff204991b7","Content-Type":"application/json"}}),ee=Z.getProfile();function te(e){var t=new n(e,"#template",(function(){K.open(e.link,e.name)}),(function(){G.open(),G.changeHandler((function(){G.renderLoading("Удаление..."),Z.deleteCard(e._id).then((function(){G.close(),t.removeCard()})).catch((function(e){return console.log("Не удалось загрузить:",e)})).finally((function(){G.renderLoading("Да")}))}))}),ee,ie,ae);return t.createCard()}function ne(e){$.renderLoading("Сохранение..."),Z.editProfile(e["input-name"],e["input-status"]).then((function(e){X.setUserInfo(e)})).then((function(){$.close()})).catch((function(e){return console.log("Не удалось загрузить:",e)})).finally((function(){$.renderLoading("Сохранить")}))}function re(e){W.renderLoading("Cохранение..."),Z.addCard(e["input-nameCard"],e["input-cardPlace"]).then((function(e){Y.addItem(te(e))})).then((function(){W.close()})).catch((function(e){return console.log("Не удалось загрузить:",e)})).finally((function(){W.renderLoading("Создать")}))}function oe(e){Q.renderLoading("Cохранение..."),Z.getAvatar(e["input-linkAvatar"]).then((function(e){X.setUserAvatar(e)})).then((function(){Q.close()})).catch((function(e){return console.log("Не удалось загрузить:",e)})).finally((function(){Q.renderLoading("Сохранить")}))}function ie(e){return Z.addLikeCard(e)}function ae(e){return Z.deleteLikeCard(e)}Promise.all([Z.getProfile(),Z.getInitialCards()]).then((function(e){X.setUserInfo(e[0]),X.setUserAvatar(e[0]),Y.rendererItems(e[1])})).catch((function(e){return console.log("Не удалось загрузить:",e)})),B.addEventListener("click",(function(){var e=X.getUserInfo();T.value=e.userName,U.value=e.userInfo,J.resetValidation(),$.open()})),D.addEventListener("click",(function(){M.resetValidation(),W.open()})),N.addEventListener("click",(function(){z.resetValidation(),Q.open()})),J.enableValidation(),M.enableValidation(),z.enableValidation()})();