<!DOCTYPE html>
<html lang="ar">



<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords"
        content="احجزلي، احجزلي فيلا، احجزلي سواق، احجزلي شغاله، احجز مكاني اندونيسيا، فلل اندونيسيا، حجز فلل اندونيسيا، استئجار فلل اندونيسيا، احجز مكاني فيلا، فيلا اندونيسيا، فيلا اندونيسيا، حجز فلل استئجار فلل">
    <title>احجزلي</title>
    <link rel="stylesheet" href="style.css">
</head>



<body>



    <div id="big_Images_Page" style="display: none;"></div>

    <div id="all_Comments_Page" style="display: none;"></div>

    <div id="custom_Cards_Page" style="display: none;"></div>

    <div id="other_Services_Page" style="display: none;"></div>





    <div id="ahjozly">
        <!-- Header Section -->
        <header id="header">
            <div id="header_Info">
                <h1 id="web_Title">احجزلي</h1>
                <nav id="header_Nav">
                    <a id="cisarua_Bar_Btn" onclick="go_To_Area_Part('come_To_Cisarua')" style="display: none;">سيساروا</a>
                    <a id="cipanas_Bar_Btn" onclick="go_To_Area_Part('come_To_Cipanas')" style="display: none;">شيباناس</a>
                    <a id="booking_Method">كيف احجز؟</a>
                    <a id="note_Btn" style="display: none;">ملاحظة</a>
                    <a href="https://wa.me/+6282246117155" target="_blank">تواصل معنا</a>
                    <a id="goBackToSec1_Link" href="#sec1" style="display: none;">عودة</a>
                </nav>
                <a id="hide_Btn">اخفاء</a>
            </div>
        </header>


        <!-- Introduction Section -->
        <section id="sec1">
            <a id="show_Btn" class="hide_Display">اظهار</a>
            <div id="sec1_Intro">
                <div id="sec1_Web_Intro">
                    <h1>احجزلي اليوم في اندونيسيا</h1>
                    <h1>بإختيار الخدمة والمكان والوقت والسعر المناسب لك</h1>
                </div>
                <div>
                    <ion-icon class="web_Icon" name="home-outline"></ion-icon>
                    <ion-icon class="web_Icon" name="car-outline"></ion-icon>
                    <ion-icon class="web_Icon" name="woman-outline"></ion-icon>
                </div>
                <div>
                    <h1 id="discount_Text">وفي كل مرة تحجز من عندنا بتحصل على خصم في السعر</h1>
                </div>
            </div>
        </section>


        <!-- Other Services -->
        <section id="sec2">
            <div id="other_Services_Title">
                <h1 id="pic_Your_Service_Title">اختر الخدمة</h1>
            </div>
            <div id="other_Services_Div">
                <h1 id="pic_My_Villa_Link">احجزلي فيلا</h1>
                <h1 id="pic_My_Driver_Link">احجزلي سواق</h1>
                <h1 id="pic_My_Maid_Link">احجزلي شغاله</h1>
            </div>
        </section>


        <!-- Customers Comments -->
        <section id="sec3">
            <div id="sec3_Intro">
                <h1>تعليقك ونصيحتك راح يفيدونا بشكل جدا كبير</h1>
                <div id="sec3_Icon_Div">
                    <ion-icon onclick="open_Comments_Page()" id="sec3_Icon" name="chatbubbles-outline"></ion-icon>
                </div>
            </div>
            <div id="comments_Page_Div">
                <a href="new_comment.php" id="comments_Page">تعليقاتكم</a>
            </div>
        </section>



        <!-- Choose The Area Section -->
        <div id="ahjoz_Mkany" style="display: none;">
            <section id="sec4">
                <div id="sec4_Content">
                    <h1 class="choose_Area_Intro" id="areas">المنطقة</h1>
                    <div>
                        <a onclick="go_To_Area_Part('come_To_Cipanas')">شيباناس</a>
                        <a onclick="go_To_Area_Part('come_To_Cisarua')">سيساروا</a>
                    </div>
                </div>
            </section>



            <!-- Horizontal Line for Cisarua -->
            <hr id="Indonesia_Cisarua_Area"
                style="border: none; height: 60px; background-color: rgba(145, 145, 145, 0.4); box-shadow: 0 0 5px 5px rgba(145, 145, 145, 0.4);">



            <!-- Choosing Villa In Cisarua Section -->
            <section id="sec5">
                <div class="intro_Area" id="come_To_Cisarua">
                    <h1>احجزلي فيلا في منطقة سيساروا</h1>
                </div>

                <div class="all_Cards_Info">
                    <a id="custom_Cisarua_Cards" onclick="custom_Cards(this.id)" class="custom_Cards_Class">التصنيفات
                        (جميع الاسعار)▼</a>

                    <div id="cisarua_villa_Area_Id" class="villa_Area">
                        <!-- All Cisarua Villa Cards -->
                    </div>
                </div>
            </section>



            <!-- Horizontal Line for Cipanas -->
            <hr id="Indonesia_Cipanas_Area"
                style="border: none; height: 60px; background-color: rgba(145, 145, 145, 0.4); box-shadow: 0 0 1px 1px rgba(145, 145, 145, 0.4);">



            <!-- Choosing Villa In Cipanas Section -->
            <section id="sec6">
                <div class="intro_Area" id="come_To_Cipanas">
                    <h1>احجزلي فيلا في منطقة شيباناس</h1>
                </div>

                <div class="all_Cards_Info">
                    <a id="custom_Cipanas_Cards" onclick="custom_Cards(this.id)" class="custom_Cards_Class">التصنيفات
                        (جميع الاسعار)▼</a>

                    <div id="cipanas_villa_Area_Id" class="villa_Area">
                        <!-- All Cisarua Villa Cards -->
                    </div>
                </div>
            </section>



            <!-- Horizontal Line for Cipanas -->
            <hr id="hr_Villa_Details"
                style="border: none; height: 60px; background-color: rgba(145, 145, 145, 0.4); box-shadow: 0 0 5px 5px rgba(145, 145, 145, 0.4);">



            <!-- Villa Details Section -->
            <section id="sec7">
                <div class="intro_Area">
                    <h1>تفاصيل الفيلا</h1>
                </div>
                <div id="villa_Details_Area">
                    <!-- All Villa Details Info -->
                </div>
            </section>



            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>