// ==============================
// PROJECT DATA (edit as needed)
// ==============================
const projects = [
  {
    title: "Synchronous FIFO Design and Simulation",
    stack: "Verilog",
    details: `Designed and simulated a synchronous FIFO buffer for efficient data transfer in hardware systems.`
  },
  {
    title: "AI-Based Fault Detection in VLSI Circuits",
    stack: "Python, Verilog",
    details: "Developed an AI model to automatically detect faults in digital circuits; improved debugging speed in VLSI verification."
  },
  {
    title: "Automated Testbench Generator",
    stack: "Python",
    details: "Built a tool to auto-generate Verilog/SystemVerilog testbenches from RTL modules, streamlining verification."
  },
  {
    title: "Cascode & Common Source Amplifier Design",
    stack: "Cadence Virtuoso, MOSFET",
    details: "High-gain MOSFET amplifiers; simulation and optimization in Cadence Virtuoso."
  },
  {
    title: "PWM Generator Circuit",
    stack: "Cadence Virtuoso, 90nm CMOS",
    details: "Designed high-performance PWM circuit focusing on low power and signal accuracy."
  },
  {
    title: "Efficient Multiplier Design (Booth’s Alg.)",
    stack: "Verilog, Xilinx Vivado",
    details: "Implemented Booth’s algorithm for high-speed signed multiplication on FPGA."
  },
  {
    title: "Power Estimation using ML in RTL Designs",
    stack: "Python, System Verilog",
    details: "ML model for RTL block power estimation at early design stages."
  },
  {
    title: "CAN Bus-Based Vehicle Monitoring System",
    stack: "ATmega328P, C",
    details: "CAN-based vehicle system with real-time data display & multi-ECU simulation."
  },
  {
    title: "UWB Array Antenna",
    stack: "CST Studio, Microwave RF",
    details: "Planar UWB antenna using stripline feed, operating 6–8.5GHz."
  },
  {
    title: "Digital Potentiometer via I2C",
    stack: "MCU, Embedded C, I2C",
    details: "Audio gain control with digital pot via I2C, real-time embedded comms."
  },
  {
    title: "4-bit ALU using FPGA",
    stack: "Verilog, FPGA",
    details: "4-bit ALU for basic arithmetic/logical ops, implemented on FPGA."
  },
  {
    title: "Coin-Based Vending Machine",
    stack: "Verilog, Xilinx Vivado, FSM",
    details: "FSM vending machine in Verilog with real coin-detection testbenches."
  },
  {
    title: "7-Segment Display Controller using FPGA",
    stack: "Verilog, FPGA",
    details: "Controller for 7-segment digital display from binary input, real-time on FPGA."
  },
  {
    title: "CMOS-Based Ring Oscillator",
    stack: "CMOS, Analog Design",
    details: "Ring oscillator using CMOS inverters with frequency analysis."
  },
  {
    title: "Dual Port RAM using Verilog",
    stack: "Verilog",
    details: "Synchronous dual-port RAM design for simultaneous read/write."
  },
  {
    title: "16:1 Multiplexer using Verilog",
    stack: "Verilog",
    details: "Structural 16:1 mux with 4:1 as building block."
  },
  {
    title: "Voice Activity Detection using MATLAB",
    stack: "MATLAB",
    details: "Energy-based method for detecting speech in audio signals."
  },
  {
    title: "Wireless EV Charger",
    stack: "Wireless Power, Embedded",
    details: "Wireless charging for EVs with 80% efficiency, no physical cables."
  },
  {
    title: "Unmanned Aerial Vehicle",
    stack: "Embedded, Control",
    details: "Prototype drone with autonomous flight, stable altitude/position."
  },
  {
    title: "Trip Pay (MSME)",
    stack: "IoT, Embedded, GPS",
    details: "Govt-funded mobility hardware, GPS/IoT for live tracking, public transport update."
  }
];

// ==============================
// RENDER PROJECT CARDS
// ==============================
/**
 * Dynamically renders all projects in the Projects section
 * and sets up expand/collapse for interactivity.
 */
const grid = document.querySelector('.projects-grid');
projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.tabIndex = 0; // for keyboard accessibility
  card.innerHTML = `
    <div class="proj-title">${proj.title}</div>
    <div class="proj-stack">${proj.stack}</div>
    <div class="project-details" style="display:none">${proj.details}</div>
  `;
  // Toggle details on click
  card.addEventListener('click', () => {
    document.querySelectorAll('.project-card.active').forEach(c => {
      c.classList.remove('active');
      c.querySelector('.project-details').style.display = "none";
    });
    card.classList.add('active');
    card.querySelector('.project-details').style.display = "block";
  });
  // Collapse on blur (for keyboard navigation)
  card.addEventListener('blur', () => {
    card.classList.remove('active');
    card.querySelector('.project-details').style.display = "none";
  });
  // Support Enter/Space for accessibility
  card.addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.key === ' ') card.click();
  });
  grid.appendChild(card);
});

// ==============================
// THEME TOGGLE (DARK/LIGHT)
// ==============================
/**
 * Allows users to toggle between dark and light color schemes.
 * Persists theme preference in localStorage.
 */
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darktheme', document.body.classList.contains('dark'));
};
// On page load, persist theme preference
if (localStorage.getItem('darktheme') === 'true') {
  document.body.classList.add('dark');
}

// ==============================
// PROFILE IMAGE UPLOAD FEATURE
// ==============================
/**
 * Allows user to upload/change their profile picture.
 * The chosen image is displayed and kept in localStorage for next visits.
 */
const profileImg = document.getElementById('profileImg');
const profileImgInput = document.getElementById('profileImgInput');
const uploadBtn = document.getElementById('uploadBtn');

// On upload button click, open file selector
uploadBtn.addEventListener('click', () => profileImgInput.click());

// When a new image is chosen, display it and save to localStorage
profileImgInput.addEventListener('change', function() {
  if (this.files && this.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImg.src = e.target.result;
      localStorage.setItem('profileImg', e.target.result);
    };
    reader.readAsDataURL(this.files);
  }
});

// On page load, display image from localStorage if available
const storedImg = localStorage.getItem('profileImg');
if (storedImg) profileImg.src = storedImg;
