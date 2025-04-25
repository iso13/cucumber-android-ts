import { BeforeAll, AfterStep } from '@wdio/cucumber-framework';
import { startEmulator, waitForDevice } from './emulator'; // or correct relative path

BeforeAll(async () => {
  const emulatorName = 'Pixel_7_Pro_API_33';
  console.log('🚀 Launching emulator before all scenarios...');
  await startEmulator(emulatorName);
  await waitForDevice();
  console.log('✅ Emulator started and ready!');
});

AfterStep(async function ({ result }) {
  if (result?.status === 'FAILED') {
    await browser.takeScreenshot();
  }
});