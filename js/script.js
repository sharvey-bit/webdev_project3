function initMap() {
    const location = { lat: 21.3069, lng: -157.8583 }; // Honolulu
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
      styles: [
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#a0d3d3" }]
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [{ color: "#dcefe1" }]
        }
      ]
    });
  
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Honolulu, Hawaii",
      animation: google.maps.Animation.DROP
    });
  
    const infowindow = new google.maps.InfoWindow({
      content: "<strong>Honolulu, Hawaii</strong><br>A beautiful tropical city."
    });
  
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }

document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "images/hana1.jpg",
        "images/poppy1.jpg",
        "images/momo3.jpg"
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById("slider-image");

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentIndex];
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    });
});
