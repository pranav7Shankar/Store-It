# Store It

A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest **Next.js 15** and the **Appwrite Node SDK**, utilizing advanced features for seamless file management.

## 🚀 Tech Stack

- ⚛️ React 19
- 🧪 Next.js 15
- 💾 Appwrite
- 🎨 TailwindCSS
- 🧩 ShadCN
- ⌨️ TypeScript

## ✨ Features

- 🔐 **User Authentication with Appwrite**: Sign up, log in, and log out using Appwrite’s secure auth system.
- 📤 **File Uploads**: Upload documents, images, videos, and audio files with ease.
- 📂 **View and Manage Files**: Browse uploaded files, open in new tabs, rename or delete.
- 📥 **Download Files**: Instantly download any file from your collection.
- 🔗 **File Sharing**: Share files with others for seamless collaboration.
- 📊 **Dashboard**: Visual overview of your storage usage, recent uploads, and file types.
- 🔎 **Global Search**: Quickly search across all your files and shared content.
- ↕️ **Sorting Options**: Sort files by date, name, or size.
- 🖼️ **Modern Responsive Design**: Sleek UI optimized for all devices.

## 🔗 Live Demo

[👉 Check out the live version](https://store-it-two-khaki.vercel.app/)

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pranav7Shankar/Store-It.git
cd Store-It
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory and add your Appwrite credentials:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_BUCKET=your_bucket_id
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=your_user_collection_id
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=your_files_collection_id
NEXT_APPWRITE_KEY=your_secret_key
```

### 4. Run the development server

```bash
yarn dev
# or
npm run dev
```
---

Built with ❤️ by [Pranav Shankar](https://github.com/pranav7Shankar)

