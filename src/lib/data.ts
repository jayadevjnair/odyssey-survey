export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  iconName: string;
  turnaroundTime: string;
  accuracy: string;
  priceRange: string;
  badge: string;
  shortDesc: string;
  fullOverview: string[];
  whenNeeded: string[];
  methodology: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  deliverables: string[];
  equipment: string[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}

export const COMPANY_CONTACT = {
  companyName: "Odyssey Surveyors",
  legalName: "Odyssey Surveyors Pvt. Ltd.",
  phone: "+91 79947 76610",
  rawPhone: "+917994776610",
  email: "odysseysurveyorspnkm@gmail.com",
  whatsappUrl: "https://wa.me/917994776610?text=Hi%20Odyssey%20Survey%2C%20I%20need%20a%20land%20survey%20assessment%20in%20Kerala.",
  addressHQ: "Odyssey Survey Engineering Hub, Near Private Bus Stand, NH 183, Ponkunnam, Kottayam, Kerala 686506",
  addressBranch: "Odyssey Survey Tech Centre, Main Road, Pala, Kottayam, Kerala 686575",
  districtsCovered: ["Kottayam", "Pathanamthitta", "Kollam"],
};

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: "Legal & Disputes" | "Survey Technology" | "Buyer Guides" | "Construction & Engineering" | "Land Survey Guides";
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface ServiceArea {
  slug: string;
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  overview: string;
  subDistricts: string[];
  turnaroundTime: string;
  activeCrews: number;
  completedProjects: number;
  localRegulations: string;
  geoCenter: { lat: number; lng: number };
  popularServices: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  slug: string;
  clientType: string;
  location: string;
  areaSize: string;
  category: "Infrastructure" | "Commercial" | "Residential" | "Renewable Energy" | "Industrial" | "Agricultural";
  surveyType: string;
  techUsed: string[];
  accuracyAchieved: string;
  duration: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  beforeImage: string;
  afterImage: string;
  stats: { label: string; value: string }[];
}

// 7 CORE HIGH-VALUE SERVICES WITH 500+ WORDS DETAILED CONTENT & SCHEMA
export const SERVICES_DATA: Record<string, ServiceData> = {
  "gps-survey": {
    slug: "gps-survey",
    title: "GPS & DGPS Precision Land Survey",
    shortTitle: "GPS / DGPS Survey",
    subtitle: "Millimeter-level geodetic positioning using multi-frequency RTK GNSS & differential satellite telemetry.",
    metaTitle: "GPS & DGPS Survey Services | Centimeter Precision Land Survey",
    metaDescription: "Professional DGPS & RTK GPS land survey services. Sub-centimeter georeferencing, base-rover satellite positioning & boundary coordinates with 24-hr turnaround.",
    h1: "High-Precision GPS & DGPS Land Survey Services",
    iconName: "FiCompass",
    turnaroundTime: "24 - 48 Hours",
    accuracy: "±5mm to ±10mm RTK",
    priceRange: "Custom Project Based",
    badge: "High Geodetic Precision",
    shortDesc: "Sub-centimeter geodetic land mapping utilizing dual-frequency GNSS receivers and real-time kinematic (RTK) differential networks for absolute spatial accuracy.",
    fullOverview: [
      "GPS (Global Positioning System) and DGPS (Differential Global Positioning System) land surveying represent the pinnacle of modern geospatial engineering. At Odyssey Survey, we utilize cutting-edge multi-constellation GNSS receivers (GPS, GLONASS, Galileo, BeiDou) coupled with Real-Time Kinematic (RTK) corrections to achieve sub-centimeter horizontal and vertical precision on every project.",
      "Traditional surveying methods are often susceptible to cumulative line-of-sight errors, dense foliage interference, and extensive setup delays across undulating terrains. DGPS overcomes these limitations by establishing a stationary base receiver over an established benchmark while roaming units collect thousands of spatial coordinate points in real time.",
      "Whether establishing geodetic control networks for large infrastructure corridors, mapping expansive agricultural parcels, or setting boundary benchmarks for municipal approval, Odyssey Survey delivers peerless georeferenced datasets in Universal Transverse Mercator (UTM) and custom local coordinate systems."
    ],
    whenNeeded: [
      "Establishing permanent Geodetic Control Points (GCPs) for large-scale construction masterplans",
      "Corridor mapping for national highways, railway alignments, and interstate pipeline networks",
      "Demarcating expansive agricultural estates, solar parks, and SEZ industrial zones",
      "Georeferencing legacy cadastral revenue records to modern digital GIS coordinates",
      "Topographic mapping where dense foliage or large distances obstruct traditional optical total stations"
    ],
    methodology: [
      {
        step: "01",
        title: "Reconnaissance & Benchmark Identification",
        desc: "Our survey engineers identify National Geodetic Benchmarks (GTS) or establish high-precision primary control monuments using static GNSS logging."
      },
      {
        step: "02",
        title: "Dual-Frequency Base & Rover RTK Setup",
        desc: "We deploy multi-channel DGPS receivers utilizing UHF radio or cellular NTRIP caster feeds to broadcast instant differential corrections to field rovers."
      },
      {
        step: "03",
        title: "High-Density Spatial Data Acquisition",
        desc: "Field crews systematically capture boundary vertices, physical structures, terrain elevations, and utility markers with real-time positional quality checks."
      },
      {
        step: "04",
        title: "Post-Processing & Geodetic Network Adjustment",
        desc: "Raw RINEX satellite data is adjusted using scientific baseline software to eliminate atmospheric delays and ensure absolute global accuracy."
      }
    ],
    benefits: [
      {
        title: "Sub-Centimeter Absolute Accuracy",
        desc: "Eliminates boundary ambiguity with repeatable, globally referenced latitude, longitude, and ellipsoidal elevation coordinates."
      },
      {
        title: "Rapid Turnaround on Expansive Acreages",
        desc: "Covers hundreds of acres in a single day, reducing on-site survey time by up to 70% compared to conventional traverse methods."
      },
      {
        title: "Seamless GIS & CAD Integration",
        desc: "Deliverables are exported directly into AutoCAD (DWG/DXF), ArcGIS Shapefiles, GeoJSON, and CSV coordinate tables ready for design teams."
      },
      {
        title: "Legal & Regulatory Compliance",
        desc: "Complies fully with government revenue department georeferencing standards and municipal land registry requirements."
      }
    ],
    deliverables: [
      "AutoCAD (.DWG / .DXF) Georeferenced Boundary & Feature Drawings",
      "ESRI Shapefiles (.SHP) and GeoJSON spatial attribute datasets",
      "Point Coordinate Schedule (Easting, Northing, Elevation, Feature Code in CSV/Excel)",
      "Geodetic Control Network Adjustment & Baseline Precision Report",
      "Official Licensed Surveyor Stamped & Signed Survey Certificate"
    ],
    equipment: [
      "Trimble R12i GNSS Receiver with ProPoint Engine",
      "Leica GS18 T RTK GNSS Rover with Tilt Compensation",
      "CHCI93 IMU-RTK GNSS Base & Rover Stations",
      "Trimble Business Center (TBC) & Leica Infinity Geodetic Processing Suites"
    ],
    faqs: [
      {
        q: "What is the difference between normal GPS and DGPS land surveying?",
        a: "Standard consumer GPS (like in smartphones) has an error margin of 3 to 10 meters due to atmospheric distortions and clock drift. DGPS (Differential GPS) and RTK use a fixed base station on a known benchmark to calculate satellite signal errors and transmit corrections to the rover in real time, reducing error down to 5–10 millimeters."
      },
      {
        q: "Can DGPS survey work under dense tree cover or inside buildings?",
        a: "DGPS requires clear line-of-sight to orbiting satellites. While our modern multi-constellation receivers work well through moderate canopy, heavily wooded areas or indoor environments are surveyed using hybrid setups combining DGPS control points with high-accuracy robotic Total Stations."
      },
      {
        q: "What coordinate systems do you provide for DGPS surveys?",
        a: "We provide coordinates in WGS84, UTM zones, State Plane Coordinates, or custom local grid systems specified by your civil engineering and architectural consultants."
      },
      {
        q: "How fast can Odyssey Survey mobilize for a DGPS survey in our area?",
        a: "We maintain active field crews equipped with RTK DGPS rigs across our core coverage zones and can typically deploy to your site within 24 hours of project confirmation."
      }
    ],
    relatedServices: ["topographical-survey", "land-survey", "subdivision-survey"]
  },

  "topographical-survey": {
    slug: "topographical-survey",
    title: "Topographical & Contour Survey",
    shortTitle: "Topographical Survey",
    subtitle: "Detailed 3D terrain elevation mapping, natural contours, physical features, and digital elevation models (DEM).",
    metaTitle: "Topographical Survey Services | 3D Contour & Land Elevation Mapping",
    metaDescription: "Expert topographical surveys with 3D terrain mapping, spot levels, contour lines, tree canopy & utility locations. Delivered in AutoCAD DWG & Revit BIM.",
    h1: "Professional Topographical Land & Contour Survey Services",
    iconName: "FiActivity",
    turnaroundTime: "2 - 4 Days",
    accuracy: "±2mm Electronic EDM / ±5mm Elevation",
    priceRange: "Tiered by Acreage & Terrain",
    badge: "Architect & Engineer Essential",
    shortDesc: "Comprehensive 3D site mapping capturing natural ground relief, elevation contours, trees, structures, utilities, and drainage corridors for architectural and engineering design.",
    fullOverview: [
      "A Topographical Survey is the indispensable foundation for any successful architectural, structural, or civil engineering project. It provides an exhaustive, three-dimensional representation of both the natural topography and man-made physical features across a parcel of land.",
      "At Odyssey Survey, our topographers utilize high-precision robotic total stations, multi-frequency RTK DGPS receivers, and precision digital auto-levels to map exact spot elevations, contour lines at specified intervals (0.25m, 0.5m, or 1.0m), existing building footprints, road centerlines, drainage invert levels, utility poles, and significant trees with girth and canopy spread.",
      "Without a precise topographical survey, architects risk designing foundations on inaccurate ground levels, leading to catastrophic excavation cost overruns, drainage failures, and delayed municipal building plan approvals. We deliver clean, layered AutoCAD DWG and 3D Revit-ready files engineered for direct design workflow."
    ],
    whenNeeded: [
      "Pre-design stage for residential villas, apartment complexes, and commercial commercial centers",
      "Civil engineering design for highways, bridges, storm-water drainage networks, and culverts",
      "Earthwork volume calculations (Cut and Fill optimization) for site grading and excavation contracts",
      "Flood risk modeling, watershed analysis, and hydrological retention pond engineering",
      "Landscape architecture, hill-slope stabilization, and tree preservation order compliance"
    ],
    methodology: [
      {
        step: "01",
        title: "Site Boundary & Control Establishment",
        desc: "Establishing a tight closed traverse around the perimeter tied to National Geodetic Benchmarks or local permanent datums."
      },
      {
        step: "02",
        title: "Feature & Elevation Point Cloud Capture",
        desc: "Collecting dense spot heights across terrain breaks, ridgelines, valleys, water bodies, road crowns, kerbs, and built infrastructure."
      },
      {
        step: "03",
        title: "Digital Terrain Modeling (DTM) Generation",
        desc: "Processing raw 3D vectors into a Triangulated Irregular Network (TIN) surface and generating smooth, accurate contour intervals."
      },
      {
        step: "04",
        title: "Layered CAD Drafting & QA Verification",
        desc: "Drafting organized, color-coded AutoCAD layers for levels, contours, trees, utilities, and structures, fully verified against field sketches."
      }
    ],
    benefits: [
      {
        title: "Eliminate Costly Excavation Surprises",
        desc: "Accurate spot levels and cut/fill volume models prevent unexpected earthwork billing disputes during foundation construction."
      },
      {
        title: "Flawless Architectural Masterplanning",
        desc: "Gives architects the exact physical constraints, natural slopes, and solar/drainage orientations to optimize building layouts."
      },
      {
        title: "Comprehensive Underground & Overhead Utility Mapping",
        desc: "Highlights overhead electric cables, manhole invert depths, sewer lines, and water pipes to prevent site strike hazards."
      },
      {
        title: "Expedited Municipal & Planning Approvals",
        desc: "Meets all town planning and local municipal authority requirements for site development sanction drawings."
      }
    ],
    deliverables: [
      "Layered 2D & 3D AutoCAD Drawing (.DWG / .DXF) with Standard Layering Conventions",
      "Contour Map Overlay with Major/Minor Contours and Spot Elevation Grid",
      "Digital Terrain Model (DTM) Surface & 3D Mesh for Autodesk Civil 3D / Revit",
      "Tree Schedule (Location, Girth, Canopy Diameter, Trunk Elevation)",
      "High-Resolution PDF Survey Plan with Legend, Scale Bar, and Surveyor Seal"
    ],
    equipment: [
      "Leica TS16 Robotic Total Station with 1-Second Angular Accuracy",
      "Trimble S7 Total Station with Trimble VISION Scanning",
      "Leica DNA03 High-Precision Digital Auto-Level & Invar Staff",
      "Autodesk Civil 3D, Bentley InRoads, and Global Mapper"
    ],
    faqs: [
      {
        q: "Why do architects require a Topographical Survey before designing a building?",
        a: "Architects need to know the exact ground elevations, slopes, and existing site obstacles. Designing on assumptions often leads to wrong foundation depths, steps that don't match site levels, drainage water logging, and costly redesigns."
      },
      {
        q: "What contour interval do you provide in the topographical map?",
        a: "We customize contour intervals according to your project requirements. Standard architectural surveys typically use 0.5m or 0.25m intervals for detailed villa plots, and 1.0m to 2.0m for larger infrastructure or hill terrain projects."
      },
      {
        q: "Can you calculate cut and fill earthwork quantities from the survey?",
        a: "Yes. By comparing our digital topographical terrain model with your proposed formation levels, we generate precise volumetric reports detailing exact cut volume, fill volume, and net balance in cubic meters."
      },
      {
        q: "How are trees and utilities represented on the topographic plan?",
        a: "Significant trees are plotted with trunk location, canopy radius, and ground level. Utilities like manholes include cover level and pipe invert depth where accessible."
      }
    ],
    relatedServices: ["contour-survey", "building-setting-out", "gps-survey"]
  },

  "land-survey": {
    slug: "land-survey",
    title: "Cadastral, Title & Boundary Land Survey",
    shortTitle: "Boundary & Land Survey",
    subtitle: "Authoritative property boundary verification, legal acreage calculation, title deed mapping, and municipal registration.",
    metaTitle: "Land Survey & Boundary Verification Services | Certified Surveyors",
    metaDescription: "Certified boundary land surveys for property transactions, title deed verification, encroachments & municipal sanction. Licensed surveyor stamp included.",
    h1: "Certified Boundary & Property Land Survey Services",
    iconName: "FiMap",
    turnaroundTime: "1 - 3 Days",
    accuracy: "±2mm / Cadastral Match",
    priceRange: "Fixed-Fee Available",
    badge: "Legal & Transactional Protection",
    shortDesc: "Official legal land surveying for property buyers, landowners, and developers to verify deed dimensions, establish true boundary corners, and prevent encroachment disputes.",
    fullOverview: [
      "Purchasing, selling, or developing real estate without a certified land survey exposes property owners to severe legal liabilities, boundary encroachments, and title deed discrepancies. Odyssey Survey provides authoritative, legally compliant Cadastral and Boundary Land Surveys that verify the exact physical extent and legal geometry of your real estate assets.",
      "Our licensed surveyors examine official revenue survey maps, title deeds, historical master records, and adjacent parcel records before conducting high-precision on-site boundary measurements. We match the physical fences, walls, and boundary stones against the legal deed dimensions to identify any overlaps, missing acreage, or unauthorized encroachments.",
      "Every land survey report is accompanied by a certified Survey Plan signed and sealed by our registered surveyors, serving as an unassailable legal document for property registration, bank mortgage valuation, municipal building permits, and civil court proceedings."
    ],
    whenNeeded: [
      "Due diligence before purchasing agricultural, residential, or commercial property",
      "Resolving boundary disputes with neighbors over fence, compound wall, or setback lines",
      "Applying for municipal building plan approvals and local town planning clearance",
      "Subdividing family ancestral land or partition deed registration",
      "Securing commercial bank loan approvals, mortgages, and title insurance warranties"
    ],
    methodology: [
      {
        step: "01",
        title: "Title Deed & Cadastral Revenue Map Audit",
        desc: "Retrieving official government revenue village maps, settlement records, and registered title deed sketches for historical boundary cross-referencing."
      },
      {
        step: "02",
        title: "Field Boundary Traverse & Monument Search",
        desc: "Locating historical boundary stones, physical compound walls, iron pins, and natural boundary features using millimeter-accuracy total stations."
      },
      {
        step: "03",
        title: "Deed vs. Ground Mathematical Analysis",
        desc: "Superimposing on-site measurements over the registered deed dimensions to calculate exact square footage, perimeter lengths, and any encroachment deviations."
      },
      {
        step: "04",
        title: "Certified Survey Plan Preparation & Stamping",
        desc: "Issuing the official cadastral survey plan with clear boundary dimensions, adjacent owner names, coordinate schedules, and surveyor certification."
      }
    ],
    benefits: [
      {
        title: "100% Protection Against Encroachments",
        desc: "Pinpoints exactly where your legal ownership begins and ends, preventing neighbors from illegally encroaching on your land."
      },
      {
        title: "Guaranteed Acreage & Square Footage Verification",
        desc: "Ensures you only pay for the true square footage existing on the ground, protecting you from inflated seller claims."
      },
      {
        title: "Bank & Municipal Legal Validity",
        desc: "Our certified survey plans are recognized by municipal corporations, revenue departments, and major financial institutions."
      },
      {
        title: "Hassle-Free Property Resale Value",
        desc: "Properties with verified Odyssey Survey boundary plans command higher market valuation and close significantly faster."
      }
    ],
    deliverables: [
      "Certified Boundary Survey Plan (Signed & Sealed by Licensed Surveyor)",
      "Encroachment & Discrepancy Analysis Report with Color Overlays",
      "Exact Area Calculation Certificate (Sq. Meters, Sq. Feet, Acres, Gunthas/Cents)",
      "AutoCAD (.DWG) and Print-Ready Scaled High-Res PDF Drawings",
      "Corner Monument Boundary Pegging on Site"
    ],
    equipment: [
      "Leica FlexLine TS07 Total Station",
      "Topcon GM-100 Series Precision Reflectorless Total Station",
      "Trimble Geo 7X Handheld Centimeter Sub-Foot GNSS System",
      "Cadastral Overlay GIS Engine"
    ],
    faqs: [
      {
        q: "What should I do if my survey shows my neighbor's compound wall is encroaching on my plot?",
        a: "Our certified survey report will provide exact measurements and a clear visual overlay showing the encroachment extent. This certified document is legally recognized and can be presented to your neighbor for an amicable resolution or submitted to the municipal revenue officer or civil court for legal enforcement."
      },
      {
        q: "Is a land survey mandatory before purchasing a property?",
        a: "While some buyers rely solely on paper deeds, doing so is extremely risky. Many properties have 5% to 20% area discrepancies between the registered deed and physical ground reality. A pre-purchase land survey is the single most important due diligence step to protect your investment."
      },
      {
        q: "How long does it take to get the final certified survey plan?",
        a: "Fieldwork is typically completed in 1 day for standard residential and commercial plots. After deed mathematical reconciliation and CAD drafting, the final stamped survey certificate is delivered within 48 to 72 hours."
      }
    ],
    relatedServices: ["boundary-refixing", "subdivision-survey", "topographical-survey"]
  },

  "contour-survey": {
    slug: "contour-survey",
    title: "Contour Survey & Slope Topography",
    shortTitle: "Contour Survey",
    subtitle: "High-resolution elevation contour generation, slope gradient analysis, drainage runoff modeling, and terrain cross-sections.",
    metaTitle: "Contour Survey Services | Slope Gradient & Elevation Topography",
    metaDescription: "Precision contour surveying services for slope grading, drainage analysis, cut & fill modeling, and hill terrain construction. AutoCAD Civil 3D ready.",
    h1: "High-Resolution Contour & Slope Topography Survey Services",
    iconName: "FiLayers",
    turnaroundTime: "2 - 3 Days",
    accuracy: "±5mm Vertical Elevation",
    priceRange: "Per Acre / Sloped Terrain Rate",
    badge: "Grading & Drainage Essential",
    shortDesc: "Specialized vertical elevation surveying that produces smooth, accurate contour intervals and 3D slope models for grading, drainage routing, and structural terrace design.",
    fullOverview: [
      "A Contour Survey is a specialized elevation mapping discipline that connects points of equal height above a designated datum line, providing a crystal-clear visual representation of a property's three-dimensional slope, valleys, ridges, and grade variations.",
      "At Odyssey Survey, we utilize automated robotic total stations, high-accuracy digital leveling instruments, and multi-constellation RTK DGPS base-rover systems to capture dense vertical elevation matrices across challenging undulating landscapes, terraced hillsides, and expansive development sites.",
      "Contour plans are critical for civil engineers and earthwork contractors to plan road gradients, design gravity-fed storm sewer networks, terrace uneven hillside plots, and calculate precise excavation volumes before heavy machinery mobilizes."
    ],
    whenNeeded: [
      "Hill-station villa development, resort masterplanning, and tea/coffee plantation zoning",
      "Designing gravity-fed stormwater drainage channels, retention basins, and culverts",
      "Road gradient planning, driveway slope calculation, and ramp compliance",
      "Retaining wall height engineering and structural slope stabilization studies",
      "Agricultural irrigation zoning and watershed management"
    ],
    methodology: [
      {
        step: "01",
        title: "Vertical Datum & Benchmark Tie-In",
        desc: "Establishing reference elevations linked to Mean Sea Level (MSL) or permanent project benchmarks using digital bar-code leveling."
      },
      {
        step: "02",
        title: "Grid & Feature-Based Elevation Profiling",
        desc: "Surveying a structured grid of spot elevations combined with critical breaklines along ridges, swales, steep banks, and watercourses."
      },
      {
        step: "03",
        title: "3D Surface Modeling & Interpolation",
        desc: "Interpolating continuous 3D digital elevation surfaces in Autodesk Civil 3D to generate seamless major and minor contour contours."
      },
      {
        step: "04",
        title: "Slope Angle Heatmaps & Cross-Sections",
        desc: "Producing longitudinal and cross-sectional profiles and slope gradient percentage heatmaps for engineering review."
      }
    ],
    benefits: [
      {
        title: "Optimized Gravity Drainage Systems",
        desc: "Prevents water pooling and site flooding by planning drains that leverage natural terrain flow vectors."
      },
      {
        title: "Accurate Retaining Wall Cost Estimates",
        desc: "Allows structural engineers to design retaining walls and stepped foundation terraces to exact height requirements."
      },
      {
        title: "Clear Visual Slope Gradient Mapping",
        desc: "Color-coded slope percentage maps highlight steep, unbuildable zones versus gently sloping prime building areas."
      },
      {
        title: "Volumetric Cut & Fill Optimization",
        desc: "Enables earthmoving contractors to balance cut and fill volumes on-site, drastically slashing trucking haulage expenses."
      }
    ],
    deliverables: [
      "Detailed Contour Drawing (.DWG / .DXF) with 0.25m, 0.5m, or 1m Intervals",
      "3D Surface TIN Mesh (.XML / LandXML / Autodesk Civil 3D Surface)",
      "Longitudinal and Transverse Site Cross-Sectional Profiles",
      "Slope Analysis Map (Color Heatmap Showing 0-5%, 5-15%, 15-30%, >30% Gradients)",
      "Spot Elevation Matrix Schedule with Coordinate Export"
    ],
    equipment: [
      "Leica LS15 0.2mm High-Precision Digital Level",
      "Trimble S9 0.5-Second High-Precision Robotic Total Station",
      "Trimble R12i GNSS Multi-Frequency RTK Base & Rover System",
      "Autodesk Civil 3D & Carlson Survey Software"
    ],
    faqs: [
      {
        q: "What is the difference between a Topographic Survey and a Contour Survey?",
        a: "A Topographic Survey maps both natural features and man-made objects (buildings, roads, fences, trees, utilities, spot levels). A Contour Survey focuses specifically on the vertical elevation relief and mathematical contour lines connecting points of equal height to model slope and grading."
      },
      {
        q: "Can contour surveys be conducted on heavily forested or steep hill plots?",
        a: "Yes. For large acreage plots or steep hill terrain, we deploy our multi-frequency RTK DGPS base-rovers and high-speed robotic total stations to capture high-density elevation matrices with sub-centimeter accuracy."
      },
      {
        q: "How do civil engineers use contour data for site leveling?",
        a: "Civil engineers import our 3D contour surface into CAD software to simulate proposed building pad levels and automatically calculate the exact volume of soil that needs to be cut from high points or filled into depressions."
      }
    ],
    relatedServices: ["topographical-survey", "building-setting-out", "gps-survey"]
  },

  "subdivision-survey": {
    slug: "subdivision-survey",
    title: "Land Plot Subdivision & Masterplan Survey",
    shortTitle: "Subdivision Survey",
    subtitle: "Precision parcel partitioning, layout plotting, road right-of-way demarcation, and municipal approval layouts.",
    metaTitle: "Land Subdivision & Plot Partition Survey | Odyssey Surveyors",
    metaDescription: "Professional land subdivision & layout partitioning surveys. Masterplan plot splitting, road network setting, and legal revenue partition documentation.",
    h1: "Land Plot Subdivision & Layout Partitioning Survey Services",
    iconName: "FiMaximize",
    turnaroundTime: "3 - 5 Days",
    accuracy: "±2mm Plot Corner Tolerance",
    priceRange: "Per Plot / Layout Scale",
    badge: "Developers & Landowners",
    shortDesc: "Comprehensive parcel partitioning and layout surveying for real estate developers and families looking to divide large land tracts into individual legally marketable plots.",
    fullOverview: [
      "Subdividing a large land parcel into individual residential or commercial plots requires meticulous engineering precision, adherence to local zoning and setback laws, and exact mathematical boundary balancing. Odyssey Survey assists real estate developers, commercial promoters, and private landowners through every stage of the subdivision process.",
      "We begin by conducting an exhaustive perimeter boundary and topographic survey of the parent land parcel. Using these precise boundary coordinates, we collaborate with your architects and town planners to draft optimized plot layouts that maximize sellable carpet area while strictly satisfying statutory road width, open space, utility easement, and green belt mandates.",
      "Once statutory approvals are secured, our field engineers stake out every single plot corner with durable concrete or steel monuments, ensuring that every buyer receives the exact dimensions stated in their legal sale deed."
    ],
    whenNeeded: [
      "Gated community residential layout development and commercial park subdivision",
      "Family land partition settlements and legal inheritance plot distribution",
      "Government housing schemes, smart city developments, and industrial estate zoning",
      "Splitting a commercial land parcel for joint-venture development or partial asset liquidation",
      "Demarcating internal road networks, public parks, and utility sub-stations"
    ],
    methodology: [
      {
        step: "01",
        title: "Parent Parcel Boundary & Topo Verification",
        desc: "Establishing the unassailable outer perimeter of the parent estate and mapping existing slope and access roads."
      },
      {
        step: "02",
        title: "Mathematical Plot Layout & Zoning Compliance",
        desc: "Drafting the CAD master layout conforming to local town planning regulations (minimum road widths, plot setbacks, and park allocations)."
      },
      {
        step: "03",
        title: "On-Site Plot Corner Monumentation & Staking",
        desc: "Using millimeter-precision total stations to physically peg and monument all internal plot corners, road intersections, and curves."
      },
      {
        step: "04",
        title: "Individual Plot Cadastral Plans & Area Schedules",
        desc: "Generating individual plot deed plans with precise boundary dimensions, bearings, and area certificates for registration."
      }
    ],
    benefits: [
      {
        title: "Maximized Sellable Plot Yield",
        desc: "Our CAD spatial optimization algorithms maximize the number of sellable plots while ensuring full compliance with planning norms."
      },
      {
        title: "Zero Future Boundary Disputes Between Plot Buyers",
        desc: "Durable corner monumentation and sub-centimeter accuracy prevent boundary overlaps between adjoining plot owners."
      },
      {
        title: "Smooth Municipal & Town Planning Clearances",
        desc: "Our subdivision layout drawings are pre-formatted to meet all statutory requirements of local planning bodies and development authorities."
      },
      {
        title: "Ready-to-Register Individual Plot Deed Sketches",
        desc: "We provide individual deed sketches for every single partitioned plot, streamlining the registration and sale deed execution."
      }
    ],
    deliverables: [
      "Master Subdivision Layout Plan with Complete Dimension & Road Schedule",
      "Individual Plot Survey Plans (with North Arrow, Plot Numbers, and Boundary Bearings)",
      "Plot Coordinate Table (Northing / Easting of every corner peg)",
      "Statutory Open Space & Civic Amenity Area Calculation Certificate",
      "On-Site Pegging & Concrete Boundary Monumentation"
    ],
    equipment: [
      "Leica TS16 Robotic Total Stations with Laser Plummet",
      "Trimble TSC7 Field Controllers with Precision Land Survey Software",
      "Dual-Frequency DGPS Rovers for Global Layout Georeferencing"
    ],
    faqs: [
      {
        q: "What is the process of getting a land subdivision approved by local authorities?",
        a: "The process begins with an accurate boundary survey of the parent land. Next, a compliant layout plan showing proposed plots, internal roads, and open spaces is submitted to the local town planning authority. After provisional sanction, on-site demarcation is verified before final layout approval."
      },
      {
        q: "Can you divide ancestral property among multiple heirs with equal value or area?",
        a: "Yes. We work closely with family members and legal advisors to partition ancestral land precisely according to family settlement agreements, ensuring each portion receives fair road frontage, access, and equal square footage."
      },
      {
        q: "How are individual plot corners marked on the ground?",
        a: "We mark plot corners with high-visibility steel rebar pins, boundary stones, or concrete monuments based on the client's preference, allowing buyers and contractors to immediately identify their property."
      }
    ],
    relatedServices: ["land-survey", "boundary-refixing", "building-setting-out"]
  },

  "boundary-refixing": {
    slug: "boundary-refixing",
    title: "Boundary Refixing & Demarcation",
    shortTitle: "Boundary Refixing",
    subtitle: "Re-establishing lost boundary markers, resolving property line disputes, and setting permanent stone/peg monuments.",
    metaTitle: "Boundary Refixing & Demarcation Survey | Dispute Resolution",
    metaDescription: "Re-establish missing property corners, resolve neighbor boundary disputes & install permanent demarcation pegs. Certified surveyor on-site verification.",
    h1: "Property Boundary Refixing & Demarcation Survey Services",
    iconName: "FiCrosshair",
    turnaroundTime: "1 - 2 Days",
    accuracy: "±2mm Exact Deed Alignment",
    priceRange: "Standard Fixed Rates",
    badge: "Dispute & Demarcation Specialist",
    shortDesc: "Precision re-establishment of missing, destroyed, or disputed property boundary markers using historical title records, revenue maps, and geodetic coordinate matching.",
    fullOverview: [
      "Over time, original boundary stones, corner pegs, and property markers are frequently displaced, buried, or destroyed due to road expansions, agricultural plowing, neighboring construction, or natural erosion. When boundary lines become unclear, costly disputes with neighbors often erupt.",
      "Odyssey Survey specializes in Boundary Refixing and Demarcation. Our licensed survey specialists retrieve historical revenue coordinates and registered title deeds, establish a mathematical survey network from undisputed surrounding benchmarks, and accurately re-establish every missing property corner down to the exact millimeter.",
      "Whether you are preparing to erect a new compound wall, settling an ongoing disagreement with an adjacent landowner, or re-demarcating an inherited plot, our on-site boundary refixing service provides clarity, legal backing, and peace of mind."
    ],
    whenNeeded: [
      "Original boundary stones or corner pegs have been removed, destroyed, or shifted",
      "Constructing a perimeter security compound wall, fence, or retaining wall",
      "Active disputes or misunderstandings with neighboring property owners over property lines",
      "Re-establishing true boundaries after municipal road widening or infrastructure acquisition",
      "Pre-construction verification to ensure building foundations do not violate statutory setback lines"
    ],
    methodology: [
      {
        step: "01",
        title: "Historical Deed & Revenue Map Reconstruction",
        desc: "Analyzing original registered deeds, government village maps, and undisputed neighboring boundary markers."
      },
      {
        step: "02",
        title: "High-Precision Geodetic Control Traverse",
        desc: "Establishing a closed total station traverse from confirmed external control monuments surrounding the property."
      },
      {
        step: "03",
        title: "Laser-Guided Corner Point Pegging",
        desc: "Guiding field technicians to the exact mathematical boundary vertices using sub-millimeter laser total station tracking."
      },
      {
        step: "04",
        title: "Permanent Monumentation & Demarcation Certificate",
        desc: "Fixing durable steel pins or boundary stones with red markings, backed by a formal Demarcation Certificate signed by our licensed surveyor."
      }
    ],
    benefits: [
      {
        title: "Definitive Resolution to Neighbor Disputes",
        desc: "Provides scientific, unbiased, and mathematically proven boundary locations that eliminate emotional arguments."
      },
      {
        title: "Avoid Costly Compound Wall Demolitions",
        desc: "Ensures newly constructed perimeter walls are erected strictly within your legal property lines, avoiding municipal notices."
      },
      {
        title: "Permanent Durable Corner Monumentation",
        desc: "We physically plant heavy-duty boundary monuments or steel survey pins that resist weather and site disturbance."
      },
      {
        title: "Court-Admissible Demarcation Report",
        desc: "Our reports and drawings are structured to meet statutory evidentiary standards for municipal arbitration or civil court proceedings."
      }
    ],
    deliverables: [
      "Official Boundary Demarcation Certificate with Licensed Surveyor Seal",
      "Physical On-Site Installation of Boundary Corner Pegs / Stones",
      "Boundary Discrepancy & Deviation Map (Showing Deed vs Actual Fence Lines)",
      "AutoCAD (.DWG) and Scaled PDF Demarcation Drawings",
      "Geo-Tagged High-Resolution Photographic Log of all Installed Monuments"
    ],
    equipment: [
      "Leica TS16 1” High-Precision Total Station",
      "Trimble S7 Total Station with High-Power Green Laser Pointer",
      "Steel Core Survey Pegs & Concrete Monument Kits",
      "RTK Network Rovers for Geodetic Verification"
    ],
    faqs: [
      {
        q: "What happens if a neighbor refuses to accept the refixed boundary markers?",
        a: "Our surveyors operate strictly as independent, licensed technical experts adhering to official revenue maps and registered deeds. We provide a comprehensive, signed Demarcation Report detailing the mathematical evidence. If necessary, our surveyors can provide expert witness testimony in revenue office hearings or civil court proceedings."
      },
      {
        q: "Can you refix boundaries if all original boundary stones are missing?",
        a: "Yes. By establishing a survey network from surrounding undisturbed neighborhood benchmarks, road centerlines, and revenue map control points, we mathematically recalculate and reconstruct the exact coordinates of your missing corners."
      },
      {
        q: "How should I prepare for a boundary refixing site visit?",
        a: "Please keep copies of your registered sale deed, title sketch, property tax receipts, and any previous survey drawings available. It is also good practice to inform neighboring landowners of the scheduled survey date."
      }
    ],
    relatedServices: ["land-survey", "building-setting-out", "subdivision-survey"]
  },

  "building-setting-out": {
    slug: "building-setting-out",
    title: "Building Setting Out",
    shortTitle: "Building Setting Out",
    subtitle: "Precision transfer of architectural blueprints to ground: column centers, pile locations, grid lines, and foundation benchmarks.",
    metaTitle: "Building Setting Out & Construction Grid Layout Services",
    metaDescription: "Construction layout & building setting out services. Transfer CAD architectural drawings to site: grid lines, pile points, column centers & level datum.",
    h1: "Building Setting Out Survey Services",
    iconName: "FiGrid",
    turnaroundTime: "Same Day / Next Day Mobilization",
    accuracy: "±1mm Sub-Millimeter Construction Tolerance",
    priceRange: "Per Grid / Day Rate / Structural Phase",
    badge: "Contractors & Structural Engineers",
    shortDesc: "Sub-millimeter transfer of architectural and structural CAD drawings onto the physical construction site, marking exact grid lines, foundation piles, column axes, and datum levels.",
    fullOverview: [
      "Building Setting Out (also known as Construction Staking or Gridline Layout) is the critical engineering bridge between an architect's digital CAD blueprint and the physical reality of concrete, steel, and masonry on site. Even a minor 20mm positioning error during foundation setting out can lead to structural eccentricity, clashes with municipal setback regulations, and catastrophic rectification costs.",
      "Odyssey Survey provides sub-millimeter precision setting out services for general contractors, structural engineering firms, and private builders. Our setting out engineers transfer architectural grid axes, foundation pile centers, retaining wall alignments, lift shaft cores, and vertical datum benchmarks directly to the ground using ultra-precise robotic total stations.",
      "We provide continuous setting out support across all construction milestones: from initial site boundary setbacks and excavation limits to pile layout, plinth beam grid lines, column starter bars, and verticality alignment checks for high-rise commercial structures."
    ],
    whenNeeded: [
      "Staking out building corner offsets and excavation cut lines prior to earthmoving",
      "Marking center points for foundation piles, bored cast-in-situ piles, and pile caps",
      "Transferring structural grid lines (X & Y axes) onto concrete blinding and plinth beams",
      "Establishing permanent TBM (Temporary Benchmarks) for finished floor levels (FFL)",
      "Checking verticality (plumb) and structural alignment of columns and shear walls in multi-story towers"
    ],
    methodology: [
      {
        step: "01",
        title: "CAD Blueprint Coordinate Extraction & QA",
        desc: "Extracting structural grid intersections, column centerlines, and pile coordinates from architectural/structural DWG files and cross-checking against site setbacks."
      },
      {
        step: "02",
        title: "Primary Site Control Baseline Establishment",
        desc: "Fixing robust, undisturbed reference control pegs and offset targets well clear of active excavation and heavy vehicle traffic."
      },
      {
        step: "03",
        title: "Sub-Millimeter Grid Staking & Marking",
        desc: "Projecting grid lines with robotic total stations, marking intersections with steel nails on profile boards, masonry paint, or rebar markers."
      },
      {
        step: "04",
        title: "As-Built Setting Out Verification & Sign-Off",
        desc: "Measuring all staked points independently to issue a signed As-Built Setting Out Quality Assurance Report for project structural engineers."
      }
    ],
    benefits: [
      {
        title: "Zero Structural Alignment Errors",
        desc: "Ensures columns and load-bearing elements align exactly with structural design drawings down to ±1mm tolerance."
      },
      {
        title: "Guaranteed Municipal Setback Compliance",
        desc: "Guarantees the building footprint respects all statutory front, rear, and side setback requirements from property boundaries."
      },
      {
        title: "Prevent Construction Delays & Rework",
        desc: "Fast, systematic setting out allows excavation and foundation casting teams to proceed with maximum speed and complete confidence."
      },
      {
        title: "Permanent On-Site Elevation Benchmarks",
        desc: "We establish verified Finished Floor Level (FFL) and plinth datum markers across the site for masonry and floor finishing crews."
      }
    ],
    deliverables: [
      "Signed Setting Out QA Certificate for Structural Engineer & Project Consultant",
      "As-Staked Coordinate Verification Schedule (Design vs Actual Comparison)",
      "Physical Profile Board / Batter Board Gridline Reference Marking on Site",
      "Temporary Benchmark (TBM) Elevation Schedule linked to Project Datum",
      "As-Built Pile & Column Position Deviation Map"
    ],
    equipment: [
      "Leica TS16 1-Second Robotic Total Station with Laser Tracker",
      "Trimble S9 0.5-Second Sub-Millimeter Total Station",
      "Leica NA730 High-Precision Automatic Optical Level",
      "Autodesk AutoCAD & Revit Structural Integration Link"
    ],
    faqs: [
      {
        q: "Why should we hire Odyssey Survey instead of relying on masonry string lines?",
        a: "Traditional string line and tape measure methods accumulate large geometric errors, especially across uneven ground or long spans. A 50mm error in column alignment creates structural eccentricities that structural engineers may reject. Our robotic total stations ensure sub-millimeter precision, complete mathematical verification, and signed QA reports."
      },
      {
        q: "How early before excavation should building setting out take place?",
        a: "Initial site boundary setbacks and excavation lines should be staked 2 to 3 days prior to excavation. Once excavation is complete and plain cement concrete (PCC) is laid, our team returns to mark the exact column centers and starter bar positions."
      },
      {
        q: "Can you provide recurring setting out services for high-rise buildings?",
        a: "Yes. We offer continuous stage-wise setting out contracts for high-rise towers, transferring gridlines and vertical datum up each floor slab and verifying column plumbness as the building rises."
      }
    ],
    relatedServices: ["topographical-survey", "boundary-refixing", "land-survey"]
  }
};

// 10 SEO BLOG ARTICLES ENGINEERED FOR LOCAL RANKINGS
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-a-licensed-land-surveyor",
    title: "How to Choose a Licensed Land Surveyor in Your Area: 7 Crucial Factors",
    metaTitle: "How to Choose a Licensed Land Surveyor | 7 Crucial Tips (2026)",
    metaDescription: "Guide to hiring the best licensed land surveyor. Learn what certifications to check, equipment standards, turnaround times, and pricing red flags.",
    excerpt: "Choosing the wrong surveyor can result in boundary disputes, municipal plan rejections, and foundation errors. Here is the definitive checklist for hiring a trusted surveyor.",
    category: "Buyer Guides",
    readTime: "6 min read",
    publishDate: "January 15, 2026",
    author: {
      name: "Er. Rajesh K. Varma",
      role: "Chief Geodetic Surveyor",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Always verify government survey licensing and RICS / civil engineering credentials.",
      "Inquire whether they use modern DGPS/RTK and Total Stations vs outdated manual chains.",
      "Ensure deliverables include signed CAD DWG, PDF certificates, and stamped legal plans.",
      "Check if the surveyor carries professional indemnity insurance and local municipal recognition."
    ],
    tags: ["Land Survey", "Hiring Guide", "Licensed Surveyor", "Property Buying"],
    content: [
      "Whether you are purchasing a residential plot, planning a multi-story commercial development, or resolving a boundary dispute with a neighbor, hiring the right land surveyor is the single most critical decision you will make.",
      "A poor survey with 50mm errors can cause municipal building plan rejections, foundation misalignments, and costly legal battles. Here are the 7 crucial criteria to evaluate before hiring a land surveyor.",
      "1. Verify Professional Licensing and Certifications: Ensure your surveyor is registered with state revenue boards, local municipal authorities, and professional bodies like RICS or the Institution of Surveyors.",
      "2. Assess Surveying Technology & Equipment: A modern surveying firm should deploy multi-frequency GNSS DGPS receivers (Trimble/Leica), robotic total stations with sub-second angular precision, and precision digital auto-levels rather than outdated manual optical instruments.",
      "3. Clear Deliverables & Layered CAD Standards: Always confirm what files you will receive. Quality surveyors deliver layered AutoCAD DWG/DXF files, scaled signed PDF survey maps, and CSV coordinate schedules.",
      "4. Local Municipal Experience & Revenue Knowledge: Surveyors with deep local experience understand village revenue maps, settlement surveys, local setback laws, and town planning requirements.",
      "5. Fixed Quotations vs Hidden Site Fees: Demand transparent, all-inclusive pricing that covers fieldwork, calculation, CAD drafting, and certified stamping without surprise travel or monumentation surcharges.",
      "6. Turnaround Time & Mobilization Speed: When real estate transactions or construction deadlines are pressing, look for firms that mobilize within 24–48 hours and deliver final certified drawings in 2–4 days.",
      "7. Client Testimonials & Project Portfolio: Review verified case studies from architects, builders, and developers who have worked with the surveying team on comparable projects."
    ]
  },
  {
    slug: "boundary-disputes-property-owners-legal-guide",
    title: "Boundary Disputes: What Property Owners Must Know Before Building Walls",
    metaTitle: "Boundary Disputes & Property Line Solutions | Legal Survey Guide",
    metaDescription: "How to resolve neighbor boundary disputes, handle compound wall encroachments, and legally re-establish property lines with a certified land survey.",
    excerpt: "Neighbor encroaching on your land? Discover how certified boundary surveys, historical revenue maps, and legal demarcation resolve boundary conflicts peacefully.",
    category: "Legal & Disputes",
    readTime: "7 min read",
    publishDate: "January 22, 2026",
    author: {
      name: "Adv. Sneha N. Rao",
      role: "Senior Real Estate & Title Legal Advisor",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Never construct a compound wall based on visual assumptions or old tree lines.",
      "An independent, licensed cadastral land survey provides court-admissible evidence.",
      "Historical revenue maps and registered deed dimensions take legal precedence over oral claims.",
      "Follow a structured 4-step dispute resolution roadmap: Survey -> Notice -> Mediation -> Revenue Authority."
    ],
    tags: ["Boundary Dispute", "Encroachment", "Land Law", "Demarcation"],
    content: [
      "Property boundary disputes are among the most common and emotionally contentious legal conflicts between neighboring landowners. A neighbor extending their garden fence by 1 foot or building a compound wall across your legal setback can lead to lost property value and years in civil court.",
      "Why Boundary Disputes Occur: Disputes typically arise when original boundary stones are lost, roads are widened without re-demarcation, or previous owners built fences based on informal verbal understandings rather than certified title deed dimensions.",
      "Step 1: Obtain a Certified Boundary Survey: Before confronting a neighbor or hiring a lawyer, engage an independent licensed surveying firm like Odyssey Survey to conduct a precision boundary verification. The surveyor will cross-reference your title deed with government revenue village records.",
      "Step 2: Review the Encroachment Analysis Map: A professional survey produces a color-coded discrepancy drawing highlighting the exact overlap area in square feet or square meters.",
      "Step 3: Initiate Amicable Resolution with Evidence: Present the signed survey certificate to the neighbor. In over 80% of cases, seeing objective mathematical evidence and official revenue coordinate alignments leads to an immediate, peaceful agreement.",
      "Step 4: Formal Revenue Office Demarcation: If the dispute persists, submit the survey report along with a formal demarcation petition to the local Tehsildar or revenue land records department for joint government verification."
    ]
  },
  {
    slug: "topographic-vs-contour-survey-differences",
    title: "Topographic vs Contour Survey: What's the Difference and Which Do You Need?",
    metaTitle: "Topographic vs Contour Survey: Key Differences Explained (2026)",
    metaDescription: "Understand the differences between a Topographical Survey and a Contour Survey. Learn what each measures, cost differences, and which one your architect needs.",
    excerpt: "Confused between topographic and contour surveys? Learn the exact technical distinctions, deliverables, and which survey is required for your specific project.",
    category: "Survey Technology",
    readTime: "5 min read",
    publishDate: "February 02, 2026",
    author: {
      name: "Er. Rajesh K. Varma",
      role: "Chief Geodetic Surveyor",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Topographic surveys map both physical features (structures, trees, utilities) and spot elevations.",
      "Contour surveys focus specifically on vertical height variations and slope gradient lines.",
      "Most architectural projects require a combined Topographic & Contour Survey.",
      "Contour intervals are customized based on terrain: 0.25m for villas to 1.0m for large infrastructure."
    ],
    tags: ["Topographic Survey", "Contour Survey", "Civil Engineering", "Site Planning"],
    content: [
      "When embarking on a new construction or development project, clients often ask: 'Do I need a Topographic Survey, a Contour Survey, or both?' While the two terms are frequently used interchangeably, they serve distinct technical functions in site planning.",
      "What is a Topographical Survey? A Topographical Survey is a holistic 3D inventory of all physical features on a plot. This includes boundary walls, existing building footprints, adjacent roads, tree locations with trunk girth and canopy spread, utility poles, storm drains, manholes, and natural water bodies.",
      "What is a Contour Survey? A Contour Survey is specifically concerned with vertical relief and slope dynamics. It maps imaginary lines connecting points of identical elevation above Mean Sea Level (MSL). A contour map reveals at a glance whether the land slopes gently, drops into a ravine, or forms a natural ridge.",
      "Which Survey Does Your Project Require? For residential home construction, commercial complexes, and resort developments, architects require a Combined Topographic and Contour Survey. This provides the design team with the structural footprint constraints alongside the 3D elevation relief needed for foundation and drainage design.",
      "Deliverables Comparison: Topographic surveys yield comprehensive 2D/3D CAD drawings with distinct layers for structures, trees, and utilities. Contour surveys yield 3D TIN surfaces, slope percentage heatmaps, and longitudinal cut/fill cross-sections."
    ]
  },
  {
    slug: "dgps-rtk-vs-total-station-accuracy-comparison",
    title: "DGPS & RTK vs Traditional Total Station: Accuracy & Speed Comparison",
    metaTitle: "DGPS / RTK vs Total Station: Accuracy, Speed & Cost Compared",
    metaDescription: "Comprehensive comparison between DGPS (RTK GNSS) and Electronic Total Stations. When to use satellite positioning vs optical laser measurement on site.",
    excerpt: "Explore how satellite DGPS and optical Total Stations compare in accuracy, speed, line-of-sight requirements, and cost for small and large-scale land surveys.",
    category: "Survey Technology",
    readTime: "6 min read",
    publishDate: "February 10, 2026",
    author: {
      name: "Er. Amit S. Deshmukh",
      role: "Geospatial Technology Lead",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "DGPS / RTK excels in wide, open acreages and high-speed georeferencing without line of sight.",
      "Total Stations excel in congested urban alleys, indoors, under dense forest canopy, and for structural layout.",
      "Modern best practice uses a hybrid approach: DGPS for geodetic control and Total Station for detail.",
      "RTK delivers ±5mm to ±10mm accuracy; high-end robotic Total Stations deliver ±1mm to ±2mm."
    ],
    tags: ["DGPS", "Total Station", "RTK", "Survey Technology"],
    content: [
      "In modern geospatial engineering, two flagship instruments dominate the surveying landscape: Differential GPS (DGPS / RTK GNSS) and Electronic Total Stations (ETS). Understanding their strengths ensures your survey is executed with maximum speed and sub-millimeter precision.",
      "How DGPS & RTK Work: DGPS utilizes dual-frequency satellite receivers connected to GPS, GLONASS, Galileo, and BeiDou constellations. By placing a base station over a known coordinate and using Real-Time Kinematic (RTK) radio or cellular telemetry, rover units instantly fix coordinates to ±5mm accuracy across expansive distances without requiring line of sight between points.",
      "How Total Stations Work: A Total Station combines an electronic theodolite with an Electronic Distance Meter (EDM) and internal microprocessor. It emits an invisible infrared or laser beam to measure exact horizontal angles, vertical angles, and slope distances to a reflective glass prism or directly onto physical surfaces (reflectorless mode).",
      "Accuracy Face-Off: High-precision 1-second Total Stations provide unmatched local accuracy of ±1mm + 1.5ppm, making them essential for building setting out and structural gridlines. DGPS provides absolute global georeferencing without cumulative traverse drift over kilometers.",
      "The Hybrid Advantage at Odyssey Survey: Rather than treating these tools as mutually exclusive, Odyssey Survey utilizes a hybrid methodology. We establish primary geodetic control monuments using DGPS, and deploy robotic Total Stations for micro-precision boundary corners, tree centers, and building gridlines."
    ]
  },
  {
    slug: "land-survey-cost-guide-2026",
    title: "How to Prepare for a Land Survey: Complete Planning Guide & Key Milestones",
    metaTitle: "Land Survey Preparation Guide | Planning, Scope & Timeline Factors",
    metaDescription: "Comprehensive guide to land survey planning. Learn key factors influencing survey scopes, required documentation, and how to schedule your survey.",
    excerpt: "Preparing for a boundary, topographic, or DGPS survey? Discover key site preparation steps, documentation checklists, and how to plan your project timeline.",
    category: "Land Survey Guides",
    readTime: "5 min read",
    publishDate: "February 18, 2026",
    author: {
      name: "Er. Rajesh K. Varma",
      role: "Chief Geodetic Surveyor",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Survey scope depends on parcel size, terrain complexity, survey type, and required deliverables.",
      "Ensuring site accessibility and perimeter clearance significantly expedites field team progress.",
      "Clear documentation such as revenue maps and deed extracts ensures 100% legal alignment.",
      "Conducting precision pre-purchase surveys prevents long-term boundary disputes and foundation errors."
    ],
    tags: ["Land Survey Guide", "Site Planning", "Documentation", "Fieldwork"],
    content: [
      "When embarking on property acquisition or architectural design, proper site planning is essential for a seamless land surveying process.",
      "Key Factors That Shape Your Survey Scope:",
      "1. Size and Geometry of the Parcel: A standard rectangular residential plot requires less field time than an expansive multi-acre parcel with numerous boundary vertices and creek boundaries.",
      "2. Terrain and Vegetation Density: Flat, clear land allows rapid robotic total station and DGPS movement. Steep, rocky hill slopes or dense plantation parcels require high-density elevation grid profiling and RTK DGPS geodetic base-rover mapping.",
      "3. Type of Survey Required: A boundary verification establishes property extents, while a high-density 3D topographic survey captures 0.25m contour intervals, utilities, and tree canopy schedules.",
      "4. Required Output Deliverables: Standard 2D CAD DWG and signed PDF certificates versus 3D BIM Revit surface models, GeoTIFF orthomosaics, and Point Cloud LAS files.",
      "5. Site Accessibility & Documentation: Providing historical revenue maps and ensuring unhindered boundary line access maximizes survey speed.",
      "Professional Service Standards: At Odyssey Survey, we provide transparent project milestone schedules and certified reports. Contact our dispatch team for a rapid technical assessment tailored to your project requirements."
    ]
  },
  {
    slug: "building-setting-out-construction-importance",
    title: "What is Building Setting Out and Why is it Crucial Before Laying Foundations?",
    metaTitle: "Building Setting Out & Construction Grid Layout | Civil Guide",
    metaDescription: "Learn why professional building setting out is critical before foundation excavation. Prevent setback violations, column eccentricity & structural rework.",
    excerpt: "A 20mm setting out mistake can ruin a multi-story building. Discover why contractors rely on robotic total stations for foundation grid line layout.",
    category: "Construction & Engineering",
    readTime: "6 min read",
    publishDate: "March 01, 2026",
    author: {
      name: "Er. Amit S. Deshmukh",
      role: "Geospatial Technology Lead",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Setting out translates 2D/3D CAD architectural gridlines onto physical ground.",
      "Prevents building violations against municipal front and side setback rules.",
      "Ensures columns, piles, and elevator shafts are placed without structural eccentricity.",
      "Provides permanent Temporary Benchmarks (TBM) for finished floor levels."
    ],
    tags: ["Building Setting Out", "Construction", "Civil Engineering", "Foundations"],
    content: [
      "Before an excavator scoops a single cubic meter of earth or concrete is poured into foundation trenches, a critical engineering step must occur: Building Setting Out.",
      "Setting Out is the precise mathematical process of transferring the architectural and structural design coordinates from digital drawings directly onto the physical job site.",
      "The High Cost of Setting Out Errors: In construction, tolerances are measured in millimeters. If a corner column is placed 30mm out of position, the error carries up through every floor slab of the building, creating beam twists, plumbing misalignments, and potential structural distress.",
      "Key Milestones in the Setting Out Workflow:",
      "1. Site Boundary Setback Verification: Verifying that the proposed building footprint respects statutory distances from all legal property boundaries.",
      "2. Excavation Line Staking: Marking the perimeter of earthwork excavation with batter boards and reference pegs placed safely outside the trench collapse zone.",
      "3. Foundation Pile & Column Axis Layout: Setting exact center nails for bored cast-in-situ piles, column starter bars, and shear walls on hardened PCC blinding.",
      "4. Vertical Datum & FFL Establishment: Transferring verified Mean Sea Level elevations to permanent site structures to guide plinth and floor level casting."
    ]
  },
  {
    slug: "subdivision-survey-step-by-step-guide",
    title: "Subdivision Survey: Step-by-Step Guide to Splitting Your Land Plot Legally",
    metaTitle: "Land Subdivision Survey Guide | How to Split Property Legally",
    metaDescription: "Step-by-step guide to land subdivision and plot partitioning. Learn statutory road norms, CAD layout optimization, and revenue partition deed execution.",
    excerpt: "Looking to divide a family estate or develop a residential plotted layout? Here is the complete roadmap from perimeter survey to registered plot deeds.",
    category: "Buyer Guides",
    readTime: "7 min read",
    publishDate: "March 12, 2026",
    author: {
      name: "Adv. Sneha N. Rao",
      role: "Senior Real Estate & Title Legal Advisor",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Always start with an unassailable outer perimeter survey of the parent parcel.",
      "Design road networks and open space reservations according to local town planning bylaws.",
      "Physically monument all internal plot corners with durable concrete stones.",
      "Prepare separate cadastral deed sketches for each partitioned plot for smooth registry."
    ],
    tags: ["Subdivision", "Plot Splitting", "Layout Design", "Real Estate"],
    content: [
      "Subdividing a large land parcel into multiple individual plots is one of the most lucrative real estate strategies. Whether you are developing a commercial plotted community or dividing family ancestral property among siblings, following a structured legal and surveying process is essential.",
      "Step 1: The Parent Boundary & Topographic Survey: Before drawing internal partition lines, a millimeter-precision survey of the parent perimeter must be conducted to establish true legal boundaries and natural drainage slopes.",
      "Step 2: Master Layout Design & Statutory Zoning: Working with architects and surveyors, develop a layout that optimizes sellable carpet area while strictly satisfying statutory requirements for minimum road widths (e.g. 9m, 12m, or 18m), open space reserves (10%), and utility corridors.",
      "Step 3: Town Planning Authority Sanction: Submit the layout drawing to the local development authority or municipal corporation for technical approval and development clearance.",
      "Step 4: Precision On-Site Corner Demarcation: Field survey crews use robotic total stations to peg every single internal plot corner with durable concrete monuments, ensuring zero boundary ambiguity for future buyers.",
      "Step 5: Partition Deed Registration & Mutation: Prepare individual plot survey sketches with certified dimensions, boundary bearings, and area certificates for registration at the sub-registrar office."
    ]
  },
  {
    slug: "dgps-surveying-large-acreages-hill-terrain",
    title: "High-Precision DGPS & Total Station Surveying for Hill Slopes, Large Acreages, and Terraced Terrain",
    metaTitle: "High-Precision DGPS Surveying for Large Acreages & Hill Slopes (2026)",
    metaDescription: "Discover how multi-frequency RTK DGPS and robotic total stations map complex hill estates with sub-centimeter vertical accuracy.",
    excerpt: "Traditional manual surveys struggle on steep hills and dense plantations. Learn how multi-frequency RTK DGPS base-rovers deliver millimeter precision with unrivaled speed.",
    category: "Survey Technology",
    readTime: "6 min read",
    publishDate: "March 20, 2026",
    author: {
      name: "Er. Amit S. Deshmukh",
      role: "Geospatial Technology Lead",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Multi-frequency RTK DGPS receivers capture ultra-high-resolution 3D digital terrain models with millimeter accuracy.",
      "Dual base-rover configurations overcome steep canopy obstructions without losing satellite lock.",
      "Produces 3D surface meshes, Digital Elevation Models (DEM), and layered AutoCAD contour maps.",
      "Critical for highway corridors, hill estates, agricultural terracing, and infrastructure masterplans."
    ],
    tags: ["DGPS Survey", "RTK GNSS", "Hill Topography", "3D Contour Mapping"],
    content: [
      "Surveying rugged hill terrain, expansive plantation valleys, or large commercial sites with traditional manual optical instruments is time-consuming and prone to cumulative error.",
      "High-precision RTK enterprise GNSS receivers like the Trimble R12i and Leica GS18 T combined with geodetic control networks have transformed land surveying for large parcels.",
      "How DGPS RTK Telemetry Works: Multi-constellation satellite receivers lock onto GPS, GLONASS, Galileo, and BeiDou signals. A dedicated on-site base station transmits real-time correction vectors to mobile rovers, calculating true 3D spatial coordinates within seconds.",
      "Post-Processing & True Ground Surface Filtering: Advanced surface modeling software extracts pure bare-earth Digital Elevation Models (DEM) and ultra-precise 0.25m contour lines for direct CAD import.",
      "Key Applications: Road corridor alignment, agricultural estate boundary validation, watershed drainage design, hill slope stabilization, and earthwork cut-and-fill volume audits."
    ]
  },
  {
    slug: "boundary-refixing-reestablishing-missing-pegs",
    title: "Boundary Refixing & Demarcation: How to Re-Establish Missing Property Pegs",
    metaTitle: "How to Re-Establish Missing Property Boundary Pegs | Demarcation",
    metaDescription: "Lost your property boundary stones? Learn how licensed surveyors use historical revenue maps and geodetic coordinates to re-fix boundary corners accurately.",
    excerpt: "Boundary stones destroyed by construction or road widening? Discover the scientific method for recovering lost property corners without guesswork.",
    category: "Legal & Disputes",
    readTime: "5 min read",
    publishDate: "April 02, 2026",
    author: {
      name: "Er. Rajesh K. Varma",
      role: "Chief Geodetic Surveyor",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Never guess missing boundary corners using old trees, hedges, or neighbor opinions.",
      "Surveyors re-establish points by mathematical intersection from verified external benchmarks.",
      "Certified demarcation reports provide legal protection before constructing permanent compound walls.",
      "Heavy-duty rebar and concrete markers prevent future marker loss."
    ],
    tags: ["Boundary Refixing", "Property Corners", "Land Demarcation", "Survey Pins"],
    content: [
      "It is a scenario faced by thousands of landowners: you visit your vacant land after a few years, only to find that the original boundary stones have been knocked over by bulldozers, buried under silt, or removed during adjacent road construction.",
      "Why You Should Never 'Guess' Property Corners: Erecting a compound wall based on guesswork or informal neighbor pointers is a recipe for legal disaster. If your wall encroaches on a neighbor's plot by even 10 centimeters, they have the legal right to obtain a court stay order or municipal demolition notice.",
      "The Scientific Refixing Methodology: Odyssey Survey utilizes a mathematical resection and traverse method. We locate two or more undisputed permanent benchmarks in the surrounding neighborhood (such as verified government survey monuments, permanent road junctions, or revenue boundary stones).",
      "Using the exact distances and angles recorded in your registered deed and government revenue maps, our laser total stations pinpoint the exact mathematical vertex of your missing corner to within ±2 millimeters.",
      "Permanent Demarcation: Once verified, our field team drives heavy-duty steel survey pins or installs concrete boundary markers and issues an official Demarcation Certificate with geo-tagged photographic evidence."
    ]
  },
  {
    slug: "checklist-land-purchase-essential-survey-documents",
    title: "Checklist for Land Purchase: 7 Essential Survey Documents Before Buying",
    metaTitle: "Land Purchase Survey Checklist | 7 Essential Documents (2026)",
    metaDescription: "Essential survey checklist before buying land. Verify true acreage, check for hidden encroachments, examine topography, and confirm title boundaries.",
    excerpt: "Don't sign a land purchase agreement without checking these 7 vital survey documents. Protect yourself from title fraud, fake acreage, and legal disputes.",
    category: "Buyer Guides",
    readTime: "7 min read",
    publishDate: "April 15, 2026",
    author: {
      name: "Adv. Sneha N. Rao",
      role: "Senior Real Estate & Title Legal Advisor",
      avatar: "/equipment.png"
    },
    keyTakeaways: [
      "Always demand an independent pre-purchase boundary survey before paying deposit advances.",
      "Verify that on-ground physical square footage matches the legal registered title deed.",
      "Check for high-tension power line easements, underground pipelines, and road widening reservations.",
      "Examine a 3D topographic slope map to ensure the plot is not located in a flood basin."
    ],
    tags: ["Land Purchase", "Due Diligence", "Real Estate Checklist", "Title Verification"],
    content: [
      "Buying a plot of land or commercial development site is a major financial milestone. Yet, thousands of buyers fall into costly traps every year because they rely solely on legal paper title checks without verifying on-ground physical reality.",
      "Here is the definitive 7-point surveying checklist every property buyer and developer must complete before executing a sale deed.",
      "1. Certified Boundary Verification Plan: An independent survey showing that the physical boundaries (fences, walls, stones) match the registered deed dimensions and revenue settlement records.",
      "2. True Ground Area Certificate: Confirming that the physical square footage or acreage matches the seller's claim. Many plots have 5% to 15% missing area due to historical encroachments.",
      "3. Encroachment & Setback Audit Report: Clear confirmation that adjacent neighbors have not encroached onto the plot, and that future construction can meet statutory road setbacks.",
      "4. Topographical Elevation & Slope Map: Checking ground relief, flood levels, natural drainage channels, and potential soil excavation costs.",
      "5. Utility & Easement Verification: Identifying overhead high-tension electricity lines, buried water/gas pipelines, public footpaths, or right-of-way easements that could restrict building.",
      "6. Masterplan & Road Widening Alignment Overlay: Checking whether municipal town planning authorities have earmarked any portion of the front boundary for future road widening.",
      "7. Corner Monumentation Sign-Off: Ensuring all boundary corners are physically marked with durable steel pins or stones and handed over with GPS coordinate schedules."
    ]
  }
];

// SERVICE AREAS FOR LOCAL SEO DOMINANCE (KOTTAYAM, PATHANAMTHITTA, KOLLAM & SURROUNDING HUBS)
export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "ponkunnam-kanjirappally",
    name: "Ponkunnam & Kanjirappally",
    region: "Kerala (Main HQ Office)",
    metaTitle: "Land Survey in Ponkunnam & Kanjirappally | Odyssey Survey HQ",
    metaDescription: "Odyssey Survey head office at Ponkunnam. Precision DGPS, topographic contouring, rubber plantation estate mapping & boundary refixing in Kanjirappally & Highrange.",
    h1: "Precision Land Surveying in Ponkunnam & Kanjirappally (HQ)",
    overview: "Operating from our primary engineering headquarters in Ponkunnam, Odyssey Survey provides rapid 24-hour geodetic field mobilization across Ponkunnam, Kanjirappally, Mundakayam, and the Highrange foothills.",
    subDistricts: ["Ponkunnam Hub", "Kanjirappally", "Chirakkadavu", "Elikkulam", "Manimala", "Mundakayam", "Koottickal", "Erumely", "Vazhoor"],
    turnaroundTime: "24 - 48 Hours",
    activeCrews: 8,
    completedProjects: 520,
    localRegulations: "Headquarters base station providing continuous RTK GNSS differential corrections across Kottayam and Highrange belts.",
    geoCenter: { lat: 9.5658, lng: 76.7645 },
    popularServices: ["gps-survey", "topographical-survey", "contour-survey", "boundary-refixing"]
  },
  {
    slug: "pala-meenachil",
    name: "Pala & Meenachil Taluk",
    region: "Kerala (Branch Office)",
    metaTitle: "Land Survey in Pala & Meenachil | Precision Digital Surveyors",
    metaDescription: "Licensed land surveyors in Pala, Ramapuram, Bharananganam & Erattupetta. 3D hill contouring, boundary refixing & construction setting out by certified surveyors.",
    h1: "Digital Land Surveying in Pala & Meenachil Taluk",
    overview: "From our dedicated branch office in Pala, our licensed surveyors deliver sub-centimeter electronic total station surveys for commercial developments, residential plots, and undulating hill slopes across Meenachil Taluk.",
    subDistricts: ["Pala Town", "Bharananganam", "Ramapuram", "Erattupetta", "Kadaplamattom", "Mutholy", "Kozhuvanal", "Moonnilavu", "Teekoy"],
    turnaroundTime: "24 - 48 Hours",
    activeCrews: 6,
    completedProjects: 410,
    localRegulations: "Certified for Pala Municipality building permits, KPBR/KMBR compliance, and Meenachil Taluk revenue sketch demarcation.",
    geoCenter: { lat: 9.7126, lng: 76.6833 },
    popularServices: ["building-setting-out", "topographical-survey", "contour-survey", "subdivision-survey"]
  },
  {
    slug: "kottayam-central",
    name: "Kottayam Central & Town",
    region: "Kerala",
    metaTitle: "Land Survey in Kottayam | DGPS & Topographic Land Surveyors",
    metaDescription: "Licensed land surveyors in Kottayam, Ettumanoor, Pampady & Kumarakom. 24-hr DGPS, contour mapping, boundary demarcation & digital CAD drawings.",
    h1: "Precision Land Survey Services in Kottayam District",
    overview: "Delivering enterprise-grade geodetic and cadastral surveying across Kottayam municipality, commercial business centers, residential layouts, and lakeside developments.",
    subDistricts: ["Kottayam Town", "Ettumanoor", "Pampady", "Kumarakom", "Manarcad", "Ayarkkunnam", "Puthuppally", "Vaikom", "Nattakom"],
    turnaroundTime: "24 - 48 Hours",
    activeCrews: 7,
    completedProjects: 490,
    localRegulations: "Full compliance with Kerala Revenue Department, Survey & Land Records Directorate, and LSGD municipal building bylaws.",
    geoCenter: { lat: 9.5916, lng: 76.5222 },
    popularServices: ["topographical-survey", "land-survey", "gps-survey", "boundary-refixing"]
  },
  {
    slug: "pathanamthitta-thiruvalla",
    name: "Pathanamthitta & Thiruvalla",
    region: "Kerala",
    metaTitle: "Land Survey in Pathanamthitta & Thiruvalla | Certified Surveyors",
    metaDescription: "Professional digital land survey in Pathanamthitta, Thiruvalla, Adoor, Ranni & Kozhencherry. Boundary demarcation, DGPS & contour mapping.",
    h1: "Topographic & Cadastral Land Survey in Pathanamthitta",
    overview: "Supporting NRI property investors, commercial developers, and infrastructure projects across Thiruvalla town, Pathanamthitta headquarters, Adoor, and Ranni hill tracts.",
    subDistricts: ["Pathanamthitta Town", "Thiruvalla", "Adoor", "Ranni", "Kozhencherry", "Konni", "Mallappally", "Pandalam", "Kumbanad"],
    turnaroundTime: "24 - 48 Hours",
    activeCrews: 6,
    completedProjects: 380,
    localRegulations: "Adheres to Kerala Panchayath Building Rules (KPBR), municipal town planning, and District Collectorate land records standards.",
    geoCenter: { lat: 9.2648, lng: 76.7870 },
    popularServices: ["subdivision-survey", "boundary-refixing", "land-survey", "topographical-survey"]
  },
  {
    slug: "kollam-district",
    name: "Kollam & Karunagappalli",
    region: "Kerala",
    metaTitle: "Land Survey in Kollam & Karunagappalli | DGPS & Marine Survey",
    metaDescription: "Accredited land survey services in Kollam, Karunagappalli, Kottarakkara, Punalur & Paravur. Sub-centimeter DGPS, building setting out & plot subdivision.",
    h1: "Precision Land Surveying Services in Kollam District",
    overview: "Providing precision geospatial solutions to Kollam Corporation, port corridors, industrial parks, highway widenings, and residential layouts across Kollam and Karunagappalli.",
    subDistricts: ["Kollam Corporation", "Karunagappalli", "Kottarakkara", "Punalur", "Chavara", "Paravur", "Kundara", "Anchal", "Sasthamkotta"],
    turnaroundTime: "24 - 48 Hours",
    activeCrews: 6,
    completedProjects: 350,
    localRegulations: "Full compliance with Kollam Municipal Corporation, CRZ coastal regulations, and District Survey Office demarcation standards.",
    geoCenter: { lat: 8.8932, lng: 76.6141 },
    popularServices: ["gps-survey", "topographical-survey", "building-setting-out", "subdivision-survey"]
  },
  {
    slug: "changanassery-kuttanad",
    name: "Changanassery & Central Travancore",
    region: "Kerala",
    metaTitle: "Land Survey in Changanassery & Central Kerala | Topographic Surveys",
    metaDescription: "Digital land surveying across Changanassery, Chengannur, Mavelikkara & Kuttanad. Precision boundary verification, flood level elevation mapping & CAD drawings.",
    h1: "Digital Land Surveying in Changanassery & Central Kerala",
    overview: "Specialized low-lying wetland and elevation surveying, flood datum reference checks, boundary dispute resolution, and plotted layout drafting in Changanassery and adjoining taluks.",
    subDistricts: ["Changanassery Town", "Vakathanam", "Perunna", "Kurichi", "Chengannur", "Mavelikkara", "Kavalam", "Nedumudi", "Champakulam"],
    turnaroundTime: "24 - 48 Hours",
    activeCrews: 5,
    completedProjects: 290,
    localRegulations: "Certified for water-body setback demarcation, wetland conservation guidelines, and LSGD construction permits.",
    geoCenter: { lat: 9.4449, lng: 76.5369 },
    popularServices: ["topographical-survey", "contour-survey", "land-survey", "boundary-refixing"]
  },
  {
    slug: "erumeli-mundakayam",
    name: "Erumeli & Mundakayam",
    region: "Kerala (Kottayam Highrange)",
    metaTitle: "Land Survey in Erumeli & Mundakayam | Licensed DGPS Surveyors",
    metaDescription: "Precision digital land surveying in Erumeli, Mundakayam, Koruthodu, Mukkoottuthara & Highrange estates. Sub-centimeter DGPS, hill slope contouring & boundary refixing.",
    h1: "Precision Land Surveying in Erumeli & Mundakayam",
    overview: "Providing high-precision DGPS RTK satellite positioning, estate boundary demarcation, Sabarimala pilgrimage corridor mapping, and rubber plantation contour surveys across Erumeli, Mundakayam, and surrounding foothill regions.",
    subDistricts: ["Erumeli Town", "Erumeli South", "Mundakayam", "Mukkoottuthara", "Koruthodu", "Peruvanthanam", "Kanichar", "Pampa Valley", "Vechoochira"],
    turnaroundTime: "24 - 48 Hours",
    activeCrews: 6,
    completedProjects: 310,
    localRegulations: "Certified for Erumeli Grama Panchayath building approvals, plantation land partitions, and revenue survey sketch demarcation.",
    geoCenter: { lat: 9.4883, lng: 76.8457 },
    popularServices: ["gps-survey", "contour-survey", "topographical-survey", "boundary-refixing"]
  },
  {
    slug: "ranni-pathanamthitta",
    name: "Ranni & Pamba Valley",
    region: "Kerala (Pathanamthitta District)",
    metaTitle: "Land Survey in Ranni & Pathanamthitta Foothills | Odyssey Survey",
    metaDescription: "Expert land surveying services across Ranni, Pazhavangadi, Perunad, Angadi & Vadasserikkara. DGPS RTK, contour mapping, riverfront surveys & CAD drafting.",
    h1: "Digital Land Surveying Services in Ranni & Pamba Valley",
    overview: "Specialized hill terrain and river basin land surveying across Ranni, Pazhavangadi, Vadasserikkara, and rubber plantation estates with fast 24-hour crew dispatch and court-admissible signed survey certificates.",
    subDistricts: ["Ranni Town", "Pazhavangadi", "Ranni Perunad", "Angadi", "Vadasserikkara", "Chittar", "Seethathodu", "Ayiroor", "Chethakkal"],
    turnaroundTime: "24 - 48 Hours",
    activeCrews: 5,
    completedProjects: 285,
    localRegulations: "Full adherence to Pathanamthitta District Revenue guidelines, river buffer norms, and Panchayath building sanctions.",
    geoCenter: { lat: 9.3828, lng: 76.7865 },
    popularServices: ["topographical-survey", "gps-survey", "contour-survey", "subdivision-survey"]
  }
];

// PORTFOLIO & CASE STUDIES (KERALA REGION)
export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "cs-1",
    title: "37-Acre Rubber & Spices Plantation Hill Slope Topographic & Boundary Survey",
    slug: "rubber-plantation-contour-survey",
    clientType: "Agricultural Estate & Family Trust Owners",
    location: "Ponkunnam / Kanjirappally, Kerala",
    areaSize: "37 Acres",
    category: "Agricultural",
    surveyType: "DGPS & 3D Contour Elevation Survey",
    techUsed: ["Trimble R12i GNSS", "Leica TS16 Robotic Station", "Autodesk Civil 3D"],
    accuracyAchieved: "±5mm Geodetic Precision",
    duration: "3 Days Fieldwork / 3 Days CAD Delivery",
    summary: "Complete 3D digital terrain modeling and boundary demarcation for a 37-acre undulating rubber and spice estate in Ponkunnam to plan hillside terracing, natural drainage channels, and official family partition boundaries.",
    challenge: "Dense rubber tree canopy and steep 35-degree rocky hill slopes obstructing traditional optical lines of sight.",
    solution: "Deployed multi-frequency RTK DGPS control points on clearing ridges combined with robotic electronic total stations along internal footpaths to capture 0.25m elevation contours.",
    deliverables: ["AutoCAD 3D Surface Model", "0.25m Contour Interval Map", "Slope Stability Cross-Sections", "Geo-referenced Boundary Schedule"],
    beforeImage: "/equipment.png",
    afterImage: "/equipment.png",
    stats: [
      { label: "Acreage Mapped", value: "37 Acres" },
      { label: "Elevation Tolerance", value: "±5mm" },
      { label: "Terracing Efficiency", value: "+30% Yield" }
    ]
  },
  {
    id: "cs-2",
    title: "Commercial Retail & Multiplex Setting Out & Column Grid Layout",
    slug: "commercial-retail-setting-out",
    clientType: "Commercial Building Contractor",
    location: "Pala, Kottayam, Kerala",
    areaSize: "85,000 Sq.Ft Built-Up",
    category: "Commercial",
    surveyType: "Building Setting Out & Foundation Grid Alignment",
    techUsed: ["Leica TS16 1-Second Robotic Station", "Digital Optical Levels", "Precision Laser Plummets"],
    accuracyAchieved: "±1mm Sub-Millimeter Structural Precision",
    duration: "Multi-Stage Construction Contract",
    summary: "Provided continuous precision column setting out, foundation pile centers, and floor level elevation transfers for a multi-level commercial complex in the heart of Pala.",
    challenge: "Tight urban plot boundaries adjoining main arterial roads with zero tolerance for setback deviations under Pala Municipal bylaws.",
    solution: "Established dual permanent bedrock reference monuments and conducted pre-pour column axis verification before every concrete casting stage.",
    deliverables: ["Setback Verification Certificates", "Foundation Pile Deviation Reports", "Finished Floor Level (FFL) Benchmarks"],
    beforeImage: "/equipment.png",
    afterImage: "/equipment.png",
    stats: [
      { label: "Built-Up Area", value: "85,000 Sq.Ft" },
      { label: "Gridline Tolerance", value: "±1mm" },
      { label: "Setback Compliance", value: "100% Approved" }
    ]
  },
  {
    id: "cs-3",
    title: "28-Acre Residential Villa Layout Subdivision & Boundary Demarcation",
    slug: "residential-villa-subdivision",
    clientType: "Township Developer",
    location: "Thiruvalla / Pathanamthitta, Kerala",
    areaSize: "28 Acres (110 Plots)",
    category: "Residential",
    surveyType: "Land Subdivision & Cadastral Demarcation",
    techUsed: ["Trimble S7 Total Station", "CHCNAV i93 RTK GNSS", "AutoCAD Map 3D"],
    accuracyAchieved: "±2mm Plot Corner Precision",
    duration: "5 Days Fieldwork / 4 Days Drafting",
    summary: "Complete boundary reconciliation with historical village revenue records, internal 9-meter road network design, and physical concrete monumentation for 110 premium residential villa plots.",
    challenge: "Complex historical boundary claims and overgrown boundary ditches along neighboring private properties.",
    solution: "Conducted joint mathematical reconciliation using certified revenue sketches and permanently pegged all 440 plot corners with durable concrete survey pins.",
    deliverables: ["110 Individual Registered Plot Sketches", "Master Layout Dimension Schedule", "Panchayath Approval Drawing Set"],
    beforeImage: "/equipment.png",
    afterImage: "/equipment.png",
    stats: [
      { label: "Plots Demarcated", value: "110 Plots" },
      { label: "Sellable Area Boost", value: "+5.4% Yield" },
      { label: "LSGD Sanction", value: "First-Pass Approved" }
    ]
  },
  {
    id: "cs-4",
    title: "15-Acre Mixed-Use Commercial Estate DGPS & Contour Survey",
    slug: "commercial-estate-dgps-survey",
    clientType: "Commercial Property Developer & Civil Engineers",
    location: "Kollam - Karunagappalli, Kerala",
    areaSize: "15 Acres",
    category: "Commercial",
    surveyType: "DGPS Boundary & 3D Topographic Contour Survey",
    techUsed: ["Trimble R12i RTK GNSS", "Leica TS16 Robotic Total Station", "Autodesk Civil 3D"],
    accuracyAchieved: "±5mm Geodetic Precision",
    duration: "2 Days Fieldwork / 3 Days CAD Delivery",
    summary: "Comprehensive 15-acre DGPS land boundary demarcation and 3D contour topographic survey covering natural terrain levels, boundary verification with revenue sketches, and civil engineering site plan preparation.",
    challenge: "Irregular plot geometry with dense perimeter tree cover and adjoining tidal water canal requiring seamless geodetic coordinate integration.",
    solution: "Established high-precision DGPS base-rover RTK control points tied to the national geodetic grid and deployed robotic total stations to measure all internal topography and boundary coordinates.",
    deliverables: ["Layered AutoCAD DWG Survey Map", "0.5m Contour Elevation Model", "Point Coordinate Table (CSV)", "Certified Boundary Demarcation Certificate"],
    beforeImage: "/equipment.png",
    afterImage: "/equipment.png",
    stats: [
      { label: "Area Measured", value: "15 Acres" },
      { label: "Points Captured", value: "3,500+ Points" },
      { label: "Accuracy Level", value: "±5mm RTK" }
    ]
  }
];

// COMPANY STATS & TESTIMONIALS (KERALA REGION)
export const COMPANY_STATS = [
  {
    numericValue: 150,
    suffix: "+",
    decimals: 0,
    value: "150+",
    label: "Surveys Completed",
    subtext: "Across Central & South Kerala"
  },
  {
    numericValue: 99.9,
    suffix: "%",
    decimals: 1,
    value: "99.9%",
    label: "Precision Rate",
    subtext: "Sub-centimeter accuracy"
  },
  {
    numericValue: 5,
    suffix: "+",
    decimals: 0,
    value: "5+",
    label: "Field Experience",
    subtext: "Senior licensed surveyors"
  },
  {
    numericValue: 24,
    suffix: "h",
    decimals: 0,
    value: "24h",
    label: "Rapid Mobilization",
    subtext: "Kottayam, Pathanamthitta & Kollam"
  }
];

export const TESTIMONIALS = [
  {
    name: "Ar. Thomas Mathew",
    role: "Principal Architect, Mathew & Associates Architects",
    text: "Odyssey Survey is our trusted surveying partner across Kottayam and central Kerala. Their 3D contour terrain models and layered CAD drawings integrate directly into Autodesk Revit, allowing our team to design foundations for undulating hill slopes in Pala with complete confidence.",
    location: "Pala, Kottayam",
    rating: 5,
    project: "Commercial Complexes & Luxury Hillside Villas"
  },
  {
    name: "Adv. K. R. Suresh Kumar",
    role: "Property Legal Consultant & Title Advocate",
    text: "Whenever my clients face land boundary disputes or compound wall encroachments in Pathanamthitta or Thiruvalla, Odyssey Survey is the only firm I recommend. Their mathematical reconciliation with historical village revenue records provides court-admissible clarity that settles disputes peacefully.",
    location: "Pathanamthitta, Kerala",
    rating: 5,
    project: "Boundary Demarcation & Title Due Diligence"
  },
  {
    name: "Dr. Reji Varghese",
    role: "NRI Estate Owner & Developer",
    text: "Before dividing our ancestral 30-acre property in Ponkunnam into family shares, we hired Odyssey for a DGPS boundary and topographic survey. Their team was on-site within 24 hours, pegged every plot corner with concrete markers, and provided flawless municipal partition drawings.",
    location: "Ponkunnam, Kottayam",
    rating: 5,
    project: "Estate Subdivision & DGPS Georeferencing"
  }
];
