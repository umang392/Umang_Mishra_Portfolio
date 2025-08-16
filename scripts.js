// ==== Projects data array ====
// Each project contains a title, tech stack, and description (add more projects easily).
const projects = [
  {
    title: "Synchronous FIFO Design and Simulation using Verilog",
    stack: "Verilog, Hardware Design",
    details: "Designed and simulated a synchronous FIFO buffer for efficient data transfer in hardware systems."
  },
  {
    title: "AI-Based Fault Detection in VLSI Circuits",
    stack: "Python, Verilog",
    details: "Implemented AI to detect faults in digital circuits, enhancing reliability and debugging speed."
  },
  {
    title: "Automated Testbench Generator using Python",
    stack: "Python",
    details: "Python-based tool to auto-generate Verilog/SystemVerilog testbenches from RTL modules, for streamlined verification."
  },
  {
    title: "Design of Cascode & Common Source Amplifier using Cadence Virtuoso",
    stack: "Cadence Virtuoso, MOSFET",
    details: "Designed and simulated amplifiers with MOSFETs for high voltage gain; performance optimization completed."
  },
  {
    title: "Design of PWM generator circuit using Cadence Virtuoso",
    stack: "Cadence Virtuoso, 90nm CMOS",
    details: "High-performance PWM generator design using 90nm CMOS technology focused on low power & signal accuracy."
  },
  {
    title: "Efficient Multiplier Design using Booth’s Algorithm",
    stack: "Verilog, Xilinx Vivado",
    details: "Implemented Booth’s algorithm for high-speed signed multiplication, with hardware simulation."
  },
  {
    title: "Power Estimation using ML in RTL Designs",
    stack: "Python, System Verilog",
    details: "ML model to predict power of RTL blocks, enabling early-stage VLSI optimization."
  },
  {
    title: "CAN Bus-Based Vehicle Monitoring System",
    stack: "ATmega328P, C",
    details: "Multi-ECU vehicle monitoring system with real-time display and message filtering via CAN."
  },
  {
    title: "UWB Array Antenna",
    stack: "CST Studio, Microwave RF",
    details: "Planar ultra-wideband antenna using stripline feed for 6–8.5GHz operation."
  },
  {
    title: "Digital Potentiometer Control via I2C Protocol",
    stack: "Embedded C, Microcontroller, I2C",
    details: "Audio gain control with I2C-interfaced digital potentiometer in real-time embedded system."
  },
  {
    title: "4-bit ALU using FPGA",
    stack: "Verilog, FPGA",
    details: "FPGA-based ALU for addition, subtraction, AND, OR operations."
  },
  {
    title: "Coin-Based Vending Machine using Xilinx Vivado",
    stack: "Verilog, FSM, Xilinx Vivado",
    details: "FSM vending machine in Verilog with testbenches covering multiple scenarios."
  },
  {
    title: "7-Segment Display Controller using FPGA",
    stack: "Verilog, FPGA",
    details: "Controller circuit for 7-segment display from binary input, with real-time FPGA testing."
  },
  {
    title: "CMOS-Based Ring Oscillator",
    stack: "CMOS, Analog Design",
    details: "Ring oscillator using CMOS inverters and frequency analysis."
  },
  {
    title: "Dual Port RAM using Verilog",
    stack: "Verilog",
    details: "Synchronous dual-port RAM for simultaneous independent read/write operations."
  },
  {
    title: "16:1 Multiplexer using Verilog",
    stack: "Verilog",
    details: "Structural 16:1 multiplexer built from behavioral 4:1 MUX."
  },
  {
    title: "Voice Activity Detection using MATLAB",
    stack: "MATLAB",
    details: "Energy-based algorithm to detect speech frames in audio signals and show frame energies."
  },
  {
    title: "Wireless EV Charger",
    stack: "Wireless Power, Embedded",
    details: "Developed wireless charging system for EVs (80% efficiency, no cables/contacts)."
  },
  {
    title: "Unmanned Aerial Vehicle",
    stack: "Embedded, Control",
    details: "Drone prototype with flight control algorithms, altitude hold, autonomous navigation."
  },
  {
    title: "Trip Pay (MSME)",
    stack: "IoT, Embedded, GPS",
    details: "GoI-funded mobility hardware for customer-driver/vehicle connectivity; GPS/IoT for live traffic and transport schedules."
  }
];

// ==== Dynamically render all project cards ====
// Click/tap a project reveals its details; keyboard accessible (Enter/Space).
const grid = document.querySelector('.projects-grid');
projects.forEach((proj, idx) => {
  // Create the project card for each project
  const card = document.createElement('div');
  card.className = 'project-card';
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="proj-title">${proj.title}</div>
    <div class="proj-stack">${proj.stack}</div>
    <div class="project-details" style="display:none">${proj.details}</div>
  `;
  // On click: expand/collapse details (and collapse others)
  card.addEventListener('click', () => {
    document.querySelectorAll('.project-card.active').forEach(c => {
      c.classList.remove('active');
      c.querySelector('.project-details').style.display = "none";
    });
    card.classList.add('active');
    card.querySelector('.project-details').style.display = "block";
  });
  // On blur: hide details (for keyboard users)
  card.addEventListener('blur', () => {
    card.classList.remove('active');
    card.querySelector('.project-details').style.display = "none";
  });
  // On Enter/Space: act like click (accessibility)
  card.addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.key === ' ') card.click();
  });
  grid.appendChild(card);
});

// ==== Dark/Light Theme Toggle ====
// Clicking the toggle switches between dark and light theme and stores user preference in browser.
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darktheme', document.body.classList.contains('dark'));
};
// On page load, check saved theme preference
if (localStorage.getItem('darktheme') === 'true') document.body.classList.add('dark');

// ==== Profile Image Upload =====
// Allows user to upload a new profile photo (persisted in browser storage)
const profileImg = document.getElementById('profileImg');
const profileImgInput = document.getElementById('profileImgInput');
const uploadBtn = document.getElementById('uploadBtn');

// Click "Change Photo" opens file selector
uploadBtn.addEventListener('click', () => profileImgInput.click());

// Image selected by user is displayed and stored in localStorage
profileImgInput.addEventListener('change', function() {
  if (this.files && this.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImg.src = e.target.result;
      localStorage.setItem('profileImg', e.target.result); // persist for next visits
    };
    reader.readAsDataURL(this.files);
  }
});

// On first load, use stored image if available
const storedImg = localStorage.getItem('profileImg');
if (storedImg) profileImg.src = storedImg;
