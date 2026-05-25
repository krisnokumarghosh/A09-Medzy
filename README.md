<div align="center">

<img src="https://img.shields.io/badge/Medzy-Doctor%20Appointment%20Platform-0ea5e9?style=for-the-badge&logo=react&logoColor=white" alt="Medzy Banner" />

# 🏥 Medzy

### Your trusted platform for booking doctor appointments — fast, simple, and secure.

</div>

---

## 📌 Purpose

**Medzy** is a full-stack doctor appointment web application designed to bridge the gap between patients and healthcare professionals. Users can discover top-rated doctors, view their profiles, and book appointments effortlessly — all from one platform. With a personalized dashboard, users can manage their bookings and profile information with ease, while secure authentication ensures a safe and smooth experience.

---

## 🌐 Live URL

🔗 **[Visit Medzy →](YOUR_LIVE_URL_HERE)**

---

## ✨ Key Features

### 🏠 Homepage
- Displays **top-rated doctors** at a glance, giving users instant access to the best healthcare providers on the platform.

### 📋 All Appointments Page
- Lists **all available doctors** so users can browse, explore, and choose the right specialist for their needs.

### 🔍 Doctor Details Page
- Clicking the **Details** button on any doctor card:
  - Redirects **logged-in users** to the doctor's full profile page.
  - Redirects **unauthenticated users** to the **Login page** to sign in first.
- On the details page, users can click **Book Appointment** to open a **modal form**.
- Filling out and submitting the form **confirms the appointment** successfully.

### 📊 User Dashboard
- **My Appointments Tab**
  - View all booked appointments in one place.
  - **Update** or **Delete** any existing appointment.
- **My Profile Tab**
  - Displays current profile information.
  - Click **Update Profile** to edit and save personal details.

### 🔐 Authentication
- Supports both **Google OAuth** login and **manual registration/login**.
- Powered by **BetterAuth** with a **MongoDB adapter** for secure, persistent sessions.

---

## 📦 NPM Packages Used

| Package | Purpose |
|--------|---------|
| [`react-hot-toast`] | Elegant toast notifications for user feedback |
| [`heroui`] | Beautiful, accessible UI component library |
| [`react-icons`] | Comprehensive icon library for React |
| [`react-fast-marquee`] | For displaying latest news or updates |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React |
| **UI Library** | HeroUI |
| **Authentication** | BetterAuth (with MongoDB Adapter) |
| **Database** | MongoDB |
| **Notifications** | React Hot Toast |
| **Icons** | React Icons |

---

