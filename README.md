# KasiSpaza

Offline-first retail management platform for township spaza shops.

## Project status
This workspace is currently a clean foundation for the project. It does not contain an old prototype or a partially built application yet.

## Recommended structure

KasiSpaza/
├── README.md
├── .gitignore
├── KasiSpaza.sln
├── src/
│   └── KasiSpaza.Api/
│       ├── Controllers/
│       ├── Program.cs
│       └── KasiSpaza.Api.csproj
├── apps/
│   └── KasiSpazaMobile/
│       ├── App.tsx
│       ├── package.json
│       └── ...
└── docs/ (optional future documentation)

## Architecture

React Native Mobile App
↓
REST API / HTTPS
↓
ASP.NET Core Web API
↓
Entity Framework Core
↓
PostgreSQL

The mobile app will later use SQLite for offline-first storage and a local sync queue before sending data to the API.

## Current foundation
- ASP.NET Core Web API project created in src/KasiSpaza.Api
- Expo React Native app created in apps/KasiSpazaMobile
- Solution file created at the repo root

## Phase plan
We are following the phased approach described in the project brief and will proceed step by step.

## Run the projects
### Backend
cd src/KasiSpaza.Api
 dotnet restore
 dotnet run

### Mobile app
cd apps/KasiSpazaMobile
 npm install
 npx expo start

The backend and mobile app are intentionally separated so they can be developed and run independently.
