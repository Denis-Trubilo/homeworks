//------------------------------------Дз 8

//---------1---------------Создание тегов title и meta--------------

let langHead = document.querySelector('head');
langHead.setAttribute('lang', 'en');
// console.log(langHead)

let titleHead = document.createElement('title');   //создали тег title
titleHead.innerHTML = 'hw8-DOM';   //добавили внутрь тега title контент
document.head.appendChild(titleHead);   //добавили тег title с контентом на нашу страницу
// console.log(titleHead);

let metaUtf8 = document.createElement('meta');   //создали тег meta
metaUtf8.setAttribute('charset', 'UTF-8');    //создали атрибут charset со значением UTF-8
document.head.appendChild(metaUtf8);   //добавили тег meta с контентом на нашу страницу
// console.log(metaUtf8);

let style = document.createElement('style');
style.innerHTML = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 80%;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 2%;
}
.title {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    color: #212121;
    margin-bottom: 10px;
}
.subtitle {
    color: #9FA3A7;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 26px; 
    margin-bottom: 55px;
}
.about__row {
    display: flex;
    justify-content: center;
}
.about__column {
    max-width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 100px;
    text-align: center;
}
.about__column:hover {
    background-color: #8F75BE;
	box-shadow: 0px 13px 18px rgba(0, 0, 0, 0.15), 0px 11px 55px rgba(0, 0, 0, 0.07);	
	transition: 500ms;
}
.about__column:hover .column-about__caption{
    color: #FFC80A;
    transition: 500ms;
}
.about__column:hover h3{
    color: #fff;
    transition: 500ms;
}
.about__column:hover .column-about__text{
    color: #fff;
    transition: 500ms;
}
.about__column:hover a{
	color: #fff;
    transition: 500ms;
}
.column-about__caption {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    padding-top: 80px;
    margin-bottom: 20px;
}
.column-about__title {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
    color: #212121;
    margin-bottom: 25px;
}
.column-about__text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 22px;
    color: #9FA3A7;
    margin-bottom: 55px;
}
.column-about__link {
    display: block;
    margin: 0 auto;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    color: #212121;
    border: 3px solid #FFC80A;
    border-radius: 50px;
    padding: 15px 23px 15px 23px;
    margin-bottom: 95px;
}
`;

document.head.appendChild(style);


//---------2---------------Создание тегов h2(с классом title) и div(с клссом subtitle)--------------

let about = document.createElement('div');   //создали тег div
about.setAttribute('class', 'about');    //создали атрибут class со значением about
document.body.appendChild(about);   //добавили тег about с контентом на нашу страницу
// console.log(about);

let container = document.createElement('div');   //создали тег div
container.setAttribute('class', 'container');    //создали атрибут class со значением container
about.append(container);   // вкладываем внутрь тега about тег container


let h2Title = document.createElement('h2');   //создали тег h2
h2Title.setAttribute('class', 'title');    //создали атрибут class со значением title
h2Title.innerHTML = 'Choose Your Option';   //добавили внутрь тега h2 с классом title контент
container.append(h2Title);   // вкладываем внутрь тега container тег h2Title


let divSubtitle = document.createElement('div');   //создали тег div
divSubtitle.setAttribute('class', 'subtitle');    //создали атрибут class со значением subtitle
divSubtitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';   //добавили внутрь тега h2 с классом subtitle контент
container.append(divSubtitle);   // вкладываем внутрь тега container тег divSubtitle

//---------3---------------Создание карточек--------------

let aboutRow = document.createElement('div');   //создали тег div (флекс контейнер)
aboutRow.setAttribute('class', 'about__row');    //создали атрибут class со значением about__row
container.append(aboutRow);  

let divAboutColumn = document.createElement('div');   //создали тег div
divAboutColumn.setAttribute('class', 'about__column column-about');    //создали атрибут class со значением about__column column__about
aboutRow.append(divAboutColumn);   

let divAboutCaption = document.createElement('div');   //создали тег div
divAboutCaption.setAttribute('class', 'column-about__caption');    //создали атрибут class со значением column-about__caption
divAboutCaption.innerHTML = 'STUDIO';   //добавили внутрь тега div с классом column-about__caption контент
divAboutColumn.append(divAboutCaption);   

let h3ColumnTitle = document.createElement('h3');   //создали тег h3
h3ColumnTitle.setAttribute('class', 'column-about__title');    //создали атрибут class со значением column-about__title
h3ColumnTitle.innerHTML = 'Initially designed to';   //добавили внутрь тега h3 с классом column-about__title контент
divAboutColumn.append(h3ColumnTitle); 

let divColumnText = document.createElement('div');   //создали тег h3
divColumnText.setAttribute('class', 'column-about__text');    //создали атрибут class со значением column-about__title
divColumnText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';   //добавили внутрь тега h3 с классом column-about__title контент
divAboutColumn.append(divColumnText);

let aColumnLink = document.createElement('a');   //создали тег a
aColumnLink.setAttribute('class', 'column-about__link');    //создали атрибут class со значением column-about__link
aColumnLink.setAttribute('href', '#');
aColumnLink.innerHTML = 'START HERE';   //добавили внутрь тега a с классом column-about__link контент
divAboutColumn.append(aColumnLink);

let columnClone = divAboutColumn.cloneNode(true);
aboutRow.append(columnClone);

let cap = document.querySelector('.column-about__caption');
cap.innerHTML = 'FREELANCER';