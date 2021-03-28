<div align="center">
  <img height="200"
    src="https://raw.githubusercontent.com/Gherciu/react-p5/master/logo.png">
  <h1>react-p5</h1>
  <p>This Component lets you integrate p5 Sketches into your React App. <a href="https://codesandbox.io/s/k09k8knxz5">DEMO</a></p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/react-p5)](https://github.com/Gherciu/react-p5/blob/master/LICENSE)
[![ggpack](https://img.shields.io/badge/Generated%20from-gherciu%2Fggpack-green)](https://github.com/gherciu/ggpack)

For Tips and [Advanced Usage](https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91) you can read this [Blog Post](https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91)

## Installation

-   npm

    ```bash
    npm i --save react-p5
    ```

-   yarn

    ```bash
    yarn add react-p5
    ```

## Usage
For Tips and [Advanced Usage](https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91) you can read this [Blog Post](https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91)

#### JavaScript

```js
import React from "react";
import Sketch from "react-p5";

	let x = 50;
	let y = 50;
export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		x++;
	};

	return <Sketch setup={setup} draw={draw} />;
};
```

#### Typescript

```typescript
import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

interface ComponentProps {
	//Your component props
}

const YourComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
	let x = 50;
	const y = 50;

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5: p5Types) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		x++;
	};

	return <Sketch setup={setup} draw={draw} />;
};
```

#### Tips
- If you need to get the `browser event object` inside your p5 methods like `mouseClicked` or others you can do it by accessing the second arg.
```js
mouseClicked(_p5, event) {
  console.log(event)
}
```

## Props

| Prop                                                           | Required           | Type     | Description                                                                                                                                                                                                           |
| -------------------------------------------------------------- | :------------------: | :--------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className                                                      | :x:                | String   | ClassName for canvas parent ref                                                                                                                                                                                       |
| style                                                          | :x:                | Object   | Styles for canvas parent ref                                                                                                                                                                                          |
| [setup](https://p5js.org/reference/#/p5/setup)                 | :heavy_check_mark: | Function | The setup() function is called once when the program starts.                                                                                                                                                          |
| [draw](https://p5js.org/reference/#/p5/draw)                   | :x:                | Function | Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called.                                             |
| [windowResized](https://p5js.org/reference/#/p5/windowResized) | :x:                | Function | The windowResized() function is called once every time the browser window is resized.                                                                                                                                 |
| [preload](https://p5js.org/reference/#/p5/preload)             | :x:                | Function | Called directly before setup(), the preload() function is used to handle asynchronous loading of external files in a blocking way.                                                                                    |
| [mouseClicked](https://p5js.org/reference/#/p5/mouseClicked)   | :x:                | Function | The mouseClicked() function is called once after a mouse button has been pressed and then released.                                                                                                                   |
| [mouseMoved](https://p5js.org/reference/#/p5/mouseMoved)       | :x:                | Function | The mouseMoved() function is called every time the mouse moves and a mouse button is not pressed.                                                                                                                     |
| [doubleClicked](https://p5js.org/reference/#/p5/doubleClicked) | :x:                | Function | The doubleClicked() function is executed every time a event listener has detected a dblclick event which is a part of the DOM L3 specification.                                                                       |
| [mousePressed](https://p5js.org/reference/#/p5/mousePressed)   | :x:                | Function | The mousePressed() function is called once after every time a mouse button is pressed.                                                                                                                                |
| [mouseWheel](https://p5js.org/reference/#/p5/mouseWheel)       | :x:                | Function | The function mouseWheel() is executed every time a vertical mouse wheel event is detected either triggered by an actual mouse wheel or by a touchpad.                                                                 |
| [mouseDragged](https://p5js.org/reference/#/p5/mouseDragged)   | :x:                | Function | The mouseDragged() function is called once every time the mouse moves and a mouse button is pressed. If no mouseDragged() function is defined, the touchMoved() function will be called instead if it is defined.     |
| [mouseReleased](https://p5js.org/reference/#/p5/mouseReleased) | :x:                | Function | The mouseReleased() function is called every time a mouse button is released.                                                                                                                                         |
| [keyPressed](https://p5js.org/reference/#/p5/keyPressed)       | :x:                | Function | The keyPressed() function is called once every time a key is pressed. The keyCode for the key that was pressed is stored in the keyCode variable.                                                                     |
| [keyReleased](https://p5js.org/reference/#/p5/keyReleased)     | :x:                | Function | The keyReleased() function is called once every time a key is released. See key and keyCode for more information.                                                                                                     |
| [keyTyped](https://p5js.org/reference/#/p5/keyTyped)           | :x:                | Function | The keyTyped() function is called once every time a key is pressed, but action keys such as Backspace, Delete, Ctrl, Shift, and Alt are ignored.                                                                      |
| [touchStarted](https://p5js.org/reference/#/p5/touchStarted)   | :x:                | Function | The touchStarted() function is called once after every time a touch is registered.                                                                                                                                    |
| [touchMoved](https://p5js.org/reference/#/p5/touchMoved)       | :x:                | Function | The touchMoved() function is called every time a touch move is registered.                                                                                                                                            |
| [touchEnded](https://p5js.org/reference/#/p5/touchEnded)       | :x:                | Function | The touchEnded() function is called every time a touch ends. If no touchEnded() function is defined, the mouseReleased() function will be called instead if it is defined.                                            |
| [deviceMoved](https://p5js.org/reference/#/p5/deviceMoved)     | :x:                | Function | The deviceMoved() function is called when the device is moved by more than the threshold value along X, Y or Z axis. The default threshold is set to 0.5. The threshold value can be changed using setMoveThreshold() |
| [deviceTurned](https://p5js.org/reference/#/p5/deviceTurned)   | :x:                | Function | The deviceTurned() function is called when the device rotates by more than 90 degrees continuously.                                                                                                                   |
| [deviceShaken](https://p5js.org/reference/#/p5/deviceShaken)   | :x:                | Function | The deviceShaken() function is called when the device total acceleration changes of accelerationX and accelerationY values is more than the threshold value. The default threshold is set to 30.                      |

A note on events:
---
Events that are accessed using props are always attached to `window`. 
That means that events are triggered throughout the whole page ([see the p5 docs for reference](https://p5js.org/reference/#/p5.Element/mousePressed)).  
If you would like to attach events to a specific element, you can do so by using `addEventListener` in your setup function. 

As an example limiting click events to the canvas:

```javascript
const setup = (p5, canvasParentRef) => {
      canvasParent = p5.createCanvas(width, height).parent(canvasParentRef)
      canvasParent.elt.addEventListener("mousedown", (event) => {
        console.log("Clicked on the canvas. Event:", event)
      })
    }
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

#### Or you can sponsor via [Open Collective](https://opencollective.com/react-p5/)

[![Open Collective](https://opencollective.com/react-p5/tiers/sponsor.svg?avatarHeight=60)](https://opencollective.com/react-p5/)

## Author

**[@Gherciu/react-p5](https://github.com/Gherciu/react-p5)** Released under the [MIT](https://github.com/Gherciu/react-p5/blob/master/LICENSE) License.<br>
Authored and maintained by [GHERCIU GHEORGHE](https://github.com/Gherciu) with help from contributors ([list](https://github.com/Gherciu/react-p5/contributors)).

#### If you like this repository star:star: and watch:eyes: on [GitHub](https://github.com/Gherciu/react-p5)
