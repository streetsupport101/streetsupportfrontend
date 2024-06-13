# Street Support

Street Support is a platform designed to facilitate donations to homeless individuals, ensuring that funds are used only for essential needs such as food, clothing, and shelter. The platform connects homeless clients with resources in their area and allows donors to make contributions via various payment methods, including debit/credit card, cryptocurrency, and e-transfer.

## Features

- **Homeless Client Profiles**: Create and manage profiles with photos and bios, and generate QR codes for easy sharing.
- **Donations**: Accept donations through multiple payment methods and track donation amounts.
- **Authentication**: Secure login and registration for both clients and donors.
- **Admin Dashboard**: Manage and verify client profiles, track donations, and oversee platform activity.
- **Resource Connection**: Connect clients with local resources like shelters and food banks.

## Tech Stack

- **Frontend**: React (using React Router for navigation)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payments**: Stripe, Coinbase Commerce, and Interac e-Transfer
- **Other**: Axios for HTTP requests, Nodemailer for email notifications, QRCode for QR code generation

## Installation

### Backend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/streetsupport.git
   cd streetsupport-back