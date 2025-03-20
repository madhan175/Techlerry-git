
# **Techlerry Project**

Techlerry is a health monitoring and emergency alert system designed to track steps, heart rate, and trigger SOS alerts in case of emergencies. This repository contains the frontend code for the Techlerry app, built with React Native and Expo.

---

## **Features**
- **Step Counting:** Track daily steps using accelerometer data.
- **Heart Rate Monitoring:** Monitor heart rate and detect anomalies.
- **SOS Alerts:** Trigger emergency alerts manually or automatically based on abnormal heart rate or motion patterns.
- **Activity History:** View step count and heart rate trends over time.
- **Emergency Contacts:** Manage and notify emergency contacts during SOS events.

---

## **Tech Stack**
- **Frontend:** React Native, Expo
- **Backend:** Flask (for API endpoints)
- **Libraries:**
  - `react-navigation` for navigation
  - `react-native-svg-charts` or `victory-native` for data visualization
  - `pandas`, `numpy`, `matplotlib` for data processing and visualization (Python backend)
  - `TensorFlow Lite` or `PyTorch Mobile` for lightweight AI models

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v16 or higher)
- npm (v8 or higher)
- Expo CLI (install globally using `npm install -g expo-cli`)
- Python (for backend API, if applicable)

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Techlerry-git.git
   cd Techlerry-git/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update outdated packages:
   ```bash
   npm update
   ```

4. Fix compatibility issues with Expo:
   ```bash
   npx expo install --fix
   ```

5. Address vulnerabilities:
   ```bash
   npm audit fix
   ```

---

### **Running the Project**
1. Start the Expo development server:
   ```bash
   npx expo start
   ```

expo go install from playstore 
2. Scan the QR code with the Expo Go app (available on iOS and Android) or use an emulator.

---


## **Troubleshooting**

### **Common Issues**
1. **Deprecated Packages:**
   - Update deprecated packages using `npm update` or replace them with recommended alternatives (e.g., `@babel/plugin-transform-nullish-coalescing-operator`).

2. **Expo Compatibility Warnings:**
   - Run `npx expo install --fix` to update Expo packages to compatible versions.

3. **Vulnerabilities:**
   - Run `npm audit fix` to address security vulnerabilities.

4. **Build Errors:**
   - Clear the npm cache and reinstall dependencies:
     ```bash
     npm cache clean --force
     rm -rf node_modules package-lock.json
     npm install
     ```

---

## **Contributing**
We welcome contributions! Here’s how you can help:
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**
- Thanks to the Expo team for providing an excellent development platform.
- Special thanks to our contributors and team members for their hard work.

---

## **Contact**
For questions or support, please contact:
- madhan - dmadhan692@gmail.com
-
