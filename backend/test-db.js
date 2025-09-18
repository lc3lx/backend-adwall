const mongoose = require("mongoose");
const User = require("./model/userModel");
const bcrypt = require("bcryptjs");

// تحميل متغيرات البيئة
require("dotenv").config({ path: "env.txt" });

console.log("DB_URI:", process.env.DB_URI);

async function testDatabase() {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(
      process.env.DB_URI || "mongodb://localhost:27017/addwall"
    );
    console.log("✅ Database connected successfully!");

    // اختبار عد المستخدمين
    console.log("\nTesting user count...");
    const userCount = await User.countDocuments();
    console.log(`Total users in database: ${userCount}`);

    // إذا لم يكن هناك مستخدمين، أنشئ مدير
    if (userCount === 0) {
      console.log("\nNo users found. Creating admin user...");

      const admin = new User({
        name: "مدير النظام",
        email: "admin@addwall.com",
        password: await bcrypt.hash("123456", 12),
        role: "admin",
        lastLogin: new Date(),
      });

      await admin.save();
      console.log("✅ Admin user created!");

      // إضافة بعض المستخدمين للاختبار
      const users = [];
      for (let i = 1; i <= 10; i++) {
        users.push({
          name: `مستخدم ${i}`,
          email: `user${i}@test.com`,
          password: await bcrypt.hash("123456", 12),
          role: "user",
          lastLogin:
            i <= 3
              ? new Date()
              : new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        });
      }

      await User.insertMany(users);
      console.log(`✅ Created ${users.length} test users`);
    }

    // اختبار الإحصائيات
    console.log("\nTesting statistics...");
    const totalUsers = await User.countDocuments();
    const adminsCount = await User.countDocuments({ role: "admin" });
    const regularUsersCount = await User.countDocuments({ role: "user" });

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const activeThisWeek = await User.countDocuments({
      $or: [
        { lastLogin: { $gte: sevenDaysAgo } },
        { createdAt: { $gte: sevenDaysAgo } },
      ],
    });

    console.log("📊 Statistics:");
    console.log(`- Total users: ${totalUsers}`);
    console.log(`- Admins: ${adminsCount}`);
    console.log(`- Regular users: ${regularUsersCount}`);
    console.log(`- Active this week: ${activeThisWeek}`);

    console.log("\n✅ Database test completed successfully!");
  } catch (error) {
    console.error("❌ Database test failed:");
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}

testDatabase();
