# LifeByte

LifeByte is a personalized healthcare application designed to help users monitor their health and well-being. By integrating demographic, health, location, dietary, and fitness data, the app provides tailored wellness plans, exercise routines, diet recommendations, and health alerts to enhance overall well-being.

## Table of Contents

- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Security](#backend-security)
  
## Key Features

1. **Personalized Health Solutions**
   - Tailored diet and workout plans based on user input (age, income, job, work hours, and location).
   - Alerts for weather changes and nearby health resources.
   
2. **Gamification**
   - Fitness challenges and a reward system to engage users.
   - Leaderboards for community participation and motivation.

3. **Telehealth Integration**
   - Option to book appointments with healthcare providers directly through the app.

4. **Location-Based Services**
   - Provides alerts for nearby health services (pharmacies, clinics, gyms).
   - Localized health recommendations based on climate and environment.

5. **Smartwatch Sync**
   - Integrates with smartwatches for real-time health data monitoring (heart rate, sleep, activity).

## Technology Stack

### Frontend
- **React Native**: For cross-platform mobile development.
- **Google Maps API**: To provide location-based health resource alerts.

### Backend
- **Node.js**: Backend framework for handling requests and logic.
- **Firebase**: User authentication, real-time database, and cloud storage.
- **MySQL**: Relational database for storing user-specific health data.
- **Pandas**: Data processing and analysis for personalized health recommendations.
- **CRON Jobs**: For scheduling periodic health check reminders and notifications.

### Data Security
- **End-to-End Encryption (E2EE)**: Ensuring data privacy and protection.
- **HTTPS**: For secure data transmission between the client and server.

## Installation

To run this project locally, follow these steps:

### Prerequisites
- Node.js installed (`v14+`)
- Firebase account for authentication and database setup
- MySQL installed locally or use a cloud instance
- React Native CLI installed globally

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/<NAME_OF_APP>.git
   cd <NAME_OF_APP>
   ```

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the project root and add the following:

   ```
   FIREBASE_API_KEY=<your-firebase-api-key>
   FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
   FIREBASE_DATABASE_URL=<your-firebase-database-url>
   FIREBASE_PROJECT_ID=<your-firebase-project-id>
   MYSQL_HOST=<your-mysql-host>
   MYSQL_USER=<your-mysql-username>
   MYSQL_PASSWORD=<your-mysql-password>
   MYSQL_DATABASE=<your-mysql-database>
   ```

4. **Set up Firebase:**
   - Go to the Firebase Console and create a new project.
   - Set up Authentication and Firestore Database.
   - Update the `.env` file with Firebase credentials.

5. **Run the app (development mode):**
   ```bash
   npm start
   ```

6. **Build the app (for production):**
   ```bash
   npm run build
   ```

## Usage

1. **Mobile App:**
   - Users can download the app (Android/iOS) and log in using email or social media accounts.
   - Sync smartwatch data, receive personalized wellness plans, and join fitness challenges.

2. **Admin Panel:**
   - Admins can manage users, review health reports, and customize notification settings.

3. **API Endpoints:**
   The app interacts with the backend via several APIs, such as:
   - `/api/user/profile` – Get and update user data.
   - `/api/recommendations/diet` – Retrieve personalized diet plans.
   - `/api/recommendations/workout` – Retrieve workout plans.
   - `/api/alerts/weather` – Receive weather-based health alerts.

## Backend Security

The app ensures user data privacy and security through:
- **End-to-End Encryption (E2EE)** for sensitive health information.
- **HTTPS** for secure data transmission.
- **Firebase Authentication** to manage user access securely.
