// config.js
var Config = {};

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * The prefix text before the map name
 */
Config.mapPrefix = "You're playing on ";

/**
 * The suffix text for player count
 */
Config.playerCountSuffix = " slots";

/**
 * Enable custom text in the top right corner of the screen?
 */
Config.enableCustomText = true;

/**
 * The custom texts to display in the top right corner
 * only works if enableCustomText = true
 */
Config.customTexts = [
    "Fully translated from Russian to English.",
    "A real AMERICAN server.",
    "Actively maintained and developed.",
    "Welcome to ZGRAD!"
];

/**
 * Enable rotating titles?
 */
Config.enableRotatingTitles = true;

/**
 * What messages do you want to show in the title?
 * only works if enableRotatingTitles = true
 */
Config.titleMessages = [
    {
        heading: "VISIT US",
        subheading: "ZGRAD.US/DISCORD"
    },
    {
        heading: "OUR PARENT NETWORK:",
        subheading: "WWW.NPCZ.GG"
    },
    {
        heading: "THE BEST HOMIGRAD EXPERIENCE?",
        subheading: "THAT'S US."
    }
];

/**
 * How many milliseconds between title rotations?
 * only works if enableRotatingTitles = true
 */
Config.rotationLength = 5000;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
    "Get help or report players in the zgrad-support channel on our Discord.",
    "Be sure to join our Discord: zgrad.us/discord",
];

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * How many milliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;