let names=["Йогра","Ягра","Ягер","Ягор","Ягуар","Егор","Гоша","Грыша","Джордж","Джорджинио","Швагер","Крюгер","Стрингер","Игорь","Квакер","Йогурт","Егерь","Ядгар","Электроегор","Шлёпа","Шлёндра","Ягр","Шляпа","Шлёпок","Яга","Шлягер","Грыжа","Ярик","Егермейстер","Егорилла","Грошык","Горе","Швабра","Ягрон","Ятаган","Янычар","Ярило","Янцзы","Ярополк","Флюгер","Фляга","Ягрик","Фликер","Юнгер","Егурт","Юнга","Ягурец","Яруллин","Шиндр","Мындр","Ягрус","Егорище","Егорёк","Рыгор","Грека","Ярулинн","Гренка","Гангрена","Гроб","Тигр","Гогер","Юнкер","Янор","Жокер","Жорик","Жора","Жароха","Жмых","Жерех","Егошка","Геша","Егорик","Егорка","Кагор","Кент","Мотор","Крекер","Грильяж","Яромир","Ёринобу","Ёжик","Жэужык","Жужик","Живчик","Жывёла","Жоржик","Хоккей","Какей","Жрец","Жокей","Егоза","Гашиш","Гоголь","Гегель","Гитлер","Еггер","Григор","Грэг","Кракен","Гемор","Гомер","Голем","Горгулья","Гомункул","Ярослав","Копырь","Упырь"],names_c=["Гашиш","Гегель","Геша","Гитлер","Гоголь","Голем","Гомер","Гомункул","Горгулья","Грека","Гренка","Григор","Грильяж","Грэг","Еггер","Егорёк","Егорик","Егорка","Егошка","Ёжик","Ёринобу","Жароха","Жерех","Жмых","Жокей","Жокер","Жора","Жоржик","Жорик","Жрец","Жужик","Жывёла","Йогра","Кагор","Какей","Кент","Копырь","Кракен","Крекер","Мотор","Рыгор","Упырь","Фликер","Флюгер","Фляга","Хоккей","Юнга","Юнгер","Юнкер","Ягрик","Ягрус","Ягурец","Янцзы","Янычар","Ярило","Яромир","Ярополк","Ярослав","Ярулинн","Яруллин"],names_a=["Гоша","Грыжа","Грыша","Джорджинио","Егор","Йогурт","Крюгер","Тигр","Швабра","Швагер","Шлёндра","Шлёпа","Шлягер","Шляпа","Электроегор","Ягер","Ягор","Ягуар","Ядгар"],names_r=["Гангрена","Гемор","Гогер","Горе","Гроб","Грошык","Джордж","Егермейстер","Егерь","Егоза","Егорилла","Егорище","Егурт","Живчик","Жэужык","Игорь","Квакер","Мындр","Стрингер","Шиндр","Шлёпок","Яга","Ягр","Ягра","Ягрон","Янор","Ярик","Ятаган"];var n=names.length,rn=Math.floor(Math.random()*n);console.log("Name: "+n,rn,names[n-1]);let namessort=[];namessort=names.slice(),namessort.sort();let j=5,surnames=["Летуаль","Ледовар","Ледокол","Литомент","Литаврас","Ледобас","Лореаль","Клитовор","Литорас","Литак","Литаврасина","Ледамыр","Листожор","Самовар","Сыкватар","Литавор (ударение на О)","Литавор (ударение на А)","Шумовар","Ледоруб","Мойдодыр","Литаворище","Жонглёр","Матрас","Кентавр","Минотавр","Живодёр","Живанши","Лионель","Леопольд","Акварель","Линолеум","Ювелир","Юбиляр","Каламбур","Цвикль","Сыровар","Литовский вор","Литовский мент","Гольджи","Годзилла","Копатель","Лепрекон","Литота"],surnames_c=["Ледобас","Литорас","Литак","Литаврасина","Ледамыр","Шумовар","Ледоруб","Литаворище","Жонглёр","Матрас","Кентавр","Минотавр","Живанши","Лионель","Леопольд","Акварель","Линолеум","Юбиляр","Каламбур","Цвикль","Сыровар","Литовский вор","Литовский мент","Гольджи","Годзилла","Копатель","Лепрекон","Литота"],surnames_a=["Летуаль","Самовар","Литавор (ударение на О)","Литавор (ударение на А)"],surnames_r=["Ледовар","Ледокол","Литомент","Литаврас","Лореаль","Клитовор","Листожор","Сыкватар","Мойдодыр","Живодёр","Ювелир"];var s=surnames.length,rs=Math.floor(Math.random()*s);console.log("Surname: "+s,rs,surnames[s-1]);let surnamessort=[];surnamessort=surnames.slice(),surnamessort.sort(),document.querySelector(".header").style.backgroundImage=`url("img/header/yager${Math.floor(5*Math.random()+1)}.jpg")`,console.log(document.querySelector(".header").style.backgroundImage),$(document).ready((function(){var a=Math.floor(1/(n*s)*100*1e3)/1e3;$("#uniqueness").empty().append(a+"%")}));var audio=new Audio("audio/Soundpack/roblox.mp3"),arcane=new Audio("audio/yager/chel.mp3"),kruto=new Audio("audio/yager/kruto.mp3"),nekruto=new Audio("audio/yager/nekruto.mp3"),udachi=new Audio("audio/yager/udachi.mp3"),tajika=new Audio("audio/yager/tajika.mp3");$("#ranbut").click((function(){var a=Math.floor(100*Math.random()+1),e=Math.floor(100*Math.random()+1);if(console.log("Редкость имени: "+a),console.log("Редкость фамилии: "+e),$("#name #surname").show(500),a<6){$("#name").hasClass("rare")&&$("#name").toggleClass("rare"),$("#name").hasClass("common")&&$("#name").toggleClass("common"),0==$("#name").hasClass("arcane")&&$("#name").toggleClass("arcane");var n=Math.floor(Math.random()*names_a.length);$("#name").empty().append(names_a[n]),console.log("Аркана: "+(n+1),names_a[n]);var s="Arcane"}else if(a<26){$("#name").hasClass("common")&&$("#name").toggleClass("common"),$("#name").hasClass("arcane")&&$("#name").toggleClass("arcane"),0==$("#name").hasClass("rare")&&$("#name").toggleClass("rare");n=Math.floor(Math.random()*names_r.length);$("#name").empty().append(names_r[n]),console.log("Рарка: "+(n+1),names_r[n]);s="Rare"}else{$("#name").hasClass("arcane")&&$("#name").toggleClass("arcane"),$("#name").hasClass("rare")&&$("#name").toggleClass("rare"),0==$("#name").hasClass("common")&&$("#name").toggleClass("common");n=Math.floor(Math.random()*names_c.length);$("#name").empty().append(names_c[n]),console.log("Коммонка: "+(n+1),names_c[n]);s="Common"}if(e<6){$("#surname").hasClass("rare")&&$("#surname").toggleClass("rare"),$("#surname").hasClass("common")&&$("#surname").toggleClass("common"),0==$("#surname").hasClass("arcane")&&$("#surname").toggleClass("arcane");var o=Math.floor(Math.random()*surnames_a.length);$("#surname").empty().append(surnames_a[o]),console.log("Аркана: "+(o+1),surnames_a[o]);var r="Arcane"}else if(e<26){$("#surname").hasClass("common")&&$("#surname").toggleClass("common"),$("#surname").hasClass("arcane")&&$("#surname").toggleClass("arcane"),0==$("#surname").hasClass("rare")&&$("#surname").toggleClass("rare");o=Math.floor(Math.random()*surnames_r.length);$("#surname").empty().append(surnames_r[o]),console.log("Рарка: "+(o+1),surnames_r[o]);r="Rare"}else{$("#surname").hasClass("arcane")&&$("#surname").toggleClass("arcane"),$("#surname").hasClass("rare")&&$("#surname").toggleClass("rare"),0==$("#surname").hasClass("common")&&$("#surname").toggleClass("common");o=Math.floor(Math.random()*surnames_c.length);$("#surname").empty().append(surnames_c[o]),console.log("Коммонка: "+(o+1),surnames_c[o]);r="Common"}$("#genfoo").slideDown(300),"Common"==s?"Common"==r?($("#text_rarity").empty().append("Damn, just a commons dude..."),udachi.play()):"Rare"==r?($("#text_rarity").empty().append("Rare surname, not bad, but the name is common;)"),nekruto.play()):($("#text_rarity").empty().append("Yeah, arcane surname! But the name still be common. Anyway, u fine, really :p"),kruto.play()):"Rare"==s?"Common"==r?($("#text_rarity").empty().append("Huh, rare name, but surname is common, thats not ideal variant"),nekruto.play()):"Rare"==r?($("#text_rarity").empty().append("Good combo! Rare name and surname. Cool, really cool"),tajika.play()):($("#text_rarity").empty().append("Geez, rare name and arcane surname. Really awesome combination!"),kruto.play()):"Common"==r?($("#text_rarity").empty().append("Ohh, man, it's arcane name! Really cool, so sad that the surname is common ;("),kruto.play()):"Rare"==r?($("#text_rarity").empty().append("Wow! Name is arcane and surname is rare! Close to ideal :)"),kruto.play()):($("#text_rarity").empty().append("OMG, U FUCKING CRAZY!"),arcane.play())})),$(document).ready((function(){$(".navigation__burger").click((function(a){$(".navigation__burger, .navigation__menu").toggleClass("active"),$("body").toggleClass("lock")}))})),$(document).ready((function(){$("#old_open").click((function(){$(".old, .old__card").toggleClass("active"),$("body").toggleClass("lock")})),$("#old_close").click((function(){$(".old, .old__card").toggleClass("active"),$("body").toggleClass("lock")})),$(".nslist__title").click((function(){$(this).toggleClass("active").next().slideToggle(400)})),$("#old_names_button").click((function(){$("#old_number").empty().append(Math.floor(Math.random()*names.length+1))})),$("#old_surnames_button").click((function(){$("#old_number").empty().append(Math.floor(Math.random()*surnames.length+1))})),$(".nslist__marks").empty();for(var a=0;a<n;a++)a%10==0&&0!=a&&a!=n&&$("#old_names_list").append("<br>"),$("#old_names_list").append("<li>"+(a+1)+". "+names[a]+"</li>");for(a=0;a<s;a++)a%10==0&&0!=a&&a!=s&&$("#old_surnames_list").append("<br>"),$("#old_surnames_list").append("<li>"+(a+1)+". "+surnames[a]+"</li>")}));