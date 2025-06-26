A full-stack **e-commerce** application built with the **PERN** stack, designed to support multiple independent bookstores under a single unified system.

## 🚀 Features

- 🔐 **Robust Role-Based Authentication**  
  Store owners can assign roles like **Manager** and **Employee**, enabling fine-grained control over store operations.

- 🏪 **Multi-Tenant Architecture**  
  Each bookstore:

  - Operates with its own isolated inventory
  - Maintains its own staff and access control
  - Integrates seamlessly with a global cart system

- 🛒 **Unified Shopping Experience**  
  Customers can:

  - Browse books across all stores
  - Add items from multiple vendors to one unified cart
  - Checkout with a single Stripe payment

- 💳 **Stripe Checkout + Webhooks**  
  Handles:

  - Secure payments
  - Real-time order confirmations
  - Automated status updates via webhooks

- 🧑‍💼 **Comprehensive Account Management**  
  Includes:

  - Password reset
  - Email changes
  - Account recovery
  - Secure account deletion

- 🛡️ **Advanced Security Architecture**  
  Multi-layer token strategy:

  - **Access Tokens**: JWTs (signed) for quick verification
  - **Refresh Tokens**: Encrypted JWE (RSA-OAEP + AES-GCM) for confidentiality
  - **One-Time Tokens**: HMAC-secured (CBC-SHA) for actions like password resets and email verification

- 🐳 **Dockerized Deployment**  
  Single container serves both **API** and **frontend** using **Express**.

- 🌐 **Secure Local Development**  
  Supports HTTPS in dev using:
  - [`mkcert`](https://github.com/FiloSottile/mkcert)
  - [`ngrok`](https://ngrok.com/)
  - `NGINX` reverse proxy
