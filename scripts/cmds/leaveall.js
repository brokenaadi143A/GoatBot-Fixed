module.exports = {
  config: {
    name: "leaveall",
    aliases: ["la"],
    version: "2.0",
    author: "Priyanshi Kaur",
    countDown: 5,
    role: 2,
    shortDescription: "Bot will leave all group chats",
    longDescription: "",
    category: "admin",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, event }) {
    try {
      const groupList = await api.getThreadList(300, null, ['INBOX']);
      const filteredList = groupList.filter(group => group.threadName !== null);

      if (filteredList.length === 0) {
        api.sendMessage('No group chats found.', event.threadID);
      } else {
        for (const group of filteredList) {
          const groupID = group.threadID;
          const botUserId = api.getCurrentUserID();
          await api.removeUserFromGroup(botUserId, groupID);
        }
        api.sendMessage('Left all group chats.', event.threadID);
      }
    } catch (error) {
      console.error("Error leaving group chats", error);
      api.sendMessage('An error occurred while leaving group chats. Please try again later.', event.threadID);
    }
  },
};