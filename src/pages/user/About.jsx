import React from "react";

const sections = [
  {
    title: "About Us",
    content: [
      `At Chitramcinema, the online video streaming platform, we believe that for entertainment to come alive, you need to feel it.`,
      `That’s where Chitramcinema brings in the comfort of your language! With features across original films, lifestyle shows, children’s programs, exclusive web series, and acclaimed plays — it's unlimited entertainment in the language that feels like home.`,
    ],
  },
  {
    title: "WATCH 100% WEB SERIES & POLITICAL SERIES PLATFORM",
    content: [
      `Chitramcinema is your own regional streaming service owned by Kishkinda Entertainment. Discover shows, movies, and more to create memorable moments.`,
    ],
  },
  {
    title: "Stories for Everyone",
    content: [
      `With stories from different worlds, in genres ranging from thrillers, mystery and crime to drama, comedy and romance; Chitramcinema has shown for everyone, from college going youngsters to professionals with families.`,
      `You can watch Chitramcinema on Mobile phones, Tablet, Desktops, smart TVs, and other Streaming gadgets, anywhere, anytime at your command.`,
    ],
  },
  {
    title: "Multi-Language & Diverse Content",
    content: [
      `Chitramcinema offers an exhaustive array of content; with  live TV channels and web series content across the languages of English, Hindi, Malayalam, Tamil, Telugu, Kannada etc., making it a complete video destination for viewers. Our exhaustive selection of Multi language movies makes us the preferred destination for an avid cinema connoisseur.`,
      `Our diverse movie library makes us the preferred choice for every cinema lover.`,
    ],
  },
  {
    title: "User-Friendly Experience",
    content: [
      `Using a series of logical algorithms and human creation, users at any stage of their interaction with Chitramcinema will discover content and see their experience evolve with their interaction patterns over time. Content composition on Chitramcinema is a result of a solicitous user experience approach and strong design principles that ensure that the user is not overwhelmed with the breadth of content available.`,
      `We offer a comfortable and friendly user experience with highly evolved video streaming technology at amazing speed and crystal clear sounds. Language Navigation, Seamless Video playback, Smart Content Search & recommendation, option to choose video quality and much more create a video experience like no other. All you need is a compatible connected device. Tune into Chitramcinema now, in your language!`,
      `All you need is a connected device to enjoy Chitramcinema — in your language.`,
    ],
  },
  {
    title: "Personalization",
    content: [
      `We know your taste, that’s why we give you personalized language & content recommendations. We also have Family Profile & Parental control to give power to you to set preferences as you like.`,
    ],
  },
  {
    title: "Access Platform",
    content: [
      <>
        Visit us at{" "}
        <a
          href="https://chitramcinema.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://chitramcinema.com
        </a>{" "}
        or download our app from the{" "}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Google Play Store
        </a>{" "}
        to access Chitramcinema on mobile, tablet, laptop, or desktop.
      </>,
    ],
  },
];

const Section = ({ title, content }) => (
  <>
    <p className={`font-bold text-xl ${title === "About Us" ? "text-center" : ""}`}>
      {title}
    </p>
    {content.map((text, i) => (
      <p key={i}>{text}</p>
    ))}
  </>
);

const AboutUs = () => {
  return (
    <div className="px-20 pt-10 pb-10">
      <div className="space-y-4 text-justify">
        {sections.map((section, idx) => (
          <Section key={idx} title={section.title} content={section.content} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
