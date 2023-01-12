
// this constant was obtained from the HTML and will show the date and time in the webpage
const clock = document.getElementById("clock")


//this function will display the clock in the webpage
function updateClock() {
    const weekDay = dayjs().format('dddd') // this will show the day of the week
    const time = dayjs().format('HH:mm:ss'); //you can change to the format you want
    const date = dayjs().format('MMMM D YYYY'); //you can change to the format you want
    clock.innerHTML = `${weekDay}, ${date}<br>${time}`; // this will retrieve the date and time and show it in the webpage ,the <br> was used to insert a line break
    
  }
// this function will update the clock 1 second at a time 
setInterval(updateClock, 1000); 


// save the data to local storage when the icon "save" is clicked
const saveButton = document.getElementsByClassName("saveBtn");
for(let i=0; i < saveButton.length ; i++){
    saveButton[i].addEventListener("click", function() {  //when the user clicks the save icon the information will be saved, if they dont't click the icon it won't save it
        const data = document.getElementsByClassName("description")
        [i].value;
        localStorage.setItem("data"+i, data);
    });
}
// Retrieve the data from local storage when the web  page loads
window.addEventListener("load", function() {
    for(let i=0; i< saveButton.length ; i++){
        const data = localStorage.getItem("data"+i);
        if (data) {
            document.getElementsByClassName("description")[i].value = data;
        }
    }
});


// change the color of the blocks depending on the hour
const rows = document.querySelectorAll('.row')
function updateRowColors(){  //this function will generate the code used to change the colors depending on the hour+
  const currentTime = new Date().getHours();
  rows.forEach(row => {
    const hour =
    parseInt(row.querySelector('.hour').textContent.split(' ')[0]);
    
    if (hour < currentTime) {
      row.classList.add('past'); //this code will create the "past" colors
    }else if (hour === currentTime) {
      row.classList.add('present'); // this code will create the "present" colors
      
    }else{
      row.classList.add('future'); // this code will create the "future" colors
    }
    });
}

updateRowColors(); //this function will make the code work to change the colors, if its deleted then all rows become white