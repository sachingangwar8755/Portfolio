# Sachin Gangwar | Portfolio & Online Resume

A dark, responsive portfolio built with plain HTML, CSS and JavaScript. No frameworks, no build step.

```
portfolio/
├── index.html                  Page structure and text
├── style.css                   Design (colours are variables at the top)
├── script.js                   Animations, skills, projects, form (edit CONFIG at the top)
├── assets/
│   ├── Sachin_Gangwar_Resume.pdf   Resume used by the Download buttons
│   ├── images/                     Put your own images here
│   └── icons/favicon.svg
└── tools/make_resume.py        Regenerates the resume PDF
```

## Run locally
1. Open the `portfolio` folder in **VS Code**.
2. Install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**.
   (Or just double-click `index.html`. It works in any browser.)

## Customise
- **Colours:** edit the variables under `:root` in `style.css`.
- **Add a project:** in `script.js`, copy the object inside `PROJECTS`, change the text, and set `url` to your GitHub repository link. The GitHub button appears only when `url` is filled in. Calculator's `url` is empty right now, so add it once the repository exists.
- **Technical skills:** edit the seven skill cards in the `#skills` section of `index.html` (and the `SKILLS` list in `tools/make_resume.py` for the PDF).
- **Typing words:** edit `TYPED_TITLES` in `script.js`.
- **Resume PDF:** edit the DATA section in `tools/make_resume.py`, then run `pip install reportlab` and `python tools/make_resume.py`.

## Contact form
Without a backend, the form checks the fields and then opens the visitor's email app with the message filled in. To receive messages directly, create a free form at [formspree.io](https://formspree.io) and paste its URL into `FORM_ENDPOINT` in `script.js`.

## Deploy for free

**GitHub Pages**
1. Create a new repository on GitHub, for example `portfolio`.
2. Upload all the files (keep `index.html` in the root).
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, pick `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://sachingangwar8755.github.io/portfolio/`.

**Netlify**
1. Sign in at [netlify.com](https://www.netlify.com).
2. Choose **Add new site → Deploy manually** and drag the `portfolio` folder onto the page.
3. Netlify gives you a live link right away. You can rename it in **Site settings**.

Add the live link to your LinkedIn and GitHub profiles.
