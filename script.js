// var container = document.getElementById("container");
//
// var imgList = [
//     "https://source.unsplash.com/820x600",
//     "https://source.unsplash.com/819x600",
//     "https://source.unsplash.com/818x600",
//     "https://source.unsplash.com/817x600",
//     "https://source.unsplash.com/816x600",
//     "https://source.unsplash.com/815x600",
//     "https://source.unsplash.com/814x600",
//     "https://source.unsplash.com/813x600",
//     "https://source.unsplash.com/812x600",
// ];
//
// var maxContainer = document.createElement("div");
// maxContainer.classList.add("max__container");
//
// var prevBtn = document.createElement("button");
// prevBtn.classList.add("prev__btn");
// var text1 = document.createTextNode("PREV");
// prevBtn.appendChild(text1);
//
// var nextBtn = document.createElement("button");
// nextBtn.classList.add("next__btn");
// var text2 = document.createTextNode("NEXT");
// nextBtn.appendChild(text2);
//
// container.append(maxContainer);
// container.append(prevBtn);
// container.append(nextBtn);
//
// for (var i = 0; i < imgList.length; i++) {
//
//     var newImg = document.createElement("img");
//     newImg.classList.add("new__img");
//     newImg.src = imgList[i];
//     maxContainer.appendChild(newImg);
//
// }
//
// var minContainer = maxContainer.cloneNode(true);
// minContainer.setAttribute("class", "min__container");
// minContainer.firstElementChild.classList.add("active");
// container.append(minContainer);
//
// var active = minContainer.firstElementChild;
// var count = 1;
//
// var minContainerChildren = Array.from(minContainer.children)
// var index;
//
// nextBtn.addEventListener("click", function () {
//     var percent = -100 * count
//     if (!active.nextElementSibling) {
//         percent = 0;
//         count = 0;
//     }
//     maxContainer.style.transform = "translateX(" + percent + "%)";
//     count++;
//
//     active.classList.remove("active");
//     (active.nextElementSibling || minContainer.firstElementChild).classList.add("active");
//     active = (active.nextElementSibling || minContainer.firstElementChild);
//
//     index = minContainerChildren.findIndex(function (v) {
//         return v.classList.contains("active")
//     })
//
//     minContainer.scrollTo(0, 0);
//     if (index > 1) {
//         minContainer.scrollTo(130 * (index - 2), 0);
//     }
//
// })
//
//
// prevBtn.addEventListener("click", function () {
//     count--;
//
//     var percent = -100 * count + 100;
//     if (!active.previousElementSibling) {
//         percent = -100 * (imgList.length - 1);
//         count = imgList.length;
//     }
//
//     maxContainer.style.transform = "translateX(" + percent + "%)";
//
//     active.classList.remove("active");
//     (active.previousElementSibling || minContainer.lastElementChild).classList.add("active");
//     active = (active.previousElementSibling || minContainer.lastElementChild);
//
//     index = minContainerChildren.findIndex(function (v) {
//         return v.classList.contains("active")
//     })
//
//     minContainer.scrollTo(0, 0);
//     if (index > 1) {
//         minContainer.scrollTo(130 * (index - 2), 0);
//     }
//
// })
//
// for (i = 0; i < minContainerChildren.length; i++) {
//     (function (i) {
//
//         minContainerChildren[i].addEventListener('click', function () {
//
//             maxContainer.style.transform = "translateX(" + (-100 * i) + "%)";
//             count = i + 1;
//
//             minContainerChildren.find(function (v) {
//                 if (v.classList.contains("active")) v.classList.remove('active');
//             })
//             minContainerChildren[i].classList.add('active');
//             active = minContainerChildren[i];
//
//         })
//     }(i))
//
// }

var container = document.getElementById("container");

var imgList = [
    "https://source.unsplash.com/820x600",
    "https://source.unsplash.com/819x600",
    "https://source.unsplash.com/818x600",
    "https://source.unsplash.com/817x600",
    "https://source.unsplash.com/816x600",
    "https://source.unsplash.com/815x600",
    "https://source.unsplash.com/814x600",
    "https://source.unsplash.com/813x600",
    "https://source.unsplash.com/812x600",
];

(function () {
    if (!container || imgList.length < 1) return null;

    var maxContainer = document.createElement("div");
    maxContainer.classList.add("max__container");

    var prevBtn = document.createElement("button");
    prevBtn.classList.add("prev__btn");
    var text1 = document.createTextNode("PREV");
    prevBtn.appendChild(text1);

    var nextBtn = document.createElement("button");
    nextBtn.classList.add("next__btn");
    var text2 = document.createTextNode("NEXT");
    nextBtn.appendChild(text2);

    container.append(maxContainer);
    container.append(prevBtn);
    container.append(nextBtn);

    for (var i = 0; i < imgList.length; i++) {

        var newImg = document.createElement("img");
        newImg.classList.add("new__img");
        newImg.src = imgList[i];
        maxContainer.appendChild(newImg);

    }

    var minContainer = maxContainer.cloneNode(true);
    minContainer.setAttribute("class", "min__container");
    minContainer.firstElementChild.classList.add("active");
    container.append(minContainer);

    var minContainerChildren = Array.from(minContainer.children);

    for (i = 0; i < minContainerChildren.length; i++) {
        (function (i) {

            minContainerChildren[i].addEventListener('click', function () {

                maxContainer.style.transform = "translateX(" + (-100 * i) + "%)";
                count = i + 1;

                minContainerChildren.find(function (v) {
                    if (v.classList.contains("active")) v.classList.remove('active');
                })
                minContainerChildren[i].classList.add('active');
                active = minContainerChildren[i];

            })
        }(i));

    }

    var active = minContainer.firstElementChild;
    var count = 1;

    nextBtn.addEventListener("click", function () {
        var percent = -100 * count;
        if (!active.nextElementSibling) {
            percent = 0;
            count = 0;
        }
        maxContainer.style.transform = "translateX(" + percent + "%)";
        count++;

        active.classList.remove("active");
        (active.nextElementSibling || minContainer.firstElementChild).classList.add("active");
        active = (active.nextElementSibling || minContainer.firstElementChild);

        getSlider();

    })


    prevBtn.addEventListener("click", function () {
        count--;

        var percent = -100 * count + 100;
        if (!active.previousElementSibling) {
            percent = -100 * (imgList.length - 1);
            count = imgList.length;
        }

        maxContainer.style.transform = "translateX(" + percent + "%)";

        active.classList.remove("active");
        (active.previousElementSibling || minContainer.lastElementChild).classList.add("active");
        active = (active.previousElementSibling || minContainer.lastElementChild);

        getSlider();

    })

    function getSlider() {
        var index = minContainerChildren.findIndex(function (v) {
            return v.classList.contains("active");
        });

        minContainer.scrollTo(0, 0);
        if (index > 1) {
            minContainer.scrollTo(130 * (index - 2), 0);
        }

    }

}());