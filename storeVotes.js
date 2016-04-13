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
imageArray.push(new Product("bag.jpg", "bag", 0));
imageArray.push(new Product("banana.jpg", "banana", 1));
imageArray.push(new Product("boots.jpg", "boots", 2));
imageArray.push(new Product("chair.jpg", "chair", 3));
imageArray.push(new Product("cthulhu.jpg", "cthulhu", 4));
imageArray.push(new Product("dragon.jpg", "dragon", 5));
imageArray.push(new Product("pen.jpg", "pen", 6));
imageArray.push(new Product("scissors.jpg", "scissors", 7));
imageArray.push(new Product("shark.jpg", "shark", 8));
imageArray.push(new Product("sweep.jpg", "sweep", 9));
imageArray.push(new Product("unicorn.jpg", "unicorn", 10));
imageArray.push(new Product("usb.jpg", "usb", 11));
imageArray.push(new Product("water_can.jpg", "water-can", 12));
imageArray.push(new Product("wine_glass.jpg", "wine-glass", 13));

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
     clickedImage.y++;
     totalVotes++;
     console.log(clickedImage);
     console.log(totalVotes);
     displayImage();
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
if (showButton.onclick) {
  container.style.display="block";
  showButton.style.display="none";
}
else {
  container.style.display="none";
  }
});


 var chart= null;
window.onload = function () {
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
	chart.render();
}


makeArrayCopy();
displayImage();
