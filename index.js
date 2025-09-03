const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for your frontend
app.use(cors({
  origin: "https://class10ssv.netlify.app"
}));

// Serve teacher images
app.use("/images", express.static("images"));

// Teacher data with expanded bios
const TEACHERS = [
  {
    id: "shailender",
    name: "Shailender Sagar Mishra",
    father: "Durga Prashad Mishra",
    mother: "Kiran Mishra",
    dob: "02 September 1987",
    qualifications: "M.Sc (Mathematics), M.Ed, MBA (Marketing & IT)",
    achievements: "Awarded by Quantum Information Summit; Employee Award by India Today Group; recognized for excellence in teaching and leadership.",
    subject: "Mathematics",
    phone: "+91-XXXXXXXXXX",
    headline: "India’s finest Mathematics teacher, inspiring students to dream bigger.",
    bio: `
Born on 2nd September 1987 in a humble family, Mr. Shailender Sagar Mishra displayed exceptional aptitude in Mathematics from an early age. He excelled in school competitions and was known for his analytical thinking and problem-solving abilities.

After completing his M.Sc in Mathematics, he pursued M.Ed to refine his teaching methods and an MBA in Marketing & IT to blend modern management with educational leadership. This unique combination allows him to bring innovative teaching approaches to the classroom.

Throughout his career at S.S.V Inter College, he has inspired countless students, helping them build confidence, develop critical thinking, and achieve academic excellence. He has been recognized by the Quantum Information Summit and India Today Group for his dedication and contributions to education.

Beyond academics, Mr. Mishra encourages extracurricular involvement, mentorship programs, and online learning initiatives. His philosophy emphasizes that mathematics is not just a subject, but a tool to sharpen the mind and prepare students for life. His motto: "Education should ignite the mind and empower the heart."
`
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
    headline: "प्रिय हिंदी शिक्षक, सरल और प्रेरणादायी व्यक्तित्व।",
    bio: `
श्री कमल किशोर पांडेय जी का जन्म 06 अगस्त 1986 को उत्तर प्रदेश के ऐतिहासिक नगर अयोध्या के ग्राम मिलकिऔर में हुआ। उनके पिता स्वर्गीय रामप्रताप पांडेय और माता श्रीमती तरावती पांडेय हैं।

प्रारंभिक शिक्षा अपने गाँव के विद्यालय से प्राप्त करने के बाद, उन्होंने संस्कृत में स्नातकोत्तर (M.A) और बी.एड की डिग्री प्राप्त की। उनके शिक्षण दृष्टिकोण में सरलता, स्पष्टता और प्रेरणा का समावेश है। 

एस.एस.वी इंटर कॉलेज में हिंदी शिक्षक के रूप में कार्यरत रहते हुए, उन्होंने विद्यार्थियों को न केवल भाषा और साहित्य की गहन समझ दी, बल्कि नैतिक मूल्य और जीवन की सोच भी सिखाई। कई छात्र उनके मार्गदर्शन में साहित्यिक प्रतियोगिताओं और शैक्षणिक कार्यक्रमों में पुरस्कार जीत चुके हैं। 

श्री पांडेय जी का मानना है कि भाषा केवल संवाद का साधन नहीं है, बल्कि सोचने, समझने और व्यक्त करने का माध्यम है। उनका शिक्षण जीवन और व्यक्तित्व विद्यार्थियों के लिए प्रेरणास्त्रोत हैं। उनका आदर्श वाक्य: "सरलता में ही महानता छुपी है।"
`
  }
];


// Routes
app.get("/api/teachers", (req, res) => res.json(TEACHERS));

app.get("/api/teachers/:id", (req, res) => {
  const teacher = TEACHERS.find(t => t.id === req.params.id);
  if (!teacher) return res.status(404).json({ error: "Teacher not found" });
  res.json(teacher);
});

// Start server
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
