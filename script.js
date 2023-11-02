/* Comment Photo Data */
var commentData = [
    {
        id: "1",
        image: "comments/1.jpg",
        reply: "اشكرك يالغالي الله يسعدك"
    },
    {
        id: "2",
        image: "comments/2.jpg",
        reply: "حبيبي"
    },
    {
        id: "3",
        image: "comments/3.jpg",
        reply: "اشكرك كثير"
    },
    {
        id: "4",
        image: "comments/1.jpg",
        reply: ""
    },
    {
        id: "5",
        image: "comments/2.jpg",
        reply: "اتشرفت فيك حبيبي"
    },
    {
        id: "6",
        image: "comments/3.jpg",
        reply: "اهلا وسهلا يالغالي"
    },
];

/* Cisarua Card Data Create */
var cardDataCisarua = [
    {
        id: "Cisarua1",
        cardNum: "1",
        image: "almadina_baFqih_ID1/1.jpg",
        location: "خلف مطعم بافقيه",
        price: "مليون واربع مئة وخمسين روبية يوميا",
    },
    {
        id: "Cisarua2",
        cardNum: "2",
        image: "taxas1_choprial_ID2/2.jpg",
        location: "بداخل تشوبريال تشوكلت",
        price: "اربعة مليون وخمس مئة روبية يوميا",
    },
    {
        id: "Cisarua3",
        cardNum: "3",
        image: "real_choprial_ID3/2.jpg",
        location: "بداخل تشوبريال تشوكلت",
        price: "ست مية وخمسين روبية يوميا",
    },
];
/* Cipanas Card Data Create */
var cardDataCipanas = [
    {
        id: "Cipanas1",
        cardNum: "1",
        image: "",
        location: "",
        price: ""
    },
];

/* Cisarua Villa Details Create */
var villaDetailsCisarua = [
    null,
    {
        video: "almadina_baFqih_ID1/vid.mp4",
        ImgPage: ["almadina_baFqih_ID1/1.jpg", "almadina_baFqih_ID1/2.jpg", "almadina_baFqih_ID1/3.jpg", "almadina_baFqih_ID1/4.jpg", "almadina_baFqih_ID1/5.jpg", "almadina_baFqih_ID1/6.jpg", "almadina_baFqih_ID1/7.jpg", "almadina_baFqih_ID1/8.jpg", "almadina_baFqih_ID1/9.jpg", "almadina_baFqih_ID1/10.jpg", "almadina_baFqih_ID1/11.jpg", "almadina_baFqih_ID1/12.jpg",],
        location: "خلف مطعم بافقيه",
        description: "للعوائل فقط - صالة - ثلاث غرف مع مكيف مركزي ودورة مياه لكل غرفة - مطبخ - مسبح - حديقة بسيطة - مطله على منظر جميل - انترنت مجاني",
        price: "السعر بعد الخصم = مليون واربع مئة وخمسين روبيه يوميا",
        villaNumber: "1"
    },
    {
        video: "taxas1_choprial_ID2/vid.mp4",
        ImgPage: ["taxas1_choprial_ID2/2.jpg", "taxas1_choprial_ID2/3.jpg", "taxas1_choprial_ID2/4.jpg", "taxas1_choprial_ID2/5.jpg", "taxas1_choprial_ID2/6.jpg", "taxas1_choprial_ID2/7.jpg", "taxas1_choprial_ID2/8.jpg", "taxas1_choprial_ID2/9.jpg", "taxas1_choprial_ID2/10.jpg", "taxas1_choprial_ID2/11.jpg", "taxas1_choprial_ID2/12.jpg", "taxas1_choprial_ID2/13.jpg", "taxas1_choprial_ID2/14.jpg", "taxas1_choprial_ID2/15.jpg", "taxas1_choprial_ID2/16.jpg", "taxas1_choprial_ID2/17.jpg", "taxas1_choprial_ID2/18.jpg", "taxas1_choprial_ID2/19.jpg", "taxas1_choprial_ID2/20.jpg", "taxas1_choprial_ID2/21.jpg", "taxas1_choprial_ID2/22.jpg",],
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "في الدور الاول صالة كبيرة - غرفتين مع مكيف مركزي ودورة مياه لكل غرفة - مطبخ - وفي الدور الارضي صالة - اربع غرف مع مكيف مركزي ودوره مياه لكل غرفة - مطبخين - طاولة بلياردو - مسبح - جلسة خارجية - حديقة بسيطة - مطله على منظر جميل - انترنت مجاني",
        price: "السعر بعد الخصم = اربعة مليون واربع مئة وخمسين روبية يوميا",
        villaNumber: "2"
    },
    {
        video: "real_choprial_ID3/vid.mp4",
        ImgPage: ["real_choprial_ID3/2.jpg", "real_choprial_ID3/3.jpg", "real_choprial_ID3/4.jpg", "real_choprial_ID3/5.jpg", "real_choprial_ID3/6.jpg", "real_choprial_ID3/7.jpg", "real_choprial_ID3/8.jpg", "real_choprial_ID3/9.jpg", "real_choprial_ID3/10.jpg", "real_choprial_ID3/11.jpg",],
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "صالة - غرفتين مع دورة مياه لكل غرفة - مطبخ - مطله على منظر جميل - انترنت مجاني",
        price: "السعر بعد الخصم = ست مية وخمسين روبية يوميا",
        villaNumber: "3"
    },
];
/* Cipanas Villa Details Create */
var villaDetailsCipanas = [
    null,
    {
        video: "",
        location: "",
        description: "",
        price: "",
        villaNumber: ""
    },
];







/* Scroll Down To Villa Details */
page_Scroll = function () {
    setTimeout(function () {
        var element = document.getElementById("villa_Details_Video_Area");
        var elementRect = element.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        var scrollY = elementRect.bottom - viewHeight + 50;

        window.scrollBy({
            top: scrollY,
        });
    }, 200);
};

Scroll_Up = function () {
    var element = document.getElementById("villa_Details_Video_Area");
    var elementRect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var scrollY = elementRect.bottom - viewHeight + 50;
    window.scrollBy({
        top: scrollY,
    });
};
go_To_Area_Part = function (id) {
    var goToAreaName = document.getElementById(id);
    var goToAreaNameRect = goToAreaName.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var scrollY = goToAreaNameRect.top - (viewHeight / 2) + (goToAreaNameRect.height / 2 + 150);
    window.scrollBy({
        top: scrollY,
    });
}

/* Booking Method */
booking_Method.onclick = function () {
    var arMethod = "1- اختار الفيلا الي تبغاها\n2- احفظ رقم الفيلا ومكانها واضغط على احجز الان\n3- ارسل رقم الفيلا ومكانها واسم اليوم او رقم التاريخ الي حاب تحجز فيه الفيلا عشان تشوف اذا كانت متاحه ولا لا\n4- الدفع سيكون مباشر وعند الحجز فقط"
    var enMethod = "\n\n1- Imgk the villa the want\n2- Remember the villa id and area\n3- Click on book now and send the villa number with it's area\n4- Send the name of the day or the number of a date to see if the villa you want is avalible or no\n5- The payment will be direct and only upon booking"
    alert(arMethod + enMethod);
};
/* Note */
note_Btn.onclick = function () {
    var arNote = "المشكلة الوحيدة الي راح تواجها في موقع احجز مكاني هي ان في بعض الاحيان تكون الفيلا الي تريد حجزها بالفعل محجوزة من شخص اخر، ف افضل حل لهذه المشكلة هو حجز اكثر من فيلا واحدة لكي تضمن مكانك في حال ان كانت الفلل الي اخترتها محجوزة بالفعل وواحدة منها تكون متاحة لك";
    var enNote = "\n \nThe only problem that you might face in Ahjoz Mkany website is that sometimes the Villa you want is already taken by someone else, therfore The best solution to this problem is that you can book more than one Villa just in case if they were all taken then one of them might be available for you";
    alert(arNote + enNote);
};
/* Hide & Show Header */
hide_Btn.onclick = function () {
    header.classList.add("hide_Display");
    hide_Btn.classList.add("hide_Display");
    show_Btn.classList.remove("hide_Display");
};
show_Btn.onclick = function () {
    header.classList.remove("hide_Display");
    hide_Btn.classList.remove("hide_Display");
    show_Btn.classList.add("hide_Display");
};



/* Create Cards */
function createVillaCard(data, areaId, areaName) {
    data.forEach((item, i) => {
        var { cardNum, id, image, location, price } = item;
        var villaCard = document.createElement("div");
        villaCard.className = "villa_card";

        villaCard.innerHTML = `
        <div onclick="show_Villa_Details('${areaName}', ${cardNum}, '${id}'); page_Scroll();" id="${id}" class="villa_Card">
          <img src="${image}" alt="احجز مكاني في فلل اندونيسيا" title="احجز مكاني في فلل اندونيسيا">
          <div class="villa_Info">
            <h1>${location}</h1>
            <h1 class="price">${price}</h1>
            <h1 class="villa_id">رقم الفيلا ${i + 1}</h1>
            <h1 class="villa_Area_Name">${areaName}</h1>
          </div>
        </div>
      `;

        areaId.appendChild(villaCard);
    });
}
createVillaCard(cardDataCisarua, cisarua_villa_Area_Id, 'سيساروا');
createVillaCard(cardDataCipanas, cipanas_villa_Area_Id, 'شيباناس');



/* Show Cards Details */
show_Villa_Details = function (areaLocation, cardNum, id) {
    var areaSelected = areaLocation === 'سيساروا' ? villaDetailsCisarua : villaDetailsCipanas;
    var villa_Details_Card = document.createElement("div");
    villa_Details_Card.classList.add("villa_Details_Card");


    var villa = areaSelected[cardNum];


    var villa_Details_Info = `
        <a onclick="take_Me_Back('${id}');" id="go_Back_Card">فيلا رقم ${cardNum}</a>
        <div id="villa_Details_Video_Area">
            <video src='${villa.video}' controls title="احجز مكاني في فلل اندونيسيا" id="villa_Details_Video"></video>
        </div>

        <div id="villa_Details_Text_Div">
            <div id="villa_Details_Text">
                <h1>${villa.location}</h1>
                <h1>${villa.description}</h1>
                <h1 id="villa_Details_Text_Price">${villa.price}</h1>
                <h1 id="villa_Details_Text_Villa_Id">رقم الفيلا في ${areaLocation} ${villa.villaNumber}</h1>
                <a id="villa_Details_Text_Contact_Us" href="https://wa.me/+6282246117155" target="_blank">احجز الان</a>
            </div>
        </div>
    `;

    villa_Details_Card.innerHTML = villa_Details_Info;
    villa_Details_Area.innerHTML = "";
    villa_Details_Area.appendChild(villa_Details_Card);

    build_Big_Img(villa.ImgPage);
}



function build_Big_Img(ImgPage) {
    var bigImgDiv = document.getElementById('big_Img_Div');
    if (bigImgDiv) {
        bigImgDiv.innerHTML = '';
    } else {
        bigImgDiv = document.createElement('div');
        bigImgDiv.id = 'big_Img_Div';
    }

    var bigImgTitle = document.createElement('h1');
    bigImgTitle.textContent = 'صور الفيلا';
    bigImgTitle.id = 'big_Img_Title';
    bigImgDiv.appendChild(bigImgTitle);

    var goBackVillaDetails = document.createElement('a');
    goBackVillaDetails.textContent = 'صعود';
    goBackVillaDetails.id = 'go_Back_Villa_Details';
    bigImgDiv.appendChild(goBackVillaDetails);

    function handleScroll() {
        var titleElement = document.getElementById('big_Img_Title');
        var titleOffsetTop = titleElement.offsetTop;

        if (window.scrollY > titleOffsetTop + titleElement.clientHeight - 200) {
            goBackVillaDetails.style.visibility = 'visible';
        } else {
            goBackVillaDetails.style.visibility = 'hidden';
        }
    }

    window.addEventListener('scroll', handleScroll);

    goBackVillaDetails.onclick = function () {
        Scroll_Up();
    }

    for (var i = 0; i < ImgPage.length; i++) {
        var imgCreate = document.createElement('img');
        imgCreate.src = ImgPage[i];
        imgCreate.id = 'big_Villa_Img';
        imgCreate.alt = 'فلل اندونيسيا';
        imgCreate.title = 'فلل اندونيسيا';
        imgCreate.setAttribute('loading', 'lazy');
        imgCreate.addEventListener('click', function () {
            console.log(this.src);
            var full_Screen_Img_Overlay = document.createElement('div');
            full_Screen_Img_Overlay.classList.add("full_Screen_Img_Div");
            var full_Screen_Img = document.createElement('img');
            full_Screen_Img.src = this.src;
            var exit_Full_Screen_Btn = document.createElement('a');
            exit_Full_Screen_Btn.classList.add("exit_Full_Screen_Btn");
            exit_Full_Screen_Btn.textContent = 'عودة';
            exit_Full_Screen_Btn.onclick = function(){
                document.body.removeChild(full_Screen_Img_Overlay);
                full_Screen_Img_Overlay.removeChild(full_Screen_Img);
                full_Screen_Img_Overlay.removeChild(exit_Full_Screen_Btn);
            }

            full_Screen_Img_Overlay.appendChild(full_Screen_Img);
            full_Screen_Img_Overlay.appendChild(exit_Full_Screen_Btn);

            document.body.appendChild(full_Screen_Img_Overlay);
        });

        bigImgDiv.appendChild(imgCreate);
    }

    if (!document.getElementById('big_Img_Div')) {
        document.body.appendChild(bigImgDiv);
    }
}










function take_Me_Back(id) {
    var targetedCard = document.getElementById(id);
    var elementTop = targetedCard.getBoundingClientRect().top;
    var offset = elementTop - (window.innerHeight / 2 - targetedCard.clientHeight / 2);
    window.scrollBy({
        top: offset,
    });
    targetedCard.style.backgroundColor = "green";
    targetedCard.style.borderColor = "orange";
}




/* Create Comment Card */
var commentNum = 0;
var commentCard = document.createElement("div");
commentCard.classList.add("comment_Card");
var fullScreenImage = null;
var overlay = null;

function updateCommentInfo() {
    var commentInfo = `
    <div id="comment_Card">
        <div id="comment_Image">
            <ion-icon id="sec2_Arrow_Forward" class="arrow_Icon" name="arrow-forward-outline"></ion-icon>
            <img id="comment_Info_Image" src="${commentData[commentNum].image}" alt="تعليقات موقع احجز مكاني" title="تعليقات موقع احجز مكاني">
            <ion-icon id="sec2_Arrow_Back" class="arrow_Icon" name="arrow-back-outline"></ion-icon>
        </div>
        <div id="my_Reply">
            <h1>${commentData[commentNum].reply}</h1>
        </div>
    </div>
    `;

    commentCard.innerHTML = commentInfo;
    all_Comments_Area.appendChild(commentCard);

    sec2_Arrow_Forward.onclick = function () {
        commentNum = (commentNum + 1) % commentData.length;
        updateImageAndReply();
        sec2_Arrow_Forward.style.backgroundColor = "green";
        sec2_Arrow_Back.style.backgroundColor = "rgb(59, 59, 59)";
        setTimeout(function () {
            sec2_Arrow_Forward.style.backgroundColor = "rgb(59, 59, 59)";
        }, 1500);
    };

    sec2_Arrow_Back.onclick = function () {
        commentNum = (commentNum - 1 + commentData.length) % commentData.length;
        updateImageAndReply();
        sec2_Arrow_Back.style.backgroundColor = "green";
        sec2_Arrow_Forward.style.backgroundColor = "rgb(59, 59, 59)";
        setTimeout(function () {
            sec2_Arrow_Back.style.backgroundColor = "rgb(59, 59, 59)";
        }, 1500);
    };

    comment_Info_Image.onclick = function () {
        openFullScreenImage(commentData[commentNum].image);
    };

    function openFullScreenImage(src) {
        fullScreenImage = document.createElement("div");
        fullScreenImage.classList.add("full_Screen_Comment");

        var fullScreenImageInfo = `
        <img src="${src}" alt="احجز مكاني في فلل اندونيسيا">
        `;

        fullScreenImage.innerHTML = fullScreenImageInfo;

        overlay = document.createElement("div");
        overlay.classList.add("overlay");

        document.body.appendChild(fullScreenImage);
        document.body.appendChild(overlay);

        fullScreenImage.onclick = function () {
            closeFullScreenImage();
        };

        overlay.onclick = function () {
            closeFullScreenImage();
        };

        window.addEventListener("scroll", function () {
            closeFullScreenImage();
        });
    }

    function closeFullScreenImage() {
        if (fullScreenImage) {
            document.body.removeChild(fullScreenImage);
        }
        if (overlay) {
            document.body.removeChild(overlay);
        }
        fullScreenImage = null;
        overlay = null;
    }

    function updateImageAndReply() {
        comment_Info_Image.src = commentData[commentNum].image;
        my_Reply.querySelector('h1').textContent = commentData[commentNum].reply;
    }
}

updateCommentInfo();
