// Show Nav

let header = document.querySelector("header");
let allLinks = document.querySelectorAll("a");
let strongActivePage = document.querySelector("main h1 strong");

show = () => {
    header.classList.toggle('show');
}

// onload 

onload = () => {

    let currentHref = location.href;
    
    allLinks.forEach(link => {
        if(currentHref === link.href){
            link.parentElement.classList.add('active');
            let href = currentHref.split('/');
            let lenghtHref = href.length;
            let linkActive = href[lenghtHref -1].split('.');
            let name = linkActive[0];
            
            if(name === "index") strongActivePage.innerHTML = "Home";
            else strongActivePage.innerHTML = name;
            
        }
    })

}