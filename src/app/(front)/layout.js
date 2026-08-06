export const metadata = {
  title: "Webpoka | A Software Development Agency",
  description:
    "Webpoka is a software development agency specializing in modern web applications, mobile apps, UI/UX design, and custom digital solutions that help businesses grow.",
};

export default function FrontLayout({ children }) {
  return <body className="min-h-full flex flex-col">{children}</body>;
}
