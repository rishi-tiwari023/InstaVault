# InstaVault

A modern React-based web app to manage and keep track of Instagram accounts you want to block or avoid. Easily add, view, and remove blocked users with profile info fetched automatically.

## Features

- Add Instagram users to your personal block list by profile URL
- Automatically fetches and displays the user's name and profile picture
- See a list of all blocked users with their profile, name, and link
- Remove users from your block list with one click
- Shows the total count of blocked users
- Prevents duplicate entries and invalid users
- Supports dark and light modes
- All data is stored locally in your browser (private to you)
- Responsive and modern UI

## Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** CSS Variables, Inline Styles
- **State Management:** React Hooks
- **Routing:** React Router DOM

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate to the frontend directory:
   ```sh
   git clone https://github.com/rishi-tiwari023/InstaVault.git
   cd InstaVault/instagram-related
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser at the local address shown in the terminal (usually http://localhost:5173).

## Project Structure

```
instagram-related/
├── public/                # Static assets
├── src/
│   ├── components/        # Navbar, Footer, etc.
│   ├── pages/             # AddNew, Blocked, Home
│   ├── App.jsx            # Main app component
│   ├── index.js           # Entry point
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## Deployment

- You can deploy this app to Render, Vercel, Netlify, or any static hosting provider.
- For full functionality, you need to deploy the backend (`insta-proxy`) as well and update the fetch URL in `AddNew.jsx` to point to your backend's deployed URL.

## Author

Made with ♥ by [Rishi Tiwari](https://github.com/rishi-tiwari023)  
[LinkedIn](https://www.linkedin.com/in/rishi-tiwari023/)

---

**Note:** This project is for educational/personal use. It is not affiliated with or endorsed by Instagram.
