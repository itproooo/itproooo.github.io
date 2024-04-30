function appear(list,buttonshow,buttonhide){
    document.getElementById(list).style.display='block';
    document.getElementById(buttonshow).style.display='none';
    document.getElementById(buttonhide).style.display='inline';
}


function disappear(list,buttonshow,buttonhide){
    document.getElementById(list).style.display='none';
    document.getElementById(buttonshow).style.display='inline';
    document.getElementById(buttonhide).style.display='none';
}


function appearm1(frame,buttonshow,buttonhide){
    document.getElementById(frame).style.display='block';
    document.getElementById(buttonshow).style.display='none';
    document.getElementById(buttonhide).style.display='block';
}

function disappearm1(frame,buttonshow,buttonhide){
    document.getElementById(frame).style.display='none';
    document.getElementById(buttonshow).style.display='block';
    document.getElementById(buttonhide).style.display='none';
}

function changecolor(){
    document.getElementById('ztab').style.backgroundColor='white';
}

function unchangecolor(){
    document.getElementById('ztab').style.backgroundColor='transparent';
}

function checkcart(){
    var checkornot = document.getElementById('cartbox');
    if (checkornot.checked){
        document.getElementById('cart').style.color='green';
    }else {
        document.getElementById('cart').style.color='red';
    }

}

function buyalert() {
    var buy;
    if (confirm("Buy This Product?")) {
        alert("wallet is empty.");
        buy = "";
    } else {
        buy = "purchase cancelled!";
    }
    document.getElementById("buynownote").innerHTML = buy;
}

function monitorsubmit (){
    alert('your message is submitted');
}
function send() {
    const skfeedbackIn = document.getElementById("skfeedbackIn").value;
    
    console.log("Feedback:", skfeedbackIn);
    
    const skshow = document.getElementById("skshow");
    skshow.textContent = skfeedbackIn;
  }
  
  
function rowshow(){
    document.getElementById('rrshowp').hidden=false;
    
}
function rowhide(){
    document.getElementById('rrshowp').hidden=true;

}




let roww= true ;
function roshowhide(){
    if(roww){
    document.getElementById('rrpric2').style.display = 'block';
    roww=false;
    } else{
        document.getElementById('rrpric2').style.display = 'none';
        roww= true;
    }
}





function rowchangeimage(rx,image){
    if(rx==1){
        image.src = 'images/amd10-removebg-preview.png';
    }
    if(rx ==2){
        image.src = 'images/amd11-removebg-preview.png';
    }
    
}
function robutfunc() {
    alert("YOUR FEEDBACK IS SUBMITED . THANK YOU ");

}


function rohome() {
    alert("YOUR ARE GOING TO THE HOMEPAGE . THANK YOU ");

}
function rosup() {
    alert("YOUR ARE GOING TO THE SUPPORT PAGE  . THANK YOU ");

}
function rofeed() {
    alert("YOUR ARE GOING TO THE FEEDBACK PAGE . THANK YOU ");

}
function ropro() {
    alert("YOUR ARE GOING TO PROFILE PAGE . THANK YOU ");

}
function roimfun(rv){
    rv.style.color='brown';
 
 }
 function roimfun2(rv){
    rv.style.color='black';
     
 }
 function rowchangeimage2(rh,image){
    if(rh==1){
        image.src = 'images/amd2-removebg-preview.png';
    }
    if(rh ==2){
        image.src = 'images/amd3-removebg-preview.png';
    }}



    /*second code js;;;;;;*/


    function roh2() {
        alert("YOUR ARE GOING TO THE HOMEPAGE . THANK YOU ");
    
    }
    function ros2() {
        alert("YOUR ARE GOING TO THE SUPPORT PAGE  . THANK YOU ");
    
    }
    function rof2() {
        alert("YOUR ARE GOING TO THE FEEDBACK PAGE . THANK YOU ");
    
    }
    function rop2() {
        alert("YOUR ARE GOING TO PROFILE PAGE . THANK YOU ");
    
    }
    function rochangeimg1(rk,image){
        if(rk==1){
            image.src = 'images/intel9-removebg-preview.png';
        }
        if(rk==2){
            image.src = 'images/intel3-removebg-preview.png';
        }
    }
    function rochangeimg2(ro,image){
        if(ro==1){
            image.src = 'images/intel2-removebg-preview.png';
        }
        if(ro ==2){
            image.src = 'images/intel5-removebg-preview.png';
        }
    }
    let rowidaa = true ;
    function roprc(){
        if(rowidaa){
        document.getElementById('rowpric').style.display = 'block';
        rowidaa=false;
        } else{
            document.getElementById('rowpric').style.display = 'none';
            rowidaa = true;
        }
    }
    
    
    
    function deschange(rp){
       rp.style.color='brown';
    
    }
    function deschange2(rp){
       rp.style.color='black';
        
    }
    
    
    let rowdes44 = true;
    function roshowd(){
        if(rowdes44){
        document.getElementById('rowhole2').style.display = 'block';
        rowdes44=false;
        } else{
            document.getElementById('rowhole2').style.display = 'none';
            rowdes44= true;
        }
    }
    function roadd2() {
        alert("ADDED TO CART.");
    
    }
    function rowbuy() {
        alert("thank you for TRUSTING US enjoy buying");
       
    }
    function rohovchange(r){
        r.style.color='white';
     
     }
     function rohovchange2(r){
        r.style.color='brown';
         
     }
     function rochangeimg3(row,image){
        if(row==1){
            image.src = 'images/cpuu-removebg-preview.png';
        }
        if(row ==2){
            image.src = 'images/cput-removebg-preview.png';
        }
    }
    function rochangeimg4(rowi,image){
        if(rowi==1){
            image.src = 'images/cc-removebg-preview.png';
        }
        if(rowi ==2){
            image.src = 'images/cpuh-removebg-preview.png';
        }
    }
    function Buy_Alert() 
{
    var Buy_confirm ;
    if (confirm("are you sure you want to buy this storage ?"))
    {
        Buy_confirm = "You have bought this storage !";
    }
    else
    {
        Buy_confirm = "Keep looking and you may find another storage better"
    }
    document.getElementById("buy_confirm").innerHTML = Buy_confirm;
}

function Comment_alert()
{
    alert("Thank you for your Comment, have a nice day!")
}
function swconfirm()
{
    alert("Added to cart successfully!");
}


 let wael = true ;
    function swpurchase(){
        if(wael){
        document.getElementById('swprice').style.display = 'block';
        wael=false;
        } else{
            document.getElementById('swprice').style.display = 'none';
            wael = true;
        }
    }

    function Comm() {
        const swcomment = document.getElementById("swcomment").value;
        
        console.log("Comment:", swcomment);
        
        const swsend = document.getElementById("swsend");
        swsend.textContent = swcomment;}

