/* Editable content arrays. Update copy/prices here rather than in the HTML. */

window.SITE_DATA = {
  paths: [
    {
      id: "va",
      title: "Become a Virtual Assistant",
      copy: "I want to learn VA skills, find clients, set my rates and build a remote career.",
      cta: "Start Here",
      href: "start-here.html?path=va"
    },
    {
      id: "remote-career",
      title: "Take My Career Remote",
      copy: "I already have experience. I want to turn what I know into a remote career.",
      cta: "Explore This Path",
      href: "start-here.html?path=remote-career"
    },
    {
      id: "remote-business",
      title: "Build a Remote Business",
      copy: "I want to turn my skills into a service business and work with global clients.",
      cta: "Build My Business",
      href: "start-here.html?path=remote-business"
    },
    {
      id: "lifestyle",
      title: "Design a Freer Life",
      copy: "I'm already remote. I want better balance, travel and lifestyle freedom.",
      cta: "Explore Lifestyle",
      href: "start-here.html?path=lifestyle"
    }
  ],

  products: [
    {
      tier: "Free",
      name: "VA Starter Guide",
      description: "A practical starting point for understanding virtual assistance and preparing for your first clients.",
      price: "Free",
      href: "#lead-magnet"
    },
    {
      tier: "Entry Product",
      name: "Remote Work / VA Toolkit",
      description: "Templates, scripts and checklists to get you client-ready faster.",
      price: null,
      href: "resources.html"
    },
    {
      tier: "Workshop",
      name: "Remote Career Challenge",
      description: "A short, guided challenge to help you take your first concrete steps.",
      price: null,
      href: "courses.html"
    },
    {
      tier: "Core Program",
      name: "Remote Work Kickstart",
      description: "Step-by-step training to go from beginner to booked-out VA.",
      price: null,
      href: "courses.html"
    },
    {
      tier: "Flagship",
      name: "Remote Work Blueprint",
      description: "The complete system for building a remote career or service business.",
      price: null,
      href: "courses.html"
    },
    {
      tier: "Premium",
      name: "Application-Based Mentorship",
      description: "Hands-on, personalized support for serious builders. By application only.",
      price: null,
      href: "community.html"
    }
  ],

  /* TESTIMONIAL PLACEHOLDER — no real testimonials supplied yet. Replace every entry
     below with a verified quote, name, location and (optional) photo before this
     section goes live. Do not fill these with invented names or quotes. */
  testimonials: [
    {
      quote: "TESTIMONIAL PLACEHOLDER — replace with a real client/student quote.",
      name: "Name Pending",
      meta: "Location / path pending",
      photo: null
    },
    {
      quote: "TESTIMONIAL PLACEHOLDER — replace with a real client/student quote.",
      name: "Name Pending",
      meta: "Location / path pending",
      photo: null
    }
  ],

  /* Only $12K+ monthly VA-company revenue is confirmed in the brand brief.
     The other three are placeholders — replace `value` with real, verified numbers. */
  stats: [
    { value: "$12K+", label: "Monthly Revenue", placeholder: false },
    { value: "—", label: "Students Trained", placeholder: true },
    { value: "—", label: "Years Experience", placeholder: true },
    { value: "—", label: "Clients Served", placeholder: true }
  ],

  trustLogos: [
    { name: "Black Girl Ventures" },
    { name: "PROSPERUS", sub: "Detroit" },
    { name: "BIA" },
    { name: "Event Pros" },
    { name: "pull up & pitch" }
  ],

  /* Powers the left scroll rail + bottom section pill nav. `id` must match a real
     section id in index.html. `sub` is the short line shown under the section name. */
  scrollNav: [
    { id: "hero", label: "Home", sub: "Start Here" },
    { id: "help-you", label: "I Help You", sub: "Build Your Business" },
    { id: "services", label: "How I Help", sub: "Guide · Courses · Coaching" },
    { id: "story", label: "My Story", sub: "Jamaica to $12K/Month" },
    { id: "travel", label: "Travel Diaries", sub: "Work From Anywhere" },
    { id: "lead-magnet", label: "Get The Guide", sub: "Free Starter Guide" }
  ],

  /* TRAVEL DIARIES PLACEHOLDER — no real travel photos or locations confirmed yet.
     Replace `location`, `caption` and `photo` with real, verified details before
     this section goes live. Do not invent specific cities/countries. */
  travelDiaries: [
    { location: "Surfed 4ft waves in Morocco", caption: "A clip from a work-and-travel stop in Morocco.", video: "videos/travel-morocco.mp4", photo: null },
    { location: "Danced with dolphins in Jamaica", caption: "A clip from Ocho Rios, Jamaica.", video: "videos/travel-jamaica.mp4", photo: null },
    { location: "Family adventure thru Comuna 13, Colombia", caption: "A clip from Comuna 13, Colombia.", video: "videos/travel-colombia.mp4", photo: null },
    { location: "Location Pending", caption: "Photo and story pending.", photo: null },
    { location: "Location Pending", caption: "Photo and story pending.", photo: null },
    { location: "Location Pending", caption: "Photo and story pending.", photo: null }
  ]
};
