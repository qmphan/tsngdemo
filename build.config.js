/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'build',
  public_dir: '../public', // specific for Symfony
  compile_dir: 'bin',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],
    
    coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [ 'src/app/**/*.html' ],
    ctpl: [ 'src/common/**/*.html' ],

    html: [ 'src/index.html' ],
    less: ['src/less/bootstrap.less', 'src/less/fonts.less', 'src/less/app.less', 'src/less/flexivr.less']
  },

  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  vendor_files: {
    js: [
      'vendor/jquery/dist/jquery.min.js',
      'vendor/moment/min/moment.min.js',
      'vendor/angular/angular.js',
      'vendor/angular-sanitize/angular-sanitize.min.js',
      'vendor/angular-cookies/angular-cookies.min.js',
      'vendor/angular-resource/angular-resource.min.js',
      'vendor/bootstrap/dist/js/bootstrap.min.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.min.js',
      'vendor/angular-ui-utils/modules/route/route.js',
      'vendor/ngDialog/js/ngDialog.min.js',
      'vendor/ngstorage/ngStorage.min.js',
      'vendor/angular-auto-validate/dist/jcs-auto-validate.min.js',
      'vendor/angular-validation-match/dist/angular-validation-match.min.js',
      'vendor/angular-ui-grid/ui-grid.min.js',
      'vendor/angular-ui-select/dist/select.min.js',
      'vendor/ng-tags-input/ng-tags-input.js',
      'vendor/ng-file-upload/ng-file-upload.js',
      'vendor/angular-confirm-modal/angular-confirm.js',
      'vendor/angular-translate/angular-translate.min.js',
      'vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
      'vendor/angular-translate-storage-local/angular-translate-storage-local.min.js',
      'vendor/oclazyload/dist/ocLazyLoad.min.js',
      'vendor/oclazyload/dist/ocLazyLoad.require.min.js',
      'vendor/angular-animate/angular-animate.min.js',
      'vendor/angular-ui-utils/ui-utils.min.js',
      'vendor/angularjs-toaster/toaster.min.js',
      'vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
      'vendor/angular-xeditable/dist/js/xeditable.min.js',
      'vendor/angular-dialog-service/dist/dialogs.min.js'
    ],
    css: [
      'vendor/bootstrap/dist/css/bootstrap.min.css',
      'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css',
      'vendor/ngDialog/css/ngDialog.css',
      'vendor/ngDialog/css/ngDialog-theme-default.css',
      'vendor/angular-ui-grid/ui-grid.min.css',
      'vendor/angular-ui-grid/ui-grid.bootstrap.css',
      'vendor/angular-ui-select/dist/select.min.css',
      'vendor/angularjs-toaster/toaster.min.css',
      'vendor/angular-xeditable/dist/css/xeditable.css'
    ],
    fonts: [
        'vendor/font-awesome/fonts/*',
        'vendor/bootstrap/dist/fonts/*'
    ],
    assets: [
        'vendor/angular-ui-grid/ui-grid.woff'
    ]
  }
};
