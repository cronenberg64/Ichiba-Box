# Ichiba Box （市場ボックス） - Unified Local Business Platform

MyShouten is a comprehensive platform designed to connect local businesses with customers in Japan, providing a unified solution for digital storefronts, customer engagement, and business analytics.

## Features

### For Customers
- Browse nearby local businesses
- Access digital coupons and promotions
- QR code check-in system
- Save favorite shops
- Location-aware search
- Real-time notifications

### For Business Owners
- Digital storefront creation
- Image and content management
- Promotion and event management
- Analytics dashboard
- Customer insights
- Real-time metrics

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.x
- PostgreSQL
- Redis (caching)
- JWT Authentication
- AWS S3/Firebase Storage
- Kafka/Prometheus (optional)

### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Google Maps API

### Infrastructure
- Docker
- Vercel (Frontend hosting)
- Render/Railway/Fly.io (Backend hosting)

## Project Structure
```
myshouten/
├── backend/           # Spring Boot application
├── frontend/         # Next.js application
├── docker/           # Docker configuration
└── docs/            # Documentation
```

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- Docker and Docker Compose
- PostgreSQL
- Redis

### Development Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/myshouten.git
cd myshouten
```

2. Backend Setup
```bash
cd backend
./mvnw spring-boot:run
```

3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

4. Docker Setup
```bash
docker-compose up -d
```

## API Documentation

API documentation is available at `/api-docs` when running the backend server.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
