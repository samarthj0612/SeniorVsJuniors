var play = document.querySelector("#play");
var play1 = document.querySelector("#play1");
var play2 = document.querySelector("#play2");
var body = document.querySelector("#right");
var flag = 0;
play.addEventListener("click", function(){
    if(flag === 0)
    {
        body.style.backgroundImage = "url(https://www.freepnglogos.com/uploads/lamp-png/lamp-png-transparent-images-5.png";
        flag++;
    }
    else{
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80";
        flag = 0;
    }
})
play1.addEventListener("click", function(){
    if(flag === 0)
    {
        body.style.backgroundImage = "url(https://www.freepnglogos.com/uploads/lamp-png/lamp-png-transparent-images-5.png";
        flag++;
    }
    else{
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80";
        flag = 0;   
    }
})
play2.addEventListener("click", function(){
    if(flag === 0)
    {
        body.style.backgroundImage = "url(https://www.freepnglogos.com/uploads/lamp-png/lamp-png-transparent-images-5.png";
        flag++;
    }
    else{
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80";
        flag = 0;   
    }
})