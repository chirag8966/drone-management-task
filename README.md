# FlytBase Drone Management Platform

<p align="center">
  <img src="https://app.flytbase.com/assets/img/flytbase1.png" width="200" alt="FlytBase Logo" />
</p>

A comprehensive platform for drone fleet management, mission planning, and real-time analytics with a modern Angular frontend and robust NestJS backend.

## 🌐 Live Deployments

- **Production:** [flytbase-cj.netlify.app](https://flytbase-cj.netlify.app)
- **Custom Domain:** [flytbase.chiragjain.pro](https://flytbase.chiragjain.pro)

## 📋 Project Overview

This project provides a complete drone management solution:

- Real-time drone fleet monitoring and status tracking
- Mission planning with geospatial visualization
- Scheduling and assignment of missions to specific drones
- Analytics dashboard with key performance indicators
- Mobile-responsive design for field operations

## 🏗️ System Architecture

### Frontend (Angular)
- **Framework:** Angular 19 with standalone components
- **UI Components:** PrimeNG v19 + Tailwind CSS
- **State Management:** NGRX
- **Maps Integration:** Google Maps API
- **Charts:** Chart.js for visualizations
- **Scheduling:** Syncfusion Scheduler

### Backend (NestJS)
- **Framework:** NestJS with TypeScript
- **Database:** PostgreSQL with TypeORM
- **API:** RESTful endpoints with global `/api` prefix
- **Validation:** class-validator for DTO validation
- **Config:** Environment-based configuration system

## 🔄 Design Thinking

Our platform follows a comprehensive workflow for drone mission management:

```
Mission Planning → Fleet Management → Mission Execution → Monitoring → Reporting
```

This workflow covers the complete lifecycle of drone operations:

1. **Mission Planning:** Define survey areas and configure flight parameters
2. **Fleet Management:** Check drone availability and assign to missions
3. **Mission Execution:** Deploy drones with real-time monitoring
4. **Data Collection:** Gather mission data for processing
5. **Reporting:** Generate analytics and insights

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+) and npm (v8+)
- PostgreSQL database
- Angular CLI

### Frontend Setup
```bash
cd front-end
npm install
npm start
```
The application will be available at http://localhost:3000

### Backend Setup
```bash
cd back-end
npm install
# Set up your PostgreSQL credentials in .env
npm run start:dev
```
The API will be available at http://localhost:3000/api

## 📚 Project Structure

```
flytBase-drone/
├── front-end/            # Angular application
│   ├── src/
│   │   ├── app/          # Application components and logic
│   │   ├── assets/       # Static assets
│   │   └── environments/ # Environment configurations
└── back-end/             # NestJS application
    ├── src/
    │   ├── drones/       # Drones module (CRUD, entities)
    │   ├── stats/        # Stats module (CRUD, entities)
    │   └── main.ts       # Application entry point
```

## 👤 Contact

- **Developer:** Chirag Jain
- **Email:** chirag8966@gmail.com

---

Built with ❤️ using Angular and NestJS
