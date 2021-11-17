!function(){"use strict";var e={822:function(e,t,s){e.exports=s.p+"images/ardea-herodias.380c0856dc87695a5e12.jpg"},334:function(e,t,s){e.exports=s.p+"images/biriya-forest.a430dae60a738641549d.jpg"},599:function(e,t,s){e.exports=s.p+"images/havana.67d6a31f69d30e1a0b19.jpg"},403:function(e,t,s){e.exports=s.p+"images/pelican.17d1811ac7ae0809dc3d.jpg"},939:function(e,t,s){e.exports=s.p+"images/view-from-manara.ae8257415fdc0b74c962.jpg"},129:function(e,t,s){e.exports=s.p+"images/vinales.413fa545bbc1c950a521.jpg"}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.p="",function(){class e{constructor(e,t){this._settings=e,this._formElement=document.querySelector(`${t}`)}_showErrorMessage(e,t){const{inputErrorClass:s,errorClass:n}=this._settings;this._errorElement=this._formElement.querySelector(`.${e.id}-error`),this._errorElement.textContent=t,this._errorElement.classList.add(s),e.classList.add(n)}_hideErrorMessage(e){const{inputErrorClass:t,errorClass:s}=this._settings;this._errorElement=this._formElement.querySelector(`.${e.id}-error`),this._errorElement.textContent="",this._errorElement.classList.remove(t),e.classList.remove(s)}_checkInputValidity(e){if(e.validity.valid)this._hideErrorMessage(e);else{const t=e.validationMessage;this._showErrorMessage(e,t)}}_inputsList(){const{inputSelector:e}=this._settings;return Array.from(this._formElement.querySelectorAll(e))}_selectButton(){const{submitButtonSelector:e}=this._settings;return this._formElement.querySelector(e)}_toggleButtonState(){const{inactiveButtonClass:e}=this._settings,t=this._selectButton();this._inputsList().some((e=>!e.validity.valid))?(t.classList.add(e),t.setAttribute("disabled",!0)):(t.classList.remove(e),t.removeAttribute("disabled"))}_setEventListeners(){this._inputsList().forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{})),this._setEventListeners()}resetValidation(){const{inactiveButtonClass:e}=this._settings,t=this._selectButton();t.classList.add(e),t.setAttribute("disabled","true"),this._inputsList().forEach((e=>{this._hideErrorMessage(e)}))}}const t=[{name:"Oldies cars in Havana, Cuba.",link:s(599)},{name:"Tobacco field in Viñales valley, Cuba.",link:s(129)},{name:"Pelican in a lake, Sarasota FL, USA.",link:s(403)},{name:"Great blue heron, Sarasota FL, USA.",link:s(822)},{name:"Sight from Manara to southern Lebanon in winter , Israel.",link:s(939)},{name:"Biriya forest, Zefat, Israel",link:s(334)}],n=document.querySelector("#card-template").content,r={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disable",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error-visible"},i=document.querySelector(".profile__name"),o=document.querySelector(".profile__description"),a=document.querySelector(".popup__input_content_name"),c=document.querySelector(".popup__input_content_description"),l=document.querySelector(".popup__image"),u=document.querySelector(".popup__image-description");var p=class{constructor(e){this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._handleClosePopupwWithOverlay=this._handleClosePopupwWithOverlay.bind(this)}_handleEscClose(e){"Escape"===e.key&&this.close()}_handleClosePopupwWithOverlay(e){e.target.classList.contains("popup_open")&&this.close()}setEventListeners(){this._popup.querySelector(".popup__close-button").addEventListener("click",(()=>{this.close()}))}open(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleClosePopupwWithOverlay)}close(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleClosePopupwWithOverlay)}},_=class extends p{constructor(e,t){super(e),this._submitHandler=t,this._form=this._popup.querySelector(".popup__form")}getInputsValues(){const e=Array.from(this._form.querySelectorAll(".popup__input")),t={};return e.forEach((e=>{t[e.name]=e.value})),t}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._submitHandler()}))}close(){super.close(),this._form.reset()}};const d=new class extends p{open(e){super.open(),l.src=e.link,l.alt=e.name,u.textContent=e.name}}(".popup_type_image");d.setEventListeners();const h=e=>new class{constructor(e,t,s){this._template=t,this._name=e.name,this._link=e.link,this._handleCardClick=s}_setEventListeners(){const e=this._card.querySelector(".cards__like-button");e.addEventListener("click",(()=>{e.classList.toggle("cards__like-button_active")})),this._card.querySelector(".cards__delete-button").addEventListener("click",(()=>{this._card.remove(),this._card=null}));const t={name:this._name,link:this._link};this._card.querySelector(".cards__image").addEventListener("click",(()=>{this._handleCardClick(t)}))}createCard(){const e=this._template.querySelector(".cards__card").cloneNode(!0),t=e.querySelector(".cards__image");return t.setAttribute("src",this._link),t.setAttribute("alt",this._name),e.querySelector(".cards__header").textContent=this._name,this._card=e,this._setEventListeners(),this._card}}(e,n,(()=>{d.open(e)})).createCard(),m=new e(r,".popup__form_profile"),v=new e(r,".popup__form_add-card");m.enableValidation(),v.enableValidation();const E=new class{constructor({items:e,renderer:t},s){this._items=e,this._renderer=t,this._container=document.querySelector(s)}renderer(){this._items.forEach((e=>{const t=this._renderer(e);this.addItem(t)}))}addItem(e){this._container.prepend(e)}}({items:t,renderer:h},".cards__container");E.renderer();const f=new class{constructor(e,t){this._name=e,this._job=t}getUserInfo(){return{name:this._name.textContent,about:this._job.textContent}}setUserInfo(e){this._name.textContent=e.name,this._job.textContent=e.about}}(i,o),b=new _(".popup_type_edit-profile",(()=>{f.setUserInfo(b.getInputsValues()),b.close()}));b.setEventListeners(),document.querySelector(".profile__edit-button").addEventListener("click",(()=>{b.open();const e=f.getUserInfo(i,o);a.value=e.name,c.value=e.about,m.resetValidation()}));const y=new _(".popup_type_add-card",(()=>{E.addItem(h(y.getInputsValues())),y.close()}));y.setEventListeners(),document.querySelector(".profile__add-button").addEventListener("click",(()=>{y.open(),v.resetValidation()}))}()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDa0UsRUFBbUIsSUFBSUMsRUpBVyw0QklBNkIsS0FDbkVULEVBQVNNLFlBQVlFLEVBQWlCM0MsbUJBQ3RDMkMsRUFBaUJ0RCxXQUVuQnNELEVBQWlCbkQsb0JBRU01RCxTQUFTQyxjQUFjLHlCQUMvQmlDLGlCQUFpQixTQUFTLEtBQ3ZDNkUsRUFBaUJsRCxPQUNqQixNQUFNb0QsRUFBV1YsRUFBU0ksWUFBWS9ELEVBQWFDLEdBQ25EQyxFQUFVeUIsTUFBUTBDLEVBQVMxRSxLQUMzQlEsRUFBaUJ3QixNQUFRMEMsRUFBU0wsTUFDbENqQixFQUFrQnRELHFCQUlwQixNQUFNNkUsRUFBbUIsSUFBSUYsRUpkUSx3QkljNkIsS0FDaEVuQixFQUFNTyxRQUFRdkIsRUFBV3FDLEVBQWlCOUMsb0JBQzFDOEMsRUFBaUJ6RCxXQUVuQnlELEVBQWlCdEQsb0JBRU81RCxTQUFTQyxjQUFjLHdCQUMvQmlDLGlCQUFpQixTQUFTLEtBQ3hDZ0YsRUFBaUJyRCxPQUNqQitCLEVBQXFCdkQscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80LW1haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC1tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQtbWFpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC1tYWluLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80LW1haW4vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQtbWFpbi8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQtbWFpbi8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC1tYWluLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQtbWFpbi8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQtbWFpbi8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC1tYWluLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLy8gU3ByaW50IDcgLSBwcm9qZWN0IExpdmUgQ29kaW5nLCBMaXphIC0gdGltZSBvbiB2aWRlbzogMDowMCAtIDQwOjAwIG1pbnMuXG5cbmNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtmb3JtRWxlbWVudH1gKTtcbiAgfVxuXG4gIF9zaG93RXJyb3JNZXNzYWdlKGlucHV0LCBlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IGlucHV0RXJyb3JDbGFzcywgZXJyb3JDbGFzcyB9ID0gdGhpcy5fc2V0dGluZ3M7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKGlucHV0RXJyb3JDbGFzcyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChlcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oaWRlRXJyb3JNZXNzYWdlKGlucHV0KSB7XG4gICAgY29uc3QgeyBpbnB1dEVycm9yQ2xhc3MsIGVycm9yQ2xhc3MgfSA9IHRoaXMuX3NldHRpbmdzO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaW5wdXRFcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKGVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dCkge1xuICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGlucHV0LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgdGhpcy5fc2hvd0Vycm9yTWVzc2FnZShpbnB1dCwgZXJyb3JNZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUVycm9yTWVzc2FnZShpbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgX2lucHV0c0xpc3QoKSB7XG4gICAgY29uc3QgeyBpbnB1dFNlbGVjdG9yIH0gPSB0aGlzLl9zZXR0aW5ncztcbiAgICBjb25zdCBpbnB1dHNMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW5wdXRTZWxlY3RvcilcbiAgICApO1xuICAgIHJldHVybiBpbnB1dHNMaXN0O1xuICB9XG5cbiAgX3NlbGVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCB7IHN1Ym1pdEJ1dHRvblNlbGVjdG9yIH0gPSB0aGlzLl9zZXR0aW5ncztcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgIGNvbnN0IHsgaW5hY3RpdmVCdXR0b25DbGFzcyB9ID0gdGhpcy5fc2V0dGluZ3M7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5fc2VsZWN0QnV0dG9uKCk7XG4gICAgY29uc3QgaW5wdXRMaXN0ID0gdGhpcy5faW5wdXRzTGlzdCgpO1xuICAgIGNvbnN0IGlzRm9ybUludmFsaWQgPSBpbnB1dExpc3Quc29tZShcbiAgICAgIChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWRcbiAgICApO1xuICAgIGlmICghaXNGb3JtSW52YWxpZCkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBpbnB1dHNMaXN0ID0gdGhpcy5faW5wdXRzTGlzdCgpO1xuICAgIGlucHV0c0xpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7fSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCB7IGluYWN0aXZlQnV0dG9uQ2xhc3MgfSA9IHRoaXMuX3NldHRpbmdzO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuX3NlbGVjdEJ1dHRvbigpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgY29uc3QgaW5wdXRzTGlzdCA9IHRoaXMuX2lucHV0c0xpc3QoKTtcbiAgICBpbnB1dHNMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUVycm9yTWVzc2FnZShpbnB1dEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IEZvcm1WYWxpZGF0b3IgfTtcbiIsImltcG9ydCBoYXZhbmEgZnJvbSAnLi4vaW1hZ2VzL2hhdmFuYS5qcGcnO1xuaW1wb3J0IHZpbmFsZXMgZnJvbSAnLi4vaW1hZ2VzL3ZpbmFsZXMuanBnJztcbmltcG9ydCBwZWxpY2FuIGZyb20gJy4uL2ltYWdlcy9wZWxpY2FuLmpwZydcbmltcG9ydCBhcmRlYUhlcm9kaWFzIGZyb20gJy4uL2ltYWdlcy9hcmRlYS1oZXJvZGlhcy5qcGcnO1xuaW1wb3J0IHZpZXdGcm9tTWFuYXJhIGZyb20gJy4uL2ltYWdlcy92aWV3LWZyb20tbWFuYXJhLmpwZyc7XG5pbXBvcnQgYmlyaXlhRm9yZXN0IGZyb20gJy4uL2ltYWdlcy9iaXJpeWEtZm9yZXN0LmpwZyc7XG5cbi8vIEluaXRpYWxpemF0aW9uIGNhcmRzIG9uIGxvYWRpbmcgcGFnZS5cbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIk9sZGllcyBjYXJzIGluIEhhdmFuYSwgQ3ViYS5cIixcbiAgICBsaW5rOiBoYXZhbmFcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVG9iYWNjbyBmaWVsZCBpbiBWacOxYWxlcyB2YWxsZXksIEN1YmEuXCIsXG4gICAgbGluazogdmluYWxlc1xuICB9LFxuICB7XG4gICAgbmFtZTogXCJQZWxpY2FuIGluIGEgbGFrZSwgU2FyYXNvdGEgRkwsIFVTQS5cIixcbiAgICBsaW5rOiBwZWxpY2FuXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdyZWF0IGJsdWUgaGVyb24sIFNhcmFzb3RhIEZMLCBVU0EuXCIsXG4gICAgbGluazogYXJkZWFIZXJvZGlhc1xuICB9LFxuICB7XG4gICAgbmFtZTogXCJTaWdodCBmcm9tIE1hbmFyYSB0byBzb3V0aGVybiBMZWJhbm9uIGluIHdpbnRlciAsIElzcmFlbC5cIixcbiAgICBsaW5rOiB2aWV3RnJvbU1hbmFyYVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCaXJpeWEgZm9yZXN0LCBaZWZhdCwgSXNyYWVsXCIsXG4gICAgbGluazogYmlyaXlhRm9yZXN0XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIikuY29udGVudDtcbmV4cG9ydCBjb25zdCBjYXJkc0NvbnRhaW5lciA9IFwiLmNhcmRzX19jb250YWluZXJcIjtcblxuLy8gRm9ybSBWYWxpZGF0aW9uIGNsYXNzZXMuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19zdWJtaXQtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX3N1Ym1pdC1idXR0b25fZGlzYWJsZVwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfZXJyb3ItdmlzaWJsZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVGb3JtUG9wdXAgPSBcIi5wb3B1cF9fZm9ybV9wcm9maWxlXCI7XG5leHBvcnQgY29uc3QgcHJvZmlsZUZvcm1Qb3B1cFNlbGVjdG9yID0gXCIucG9wdXBfdHlwZV9lZGl0LXByb2ZpbGVcIjtcbmV4cG9ydCBjb25zdCBjYXJkRm9ybVBvcHVwID0gXCIucG9wdXBfX2Zvcm1fYWRkLWNhcmRcIjtcbmV4cG9ydCBjb25zdCBjYXJkRm9ybVBvcHVwU2VsZWN0b3IgPSBcIi5wb3B1cF90eXBlX2FkZC1jYXJkXCI7XG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5leHBvcnQgY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIlxuKTtcbmV4cG9ydCBjb25zdCBwb3B1cE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9jb250ZW50X25hbWVcIik7XG5leHBvcnQgY29uc3QgcG9wdXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLnBvcHVwX19pbnB1dF9jb250ZW50X2Rlc2NyaXB0aW9uXCJcbik7XG5cbi8vIEltYWdlIHBvcHVwLlxuZXhwb3J0IGNvbnN0IHBvcHVwVHlwZUltYWdlU2VsZWN0b3IgPSBcIi5wb3B1cF90eXBlX2ltYWdlXCI7XG4vLyBleHBvcnQgY29uc3QgcG9wdXBUeXBlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfaW1hZ2VcIik7XG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLnBvcHVwX19pbWFnZS1kZXNjcmlwdGlvblwiXG4pO1xuIiwiY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhcmRUZW1wbGF0ZSwgaGFuZGxlQ2FyZENsaWNrKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjYXJkVGVtcGxhdGU7XG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyBMaWtlIGJ1dHRvbnMuXG4gICAgY29uc3QgbGlrZUJ1dHRvbiA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlrZS1idXR0b25cIik7XG4gICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZHNfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSBidXR0b25zLlxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2NhcmQucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9jYXJkID0gbnVsbDtcbiAgICB9KTtcblxuICAgIC8vIFNob3cgaW1hZ2UgYXMgcG9wdXAuXG4gICAgY29uc3QgY2FyZERhdGEgPSB7IG5hbWU6IHRoaXMuX25hbWUsIGxpbms6IHRoaXMuX2xpbmsgfTtcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2ltYWdlXCIpO1xuICAgIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKGNhcmREYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNhcmQoKSB7XG4gICAgY29uc3QgY2FyZCA9IHRoaXMuX3RlbXBsYXRlXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBpbWcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2ltYWdlXCIpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5fbGluayk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCB0aGlzLl9uYW1lKTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19faGVhZGVyXCIpO1xuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG5cbiAgICB0aGlzLl9jYXJkID0gY2FyZDtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9jYXJkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNsb3NlUG9wdXB3V2l0aE92ZXJsYXkgPVxuICAgICAgdGhpcy5faGFuZGxlQ2xvc2VQb3B1cHdXaXRoT3ZlcmxheS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBtZXRob2QgdGhhdCBjbG9zZSBwb3B1cCB3aW5kb3cgYnkgRXNjYXBlIGtleS5cbiAgX2hhbmRsZUVzY0Nsb3NlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGUgbWV0aG9kIHRoYXQgY2xvc2UgcG9wdXAgd2luZG93IGJ5IGNsaWNraW5nIG9uIHRoZSBvdmVybGF5LlxuICBfaGFuZGxlQ2xvc2VQb3B1cHdXaXRoT3ZlcmxheShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlblwiKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1YmxpYyBtZXRob2QgdGhhdCBhZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjbG9zZSBpY29uIG9mIHRoZSBwb3B1cC5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZS1idXR0b25cIik7XG5cbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUHVibGljIG1ldGhvZCB0aGF0IG9wZW4gdGhlIHBvcHVwIHdpbmRvdy5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlblwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9oYW5kbGVDbG9zZVBvcHVwd1dpdGhPdmVybGF5KTtcbiAgfVxuXG4gIC8vIFB1YmxpYyBtZXRob2QgdGhhdCBjbG9zZSB0aGUgcG9wdXAgd2luZG93LlxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICB0aGlzLl9oYW5kbGVDbG9zZVBvcHVwd1dpdGhPdmVybGF5XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xuXG5jbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBzdWJtaXRIYW5kbGVyKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7IC8vIHRoaXMuX3BvcHVwXG4gICAgdGhpcy5fc3VibWl0SGFuZGxlciA9IHN1Ym1pdEhhbmRsZXI7XG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG4gIH1cblxuICAvLyBQcml2YXRlIG1ldGhvZCB3aGljaCBjb2xsZWN0IGRhdGEgZnJvbSBhbGwgdGhlIGlucHV0IGZpZWxkcy5cbiAgZ2V0SW5wdXRzVmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKSk7XG4gICAgY29uc3QgaW5wdXRzVmFsdWVzID0ge307XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dHNWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXRzVmFsdWVzO1xuICB9XG5cbiAgLy8gTW9kaWZpZXMgdGhlIHBhcmVudCBtZXRob2QgYW5kIGFkZCBldmVudCBsaXN0ZW5lciB0byBjbG9zZSBpY29uIGFuZCBzdWJtaXQgYnV0dG9uLlxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1vZGlmaWVzIHRoZSBwYXJlbnQgbWV0aG9kIGluIG9yZGVyIHRvIHJlc2V0IHRoZSBmb3JtIG9uY2UgdGhlIHBvcHVwIGlzIGNsb3NlZC5cbiAgY2xvc2UoKSB7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoRm9ybTtcbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCB7XG4gIGNhcmRUZW1wbGF0ZSxcbiAgcHJvZmlsZUZvcm1Qb3B1cCxcbiAgY29uZmlnLFxuICBjYXJkRm9ybVBvcHVwLFxuICBjYXJkc0NvbnRhaW5lcixcbiAgaW5pdGlhbENhcmRzLFxuICBwcm9maWxlRm9ybVBvcHVwU2VsZWN0b3IsXG4gIGNhcmRGb3JtUG9wdXBTZWxlY3RvcixcbiAgcHJvZmlsZU5hbWUsXG4gIHByb2ZpbGVEZXNjcmlwdGlvbixcbiAgcG9wdXBUeXBlSW1hZ2VTZWxlY3RvcixcbiAgcG9wdXBOYW1lLFxuICBwb3B1cERlc2NyaXB0aW9uLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuXG5cblxuLy8gSW1hZ2UgcG9wdXAuXG5jb25zdCBpbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKHBvcHVwVHlwZUltYWdlU2VsZWN0b3IpO1xuXG5pbWFnZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IGFkZE5ld0NhcmQgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBjYXJkT2JqID0gbmV3IENhcmQoZGF0YSwgY2FyZFRlbXBsYXRlLCAoKSA9PiB7XG4gICAgaW1hZ2VQb3B1cC5vcGVuKGRhdGEpO1xuICB9KTtcbiAgcmV0dXJuIGNhcmRPYmouY3JlYXRlQ2FyZCgpO1xufTtcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwcm9maWxlRm9ybVBvcHVwKTtcbmNvbnN0IGFkZENhcmRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBjYXJkRm9ybVBvcHVwKTtcblxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYWRkQ2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBpdGVtcyA9IGluaXRpYWxDYXJkcztcbmNvbnN0IGNhcmRzID0gbmV3IFNlY3Rpb24oeyBpdGVtcywgcmVuZGVyZXI6IGFkZE5ld0NhcmQgfSwgY2FyZHNDb250YWluZXIpO1xuY2FyZHMucmVuZGVyZXIoKTtcblxuLy8gUG9wdXAgZm9yIHByb2ZpbGUgZGV0YWlscyBmb3JtLlxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8ocHJvZmlsZU5hbWUsIHByb2ZpbGVEZXNjcmlwdGlvbik7XG5jb25zdCBwb3B1cFdpdGhQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0ocHJvZmlsZUZvcm1Qb3B1cFNlbGVjdG9yLCAoKSA9PiB7XG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHBvcHVwV2l0aFByb2ZpbGUuZ2V0SW5wdXRzVmFsdWVzKCkpO1xuICBwb3B1cFdpdGhQcm9maWxlLmNsb3NlKCk7XG59KTtcbnBvcHVwV2l0aFByb2ZpbGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3Qgb3BlbkVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xub3BlbkVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBXaXRoUHJvZmlsZS5vcGVuKCk7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8ocHJvZmlsZU5hbWUsIHByb2ZpbGVEZXNjcmlwdGlvbik7XG4gIHBvcHVwTmFtZS52YWx1ZSA9IHVzZXJEYXRhLm5hbWU7XG4gIHBvcHVwRGVzY3JpcHRpb24udmFsdWUgPSB1c2VyRGF0YS5hYm91dDtcbiAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG59KTtcblxuLy8gUG9wdXAgZm9yIGFkZCBjYXJkIGZvcm0uXG5jb25zdCBwb3B1cFdpdGhBZGRDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oY2FyZEZvcm1Qb3B1cFNlbGVjdG9yLCAoKSA9PiB7XG4gIGNhcmRzLmFkZEl0ZW0oYWRkTmV3Q2FyZChwb3B1cFdpdGhBZGRDYXJkLmdldElucHV0c1ZhbHVlcygpKSk7XG4gIHBvcHVwV2l0aEFkZENhcmQuY2xvc2UoKTtcbn0pO1xucG9wdXBXaXRoQWRkQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCBvcGVuQWRkQ2FyZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5vcGVuQWRkQ2FyZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBXaXRoQWRkQ2FyZC5vcGVuKCk7XG4gIGFkZENhcmRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xufSk7XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgb3BlbihjYXJkRGF0YSkge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICBjb25zdGFudHMucG9wdXBJbWFnZS5zcmMgPSBjYXJkRGF0YS5saW5rO1xuICAgIGNvbnN0YW50cy5wb3B1cEltYWdlLmFsdCA9IGNhcmREYXRhLm5hbWU7XG4gICAgY29uc3RhbnRzLnBvcHVwSW1hZ2VEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNhcmREYXRhLm5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoSW1hZ2U7XG4iLCJjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gIH1cblxuICAvLyBQdWJsaWMgbWV0aG9kIHRoYXQgcmVuZGVycyBhbGwgZWxlbWVudHMgb24gdGhlIHBhZ2UuXG4gIHJlbmRlcmVyKCkge1xuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLl9yZW5kZXJlcihkYXRhKTtcbiAgICAgIHRoaXMuYWRkSXRlbShjYXJkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFB1YmxpYyBtZXRob2QgdGhhdCB0YWtlcyBhIERPTSBlbGVtZW50IGFuZCBhZGRzIGl0IHRvIHRoZSBjb250YWluZXIuXG4gIGFkZEl0ZW0oY2FyZEVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChjYXJkRWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCB7IHByb2ZpbGVOYW1lLCBwcm9maWxlRGVzY3JpcHRpb24gfSBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZVNlbGVjdG9yO1xuICAgIHRoaXMuX2pvYiA9IGpvYlNlbGVjdG9yO1xuICB9XG5cbiAgLy8gUHVibGljIG1ldGhvZCB3aGljaCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyLlxuICBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4geyBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LCBhYm91dDogdGhpcy5fam9iLnRleHRDb250ZW50IH07XG4gIH1cblxuICAvLyBQdWJsaWMgbWV0aG9kIHdoaWNoIHRha2VzIG5ldyB1c2VyIGRhdGEgYW5kIGFkZHMgaXQgb24gdGhlIHBhZ2UuXG4gIHNldFVzZXJJbmZvKG5ld0NhcmREYXRhKSB7XG4gICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IG5ld0NhcmREYXRhLm5hbWU7XG4gICAgdGhpcy5fam9iLnRleHRDb250ZW50ID0gbmV3Q2FyZERhdGEuYWJvdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm87XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJwIiwiRm9ybVZhbGlkYXRvciIsImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsInRoaXMiLCJfc2V0dGluZ3MiLCJfZm9ybUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfc2hvd0Vycm9yTWVzc2FnZSIsImlucHV0IiwiZXJyb3JNZXNzYWdlIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9lcnJvckVsZW1lbnQiLCJpZCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiX2hpZGVFcnJvck1lc3NhZ2UiLCJyZW1vdmUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0c0xpc3QiLCJpbnB1dFNlbGVjdG9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl9zZWxlY3RCdXR0b24iLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJidXR0b24iLCJzb21lIiwiaW5wdXRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmFibGVWYWxpZGF0aW9uIiwiZXZ0IiwicmVzZXRWYWxpZGF0aW9uIiwiaW5pdGlhbENhcmRzIiwibmFtZSIsImxpbmsiLCJjYXJkVGVtcGxhdGUiLCJjb250ZW50IiwiY29uZmlnIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJwb3B1cE5hbWUiLCJwb3B1cERlc2NyaXB0aW9uIiwicG9wdXBJbWFnZSIsInBvcHVwSW1hZ2VEZXNjcmlwdGlvbiIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiX2hhbmRsZUNsb3NlUG9wdXB3V2l0aE92ZXJsYXkiLCJldmVudCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJzZXRFdmVudExpc3RlbmVycyIsIm9wZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXAiLCJzdWJtaXRIYW5kbGVyIiwic3VwZXIiLCJfc3VibWl0SGFuZGxlciIsIl9mb3JtIiwiZ2V0SW5wdXRzVmFsdWVzIiwiaW5wdXRzIiwiaW5wdXRzVmFsdWVzIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwiaW1hZ2VQb3B1cCIsImNhcmREYXRhIiwiY29uc3RhbnRzIiwiYWRkTmV3Q2FyZCIsImRhdGEiLCJoYW5kbGVDYXJkQ2xpY2siLCJfdGVtcGxhdGUiLCJfbmFtZSIsIl9saW5rIiwiX2hhbmRsZUNhcmRDbGljayIsImxpa2VCdXR0b24iLCJfY2FyZCIsInRvZ2dsZSIsImNyZWF0ZUNhcmQiLCJjYXJkIiwiY2xvbmVOb2RlIiwiaW1nIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJhZGRDYXJkRm9ybVZhbGlkYXRvciIsImNhcmRzIiwiaXRlbXMiLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImFkZEl0ZW0iLCJjYXJkRWxlbWVudCIsInByZXBlbmQiLCJ1c2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX2pvYiIsImdldFVzZXJJbmZvIiwiYWJvdXQiLCJzZXRVc2VySW5mbyIsIm5ld0NhcmREYXRhIiwicG9wdXBXaXRoUHJvZmlsZSIsIlBvcHVwV2l0aEZvcm0iLCJ1c2VyRGF0YSIsInBvcHVwV2l0aEFkZENhcmQiXSwic291cmNlUm9vdCI6IiJ9