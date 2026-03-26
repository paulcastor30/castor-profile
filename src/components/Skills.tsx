import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Programming",
    items: ["Assembly", "C", "C++", "Java", "Python", "PLC", "MATLAB", "Verilog"],
  },
  {
    title: "Tools & Development",
    items: ["Proteus", "Eagle", "CLion", "PyCharm", "Microchip Studio", "Keil", "Arduino IDE", "MATLAB", "Git", "Linux", "Windows", "RT-Thread", "GNU Makefiles", "GCC Toolchain"],
  },
  {
    title: "Hardware & Platforms",
    items: ["8051", "ATmega328p", "ATmega2560", "ESP8266", "ESP32", "STM32", "CH32V208", "RP2040", "SAMD21", "Raspberry Pi 3/4/5", "Orange Pi 5", "FPGA", "PCB Prototyping", "Soldering", "Instrumentation & Testing"],
  },
  {
    title: "Protocols & Systems",
    items: ["UART", "I2C", "SPI", "Bluetooth", "Wi-Fi", "LoRa", "GSM/LTE", "MQTT", "PID", "Digital Filters"],
  },
  {
    title: "Languages",
    items: ["English", "Filipino", "Cebuano"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" alt>
      <SectionHeading title="Skills" subtitle="Technical stack and competencies." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <h3 className="text-base font-semibold text-foreground mb-3">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="px-3 py-1 text-sm rounded-md bg-card border border-border text-foreground">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
