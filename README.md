Techlerry Project
Techlerry is a health monitoring and emergency alert system designed to track steps, heart rate, and trigger SOS alerts in case of emergencies. This repository contains the frontend code for the Techlerry app, built with React Native and Expo.

Features
Step Counting: Track daily steps using accelerometer data.

Heart Rate Monitoring: Monitor heart rate and detect anomalies.

SOS Alerts: Trigger emergency alerts manually or automatically based on abnormal heart rate or motion patterns.

Activity History: View step count and heart rate trends over time.

Emergency Contacts: Manage and notify emergency contacts during SOS events.

Tech Stack
Frontend: React Native, Expo

Backend: Flask (for API endpoints)

Libraries:

react-navigation for navigation

react-native-svg-charts or victory-native for data visualization

pandas, numpy, matplotlib for data processing and visualization (Python backend)

TensorFlow Lite or PyTorch Mobile for lightweight AI models

Setup Instructions
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

Expo CLI (install globally using npm install -g expo-cli)

Python (for backend API, if applicable)

Installation
Clone the repository:

bash
Copy
cd Techlerry-git/frontend
Install dependencies:

bash
Copy
npm install
Update outdated packages:

bash
Copy
npm update
Fix compatibility issues with Expo:

bash
Copy
npx expo install --fix
Address vulnerabilities:

bash
Copy
npm audit fix
Running the Project
Start the Expo development server:

bash
Copy
npx expo start

expo go install from palyatore 

Scan the QR code with the Expo Go app (available on iOS and Android) or use an emulator.
Troubleshooting
Common Issues
Deprecated Packages:

Update deprecated packages using npm update or replace them with recommended alternatives (e.g., @babel/plugin-transform-nullish-coalescing-operator).

Expo Compatibility Warnings:

Run npx expo install --fix to update Expo packages to compatible versions.

Vulnerabilities:

Run npm audit fix to address security vulnerabilities.

Build Errors:

Clear the npm cache and reinstall dependencies:

bash
Copy
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
Contributing
We welcome contributions! Here’s how you can help:

Fork the repository.

Create a new branch for your feature or bugfix:

bash
Copy
git checkout -b feature/your-feature-name
Commit your changes:

bash
Copy
git commit -m "Add your message here"
Push to the branch:

bash
Copy
git push origin feature/your-feature-name
Open a pull request.

