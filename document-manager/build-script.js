const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/document-manager/runtime.js',
        './dist/document-manager/polyfills.js',
        './dist/document-manager/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/document-manager.js')
    console.info('Angular Elements created successfully!')

})();