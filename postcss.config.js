// ════════════════════════════════════════════════
//  SITE DATA — Edit here to update all content
// ════════════════════════════════════════════════

const D_SERVICES = [
  { id:1,  icon:"✦", title:"Poster Design",        desc:"High-impact visual narratives that stop the scroll and command attention.",           price:"From $49",  color:"#00D4FF", active:true  },
  { id:2,  icon:"◈", title:"Graphics Design",       desc:"Brand identities and visual systems built for longevity and recognition.",           price:"From $79",  color:"#8B5CF6", active:true  },
  { id:3,  icon:"⬡", title:"Social Media Design",  desc:"Cohesive content ecosystems that grow audiences and drive engagement.",               price:"From $39",  color:"#6C63FF", active:true  },
  { id:4,  icon:"◉", title:"Product Design",        desc:"Packaging and product visuals that convert browsers into buyers.",                    price:"From $99",  color:"#00D4FF", active:true  },
  { id:5,  icon:"▣", title:"Banner Design",         desc:"Ad creatives and banners engineered for maximum click-through rates.",               price:"From $29",  color:"#EC4899", active:true  },
  { id:6,  icon:"▶", title:"Video Editing",         desc:"Cinematic post-production that transforms raw footage into compelling stories.",      price:"From $149", color:"#8B5CF6", active:true  },
  { id:7,  icon:"◎", title:"Reels Editing",         desc:"Short-form content that hooks in 3 seconds and retains till the very end.",          price:"From $59",  color:"#6C63FF", active:true  },
  { id:8,  icon:"⟡", title:"Motion Graphics",       desc:"Animated visuals that make brands feel alive and futuristic.",                      price:"From $199", color:"#00D4FF", active:true  },
  { id:9,  icon:"⌬", title:"Website Development",   desc:"Performance-first websites that rank, convert, and impress visitors.",              price:"From $499", color:"#EC4899", active:true  },
  { id:10, icon:"⊕", title:"SEO Optimization",      desc:"Data-driven search strategies that compound over time and dominate SERPs.",          price:"From $199", color:"#8B5CF6", active:true  },
  { id:11, icon:"◆", title:"AI Agent Development",  desc:"Custom AI automations that remove bottlenecks and scale operations effortlessly.",   price:"From $299", color:"#6C63FF", active:true  },
  { id:12, icon:"⊞", title:"Meta Ads Management",   desc:"Paid social campaigns optimized for ROAS and sustainable long-term growth.",        price:"From $249", color:"#00D4FF", active:true  },
  { id:13, icon:"⟳", title:"Automation Solutions",  desc:"End-to-end workflow automations that save hundreds of hours every month.",           price:"From $349", color:"#EC4899", active:true  },
];
const D_PORTFOLIO = [
  { id:1, title:"Neon Brand Identity",     category:"Graphics Design",     client:"TechVault",      year:"2024", tags:["Brand","Identity"],    featured:true  },
  { id:2, title:"Cinematic Reels Series",  category:"Reels Editing",       client:"VibeCo",         year:"2024", tags:["Video","Social"],      featured:true  },
  { id:3, title:"E-commerce Website",      category:"Website Development", client:"LuxeStore",      year:"2024", tags:["Web","Dev"],            featured:false },
  { id:4, title:"Product Launch Poster",   category:"Poster Design",       client:"FusionX",        year:"2023", tags:["Print","Poster"],      featured:true  },
  { id:5, title:"SEO 10x Growth",          category:"SEO",                 client:"RankFast",       year:"2024", tags:["SEO","Growth"],        featured:false },
  { id:6, title:"AI Sales Bot",            category:"AI Automation",       client:"AutoSell",       year:"2024", tags:["AI","Automation"],     featured:true  },
  { id:7, title:"Meta Ads Certificate",    category:"Certificate",         client:"Meta Blueprint", year:"2024", tags:["Certificate","Meta"],  featured:false },
  { id:8, title:"Google Digital Marketing",category:"Certificate",         client:"Google",         year:"2023", tags:["Certificate","Google"],featured:false },
];
const D_REVIEWS = [
  { id:1, name:"Arjun Mehta",  role:"CEO, TechVault",         rating:5, text:"Prothoy transformed our entire visual identity. The work is genuinely world-class — I've worked with agencies in London and NYC that didn't come close." },
  { id:2, name:"Sarah Lin",    role:"Founder, VibeCo",         rating:5, text:"Our Reels engagement went from 2% to 18% after just one month. The editing style is cinematic and addictive. Best investment we've made in content." },
  { id:3, name:"Md. Rafiq",    role:"Director, LuxeStore",     rating:5, text:"The website Prothoy built ranks on page 1 for 40+ keywords. Fast, beautiful, and converts visitors like crazy. Absolutely phenomenal work." },
  { id:4, name:"Priya Sharma", role:"Marketing Head, FusionX", rating:5, text:"Working prototype by Wednesday. The ROI from this automation alone paid for the project 12× over. Mind-blowing speed and quality." },
];
const D_MESSAGES = [
  { id:1, name:"Tariq Hassan", email:"tariq@example.com",   phone:"+880 170000000", message:"Need a full brand identity for my startup. What's your timeline?",      date:"2024-06-01", read:false },
  { id:2, name:"Lena Kim",     email:"lena@vibeco.io",       phone:"",               message:"Loved your reels work. Can we talk about a monthly retainer?",           date:"2024-05-30", read:false },
  { id:3, name:"Ramesh Gupta", email:"ramesh@luxestore.in",  phone:"+91 900000000",  message:"Need an SEO audit for our Shopify store. Budget is $500.",               date:"2024-05-28", read:true  },
];
const D_SOCIAL = [
  { id:1, platform:"Facebook",  url:"https://www.facebook.com/share/1DBhxU2qhi/",               color:"#1877F2", visible:true },
  { id:2, platform:"WhatsApp",  url:"https://wa.me/8801828303504",                               color:"#25D366", visible:true },
  { id:3, platform:"YouTube",   url:"https://youtube.com/@prothoy96",                            color:"#FF0000", visible:true },
  { id:4, platform:"LinkedIn",  url:"https://www.linkedin.com/in/prothoy-chakraborty-8a713a391", color:"#0A66C2", visible:true },
  { id:5, platform:"Instagram", url:"https://www.instagram.com/prothoy_96",                      color:"#E1306C", visible:true },
];
const D_HERO    = { badge:"Available for New Projects", title1:"Helping Brands", title2:"Grow Through", titleAccent:"Design, Marketing", title3:"& AI", subtitle:"I build high-converting designs, videos, websites, SEO systems and AI automations that scale businesses to the next level.", btn1:"View Projects", btn2:"Contact Me", stat1v:"200+", stat1l:"Projects Done", stat2v:"150+", stat2l:"Happy Clients", stat3v:"5.0★", stat3l:"Rating" };
const D_ABOUT   = { name:"Prothoy Chakraborty", experience:"4+", tagline:"Designer · Video Editor · Developer · SEO · AI Expert", bio1:"A creative force and digital strategist helping brands unlock their full potential.", bio2:"My mission: to deliver work so good that clients never need to look elsewhere." };
const D_CONTACT = { email:"prothoycbsm@gmail.com", phone:"+880 1828 303504", location:"Raozan, Chittagong", subtitle:"Drop a message and I'll get back within 24 hours." };
const D_SKILLS  = [
  { id:1, name:"Graphics Design",     level:98, color:"#00D4FF" },
  { id:2, name:"Video Editing",       level:95, color:"#8B5CF6" },
  { id:3, name:"Website Development", level:90, color:"#6C63FF" },
  { id:4, name:"SEO Optimization",    level:92, color:"#EC4899" },
  { id:5, name:"AI Automation",       level:88, color:"#00D4FF" },
  { id:6, name:"Meta Ads",            level:85, color:"#8B5CF6" },
];
const D_STATS   = [{ id:1,value:200,suffix:"+",label:"Projects Delivered"},{id:2,value:150,suffix:"+",label:"Happy Clients"},{id:3,value:5,suffix:"★",label:"Average Rating"},{id:4,value:4,suffix:"+",label:"Years Experience"}];
const D_MARQUEE = ["Poster Design","Video Editing","SEO Optimization","Web Development","AI Automation","Motion Graphics","Meta Ads","Reels Editing","Brand Identity","Product Design"];

const CAT_COLORS = { "Poster Design":"#00D4FF","Graphics Design":"#8B5CF6","Video Editing":"#6C63FF","Website Development":"#EC4899","AI Automation":"#00D4FF","SEO":"#8B5CF6","Certificate":"#FFB800","Reels Editing":"#EC4899","Motion Graphics":"#6C63FF","Social Media Design":"#8B5CF6","Banner Design":"#00D4FF","Product Design":"#EC4899" };
const CAT_ICONS  = { "Poster Design":"✦","Graphics Design":"◈","Video Editing":"▶","Website Development":"⌬","AI Automation":"◆","SEO":"⊕","Reels Editing":"◎","Motion Graphics":"⟡","Certificate":"🏆","Social Media Design":"⬡","Banner Design":"▣","Product Design":"◉" };
const PORT_CATS  = ["All","Poster Design","Graphics Design","Reels Editing","Website Development","SEO","AI Automation","Certificate","Motion Graphics","Social Media Design","Video Editing"];
const ALL_PORT_CATS = ["Graphics Design","Reels Editing","Website Development","Poster Design","SEO","AI Automation","Certificate","Motion Graphics","Social Media Design","Video Editing","Banner Design","Product Design"];


export {
  D_SERVICES, D_PORTFOLIO, D_REVIEWS, D_MESSAGES, D_SOCIAL,
  D_HERO, D_ABOUT, D_CONTACT, D_SKILLS, D_STATS, D_MARQUEE,
  CAT_COLORS, CAT_ICONS, PORT_CATS, ALL_PORT_CATS
};
