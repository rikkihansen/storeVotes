// staring script
var Product = function (img, name, idx) {
  this.img= img;
  this.voteCount=0;
  this.label= name;
  this.idx=idx;
  this.y=0;
};

// making imageArray --------------------------
var imageArray= new Array ();
imageArray.push(new Product("Images/bag.jpg", "bag", 0));
imageArray.push(new Product("Images/banana.jpg", "banana", 1));
imageArray.push(new Product("Images/boots.jpg", "boots", 2));
imageArray.push(new Product("Images/chair.jpg", "chair", 3));
imageArray.push(new Product("Images/cthulhu.jpg", "cthulhu", 4));
imageArray.push(new Product("Images/dragon.jpg", "dragon", 5));
imageArray.push(new Product("Images/pen.jpg", "pen", 6));
imageArray.push(new Product("Images/scissors.jpg", "scissors", 7));
imageArray.push(new Product("Images/shark.jpg", "shark", 8));
imageArray.push(new Product("Images/sweep.jpg", "sweep", 9));
imageArray.push(new Product("Images/unicorn.jpg", "unicorn", 10));
imageArray.push(new Product("Images/usb.jpg", "usb", 11));
imageArray.push(new Product("Images/wine_glass.jpg", "wine glass", 12));

// making empty array  --------
var availablePhotos = new Array();
function makeArrayCopy() {
  for(var index=0; index < imageArray.length; index++) {
     availablePhotos.push(imageArray[index])
  }
}

// If availablePhotos has no photo's left go to makeArrayCopy() ---------
function randomPhoto() {
  if (availablePhotos.length == 0) {
    makeArrayCopy()
 }
  var index = Math.floor(Math.random() * availablePhotos.length);
  var photoToUse = availablePhotos.splice(index,1)[0];
     return photoToUse
}

// showing three random images ----------------------
function displayImage () {
  var imageHolder = document.getElementById('imageHolder');
  imageHolder.innerHTML = " ";
  for (var x=0; x < 3; x++) {
    var img = new Image();
    var randomImage = randomPhoto();
    img.src = randomImage.img;
    img.dataset.idx = randomImage.idx;
    imageHolder.appendChild(img);
    console.log(event);
  }
};

// keeping count of clicks and stringifying imageArray --------
var totalVotes = 0;
 imageHolder.addEventListener("click", function() {
     imageHolder.innerHTML= " ";
     var clickedImage = imageArray[event.target.dataset.idx];
     var showButton= document.getElementById("button");
     var container = document.getElementById("chartContainer");
     displayImage();
     clickedImage.y++;
     localStorage.setItem("data", JSON.stringify(imageArray)); // making localStorage
     totalVotes++;
     console.log(clickedImage);
     console.log(totalVotes);

  if (totalVotes % 15 == 0) {
    showButton.style.display= "block";
  }
  else {
    showButton.style.display="none";
  }
});



// things that happen when you click the button -----------
var button= document.getElementById("button");
button.addEventListener("click", function() {
  var showButton= document.getElementById("button");
  var container = document.getElementById("chartContainer");
  var imageHolder = document.getElementById("imageHolder");
  var paragraph = document.getElementById("p");
  buildchart();
  chart.render();



  if (showButton.onclick) {
    paragraph.style.display="block";
    imageHolder.style.display="none";
  }
  else {
    paragraph.style.display="none";
    }
});

// ----------------------------------------- geting item from localStorage
var storage = localStorage.getItem("data");

if (storage != null) {
  ImageArray= JSON.parse(storage);

}
makeArrayCopy();
displayImage();

var chart= null;
function buildchart () {
chart = new CanvasJS.Chart("chartContainer", {
 title:{
   text: "Click's Per Photo"
 },
 data: [
 {
   type: "column",
   dataPoints: imageArray

 }
 ]
});
}
