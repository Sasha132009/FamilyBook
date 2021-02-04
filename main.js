var images = [fm.jpg, Nana.jpg,Poppy.jpg ,Sasha.jpg, Mumma.jpg];
var names = ["Fmaily Book","Vinod Mehra", "Raghu Bharadwaj","Sasha Bharadwaj Mehra", "Bhavna Mehra"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
