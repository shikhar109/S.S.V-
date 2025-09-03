const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static images
app.use("/images", express.static(path.join(__dirname, "images")));

// Teacher data
const TEACHERS = [
  {
    id: "shailender",
    name: "Shailender Sagar Mishra",
    subject: "Mathematics",
    dob: "05/06/1985",
    qualifications: "M.Sc. (Mathematics), B.Ed.",
    father: "Late Shri Gopal Mishra",
    mother: "Smt. Savitri Mishra",
    achievements:
      "Gold medalist in M.Sc. Mathematics, with 15+ years of teaching experience. Known for simplifying complex topics and preparing students for competitive exams.",
    headline: "Passionate about building strong mathematical foundations.",
    bio: `Shailender Sagar Mishra sir is one of the most respected Mathematics teachers of S.S.V Inter College. 
Born on 5th June 1985 in Uttar Pradesh, he grew up with a deep passion for numbers and problem-solving. 
After completing his early education with distinction, he pursued higher studies in Mathematics, earning his M.Sc. 
degree with a gold medal and later completing B.Ed. to dedicate himself fully to teaching. 

Over the past 15 years, Shailender sir has guided thousands of students. His classes are known for being highly engaging, 
where he explains even the most difficult concepts in the simplest ways. His belief is that mathematics is not just a subject, 
but a way of thinking logically and creatively. Students admire him for his patience, discipline, and motivational nature. 

Apart from teaching, he is deeply involved in mentoring students for board exams and competitive examinations. 
He strongly believes that practice, consistency, and conceptual clarity are the three pillars of mastering mathematics. 
Through his tireless efforts, many of his students have achieved remarkable success in academics and careers. 

Shailender sir’s dedication, humility, and inspiring personality make him not only a teacher but also a guide, mentor, 
and role model for his students.`,
    phone: "+91-9876543210",
    image: "/images/math_teacher.jpg",
  },
  {
    id: "kamal",
    name: "श्री कमल किशोर पांडेय",
    subject: "हिन्दी",
    dob: "06/08/1986",
    qualifications: "एम.ए. (संस्कृत), बी.एड.",
    father: "स्वर्गीय रामप्रताप पांडेय",
    mother: "श्रीमती तारावती पांडेय",
    achievements:
      "संस्कृत और हिन्दी भाषा के विद्वान शिक्षक, जिन्होंने विद्यार्थियों को साहित्य, व्याकरण और संस्कृति की गहन समझ प्रदान की।",
    headline: "विद्यार्थियों को भाषा और संस्कृति से जोड़ने वाले प्रेरणास्रोत।",
    bio: `श्री कमल किशोर पांडेय का जन्म 6 अगस्त 1986 को अयोध्या जनपद के मिल्कीपुर ग्राम में हुआ। 
आपके पिताजी स्वर्गीय रामप्रताप पांडेय एवं माताजी श्रीमती तारावती पांडेय हैं। 
बाल्यकाल से ही आपको साहित्य और संस्कृति के प्रति विशेष लगाव था। 

प्राथमिक शिक्षा के बाद आपने संस्कृत और हिन्दी में उच्च शिक्षा प्राप्त की और एम.ए. (संस्कृत) तथा बी.एड. की डिग्री हासिल की। 
शिक्षण कार्य को आपने केवल पेशा नहीं बल्कि सेवा माना। 
आप विद्यार्थियों को केवल पढ़ाते ही नहीं, बल्कि उनमें साहित्यिक और सांस्कृतिक चेतना भी जाग्रत करते हैं। 

हिन्दी और संस्कृत के क्षेत्र में आपके योगदान ने विद्यार्थियों को अपनी भाषा और संस्कृति से जुड़ने की प्रेरणा दी है। 
आपकी कक्षा में पढ़ाई केवल पुस्तक तक सीमित नहीं रहती, बल्कि जीवन मूल्यों और नैतिकता का भी ज्ञान कराती है। 
आपकी वाणी सरल, स्पष्ट और प्रेरणादायी है, जिससे विद्यार्थी गहराई से विषय को समझ पाते हैं। 

अपने अनुशासन, सौम्यता और विद्वता के कारण आप विद्यार्थियों के बीच अत्यंत लोकप्रिय हैं। 
आपके मार्गदर्शन में अनेक विद्यार्थियों ने उच्च शिक्षा और विभिन्न प्रतियोगी परीक्षाओं में सफलता पाई है। 
आप केवल शिक्षक ही नहीं, बल्कि एक मार्गदर्शक और आदर्श के रूप में विद्यार्थियों के हृदय में स्थान बनाए हुए हैं।`,
    phone: "+91-8765432109",
    image: "/images/hindi_teacher.jpg",
  },
];

// API route to get all teachers
app.get("/teachers", (req, res) => {
  res.json(TEACHERS);
});

// API route to get single teacher by id
app.get("/teachers/:id", (req, res) => {
  const teacher = TEACHERS.find((t) => t.id === req.params.id);
  if (!teacher) return res.status(404).json({ error: "Teacher not found" });
  res.json(teacher);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
