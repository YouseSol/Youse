document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const index = parseInt(event.target.getAttribute('data-index'));
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });

    showTestimonial(currentIndex);

    setInterval(nextTestimonial, 5000); // Muda o depoimento a cada 5 segundos
});
