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

function openModal(imageSrc, exerciseCaption, exerciseDescription) {
    const modal = document.getElementById('myModalExercise');
    const modalImage = document.getElementById('modalImage');
    const exerciseTitle = document.getElementById('exerciseTitle');
    const exerciseDescriptionElement = document.getElementById('exerciseDescription');

    modalImage.src = imageSrc;
    exerciseTitle.innerHTML = exerciseCaption;
    exerciseDescriptionElement.innerHTML = "<p>" + exerciseDescription + "</p>";

    modal.style.display = 'block';
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

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {

    // Tambahkan script untuk menutup modal saat tombol x diklik
    const closeButton = document.querySelector('.close');
    const closeButton1 = document.querySelector('.close1');

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            closeModal('myModalExercise');
        });
    }

    if (closeButton1) {
        closeButton1.addEventListener('click', function () {
            closeModal('myModalFood');
        });
    }

    // ... (your existing code)
});

// Tambahkan script untuk menutup modal saat di luar area gambar
document.addEventListener('click', function (event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        closeModal('myModalExercise');
        closeModal('myModalFood');
    }
});

function alihkanKeHome() {
    // Anda dapat menambahkan logika validasi masuk Anda di sini sebelum mengalihkan
    // Untuk kesederhanaan, mari kita asumsikan validasinya berhasil dan lanjutkan ke halaman beranda

    // Alihkan ke halaman home.html
    window.location.href = "home.html";
}
