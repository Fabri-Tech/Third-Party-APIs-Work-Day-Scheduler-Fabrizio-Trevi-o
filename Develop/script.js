// this constant was obtained from the HTML and will show the date and time in the webpage
const clock = document.getElementById("clock")


//this function will display the clock in the webpage
function updateClock() {
    const time = dayjs().format('HH:mm:ss');
    const date = dayjs().format('MMMM D YYYY');
    clock.innerHTML = `${date},${time},`;
}
// this function will update the clock 1 second at a time 
setInterval(updateClock, 1000); 