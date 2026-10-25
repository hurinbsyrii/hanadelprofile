// All names, results, positions, and stories below are sample content.
// Replace these entries and the images in public/images with real information.
export const profile = {
  firstName: "Hana",
  lastName: "Delisha",
  name: "Hana Delisha",
  fullName: "Hana Delisha binti Nazri",
  initials: "HD",
  age: "15 years old",
  school: "Tunku Kurshiah Collage (TKC)",
  form: "Form 3",
  location: "Seremban, Negeri Sembilan",
  email: "hana.delisha@example.com",
  introduction: "A curious mind, a creative heart, and a little courage to try something new. Welcome to my collection of learning, making, and growing.",
  portrait: "/images/student-portrait.png",
  portraitAlt: "AI-generated sample portrait of a student in a green hijab holding books in a garden",
  github: "", // Add a complete GitHub profile URL when ready.
  linkedin: "", // Optional; leave blank to hide.
};

export const navigation = [
  ["home", "Home", "/"], ["about", "About me", "/about"],
  ["education", "Education", "/education"], ["achievements", "Achievements", "/achievements"],
  ["activities", "Activities", "/activities"], ["projects", "Projects", "/projects"],
  ["skills", "Skills", "/skills"], ["gallery", "Gallery", "/gallery"],
  ["contact", "Contact", "/contact"],
] as const;
export type Section = typeof navigation[number][0];

export const projects = [
  { id: "little-green", title: "The little green project", category: "STEM", year: "2025", kind: "plant", description: "A small idea for a greener tomorrow: a self-watering planter made with reused materials and a little bit of science.", tools: ["Recycled materials", "Moisture sensor", "Arduino"], outcome: "Built a working prototype and shared the process at the school science showcase.", role: "Research, prototype design & group presentation" },
  { id: "creative-journal", title: "A journal of small wonders", category: "Creative", year: "2025", kind: "journal", description: "An illustrated collection of everyday observations, original writing, and botanical sketches. A reminder to notice the little things.", tools: ["Canva", "Watercolour", "Creative writing"], outcome: "Created a 12-page digital journal combining original artwork and short reflections.", role: "Illustration, writing & editorial design" },
  { id: "study-space", title: "My first little website", category: "Digital", year: "2025", kind: "web", description: "A simple study companion with subject notes, useful resources, and a weekly revision planner.", tools: ["HTML", "CSS", "JavaScript"], outcome: "Made a responsive three-page website and learned to turn a sketch into a working page.", role: "Design, development & testing" },
  { id: "clean-water", title: "Clean water, clearer futures", category: "STEM", year: "2024", kind: "water", description: "A group experiment exploring how sand, gravel, and charcoal can filter cloudy water.", tools: ["Scientific method", "Reused bottles", "Google Slides"], outcome: "Compared three filter designs and presented observations with a visual experiment report.", role: "Experiment planning, observation & documentation" },
] as const;

export const awards = [
  { title: "Academic Excellence Award", category: "Academic", year: "2025", level: "School", achievement: "Outstanding progress across core subjects", issuer: "SMK Seri Bestari", description: "A sample recognition for consistent effort, curiosity, and academic progress." },
  { title: "Young Innovators Challenge", category: "STEM", year: "2025", level: "District", achievement: "Silver award · Team project", issuer: "District STEM Showcase", description: "A sample team achievement for the self-watering planter prototype." },
  { title: "Speak Your Mind", category: "Language", year: "2024", level: "School", achievement: "First place · Public speaking", issuer: "English Language Society", description: "A sample public speaking award for a speech about small acts of kindness." },
  { title: "NILAM Reading Recognition", category: "Academic", year: "2024", level: "School", achievement: "Gold reading recognition", issuer: "School Resource Centre", description: "A sample celebration of a growing reading habit in English and Bahasa Melayu." },
  { title: "Inter-house Badminton", category: "Sports", year: "2024", level: "School", achievement: "Runner-up · Girls’ doubles", issuer: "School Sports Unit", description: "A sample sports achievement celebrating teamwork and perseverance." },
];

export const activities = [
  { title: "STEM & Innovation Club", category: "Clubs", eyebrow: "Kelab & persatuan", position: "Committee member", year: "2025", description: "Helping plan Science Week, exploring new ideas with friends, and making room for a little experimentation.", responsibilities: "Prepare meeting notes, coordinate materials, and help younger members with their projects." },
  { title: "Girl Guides", category: "Uniformed bodies", eyebrow: "Badan beruniform", position: "Patrol leader", year: "2024–2025", description: "Learning to be prepared, look out for others, and find confidence beyond the classroom.", responsibilities: "Lead a small patrol, organise weekly activities, and support first-aid and camping practice." },
  { title: "School Badminton Team", category: "Sports", eyebrow: "Sukan & permainan", position: "Team member", year: "2024–2025", description: "Weekly practice, friendly matches, and the joy of getting a little better together.", responsibilities: "Attend training, support teammates, and represent the sports house at school level." },
  { title: "School Prefects Board", category: "Leadership", eyebrow: "Kepimpinan", position: "School prefect", year: "2025", description: "A chance to practise empathy, responsibility, and leadership in everyday moments.", responsibilities: "Assist at assemblies, welcome new students, and help teachers organise school events." },
  { title: "A Greener School", category: "Community", eyebrow: "Khidmat komuniti", position: "Student volunteer", year: "2025", description: "A gotong-royong morning spent planting herbs, tidying shared spaces, and setting up recycling corners.", responsibilities: "Help with planting, create recycling signs, and work with classmates to care for the garden." },
  { title: "Study Buddies", category: "Community", eyebrow: "Peer tutoring", position: "Peer mentor", year: "2025", description: "Sharing revision tips and helping classmates work through tricky Mathematics questions.", responsibilities: "Prepare practice questions and facilitate a weekly small-group revision session." },
];

export const gallery = [
  { title: "The science of small ideas", category: "Projects", kind: "plant", caption: "Sample project illustration · School science showcase, 2025" },
  { title: "Pages from my creative journal", category: "Creative", kind: "journal", caption: "Sample journal artwork · Creative portfolio, 2025" },
  { title: "A little time in the garden", category: "School life", kind: "portrait", caption: "AI-generated sample photograph · Replace with your own photo" },
  { title: "A moment worth celebrating", category: "Achievements", kind: "award", caption: "Sample award illustration · Academic recognition, 2025" },
  { title: "Making a digital study space", category: "Projects", kind: "web", caption: "Sample website illustration · Personal coding project, 2025" },
  { title: "Learning by experimenting", category: "School life", kind: "water", caption: "Sample experiment illustration · Science assignment, 2024" },
];

export const certificates = [
  { title: "Academic excellence", type: "Academic", year: "2025" },
  { title: "Young innovators", type: "Competition", year: "2025" },
  { title: "Student leadership", type: "Leadership", year: "2025" },
  { title: "Introduction to coding", type: "Online course", year: "2024" },
  { title: "Creative design workshop", type: "Workshop", year: "2024" },
  { title: "Community garden day", type: "Volunteering", year: "2025" },
];
