let wrapper = document.querySelector(".wrapper");

let skills = [ 'Html' , 'CSS' , 'JavaScript' , 'React JS' ,'Python', 'My SQL','Data Analyst'];
let skills_percentage = [ '95%' , '75%' , '75%' , '70%' ,'90%','80%', '75%'];

let html = '';

for(let i=0; i<skills.length; i++){
    html+=`
            <div class="skill-info">

                <div class="skill-name">
    
                    <div class="skill-name" style="color : linear-gradient(red, yellow);">${skills[i]}</div>
                    <div class="skill-percentage">${skills_percentage[i]}</div>
    
                </div>
    
                <div style="background-color: white; border-radius: 5px;">
    
                    <div class="skill-bar" style="width : ${skills_percentage[i]}; height:5px;border = 1px solid white;border-radius : 5px;background-color:orange; ">

                    </div>
    
                </div>
                
                
    
            </div>
    
    `
}

wrapper.innerHTML = html;


// let bar = document.querySelector('.skill-bar');
// let percentage= document.querySelector('.skill-percentage');

// bar.style.width = '95%';
// bar.style.height = '5px';
// bar.style.border = "1px solid white"
// bar.style.backgroundColor = 'orange';
// bar.style.borderRadius = '5px';