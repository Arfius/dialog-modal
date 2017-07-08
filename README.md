# dialog-modal
Angularjs Directive to create modal popup.

## Installation

```sh
npm install https://github.com/Arfius/dialog-modal.git
```

## Get Started

Include the dialog-modal dependency on your Angular module:

```js
var app = angular.module("example", ['dialogModalService']);
```
Include the dependencies

```html
<script src="node_modules/angular/angular.js"></script>
<script src="node_modules/angular-sanitize/angular-sanitize.js"></script>
<script src="node_modules/angular-animate/angular-animate.js"></script>
<script src="node_modules/angular-ui-router/release/angular-ui-router.js"></script>
<script src="node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js"></script>
<script src="node_modules/angular-css/angular-css.min.js"></script>
<script src="node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"></script>
<script src="node_modules/dialog-modal/dist/dialogmodal.ser.js"></script>
```
Inject variable dialogModal on Controller


```js

app.controller('mainCtrl', ['$scope','dialogModal',function($scope,dialogModal)

```
Then, use  dialogModal as below:

```js

dialogModal.showAlert("title","body","OK");

```

Check the example in ```example``` directory. Run the example with

```
cd example
npm install
```
