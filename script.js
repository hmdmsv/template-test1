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
const path1 = document.getElementById('curve1');
const items = document.querySelectorAll('.item');
const items1 = document.querySelectorAll('.item1');

const totalLength = path.getTotalLength();
const totalLength1 = path1.getTotalLength();
const count = items.length;
const count1 = items1.length;

const svgRect = path.ownerSVGElement.getBoundingClientRect();

items.forEach((item, i) => {
  const point = path.getPointAtLength(((i + 0.5) * totalLength) / count);
  item.style.left = `${point.x + svgRect.left + 119}px`;
  item.style.top = `${point.y + svgRect.top}px`;
});

const svgRect1 = path1.ownerSVGElement.getBoundingClientRect();

items1.forEach((item1, i) => {
  const point1 = path1.getPointAtLength(((i + 0.5) * totalLength1) / count1);
  item1.style.left = `${point1.x + svgRect1.left + 119}px`;
  item1.style.top = `${point1.y + svgRect1.top}px`;
});