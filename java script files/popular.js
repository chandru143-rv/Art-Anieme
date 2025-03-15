
var a2=document.getElementById("cot")
var a3=document.getElementById("cote")
var a4=document.getElementById("hom")
var a5=document.getElementById("mang")
var a6=document.getElementById("rewiew")
var a7=document.getElementById("popular_v")
var a8=document.getElementById("reco_v")
var a9=document.getElementById("appri")
var a10=document.getElementById("homepa")
var mangr=document.getElementById("move")
var hrlist=document.getElementById("readlist")
 

// recomanded anieem
  if(a2){
      fetch ("../json files/newone1.json")
      .then((f1)=>f1.json())
      .then((b)=>{
        b.recomanded.map((b)=>{
           a2.innerHTML +=`<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
           id="${b.id}" onclick=myfu("${b.id}") data-bs-toggle="offcanvas" data-bs-target="#demo3"">
             <img src="${b.img}" alt="img" height="300px" width="200px" id="${b.name}">
               <div class="one">
                <p class="mt-2">${b.des}</p>
              <button type="button" class="btn btn-dark" 
              data-bs-toggle="offcanvas" data-bs-target="#viewrecmangh" onclick=arec("${b.id}")>Add viewlist</button>
               </div>
         <div class="card-body">
           <marquee class="card-title">${b.name}</marquee>
           <p>Sub|Dub</p>
  
         </div>`
          })
         
      })}
        
// recomand video show

function myfu(id){
  fetch("../json files/newone1.json")
  .then((f1)=>f1.json())
  .then((b)=>{
   b.recomandedav.map((b)=>{
     if(id==b.id)
       {
     a8.innerHTML +=`
       <p class="h3 mt-3">${b.name}</p>
       <div class="row">
                 ${b.vid1}
       </div>
       <div class="des">
            <p>${b.des}</p>
        </div>
    <h4>Avaliable videos</h4>
   <div class="avl">
     <div class="ava">
            ${b.vid2}
          </div>
   <div class="ava">
           ${b.vid3}
           </div>
    <div class="ava">
         ${b.vid4}
    </div>
</div> `

     }
   })
  })
}

// recomanded anieme list
let recaadd = []
var recvlist=document.getElementById("recvlist")
  function arec(id){
    fetch ("../json files/newone1.json")
    .then((f1)=>f1.json())
    .then((a)=>{
      a.recomanded.map((a)=>{
        if(id==a.id && !recaadd.includes(a.id)){
          recaadd.push(a.id);
          recvlist.innerHTML+=`
          <div class="main_card" id="${a.id}">

            <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
                  id="${a.id}" onclick=popmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#demo3"">
                     <img src="${a.img}" alt="img" height="300px" width="200px">
                     <div class="one">
                             <p class="mt-2">${a.des}</p>
                               <button type="button" class="btn btn-dark" 
                                   data-bs-toggle="offcanvas" data-bs-target="#viewrecmangh" onclick=ag("${a.id}")>Add Readlist</button>
                       </div>
              <div class="card-body">
                 <marquee class="card-title">${a.name}</marquee>
                 <p>Sub|Dub</p>
              </div>
           </div>           
             
             
          <button class="btn btn-dark remove ms-5" onclick="ra('${a.id}')">Remove</button>

       </div>`
        }
      })
    })
  }


  
function ra(id) {
  const cardToRemove = document.getElementById(id); 

   
  if (cardToRemove) {
    cardToRemove.remove(); 
    recaadd.pop(cardToRemove) ;
  } else {
    console.error(`No element found with ID: ${id}`); 
  }
}

// home popoular anieme
      
    if(a4){
      fetch("../json files/newone1.json")
      .then((f1)=>f1.json())
      .then((b)=>{
          b.popular_1.map((b)=>{
            a4.innerHTML +=`<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none; id="${b.id}" onclick=myfun("${b.id}") data-bs-toggle="offcanvas" data-bs-target="#static"">
            <img src="${b.image}" alt="img" height="300px" width="200px" id="${b.name}">
              <div class="one">
               <p class="mt-2">${b.des}</p>
             <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#homeaddv" aria-controls="offcanvasWithBothOptions" onclick=a("${b.id}")>Add viewlist</button>
              </div>
        <div class="card-body">
          <marquee class="card-title">${b.name}</marquee>
          <p>Sub|Dub</p>
 
        </div>`
          })

      })}''
      // addlist
      let addid=[]
      function a(id){
       
        console.log(addid)
        
        fetch("../json files/newone1.json")
        .then((f1)=>f1.json())
        .then((b)=>{
         b.popular_1.map((b)=>{
           if(id==b.id && !addid.includes(b.id))
             {
              addid.push(b.id);
        a10.innerHTML += `
        <div class="main_card" id="${b.id}">
  <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;" id="${b.id}" onclick="myfun('${b.id}')" data-bs-toggle="offcanvas" data-bs-target="#static">
    <img src="${b.image}" alt="img" height="300px" width="200px" id="${b.name}">
    <div class="one">
      <p class="mt-2">${b.des}</p>
      <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#homeaddv" onclick="a('${b.id}')">Add viewlist</button>
    </div>
    <div class="card-body">
      <marquee class="card-title">${b.name}</marquee>
      <p>Sub|Dub</p>
    </div>
      </div>
    <button class="btn btn-dark remove ms-5" onclick="reach('${b.id}')">Remove</button>
    </div>

`;

 
           }
         })
        })
    }




function reach(id) {
  const cardToRemove = document.getElementById(id); 
  console.log(cardToRemove) // Get the card by the ID
  console.log("Removing element with ID:", id);
  
  if (cardToRemove) {
    cardToRemove.remove(); 
    addid.pop(cardToRemove) 
  } else {
    console.error(`No element found with ID: ${id}`);  // If no element is found, log an error
  }
}

// playing
   function myfun(id){
       fetch("../json files/newone1.json")
       .then((f1)=>f1.json())
       .then((b)=>{
        b.my_hero.map((b)=>{
          if(id==b.id)
            {
          a7.innerHTML +=`
                              <p class="h3 mt-3">${b.name}</p>
                                        <div class="row mt-3">
                                            ${b.vid1}
                                         </div>
                                       <div class="des">
                                            <p>${b.des}</p>
                                      </div>
                             <h4>Avaliable videos</h4>
                              <div class="avl">
                                 <div class="ava">
                                      ${b.vid2}
                                 </div>
                              <div class="ava">
                                    ${b.vid3}
                                  </div>
                            <div class="ava">
                                   ${b.vid4}
                                  </div>
                              </div> `

          }
        })
       })
   }



// manga card shows

      if(a5){
      fetch("../json files/newone1.json")
      .then((f1)=>f1.json())
      .then((b)=>{
          b.popular_manga.map((b)=>{
            a5.innerHTML +=`<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none; 
           id="${b.id}" onclick="mycar('${b.id}')" data-bs-toggle="offcanvas" data-bs-target="#cardmanga" >
            <img src="${b.image}" alt="img" height="300px" width="200px">
              <div class="one">
               <p class="mt-2">${b.des}</p>
      <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#readnemangh" onclick="ah('${b.id}')">Add viewlist</button>
              </div>
        <div class="card-body">
          <marquee class="card-title">${b.name}</marquee>
          <p>Sub|Dub</p>
 
        </div>`
          })

      })
    }

    function mycar(id){
      fetch("../json files/newone1.json")
      .then((f1)=>f1.json())
      .then((b)=>{
       b.home_manga.map((b)=>{
         if(id==b.id)
           {
         mangr.innerHTML +=`
                           <p class="mt-5 ms-2 h3">${b.name}</p>
                           <img src="${b.img1}" alt="" height="100%" width="100%">
                             <img src="${b.img2}"  alt="" height="100%" width="100%">
                              <img src="${b.img3}"  alt="" height="100%" width="100%">
                             <img src="${b.img4}"  alt="" height="100%" width="100%">
      `
           
         }
       })
      })
  }
// add home manga list
let addhome_manga=[]
  function ah(id){
    fetch("../json files/newone1.json")
    .then((f1)=>f1.json())
    .then((b)=>{
     b.popular_manga.map((b)=>{
       if(id==b.id && !addhome_manga.includes(b.id))
         {
          addhome_manga.push(b.id);   

          hrlist.innerHTML +=`
          <div class="main_card" id="${b.id}">
            <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none; 
                id="${b.id}" onclick=mycar("${b.id}") data-bs-toggle="offcanvas" data-bs-target="#cardmanga" >
                   <img src="${b.image}" alt="img" height="300px" width="200px">
                   <div class="one">
                     <p class="mt-2">${b.des}</p>
                     <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#readmangh" onclick=ah("${b.id}")  >Add Readlist</button>
                   </div>
               <div class="card-body">
                  <marquee class="card-title">${b.name}</marquee>
                  <p>Sub|Dub</p>
               </div>
            </div>
              <button class="btn btn-dark remove ms-5" onclick="mangaremove('${b.id}')">Remove</button>

           </div> `

       }
     })
    })
}
//  removin home mang function
function mangaremove(id) {
  const cardToRemove = document.getElementById(id);  // Get the card by the ID
  console.log("Removing element with ID:", id);
  
  if (cardToRemove) {
    cardToRemove.remove(); 
    addhome_manga.pop(cardToRemove) 
  } else {
    console.error(`No element found with ID: ${id}`);  // If no element is found, log an error
  }
}


// anieme review
if(a6){
      fetch("../json files/newone1.json")
      .then((f1)=>f1.json())
       .then((b)=>{
        b.Anieme_revies.map((b)=>{
          a6.innerHTML +=` <div class="row honor mt-3">
          <div class="col-5 col-lg-2 col-md-2 ">
            <img src="${b.img}" alt="" height="100%" width="100%">
          </div>
          <div class="col-12 col-lg-9 col-md-9">
             <div class="h5">${b.name}</div>
             <p>${b.reviw}</p>
          </div>
   </div>`
        })
       })}

// manga review


var mangare=document.getElementById("maniew")


if(mangare){
  fetch("../json files/newone1.json")
  .then((f1)=>f1.json())
   .then((b)=>{
    b.manga_review.map((b)=>{
      mangare.innerHTML +=` <div class="row honor mt-3">
      <div class="col-5 col-lg-2 col-md-2 ">
        <img src="${b.img}" alt="" height="100%" width="100%">
      </div>
      <div class="col-12 col-lg-9 col-md-9">
         <div class="h5">${b.name}</div>
         <p>${b.reviw}</p>
      </div>
</div>`
    })
   })}
   
      //comedy$action  anieme
       if(a3){
      fetch ("../json files/newone1.json")
      .then((f1)=>f1.json())
      .then((b)=>{
        b.comedy.map((b)=>{
           a3.innerHTML +=`<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;id="${b.id}" onclick=tank("${b.id}") data-bs-toggle="offcanvas" data-bs-target="#demo4"">
             <img src="${b.src}" alt="img" height="300px" width="200px" id="imgi">
               <div class="one">
                <p class="mt-2">${b.dec}</p>
              <button type="button" class="btn btn-dark " id="button_add"
              data-bs-toggle="offcanvas" data-bs-target="#viewcomang" onclick=acom("${b.id}")>Add viewlist</button>
               </div>
         <div class="card-body">
           <marquee class="card-title" id="card-title">${b.name}</marquee>
           <p>Sub|Dub</p>
  
         </div>`
        
          })
    
         
        })}

// comedy&action vi
      
function tank(id){
  fetch("../json files/newone1.json")
  .then((f1)=>f1.json())
  .then((b)=>{
   b.comedyav.map((b)=>{
     if(id==b.id)
       {
     a9.innerHTML +=`
     <p class="h3 mt-3">${b.name}</p>
       <div class="row">
                 ${b.vid1}
       </div>
       <div class="des">
            <p>${b.des}</p>
        </div>
    <h4>Avaliable videos</h4>
   <div class="avl">
     <div class="ava">
            ${b.vid2}
          </div>
   <div class="ava">
           ${b.vid3}
           </div>
    <div class="ava">
         ${b.vid4}
    </div>
</div> `

     }
   })
  })
}

// comedy anieme list
let coaadd=[]
var comevlist=document.getElementById("comevlist")
  function acom(id){
    fetch ("../json files/newone1.json")
    .then((f1)=>f1.json())
    .then((a)=>{
      a.comedy.map((a)=>{
        if(id==a.id && !coaadd.includes(a.id)){
          coaadd.push(a.id);
          comevlist.innerHTML+=`
          <div class="main_card" id="${a.id}"> 
            <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
              id="${a.id}" onclick=popmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#demo3"">
                <img src="${a.src}" alt="img" height="300px" width="200px">
                  <div class="one">
                      <p class="mt-2">${a.dec}</p>
                       <button type="button" class="btn btn-dark" 
                      data-bs-toggle="offcanvas" data-bs-target="#viewrecmangh" onclick=ag("${a.id}")>Add Readlist</button>
                 </div>
                 <div class="card-body">
                     <marquee class="card-title">${a.name}</marquee>
                     <p>Sub|Dub</p>
                  </div>
                </div>
        <button class="btn btn-dark remove ms-5" onclick="coa('${a.id}')">Remove</button>

             </div> `
        }
      })
    })
  }

  function coa(id) {
    const cardToRemove = document.getElementById(id); 
  
     
    if (cardToRemove) {
      cardToRemove.remove(); 
      coaadd.pop(cardToRemove) ;
    } else {
      console.error(`No element found with ID: ${id}`); 
    }
  }


  // login pages
        
         
  function validation(){
      fetch("../json files/newone1.json")
      .then((f1)=>f1.json())
      .then((b)=>{
          b.login.map((b)=>{
              var usn=document.getElementById("username").value;
             var pwd=document.getElementById("Password").value;
             
            if(usn==b.username && pwd==b.password){
               location="./html files/home.html"
            }
            else{
              alert("wrong password or username")
            }

          })

      })
   }


   function returnsig(){
      location="./index.html"
   }

// sign up
function str(){
  var user=document.getElementById("username").value
  var pwd=document.getElementById("Password").value
  var age=document.getElementById("age").value
 const customer=[]
 customer.push(user,pwd,age)
 console.log(customer)
    location="./html files/home.html"
}
function goilog() {
     location="./html files/login.html"
}


// looder
$('.all').hide();
  $(window).on('load',function(){
   setTimeout(function(){
       $(".all").fadeIn();
      $(".inner_loader").hide();    
    },3000)


  })

