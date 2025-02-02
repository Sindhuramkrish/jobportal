MERN Stack Job Portal


A responsive job portal built using the MERN stack, enabling job seekers to find and apply for jobs while employers can post and manage listings.

 Features

User Authentication (JWT-based)

Job Posting & Management

Job Search & Filtering

Application Tracking

Dashboards for Users & Employers

Responsive UI 


🛠️ Tech Stack

Frontend: React.js

Backend: Node.js, Express.js, MongoDB (Mongoose)

Authentication: JWT

Deployment: GitHub Pages (Frontend), Render/Vercel (Backend)


📂 Folder Structure

├── client/       # React frontend  
├── server/       # Express backend  
├── models/       # Database schemas  
├── routes/       # API routes  
└── README.md     # Project documentation

Thus job portal project uses JWT (JSON Web Token) for authentication. This is evident from the presence of the jsonwebtoken package in  dependencies list.

🔐 Authentication Mechanism:

1. User Login & Signup:

Users provide credentials (email/password).

Passwords are hashed using bcryptjs before storing in the database.



2. Token Generation:

Upon successful login, a JWT token is generated using jsonwebtoken.

This token is sent to the client for future authenticated requests.



3. Token Verification (Middleware):

Incoming requests include the token in headers (e.g., Authorization: Bearer <token>).

The backend verifies the token before granting access to protected routes.








