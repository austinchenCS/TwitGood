(function () {

  var config = {
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'app',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'ng2-charts': 'npm:ng2-charts',
      'ng2-loading-animate':'npm:ng2-loading-animate'
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'ng2-charts': {
        main: "ng2-charts.js",
        defaultExtension: 'js'
      },
      'ng2-loading-animate': {
        main: "ng2-loading-animate.js",
        defaultExtension: 'js'
      },
    }
  };

  // Load config, import dependencies
  System.config(config);
  System.import('app').catch(function(err){ console.error(err); });

})();