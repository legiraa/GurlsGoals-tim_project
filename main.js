/*Agar gambar bergulir*/
let currentSlide = 0;
let currentSlide1 = 0;

function changeSlide(direction, sliderClass) {
    const slides = document.querySelector(`.${sliderClass}`);
    const slideWidth = document.querySelector(`.${sliderClass} img`).clientWidth;

    if (sliderClass === 'slides') {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.children.length - 1;
        } else if (currentSlide >= slides.children.length) {
            currentSlide = 0;
        }
        slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    } else if (sliderClass === 'slides1') {
        currentSlide1 += direction;
        if (currentSlide1 < 0) {
            currentSlide1 = slides.children.length - 1;
        } else if (currentSlide1 >= slides.children.length) {
            currentSlide1 = 0;
        }
        slides.style.transform = `translateX(${-currentSlide1 * slideWidth}px)`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const slides1 = document.querySelector('.slides1');
    const slideWidth = document.querySelector('.slides img').clientWidth;
    const slideWidth1 = document.querySelector('.slides1 img').clientWidth;

    setInterval(() => changeSlide(1, 'slides'), 3000);
    setInterval(() => changeSlide(1, 'slides1'), 3000);

    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    slides1.style.transform = `translateX(${-currentSlide1 * slideWidth1}px)`;
})

/*Memunculkan modal*/
function openModal(imageSrc, title, description) {
    var modal = document.getElementById("modal");
    var modalImage = modal.querySelector(".modal-content");
    var titleElement = modal.querySelector("#titleModal");
    var descriptionElement = modal.querySelector("#descriptionModal");

    document.body.style.overflow = 'hidden';

    modalImage.src = imageSrc;
    titleElement.innerText = title;
    descriptionElement.innerHTML = description;

    modal.style.display = "block";
    modal.style.marginTop = "0px";
    modal.style.padding = "40px";
    modalImage.style.maxWidth = "550px";
    
    document.getElementById("navbar").style.display = "none";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    document.body.style.overflow = 'auto';

    document.getElementById("navbar").style.display = "flex";
}

window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

/*Calculator BMI*/
function calculateBMI() {
    
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').innerHTML = 'Please Insert!!!';
      return;
    }
  
    var bmi = weight / Math.pow(height / 100, 2);
  
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Result Body Mass Index : ' + bmi.toFixed(2);
  }

/*Dari log-in pindah ke Halaman Home*/
function alihkanKeHome() {
    window.location.href = "home.html";
}

/*Dari Home Pindah ke halaman Kalkulator BMI*/
function goToBMIPage() {
    window.location.href = "BMI.html";
}

/*Dari home pindah ke about, calender, logout*/
function goToPage(page) {
    window.location.href = page;
}


