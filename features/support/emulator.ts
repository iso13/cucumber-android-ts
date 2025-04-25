// src/support/emulator.ts
import { execa } from 'execa';

/**
 * Start the Android emulator if it's not already running
 */
export async function startEmulator(emulatorName: string): Promise<void> {
  try {
    const { stdout } = await execa('adb', ['devices']);
    if (stdout.includes('emulator')) {
      console.log('🟢 Emulator already running.');
      return;
    }
    console.log(`🚀 Starting emulator: ${emulatorName}`);
    execa('emulator', ['-avd', emulatorName], { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Failed to start emulator:', error);
    throw error;
  }
}

/**
 * Wait for the Android device to be ready
 */
export async function waitForDevice(): Promise<void> {
  console.log('⏳ Waiting for emulator to connect...');
  await execa('adb', ['wait-for-device']);
  console.log('✅ Emulator connected!');
}