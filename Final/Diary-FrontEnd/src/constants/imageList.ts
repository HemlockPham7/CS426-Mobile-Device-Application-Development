export const images = {
  icons: {
    angry: require("../../assets/emoji/angry.png"),
    cry: require("../../assets/emoji/cry.png"),
    sad: require("../../assets/emoji/sad.png"),
    neutral: require("../../assets/emoji/neutral.png"),
    happy: require("../../assets/emoji/happy.png"),
    love: require("../../assets/emoji/in-love.png"),
  },
  iconOptionModal: {
    edit: require("../../assets/icons/Edit_outline.png"),
    addGroup: require("../../assets/icons/Ticket Star.png"),
    share: require("../../assets/icons/Upload.png"),
    invite: require("../../assets/icons/invite.png"),
    copy: require("../../assets/icons/copy.png"),
    delete: require("../../assets/icons/delete.png"),
  },
};

export function getImageIcon(emoji: number) {
  switch (emoji) {
    case 1:
      return images.icons.angry;
    case 2:
      return images.icons.cry;
    case 3:
      return images.icons.sad;
    case 4:
      return images.icons.neutral;
    case 5:
      return images.icons.happy;
    case 6:
      return images.icons.love;
    default:
      return images.icons.happy;
  }
}

export const getEmojiName = (emoji: number) => {
  switch (emoji) {
    case 1:
      return "Angry";
    case 2:
      return "Cry";
    case 3:
      return "Sad";
    case 4:
      return "Neutral";
    case 5:
      return "Happy";
    case 6:
      return "Excited";
    default:
      return "Neutral";
  }
};

export const getColorIcon = (emoji: number) => {
  switch (emoji) {
    case 1:
      return "#eb496c";
    case 2:
      return "#555958";
    case 3:
      return "#6fab7c";
    case 4:
      return "#aa80f2";
    case 5:
      return "#e6be77";
    case 6:
      return "#fce472";
    default:
      return "Neutral";
  }
};
