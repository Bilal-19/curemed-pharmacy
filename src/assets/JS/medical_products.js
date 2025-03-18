
const medicalProductData = [
  {
    id: 1,
    prodName: "Aspirin",
    productDesc:
      "Used as a pain reliever, fever reducer, and anti-inflammatory. It's also used to reduce the risk of heart attacks and strokes by preventing blood clot formation.",
    imagePath: "/curemed-pharmacy/aspirin.jpg",
    usage: [
      "Reduces fever and relieves mild to moderate pain, such as headaches and muscle aches.",
      "Lowers the risk of heart attack or stroke by preventing blood clots.",
      "Used as an anti-inflammatory medication for conditions like arthritis.",
    ],
    benefits: [
      "Eases pain and discomfort.",
      "Helps prevent blood clots.",
      "Supports heart health in low doses.",
    ],
    precautions: [
      "Avoid if you have a history of ulcers or bleeding disorders.",
      "Not recommended for children with viral infections.",
      "Consult a doctor if pregnant or breastfeeding.",
    ],
  },
  {
    id: 2,
    prodName: "Atorvastatin",
    productDesc:
      "Commonly used to lower cholesterol and reduce the risk of heart disease and stroke. It works by blocking an enzyme in the liver responsible for cholesterol production.",
    imagePath: "/curemed-pharmacy/Atorvastatin.jpeg",
    usage: [
      "Lowers high cholesterol and triglyceride levels.",
      "Reduces the risk of stroke and heart attack.",
      "May slow down the buildup of plaque in arteries.",
    ],
    benefits: [
      "Supports healthy cholesterol levels.",
      "Helps prevent cardiovascular diseases.",
      "May improve blood vessel function.",
    ],
    precautions: [
      "Monitor liver function regularly.",
      "Avoid if pregnant or planning pregnancy.",
      "Report muscle pain or weakness to a healthcare provider.",
    ],
  },
  {
    id: 3,
    prodName: "Amoxicillin",
    productDesc:
      "An antibiotic used to treat various bacterial infections, including pneumonia, bronchitis, and infections of the ear, nose, throat, and skin.",
    imagePath: "/curemed-pharmacy/Amoxicillin.jpeg",
    usage: [
      "Prescribed for bacterial infections like pneumonia and bronchitis.",
      "Effective against ear, nose, throat, and skin infections.",
      "Taken orally in capsule or liquid form.",
    ],
    benefits: [
      "Broad-spectrum antibiotic.",
      "Quickly treats various infections.",
      "Generally well-tolerated with a low side-effect profile.",
    ],
    precautions: [
      "Not effective for viral infections.",
      "May cause stomach upset or diarrhea.",
      "Complete full course as prescribed.",
    ],
  },
  {
    id: 4,
    prodName: "Amlodipine",
    productDesc:
      "A calcium channel blocker used to treat high blood pressure and chest pain (angina). It relaxes blood vessels, making it easier for blood to flow.",
    imagePath: "/curemed-pharmacy/Amlodipine.png",
    usage: [
      "Reduces high blood pressure and controls angina.",
      "Relaxes and widens blood vessels.",
      "Typically taken once a day.",
    ],
    benefits: [
      "Improves blood flow and reduces workload on the heart.",
      "Lowers blood pressure effectively.",
      "May reduce frequency of angina attacks.",
    ],
    precautions: [
      "Monitor for swelling of ankles or feet.",
      "Avoid alcohol while on this medication.",
      "Report dizziness or lightheadedness.",
    ],
  },
  {
    id: 5,
    prodName: "Ibuprofen (Brufen)",
    productDesc:
      "A nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever. Often used for headaches, muscle pain, and arthritis.",
    imagePath: "/curemed-pharmacy/Ibuprofen.jpg",
    usage: [
      "Relieves mild to moderate pain and reduces fever.",
      "Commonly used for headaches, muscle aches, and arthritis.",
      "Effective anti-inflammatory properties.",
    ],
    benefits: [
      "Provides quick pain relief.",
      "Reduces inflammation and swelling.",
      "Lower dosage options available for children.",
    ],
    precautions: [
      "Can cause stomach irritation if taken on an empty stomach.",
      "Avoid if you have a history of ulcers.",
      "Not recommended for long-term use.",
    ],
  },
  {
    id: 6,
    prodName: "Betamethasone",
    productDesc:
      "A corticosteroid medication used to treat inflammatory conditions like asthma, arthritis, and skin disorders by reducing swelling and redness.",
    imagePath: "/curemed-pharmacy/Betamethasone.png",
    usage: [
      "Applied to skin for inflammatory skin conditions.",
      "Taken orally or injected for severe allergic reactions.",
      "Used in various forms depending on the condition.",
    ],
    benefits: [
      "Highly effective anti-inflammatory properties.",
      "Quickly reduces redness and swelling.",
      "Available in various forms for versatility.",
    ],
    precautions: [
      "Use only as prescribed due to potency.",
      "Avoid prolonged use on large areas of skin.",
      "May cause skin thinning with long-term use.",
    ],
  },
  {
    id: 7,
    prodName: "Bisoprolol",
    productDesc:
      "A beta-blocker used to treat high blood pressure and heart-related conditions by reducing heart rate and workload on the heart.",
    imagePath: "/curemed-pharmacy/Bisoprolol.jpeg",
    usage: [
      "Reduces heart rate and workload on the heart.",
      "Helps control high blood pressure and angina.",
      "Often taken once daily.",
    ],
    benefits: [
      "Protects the heart by reducing its workload.",
      "Helps maintain healthy blood pressure levels.",
      "Improves heart function over time.",
    ],
    precautions: [
      "Do not stop suddenly without consulting a doctor.",
      "May cause dizziness or lightheadedness.",
      "Not recommended for patients with severe asthma.",
    ],
  },
  {
    id: 8,
    prodName: "Bupropion",
    productDesc:
      "An antidepressant used to treat major depressive disorder and seasonal affective disorder. It's also prescribed to help people quit smoking.",
    imagePath: "/curemed-pharmacy/Bupropion.jpg",
    usage: [
      "Used to treat depression and seasonal affective disorder.",
      "Prescribed as an aid to quit smoking.",
      "Taken orally in tablet form.",
    ],
    benefits: [
      "Effective for depression with fewer sexual side effects.",
      "Can reduce nicotine cravings.",
      "Improves mood and energy levels.",
    ],
    precautions: [
      "Not suitable for individuals with seizure disorders.",
      "May increase anxiety in some individuals.",
      "Avoid alcohol while taking this medication.",
    ],
  },
  {
    id: 9,
    prodName: "Ciprofloxacin",
    productDesc:
      "An antibiotic used to treat bacterial infections, including urinary tract infections, respiratory infections, and certain types of gastroenteritis.",
    imagePath: "/curemed-pharmacy/Ciprofloxacin.png",
    usage: [
      "Used for treating bacterial infections.",
      "Effective against urinary and respiratory infections.",
      "Usually taken orally in tablet or liquid form.",
    ],
    benefits: [
      "Broad-spectrum antibiotic for various infections.",
      "Quickly alleviates infection symptoms.",
      "Shorter duration of treatment.",
    ],
    precautions: [
      "Avoid sun exposure due to sensitivity.",
      "Not recommended for children under 18 without doctor advice.",
      "Complete the full course as prescribed.",
    ],
  },
  {
    id: 10,
    prodName: "Clonazepam",
    productDesc:
      "A medication used to treat panic disorders and certain types of seizures. It belongs to the benzodiazepine class, which has a calming effect on the brain.",
    imagePath: "/curemed-pharmacy/Clonazepam.jpeg",
    usage: [
      "Treats panic disorders and certain types of seizures.",
      "Used for short-term relief of anxiety symptoms.",
      "Taken orally as prescribed by a doctor.",
    ],
    benefits: [
      "Quickly relieves symptoms of anxiety.",
      "Effective for seizure control.",
      "Helps stabilize mood and nervous system function.",
    ],
    precautions: [
      "May cause drowsiness or dizziness.",
      "Avoid alcohol while taking this medication.",
      "Not suitable for long-term use without monitoring.",
    ],
  },
  {
    id: 11,
    prodName: "Cetirizine",
    productDesc:
      "An antihistamine used to relieve allergy symptoms like runny nose, sneezing, and itching. It's effective for both seasonal allergies and chronic urticaria.",
    imagePath: "/curemed-pharmacy/Cetirizine.jpg",
    usage: [
      "Relieves symptoms of seasonal allergies.",
      "Reduces itching and swelling in chronic hives.",
      "Generally taken once daily.",
    ],
    benefits: [
      "Non-drowsy option for allergy relief.",
      "Long-lasting symptom control.",
      "Safe for use in children and adults.",
    ],
    precautions: [
      "Avoid driving if you experience drowsiness.",
      "Not recommended for severe kidney conditions.",
      "Monitor if used with other allergy medications.",
    ],
  },
  {
    id: 12,
    prodName: "Citalopram",
    productDesc:
      "An antidepressant belonging to the selective serotonin reuptake inhibitor (SSRI) class. Used to treat major depression and sometimes anxiety disorders.",
    imagePath: "/curemed-pharmacy/Citalopram.jpeg",
    usage: [
      "Used for treating depression and anxiety.",
      "Taken orally once daily.",
      "Works by balancing serotonin levels in the brain.",
    ],
    benefits: [
      "Improves mood and energy levels.",
      "Generally well-tolerated with few side effects.",
      "Helps reduce anxiety over time.",
    ],
    precautions: [
      "Avoid abrupt discontinuation.",
      "May cause drowsiness or dizziness.",
      "Monitor for worsening symptoms in early treatment.",
    ],
  },
];

export {medicalProductData}
