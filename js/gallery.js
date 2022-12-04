//открытие фото
document.querySelectorAll('.work__image').forEach (image => {
    image.onclick = () => {
        document.querySelector('.popup__picture').style.display = 'block';
        document.querySelector('.popup__picture-photo').src = image.getAttribute('src');
    }
});

document.querySelector('.popup__close').onclick = () => {
    document.querySelector('.popup__picture').style.display = 'none';
}
// закрытие попапов кнопкой ecs
document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
    //ваша функция закрытия окна
        document.querySelector('.popup__picture').style.display = 'none';
    }
});
// закрытие попапов по оверлей
  document.querySelector('.popup__picture').onclick = () => {
    document.querySelector('.popup__picture').style.display = 'none';
}

// Табы для галлерии 
const tabsBtn   = document.querySelectorAll(".tabs__caption-link");
const tabsItems = document.querySelectorAll(".tabs__content");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__caption-link').click();
