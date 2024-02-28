import GetAllTickets from './GetAllTickets';

const getAllTickets = new GetAllTickets();

// const server ='http://localhost:8080/'
const server ='https://working-with-http.onrender.com/'

export default class SendTicket {
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
    xhr.send(body);
    location.reload();
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
    // location.reload();
  }
}

