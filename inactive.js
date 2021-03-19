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
    // I have set ranged according to my understanding. It was a bit confusing
    minutesPassed +=1
    
    if (minutesPassed >=60 && minutesPassed <=120 ){
        inactiveFirstStage()
    } else if (minutesPassed >120 && minutesPassed <=180 ){
        inactiveSecondStage
    } else if (minutesPassed >=240 && minutesPassed <=300 ){
        inactiveThirdStage
    } else if (minutesPassed/1000 > 300){
        minutesPassed = 0
    }
    
    console.log(minutesPassed)
}, 1000);