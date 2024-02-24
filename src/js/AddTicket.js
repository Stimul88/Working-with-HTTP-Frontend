export default class AddTicket {
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