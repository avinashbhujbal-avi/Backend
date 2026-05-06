           Backend Development


1) What is an API?
API (Application Programming Interface)
 👉 It is a way for two systems to communicate with each other
Simple Meaning:
API = Messenger between client (frontend) and server (backend)
Types of APIs (Important)

1. 🌐 REST API (Most Used)



4
Features:
Uses HTTP methods (GET, POST, PUT, DELETE)
Stateless
Uses JSON
Example:
GET /users      // get users
POST /users     // create user
PUT /users/1    // update user
DELETE /users/1 // delete user
👉 Used in: 90% of web apps

2. ⚡ GraphQL API



6
Features:
Client asks exactly what data it needs
No over-fetching / under-fetching
Example:
{
 user(id: 1) {
   name
   email
 }
}
👉 Used in: modern apps like Facebook

3. 🔌 SOAP API (Old but used in banks)



6
Features:
Uses XML
Very strict & secure
Heavy
👉 Used in: banking, enterprise systems

4. 🚀 Web API
Meaning:
API that works over the internet (HTTP/HTTPS)
👉 Example:
Google Maps API
Payment APIs (Razorpay, Stripe)

5. 🔁 WebSocket API (Real-time)



5
Features:
Real-time communication
Two-way connection
👉 Used in:
Chat apps 💬
Live trading 📈
Gaming 🎮

6. 🧩 Third-Party API
Meaning:
APIs provided by other companies
👉 Examples:
Payment (Stripe, Razorpay)
Auth (Google Login)
Maps (Google Maps)

🔥 HTTP Methods (Very Important)
Method
Use
GET
Get data
POST
Create data
PUT
Update full data
PATCH
Update partial
DELETE
Remove data


🧠 API vs Endpoint
API → whole system
Endpoint → specific URL
Example:
API: /users
Endpoint: /users/1


