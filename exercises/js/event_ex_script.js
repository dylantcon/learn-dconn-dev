// Examples for understanding JavaScript event handling
// ----------------------------------------------------
// event_ex_script.js

// attaches an event handler to an object by its ID
function attachEventHandler(elementId, event, handler) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener(event, handler);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

// each of the event handlers call this to update
//  some display element associated with it 
function updateDisplay(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = content;
  } else {
    console.error(`Display element "${elementId}" not found.`)
  }
}

// event string: 'click'
function handleClick(event) {
  const info = `Click at: (${event.clientX}, ${event.clientY}) | Button: ${event.button}`;
  updateDisplay('clickDisplay', info);
}

// event string: 'dblclick'
function handleDoubleClick(event) {
  const info = `Double-click at: (${event.clientX}, ${event.clientY}) | Time: ${event.timeStamp.toFixed(0)}ms`;
  updateDisplay('doubleClickDisplay', info);
}

// event string: 'mouseover'
function handleMouseOver(event) {
  const info = `Mouse over: ${event.target.tagName} | From: ${event.relatedTarget?.tagName || 'outside'}`;
  updateDisplay('mouseOverDisplay', info);
}

// event string: 'mouseout'
function handleMouseOut(event) {
  const info = `Mouse out: ${event.target.tagName} | To: ${event.relatedTarget?.tagName || 'outside'}`;
  updateDisplay('mouseOutDisplay', info);
}

// event string: ''
function handleMouseEnter(event) {
  const info = `Mouse entered: ${event.target.tagName} | No bubbling`;
  updateDisplay('mouseEnterDisplay', info);
}

// event string: ''
function handleMouseLeave(event) {
  const info = `Mouse left: ${event.target.tagName} | No bubbling`;
  updateDisplay('mouseLeaveDisplay', info);
}

// event string: ''
function handleMouseUp(event) {
  const info = `Mouse up: Button ${event.button} | At: (${event.clientX}, ${event.clientY})`;
  updateDisplay('mouseUpDisplay', info);
}

// event string: ''
function handleMouseDown(event) {
  const info = `Mouse down: Button ${event.button} | At: (${event.clientX}, ${event.clientY})`;
  updateDisplay('mouseDownDisplay', info);
}

// event string: ''
function handleMouseMove(event) {
  const info = `Position: (${event.clientX}, ${event.clientY}) | Movement: (${event.movementX}, ${event.movementY})`;
  updateDisplay('mouseMoveDisplay', info);
}

// event string: ''
function handleMouseWheel(event) {
  const info = `Wheel: ΔY=${event.deltaY} | ΔX=${event.deltaX} | Mode: ${event.deltaMode}`;
  updateDisplay('mouseWheelDisplay', info);
}

// event string: ''
function handleDOMMouseScroll(event) {
  // firefox-specific (legacy)
  const info = `DOM Scroll: Detail=${event.detail} | Axis: ${event.axis}`;
  updateDisplay('domMouseScrollDisplay', info);
}

// event string: 'contextmenu'
function handleContextMenu(event) {
  event.preventDefault();
  const info = `Context menu at: (${event.clientX}, ${event.clientY}) | Prevented: ${event.defaultPrevented}`;
  updateDisplay('contextMenuDisplay', info);
}

// ===== KEYBOARD EVENT HANDLERS =====

// event string: 'keydown'
function handleKeyDown(event) {
  const info = `Key down: ${event.key} | Code: ${event.code} | Ctrl: ${event.ctrlKey} | Shift: ${event.shiftKey} | Alt: ${event.altKey}`;
  updateDisplay('keyDownDisplay', info);
}

// event string: 'keyup'
function handleKeyUp(event) {
  const info = `Key up: ${event.key} | Code: ${event.code} | Time: ${event.timeStamp.toFixed(0)}ms`;
  updateDisplay('keyUpDisplay', info);
}

// event string: 'keypress'
function handleKeyPress(event) {
  const info = `Key press: ${event.key} | Char code: ${event.charCode} | Which: ${event.which}`;
  updateDisplay('keyPressDisplay', info);
}

// ===== FORM EVENT HANDLERS =====

// event string: 'submit'
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  const info = `Form submitted | Data: ${JSON.stringify(data)} | Prevented: ${event.defaultPrevented}`;
  updateDisplay('formSubmitDisplay', info);
}

// event string: 'input'
function handleInput(event) {
  const info = `Input changed: "${event.target.value}" | Type: ${event.target.type} | ID: ${event.target.id}`;
  updateDisplay('inputDisplay', info);
}

// event string: 'change'
function handleChange(event) {
  const info = `Value changed: "${event.target.value}" | Type: ${event.target.type} | ID: ${event.target.id}`;
  updateDisplay('changeDisplay', info);
}

// event string: 'focus'
function handleFocus(event) {
  const info = `Focus gained: ${event.target.tagName} | ID: ${event.target.id} | Type: ${event.target.type || 'N/A'}`;
  updateDisplay('focusDisplay', info);
}

// event string: 'blur'
function handleBlur(event) {
  const info = `Focus lost: ${event.target.tagName} | ID: ${event.target.id} | Value: "${event.target.value || 'N/A'}"`;
  updateDisplay('blurDisplay', info);
}

// event string: 'reset'
function handleFormReset(event) {
  const info = `Form reset | Target: ${event.target.tagName} | ID: ${event.target.id}`;
  updateDisplay('formResetDisplay', info);
}
