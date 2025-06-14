
## 🚗 Car Rental Web App

A simple and modern car rental app built with **Next.js**. Users can explore available cars, view details, and book directly online. Admins can log in to manage listings and view bookings through a secure dashboard.

### 🔍 About the Project

This project uses:

* **NextAuth** with JWT for secure user authentication and API route protection
* **UploadThing** for handling image uploads (e.g., car photos)
* **Turso** (SQLite-based) for the database
* **Tailwind CSS** + **ShadCN** for responsive, beautiful UI components
* **React Swiper** for a sleek landing page slider
* **React Query** for data fetching and mutations
* **React Hook Form** with **Zod** for form validation

#### 🔧 Features

* 🌍 Landing page with a responsive image swiper
* 🧭 Mobile-friendly navbar
* 🚘 Car list and detail pages
* 📅 Booking system with date selection
* 🔐 Dashboard for adding cars and viewing bookings (admin only)
* 📤 Image uploads for car entries
* 🧾 Simple admin login with environment-based credentials
* ✅ Comprehensive test coverage for critical flows

---

## ⚙️ Getting Started (Local Setup)

Here's how to run the project locally:

### 1. Clone the project

```bash
git clone https://github.com/51L3N7-X/car-rental.git
cd car-rental
```

### 2. Install dependencies

Use npm or pnpm:
```bash
npm ci
#or
pnpm install
```

### 3. Set up environment variables

Create a `.env` file based on `.env.example` and fill in your credentials:

```env
TURSO_DATABASE_URL=
TURSAUTH_TOKEN=
AUTH_SECRET=
NEXTAUTH_SECRET=
UPLOADTHING_TOKEN=
ADMIN_USERNAME=
ADMIN_PASSWORD=
```

> You can get TURSO credentials from [https://turso.tech](https://turso.tech)

### 4. Run the app locally

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker (Optional)

If you want to run it in Docker:

```bash
docker build -t car-rental-app .
docker run -p 3000:3000 --env-file .env car-rental-app
```

---

## 🧪 Testing

The project includes Jest and React Testing Library for comprehensive testing:

### Running Tests

```bash
npm test
# or for watch mode
npm test -- --watch
```

### Test Coverage

```bash
npm test -- --coverage
```

### Key Test Cases

1. **Booking Form Validation**
   - Empty field validations
   - Date range validation
   - Successful submission flow

### Testing Stack

- **Jest** - Test runner
- **React Testing Library** - Component testing
- **MSW** - API mocking (optional)
- **next-router-mock** - Router simulation

---

## 🛠️ Tech Stack

| Category       | Technology                  |
|----------------|-----------------------------|
| Framework      | Next.js 14 (App Router)     |
| Styling        | Tailwind CSS + ShadCN       |
| Database       | Turso (SQLite)              |
| ORM            | Drizzle                     |
| Authentication | NextAuth.js                 |
| Testing        | Jest + React Testing Library|
| Form Handling  | React Hook Form + Zod       |
| State          | React Query                 |