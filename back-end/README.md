# FlytBase Drone Management Platform - Backend

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

<p align="center">A robust backend API for managing drone fleets, scheduling missions, and real-time analytics.</p>

## 🚀 Technology Stack

- **Framework**: [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript that compiles to plain JavaScript
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [TypeORM](https://typeorm.io/) - Object-Relational Mapping for database interactions
- **API Documentation**: [Swagger/OpenAPI](https://swagger.io/) - Automated API documentation
- **Validation**: [class-validator](https://github.com/typestack/class-validator) - Decorator-based property validation
- **Configuration**: [NestJS Config](https://docs.nestjs.com/techniques/configuration) - Environment-based configuration

## ✨ Key Features

- **RESTful API Architecture**: Clean, consistent API endpoints following REST best practices
- **Entity Relationship Model**: Well-designed data models with proper relationships
- **Data Transfer Objects (DTOs)**: Type-safe data validation for API requests
- **Global API Prefix**: All routes are prefixed with `/api` for consistency
- **CORS Configuration**: Cross-Origin Resource Sharing enabled for frontend integration
- **Environment Configuration**: Flexible configuration system using environment variables
- **PostgreSQL Integration**: Robust relational database for data persistence
- **Type Safety**: End-to-end type safety with TypeScript and TypeORM

## 📁 Project Structure

```
src/
├── app.controller.ts        # Root controller for health checks
├── app.module.ts            # Main application module
├── app.service.ts           # Root service
├── main.ts                  # Application entry point
│
├── drones/                  # Drones module
│   ├── dto/                 # Data Transfer Objects
│   │   ├── create-drone.dto.ts
│   │   └── update-drone.dto.ts
│   ├── entities/
│   │   └── drone.entity.ts  # Drone database entity
│   ├── drones.controller.ts # Controller for drone endpoints
│   ├── drones.module.ts     # Module definition
│   └── drones.service.ts    # Business logic for drones
│
├── stats/                   # Stats module
│   ├── dto/                 # Data Transfer Objects
│   │   ├── create-stat.dto.ts
│   │   └── update-stat.dto.ts
│   ├── entities/
│   │   └── stat.entity.ts   # Stats database entity
│   ├── stats.controller.ts  # Controller for stats endpoints
│   ├── stats.module.ts      # Module definition
│   └── stats.service.ts     # Business logic for stats
```

## 🔍 API Endpoints

### Drones

- `GET /api/drones` - Get all drones
- `GET /api/drones/:id` - Get a specific drone by ID
- `POST /api/drones` - Create a new drone
- `PATCH /api/drones/:id` - Update a drone
- `DELETE /api/drones/:id` - Delete a drone

### Stats

- `GET /api/stats` - Get all statistics
- `GET /api/stats/:id` - Get a specific statistic by ID
- `POST /api/stats` - Create a new statistic
- `PATCH /api/stats/:id` - Update a statistic
- `DELETE /api/stats/:id` - Delete a statistic

## 💾 Database Models

### Drone Entity

```typescript
@Entity({name: 'drones'})
export class Drone {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true, nullable: false, type: 'varchar'})
    serialNumber: string;

    @Column({type: 'int'})
    battery: number;

    @Column({type: 'varchar'})
    status: 'working' | 'under maintenance' | 'out of service';
}
```

### Stat Entity

Statistics tracked for dashboard visualization and monitoring.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v8+)
- PostgreSQL instance

### Installation

```bash
# Install dependencies
$ npm install

# Set up environment variables
$ cp .env.example .env
# Edit .env with your database credentials
```

### Running the Application

```bash
# Development mode
$ npm run start:dev

# Production mode
$ npm run build
$ npm run start:prod
```

## ⚡ Performance Optimizations

- **Database Indexing**: Strategic indexes on frequently queried columns
- **Query Optimization**: Efficient database queries with proper relations
- **DTOs and Validation**: Request validation at the API boundary
- **TypeORM Repository Pattern**: Clean, modular data access

## 🔒 Security Features

- **Input Validation**: All user inputs are validated using class-validator
- **Environment Variables**: Sensitive information stored in environment variables
- **TypeORM Parameters**: Using parameterized queries to prevent SQL injection
- **CORS Configuration**: Properly configured Cross-Origin Resource Sharing

## 🧪 Testing

```bash
# Unit tests
$ npm run test

# E2E tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

## 📈 Future Enhancements

- WebSocket integration for real-time updates
- User authentication and authorization
- Comprehensive logging system
- CI/CD pipeline configuration
- Containerization with Docker

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For questions or feedback, please contact:
- **Developer**: Chirag Jain
- **Email**: chirag8966@gmail.com

---

Built with ❤️ using NestJS
