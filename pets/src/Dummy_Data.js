import clinic1 from './image/clinic1.png'
import clinic2 from './image/clinic2.png'
import groomer1 from './image/groomer1.png'
import groomer2 from './image/groomer2.png'
import trainer1 from './image/trainer1.png'
import trainer2 from './image/trainer2.png'
import pb1 from './image/pb1.png'
import pb2 from './image/pb2.png'
export const DUMMY_DATA = [
  {
    id: "1",
    heading: "Top Dog Clinic",
    title: "Dr. Vikram M Niratle",
    rating: 4,
    date: "4/5/23",
    category: "vet",
    imageSrc: clinic1,
    alt: "Top dog clinic",
    description:"Pet stores are offering a wide range of services for their clients. Some pet shops allow browsing of all pets, while some offer support and education in care and training.",
    reviews:"140",
    recommendedFor : [
      "Clean up", "immunology", "parasitology", "Surgery"
    ],
    distance : 1.4,
    location:"Thane"
  },
  {
    id: "2",
    heading: "Top Dog Clinic",
    title: "Pet Animal Clinic",
    rating: 3.5,
    date: "5/6/23",
    category: "vet",
    imageSrc: clinic2,
    alt: "Pet animal clinic",
    description:"we focus on holistic health care along with conventional and complementary therapiess",
    reviews:"140",
    recommendedFor : [
      "General Check up", "Major and Minor Surgery", "Veterinary Physician", "Veterinary Consultation"
    ],
    distance : 2.8,
    location:"Mumbai"
  },
  {
    id: "3",
    heading: "Top Groomers",
    title: "The Cuddle Tub",
    rating: 3,
    date: "11/12/23",
    category: "groomers",
    imageSrc: groomer1,
    alt: "The cuddle tub",
    description:"Pet Food Available Pets Available We Buy Pets, Dogs, Cats, Rabbits, Fishes, Turtles, Birds, Hamsters, Guinea Pigs Pet Grooming Deworming Pet Food Grooming Pet Care Pet Shop.",
    reviews:"165",
    recommendedFor : [
      "Pet Grooming", "Pet Care", "Pet Foods"
    ],
    distance : 3.4,
    location:"Mumbai"
  },
  {
    id: "4",
    heading: "Top Groomers",
    title: "The Happy Tails",
    rating: 4.5,
    date: "11/12/23",
    category: "groomers",
    imageSrc: groomer2,
    alt: "The happy tails",
    description: "The Happy Tails Come pamper your best friend at our relaxing and friendly Pet Grooming salon",
    reviews:"173",
    recommendedFor : [
      "Pet Accessories", "Pet Care", "Pet Food", "Pet Grooming"
    ],
    distance : 2,
    location:"Matunga"
  },
  {
    id: "5",
    heading: "Top Trainers",
    title: "Happy Paws",
    rating: 5,
    date: "11/12/23",
    category: "trainers",
    imageSrc: trainer1,
    alt: "Happy paws",
    description:`I am a animal lover and I love them as they are the best friends of human
    I have a Great Dane who is more than just my pet but my kid.
    He has made me realise how the world can be a perfect place to `,
    reviews:"152",
    recommendedFor : [
      "Pet Boarding", "Pet Grooming"
    ],
    distance : 4.2,
    location:"Vasai"
  },
  {
    id: "6",
    heading: "Top Trainers",
    title: "The Royal Force K9 Training Center",
    rating: 3,
    date: "11/12/23",
    category: "trainers",
    imageSrc: trainer2,
    alt: "The royal force k9 training center",
    description : "A professional Dog Walker with three years of experience in animal care services, specializing in pet care, client relations, pet grooming, and animal safety. A strong history of delivering compassion",
    reviews:"167",
    recommendedFor : [
      "Clean up", "immunology", "parasitology", "Surgery"
    ],
    distance : 3.2,
    location:"Malad"
  },
  {
    id: "7",
    heading: "Top pet boardings",
    title: "Precious Pets",
    rating: 4,
    date: "11/12/23",
    category: "boarders",
    imageSrc: pb1,
    alt: "Precious pets",
    description:"Precious Pets provides the highest quality pet equipment the market has to offer. Fell comfortable to take your companion wherever you desire hassle-free with our simple, easy to use products.",
    reviews:"104",
    recommendedFor : [
      "Clean up", "immunology", "parasitology", "Surgery"
    ],
    distance : 4.6,
    location:"Andheri"
  },
  {
    id: "8",
    heading: "Top pet boardings",
    title: "Furry Cuddles",
    rating: 4,
    date: "11/12/23",
    category: "boarders",
    imageSrc: pb2,
    alt: "Furry cuddles",
    description:"If you have an athletic or active dog, we are the hosts for you!!! Trips to parks (on and off leash), running the trails, and swimming in a Lake will happen every day. If your dog is less active.",
    reviews:"120",
    recommendedFor : [
      "Clean up", "immunology", "parasitology", "Surgery"
    ],
    distance : 5,
    location:"Chembur"
  },
];