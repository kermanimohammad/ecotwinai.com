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

  var contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    var status = document.querySelector("#contact-status");
    var submitButton = contactForm.querySelector("button[type='submit']");

    function setStatus(kind, text) {
      status.className = "form-status" + (kind ? " is-" + kind : "");
      status.textContent = text;
    }

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(contactForm);
      var email = String(data.get("email") || "").trim();
      var message = String(data.get("message") || "").trim();
      var honey = String(data.get("_honey") || "").trim();

      if (honey) {
        setStatus("ok", "Thanks. Your message is on its way.");
        contactForm.reset();
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setStatus("error", "Enter a valid email address.");
        document.querySelector("#contact-email").focus();
        return;
      }

      if (message.length < 8) {
        setStatus("error", "Write a message of at least a few words.");
        document.querySelector("#contact-message").focus();
        return;
      }

      submitButton.disabled = true;
      setStatus("", "Sending…");

      fetch("https://formsubmit.co/ajax/noreply@ecotwinai.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          email: email,
          message: message,
          _subject: "Message from ecotwinai.com",
          _template: "table",
          _captcha: "false",
          _replyto: email
        })
      })
        .then(function (response) {
          return response.json().then(function (body) {
            return { ok: response.ok, body: body };
          });
        })
        .then(function (result) {
          var succeeded = result.ok && result.body && String(result.body.success) === "true";
          if (!succeeded) throw new Error("send failed");
          contactForm.reset();
          setStatus("ok", "Thanks. Your message is on its way.");
        })
        .catch(function () {
          setStatus("error", "We couldn’t send that just now. Try again, or write to support@ecotwinai.com.");
        })
        .then(function () {
          submitButton.disabled = false;
        });
    });
  }
})();
