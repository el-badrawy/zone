const products = [
  {
    name: "تيشيرت أبيض",
    price: 150,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "تيشيرت أبيض",
    price: 150,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "تيشيرت أبيض",
    price: 150,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
];

const container = document.getElementById("products");
products.forEach((p, i) => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      ${p.hofer ? `<del>${p.hofer}جنيه</del>` : ""}<del> ${p.hofer}جنيه</del>
      <p>${p.price} جنيه</p>

      <select id="size${i}">
        <option value="">المقاس</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>

      <select id="color${i}">
        <option value="">اللون</option>
        <option>أسود</option>
        <option>أبيض</option>
        <option>رمادي</option>
      </select>

      <button onclick="addToCart(${i})">اضف للسلة</button>
    </div>
  `;
});

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("تم الإضافة 🛒");
}
function addToCart(i) {
  let size = document.getElementById(`size${i}`).value;
  let color = document.getElementById(`color${i}`).value;

  // تحقق
  if (!size || !color) {
    alert("من فضلك اختار المقاس واللون الأول ❗");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    ...products[i],
    size,
    color,
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCount(); // مهم
  alert("تم الإضافة 🛒");
}
//العداد
function updateCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let el = document.getElementById("count");
  if (el) el.innerText = cart.length;
}

updateCount();
