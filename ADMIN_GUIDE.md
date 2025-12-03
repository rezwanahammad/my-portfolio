# Admin Panel Guide

## Overview

Your portfolio now has a complete admin panel for managing projects without touching the database directly.

## Setup

1. **Set Admin Password** in `.env.local`:

   ```env
   ADMIN_PASSWORD=your-secure-password-here
   ```

2. **Restart the dev server** to load the new environment variable:
   ```powershell
   npm run dev
   ```

## Access

- **Login Page**: http://localhost:3001/admin/login
- **Dashboard**: http://localhost:3001/admin/dashboard (requires login)

## Features

### 🔐 Authentication

- Simple password-based login
- Session stored in browser localStorage
- Auto-redirect to login if not authenticated

### ✏️ Project Management

- **Add New Project**: Click "+ Add New Project" button
- **Edit Project**: Click "Edit" on any project in the table
- **Delete Project**: Click "Delete" (with confirmation prompt)
- **View All Projects**: Table view with all project details

### 📝 Project Fields

- **Title** (required): Project name
- **Description**: Brief project description
- **Image URL**: Path to project image (e.g., `/project.png`)
- **Technologies**: Comma-separated list (e.g., `Next.js, MongoDB, React`)
- **Project URL**: GitHub or demo link

## Workflow

1. Visit `/admin/login`
2. Enter your admin password
3. Manage projects in the dashboard
4. Changes appear immediately on your portfolio
5. Click "Logout" when done

## Security Notes

- ⚠️ **Change the default password** in `.env.local`
- Never commit `.env.local` to git (it's already in `.gitignore`)
- This is a simple auth system for personal use
- For production, consider implementing JWT tokens or NextAuth.js

## API Endpoints

All admin endpoints require authentication:

- `POST /api/admin/login` - Login with password
- `POST /api/admin/projects` - Create new project
- `PUT /api/admin/projects` - Update existing project
- `DELETE /api/admin/projects?id=xxx` - Delete project

Authorization header required: `Authorization: Bearer <token>`
