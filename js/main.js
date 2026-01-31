

// const inTitle=document.querySelector("#input-title")
// const inPrice=document.querySelector("#input-price")
// const inDescription=document.querySelector("#input-description")
// const btnCancel=document.querySelector("#button-cancel")


// const onClickCancel=(evt)=>{
//     ///Don't navigate to a different page///
//     evt.preventDefault()
//     inTitle.value=""
//     inPrice.value=0;
//     inDescription.value=""
// }

// btnCancel.addEventListener("click",onClickCancel)

import Listings from "../Listings";

// function mainModule(name="Main Module"){

//     const me={};

//     console.log(`${name} loaded`);
    
//     let count=0;

//     function incre(){
//         count +=1;
//         return count;
//     }
//     me.incre=incre;
//     me.name=name;
//     return me;
// }

// const main= mainModule();
// const secondary= mainModule("Secondary Module");


// console.log("main--->",main);
// console.log("main incre--->",main.incre());
// console.log("main incre--->",main.incre());

// console.log("secondary incre--->",secondary.incre());
// console.log("main incre--->",main.incre());



function mainModule(){

    const me={};

    me.listings=Listings();
    return me;
}

mainModule()