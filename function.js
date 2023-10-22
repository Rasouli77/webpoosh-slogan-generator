function randomItem(items)
{
  var result1 = document.getElementById("result-1");
  var result2 = document.getElementById("result-2");
  var result3 = document.getElementById("result-3");
  var result4 = document.getElementById("result-4");
  var result5 = document.getElementById("result-5");
  var result6 = document.getElementById("result-6");
  var result7 = document.getElementById("result-7");
  var result8 = document.getElementById("result-8");
  var result9 = document.getElementById("result-9");
  var result10 = document.getElementById("result-10");
  var result11 = document.getElementById("result-11");
  var result12 = document.getElementById("result-12");
  var result13 = document.getElementById("result-13");
  var items = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, result11, result12, result13];

  var result = items[Math.floor((Math.random()*items.length))]
  result.classList.remove("result");
  console.log(result);
}


function handleSubmit() {
  let quotes = {
    "— 1":
      '"هیچ پاییزی بدون هودی (سویشرت) امکان پذیر نیست (مگه پاییز بدون هودی میشه؟)"',
    " — 2":
      '"با این تکه های جدید پاییزت را رنگ آمیزی کن"',
    "— 3": '"از بازگشت به روتین روازنه ات با یه ست جدید لذت ببر"',
    "— 4":
      '"از شروع پاییز تا الان، یک هودی (سویشرت) به کمد لباست اضافه کردی؟"',
    "— 5": '"با ست بالا فاصله بین استایل رسمی و غیر رسمی رو کم کن"',
    " — 6":
      '"ترکیب هودی و مام استایل در پاییز امتحان خودشو پس داده"',
    " — 7":
      '"از تنوع ست های رسمی ما لذت ببرید"',
    " — 8":
      '"برای هودی های پاییزی ما در کمد لباست جا باز کن"',
    " — 9": '"یه ست مطمئن برای پیاده روی های پاییزیت"',
    " — 10":
      '"نمیدونی چی بپوشی؟ پس تیکه های پاییزی مارو از دست نده"',
    " — 11":
      '"این همون ترکیبیه که نمی دونستی استایلت بهش نیاز داره"',
    " — 12":
      '"از سرکار تا مهمونی، این ترکیب همیشه هواتو داره"',
    " — 13":
    '"خوش دوخت و با کیفیت مثل تیکه های جدید ما "',
    " — 14":
    '"با این رنگ ها، به استایلت حس زندگی ببخش"',
    " — 15":
    '"یه ست جدید با ترکیب رنگ های پاییزی"',
    " — 16":
    '"یه استایل مینیمال برای وسط فصل ایده خوبیه"',
    " — 17":
    '"گاهی وقتا تنها چیزی که نیاز داری یک رنگ تازست"',
    " — 18":
    '"نسیم خنک پاییزی یک ست مطمئن با هودی می طلبه"',
    " — 19":
    '"کیفیت هیچ وقت از مد نمی افته"',
    " — 20":
    '"ما قول میدیم توی این لباس ها گرم و راحت باشی"',
    " — 21":
    '"لباس هایی که زمستونت (پاییزت) رو زیبا تر میکنه"',
    " — 22":
    '"ترکیبی از استایل های رسمی و غیر رسمی برای نیاز روزانه ات"',
    " — 23":
    '"با این رنگ ها احساس بهتری داری"',
    " — 24":
    '"سخته بدون لباس های خوب، روز خوبی داشته باشی"',
    " — 25":
    '"سر تا پا کلاسیک"',
    " — 26":
    '"این لباس ها خوبن اما تو تَن شما قشنگ ترن"',
    " — 27":
    '"ساده (کلاسیک) اما خوش استایل"',
    " — 28":
    '"این لباس هارو انتخاب کن و متمایز شو"',
    " — 29":
    '"کیفیت استثنایی با استایلی بی نظیر"',
    " — 30":
    '"راحت و در عین حال خوش استایل"',
    " — 31":
    '"یه لایه لباس گرم تر توی فصل پاییز همیشه لازم میشه"',
    " — 32":
    '"به همه‌ی جزئیات اهمیت بده"',
    " — 33":
    '"تو این روزهای سرد و بارونی با یه کاپشن مطمئن گرم بمونی"',
    " — 34":
    '"ترکیب سبز با کرم همیشه کار می میکنه"',
    " — 35":
    '"لباس های پاییزه رو از توی کمدتون در بیارید، وقت تغییره"',
    " — 36":
    '"یه تیکه از پاییز رو بپوش با این لباس ها"',
    " — 37":
    '"بارون داره میباره اما با این سویشرت (هودی)(کاپشن) مشکلی نیست"',
    " — 38":
    '"یه ترکیب تیره که ما دوستش داریم"',
    " — 39":
    '"لباس های قابل اطمینان برای یه فصل غیر قابل پیش بینی"',
    " — 40":
    '"یه پیراهن پشمی با یه تیشرت تو روزهای معمولی پاییز کارتو راه میندازه"',
    " — 41":
    '"اگر دنبال یه کاپشن سبک برای یه تیپ حرفه ای میگردی این بهترین انتخابه"',
    " — 42":
    '"لباس های مورد نیاز ، ساده و بدون دردسر"',
    " — 43":
    '"تیپت رو از نو بساز"',
    " — 44":
    '"این چنتا تیکه رو با هم ترکیب کن تا یه ظاهر بی نقص بهت بده"',
    " — 45":
    '"استایل نیمه رسمی برای یه دورهمی باحالم"',
    " — 45":
    '"نوبتی هم باشه نوبت یه ترکیب با تِم (آبیه)"',
    " — 46":
    '"این ترکیب عالیه و هنوز کلی از پاییز باقیمونده"',
    " — 47":
    '"ما این هفته رو با این ترکیب جذاب شروع کردیم"',
    " — 48":
    '"یه ظاهر مردانه تمام و کمال"',
    " — 49":
    '"یه حس خوب ، این چیزیه که این ست بهت میدهم"',
    " — 50":
    '"اون استایل راحتی که دنبالش بودی اینجاست"',
    " — 51":
    '"تو این کت جین جذاب به نظر میای"',
    " — 52":
    '"رنگ های روشن تر برای ساختن روز های روشن تر"',
    " — 53":
    '"تیپ قرمز بزن و با رنگ های تیره مچش کن"',
    " — 54":
    '"یه ترکیب باحال برای وقتی که سرحالی"',
    " — 55":
    '"هر وقت شک داری یه پیراهن خاکستری بپوش چون تو هر مراسمی کار میکنه"',
    " — 56":
    '"شما فقط به اولین تعریف نیاز دارید تا تیپتون به یادموندنی باشه"',
    " — 57":
    '"رنگ های روشن برای این روزهای گرم تر پاییزه"',
    " — 58":
    '"تعطیلات تموم شد و ما با یه تیپ جذاب برگشتیم سر کارمون"',
    " — 59":
    '"با این تیشرت قرمز شارپ بمون"',
    " — 60":
    '"کدوم ترکیب رو بیشتر می پسندید ، چپ یا راست ؟"',
    " — 61":
    '"شلوار جین برای استایل روزمره ، شلوار پارچه ای برای استایل رسمی تر"',
    " — 62":
    '"یه تیپ ساده و کاربردی به همین راحتی"',
    " — 63":
    '"یه تیپ راحت برای شروع هفته"',
    " — 64":
    '"روزمره یا کمی رسمی ؟"',
    " — 65":
    '"یه جینو دو نشون"',
    " — 66":
    '"استایلت رو مینیمال کن"',
    " — 67":
    '"این لباس ها از ضروریات پاییزه/زمستانه"',
    " — 68":
    '"راحتی و کیفیت"',
    " — 69":
    '"هوا یه استایل جدید با سویشرت/هودی میطلبه"',
    " — 70":
    '"دوباره کاپشن ها برگشتن"',
    " — 71":
    '"راه راه هیچ وقت از مد نمی افته"',
    " — 72":
    '"چهارخونه هیچ وقت از مد نمی افته"',
    " — 73":
    '"یه استایل نیمه‌رسمی جذاب برای آخر هفته"',
    " — 74":
    '"یه استایل نیمه‌رسمی جذاب برای اول هفته"',
    " — 75":
    '"سویشرت های بیسیک ما با هر شلواری ست میشه"',
    " — 76":
    '"امروز چی بپوشم؟ شلوار جین و هودی"',
    " — 77":
    '"سویشرت و جین برای روز های ابری‌تر"',
    " — 78":
    '"این ست برای هوای این روزها انتخاب خوبیه"',
    " — 79":
    '"ما کنتراست در ست رو به مرحله جدیدی بردیم"',
    " — 80":
    '"هم معمولی و هم خوش‌استایل"',
    " — 81":
    '"زرد و آبی یکی از ترکیب‌های مورد علاقه ماست"',
    " — 82":
    '"گردش آخر هفته با یه استایل کژوال"',
    " — 83":
    '"این روزها بارونیه اما با این لباس ها مشکلی نیست"',
    " — 84":
    '"یه ست پاییزی دیگه چون هنوز کلی از پاییز مونده"',
    " — 85":
    '"تیپت رو از نو بساز"',
    " — 86":
    '"گاهی یه استایل کلاسیک میتونه همه تغییر رو رقم بزنه"',
    " — 87":
    '"شلوار کتان، بی‌نظیر و بادوام امتحان خودشو پس داده"',
    " — 88":
    '"استایلی بی‌نقص و باکیفیت با هودی و شلوار کتان"',
    " — 89":
    '"این ست مخصوص توست اگر دنبال تغییر استایلت هستی"',
    " — 90":
    '"ترکیبی از رنگ‌های خاص"',
    " — 91":
    '"استایلی به رنگ پاییز"',
    " — 92":
    '"جین برای هر مناسبتی"',
    " — 93":
    '"تیپ هوشمندانه و معمولی مخصوص کار"',
    " — 94":
    '"ترکیبی مناسب برای محیط کار"',
    " — 95":
    '"پاییز با یه هودی جدید باحال‌تر میشه"',
    " — 96":
    '"راه راه میتونه جذاب باشه مثل این پلیور"',
    " — 97":
    '"خوش استایل و راحت مثل این ست جدید ما"',
    " — 98":
    '"استایل های ساده برای تیپ های فرمال"',
    " — 99":
    '"با این ست به استقبال زمستان میریم"',
    " — 100":
    '"تمایز را با این ست جدیدما رقم بزن"',
    " — 101":
    '"یه ست کلاسیک چیزی که هر مردی در کمدش نیاز داره"',
    " — 102":
    '"یه سویشرت تو این هوا کارتون رو راه میندازه"',
    " — 103":
    '"بپوش و لذت ببر"',
    " — 104":
    '"لباس های جدید ما حس بهتری به شما میده"',
    " — 105":
    '"تیپت این سویشرت/هودی رو کم داره"',
    " — 106":
    '"انتخابی تازه برای استایلی نو"',
    " — 107":
    '"با این لباس ها یه استایل مطمئن بساز"'
  };
  let randomAuthors = Object.keys(quotes);
  let authorPicker =
    randomAuthors[Math.floor(Math.random() * randomAuthors.length)];
  let quote = quotes[authorPicker];
  document.getElementById("result").innerHTML = quote;

}
handleSubmit();
