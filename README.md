# cucumber-android-ts

> Cucumber + WebdriverIO + Appium + TypeScript  
> End-to-End mobile automation framework for testing Android native apps.

---

## 📋 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Java JDK](https://adoptium.net/) (v11 or higher)
- [Android Studio](https://developer.android.com/studio)  
  - Android SDK
  - AVD Emulator configured
- [Appium](https://appium.io/)  
  _(Managed automatically via WebdriverIO service)_

Confirm installations:

```bash
node -v
npm -v
java -version
adb --version
```

---

## 📦 Install Project Dependencies

Clone the repo and install dependencies:

```bash
git clone https://github.com/iso13/cucumber-android-ts.git
cd cucumber-android-ts
npm install
```

---

## ⚙️ Project Structure

| Folder | Description |
|:-------|:------------|
| `features/` | Gherkin feature files and step definitions |
| `features/step-definitions/` | Cucumber steps (TypeScript) |
| `features/support/` | Hooks and shared support code |
| `wdio.conf.ts` | WebdriverIO configuration file |
| `emulator.ts` | Emulator launcher utility |
| `allure-results/` | (Generated) Allure report artifacts |

---

## 🚀 How to Run Tests

Make sure an Android emulator or device is available.

Then run:

```bash
npx wdio wdio.conf.ts
```

✅ This will:

- Start Appium automatically
- Launch the Android emulator (if not running)
- Install and open the **Alkami** app (`com.alkamitech.demo.android`)
- Execute Cucumber scenarios

---

## 👥 Emulator Setup

If needed, you can manually launch an emulator:

```bash
# List available emulators
emulator -list-avds

# Start a specific emulator
emulator -avd Pixel_7_Pro_API_33
```

Or let the framework auto-launch it before test execution via `BeforeAll` hook!

---

## 🛠️ Example Test Command

Run all tests:

```bash
npx wdio wdio.conf.ts
```

(Optional) Run specific feature file:

```bash
npx wdio wdio.conf.ts --spec features/login.feature
```

---

## 📊 Reporting

Allure reports are generated after the run in the `allure-results/` folder.

To view the Allure report:

```bash
npm install -g allure-commandline
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

## ✨ Additional Notes

- Emulator is auto-started before tests if not already running.
- Appium is managed automatically via WebdriverIO Appium Service.
- Ensure no other Appium server is manually running on the same port.
- Chrome and Chromedriver-mobile folders are auto-installed by Appium — **safe to ignore** in Git