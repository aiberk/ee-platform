const devices = [
  {
    id: "T1",
    name: "Temperature Sensor #1",
    type: "Temperature",
    location: "Warehouse A",
    hub: "Hub 1",
    config: {
      unit: "C", // Celsius
      minTemp: -10,
      maxTemp: 50
    },
    comInterval: "5s", // Sends data every 5 seconds
    avatar: "/avatars/01.png"
  },
  {
    id: "M2",
    name: "Motion Sensor #2",
    type: "Motion",
    location: "Entrance Gate",
    hub: "Hub 2",
    config: {
      sensitivity: "High", // Low, Medium, High
      detectionRange: "10m"
    },
    comInterval: "2s", // Sends data every 2 seconds
    avatar: "/avatars/02.png"
  },
  {
    id: "H3",
    name: "Humidity Sensor #3",
    type: "Humidity",
    location: "Server Room",
    hub: "Hub 1",
    config: {
      minHumidity: 10, // % Minimum humidity before alert
      maxHumidity: 80 // % Maximum humidity before alert
    },
    comInterval: "10s", // Sends data every 10 seconds
    avatar: "/avatars/03.png"
  },
  {
    id: "P4",
    name: "Power Sensor #4",
    type: "Power",
    location: "Main Control Panel",
    hub: "Hub 3",
    config: {
      voltageRange: "110-240V", // Expected operating voltage
      surgeProtection: true // Has built-in surge protection
    },
    comInterval: "1s", // Sends data every second
    avatar: "/avatars/04.png"
  },
  {
    id: "C5",
    name: "CO2 Sensor #5",
    type: "Air Quality",
    location: "Lab Section B",
    hub: "Hub 2",
    config: {
      safeLimitPPM: 400, // Safe CO2 level in ppm
      alertThreshold: 1000 // Triggers alert at this level
    },
    comInterval: "15s", // Sends data every 15 seconds
    avatar: "/avatars/05.png"
  }
];

export default devices;
