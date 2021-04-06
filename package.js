/* eslint-env meteor */
Package.describe({
  name: 'jkuester:autoform-bootstrap4',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap 4 templates for Meteor AutoForm and dynamic imports',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/imajus/autoform-bootstrap4',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.7.0.3')
  api.use('ecmascript')
  api.use('dynamic-import')
  api.use([
    'templating@1.3.2',
    'aldeed:autoform@7.0.0'], 'client')
  api.mainModule('autoform-bootstrap4.js', 'client')
})
