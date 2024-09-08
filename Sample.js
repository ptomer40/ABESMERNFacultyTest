
         const div=document.createElement("Div");
         const span=document.createElement("span");
         

         
        const h1=document.createElement("h1");
        const h2=document.createElement("h2");
        
       h1.innerText="Hello";//can't pass html element
       h1.style.color="red";
       
       h2.innerHTML="<p>New HTML content with <a href='#'>a link</a></p>";
       h2.style.backgroundColor="cyan";
       span.appendChild(h2);

    div.appendChild(h1);
    console.log(div);
    document.body.appendChild(span);
    document.body.appendChild(div);
        
       