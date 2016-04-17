// staring script
var Product = function (img, name, idx) {
  this.img= img;
  this.voteCount=0;
  this.label= name;
  this.idx=idx;
  this.y=0;
};

//making imageArray
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

var availablePhotos = new Array();
function makeArrayCopy() {
  for(var index=0; index < imageArray.length; index++) {
     availablePhotos.push(imageArray[index])
  }
}
function randomPhoto() {
  if (availablePhotos.length == 0) {
    makeArrayCopy()
 }
  var index = Math.floor(Math.random() * availablePhotos.length);
  var photoToUse = availablePhotos.splice(index,1)[0];
     return photoToUse
}


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

var totalVotes = 0;
 imageHolder.addEventListener("click", function() {
     imageHolder.innerHTML= " ";
     var clickedImage = imageArray[event.target.dataset.idx];
     var showButton= document.getElementById("button");
     var container = document.getElementById("chartContainer");
     displayImage();
     clickedImage.y++;
     localStorage.setItem("data", JSON.stringify(imageArray));
     totalVotes++;
     console.log(clickedImage);
     console.log(totalVotes);
     chart.render();

  if (totalVotes % 15 == 0) {
    showButton.style.display= "block";
  }
  else {
    showButton.style.display="none";
    container.style.display="none";
  }
});




var button= document.getElementById("button");
button.addEventListener("click", function() {
  var showButton= document.getElementById("button");
  var container = document.getElementById("chartContainer");
  var imageHolder = document.getElementById("imageHolder");
  var paragraph = document.getElementById("p");

  if (showButton.onclick) {
    container.style.display="block";
    showButton.style.display="none"
    imageHolder.style.display="none"
    paragraph.style.display="block";

  }
  else {
    container.style.display="none";
    paragraph.style.display="none";

    }
});

//
//  var chart= null;
// window.onload = function () {
// 	 chart = new CanvasJS.Chart("chartContainer", {
// 		title:{
// 			text: "Click's Per Photo"
// 		},
// 		data: [
// 		{
// 			type: "column",
// 			dataPoints: imageArray
//
// 		}
// 		]
// 	});
// 	chart.render();
// }

var storage = localStorage.getItem("data");

if (storage == null) {
  makeArrayCopy();
  displayImage();
} else {
  ImageArray= JSON.parse(storage);
 window.onload = function () {
 	chart.render();
 }

}

var chart= null;
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
