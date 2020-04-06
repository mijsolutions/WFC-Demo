
function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav-section").classList.toggle("change");
    
};   


    $(function() {
        $('.chart').easyPieChart({
            duration: 1000, 
            enabled: true
            
        });
    });

    
    AOS.init({
        duration: 1000,
        easing: "ease",
    });
 

