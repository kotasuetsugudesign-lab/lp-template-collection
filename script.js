// ===============================
// CATEGORY FILTER
// ===============================

const buttons = document.querySelectorAll('.cat-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    // activeクラス切り替え
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.cat;

    cards.forEach(card => {

      if (category === 'all' || card.dataset.cat === category) {
        card.style.display = 'flex';

        // フェードイン
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.opacity = '1';
        }, 50);

      } else {

        // フェードアウト
        card.style.opacity = '0';

        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }

    });

  });
});


// ===============================
// SMOOTH SCROLL（ナビ用）
// ===============================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ===============================
// HEADER SCROLL EFFECT（任意）
// ===============================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// ===============================
// FAQ アコーディオン
// ===============================

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {

    const item = btn.parentElement;

    // 他を閉じる（←これがプロ仕様）
    document.querySelectorAll('.faq-item').forEach(el => {
      if (el !== item) {
        el.classList.remove('open');
      }
    });

    // 自分をトグル
    item.classList.toggle('open');

  });
});