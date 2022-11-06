const APPLICATION_VARIABLES = {

  // General Info
  APP_NAME:"Warner Robins FBLA",
  APP_LINK:"https://warnerrobinsfbla.web.app/",
  CHAPTER_WEBSITE:"https://wrhs.hcbe.net/fbla",
  LANDING_PAGE_DESCRIPTION: "WRHS FBLA is the premier organization for Warner Robins High's student leaders interested in careers in business.",
  DEFAULT_PASSWORD:"FBLAChapter123",

  // Membership
  // EXCLUDE_FEATURES codes -> COMP_EVENTS, (more coming soon)
  MEMBERSHIPS: [
    {
      TYPE: 'Future',
      PRICE: '25',
      EXCLUDE_FEATURES: [],
    },
    {
      TYPE: 'Business',
      PRICE: '55',
      EXCLUDE_FEATURES: [],
    },
    {
      TYPE: 'Leader',
      PRICE: '115',
      EXCLUDE_FEATURES: [],
    },
    {
      TYPE: 'America',
      PRICE: '165',
      EXCLUDE_FEATURES: [],
    },
  ],

  // Socials (leave blank if chapter doesn't have one)
  CHAPTER_INSTAGRAM_URL: "https://www.instagram.com/wrhsfbla/",
  CHAPTER_TWITTER_URL: "https://twitter.com/wrhs_fbla",
  CHAPTER_FACEBOOK_URL: "https://www.facebook.com/WarnerRobinsFutureBusinessLeadersofAmerica/",
  CHAPTER_YOUTUBE_URL: "",
  CHAPTER_CONTACT_EMAIL: "allison.risaliti@hcbe.net",

  // Platform Coloring
  NAV_BAR_COLOR:"#9e1b32",

  CARD_HEADER_COLOR:"#a65d6a",
  CARD_HEADER_TEXT_COLOR:"white",
  CARD_BACKGROUND_COLOR: "#fcf5f6",

  TABLE_HEADER_COLOR:"#bab8b8",

  NEW_MEETING_ROW_COLOR: "#dfe7ed",
  NEW_MEETING_ROW_TEXT_COLOR: "white",
  MEETING_IN_ATTENDANCE_COLOR: "#198754",

  CALENDAR_EVENT_COLOR: "#FE5F55",
  CALENDAR_MEETING_COLOR: "green",

  // Help Information
  SUPPORT_EMAIL:"ameyalabs.help@gmail.com",
  SUPPORT_EMAIL_SUBJECT:"Technical Support for FBLA Chapter App",
  GENERAL_EMAIL:"allison.risaliti@hcbe.net",
  GENERAL_EMAIL_SUBJECT:"General Support for FBLA Chapter App",

  // Version
  VERSION:"202209.07.22.13",

}

export default APPLICATION_VARIABLES;
