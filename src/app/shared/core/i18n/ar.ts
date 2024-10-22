import { CartComponent } from "src/app/views/cart/cart.component";

export const locale = {
  lang: "ar",
  data: {
    GENERAL: {
      LANGUAGE: "English",
      APP_NAME:'متجــر حـيــــاة'
    },
    TOPBAR:{
      LOGIN_REGISTER:'ادخل لحسابك او سجل الآن',
      WISHLIST:'المفضلة',
      HELP:'مساعدة',
      LOCATION:'مصر - المنوفية',
      LOGOUT:'تسجيل الخروج'
    },
    NAVBAR:{
      HOME:'الرئيسية',
      PRODUCTS:'المنتجات',
      CATEGORIES:'الفئات',
      SUBCATEGORIES:'الفئات الفرعية',
      BRANDS:'البرندات',
      CART:'قائمة التسوق'
    },
    FOOTER:{
      COPYRIGHT:'جميع الحقوق محفوظة',
      DESIGNBY:'تم تصميم الموقع بواسطة',
      MAHMOUDNASR:'م محمود نصر'
    },
    FORM:{
      SEARCH:'ابحث عن منتج',
      EMAIL:'الإيميل',
      ENTER_YOUR_EMAIL:'من فضلك ادخل الايميل',
      PASSWROD:'كلمة المرور',
      NEW_PASSWORD:'كلمة المرور الجديدة',
      ENTER_YOUR_PASSWORD:'من فضلك ادخل كلمة المرور',
      FORGET_PASSWORD:'نسيت كلمة المرور ؟',
      NAME:'الإسم',
      RE_PASSWORD:'تأكيد كلمة المرور',
      PHONE:'رقم الجوال',
      VERIFY_CODE:'كود التحقق',
      SIGN_UP:'سجل الآن',
      SIGN_IN:'تسجيل الدخول',
      VALIDATORS:{
        REQUIRED:'الحقل مطلوب',
        MINLENGTH:'اقل عدد حروف مسموح به هو ',
        MAXLENGTH:'اقصي عدد حروف مسموح به هو',
        PASSWORD_NOT_MATCH:'الباسورد غير متطابق',
        NOT_VALID_PHONE:'رقم جوال غير صحيح',
        NOT_VALID_EMAIL:'ايميل غير صحيح',
        PASSWORD_PATTERN:'كلمة المرور غير مطابقة',
        PASSWORD_PATTERN1:'يجب مراعاه اول حرف يكون كبير',
        PASSWORD_PATTERN2:'اقل عدد حروف مسموح به 6 حروف',
        PASSWORD_PATTERN3:'اقصي عدد حروف مسموح به هو 12',
        NUMBERS_ONLY:'يجب ان تكون قيمة الحقل رقم فقط',
      },
      DIALOG_MESSAGE:{
        ERROR_MESSAGE:'رسالة خطأ',
        SUCCESS:'نجاح',
        OK:'موافق',
        REGISTRATION_SUCCESS:'تم التسجيل بنجاح',
        LOGIN_SUCCESS:'تم الدخول بنجاح',
        INCORRECT_EMAIL_OR_PASSWORD:'الايميل او كلمة المرور غير صحيحة',
        UNKNOWN_ERROR:'خطأ غير معروف',
        PRODUCT_ADDED_TO_CART:'تم اضافة المنتج الي العربة بنجاح',
      }
    },
    LOGIN:{
      WELCOME_TITLE:'مرحباً , اصدقائي !',
      WELCOME_DESC:'أدخل بياناتك الشخصية وابدأ الرحلة معنا',
      SIGN_IN_TO_HAYAH_STORE:'تسجيل الدخول'
    },
    REGISTER:{
      CREATE_ACOUNT:'إنشاء حساب',
      WELCOME_TITLE:'مرحبًا بعودتك',
      WELCOME_DESC:'للبقاء على اتصال معنا يرجى تسجيل الدخول بمعلوماتك الشخصية'
    },
    PRODUCTS:{
      ADD_TO_CART:'اضف الي العربة',
      ADD_TO_WISHLIST:'اضف الي المفضلة',
      PRODUCT_DETAILS:'تفاصيل المنتج',
      IN_STOCK:'في المخزن',
      RELATED_PRODUCT:'منتجات ذات صلة',
      POPULAR_PRODULAR:'المنتجات الأكثر مبيعاً',
    },
    CATEGORIES:{
      TITLE:'الفئات',
      SUB_CATEGORIES:'الفئات الفرعية',
      BRANDS:'البرندات',
      PRODUCTS:'المنتجات',
      SEE_ALL:'عرض الكل',
      POPULAR_CATEGORIES:'الفئات الأكثر مبيعاً',
      TOP_CATEGOIES:'الفئات الأكثر مشاهدة',
      CATEGORY_DETAILS:'تفاصيل الفئة',
      SUBCATEGORY_DETAILS:'تفاصيل الفئة الفرعية',
      BRAND_DETAILS:'تفاصيل البرند',
    },
    NOT_FOUND_PAGE:{
      TITLE:'الصفحة غير موجودة',
      DESCRIPTION:'الصفحة التي تبحث عنها غير موجودة. كيف وصلت إلى هنا لا يزال لغزا. ولكن يمكنك النقر على الزر أدناه للعودة إلى الصفحة الرئيسية.',
      GO_BACK:'العودة للصفحة الرئيسية'
    },
    FORGOT_PASSWORD:{
      TITLE:'نسيت كلمة المرور ؟',
      RESET_PASSWORD:'إعادة تعيين كلمة المرور',
      DESCRIPTION:'أدخل بريدك الإلكتروني لتلقي كود إعادة تعيين كلمة المرور الخاصة بك',
      SEND_LINK:'إرسال كود إعادة تعيين كلمة المرور',
      BACK_TO_LOGIN:'العودة لتسجيل الدخول',
      CODE_SENT:'تم إرسال كود إعادة تعيين كلمة المرور الخاصة بك إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد أو صندوق البريد العشوائي.',
    },
    VERIFICATION_CODE:{
      TITLE:'تأكيد الحساب',
      DESCRIPTION:'أدخل الرمز المرسل إلى بريدك الإلكتروني لتأكيد حسابك',
      VERIFY:'تحقق',
      RESEND:'إعادة إرسال الرمز',
      CODE_SENT:'تم إرسال رمز التحقق إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد أو صندوق البريد العشوائي.',
      CODE_EXPIRED_OR_NOT_MATCH:'الرمز المدخل غير صحيح او منتهي الصلاحية',
      VERFIIED_SUCCESS:'تم تأكيد الحساب بنجاح',
    },
    RESET_PASSWORD:{
      TITLE:'إعادة تعيين كلمة المرور',
      DESCRIPTION:'أدخل كلمة المرور الجديدة الخاصة بك',
      RESET_PASSWORD:'إعادة تعيين كلمة المرور',
      RESET_PASSWORD_SUCCESS:'تم إعادة تعيين كلمة المرور بنجاح'
    },
    CART:{
      TITLE:'قائمة التسوق',
      EMPTY_CART:'قائمة التسوق فارغة',
      TOTAL_PRICE:'السعر الكلي',
      CHECKOUT:'الدفع',
      CONTINUE_SHOPPING:'متابعة التسوق',
      REMOVE_FROM_CART:'حذف من العربة',
      PRODUCT_DETAILS:'تفاصيل المنتج',
      CART_TOTAL_PRICE:'السعر الاجمالي للعربة',
      CLEAR_CART:'تفريغ العربة',
      CART_EMPTY_MESSAGE:'قائمة التسوق فارغة',
      ARE_YOU_SURE_TO_CLEAR_CART:'هل انت متأكد من تفريغ العربة ؟',
      DELETE_CONFIRMATION:'تأكيد الحذف',
      CONFIRMED:'تأكيد',
      Cart_EMPTY_SUCCESS:'تم تفريغ العربة بنجاح',
    }
  }
}