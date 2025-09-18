# AddWall API - نظام إدارة الشركات والكوبونات

## 📋 نظرة عامة على المشروع

**AddWall** هو نظام إدارة شامل للشركات والكوبونات مبني باستخدام Node.js، Express.js، وMongoDB. النظام يتيح للشركات التسجيل وإدارة بياناتها، وللمستخدمين البحث عن الشركات والاستفادة من الكوبونات.

## 🚀 الميزات الرئيسية

### 🔐 نظام المصادقة والأمان

- تسجيل المستخدمين الجدد
- تسجيل الدخول والخروج
- إعادة تعيين كلمة المرور
- حماية الـ API باستخدام JWT
- نظام الأدوار (User, Manager, Admin)

### 👥 إدارة المستخدمين

- إدارة الملف الشخصي
- تحديث البيانات الشخصية
- تغيير كلمة المرور
- إدارة العناوين
- قائمة المفضلة

### 📂 إدارة الفئات

- إنشاء وتحديث الفئات
- دعم اللغتين العربية والإنجليزية
- نظام الألوان للفئات
- رفع صور الفئات

### 🏢 إدارة الشركات

- نظام طلبات التسجيل للشركات
- موافقة الأدمن على الشركات
- البحث المتقدم بالاسم والموقع
- إدارة بيانات الشركة الكاملة

### 🎫 إدارة الكوبونات

- إنشاء وإدارة الكوبونات
- تحديد تاريخ الانتهاء
- نظام الخصومات

### 🖼️ إدارة الملفات

- رفع الصور للمستخدمين والفئات والشركات
- معالجة الصور باستخدام Sharp
- تخزين محلي آمن

## 🛠️ التقنيات المستخدمة

### Backend

- **Node.js** - بيئة التشغيل
- **Express.js** - إطار العمل
- **MongoDB** - قاعدة البيانات
- **Mongoose** - ODM لـ MongoDB

### الأمان والمصادقة

- **JWT** - مصادقة الرموز المميزة
- **Bcrypt** - تشفير كلمات المرور
- **Express Validator** - التحقق من صحة البيانات

### الملفات والصور

- **Multer** - رفع الملفات
- **Sharp** - معالجة الصور

### أخرى

- **Nodemailer** - إرسال البريد الإلكتروني
- **Compression** - ضغط الاستجابات
- **CORS** - مشاركة الموارد
- **Morgan** - تسجيل الطلبات

## 📁 هيكل المشروع

```
backend/
├── config/
│   └── database.js          # إعدادات قاعدة البيانات
├── controllers/             # متحكمات العمليات
│   ├── authService.js       # مصادقة المستخدمين
│   ├── userService.js       # إدارة المستخدمين
│   ├── categoryService.js   # إدارة الفئات
│   ├── companyService.js    # إدارة الشركات
│   └── couponService.js     # إدارة الكوبونات
├── middlewares/             # الوسائط المتوسطة
│   ├── errorMiddleware.js   # معالجة الأخطاء
│   ├── uploadImageMiddleware.js  # رفع الصور
│   └── validatorMiddleware.js    # التحقق من الصحة
├── model/                   # نماذج قاعدة البيانات
│   ├── userModel.js         # نموذج المستخدم
│   ├── categoryModel.js     # نموذج الفئة
│   ├── companyModel.js      # نموذج الشركة
│   └── couponModel.js       # نموذج الكوبون
├── router/                  # المسارات
│   ├── index.js             # المسارات الرئيسية
│   ├── authRoute.js         # مسارات المصادقة
│   ├── userRoute.js         # مسارات المستخدمين
│   ├── categoryRoute.js     # مسارات الفئات
│   ├── companyRoute.js      # مسارات الشركات
│   └── couponRoute.js       # مسارات الكوبونات
├── utils/                   # الأدوات المساعدة
│   ├── apiError.js          # أخطاء API
│   ├── apiFeatures.js       # ميزات API الإضافية
│   ├── createToken.js       # إنشاء الرموز المميزة
│   ├── sendEmail.js         # إرسال البريد الإلكتروني
│   └── validators/          # التحقق من صحة البيانات
├── uploads/                 # الملفات المرفوعة
│   ├── brands/              # شعارات العلامات التجارية
│   ├── categories/          # صور الفئات
│   ├── products/            # صور المنتجات
│   └── users/               # صور المستخدمين
└── server.js                # نقطة البداية للتطبيق
```

## 🔧 التثبيت والإعداد

### المتطلبات الأساسية

- Node.js (الإصدار 16 أو أحدث)
- MongoDB
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**

   ```bash
   git clone <repository-url>
   cd addwall-backend
   ```

2. **تثبيت التبعيات**

   ```bash
   npm install
   ```

3. **إعداد متغيرات البيئة**
   أنشئ ملف `.env` في المجلد الجذر:

   ```env
   NODE_ENV=development
   PORT=8000
   DB_URI=mongodb://localhost:27017/addwall
   JWT_SECRET_KEY=your-super-secret-jwt-key
   JWT_EXPIRES_IN=30d
   BASE_URL=http://localhost:8000
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

4. **تشغيل قاعدة البيانات**
   تأكد من تشغيل MongoDB على المنفذ الافتراضي (27017)

5. **تشغيل التطبيق**

   ```bash
   # للتطوير
   npm run start:dev

   # للإنتاج
   npm start
   ```

## 📚 استخدام API

### الأساسيات

- **Base URL**: `http://localhost:8000/api/v1`
- **Authentication**: استخدم Bearer Token في الهيدر
- **Content-Type**: `application/json` للطلبات

### أمثلة على الاستخدام

#### 1. تسجيل مستخدم جديد

```bash
POST /api/v1/auth/signup
Content-Type: application/json

{
  "name": "أحمد محمد",
  "email": "ahmed@example.com",
  "password": "123456"
}
```

#### 2. تسجيل الدخول

```bash
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "ahmed@example.com",
  "password": "123456"
}
```

#### 3. إنشاء فئة جديدة (Admin Only)

```bash
POST /api/v1/categories
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "nameAr": "مطاعم",
  "nameEn": "Restaurants",
  "color": "#FF6B6B"
}
```

## 🎯 API Endpoints

### 🔐 المصادقة (Authentication)

- `POST /auth/signup` - تسجيل مستخدم جديد
- `POST /auth/login` - تسجيل الدخول
- `POST /auth/forgotPassword` - نسيت كلمة المرور
- `POST /auth/verifyResetCode` - التحقق من كود إعادة التعيين
- `PUT /auth/resetPassword` - إعادة تعيين كلمة المرور

### 👤 المستخدمين (Users)

- `GET /users/getMe` - الحصول على بياناتي
- `PUT /users/changeMyPassword` - تغيير كلمة المرور
- `PUT /users/updateMe` - تحديث بياناتي
- `DELETE /users/deleteMe` - حذف حسابي
- `GET /users` - جلب جميع المستخدمين (Admin)
- `POST /users` - إنشاء مستخدم جديد (Admin)
- `PUT /users/:id` - تحديث مستخدم (Admin)
- `DELETE /users/:id` - حذف مستخدم (Admin)

### 📂 الفئات (Categories)

- `GET /categories` - جلب جميع الفئات
- `GET /categories/:id` - جلب فئة محددة
- `POST /categories` - إنشاء فئة جديدة (Admin)
- `PUT /categories/:id` - تحديث فئة (Admin)
- `DELETE /categories/:id` - حذف فئة (Admin)

### 🏢 الشركات (Companies)

- `POST /companies` - تقديم طلب تسجيل شركة
- `GET /companies` - جلب جميع الشركات المعتمدة
- `GET /companies/search` - البحث عن شركة بالاسم
- `GET /companies/category/:categoryId` - شركات فئة محددة
- `GET /companies/pending` - طلبات الشركات المعلقة
- `PUT /companies/update/:id` - تحديث شركة (Owner)
- `DELETE /companies/delete/:id` - حذف شركة (Owner)
- `PATCH /companies/:id/approve` - الموافقة على شركة (Admin)

### 🎫 الكوبونات (Coupons)

- `GET /coupons` - جلب جميع الكوبونات (Admin)
- `GET /coupons/:id` - جلب كوبون محدد (Admin)
- `POST /coupons` - إنشاء كوبون جديد (Admin)
- `PUT /coupons/:id` - تحديث كوبون (Admin)
- `DELETE /coupons/:id` - حذف كوبون (Admin)

## 🔒 نظام الأمان

### الأدوار والصلاحيات

1. **User** - المستخدم العادي

   - قراءة البيانات العامة
   - إدارة ملفه الشخصي
   - طلب تسجيل شركة

2. **Manager** - المدير

   - جميع صلاحيات المستخدم
   - إدارة الفئات
   - إدارة الكوبونات

3. **Admin** - المدير العام
   - جميع الصلاحيات
   - إدارة المستخدمين
   - الموافقة على الشركات
   - حذف أي بيانات

### حماية API

- JWT Authentication
- Password Hashing with Bcrypt
- Input Validation
- Rate Limiting
- CORS Protection
- Error Handling Middleware

## 🗃️ نماذج قاعدة البيانات

### User Model

```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  profileImg: String,
  role: Enum['user', 'manager', 'admin'],
  active: Boolean,
  addresses: Array,
  wishlist: Array,
  passwordChangedAt: Date,
  passwordResetCode: String,
  passwordResetExpires: Date,
  passwordResetVerified: Boolean
}
```

### Category Model

```javascript
{
  nameAr: String,
  nameEn: String,
  color: String,
  slug: String,
  image: String
}
```

### Company Model

```javascript
{
  companyName: String,
  categoryId: ObjectId (ref: Category),
  description: String,
  logo: String,
  country: String,
  city: String,
  email: String,
  whatsapp: String,
  facebook: String,
  website: String,
  isApproved: Boolean,
  createdAt: Date
}
```

### Coupon Model

```javascript
{
  name: String,
  expire: Date,
  discount: Number
}
```

## 📧 إعدادات البريد الإلكتروني

لإرسال البريد الإلكتروني (مثل إعادة تعيين كلمة المرور)، أضف المتغيرات التالية إلى ملف `.env`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## 🚀 نشر التطبيق

### متغيرات البيئة للإنتاج

```env
NODE_ENV=production
PORT=8000
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/addwall
JWT_SECRET_KEY=your-production-jwt-secret
BASE_URL=https://your-domain.com
```

### خطوات النشر

1. إعداد خادم MongoDB
2. تحديث متغيرات البيئة
3. بناء التطبيق
4. تشغيل الخادم

## 🧪 الاختبار

### اختبار API مع Postman

1. استورد ملف `AddWall_API_Postman_Collection.json`
2. أعد ضبط متغيرات البيئة
3. ابدأ الاختبار من تسجيل المستخدم

### اختبار الوحدات

```bash
npm test
```

## 📝 سجل التغييرات

### الإصدار 1.0.0

- إطلاق النظام الأساسي
- نظام المصادقة الكامل
- إدارة المستخدمين والفئات والشركات
- نظام الكوبونات
- رفع ومعالجة الصور

## 🤝 المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. أنشئ فرع للميزة الجديدة
3. Commit التغييرات
4. Push إلى الفرع
5. افتح Pull Request

## 📞 الدعم

لأي استفسارات أو مشاكل، يرجى:

- فتح Issue في GitHub
- مراسلة فريق التطوير

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف LICENSE للتفاصيل.

---

**تم تطوير بواسطة**: فريق AddWall Development
**الإصدار**: 1.0.0
**تاريخ آخر تحديث**: 2024
