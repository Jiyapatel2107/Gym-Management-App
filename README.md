# Gym Management System

## 🧾 Overview

This is a web-based Gym Management System designed to assist gym owners in managing their members, fees, notifications, diet plans, supplements, and reports. Built with Firebase for backend support and modern web technologies for the frontend, it ensures a seamless digital experience for gym owners, members, and users.

## 💡 Features

### Admin Panel

* 🔐 Login with Firebase Auth
* ➕ Add Member
* ✏️ Update/Delete Member
* 💵 Create Bills
* 📦 Assign Fee Packages
* 🔔 Send Monthly Notifications
* 📤 Export Reports as CSV
* 💊 Supplement Store (add/edit/delete supplements)
* 🥗 Manage Diet Details

### Member Panel

* 🔐 Secure Login
* 📄 View Bill Receipts
* 🔔 View Monthly Notifications

### User Panel

* 🔐 Login
* 📋 View Profile Details
* 🔍 Search Gym Members

## 🔧 Technologies Used

* HTML
* CSS
* JavaScript
* Firebase (Authentication + Firestore)

## 📂 Folder Structure

```
📁 project-root
├── 📁 pages
│   ├── login.html / signup.html / dashboard.html / etc.
│   └── *.js (logic for each page)
├── 📁 components
│   └── MemberCard.js
├── 📁 services
│   └── memberService.js / authService.js
├── 📁 utils
│   └── exportToCSV.js / formatDate.js
├── index.html
└── firebase-config.js
```

## 🚀 Setup Instructions

1. Clone the repository:

```bash
 https://github.com/Jiyapatel2107/Gym-Management-App.git
```

2. Navigate into the project folder and open `index.html` or deploy on Firebase Hosting.
3. Make sure Firebase credentials in `firebase-config.js` are configured correctly.

## 🧪 Test Cases

| Scenario            | Expected Result                                |
| ------------------- | ---------------------------------------------- |
| Member login        | Redirects to member dashboard                  |
| Admin adds a member | Member stored in Firestore & shows in list     |
| Create bill         | Bill saved and visible to corresponding member |
| View bills          | Bill details rendered properly with due status |
| Export report       | CSV downloaded with member data                |

## 📦 Deployment

* Can be deployed on **Firebase Hosting** or any static server.
* Ensure Firebase rules are secure and role-based access is configured.

## ✅ Optimizations

* Modular JS structure for maintainability
* LocalStorage caching for smoother role-based redirection
* Minimized Firestore reads

## 📸 Screenshots
![Admin](https://github.com/user-attachments/assets/93d81ddf-698a-4232-a558-2918382854dd)


## 🔐 Authentication & Security

* Role-based routing using localStorage
* Firebase Authentication for secure login/signup

---

Built with ❤️ for modern gym management. For queries, feel free to open issues or contribute on GitHub.
