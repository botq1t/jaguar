let surnames = 	[
		"Летуаль",
		"Ледовар",
		"Ледокол",
		"Литомент",
		"Литаврас",
		"Ледобас",
		"Лореаль",
		"Клитовор",
		"Литорас",
		"Литак",
		"Литаврасина",
		"Ледамыр",
		"Листожор",
		"Самовар",
		"Сыкватар",
		"Литавор (ударение на О)",
		"Литавор (ударение на А)",
		"Шумовар",
		"Ледоруб",
		"Мойдодыр",
		"Литаворище",
		"Жонглёр",
		"Матрас",
		"Кентавр",
		"Минотавр",
		"Живодёр",
		"Живанши",
		"Лионель",
		"Леопольд",
		"Акварель",
		"Линолеум",
		"Ювелир",
		"Юбиляр",
		"Каламбур",
		"Цвикль",
		"Сыровар",
		"Литовский вор",
		"Литовский мент",
		"Гольджи",
		"Годзилла",
		"Копатель",
		"Лепрекон",
		];
var s=surnames.length;
var rs=Math.round(Math.random()*(s-1))
console.log("Surname: "+s, rs, surnames[s-1])
let surnamessort = [];
surnamessort = surnames.slice();
surnamessort.sort();
//console.log("Unsorted");
//console.log(surnames);
//console.log("Sorted");
//console.log(surnamessort);
