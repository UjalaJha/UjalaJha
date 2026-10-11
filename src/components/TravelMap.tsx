import React, { useState, useEffect } from "react";
import {
  MapPin,
  Compass,
  Plane,
  Navigation,
  Sparkles,
  Mountain,
  Waves,
  Coffee,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface TravelDestination {
  id: string;
  name: string;
  stateOrRegion: string;
  country: "India" | "Vietnam";
  category: "mountains" | "coastal" | "hills" | "heritage" | "vietnam";
  lat: number;
  lng: number;
  vibe: string;
  altitudeOrTag?: string;
  highlight?: string;
  emoji: string;
  labelAlign?: "left" | "right" | "top" | "bottom";
  callout?: {
    dx: number;
    dy: number;
    anchor?: "start" | "end" | "middle";
  };
}

export const destinations: TravelDestination[] = [
  // ─── INDIA: NORTH / HIMALAYAS & HILLS ───
  {
    id: "chandigarh",
    name: "Chandigarh",
    stateOrRegion: "Punjab & Haryana",
    country: "India",
    category: "heritage",
    lat: 30.7333,
    lng: 76.7794,
    altitudeOrTag: "City Beautiful • Shivalik Foothills",
    vibe: "Broad tree-lined boulevards, Sukhna Lake sunsets & Le Corbusier modernist architecture",
    highlight: "Sukhna Lake evening calm & Rock Garden",
    emoji: "🌲",
    labelAlign: "left",
    callout: { dx: -55, dy: 18, anchor: "end" },
  },
  {
    id: "manali",
    name: "Manali",
    stateOrRegion: "Himachal Pradesh",
    country: "India",
    category: "mountains",
    lat: 32.2432,
    lng: 77.1892,
    altitudeOrTag: "2,050m • Beas River Valley",
    vibe: "Roaring river, snowy ridgelines & backpacker café energy",
    highlight: "Old Manali vibes, cedar woods & alpine scents",
    emoji: "🏔️",
    labelAlign: "right",
    callout: { dx: -45, dy: -28, anchor: "end" },
  },
  {
    id: "jibhi",
    name: "Jibhi",
    stateOrRegion: "Himachal Pradesh",
    country: "India",
    category: "mountains",
    lat: 31.6366,
    lng: 77.3486,
    altitudeOrTag: "1,600m • Tirthan Valley",
    vibe: "Wooden cottages, babbling freshwater streams & apple orchards",
    highlight: "Jalori Pass hike & untouched rustic charm",
    emoji: "🪵",
    labelAlign: "right",
    callout: { dx: -50, dy: -12, anchor: "end" },
  },
  {
    id: "chakrata",
    name: "Chakrata",
    stateOrRegion: "Uttarakhand",
    country: "India",
    category: "mountains",
    lat: 30.7042,
    lng: 77.8687,
    altitudeOrTag: "2,118m • Offbeat Outpost",
    vibe: "Pristine raw mountain terrain, waterfalls & secluded canyons",
    highlight: "Tiger Falls trek & zero tourist hustle",
    emoji: "🧗",
    labelAlign: "left",
    callout: { dx: 45, dy: -42, anchor: "start" },
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    stateOrRegion: "Uttarakhand",
    country: "India",
    category: "mountains",
    lat: 30.4598,
    lng: 78.0644,
    altitudeOrTag: "2,005m • Garhwal Hills",
    vibe: "Ridge walks, pine breezes & twinkling Doon valley night views",
    highlight: "Mall Road sunset strolls & mountain mist",
    emoji: "🌲",
    labelAlign: "left",
    callout: { dx: 52, dy: 10, anchor: "start" },
  },
  {
    id: "landour",
    name: "Landour",
    stateOrRegion: "Uttarakhand",
    country: "India",
    category: "mountains",
    lat: 30.457,
    lng: 78.089,
    altitudeOrTag: "2,290m • Deodar Forest",
    vibe: "Peaceful quiet cantonment, deodar trails & bakery coffee",
    highlight: "Chaar Dukan pancakes & endless pine silence",
    emoji: "🥞",
    labelAlign: "right",
    callout: { dx: 52, dy: -22, anchor: "start" },
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    stateOrRegion: "Uttarakhand",
    country: "India",
    category: "heritage",
    lat: 30.0869,
    lng: 78.2676,
    altitudeOrTag: "372m • Foothills of Himalayas",
    vibe: "Ganga ghat evening aartis, riverfront vibes & yoga calm",
    highlight: "Suspension bridges & emerald river banks",
    emoji: "🪔",
    labelAlign: "right",
    callout: { dx: 48, dy: 32, anchor: "start" },
  },
  {
    id: "delhi",
    name: "Delhi",
    stateOrRegion: "NCR",
    country: "India",
    category: "heritage",
    lat: 28.6139,
    lng: 77.209,
    altitudeOrTag: "Capital Metropolis",
    vibe: "Monumental history, bustling street foods & transit hub to Himalayas",
    highlight: "Heritage walks & midnight chai runs",
    emoji: "🏛️",
    labelAlign: "right",
  },
  {
    id: "gangtok",
    name: "Gangtok",
    stateOrRegion: "Sikkim",
    country: "India",
    category: "mountains",
    lat: 27.3389,
    lng: 88.6065,
    altitudeOrTag: "1,650m • Kanchenjunga Vistas",
    vibe: "Monasteries, misty mountain passes & crisp Eastern Himalayan air",
    highlight: "Sikkimese mountain culture & winding ridges",
    emoji: "🏔️",
    labelAlign: "right",
    callout: { dx: 45, dy: -18, anchor: "start" },
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    stateOrRegion: "West Bengal",
    country: "India",
    category: "mountains",
    lat: 27.041,
    lng: 88.2663,
    altitudeOrTag: "2,042m • Queen of Hills",
    vibe: "Toy train whistles, rolling tea gardens & sunrise over snow peaks",
    highlight: "Tiger Hill sunrise & historic colonial paths",
    emoji: "☕",
    labelAlign: "left",
    callout: { dx: 45, dy: 14, anchor: "start" },
  },
  {
    id: "darbhanga",
    name: "Darbhanga",
    stateOrRegion: "Bihar",
    country: "India",
    category: "heritage",
    lat: 26.1542,
    lng: 85.8918,
    altitudeOrTag: "Cultural Capital of Mithila",
    vibe: "Historic Raj Darbhanga palaces, tranquil lotus ponds & vibrant Madhubani folk art",
    highlight: "Darbhanga Raj Fort, Anand Bagh Palace & Mithila heritage",
    emoji: "🎨",
    labelAlign: "right",
    callout: { dx: -50, dy: 10, anchor: "end" },
  },
  {
    id: "varanasi",
    name: "Varanasi",
    stateOrRegion: "Uttar Pradesh",
    country: "India",
    category: "heritage",
    lat: 25.3176,
    lng: 82.9739,
    altitudeOrTag: "Eternal City • Sacred Ganga",
    vibe: "Mesmerizing Dashashwamedh Ganga aarti, dawn wooden boat rides & labyrinthine lanes",
    highlight: "Sunrise boat glides across ancient river ghats",
    emoji: "🪔",
    labelAlign: "right",
  },
  {
    id: "bhubaneshwar",
    name: "Bhubaneshwar",
    stateOrRegion: "Odisha",
    country: "India",
    category: "heritage",
    lat: 20.2961,
    lng: 85.8245,
    altitudeOrTag: "Temple City of India",
    vibe: "Ancient Kalinga stone temples, rich terracotta craft & peaceful heritage gardens",
    highlight: "Lingaraj & Mukteshvara temple stone carvings",
    emoji: "🛕",
    labelAlign: "right",
  },

  // ─── INDIA: WEST & CENTRAL HEARTLAND ───
  {
    id: "jaipur",
    name: "Jaipur",
    stateOrRegion: "Rajasthan",
    country: "India",
    category: "heritage",
    lat: 26.9124,
    lng: 75.7873,
    altitudeOrTag: "Pink City • Forts",
    vibe: "Golden sandstone ramparts, regal palaces & rich desert heritage",
    highlight: "Nahargarh sunset view & vibrant bazaar lanes",
    emoji: "🏰",
    labelAlign: "left",
  },
  {
    id: "ujjain",
    name: "Ujjain",
    stateOrRegion: "Madhya Pradesh",
    country: "India",
    category: "heritage",
    lat: 23.1765,
    lng: 75.7885,
    altitudeOrTag: "City of Mahakal • Shipra River",
    vibe: "Spiritual energy, ancient astronomical observatories & evening Shipra ghat breeze",
    highlight: "Mahakaleshwar corridor & Ram Ghat riverside",
    emoji: "🕉️",
    labelAlign: "left",
    callout: { dx: -45, dy: -14, anchor: "end" },
  },
  {
    id: "indore",
    name: "Indore",
    stateOrRegion: "Madhya Pradesh",
    country: "India",
    category: "heritage",
    lat: 22.7196,
    lng: 75.8577,
    altitudeOrTag: "India's Cleanest City • Food Capital",
    vibe: "Legendary midnight Sarafa street food, poha-jalebi mornings & Rajwada palace",
    highlight: "Midnight food crawl at Sarafa Bazaar & Chappan Dukan",
    emoji: "🍲",
    labelAlign: "right",
    callout: { dx: -45, dy: 18, anchor: "end" },
  },
  {
    id: "dwarka",
    name: "Dwarka",
    stateOrRegion: "Gujarat",
    country: "India",
    category: "coastal",
    lat: 22.2442,
    lng: 68.9685,
    altitudeOrTag: "Arabian Sea • Western Tip",
    vibe: "Ancient oceanfront temples, seabreeze & sacred coastal aura",
    highlight: "Dwarkadhish spires & crashing Arabian Sea waves",
    emoji: "🌊",
    labelAlign: "right",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    stateOrRegion: "Maharashtra",
    country: "India",
    category: "heritage",
    lat: 19.076,
    lng: 72.8777,
    altitudeOrTag: "Coastal Megacity • Base",
    vibe: "Marine Drive breeze, endless city grit, code deploys & street snacks",
    highlight: "Queen's Necklace sunsets & university days",
    emoji: "🏙️",
    labelAlign: "left",
    callout: { dx: -55, dy: -12, anchor: "end" },
  },
  {
    id: "lonavala",
    name: "Lonavala",
    stateOrRegion: "Maharashtra",
    country: "India",
    category: "hills",
    lat: 18.7557,
    lng: 73.4091,
    altitudeOrTag: "624m • Sahyadri Range",
    vibe: "Monsoon mist, cloud-wrapped fort viewpoints & fresh chikki",
    highlight: "Tiger Point fog & cascading monsoon waterfalls",
    emoji: "🌧️",
    labelAlign: "left",
    callout: { dx: -58, dy: 12, anchor: "end" },
  },
  {
    id: "pune",
    name: "Pune",
    stateOrRegion: "Maharashtra",
    country: "India",
    category: "heritage",
    lat: 18.5204,
    lng: 73.8567,
    altitudeOrTag: "Deccan Plateau",
    vibe: "Old wadas, lush rainy hills, tech culture & weekend getaways",
    highlight: "Vibrant cafés & western ghat gateways",
    emoji: "🎓",
    labelAlign: "right",
    callout: { dx: 48, dy: -8, anchor: "start" },
  },
  {
    id: "mahabaleshwar",
    name: "Mahabaleshwar",
    stateOrRegion: "Maharashtra",
    country: "India",
    category: "hills",
    lat: 17.9237,
    lng: 73.6586,
    altitudeOrTag: "1,353m • Strawberry Valley",
    vibe: "Fresh strawberry farms, Arthur's Seat cliffs & dense green canopy",
    highlight: "Cliff-edge canyon drop-offs & highland mist",
    emoji: "🍓",
    labelAlign: "left",
    callout: { dx: -52, dy: 18, anchor: "end" },
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    stateOrRegion: "Telangana",
    country: "India",
    category: "heritage",
    lat: 17.385,
    lng: 78.4867,
    altitudeOrTag: "City of Pearls • Deccan Plateau",
    vibe: "Charminar history, aromatic Hyderabadi biryani, Golconda fort echoes & bustling tech hubs",
    highlight: "Golconda Fort acoustics, Charminar chai & Hussain Sagar evening breeze",
    emoji: "🏰",
    labelAlign: "right",
    callout: { dx: 48, dy: 16, anchor: "start" },
  },
  {
    id: "warangal",
    name: "Warangal",
    stateOrRegion: "Telangana",
    country: "India",
    category: "heritage",
    lat: 17.9784,
    lng: 79.5941,
    altitudeOrTag: "Kakatiya Heritage Capital",
    vibe: "Kakatiya stone arches, Thousand Pillar Temple architecture & serene Ramappa lake",
    highlight: "Kakatiya Kala Thoranam gateway, Warangal Fort & Thousand Pillar Temple",
    emoji: "🛕",
    labelAlign: "right",
    callout: { dx: 48, dy: -12, anchor: "start" },
  },
  {
    id: "goa",
    name: "Goa",
    stateOrRegion: "Goa",
    country: "India",
    category: "coastal",
    lat: 15.2993,
    lng: 74.124,
    altitudeOrTag: "Sun, Sand & Ocean",
    vibe: "Golden sands, coastal susegad, beachside shacks & scooter trails",
    highlight: "South Goa secluded coves & warm ocean sunsets",
    emoji: "🏖️",
    labelAlign: "left",
    callout: { dx: -50, dy: -10, anchor: "end" },
  },
  {
    id: "gokarna",
    name: "Gokarna",
    stateOrRegion: "Karnataka",
    country: "India",
    category: "coastal",
    lat: 14.5479,
    lng: 74.3188,
    altitudeOrTag: "Om Beach • Arabian Sea Cliffs",
    vibe: "Secluded cliff trails, pristine crescent beaches, temple bells & golden sunsets",
    highlight: "Om Beach & Kudle Beach ridge walks",
    emoji: "🏖️",
    labelAlign: "left",
    callout: { dx: -52, dy: 14, anchor: "end" },
  },

  // ─── INDIA: SOUTH / COASTAL & WESTERN GHATS ───
  {
    id: "coorg",
    name: "Coorg",
    stateOrRegion: "Karnataka",
    country: "India",
    category: "hills",
    lat: 12.4244,
    lng: 75.7382,
    altitudeOrTag: "1,150m • Scotland of India",
    vibe: "Aromatic coffee plantations, spice trails & rolling mist-covered peaks",
    highlight: "Fresh filter coffee estates & Abbey Falls",
    emoji: "☕",
    labelAlign: "left",
    callout: { dx: -50, dy: -10, anchor: "end" },
  },
  {
    id: "wayanad",
    name: "Wayanad",
    stateOrRegion: "Kerala",
    country: "India",
    category: "hills",
    lat: 11.6854,
    lng: 76.132,
    altitudeOrTag: "900m • Western Ghats Biosphere",
    vibe: "Dense tropical rain forests, tea hills & bamboo groves",
    highlight: "Chembra Peak heart lake views & spice gardens",
    emoji: "🌿",
    labelAlign: "left",
    callout: { dx: -52, dy: 12, anchor: "end" },
  },
  {
    id: "ooty",
    name: "Ooty",
    stateOrRegion: "Tamil Nadu",
    country: "India",
    category: "mountains",
    lat: 11.4102,
    lng: 76.695,
    altitudeOrTag: "2,240m • Blue Mountains",
    vibe: "Eucalyptus scented breezes, botanical gardens & Nilgiri tea hills",
    highlight: "Doddabetta peak & toy train route",
    emoji: "🚂",
    labelAlign: "right",
    callout: { dx: 45, dy: -5, anchor: "start" },
  },
  {
    id: "pondicherry",
    name: "Pondicherry",
    stateOrRegion: "Puducherry",
    country: "India",
    category: "coastal",
    lat: 11.9416,
    lng: 79.8083,
    altitudeOrTag: "French Quarter • Coromandel Coast",
    vibe: "Yellow colonial villas, bougainvillea lanes & seaside promenade",
    highlight: "Promenade sunrise cycles & warm croissants",
    emoji: "🚲",
    labelAlign: "right",
  },
  {
    id: "munnar",
    name: "Munnar",
    stateOrRegion: "Kerala",
    country: "India",
    category: "mountains",
    lat: 10.0889,
    lng: 77.0595,
    altitudeOrTag: "1,600m • Tea Garden Haven",
    vibe: "Emerald tea carpet valleys, cool mountain air & misty waterfalls",
    highlight: "Endless rolling green hills & early morning dew",
    emoji: "🍃",
    labelAlign: "right",
    callout: { dx: 40, dy: -18, anchor: "start" },
  },
  {
    id: "kochi",
    name: "Kochi",
    stateOrRegion: "Kerala",
    country: "India",
    category: "coastal",
    lat: 9.9312,
    lng: 76.2673,
    altitudeOrTag: "Port City • Arabian Coast",
    vibe: "Chinese fishing nets, art cafés in Fort Kochi & sea spice history",
    highlight: "Jew Town antique alleys & harbor ferries",
    emoji: "🎣",
    labelAlign: "left",
    callout: { dx: -52, dy: -12, anchor: "end" },
  },
  {
    id: "madurai",
    name: "Madurai",
    stateOrRegion: "Tamil Nadu",
    country: "India",
    category: "heritage",
    lat: 9.9252,
    lng: 78.1198,
    altitudeOrTag: "Temple City • Vaigai River",
    vibe: "Towering colorful temple gopurams, jasmine scents & lively streets",
    highlight: "Meenakshi Amman architecture marvel",
    emoji: "🛕",
    labelAlign: "right",
    callout: { dx: 48, dy: 10, anchor: "start" },
  },
  {
    id: "alleppey",
    name: "Alleppey",
    stateOrRegion: "Kerala",
    country: "India",
    category: "coastal",
    lat: 9.4981,
    lng: 76.3388,
    altitudeOrTag: "Backwaters & Canals",
    vibe: "Slow wooden houseboats, coconut canals & tranquil lagoons",
    highlight: "Gliding through backwaters with fresh filter coffee",
    emoji: "🛶",
    labelAlign: "left",
    callout: { dx: -55, dy: 8, anchor: "end" },
  },
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    stateOrRegion: "Tamil Nadu",
    country: "India",
    category: "coastal",
    lat: 9.2876,
    lng: 79.3129,
    altitudeOrTag: "Pamban Island • Ocean Cross",
    vibe: "Sea train bridge across turquoise ocean waters & Dhanushkodi ghost town",
    highlight: "Pamban Sea Bridge crossing & Ram Setu waters",
    emoji: "🌉",
    labelAlign: "right",
    callout: { dx: 38, dy: 28, anchor: "start" },
  },
  {
    id: "varkala",
    name: "Varkala",
    stateOrRegion: "Kerala",
    country: "India",
    category: "coastal",
    lat: 8.7379,
    lng: 76.7163,
    altitudeOrTag: "Red Cliffs • Arabian Sea",
    vibe: "Dramatic red sandstone cliffs towering over sunset beaches",
    highlight: "Cliff walkway cafés, ocean yoga & turquoise waves",
    emoji: "🌅",
    labelAlign: "left",
    callout: { dx: -50, dy: 24, anchor: "end" },
  },

  // ─── VIETNAM: SOUTHEAST ASIA ODYSSEY ───
  {
    id: "hanoi",
    name: "Hanoi",
    stateOrRegion: "North Vietnam",
    country: "Vietnam",
    category: "vietnam",
    lat: 21.0285,
    lng: 105.8542,
    altitudeOrTag: "Capital • Old Quarter",
    vibe: "French colonial architecture, Egg Coffee, bustling street scooter life & Hoan Kiem lake",
    highlight: "Train street buzz & aromatic pho bowls",
    emoji: "🇻🇳",
    labelAlign: "right",
  },
  {
    id: "danang",
    name: "Da Nang",
    stateOrRegion: "Central Vietnam",
    country: "Vietnam",
    category: "vietnam",
    lat: 16.0544,
    lng: 108.2022,
    altitudeOrTag: "Coastal Hub • Marble Mtns",
    vibe: "Golden Sand coastline, Dragon Bridge fire shows & marble caves",
    highlight: "My Khe Beach breeze & Ba Na Hills",
    emoji: "🐉",
    labelAlign: "right",
    callout: { dx: -45, dy: -12, anchor: "end" },
  },
  {
    id: "hoian",
    name: "Hoi An",
    stateOrRegion: "Central Vietnam",
    country: "Vietnam",
    category: "vietnam",
    lat: 15.8801,
    lng: 108.338,
    altitudeOrTag: "UNESCO Ancient Town",
    vibe: "Lantern-lit canal streets, yellow-walled merchant houses & night boat rides",
    highlight: "Floating candle lanterns on Thu Bon river",
    emoji: "🏮",
    labelAlign: "right",
    callout: { dx: 45, dy: 12, anchor: "start" },
  },
  {
    id: "hochiminh",
    name: "Ho Chi Minh City",
    stateOrRegion: "South Vietnam",
    country: "Vietnam",
    category: "vietnam",
    lat: 10.8231,
    lng: 106.6297,
    altitudeOrTag: "Saigon Metropolis",
    vibe: "Vibrant rooftop cafés, Saigon river skyline & French-Indochina history",
    highlight: "Bustling night markets & Ben Thanh energy",
    emoji: "🛵",
    labelAlign: "right",
  },
];

// Helper projection functions
function projectIndiaClassic(lat: number, lng: number) {
  // Calibrated for the classic 1000x1000 India map with full Jammu & Kashmir boundary
  const x = Math.round(27.4183 * lng - 1766.44);
  const y = Math.round(-28.6152 * lat + 1143.79);
  return { x, y };
}

function projectVietnam(lat: number, lng: number, width = 480, height = 700) {
  const minLng = 102.5;
  const maxLng = 109.8;
  const minLat = 9.8;
  const maxLat = 22.8;

  const padX = 70;
  const padY = 60;

  const x = padX + ((lng - minLng) / (maxLng - minLng)) * (width - padX * 2);
  const y = padY + ((maxLat - lat) / (maxLat - minLat)) * (height - padY * 2);

  return { x: Math.round(x), y: Math.round(y) };
}

export const TravelMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"india" | "vietnam">("india");
  const [selectedDest, setSelectedDest] = useState<TravelDestination | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const indiaDests = destinations.filter((d) => d.country === "India");
  const vietnamDests = destinations.filter((d) => d.country === "Vietnam");

  const currentCountryDests = activeTab === "india" ? indiaDests : vietnamDests;

  const filteredDests = currentCountryDests.filter((d) => {
    if (categoryFilter === "all") return true;
    return d.category === categoryFilter;
  });

  // Autoplay journey animation
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setSelectedDest((prev) => {
        const currIdx = prev ? currentCountryDests.findIndex((d) => d.id === prev.id) : -1;
        const nextIdx = (currIdx + 1) % currentCountryDests.length;
        return currentCountryDests[nextIdx];
      });
    }, 2200);

    return () => clearInterval(timer);
  }, [isPlaying, currentCountryDests]);

  const handleSelect = (dest: TravelDestination) => {
    setSelectedDest(dest);
    setIsPlaying(false);
  };

  const handleTabChange = (tab: "india" | "vietnam") => {
    setActiveTab(tab);
    setCategoryFilter("all");
    setIsPlaying(false);
    setSelectedDest(null);
  };

  // Connect sequence for route trail
  const routePoints = currentCountryDests.map((d) => {
    if (activeTab === "india") {
      return projectIndiaClassic(d.lat, d.lng);
    }
    return projectVietnam(d.lat, d.lng);
  });

  const pathD = routePoints.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    return `${acc} L ${pt.x} ${pt.y}`;
  }, "");

  return (
    <div className="rounded-3xl bg-[#090d1a]/95 border border-white/10 backdrop-blur-xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background ambient radar glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Stat Badges */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
            <Compass className="h-3.5 w-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span>Classic Explorer Atlas • {destinations.length} Destinations Mapped</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Footprints &amp; <span className="text-gradient-funky">Trails</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-xl">
            From the misty ridges of Sikkim, sacred river ghats of Varanasi, and coastal cliffs of Gokarna &amp; Kerala to the historic forts of Hyderabad &amp; lantern streets of Vietnam.
          </p>
        </div>

        {/* Tab switcher: India vs Vietnam */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#060a14] border border-white/10 self-start md:self-auto">
          <button
            onClick={() => handleTabChange("india")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${activeTab === "india"
                ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-950/40"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            <span>🇮🇳 Classic India Map</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/10 text-[10px] font-mono">{indiaDests.length}</span>
          </button>
          <button
            onClick={() => handleTabChange("vietnam")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${activeTab === "vietnam"
                ? "bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-300 border border-pink-500/40 shadow-lg shadow-pink-950/40"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            <span>🇻🇳 Vietnam Odyssey</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/10 text-[10px] font-mono">{vietnamDests.length}</span>
          </button>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-5 pb-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {activeTab === "india" ? (
            <>
              <button
                onClick={() => setCategoryFilter("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${categoryFilter === "all"
                    ? "bg-cyan-500/20 border border-cyan-400 text-cyan-300"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                  }`}
              >
                All ({indiaDests.length})
              </button>
              <button
                onClick={() => setCategoryFilter("mountains")}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${categoryFilter === "mountains"
                    ? "bg-amber-500/20 border border-amber-400 text-amber-300"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                  }`}
              >
                <Mountain className="h-3 w-3 text-amber-400" /> Mountains ({indiaDests.filter((d) => d.category === "mountains").length})
              </button>
              <button
                onClick={() => setCategoryFilter("coastal")}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${categoryFilter === "coastal"
                    ? "bg-blue-500/20 border border-blue-400 text-blue-300"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                  }`}
              >
                <Waves className="h-3 w-3 text-blue-400" /> Coastal &amp; Sea ({indiaDests.filter((d) => d.category === "coastal").length})
              </button>
              <button
                onClick={() => setCategoryFilter("hills")}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${categoryFilter === "hills"
                    ? "bg-emerald-500/20 border border-emerald-400 text-emerald-300"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                  }`}
              >
                <Coffee className="h-3 w-3 text-emerald-400" /> Ghats &amp; Hills ({indiaDests.filter((d) => d.category === "hills").length})
              </button>
              <button
                onClick={() => setCategoryFilter("heritage")}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${categoryFilter === "heritage"
                    ? "bg-purple-500/20 border border-purple-400 text-purple-300"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                  }`}
              >
                <Sparkles className="h-3 w-3 text-purple-400" /> Metros &amp; Heritage ({indiaDests.filter((d) => d.category === "heritage").length})
              </button>
            </>
          ) : (
            <div className="text-xs font-mono text-pink-300 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
              <span>Vietnam North-to-South Route (Hanoi ➔ Da Nang ➔ Hoi An ➔ Ho Chi Minh)</span>
            </div>
          )}
        </div>

        {/* Autoplay Trail Button */}
        {/* <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className={`font-mono text-xs px-3.5 h-8 gap-1.5 transition-all ${
              isPlaying
                ? "bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30"
                : "bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30"
            }`}
            variant="outline"
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5" /> Pause Journey
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5" /> Play Journey
              </>
            )}
          </Button>

          {selectedDest && (
            <button
              onClick={() => setSelectedDest(null)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Reset selection"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          )}
        </div> */}
      </div>

      {/* Main Grid: Interactive Classic SVG Map + Dispatch Inspector */}
      <div className="grid lg:grid-cols-12 gap-6 items-start mt-2">
        {/* Left Column: Interactive Vector Map (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#060a14] border border-white/10 p-2 sm:p-4 relative overflow-hidden group">
          {/* Subtle grid coordinate background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #00f5d4 1px, transparent 1px), linear-gradient(to bottom, #00f5d4 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Compass Coordinate Badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#070b16]/90 border border-white/10 font-mono text-[10px] text-zinc-400 shadow-md">
            <Navigation className="h-3 w-3 text-cyan-400" />
            <span>{activeTab === "india" ? "INDIA • 8°N - 37°N • 68°E - 97°E" : "VIETNAM • 8°N - 23°N"}</span>
          </div>

          {activeTab === "india" ? (
            /* CLASSIC INDIA SVG MAP CANVAS */
            <div className="relative w-full aspect-square max-h-[660px] mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 1000 1000"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="routeGradIndia" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffbe0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f72585" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Arrowhead Markers for Outward Callouts */}
                  <marker
                    id="callout-arrow-mountains"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ffbe0b" />
                  </marker>
                  <marker
                    id="callout-arrow-coastal"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#00f5d4" />
                  </marker>
                  <marker
                    id="callout-arrow-hills"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
                  </marker>
                  <marker
                    id="callout-arrow-heritage"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f72585" />
                  </marker>
                  <marker
                    id="callout-arrow-white"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ffffff" />
                  </marker>
                </defs>

                {/* Classic India State Map Image Layer */}
                <image
                  href="/india_classic_map_dark.svg"
                  x="0"
                  y="0"
                  width="1000"
                  height="1000"
                  opacity="0.85"
                />

                {/* Connecting Animated Journey Trail */}
                {pathD && (
                  <path
                    d={pathD}
                    fill="none"
                    stroke="url(#routeGradIndia)"
                    strokeWidth="2.4"
                    strokeDasharray="6 7"
                    className="animate-pulse"
                    filter="url(#glowFilter)"
                  />
                )}

                {/* Destination Pins on Map */}
                {filteredDests.map((dest) => {
                  const pt = projectIndiaClassic(dest.lat, dest.lng);
                  const isSelected = selectedDest?.id === dest.id;
                  const isMountain = dest.category === "mountains";
                  const isCoastal = dest.category === "coastal";
                  const isHills = dest.category === "hills";

                  const pinColor = isMountain ? "#ffbe0b" : isCoastal ? "#00f5d4" : isHills ? "#10b981" : "#f72585";
                  const markerKey = isSelected ? "white" : dest.category;

                  const hasCallout = Boolean(dest.callout);
                  let labelX = pt.x + 10;
                  let labelY = pt.y + 4;
                  let textAnchor: "start" | "end" = "start";

                  if (dest.callout) {
                    labelX = pt.x + dest.callout.dx;
                    labelY = pt.y + dest.callout.dy;
                    textAnchor = dest.callout.anchor === "end" || dest.callout.dx < 0 ? "end" : "start";
                  } else if (dest.labelAlign === "left") {
                    labelX = pt.x - 10;
                    textAnchor = "end";
                  }

                  let leaderLine = null;
                  if (dest.callout) {
                    const lineStartX = textAnchor === "end" ? labelX + 4 : labelX - 4;
                    const lineStartY = labelY - 3;
                    const vdx = pt.x - lineStartX;
                    const vdy = pt.y - lineStartY;
                    const dist = Math.hypot(vdx, vdy);
                    // Arrow stops 6.5px before pin center
                    const arrowEndX = dist > 6.5 ? pt.x - (vdx / dist) * 6.5 : pt.x;
                    const arrowEndY = dist > 6.5 ? pt.y - (vdy / dist) * 6.5 : pt.y;

                    leaderLine = (
                      <g className="pointer-events-none transition-all duration-300">
                        {isSelected && (
                          <line
                            x1={lineStartX}
                            y1={lineStartY}
                            x2={arrowEndX}
                            y2={arrowEndY}
                            stroke={pinColor}
                            strokeWidth="3.5"
                            opacity="0.4"
                            filter="url(#glowFilter)"
                          />
                        )}
                        <line
                          x1={lineStartX}
                          y1={lineStartY}
                          x2={arrowEndX}
                          y2={arrowEndY}
                          stroke={isSelected ? "#ffffff" : pinColor}
                          strokeWidth={isSelected ? 1.8 : 1.2}
                          strokeDasharray={isSelected ? "none" : "3 2"}
                          opacity={isSelected ? 1 : 0.75}
                          markerEnd={`url(#callout-arrow-${markerKey})`}
                        />
                        <circle
                          cx={lineStartX}
                          cy={lineStartY}
                          r={isSelected ? 2.5 : 1.8}
                          fill={isSelected ? "#ffffff" : pinColor}
                          opacity={0.85}
                        />
                      </g>
                    );
                  }

                  return (
                    <g
                      key={dest.id}
                      className="cursor-pointer transition-transform duration-300"
                      onClick={() => handleSelect(dest)}
                    >
                      {/* Outward arrow leader line if crowded */}
                      {leaderLine}

                      {/* Outer pulse beacon */}
                      {isSelected ? (
                        <>
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={hasCallout ? 20 : 22}
                            fill="none"
                            stroke={pinColor}
                            strokeWidth="2"
                            className="animate-ping origin-center opacity-75"
                          />
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={14}
                            fill={pinColor}
                            fillOpacity="0.3"
                          />
                        </>
                      ) : (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={9}
                          fill={pinColor}
                          fillOpacity="0.18"
                          className="hover:scale-150 transition-transform"
                        />
                      )}

                      {/* Inner Pin Dot */}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isSelected ? 6.5 : 4.5}
                        fill={pinColor}
                        stroke="#070a12"
                        strokeWidth="1.8"
                      />

                      {/* City Label Tag with shadow for readability */}
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={textAnchor}
                        fill="#060912"
                        stroke="#060912"
                        strokeWidth="3.5"
                        strokeLinejoin="round"
                        fontSize={isSelected ? "13" : "10.5"}
                        fontWeight="bold"
                        fontFamily="monospace"
                        className="select-none pointer-events-none opacity-90"
                      >
                        {dest.name}
                      </text>
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={textAnchor}
                        fill={isSelected ? "#ffffff" : "#e4e4e7"}
                        fontSize={isSelected ? "13" : "10.5"}
                        fontWeight={isSelected ? "bold" : "600"}
                        fontFamily="monospace"
                        className="select-none transition-colors"
                      >
                        {dest.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          ) : (
            /* VIETNAM SVG MAP CANVAS */
            <div className="relative w-full aspect-[480/700] max-h-[660px] mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 480 700"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker
                    id="callout-arrow-vietnam"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f72585" />
                  </marker>
                  <marker
                    id="callout-arrow-vietnam-white"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ffffff" />
                  </marker>
                </defs>

                {/* Stylized Vietnam S-Curve Contour */}
                <path
                  d="M 230 70
                     C 260 85, 290 120, 275 160
                     C 260 190, 240 230, 245 280
                     C 255 330, 295 380, 310 440
                     C 320 500, 290 560, 240 610
                     C 200 640, 180 630, 170 590
                     C 160 550, 190 500, 210 450
                     C 220 400, 200 350, 190 300
                     C 180 250, 195 200, 215 150
                     Z"
                  fill="#0b1222"
                  stroke="rgba(247, 37, 133, 0.35)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Connecting Trail */}
                {pathD && (
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#f72585"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    className="animate-pulse"
                  />
                )}

                {/* Destinations */}
                {filteredDests.map((dest) => {
                  const pt = projectVietnam(dest.lat, dest.lng);
                  const isSelected = selectedDest?.id === dest.id;

                  let labelX = pt.x + 11;
                  let labelY = pt.y + 4.5;
                  let textAnchor: "start" | "end" = "start";

                  if (dest.callout) {
                    labelX = pt.x + dest.callout.dx;
                    labelY = pt.y + dest.callout.dy;
                    textAnchor = dest.callout.anchor === "end" || dest.callout.dx < 0 ? "end" : "start";
                  }

                  let leaderLine = null;
                  if (dest.callout) {
                    const lineStartX = textAnchor === "end" ? labelX + 4 : labelX - 4;
                    const lineStartY = labelY - 3;
                    const vdx = pt.x - lineStartX;
                    const vdy = pt.y - lineStartY;
                    const dist = Math.hypot(vdx, vdy);
                    const arrowEndX = dist > 6.5 ? pt.x - (vdx / dist) * 6.5 : pt.x;
                    const arrowEndY = dist > 6.5 ? pt.y - (vdy / dist) * 6.5 : pt.y;

                    leaderLine = (
                      <g className="pointer-events-none transition-all duration-300">
                        <line
                          x1={lineStartX}
                          y1={lineStartY}
                          x2={arrowEndX}
                          y2={arrowEndY}
                          stroke={isSelected ? "#ffffff" : "#f72585"}
                          strokeWidth={isSelected ? 1.8 : 1.2}
                          strokeDasharray={isSelected ? "none" : "3 2"}
                          opacity={isSelected ? 1 : 0.75}
                          markerEnd={`url(#callout-arrow-vietnam${isSelected ? "-white" : ""})`}
                        />
                        <circle
                          cx={lineStartX}
                          cy={lineStartY}
                          r={isSelected ? 2.5 : 1.8}
                          fill={isSelected ? "#ffffff" : "#f72585"}
                          opacity={0.85}
                        />
                      </g>
                    );
                  }

                  return (
                    <g
                      key={dest.id}
                      className="cursor-pointer transition-transform duration-300"
                      onClick={() => handleSelect(dest)}
                    >
                      {/* Leader line for Vietnam callouts */}
                      {leaderLine}

                      {isSelected ? (
                        <>
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={22}
                            fill="none"
                            stroke="#f72585"
                            strokeWidth="2"
                            className="animate-ping origin-center opacity-75"
                          />
                          <circle cx={pt.x} cy={pt.y} r={15} fill="#f72585" fillOpacity="0.3" />
                        </>
                      ) : (
                        <circle cx={pt.x} cy={pt.y} r={9} fill="#f72585" fillOpacity="0.2" />
                      )}

                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isSelected ? 6.5 : 4.5}
                        fill="#f72585"
                        stroke="#070a12"
                        strokeWidth="1.8"
                      />

                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={textAnchor}
                        fill="#060912"
                        stroke="#060912"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        fontSize={isSelected ? "13" : "11"}
                        fontWeight="bold"
                        fontFamily="monospace"
                        className="select-none pointer-events-none"
                      >
                        {dest.name}
                      </text>
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={textAnchor}
                        fill={isSelected ? "#ffffff" : "#f472b6"}
                        fontSize={isSelected ? "13" : "11"}
                        fontWeight={isSelected ? "bold" : "600"}
                        fontFamily="monospace"
                        className="select-none"
                      >
                        {dest.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          )}

          {/* Interactive footer bar */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mt-2 pt-3 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400" /> Click any pin to reveal destination story
            </span>
            <span>{currentCountryDests.length} Outposts Plotted</span>
          </div>
        </div>

        {/* Right Column: Destination Dispatch Card / Passport Stamp (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Active / Selected Destination Inspector Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1224] to-[#070a14] border border-cyan-500/30 relative overflow-hidden shadow-xl">
            {/* Washi tape accent */}
            <div className="washi-tape" />

            {selectedDest ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{selectedDest.emoji}</span>
                      <span className="font-mono text-xs uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                        {selectedDest.stateOrRegion}, {selectedDest.country}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {selectedDest.name}
                    </h3>
                  </div>

                  <span className="stamp-badge bg-[#060a12] text-amber-300 border-amber-400/60 rotate-6 text-[10px]">
                    EXPLORED
                  </span>
                </div>

                {selectedDest.altitudeOrTag && (
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-950/30 border border-amber-500/20 px-3 py-1.5 rounded-xl">
                    <Mountain className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>{selectedDest.altitudeOrTag}</span>
                  </div>
                )}

                <div className="space-y-2 text-sm text-zinc-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="text-xs uppercase font-mono text-zinc-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-cyan-400" /> The Vibe
                  </div>
                  <p>{selectedDest.vibe}</p>
                </div>

                {selectedDest.highlight && (
                  <div className="text-xs text-zinc-400 font-mono flex items-start gap-2 pt-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-200">Highlight:</strong> {selectedDest.highlight}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-10 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                  <Compass className="h-6 w-6 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white">Select Any Outpost</h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  Click on any pin on the classic map or select a destination tag below to view travel dispatch, altitude, and highlights.
                </p>
                <Button
                  size="sm"
                  onClick={() => handleSelect(currentCountryDests[0])}
                  className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono"
                  variant="outline"
                >
                  Explore: {currentCountryDests[0].name}
                </Button>
              </div>
            )}
          </div>

          {/* Quick Destination Pill Grid */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#060a14] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <MapPin className="h-3.5 w-3.5 text-amber-400" /> All {currentCountryDests.length} {activeTab === "india" ? "India" : "Vietnam"} Stops
              </span>
              <span>Tap to jump</span>
            </div>

            <div className="flex flex-wrap gap-1.5 max-h-60 overflow-y-auto pr-1 scrollbar-none">
              {currentCountryDests.map((dest) => {
                const isSelected = selectedDest?.id === dest.id;
                return (
                  <button
                    key={dest.id}
                    onClick={() => handleSelect(dest)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${isSelected
                        ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30 scale-105"
                        : "bg-white/5 border border-white/5 text-zinc-300 hover:bg-white/10 hover:border-cyan-500/30"
                      }`}
                  >
                    <span>{dest.emoji}</span>
                    <span>{dest.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
