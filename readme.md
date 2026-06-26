# Student Portal

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Database](https://img.shields.io/badge/Database-JsonPowerDB-orange)

## Table of Contents
- [Description](#description)
- [Scope of Functionalities](#scope-of-functionalities)
- [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
- [Illustrations](#illustrations)
- [Examples of Use](#examples-of-use)
- [Release History](#release-history)
- [Project Status](#project-status)
- [Sources](#sources)
- [Other Information](#other-information)

---

## Description
The Nexus Portal is a highly responsive, futuristic web-based Student Enrollment System. It is designed to manage student records efficiently within the STUDENT-TABLE relation of the SCHOOL-DB database. 

The standout feature of this project is its Infinity Level Cyber-Glassmorphism UI, featuring a 3D animated cyber-grid, floating neon particles, and a custom toast notification system. The backend is entirely powered by JsonPowerDB (JPDB), enabling seamless, serverless database operations directly from the frontend using REST APIs.

---

## Scope of Functionalities
- **Primary Key Validation:** Automatically checks if a Roll-No already exists in the database upon user input.
- **Dynamic State Management:** - If the Roll No is new, it enables the form for data entry and activates the [SAVE] and [RESET] buttons.
  - If the Roll No exists, it auto-fetches and populates the data, disables the Roll No field, and activates the [UPDATE] and [RESET] buttons.
- **Client-Side Validation:** Ensures no empty fields are submitted to the database.
- **Custom Notifications:** Replaces default browser alerts with futuristic, glowing toast notifications with progress bars.

---

## Benefits of using JsonPowerDB
JsonPowerDB (JPDB) is a Real Time, High Performance, Lightweight and Simple to Use, Rest API based Multi-mode DBMS. 
1. **Serverless Architecture:** Eliminates the need for a backend server to handle database operations. API calls are made directly from the client side.
2. **High Performance:** Capable of handling high-speed, real-time data processing.
3. **Multi-Mode:** Acts as a Key-Value pair, Document, and Relational database all at once.
4. **Developer Friendly:** Reduces development time drastically by using simple REST API calls for CRUD operations.
5. **Cost-Effective:** Low memory footprint and minimal infrastructure requirements.

---

## Illustrations
- UI Idle State: `![Idle State](link_to_image)`
- Data Validation Error: `![Error Alert](link_to_image)`
- Record Fetched / Update Mode: `![Update Mode](link_to_image)`

---

## Examples of Use

### Adding a New Student:
1. Enter a unique Roll No in the primary key field.
2. Click outside the input box; the system checks the database.
3. If not found, the form unlocks. Fill in Full Name, Class, Birth Date, Address, and Enrollment Date.
4. Click SAVE to store the record. A success toast notification will appear.

### Updating an Existing Student:
1. Enter an existing Roll No.
2. The system automatically fetches and displays the student's details.
3. Modify the required fields (e.g., Address or Class).
4. Click UPDATE to save the changes. 

---

## Release History
* **v1.0.0 (Current)** - Initial Release.
  * Integration of JsonPowerDB (GET, PUT, UPDATE).
  * Implementation of Infinity Level Cyber-UI (3D Grid & Particles).
  * Custom Toast Notification System added.

---

## Project Status
Completed. The micro-project meets all the specified requirements and is ready for deployment.

---

## Sources
- **Database:** [JsonPowerDB Documentation](http://login2explore.com/work/docs/jpdb-api-docs/)
- **UI Framework:** [Bootstrap 5](https://getbootstrap.com/)
- **Icons:** [FontAwesome 6](https://fontawesome.com/)
- **Fonts:** [Google Fonts (Orbitron, Space Grotesk)](https://fonts.google.com/)
- **JavaScript Library:** [jQuery](https://jquery.com/)

---