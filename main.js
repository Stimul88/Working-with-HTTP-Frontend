/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/AddTicket.js":
/*!*****************************!*\
  !*** ./src/js/AddTicket.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddTicket; }
/* harmony export */ });
class AddTicket {
  constructor() {
    this.ticketBox = document.querySelector('.ticket-box');
    this.ticketFormContainer = document.querySelector('.ticket-form-container');
  }

  init() {
    const btn = this.ticketBox.querySelector('.add-btn');
    const cancel = this.ticketFormContainer.querySelector('.cancel');

    // Open ticket form
    btn.addEventListener('click', this.add)

    // Close ticket form
    cancel.addEventListener('click', this.close)

    // Show description
    this.ticketBox.addEventListener('click', this.showDescription)
  }

  add() {
    const ticketFormContainer = document.querySelector('.ticket-form-container');
    const dellOk = ticketFormContainer.querySelector('.dell-ok');
    const replace = ticketFormContainer.querySelector('.replace');
    const ok = ticketFormContainer.querySelector('.ok');
    ticketFormContainer.classList.remove('hidden');
    replace.classList.add('hidden');
    dellOk.classList.add('hidden');
    ok.classList.remove('hidden');
  }

  showDescription (e) {
    const el = e.target.closest('.task')
    if(el) {
      const text = el.querySelector('.text');
      text.classList.toggle('hidden');
    }
  }

  close (e) {
    e.preventDefault()
    const ticketFormContainer = document.querySelector('.ticket-form-container');
    const replaceFormHeader = document.querySelector('.replace-form-header');
    const ticketFormHeader = document.querySelector('.ticket-form-header');
    const ticketDeleteHeader = ticketFormContainer.querySelector('.ticket-delete-header')
    const shortDescriptionContainer = ticketFormContainer.querySelector('.short-description-container')
    const detailedDescriptionContainer = ticketFormContainer.querySelector('.detailed-description-container')
    const short = ticketFormContainer.querySelector('.short');
    const detailed = ticketFormContainer.querySelector('.detailed');

    short.value = ''
    detailed.value = ''

    ticketFormContainer.classList.add('hidden');
    replaceFormHeader.classList.add('hidden');
    ticketDeleteHeader.classList.add('hidden');
    ticketFormHeader.classList.remove('hidden');
    shortDescriptionContainer.classList.remove('hidden');
    detailedDescriptionContainer.classList.remove('hidden');
  }
}

/***/ }),

/***/ "./src/js/ChangeTicket.js":
/*!********************************!*\
  !*** ./src/js/ChangeTicket.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChangeTicket; }
/* harmony export */ });
/* harmony import */ var _AddTicket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTicket */ "./src/js/AddTicket.js");
/* harmony import */ var _SendTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendTicket */ "./src/js/SendTicket.js");



const addTicket = new _AddTicket__WEBPACK_IMPORTED_MODULE_0__["default"]();
const sendTicket = new _SendTicket__WEBPACK_IMPORTED_MODULE_1__["default"]();

class ChangeTicket {
  constructor() {
    this.ticketBox = document.querySelector('.ticket-box');
  }

  init() {
    this.ticketBox.addEventListener('click', (e) => {
      const status = e.target.closest('.status');
      const dell = e.target.closest('.delete')
      const ticket = e.target.closest('.ticket')
      const pencil = e.target.closest('.pencil')

      if(status) {
        this.changeStatus(status)
        sendTicket.replaceStatus(ticket)
      }
      if(dell) {
        this.dellTicket(dell, ticket)
      }
      if (pencil) {
        this.changeTicket(ticket)
      }
    })
  }

  changeStatus (status) {
    if(status.checked === true) {
      status.checked = true
      return
    }
    status.checked = false
  }

  dellTicket (dell, ticket) {
    const ticketFormContainer = document.querySelector('.ticket-form-container');
    const ticketFormHeader = ticketFormContainer.querySelector('.ticket-form-header');
    const ticketDeleteHeader = ticketFormContainer.querySelector('.ticket-delete-header')
    const shortDescriptionContainer = ticketFormContainer.querySelector('.short-description-container')
    const detailedDescriptionContainer = ticketFormContainer.querySelector('.detailed-description-container')
    const ok = ticketFormContainer.querySelector('.ok');
    const dellOk = ticketFormContainer.querySelector('.dell-ok');
    const replace = ticketFormContainer.querySelector('.replace');

    ticketFormContainer.classList.remove('hidden');
    ticketDeleteHeader.classList.remove('hidden');
    ticketFormHeader.classList.add('hidden');
    shortDescriptionContainer.classList.add('hidden');
    detailedDescriptionContainer.classList.add('hidden');
    replace.classList.add('hidden');

    ok.classList.add('hidden');

    dellOk.classList.remove('hidden');

    dellOk.addEventListener('click', addTicket.close)

    dellOk.addEventListener('click', e => {
      sendTicket.dellOk(ticket)
      ticket.remove()
    })
  }

  changeTicket (ticket) {
    const ticketFormContainer = document.querySelector('.ticket-form-container');
    const short = ticketFormContainer.querySelector('.short');
    const detailed = ticketFormContainer.querySelector('.detailed');
    const replaceFormHeader = ticketFormContainer.querySelector('.replace-form-header');
    const ticketFormHeader = ticketFormContainer.querySelector('.ticket-form-header');
    const replace = ticketFormContainer.querySelector('.replace');
    const ok = ticketFormContainer.querySelector('.ok');
    const dellOk = ticketFormContainer.querySelector('.dell-ok');
    const title = ticket.querySelector('.title');
    const text = ticket.querySelector('.text');

    replaceFormHeader.classList.remove('hidden');
    ticketFormContainer.classList.remove('hidden');
    replace.classList.remove('hidden');
    ticketFormHeader.classList.add('hidden');
    ok.classList.add('hidden');
    dellOk.classList.add('hidden');

    short.value = title.textContent;
    detailed.value = text.textContent;

    replace.addEventListener('click', e => {
      e.preventDefault()
      sendTicket.replaceOk((ticket))
      ticketFormContainer.classList.add('hidden');
    })
  }
}

/***/ }),

/***/ "./src/js/GetAllTickets.js":
/*!*********************************!*\
  !*** ./src/js/GetAllTickets.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GetAllTickets; }
/* harmony export */ });
class GetAllTickets {
  constructor() {
    this.ticketBox = document.querySelector('.ticket-box');
    this.ticketsList = this.ticketBox.querySelector('.tickets-list');
  }

  getTickets (data) {
    console.log(data)
    data.forEach(item => {
      const newLi = `<li class="ticket">
        <label class="custom-checkbox">
          <input type="checkbox" class="status" ${this.getStatus(item.status)}>
            <span></span>
        </label>
        <div class="task">
        <div class="id-number hidden">${item.id}</div>
          <div class="title">${item.name}</div>
          <div class="text hidden">${item.description}</div>
        </div>
        <span class="date">${item.created}</span>
        <div class="pencil">✎</div>
        <div class="delete">X</div>
      </li>`

      this.ticketsList.insertAdjacentHTML("beforeend", newLi);
    })
  }

  getStatus (status) {
    console.log(status)
    if (status === "true") {
      return 'checked'
    } else {
      return ''
    }
  }
}

/***/ }),

/***/ "./src/js/SendTicket.js":
/*!******************************!*\
  !*** ./src/js/SendTicket.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SendTicket; }
/* harmony export */ });
/* harmony import */ var _GetAllTickets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetAllTickets */ "./src/js/GetAllTickets.js");


const getAllTickets = new _GetAllTickets__WEBPACK_IMPORTED_MODULE_0__["default"]();

// const server ='http://localhost:8080/'
const server ='https://working-with-http.onrender.com/'

class SendTicket {
  constructor() {
    this.ticketFormContainer = document.querySelector('.ticket-form-container');
  }

  init() {
    const ok = this.ticketFormContainer.querySelector('.ok');

    ok.addEventListener('click', this.sendOk)
  }


  sendOk (e) {
    e.preventDefault()

    const ticketFormContainer = document.querySelector('.ticket-form-container');
    const short = ticketFormContainer.querySelector('.short');
    const detailed = ticketFormContainer.querySelector('.detailed');

    const inputName = short.value.trim();
    const inputDescription = detailed.value.trim();
    if (inputName === "") return;

    const body = new FormData();

    body.append("id", null);
    body.append("name", inputName);
    body.append("description", inputDescription);
    body.append("status", false);
    body.append("created", null);



    const xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function (e) {

      if (xhr.readyState !== 4) return;
      console.log(xhr.responseText)
    }

    xhr.open('POST', `${server}?method=createTicket`)
    xhr.send(body);

    ticketFormContainer.classList.add('hidden');

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);

          getAllTickets.getTickets(data)
        } catch (e) {
          console.error(e);
        }
        location.reload();
      }
    });
  }


  dellOk (ticket) {
    const idNumber = ticket.querySelector('.id-number');

    const body = new FormData();

    body.append("id", idNumber.textContent);

      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        console.log(xhr.responseText);
      }

      xhr.open('DELETE', `${server}?method=deleteTicket` + '&id=' + idNumber.textContent);

      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.send(body);
  }

  replaceOk (ticket) {
    const ticketFormContainer = document.querySelector('.ticket-form-container');
    const short = ticketFormContainer.querySelector('.short');
    const detailed = ticketFormContainer.querySelector('.detailed');
    const idNumber = ticket.querySelector('.id-number');


    const body = new FormData();

    body.append("id", idNumber.textContent);
    body.append("name", short.value);
    body.append("description", detailed.value);

    console.log(short.value)
    console.log(detailed.value)

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (e) {

      if (xhr.readyState !== 4) return;
      console.log(xhr.responseText)
    }

    xhr.open('PATCH', `${server}?method=replaceTicket` + '&id=' + idNumber.textContent)


    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);

          getAllTickets.getTickets(data)
        } catch (e) {
          console.error(e);
        }
        location.reload();
      }
    });

    xhr.send(body);
  }

  replaceStatus (ticket) {
    const idNumber = ticket.querySelector('.id-number');
    const status = ticket.querySelector('.status')

    const body = new FormData();

    body.append("id", idNumber.textContent);
    body.append("status", status.checked);


    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (e) {

      if (xhr.readyState !== 4) return;
      console.log(xhr.responseText)
    }

    xhr.open('PATCH', `${server}?method=replaceStatus` + '&id=' + idNumber.textContent)
    xhr.send(body);
  }
}



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetAllTickets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetAllTickets */ "./src/js/GetAllTickets.js");
/* harmony import */ var _AddTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTicket */ "./src/js/AddTicket.js");
/* harmony import */ var _SendTicket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SendTicket */ "./src/js/SendTicket.js");
/* harmony import */ var _ChangeTicket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChangeTicket */ "./src/js/ChangeTicket.js");





const getAllTickets = new _GetAllTickets__WEBPACK_IMPORTED_MODULE_0__["default"]();
const addTicket = new _AddTicket__WEBPACK_IMPORTED_MODULE_1__["default"]();
const sendTicket = new _SendTicket__WEBPACK_IMPORTED_MODULE_2__["default"]();
const changeTicket = new _ChangeTicket__WEBPACK_IMPORTED_MODULE_3__["default"]();


// const server ='http://localhost:8080/'
const server ='https://working-with-http.onrender.com/'

document.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${server}?method=allTickets`);



  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);

        getAllTickets.getTickets(data)

      } catch (e) {
        console.error(e);
      }

    }
  });

  xhr.send();

})



sendTicket.init()
addTicket.init()
changeTicket.init()


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");



console.log("it's alive")
}();
/******/ })()
;
//# sourceMappingURL=main.js.map