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
    const mainImg = document.getElementById("slider-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    function updateMainImage(index) {
        currentIndex = index;
        mainImg.src = images[currentIndex];

        thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
        });
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateMainImage(newIndex);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        const newIndex = (currentIndex + 1) % images.length;
        updateMainImage(newIndex);
    });

    thumbnails.forEach((thumb, i) => {
        thumb.addEventListener("click", () => {
        updateMainImage(i);
        });
    });

    updateMainImage(0); // set initial active state
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    showSlide(currentSlide); // Initialize
  });
  