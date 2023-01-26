const wrapper=document.querySelector(".slidewrapper");
const menuitems=document.querySelectorAll(".menuitem")

const product=[
    {
        id:1,
        title:"AIR FORCE",
        price:9599,
        colors:[
            {
                code:"black",
                img:"images/air.png",
            },
            {
                code:"darkblue",
                img:"images/air2.png",
            },
        ],
    },
    {
        id:2,
        title:"BLAZER",
        price:1199,
        colors:[
            {
                code:"lightgray",
                img:"images/blazer.png",
            },
            {
                code:"green",
                img:"images/blazer2.png",
            },
        ],
    },
    {
        id:3,
        title:"JORDAN",
        price:1399,
        colors:[
            {
                code:"lightgray",
                img:"images/jordan.png",
            },
            {
                code:"green",
                img:"images/jordan2.png",
            },
        ],
    },
    {
        id:4,
        title:"HIPPIE",
        price:7999,
        colors:[
            {
                code:"gray",
                img:"images/hippie.png",
            },
            {
                code:"black",
                img:"images/hippie2.png",
            },
        ],
    },
    {
        id:5,
        title:"CRATER",
        price:9199,
        colors:[
            {
                code:"black",
                img:"images/crater.png",
            },
            {
                code:"lightgray",
                img:"images/crater2.png",
            },
        ],
    },


        ];

let  choosenproduct=product[0];
const currentproductimg=document.querySelector(".productimg");
const currentproducttitle=document.querySelector(".producttitle");
const currentproductprice=document.querySelector(".productprice");
const currentproductcolors=document.querySelectorAll(".color");
const currentproductsizes=document.querySelectorAll(".size");




menuitems.forEach((item , index)=>{
    item.addEventListener("click", ()=>{
        //change curent slide
        wrapper.style.transform=`translateX(${-100*index}vw)`;

        //change the choosen product
        choosenproduct=product[index];

        //change text of current product
        currentproducttitle.textContent=choosenproduct.title;
        currentproductprice.textContent="₹"+choosenproduct.price;
        currentproductimg.src=choosenproduct.colors[0].img;

        //assign new colors

        currentproductcolors.forEach((c,index)=>{
            c.style.backgroundColor=choosenproduct.colors[index].code;
        });
    });
});
currentproductcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentproductimg.src=choosenproduct.colors[index].img;
    });
});
currentproductsizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentproductsizes.forEach((size) => {
        
        size.style.backgroundColor = "white";
      size.style.color = "black";
      });
      size.style.backgroundColor = "black";
        size.style.color = "white";
      
    });
  });

const productbutton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productbutton.addEventListener("click",()=>{
   payment.style.display="flex";

})

close.addEventListener("click",()=>{
    payment.style.display="none";

})


