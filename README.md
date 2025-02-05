# Lingo-Bingo 🎯

**Lingo-Bingo** is an interactive e-learning platform designed to make learning the German language fun and accessible. With a rich vocabulary bank, expert support, and engaging lessons, you can master German at your own pace.

🌐 **Live Demo:** [Lingo-Bingo](https://lingobingogerman.netlify.app/)

---

## 🚀 Features

### 1. **Responsive Design**

Lingo-Bingo is fully responsive, offering an excellent user experience across all devices.

### 2. **Attractive Homepage**

Discover who we are, what we do, and read feedback from our learners on the homepage.

### 3. **Start Learning**

- Explore lessons tailored for different levels of difficulty (color-coded for clarity).
- View German words along with their English meanings.
- Click on a word card to:
  - Hear the pronunciation.
  - Get detailed information such as:
    - **Part of speech**
    - **Usage examples**
    - **When to use it**

### 4. **Tutorials Page**

Access video tutorials to enhance your learning experience. (_Available for logged-in users only._)

### 5. **Authentication System**

- **Login** with email/password or Google.
- **Register** easily by providing your name, email, password, and photo URL.
- Use the **Forgot Password** option to reset your password.
- Seamless navigation: If redirected to login from a private route, you'll return to the original page after successful login.

### 6. **Private Routes**

Ensure secure access to lessons and tutorials, requiring users to log in before proceeding.

### 7. **User Profile Management**

After logging in, visit **My Profile** to:

- View account details (name, email, and photo).
- Update your name and photo if needed.

---

## 🛠️ Technology Stack

- **Frontend:** React
- **Styling:** Tailwind CSS, Daisy UI, AOS (Animate On Scroll)
- **Authentication:** Firebase
- **Routing:** React Router DOM
- **Head Management:** React Helmet Async
- **UI Enhancements:** React Icons, React Spinners

## Running the Project Locally

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/AsifurRahman10/ArtifactArcade-website-client.git
cd ArtifactArcade-website-client
```

### 2. Install Dependencies

Frontend
Navigate to the frontend folder and install the required dependencies:

```
cd frontend
npm install
```

### 3. Setup Environment Variables

You need to create a .env file for both the frontend and backend with the necessary environment variables.

Frontend:
Firebase credentials
API keys for any other integrations (if needed)
Backend:
Create a .env file in the backend folder with the following variables and set up accordingly:

```

VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id
VITE_STRIPE_KEY=your-stripe-api-key
VITE_DB_URL=your-database-url

```

```

### 4. Running the Project

After setting up the environment variables, you can start the project by running the following commands:
Frontend
In the frontend folder, run:

```

bash
npm run dev

```

The frontend will be available at http://localhost:3000,
```
