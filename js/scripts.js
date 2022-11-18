const selectors = {
    openMenu: '.header__open-menu',
    headerMenu: '.header__menu'
}
const openMenu = document.querySelector(selectors.openMenu);
const headerMenu = document.querySelector(selectors.headerMenu);


openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('active')
    headerMenu.classList.toggle('active')
  });

  initImg('#test img', [
    'https://bs107.ru/assets/resize/7/a/7a9268ca_aa3b29fd.png', 
    'https://bs107.ru/assets/resize/c/4/c47d2b20_aa3b29fd.png', 
    'https://bs107.ru/assets/resize/f/5/f5d29d6a_aa3b29fd.png', 
    'https://bs107.ru/assets/resize/4/7/47f2417a_aa3b29fd.png', 
    'https://bs107.ru/assets/resize/b/2/b272e7ba_aa3b29fd.png'
  ]); 
  
  function initImg(selector, srcArr) {
    const img = document.querySelector(selector); 
    Object.assign(img, {
      buf: Object.assign(new Image(), { img }), 
      srcArr: [...srcArr], 
      changeInterval: 5e3,
      bufIdx: 0,
      change: function () {
        this.style.animationName = 'img-in'; 
        this.src = this.buf.src || this.nextImage(); 
        this.buf.src = this.nextImage(); 
      }, 
      nextImage: function () {
        this.bufIdx = ++this.bufIdx < this.srcArr.length ? this.bufIdx : 0;
        return this.srcArr[this.bufIdx];
      }
    }); 
    img.buf.addEventListener('load', loadHandler); 
    img.addEventListener('animationend', animEndHandler); 
    img.change(); 
    return img; 
  
    function loadHandler() {
      setTimeout(
        () => this.img.style.animationName = 'img-out', 
        this.img.changeInterval 
      ); 
    }
    function animEndHandler({ animationName }) {
      if (animationName === 'img-out') 
        this.change(); 
    }
  }