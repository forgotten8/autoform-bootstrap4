# Autoform Bootstrap 4

Dynamic imported Bootstrap 4 theme for [aldeed:autoform](https://github.com/aldeed/meteor-autoform).

## Installation and usage

If you haven't installed [Bootstrap 4](http://getbootstrap.com/) yet, you need to install it and it's peer dependencies using NPM. Then add this package and [fontawesome](https://atmospherejs.com/fortawesome/fontawesome) to your Meteor packages. Note, that Meteor's default builtin jquery is not sufficient, which is why you need to add it here, too.

```
meteor npm install --save bootstrap popper.js jquery
meteor add jkuester:autoform-bootstrap4
```

Note: this package supports font awesome 5 (currently limited to fa-solid free) but you need to install it manually.
Next, make sure to import Bootstrap properly, for example in `client/main.js`:

```javascript
import 'bootstrap'
import popper from 'popper.js'
global.Popper = popper
```

The templates are imported using `dynamic-import` like the following:

```javascript
import  { AutoFormBootstrap4 } from 'meteor/jkuester:autoform-bootstrap4'

AutoFormBootstrap4.load()
  .then(() => ...)
  .catch(e => console.error(e))
```

If you want to use this theme for a specific Template, you need to add the `template="bootstrap4"` property to your `autoForm` or `quickForm` code.
If you want to set this theme for all (auto)forms place the following code for example in `client/main.js`:

```javascript
import  { AutoFormBootstrap4 } from 'meteor/jkuester:autoform-bootstrap4'

AutoForm.setDefaultTemplate(AutoFormBootstrap4.template)
```
