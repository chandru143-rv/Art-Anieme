var a1 = document.getElementById("first")
var a3 = document.getElementById("first_1")
var a4 = document.getElementById("first_2")
var a5 = document.getElementById("first_3")
var a6 = document.getElementById("first_4")
var a7 = document.getElementById("first_5")
var playvi = document.getElementsByClassName("card")

var a8 = document.getElementById("demo")


// video showing id

var popular = document.getElementById("popular")
var new_anieme = document.getElementById("new_v")

// new anieme
if (a1) {

  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((b) => {
      b.newone.map((b) => {
        a1.innerHTML += `<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;"
             id="${b.id}" data-bs-toggle="offcanvas" data-bs-target="#demo2" onclick=abc("${b.id}")>
              <img src="${b.image}" alt="img" height="300px" width="200px">
                <div class="one">
                    <p class="mt-2">${b.des}</p>
                    <button type="button" class="btn btn-dark"
                      data-bs-toggle="offcanvas" data-bs-target="#viewnemang" onclick=ane("${b.id}")>Add viewlist</button>
                </div>
          <div class="card-body">
            <marquee class="card-title">${b.name}</marquee>
            <p>Sub|Dub</p>
   
          </div>`
      })
    })
}
// new update video show

function abc(id) {

  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((b) => {
      b.newanieme_vid.map((b) => {
        if (id==b.id) {
          new_anieme.innerHTML += `
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
                                                     </div> `}


      })
    })
}



// new anieme list
let newaadd = []
var ne= document.getElementById("newvlist")
function ane(id) {
  console.log(id);

  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.newone.map((a) => {
        if (id==a.id && !newaadd.includes(a.id)) 
          {
          newaadd.push(a.id);
          ne.innerHTML += `
                   <div class="main_card" id="${a.name}">
                         <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;" id="${a.id}" onclick="myfun('${a.id}')" data-bs-toggle="offcanvas" data-bs-target="#static">
                               <img src="${a.image}" alt="img" height="300px" width="200px" id="${a.name}">
                             <div class="one">
                                 <p class="mt-2">${a.des}</p>
                                  <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#homeaddv" onclick="a('${a.id}')">Add viewlist</button>
                             </div>
                            <div class="card-body">
                                   <marquee class="card-title">${a.name}</marquee>
                                    <p>Sub|Dub</p>
                            </div> 
                         </div>
                        <button class="btn btn-dark remove ms-5" onclick="n('${a.name}')">Remove</button>
                    </div>

`;
        }
      })
    })
}

//  popular home mang function

function n(id) {
  const cardToRemove = document.getElementById(id); 

   
  if (cardToRemove) {
    cardToRemove.remove(); 
    newaadd.pop(cardToRemove) ;
  } else {
    console.error(`No element found with ID: ${id}`); 
  }
}

















if (a8) {

  fetch("../json files/popular.json")
    .then((f1) => f1.json())
    .then((b) => {
      b.new_anieme.map((b) => {
        a8.innerText = ``

        a8.innerHTML = function abc(value) {
          if (value == $(b.id)) {
            alert("one")
          }
        }
      }
      )
    })
}

// popular anieme  video
if (a3) {


  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.popular_2.map((a) => {
        a3.innerHTML += `<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none; id="${a.id}"
             onclick=populav("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#demo1"">
              <img src="${a.image}" alt="img" height="300px" width="200px">
                <div class="one">
                 <p class="mt-2">${a.des}</p>
               <button type="button" class="btn btn-dark"
                data-bs-toggle="offcanvas" data-bs-target="#viewpomangh" onclick=apon("${a.id}")>Add Viewlist</button>
                </div>
          <div class="card-body">
            <marquee class="card-title">${a.name}</marquee>
            <p>Sub|Dub</p>
   
          </div>`
      })
    })
}

// popular video canva


function populav(id) {

  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((b) => {
      b.oficial_pop.map((b) => {
        if (id==b.id) {
          popular.innerHTML += `
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
  </div> `}
      })
    })
}

// popoular anieme list
let popaadd = []
var popvlist = document.getElementById("popvlist")
function apon(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.popular_2.map((a) => {
        if (id==a.id && !popaadd.includes(a.id)) {
          popaadd.push(a.id);
          popvlist.innerHTML += `
          <div class="main_card" id="${a.name}">
 
          <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
              id="${a.id}" onclick=popmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#pcardmanga"">
                <img src="${a.image}" alt="img" height="300px" width="200px">
                  <div class="one">
                   <p class="mt-2">${a.des}</p>
                 <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#readpomangh" onclick=ag("${a.id}")>Add Readlist</button>
                  </div>
            <div class="card-body">
              <marquee class="card-title">${a.name}</marquee>
              <p>Sub|Dub</p>
     
            </div>
          <button class="btn btn-dark remove ms-5" onclick="pa('${a.name}')">Remove</button>
           </div>`
        }
      })
    })
}


function pa(id) {
  const cardToRemove = document.getElementById(id); 

   
  if (cardToRemove) {
    cardToRemove.remove(); 
    popaadd.pop(cardToRemove) ;
  } else {
    console.error(`No element found with ID: ${id}`); 
  }
}

// popular manga
var popmi = document.getElementById("pmove")
if (a4) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.popular_2.map((a) => {
        a4.innerHTML += `<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
            id="${a.id}" onclick=popmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#pcardmanga"">
              <img src="${a.image}" alt="img" height="300px" width="200px">
                <div class="one">
                 <p class="mt-2">${a.des}</p>
               <button type="button" class="btn btn-dark" 
               data-bs-toggle="offcanvas" data-bs-target="#readpomangh" onclick=aq("${a.id}")>Add Readlist</button>
                </div>
          <div class="card-body">
            <marquee class="card-title">${a.name}</marquee>
            <p>Sub|Dub</p>
   
          </div>`
      })
    })
}
// popular manga readed
function popmang(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {

      a.populr_manga.map((a) => {
        if (id==a.id) {
          popmi.innerHTML += `
     <p class="h3 mt-3">${a.name}</p>
     <img src="${a.img1}" alt="" height="100%" width="100%">
        <img src="${a.img2}"  alt="" height="100%" width="100%">
        <img src="${a.img3}"  alt="" height="100%" width="100%">
        <img src="${a.img4}"  alt="" height="100%" width="100%">`
        }
      })
    })
}
// popular manga readed addlist
let popman=[]
var poplist = document.getElementById("poplist")
function aq(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.popular_2.map((a) => {
        if (id==a.id && !popman.includes(a.id)) {
          popman.push(a.id);
          poplist.innerHTML += `
       <div class="main_card" id="${a.name}">
 
          <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
             id="${a.id}" onclick=popmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#pcardmanga"">
               <img src="${a.image}" alt="img" height="300px" width="200px">
                <div class="one">
                   <p class="mt-2">${a.des}</p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#readpomangh" onclick=ag("${a.id}")>Add Readlist</button>
                </div>
              <div class="card-body">
                <marquee class="card-title">${a.name}</marquee>
                <p>Sub|Dub</p>
   
              </div>
            </div>
              <button class="btn btn-dark remove ms-5" onclick="pm('${a.name}')">Remove</button>
            </div>
            `
        }
      })
    })
}

function pm(id) {
  const cardToRemove = document.getElementById(id); 

   
  if (cardToRemove) {
    cardToRemove.remove(); 
    popman.pop(cardToRemove) ;
  } else {
    console.error(`No element found with ID: ${id}`); 
  }
}


// comedy manga

if (a5) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.comedy.map((a) => {
        a5.innerHTML += `<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
            id="${a.id}" onclick=commang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#ccardmanga"">
              <img src="${a.src}" alt="img" height="300px" width="200px">
                <div class="one">
                 <p class="mt-2">${a.dec}</p>
               <button type="button" class="btn btn-dark"
               data-bs-toggle="offcanvas" data-bs-target="#readcomangh" onclick=at("${a.id}")>Add Readlist</button>
                </div>
          <div class="card-body">
            <marquee class="card-title">${a.name}</marquee>
            <p>Sub|Dub</p>
   
          </div>`
      })
    })
}


// comedy manga readed
var cmove = document.getElementById("cmove")
function commang(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {

      a.comedya_manga.map((a) => {
        if (id == a.id) {
               cmove.innerHTML += `
                       <p class="h3 mt-3">${a.name}</p>
                        <img src="${a.img1}" alt="" height="100%" width="100%">
                        <img src="${a.img2}"  alt="" height="100%" width="100%">
                        <img src="${a.img3}"  alt="" height="100%" width="100%">
                        <img src="${a.img4}"  alt="" height="100%" width="100%">`
        }
      })
    })
}
// comedy manga readed addlist
let commadd = []
var comlist = document.getElementById("comlist")
function at(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.comedy.map((a) => {
        if (id==a.id &&!commadd.includes(a.id)) {
          commadd.push(a.id);
          comlist.innerHTML += `
       <div class="main_card" id="${a.name}">

            <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
             id="${a.id}" onclick=popmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#pcardmanga"">
              <img src="${a.src}" alt="img" height="300px" width="200px">
                <div class="one">
                 <p class="mt-2">${a.dec}</p>
               <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#readpomangh" onclick=ag("${a.id}")>Add Readlist</button>
                </div>
             <div class="card-body">
                 <marquee class="card-title">${a.name}</marquee>
                 <p>Sub|Dub</p>
   
             </div>
           </div>
            <button class="btn btn-dark remove ms-5" onclick="comm('${a.name}')">Remove</button>
          </div>
             `
        }
      })
    })
}

function comm(id) {
  const cardToRemove = document.getElementById(id); 

   
  if (cardToRemove) {
    cardToRemove.remove(); 
    commadd.pop(cardToRemove) ;
  } else {
    console.error(`No element found with ID: ${id}`); 
  }
}







// new manga
if (a6) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.newone.map((a) => {
        a6.innerHTML += `<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;"
            id="${a.id}" onclick=newmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#ncardmanga"">
              <img src="${a.image}" alt="img" height="300px" width="200px">
                <div class="one">
                 <p class="mt-2">${a.des}</p>
               <button type="button" class="btn btn-dark"
               data-bs-toggle="offcanvas" data-bs-target="#readnemangh" onclick=anm("${a.id}")>Add Readlist</button>
                </div>
          <div class="card-body">
            <marquee class="card-title">${a.name}</marquee>
            <p>Sub|Dub</p>
   
          </div>`
      })
    })
}




// popular manga readed
var newman = document.getElementById("nmove")
function newmang(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.new_manga.map((a) => {
        if (id==a.id) {
          newman.innerHTML += `
        <p class="h3 mt-3">${a.name}</p>
     <img src="${a.img1}" alt="" height="100%" width="100%">
        <img src="${a.img2}"  alt="" height="100%" width="100%">
        <img src="${a.img3}"  alt="" height="100%" width="100%">
        <img src="${a.img4}"  alt="" height="100%" width="100%">`
        }
      })
    })
}
// popular manga readed addlist
let newmadd = []
var newmlist = document.getElementById("newlist")
function anm(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.newone.map((a) => {
        if (id==a.id && !newmadd.includes(a.id)) {
          newmadd.push(a.id);
          newmlist.innerHTML += `
        <div class="main_card" id="${a.name}">

           <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;"
                  id="${a.id}" onclick=newmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#ncardmanga"">
                  <img src="${a.image}" alt="img" height="300px" width="200px">
                <div class="one">
                    <p class="mt-2">${a.des}</p>
                  <button type="button" class="btn btn-dark"
                    data-bs-toggle="offcanvas" data-bs-target="#readnemangh" onclick=anm("${a.id}">Add Readlist</button>
                </div>
         
         
                <div class="card-body">
                 <marquee class="card-title">${a.name}</marquee>
                  <p>Sub|Dub</p>
   
                </div>
            </div>
                <button class="btn btn-dark remove ms-5" onclick="n('${a.name}')">Remove</button>
         </div>`
        }
      })
    })
}

function n(id) {
  const cardToRemove = document.getElementById(id); 

   
  if (cardToRemove) {
    cardToRemove.remove(); 
    newmadd.pop(cardToRemove) ;
  } else {
    console.error(`No element found with ID: ${id}`); 
  }
}
// recomanded manga
if (a7) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.recomanded.map((a) => {
        a7.innerHTML += `<div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
             id="${a.id}" onclick=recmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#rcardmanga"">
              <img src="${a.img}" alt="img" height="300px" width="200px">
                <div class="one">
                 <p class="mt-2">${a.des}</p>
               <button type="button" class="btn btn-dark"
               data-bs-toggle="offcanvas" data-bs-target="#readremangh" onclick=arm("${a.id}")>Add Readlist</button>
                </div>
          <div class="card-body">
            <marquee class="card-title">${a.name}</marquee>
            <p>Sub|Dub</p>
   
          </div>`
      })
    })

}


// recomanded manga readed
var rmove = document.getElementById("rmove")
function recmang(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {

      a.recommanded_manga.map((a) => {
        if (id==a.id) {
          rmove.innerHTML += `
             <p class="h3 mt-3">${a.name}</p>
                 <img src="${a.img1}" alt="" height="100%" width="100%">
           <img src="${a.img2}"  alt="" height="100%" width="100%">
            <img src="${a.img3}"  alt="" height="100%" width="100%">
             <img src="${a.img4}"  alt="" height="100%" width="100%">`
        }
      })
    })
}
// recomanded manga readed addlist
let recmadd = []
var reclist = document.getElementById("reclist")
function arm(id) {
  fetch("../json files/newone1.json")
    .then((f1) => f1.json())
    .then((a) => {
      a.recomanded.map((a) => {
        if (id==a.id && !recmadd.includes(a.id)) {
          recmadd.push(a.id);

          reclist.innerHTML += `
     <div class="main_card" id="${a.name}">
 
            <div class="mt-1 bg-none card" style="width:fit-content; background: none; border: none;
                id="${a.id}" onclick=popmang("${a.id}") data-bs-toggle="offcanvas" data-bs-target="#pcardmanga"">
                  <img src="${a.img}" alt="img" height="300px" width="200px">
                 <div class="one">
                   <p class="mt-2">${a.des}</p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#readpomangh" onclick=ag("${a.id}")>Add Readlist</button>
                 </div>
             <div class="card-body">
                <marquee class="card-title">${a.name}</marquee>
               <p>Sub|Dub</p>
   
              </div>
            </div>
      <button class="btn btn-dark remove ms-5" onclick="recm('${a.name}')">Remove</button>
      </div>
          `
        }
      })
    })
}

function recm(id) {
  const cardToRemove = document.getElementById(id); 

   
  if (cardToRemove) {
    cardToRemove.remove(); 
    recmadd.pop(cardToRemove) ;
  } else {
    console.error(`No element found with ID: ${id}`); 
  }
}

// loder js 
$('.all').hide();
$(window).on('load', function () {
  setTimeout(function () {
    $(".all").fadeIn();
    $(".inner_loader").hide();
  }, 3000)


})