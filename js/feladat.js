var team = [{
        name: "Név: Csonka-Kis Andrea",
        age: "Életkor: 20",
        hobby: "Hobbi: a lét episztemológiai értelmezése"
    },
    {
        name: "Név: Grosics Rebeka",
        age: "Életkor: 20",
        hobby: "Hobbi: képregények, tetoválások"
    },
    {
        name: "Név: Horváth Szilvia",
        age: "Életkor: 20",
        hobby: "Hobbi: horgolás"
    },
    {
        name: "Név: Lajos-Kovács Krisztina, alias Tina",
        age: "Életkor: 20",
        hobby: "Hobbi: kártyajátékok, kertészkedés, lakberendezés, önfejlesztés"
    },
    {
        name: "Név: Tóth Gergely",
        age: "Életkor: 28",
        hobby: "Hobbi: olvasás"
    }
];


var teamWork;
teamWork = document.getElementById("team")

team.forEach(myFunction);

function myFunction(asd) {
    teamWork.innerHTML = teamWork.innerHTML + asd.name + "<br>" + asd.age + "<br>" + asd.hobby + "<br>" + "<br>"
}