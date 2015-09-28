### Overview

* [Jade](http://jade-lang.com/) for HTML templating
* [Sass](http://sass-lang.com/) for CSS pre-processing
* [Grunt](http://gruntjs.com/) for task running

### Setup

**Requirements:**

* [node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

**Initalise:**

1. `npm install`
2. `grunt`

### Build

`grunt build`

This will run a script to minify and optimise the CSS, JS and images used and place them in the export folder.

CSS and JS files will be written to a separate file (named the same) with `.min` appended to it. The references in the HTML will need to be updated to point to these minified files.

Images will be overwritten with the optimisations.

### Icons

To update the icons, the icon fonts will need to be re-generated using the [IcoMoon](https://icomoon.io/app) service.

1. Create a new IcoMoon project and remove and pre-existing sets.
2. Click the **Import Icons** button and locate the `selection.json` file to import.
3. Choose 'Yes' to import the settings saved.
4. Add icons to library by clicking **Import Icons** again and selecting the icon SVG files.
5. Generate font and download. Replace existing icon fonts with the the new ones, and update the `icon.css` file in the CSS folder.
6. Replace the new `selection.json` with the current one.