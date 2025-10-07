function toggleMenu() {
  const menu = document.querySelector('.menu-items');
  menu.classList.toggle('show');
}

function selectItem(selected) {
  const items = document.querySelectorAll('.orbit-item');
  items.forEach((item) => {
    if (item !== selected) {
      item.classList.add('fade-out');
    }
  });
}

// const path = document.getElementById('curve');
// const items = document.querySelectorAll('.item');

// items.forEach((item, i) => {
//   const point = path.getPointAtLength(i * 100 + 200); // فاصله از ابتدا
//   item.style.left = `${point.x}px`;
//   item.style.top = `${point.y}px`;
//   item.style.transform = 'translate(-50%, -50%)'; // مرکز کردن المان
// });

const path = document.getElementById('curve');
const items = document.querySelectorAll('.item');

const totalLength = path.getTotalLength();
const count = items.length;

// فاصله مساوی بین المان‌ها روی مسیر
items.forEach((item, i) => {
  const point = path.getPointAtLength(((i + 0.5) * totalLength) / count);
  item.style.left = `${point.x}px`;
  item.style.top = `${point.y}px`;
});
