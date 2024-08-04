//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0IvMzU0cjRTZlloOWw4M0o3M1k0eWZxakQybHR1OGE1Q2p0Z1B4MmpWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2FHOG1LT3UvZk9RdVIxcmlkbHYwdFdBVm45dHNJRG9UTktKb1NmNk9tRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSTRWWmVBdk11K0pMNHQzUFpXeVVSWklnV0ZTVTBhNTczRERTMFl3N2xBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUnFNZ0J4OC9Kb1lIb2tpNnZzdDFFYmZBM1pnckdSZzRTODZKU3pLN21rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBDSmpVc2VGSkJrWDVybkRVbjJrU3ByVnRGeFIvek1Lb1hpbnl6UUxwbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhrTmZhYkYyTktmaXRtYUI3NjkzeWJYQitLNG54K3N3WmNnQVNxUDB0UzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dUMis5eEcyaU9BT1gxUysxSXpuN2U4ZFJZaWRHNGowZXhvVDh5YTBtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZG0zdFVod2ZwdXVvbDdZQUhNK0xkVndiQU1FWnk3T2pLclhPNmlkL0lEND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFzQW9iT1U5KytDYjFJdW9Ua000N1NHU25rNHJ4SWhtejNGL3VmUFZiUTY0Nnc2LzZWcjNXNGtTME8xS3V0OEpDZHRZNkVHV3duOUU2Z0lUNElXOEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiIwemVNRjk5K2pYQmUzeFdrSDNrVWJySE4yQUQzamFRZ1NZTG93RXFqR0VFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxanRCamtPTlRnZXNSWGE3aU5Fd1hRIiwicGhvbmVJZCI6IjkyMzYzN2ZjLWE3YjAtNDgzMS1iMTUxLWE0NTI5YmUzMzM3ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkQy96Ni93SGMxZmduN2NPTTNNZDlkYXBKY2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWpIVmdpSHJaQXpCZWtkYVIrb1ZYVitrSEc0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZGUkUyM1c3IiwibWUiOnsiaWQiOiIyMzQ4MDM3ODIwNjY1OjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Bhd3BHQVF3THk0dFFZWUJTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InIvMGE3Rmk2dTVTSCt5TXd2QkQ3UzVjdTFJUEsraHpHTC9CckZSZVI5a1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZONHJOQjBadWFxekwyZXEwMk1uYkIyV2IyT3hVQzRpZk85NmdLcW5UMGtXaVRjQ2RHOXBHOE83ODdPdUdPbGN6QVFJbm8yMHhZblp4RGFwbFpjekRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLemNlblVqNnhIaFBzRy81azgzTkhCVDltT3pQWXI0NHQ5ZHd0ejE0NU5za3ZJTC9mVm1TSE9vd0JITXBtaUJOK2h6ZTBTS1pwbWpVWkZxd0h2V1RCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMzc4MjA2NjU6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhLzlHdXhZdXJ1VWgvc2pNTHdRKzB1WEx0U0R5dm9jeGkvd2F4VVhrZlpFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjg3MDU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZjdiJ9
  process.env.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0t3eXpEUG9DS0IwTS80eHYyVlJWdVU3NTFWenRNc29QUDg1K3ZqczVGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1QydkhkTzJNWElZeVVDSjlXTlJmdm1USVBDam9BUURZcUtERC9KUjhDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUDhLTmF3ZFpTbktnaTJVUi9naWphYmdkaW5oTnlYZ2pjOW9JSDF4eEVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrL1lNUm5aYWpWVFA5Mk9GRXYxUUd6VlZCdVRjRm9URUdJWFBTZ3dDeFMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFY1ljZWNlUXdhc2Y0dHVqQ29TVEVIY29XQXp5MmZFNlowcmZQeUNGWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPZWcrcFNGRDhYejkxZDNhSWp2cGRPMlFYUDBpZGprVm1xZDBLdFZyRE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0R5dDlNQW1wRkphT0hTYlRFdExvZFlrVkNPOXQ4WlFOcFY4VURPbE5WOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnFYdi9LdDAyMVRlSTNQZm5YdTRDSitraXBoRUhkdjJvVTRwazlvdUwwVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJPd3dQMDBWM1QwKzQycDl4U1RXRWhwbU8vNkxMazYwVjhSbHJwaDJPTVRtdnZ0bnRPbXQvbml0V3o0dFZZaXd1NXBvekwxSWJJOHJjSlA0TExPVUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJxa3l5WXdnbldLM3hRZ042blVHbERYdXpxU1gxU0x0ekZPV25LWUl5YVlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpc3RfdkV5blQzV3ZUeURLUTJTTnR3IiwicGhvbmVJZCI6IjlhNTI4NGE1LTMyMmUtNDgxMS05MmI4LTRmODk0Njk5MDlkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrNXhiMWZSZU9PSGRTMVhhRE1vZmx5YkJDemc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1BQTGg2Rk9qemd1b3Z6clZIN3RaRFdzMzlVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlMyUjVNOE42IiwibWUiOnsiaWQiOiIyMzQ4MDM3ODIwNjY1OjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZXdwR0FRczU2OXRRWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyLzBhN0ZpNnU1U0greU13dkJEN1M1Y3UxSVBLK2h6R0wvQnJGUmVSOWtRPSIsImFjY291bnRTaWduYXR1cmUiOiJGdVdLZ1MvK0pzVkNtVlVkQVp1L2piWHI3SkVTS2VQTkhsUUZaenBxdnRjNXpWbEZkM0ZYSGdEREhiWGZEMVMrSGhYbG9xSE5TRkxwUlU1VlBWUTJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicmxRYkQrYTNuRWJEYlUvaE1YS25kNktjNkIvZmNEWHNEeWFmYWtGbk1SVTdlN2JXd2ViaXc2U0Y4UDIxNHpkRFNia3VyK20zZkl3cnU1ZGVyZnk4RFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDM3ODIwNjY1OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmEvOUd1eFl1cnVVaC9zak1Md1ErMHVYTHRTRHl2b2N4aS93YXhVWGtmWkUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3NjUxMjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRndEIn0=
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "Hmmm soka",
  packname: process.env.PACK_NAME || "Douma",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Douma dono",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
