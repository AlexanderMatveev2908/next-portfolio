A full-stack e-commerce application built with the **PERN** stack, designed to support multiple independent bookstores under a single unified system.

## 🚀 Features

- 🔐 **Role-Based Authentication**  
  Store owners can assign roles such as **Manager** and **Employee**, allowing fine-grained control over store operations.

- 🏪 **Multi-Tenant Architecture**  
  Each bookstore operates with its own isolated inventory. Customers can browse and purchase from multiple stores using a single, unified cart.

- 🧾 **Stripe Checkout + Webhooks**  
  Real-time payment confirmation and order updates using full webhook integration.

- ⚙️ **Advanced Account Management**  
  Includes:

  - Password reset
  - Email change
  - Account recovery
  - Secure account deletion

- 🛡️ **Layered Token Security**

  - **Access Tokens**: Signed JWTs for fast, stateless authentication
  - **Refresh Tokens**: Encrypted JWE (RSA-OAEP + AES-GCM) for confidentiality and integrity
  - **One-Time Tokens**: Secured with HMAC (CBC-SHA) for verification tasks like password resets and email validation

- 🐳 **Dockerized Deployment**  
  A single container runs both the API and frontend via Express. Environment supports HTTPS during development using `mkcert`, `ngrok`, and an `NGINX` reverse proxy.

This application was built entirely from scratch, including frontend architecture, backend logic, data modeling, and third-party integrations.
