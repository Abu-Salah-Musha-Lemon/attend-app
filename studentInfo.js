let http = new XMLHttpRequest();

http.open('get','studentInfo.json',true);

http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status ==200) {
        let products = JSON.parse(this.responseText);

        let output ="";
        for (const i of products) {
             output +=`
             <div class = "pannel">
                <p> ${i.name} </p>
                <p> ${i.roll} </p>
                <p> ${i.subject} </p>
             </div>

             `
        }
        document.querySelector(".products").innerHTML= output;
    }
}
