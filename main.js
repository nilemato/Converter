
const timeZoneArr = Intl.supportedValuesOf("timeZone");

let hours =  document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let errorMessage = document.querySelector("#errorMessage");
let timeZoneInput = document.querySelector("#timeZone");
let select = document.querySelector("#setTimeZone");
let outputDisplay = document.querySelector("#output");
let newTime;

hours.placeholder = "hours";
minutes.placeholder = "minutes";

hours.addEventListener("change", ()=>getHours());
minutes.addEventListener("change", ()=>getMinutes());
timeZoneInput.addEventListener("change", ()=>convertToTimeZone());

hours.maxLength = 2;
minutes.maxLength = 2;

hours.type = "text";
minutes.type = "text";

let date = new Date();

// Generate option list
for(var i = 0; i < timeZoneArr.length; i++) {
    var option = timeZoneArr[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    select.appendChild(element);
}

let getHours = () =>{
    console.log("getHours triggered");
    if( hours.value > 24 || hours.value < 0 || isNaN(hours.value)){
        errorMessage.innerHTML = "Hour not valid";
        hours.value = null;
    } else {
        errorMessage.innerHTML = "";
        date.setHours(hours.value);
        console.log("The hours:", hours.value);
        console.log("Hours date\n", date)
    }
}

let getMinutes = () =>{
    console.log("getMinutes triggered")
    if(minutes.value > 60 || minutes.value < 0 ||isNaN(minutes.value)){
        errorMessage.innerHTML = "Minutes not valid";
        minutes.value = null;
    } else {
        errorMessage.innerHTML = "";
        date.setMinutes(minutes.value);
        console.log("The minutes:", minutes.value);
        console.log("Minutes date\n", date)
    }
}

let convertToTimeZone =()=>{
    newTime = timeZoneInput.value;

    let localTime = date.toLocaleTimeString("ro-RO",{timeZone: newTime});
    let localDate = date.toLocaleDateString("ro-RO",{timeZone: newTime});
    outputDisplay.innerHTML = "Local time in: " + newTime + " is " +localTime +" "+localDate;
    
}

