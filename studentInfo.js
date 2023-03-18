let http = new XMLHttpRequest();
http.open('get','studentInfo.json',true);
http.onload= function(){
    if (this.readyState == 4 && this.status) {
        let products = JSON.parse(this.responseText);
    }
    let output ="";
    for( let item of product){
        output+=`
        <div class="pannel">
        <p>${item.name}</p>
        <p>${item.roll}</p>
        <p>${item.subject}</p>
    </div>
        `;
    }
    document.querySelector('.studentInof').innerHTML= output;
}