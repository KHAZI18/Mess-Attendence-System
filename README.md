# Mess-Attendence-System
This repository contains the source code for a web-based attendance system designed specifically for college mess. The system allows students to submit their attendance status (present or absent) through a user-friendly interface. It also provides administrators with the ability to view and manage attendance records.

## Features

- **User-friendly Interface:** The system offers a simple and intuitive interface for students to submit their attendance status (present or absent).
- **Real-time Updates:** Attendance records are stored in a MongoDB database and are accessible in real-time, ensuring accurate and up-to-date information.
- **Administrative Tools:** Administrators have access to a separate view that displays all attendance records, allowing for easy monitoring and management.
- **Responsive Design:** The web application is designed to be responsive and can adapt to various screen sizes, making it accessible from desktops, tablets, and mobile devices.

## Technologies Used

- **Frontend:** HTML, CSS, Bootstrap, JavaScript (jQuery)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** CORS for handling cross-origin requests

## How to Use

1. **Clone the Repository:** Clone this repository to your local machine using `git clone https://github.com/KHAZI18/Mess-Attendance-System.git`.
2. **Install Dependencies:** Navigate to the project directory and install the necessary dependencies using npm or yarn: `npm install` or `yarn install`.
3. **Set up MongoDB:** Set up a MongoDB database and configure the connection URI in `server.js`.
4. **Start the Server:** Start the server using `node server.js`.
5. **Access the Application:** Access the web application through your browser by navigating to `http://localhost:3000`.
6. **Submit Attendance:** Students can submit their attendance status through the provided form on the home page (`index.html`).
7. **View Attendance Records:** Administrators can view all attendance records by navigating to the "View Attendance" page (`viewAttendance.html`).

## Contributions

Contributions are welcome! If you have any suggestions for improvements, bug fixes, or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

[FAIZAN.KHAZI](https://github.com/KHAZI18)
