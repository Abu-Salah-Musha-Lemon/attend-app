const persone = [
    {
        email: "lemonahmed@gmail.com",
        password: "12345"
    },
    {
        email: "lemonahmed@gmail.com",
        password: "12345"
    },
    {
        email: "lemonahmed@gmail.com",
        password: "12345"
    },
    {
        email: "lemonahmed@gmail.com",
        password: "12345"
    },
]


function logIn() {
    const email = document.getElementById("typeEmail").value;
    const password = document.getElementById("typePassword").value;
    for (let i = 0; i < persone.length; i++) {
        if (email == persone[i].email && password == persone[i].password) {
            // document.getElementById('logIn').innerHTML=`<a href="./admin.html"></a>`;
            window.location = "./admin.html"
        }
    }
}