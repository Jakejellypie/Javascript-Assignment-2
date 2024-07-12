// selecting every li in the ul
const allThumbnails = document.querySelectorAll("li");
//selecting every image in the li  tag of the ul, so that I can use their src.
const allThumbnailImages = document.querySelectorAll("li > img");
//creating a variable for figcaption.
let figCaptionText = document.querySelector("figcaption");
//creating an array of colors to make a figcaptiontext based on the colors of the flowers.
const colorArray = ["pink", "purple", "red", "white", "yellow"];


// giving each li in the nodeList the class greyscale except the first li.
//starting from the first index ensures that index 0 will not have the greyscale class.
for(let j = 1; j < allThumbnails.length; j++){
    allThumbnails[j].classList.add("greyscale");
}

//creating a function that will take a string parameter of the relative path of the thumbnail images.
//then it will check each element of the colorArray, and if it finds a match for that color in the relative path
//then it will create a caption.
function captionSetter(img){
    for(let k = 0; k < colorArray.length; k++){
        if(img.src.includes(colorArray[k])){
            figCaptionText.textContent = "This is a field full of " + colorArray[k] + " flowers.";
            //changing the color of the caption text to match the color of the flowers.
            figCaptionText.style.color = colorArray[k];
        };
    };
};

//using the function above to create a caption for the first thumbnail's image.
captionSetter(allThumbnailImages[0]);

//using the for loop below I give each li an eventlistener that is attached to an anonymous function which
//replaces the figure tag's image's src with the src of the img tag from each li of the ul.
for(let i = 0; i < allThumbnails.length; i++){
    allThumbnails[i].addEventListener("click", function(){
        //this selects the img of the figure tag's src and changes it
        document.querySelector("figure > img").src = allThumbnailImages[i].src.replace("small", "large")
        //this gives each li element the greyscale class
        allThumbnails.forEach((element) => element.classList.add("greyscale")); 
        //this removes the greyscale class from the element that has been clicked using it's corresponding index.
        allThumbnails[i].classList.remove("greyscale");
        //adding a class "highlighted" to the active thumbnail so that it is easier for the user to see which img is active.
        allThumbnailImages[i].classList.add("highlighted");
        //this is solely for testing. I'm probably gonna leave it in just in case anything breaks in the future.
        console.log(allThumbnails[i]);
        //using the captionSetter function to create a caption for each image that is clicked.
        captionSetter(allThumbnailImages[i]);
    });
};

