const container = document.querySelector(".container");
const tektek = document.querySelectorAll(".tektek");

tektek.forEach((item) => {
  item.addEventListener("click", () => {
    container.innerHTML = `
      <i class="fa-regular fa-heart" style="color: #f50000;"></i>
      <p>GERİ BİLDİRİMİNİZ:  ${item.textContent} </p>
      <p>Bizi değerlendirdiğiniz için teşekkür ederiz </p>
      
      `;
  });
});
