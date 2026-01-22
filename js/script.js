
//Canvas animation
const logo = document.getElementById('canvasLogoWrapper');
const contact = document.getElementsByClassName('contact-section')[0];
const footer = document.getElementsByClassName('footer')[0];
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const bottom =
    document.documentElement.scrollHeight - window.innerHeight - footer.offsetHeight/2;

  if (scroll >= bottom) {
    // smo na dnu
    contact.style.transform = 'translateX(25%)';
    logo.style.transform = 'translate(5%, -50%)';
  } else {
    // skrij
    contact.style.transform = 'translateX(0)'
    logo.style.transform = 'translate(-550%, -50%)';
  }
});

//FADE IN
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });
});

//ticket buy
const ticketButtons = document.querySelectorAll('.modal-pay');
ticketButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    
    Swal.fire({
      title: 'Tickets Reserved!',
      text: 'You can proceed to payment in the popup.',
      icon: 'success',
      confirmButtonColor: '#C10000'
    });
    closemodal();
  });
});

//form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default submission

  Swal.fire({
    title: 'Message Sent!',
    text: 'Thanks for reaching out. We will get back to you soon.',
    icon: 'success',
    confirmButtonColor: '#C10000',
    confirmButtonText: 'OK'
  });

  // Optional: reset form after sending
  contactForm.reset();
});

//Credits
document.getElementById("openCredits").addEventListener("click", function () {
  Swal.fire({
    icon: "info",
    title: "Credits",
    html: `
      <div style="
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 1rem;
      ">
        <p style="margin: 0;">
         
        "Design & Frontend: <strong>Abel Elersič</strong>"
        
        </p>

        <p style="margin: 0; font-size: 0.9rem;">
          "Social links:" 
        </p>

        <a href="https://www.instagram.com/abelelersic" 
           target="_blank"
           style="
             color: #C10000; 
             font-weight: bold;
             text-decoration: none;
           ">
          Instagram
        </a>

        <a href="https://github.com/abel-ux-max" 
           target="_blank"
           style="
             color: #C10000; 
             font-weight: bold;
             text-decoration: none;
           ">
          GitHub
        </a>
      </div>
    `,
    confirmButtonColor: "#C10000",
    width: 400,
  });
});
