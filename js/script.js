document.addEventListener("DOMContentLoaded", () => {
  // ページ内リンクを押した際、固定ヘッダー等がある場合にも見やすく移動
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});