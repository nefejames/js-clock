function getTime(){
    //html element selectors
    const displayTime = document.getElementById("time");
    const displayDate= document.getElementById("date");

    //varibles for data
    const time = new Date;
    let seconds = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();
    const month = time.getMonth();
    const day = time.getDay();
    const year = time.getFullYear();
    const date = time.getDate();

    let dayFormat = `${date}th` //adds the suffix "th" to the date

    //array of days
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //array of months
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    //time logic
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(hour < 10){
        hour = "0" + hour;
    }

    console.log(seconds);
   
    //input data unto the browser
    displayTime.textContent = `${hour} : ${seconds} : ${minute}`;
    displayDate.textContent = `${daysOfWeek[day]}, ${dayFormat} ${monthsOfYear[month]}, ${year}`;  
}

setInterval(getTime, 1000);
