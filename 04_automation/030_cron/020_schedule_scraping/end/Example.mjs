import { addEmployeesToGS } from './google-sheet.mjs';
import cron from 'node-cron';

cron.schedule('31 5 * * *', () => {
  addEmployeesToGS();
});
