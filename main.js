(function () {
  var root = document.documentElement;
  root.classList.add("js");

  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  var hero = document.querySelector(".hero");

  function setNav(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Close" : "Menu";
  }

  function onScroll() {
    if (!header) return;
    var y = window.scrollY || 0;
    header.classList.toggle("is-condensed", y > 8);
    if (header.classList.contains("is-overlay") && hero) {
      header.classList.toggle("is-solid", y > hero.offsetHeight - 72);
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNav(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNav(false);
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealNodes = document.querySelectorAll("[data-reveal]");
  var steps = Array.prototype.slice.call(document.querySelectorAll("[data-step]"));
  var fill = document.querySelector("[data-steps-fill]");

  function paintSteps() {
    if (!fill || !steps.length) return;
    var mark = window.innerHeight * 0.72;
    var reached = steps.filter(function (step) {
      return step.getBoundingClientRect().top < mark;
    }).length;
    var scale = reached === 0 ? 0.08 : reached / steps.length;
    fill.style.transform = "scaleY(" + scale + ")";
  }

  if (!reduce && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    revealNodes.forEach(function (node) {
      revealObserver.observe(node);
    });

    if (steps.length) {
      var stepObserver = new IntersectionObserver(paintSteps, {
        threshold: [0.15, 0.5],
      });
      steps.forEach(function (step) {
        stepObserver.observe(step);
      });
      window.addEventListener("scroll", paintSteps, { passive: true });
      paintSteps();
    }
  } else {
    revealNodes.forEach(function (node) {
      node.classList.add("is-in");
    });
    if (fill) fill.style.transform = "scaleY(1)";
  }
})();
