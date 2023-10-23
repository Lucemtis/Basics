MADE by 

```
     ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗    ████████╗███████╗███╗   ███╗██████╗ ██╗      █████╗ ████████╗███████╗███████╗
     ██║██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝    ╚══██╔══╝██╔════╝████╗ ████║██╔══██╗██║     ██╔══██╗╚══██╔══╝██╔════╝██╔════╝
     ██║███████║██║   ██║███████║███████╗██║     ██████╔╝██║██████╔╝   ██║          ██║   █████╗  ██╔████╔██║██████╔╝██║     ███████║   ██║   █████╗  ███████╗
██   ██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║██║     ██╔══██╗██║██╔═══╝    ██║          ██║   ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██╔══██║   ██║   ██╔══╝  ╚════██║
╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║███████║╚██████╗██║  ██║██║██║        ██║          ██║   ███████╗██║ ╚═╝ ██║██║     ███████╗██║  ██║   ██║   ███████╗███████║
 ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝          ╚═╝   ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
                                                                                                                                                              
```
![REACTTSX](https://img.shields.io/badge/REACT-TYPESCRIPT-blue)
![Javascript](https://img.shields.io/badge/JAVASCRIPT-yellow)

# React + TypeScript + Vite + Three.js + sass

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR), some ESLint rules, and integration of Three.js.

Currently, two official plugins are available for React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

## Managing Assets

To include assets such as images, fonts, or 3D files in your project, place them in the `public` folder. You can then reference these files in your code using a URL relative to the `public` folder. For example:

```jsx
<img src="/images/my-image.png" alt="Description" />
```

## Project Commands

- **Installing Dependencies**:
  Since SASS and Three.js are already included in the project configuration, simply run the following command to install all dependencies:
  ```bash
  npm install
  ```

- **Running the Project**:
  To run the project in development mode, use the following command:
  ```bash
  npm run dev
  ```

- **Building the Project**:
  To build the project for production, use:
  ```bash
  npm run build
  ```

- **Using the Vite Server**:
  The Vite server provides a fast development environment with Hot Module Replacement (HMR). When you run the project in development mode using `npm run dev`, Vite will automatically start and serve your project at `http://localhost:3000`.

- **Previewing the Build**:
  To preview the build, use:
  ```bash
  npm run preview
  ```


## Setting the Base URL

In a Vite project, the base URL is set in the `vite.config.ts` file using the `base` option. This is the URL at which your app is hosted. This URL is used by Vite to determine the paths for your built assets.

1. **Rename Configuration File**:
   If your configuration file is named `vite.config.js`, rename it to `vite.config.ts` to use TypeScript.

2. **Update `vite.config.ts`**:
   Update the `vite.config.ts` file in the root of your project with the following content, replacing `"https://toffeeshade.github.io/home/"` with the URL of your site:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://toffeeshade.github.io/home/',
});
```

3. **Update `package.json`**:
   It's a good practice to also update the `homepage` field in the `package.json` file to match the `base` option in the `vite.config.ts` file. This way, other tools and developers will know the intended URL of the hosted app.

```json
{
  "homepage": "https://NAME.github.io/REPO/",
  ...
}
```

Now, when you build your project using `npm run build`, Vite will generate the files with the correct paths based on the `base` option you've set.


## ❓ Support & Questions

For any queries or support needs, please feel free to open an issue or [start a discussion](https://github.com/SECRET-GUEST/jsTemplate/discussions). 
