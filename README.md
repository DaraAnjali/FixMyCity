# FixMyCity — AI Powered Smart Civic Issue Reporting System

FixMyCity is an AI-powered civic issue reporting and resolution platform designed to bridge the communication gap between citizens and municipal authorities.

The platform allows users to report civic problems such as potholes, garbage overflow, water leakage, and broken streetlights through an easy-to-use interface with image uploads, live maps, AI-based categorization, and severity prediction.

---

# Features

## Citizen Features
- Report civic issues with description, image, and location
- AI-powered issue categorization
- AI-based severity prediction
- Live issue tracking
- Interactive map visualization
- Community support/upvote system
- Real-time notifications

## Admin Features
- Admin dashboard
- View all reported issues
- Update issue status
- Delete issues
- Analytics dashboard
- Charts and visualizations
- Search and filter functionality

---

# AI Features

## AI Issue Categorization
The platform uses NLP-based AI classification with Hugging Face Transformers to automatically categorize civic complaints into:
- Road Damage
- Garbage
- Water Leakage
- Streetlight

## AI Severity Prediction
The system intelligently predicts issue severity levels:
- Low
- Medium
- High

This helps authorities prioritize urgent civic problems efficiently.

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- Recharts
- React Toastify
- Leaflet Maps

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary

## AI Integration
- Hugging Face Inference API
- NLP Text Classification

---

# Project Structure

FixMyCity/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── src/
│   ├── uploads/
│   └── package.json
│
└── README.md

---

# Installation

# Clone Repository

```bash
git clone https://github.com/DaraAnjali/FixMyCity.git
```

---

# Backend Setup

```bash
cd server

npm install

npm run dev
```

Create `.env` file inside server:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
HF_API_TOKEN=your_huggingface_token
```

---

# Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# AI Workflow

1. User submits complaint
2. AI analyzes title + description
3. AI predicts category
4. AI predicts severity
5. Issue stored in MongoDB
6. Admin dashboard updates in real-time

---

# Future Enhancements

- Image-based AI classification
- Duplicate complaint detection
- AI hotspot analysis
- SMS/Email notifications
- Multi-language support
- Smart municipal routing

