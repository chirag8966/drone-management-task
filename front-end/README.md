# FlytBase Drone Management Platform

A comprehensive web-based solution designed to manage drone fleets, schedule missions, track on-field operations, and provide real-time analytics. This application serves as a central command platform for drone operators, fleet managers, and business stakeholders.

![FlytBase Logo](https://app.flytbase.com/assets/img/flytbase1.png)

## 🚀 Live Deployments

- **Primary Deployment (Netlify):** [flytbase-cj.netlify.app](https://flytbase-cj.netlify.app)
- **Demo Deployment (Custom Domain):** [flytbase.chiragjain.pro](https://flytbase.chiragjain.pro) *(Note: Some CloudFront issues may affect this deployment)*

## 🛠️ Technologies Used

### Frontend Framework
- Angular 19 (with standalone components)
- TypeScript
- RxJS for reactive programming
- NGRX for state management

### UI Components
- PrimeNG v19 component library
- Tailwind CSS for utility-first styling
- Responsive design system

### Maps & Charts
- Google Maps API integration
- Dynamic charts with Chart.js
- Syncfusion Scheduler

### Build & Deployment
- Angular CLI (&#64;angular/cli)
- Automated deployment via Netlify
- Modular architecture with lazy loading

## ✨ Key Features

- **Responsive Design**: Fully responsive layout that adapts to desktop, tablet, and mobile devices for field operations
- **Theme Customization**: Dynamic theme switching with light/dark mode and color palette customization
- **Interactive Dashboards**: Real-time statistics and interactive charts for drone fleet monitoring
- **Google Maps Integration**: Geographic tracking and mission planning with Google Maps API
- **Advanced Scheduling**: Touch-friendly calendar interface for mission scheduling and management
- **Optimized Performance**: Lazy-loaded modules for faster initial loading and improved performance
- **Automated Deployment**: Continuous integration and deployment pipeline for seamless updates
- **Role-Based Access**: User management with role-based permissions for different stakeholders
- **Touch Optimized**: Touch-friendly interface elements for tablet and mobile field operations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+) and npm (v8+)
- Angular CLI (&#64;angular/cli)
- Git

### Installation

1. Install Angular CLI globally (if not already installed):
```bash
npm install -g @angular/cli
```

2. Clone the repository:
```bash
git clone https://github.com/flytbase/flytbase-drone.git
cd flytbase-drone/front-end
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
ng serve
```

5. Open your browser and navigate to: `http://localhost:4200`

## 📁 Project Structure

Understanding the folder structure helps navigate and maintain the application effectively:

```
front-end/
├── src/
│   ├── app/
│   │   ├── layout/            # All layout components (main shell, navigation, etc.)
│   │   ├── pages/             # Feature modules by functionality (dashboard, planning, etc.)
│   │   ├── service/           # Shared services (data access, authentication, etc.)
│   │   └── app.component.*    # Root component files
│   ├── assets/                # Static assets (images, icons, theme configs)
│   ├── environments/          # Environment configuration
│   └── theme/                 # Theme configuration files
└── ...
```

### Key Directories
- **src/app/layout**: Contains all layout-related components, including main shell, navigation, sidebar, and theme settings
- **src/app/pages**: Feature modules organized by functionality (dashboard, planning, management, etc.)
- **src/app/service**: Shared services for data access, authentication, and utilities
- **src/assets**: Static assets including images, icons, and theme configurations

## ⚙️ Configuration

### Theme Customization
The application supports dynamic theme switching, including light and dark modes as well as multiple color schemes. Theme configurations are managed through the theme files in the `src/theme` directory.

### Menu Configuration
The application menu structure can be customized in `src/app/layout/component/app-menu/app.menu.component.ts`.

## 📚 Development Commands

- **Start dev server**: `ng serve`
- **Build for production**: `ng build --prod`
- **Run tests**: `ng test`
- **Lint code**: `ng lint`

## 📧 Support & Resources

For additional support or inquiries, contact the development team:
- Email: [chirag8966@gmail.com](mailto:chirag8966@gmail.com)

### Useful Links
- [PrimeNG](https://primeng.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Angular](https://angular.io)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
