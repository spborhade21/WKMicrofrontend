const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
         './dist/tax-manager/runtime.js',
         './dist/tax-manager/polyfills.js',
        './dist/tax-manager/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/tax-manager.js')
    console.info('Angular Elements created successfully!')

})();