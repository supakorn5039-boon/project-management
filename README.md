# 🧩 Project Management Web App

![Java](https://img.shields.io/badge/Java-21-orange?logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Backend-success?logo=springboot)
![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Build Status](https://img.shields.io/github/actions/workflow/status/yourusername/project-management/ci.yml?label=CI%2FCD)

---

## 🧠 Overview

The **Project Management Web App** is a modern, full-stack platform designed to help teams **plan, track, and collaborate** on projects efficiently.  
Built with **Java Spring Boot** on the backend and **React + Vite** on the frontend, it offers a scalable, high-performance environment for managing projects and tasks across teams.

---

## ⚙️ Installation & Setup

### 🧩 Prerequisites

Ensure you have the following installed:

-  [Node.js](https://nodejs.org/) (v18+)
-  [Java 21](https://adoptium.net/)
-  [Maven](https://maven.apache.org/)
-  [PostgreSQL](https://www.postgresql.org/)
-  [Docker](https://www.docker.com/) (optional)

---

## 🚀 Features

### 👥 User & Team Management

-  User authentication and authorization (JWT-based)
-  Role-based access control (Admin, Manager, Member)
-  Profile management and team assignments

### 📅 Project Planning

-  Create, edit, and delete projects
-  Assign users to projects
-  Track project progress, start/end dates, and deadlines

### ✅ Task Management

-  Create and manage tasks with custom statuses (To-Do, In Progress, Done)
-  Assign tasks to team members
-  Track deadlines and completion percentage

### 💬 Communication & Collaboration

-  Comment system for tasks and projects
-  Real-time updates (via WebSocket / REST polling)
-  Notification system (for assignments, mentions, and status changes)

### 📊 Dashboard & Analytics

-  Interactive charts for project status and task progress
-  Summary widgets for team productivity
-  Filter and sort by project, assignee, or date range

---

## 🧱 Tech Stack

### 🖥️ Frontend

-  **React Tanstack ( Vite )** — fast and modular UI
-  **Tailwind CSS / Shadcn UI** — responsive and modern styling
-  **TypeScript** — type-safe and scalable frontend logic

### ⚙️ Backend

-  **Java 21 + Spring Boot** — RESTful API development
-  **Spring Security** — JWT-based authentication
-  **Spring Data JPA** — ORM and repository management
-  **PostgreSQL** — relational database
-  **Maven** — dependency management and build tool

### 🐳 DevOps

-  **Docker** — containerized environment for backend and database
-  **GitHub Actions (CI/CD)** — automated testing and build pipelines

---

### Clone the Repository

```bash
git clone https://github.com/yourusername/project-management.git
cd project-management
```
