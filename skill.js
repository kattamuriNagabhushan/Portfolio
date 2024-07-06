let dupWrapper = document.querySelector(".dup-wrapper");

let dupSkills = [ 'Html' , 'CSS' , 'JavaScript' , 'React JS' ,'Java','Python','MongoDB', 'My SQL','Express Js'];
let dup_skills_percentage = [ '95%' , '75%' , '75%' , '70%' ,'75%','90%','80%','80%', '75%'];
let img_arr = ['html.jpeg' , 'css3.jpeg' , 'js-new.jpeg','react.jpeg','java.jpeg','python.jpeg','mongodb.jpeg','mysql.jpeg','expressjs.jpeg']

let dup_html = '';

for(let i=0; i<dupSkills.length; i++){
    dup_html+=`
            
            <div class="skill-card">

                <div class="skill-card-img">
                    <img width="100px" src="images/${img_arr[i]}" />
                </div>

                <div class=" dup-skill-info">

                    <div class="skill-name">
        
                        <div class="skill-name  for-theme" style="color : linear-gradient(red, yellow);">${dupSkills[i]}</div>
                        <div class="skill-percentage for-theme">${dup_skills_percentage[i]}</div>
        
                    </div>
        
                    <div class="skillbar-theme" style="background-color: white; border-radius: 5px;">
        
                        <div class="skill-bar" style="width : ${dup_skills_percentage[i]}; height:5px;border = 1px solid white;border-radius : 5px;background-color:orange; ">

                        </div>
        
                    </div>
                    
                    
        
                </div>
            </div>

            
    
    `
}
dupWrapper.innerHTML = dup_html;





// ScrollReveal().reveal(".dup-skill-info", {
//     ...scrollRevealOption,
//     delay : 50,
//     interval : 250,
// });

ScrollReveal().reveal(".skill-card", {
    ...scrollRevealOption,
    delay : 50,
    interval : 250,
});