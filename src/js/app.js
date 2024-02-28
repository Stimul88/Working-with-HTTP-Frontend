import GetAllTickets from './GetAllTickets';
import AddTicket from './AddTicket';
import SendTicket from './SendTicket';
import ChangeTicket from './ChangeTicket';

const getAllTickets = new GetAllTickets();
const addTicket = new AddTicket();
const sendTicket = new SendTicket();
const changeTicket = new ChangeTicket();


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
