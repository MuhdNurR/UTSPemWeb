    //Halaman Index
    $(function () {
        var top = $('#side-bar').offset().top - parseFloat($('#side-bar').css('marginTop').replace(/auto/, 0));
        var footTop = $('#section7').offset().top - parseFloat($('#section7').css('marginTop').replace(/auto/, 0));

        var maxY = footTop - $('#side-bar').outerHeight();

        $(window).scroll(function (evt) {
            var y = $(this).scrollTop();
            if (y > top) {
                if (y < maxY) {
                    $('#side-bar').addClass('fixed').removeAttr('style');
                } else {
                    $('#side-bar').removeClass('fixed').css({
                        position: 'absolute',
                        top: (maxY - top) + 'px'
                    });
                }
            } else {
                $('#side-bar').removeClass('fixed');
            }
        });
    });

    function toggleIcon(event) {
        const icon = event.target;
        const likeCount = icon.nextElementSibling;

        icon.classList.toggle('active');

        if (icon.classList.contains('active')) {
            icon.classList.replace('bi-heart', 'bi-heart-fill');
            likeCount.textContent++;
        } else {
            icon.classList.replace('bi-heart-fill', 'bi-heart');
            likeCount.textContent--;
        }
    }   

    // Halaman mulaifundrising_2 3 button
    function changeClass(div) {
        var btns = document.getElementsByClassName("cardanu");
        for (var i = 0; i < btns.length; i++) {
            if (btns[i] !== div) {
                btns[i].classList.remove("bg-success");
                btns[i].classList.add("bg-white");
            }
        }
        if (div.classList.contains("bg-success")) {
            div.classList.remove("bg-success");
            div.classList.add("bg-white");

        } else {
            div.classList.remove("bg-white");
            div.classList.add("bg-success");

        }
    }

    // Halaman Berdonasi

	// Mendapatkan input text dan output text
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');

    // Tambahkan event listener untuk setiap perubahan pada input text
    inputText.addEventListener('input', function () {
        // Ambil nilai input text dan tambahkan koma setiap tiga digit
        const value = inputText.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        // Tampilkan nilai input yang telah diubah ke format rupiah pada output text

        outputText.textContent = "Rp " + value + ",00";
    });
    //container alert
    const alertDiv = document.querySelector('.alert');

    inputText.addEventListener('input', function () {
        if (inputText.value > 50000000) {
            alertDiv.style.display = 'block';
        } else {
            alertDiv.style.display = 'none';
        }
    });

    //pembagian kontribusi

    const inputRange = document.getElementById('input-range');
    const result = document.getElementById('contribution-text');
    const rangeValues = [0, 10, 15, 20, 25, 30];
    function checkInput() {
        var inputText = document.getElementById('input-text');
        if (inputText.value == "") {
            result.textContent = "Rp 0";
        } else {
            // membagi nilai input angka dengan nilai range yang sesuai
            const dividedValue = inputText.value / rangeValues[inputRange.value];
            let hasil = dividedValue

            // membulatkan dan menambahkan koma sebagai pemisah ribuan
            rupiah = Math.round(parseFloat(hasil)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            // menampilkan hasil ke dalam elemen hasil
            result.textContent = "Rp " + rupiah + ",00 (" + rangeValues[inputRange.value] + "% )";
        }
    }

    // Halaman category-nonprofit
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
