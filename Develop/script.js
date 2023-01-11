// this constant was obtained from the HTML and will show the date and time in the webpage
const clock = document.getElementById("clock")


//this function will display the clock in the webpage
function updateClock() {
    const time = dayjs().format('HH:mm:ss');
    const date = dayjs().format('MMMM D YYYY');
    clock.innerHTML = `${date},${time}`;
}
// this function will update the clock 1 second at a time 
setInterval(updateClock, 1000); 


// save the data to local storage when the icon "save" is clicked
const saveButton = document.getElementsByClassName("saveBtn");
for(let i=0; i < saveButton.length ; i++){
    saveButton[i].addEventListener("click", function() {
        const data = document.getElementsByClassName("description")
        [i].value;
        localStorage.setItem("data"+i, data);
    });
}
// Retrieve the information from local storage when the web  page loads
window.addEventListener("load", function() {
    for(let i=0; i< saveButton.length ; i++){
        const data = localStorage.getItem("data"+i);
        if (data) {
            document.getElementsByClassName("description")[i].value = data;
        }
    }
});
