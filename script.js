// Mobile menu
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}

// Footer year
const yr = document.getElementById("year");
if (yr) yr.textContent = new Date().getFullYear().toLocaleString("bn-BD", { useGrouping: false });

// Contact form -> Formspree (no page reload)
const form = document.getElementById("contact-form");
if (form) {
  const status = form.querySelector(".status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "status";
    status.textContent = "পাঠানো হচ্ছে...";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        status.classList.add("ok");
        status.textContent = "আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই ইমেইলে উত্তর দেব।";
      } else {
        throw new Error("Request failed");
      }
    } catch {
      status.classList.add("err");
      status.textContent = "পাঠানো যায়নি। আবার চেষ্টা করুন অথবা আমাদের ফোন করুন।";
    }
  });
}
