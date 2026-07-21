# 🍪 Admin Panel - Cookie Authentication

A secure and responsive **Admin Panel** built with **Node.js, Express.js, MongoDB, EJS, and Bootstrap**. This project implements **cookie-based authentication** with complete CRUD operations for admin management, secure password hashing, profile image upload, and a modern responsive interface.

---

## 🚀 Features

* 🔐 Admin Registration
* 🔑 Secure Login & Logout
* 🍪 Cookie-Based Authentication
* 📊 Admin Dashboard
* ➕ Add New Admin
* 👥 View All Admins
* ✏️ Update Admin Details
* 🗑️ Delete Admin
* 📷 Profile Image Upload
* 🔒 Password Hashing using Bcrypt
* 🛡️ Protected Routes
* 📱 Fully Responsive UI

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Cookie Parser
* Bcrypt

### File Upload

* Multer

---

## 📁 Project Structure

```text
AdminPanel-cookie/
│
├── config/
│   └── db.js
│
├── controller/
│   └── adminController.js
│
├── models/
│   └── adminModel.js
│
├── public/
│   ├── assets/
│   └── uploads/
│
├── routes/
│   └── adminRoutes.js
│
├── views/
│   ├── dashboard.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   ├── add-admin.ejs
│   ├── edit-admin.ejs
│   └── view-admin.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AdminPanel-cookie.git
```

### 2. Navigate to the Project Folder

```bash
cd AdminPanel-cookie
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure MongoDB

Open:

```text
config/db.js
```

Replace the MongoDB connection string with your own.

Example:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/adminPanel");
```

### 5. Start the Server

```bash
npm start
```

or (for development)

```bash
npm run dev
```

The application will run at:

```text
http://localhost:8080
```

---

## 📌 Available Routes

| Route               | Method   | Description     |
| ------------------- | -------- | --------------- |
| `/signup`           | GET/POST | Register Admin  |
| `/login`            | GET/POST | Login           |
| `/logout`           | GET      | Logout          |
| `/`                 | GET      | Dashboard       |
| `/add-admin`        | GET/POST | Add New Admin   |
| `/view-admin`       | GET      | View All Admins |
| `/edit-admin/:id`   | GET/POST | Update Admin    |
| `/delete-admin/:id` | GET      | Delete Admin    |

---

## 🔒 Security Features

* Password hashing with **Bcrypt**
* Cookie-based authentication
* Protected admin routes
* Secure login & logout
* File upload validation
* MongoDB data storage

---

# 📸 Screenshots

## 🔑 Login Page

<img width="1350" alt="Login" src="https://github.com/user-attachments/assets/44f6339f-06ed-41da-8264-f4f86a420d56">

---

## 👥 View Admin Page

<img width="1905" alt="View Admin" src="https://github.com/user-attachments/assets/bdfca4e5-4d03-4b4e-a670-76ecf242a58b">

---

## 🎥 Project Video

https://drive.google.com/drive/folders/1XOzFmKUcWjfh8n5obmwGFi5baSLhiIj-?usp=drive_link

## 📦 Dependencies

* express
* mongoose
* ejs
* bcrypt
* cookie-parser
* multer
* nodemon

Install all packages with:

```bash
npm install
```

---

## 🌟 Future Enhancements

* ✅ JWT Authentication
* ✅ Forgot Password
* ✅ Email Verification
* ✅ Role-Based Authentication
* ✅ Search & Filter
* ✅ Pagination
* ✅ Dashboard Analytics
* ✅ Dark Mode
* ✅ Activity Logs
* ✅ Two-Factor Authentication (2FA)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---


Feel free to use, modify, and distribute this project for learning and development purposes.
