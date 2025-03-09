import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const doctors = [
  {
    "name": "Dr. Aditi Sharma",
    "email": "aditi.sharma@example.com",
    "phone": "+919876543210",
    "city": "Bangalore",
    "field": "General Medicine",
    "password": "hashed_password_1",
    "fees": 500,
    "experience": 15,
    "rating": 4.8,
    "reviews": ["Very professional!", "Highly recommended!", "Best doctor in town!"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Rajesh Mehta",
    "email": "rajesh.mehta@example.com",
    "phone": "+918765432109",
    "city": "Mumbai",
    "field": "Internal Medicine",
    "password": "hashed_password_2",
    "fees": 800,
    "experience": 20,
    "rating": 4.7,
    "reviews": ["Expert in diagnosis", "Very kind and understanding", "Explains everything in detail"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Sunita Kapoor",
    "email": "sunita.kapoor@example.com",
    "phone": "+919876512345",
    "city": "Delhi",
    "field": "Family Medicine",
    "password": "hashed_password_3",
    "fees": 600,
    "experience": 12,
    "rating": 4.5,
    "reviews": ["Friendly doctor", "Takes time to listen", "Prescribes effective treatment"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Arvind Sinha",
    "email": "arvind.sinha@example.com",
    "phone": "+918912345678",
    "city": "Hyderabad",
    "field": "Cardiology",
    "password": "hashed_password_4",
    "fees": 1200,
    "experience": 18,
    "rating": 4.9,
    "reviews": ["Best cardiologist!", "Very knowledgeable", "Great experience"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Anjali Verma",
    "email": "anjali.verma@example.com",
    "phone": "+919834567890",
    "city": "Chennai",
    "field": "Neurology",
    "password": "hashed_password_5",
    "fees": 1000,
    "experience": 17,
    "rating": 4.6,
    "reviews": ["Very helpful", "Explained my condition well", "Excellent doctor"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Mohan Reddy",
    "email": "mohan.reddy@example.com",
    "phone": "+917856341209",
    "city": "Pune",
    "field": "Orthopedic Surgery",
    "password": "hashed_password_6",
    "fees": 1500,
    "experience": 22,
    "rating": 4.7,
    "reviews": ["Very skilled surgeon", "Helped me recover quickly", "Highly experienced"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Sneha Malhotra",
    "email": "sneha.malhotra@example.com",
    "phone": "+918902345612",
    "city": "Kolkata",
    "field": "Dermatology",
    "password": "hashed_password_7",
    "fees": 700,
    "experience": 10,
    "rating": 4.4,
    "reviews": ["Great for skin treatments", "Helped with my acne", "Very professional"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Vikram Joshi",
    "email": "vikram.joshi@example.com",
    "phone": "+919812345678",
    "city": "Jaipur",
    "field": "Psychiatry",
    "password": "hashed_password_8",
    "fees": 900,
    "experience": 14,
    "rating": 4.8,
    "reviews": ["Very understanding", "Helped with my anxiety", "Best psychiatrist"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Neha Chawla",
    "email": "neha.chawla@example.com",
    "phone": "+917623456789",
    "city": "Ahmedabad",
    "field": "Pediatrics",
    "password": "hashed_password_9",
    "fees": 500,
    "experience": 9,
    "rating": 4.3,
    "reviews": ["Great with kids", "Very caring", "Explains everything well"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Ankur Tiwari",
    "email": "ankur.tiwari@example.com",
    "phone": "+919754321987",
    "city": "Surat",
    "field": "Urology",
    "password": "hashed_password_10",
    "fees": 1300,
    "experience": 16,
    "rating": 4.7,
    "reviews": ["Best urologist", "Professional and skilled", "Highly recommended"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Radhika Nair",
    "email": "radhika.nair@example.com",
    "phone": "+919812365478",
    "city": "Lucknow",
    "field": "Obstetrics & Gynecology (OB-GYN)",
    "password": "hashed_password_11",
    "fees": 1000,
    "experience": 15,
    "rating": 4.8,
    "reviews": ["Very supportive", "Listens carefully", "Best gynecologist"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Karthik Reddy",
    "email": "karthik.reddy@example.com",
    "phone": "+918752369874",
    "city": "Chandigarh",
    "field": "Gastroenterology",
    "password": "hashed_password_12",
    "fees": 1100,
    "experience": 13,
    "rating": 4.6,
    "reviews": ["Best for stomach issues", "Expert in gastroenterology", "Very professional"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Pranav Kapoor",
    "email": "pranav.kapoor@example.com",
    "phone": "+918923567841",
    "city": "Nagpur",
    "field": "Pulmonology",
    "password": "hashed_password_13",
    "fees": 950,
    "experience": 12,
    "rating": 4.5,
    "reviews": ["Great for respiratory issues", "Very knowledgeable", "Highly recommended"],
    "image": "https://via.placeholder.com/100"
  },
  {
    "name": "Dr. Sanjana Patel",
    "email": "sanjana.patel@example.com",
    "phone": "+919756432189",
    "city": "Indore",
    "field": "Ophthalmology",
    "password": "hashed_password_14",
    "fees": 700,
    "experience": 8,
    "rating": 4.4,
    "reviews": ["Best eye specialist", "Explains treatment well", "Very kind and skilled"],
    "image": "https://via.placeholder.com/100"
  },
  { "name": "Dr. Amit Verma", "email": "amit.verma@example.com",
    "phone": "+919876543211",
    "city": "Hyderabad",
    "field": "Cardiology",
    "password": "hashed_password_4",
    "fees": 1200,
    "experience": 18,
    "rating": 4.9,
    "reviews": ["Excellent cardiologist!", "Very knowledgeable", "Highly professional"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Sneha Nair",
    "email": "sneha.nair@example.com",
    "phone": "+918765432110",
    "city": "Kolkata",
    "field": "Neurology",
    "password": "hashed_password_5",
    "fees": 900,
    "experience": 14,
    "rating": 4.7,
    "reviews": ["Best neurologist!", "Takes time to explain", "Very patient and understanding"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Manish Gupta",
    "email": "manish.gupta@example.com",
    "phone": "+919876512346",
    "city": "Chennai",
    "field": "General Surgery",
    "password": "hashed_password_6",
    "fees": 1500,
    "experience": 22,
    "rating": 4.8,
    "reviews": ["Highly skilled surgeon", "Professional and caring", "Explains procedures clearly"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Priya Iyer",
    "email": "priya.iyer@example.com",
    "phone": "+919812345678",
    "city": "Pune",
    "field": "Gynecology",
    "password": "hashed_password_7",
    "fees": 700,
    "experience": 10,
    "rating": 4.6,
    "reviews": ["Excellent OB-GYN", "Friendly and professional", "Great at explaining health issues"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Karthik Reddy",
    "email": "karthik.reddy@example.com",
    "phone": "+918765432111",
    "city": "Bangalore",
    "field": "Orthopedics",
    "password": "hashed_password_8",
    "fees": 1100,
    "experience": 16,
    "rating": 4.7,
    "reviews": ["Top orthopedic doctor", "Great experience", "Highly recommended for joint issues"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Ruchi Sharma",
    "email": "ruchi.sharma@example.com",
    "phone": "+919832145678",
    "city": "Delhi",
    "field": "Pediatrics",
    "password": "hashed_password_9",
    "fees": 600,
    "experience": 9,
    "rating": 4.5,
    "reviews": ["Great with kids!", "Very patient and kind", "Understands children well"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Sandeep Joshi",
    "email": "sandeep.joshi@example.com",
    "phone": "+918765432112",
    "city": "Mumbai",
    "field": "Dermatology",
    "password": "hashed_password_10",
    "fees": 750,
    "experience": 12,
    "rating": 4.6,
    "reviews": ["Best dermatologist in town!", "Effective treatments", "Very knowledgeable"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Ananya Mishra",
    "email": "ananya.mishra@example.com",
    "phone": "+919876543214",
    "city": "Jaipur",
    "field": "Endocrinology",
    "password": "hashed_password_11",
    "fees": 950,
    "experience": 17,
    "rating": 4.8,
    "reviews": ["Expert in thyroid disorders", "Very professional", "Takes time to explain"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Rahul Desai",
    "email": "rahul.desai@example.com",
    "phone": "+919876543215",
    "city": "Ahmedabad",
    "field": "Nephrology",
    "password": "hashed_password_12",
    "fees": 1300,
    "experience": 19,
    "rating": 4.9,
    "reviews": ["Best kidney specialist!", "Highly recommended", "Very experienced doctor"],
    "image": "https://via.placeholder.com/100"
    },
    {
    "name": "Dr. Meenal Kapoor",
    "email": "meenal.kapoor@example.com",
    "phone": "+918765432113",
    "city": "Chandigarh",
    "field": "Psychiatry",
    "password": "hashed_password_13",
    "fees": 850,
    "experience": 13,
    "rating": 4.7,
    "reviews": ["Great psychiatrist", "Very understanding", "Effective counseling sessions"],
    "image": "https://via.placeholder.com/100" } 
]


    await prisma.doctor.createMany({
        data: doctors,
        skipDuplicates: true, // Avoid inserting duplicates
    });

    console.log("✅ Doctors added successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
