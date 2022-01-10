//1. Напишите функцию, которая принимает на параметры "год" и "месяцы", а затем вернет, какой год будет по прошествии n месяцев.

// afterNumMonths(2020, 24) ➞ 2022

// afterNumMonths(1832, 2) ➞ 1832

// afterNumMonths(1444, 60) ➞ 1449

function afterNumMonths(year, month){
    let result = new Date(year, 0);
    if (month % 12 == 0){
        result.setYear(result.getFullYear() + month / 12);
    }
    
    return result.getFullYear();
}

console.log(afterNumMonths(2020, 24));
console.log(afterNumMonths(1832, 2));
console.log(afterNumMonths(1444, 60));




//2. Учитывая параметры день, месяц и год, верните, является ли эта дата допустимой датой.

//isTrueDate(35, 2, 2018) ➞ false
// В феврале не может быть 35 дней

//isTrueDate(8, 3, 2021) ➞ true
// Все нормально, 8 марта никто не отменял :)

//isTrueDate(31, 6, 1985) ➞ false
// В июне 30 дней

function isTrueDate(day, month, year){
    let date = new Date(year, month - 1, day);
    return date.getMonth() == month - 1;
}

console.log(isTrueDate(35, 2, 2018));
console.log(isTrueDate(8, 3, 2021));
console.log(isTrueDate(31, 6, 1985));



//3. Напишите функцию, которая берет время time1 и время time2 и возвращает количество часов, прошедших между двумя временами.

// hoursPass("4:00 AM", "10:00 AM") ➞ "6 часов"

// hoursPass("5:00 PM", "7:00 PM") ➞ "2 часа"

// hoursPass("1:00 AM", "4:00 PM") ➞ "15 часов"

function hoursPass(time1, time2){
    let arrTime1 = time1.split(' ');
    arrTime1[0] = parseInt(arrTime1[0]);
    if (arrTime1[1] !== 'AM'){
        arrTime1[0] += 12;
    } 
    let arrTime2 = time2.split(' ');
    arrTime2[0] = parseInt(arrTime2[0]);
    if (arrTime2[1] !== 'AM'){
        arrTime2[0] += 12;
    }
    let resultHours = arrTime2[0] - arrTime1[0];
    let postfix = resultHours == 1 ? ' час' : resultHours < 5 ? ' часа' : ' часов';
    return resultHours + postfix;
}

console.log(hoursPass("4:00 AM", "10:00 AM"));
console.log(hoursPass("5:00 PM", "7:00 PM"));
console.log(hoursPass("1:00 AM", "4:00 PM"));