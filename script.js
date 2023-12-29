/* How To Add Villa?
   Make Sure To Enter The All Info Needed inside the 'cards_Array_Cisarua' and 'cards_Array_Cipanas'
   Make Sure To Enter The Same 'Pass' Text To Both 'Cards_Array' And 'Cards_Details_Array'
   (The Pass Text Should Go In Order Of The English Alphabet)
   Make Sure To Focus On The Spellings While You're Entering Each Info in English
*/


/* 
Filtering Keywords To Copy And Paste (MUST BE THE SAME):

four_million_and_less
three_million_and_less
two_million_and_less
one_million_and_less

inside
outside

all_people
family

with_pool
without_pool
*/

/* Cisarua Card Data Create */
let cards_Array_Cisarua = [
    {
        pass: "cisarua_a",
        image: "almadina_baFqih/1.jpg",
        location: "خلف مطعم بافقيه",
        IDRprice: "مليون واربع مئة وخمسين روبية باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_ab",
        image: "taxas1_choprial/2.jpg",
        location: "بداخل تشوبريال تشوكلت",
        IDRprice: "اربعة مليون وخمس مئة روبية باليوم",
        filterPrice: "four_million_and_less",
        filterPlace: "outside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abc",
        image: "real_choprial/1.JPG",
        location: "بداخل تشوبريال تشوكلت",
        IDRprice: "سبع مية وخمسين روبية باليوم",
        filterPrice: "one_million_and_less",
        filterPlace: "outside",
        filterPeople: "all_people",
        filterPool: "without_pool",
    },
    {
        pass: "cisarua_abcd",
        image: "harizbon_choprial/1.JPG",
        location: "بداخل تشوبريال تشوكلت",
        IDRprice: "مليون وثلاث مئة وخمسين روبية باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "all_people",
        filterPool: "without_pool",
    },
    {
        pass: "cisarua_abcde",
        image: "marseilia_v4/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "three_million_and_less",
        filterPlace: "inside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdef",
        image: "marina_v2/1.JPG",
        location: "بداخل تشوبريال",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "five_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefg",
        image: "marina_c1/1.JPG",
        location: "بداخل تشوبريال",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "sex_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefgh",
        image: "perdana_6/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "sex_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefghi",
        image: "perdana_7/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "sex_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefghij",
        image: "amanah_101/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "sex_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
];
/* Cipanas Card Data Create */
let cards_Array_Cipanas = [
    {
        pass: "cipanas_a",
        image: "almadina_baFqih/1.jpg",
        location: "خلف مطعم بافقيه",
        IDRprice: "مليون واربع مئة وخمسين روبية باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
];

/* Cisarua Villa Details Create */
let cards_Details_Array_Cisarua = [
    {
        pass: "cisarua_a",
        video: "almadina_baFqih/vid.mp4",
        imgAraay: ["almadina_baFqih/1.jpg", "almadina_baFqih/2.jpg", "almadina_baFqih/3.jpg", "almadina_baFqih/4.jpg", "almadina_baFqih/5.jpg", "almadina_baFqih/6.jpg", "almadina_baFqih/7.jpg", "almadina_baFqih/8.jpg", "almadina_baFqih/9.jpg", "almadina_baFqih/10.jpg", "almadina_baFqih/11.jpg", "almadina_baFqih/12.jpg",],
        location: "خلف مطعم بافقيه",
        description: "ليست بداخل مجمع+للعوائل فقط+صالة+ثلاث غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه في كل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - برادة مياه+تلفزيون بلازما+جلسة خارجية+مسبح خاص+حديقة بسيطة+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة",
        IDRprice: "مليون واربع مئة وخمسين روبيه باليوم",
        SARprice: "تقريبا 369 ريال سعودي باليوم",
        USDprice: "تقريبا 94 دولار امريكي باليوم",
    },
    {
        pass: "cisarua_ab",
        video: "taxas1_choprial/vid.mp4",
        imgAraay: ["taxas1_choprial/2.jpg", "taxas1_choprial/3.jpg", "taxas1_choprial/4.jpg", "taxas1_choprial/5.jpg", "taxas1_choprial/6.jpg", "taxas1_choprial/7.jpg", "taxas1_choprial/8.jpg", "taxas1_choprial/9.jpg", "taxas1_choprial/10.jpg", "taxas1_choprial/11.jpg", "taxas1_choprial/12.jpg", "taxas1_choprial/13.jpg", "taxas1_choprial/14.jpg", "taxas1_choprial/15.jpg", "taxas1_choprial/16.jpg", "taxas1_choprial/17.jpg", "taxas1_choprial/18.jpg", "taxas1_choprial/19.jpg", "taxas1_choprial/20.jpg", "taxas1_choprial/21.jpg", "taxas1_choprial/22.jpg",],
        location: "داخل منطقة تشوبريال تشوكلت",
        description: "ليست بداخل مجمع+ليست للعوائل فقط+في الدور الاول صالة كبيرة+غرفتين نوم مع مكيف مركزي ودورة مياه لكل غرفة+مطبخ+في الدور الثاني صالة كبيرة+اربع غرف نوم مع مكيف مركزي ودورة مياه لكل غرفة+مطبخين+طاولة بلياردو+جلسة خارجية+مسبح خاص+حديقة بسيطة+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة",
        IDRprice: "اربعة مليون واربع مئة وخمسين روبية يوميا",
        SARprice: "تقريبا 369 ريال سعودي باليوم",
        USDprice: "تقريبا 94 دولار امريكي باليوم",
    },
    {
        pass: "cisarua_abc",
        video: "real_choprial/vid.mp4",
        imgAraay: ["real_choprial/1.JPG", "real_choprial/2.jpg", "real_choprial/3.jpg", "real_choprial/4.jpg", "real_choprial/5.jpg", "real_choprial/6.jpg", "real_choprial/7.jpg", "real_choprial/8.jpg", "real_choprial/9.jpg", "real_choprial/10.jpg", "real_choprial/11.jpg",],
        location: "داخل منطقة تشوبريال تشوكلت",
        description: "ليست بداخل مجمع+ليست للعوائل فقط+صالة+غرفتين نوم بسرير مزدوج مع دورة مياه لكل غرفة+مطبخ - ثلاجة صغيره - طاولة طعام+تلفزيون بلازما مع سماعات+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة جيده+منطقة آمنة",
        IDRprice: "سبع مية وخمسين روبية باليوم",
        SARprice: "تقريبا 369 ريال سعودي باليوم",
        USDprice: "تقريبا 94 دولار امريكي باليوم",
    },
    {
        pass: "cisarua_abcd",
        video: "real_choprial/vid.mp4",
        imgAraay: ["harizbon_choprial/1.JPG", "harizbon_choprial/2.JPG", "harizbon_choprial/3.JPG", "harizbon_choprial/4.JPG", "harizbon_choprial/5.JPG", "harizbon_choprial/6.JPG",],
        location: "داخل منطقة تشوبريال تشوكلت",
        description: "ليست باخل مجمع+ليست للعوائل فقط+صالة+ثلاث غرف نوم بسرير مزدوج مع دورة مياه لكل غرفة+مطبخ+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة جيده+منطقة جيده",
        IDRprice: "مليون وثلاث مئة وخمسين روبية باليوم",
        SARprice: "تقريبا 369 ريال سعودي باليوم",
        USDprice: "تقريبا 94 دولار امريكي باليوم",
    },
    {
        pass: "cisarua_abcde",
        video: "almadina_baFqih/vid.mp4",
        imgAraay: ["marseilia_v4/1.JPG", "marseilia_v4/2.JPG", "marseilia_v4/3.JPG", "marseilia_v4/4.JPG", "marseilia_v4/5.JPG", "marseilia_v4/6.JPG", "marseilia_v4/7.JPG", "marseilia_v4/8.JPG", "marseilia_v4/9.JPG", "marseilia_v4/10.JPG", "marseilia_v4/11.JPG",],
        location: "خلف مطعم بافقيه للعوائل فقط",
        description: "بداخل مجمع+للعوائل فقط+في الدور الاول صالة كبيرة مع دورة مياه وغسالة ملابس+غرفة نوم بسرير مزدوج+مكيف مركزي ودورة مياه+سخلن مياه في كل دورة مياه+مطبخ+تلفزيون بلازما مع سماعات+مسبح خاص+في الدور الثاني ممر جميل+ثلاث غرف نوم بسرير مزدوج مع مكيف مركزي ودورة مياه لكل غرفة+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdef",
        video: "almadina_baFqih/vid.mp4",
        imgAraay: ["marina_v2/1.JPG", "marina_v2/2.JPG", "marina_v2/3.JPG", "marina_v2/4.JPG", "marina_v2/5.JPG", "marina_v2/6.JPG", "marina_v2/7.JPG", "marina_v2/8.JPG", "marina_v2/9.JPG", "marina_v2/10.JPG", "marina_v2/11.JPG", "marina_v2/12.JPG", "marina_v2/13.JPG", "marina_v2/14.JPG", "marina_v2/15.JPG", "marina_v2/16.JPG",],
        location: "داخل منطقة تشوبريال",
        description: "بداخل مجمع+ليست للعوائل فقط+الدور الاول صالة كبيرة ودورة مياه مع غسالة+مكواة ملابس+غرفة نوم بسرير مزدوج+مكيف مركزي ودورة مياه+مطبخ - ثلاجة - مايكرويف+تلفزيون بلازما مع سماعات+مسبح خاص+في الدور الثاني صالة+ثلاث غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع رفع صوت الاغاني من بعد الساعة 12 ليلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefg",
        video: "almadina_baFqih/vid.mp4",
        imgAraay: ["marina_c1/1.JPG", "marina_c1/2.JPG", "marina_c1/3.JPG", "marina_c1/4.JPG", "marina_c1/5.JPG", "marina_c1/6.JPG", "marina_c1/7.JPG",],
        location: "داخل منطقة تشوبريال",
        description: "بداخل مجمع+ليست للعوائل فقط+صالة+غرفتين نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - طاولة طعام+تلفزيون بلازما+مسبح مشترك مع الفيلا العلوية+جلسة خارجية+مطله على منظر جميل+انترنت مجاني خاص+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع رفع صوت الاغاني من بعد الساعة 12 ليلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefgh",
        video: "almadina_baFqih/vid.mp4",
        imgAraay: ["perdana_6/1.JPG", "perdana_6/2.JPG", "perdana_6/3.JPG", "perdana_6/4.JPG", "perdana_6/5.JPG", "perdana_6/6.JPG", "perdana_6/7.JPG", "perdana_6/8.JPG", "perdana_6/9.JPG", "perdana_6/10.JPG", "perdana_6/11.JPG", "perdana_6/12.JPG",],
        location: "خلف مطعم بافقيه",
        description: "بداخل مجمع+ليست للعوائل فقط+صالة+اربع غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - طاولة طعام - برادة مويه - معدات الشواء+تلفزيون بلازما+مسبح خاص+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع ادخال الحيوانات الاليفه داخل الفيلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghi",
        video: "almadina_baFqih/vid.mp4",
        imgAraay: ["perdana_7/1.JPG", "perdana_7/2.JPG", "perdana_7/3.JPG", "perdana_7/4.JPG", "perdana_7/5.JPG", "perdana_7/6.JPG", "perdana_7/7.JPG", "perdana_7/8.JPG", "perdana_7/9.JPG", "perdana_7/10.JPG", "perdana_7/11.JPG", "perdana_7/12.JPG", "perdana_7/13.JPG",],
        location: "خلف مطعم بافقيه",
        description: "بداخل مجمع+ليست للعوائل فقط+صالة+اربع غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - طاولة طعام - برادة مويه - معدات الشواء+تلفزيون بلازما+مسبح خاص+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع ادخال الحيوانات الاليفه داخل الفيلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghij",
        video: "almadina_baFqih/vid.mp4",
        imgAraay: ["amanah_101/1.JPG", "amanah_101/2.JPG", "amanah_101/3.JPG", "amanah_101/4.JPG", "amanah_101/5.JPG", "amanah_101/6.JPG", "amanah_101/7.JPG", "amanah_101/8.JPG", "amanah_101/9.JPG", "amanah_101/10.JPG", "amanah_101/11.JPG", "amanah_101/12.JPG", "amanah_101/13.JPG", "amanah_101/14.JPG", "amanah_101/15.JPG",],
        location: "خلف مطعم بافقيه",
        description: "ليست بداخل مجمع+للعوائل فقط+صالة+دورة مياه+ثلاث غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+غسالة+مكواة ملابس+مطبخ - ثلاجة - برادة مويه+طاولة طعام+تلفزيون بلازما+مسبح مشترك خاص+جلسة خارجية+مطله على منظر جميل+انترنت مجاني خاص+مواقف سيارات+خدمة ممتازة+منطقة آمنة",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
];
/* Cipanas Villa Details Create */
let cards_Details_Array_Cipanas = [
    {
        pass: "cipanas_a",
        video: "almadina_baFqih/vid.mp4",
        imgAraay: ["almadina_baFqih/1.jpg", "almadina_baFqih/2.jpg", "almadina_baFqih/3.jpg", "almadina_baFqih/4.jpg", "almadina_baFqih/5.jpg", "almadina_baFqih/6.jpg", "almadina_baFqih/7.jpg", "almadina_baFqih/8.jpg", "almadina_baFqih/9.jpg", "almadina_baFqih/10.jpg", "almadina_baFqih/11.jpg", "almadina_baFqih/12.jpg",],
        location: "خلف مطعم عربي",
        description: "ليست بداخل مجمع+للعوائل فقط+صالة+ثلاث غرف نوم بسرير مزدوج مع مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - برادة مياه+تلفزيون بلازما+جلسة خارجية+مسبح+حديقة بسيطة+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+تواصل معنا للمزيد من المعلومات",
        IDRprice: "مليون واربع مئة وخمسين روبيه يوميا",
    },
];

// All the variables for filtering cards later (MUST SET TO NULL)
let stored_Filter_Price_Id = null;
let stored_Filter_Type_Id = null;
let stored_Filter_Place_Id = null;
let stored_Filter_Pool_Id = null;

// Defind the 'bigImgDiv' in the global scop so you can use i in separated different functions later
let bigImgDiv = document.getElementById("big_Img_Div");


// Not very important refrences
/* let ahjozly = document.getElementById("ahjozly");
let ahjoz_Mkany = document.getElementById("ahjoz_Mkany");
let big_Images_Page = document.getElementById("big_Images_Page");
let custom_Cards_Page = document.getElementById("custom_Cards_Page");
let other_Services_Page = document.getElementById("other_Services_Page");
let pic_My_Maid_Page = document.getElementById("pic_My_Maid_Page");
let villa_Cards_Title = document.getElementById("villa_Cards_Title");
let villa_Cards_Area = document.getElementById("villa_Cards_Area");
let custom_Cards_Title = document.getElementById("custom_Cards_Title");
let villa_Details_Area = document.getElementById("villa_Details_Area"); */



pic_My_Villa_Link.onclick = function () {
    /* Fist check if 'ahjoz_Mkany' element is none or block */
    if (ahjoz_Mkany.style.display === "none") {
        ahjoz_Mkany.style.display = "block";
    }

    /* Check if 'go_To_Choose_Areas_Btn' element is none or block */
    if (go_To_Choose_Areas_Btn.style.display === "none") {
        /* if yes then set all the header Btn to block */
        go_To_Choose_Areas_Btn.style.display = "block";
        booking_Method.style.display = "block";
        note_Btn.style.display = "block";
        rules_Btn.style.display = "block";
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
        choose_Areas.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }, 200);

    /* End the background color changing */
    setTimeout(() => {
        sec4.style.backgroundColor = 'rgb(40, 40, 40)';
    }, 500);


    /* Create the functionality o appearing and disappearing the header element */
    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // When scrolling down
            header.style.top = "-500px"; //How much px the header should go up when scrolling down
        } else {
            // When scrolling up
            header.style.top = "0";
        }

        lastScrollTop = scrollTop;
    });
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
        pic_Your_Service_Title.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
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
        /* Scroll down to the middle of 'villa_Details_Title' element after 1 second */
        villa_Details_Title.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }, 1000);
};

/* Make The Villa Detals Section Visible */
Display_Block_Villa_Details = function () {
    /* in Case The Section Was Hidden, Show it */
    sec7.style.display = 'block';
}

/* Booking Method */
booking_Method.onclick = function () {
    // Display booking text in an alert message (Arabic and English)
    let booking_Method_Text = '- صور الشاشة على تفاصيل الفيلا الي حاب تحجزها وارسلها لنا عن طريق الواتس اب\n- الدفع سيكون بينك وبين صاحب الفيلا بشكل مباشر\n- جميع طرق الدفع متوفرة سواء كاش او اونلاين\n\n- Take a screenShot of the villa details you would like to book, and send it to us through WhatsApp\n Payment will be between you and the villa owner directly\n All payment methods are available whether cash or online'

    alert(booking_Method_Text);
};

/* Bokking Villa Problem Note */
note_Btn.onclick = function () {
    // Display a note in an alert message (Arabic and English)
    let arNote = "فلل اندونيسيا غالبا تكون محجوزة بالفعل وخصوصا في يوم السبت والأحد، وافضل حل لهذه المشكلة هو حجز اكثر من فيلا واحدة لكي تضمن مكانك في حال كانت الفلل الي اخترتها محجوزة بالفعل وواحدة منهم تكون متاحة لك";
    let enNote = "\n \nVillas in Indonesia are often already booked, especially on Saturdays and Sundays, so the best solution for this problem is by booking more than one villa to guarantee your place in case if the villas you chose are already booked and one of them is available for you.";
    alert(arNote + enNote);
};

/* Rules Button */
rules_Btn.onclick = function () {
    alert('- دخول الفيلا يكون من بعد الساعة 2 ظهرا\n - الخروج من الفيلا يكون قبل الساعة 12 ظهرا\n- يرجى التأكد من استلام وتسليم الفيلا سليمة مع كافة الاثاث والاغراض المجودة فيها\n\n- Entering the villa will be after 2 pm\n- Leaving the villa will be before 12 pm\n- Please ensure that you enter and leave the villa keeping all the ites and things related to the villa safely')
};







/* Create Cards */
/* The data word here referce to the cards array name (Cisarua or Cipanas Cards) */
function create_Villa_Card(data, areaName) {
    // Counter for creating unique numbers
    let cardCounter = 1;

    // Go through each item in the 'data' value array (All Villa Cards Array Cisarua And Cipanas)
    data.forEach((item, i) => {
        // Get all the properties from each item in the object from the array
        let { pass, image, location, IDRprice } = item;

        // Create a new div element for the villa card
        let villaCard = document.createElement("div");
        villaCard.className = "villa_card";

        // Create a unique number for each card
        let uniqueNumber = cardCounter++;

        // Create the HTML content for the villa_card element and put all the functions that you want them to run once the user clicks on any card
        villaCard.innerHTML = `
        <div id="${uniqueNumber}" onclick="show_Villa_Details('${pass}', '${areaName}', ${uniqueNumber}); Display_Block_Villa_Details(); page_Scroll();" class="villa_Card">
                <img src="${image}" alt="احجز مكاني في فلل اندونيسيا" title="احجز مكاني في فلل اندونيسيا">
                <div class="villa_Info">
                    <h1>${location}</h1>
                    <h1 class="price">${IDRprice}</h1>
                    <h1 class="villa_id">فيلا رقم ${uniqueNumber}</h1>
                    <h1 class="villa_Area_Name">${areaName}</h1>
                </div>
            </div>
        `;

        // Append the created villa card in the villa_Cards_Area element
        villa_Cards_Area.appendChild(villaCard);
    });
}



build_Villa_Cards = function (theChoosenArea) {
    // clear pervious content in these two Area div
    villa_Cards_Area.innerHTML = "";
    villa_Details_Area.innerHTML = "";

    // in case 'bigImgDiv' element was flex, change it to none
    if (bigImgDiv) {
        bigImgDiv.style.display = 'none';
    }

    // Hide the 'sec7' whenever you build the cards
    sec7.style.display = "none";

    // Scroll to the middle of the 'villa_Cards_Title' elemment
    setTimeout(() => {
        villa_Cards_Title.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }, 100);

    // Set the 'villa_Cards_Title' innerText based on the 'theChoosenArea' value
    // Then call the 'create_Villa_Card' function based on the 'theChoosenArea' value
    if (theChoosenArea === 'Cisarua') {
        villa_Cards_Title.innerText = 'احجزلي في منطقة سيساروا'
        create_Villa_Card(cards_Array_Cisarua, 'سيساروا');
    } else {
        villa_Cards_Title.innerText = 'احجزلي في منطقة شيباناس'
        create_Villa_Card(cards_Array_Cipanas, 'شيباناس');
    }

    // Reset the defualt text in everytime you run this function
    custom_Cards_Title.innerText = 'تصنيفات الفلل ▼';

    // in case the 'sec5' was hidden, show it
    if (sec5.style.display === 'none') {
        sec5.style.display = 'block';
    }
}








/* Custom Cards */
custom_Cards = function () {
    // Clear the inner HTML in each time you open custom_Cards_Page
    custom_Cards_Page.innerHTML = "";

    // Hide 'ahjozly' element
    ahjozly.style.display = 'none';

    // Hide the bigImgDiv element (all villa images) if it exists
    if (bigImgDiv) {
        bigImgDiv.style.display = "none";
    }

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

    // Create a button element for submiting the custom cards
    let submit_Custom_Cards_Btn = document.createElement("a");
    submit_Custom_Cards_Btn.innerText = "بحث";
    submit_Custom_Cards_Btn.classList.add("exit_Full_Screen_Btn");
    submit_Custom_Cards_Btn.style.opacity = "0";
    submit_Custom_Cards_Btn.style.left = "30px";
    submit_Custom_Cards_Btn.id = "submit_Custom_Cards_Btn";


    // Create onclick function for exiting the custom cards overlay
    exit_Custom_Cards_Btn.onclick = function () {
        // Hide the custom_Cards_Page and display 'ahjozly' element
        custom_Cards_Page.style.display = 'none';
        ahjozly.style.display = 'block';

        // Remove exit_Custom_Cards_Btn and custom_Cards_Overlay_Div from custom_Cards_Page
        custom_Cards_Overlay_Div.removeChild(exit_Custom_Cards_Btn, submit_Custom_Cards_Btn);
        custom_Cards_Page.removeChild(custom_Cards_Overlay_Div);

        // Scroll to the 'villa_Cards_Title' element
        villa_Cards_Title.scrollIntoView({
            block: 'center',
            inline: 'center',
        });

        // Display bigImgDiv element (all villa images) if it exists
        if (bigImgDiv) {
            bigImgDiv.style.display = 'flex';
        }
    };

    // Create the HTML content for the 'custom_Cards_Overlay_Div'
    // Any spellings mistakes might cause problems later
    let custom_Cards_Info = `
        <div id="all_Custom_Sec">

            <div class="custom_Card_Box">

                <div class="custom_Card_Box_Title">
                    <h1>اسعار الفلل باليوم</h1>
                </div>

                <div class="custom_Card_Box_Options">
                    <h1 id="all_price" onclick="change_Clicked_Price_Btn_Color('all_price')">كل الاسعار</h1>
                    <h1 id="four_million_and_less" onclick="change_Clicked_Price_Btn_Color('four_million_and_less')">اربع مليون روبيه او اقل</h1>
                    <h1 id="three_million_and_less" onclick="change_Clicked_Price_Btn_Color('three_million_and_less')">ثلاث مليون روبيه او اقل</h1>
                    <h1 id="two_million_and_less" onclick="change_Clicked_Price_Btn_Color('two_million_and_less')">مليونين روبيه او اقل</h1>
                    <h1 id="one_million_and_less" onclick="change_Clicked_Price_Btn_Color('one_million_and_less')">مليون روبيه او اقل</h1>
                </div>
            </div>

            <div class="custom_Card_Box">

                <div class="custom_Card_Box_Title">
                    <h1>مكان الفلل</h1>
                </div>

                <div class="custom_Card_Box_Options">
                    <h1 id="all_place" onclick="change_Clicked_Place_Btn_Color('all_place')">كل الاماكن</h1>
                    <h1 id="inside" onclick="change_Clicked_Place_Btn_Color('inside')">داخل مجمع</h1>
                    <h1 id="outside" onclick="change_Clicked_Place_Btn_Color('outside')">ليست بداخل مجمع</h1>
                </div>
            </div>

        

            <div class="custom_Card_Box">

                <div class="custom_Card_Box_Title">
                    <h1>نوع الفلل</h1>
                </div>

                <div class="custom_Card_Box_Options">
                    <h1 id="all_people" onclick="change_Clicked_Type_Btn_Color('all_people')">كل الانواع</h1>
                    <h1 id="family" onclick="change_Clicked_Type_Btn_Color('family')">للعوائل فقط</h1>
                </div>
            </div>

            <div class="custom_Card_Box">

                <div class="custom_Card_Box_Title">
                    <h1>ملحقات الفلل</h1>
                </div>

                <div class="custom_Card_Box_Options">
                    <h1 id="all_pool" onclick="change_Clicked_Pool_Btn_Color('all_pool')">كل الملحقات</h1>
                    <h1 id="with_pool" onclick="change_Clicked_Pool_Btn_Color('with_pool')">مع مسبح</h1>
                    <h1 id="without_pool" onclick="change_Clicked_Pool_Btn_Color('without_pool')">بدون مسبح</h1>
                </div>
            </div>

        </div>
    `;

    // Set the inner HTML of custom_Cards_Overlay_Div to custom_Cards_Info
    custom_Cards_Overlay_Div.innerHTML = custom_Cards_Info;

    // Append exit_Custom_Cards_Btn and submit_Custom_Cards_Btn to custom_Cards_Overlay_Div
    custom_Cards_Overlay_Div.append(exit_Custom_Cards_Btn, submit_Custom_Cards_Btn);

    // Append custom_Cards_Overlay_Div to custom_Cards_Page
    custom_Cards_Page.appendChild(custom_Cards_Overlay_Div);


    // All the 4 down functions work in the same way
    change_Clicked_Price_Btn_Color = function (id) {

        // Store the id value so you can use it later in the 'update_Filtered_Cards' function
        stored_Filter_Price_Id = id;

        // reset all the buttons style codes
        all_price.style.backgroundColor = "rgb(41, 38, 38)";
        all_price.style.borderColor = "white";
        four_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
        four_million_and_less.style.borderColor = "white";
        three_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
        three_million_and_less.style.borderColor = "white";
        two_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
        two_million_and_less.style.borderColor = "white";
        one_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
        one_million_and_less.style.borderColor = "white";

        // store the id element is a variable
        let clicked_Btn = document.getElementById(id);

        // Give the 'clicked_Btn' element style codes
        clicked_Btn.style.backgroundColor = "green";
        clicked_Btn.style.borderColor = "orange";

        /* Show 'submit_Custom_Cards_Btn' after clicking on any option from the custom cards options */
        submit_Custom_Cards_Btn.style.opacity = "1";

    }
    change_Clicked_Type_Btn_Color = function (id) {

        stored_Filter_Type_Id = id;


        all_people.style.backgroundColor = "rgb(41, 38, 38)";
        all_people.style.borderColor = "white";
        family.style.backgroundColor = "rgb(41, 38, 38)";
        family.style.borderColor = "white";

        let clicked_Btn = document.getElementById(id);

        clicked_Btn.style.backgroundColor = "green";
        clicked_Btn.style.borderColor = "orange";

        /* Show 'submit_Custom_Cards_Btn' after clicking on any option from the custom cards options */
        submit_Custom_Cards_Btn.style.opacity = "1";

    }
    change_Clicked_Place_Btn_Color = function (id) {

        stored_Filter_Place_Id = id;

        all_place.style.backgroundColor = "rgb(41, 38, 38)";
        all_place.style.borderColor = "white";
        inside.style.backgroundColor = "rgb(41, 38, 38)";
        inside.style.borderColor = "white";
        outside.style.backgroundColor = "rgb(41, 38, 38)";
        outside.style.borderColor = "white";

        let clicked_Btn = document.getElementById(id);

        clicked_Btn.style.backgroundColor = "green";
        clicked_Btn.style.borderColor = "orange";

        /* Show 'submit_Custom_Cards_Btn' after clicking on any option from the custom cards options */
        submit_Custom_Cards_Btn.style.opacity = "1";

    }
    change_Clicked_Pool_Btn_Color = function (id) {

        stored_Filter_Pool_Id = id;

        all_pool.style.backgroundColor = "rgb(41, 38, 38)";
        all_pool.style.borderColor = "white";
        with_pool.style.backgroundColor = "rgb(41, 38, 38)";
        with_pool.style.borderColor = "white";
        without_pool.style.backgroundColor = "rgb(41, 38, 38)";
        without_pool.style.borderColor = "white";

        let clicked_Btn = document.getElementById(id);

        clicked_Btn.style.backgroundColor = "green";
        clicked_Btn.style.borderColor = "orange";

        /* Show 'submit_Custom_Cards_Btn' after clicking on any option from the custom cards options */
        submit_Custom_Cards_Btn.style.opacity = "1";

    }


    submit_Custom_Cards_Btn.onclick = function () {

        // if the values in the 4 variables are not null then run the 'update_Filtered_Cards' function
        // Otherwise show alert
        if (stored_Filter_Price_Id && stored_Filter_Type_Id && stored_Filter_Place_Id && stored_Filter_Pool_Id !== null) {

            update_Filtered_Cards();

            // Hide the custom_Cards_Page and display 'ahjozly' element
            custom_Cards_Page.style.display = 'none';
            ahjozly.style.display = 'block';

            // Remove exit_Custom_Cards_Btn and custom_Cards_Overlay_Div from custom_Cards_Page
            custom_Cards_Page.removeChild(custom_Cards_Overlay_Div);
            custom_Cards_Overlay_Div.removeChild(exit_Custom_Cards_Btn, submit_Custom_Cards_Btn);

            // Delete all villa_Details_Area after filtring Cards */
            villa_Details_Area.innerHTML = "";

            // Delete all bigImgDiv codes in case if clicked on الغاء button after filtering the cards 
            if (bigImgDiv) {
                bigImgDiv.innerHTML = "";
            }

            /* Hide sec7 section after filtring the cards */
            sec7.style.display = 'none';

            // Scroll to the 'villa_Cards_Title' element
            villa_Cards_Title.scrollIntoView({
                block: 'center',
                inline: 'center',
            });


            /* Hide 'submit_Custom_Cards_Btn' in everytime you click on 'submit_Custom_Cards_Btn' */
            submit_Custom_Cards_Btn.style.display = "none";


        } else {
            alert('- الرجاء التحقق من تحديد جميع الخيارات\n\n- Please ensure all the options are selected');
        }


    }

    function update_Filtered_Cards() {
        // Make sure the 'new_Filterd_Cards' is the same as the 'villa_Cards_Title' innerText
        let new_Filterd_Cards = villa_Cards_Title.innerText === 'احجزلي في منطقة سيساروا' ? cards_Array_Cisarua : cards_Array_Cipanas;

        // Filter the 'filtered_Cards_Array' by finding objects with the same equirements
        // in case if the value was ALL then the process of that propery filter will be cancelled and will dispaly all the property different values
        let filtered_Cards_Array = new_Filterd_Cards.filter(item =>
            (stored_Filter_Price_Id !== "all_price" ? item.filterPrice === stored_Filter_Price_Id : true) &&
            (stored_Filter_Type_Id !== "all_people" ? item.filterPeople === stored_Filter_Type_Id : true) &&
            (stored_Filter_Place_Id !== "all_place" ? item.filterPlace === stored_Filter_Place_Id : true) &&
            (stored_Filter_Pool_Id !== "all_pool" ? item.filterPool === stored_Filter_Pool_Id : true)
        );

        // Clear the 'villa_Cards_Area' content after filtering the cards
        villa_Cards_Area.innerHTML = "";

        // Make sure the 'areaName' is the same as the 'villa_Cards_Title' innerText
        let areaName = villa_Cards_Title.innerText === 'احجزلي في منطقة سيساروا' ? 'سيساروا' : 'شيباناس';



        // if there was no cards found then display 'no_Cards_Found_Div' element
        // Otherwise display the found cards
        if (filtered_Cards_Array.length === 0) {


           refresh_All_Cards_Btn.onclick = function () {
            no_Cards_Found_h1.classList.add('dispaly_None_Class');
            
            villa_Cards_Area.innerHTML = "";
            refresh_All_Cards_Btn.classList.add('dispaly_None_Class');
            create_Villa_Card(new_Filterd_Cards, areaName);
        }


            no_Cards_Found_Div.classList.remove('dispaly_None_Class');
            no_Cards_Found_h1.classList.remove('dispaly_None_Class');
            refresh_All_Cards_Btn.classList.remove('dispaly_None_Class');


        } else {

            no_Cards_Found_h1.classList.add('dispaly_None_Class');

            no_Cards_Found_Div.classList.remove('dispaly_None_Class');
            refresh_All_Cards_Btn.classList.remove('dispaly_None_Class');

            create_Villa_Card(filtered_Cards_Array, areaName);

        }

        // Reset all the variables values after submitting the filtering
        stored_Filter_Price_Id = null;
        stored_Filter_Type_Id = null;
        stored_Filter_Place_Id = null;
        stored_Filter_Pool_Id = null;
    }

}




/* Show Villa Details */
function show_Villa_Details(pass, areaName, uniqueNumber) {

    // Find the clicked card array based on the 'areaName' value.
    let arraySelected = areaName === 'سيساروا' ? cards_Details_Array_Cisarua : cards_Details_Array_Cipanas;

    // Find and store the object that is inside the 'arraySelected' that is related to the clicked card based on the pass value
    let clicked_Card_Details = arraySelected.find(item => item.pass === pass);


    // Create a new div element to hold all the villa details
    let villa_Details_Card = document.createElement("div");
    villa_Details_Card.classList.add("villa_Details_Card");


    let card_Details_Description = clicked_Card_Details.description;


    // Replace '+' in the villa details description with line breaks
    let newDescription = card_Details_Description.replace(/\+/g, "<br>");

    // Craete the HTML content for the 'villa_Details_Card'.
    let villa_Details_Info = `
        <a onclick="take_Me_Back(${uniqueNumber});" id="go_Back_Card">فيلا رقم ${uniqueNumber}</a>


            <div id="villa_Details_Title">
                <h1>موقع الفيلا</h1>
                <h1>وصف الفيلا</h1>
                <h1>فيديو الفيلا</h1>
            </div>

            <div id="villa_Details_Topic">
            
                <div id="villa_Details_Location">

                    <h1 class="villa_Details_Villa_Pass">${clicked_Card_Details.pass}</h1>
                    <h1>${clicked_Card_Details.location}</h1>
                    <h1 class="villa_Details_Text_Villa_Id"> فيلا رقم ${uniqueNumber}</h1>
                    <a class="villa_Details_Text_Contact_Us" href="https://wa.me/+6282246117155" target="_blank">احجز الان</a>

                </div>


                <div id="villa_Details_Description">
                
                    <h1>${newDescription}</h1>
                    <h1 class="price">${clicked_Card_Details.IDRprice}</h1>
                    <h1 class="price">${clicked_Card_Details.SARprice}</h1>
                    <h1 class="price">${clicked_Card_Details.USDprice}</h1>
                    <a class="Contact_For_More_Info_Btn" href="https://wa.me/+6282246117155" target="_blank">تواصل معنا للمزيد من المعلومات</a>

                </div>


                <div id="villa_Details_Video">
                    <h1 id="show_Villa_Video_Btn">شاهد الفيديو</h1>
                </div>
            
            </div>
    `;

    
    // Set the inner HTML of the 'villa_Details_Card' to the 'villa_details_info' HTML.
    villa_Details_Card.innerHTML = villa_Details_Info;

    // Clear to reset and then append the 'villa_Details_Card' to the villa_Details_Area
    villa_Details_Area.innerHTML = "";
    villa_Details_Area.appendChild(villa_Details_Card);



    // Function to play the villa video
    show_Villa_Video_Btn.onclick = function () {

        let fullScreenVidOverlay = document.createElement('div');
        fullScreenVidOverlay.classList.add('full_Screen_Vid_Div');

        let exitFullScreenBtn = document.createElement('a');
        exitFullScreenBtn.classList.add('exit_Full_Screen_Btn');
        exitFullScreenBtn.innerText = 'عودة';

        // Create a video element
        let bigVid = document.createElement('video');
        bigVid.src = clicked_Card_Details.video;
        bigVid.setAttribute('controls', true);
        bigVid.setAttribute('title', 'احجزلي في فلل اندونيسيا');

        // Append the video element to a specific location in your HTML document
        fullScreenVidOverlay.appendChild(bigVid);
        fullScreenVidOverlay.appendChild(exitFullScreenBtn);

        // Hide some elements and display the full-screen image.
        ahjozly.style.display = 'none';
        bigImgDiv.style.display = 'none';

        // Append the fullScreenImgOverlay element to the big_Images_Page.
        big_Vid_Page.appendChild(fullScreenVidOverlay);
        big_Vid_Page.style.display = 'block';


        // Event listener to exit full screen mode and hide and display different pages.
        exitFullScreenBtn.addEventListener('click', function () {
            big_Vid_Page.style.display = 'none';
            ahjozly.style.display = 'block';
            bigImgDiv.style.display = 'flex';
            big_Vid_Page.removeChild(fullScreenVidOverlay);
            fullScreenVidOverlay.removeChild(exitFullScreenBtn);
            fullScreenVidOverlay.removeChild(bigVid);

            show_Villa_Video_Btn.scrollIntoView({
                block: 'center',
                inline: 'center',
            });
        });



    }


    // Pass all the images from the 'clicked_Card_Details' to the 'create_Big_Img' function.
    create_Big_Img(clicked_Card_Details.imgAraay);
}




/* Create Villa Images */
function create_Big_Img(imgArray) {

    // Helper function to create an HTML element with optional properties.
    let createElem = (tag, props = {}) => Object.assign(document.createElement(tag), props);

    // Check if the 'bigImgDiv' exists in the document, if not then create one.
    if (!bigImgDiv) {
        bigImgDiv = createElem('div', { id: 'big_Img_Div' });
        document.body.appendChild(bigImgDiv);
    } else {
        // Clear the content and display the new 'bigImgDiv' and make it flex in case if it was none.
        bigImgDiv.innerHTML = '';
        bigImgDiv.style.display = 'flex';
    }

    // Add a title for the image section.
    bigImgDiv.appendChild(createElem('a', { textContent: 'صور الفيلا', id: 'big_Img_Title' }));

    let go_Back_Villa_Details = createElem('a', { textContent: 'تفاصيل الفيلا', id: 'go_Back_Villa_Details' });
    bigImgDiv.appendChild(go_Back_Villa_Details);
    go_Back_Villa_Details.style.opacity = '0';
    go_Back_Villa_Details.onclick = function () {
        villa_Details_Title.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    window.addEventListener('scroll', function () {
        let bigImgTitle = document.querySelector('#big_Img_Title');

        let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        let bigImgTitlePosition = bigImgTitle.getBoundingClientRect();

        if (bigImgTitlePosition.top <= 0) {
            go_Back_Villa_Details.style.opacity = '1';
        } else {
            go_Back_Villa_Details.style.opacity = '0';
        }
    });

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
        });

        // Save all the attributes in the img element.
        imgCreate.setAttribute('data-image-source', imgSrc);

        // Add an event listener to open the image in full-screen mode when clicked.
        imgCreate.addEventListener('click', () => {
            /* Run openFullScreenImg function */
            openFullScreenImg(imgSrc);
        });

        // Append the image element to the bigImgDiv.
        bigImgDiv.appendChild(imgCreate);
    });

    // Function to open an image in full-screen mode.
    function openFullScreenImg(imageSrc) {
        // Create elements for the full-screen image display.
        let fullScreenImgOverlay = createElem('div', { className: 'full_Screen_Img_Div' });
        let exitFullScreenBtn = createElem('a', {
            className: 'exit_Full_Screen_Btn',
            textContent: 'عودة',
        });

        /* Create the full screen img and give it the src URL from the clicked 'imageSrc' element */
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
            fullScreenImgOverlay.removeChild(exitFullScreenBtn);
            fullScreenImgOverlay.removeChild(img);

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
