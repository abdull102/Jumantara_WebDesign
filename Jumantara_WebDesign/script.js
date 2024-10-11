/* ------------------ Spark background--------------------- */
function createSparkles(containerId, count, maxHeight) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Element with ID ${containerId} not found.`);
    return;
  }
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("div");
    sparkle.className =
      "absolute w-[2.2px] h-[2.2px] bg-gradient-to-r from-zinc-50 to-zinc-500 rounded-full";
    sparkle.style.top = `${Math.random() * maxHeight}rem`;
    sparkle.style.left = `${Math.random() * 96}vw`;
    container.appendChild(sparkle);

    // animasi menggunakan animejs
    anime({
      targets: sparkle,
      translateX: function () {
        return anime.random(-50, 1) + "vw";
      },
      translateY: function () {
        return anime.random(-50, 1) + "vh";
      },
      duration: function () {
        return anime.random(12000, 24000);
      },
      easing: "easeInOutQuad",
      loop: true,
      direction: "alternate",
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    createSparkles("sparkleContainer", 240, 245); // Halaman home
    createSparkles("sparkleContainerFeatures", 260, 280); // Halaman features
    createSparkles("sparkleContainerAbout", 240, 170); // Halaman about
  }, 100); // delay 100ms
});
/* ------------------ end spark background --------------------- */

/* ------------------ animasi setiap elemen halaman home --------------------- */
// fungsi untuk animasi
function addAnimationClass(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(...entry.target.dataset.animate.split(" "));
      observer.unobserve(entry.target);
    }
  });
}

// observer pada section feature
let featureObserver = new IntersectionObserver(addAnimationClass, {
  threshold: 0.1, // menjalankan animasi ketika 10% elemen terlihat
});

document
  .querySelectorAll(
    ".simetric, .dynamic, .wide, .world, .powerfull, .router, .extra, .cloud, .fiber, .h1, .p, .logo"
  )
  .forEach((element) => {
    featureObserver.observe(element);

    // animasi untuk section features
    if (element.className.includes("simetric")) {
      element.dataset.animate = "animate-fade-right";
    } else if (element.className.includes("dynamic")) {
      element.dataset.animate =
        "animate-fade-left md:animate-fade-up animate-delay-150";
    } else if (element.className.includes("wide")) {
      element.dataset.animate = "animate-fade-right md:animate-fade-up";
    } else if (element.className.includes("powerfull")) {
      element.dataset.animate = "animate-fade-left";
    }

    // section promotion
    else if (element.className.includes("router")) {
      element.dataset.animate = "animate-fade-right md:animate-fade-up";
    } else if (element.className.includes("extra")) {
      element.dataset.animate =
        "animate-fade-left md:animate-fade-down animate-delay-150";
    } else if (element.className.includes("fiber")) {
      element.dataset.animate =
        "animate-fade-left md:animate-fade-up animate-delay-300";
    } else if (element.className.includes("cloud")) {
      element.dataset.animate =
        "animate-fade-right md:animate-fade-up animate-delay-500";
    }

    // untuk heading dan text
    else if (element.className.includes("h1")) {
      element.dataset.animate = "animate-fade-up";
    } else if (element.className.includes("p")) {
      element.dataset.animate = "animate-fade";
    }

    // logo about halaman home
    else if (element.className.includes("logo")) {
      element.dataset.animate = "animate-fade animate-duration-1000";
    }
  });

/* ------------------ end animasi setiap elemen halaman home --------------------- */

/* ------------------ animasi setiap elemen halaman feature dan about --------------------- */
// fungsi animasi
function addAnimationClassFeature(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(...entry.target.dataset.animate.split(" "));
      observer.unobserve(entry.target);
    }
  });
}

// observer pada section hero
let featureObserverFeature = new IntersectionObserver(
  addAnimationClassFeature,
  {
    threshold: 0.1, // Jalankan animasi ketika 10% elemen terlihat
  }
);

document
  .querySelectorAll(
    ".fade-right, .fade-left, .fade-up, .fade-down, .powerfull2, .cloud2, .meeting, .hover"
  )
  .forEach((element) => {
    featureObserverFeature.observe(element);

    if (element.className.includes("fade-right")) {
      element.dataset.animate = "animate-fade-right";
    } else if (element.className.includes("fade-left")) {
      element.dataset.animate = "animate-fade-left";
    } else if (element.className.includes("fade-up")) {
      element.dataset.animate = "animate-fade-up";
    } else if (element.className.includes("fade-down")) {
      element.dataset.animate = "animate-fade-down";
    } else if (element.className.includes("cloud2")) {
      element.dataset.animate = "animate-fade-left animate-delay-300";
    } else if (element.className.includes("meeting")) {
      element.dataset.animate = "animate-fade-down";
    } else if (element.className.includes("hover")) {
      element.dataset.animate = "grayscale-0 md:grayscale";
    } else {
      element.dataset.animate = "animate-fade";
    }
  });

/* ------------------ end animasi setiap elemen halaman feature dan about --------------------- */

/* ------------------ animasi progress bar section choose service --------------------- */
// Fungsi untuk menjalankan animejs ketika elemen masuk ke dalam viewport
function choseeService(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Jalankan animasi menggunakan animejs
      anime({
        targets: entry.target,
        width: ["0%", "70%"],
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1500,
        loop: false,
      });

      // mengentikan animasi setelah dijalankan
      observer.unobserve(entry.target);
    }
  });
}

// observer pada section chosee service
let promotionObserverFeature = new IntersectionObserver(choseeService, {
  threshold: 0.1,
});

document.querySelectorAll(".gaming").forEach((element) => {
  promotionObserverFeature.observe(element);
});
/* ------------------ end animasi progress bar pada section choose service --------------------- */

/* ------------------ animasi angka progres pada section choose service --------------------- */
document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk menjalankan anime.js ketika elemen masuk ke dalam viewport
  function addAnimationClassFeature(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // menjalankan animasi angka menggunakan anime.js
        anime({
          targets: entry.target,
          innerHTML: [16, 22.4],
          easing: "linear",
          duration: 1500,
          update: function (anim) {
            entry.target.innerHTML = anim.animations[0].currentValue.toFixed(1);
          },
        });

        observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi dijalankan
      }
    });
  }

  // Buat observer pada section chosee service
  let promotionObserverFeature = new IntersectionObserver(
    addAnimationClassFeature,
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".number").forEach((element) => {
    promotionObserverFeature.observe(element);
  });
});

/* ------------------ end animasi angka progres pada section choose service --------------------- */

/* ------------------ send messages --------------------- */
function sendMessage() {
  const message = document.getElementById("body").value;
  const emailLink = `mailto:fahmi.muslimin22@student.uisi.ac.id?body=${encodeURIComponent(
    message
  )}`;
  window.location.href = emailLink;
}
/* ------------------ end send messages --------------------- */
