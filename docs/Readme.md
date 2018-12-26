## Documentation.

### Requirements.
`- Barcode scanner.`

### Optionals.
`- Usb scale (dymo 10kg has been tested).`

### Api.
When scanning a barcode containing an ISBN number, a query is made to google books.
If the book is existing in the google books database, then it returns the data
it's registered with.
`https://www.googleapis.com/books/v1/volumes?q=isbn:9780470876411`

`?q=isbn:` is a search query looking for numbers as an isbn number.


### Redux.
Redux is used for state management to hold the current data after a scan has
been made.
After every scan, the state is updated with the new data or an error if it has occured.