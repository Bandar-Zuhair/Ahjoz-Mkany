/* How To Add Villa?
   Make Sure You Enter The Villa Card Info And Villa Details Info
   Make Sure You Enter Only The Villa Cards Info in Each Cards Filtter
*/


/* Cisarua Card Data Create */
let all_Cards_Data_Cisarua = [
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
let all_Cards_Data_Cipanas = [
    {
        id: "Cipanas1",
        cardNum: "1",
        image: "",
        location: "",
        price: ""
    },
];

/* Cisarua Villa Details Create */
let villa_Details_Cisarua = [
    null,
    {
        video: "almadina_baFqih_ID1/vid.mp4",
        imgAraay: ["almadina_baFqih_ID1/1.jpg", "almadina_baFqih_ID1/2.jpg", "almadina_baFqih_ID1/3.jpg", "almadina_baFqih_ID1/4.jpg", "almadina_baFqih_ID1/5.jpg", "almadina_baFqih_ID1/6.jpg", "almadina_baFqih_ID1/7.jpg", "almadina_baFqih_ID1/8.jpg", "almadina_baFqih_ID1/9.jpg", "almadina_baFqih_ID1/10.jpg", "almadina_baFqih_ID1/11.jpg", "almadina_baFqih_ID1/12.jpg",],
        location: "خلف مطعم بافقيه",
        description: "للعوائل فقط+صالة+ثلاث غرف نوم مع مكيف مركزي ودورة مياه لكل غرفة+مطبخ+مسبح+حديقة بسيطة+مطله على منظر جميل+انترنت مجاني",
        price: "السعر بعد الخصم = مليون واربع مئة وخمسين روبيه يوميا",
        villaNumber: "1"
    },
    {
        video: "taxas1_choprial_ID2/vid.mp4",
        imgAraay: ["taxas1_choprial_ID2/2.jpg", "taxas1_choprial_ID2/3.jpg", "taxas1_choprial_ID2/4.jpg", "taxas1_choprial_ID2/5.jpg", "taxas1_choprial_ID2/6.jpg", "taxas1_choprial_ID2/7.jpg", "taxas1_choprial_ID2/8.jpg", "taxas1_choprial_ID2/9.jpg", "taxas1_choprial_ID2/10.jpg", "taxas1_choprial_ID2/11.jpg", "taxas1_choprial_ID2/12.jpg", "taxas1_choprial_ID2/13.jpg", "taxas1_choprial_ID2/14.jpg", "taxas1_choprial_ID2/15.jpg", "taxas1_choprial_ID2/16.jpg", "taxas1_choprial_ID2/17.jpg", "taxas1_choprial_ID2/18.jpg", "taxas1_choprial_ID2/19.jpg", "taxas1_choprial_ID2/20.jpg", "taxas1_choprial_ID2/21.jpg", "taxas1_choprial_ID2/22.jpg",],
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "في الدور الاول صالة كبيرة+غرفتين نوم مع مكيف مركزي ودورة مياه لكل غرفة+مطبخ+في الدور الثاني صالة كبيرة+اربع غرف نوم مع مكيف مركزي ودورة مياه لكل غرفة+مطبخين+طاولة بلياردو+جلسة خارجية+مسبح+حديقة بسيطة+مطله على منظر جميل+انترنت مجاني",
        price: "السعر بعد الخصم = اربعة مليون واربع مئة وخمسين روبية يوميا",
        villaNumber: "2"
    },
    {
        video: "real_choprial_ID3/vid.mp4",
        imgAraay: ["real_choprial_ID3/1.JPG", "real_choprial_ID3/2.jpg", "real_choprial_ID3/3.jpg", "real_choprial_ID3/4.jpg", "real_choprial_ID3/5.jpg", "real_choprial_ID3/6.jpg", "real_choprial_ID3/7.jpg", "real_choprial_ID3/8.jpg", "real_choprial_ID3/9.jpg", "real_choprial_ID3/10.jpg", "real_choprial_ID3/11.jpg",],
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "صالة+غرفتين نوم مع دورة مياه لكل غرفة+مطبخ+مطله على منظر جميل+انترنت مجاني",
        price: "السعر بعد الخصم = سبع مية وخمسين روبية يوميا",
        villaNumber: "3"
    },
    {
        video: "real_choprial_ID3/vid.mp4",
        imgAraay: ["harizbon_choprial_ID4/1.JPG", "harizbon_choprial_ID4/2.JPG", "harizbon_choprial_ID4/3.JPG", "harizbon_choprial_ID4/4.JPG", "harizbon_choprial_ID4/5.JPG", "harizbon_choprial_ID4/6.JPG",],
        location: "فيلا بداخل تشوبريال تشوكلت",
        description: "صالة+ثلاث غرف نوم مع دورة مياه لكل غرفة+مطبخ+مطله على منظر جميل+انترنت مجاني",
        price: "السعر بعد الخصم = مليون وثلاث مئة وخمسين روبية يوميا",
        villaNumber: "4"
    },
];
/* Cipanas Villa Details Create */
let villa_Details_Cipanas = [
    null,
    {
        video: "",
        location: "",
        description: "",
        price: "",
        villaNumber: ""
    },
];


/* Filter Cards */
function rebuild_All_Villa_Cards(id, goToThisArea) {

    /* Based on what the user clicks on, you will be displaying specific cards */
    /* All 'if' codes goes in the same way */

    /* If user clicks on 'all_Price' element */
    if (id === "all_Price") {

        /* First clear all the cards to rebuild them again */
        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        rebuild_Cisarua_Cards = [
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
        rebuild_Cipanas_Cards = [
            {
                id: "Cipanas1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        /* Pass the new cards to the 'rebuild_All_Cards' function to rebuild them again */
        rebuild_All_Cards(rebuild_Cisarua_Cards, rebuild_Cipanas_Cards);

        /* Change the text inside the custom_Cards element based on what the user clicked */
        custom_Cisarua_Cards.innerText = "جميع الاسعار ▼";
        custom_Cipanas_Cards.innerText = "جميع الاسعار ▼";

        /* Clear and reset all the codes in the 'villa_Details_Area' to prepare for the new card details */
        villa_Details_Area.innerHTML = "";
    } else if (id === "four_Millons") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        rebuild_Cisarua_Cards = [
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
        rebuild_Cipanas_Cards = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuild_All_Cards(rebuild_Cisarua_Cards, rebuild_Cipanas_Cards);
        custom_Cisarua_Cards.innerText = "اربع مليون روبية او اقل ▼";
        custom_Cipanas_Cards.innerText = "اربع مليون روبية او اقل ▼";
        villa_Details_Area.innerHTML = "";

    } else if (id === "three_Millons") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        rebuild_Cisarua_Cards = [
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
        rebuild_Cipanas_Cards = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuild_All_Cards(rebuild_Cisarua_Cards, rebuild_Cipanas_Cards);
        custom_Cisarua_Cards.innerText = "ثلاث مليون روبية او اقل ▼";
        custom_Cipanas_Cards.innerText = "ثلاث مليون روبية او اقل ▼";
        villa_Details_Area.innerHTML = "";
    } else if (id === "two_Millons") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        rebuild_Cisarua_Cards = [
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
        rebuild_Cipanas_Cards = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuild_All_Cards(rebuild_Cisarua_Cards, rebuild_Cipanas_Cards);
        custom_Cisarua_Cards.innerText = "مليونين روبية او اقل ▼";
        custom_Cipanas_Cards.innerText = "مليونين روبية او اقل ▼";
        villa_Details_Area.innerHTML = "";
    } else if (id === "one_Millon") {

        cisarua_villa_Area_Id.innerHTML = "";
        cipanas_villa_Area_Id.innerHTML = "";

        rebuild_Cisarua_Cards = [
            {
                id: "Cisarua3",
                cardNum: "3",
                image: "real_choprial_ID3/1.JPG",
                location: "بداخل تشوبريال تشوكلت",
                price: "سبع مية وخمسين روبية يوميا",
            },
        ];
        rebuild_Cipanas_Cards = [
            {
                id: "Cisarua1",
                cardNum: "1",
                image: "almadina_baFqih_ID1/1.jpg",
                location: "خلف مطعم بافقيه",
                price: "مليون واربع مئة وخمسين روبية يوميا",
            },
        ];

        rebuild_All_Cards(rebuild_Cisarua_Cards, rebuild_Cipanas_Cards);
        custom_Cisarua_Cards.innerText = "مليون روبية او اقل ▼";
        custom_Cipanas_Cards.innerText = "مليون روبية او اقل ▼";
        villa_Details_Area.innerHTML = "";
    }

    /* After setting the new cards based on what the user clicked now hide and show the elements */
    ahjozly.style.display = 'block';
    custom_Cards_Page.style.display = 'none';
    let exit_Custom_Cards_Btn = document.getElementById("exit_Custom_Cards_Btn");
    let custom_Cards_Overlay_Div = document.getElementById("custom_Cards_Overlay_Div");
    custom_Cards_Overlay_Div.removeChild(exit_Custom_Cards_Btn);
    custom_Cards_Page.removeChild(custom_Cards_Overlay_Div);

    /* Scroll to the 'goToThisArea' value element */
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
    /* Fist check if 'ahjoz_Mkany' element is none or block */
    if (ahjoz_Mkany.style.display === "none") {
        ahjoz_Mkany.style.display = "block";
    }

    /* Check if 'cisarua_Bar_Btn' element is none or block */
    if (cisarua_Bar_Btn.style.display === "none") {
        /* if yes then set all the header Btn to block */
        cisarua_Bar_Btn.style.display = "block";
        cipanas_Bar_Btn.style.display = "block";
        note_Btn.style.display = "block";
        goBackToSec1_Link.style.display = "block";
    }

    /* change the padding of the 'comments_Page_Div' element */
    comments_Page_Div.style.paddingBottom = '0';

    /* Create a smooth backgorund color changing */
    setTimeout(() => {
        sec4.style.backgroundColor = 'rgb(155, 155, 155)';
    }, 100);

    /* Scroll down smoothly to the 'areas' element */
    setTimeout(() => {
        let goToAreaName = document.getElementById('areas');
        goToAreaName.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }, 200);

    /* End the background color changing */
    setTimeout(() => {
        sec4.style.backgroundColor = 'transparent';
    }, 700);

}
function create_Overlay(title, serviceType, bigImgDiv) {
    // Create a div element for the overlay
    let overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');


    // Create an exit button for exiting the overlay
    let exitBtn = document.createElement('a');
    exitBtn.classList.add('exit_Full_Screen_Btn');
    exitBtn.innerText = 'عودة';

    /* in case 'bigImgDiv' element was flex, change it to none */
    if (bigImgDiv) {
        bigImgDiv.style.display = 'none';
    }

    /* Create the exitBtn onclick function to appear and disappear element */
    exitBtn.onclick = function () {
        other_Services_Page.style.display = 'none';
        ahjozly.style.display = 'block';
        overlayDiv.removeChild(exitBtn);
        overlayDiv.innerHTML = '';
        other_Services_Page.removeChild(overlayDiv);

        /* Scroll to the middle of the 'pic_Your_Service_Title' element */
        let goToAreaName = document.getElementById('pic_Your_Service_Title');
        goToAreaName.scrollIntoView({
            lock: 'center',
            inline: 'center',
        });

        /* in case 'bigImgDiv' element was none, change it to flex  */
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
    /* Pass the values to the 'create_Overlay' function (Including 'big_Img_Div' element) */
    create_Overlay('احجزلي سواق', 'سواق', document.getElementById("big_Img_Div"));
};


pic_My_Maid_Link.onclick = function () {
    /* Pass the values to the 'create_Overlay' function (Including 'big_Img_Div' element) */
    create_Overlay('احجزلي شغاله', 'شغاله', document.getElementById('big_Img_Div'));
};





/* Scroll Down To Villa Details */
page_Scroll = function () {
    setTimeout(function () {
        /* Scroll down to the middle of villa_Details_Area element after 300 parts of a second */
        let element = document.getElementById("villa_Details_Video_Area");
        let elementRect = element.getBoundingClientRect();
        let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        let scrollY = elementRect.bottom - viewHeight + 50;

        // Smoothly scroll to the specified area
        window.scrollBy({
            top: scrollY,
            behavior: 'smooth',
        });
    }, 300);
};

/* Go Back To The Villa Details */
scroll_Up = function () {
    /* Scroll down to the middle of villa_Details_Area element */
    let element = document.getElementById("villa_Details_Video_Area");
    let elementRect = element.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let scrollY = elementRect.bottom - viewHeight + 50;

    // Smoothly scroll to the specified area
    window.scrollBy({
        top: scrollY,
        behavior: 'smooth',
    });
};

/* Go To This Area */
go_To_Area_Part = function (id) {
    /* Store the clicked id value in a variable */
    let goToAreaName = document.getElementById(id);

    // Smoothly scroll to the specified area
    goToAreaName.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
    });
};

/* Booking Method */
booking_Method.onclick = function () {
    // Display booking text in an alert message (Arabic and English)
    let arMethod = "1- اختار الفيلا الي تبغاها\n2- احفظ رقم الفيلا ومكانها واضغط على احجز الان\n3- ارسل رقم الفيلا ومكانها واسم اليوم او رقم التاريخ الي حاب تحجز فيه الفيلا عشان تشوف اذا كانت متاحه ولا لا\n4- الدفع سيكون مباشر وعند الحجز فقط";
    let enMethod = "\n\n1- Pick the villa you want\n2- Remember the villa id and area and then press on book now\n3- Send the villa number with it's area and the date that you want to book the villa to check if the villa you want is avalible or no\n4- The payment will be direct and only upon booking";
    alert(arMethod + enMethod);
};

/* Bokking Villa Problem Note */
note_Btn.onclick = function () {
    // Display a note in an alert message (Arabic and English)
    let arNote = "فلل اندونيسيا غالبا تكون محجوزة بالفعل وخصوصا في يوم السبت والأحد، وافضل حل لهذه المشكلة هو حجز اكثر من فيلا واحدة لكي تضمن مكانك في حال كانت الفلل الي اخترتها محجوزة بالفعل وواحدة منهم تكون متاحة لك";
    let enNote = "\n \nVillas in Indonesia are often already booked, especially on Saturdays and Sundays, so the best solution for this problem is by booking more than one villa to guarantee your place in case if the villas you chose are already booked and one of them is available for you.";
    alert(arNote + enNote);
};

/* Hide & Show Header */
hide_Btn.onclick = function () {
    // Hide the header and header buttons
    header.classList.add("hide_Display");
    hide_Btn.classList.add("hide_Display");
    show_Btn.classList.remove("hide_Display");
};
show_Btn.onclick = function () {
    // Show the header and header buttons
    header.classList.remove("hide_Display");
    hide_Btn.classList.remove("hide_Display");
    show_Btn.classList.add("hide_Display");
};






/* Create Cards */
function create_Villa_Card(data, areaId, areaName) {
    // Go through each item in the 'data' value array (All Villa Cards Array Cisarua And Cipanas)
    data.forEach((item, i) => {
        // Get all the properties from each item in the object from the array
        let { cardNum, id, image, location, price } = item;

        // Create a new div element for the villa card
        let villaCard = document.createElement("div");
        villaCard.className = "villa_card";

        // Create the HTML content for the villa_card element
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

        // Append the constructed villa card to the specified 'areaId'
        areaId.appendChild(villaCard);
    });
}


/* the card displayed in everytime users refresh the page */
onload = function () {
    create_Villa_Card(all_Cards_Data_Cisarua, cisarua_villa_Area_Id, 'سيساروا');
    create_Villa_Card(all_Cards_Data_Cipanas, cipanas_villa_Area_Id, 'شيباناس');

}

/* the cards displayed in everytime users filters the card based on the daily price */
rebuild_All_Cards = function (rebuild_Cisarua_Cards, rebuild_Cipanas_Cards) {
    create_Villa_Card(rebuild_Cisarua_Cards, cisarua_villa_Area_Id, 'سيساروا');
    create_Villa_Card(rebuild_Cipanas_Cards, cipanas_villa_Area_Id, 'شيباناس');
}






/* Custom Cards */
custom_Cards = function (goToThisArea) {
    // Clear the inner HTML in each time you open custom_Cards_Page
    custom_Cards_Page.innerHTML = "";

    // Hide 'ahjozly' element
    ahjozly.style.display = 'none';

    // Display the custom_Cards_Page
    custom_Cards_Page.style.display = 'block';

    // Create a div element for the custom cards overlay
    let custom_Cards_Overlay_Div = document.createElement('div');
    custom_Cards_Overlay_Div.classList.add('overlay');
    custom_Cards_Overlay_Div.id = 'custom_Cards_Overlay_Div';

    // Create a button element for exiting the custom cards overlay
    let exit_Custom_Cards_Btn = document.createElement("a");
    exit_Custom_Cards_Btn.innerText = "الغاء";
    exit_Custom_Cards_Btn.classList.add("exit_Full_Screen_Btn");
    exit_Custom_Cards_Btn.id = "exit_Custom_Cards_Btn";

    // Hide the bigImgDiv element (all villa images) if it exists
    if (bigImgDiv) {
        bigImgDiv.style.display = "none";
    }

    // Create onclick function for exiting the custom cards overlay
    exit_Custom_Cards_Btn.onclick = function () {
        // Hide the custom_Cards_Page and display 'ahjozly' element
        custom_Cards_Page.style.display = 'none';
        ahjozly.style.display = 'block';

        // Remove exit_Custom_Cards_Btn and custom_Cards_Overlay_Div from custom_Cards_Page
        custom_Cards_Overlay_Div.removeChild(exit_Custom_Cards_Btn);
        custom_Cards_Page.removeChild(custom_Cards_Overlay_Div);

        // Scroll to the element with ID of 'goToThisArea' element
        let goToAreaName = document.getElementById(goToThisArea);
        goToAreaName.scrollIntoView({
            block: 'center',
            inline: 'center',
        });

        // Display bigImgDiv element (all villa images) if it exists
        if (bigImgDiv) {
            bigImgDiv.style.display = 'flex';
        }
    }

    // Create the HTML content for the 'custom_Cards_Overlay_Div'
    let custom_Cards_Info = `
        <div id="all_Custom_Cards_Info">
            <h1 id="custom_Cards_Title">تصنيف اسعار الفلل باليوم</h1>

            <div id="custom_Price_Div">
                <h1 id="all_Price" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">جميع الاسعار</h1>
                <h1 id="four_Millons" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">اربع مليون روبيه او اقل</h1>
                <h1 id="three_Millons" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">ثلاث مليون روبيه او اقل</h1>
                <h1 id="two_Millons" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">مليونين روبيه او اقل</h1>
                <h1 id="one_Millon" onclick="rebuild_All_Villa_Cards(this.id, '${goToThisArea}')">مليون روبيه او اقل</h1>
            </div>
        </div>
    `;

    // Set the inner HTML of custom_Cards_Overlay_Div to custom_Cards_Info
    custom_Cards_Overlay_Div.innerHTML = custom_Cards_Info;

    // Append exit_Custom_Cards_Btn to custom_Cards_Overlay_Div
    custom_Cards_Overlay_Div.appendChild(exit_Custom_Cards_Btn);

    // Append custom_Cards_Overlay_Div to custom_Cards_Page
    custom_Cards_Page.appendChild(custom_Cards_Overlay_Div);
}






/* Show Villa Details */
function show_Villa_Details(areaLocation, cardNum, id) {
    // Find the clicked villa card based on the 'areaLocation' value.
    let areaSelected = areaLocation === 'سيساروا' ? villa_Details_Cisarua : villa_Details_Cipanas;

    // Create a new div element to hold all the villa details
    let villa_Details_Card = document.createElement("div");
    villa_Details_Card.classList.add("villa_Details_Card");

    // Store the clicked villa details again but with the it's number from the 'cardNum' value.
    let villa = areaSelected[cardNum];

    // Replace '+' in the villa details description with line breaks
    let newdescription = villa.description.replace(/\+/g, "<br>");

    // Craete the HTML content for the 'villa_Details_Card'.
    let villa_Details_Info = `
        <a onclick="take_Me_Back('${id}');" id="go_Back_Card">فيلا رقم ${cardNum}</a>
        <div id="villa_Details_Video_Area">
            <video src='${villa.video}' controls title="احجز مكاني في فلل اندونيسيا" id="villa_Details_Video"></video>
        </div>
        <div id="villa_Details_Text_Div">
            <div id="villa_Details_Text">
                <h1>${villa.location}</h1>
                <h1>${newdescription}</h1>
                <h1 id="villa_Details_Text_Price">${villa.price}</h1>
                <h1 id="villa_Details_Text_Villa_Id">رقم الفيلا في ${areaLocation} ${villa.villaNumber}</h1>
                <a class="villa_Details_Text_Contact_Us" href="https://wa.me/+6282246117155" target="_blank">احجز الان</a>
            </div>
        </div>
    `;

    // Set the inner HTML of the 'villa_Details_Card' to the 'villa_details_info' HTML.
    villa_Details_Card.innerHTML = villa_Details_Info;

    // Clear to reset and then append the 'villa_Details_Card' to the villa_Details_Area
    villa_Details_Area.innerHTML = "";
    villa_Details_Area.appendChild(villa_Details_Card);

    // Pass all the imagesin the villa details through the 'create_Big_Img' function.
    create_Big_Img(villa.imgAraay);
}







/* Create Villa Images */
function create_Big_Img(imgArray) {

    // Helper function to create an HTML element with optional properties.
    let createElem = (tag, props = {}) => Object.assign(document.createElement(tag), props);

    // Check if the bigImgDiv exists in the document, and if not then create one.
    if (!bigImgDiv) {
        bigImgDiv = createElem('div', { id: 'big_Img_Div' });
        document.body.appendChild(bigImgDiv);
    } else {
        // Clear the content and display the new bigImgDiv and make it flex in case if it was none.
        bigImgDiv.innerHTML = '';
        bigImgDiv.style.display = 'flex';
    }

    // Add a title for the image section.
    bigImgDiv.appendChild(createElem('h1', { textContent: 'صور الفيلا', id: 'big_Img_Title' }));

    // Create a link to go back to villa details section.
    let goBackVillaDetails = createElem('a', { textContent: 'تفاصيل الفيلا', id: 'go_Back_Villa_Details' });
    bigImgDiv.appendChild(goBackVillaDetails);
    goBackVillaDetails.onclick = function () {
        /* Run the scroll_Up funcion */
        scroll_Up();
    }

    /* Set a value for the variable to keep tracking images changing */
    let allImgArray = imgArray;

    // Iterate through each image source in the provided array.
    allImgArray.forEach(imgSrc => {
        // Create an image element for each source.
        let imgCreate = createElem('img', {
            src: imgSrc,
            class: 'big_Villa_Img',
            alt: 'فلل اندونيسيا',
            title: 'فلل اندونيسيا',
            loading: 'lazy',
        });

        // Save all the attributes in the img element.
        imgCreate.setAttribute('data-image-source', imgSrc);

        // Add an event listener to open the image in full-screen mode when clicked.
        imgCreate.addEventListener('click', () => {
            /* Run openFullScreen function */
            openFullScreen(imgSrc);
        });

        // Append the image element to the bigImgDiv.
        bigImgDiv.appendChild(imgCreate);
    });

    // Add a scroll event listener to handle visibility of 'goBackVillaDetails' based on the position of 'villa_Details_Video' element.
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

    // Function to open an image in full-screen mode.
    function openFullScreen(imageSrc) {
        // Create elements for the full-screen image display.
        let fullScreenImgOverlay = createElem('div', { className: 'full_Screen_Img_Div' });
        let exitFullScreenBtn = createElem('a', {
            className: 'exit_Full_Screen_Btn',
            textContent: 'عودة',
        });

        /* Create the sull screen img and give it the src URL from the clicked 'imageSrc' element */
        let img = createElem('img', { src: imageSrc });

        // Append the img & exitFullScreenBtn elements to the fullScreenImgOverlay.
        fullScreenImgOverlay.appendChild(img);
        fullScreenImgOverlay.appendChild(exitFullScreenBtn);

        // Hide some elements and display the full-screen image.
        ahjozly.style.display = 'none';
        bigImgDiv.style.display = 'none';

        // Append the fullScreenImgOverlay element to the big_Images_Page.
        big_Images_Page.appendChild(fullScreenImgOverlay);
        big_Images_Page.style.display = 'block';

        currentImageIndex = imgArray.indexOf(imageSrc);

        // Event listener to exit full screen mode and hide and display different pages.
        exitFullScreenBtn.addEventListener('click', function () {
            big_Images_Page.style.display = 'none';
            ahjozly.style.display = 'block';
            bigImgDiv.style.display = 'flex';
            big_Images_Page.removeChild(fullScreenImgOverlay);

            /* Pass the las full screen im src to the 'scrollToImage' function */
            scrollToImage(imgArray[currentImageIndex]);
        });

        // Event listener to navigate between images in the full screen mode.
        fullScreenImgOverlay.addEventListener('click', function (event) {
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

    // Function to scroll to a the last full screen img src.
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
    // Find the Card element using the provided 'id'.
    let card = document.getElementById(id);

    // Calculate the offset needed for scrolling to center the element vertically in the viewport.
    let offset = card.getBoundingClientRect().top - (window.innerHeight / 2 - card.clientHeight / 2);

    // Scroll the window smoothly to bring the Card element to the center of the viewport.
    window.scrollBy({
        top: offset,
        behavior: 'smooth',
    });

    // Change the background color of the Card element to green.
    card.style.backgroundColor = "green";

    // Change the border color of the Card element to orange.
    card.style.borderColor = "orange";
}
