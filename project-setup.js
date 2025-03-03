// client/package.json
{
  "name": "invoice-generator-client",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

// server/package.json
{
  "name": "invoice-generator-server",
  "version": "1.0.0",
  "description": "Backend for CSV to PDF invoice generator",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "archiver": "^5.3.1",
    "cors": "^2.8.5",
    "csv-parser": "^3.0.0",
    "express": "^4.18.2",
    "multer": "^1.4.5-lts.1",
    "pdfkit": "^0.13.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}

// README.md
# Invoice Generator App

A web application that generates professional invoices from CSV data.

## Features

- Upload CSV files with invoice data
- Preview invoice data before generation
- Generate professional PDF invoices
- Download all invoices as a ZIP file
- Progress tracking for PDF generation
- Error handling for CSV parsing and PDF generation

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **PDF Generation:** PDFKit
- **File Handling:** Multer, Archiver

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd invoice-generator-app
   ```

2. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

3. Install dependencies for the client:
   ```
   cd ../client
   npm install
   ```

4. Start the server:
   ```
   cd ../server
   npm start
   ```

5. Start the client:
   ```
   cd ../client
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`

## CSV Format

The CSV file should include the following columns:
- `invoiceNumber` (required): Unique identifier for the invoice
- `customerName` (required): Name of the customer
- `amount` (required): Total amount of the invoice
- `date` (optional): Invoice date (defaults to current date if not provided)
- `customerAddress` (optional): Customer's address
- `customerEmail` (optional): Customer's email
- `description` (optional): Description of the services/products
- `quantity` (optional): Quantity of items (defaults to 1)
- `unitPrice` (optional): Price per unit (calculated from amount if not provided)
- `taxRate` (optional): Tax rate percentage (defaults to 0)

## Example CSV

```
invoiceNumber,customerName,amount,date,customerAddress,customerEmail,description,quantity,unitPrice,taxRate
INV-001,John Doe,500,2023-01-15,"123 Main St, Anytown",john@example.com,Consulting Services,5,100,10
INV-002,Jane