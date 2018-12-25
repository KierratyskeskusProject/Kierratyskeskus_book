### Requirements
- Usb barcode scanner
- Usb scale (if weight is needed)

### Run the project.
`yarn run dev`
This will start the project both in a Electron window as well as the browser.

### Prevent browser from opening.
The script 'start' from package.json.
Replace `react-scripts start` with `BROWSER=none react-scripts start`.
When preventing the browser, the project will only open in the Electron window.

