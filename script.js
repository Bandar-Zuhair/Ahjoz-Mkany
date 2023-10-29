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
        price: "مليون واربع مئة وخمسين روبية يوميا"
    },
    {
        id: "Cisarua2",
        cardNum: "2",
        image: "taxas1_choprial_ID2/2.jpg",
        location: "بداخل تشوبريال تشوكلت",
        price: "اربعة مليون وخمس مئة روبية يوميا"
    },
    {
        id: "Cisarua3",
        cardNum: "3",
        image: "badVilla_nearTaxas1_ID3/2.jpg",
        location: "بداخل تشوبريال تشوكلت",
        price: "ست مية وخمسين روبية يوميا"
    },
];
/* Cipanas Card Data Create */
var cardDataCipanas = [
    {
        id: "Cipanas1",
        cardNum: "1",
        image: "almadina_baFqih_ID1/1.jpg",
        location: "خلف مطعم بافقيه",
        price: "مليون واربع مئة وخمسين روبية يوميا"
    },
];

/* Cisarua Villa Details Create */
var villaDetailsCisarua = [
    null,
    {
        video: "almadina_baFqih_ID1/vid.mp4",
        picPDF: "almadina_baFqih_ID1/pic.pdf",
        location: "خلف مطعم بافقيه",
        description: "للعوائل فقط - صالة - ثلاث غرف مع مكيف مركزي ودورة مياه لكل غرفة - مطبخ - مسبح - حديقة بسيطة - مطله على منظر جميل",
        price: "السعر بعد الخصم = مليون واربع مئة وخمسين روبيه يوميا",
        villaNumber: "1"
    },
    {
        video: "taxas1_choprial_ID2/vid.mp4",
        picPDF: "taxas1_choprial_ID2/pic.pdf",
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "في الدور الاول صالة كبيرة - غرفتين مع مكيف مركزي ودورة مياه لكل غرفة - مطبخ - وفي الدور الارضي صالة - اربع غرف مع مكيف مركزي ودوره مياه لكل غرفة - مطبخين - طاولة بلياردو - مسبح - جلسة خارجية - حديقة بسيطة - مطله على منظر جميل",
        price: "السعر بعد الخصم = اربعة مليون واربع مئة وخمسين روبية يوميا",
        villaNumber: "2"
    },
    {
        video: "badVilla_nearTaxas1_ID3/vid.mp4",
        picPDF: "badVilla_nearTaxas1_ID3/pic.pdf",
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "صالة - غرفتين مع دورة مياه لكل غرفة - مطبخ - مطله على منظر جميل",
        price: "السعر بعد الخصم = ست مية وخمسين روبية يوميا",
        villaNumber: "3"
    },
];
/* Cipanas Villa Details Create */
var villaDetailsCipanas = [
    null,
    {
        video: "almadina_baFqih_ID1/vid.mp4",
        location: "خلف مطعم بافقيه",
        description: "للعوائل فقط - صالة - ثلاث غرف مع مكيف مركزي ودورة مياه لكل غرفة - مطبخ - مسبح - حديقة بسيطة - مطله على منظر جميل",
        price: "السعر بعد الخصم = مليون واربع مئة وخمسين روبيه يوميا",
        villaNumber: "1"
    },
];











/* Scroll Down */
page_Scroll = function () {
    var goDownToVillaDetails = document.getElementById("villa_Details_Text_Contact_Us");
    setTimeout(function () {
        goDownToVillaDetails.scrollIntoView();
    }, 500);
};
/* Booking Method */
booking_Method.onclick = function () {
    var arMethod = "1- اختار الفيلا الي تبغاها\n2- احفظ رقم الفيلا ومكانها واضغط على احجز الان\n3- ارسل رقم الفيلا ومكانها واسم اليوم او رقم التاريخ الي حاب تحجز فيه الفيلا عشان تشوف اذا كانت متاحه ولا لا\n4- الدفع سيكون مباشر وعند الحجز فقط"
    var enMethod = "\n\n1- Pick the villa the want\n2- Remember the villa id and area\n3- Click on book now and send the villa number with it's area\n4- Send the name of the day or the number of a date to see if the villa you want is avalible or no\n5- The payment will be direct and only upon booking"
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
/* Area Names Effect */
goToCisaruaLink.onclick = function () {
    goToCisaruaLink.style.backgroundColor = "green";
    setTimeout(function () {
        goToCisaruaLink.style.backgroundColor = "rgb(59, 59, 59)";
    }, 1500);
}
goToCipanasLink.onclick = function () {
    goToCipanasLink.style.backgroundColor = "green";
    setTimeout(function () {
        goToCipanasLink.style.backgroundColor = "rgb(59, 59, 59)";
    }, 1500);
}



/* Create Cards */
function createVillaCard(data, areaId, areaName) {
    data.forEach((item, i) => {
        const { cardNum, id, image, location, price } = item;
        const villaCard = document.createElement("div");
        villaCard.className = "villa_card";

        villaCard.innerHTML = `
        <div onclick="show_Villa_Details('${areaName}', ${cardNum}, '${id}'); page_Scroll();" id="${id}" class="villa_Card">
          <img src="${image}" alt="احجز مكاني في فلل اندونيسيا" title="احجز مكاني في فلل اندونيسيا">
          <div class="villa_Info">
            <h1>${location}</h1>
            <h1 class="price">${price}</h1>
            <h1 class="villa_id">رقم الفيلا ${i + 1}</h1>
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
                <video controls title="احجز مكاني في فلل اندونيسيا" id="villa_Details_Video">
                    <source src=${villa.video} type="video/mp4">
                    خطأ، الفيديو لايعمل على هذا المتصفح.
                </video>
            </div>

            <div id="villa_Details_Text_Div">
                <div id="PDF_File_Div">
                    <a href=${villa.picPDF} target="_blank">صور الفيلا</a>
                </div>

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

    take_Me_Back = function (id) {
        var targetedCard = document.getElementById(id);

        if (targetedCard) {
            var elementTop = targetedCard.getBoundingClientRect().top;
            var offset = elementTop - (window.innerHeight / 2 - targetedCard.clientHeight / 2);
            window.scrollBy({
                top: offset,
            });
            targetedCard.style.backgroundColor = "green";
            targetedCard.style.borderColor = "orange";
        }
    }
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
