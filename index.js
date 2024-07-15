/*
let wrapper = document.querySelector(".wrapper");

let skills = [ 'Html' , 'CSS' , 'JavaScript' , 'React JS' ,'Python','MongoDB', 'My SQL','Data Analyst'];
let skills_percentage = [ '95%' , '75%' , '75%' , '70%' ,'90%','80%','80%', '75%'];

let html = '';

for(let i=0; i<skills.length; i++){
    html+=`
            <div class="skill-info">

                <div class="skill-name">
    
                    <div class="skill-name for-theme" style="color : linear-gradient(red, yellow);">${skills[i]}</div>
                    <div class="skill-percentage for-theme">${skills_percentage[i]}</div>
    
                </div>
    
                <div class="skillbar-theme" style="background-color: white; border-radius: 5px;">
    
                    <div class="skill-bar" style="width : ${skills_percentage[i]}; height:5px;border = 1px solid white;border-radius : 5px;background-color:orange; ">

                    </div>
    
                </div>
                
                
    
            </div>
    
    `
}
wrapper.innerHTML = html;
*/

// for dark mode , light mode start..
const themeBtn = document.querySelector('.theme-btn');
const themeImage = document.querySelector('.theme-img');

themeBtn.addEventListener('click' , ()=>{
    console.log("clicked on image");
    console.log(themeImage.alt)
    themeImage.src = themeImage.alt == "moon-fill.png" ? "images/theme-mode.jpeg" : "images/theme-mode.jpeg";
    themeImage.alt = themeImage.alt == "moon-fill.png" ? "moon-line.png" : "moon-fill.png";
    const nav_link = document.querySelectorAll(".nav_link");
    if(themeImage.alt == "moon-fill.png"){
        document.body.style.backgroundColor = "#f2f2f2";
        document.querySelector(".i-m").style.color = "orange";
        document.querySelector(".name").style.color = "black";
        document.querySelector(".K").style.color = "black";
        document.querySelector(".theme-btn").style.backgroundColor = "white";
        document.querySelector(".about__subtitle").style.color = "black";
        document.querySelector(".about__text").style.color = "black";

        const skillElem =  document.querySelectorAll(".skillbar-theme")

        for(let s=0; s<skillElem.length; s++){
            skillElem[s].style.backgroundColor = "grey";
        }
        // document.getElementsByClassName(".for-theme").style.color = "black";
        const elements = document.getElementsByClassName('for-theme'); // Selects all elements with class name 'my-class'
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "black";
        }
        // document.querySelector(".projez").style.border = "3px solid blue";
        // const elem = document.getElementsByClassName('projez'); 
        // console.log(elem);
        // for (let j = 0; j < elem.length; j++) {
        //     elem[j].style.border = "3px solid lightblue";
        // }
        
        for (let j = 0; j < nav_link.length; j++) {
            nav_link[j].style.color = "black";
            

        }
    }
    else{
        document.body.style.backgroundColor = "black";
        document.querySelector(".theme-btn").style.backgroundColor = "black";
        document.querySelector(".i-m").style.color = "orange";
        document.querySelector(".name").style.color = "white";
        document.querySelector(".K").style.color = "lightblue";
        
        for (let j = 0; j < nav_link.length; j++) {
            nav_link[j].style.color = "white";
        }

        const skillElem =  document.querySelectorAll(".skillbar-theme")
        for(let s=0; s<skillElem.length; s++){
            skillElem[s].style.backgroundColor = "white";
        }

        document.querySelector(".about__subtitle").style.color = "white";
        // document.getElementsByClassName(".for-theme").style.color = "white";

        const elements = document.getElementsByClassName('for-theme'); // Selects all elements with class name 'my-class'
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "white";
        }
        document.querySelector(".about__text").style.color = "white";

        // const elem = document.getElementsByClassName('projez'); 
        // console.log(elem);
        // for (let j = 0; j < elem.length; j++) {
        //     elem[j].style.border = "3px solid greenyellow";
        // }
    }
})

// end of dark , light mode




const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".skill-info", {
    ...scrollRevealOption,
    delay : 100,
    interval : 250,
});



ScrollReveal().reveal(".projez", {
    ...scrollRevealOption,
    delay : 300,
    interval : 500,
});

ScrollReveal().reveal(".linkedin-img", {
    ...scrollRevealOption,
    distance : "50px",
    delay : 150,
    origin : "left",
    
});

ScrollReveal().reveal(".github-img", {
    ...scrollRevealOption,
    delay : 200,
    distance : "50px",
    origin : "right",
});
