// staring script
var Product = function (img, name) {
  this.img= img;
  this.voteCount=0;
  this.name= name;
};


var image1= new Product("bag.jpg", "bag");
var image2= new Product("banana.jpg", "banana");
var image3= new Product("boots.jpg", "boots");
var image4= new Product("chair.jpg", "chair");
var image5= new Product("cthulhu.jpg", "cthulhu");
var image6= new Product("dragon.jpg", "dragon");
var image7= new Product("pen.jpg", "pen");
var image8= new Product("scissors.jpg", "scissors");
var image9= new Product("shark.jpg", "skark");
var image10= new Product("sweep.jpg", "sweep");
var image11= new Product("unicorn.jpg", "unicorn");
var image12= new Product("usb.jpg", "usb");
var image13= new Product("water_can.jpg", "water_can");
var image14= new Product("wine_glass.jpg", "wine_glass");

//making imageArray
var imageArray= new Array ();
imageArray.push(new Product("bag.jpg", "bag"));
imageArray.push(new Product("banana.jpg", "banana"));
imageArray.push(new Product("boots.jpg", "boots"));
imageArray.push(new Product("chair.jpg", "chair"));
imageArray.push(new Product("cthulhu.jpg", "cthulhu"));
imageArray.push(new Product("dragon.jpg", "dragon"));
imageArray.push(new Product("pen.jpg", "pen"));
imageArray.push(new Product("scissors.jpg", "scissors"));
imageArray.push(new Product("shark.jpg", "shark"));
imageArray.push(new Product("sweep.jpg", "sweep"));
imageArray.push(new Product("unicorn.jpg", "unicorn"));
imageArray.push(new Product("usb.jpg", "usb"));
imageArray.push(new Product("water_can.jpg", "water_can"));
imageArray.push(new Product("wine_glass.jpg", "wine_glass"));



function displayImage () {
  var imageHolder = document.getElementById('imageHolder');
  imageHolder.innerHTML = " ";
  for (var x=0; x < 3; x++) {
    var img = new Image();
    var random = getRandomNum();
    var randomImage = imageArray[random];
    img.src = randomImage.img;
    img.dataset.idx = random;
    imageHolder.appendChild(img);
  }
};

function getRandomNum() {
  return Math.floor(Math.random() * imageArray.length)
}
var totalVotes = 0;
var imageHolder = document.getElementById("imageHolder");
 imageHolder.addEventListener("click", function(event) {
     var clickedImage = imageArray[event.target.dataset.idx];
     var showButton= document.getElementById("button");
     var totals = document.getElementById("total");
     clickedImage.voteCount++;
     totalVotes++;
     console.log(clickedImage);
     console.log(totalVotes);
     displayImage();

  if (totalVotes % 15 == 0) {
    showButton.style.display= "block";
  }
  else {
    showButton.style.display="none";
    totals.style.display = "none";
  }
 })

 var button= document.getElementById("button");
button.addEventListener("click", function(event) {
  var totals = document.getElementById('total');
  var tbody = document.getElementById('total').children[1];
  tbody.innerHTML = '';
  totals.style.display = "table";
  for (var x=0; x < imageArray.length; x++) {
    var row = totals.insertRow(x + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = imageArray[x].name;
    cell2.innerHTML = imageArray[x].voteCount;
  }
});












 // while (randomImage < 3) {
 //   randomImage
 // }







displayImage(image1);
