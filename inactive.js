const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 second

let minutesPassed = 0

setInterval(function(){
    // please write your code here
    minutesPassed +=1
    
    if (minutesPassed >=10 && minutesPassed <=120 ){
        inactiveFirstStage()
    } else if (minutesPassed >=180 && minutesPassed <=240 ){
        inactiveSecondStage
    } else if (minutesPassed >=300 && minutesPassed <=360 ){
        inactiveThirdStage
    } else if (minutesPassed/1000 > 360){
        minutesPassed = 0
    }
    
    console.log(minutesPassed)
}, 1000);