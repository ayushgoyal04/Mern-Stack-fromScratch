
// Ensure environment variables are loaded from the correct .env file
require('dotenv').config({ path: __dirname + '/.env' });

const connectDB = require('./config/database');
const Admin = require('./models/user.admin');
const Customer = require('./models/user.customer');
const User = require('./models/users');

// const run = async () => {
//     await connectDB();
//     try {
//         await Admin.create({
//             name: 'Alice Admin',
//             email: 'alice@admin.com',
//             accessLevel: 'super'
//         });

//         await Customer.create({
//             name: 'Bob Buyer',
//             email: 'bob@customer.com',
//             shippingAddress: '123 Main St'
//         });
//         const allUsers = await User.find();
//         console.log('✅ All Users:', allUsers);
//     } catch (err) {
//         console.error('❌ Error:', err.message);
//     }
//     process.exit(0);
// };

const addUser = async () => {
    await connectDB(); // connectign to the database

    // creating the instance of the User Object
    const newUser = new User({ name: "Ayush", email: "ayush@gmail.com" });

    // saving the new user to the database
    await newUser.save();
    console.log("✅ User added:", newUser);

    // terminating the connection
    process.exit(0);
}

addUser()
// run();
