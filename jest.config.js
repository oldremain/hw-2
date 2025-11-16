export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Подмена CSS-модулей на identity-obj-proxy
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
};
