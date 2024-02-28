import AddTicket from './AddTicket';
import SendTicket from './SendTicket';

const addTicket = new AddTicket();
const sendTicket = new SendTicket();

export default class ChangeTicket {
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