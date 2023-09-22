<p style="text-align: center">
  <h2 align="center">Password component</h2>
</p>

### 📚 Appendix

- [💬 Description](#-description)
- [📦 Previous requirements](#-previous-requirements)
- [☕️ Clone project](#-clone-project)
- [🖥️ Deployment](#-generate-web-deployment)

---

### 💬 Description

Password component is a component to validate passwords in a flexible way.

---

### 📦 Previous requirements

- Install the latest LTS Nodejs at [NodeJS.org](https://nodejs.org/es/).

Check node and npm versions:

```bash
  node --version
```

> v18.17.1

```bash
  npm --version
```

> 9.6.7

---

### ☕️ Clone Project

```bash
  git clone git@github.com:kioshiokamoto/password-component.git
```

Go to the project directory

```bash
  cd password-component
```

Install dependencies

```bash
  npm install
```

You can run the storybook playground
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

```bash
  npm run storybook
```

Runs the web in development mode
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

```bash
  npm run dev
```

---

### 🖥️ Deployment

Update home page:

```bash
  "homepage":"https://github.com/kioshiokamoto/password-component"
```

To prepare deploy:

```bash
  npm run predeploy
```

Run this command to deploy to production:

```bash
  npm run deploy-storybook
```
