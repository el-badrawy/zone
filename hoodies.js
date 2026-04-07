const products = [
  {
    name: "هودي أسود",
    price: 300,
    hofer: 200,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    name: "هودي أسود",
    price: 300,
    hofer: 200,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    name: "هودي أسود",
    price: 300,
    hofer: 200,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    name: "هودي أسود",
    price: 300,
    hofer: 200,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    name: "هودي أبيض",
    price: 320,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    name: "هودي رمادي",
    price: 280,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    name: "هودي أزرق",
    price: 350,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    name: "هودي أحمر",
    price: 310,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    name: "هودي أخضر",
    price: 290,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    name: "هودي بني",
    price: 330,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    name: "هودي أصفر",
    price: 360,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    name: "هودي موف",
    price: 300,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    name: "هودي كحلي",
    price: 340,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    name: "هودي كحلي",
    price: 340,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    name: "هودي كحلي",
    price: 340,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    name: "هودي كحلي",
    price: 340,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    name: "هودي كحلي",
    price: 340,
    img: "https://images.unsplash.com/photo-1544441893-675973e31985",
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
