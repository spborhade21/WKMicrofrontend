const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
         './dist/login-manager/runtime.js',
         './dist/login-manager/polyfills.js',
        './dist/login-manager/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/login-manager.js')
    console.info('Angular Elements created successfully!')

})();