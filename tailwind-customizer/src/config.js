const getCSSVarValue = (name) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
};

const app_config = {
  generateConfig: () => {
    return `/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
    extend: {
        colors: {
        indigo: {
            '500': '${getCSSVarValue('--accent-indigo')}',
        },
        },
    },
    },
    plugins: [],
}
`;
  }
};

export default app_config;
