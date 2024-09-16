# fruitAI Project

## Overview
fruitAI is a web application that provides services such as Chat, Translator, FAQ, and About. It includes a backend API that manages FAQs related to fruits. The frontend is built using React and deployed on Vercel, while the backend is built using Mongodb and deployed on Render.

### Technologies Used:
- **Frontend:** React (React Router, Async/Await API calls)
- **Backend:** MongoDb (CRUD API for fruit FAQs)
- **Deployment:** 
  - Frontend: Vercel
  - Backend: Render

---

## Project Setup

### Backend (Django API) Setup

1. **Start the Backend on Render:**
   The backend must be up and running before starting the frontend to ensure proper API connectivity.

   If you've deployed the backend on Render, ensure it's started using the Render dashboard:
   
   1. Log in to your Render account.
   2. Go to your project and make sure the backend service is running.
   3. Copy the backend URL that Render provides (e.g., `https://your-backend.onrender.com`).
   
   - **FAQ API Endpoint:** Once the backend is live, you can access the FAQ API at:
     ```bash
     https://your-backend.onrender.com/api/faqs
     ```

### Frontend (React) Setup

2. **Start the Frontend on Vercel:**
   After the backend is running, follow these steps to start the frontend:

   - Navigate to your Vercel dashboard.
   - Ensure that the frontend project is deployed correctly.
   - Vercel will automatically connect to the backend if the proper API URL is used in your project code.

### Local Development (Optional)

To run the project locally, follow these steps:

#### Backend:

1. **Clone the Backend Repository:**
   ```bash
   git clone https://github.com/your-username/fruitAI-backend.git
   cd fruitAI-backend
