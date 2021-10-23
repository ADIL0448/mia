/* Copyright © 2021 AMAL-DX.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DXTROX ----»»» AMAL-DX
*/

const Asena = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('weather');


if (Config.WORKTYPE == 'private') {

   Asena.addCommand({pattern: 'apkmod', fromMe: true, desc: Lang.WA_MOD}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *Public Bot* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   Asena.addCommand({pattern: 'nova', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked .\n📌 bit.ly/drknova');
   }));

   Asena.addCommand({pattern: 'cml', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   Asena.addCommand({pattern: 'apex', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   Asena.addCommand({pattern: 'kinemaster', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456');
   }));

   Asena.addCommand({pattern: 'inshot', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

   Asena.addCommand({pattern: 'alight', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass: 3456');
   }));
}
