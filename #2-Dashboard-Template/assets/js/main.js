const calendar = document.querySelector('.calendar');
const months = document.querySelectorAll('.month');

months.forEach((month) => {
  const value = month.getAttribute('value');
  month.style.height = ` ${value}px`;
});
