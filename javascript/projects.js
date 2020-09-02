var i = 0;
function read(){
    
    if(!i){
        document.querySelector("#projects .main .container-projects .project-item .details-projects ul .more").style.display = "inline";    
        document.querySelector("#projects .main .container-projects .project-item .details-projects #btn-1").innerHTML = "Read Less";
        document.querySelector("#projects .main .container-projects .project-item .details-projects #btn-1").style.background="Red"
        i=1;
    }
    else{
        document.querySelector("#projects .main .container-projects .project-item .details-projects ul .more").style.display = "none";    
        document.querySelector("#projects .main .container-projects .project-item .details-projects #btn-1").innerHTML = "Read More";
        document.querySelector("#projects .main .container-projects .project-item .details-projects #btn-1").style.background="#007bb6"
        i=0;
    }
}

var k=0;
function readsecond(){
    
    if(!k){
        document.querySelector("#projects .main .container-projects .project-item .details-projects ul .more-2").style.display = "inline";    
        document.querySelector("#projects .main .container-projects .project-item .details-projects #btn-2").innerHTML = "Read Less";
        document.querySelector("#projects .main .container-projects .project-item .details-projects #btn-2").style.background="Red"
        k=1;
    }
    else{
        document.querySelector("#projects .main .container-projects .project-item .details-projects ul .more-2").style.display = "none";    
        document.querySelector("#projects .main .container-projects .project-item .details-projects #btn-2").innerHTML = "Read More";
        document.querySelector("#projects .main .container-projects .project-item .details-projects #btn-2").style.background="#007bb6"
        k=0;
    }
}

