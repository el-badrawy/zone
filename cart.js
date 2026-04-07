//البيانات بتتجاب من الصفات الثانيه و اي تعديد بيحصل هنا بيتحفظ زي حذف عنصر
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart");
let total = 0;

// عرض المنتجات
cart.forEach((p, i) => {
  total += p.price;
  container.innerHTML += `
    <div class="card">
    <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>${p.price} جنيه</p>
      <p>${p.size || ""} - ${p.color || ""}</p>
      <button onclick="removeItem(${i})">حذف ❌</button>
    </div>
  `;
});

// عرض الإجمالي

document.getElementById("total").innerText = "الإجمالي: " + total + " جنيه";

// حذف منتج
function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

//العداد
function updateCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let el = document.getElementById("count");
  if (el) el.innerText = cart.length;
}

updateCount();
