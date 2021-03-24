/*  Dado un año, se espera que nos regrese el siglo en que se encuentra

        1 - 1 -100

        2 - 101 - 200

    */

const centuryFromYear = year => Math.ceil(year/100);

console.log(centuryFromYear(1901)); //ouput 20

console.log(centuryFromYear(2325)); //ouput 24

console.log(centuryFromYear(2001)); //ouput 21

console.log(centuryFromYear(9)); //ouput 1