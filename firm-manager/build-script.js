const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        
        './dist/firm-manager/runtime.js',
        './dist/firm-manager/polyfills.js',
        './dist/firm-manager/scripts.js',
        './dist/firm-manager/vendor.js',
        './dist/firm-manager/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/firm-manager.js')
    console.info('Angular Elements created successfully!')

})();