module.exports = {
        config: {
                name: "commandName", // Name of command, it must be unique to identify with other commands
                version: "1.0", // Version of command
                author: "NTKhang", // Author of command
                category: "events" // Category of command, it must be "events" to identify with other commands
        },

        langs: {
                vi: {
                        hello: "xin chào thành viên mới",
                        helloWithName: "xin chào thành vien mới, id facebook của bạn là %1"
                }, // Vietnamese language
                en: {
                        hello: "hello new member",
                        helloWithName: "hello new member, your facebook id is %1"
                } // English language
        },

        // onStart is a function that will be executed when has new event in group (see more at https://github.com/ntkhang03/fb-chat-api/blob/master/DOCS.md#apilistenmqttcallback (Event Type: "event"))
        onStart: async function ({ api, usersData, threadsData, message, event, userModel, threadModel, prefix, dashBoardModel, globalModel, dashBoardData, globalData, envCommands, envEvents, envGlobal, role, getLang , commandName }) {
                // YOUR CODE HERE, use console.log() to see all properties in variables above

                // example when user join group

                // check if event is user join group, see more at https://github.com/ntkhang03/fb-chat-api/blob/master/DOCS.md#apilistenmqttcallback
                if (event.logMessageType == "log:subscribe") { 
                        // getLang is a function to get language of command

                        // getLang without parameter is a function to get language of command without parameter
                        message.send(getLang("hello"));