var playingNow=[];
var popular=[];
var topRated=[];
var trending=[];
var upComming=[];
$(".icon-center").click(function(){
    if($(".container-nav-fixed").css("left")=="0px"){
        $(".container-nav-fixed").css({"left":"-300px","transition":"all 0.5s"});
        $(".nav-fixed").css({"left":"0px","transition":"all 0.5s"});
    }
    else{
        $(".container-nav-fixed").css({"left":"0px","transition":"all 0.5s"})
        $(".nav-fixed").css({"left":"250px","transition":"all 0.5s"});

    }
})
Data1();

function Data1(){
    var httpRequest1=new XMLHttpRequest;
    httpRequest1.open("Get","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
    httpRequest1.send();
    httpRequest1.addEventListener('readystatechange',function(){
        if (httpRequest1.readyState == 4 && httpRequest1.status == 200) {
            playingNow = JSON.parse(httpRequest1.response).results;
            console.log(playingNow);
            displayDatat1()
        }
    })
    function displayDatat1(){
        var cartona="";
        for(var i=0;i<playingNow.length;i++)
        {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${playingNow[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${playingNow[i].original_title}</h1>
            <p>${playingNow[i].overview}</p>
            <h2>Rate:${playingNow[i].vote_average}</h2>
            <h2>${playingNow[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
    
    
}
function Data2(){
  
    var httpRequest2=new XMLHttpRequest;
    httpRequest2.open("Get","https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
    httpRequest2.send();
    httpRequest2.addEventListener('readystatechange',function(){
        if (httpRequest2.readyState == 4 && httpRequest2.status == 200) {
            popular = JSON.parse(httpRequest2.response).results;
            console.log(popular);
            displayDatat2()
        }     
    })
    function displayDatat2(){
        var cartona="";
        for(var i=0;i<popular.length;i++)
        {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${popular[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${popular[i].original_title}</h1>
            <p>${popular[i].overview}</p>
            <h2>Rate:${popular[i].vote_average}</h2>
            <h2>${popular[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
}
function Data3(){
   
    var httpRequest3=new XMLHttpRequest;
    httpRequest3.open("Get","https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&language=en-US&page=1");
    httpRequest3.send();
    httpRequest3.addEventListener('readystatechange',function(){
        if (httpRequest3.readyState == 4 && httpRequest3.status == 200) {
            topRated = JSON.parse(httpRequest3.response).results;
            console.log(topRated);
            displayDatat3()
        }     
    })
    function displayDatat3(){
        var cartona="";
        for(var i=0;i<topRated.length;i++)
        {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${topRated[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${topRated[i].original_title}</h1>
            <p>${topRated[i].overview}</p>
            <h2>Rate:${topRated[i].vote_average}</h2>
            <h2>${topRated[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
}
function Data4(){
    
    var httpRequest4=new XMLHttpRequest;
    httpRequest4.open("Get","https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
    httpRequest4.send();
    httpRequest4.addEventListener('readystatechange',function(){
        if (httpRequest4.readyState == 4 && httpRequest4.status == 200) {
            trending = JSON.parse(httpRequest4.response).results;
            console.log(trending);
            displayDatat4()
        }     
    })
    function displayDatat4(){
        var cartona="";
        for(var i=0;i<trending.length;i++)
        {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${trending[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${trending[i].original_title}</h1>
            <p>${trending[i].overview}</p>
            <h2>Rate:${trending[i].vote_average}</h2>
            <h2>${trending[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
}
function Data5(){
   
    var httpRequest5=new XMLHttpRequest;
    httpRequest5.open("Get","https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&language=en-US&page=1");
    httpRequest5.send();
    httpRequest5.addEventListener('readystatechange',function(){
        if (httpRequest5.readyState == 4 && httpRequest5.status == 200) {
            upComming = JSON.parse(httpRequest5.response).results;
            console.log(upComming);
            displayDatat5()
        }     
    })
    function displayDatat5(){
        var cartona="";
        for(var i=0;i<upComming.length;i++)
        {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${upComming[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${upComming[i].original_title}</h1>
            <p>${upComming[i].overview}</p>
            <h2>Rate:${upComming[i].vote_average}</h2>
            <h2>${upComming[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
}
var nameInput=document.getElementById("nameInput");
var emailInput=document.getElementById("emailInput");
var phoneInput=document.getElementById("phoneInput");
var ageInput=document.getElementById("ageInput");
var passwordInput=document.getElementById("passwordInput");
var repasswordInput=document.getElementById("repasswordInput");
var alert1=document.getElementById("alert-1");
var alert2=document.getElementById("alert-2");
var alert3=document.getElementById("alert-3");
var alert4=document.getElementById("alert-4");
var alert5=document.getElementById("alert-5");
var alert6=document.getElementById("alert-6");
var submit=document.getElementById("submit");
nameInput.addEventListener("keyup",function(){
    var rejexname=/[A-Za-z]{6}/;
    if(!rejexname.test(nameInput.value))
    {
        alert1.style.display="block";
        return false;
    }
    else{
        alert1.style.display="none";
        return true;
    }
})
emailInput.addEventListener("keyup",function(){

 var rejexemail=/[A-Za-z0-9]{5}@(yahoo|gmail).com$/;
    if(!rejexemail.test(emailInput.value))
    {
        alert2.style.display="block";
        return false;
    }
    else{
        alert2.style.display="none";
        return true;
    }
}) 
phoneInput.addEventListener("keyup",function(){
    var rejexphone=/^[0-9]{11}$/;
    if(!rejexphone.test(phoneInput.value))
    {
        alert3.style.display="block";
        return false;
    }
    else{
        alert3.style.display="none";
        return true;
    }
})
ageInput.addEventListener("keyup",function(){
    var rejexage=/^[0-9]{2}$/;
    if(!rejexage.test(ageInput.value))
    {
        alert4.style.display="block";
        return false;
    }
    else{
        alert4.style.display="none";
        return true;
    }
})
passwordInput.addEventListener("keyup",function(){
    var rejexpassword=/^[a-zA-z]{8}[0-9]{2}$/;
    if(!rejexpassword.test(passwordInput.value))
    {
        alert5.style.display="block";
        return false;
    }
    else{
        alert5.style.display="none";
        return true;
    }
})
repasswordInput.addEventListener("keyup",function(){
    var rejexrepass=/^[a-zA-z]{8}[0-9]{2}$/;
    if(!rejexrepass.test(repasswordInput.value))
    {
        alert6.style.display="block";
        return false;
    }
    else{
        alert6.style.display="none";
        return true;
    }
})
function submitButton(){
    if(nameInput.value!=null && emailInput.value!=null && phoneInput.value!=null && ageInput.value!=null && passwordInput.value!=null  
    && repasswordInput.value!=null)
    {
      submit.removeAttribute("disabled");
    }
   else{
    submit.removeAttribute("disabled");
   }
}
submitButton();

function getMovies(trem){
    var cartona="";
    for (var i = 0; i < playingNow.length; i++) {
        if(playingNow[i].original_title.toLowerCase().includes(trem.toLowerCase())
        ) {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${playingNow[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${playingNow[i].original_title}</h1>
            <p>${playingNow[i].overview}</p>
            <h2>Rate:${playingNow[i].vote_average}</h2>
            <h2>${playingNow[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
    for (var i = 0; i < popular.length; i++) {
        if(popular[i].original_title.toLowerCase().includes(trem.toLowerCase())
        ) {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${popular[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${popular[i].original_title}</h1>
            <p>${popular[i].overview}</p>
            <h2>Rate:${popular[i].vote_average}</h2>
            <h2>${popular[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
    for (var i = 0; i < topRated.length; i++) {
        if(topRated[i].original_title.toLowerCase().includes(trem.toLowerCase())
        ) {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${topRated[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${topRated[i].original_title}</h1>
            <p>${topRated[i].overview}</p>
            <h2>Rate:${topRated[i].vote_average}</h2>
            <h2>${topRated[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
    for (var i = 0; i < upComming.length; i++) {
        if(upComming[i].original_title.toLowerCase().includes(trem.toLowerCase())
        ) {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${upComming[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${upComming[i].original_title}</h1>
            <p>${upComming[i].overview}</p>
            <h2>Rate:${upComming[i].vote_average}</h2>
            <h2>${upComming[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
    for (var i = 0; i < trending.length; i++) {
        if(trending[i].original_title.toLowerCase().includes(trem.toLowerCase())
        ) {
            cartona+=`
            <div class="col-md-6 col-lg-4 my-3" id="cont">
            <div class="caption">
            <img src="https://image.tmdb.org/t/p/w500/${trending[i].poster_path}" class="w-100">
            <div class="layer-1 d-flex justify-content-center align-items-center">   
            <div class="cont">
            <h1>${trending[i].original_title}</h1>
            <p>${trending[i].overview}</p>
            <h2>Rate:${trending[i].vote_average}</h2>
            <h2>${trending[i].release_date}</h2>  
            </div>      
            </div>
            </div>
            </div>
            
            `
        }
        document.getElementById("cont").innerHTML=cartona;
    }
}
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();