//焦点图
var imglist = [
    "url('static/image/OIP1.jpg')",
    "url('static/image/OIP2.jpg')",
    "url('static/image/OIP3.jpg')",
    "url('static/image/OIP4.jpg')",
    "url('static/image/OIP5.jpg')"
]
var count = 0;
var spotelement = $('.spot>li');
//点击切换图片
// spotelement.click(function () {
//     count = $(this).index()
//     go;
// })
// var index = 0;
function changeImg(index) {

    var focus = $('.focus')
    if (index == spotelement.length) {
        index = 0
    }
    focus[0].style.backgroundImage = imglist[index]
    for (var i = 0; i < spotelement.length; i++) {
        if (index == i) {
            spotelement[i].style.backgroundColor = 'salmon'

        } else {
            spotelement[i].style.backgroundColor = '#ccc'
        }

    }

    index++
    count = index
}

// changeImg();
// go = setInterval('changeImg(count)', 2000)

function getTitle() {
    var text = $('.active').text();
    $('.panel-title').text(text);
}

var contentelement = $('.content');
contentelement[0].style.display = 'block';
getTitle();
//点击导航显示相应的content内容
$('li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var title = $(this).text();
    getTitle();
    var index = $(this).index();
    for (var i = 0; i < contentelement.length; i++) {
        if (i != index) {
            contentelement[i].style.display = 'none';
        }
        contentelement[index].style.display = 'block';
    }

})

