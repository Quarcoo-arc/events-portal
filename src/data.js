import event1 from "./assets/image/event1.jpg";
import event2 from "./assets/image/event2.jpg";
import event3 from "./assets/image/event3.jpg";
import event4 from "./assets/image/event4.jpg";
import event5 from "./assets/image/event5.jpg";
import event6 from "./assets/image/event6.jpg";
import event7 from "./assets/image/event7.jpg";
import event8 from "./assets/image/event8.jpg";

const events = [
  {
    id: 1,
    type: "Upcoming", // Upcoming, Seminar, Outreach, Virtual
    location: "Geranium, Copenhagen",
    image: event1,
    attending: 212,
    date: "Friday, October 24",
    startTime: "3:00PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    duration: 45,
    hashTags: ["BlackInclusionInTech", "BridgingTheGap"],
  },
  {
    id: 2,
    type: "Seminar", // Upcoming, Seminar, Outreach, Virtual
    location: "Microsoft Theatre, Carlifonia",
    image: event2,
    attending: 5000,
    date: "Tuesday, September 21",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    startTime: "10:00AM",
    duration: 240,
    hashTags: ["PyCon23", "PythonToTheModernAge"],
  },
  {
    id: 3,
    type: "Outreach", // Upcoming, Seminar, Outreach, Virtual
    location: "Accra International Conference Centre",
    image: event3,
    attending: 2580,
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    date: "Saturday, March 21",
    startTime: "4:00PM",
    duration: 120,
    hashTags: ["GenderEquality", "FemaleEmpowerment"],
  },
  {
    id: 4,
    type: "Virtual", // Upcoming, Seminar, Outreach, Virtual
    location: "Google Meet",
    image: event4,
    attending: 545,
    date: "Saturday, February 18",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
    startTime: "3:00PM",
    duration: 75,
    hashTags: ["TheJobMarket", "YouthEmpowerment"],
  },
  {
    id: 5,
    type: "Seminar", // Upcoming, Seminar, Outreach, Virtual
    location: "University of Ghana",
    image: event5,
    attending: 493,
    date: "Saturday, January 18",
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",
    startTime: "10:00AM",
    duration: 90,
    hashTags: ["Enterprenuership", "JobCreation23"],
  },
  {
    id: 6,
    type: "Outreach", // Upcoming, Seminar, Outreach, Virtual
    location: "Accra Sports Stadium",
    image: event6,
    attending: 2004,
    description:
      "But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    date: "Saturday, January 18",
    startTime: "8:00PM",
    duration: 360,
    hashTags: ["JesusSaves", "PowerToRedeem"],
  },
  {
    id: 7,
    type: "Upcoming", // Upcoming, Seminar, Outreach, Virtual
    location: "Golden Tulip Hotel",
    image: event7,
    attending: 850,
    date: "Saturday, February 26",
    description:
      "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    startTime: "5:00PM",
    duration: 180,
    hashTags: ["TheGhanaianEconomy", "FinancialLiberation"],
  },
  {
    id: 8,
    type: "Virtual", // Upcoming, Seminar, Outreach, Virtual
    location: "Zoom",
    image: event8,
    attending: 379,
    date: "Saturday, February 18",
    description:
      "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
    startTime: "3:00PM",
    duration: 90,
    hashTags: ["EndGalamseyNow", "SaveOurWaterBodies"],
  },
];

export default events;
