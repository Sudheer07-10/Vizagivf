export const coreDoctors = [
  {
    id: 1,
    name: "Dr. B. Sireesha Rani",
    role: "Infertility Specialist, Obstetrician & Gynaecologist",
    credentials: "Founder - Vizag IVF, Medcy IVF & Medcy Hospitals",
    experience: "Leading Specialist",
    image: "/images/doctors/Sireesha Rani.jpg",
    location: "Visakhapatnam"
  },
  {
    id: 2,
    name: "Dr. Sudheshna Devi",
    role: "Obstetrician & Gynecologist, Laparoscopic surgeon and cosmetic gynecologist",
    credentials: "",
    experience: "Consultant",
    image: "/images/doctors/Sudheshna Devi.jpg",
    location: "Visakhapatnam"
  },
  {
    id: 3,
    name: "Dr. Mounica",
    role: "Consultant Fertility Specialist",
    credentials: "",
    experience: "Consultant",
    image: "/images/doctors/Mounica.jpg",
    location: "Visakhapatnam"
  }
];

export const defaultLocation = {
  id: 'visakhapatnam',
  name: "Main Branch (Visakhapatnam)",
  city: "Visakhapatnam",
  address: "Door No. 29-2-42/213 (and 29-2-4), opposite the Veterinary Hospital near the Judge Court, Nehru Nagar, Ram Nagar, Visakhapatnam - 530020",
  phone: "+91 87123 36290", // Kept from Footer default
  phones: ["+918712336290", "+919515605006"],
  email: "vizagivfcentre@gmail.com",
  doctors: []
};

export const locationsData = {
  '/visakhapatnam': {
    id: 'visakhapatnam',
    name: "Main Branch (Visakhapatnam)",
    city: "Visakhapatnam",
    address: "Door No. 29-2-42/213 (and 29-2-4), opposite the Veterinary Hospital near the Judge Court, Nehru Nagar, Ram Nagar, Visakhapatnam - 530020",
    phone: "+91 87123 36290",
    phones: ["+918712336290", "+919515605006"],
    email: "vizagivf@gmail.com",
    doctors: []
  },
  '/gajuwaka': {
    id: 'gajuwaka',
    name: "Gajuwaka Branch",
    city: "Gajuwaka",
    address: "10-1-128/9, 80 ft Road, Near Paradise Hotel,Mehar Nagar, Visakhapatnam - 530026",
    phone: "+91 809 600 8999",
    phones: ["+918096008999"],
    email: "vizagivf@gmail.com",
    doctors: [
      {
        id: 'gjwk-1',
        name: "Dr. Srujana Naidu",
        role: "Obstetrician & Gynecologist, Consultant Fertility Specialist",
        credentials: "",
        experience: "Consultant",
        image: "/images/doctors/Srujana Naiudu.jpg",
        location: "Gajuwaka"
      }
    ]
  },
  '/vizianagaram': {
    id: 'vizianagaram',
    name: "Vizianagaram Branch",
    city: "Vizianagaram",
    address: "Opp. More super market, 100 ft Ring Road, Ice Factory Junction, Vizianagaram 535002",
    phone: "+91 94949 86622",
    phones: ["+919494986622", "+919494986611"],
    email: "vizagivf@gmail.com",
    doctors: [
      {
        id: 'vzm-1',
        name: "Dr. Swarna Kumari",
        role: "Obstetrician & Gynecologist, Consultant Fertility Specialist",
        credentials: "",
        experience: "Consultant",
        image: "/images/doctors/SwarnaKumari.jpg",
        location: "Vizianagaram"
      }
    ]
  },
  '/srikakulam': {
    id: 'srikakulam',
    name: "Srikakulam Branch",
    city: "Srikakulam",
    address: "Day & Night Jn., Convent Road, New Bridge Road, Srikakulam-01",
    phone: "+91 77997 72221",
    phones: ["+917799772221", "+917799772223"],
    email: "vizagivf@gmail.com",
    doctors: [
      {
        id: 'sklm-1',
        name: "Dr. Mitra Vinda",
        role: "Obstetrician & Gynecologist, Consultant Fertility Specialist",
        credentials: "",
        experience: "Consultant",
        image: "/images/doctors/MitraVinda.jpg",
        location: "Srikakulam"
      }
    ]
  }
};

export const getCurrentLocation = (pathname) => {
  const normalizedPath = pathname.toLowerCase();
  
  // Find a matching location key in the URL (like /our-doctors/visakhapatnam)
  for (const [key, data] of Object.entries(locationsData)) {
    if (normalizedPath.includes(key)) {
      return data;
    }
  }
  
  // Default fallback if no specific location is found in URL
  return defaultLocation;
};
