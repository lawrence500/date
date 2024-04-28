const submitBtn = document.getElementById("submit");
const dateInput = document.getElementById("date-input");
const reminderInput = document.getElementById('reminder')

// get saved reminder

let myReminder = JSON.parse(localStorage.getItem('my-reminder')) || []

// end

// save reminder

function setReminder() {
  if (dateInput && reminderInput) {
    myReminder.push({date: dateInput.value, reminder: reminderInput.value})
    localStorage.setItem('my-reminder', JSON.stringify(myReminder))
  }
}

submitBtn.addEventListener("click", setReminder);

// end


// create date format to check with saved reminder date
const newDate = new Date();
let day = newDate.getDate();
let month = newDate.getMonth();
let year = newDate.getFullYear();

switch (month) {
  case 0:
    month = "01";
    break;
  case 1:
    month = "02";
    break;
  case 2:
    month = "03";
    break;
  case 3:
    month = "04";
    break;
  case 4:
    month = "05";
    break;
  case 5:
    month = "06";
    break;
  case 6:
    month = "07";
    break;
  case 7:
    month = "08";
    break;
  case 8:
    month = "09";
    break;
  case 9:
    month = "10";
    break;
  case 10:
    month = "11";
    break;
  case 11:
    month = "12";
    break;
}

const currentDate = `${year}-${month}-${day}`;

// end

// updates bell icon if the there are reminders on current date

function checkReminder(){
    const i = document.querySelector('.fa-solid')
    myReminder.forEach((element) => {
        if(currentDate == element['date']){
            i.style.color = 'green'
            document.getElementById('text').textContent = `you have reminders`
            setInterval(() => {
                i.classList.add('active')
            }, 5000);
        }
    });

}

checkReminder()

// end

// bell icon reminders event

function reminder(){
    myReminder.forEach(element => {
        if(currentDate == element['date']){
            return alert(`${element['reminder']}`)
        } else{
            return alert('you have no reminders for today')
        }
    });


}

const iconBtn = document.querySelector('.fa-solid')

iconBtn.addEventListener('click', reminder)

// end

// search reminders 

const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('searchBtn')

const searchReminders = () =>{

  myReminder.filter(reminder =>{
    
    if(searchInput.value === reminder['reminder']){
      alert(`${reminder['reminder']}(${reminder['date']})`)
    } else{
      alert('reminder not found')
    }
  })

}

searchBtn.addEventListener('click', searchReminders)

// end