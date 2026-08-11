export const coreDoctors = [
  {
    id: 1,
    name: "Dr. B. Sireesha Rani",
    role: "Infertility Specialist, Obstetrician & Gynaecologist",
    credentials: "DNB (Ob & Gyn), Diploma in Reproductive Medicine (Germany)",
    experience: "Leading Specialist",
    image: "/wp-content/uploads/2023/08/Dr-B-Sireesha-Rani.png",
    location: "Visakhapatnam"
  },
  {
    id: 2,
    name: "Dr. Ramesh Baipalli",
    role: "Surgical Gastroenterologist",
    credentials: "M.S. (Gen. Surg), PDCC",
    experience: "Senior Consultant",
    image: "/wp-content/uploads/2023/08/Dr-Ramesh-Baipalli.png",
    location: "Visakhapatnam"
  },
  {
    id: 3,
    name: "Dr. Pavani Sathineedi",
    role: "Obstetrician & Gynaecologist",
    credentials: "MS OBG, FMAS, FRM",
    experience: "Consultant",
    image: "/wp-content/uploads/2023/08/Female-Doctor-Icon.png",
    location: "Visakhapatnam"
  },
  {
    id: 4,
    name: "Dr. Sravya Naramchetti",
    role: "Obstetrician & Gynaecologist",
    credentials: "MBBS, MS OBGY",
    experience: "Consultant",
    image: "/wp-content/uploads/2023/08/Female-Doctor-Icon.png",
    location: "Visakhapatnam"
  }
];

export const defaultLocation = {
  id: 'visakhapatnam',
  name: "Main Branch (Visakhapatnam)",
  city: "Visakhapatnam",
  address: "# 11-4-8/11/2, Flat No: 2, KGH Down Road, Maharanipeta, Visakhapatnam - 530002",
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
    address: "29-2-4, 1st floor, Opp: Veterinary Hospital, Near Judge Court, Visakhapatnam -530022",
    phone: "+91 87123 36290",
    phones: ["+918712336290", "+919515605006"],
    email: "vizagivf@gmail.com",
    doctors: []
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
        name: "Dr. Swarna Kumari Konchada",
        role: "Fertility Specialist",
        credentials: "MBBS, MS (Ob & Gyn), FRM, FMAS",
        experience: "Consultant",
        image: "/wp-content/uploads/2023/08/dr-vizianagaram.jpeg",
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
        name: "Dr. Vayilapalli Mitra Vinda",
        role: "Consultant Obstetrician & Gynecologist, Infertility Specialist",
        credentials: "MBBS, DGO(KGH), FRM",
        experience: "Consultant",
        image: "/wp-content/uploads/2023/08/dr-srikakulam.jpeg",
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
