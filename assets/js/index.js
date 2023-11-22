const image = {
    clear: "./assets/images/clear.png",
    clouds: "./assets/images/clouds.png",
    drizzle: "./assets/images/drizzle.png",
    mist: "./assets/images/mist.png",
    rain: "./assets/images/rain.png",
    snow: "./assets/images/snow.png"
};

console.log(image.clouds);

   


let input =document.querySelector('input')
let btn= document.querySelector('button')
let weather =document.querySelector('.weather-icon');



console.log(weather)
btn.addEventListener('click', function(){
    let x =fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=af8d9dc01251c2b977a05efe7c0253e6&units=metric`)

   x.then((cavab)=>{
    let u =cavab.json();

    u.then((netice)=>{

        if (netice.cod !== 200) {
            const div = document.createElement("div");
            div.classList.add("error");
            div.innerHTML = "This city was not found.";

          
        document.querySelector('.temp').innerHTML=``;
        document.querySelector('.city').innerHTML=``;
        document.querySelector('.humidity').innerHTML=``;
        document.querySelector('.wind').innerHTML=``;
        document.querySelector('.error-container').append(div);
    
    }
    else {
       
        document.querySelector('.temp').innerHTML=Math.round(netice.main.temp)+ `°C`;
        document.querySelector('.city').innerHTML=netice.name;
        document.querySelector('.humidity').innerHTML=netice.main.humidity +`%`;
        document.querySelector('.wind').innerHTML=netice.wind.speed +(`km/h`);
    
        if(netice.weather[0].main=="Clouds")
        {weather.setAttribute('src',`${image.clouds}`) }
        else if(netice.weather[0].main=="Clear"){weather.setAttribute('src',`${image.clear}`)}
        else if(netice.weather[0].main=="Drizzle"){weather.setAttribute('src',`${image.drizzle}`)}
        else if(netice.weather[0].main=="Rain"){weather.setAttribute('src',`${image.rain}`)}
        else if(netice.weather[0].main=="Snow"){weather.setAttribute('src',`${image.snow}`)}
        }

       

       
        
           


        

    })

   
   }) 

   
})