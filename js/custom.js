// #TODO: dropdown 버튼 누르면 아래방향, 왼쪽방향 바뀌게
function dropdownmenu(elem) {
    var dropdown_content = elem.nextElementSibling;
    
    if (dropdown_content.style.display == "block") {
        dropdown_content.style.display = "none";
    } else {
        dropdown_content.style.display = "block";
    }
}

function hide_sidebar() {
    //TODO: sidebar 현재 위치 = sidebar top + scorll y
    //      sidebar 현재 위치 < footer top : display none
    // 화면 사이즈를 구해야 할 듯?
    let scroll_y = window.scrollY;
    let sidebar = document.getElementById("sidebar-wrapper");
    let sidebar_top = document.getElementById("sidebar-wrapper").offsetTop;
    let sidebar_y = sidebar_top + scroll_y;
    let footer_top = document.getElementById("footer").offsetTop;
    let blog_list = document.getElementById("blog-list");
    let footer_height = document.getElementById("footer").offsetHeight;

    if (scroll_y > blog_list.offsetHeight - 400) {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block"
    }
}