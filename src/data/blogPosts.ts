export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "meet-the-boss-chicks-mother-daughter-story",
    title: "Meet the Boss Chicks: The Mother-Daughter Story Behind Boss Chick Enterprises",
    excerpt:
      "We're a mother-daughter photobooth company in Fort Washington, Maryland — here's how a shared idea turned into 200+ DMV events and counting.",
    date: "2026-08-23",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "We're Boss Chick Enterprises — a mother-daughter photobooth and event company based in Fort Washington, Maryland, run by CEO Nijah Almond. We've spent the last four years bringing 360 photo booths, selfie stations, and audio guestbooks to weddings, birthdays, corporate events, baby showers, and graduations across the DMV.",
      },
      {
        type: "p",
        text: "We built this around guest experience: a booth line still going at midnight, an audio guestbook full of messages people actually mean, a setup that runs itself so the host doesn't have to think about it.",
      },
      { type: "h2", text: "A business built by two Boss Chicks" },
      {
        type: "p",
        text: "It started as a mother-daughter idea: Nijah and Tonya, two people who love throwing a good party, deciding to build a business out of it in a market full of talented DMV vendors.",
      },
      {
        type: "p",
        text: "We knew we wanted to bring energy and personality to events, not just drop off a machine and leave. So every booking starts with an actual conversation about who's hosting, what the vibe is, and what would make their specific guests light up — then we build the setup around that.",
      },
      {
        type: "p",
        text: "That's still how every event runs today, from the first call to the last guest leaving the booth line.",
      },
      { type: "h2", text: "More than an event setup" },
      {
        type: "p",
        text: "A decorated room gets photographed. A good photo booth line is what people actually talk about the next day — the laughing, the terrible poses, the guest of honor getting pulled in for one more round.",
      },
      {
        type: "p",
        text: "That's the gap interactive entertainment fills. A 360 photo booth gives guests something to do together. An audio guestbook holds onto voices and stories long after the champagne runs out.",
      },
      {
        type: "p",
        text: "We build every setup around that — whether it's a 360 photo booth for a Maryland wedding, a photobooth for a DC reception, or a selfie station for a Virginia birthday. Organized enough to run on time, loose enough that nobody feels like they're performing for a camera.",
      },
      { type: "h2", text: "The heart behind the brand" },
      {
        type: "p",
        text: "Boss isn't just the name. It's the actual attitude behind how we run events — confident, hands-on, no half-stepping on setup day.",
      },
      {
        type: "p",
        text: "Running this as a mother-daughter team means we're not just coworkers. We're each other's first call when something goes sideways before an event, and that shows up in how calm we stay when something actually does.",
      },
      { type: "p", text: "That shows up in three things:" },
      {
        type: "ul",
        items: [
          "Heart for the people and milestones behind each event",
          "Hustle in the planning, preparation, setup, and follow-through",
          "Fun in the experiences created for hosts and guests",
        ],
      },
      {
        type: "p",
        text: "That combination is why repeat clients rebook us for their next event instead of shopping around.",
      },
      { type: "h2", text: "Investing in quality from the beginning" },
      {
        type: "p",
        text: "We invested in real equipment early instead of the cheapest booth we could find, because a jammed printer or a laggy touchscreen is the fastest way to kill a good party.",
      },
      {
        type: "p",
        text: "For clients, that means less to manage on event day. We show up, set up the service area, walk guests through how it works, and handle the equipment ourselves — the host gets to actually be a guest at their own event.",
      },
      { type: "h2", text: "Growing one celebration at a time" },
      {
        type: "p",
        text: "Four years in, we've run more than 200 events.",
      },
      { type: "p", text: "That covers:" },
      {
        type: "ul",
        items: [
          "Weddings",
          "Birthdays",
          "Corporate events",
          "Baby showers",
          "Graduations",
          "Large events",
          "Other private and milestone celebrations",
        ],
      },
      {
        type: "p",
        text: "A wedding needs something that fits the reception, not a rowdy add-on. A corporate event usually wants branded content the marketing team can actually reuse. A birthday just wants people laughing in front of the camera. We read the room before we build the setup.",
      },
      { type: "h2", text: "Signature services with personality" },
      {
        type: "p",
        text: "Our two signature services are the 360 photo booth and the audio guestbook — both built for clients who want their Fort Washington event to feel like more than a rental drop-off.",
      },
      { type: "h3", text: "The 360 photo booth" },
      {
        type: "p",
        text: "The 360 photo booth gives guests an interactive way to celebrate. They step onto the platform while the camera captures a moving video from every angle.",
      },
      {
        type: "p",
        text: "It's become one of our most requested setups for Maryland weddings and milestone birthdays — the kind of clip guests actually screenshot and send to the group chat before they've even left the party.",
      },
      {
        type: "p",
        text: "The final clips make good keepsakes. Guests pose with friends, celebrate the guest of honor, or just enjoy a minute in front of the camera.",
      },
      {
        type: "p",
        text: "It's a strong fit for events built around energy and participation — an activity guests come back to all night, and real content the host gets to keep.",
      },
      { type: "h3", text: "The audio guestbook" },
      { type: "p", text: "The audio guestbook is a different kind of keepsake." },
      {
        type: "p",
        text: "Instead of writing a note, guests leave a recorded voice message — congratulations, a favorite memory, advice, whatever they'd actually say out loud.",
      },
      {
        type: "p",
        text: "Hearing an actual voice — a grandmother, an old friend, a coworker — lands differently than reading a card. It holds onto the day in a way handwriting can't.",
      },
      {
        type: "p",
        text: "Together, the two give people two different ways to remember an event: one through movement and energy, the other through sound.",
      },
      {
        type: "p",
        text: "We also build out glam booths, DC wedding photobooths, and Virginia selfie stations depending on what the event actually calls for.",
      },
      { type: "h2", text: "What makes Boss Chick Enterprises different" },
      {
        type: "p",
        text: "We don't just drop off a machine and leave you to figure it out. We ask what the event actually needs, recommend the right setup for it, and show up early enough that nothing feels rushed.",
      },
      {
        type: "p",
        text: "That's the whole differentiator: a team that already knows how to read a room, so the host gets to actually enjoy their own party instead of managing a vendor.",
      },
      {
        type: "p",
        text: "That's what heart, hustle, and fun looks like on an actual Saturday night: a booth line that doesn't stop, a guestbook full of real voices, and a host who got to enjoy her own party.",
      },
      { type: "h2", text: "The next chapter" },
      {
        type: "p",
        text: "From one mother-daughter idea to 200+ events later, we're still building this one celebration at a time.",
      },
      {
        type: "p",
        text: "The standard hasn't changed: real equipment, a setup that runs itself, and a team that treats your event like it matters — because it does.",
      },
      {
        type: "p",
        text: "Whether it's a wedding, a birthday, a corporate event, or a baby shower, we bring the same setup: 360 photo booths across Maryland, wedding photobooths in DC, selfie stations in Virginia, glam booths, and audio guestbooks — all run by the same Fort Washington-based team, every time.",
      },
      {
        type: "p",
        text: "Ready to book? Reach out and let's talk about your event.",
      },
    ],
  },
];
