### About
   Application reads ISBN code through barcode scanner and looks for a book trough Finna API.
   Additionally application is able to read text through webcam and convert it to text(Google API required).

### Requirements
   - Usb barcode scanner
   - Usb web camera
### Installation
   Run `yarn` in root folder.
### Google Cloud Platform
   In order to use Text Recognition it is required to have Google API key which should be placed in fetchTextAction.
### Run the project.
   `yarn run electron-dev`
   This will start the project both in a Electron window as well as the browser.
### Prevent browser from opening.
   The script 'start' from package.json.
   Replace `react-scripts start` with `BROWSER=none react-scripts start`.
   When preventing the browser, the project will only open in the Electron window.
### Build Electron App
Run `yarn build` from root folder. It will create dist folder with Electron App for Windows and Mac platforms.  
   


