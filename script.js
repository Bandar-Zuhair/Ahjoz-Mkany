/*  How To Add Villa?
    Make Sure You Enter The Villa Card Info And Villa Details Info
    Make Sure You Enter Only The Villa Cards Info in Each Cards Filtter
*/



/* Cisarua Card Data Create */
let allCardsDataCisarua = [
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
        image: "real_choprial_ID3/1.JPG",
        location: "بداخل تشوبريال تشوكلت",
        price: "سبع مية وخمسين روبية يوميا",
    },
    {
        id: "Cisarua4",
        cardNum: "4",
        image: "harizbon_choprial_ID4/1.JPG",
        location: "بداخل تشوبريال تشوكلت",
        price: "مليون وثلاث مئة وخمسين روبية يوميا",
    },
];
/* Cipanas Card Data Create */
let allCardsDataCipanas = [
    {
        id: "Cipanas1",
        cardNum: "1",
        image: "",
        location: "",
        price: ""
    },
];

/* Cisarua Villa Details Create */
let villaDetailsCisarua = [
    null,
    {
        video: "almadina_baFqih_ID1/vid.mp4",
        imgAraay: ["almadina_baFqih_ID1/1.jpg", "almadina_baFqih_ID1/2.jpg", "almadina_baFqih_ID1/3.jpg", "almadina_baFqih_ID1/4.jpg", "almadina_baFqih_ID1/5.jpg", "almadina_baFqih_ID1/6.jpg", "almadina_baFqih_ID1/7.jpg", "almadina_baFqih_ID1/8.jpg", "almadina_baFqih_ID1/9.jpg", "almadina_baFqih_ID1/10.jpg", "almadina_baFqih_ID1/11.jpg", "almadina_baFqih_ID1/12.jpg",],
        location: "خلف مطعم بافقيه",
        description: "للعوائل فقط - صالة - ثلاث غرف مع مكيف مركزي ودورة مياه لكل غرفة - مطبخ - مسبح - حديقة بسيطة - مطله على منظر جميل - انترنت مجاني",
        price: "السعر بعد الخصم = مليون واربع مئة وخمسين روبيه يوميا",
        villaNumber: "1"
    },
    {
        video: "taxas1_choprial_ID2/vid.mp4",
        imgAraay: ["taxas1_choprial_ID2/2.jpg", "taxas1_choprial_ID2/3.jpg", "taxas1_choprial_ID2/4.jpg", "taxas1_choprial_ID2/5.jpg", "taxas1_choprial_ID2/6.jpg", "taxas1_choprial_ID2/7.jpg", "taxas1_choprial_ID2/8.jpg", "taxas1_choprial_ID2/9.jpg", "taxas1_choprial_ID2/10.jpg", "taxas1_choprial_ID2/11.jpg", "taxas1_choprial_ID2/12.jpg", "taxas1_choprial_ID2/13.jpg", "taxas1_choprial_ID2/14.jpg", "taxas1_choprial_ID2/15.jpg", "taxas1_choprial_ID2/16.jpg", "taxas1_choprial_ID2/17.jpg", "taxas1_choprial_ID2/18.jpg", "taxas1_choprial_ID2/19.jpg", "taxas1_choprial_ID2/20.jpg", "taxas1_choprial_ID2/21.jpg", "taxas1_choprial_ID2/22.jpg",],
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "في الدور الاول صالة كبيرة - غرفتين مع مكيف مركزي ودورة مياه لكل غرفة - مطبخ - وفي الدور الارضي صالة - اربع غرف مع مكيف مركزي ودوره مياه لكل غرفة - مطبخين - طاولة بلياردو - مسبح - جلسة خارجية - حديقة بسيطة - مطله على منظر جميل - انترنت مجاني",
        price: "السعر بعد الخصم = اربعة مليون واربع مئة وخمسين روبية يوميا",
        villaNumber: "2"
    },
    {
        video: "real_choprial_ID3/vid.mp4",
        imgAraay: ["real_choprial_ID3/1.JPG", "real_choprial_ID3/2.jpg", "real_choprial_ID3/3.jpg", "real_choprial_ID3/4.jpg", "real_choprial_ID3/5.jpg", "real_choprial_ID3/6.jpg", "real_choprial_ID3/7.jpg", "real_choprial_ID3/8.jpg", "real_choprial_ID3/9.jpg", "real_choprial_ID3/10.jpg", "real_choprial_ID3/11.jpg",],
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "صالة - غرفتين مع دورة مياه لكل غرفة - مطبخ - مطله على منظر جميل - انترنت مجاني",
        price: "السعر بعد الخصم = سبع مية وخمسين روبية يوميا",
        villaNumber: "3"
    },
    {
        video: "real_choprial_ID3/vid.mp4",
        imgAraay: ["harizbon_choprial_ID4/1.JPG", "harizbon_choprial_ID4/2.JPG", "harizbon_choprial_ID4/3.JPG", "harizbon_choprial_ID4/4.JPG", "harizbon_choprial_ID4/5.JPG", "harizbon_choprial_ID4/6.JPG",],
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "صالة - ثلاث غرف مع دورة مياه لكل غرفة - مطبخ - مطله على منظر جميل - انترنت مجاني",
        price: "السعر بعد الخصم = مليون وثلاث مئة وخمسين روبية يوميا",
        villaNumber: "4"
    },
];
/* Cipanas Villa Details Create */
let villaDetailsCipanas = [
    null,
    {
        video: "",
        location: "",
        description: "",
        price: "",
        villaNumber: ""
    },
];


function rebuild_All_Villa_Cards(id, goToThisArea) {

    if (id === "all_Price") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        allCardsDataCisarua = [
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
                image: "real_choprial_ID3/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "سبع مية وخمسين روبية يوميا",
            },
            {
                id: "Cisarua4",
                cardNum: "4",
                image: "harizbon_choprial_ID4/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "مليون وثلاث مئة وخمسين روبية يوميا",
            },
        ];
        allCardsDataCipanas = [
            {
                id: "Cipanas1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuildAllCards(allCardsDataCisarua, allCardsDataCipanas);
        custom_Cisarua_Cards.innerText = "جميع الاسعار ▼";
        custom_Cipanas_Cards.innerText = "جميع الاسعار ▼";
        villa_Details_Area.innerHTML = "";
    } else if (id === "four_Millons") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        allCardsDataCisarua = [
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
                image: "real_choprial_ID3/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "سبع مية وخمسين روبية يوميا",
            },
            {
                id: "Cisarua4",
                cardNum: "4",
                image: "harizbon_choprial_ID4/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "مليون وثلاث مئة وخمسين روبية يوميا",
            },
        ];
        allCardsDataCipanas = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuildAllCards(allCardsDataCisarua, allCardsDataCipanas);
        custom_Cisarua_Cards.innerText = "اربع مليون روبية او اقل ▼";
        custom_Cipanas_Cards.innerText = "اربع مليون روبية او اقل ▼";
        villa_Details_Area.innerHTML = "";

    } else if (id === "three_Millons") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        allCardsDataCisarua = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
            {
                id: "Cisarua3",
                cardNum: "3",
                image: "real_choprial_ID3/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "سبع مية وخمسين روبية يوميا",
            },
            {
                id: "Cisarua4",
                cardNum: "4",
                image: "harizbon_choprial_ID4/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "مليون وثلاث مئة وخمسين روبية يوميا",
            },
        ];
        allCardsDataCipanas = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuildAllCards(allCardsDataCisarua, allCardsDataCipanas);
        custom_Cisarua_Cards.innerText = "ثلاث مليون روبية او اقل ▼";
        custom_Cipanas_Cards.innerText = "ثلاث مليون روبية او اقل ▼";
        villa_Details_Area.innerHTML = "";
    } else if (id === "two_Millons") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        allCardsDataCisarua = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
            {
                id: "Cisarua3",
                cardNum: "3",
                image: "real_choprial_ID3/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "سبع مية وخمسين روبية يوميا",
            },
            {
                id: "Cisarua4",
                cardNum: "4",
                image: "harizbon_choprial_ID4/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "مليون وثلاث مئة وخمسين روبية يوميا",
            },
        ];
        allCardsDataCipanas = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuildAllCards(allCardsDataCisarua, allCardsDataCipanas);
        custom_Cisarua_Cards.innerText = "مليونين روبية او اقل ▼";
        custom_Cipanas_Cards.innerText = "مليونين روبية او اقل ▼";
        villa_Details_Area.innerHTML = "";
    } else if (id === "one_Millon") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        allCardsDataCisarua = [
            {
                id: "Cisarua3",
                cardNum: "3",
                image: "real_choprial_ID3/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "سبع مية وخمسين روبية يوميا",
            },
        ];
        allCardsDataCipanas = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuildAllCards(allCardsDataCisarua, allCardsDataCipanas);
        custom_Cisarua_Cards.innerText = "مليون روبية او اقل ▼";
        custom_Cipanas_Cards.innerText = "مليون روبية او اقل ▼";
        villa_Details_Area.innerHTML = "";
    }


    
    ahjozly.style.display = 'block';
    custom_Cards_Page.style.display = 'none';
    let exit_Custom_Cards_Btn = document.getElementById("exit_Custom_Cards_Btn");
    let custom_Cards_Overlay_Div = document.getElementById("custom_Cards_Overlay_Div");
    custom_Cards_Overlay_Div.removeChild(exit_Custom_Cards_Btn);
    custom_Cards_Page.removeChild(custom_Cards_Overlay_Div);


    let goToAreaName = document.getElementById(goToThisArea);
    goToAreaName.scrollIntoView({
        block: 'center',
        inline: 'center',
    });

}



let ahjozly = document.getElementById("ahjozly");
let ahjoz_Mkany = document.getElementById("ahjoz_Mkany");
let big_Images_Page = document.getElementById("big_Images_Page");
let custom_Cards_Page = document.getElementById("custom_Cards_Page");
let other_Services_Page = document.getElementById("other_Services_Page");
let pic_My_Maid_Page = document.getElementById("pic_My_Maid_Page");
let cisarua_villa_Area_Id = document.getElementById("cisarua_villa_Area_Id");
let cipanas_villa_Area_Id = document.getElementById("cipanas_villa_Area_Id");
let bigImgDiv = document.getElementById("big_Img_Div");
let custom_Cisarua_Cards = document.getElementById("custom_Cisarua_Cards");
let custom_Cipanas_Cards = document.getElementById("custom_Cipanas_Cards");
let villa_Details_Area = document.getElementById("villa_Details_Area");


pic_My_Villa_Link.onclick = function () {
    if (ahjoz_Mkany.style.display === "none") {
        ahjoz_Mkany.style.display = "block";
    }
    if (cisarua_Bar_Btn.style.display === "none") {
        cisarua_Bar_Btn.style.display = "block";
        cipanas_Bar_Btn.style.display = "block";
        note_Btn.style.display = "block";
        goBackToSec1_Link.style.display = "block";
    }
    comments_Page_Div.style.paddingBottom = '0';
    
    setTimeout(() => {
        sec4.style.backgroundColor = 'rgb(155, 155, 155)';
    }, 100);

    setTimeout(() => {
        let goToAreaName = document.getElementById('areas');
        goToAreaName.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }, 200);

    setTimeout(() => {
        sec4.style.backgroundColor = 'transparent';
    }, 700);

}
function createOverlay(title, serviceType, bigImgDiv) {
    let overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');


    let exitBtn = document.createElement('a');
    exitBtn.classList.add('exit_Full_Screen_Btn');
    exitBtn.innerText = 'عودة';

    if (bigImgDiv) {
        bigImgDiv.style.display = 'none';
    }

    exitBtn.onclick = function () {
        other_Services_Page.style.display = 'none';
        ahjozly.style.display = 'block';
        overlayDiv.removeChild(exitBtn);
        overlayDiv.innerHTML = '';
        other_Services_Page.removeChild(overlayDiv);

        let goToAreaName = document.getElementById('pic_Your_Service_Title');
        goToAreaName.scrollIntoView({
            lock: 'center',
            inline: 'center',
        });

        if (bigImgDiv) bigImgDiv.style.display = 'flex';
    };



    let overlayInfo = `
        <div id="find_My_Location_Div">
            <h1 id="other_services_Page_Title">${title}</h1>
            <a href="https://wa.me/+6282246117155" target="_blank" class="other_Services_Contact_Us">تواصل معنا</a>
            <a id="how_To_Book_Driver">كيف احجز؟</a>
            <div id="find_My_Location_Box">
                <div id="get_My_Location_Div">
                    <a id="get_My_Location_Btn" onclick="getLocation()">حدد موقعي</a>
                </div>
                <div id="show_My_Location_Div">
                    <h1 id="your_Location_Text">موقعك سيظهر هنا</h1>
                </div>
            </div>
        </div>
    `;

    overlayDiv.innerHTML = overlayInfo;
    overlayDiv.appendChild(exitBtn);
    other_Services_Page.appendChild(overlayDiv);
    ahjozly.style.display = 'none';
    other_Services_Page.style.display = 'block';

    how_To_Book_Driver.onclick = function () {
        let arLang = `حدد موقعك وانسخ رابط موقعك وارسله لنا عن طريق الواتس اب وقول اريد ${serviceType}`;
        let enLang = `\n\nFind your location, copy the address, and send it to us through WhatsApp saying I want a ${serviceType}`;
        alert(arLang + enLang);
    };

    getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            get_My_Location_Btn.style.display = 'none';
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    function showPosition(position) {
        let { latitude, longitude } = position.coords;
        let yourLocationDiv = document.getElementById("show_My_Location_Div");
        yourLocationDiv.innerHTML = `<a href="https://www.google.com/maps/place/${latitude},${longitude}" id="my_Location_Link" target="_blank">اضغط هنا لعرض موقعك</a>`;
    }
}

pic_My_Driver_Link.onclick = function () {
    createOverlay('احجزلي سواق', 'سواق', document.getElementById("big_Img_Div"));
};

pic_My_Maid_Link.onclick = function () {
    createOverlay('احجزلي شغاله', 'شغاله', document.getElementById("big_Img_Div"));
};





/* Scroll Down To Villa Details */
page_Scroll = function () {
    setTimeout(function () {
        let element = document.getElementById("villa_Details_Video_Area");
        let elementRect = element.getBoundingClientRect();
        let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        let scrollY = elementRect.bottom - viewHeight + 50;

        window.scrollBy({
            top: scrollY,
            behavior: 'smooth',
        });
    }, 300);
};
/* Go Back To The Villa Details */
Scroll_Up = function () {
    let element = document.getElementById("villa_Details_Video_Area");
    let elementRect = element.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let scrollY = elementRect.bottom - viewHeight + 50;
    window.scrollBy({
        top: scrollY,
    });
};
/* Go To This Area */
go_To_Area_Part = function (id) {
    let goToAreaName = document.getElementById(id);
    goToAreaName.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
    });
}
/* Booking Method */
booking_Method.onclick = function () {
    let arMethod = "1- اختار الفيلا الي تبغاها\n2- احفظ رقم الفيلا ومكانها واضغط على احجز الان\n3- ارسل رقم الفيلا ومكانها واسم اليوم او رقم التاريخ الي حاب تحجز فيه الفيلا عشان تشوف اذا كانت متاحه ولا لا\n4- الدفع سيكون مباشر وعند الحجز فقط"
    let enMethod = "\n\n1- Pick the villa you want\n2- Remember the villa id and area and then press on book now\n3- Send the villa number with it's area and the date that you want to book the villa to check if the villa you want is avalible or no\n4- The payment will be direct and only upon booking"
    alert(arMethod + enMethod);
};
/* Note */
note_Btn.onclick = function () {
    let arNote = "فلل اندونيسيا غالبا تكون محجوزة بالفعل وخصوصا في يوم السبت والأحد، وافضل حل لهذه المشكلة هو حجز اكثر من فيلا واحدة لكي تضمن مكانك في حال كانت الفلل الي اخترتها محجوزة بالفعل وواحدة منهم تكون متاحة لك";
    let enNote = "\n \nVillas in Indonesia are often already booked, especially on Saturdays and Sundays, so the best solution for this problem is by booking more than one villa to guarantee your place in case if the villas you chose are already booked and one of them is available for you.";
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
        let { cardNum, id, image, location, price } = item;
        let villaCard = document.createElement("div");
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
onload = function () {
    createVillaCard(allCardsDataCisarua, cisarua_villa_Area_Id, 'سيساروا');
    createVillaCard(allCardsDataCipanas, cipanas_villa_Area_Id, 'شيباناس');

}

rebuildAllCards = function (arrayName1, arrayName2) {
    createVillaCard(arrayName1, cisarua_villa_Area_Id, 'سيساروا');
    createVillaCard(arrayName2, cipanas_villa_Area_Id, 'شيباناس');
}






/* Custom Cards */
custom_Cards = function (goToThisArea) {
    custom_Cards_Page.innerHTML = "";

    ahjozly.style.display = 'none';
    
    custom_Cards_Page.style.display = 'block';

    let custom_Cards_Overlay_Div = document.createElement('div');
    custom_Cards_Overlay_Div.classList.add('overlay');
    custom_Cards_Overlay_Div.id = 'custom_Cards_Overlay_Div';

    let exit_Custom_Cards_Btn = document.createElement("a");
    exit_Custom_Cards_Btn.innerText = "الغاء";
    exit_Custom_Cards_Btn.classList.add("exit_Full_Screen_Btn");
    exit_Custom_Cards_Btn.id = "exit_Custom_Cards_Btn";

    if (bigImgDiv) {
        bigImgDiv.style.display = "none";
    }
    exit_Custom_Cards_Btn.onclick = function () {

        custom_Cards_Page.style.display = 'none';
        ahjozly.style.display = 'block';
        custom_Cards_Overlay_Div.removeChild(exit_Custom_Cards_Btn);
        custom_Cards_Page.removeChild(custom_Cards_Overlay_Div);

        let goToAreaName = document.getElementById(goToThisArea);
        goToAreaName.scrollIntoView({
            block: 'center',
            inline: 'center',
        });
        if (bigImgDiv) bigImgDiv.style.display = 'flex';
    }

    let custom_Cards_Title;

    custom_Cards_Title = "تصنيف اسعار الفلل باليوم"

    let custom_Cards_Info = `
        <div id="all_Custom_Cards_Info">
            <h1 id="custom_Cards_Title">${custom_Cards_Title}</h1>

            <div id="custom_Price_Div">
                <h1 id="all_Price" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">جميع الاسعار</h1>
                <h1 id="four_Millons" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">اربع مليون روبيه او اقل</h1>
                <h1 id="three_Millons" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">ثلاث مليون روبيه او اقل</h1>
                <h1 id="two_Millons" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">مليونين روبيه او اقل</h1>
                <h1 id="one_Millon" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">مليون روبيه او اقل</h1>
            </div>
        </div>
    `

    custom_Cards_Overlay_Div.innerHTML = custom_Cards_Info;
    custom_Cards_Overlay_Div.appendChild(exit_Custom_Cards_Btn);
    custom_Cards_Page.appendChild(custom_Cards_Overlay_Div);
}





/* Show Villa Details */
function show_Villa_Details(areaLocation, cardNum, id) {
    let areaSelected = areaLocation === 'سيساروا' ? villaDetailsCisarua : villaDetailsCipanas;
    let villa_Details_Card = document.createElement("div");
    villa_Details_Card.classList.add("villa_Details_Card");

    let villa = areaSelected[cardNum];
    let villa_Details_Info = `
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
          <a class="villa_Details_Text_Contact_Us" href="https://wa.me/+6282246117155" target="_blank">احجز الان</a>
        </div>
      </div>
    `;

    villa_Details_Card.innerHTML = villa_Details_Info;
    villa_Details_Area.innerHTML = "";
    villa_Details_Area.appendChild(villa_Details_Card);

    create_Big_Img(villa.imgAraay);
}






/* Create Villa Images */
function create_Big_Img(imgArray) {
    let createElem = (tag, props = {}) => Object.assign(document.createElement(tag), props);
    if (!bigImgDiv) {
        bigImgDiv = createElem('div', { id: 'big_Img_Div' });
        document.body.appendChild(bigImgDiv);
    } else {
        bigImgDiv.innerHTML = '';
        bigImgDiv.style.display = 'flex';
    }


    bigImgDiv.appendChild(createElem('h1', { textContent: 'صور الفيلا', id: 'big_Img_Title' }));
    let goBackVillaDetails = createElem('a', { textContent: 'تفاصيل الفيلا', id: 'go_Back_Villa_Details' });
    bigImgDiv.appendChild(goBackVillaDetails);
    goBackVillaDetails.onclick = function () {
        Scroll_Up()
    }

    let allImgArray = imgArray;

    allImgArray.forEach(imgSrc => {
        let imgCreate = createElem('img', {
            src: imgSrc,
            class: 'big_Villa_Img',
            alt: 'فلل اندونيسيا',
            title: 'فلل اندونيسيا',
            loading: 'lazy',
        });

        imgCreate.setAttribute('data-image-source', imgSrc);
        imgCreate.addEventListener('click', () => {
            openFullScreen(imgSrc);
        });

        bigImgDiv.appendChild(imgCreate);
    });


    window.addEventListener('scroll', function () {
        let bigImgTitle = document.getElementById('villa_Details_Video');
        if (bigImgTitle) {
            let titlePosition = bigImgTitle.getBoundingClientRect();
            if (titlePosition.bottom <= 100) {
                goBackVillaDetails.style.opacity = 1;
            } else {
                goBackVillaDetails.style.opacity = 0;
            }
        }
    });


    let currentImageIndex = 0;


    function openFullScreen(imageSrc) {
        let full_Screen_Img_Overlay = createElem('div', { className: 'full_Screen_Img_Div' });
        let exit_Full_Screen_Btn = createElem('a', {
            className: 'exit_Full_Screen_Btn',
            textContent: 'عودة',
        });

        let img = createElem('img', { src: imageSrc });
        full_Screen_Img_Overlay.appendChild(img);
        full_Screen_Img_Overlay.appendChild(exit_Full_Screen_Btn);
        ahjozly.style.display = 'none';
        bigImgDiv.style.display = 'none';

        big_Images_Page.appendChild(full_Screen_Img_Overlay);
        big_Images_Page.style.display = 'block';

        currentImageIndex = imgArray.indexOf(imageSrc);

        exit_Full_Screen_Btn.addEventListener('click', function () {
            big_Images_Page.style.display = 'none';
            ahjozly.style.display = 'block';
            bigImgDiv.style.display = 'flex';
            big_Images_Page.removeChild(full_Screen_Img_Overlay);
            scrollToImage(imgArray[currentImageIndex]);
        });


        full_Screen_Img_Overlay.addEventListener('click', function (event) {
            let imgIndex = currentImageIndex;
            if (event.clientY < window.innerHeight / 2) {
                currentImageIndex = (imgIndex - 1 + imgArray.length) % imgArray.length;
            } else {
                currentImageIndex = (imgIndex + 1) % imgArray.length;
            }
            let newImageSrc = imgArray[currentImageIndex];
            img.src = newImageSrc;
        });
    }



    function scrollToImage(imageSrc) {
        let imageToScrollTo = document.querySelector(`[data-image-source="${imageSrc}"]`);
        if (imageToScrollTo) {
            let windowHeight = window.innerHeight;
            let imageHeight = imageToScrollTo.clientHeight;
            let topOffset = (windowHeight - imageHeight) / 2;

            window.scrollTo({
                top: imageToScrollTo.offsetTop - topOffset,
            });
        }
    }
}



/* Go Back To The Same Card */
function take_Me_Back(id) {
    let card = document.getElementById(id);
    let offset = card.getBoundingClientRect().top - (window.innerHeight / 2 - card.clientHeight / 2);
    window.scrollBy({
        top: offset,
        behavior: 'smooth',
    });
    card.style.backgroundColor = "green";
    card.style.borderColor = "orange";
}
