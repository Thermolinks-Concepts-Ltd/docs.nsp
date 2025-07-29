# Nigeria Startup Portal (NSP) Documentation

This repository contains the complete user guide for the Nigeria Startup Portal (NSP) ecosystem, deployed as a static site on GitHub Pages.

## 🚀 Live Documentation
Visit the live documentation at: [https://thermolinks-concepts-ltd.github.io/docs.nsp](https://thermolinks-concepts-ltd.github.io/docs.nsp)

## 📋 About
This documentation covers the complete NSP ecosystem consisting of:
- **nsp-admin**: Admin Dashboard
- **nsp-api**: Backend API Services
- **NSP**: User-Facing Portal (Missing/Incomplete)

## 🛠️ Local Development

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Running Locally

#### Option 1: Simple HTTP Server (Python)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

#### Option 3: VS Code Live Server
Install the "Live Server" extension in VS Code and right-click on `index.html` → "Open with Live Server"

### Access
Open your browser and navigate to `http://localhost:8000`

## 📁 File Structure
```
docs.nsp/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── main.md             # Source markdown content
├── _config.yml         # Jekyll configuration
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow
└── README.md           # This file
```

## 🔄 Deployment

### Automatic Deployment
The site is automatically deployed to GitHub Pages when:
- Changes are pushed to the `main` branch
- Pull requests are merged into `main`

### Manual Deployment
If you need to trigger a manual deployment:
1. Go to the repository's Actions tab
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## ✏️ Updating Content

### To update the documentation:
1. Edit the `main.md` file
2. Commit and push changes to the `main` branch
3. GitHub Actions will automatically deploy the updated content

### Content Guidelines
- Use proper Markdown syntax
- Include relevant code blocks with language specification
- Use headings (H1-H6) for structure
- Add links and references as needed

## 🎨 Customization

### Styling
- Modify `styles.css` to change colors, fonts, and layout
- The CSS uses CSS custom properties (variables) for easy theming

### Navigation
- The table of contents is automatically generated from headings
- Navigation links are created from H1-H6 elements

### Features
- Responsive design for mobile devices
- Syntax highlighting for code blocks
- Copy-to-clipboard functionality for code
- Smooth scrolling navigation
- Active section highlighting

## 🔧 Troubleshooting

### Common Issues

**Site not updating after push**
- Wait a few minutes for GitHub Pages to build
- Check the Actions tab for build errors
- Ensure the workflow file is correctly configured

**Local development issues**
- Use a local HTTP server instead of opening files directly
- Check browser console for JavaScript errors
- Ensure all files are in the correct directory

**Markdown not rendering**
- Check for proper Markdown syntax
- Ensure `main.md` is accessible via HTTP
- Verify the marked.js library is loading correctly

## 📞 Support

For issues related to:
- **Documentation content**: Create an issue in this repository
- **NSP Platform**: Contact the NSP Development Team
- **Technical support**: Check the troubleshooting section above

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This documentation is part of the Nigeria Startup Portal ecosystem and is maintained by Thermolinks Concepts Ltd.
