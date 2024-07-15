const { exec } = require('child_process');

const allowedUids = ["61556609578687"]; // Array of allowed UIDs

module.exports = {
 config: {
 name: "shell",
 version: "1.0",
 author: "Samir",
 countDown: 5,
 role: 2,
 shortDescription: "Execute shell commands",
 longDescription: "",
 category: "owner",
 guide: {
 vi: "{p}{n} <command>",
 en: "{p}{n} <command>"
 }
 },

 onStart: async function ({ args, message, event }) {
 const command = args.join(" ");

 if (!command) {
 return message.reply("Please provide a command to execute.");
 }

 // Check if the user's UID is in the allowed list
 if (!allowedUids.includes(event.senderID)) {
 return message.reply("You are not authorized to execute this command.");
 }

 exec(command, (error, stdout, stderr) => {
 if (error) {
 console.error(`Error executing command: ${error}`);
 return message.reply(`An error occurred while executing the command: ${error.message}`);
 }

 if (stderr) {
 console.error(`Command execution resulted in an error: ${stderr}`);
 return message.reply(`Command execution resulted in an error: ${stderr}`);
 }

 console.log(`Command executed successfully:\n${stdout}`);
 message.reply(`Command executed successfully:\n${stdout}`);
 });
 }
};