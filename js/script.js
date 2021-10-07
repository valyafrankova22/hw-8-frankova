const year = +prompt(`В каком году вы родились?`);
let age;
let city;
let sport;

switch (year) {
    case null:
        age = `Жаль, что вы не захотели ввести свой год рождения`;
        alert(age);
        break;
    default:
     age = 2021 - year;
}

city = prompt(`В каком городе вы живете?`);
switch (city) {
    case null:
        city = `Жаль, что вы не захотели ввести свой город`;
        alert(city);
        break;
    case `Киев`:
        city = `Вы живете в столице Украины!`;
        break;
    case `Москва`:
        city = `Вы живете в столице России`;
        break;
    case `Минск`:
        city = `Вы живете в столице Белоруссии`;
        break;
    default:
        city = `Вы живете в городе` + city;
}

sport = prompt(`Какой ваш любимый вид спорта?`);
switch (sport) {
    case null:
        sport = `Жаль, что вы не захотели ввести свой любимый вид спорта`;
        alert(sport);
        break;
    case `Футбол`:
        sport = `Круто, хочешь стать как Месси?`;
        break;
    case `Бокс`:
        sport = `Круто, хочешь стать как Александр Усик?`;
        break;
    case `Фигурное катание`:
        sport = `Круто, хочешь стать как Юзуру Ханью?`;
        break;
    default:
        sport = `Твой любимый спорт` + sport;
}


alert (`Вам` + age + `года` + `\n` + city + `\n` + sport);