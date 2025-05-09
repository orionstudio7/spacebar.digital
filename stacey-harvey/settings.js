function setTheme(themeName) {

    localStorage.setItem("theme",themeName);
    console.log("theme")
    const body = document.body;

    console.log(body.classList)
    if (themeName=='dark') {
        document.documentElement.setAttribute('data-theme', 'dark') 
    } else if (themeName=="light"){
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
}

function loadTheme()
{
    // const elements = document.getElementsByTagName("*");
    
    
    if(localStorage.theme){


    const body = document.body;


        if(localStorage.theme=='dark')
        {
            const radio = document.getElementById("dark");
            radio.checked = true;
            document.documentElement.setAttribute('data-theme', 'dark') 

        }
            
        else{
            const radio = document.getElementById("light");
            radio.checked = true;
            document.documentElement.setAttribute('data-theme', 'light');

        }

    }


}



//Every time the DOM is loaded, load the font as well 
document.addEventListener("DOMContentLoaded",function(){
  loadTheme();
});