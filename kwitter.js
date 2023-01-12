function add_user(){
    
    //username = getElementById("user_name").value;
    username = document.getElementById("user_name").value;

    
    localStorage.setItem("user_name",username);
    window.location = "kwitter_room.html";
}