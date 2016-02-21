System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "angular": "jspm_packages/github/angular/bower-angular@1.5.0",
    "angular-animate": "jspm_packages/github/angular/bower-angular-animate@1.5.0",
    "angular-aria": "jspm_packages/github/angular/bower-angular-aria@1.5.0",
    "angular-material": "jspm_packages/github/angular/bower-material@1.0.5",
    "css": "github:systemjs/plugin-css@0.1.20",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "github:angular/bower-angular-animate@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-aria@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-material@1.0.5": {
      "angular": "github:angular/bower-angular@1.5.0",
      "angular-animate": "github:angular/bower-angular-animate@1.5.0",
      "angular-aria": "github:angular/bower-angular-aria@1.5.0",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});
