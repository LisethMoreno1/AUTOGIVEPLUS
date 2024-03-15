const { defineConfig } = require("cypress");


module.exports = defineConfig({

projectId: 'mqw38b',
    e2e: {
        setupNodeEvents(on, config) {
            return config;
        }
    }
});

