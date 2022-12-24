AFRAME.registerComponent("markerhandler", {
  init: async function () {

    this.el.addEventListener("markerFound", () => {
      console.log("marker is found")
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost")
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function () {
    // Changing button div visibility
   var buttondiv =document.getElementById("button-div")
   buttondiv.style.display="flex"
    var ratingbutton=document.getElementById("rating-button")
    var orderbutton=document.getElementById("order-button")
    // Handling Click Events
    ratingbutton.addEventListener("click",function(){
      swal({
        icon:"warning",title:"RateDish",text:"Work IN Progress"
      })
    })
    orderbutton.addEventListener("click",function(){
      swal({
        icon:"https://i.imgur.com/4NZ6uLY.jpg",title:"Thankyou For Ordering",text:"Food Will Be Delivered SDoon"
      })
    })

    
  },

  handleMarkerLost: function () {
    // Changing button div visibility
    var buttondiv=document.getElementById("button-div")
buttondiv.style.display="none"
  }
});
