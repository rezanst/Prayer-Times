function prayerTimes(latitude, longitude){
    fetch('https://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
    .then(response => response.json())
    .then(function(response){
        let date = new Date();
        let today = date.getDate();
        let data = response.data[0].timings;

        let app = document.getElementById('app');
        let table = document.createElement('table');
        let tableTbody = document.createElement('tbody');

        for(i in data){
            let row = tableTbody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);
            name.innerHTML = i;
            time.innerHTML = data[i];
            tableTbody.appendChild(row);

        }
        table.appendChild(tableTbody);
        app.appendChild(table);
    });
}


function succes(position){
    prayerTimes('-6.200000', '106.816666');

}

function error(){
    alert('Posisi tidak di akses')
}


function userLocation(){
    if(!navigator.geolocation){
        alert('Geolocation tidak didukung didalam browser kamu, coba buka di browser lain')
    }else{
        navigator.geolocation.getCurrentPosition(succes, error);
    }
    
}



function index(){
    let app         = document.getElementById('app');
    let h3          = document.createElement('h3');
    h3.innerHTML    = 'Jadwal Sholat';

    app.appendChild(h3);
    
    userLocation();
}

index(); 