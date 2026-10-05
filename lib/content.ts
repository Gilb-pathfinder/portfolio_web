// Central content store. Facts here (projects, experience, testimonials, stats)
// reflect what Gilbert has already published about himself — presentation is
// redesigned, but names, quotes and figures are not invented.

export const site = {
  name: "Gilbert Mugisha",
  role: "Software Developer",
  roleSecondary: "UI/UX Designer & Graphic Designer",
  location: "Rwanda",
  address: "Kigali, Rwanda",
  email: "mugishagillbert@gmail.com",
  phone: "+250 787 740 109",
  whatsapp: "250787740109",
  social: {
    github: "https://github.com/Gilb-pathfinder",
    linkedin: "https://www.linkedin.com/in/mugisha-gilbert-b32517407/",
    instagram: "https://www.instagram.com/mugisha_mg?stkn=enI5eTg3N3V0NmMz",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const roles = [
  "SOFTWARE DEVELOPER",
  "UI/UX DESIGNER",
  "GRAPHIC DESIGNER",
];

// Home page copy — mirrors the structure of the original home design
// (hero, about, expertise, projects, experience, feedback, CTA), wording
// tightened for a more professional, minimal read.
export const hero = {
  greeting: "Hello, I'm Gilbert — a",
  role: "Software Developer",
  description:
    "A Software Developer, UI/UX Designer and Graphic Designer who builds digital products that look considered and work reliably.",
};

export const heroStats = [
  { value: "3+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "230", label: "Projects Done" },
];

export const heroRating = { label: "5-star ratings, 2k+ reviews" };

export const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "Firebase",
  "PostgreSQL",
  "Figma",
  "Python",
];

export const homeAbout = {
  badge: "3+ Years of Experience",
  bio: [
    "I'm Gilbert Mugisha, a software developer, UI/UX designer and graphic designer. My work spans full-stack development, interface design and visual branding — built around solving real problems with thoughtful design and reliable engineering.",
    "Good digital products should look exceptional, feel intuitive and hold up in real use. That's the standard I hold every project to, for individuals and businesses alike.",
  ],
};

export type HomeExpertiseItem = {
  index: string;
  title: string;
  tagline: string;
  tools: string[];
};

// Software Development leads everywhere on the site — it's the primary
// identity, with UI/UX and Graphic Design as the design skills that set
// that software work apart.
export const homeExpertise: HomeExpertiseItem[] = [
  {
    index: "01",
    title: "Software Development",
    tagline: "A simple, results-driven process for bringing your vision to life.",
    tools: ["JavaScript", "React.js", "Next.js", "Python", "AI Integration"],
  },
  {
    index: "02",
    title: "UI/UX Design",
    tagline: "A simple, results-driven process for bringing your vision to life.",
    tools: ["Figma", "Canva", "Adobe XD"],
  },
  {
    index: "03",
    title: "Graphic Design",
    tagline: "A simple, results-driven process for bringing your vision to life.",
    tools: ["Photoshop", "Illustrator", "InDesign"],
  },
];

export const homeCopy = {
  expertiseBadge: "My Expertise",
  expertiseHeading: "I build solutions — but first, I identify the problem.",
  projectsBadge: "Projects Delivered",
  projectsHeading: "Creative ideas, digital execution.",
  experienceHeading: "My Experiences",
  experienceBody:
    "I've had the pleasure of working with companies across a range of industries, and I'm always open to new, challenging work.",
  feedbackHeading: "Hear what they say about me?",
  feedbackBody: "Feedback from the people and teams I've worked with.",
  ctaHeading: "Ready to collaborate with me?",
  ctaBody:
    "Whether you need a software developer, a designer, or both — let's get it done.",
};

export type ProjectGroup = "software" | "uiux" | "graphic";

export type Project = {
  id: string;
  title: string;
  category: string;
  group: ProjectGroup;
  year: string;
  role: string;
  description: string;
  tech: string[];
  links?: { live?: string; github?: string };
  // real screenshots — card (small, used in grids/carousels) and full
  // (used on the project's own page). Projects without these fall back to
  // an abstract placeholder rather than a fake screenshot.
  image?: { card: string; full: string };
};

export const projects: Project[] = [
  {
    id: "cityride",
    title: "CityRide",
    category: "Mobile Application",
    group: "software",
    year: "2025",
    role: "Software Developer",
    description:
      "A ride-hailing app that locates the nearest available rider from a user's current location in real time.",
    tech: ["React.js", "Next.js", "PostgreSQL", "Flutter"],
    links: { live: "https://cityride-five.vercel.app/" },
    image: {
      card: "/images/projects/cityride_card.png",
      full: "/images/projects/cityride.png",
    },
  },
  {
    id: "bugufidigital",
    title: "Bugufi Digital",
    category: "Software / Web Application",
    group: "software",
    year: "2026",
    role: "Founder & Developer",
    description:
      "The website for Bugufi Digital, my own creative and software agency based in Kigali — built bilingual in English and French.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: { live: "https://bugufidigital.vercel.app" },
    image: {
      card: "/images/projects/bugufidigital_card.png",
      full: "/images/projects/bugufidigital.png",
    },
  },
  {
    id: "bugufi-marketplace",
    title: "Bugufi Marketplace",
    category: "Software / Web Application",
    group: "software",
    year: "2026",
    role: "Founder & Developer",
    description:
      "A digital marketplace connecting wholesalers, retailers and makers across Rwanda with buyers, built under Bugufi Digital.",
    tech: ["Next.js", "TypeScript"],
    links: { live: "https://bugufi-three.vercel.app/" },
    image: {
      card: "/images/projects/bugufi_marketplace card.png",
      full: "/images/projects/bugufi marketplace.png",
    },
  },
  {
    id: "esano",
    title: "Esano AI Genealogy Explorer",
    category: "Software / Web Application",
    group: "software",
    year: "2025",
    role: "Software Developer",
    description:
      "A platform built for families to organise, explore and manage their family members and lineage.",
    tech: ["React.js", "Next.js", "Firebase", "Vercel"],
    image: {
      card: "/images/projects/Esano Card.png",
      full: "/images/projects/Esano AI Geneology explorer.png",
    },
  },
];

export type GraphicItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year?: string;
  media: { kind: "image" | "video"; src: string; poster?: string };
};

// Graphic design work. Add more here: image entries use a jpg/png, video
// entries use an mp4 (optionally with a poster frame).
export const graphicProjects: GraphicItem[] = [
  {
    id: "bugufi-flyer",
    title: "Digital Marketing Flyer",
    description:
      "A flyer for Bugufi Digital's digital marketing agency, listing its services and the channels clients can reach it on.",
    tags: ["Print", "Flyer"],
    media: { kind: "image", src: "/images/projects/graphic Design/posterr_mock.jpg" },
  },
  {
    id: "bugufi-campaign-poster",
    title: "Brand Campaign Poster",
    description:
      "A campaign poster for Bugufi Digital, shown on an outdoor bus-stop display with a CityRide creative.",
    tags: ["Print", "Campaign"],
    media: { kind: "image", src: "/images/projects/graphic Design/posterr_mock1.jpg" },
  },
];

export type Expertise = {
  index: string;
  title: string;
  description: string;
  tools: string[];
};

export const expertise: Expertise[] = [
  {
    index: "01",
    title: "Software Development",
    description:
      "Building full-stack, database-driven applications with a modern JavaScript stack — from API to interface.",
    tools: ["JavaScript", "React", "Next.js", "Python", "AI Integration"],
  },
  {
    index: "02",
    title: "UI/UX Design",
    description:
      "Designing interfaces and flows that hold up under real use, from wireframe through to interactive prototype.",
    tools: ["Figma", "Canva", "Adobe XD"],
  },
  {
    index: "03",
    title: "Graphic Design",
    description:
      "Visual identity and communication work — the design instinct that carries into every interface I build.",
    tools: ["Photoshop", "Illustrator", "InDesign"],
  },
];

export const about = {
  bio: [
    "I'm Gilbert, a software developer, UI/UX designer, and graphic designer working across product, interface and visual design. My focus is building applications with React, Next.js and modern JavaScript tooling, but I approach every build with the same question a designer would ask first: who is this for, and what does it need to do well?",
    "That combination is what I bring to a team or a client that a typical developer or a typical designer working alone can't: code that's structured well, and interfaces that were considered before they were built.",
  ],
};

export const faqs = [
  {
    q: "What do you actually do?",
    a: "I'm a software developer — I build full-stack applications with JavaScript, React and Next.js. I also design, so the interfaces I ship are considered, not just functional.",
  },
  {
    q: "What technologies do you work with?",
    a: `Mainly ${techStack.slice(0, 5).join(", ")} — plus ${techStack.slice(5).join(", ")} depending on the project.`,
  },
  {
    q: "Do you take on freelance or contract work?",
    a: "Yes. I'm open to freelance projects and contract work — message me on WhatsApp or email with a short brief and I'll get back to you.",
  },
  {
    q: "Where are you based?",
    a: "Kigali, Rwanda. I work remotely with clients anywhere.",
  },
];

export const approach = [
  "Start from the problem, not the interface — most of the design and engineering decisions on a project fall out naturally once the problem is actually understood.",
  "Build in a way that a designer would recognise as considered and a developer would recognise as sound. Neither should be sacrificed for the other.",
  "Ship in small, working increments rather than holding everything for one large release.",
];

export type EducationEntry = {
  period: string;
  title: string;
  institution: string;
};

export const education: EducationEntry[] = [
  {
    period: "Current",
    title: "Bachelor of Technology in Information Technology (IT)",
    institution: "Tumba College of Technology (RP Tumba College), Rulindo, Rwanda",
  },
  {
    period: "Completed",
    title: "Software Development",
    institution: "College APPEC Remera-Rukoma, Rwanda",
  },
];

export type CertificateEntry = {
  title: string;
  issuer: string;
  date?: string;
  image: string;
};

export const certificates: CertificateEntry[] = [
  {
    title: "UI/UX – Advanced",
    issuer: "Digital Talent Program · Ministry of ICT and Innovation, Rwanda · IHS",
    date: "June 2026",
    image: "/images/projects/certificates/UIUX Design Certificate.png",
  },
  {
    title: "Unlock Freelance Training Program",
    issuer: "Code and Design Alliance · in collaboration with Luxembourg Aid & Development and the ILO",
    image: "/images/projects/certificates/Code and Design Alliance unlock freelance certificate.png",
  },
  {
    title: "Climate Leadership for Community Action",
    issuer: "Digital Opportunity Trust · in partnership with Cisco Foundation",
    date: "June 2026",
    image: "/images/projects/certificates/climate leadership certificate.png",
  },
];

export const contact = {
  heading: "Have a project in mind?",
  subheading: "Let's build something worth shipping.",
  projectTypes: [
    "Web Application",
    "Mobile App",
    "UI/UX Design",
    "Brand / Graphic Design",
    "Other",
  ],
  budgets: ["Free Consultation", "< $500", "$500 – $2k", "$2k+"],
};

export type ExperienceEntry = {
  period: string;
  role: string;
  organisation: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    period: "Jan 2026 — Now",
    role: "Graphic Designer & Social Media Manager",
    organisation: "Gonaraza.com",
    description:
      "Working with companies across a variety of industries, staying open to new and challenging work.",
  },
  {
    period: "Jul 2026 — Sep 2026",
    role: "Graphic Designer & Social Media Manager",
    organisation: "Global Design",
    description:
      "Working with companies across a variety of industries, staying open to new and challenging work.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Gilbert was an absolute pleasure. His creativity and attention to detail transformed our brand into something visually stunning, and it increased trust with our audience.",
    name: "Fabrice Nshimyimana",
    title: "Customer",
  },
  {
    quote:
      "Having Gilbert as a designer in my company was a great pleasure — he showed a high level of design skill and creativity that boosted our professional visibility.",
    name: "Jean Claude Sugira",
    title: "Employer",
  },
  {
    quote:
      "We've had the pleasure of working with Gilbert on multiple projects, and he consistently impresses us with his design skills.",
    name: "Emmanuel Nshimyimana",
    title: "Employer",
  },
];
