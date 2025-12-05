📱 AJIO Mobile App – Automation Framework (Appium + WebdriverIO + Cucumber + Allure )
------------------------------------------------------------------------------------
This framework automates the AJIO Mobile Application using Appium with WebdriverIO and Cucumber BDD on Windows OS with Android Emulator support. It also generates Allure Reports and supports execution video recording as evidence.


🛠️ Tech Stack
---------------

      Language: JavaScript (Node.js)
      
      Automation Tool: Appium 2
      
      Test Runner: WebdriverIO
      
      BDD: Cucumber
      
      Reporting: Allure
      
      Platform: Android
      
      IDE: VS Code / Android Studio
      
      OS: Windows 10 / Windows 11
      
      Version Control: Git + GitHub

  ✅ System Requirements
  ----------------------------

  | Software       | Required Version         |
| -------------- | ------------------------ |
| OS             | Windows 10 / 11 (64-bit) |
| Node.js        | **v18.20.2 (Mandatory)** |
| NPM            | v9+                      |
| Java JDK       | JDK 11 or JDK 17         |
| Appium         | **v2.0.1**               |
| Android Studio | Latest Stable            |
| Git            | Latest                   |
| VS Code        | Latest (Recommended)     |


✅ 1️⃣ Install Node.js

    https://nodejs.org

Verify

node -v
npm -v

✅ 2️⃣ Install Java JDK

    https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html

After install, verify:

java -version

✅ 3️⃣ Install Appium (Exact Version)

npm install -g appium@2.0.1

✅ 4️⃣ Install Appium Driver (UIAutomator2)

appium driver list

✅ 5️⃣ Install Android Studio (Windows)

https://developer.android.com/studio

During setup:
    
    Install Android SDK
    
    Install Android Emulator

Install Platform Tools

Create Emulator : - 

    Device Manager → Create Virtual Device → Pixel 6 → Android 13


<img width="1470" height="412" alt="image" src="https://github.com/user-attachments/assets/b9ca4456-54a5-4d10-bed7-a419df090bfe" />

✅ 6️⃣ Set Environment Variables

Control Panel → System → Advanced System Settings → Environment Variables

add new system variable 

    | Variable     | Value                                           |
| ------------ | ----------------------------------------------- |
| ANDROID_HOME | `C:\Users\<YourName>\AppData\Local\Android\Sdk` |


Add to path


%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin


Give the command 

adb devices


🔹 TERMINAL 1 — START ANDROID EMULATOR
Option A: From Android Studio UI (Recommended) here

      Android Studio → Device Manager → Start Emulator

🔹 TERMINAL 2 — START APPIUM SERVER

      appium
Server runs on 
    http://127.0.0.1:4723

🔹 TERMINAL 3 — RUN FEATURE FILES (TEST EXECUTION)

Go to your project folder:

    cd ajio-mobile-e2e
✅ ✅ RUN ALL FEATURE FILES

    npx wdio run wdio.conf.cjs


✅ ✅ RUN A SINGLE FEATURE FILE

specs: ['./features/**/*.feature'],

 Option 1 — Using Feature File Path

      npx wdio run wdio.conf.cjs --spec ./features/login.feature
Option 2 — Run Using TAG (Recommended)
      @smoke
Scenario: Login to AJIO

Run:

    npx wdio run wdio.conf.cjs --cucumberOpts.tagExpression="@smoke"


 Run multipls tags
       npx wdio run wdio.conf.cjs --cucumberOpts.tagExpression="@smoke or @regression"


✅ ✅ DEBUG MODE (SLOW EXECUTION)

    npx wdio run wdio.conf.cjs --logLevel debug

✅ ✅ RUN WITH ALLURE REPORT CLEANING

rmdir /s /q reports\allure-results
npx wdio run wdio.conf.cjs
allure generate reports/allure-results --clean
allure open


✅ QUICK TROUBLESHOOTING COMMANDS

Restart ADB

    adb kill-server
    adb start-server
    adb devices

Check Appium

appium -v
appium driver list

Image :- 

<img width="573" height="820" alt="image" src="https://github.com/user-attachments/assets/75de4b13-b878-4b9d-9701-6467e1f8b615" />
Ajio app  open :-   

<img width="581" height="777" alt="image" src="https://github.com/user-attachments/assets/15c5277a-6bd7-4ed1-85ac-a72bcebcc5f7" />













