#!/usr/bin/env node
console.log('Welcome to Holberton School, what is your name?');
const pin = process.stdin;
pin.on('readable', () => {
  pin.setEncoding('utf-8');
  const d = pin.read();
  if (d === null) return;
  process.stdout.write(`Your name is: ${d}`);
});
pin.on('end', () => {
  console.log('This important software is now closing');
});