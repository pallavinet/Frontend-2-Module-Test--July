const searchbtn=document.getElementById('searchbtn');
const main=document.getElementsByClassName('main');

const loading=async searched=>{
    const api=`2acd3ebdab430d460c3d7caea1b1624c`;
    const city=`delhi`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    const res=await fetch(url);
    const values=await res.json();
    console.log(values);



    // let found=alldata.filter(data=>{
    //     const regex=new RegExp(`^${searched}`,'gi');
    //     return data.name.match(regex);
    // });
    

    foundOut(values);
}




const foundOut=(values)=>{
    console.log(values.name);
    main.innerHTML+=`<div class="card">
        <div class="chead"> 
            <!-- <img src="${values.name}.png" class="bg" alt="background"> -->
            <ul>
                <li>
                     <div class="">${values.main.temp}°</div>
                </li>
                <li><img src="/Big/Moon cloud fast wind.png" alt="img"></li>
            </ul>
        </div>
        <div class="stext">

            <li>H:${values.main.temp_max}°</li>
            <li>L:${values.main.temp_min}°</li>

        </div>
        <div class="winfo">
            <ul>
                <li class="location">${values.name}, ${values.sys.country}</li>
                <li class="weather">${values.weather[0].main}</li>
            </ul>
        </div>
    </div>`.join('');
   
}



loading();