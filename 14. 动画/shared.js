// 选中遮罩
var backdrop = document.querySelector('.backdrop');
// 选中对话框
var modal = document.querySelector('.modal');
// 选中对话框 NO 按钮
var modalNoButton = document.querySelector('.modal button');
// 选中页面上的 ChoosePlan 按钮
var selectPlanButtons = document.querySelectorAll('.plan button');
// 选中侧边导航栏切换按钮
var toggleButton = document.querySelector('.toggle-button');
// 选中侧边导航栏
var mobileNav = document.querySelector('.mobile-nav')
// 选中行为召唤按钮
var ctaButton = document.querySelector('.main-nav__item--cta');


// 选中 backdrop 类的所有元素, 返回的是一个数组
// var backdrop = document.querySelectorAll('.backdrop');
// 打印 backdrop 对象, 我们在JS中操作的样式属性都是直接作用在行内样式上的, 所以这个对象的 style 属性上也只有行内样式
// console.dir(backdrop);
// console.dir(selectPlanButtons);

// 给每个 ChoosePlan 按钮绑定点击事件
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // 直接在行内样式上修改
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        // 或者通过添加或删除类来修改
        // className 会直接覆盖原先的类, 所以用 classList
        // backdrop.className = 'open';
        backdrop.style.display = "block";
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
        modal.classList.add('open');
    })
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    setTimeout(() => {
        // 关闭时, 首先清除样式类 ,然后再设置 display: none; 不然的话关闭时就不会有过渡, 
        // 并且!! 此时 setTimeout 的时间必须和转换时间或者是持续时间相匹配, 也就是过渡效果的时间
        backdrop.style.display = 'none';
    }, 200);
};

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.style.display = "block";
    mobileNav.classList.add('open');
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
})

// 首先将 display 设置成 none 或 block 或我们需要的任何东西; 
// 然后, 我们在 setTimeout 函数中改变或添加或清除具体的 class, 这确保了CSS不会再一步中更改所有属性因此省略了过渡
// 首先且关键的部分是改变display, 然后通过具体的 class 改变了其他属性, 最后也起到了过渡的作用


ctaButton.addEventListener("animationstart", function (event) {
    console.log('Animation started', event);
})
ctaButton.addEventListener("animationend", function (event) {
    console.log('Animation ended', event);
})
ctaButton.addEventListener("animationiteration", function (event) {
    console.log('Animation iteration', event);
})

