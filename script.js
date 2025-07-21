


let currentdate=new Date();
let CDate = currentdate.getDate();
let CMonth = currentdate.getMonth() + 1;
let CYear = currentdate.getFullYear();
document.getElementById("cdate").value = CDate;
document.getElementById("cmonth").value = CMonth; 
document.getElementById("cyear").value = CYear;




let Date1 = currentdate.getDate();
let Month = currentdate.getMonth() + 1;
let Year = currentdate.getFullYear();
document.getElementById("date").value = Date1;
document.getElementById("month").value = Month; 
document.getElementById("year").value = Year;


function calculateage() {
    let years , Months , Days ;
    let Date1 = parseInt(document.getElementById("date").value);
    let Month = parseInt(document.getElementById("month").value);
    let Year = parseInt(document.getElementById("year").value);

    let CDate = parseInt(document.getElementById("cdate").value);
    let CMonth = parseInt(document.getElementById("cmonth").value);
    let CYear = parseInt(document.getElementById("cyear").value);


    if(CMonth>Month && CDate>Date1){
    years=CYear-Year;
    Months=CMonth-Month;
    Days=CDate-Date1

}

 if(CMonth<Month && CDate>Date1){
    years=(CYear-1)-Year;
    Months=(CMonth+12)-Month;
     Days=CDate-Date1

 }

 if(CMonth<Month && CDate<Date1){
     years=(CYear-1)-Year;
     Months=((CMonth-1)+12)-Month;
     if(Month%2==0){
     Days=(CDate+31)-Date1
    }
    else if(Month===3){

    Days=(CDate+28)-Date1


    }
    else{
          Days=(CDate+31)-Date1

    }
    

 }
 console.log(` your ${years}years ${Months} months ${Days} days old ⁠
`)
document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = Months;
    document.getElementById("days").innerHTML = Days;
    date=new Date(Year,Month-1,Date1)
     // or use new Date(2024, 6, 21) for a specific date
    let dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

     console.log(dayName); // Output: e.g., "Sunday"
     document.getElementById("dayName").innerHTML=dayName
     let nextBday=new Date()
     let nextbirthday=((11-Months)*31+(31-Days))
     document.getElementById("nextbirthday").innerHTML=nextbirthday;

     document.getElementById("result").style.display="unset";

}

function Reset(){


    let currentdate=new Date();
    let CDate = currentdate.getDate();
    let CMonth = currentdate.getMonth() + 1;
    let CYear = currentdate.getFullYear();
    document.getElementById("cdate").value = CDate;
    document.getElementById("cmonth").value = CMonth; 
    document.getElementById("cyear").value = CYear;




    let Date1 = currentdate.getDate();
    let Month = currentdate.getMonth() + 1;
    let Year = currentdate.getFullYear();
    document.getElementById("date").value = Date1;
    document.getElementById("month").value = Month; 
    document.getElementById("year").value = Year;
         document.getElementById("result").style.display="none";


}
