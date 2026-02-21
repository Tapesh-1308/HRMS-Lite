# HR Attendance Management System – Frontend

## 📌 Project Overview

This is the frontend application for the HR Attendance Management System.

It allows users to:
- View employee list
- Add new employees
- Delete employees
- View attendance records
- Filter attendance by employee and date

The application is built using React (Vite) and deployed on Vercel.

---

## 🛠 Tech Stack Used

- React (Vite)
- Redux Toolkit
- RTK Query
- Ant Design
- Vercel (deployment)

---

## 🚀 Steps to Run the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Tapesh-1308/HRMS-Lite.git frontend
cd frontend
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://127.0.0.1:8000/
```

### 4️⃣ Run development server

```bash
npm run dev
```

App will run at:

```
http://localhost:5173/
```

---

## ⚠ Assumptions & Limitations

* No authentication or role-based access control.
* Basic error handling implemented using toast messages.
* Pagination and advanced filtering are minimal.

---

## 🌍 Deployment

* Hosted on Vercel
* Backend URL is configured via environment variables
* Production environment variable:

  ```
  VITE_API_BASE_URL=https://your-backend-url/api
  ```
