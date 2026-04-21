let currentLang = localStorage.getItem("lang") || "en";
async function loadLang(e) {
  localStorage.setItem("lang", e);
  let t = await fetch(`./lang/${e}-min.json`),
    n = await t.json();
  (document.querySelectorAll("[data-key]").forEach((e) => {
    let t = e.dataset.key;
    e.textContent = n[t];
  }),
    document.querySelectorAll("[data-placeholder]").forEach((e) => {
      let t = e.dataset.placeholder;
      e.placeholder = n[t];
    }),
    (document.body.dir = "ar" === e ? "rtl" : "ltr"));
}
(document.addEventListener("DOMContentLoaded", loadLang(currentLang)),
  window.addEventListener("pageshow", loadLang(currentLang)),
  document.addEventListener("DOMContentLoaded", setActiveCategory),
  window.addEventListener("pageshow", setActiveCategory),
  window.addEventListener("resize", function () {
    window.innerWidth > 767 &&
      (sections.classList.remove("openList"),
      sections.classList.remove("closeList"));
  }),
  (document.getElementById("langSwitch").value = currentLang),
  loadLang(currentLang),
  document.getElementById("langSwitch").addEventListener("change", (e) => {
    loadLang(e.target.value);
  }));
let sections = document.getElementById("sections"),
  menu = document.getElementById("list");
function setActiveCategory() {
  let e = window.location.pathname.split("/").pop();
  ("" === e && (e = "index.html"),
    document.querySelectorAll(".cat").forEach((e) => {
      e.classList.remove("active");
    }),
    document.querySelectorAll(".cat a").forEach((t) => {
      t.getAttribute("href") === e && t.parentElement.classList.add("active");
    }));
}
function addToCart(e, t) {
  let n = t.closest(".cardBuying"),
    s = n.querySelector(".size").value,
    o = n.querySelector(".shopName").innerText;
  if (!s) return void showToast("من فضلك اختر المقاس أولاً! ⚠️", "error");
  let a = JSON.parse(localStorage.getItem("cart")) || [],
    c = {
      img: allCardShop[e].img,
      name: o,
      price: allCardShop[e].price,
      size: s,
      quantity: 1,
    },
    i = a.find((e) => e.img === c.img && e.size === c.size);
  (i ? i.quantity++ : a.push(c),
    localStorage.setItem("cart", JSON.stringify(a)),
    updateCount(),
    showToast("تمت الإضافة إلى السلة بنجاح 🛒", "success"));
}
function updateCount() {
  let e = JSON.parse(localStorage.getItem("cart")) || [],
    t = 0;
  e.forEach((e) => (t += e.quantity));
  let n = document.getElementById("cart-count");
  n && (n.innerText = t);
}
function showToast(e, t) {
  let n = document.getElementById("toast");
  ((n.innerText = e),
    n.classList.remove("success", "error"),
    n.classList.add("show", t),
    setTimeout(() => {
      n.classList.remove("show");
    }, 2e3));
}
(menu.addEventListener("click", function () {
  sections.classList.contains("openList")
    ? (sections.classList = "closeList")
    : (sections.classList = "openList");
}),
  document.body.addEventListener("click", function (e) {
    sections.classList.contains("openList") &&
      !sections.contains(e.target) &&
      e.target !== menu &&
      (sections.classList.remove("openList"),
      sections.classList.add("closeList"));
  }),
  window.addEventListener("scroll", function () {
    sections.classList.contains("openList") &&
      (sections.classList.remove("openList"),
      sections.classList.add("closeList"));
  }),
  updateCount());
