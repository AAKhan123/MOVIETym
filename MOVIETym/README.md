
# MOVIETym - Movie Discovery Web Application

MOVIETym is a responsive web application built with React and Vite, leveraging the TMDb (The Movie Database) API to provide a seamless movie discovery experience. Users can browse popular and top-rated movies, search by title, filter by genre, view detailed movie information, manage a favorites list, and enjoy a consistent footer with social media links.

## Features

- Movie Browsing: Explore popular and top-rated movies in a responsive grid layout.
- Search: Real-time movie search by title.
- Genre Filtering:Filter movies by genre using a dropdown menu.
- Movie Details: View in-depth movie information, including cast, rating, and overview.
- Favorites Management: Add/remove movies to/from a favorites list stored in local storage.
- Footer: Social media links and app download QR code placeholder.
- Responsive Design:Optimized for desktop and mobile devices.
- Error Handling: User-friendly messages for API failures or missing data.

## Live Demo

Check out the live deployment: [MOVIETym Live](https://your-vercel-deployment-link.vercel.app) <!-- Replace with your Vercel or other deployment link -->

## GitHub Repository

Source code is available at: [MOVIETym GitHub Repository](https://github.com/your-username/movietym) <!-- Replace with your GitHub repository URL -->

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- A TMDb API key (sign up at [The Movie Database](https://www.themoviedb.org/) to get one)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/movietym.git
   cd movietym
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add your TMDb API key:
     ```
     VITE_API_KEY=dc86f2176e49cb70b3579a5ab3f07aa1
     ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   The app will start on `http://localhost:5173`.

## Testing

- **Manual Testing:** Test the app across browsers (Chrome, Firefox, Edge, Safari) and devices to ensure responsiveness and compatibility.
- **API Error Testing:** Use an invalid API key or disconnect the internet to verify error handling.

No automated tests are currently implemented. To add testing, consider using Jest or Cypress:

```bash
npm install --save-dev jest
```

## Project Structure

```
MOVIETym/
├── public/
│   └── vite.svg              # Default Vite asset (optional)
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx     # Movie card for grid display
│   │   ├── MovieList.jsx     # Grid layout for movies
│   │   ├── Filters.jsx       # Genre filter dropdown
│   │   ├── SearchBar.jsx     # Search input field
│   │   └── Footer.jsx        # Footer with social links and app QR code
│   ├── pages/
│   │   ├── Home.jsx          # Main movie listing page
│   │   ├── MovieDetails.jsx  # Movie details page
│   │   └── Favorites.jsx     # Favorites management page
│   ├── api.js                # API utility functions for TMDb
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Entry point for the app
│   └── styles.css            # Global styles
├── .env                      # Environment variables (API key)
├── .gitignore                # Git ignore file
├── package.json              # Project dependencies and scripts
└── vite.config.js            # Vite configuration
```

## Dependencies

- **React**: Core library for building the UI.
- **React Router DOM**: Handles client-side routing.
- **Axios**: Makes HTTP requests to the TMDb API.
- **React Icons**: Provides social media icons for the footer.
- **Vite**: Fast build tool and development server.

See `package.json` for the full list.

## Deployment

The app can be deployed using [Vercel](https://vercel.com/):

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from the project root:
   ```bash
   vercel
   ```

3. Follow the prompts to link your GitHub repository and set the `VITE_API_KEY` environment variable.

## Code Quality

- **Organization:** Components and pages are separated for modularity and reusability.
- **Readability:** Clear variable names, consistent formatting, and comments for complex logic.
- **Version Control:** Use descriptive commits (e.g., "feat: add footer component", "fix: favorites sync issue").

## Accessibility

- Images include `alt` attributes for screen readers.
- Buttons and links are keyboard-focusable.
- Semantic HTML is used where possible.

## Known Issues

- **Trailer Button:** Placeholder in `MovieCard`—not yet functional.
- **Pagination:** Only the first page of movie results is fetched.
- **Cast Data:** Limited to 5 actors in `MovieDetails`.

## Future Enhancements

- Implement trailer playback in `MovieCard`.
- Add pagination or infinite scrolling for movie lists.
- Support user authentication for cloud-based favorites.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your message"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

© 2025 MOVIETym, Inc. All rights reserved.

---

