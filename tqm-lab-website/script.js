const pages = {
  "index.html": "home",
  "research.html": "research",
  "team-pi.html": "people",
  "team-current-members.html": "members",
  "team-alumni.html": "alumni",
  "publications.html": "publications",
  "facilities.html": "methods",
  "facilities-lab.html": "lab-methods",
  "facilities-central.html": "central-methods",
  "achievements.html": "highlights",
  "teaching.html": "teaching",
  "gallery.html": "gallery",
  "join-us.html": "join",
  "contact-us.html": "contact"
};

const page = pages[window.location.pathname.split("/").pop()] || "home";
const researchImage = "assets/quantum-materials-research.png";
const scholarUrl = "https://scholar.google.com/citations?user=9gQE2IYAAAAJ&hl=en";
const iacsUrl = "https://www.iacs.res.in/";
const materialsSchoolUrl = "https://www.iacs.res.in/maincontroller.php?navid=14&subnavid=73";

const navigation = [
  ["Home", "index.html", "home"],
  ["Research", "research.html", "research"],
  ["People", "team-pi.html", "people"],
  ["Publications", "publications.html", "publications"],
  ["Methods", "facilities.html", "methods"],
  ["Teaching", "teaching.html", "teaching"],
  ["Highlights", "achievements.html", "highlights"],
  ["Gallery", "gallery.html", "gallery"],
  ["Join", "join-us.html", "join"],
  ["Contact", "contact-us.html", "contact"]
];

const imageFigure = (className = "") => `
  <figure class="research-figure ${className}">
    <img src="${researchImage}" alt="Research overview showing single-crystal growth, quantum-materials research themes, material-characterisation methods and potential applications" width="1152" height="768">
    <figcaption>Research overview · crystal growth, quantum magnetism and materials characterisation</figcaption>
  </figure>`;

const card = (number, title, text, tone = "") => `
  <article class="topic-card ${tone}">
    <span class="topic-number">${number}</span>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>`;

const layouts = {
  home: {
    title: "Quantum Materials Laboratory | IACS Kolkata",
    description: "Experimental research in quantum magnetic and electronic materials at the Indian Association for the Cultivation of Science, Kolkata.",
    content: `
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">QUANTUM MATERIALS LABORATORY · KOLKATA</p>
          <h1>Understanding quantum matter, <em>from crystal to phenomenon.</em></h1>
          <p class="lede">We grow and study magnetic and electronic materials to explore how structure, interactions and disorder give rise to new states of matter.</p>
          <p class="hero-affiliation">Led by Dr Santanu Pakhira · Assistant Professor, School of Materials Sciences, IACS</p>
          <div class="hero-actions">
            <a class="button primary" href="research.html">Explore the research <span>→</span></a>
            <a class="text-link" href="team-pi.html">Meet the principal investigator</a>
          </div>
        </div>
        ${imageFigure("hero-figure")}
      </section>
      <section class="intro section-wrap">
        <div>
          <p class="eyebrow">OUR INSTITUTION</p>
          <h2>Independent discovery, grounded in materials.</h2>
        </div>
        <div>
          <p class="large-copy">The laboratory is based at the <a href="${iacsUrl}" target="_blank" rel="noopener noreferrer">Indian Association for the Cultivation of Science (IACS)</a>, Kolkata, in its School of Materials Sciences.</p>
          <p class="muted-copy">From synthesis to measurement, our work connects carefully prepared materials with their magnetic, thermal and electronic behaviour.</p>
        </div>
      </section>
      <section class="research-strip">
        <div class="section-wrap">
          <div class="section-heading">
            <div><p class="eyebrow">RESEARCH LANDSCAPE</p><h2>Materials that reveal new physics</h2></div>
            <a class="text-link" href="research.html">Discover our research <span>→</span></a>
          </div>
          <div class="topic-grid">
            ${card("01", "Frustrated magnetism", "Competing interactions, low-dimensional magnets and spin-glass behaviour.", "tone-coral")}
            ${card("02", "Magnetic topology", "Topological materials and magnetic order in quantum systems.", "tone-cyan")}
            ${card("03", "Correlated electrons", "Itinerant magnetism and electronic behaviour in intermetallic materials.", "tone-gold")}
            ${card("04", "Functional materials", "Rare-earth and Heusler alloys with potential for spintronics and energy.", "tone-blue")}
          </div>
        </div>
      </section>
      <section class="method-section section-wrap">
        <div class="method-visual" aria-hidden="true">
          <div class="crystal-diagram"><span></span><i></i><b></b></div>
          <p class="diagram-label">GROW → CHARACTERISE → UNDERSTAND</p>
        </div>
        <div class="method-copy">
          <p class="eyebrow">AN EXPERIMENTAL APPROACH</p>
          <h2>Make the material.<br>Measure what it does.</h2>
          <p>Crystal growth and polycrystalline synthesis are paired with structural, magnetic, thermal and transport measurements to investigate material properties.</p>
          <a class="text-link" href="facilities.html">Explore methods <span>→</span></a>
        </div>
      </section>
      <section class="featured-publications">
        <div class="section-wrap">
          <div class="section-heading">
            <div><p class="eyebrow">RECENT RESEARCH</p><h2>Selected publications</h2></div>
            <a class="text-link" href="publications.html">View selected work <span>→</span></a>
          </div>
          <div class="publication-preview">
            <article><span>2025 · PHYSICAL REVIEW B</span><h3>Al₂MnCu: A magnetically ordered member of the Heusler alloy family despite having a valence electron count of 24</h3></article>
            <article><span>2025 · JOURNAL OF ALLOYS AND COMPOUNDS</span><h3>Detection of magnetic skyrmion-like feature in the magnetocaloric properties of Gd₂Ir₀.₉₇Si₂.₉₇</h3></article>
            <article><span>2024 · NATURE COMMUNICATIONS</span><h3>Low-energy electronic structure in the unconventional charge-ordered state of ScV₆Sn₆</h3></article>
          </div>
        </div>
      </section>
      <section class="contact-banner">
        <div class="section-wrap contact-banner-inner">
          <div><p class="eyebrow">CONNECT WITH THE LAB</p><h2>Interested in quantum materials?</h2></div>
          <a class="button light" href="contact-us.html">Get in touch <span>→</span></a>
        </div>
      </section>`
  },
  research: {
    title: "Research",
    description: "Research directions and materials investigated by the Quantum Materials Laboratory at IACS Kolkata.",
    intro: "From crystal growth to emergent behaviour",
    summary: "The laboratory studies how composition, crystal structure and competing interactions shape the magnetic and electronic properties of quantum materials.",
    content: `
      <section class="page-section section-wrap">
        ${imageFigure("research-overview")}
        <div class="section-heading"><div><p class="eyebrow">QUESTIONS WE EXPLORE</p><h2>Four connected research directions</h2></div></div>
        <div class="detail-grid">
          ${card("01", "Frustrated and low-dimensional magnetism", "How competing interactions, reduced dimensionality and disorder shape magnetic ground states, transitions and spin-glass behaviour.", "tone-coral")}
          ${card("02", "Magnetic topological materials", "Magnetic order and electronic structure in topological materials, including candidate systems such as Eu-based pnictides and intermetallics.", "tone-blue")}
          ${card("03", "Itinerant and correlated magnetism", "The relationship between electronic bands, carrier tuning and magnetic order in correlated intermetallic systems.", "tone-cyan")}
          ${card("04", "Heusler and rare-earth materials", "Magnetic Heusler alloys and rare-earth compounds, including their structural, magnetic and magnetocaloric properties.", "tone-gold")}
        </div>
      </section>
      <section class="soft-section">
        <div class="section-wrap split-content">
          <div><p class="eyebrow">FROM SYNTHESIS TO PHYSICS</p><h2>A materials-led experimental workflow.</h2></div>
          <ol class="workflow-list">
            <li><b>Prepare</b><span>Grow single crystals or synthesise polycrystalline samples.</span></li>
            <li><b>Establish structure</b><span>Use diffraction and complementary characterisation to understand the material.</span></li>
            <li><b>Measure</b><span>Map magnetic, thermal and transport responses as conditions change.</span></li>
            <li><b>Interpret</b><span>Relate measured properties to composition, structure and electronic behaviour.</span></li>
          </ol>
        </div>
      </section>`
  },
  people: {
    title: "Principal Investigator",
    description: "Profile and research background of Dr Santanu Pakhira, Assistant Professor at IACS Kolkata.",
    intro: "Dr Santanu Pakhira",
    summary: "Assistant Professor · School of Materials Sciences · Indian Association for the Cultivation of Science, Kolkata",
    content: `
      <section class="page-section section-wrap profile-grid">
        <div class="profile-intro">
          <p class="eyebrow">PRINCIPAL INVESTIGATOR</p>
          <p class="large-copy">Dr Pakhira works in experimental condensed-matter physics and materials science, with a focus on quantum magnetic and electronic materials.</p>
          <p class="muted-copy">His research spans the synthesis and characterisation of materials, including frustrated magnets, topological systems and Heusler alloys.</p>
          <div class="profile-links">
            <a class="button primary" href="${scholarUrl}" target="_blank" rel="noopener noreferrer">Google Scholar <span>↗</span></a>
            <a class="text-link" href="${materialsSchoolUrl}" target="_blank" rel="noopener noreferrer">IACS School of Materials Sciences <span>↗</span></a>
          </div>
        </div>
        <aside class="profile-card">
          <span class="profile-monogram" aria-hidden="true">SP</span>
          <p class="eyebrow">CURRENT APPOINTMENT</p>
          <h2>Assistant Professor</h2>
          <p>School of Materials Sciences</p>
          <a href="${iacsUrl}" target="_blank" rel="noopener noreferrer">Indian Association for the Cultivation of Science (IACS), Kolkata ↗</a>
        </aside>
      </section>
      <section class="soft-section">
        <div class="section-wrap">
          <p class="eyebrow">ACADEMIC JOURNEY</p><h2>Education & previous appointments</h2>
          <div class="timeline">
            <article><span>Current</span><div><h3>Assistant Professor · IACS, Kolkata</h3><p>School of Materials Sciences, Indian Association for the Cultivation of Science.</p></div></article>
            <article><span>From March 2024 · CV</span><div><h3>Assistant Professor · MANIT Bhopal</h3><p>Maulana Azad National Institute of Technology; listed as current in the supplied May 2025 CV, which does not state an end date.</p></div></article>
            <article><span>2023–2024</span><div><h3>Postdoctoral Researcher · Karlsruhe Institute of Technology</h3><p>Institute for Quantum Materials and Technologies (IQMT), Germany.</p></div></article>
            <article><span>2018–2023</span><div><h3>Postdoctoral Research Associate · Ames National Laboratory</h3><p>Division of Materials Sciences and Engineering, United States.</p></div></article>
            <article><span>2012–2018</span><div><h3>Ph.D. in Physics · Saha Institute of Nuclear Physics</h3><p>Degree awarded by the University of Calcutta. Thesis on synthesis and physical properties of magnetically frustrated R₂NiSi₃ intermetallic compounds.</p></div></article>
            <article><span>2006–2011</span><div><h3>M.Sc. and B.Sc. in Physics</h3><p>University of Calcutta (M.Sc.); Ramakrishna Mission Residential College, Narendrapur (B.Sc.).</p></div></article>
          </div>
        </div>
      </section>
      <section class="page-section section-wrap">
        <div class="section-heading"><div><p class="eyebrow">RESEARCH INTERESTS</p><h2>Questions at the intersection of magnetism and materials</h2></div></div>
        <div class="interest-tags"><span>Frustrated magnetism</span><span>Spin glasses</span><span>Topological materials</span><span>Itinerant magnetism</span><span>Heusler alloys</span><span>Crystal growth</span><span>Magnetocaloric materials</span></div>
        <p class="source-note">Profile history and education are based on the CV supplied for this website (dated May 2025); the current IACS appointment was updated as requested. Please confirm appointment dates before publication.</p>
      </section>`
  },
  publications: {
    title: "Selected publications",
    description: "Selected peer-reviewed research publications by Dr Santanu Pakhira and collaborators.",
    intro: "A selection of peer-reviewed research",
    summary: "Selected publications based on the May 2025 CV. For the complete and most current record, visit Google Scholar.",
    content: `
      <section class="page-section section-wrap">
        <div class="publication-list">
          <article><span>2025 · PHYSICAL REVIEW B</span><h2>Al₂MnCu: A magnetically ordered member of the Heusler alloy family despite having a valence electron count of 24</h2><p>Soumya Bhowmik, Santanu Pakhira et al. · 111, 174417 (2025)</p><a href="https://doi.org/10.1103/PhysRevB.111.174417" target="_blank" rel="noopener noreferrer">View publication <span>↗</span></a></article>
          <article><span>2025 · JOURNAL OF ALLOYS AND COMPOUNDS</span><h2>Detection of magnetic skyrmion-like feature in the magnetocaloric properties of Gd₂Ir₀.₉₇Si₂.₉₇</h2><p>Sudip Chakraborty, Shuvankar Gupta, Santanu Pakhira et al. · 1014, 178698 (2025)</p><a href="https://doi.org/10.1016/j.jallcom.2025.178698" target="_blank" rel="noopener noreferrer">View publication <span>↗</span></a></article>
          <article><span>2025 · ACS APPLIED MATERIALS &amp; INTERFACES</span><h2>Role of Co/Mn interaction in developing Griffiths phase with reducing particle size in La₂CoMnO₆</h2><p>Suvayan Saha, Sanjib Banik, Apurba Dutta, Santanu Pakhira et al. · 17, 20060–20074 (2025)</p><a href="https://doi.org/10.1021/acsami.4c20456" target="_blank" rel="noopener noreferrer">View publication <span>↗</span></a></article>
          <article><span>2025 · SMALL</span><h2>Orbital and Spin Reconstruction by Interface Symmetry Engineering in Oxide Superlattices</h2><p>Aryan Keshri, Sourav Chowdhury, Naveen Goyal, Santanu Pakhira et al. · 2500089 (2025)</p><a href="https://doi.org/10.1002/smll.202500089" target="_blank" rel="noopener noreferrer">View publication <span>↗</span></a></article>
          <article><span>2024 · NATURE COMMUNICATIONS</span><h2>Low-energy electronic structure in the unconventional charge-ordered state of ScV₆Sn₆</h2><p>A. K. Kundu, X. Huang, E. Seewald, Santanu Pakhira et al. · 15, 5008 (2024)</p><a href="https://doi.org/10.1038/s41467-024-48883-0" target="_blank" rel="noopener noreferrer">View publication <span>↗</span></a></article>
          <article><span>2024 · PHYSICAL REVIEW B</span><h2>Coexistence of Ferromagnetism and Antiferromagnetic Dimers in Topological Insulators</h2><p>Farhan Islam, Deborah Schlagel, Yongbin Lee, Santanu Pakhira et al. · 110, 014408 (2024)</p><a href="https://doi.org/10.1103/PhysRevB.110.014408" target="_blank" rel="noopener noreferrer">View publication <span>↗</span></a></article>
          <article><span>2023 · PHYSICAL REVIEW B</span><h2>Anisotropic magnetism and electronic structure of trigonal EuAl₂Ge₂ single crystals</h2><p>Santanu Pakhira, Asish K. Kundu, Farhan Islam et al. · 107, 134439 (2023)</p><a href="https://doi.org/10.1103/PhysRevB.107.134439" target="_blank" rel="noopener noreferrer">View publication <span>↗</span></a></article>
        </div>
        <div class="publication-cta"><p>Looking for the full publication list?</p><a class="button primary" href="${scholarUrl}" target="_blank" rel="noopener noreferrer">Open Google Scholar <span>↗</span></a></div>
        <p class="source-note">Titles, journal details and DOIs are transcribed from the supplied May 2025 CV. Follow each DOI to check the publisher record.</p>
      </section>`
  },
  methods: {
    title: "Methods & facilities",
    description: "Synthesis, crystal growth and characterisation methods described by the Quantum Materials Laboratory.",
    intro: "From synthesis to measurement",
    summary: "An experimental toolkit for preparing materials and understanding their structure, magnetism and electronic response.",
    content: `
      <section class="page-section section-wrap">
        <div class="detail-grid method-grid">
          ${card("01", "Single-crystal growth", "Flux growth, chemical vapour transport (CVT), Czochralski, optical floating-zone and Bridgman techniques.", "tone-cyan")}
          ${card("02", "Polycrystalline synthesis", "Arc melting and solid-state reaction methods for the preparation of polycrystalline materials.", "tone-coral")}
          ${card("03", "Structure & composition", "X-ray diffraction, Laue diffraction, scanning electron microscopy (SEM) and energy-dispersive X-ray spectroscopy (EDS).", "tone-blue")}
          ${card("04", "Physical properties", "Magnetic and transport measurements, heat capacity, thermal expansion and neutron diffraction.", "tone-gold")}
        </div>
        <p class="source-note">These techniques are listed in the supplied CV; this page does not imply that every instrument is housed in the group laboratory. Availability of shared or central facilities should be confirmed with IACS.</p>
        <div class="method-links"><a href="facilities-lab.html">Synthesis methods <span>→</span></a><a href="facilities-central.html">Characterisation methods <span>→</span></a></div>
      </section>`
  },
  "lab-methods": {
    title: "Synthesis methods",
    description: "Crystal growth and synthesis approaches used in quantum materials research.",
    intro: "Preparing materials for discovery",
    summary: "The supplied CV describes single-crystal growth and polycrystalline synthesis methods used across the research programme.",
    content: `
      <section class="page-section section-wrap detail-grid">
        ${card("01", "Flux growth", "A solution-growth approach for preparing single crystals from a suitable flux.", "tone-cyan")}
        ${card("02", "Chemical vapour transport", "CVT growth for compounds that can be transported and crystallised under controlled temperature conditions.", "tone-blue")}
        ${card("03", "Czochralski, Bridgman & floating zone", "Melt-based crystal-growth approaches used for suitable compositions and growth conditions.", "tone-coral")}
        ${card("04", "Arc melting & solid-state reaction", "Methods listed for preparing polycrystalline samples.", "tone-gold")}
        <p class="source-note">Method descriptions are general summaries of the techniques named in the supplied CV, not a confirmed inventory of equipment currently available at IACS.</p>
      </section>`
  },
  "central-methods": {
    title: "Characterisation methods",
    description: "Structural and physical-property characterisation methods used in the research programme.",
    intro: "Characterising structure and properties",
    summary: "A combined view of crystal structure, sample composition and physical response helps relate material make-up to emergent behaviour.",
    content: `
      <section class="page-section section-wrap detail-grid">
        ${card("01", "Diffraction", "X-ray diffraction and Laue methods for structural analysis and crystal orientation.", "tone-blue")}
        ${card("02", "Microscopy & composition", "SEM and EDS for imaging and elemental analysis.", "tone-cyan")}
        ${card("03", "Magnetic & transport", "Measurements probe magnetic response and electrical transport as a function of experimental conditions.", "tone-coral")}
        ${card("04", "Thermal & neutron methods", "Heat capacity, thermal expansion and neutron diffraction complement the broader characterisation workflow.", "tone-gold")}
        <p class="source-note">These techniques are taken from the supplied CV. Please contact the laboratory to confirm the current facility, access and collaboration arrangements.</p>
      </section>`
  },
  highlights: {
    title: "Awards & highlights",
    description: "Selected fellowships, awards and research highlights from Dr Santanu Pakhira's supplied CV.",
    intro: "Recognition, research and service",
    summary: "Selected distinctions and professional contributions documented in the May 2025 CV.",
    content: `
      <section class="page-section section-wrap">
        <div class="timeline award-timeline">
          <article><span>2022</span><div><h3>Postdoctoral Research Excellence Award</h3><p>Iowa State University, USA.</p></div></article>
          <article><span>2020</span><div><h3>Top Cited Paper Award · India</h3><p>IOP Publishing.</p></div></article>
          <article><span>2018</span><div><h3>JSPS Postdoctoral Fellowship</h3><p>Japan Society for the Promotion of Science; postdoctoral appointments also included Ames Laboratory and Saha Institute of Nuclear Physics.</p></div></article>
          <article><span>2017</span><div><h3>International Travel Support</h3><p>Science and Engineering Research Board (SERB), Government of India.</p></div></article>
          <article><span>2013 / 2011</span><div><h3>Senior and Junior Research Fellowships</h3><p>Saha Institute of Nuclear Physics, Kolkata.</p></div></article>
          <article><span>2022</span><div><h3>APS March Meeting session chair</h3><p>Selected to chair a focused session at the American Physical Society March Meeting.</p></div></article>
        </div>
        <p class="source-note">Selected items transcribed from the supplied CV, dated May 2025.</p>
      </section>`
  },
  teaching: {
    title: "Teaching",
    description: "Teaching experience and physics courses documented in Dr Santanu Pakhira's CV.",
    intro: "Teaching physics through experiment and theory",
    summary: "Courses documented in the supplied CV include undergraduate and postgraduate physics subjects.",
    content: `
      <section class="page-section section-wrap">
        <div class="teaching-intro"><p class="large-copy">Teaching experience includes one year at MANIT Bhopal, with courses spanning core physics, engineering physics and laboratory instruction.</p></div>
        <div class="detail-grid course-grid">
          ${card("01", "Solid State Physics", "Electronic, structural and magnetic properties of solids.", "tone-blue")}
          ${card("02", "Atomic & Molecular Spectroscopy", "Spectroscopic methods and interactions in atomic and molecular systems.", "tone-cyan")}
          ${card("03", "Electrodynamics", "Classical electromagnetic theory and its applications.", "tone-coral")}
          ${card("04", "Engineering Physics & Laboratory", "Foundational physics concepts paired with practical laboratory learning.", "tone-gold")}
        </div>
        <p class="source-note">Teaching details are based on the supplied May 2025 CV; current teaching assignments at IACS have not been independently confirmed.</p>
      </section>`
  },
  gallery: {
    title: "Research gallery",
    description: "An illustrated overview of quantum materials research themes and methods.",
    intro: "A visual map of our research",
    summary: "The supplied infographic brings together materials synthesis, research themes, characterisation and potential applications.",
    content: `<section class="page-section section-wrap">${imageFigure("gallery-figure")}<div class="gallery-note"><p>From single-crystal growth and magnetic measurements to emergent quantum phenomena, this graphic offers a snapshot of the laboratory's research landscape.</p><a class="text-link" href="research.html">Read about the research <span>→</span></a></div></section>`
  },
  members: {
    title: "Current group members",
    description: "People in the Quantum Materials Laboratory at IACS Kolkata.",
    intro: "A growing research community",
    summary: "This site currently features the principal investigator. Student and research-member profiles will be added when confirmed information is available.",
    content: `<section class="page-section section-wrap"><div class="empty-state"><span class="profile-monogram" aria-hidden="true">Q</span><h2>Meet the principal investigator</h2><p>Explore Dr Santanu Pakhira's profile and research background.</p><a class="button primary" href="team-pi.html">View PI profile <span>→</span></a></div></section>`
  },
  alumni: {
    title: "Alumni",
    description: "Former members of the Quantum Materials Laboratory.",
    intro: "Celebrating the people behind the research",
    summary: "Alumni profiles will be added once verified details are available.",
    content: `<section class="page-section section-wrap"><div class="empty-state"><h2>Alumni information coming soon</h2><p>No alumni details have been supplied for publication. We will add profiles when names and affiliations are confirmed.</p><a class="text-link" href="contact-us.html">Contact the laboratory <span>→</span></a></div></section>`
  },
  join: {
    title: "Join the research",
    description: "Information for prospective students and collaborators interested in quantum materials research at IACS.",
    intro: "Interested in quantum materials?",
    summary: "We welcome enquiries from students and collaborators interested in experimental condensed-matter physics and materials science.",
    content: `
      <section class="page-section section-wrap">
        <div class="detail-grid">
          ${card("01", "Prospective students", "If your interests include magnetism, crystal growth or quantum materials, get in touch with a short introduction and your academic background.", "tone-blue")}
          ${card("02", "Research collaborators", "We are glad to hear from researchers interested in complementary approaches to synthesis, characterisation or condensed-matter physics.", "tone-cyan")}
        </div>
        <div class="publication-cta"><p>For enquiries, please use the academic contact listed in the supplied CV.</p><a class="button primary" href="mailto:spakhira.phy@gmail.com">Email Dr Pakhira <span>↗</span></a></div>
        <p class="source-note">Please confirm the preferred contact address and current opportunities with the laboratory before public launch.</p>
      </section>`
  },
  contact: {
    title: "Contact",
    description: "Contact details and location for the Quantum Materials Laboratory at IACS Kolkata.",
    intro: "Start a conversation",
    summary: "Quantum Materials Laboratory · School of Materials Sciences · Indian Association for the Cultivation of Science.",
    content: `
      <section class="page-section section-wrap contact-grid">
        <article class="contact-card"><span class="eyebrow">ACADEMIC ENQUIRIES</span><h2>Dr Santanu Pakhira</h2><p>Assistant Professor<br>School of Materials Sciences</p><a class="contact-email" href="mailto:spakhira.phy@gmail.com">spakhira.phy@gmail.com <span>↗</span></a><p class="source-note">Email address listed in the supplied May 2025 CV. Please confirm it remains the preferred contact.</p></article>
        <article class="contact-card"><span class="eyebrow">VISIT IACS</span><h2>Indian Association for the Cultivation of Science (IACS)</h2><p>2A &amp; 2B Raja S. C. Mullick Road<br>Jadavpur, Kolkata 700032<br>West Bengal, India</p><a href="${iacsUrl}" target="_blank" rel="noopener noreferrer">Visit the IACS website <span>↗</span></a><p><a href="${materialsSchoolUrl}" target="_blank" rel="noopener noreferrer">School of Materials Sciences ↗</a></p></article>
      </section>
      <section class="map-panel section-wrap"><a class="map-placeholder" href="https://maps.google.com/?q=Indian+Association+for+the+Cultivation+of+Science+Kolkata" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">⌖</span><p>IACS · Jadavpur, Kolkata</p><small>Open directions ↗</small></a><p class="source-note">Please confirm the institute address and the most convenient campus entrance before planning a visit.</p></section>`
  }
};

const current = layouts[page] || layouts.home;
document.title = current.title;
const description = document.querySelector('meta[name="description"]') || document.createElement("meta");
description.name = "description";
description.content = current.description;
if (!description.parentNode) document.head.append(description);

const pageHeader = current.intro ? `
  <section class="page-head section-wrap">
    <p class="eyebrow">${current.title.toUpperCase()}</p>
    <h1>${current.intro}</h1>
    <p>${current.summary}</p>
  </section>` : "";

document.body.innerHTML = `
  <a class="skip" href="#content">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="index.html" aria-label="Quantum Materials Laboratory home">
      <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
      <span><b>QML</b><small>QUANTUM MATERIALS LABORATORY</small></span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu <span aria-hidden="true">☰</span></button>
    <nav id="site-nav" aria-label="Primary navigation">
      ${navigation.map(([label, href, key]) => `<a href="${href}"${page === key ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("")}
    </nav>
  </header>
  <main id="content">${pageHeader}${current.content}</main>
  <footer>
    <a class="footer-brand" href="index.html"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><b>QML</b></a>
    <div><p>Quantum Materials Laboratory</p><small>School of Materials Sciences · Indian Association for the Cultivation of Science (IACS), Kolkata</small></div>
    <nav class="footer-links" aria-label="More pages">
      <a href="team-current-members.html">Current members</a><a href="team-alumni.html">Alumni</a>
      <a href="facilities-lab.html">Synthesis</a><a href="facilities-central.html">Characterisation</a>
    </nav>
    <div class="footer-right"><a href="${iacsUrl}" target="_blank" rel="noopener noreferrer">IACS ↗</a><p>© ${new Date().getFullYear()} QML</p></div>
  </footer>`;

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    menuButton.focus();
  }
});
