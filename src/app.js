// Smooth Scrolling
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll Reveal Effect
const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if (sectionTop < window.innerHeight - revealPoint) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealSection);

// Initialize section styles
sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease-out";
});

const projectsContainer = document.getElementById("projects-container");

// Lokasi file JSON lokal
const jsonURL = '/projects.json';

fetch(jsonURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Mengonversi respons ke JSON
  })
  .then((data) => {
    displayProjects(data); // Memanggil fungsi untuk menampilkan proyek
  })
  .catch((error) => {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `An error occurred: ${error.message}. Please try again later.`;
    projectsContainer.appendChild(errorMessage);
  });

// Fungsi untuk menampilkan proyek di halaman
function displayProjects(projects) {
  projectsContainer.innerHTML = ""; // Mengosongkan container sebelum menambahkan proyek

  projects.forEach((project) => {
    // Membuat elemen untuk setiap proyek
    const projectElement = document.createElement("div");
    projectElement.className = "project";

    // Menyusun konten proyek
    projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">View Project</a>
        `;

    // Menambahkan elemen proyek ke container
    projectsContainer.appendChild(projectElement);
  });
}
