export interface SketchProps {
	/**	ClassName for canvas parent ref  */
	className?:	String; 			
	/**	Styles for canvas parent ref  */
	style?:	Object; 				
	/**	The setup() function is called once when the program starts.  */
	setup?:	Function; 		
	/**	Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called.  */
	draw?:	Function; 				
	/**	The windowResized() function is called once every time the browser window is resized.  */
	windowResized?:	Function; 		
	/**	Called directly before setup(), the preload() function is used to handle asynchronous loading of external files in a blocking way.  */
	preload?:	Function; 			
	/**	The mouseClicked() function is called once after a mouse button has been pressed and then released.  */
	mouseClicked?:	Function; 		
	/**	The mouseMoved() function is called every time the mouse moves and a mouse button is not pressed.  */
	mouseMoved?:	Function; 		
	/**	The doubleClicked() function is executed every time a event listener has detected a dblclick event which is a part of the DOM L3 specification.  */
	doubleClicked?:	Function; 		
	/**	The mousePressed() function is called once after every time a mouse button is pressed.  */
	mousePressed?:	Function; 		
	/**	The function mouseWheel() is executed every time a vertical mouse wheel event is detected either triggered by an actual mouse wheel or by a touchpad.  */
	mouseWheel?:	Function; 		
	/**	The mouseDragged() function is called once every time the mouse moves and a mouse button is pressed. If no mouseDragged() function is defined, the touchMoved() function will be called instead if it is defined.  */
	mouseDragged?:	Function; 		
	/**	The mouseReleased() function is called every time a mouse button is released.  */
	mouseReleased?:	Function; 		
	/**	The keyPressed() function is called once every time a key is pressed. The keyCode for the key that was pressed is stored in the keyCode variable.  */
	keyPressed?:	Function; 		
	/**	The keyReleased() function is called once every time a key is released. See key and keyCode for more information.  */
	keyReleased?:	Function; 		
	/**	The keyTyped() function is called once every time a key is pressed, but action keys such as Backspace, Delete, Ctrl, Shift, and Alt are ignored.  */
	keyTyped?:	Function; 			
	/**	The touchStarted() function is called once after every time a touch is registered.  */
	touchStarted?:	Function; 		
	/**	The touchMoved() function is called every time a touch move is registered.  */
	touchMoved?:	Function; 		
	/**	The touchEnded() function is called every time a touch ends. If no touchEnded() function is defined, the mouseReleased() function will be called instead if it is defined.  */
	touchEnded?:	Function; 		
	/**	The deviceMoved() function is called when the device is moved by more than the threshold value along X, Y or Z axis. The default threshold is set to 0.5. The threshold value can be changed using setMoveThreshold()  */
	deviceMoved?:	Function; 		
	/**	The deviceTurned() function is called when the device rotates by more than 90 degrees continuously.  */
	deviceTurned?:	Function; 		
	/**	The deviceShaken() function is called when the device total acceleration changes of accelerationX and accelerationY values is more than the threshold value. The default threshold is set to 30.  */
	deviceShaken?:	Function; 		
}

/** This Component lets you integrate p5 Sketches into your React App */
declare const Sketch: React.ComponentClass<SketchProps>;

export default Sketch;