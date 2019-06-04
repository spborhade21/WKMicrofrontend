const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/client-manager/runtime.js',
        './dist/client-manager/polyfills.js',
        './dist/client-manager/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/client-manager.js')
    console.info('Angular Elements created successfully!')

})();