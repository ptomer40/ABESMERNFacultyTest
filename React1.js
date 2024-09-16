///-------------------JS
/*
let parent=document.getElementById("parent");
let h4=document.createElement("h4");
h4.textContent="Shopping List";
parent.appendChild(h4);
let ul=document.createElement("ul");
let li1=document.createElement("li");
let li2=document.createElement("li");

ul.appendChild(li1).textContent="Fruits";
ul.appendChild(li2).textContent="Vegetable";

parent.appendChild(ul);
*/

 const parent = document.getElementById("parent");
 const root = ReactDOM.createRoot(parent);
       
//         const li1=React.createElement("li",{},"Vegetable");
//         const li2=React.createElement("li",{},"Fruits");
//        const list=React.createElement("ul",{},[li1,li2]);


//        root.render(list);
// console.log(list);
// let li1=React.createElement("li",{},"Vegetable");

// let list=React.createElement("ul",{},li1);
// root.render(list);

//  let li1=React.createElement("li",{},"Vegetable");
//  let li2=React.createElement("li",{},"Fruits");
//  let li3=React.createElement("li",{},"Vegetable");
//  let li4=React.createElement("li",{},"Fruits");
//  let li5=React.createElement("li",{},"Vegetable");
//  let li6=React.createElement("li",{},"Fruits");

//  let list=React.createElement("ul",{},li1,li2,li3,li4,li5,li6);
//  root.render(list);  // check object

//more elements

// let li1=React.createElement("li",{},"Vegetable");
// let li2=React.createElement("li",{},"Fruits");
// let list=React.createElement("ul",{},li1,li2);
// let heading=React.createElement("h4",{},"Shopping Lit");
// let container=React.createElement("div",{},[list,heading]);
// root.render(container);
// root.render(list);
// console.log(li1);

//JSX
// let heading=React.createElement("h4",{},"Shopping List");
// const head=<h4>Hello React</h4>
// const li1=<li>Fruits</li>
// const li2=<li>Vegetable</li>

// const ul=(<ul>{li1}{li2}</ul>);
// const container=(
//     <div>
// {
//    head
// }
// {
//     ul
// }

//     </div>
// );
// root.render(container);

/*
let container=(
    <div>
        <h4 style={{color:"red"}}>Shopping</h4>
<ul>
    <li>Vegetable</li>
    <li>Fruits</li>
</ul>
</div>

)
console.log(container);
root.render(container);
*/


const arr=[
{id:200,name:"Amit",city:"Gzb"},
{id:201,name:"Ram",city:"Noida"},
{id:202,name:"Shyam",city:"Noida"}

]

let msg="";

arr.map(x=>{
   if(x.name=="Ram"){
    msg=true;
   }
   
})
if(msg){
    console.log("Ram is there in list");
}
else{
    console.log("No Ram available");
}