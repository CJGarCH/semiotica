function generarCedula(){
    var cantDigitos = ((Math.random() * 2) + 8).toFixed(0)
    console.log(cantDigitos)
    var digito;
    var cedula = "";

    for (var index = 0; index < cantDigitos; index++) {
        digito =(Math.random() * 10).toFixed(0)
        console.log(digito)
        cedula += digito
        console.log(cedula)
    }
    
    return cedula
} 
    function alerta() {
        let arraycompleto = [];

        $("#test > tbody").html("")
        $("#test1 > tbody").html("")
        let arr = [];

        do {
            let num = Math.floor(Math.random() * 20) + 1;
            arr.push(num);
            arr = arr.filter((item, index) => {
                return arr.indexOf(item) === index
            });
        } while (arr.length < 20);
        

        for (m = 0; m < arr.length; m++) {
showDate();
ageCalculate();

           // let year_age = showDate(ageCalculate());
            
            let cedula = generarCedula() ; 
            let id = arr[m];
            let green = "#009900";
            let red = "#FF0000";
            let yellow = "#FFFF00";
            let estudiante = "Estudiante" + id;
            let nota1 = (Math.random() * (5.00 - 0.0)) + 0.0;
            let nota2 = (Math.random() * (5.00 - 0.0)) + 0.0;
            let nota3 = (Math.random() * (5.00 - 0.0)) + 0.0;
            let promedio = ((nota1 + nota2 + nota3) / 3);
            let color = "";

            if (promedio > 3.5) {
                color = green;
            }
            if (promedio < 3.0) {
                color = red;
            }

            const registro = {
                fecha1,
                year_age,
                cedula,
                id,
                estudiante,
                nota1,
                nota2,
                nota3,
                promedio,
                color
            }
            arraycompleto.push(registro);
            let val = "<tr><td> " + cedula + "</td><td>"+ fecha1 + "</td><td>" + year_age + "</td><td>" + estudiante + " </td><td>" + nota1.toFixed(2) + " </td><td>" + nota2.toFixed(2) + " </td ><td>" + nota3.toFixed(2) + " </td><td bgcolor= " + color + ">" + promedio.toFixed(2) + " </td></tr>";
            $("#test>tbody").append(val);
        }

    }

    let fecha1 = "";

    function randomDate(start, end) {
let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;

 fecha1 = [year, month, day].join('-');

//document.getElementById('birth_date').value = fecha1;


return [year, month, day].join('-');
}



function conver() {
let birthDate = fecha1;
let CDate = new Date(birthDate);
}

function showDate() {
    let year_age = "";
    if (isNaN(randomDate(new Date(2005, 1, 1), new Date(1980, 1, 2)))) {

    //document.getElementById("agew").innerHTML = randomDate(new Date(2015, 1, 1), new Date(1990, 1, 1));


    
}

}

function ageCalculate() {

let birthDate = fecha1;



let d = new Date(birthDate);

let mdate = birthDate.toString();
let yearThen = parseInt(mdate.substring(0, 4), 10);
let monthThen = parseInt(mdate.substring(5, 7), 10);
let dayThen = parseInt(mdate.substring(8, 10), 10);

let today = new Date();
let birthday = new Date(yearThen, monthThen - 1, dayThen);

let differenceInMilisecond = today.valueOf() - birthday.valueOf();

year_age = Math.floor(differenceInMilisecond / 31536000000);
let day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);


let month_age = Math.floor(day_age / 30);




let tMnt = (month_age + (year_age * 12));
let tDays = (tMnt * 30) + day_age;


/* if (isNaN(year_age1)) {
    year_age = ("Fecha inválida - Intentelo de nuevo");
} else {
    
    if (year_age == 0) {
        year_age = ("Fecha inválida - Intentelo de nuevo");
    }else{
        year_age = year_age1 + " años ";
    }
} */
// alert(year_age)
return year_age;

}
