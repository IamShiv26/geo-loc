const getLocation = document.getElementById("geolocation");

getLocation.addEventListener('click', evt=>{
    if('geolocation' in navigator){
        console.log("hiiii");
        navigator.geolocation.getCurrentPosition(position=>{
            console.log("hi");
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            
            console.log(latitude,longitude);
            
        },error=>{
            console.log(error.code);
        },{timeout:10000});
    }else{
        console.log("not Supported");
    }
});