import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Static images (inside /public/images)
app.use("/images", express.static(path.join(process.cwd(), "public/images")));

// Teacher data
const teachers = [
  {
    id: "shailender",
    name: "Shailender Sagar Mishra",
    father: "Durga Prashad Mishra",
    mother: "Kiran Mishra",
    dob: "02 September 1987",
    qualifications: "M.Sc (Mathematics), M.Ed, MBA (Marketing & IT)",
    achievements:
      "Awarded by Quantum Information Summit; Employee Award by India Today Group; recognized for excellence in teaching and leadership.",
    subject: "Mathematics",
    phone: "+91-XXXXXXXXXX",
    image: "/images/math_teacher.jpg",
    bio: `Born on 2nd September 1987, Mr. Shailender Sagar Mishra is a respected educator rooted in values of knowledge and service. 
He holds a Master of Science in Mathematics, an M.Ed., and an MBA in Marketing & Information Technology. 

He has received awards from the Quantum Information Summit and the India Today Group. He believes that "youth are the true career makers and the foundation of a bright future."

Currently, he teaches at S.S.V Inter College, where he not only strengthens students academically but also inspires them to aim higher in life.`
  },
  {
    id: "kamal",
    name: "श्री कमल किशोर पांडेय",
    father: "रामप्रताप पांडेय",
    mother: "तरावती पांडेय",
    dob: "06 August 1986",
    qualifications: "M.A Sanskrit, B.Ed",
    achievements: "Renowned Hindi teacher, admired for simplicity and inspiration.",
    subject: "Hindi",
    phone: "+91-XXXXXXXXXX",
    image: "/images/hindi_teacher.jpg",
    bio: `श्री कमल किशोर पांडेय जी का जन्म 06 अगस्त 1986 को अयोध्या (ग्राम मिलकिऔर) में हुआ। 
उनके पिता स्वर्गीय रामप्रताप पांडेय जी तथा माता श्रीमती तरावती पांडेय जी हैं। 

प्रारम्भिक शिक्षा गाँव में प्राप्त करने के बाद, उन्होंने संस्कृत विषय से एम.ए. तथा बी.एड. किया। 

वर्तमान में वे एस.एस.वी. इंटर कॉलेज में हिन्दी विषय का शिक्षण कर रहे हैं। उनका व्यक्तित्व सरल, सहज और प्रेरणादायी है।`
  }
];

// API route
app.get("/api/teachers", (req, res) => {
  res.json(teachers);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
