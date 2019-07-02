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
        backdrop.classList.add('open');
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
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
};

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})