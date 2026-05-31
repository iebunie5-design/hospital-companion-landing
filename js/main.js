const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const consultModal = document.querySelector("#consult-form");
const consultForm = document.querySelector("[data-consult-form]");
const consultMessage = document.querySelector("[data-consult-message]");
let lastFocusedElement = null;

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기");
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "모바일 메뉴 열기");
  });
});

document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector("button");
  button?.addEventListener("click", () => {
    const wasOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      otherItem.classList.remove("is-open");
      otherItem.querySelector("button")?.setAttribute("aria-expanded", "false");
    });

    const isOpen = !wasOpen;
    item.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const openConsultModal = () => {
  lastFocusedElement = document.activeElement;
  consultModal.hidden = false;
  document.body.classList.add("modal-open");
  consultMessage.textContent = "";
  consultModal.querySelector("input")?.focus();
};

const closeConsultModal = () => {
  consultModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
};

document.querySelectorAll("[data-consult-open]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    mobileNav?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    openConsultModal();
  });
});

document.querySelectorAll("[data-consult-close]").forEach((trigger) => {
  trigger.addEventListener("click", closeConsultModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && consultModal && !consultModal.hidden) {
    closeConsultModal();
  }
});

consultForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!consultForm.checkValidity()) {
    consultForm.reportValidity();
    return;
  }

  const formData = Object.fromEntries(new FormData(consultForm).entries());
  const submissions = JSON.parse(localStorage.getItem("consultationRequests") || "[]");
  submissions.push({
    ...formData,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem("consultationRequests", JSON.stringify(submissions));

  consultForm.reset();
  consultMessage.textContent = "상담 신청이 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.";
});
