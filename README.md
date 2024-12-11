# get-date

A simple utility to format dates in various formats using `dayjs`. This package allows developers to easily format dates into commonly used formats.

## Installation

You can install the package via npm:

```bash
npm install get-date
```

## Usage
After installing the package, you can easily import and use it in your project.

```bash
const formatDate = require('get-date');

// Example usage:
const formattedDate = formatDate(new Date(), 'mdyts');
console.log(formattedDate); // Example output: Sep 20, 2018 10:45:33 PM
```

## Available Format Options
You can pass a date and a format string to the formatDate function. Here are the available formats:

```bash
mdyts: Sep 20, 2018 10:45:33 PM
mdyt: Sep 20, 2018 10:45 PM
dmy: 20 Sep 2018
d-m-y: 20-Sep-2018
dmdyt: Thu, Sep 20, 2018 10:45 PM
DM3Yd: 21-Sep-18,Fri
DM2Yhms: 21-09-2018(10.45.53 PM)
DM3Yhms: 21-Sep-2018 10.45.53 PM
DM3Y4d2: 21-Sep-2018,Friday
DM3Ydt: 21-Sep-18,Fri 10.45 PM
DM3YdtDN: 21-Sep-18,Fri 10.45 PM (Day or Night)
DDMMMYY-hh.mm.ssA: 21Sep18-10.45.53PM
yyyy-MM-dd: 2021-11-17
t-d: 21-Sep-2018 10.45.53 PM
dd-mm-yy: 21-09-18
hhmmA: 21-Sep-18,Fri 10.45 PM
```

## Example Code

```bash
const formatDate = require('get-date');

const date = new Date();
console.log(formatDate(date, 'mdyts'));  // Sep 20, 2018 10:45:33 PM
console.log(formatDate(date, 'dmy'));    // 20 Sep 2018
console.log(formatDate(date, 'yyyy-MM-dd')); // 2021-11-17
```

## Error Handling
If you pass an invalid date to the function, it will throw an error. Make sure to catch it or check the validity of the date before using it:

```bash
try {
    console.log(formatDate("invalid date", 'mdyts'));
} catch (error) {
    console.error("Error:", error.message);  // Invalid Date Format
}
```

## Powered by dayjs
