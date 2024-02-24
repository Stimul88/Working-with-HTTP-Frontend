export default class GetAllTickets {
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