// Configuration
const CONFIG = {
    scrollOffset: 100,
    activeClass: 'active',
    mobileBreakpoint: 768
};

// DOM Elements
const elements = {
    toc: document.getElementById('toc'),
    content: document.getElementById('markdown-content'),
    navToggle: document.getElementById('navToggle'),
    navContent: document.getElementById('navContent')
};

// State
let headings = [];
let isLoading = true;

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    loadMarkdown();
    setupEventListeners();
    setupMarked();
}

function setupMarked() {
    marked.setOptions({
        highlight: function (code, lang) {
            if (Prism.languages[lang]) {
                return Prism.highlight(code, Prism.languages[lang], lang);
            }
            return code;
        },
        breaks: true,
        gfm: true
    });
}

function setupEventListeners() {
    // Mobile navigation toggle
    elements.navToggle?.addEventListener('click', toggleMobileNav);

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= CONFIG.mobileBreakpoint) {
            const sidebar = document.querySelector('.sidebar');
            if (!sidebar.contains(e.target) && !elements.navToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', handleResize);

    // Handle scroll for active navigation
    window.addEventListener('scroll', debounce(updateActiveNav, 100));
}

async function loadMarkdown() {
    try {
        showLoading();
        const response = await fetch('main.md');
        const markdown = await response.text();
        renderMarkdown(markdown);
        generateTableOfContents(markdown);
        hideLoading();
    } catch (error) {
        console.error('Error loading markdown:', error);
        elements.content.innerHTML = '<p class="error">Error loading documentation. Please try refreshing the page.</p>';
    }
}

function showLoading() {
    elements.content.innerHTML = '<div class="loading"></div>';
}

function hideLoading() {
    elements.content.innerHTML = '';
}

function renderMarkdown(markdown) {
    const html = marked.parse(markdown);
    elements.content.innerHTML = html;

    // Add smooth scrolling to anchor links
    addSmoothScrolling();

    // Add copy buttons to code blocks
    addCopyButtons();
}

function generateTableOfContents(markdown) {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const matches = [...markdown.matchAll(headingRegex)];

    headings = matches.map((match, index) => ({
        level: match[1].length,
        text: match[2].trim(),
        id: `heading-${index}`,
        element: null
    }));

    // Create TOC HTML
    const tocHtml = createTOCHTML(headings);
    elements.toc.innerHTML = tocHtml;

    // Update heading IDs in content
    updateHeadingIDs();
}

function createTOCHTML(headings) {
    let html = '';
    let currentLevel = 0;
    let openLists = [];

    headings.forEach((heading, index) => {
        const level = heading.level;

        if (level > currentLevel) {
            for (let i = currentLevel; i < level; i++) {
                if (i === 0) {
                    html += '<ul>';
                } else {
                    html += '<ul>';
                }
                openLists.push('ul');
            }
        } else if (level < currentLevel) {
            for (let i = currentLevel; i > level; i--) {
                html += '</ul>';
                openLists.pop();
            }
        }

        html += `<li><a href="#${heading.id}" data-level="${level}">${heading.text}</a></li>`;
        currentLevel = level;
    });

    // Close any remaining lists
    while (openLists.length > 0) {
        html += '</ul>';
        openLists.pop();
    }

    return html;
}

function updateHeadingIDs() {
    const contentHeadings = elements.content.querySelectorAll('h1, h2, h3, h4, h5, h6');

    contentHeadings.forEach((element, index) => {
        if (headings[index]) {
            element.id = headings[index].id;
            headings[index].element = element;
        }
    });
}

function addSmoothScrolling() {
    const links = elements.toc.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - CONFIG.scrollOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile nav
                if (window.innerWidth <= CONFIG.mobileBreakpoint) {
                    document.querySelector('.sidebar').classList.remove('active');
                }
            }
        });
    });
}

function addCopyButtons() {
    const codeBlocks = elements.content.querySelectorAll('pre code');

    codeBlocks.forEach((block) => {
        const pre = block.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.title = 'Copy code';

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        });

        pre.style.position = 'relative';
        pre.appendChild(button);
    });
}

function updateActiveNav() {
    const scrollPosition = window.scrollY + CONFIG.scrollOffset + 50;

    let activeHeading = null;
    for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading.element && heading.element.offsetTop <= scrollPosition) {
            activeHeading = heading;
            break;
        }
    }

    // Update active state in TOC
    const tocLinks = elements.toc.querySelectorAll('a');
    tocLinks.forEach(link => link.classList.remove(CONFIG.activeClass));

    if (activeHeading) {
        const activeLink = elements.toc.querySelector(`a[href="#${activeHeading.id}"]`);
        if (activeLink) {
            activeLink.classList.add(CONFIG.activeClass);

            // Ensure active link is visible
            const navContent = elements.navContent;
            const linkTop = activeLink.offsetTop;
            const linkHeight = activeLink.offsetHeight;
            const navHeight = navContent.offsetHeight;
            const scrollTop = navContent.scrollTop;

            if (linkTop < scrollTop) {
                navContent.scrollTop = linkTop - 20;
            } else if (linkTop + linkHeight > scrollTop + navHeight) {
                navContent.scrollTop = linkTop + linkHeight - navHeight + 20;
            }
        }
    }
}

function toggleMobileNav() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > CONFIG.mobileBreakpoint) {
        sidebar.classList.remove('active');
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add custom styles for copy buttons
const style = document.createElement('style');
style.textContent = `
    .copy-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: #e2e8f0;
        padding: 0.5rem;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }
    
    .copy-button:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .copy-button i {
        font-size: 0.875rem;
    }
`;
document.head.appendChild(style);

// Handle anchor links in content
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - CONFIG.scrollOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});
