let http = new XMLHttpRequest();
http.open('get','studentInfo.json',true);
http.send();
http.onload= function(){
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
    
    let output ="";
    for( let item of products){
        output+=`
        <div class="pannel">
        <p>'${item.name}'</p>
        <p>"${item.roll}"</p>
        <p>"${item.subject}"</p>
    </div>
        `;
    }
    document.querySelector('.studentInof').innerHTML= output;
}
}