# MongoDB integration for Projects

This project includes an API route that reads the `projects` collection from MongoDB and the frontend fetches `/api/projects` to render the Projects section.

## Setup

1. Set the `MONGODB_URI` environment variable in your shell or hosting platform. Example (PowerShell):

```powershell
$env:MONGODB_URI = 'your-mongodb-connection-string'
```

2. (Optional) Seed sample projects into the database:

```powershell
# from project root
node scripts/seed.js
```

3. Run the dev server as normal:

```powershell
npm run dev
```

## Notes

- The API route is `GET /api/projects` (app route at `src/app/api/projects/route.ts`).
- Documents expected shape: `{ title, description, image, techs: ["Next.js","MongoDB"], href }`.
- Do NOT commit your production connection string to the repo.
