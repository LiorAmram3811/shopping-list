# Shopping List – Full Stack Project

A modern full-stack shopping list app built with **React + TypeScript (frontend)** and **ASP.NET Core 8 (backend)**, using **SQL Server** for persistent data.

## Project Overview

This project allows users to manage a shopping list:

- Add products to the cart (with category and quantity)
- Choose the amount of the items
- Edit/remove items
- Submit the final list (order/cart)
- All with a clean, responsive, mobile-friendly interface

The app demonstrates best practices in both **React (TypeScript)** and **ASP.NET Core 8**, including API validation, state management, and user-friendly UX with Toast notifications and validation feedback.

---

## Tech Stack

**Frontend:**

- React 18 (with TypeScript)
- Bootstrap 5 + Bootstrap Icons
- Zustand (global store)
- React Toastify (notifications)
- React Hook Form + Yup (form validation)
- Axios (API calls)

**Backend:**

- ASP.NET Core 8 (C#)
- Entity Framework Core (Code First)
- ShoppingDbContext

**Database:**

- SQL Server (localdb)

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/LiorAmram3811/shopping-list.git
cd shopping-list
```

### 2. Setup and Run the Backend

```bash
cd shopping-list-backend
# Restore packages
dotnet restore

# If you don't have dotnet-ef installed
dotnet tool install --global dotnet-ef

# Make sure to update the server and database name in your appsettings.json file, if needed.

# Create the database (if not exists)
dotnet ef database update

# Run the API
dotnet run
```

> **Tip:**  
> For local development, it is recommended to run the backend on HTTP (not HTTPS) to avoid CORS and SSL issues when calling the API from React.

> **Bonus**
> Once the backend is running, open http://localhost:5115/swagger/index.html in your browser to explore the API with Swagger UI.

By default the API runs on https://localhost:5001
Change the connection string in appsettings.json if needed.

### 3. Setup and Run the Frontend

```bash
cd ../shopping-list-frontend
# Install dependencies
npm install

# Create a `.env` file with:
# REACT_APP_API_BASE_URL=https://localhost:5001
# (or whatever your backend url is)

# Start the React app
npm start
```

The app should now be running on http://localhost:3000.

### 4. Database

The database is created automatically by Entity Framework Core migrations.
If you want to reset the database, run:

```bash
dotnet ef database drop
dotnet ef database update
```

Make sure SQL Server (or LocalDB) is installed and running.
