

(function() {
    'use strict';

const domandeERisposte = [
  {
    domanda: "In which situation would an ESD strike potentially cause harm to the PC?",
    risposta: [
      "when replacing a mechanical hard drive with an M.2 SSD",
      "when installing RAM"
    ]
  },
  {
    domanda: "A person has started a new technical job. In which situation would ESD be an issue?",
    risposta: [
      "when installing a processor",
      "when installing RAM"
    ]
  },
  {
    domanda: "A technician is about to begin preventive maintenance on a company PC. In which situation would ESD be an issue?",
    risposta: [
      "when replacing a motherboard"
    ]
  },
  {
    domanda: "An instructor has given a student an assignment to assemble a PC. In which situation should the student be aware that ESD is an issue?",
    risposta: [
      "when installing RAM",
      "when replacing a mechanical hard drive with an M.2 SSD",
      "when installing a processor"
    ]
  },
  {
    domanda: "What two motherboard components control the system boot operations?",
    risposta: [
      "BIOS chip",
      "UEFI chip"
    ]
  },
  {
    domanda: "A technician is upgrading an ATX motherboard with another ATX motherboard. Which component might be affected by this and need to be upgraded and bought as an additional purchase?",
    risposta: [
      "CPU"
    ]
  },
  {
    domanda: "A customer has requested that a PC be built that will support eSATA. Which component should be checked to be sure that this feature is supported?",
    risposta: [
      "chipset"
    ]
  },
  {
    domanda: "Which memory module used to hold instructions for booting a PC and loading the OS, but is still used on adapters even though the memory contents cannot be changed?",
    risposta: [
      "ROM"
    ]
  },
  {
    domanda: "What is a characteristic of DDR SDRAM?",
    risposta: [
      "It transfers data twice per clock cycle compared to once per clock cycle for SDRAM."
    ]
  },
  {
    domanda: "What are two safety hazards when dealing with laser printers?",
    risposta: [
      "high voltage",
      "hot components"
    ]
  },
  {
    domanda: "Which component requires a technician to install screws externally through the PC case?",
    risposta: [
      "power supply"
    ]
  },
  {
    domanda: "A technician is installing an internal HDD. To which motherboard connector will the technician connect the data cable?",
    risposta: [
      "SATA"
    ]
  },
  {
    domanda: "Refer to the exhibit. A technician has been asked to install a video card. Which section of the motherboard will the technician use to install the card?",
    risposta: [
      "section D"
    ]
  },
  {
    domanda: "When a PC is being assembled, what component is connected to the motherboard with a SATA cable?",
    risposta: [
      "the optical drive"
    ]
  },
  {
    domanda: "A technician is troubleshooting a computer that is experiencing hardware failure detected by the BIOS. What is one way this failure is indicated?",
    risposta: [
      "The computer emits a pattern of beeps indicating the failing device."
    ]
  },
  {
    domanda: "Which three features can be configured in the BIOS settings to secure a computer?",
    risposta: [
      "drive encryption",
      "TPM",
      "passwords"
    ]
  },
  {
    domanda: "What is the purpose of RAID adapters?",
    risposta: [
      "to connect multiple storage devices for redundancy or speed"
    ]
  },
  {
    domanda: "When a new motherboard is being installed, between which two components must thermal compound be applied?",
    risposta: [
      "CPU",
      "heat sink"
    ]
  },
  {
    domanda: "What is the purpose of a Safety Data Sheet?",
    risposta: [
      "to specify procedures for dealing with potentially hazardous materials"
    ]
  },
  {
    domanda: "Which negative environmental factor does cleaning the inside of a computer reduce?",
    risposta: [
      "dust"
    ]
  },
  {
    domanda: "What is a recommended procedure to follow when cleaning computer components?",
    risposta: [
      "Hold cans of compressed air upright while spraying."
    ]
  },
  {
    domanda: "On the production floor, a furniture plant has laptops for process monitoring and reporting. The production floor environment is around 80 degrees Fahrenheit (27 degrees Celsius). The humidity level is fairly high around 70 percent. Fans are mounted in the ceiling for air circulation. Wood dust is prevalent. Which condition is most likely to adversely affect a laptop that is used in this environment?",
    risposta: [
      "the dust"
    ]
  },
  {
    domanda: "After a technician tests a theory of probable causes, what two actions should the technician take if the testing did not identify an exact cause?",
    risposta: [
      "Establish a new theory of probable causes.",
      "Document each test tried that did not correct the problem."
    ]
  },
  {
    domanda: "What would happen if a PC that contains a power supply that does not automatically adjust for input voltage is set to 230 volts and attaches to an outlet in the United States?",
    risposta: [
      "The PC would not turn on."
    ]
  },
  {
    domanda: "Which type of network spans a single building or campus and provides services and applications to people within a common organizational structure?",
    risposta: [
      "LAN"
    ]
  },
  {
    domanda: "What are two types of wired high-speed Internet connections?",
    risposta: [
      "cable",
      "DSL"
    ]
  },
  {
    domanda: "In what two situations would UDP be better than TCP as the preferred transport protocol?",
    risposta: [
      "when a faster delivery mechanism is needed",
      "when applications do not need to guarantee delivery of the data"
    ]
  },
  {
    domanda: "The current IP configuration of a small company is done manually and is time-consuming. Because of increased network growth, a technician needs a simpler way for IP configuration of workstations. Which service would simplify the workstation IP configuration task?",
    risposta: [
      "DHCP"
    ]
  },
  {
    domanda: "A company is looking for a next-generation firewall that provides VPN functionality, IDS/IPS functionality, and DoS/DDoS protection. Which device would be best suited for this task?",
    risposta: [
      "UTM"
    ]
  },
  {
    domanda: "A student is helping a friend with a home computer that can no longer access the Internet. Upon investigation, the student discovers that the computer has been assigned the IP address 169.254.100.88. What could cause a computer to get such an IP address?",
    risposta: [
      "unreachable DHCP server"
    ]
  },
  {
    domanda: "What three values must be added to the IPv4 properties of a NIC in order for a computer to have basic connectivity with the network?",
    risposta: [
      "subnet mask",
      "default gateway",
      "IP address"
    ]
  },
  {
    domanda: "A device has an IPv6 address of 2001:0DB8:75a3:0214:0607:1234:aa10:ba01 /64. What is the host identifier of the device?",
    risposta: [
      "0607:1234:aa10:ba01"
    ]
  },
  {
    domanda: "How can a user prevent specific applications from accessing a Windows computer over a network?",
    risposta: [
      "Block specific TCP or UDP ports in Windows Firewall."
    ]
  },
  {
    domanda: "A technician has been asked to configure Wi-Fi calling on a corporate mobile device. In which situation would this feature be most advantageous?",
    risposta: [
      "when in an area with poor cellular coverage"
    ]
  },
  {
    domanda: "Which statement is true about laptops?",
    risposta: [
      "Most of the internal components that are designed for laptops cannot be used for desktops."
    ]
  },
  {
    domanda: "Which standard provides a bridge between laptop hardware and the operating system and a way for technicians to configure power management schemes to get the best performance?",
    risposta: [
      "ACPI"
    ]
  },
  {
    domanda: "Which two laptop components are considered replaceable by the customer.",
    risposta: [
      "battery",
      "RAM"
    ]
  },
  {
    domanda: "A user wants to synchronize some apps, movies, music, and ebooks between mobile devices. What are the two types of connections used to synchronize this type of data?",
    risposta: [
      "Wi-Fi",
      "USB"
    ]
  },
  {
    domanda: "A technician is explaining the differences between inkjet printers and laser printers to a customer. Which two comparisons should the technician make?",
    risposta: [
      "Inkjet printers are less expensive as an initial purchase than laser printers.",
      "The laser printer output is dry after printing, but an inkjet printer may still have wet ink on the paper after printing."
    ]
  },
  {
    domanda: "A user chooses the collate option and prints two copies of a three-page document. What is the order in which the pages are printed?",
    risposta: [
      "pages 1, 2, 3, 1, 2, 3"
    ]
  },
  {
    domanda: "A color laser printer is used to print documents with graphics and photographs. Users are complaining that printing takes too long. Which component of the printer should be upgraded in order to improve printing performance?",
    risposta: [
      "RAM"
    ]
  },
  {
    domanda: "What service is available for Windows to provide software print server services to MAC OS clients?",
    risposta: [
      "Bonjour Print Server"
    ]
  },
  {
    domanda: "Which three components are typically found in laser printer maintenance kits?",
    risposta: [
      "fuser assembly",
      "pickup rollers",
      "transfer rollers"
    ]
  },
  {
    domanda: "A technician is installing a new printer in a cool, damp environment. After the printer cabling is done, and the software and print driver are installed, the printer test page jams. What is the most likely cause of the print failure?",
    risposta: [
      "too much humidity"
    ]
  },
  {
    domanda: "A data center has recently updated a physical server to host multiple operating systems on a single CPU. The data center can now provide each customer with a separate web server without having to allocate an actual discrete server for each customer. What is the networking trend that is being implemented by the data center in this situation?",
    risposta: [
      "virtualization"
    ]
  },
  {
    domanda: "How does virtualization help with disaster recovery within a data center?",
    risposta: [
      "Hardware does not have to be identical."
    ]
  },
  {
    domanda: "Which two hypervisors are suitable to support virtual machines in a data center?",
    risposta: [
      "VMware ESX/ESXi",
      "Microsoft Hyper-V 2012"
    ]
  },
  {
    domanda: "A web designer accesses a company Windows 10 computer remotely. The designer often needs to simultaneously open multiple applications, such as a web page editor and a graphics editor. Rather than opening them in multiple windows, the designer opens them in different virtual desktops. What technology is being used by the designer?",
    risposta: [
      "Windows Virtual Desktop"
    ]
  },
  {
    domanda: "Which Cloud computing service would be best for an organization that needs to collaboratively create applications and deliver them over the web?",
    risposta: [
      "PaaS"
    ]
  },
  {
    domanda: "Which statement describes a feature of SDRAM?",
    risposta: [
      "It can process overlapping instructions in parallel."
    ]
  },
  {
    domanda: "A technician is troubleshooting a server that displays the error message “RAID not found” after a power outage over the weekend. What is a possible cause for this?",
    risposta: [
      "The external RAID controller is not receiving power."
    ]
  },
  {
    domanda: "A customer brings in a laptop with a touch screen that is not working correctly. The touch screen either does not respond at all or provides unusual or inaccurate responses. What is a possible cause for such behavior?",
    risposta: [
      "Too many apps are open."
    ]
  },
  {
    domanda: "What are two security risks associated with sharing printers in a corporate environment?",
    risposta: [
      "user authentication",
      "cached files"
    ]
  },
  {
    domanda: "Which change management process component is concerned with the business processes that are affected by changes?",
    risposta: [
      "assessment"
    ]
  },
  {
    domanda: "A computer technician is installing a RAID. If the RAID uses mirroring and striping, which RAID level is the technician using?",
    risposta: [
      "10"
    ]
  },
  {
    domanda: "A computer technician is installing a RAID. If the RAID uses mirroring, which RAID level is the technician using?",
    risposta: [
      "1"
    ]
  },
  {
    domanda: "A computer technician is installing a RAID. If the RAID uses striping with parity, which RAID level is the technician using?",
    risposta: [
      "5"
    ]
  },
  {
    domanda: "A computer technician is installing a RAID. If the RAID uses striping, which RAID level is the technician using?",
    risposta: [
      "0"
    ]
  },
  {
    domanda: "A computer technician is installing a RAID. If the RAID uses striping with double parity, which RAID level is the technician using?",
    risposta: [
      "6"
    ]
  },
  {
    domanda: "A technician is upgrading many PCs used within the company. How should the technician dispose of an old battery?",
    risposta: [
      "Recycle following local regulations."
    ]
  },
  {
    domanda: "A technician is upgrading many PCs used within the company. How should the technician dispose of a broken monitor?",
    risposta: [
      "Recycle following local regulations."
    ]
  },
  {
    domanda: "A technician is upgrading many PCs used within the company. How should the technician dispose of an old power supply?",
    risposta: [
      "Recycle following local regulations."
    ]
  },
  {
    domanda: "A technician is upgrading many PCs used within the company. How should the technician dispose of old RAM?",
    risposta: [
      "Recycle following local regulations."
    ]
  },
  {
    domanda: "A technician is upgrading many PCs used within the company. How should the technician dispose of an old motherboard?",
    risposta: [
      "Recycle following local regulations."
    ]
  },
  {
    domanda: "A technician is upgrading many PCs used within the company. How should the technician dispose of an old hard drive?",
    risposta: [
      "Recycle following local regulations."
    ]
  },
  {
    domanda: "After continuous morning use, a computer suddenly reboots without the intervention of the user. What are the two most likely hardware parts that could cause this problem?",
    risposta: [
      "CPU",
      "power supply"
    ]
  },
  {
    domanda: "A technician has been called in to investigate a problem with the computer rebooting randomly throughout the day. What two pieces of hardware could cause this problem?",
    risposta: [
      "power supply",
      "CPU"
    ]
  },
  {
    domanda: "For two days in a row, a user has noticed that the computer reboots several times before it eventually starts. What are two suspect components?",
    risposta: [
      "CPU",
      "power supply"
    ]
  },
  {
    domanda: "While a user is working on a spreadsheet, the computer reboots. What are two components that could cause this issue?",
    risposta: [
      "power supply",
      "CPU"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 137. What service application is the client requesting?",
    risposta: [
      "NetBIOS (NetBT)"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 22. What service application is the client requesting?",
    risposta: [
      "SSH"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 143. What service application is the client requesting?",
    risposta: [
      "IMAP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 23. What service application is the client requesting?",
    risposta: [
      "Telnet"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 161. What service application is the client requesting?",
    risposta: [
      "SNMP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 389. What service application is the client requesting?",
    risposta: [
      "LDAP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 25. What service application is the client requesting?",
    risposta: [
      "SMTP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 427. What service application is the client requesting?",
    risposta: [
      "SLP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 53. What service application is the client requesting?",
    risposta: [
      "DNS"
    ]
  },
  {
    domanda: "Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?",
    risposta: [
      "2001:db8::a0b0:8:1"
    ]
  },
  {
    domanda: "Which is the compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290?",
    risposta: [
      "fe80:9ea:0:2200::fe0:290"
    ]
  },
  {
    domanda: "Which is the compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909?",
    risposta: [
      "2002:42:10:c400::909"
    ]
  },
  {
    domanda: "Which is the compressed format of the IPv6 address 2002:0420:00c4:1008:0025:0190:0000:0990?",
    risposta: [
      "2002:420:c4:1008:25:190::990"
    ]
  },
  {
    domanda: "Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0ab8:0001:0000:1000?",
    risposta: [
      "2001:db8::ab8:1:0:1000"
    ]
  },
  {
    domanda: "Which is the compressed format of the IPv6 address fe80:0000:0000:0000:0220:0b3f:f0e0:0029?",
    risposta: [
      "fe80::220:b3f:f0e0:29"
    ]
  },
  {
    domanda: "Which is the compressed format of the IPv6 address fe80:9ea0:0000:2020:0000:00bf:00e0:9290?",
    risposta: [
      "fe80:9ea0::2020:0:bf:e0:9290"
    ]
  },
  {
    domanda: "What ACPI power state describes when the CPU and RAM are off and the contents of RAM have been saved to a temporary file on the hard drive?",
    risposta: [
      "S4"
    ]
  },
  {
    domanda: "What ACPI power state describes when the CPU and RAM are still receiving power but unused devices are powered down?",
    risposta: [
      "S1"
    ]
  },
  {
    domanda: "What ACPI power state describes when the CPU is off, but the RAM is refreshed?",
    risposta: [
      "S2"
    ]
  },
  {
    domanda: "What ACPI power state describes when the computer is off?",
    risposta: [
      "S5"
    ]
  },
  {
    domanda: "What ACPI power state describes when the CPU is off and the RAM is set to a slow refresh rate, often called suspend mode?",
    risposta: [
      "S3"
    ]
  },
  {
    domanda: "What ACPI power state describes when the computer is on and the CPU is running?",
    risposta: [
      "S0"
    ]
  },
  {
    domanda: "A reporter is trying to print several high resolution photographs but the color laser printer is going extremely slowly. What should the technician do to resolve the issue?",
    risposta: [
      "Add more RAM to the printer."
    ]
  },
  {
    domanda: "A new printer has just been installed deep in a mine. When test pages are printed, the paper constantly jams. What should the technician do to resolve the issue?",
    risposta: [
      "Move the printer to a less-humid location."
    ]
  },
  {
    domanda: "A user complains that recently every printed document has vertical lines and streaks on the paper. What should the technician do to resolve the issue?",
    risposta: [
      "Distribute the toner more evenly within the cartridge."
    ]
  },
  {
    domanda: "A school is installing a new shared printer but the printer is not showing up on the list of available printers. What should the technician do to resolve the issue?",
    risposta: [
      "Manually add the printer IP address."
    ]
  },
  {
    domanda: "Employees are complaining that they send print jobs to a newly installed printer but the print jobs never print. What should the technician do to resolve the issue?",
    risposta: [
      "The printer is connected to the wrong port. Modify the port."
    ]
  },
  {
    domanda: "Users have noticed that the colors on their printed documents are different from the colors that they see on their computer screens. What should the technician do to resolve the issue?",
    risposta: [
      "Calibrate the printer."
    ]
  },
  {
    domanda: "A technician has just completed a preventive maintenance on the department printer. Users are now complaining that the printer is no longer available. What should the technician do to resolve the issue?",
    risposta: [
      "Check that the printer is plugged into a power source."
    ]
  },
  {
    domanda: "Employees of a small business are complaining that the printer is printing faded images. What should the technician do to resolve the issue?",
    risposta: [
      "Replace the toner cartridge."
    ]
  },
  {
    domanda: "A photographer is complaining about the following printer issue: The printer issues a “Document failed to print” message. What are two possible causes of this issue?",
    risposta: [
      "A cable is loose or disconnected.",
      "The printer is no longer shared."
    ]
  },
  {
    domanda: "A reporter is complaining about the following printer issue: The printer is printing unknown characters. What are two possible causes of this issue?",
    risposta: [
      "The wrong or an outdated printer driver is installed.",
      "The printer has a loose connection."
    ]
  },
  {
    domanda: "A manager is complaining about the following printer issue: The printer is printing incorrect colors. What are two possible causes of this issue?",
    risposta: [
      "An incorrect cartridge could be installed.",
      "The print heads might need to be cleaned and calibrated."
    ]
  },
  {
    domanda: "A technician is complaining about the following printer issue: The print appears faded on the paper. What are two possible causes of this issue?",
    risposta: [
      "The paper might be incompatible with the printer.",
      "The toner cartridge is low."
    ]
  },
  {
    domanda: "A librarian is complaining about the following printer issue: The printer control panel displays no image. What are two possible causes of this issue?",
    risposta: [
      "The contrast of the screen may be set too low.",
      "The printer is not turned on."
    ]
  },
  {
    domanda: "A teacher is complaining about the following printer issue: The paper is creased after printing. What are two possible causes of this issue?",
    risposta: [
      "The paper-feed tray might not be firmly adjusted against the edges of the printer.",
      "The paper might be loaded incorrectly."
    ]
  },
  {
    domanda: "A receptionist is complaining about the following printer issue: My impact printer produces faded or light characters. What are two possible causes of this issue?",
    risposta: [
      "The ribbon may be worn out.",
      "The ribbon may be damaged."
    ]
  },
  {
    domanda: "A photographer is complaining about the following printer issue: The paper is not being fed into the printer. What are two possible causes of this issue?",
    risposta: [
      "The paper may be wrinkled.",
      "The printer could be set to print to a different paper size than is currently loaded."
    ]
  },
  {
    domanda: "A laptop has an NVMe drive (C:) and a mechanical hard drive (D:). When the user tries to save a spreadsheet to the D: drive, the user notices that the D: drive is not there. What should the technician do to see if the drive is recognized by the operating system?",
    risposta: [
      "Use the Disk Management Control Panel."
    ]
  },
  {
    domanda: "A computer has two mechanical hard drives. The second drive (D:) is used for data storage. When trying to save an email attachment to the local hard drive, the user notices that the D: drive is not an option. What should the technician do to see if the drive is recognized by the operating system?",
    risposta: [
      "Use File Explorer."
    ]
  },
  {
    domanda: "A user reports that a drive is no longer there. The technician asks the user to demonstrate the problem. Within the application, the user demonstrates that the drive, that was present in the save options yesterday, is now no longer an option. What should the technician do to see if the drive is recognized by the operating system?",
    risposta: [
      "Use Device Manager."
    ]
  },
  {
    domanda: "A computer has an SSD for the operating system and applications and uses another mechanical hard drive for data storage. The user reports that data can no longer be saved to the mechanical hard drive. What should the technician do to see if the drive is recognized by the operating system?",
    risposta: [
      "Use File Explorer."
    ]
  },
  {
    domanda: "A technician is working on a laptop and the GPS is not functioning. What is a probable cause for this situation?",
    risposta: [
      "A service is disabled."
    ]
  },
  {
    domanda: "A technician is working on a laptop and an app is not loading. What is a probable cause for this situation?",
    risposta: [
      "An app needs to be restarted."
    ]
  },
  {
    domanda: "A technician is working on a laptop and an app is not responding. What is a probable cause for this situation?",
    risposta: [
      "An app needs to be restarted."
    ]
  },
  {
    domanda: "A technician is working on a laptop and an error message about decryption appears when opening an email. What is a probable cause for this situation?",
    risposta: [
      "A digital certificate is missing."
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for a small company that wants stateful firewall services. Which security technique should the technician recommend?",
    risposta: [
      "Buy an ASA."
    ]
  },
  {
    domanda: "A gamer is booting a desktop that has Windows 10 installed on dynamic drives. The boot process is currently working on the following step: WinLoad reads the registry files, chooses a hardware profile, and loads the device drivers. What is the next step that will happen in the boot process?",
    risposta: [
      "The Windows kernel takes over the boot process."
    ]
  },
  {
    domanda: "A technician is working on a laptop and an error message about decryption appears when opening an email. What is a possible solution for this situation?",
    risposta: [
      "Install an appropriate certificate."
    ]
  },
  {
    domanda: "Users in the sales department want to be able to print from laptops and tablets. Which two wireless technologies should the IT technician look for when researching new printers for the sales department?",
    risposta: [
      "Bluetooth",
      "802.11 standard"
    ]
  },
  {
    domanda: "What are three factors to consider when purchasing a replacement motherboard?",
    risposta: [
      "The existing power supply must provide the connections required by the new motherboard.",
      "The new motherboard must be the correct size to physically fit into the existing case.",
      "The socket and chipset on the new motherboard must match the existing CPU."
    ]
  },
  {
    domanda: "What are two features of protocols used within the TCP/IP protocol stack?",
    risposta: [
      "TCP mechanisms retransmit data when an acknowledgment is not received from the destination system within a set period of time.",
      "UDP is used when an application must be delivered as quickly as possible and some loss of data can be tolerated."
    ]
  },
  {
    domanda: "A technician is working on a laptop and a key on the keyboard is not responding as it should. What is a possible solution for this situation?",
    risposta: [
      "Clean with compressed air."
    ]
  },
  {
    domanda: "What two effects might suggest that an incorrect printer driver is loaded on the Windows PC?",
    risposta: [
      "The printer is printing unknown characters.",
      "The printer does not print a test page."
    ]
  },
  {
    domanda: "Why would a network technician change the wireless router IP address to a different private IP address during initial installation?",
    risposta: [
      "to decrease the likelihood that someone could access the router using the default settings"
    ]
  },
  {
    domanda: "A technician is working on a laptop and GPS is not functioning. What is a possible solution for this situation?",
    risposta: [
      "Verify that airplane mode is not activated.",
      "Verify the status of service."
    ]
  },
  {
    domanda: "Which factor can limit the amount of data that the CPU can receive and process at one time?",
    risposta: [
      "the size of the CPU cache memory"
    ]
  },
  {
    domanda: "Which type of optical drive supports the greatest amount of storage and is able to read and write CDs, DVDs, and Blu-Ray media?",
    risposta: [
      "BD-RE"
    ]
  },
  {
    domanda: "Why would a manager need to use the sfc command?",
    risposta: [
      "to scan and verify the integrity of all protected system files and replace incorrect versions with correct versions"
    ]
  },
  {
    domanda: "Why would a technician need to use the DISM command?",
    risposta: [
      "to repair, prepare, and fix Windows images and the recovery image within an installation of the operating system"
    ]
  },
  {
    domanda: "Why would a technician need to use the tasklist command?",
    risposta: [
      "to display a list of current processes running on a local or a remote computer"
    ]
  },
  {
    domanda: "Why would an analyst need to use the taskkill command?",
    risposta: [
      "to end one or more processes on a PC based on process ID or image name"
    ]
  },
  {
    domanda: "Why would an analyst need to use the msconfig command?",
    risposta: [
      "to select some programs that will automatically run at startup"
    ]
  },
  {
    domanda: "Why would an analyst need to use the dir command?",
    risposta: [
      "to show all of the files in the current directory"
    ]
  },
  {
    domanda: "Why would a bank manager need to use the gpupdate command?",
    risposta: [
      "to make the PC synchronize with new group policy settings"
    ]
  },
  {
    domanda: "Why would a bank manager need to use the gpresult command?",
    risposta: [
      "to verify the settings that are suspected to be incorrect"
    ]
  },
  {
    domanda: "Why would a lawyer need to use the cd command?",
    risposta: [
      "to change from the current working folder to another folder"
    ]
  },
  {
    domanda: "Which two activities are normally controlled by the Northbridge part of the chipset?",
    risposta: [
      "access to the RAM",
      "access to the video card"
    ]
  },
  {
    domanda: "A manager is booting a tablet that has Windows 8 installed. The boot process is currently working on the following step: WINLOGON.EXE displays the Windows Welcome screen What is the next step that will happen in the boot process?",
    risposta: [
      "There are no more steps, the boot process is complete."
    ]
  },
  {
    domanda: "An analyst is booting a tablet that has Windows 7 installed with media card reader. The boot process is currently working on the following step: WINLOGON.EXE displays the Windows Welcome screen What is the next step that will happen in the boot process?",
    risposta: [
      "There are no more steps, the boot process is complete."
    ]
  },
  {
    domanda: "Before installing the latest version of printer management software, an IT technician creates a restore point on the Windows 10 computer. The installation fails before it is complete, and now the printer shows as unavailable. Which Windows option should the technician use to reverse the software installation and return the system to its prior state without affecting users files and settings?",
    risposta: [
      "System Restore"
    ]
  },
  {
    domanda: "A new customer asks if all of its older company computers, which are still running Windows XP, can be immediately upgraded to Windows 10. What are two important concerns that the IT technician must discuss with the customer in order to determine if the OS upgrade can be done?",
    risposta: [
      "compatibility of existing applications and custom software with the new OS",
      "minimum memory and processor requirements for Windows 10"
    ]
  },
  {
    domanda: "Which three wireless router settings should be disabled as a security best practice?",
    risposta: [
      "UPnP support",
      "WPS auto configuration",
      "SSID broadcast"
    ]
  },
  {
    domanda: "What are two symptoms that indicate that a computer system may be a victim of DNS spoofing?",
    risposta: [
      "The output of the nslookup command reports an unknown resolver name and IP address.",
      "Entering www.cisco.com in a browser displays a popular gaming site instead of the Cisco homepage."
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for preventing tailgating. Which security technique should the technician recommend?",
    risposta: [
      "Use a mantrap."
    ]
  },
  {
    domanda: "A company contracts with a service provider to obtain IaaS and ITaaS services. What are two advantages of these types of cloud service implementation?",
    risposta: [
      "less investment in local equipment and training",
      "protection from costly upgrades and software licenses"
    ]
  },
  {
    domanda: "What are two methods of disabling cellular data when located in an area where it is limited or expensive?",
    risposta: [
      "placing the device in Airplane mode",
      "using Settings to turn off mobile data"
    ]
  },
  {
    domanda: "Refer to the exhibit. A computer technician creates a bootable USB hard drive and loads a Linux operating system on it. When the technician reboots the computer, it does not boot to the Linux OS. Instead, the light on the optical drive flashes and then the computer loads Windows. What needs to be done to ensure that the computer automatically boots from the USB hard drive if it is connected?",
    risposta: [
      "Move the USB Hard Disk drive option to the top of the boot order."
    ]
  },
  {
    domanda: "A help desk technician receives a call from a user describing an issue with a computer. The user states that the computer will not power on, that it only makes a beeping sound. Why does the technician ask the user to restart the system and count how many beeps the computer makes?",
    risposta: [
      "Different numbers of beeps can indicate different types of hardware issues discovered during POST."
    ]
  },
  {
    domanda: "A college uses Microsoft 365 Office and email services for its faculty, staff, and students. Data storage, custom applications, and Microsoft Active Directory services are delivered by virtual servers leased from a local data center. Single sign-on is implemented for both environments for authentication and authorization. Access control is managed locally. What type of cloud service implementation is the college using?",
    risposta: [
      "private cloud"
    ]
  },
  {
    domanda: "The help desk receives a call from a customer who reports a computer issue that occurs after trying to install Windows 10 with a disc that the IT department provided. When the customer reboots the computer, instead of loading Windows, the computer displays the Windows installation program screen again. Which probable cause should the IT technician place at the top of the list of most obvious reasons for the error?",
    risposta: [
      "The customer forgot to remove the disc from the optical drive."
    ]
  },
  {
    domanda: "Office workers in a software company are being temporarily relocated to a different area of the building while their previous office space is being reconfigured. Which type of network device should be installed to make it easy for the users to connect to the company network from all of their devices, including smart phones, tablets, and laptops?",
    risposta: [
      "access point"
    ]
  },
  {
    domanda: "What is an example of an active cooling solution for a desktop PC?",
    risposta: [
      "installing case and CPU cooling fans"
    ]
  },
  {
    domanda: "What is a consequence of a computer not having enough RAM memory installed?",
    risposta: [
      "Data may be swapped between the RAM and the slower hard drive more frequently."
    ]
  },
  {
    domanda: "Refer to the exhibit. A payroll department employee has shared a locally attached HP Officejet Pro 8110 printer over the network in Windows 10. What do the other Windows 10 users in the payroll department have to do in order to print to the shared printer?",
    risposta: [
      "Use the Add a printer option and select the HP Officejet Pro 8110 in Payroll printer in the Select a printer screen."
    ]
  },
  {
    domanda: "Which type of power supply is the most commonly used and provides a separate power connection in order to directly power the CPU?",
    risposta: [
      "ATX12V"
    ]
  },
  {
    domanda: "Refer to the exhibit. A user calls the help desk to report a printer issue. The user explains that when selecting the print option from the menu bar, a dialog box pops up requesting a file name. After entering the filename, nothing prints on the attached HP printer. What is the cause of the issue that the user is experiencing?",
    risposta: [
      "The default printer is a virtual printer."
    ]
  },
  {
    domanda: "Which function is incorporated into some Intel CPUs that enables a single CPU to perform as though two CPUs are installed?",
    risposta: [
      "Hyper-Threading"
    ]
  },
  {
    domanda: "Which cloud computing characteristic enables multiple tenants to share the same storage, processing, and network bandwidth?",
    risposta: [
      "resource pooling"
    ]
  },
  {
    domanda: "Which three types of external ports can be used to connect an external storage device to a computer?",
    risposta: [
      "Thunderbolt",
      "USB",
      "eSATA"
    ]
  },
  {
    domanda: "Which three computer components require separate cabling for power?",
    risposta: [
      "video graphics cards",
      "internal SATA hard drives",
      "case and CPU fans"
    ]
  },
  {
    domanda: "In which two situations would thin clients be a good choice to meet the end-user computing needs?",
    risposta: [
      "when it is necessary for employees to use tablets with minimal storage and processing capabilities",
      "when installed in an enterprise environment where there is a gigabit LAN and powerful servers"
    ]
  },
  {
    domanda: "Refer to the exhibit. Which two hypervisor software products are suitable for the virtualization environment shown in the exhibit?",
    risposta: [
      "VMware vSphere",
      "Oracle VM Server"
    ]
  },
  {
    domanda: "Refer to the exhibit. The help desk is receiving numerous calls from employees in the payroll department. It appears that their computers can print to the local network printer, but cannot access the cloud-based payroll service. One employee sends a screen print showing the result of issuing an ipconfig /all command. What is the cause of the issue being experienced by the users?",
    risposta: [
      "The DHCP server is configured with the wrong default gateway address."
    ]
  },
  {
    domanda: "An employee recently purchased a smartwatch. Following the instructions from the watch manufacturer, the employee downloads the wearable app and installs it on an Android phone. The smartwatch shows that it is in discoverable mode, but the app cannot connect to the watch. What is one issue that might cause this problem?",
    risposta: [
      "Bluetooth is disabled on the Android phone."
    ]
  },
  {
    domanda: "Which member of the DDR SDRAM family has the fastest clock rate and consumes the least amount of power?",
    risposta: [
      "DDR4 SDRAM"
    ]
  },
  {
    domanda: "Refer to the exhibit. What is one function that a technician can accomplish using this graphical interface?",
    risposta: [
      "set passwords to allow for access to the BIOS"
    ]
  },
  {
    domanda: "A network technician suspects that there may be a short or a termination error in the wiring that connects an Ethernet switch to the network. Which tool would be the best choice for the technician to use to identify the issue?",
    risposta: [
      "cable tester"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 110. What service application is the client requesting?",
    risposta: [
      "POP3"
    ]
  },
  {
    domanda: "Why would a university student need to use the taskkill command?",
    risposta: [
      "to end one or more processes on a PC based on process ID or image name"
    ]
  },
  {
    domanda: "Which term describes a partition scheme that supports storing a backup of a partition table?",
    risposta: [
      "GPT"
    ]
  },
  {
    domanda: "How can a hard drive that is using an MBR be partitioned in order to support additional logical drives?",
    risposta: [
      "Make one primary partition an extended partition to contain the logical drives."
    ]
  },
  {
    domanda: "A computer technician uses Windows tools to gather information such as system components, operating system, users, and disk drives on multiple systems within the company. Another technician suggests that the tasks would take less time if they were automated. Which two built-in scripting capabilities in Windows enable a technician to run a simple text file, created in Notepad, which contains the necessary commands and variables?",
    risposta: [
      "PowerShell ISE script interpreter",
      "command line batch script interpreter"
    ]
  },
  {
    domanda: "Refer to the exhibit. Examine both the output and the source code of the Linux shell script sample.sh. Which two statements describe the variables contained in the sample.sh script?",
    risposta: [
      "The $uname variable is an input variable defined within the script.",
      "The $HOSTNAME variable is an environmental variable initialized by the system."
    ]
  },
  {
    domanda: "Why would a lawyer need to use the tracert command?",
    risposta: [
      "to display a list of the near-side router interfaces between the source device and the destination device"
    ]
  },
  {
    domanda: "A network analyst is booting a laptop that has Windows 7 installed with cellular SIM slot. The boot process is currently working on the following step: The Windows kernel takes over the boot process. What is thenext step that will happen in the boot process?",
    risposta: [
      "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
    ]
  },
  {
    domanda: "A company purchases 15 USB flash drives to use for data analysis training for company accountants. The data analysis training requires that actual company data be stored on the drives, so a secure method of erasing the data is needed before the flash drives can be reused for other training classes. What method should the IT technicians use to ensure that the data on the USB flash drives cannot be recovered?",
    risposta: [
      "a quick formatting utility to overwrite the data"
    ]
  },
  {
    domanda: "Refer to the exhibit. What can be determined about the contents of the ite_user home directory?",
    risposta: [
      "There are two data files and three directories contained in this user directory."
    ]
  },
  {
    domanda: "Refer to the exhibit. What is true of this mobile device screen?",
    risposta: [
      "Text messages, news, photos and other content can be displayed in the different tiles."
    ]
  },
  {
    domanda: "An on-site IT technician needs to work on systems installed in a small health clinic located in New York state. When the technician arrives, the office manager asks if the technician is aware of HIPAA regulations. Which two situations are breaches of PHI and could possibly lead to severe penalties under HIPAA?",
    risposta: [
      "sending screenshots of multiple patient health records that contain error messages to a second level technician",
      "making a backup of the clinic patient data in order to recreate the issues on a server in the IT support office"
    ]
  },
  {
    domanda: "Why would a manager need to use the del command?",
    risposta: [
      "to erase one or more files from a Windows directory"
    ]
  },
  {
    domanda: "A technician is working on a laptop and an app is not responding. What is a possible solution for this situation?",
    risposta: [
      "Perform a reset."
    ]
  },
  {
    domanda: "An end user wants to be able to recover an older version of a document that was created earlier in the day. Assuming that Windows Backup is enabled, which Windows 10 function can provide a user access to recover specific versions of a file?",
    risposta: [
      "File History"
    ]
  },
  {
    domanda: "An IT technician attempts to copy a large file to a USB flash drive that contains other data but the copy fails. The technician checks the properties of the flash drive and finds that it was formatted using FAT32. Which method can the technician use to easily change the file system to NTFS without losing the data files currently stored on the disk?",
    risposta: [
      "Open the Command Prompt (Admin) window and use the convert command."
    ]
  },
  {
    domanda: "An employee wants to keep a local backup of iPhone data on a Windows laptop. What type of software does the employee need on the laptop to create this backup?",
    risposta: [
      "iTunes"
    ]
  },
  {
    domanda: "What can an IT technician accomplish using the Manage Storage Spaces feature in Windows 8 and 10?",
    risposta: [
      "create storage pools and configure disk arrays"
    ]
  },
  {
    domanda: "While troubleshooting an issue on a customer computer, an on-site technician believes that the problem can be resolved by using Windows Restore. What type of information is not restored when using Windows Restore with a recent restore point snapshot?",
    risposta: [
      "user data files"
    ]
  },
  {
    domanda: "A technician is booting a PC that has Windows 10 installed on dynamic drives. The boot process is currently working on the following step: POST. What is the next step that will happen in the boot process?",
    risposta: [
      "BIOS locates and reads the configuration settings that are stored in the CMOS memory."
    ]
  },
  {
    domanda: "What are two features of multicore processors?",
    risposta: [
      "Multicore processors can execute instructions more quickly than single-core processors can.",
      "L2 and L3 cache is shared in all types of multicore processors in order to improve performance."
    ]
  },
  {
    domanda: "Which two statements describe characteristics of network addresses?",
    risposta: [
      "A MAC address is also referred to as a physical address because it is permanently embedded on the NIC.",
      "A valid public IPv4 or IPv6 address is needed in order for devices to communicate over the internet."
    ]
  },
  {
    domanda: "An on-site technician is asked to check a laptop used by an executive who occasionally works from home. The technician observes that the image on the laptop screen flickers and appears dull, even though the same image displayed on another monitor attached to the laptop docking station is normal. What are two issues that could cause the symptoms the technician observed?",
    risposta: [
      "The inverter may be failing.",
      "The backlight needs adjustment or is failing."
    ]
  },
  {
    domanda: "A technician must replace a power supply. Which two features should the technician consider when selecting the replacement?",
    risposta: [
      "physical size",
      "wattage"
    ]
  },
  {
    domanda: "Why is unbuffered memory a better choice than buffered memory for gaming or general use computers?",
    risposta: [
      "The computer can read data directly from the unbuffered memory banks, making unbuffered memory faster than buffered memory."
    ]
  },
  {
    domanda: "A UTM appliance, such as a Cisco ASA 5506-X, includes the functionality of which two standalone devices?",
    risposta: [
      "stateful firewall",
      "IPS/IDS"
    ]
  },
  {
    domanda: "An on-site IT technician is attempting to resolve an issue with application performance on a customer laptop. The technician backs up the customer data and then replaces the memory in the laptop with known good memory. It does not resolve the performance issue. What are the next two actions the technician should take?",
    risposta: [
      "Continue to test the next likely probable cause.",
      "Document that the possible solution did not work."
    ]
  },
  {
    domanda: "A user wants VirtualBox to run automatically when Windows 10 starts up. Which action will enable VirtualBox to load and run on system startup?",
    risposta: [
      "Copy the shortcut for VirtualBox from its location to the startup folder."
    ]
  },
  {
    domanda: "An on-site IT technician finished the removal of malware from a customer computer and installed new virus protection software. An hour after the technician left the site, the customer called the help desk to report that a critical web-based application was no longer functioning properly. Which step in the troubleshooting process did the IT technician fail to properly complete?",
    risposta: [
      "Verify full system functionality."
    ]
  },
  {
    domanda: "What are two characteristics of the hotend nozzle on a 3D printer?",
    risposta: [
      "The hotend nozzle heats to different temperatures depending on the type of filament used.",
      "Hotend nozzles are considered consumables and should be replaced during normal maintenance."
    ]
  },
  {
    domanda: "Which type of disk drive can provide a very fast boot experience and also provide high capacity storage?",
    risposta: [
      "SSD"
    ]
  },
  {
    domanda: "Refer to the exhibit. Which type of adapter card may require the width of two slots in order to accommodate additional cooling, even though it only has one PCIe x16 connector?",
    risposta: [
      "graphics card"
    ]
  },
  {
    domanda: "A technician follows the instruction manual that came with a new Bluetooth speaker to place the speaker in discoverable mode. In this mode, what type of information will the speaker transmit to the laptop in order to start the pairing process?",
    risposta: [
      "device name and Bluetooth capabilities"
    ]
  },
  {
    domanda: "A technician is booting a PC that has Windows 10 installed on dynamic drives. The boot process is currently working on the following step: BIOS locates and reads the configuration settings that are stored in the CMOS memory. What is the next step that will happen in the boot process?",
    risposta: [
      "The BIOS boots the computer using the first drive that contains a valid boot sector."
    ]
  },
  {
    domanda: "A network analyst is booting a laptop that has Windows 7 installed with cellular SIM slot. The boot process is currently working on the following step: The Windows kernel takes over the boot process. What is the next step that will happen in the boot process?",
    risposta: [
      "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
    ]
  },
  {
    domanda: "Why would a bank manager need to use the bootrec command?",
    risposta: [
      "to help to repair the MBR that is suspected of having issues"
    ]
  },
  {
    domanda: "A gamer is booting a tablet that has Windows 7 installed with 4 GB RAM. The boot process is currently working on the following step: The Windows kernel takes over the boot process. What is the next step that will happen in the boot process?",
    risposta: [
      "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
    ]
  },
  {
    domanda: "Why would a user need to use the gpresult command?",
    risposta: [
      "to verify the settings that are suspected to be incorrect"
    ]
  },
  {
    domanda: "An accountant is booting a desktop that has Windows 8 installed. The boot process is currently working on the following step: WinLoad loads two files that make up the core of Windows: NTOSKRNL.EXE and HAL.DLL. What is the next step that will happen in the boot process?",
    risposta: [
      "WinLoad reads the registry files, chooses a hardware profile, and loads the device drivers."
    ]
  },
  {
    domanda: "A user is booting a desktop that has Windows 10 installed that also uses an extended partition. The boot process is currently working on the following step: The code in the boot sector is executed and the control of the boot process is given to Windows Boot Manager. What is the next step that will happen in the boot process?",
    risposta: [
      "Winload uses the path specified in BOOTMGR to find the boot partition."
    ]
  },
  {
    domanda: "A technician is working on a laptop and an app is not loading. What is a possible solution for this situation?",
    risposta: [
      "Perform a reset."
    ]
  },
  {
    domanda: "Which term describes a file system that supports a partition size up to 2 TB?",
    risposta: [
      "FAT32"
    ]
  },
  {
    domanda: "Why would a technician need to use the copy command?",
    risposta: [
      "to copy files, directories, and subdirectories from one location to another"
    ]
  },
  {
    domanda: "Which two tools are available to transfer user data and settings from an old Windows computer to a Windows operating system on a new computer?",
    risposta: [
      "Windows Easy Transfer",
      "User State Migration tool"
    ]
  },
  {
    domanda: "A user wants to extend a primary partition formatted with the NTFS file system with the unallocated space on the hard disk. What must the user do after the primary partition is extended to make it usable?",
    risposta: [
      "Convert the disk type to dynamic."
    ]
  },
  {
    domanda: "Why is a full format more beneficial than a quick format when preparing for a clean OS installation?",
    risposta: [
      "A full format will delete files from the disk while analyzing the disk drive for errors."
    ]
  },
  {
    domanda: "A technician wishes to prepare the computers in the network for disaster recovery. The network consists of a variety of desktops and laptops from different vendors. All the computers are running either a 32-bit version of Windows 10 Pro or a 64-bit version of Windows 10 Pro. How would the technician prepare the recovery media?",
    risposta: [
      "Prepare individual recovery discs for all the computers."
    ]
  },
  {
    domanda: "A technician wishes to deploy Windows 10 Pro to multiple PCs through the remote network installation process. The technician begins by connecting the new PCs to the network and booting them up. However, the deployment fails because the target PCs are unable to communicate with the deployment server. What is the possible cause?",
    risposta: [
      "The NIC cards on the new PCs are not PXE-enabled."
    ]
  },
  {
    domanda: "Which condition is required when planning to install Windows on a GPT disk?",
    risposta: [
      "The computer must be UEFI-based."
    ]
  },
  {
    domanda: "A technician wishes to perform a customized unattended network installation of Windows 10 on a PC. The requirements include the installation of specific applications and device drivers through the use of an answer file. What would the technician use to create the answer file?",
    risposta: [
      "Windows SIM"
    ]
  },
  {
    domanda: "An organization has purchased a custom application for the sales staff that can only be installed on a 64-bit Windows operating system. Each member of the sales staff has a Windows 8.1 32-bit PC. What must the IT department do in order to install and run the application on the sales staff computers?",
    risposta: [
      "Perform a clean installation of 64-bit Windows 10."
    ]
  },
  {
    domanda: "What are two possible solutions to any Windows computer restarting continuously and never displaying the desktop?",
    risposta: [
      "Press F8 to open the Advanced Options menu and choose Disable Automatic Restart on System Failure.",
      "Run chkdsk /F /R from the recovery console."
    ]
  },
  {
    domanda: "A technician uses Microsoft Deployment Image Servicing and Management (DISM) tool to create a Windows image file on one of the workstations running Windows 10. When the technician tries to clone another workstation with the image file, the workstation exhibits network connectivity issues on completion. What could cause this?",
    risposta: [
      "The SID of the original PC is not cleared when creating the image with DISM."
    ]
  },
  {
    domanda: "A user complains that user files cannot be synced with the network file server while the user is traveling out of the office. The user had access to the internet but no access to the company network server. How can this be addressed?",
    risposta: [
      "Setup a Sync partnership between the network server, Microsoft OneDrive, and the user."
    ]
  },
  {
    domanda: "A technician has connected a new internal hard drive to a Windows 10 PC. What must be done in order for Windows 10 to use the new hard drive?",
    risposta: [
      "Initialize the new hard drive."
    ]
  },
  {
    domanda: "What service does PRINT$ provide?",
    risposta: [
      "It provides printer drivers for printer administrators."
    ]
  },
  {
    domanda: "A technician is troubleshooting a Windows 10 laptop infected with a virus that has damaged the master boot record. The technician has booted the laptop using the installation media and is attempting to repair the laptop from the command line interface. Which command can the technician use to repair the corrupt master boot record?",
    risposta: [
      "bootrec /fixmbr"
    ]
  },
  {
    domanda: "A user reports that a Windows 10 PC displays the error message “Invalid Boot Disk” during the boot process. The IT technician attempts to boot the computer and finds that the error message occurs immediately after the POST. What could be the possible cause?",
    risposta: [
      "The MBR/GPT is corrupted."
    ]
  },
  {
    domanda: "Which port number is used by Virtual Network Computing (VNC) to provide remote screen sharing between devices?",
    risposta: [
      "5900"
    ]
  },
  {
    domanda: "Which feature is included with macOS and provides the ability for a remote user to view and change files, folders, and applications on the local computer?",
    risposta: [
      "Screen Sharing"
    ]
  },
  {
    domanda: "Which area of concern falls under the operations and planning category in IT documentation?",
    risposta: [
      "inventory management"
    ]
  },
  {
    domanda: "Which two actions should a technician take if illegal content, such as child pornography, is discovered on the hard drive of a customer computer?",
    risposta: [
      "Contact a first responder.",
      "Document as much information as possible."
    ]
  },
  {
    domanda: "What are three pieces of information a level one technician should gather from a customer?",
    risposta: [
      "contact information",
      "description of the problem",
      "details of any recent changes to the computer"
    ]
  },
  {
    domanda: "What two actions are appropriate for a support desk technician to take when assisting customers?",
    risposta: [
      "Let a customer finish talking before asking additional questions.",
      "If you have to put the customer on hold, ask the customer for permission."
    ]
  },
  {
    domanda: "A support desk technician is dealing with an angry customer. Which two approaches should the technician take in dealing with the customer?",
    risposta: [
      "Work to redirect the conversation to solving the problem.",
      "Let the customer explain the problem without interrupting."
    ]
  },
  {
    domanda: "What two kinds of problems should be escalated from a level one technician to a level two technician?",
    risposta: [
      "problems that are complicated and will take a long time to resolve",
      "problems that are beyond the scope of the knowledge of the level one technician"
    ]
  },
  {
    domanda: "An IT technician in a service company has provided extensive remote IT support with product deployment for a customer. After the completion of the contract, a complaint is filed against the IT technician for not following company policy by sending unsolicited emails about services and products that are not related to the contract. What two things should the IT support technician have done differently?",
    risposta: [
      "The IT technician should have researched the company policy about personal communication with customers on company time.",
      "The IT technician should have asked the customer if the customer was interested in receiving information regarding other new services and products."
    ]
  },
  {
    domanda: "A third-party security firm is performing a security audit of a company and recommends the company utilize the Remote Desktop Protocol. What are two characteristics of the Microsoft Remote Desktop Protocol (RDP)?",
    risposta: [
      "RDP uses an encrypted session.",
      "RDP connects on TCP port 3389."
    ]
  },
  {
    domanda: "Which subject area describes collecting and analyzing data from computer systems, networks, and storage devices, as part of an investigation of alleged illegal activity?",
    risposta: [
      "computer forensics"
    ]
  },
  {
    domanda: "In a computer forensics investigation, which type of data is considered volatile data and can be lost if power is removed from the computer?",
    risposta: [
      "data in transit between RAM and the CPU"
    ]
  },
  {
    domanda: "Refer to the exhibit. During the troubleshooting of software that is installed on a computer system, a level one technician requires help from a level two technician. The file shown in the exhibit must be sent to the level two technician. How should the level one technician deliver this file?",
    risposta: [
      "Replace all passwords in the file with <password omitted> before emailing the file and then supply the passwords by secure means, if required."
    ]
  },
  {
    domanda: "What skill is essential for a level one technician to have?",
    risposta: [
      "the ability to translate a description of a customer problem into a few succinct sentences and enter it into the work order"
    ]
  },
  {
    domanda: "What is used to control illegal use of software and content?",
    risposta: [
      "digital rights management"
    ]
  },
  {
    domanda: "What determines the level of support that a call center technician will provide to an individual customer?",
    risposta: [
      "Support is based on the SLA for that customer."
    ]
  },
  {
    domanda: "A bench technician enters the server room and finds the backup server computer case open. The hard drives containing patient medical data are all physically disconnected from the motherboard and the SATA data cables are hanging outside the case. Which step should the technician immediately take?",
    risposta: [
      "Locate an employee qualified to collect evidence."
    ]
  },
  {
    domanda: "What is the difference between a scripting language and a compiled language?",
    risposta: [
      "Scripting languages are interpreted and executed line by line when a script is run, while compiled languages need to be converted into executable code."
    ]
  },
  {
    domanda: "Which methods can be used to implement multifactor authentication?",
    risposta: [
      "passwords and fingerprints"
    ]
  },
  {
    domanda: "When responding to a call from a customer who is experiencing problems with a computer, the technician notices that a number of system files on the computer have been renamed. Which two possible solutions could the technician implement to resolve the problem?",
    risposta: [
      "Use antivirus software to remove a virus.",
      "Restore the computer from a backup."
    ]
  },
  {
    domanda: "A technician suspects that a security issue is causing problems with a computer. What two actions could be performed to test theories of probable cause when troubleshooting the PC?",
    risposta: [
      "Log in as a different user.",
      "Disconnect the computer from the network."
    ]
  },
  {
    domanda: "The CIO wants to secure data on company laptops by implementing file encryption. The technician determines the best method is to encrypt each hard drive using Windows BitLocker. Which two things are needed to implement this solution?",
    risposta: [
      "at least two volumes",
      "TPM"
    ]
  },
  {
    domanda: "What is an accurate description of asymmetric encryption technology?",
    risposta: [
      "It is an encryption process that uses a public and private key pair to encrypt/decrypt data."
    ]
  },
  {
    domanda: "Which type of security threat can be transferred through email and is used to gain sensitive information by recording the keystrokes of the email recipient?",
    risposta: [
      "virus"
    ]
  },
  {
    domanda: "A manager reports that unusual things are happening on a Windows computer. The technician determines that malware is the culprit. What can the technician do to remove stubborn malware?",
    risposta: [
      "Enter Safe Mode and do a system restore."
    ]
  },
  {
    domanda: "An employee that has worked at the company for many years has started a home-based business selling crafts. While leaving an office meeting, a company supervisor notices the employee buying supplies for the personal crafting business of the employee. What section of the security policy should the supervisor review when determining how to handle this situation?",
    risposta: [
      "acceptable use policies"
    ]
  },
  {
    domanda: "What Windows utility should be used to configure password rules and account lockout policies on a system that is not part of a domain?",
    risposta: [
      "Local Security Policy tool"
    ]
  },
  {
    domanda: "A customer brings in a computer that is asking for a password as soon as it powers on, even before the operating system boots. Which type of password is enabled?",
    risposta: [
      "BIOS"
    ]
  },
  {
    domanda: "When attempting to improve system performance for Linux computers with a limited amount of memory, why is increasing the size of the swap file system not considered the best solution?",
    risposta: [
      "A swap file system uses hard disk space to store inactive RAM content."
    ]
  },
  {
    domanda: "What are three features of GPS on mobile devices?",
    risposta: [
      "navigation",
      "specialized search results",
      "device tracking"
    ]
  },
  {
    domanda: "Which three components are used to assign file and directory permissions in Linux systems?",
    risposta: [
      "group",
      "owner",
      "all users"
    ]
  },
  {
    domanda: "A user downloads a widget onto his Android phone but is puzzled to see that when the widget is touched an app is launched. What is a possible cause?",
    risposta: [
      "The widget is associated with the app and this is the normal behavior."
    ]
  },
  {
    domanda: "What is the purpose of running mobile device apps in a sandbox?",
    risposta: [
      "to prevent malicious programs from infecting the device"
    ]
  },
  {
    domanda: "Which built-in tool is available on a Mac OS X machine to perform disk backups?",
    risposta: [
      "Time Machine"
    ]
  },
  {
    domanda: "A user calls the help desk reporting that a laptop with Linux freezes on startup and displays kernel panic. What could cause this problem?",
    risposta: [
      "A driver has become corrupted."
    ]
  },
  {
    domanda: "A user calls the help desk to report that a mobile device exhibits very slow performance. What could cause this problem?",
    risposta: [
      "A power-intensive app is running in the background."
    ]
  },
  {
    domanda: "Which term describes a partition that is used to store and boot an operating system by default?",
    risposta: [
      "active partition"
    ]
  },
  {
    domanda: "Which term describes a file system that supports a partition size up to 16 exabytes?",
    risposta: [
      "NTFS"
    ]
  },
  {
    domanda: "Which term describes a file system for USB flash drives that supports files larger than 4 GB?",
    risposta: [
      "exFAT"
    ]
  },
  {
    domanda: "Which term describes a partition that supports up to 23 logical drives?",
    risposta: [
      "extended partition"
    ]
  },
  {
    domanda: "Which term describes a file system for optical disk media?",
    risposta: [
      "CDFS"
    ]
  },
  {
    domanda: "Which term describes a type of partition that would only exist on a hard disk that has an MBR?",
    risposta: [
      "logical drive"
    ]
  },
  {
    domanda: "Which term describes a type of storage device that supports a partition to be extended into adjacent unallocated space as long as it is contiguous?",
    risposta: [
      "basic disk"
    ]
  },
  {
    domanda: "Which term describes a general name for physical areas on a hard drive?",
    risposta: [
      "partition"
    ]
  },
  {
    domanda: "Which term describes a partition scheme that takes a portion of disk space of 512 bytes long and that contains the boot loader?",
    risposta: [
      "MBR"
    ]
  },
  {
    domanda: "Which term describes a type of storage device that supports a volume that can span across more than one disk?",
    risposta: [
      "dynamic disk"
    ]
  },
  {
    domanda: "A technician is booting a laptop that has Windows 10 installed with 2 GB RAM. The boot process is currently working on the following step: NTOSKRNL.EXE starts the login file called WINLOGON.EXE. What is the next step that will happen in the boot process?",
    risposta: [
      "WINLOGON.EXE displays the Windows Welcome screen."
    ]
  },
  {
    domanda: "A user is booting a tablet that has Windows 10 installed. The boot process is currently working on the following step: WINLOGON.EXE displays the Windows Welcome screen What is the next step that will happen in the boot process?",
    risposta: [
      "There are no more steps, the boot process is complete."
    ]
  },
  {
    domanda: "A manager is booting a tablet that has Windows 8 installed. The boot process is currently working on the following step: POST. What is the next step that will happen in the boot process?",
    risposta: [
      "BIOS locates and reads the configuration settings that are stored in the CMOS memory."
    ]
  },
  {
    domanda: "An accountant is booting a PC that has Windows 8 installed. The boot process is currently working on the following step: BIOS locates and reads the configuration settings that are stored in the CMOS memory. What is the next step that will happen in the boot process?",
    risposta: [
      "The BIOS boots the computer using the first drive that contains a valid boot sector."
    ]
  },
  {
    domanda: "A network analyst is booting a PC that has Windows 7 installed with 2 GB RAM. The boot process is currently working on the following step: The code in the boot sector is executed and the control of the boot process is given to Windows Boot Manager. What is the next step that will happen in the boot process?",
    risposta: [
      "Winload uses the path specified in BOOTMGR to find the boot partition."
    ]
  },
  {
    domanda: "An analyst is booting a desktop that has Windows 7 installed with 4 GB RAM. The boot process is currently working on the following step: Winload uses the path specified in BOOTMGR to find the boot partition. What is the next step that will happen in the boot process?",
    risposta: [
      "WinLoad loads two files that make up the core of Windows: NTOSKRNL.EXE and HAL.DLL."
    ]
  },
  {
    domanda: "A gamer is booting a desktop that has Windows 7 installed on dynamic drives. The boot process is currently working on the following step: WinLoad reads the registry files, chooses a hardware profile, and loads the device drivers. What is the next step that will happen in the boot process?",
    risposta: [
      "The Windows kernel takes over the boot process."
    ]
  },
  {
    domanda: "A technician is booting a laptop that has Windows 10 installed with 2 GB RAM. The boot process is currently working on the following step: The Windows kernel takes over the boot process. What is the next step that will happen in the boot process?",
    risposta: [
      "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
    ]
  },
  {
    domanda: "A user is booting a laptop that has Windows 10 installed. The boot process is currently working on the following step: WINLOGON.EXE displays the Windows Welcome screen What is the next step that will happen in the boot process?",
    risposta: [
      "There are no more steps, the boot process is complete."
    ]
  },
  {
    domanda: "A manager is booting a tablet that has Windows 8 installed. The boot process is currently working on the following step: The Windows kernel takes over the boot process. What is the next step that will happen in the boot process?",
    risposta: [
      "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
    ]
  },
  {
    domanda: "Users in a company have complained about network performance. After investigation, the IT staff has determined that the attacker was using a specific technique that affected the TCP three-way handshake. What is the type of network attack?",
    risposta: [
      "SYN flood"
    ]
  },
  {
    domanda: "Users in a company have complained about network performance. After investigation, the IT staff has determined that the attacker is using a technique that compares hashed passwords to potential hashes the hacker has. What is the type of network attack?",
    risposta: [
      "rainbow table"
    ]
  },
  {
    domanda: "Users in a company have complained about network performance. After investigation, the IT staff has determined that the DNS server was sent with an enormous amount of false requests, thus overwhelming the server. What is the type of network attack?",
    risposta: [
      "DoS"
    ]
  },
  {
    domanda: "Users in a company have complained about network performance. After investigation, the IT staff has determined that the attacker is using a vulnerability that is known to the software vendor, but not patched yet. What is the type of network attack?",
    risposta: [
      "zero-day"
    ]
  },
  {
    domanda: "Users in a company have complained about network performance. After investigation, the IT staff has determined that zombies were used to attack the firewall. What is the type of network attack?",
    risposta: [
      "DDoS"
    ]
  },
  {
    domanda: "Users in a company have complained about network performance. After investigation, the IT staff has determined that zombies were used to attack the firewall. What is the type of network attack?",
    risposta: [
      "DDoS"
    ]
  },
  {
    domanda: "Users in a company have complained about network performance. After investigation, the IT staff has determined that the attacker is using a table of words that potentially could be used as passwords. What is the type of network attack?",
    risposta: [
      "dictionary"
    ]
  },
  {
    domanda: "Users in a company have complained about network performance. After investigation, the IT staff has determined that the attacker injected false records on the server that translates IP addresses to domain names. What is the type of network attack?",
    risposta: [
      "DNS poisoning"
    ]
  },
  {
    domanda: "What is required as an additional verification mechanism on iOS mobile devices when setting up biometric screen locks, such as Touch ID or Face ID?",
    risposta: [
      "a passcode"
    ]
  },
  {
    domanda: "Which situation can be prevented by creating a UEFI password?",
    risposta: [
      "an unauthorized person changing the boot order on the computer to boot to another OS"
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for a company that wants a device to monitor incoming and outgoing traffic and stop any malicious activity. Which security technique should the technician recommend?",
    risposta: [
      "Buy an IPS."
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for a machine where the antimalware software cannot remove all of the malware. Which security technique should the technician recommend?",
    risposta: [
      "Use Windows Safe Mode."
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for preventing tailgating. Which security technique should the technician recommend?",
    risposta: [
      "Use a mantrap."
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for drive redundancy. Which security technique should the technician recommend?",
    risposta: [
      "Implement a RAID."
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for phishing. Which security technique should the technician recommend?",
    risposta: [
      "Provide security awareness training."
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for protecting a computer used to log in at a dental clinic from someone using a bootable disk containing hacking tools. Which security technique should the technician recommend?",
    risposta: [
      "Disable ports."
    ]
  },
  {
    domanda: "A PC technician has been asked by a supervisor to recommend a security solution for a manager traveling who needs access to internal corporate resources. Which security technique should the technician recommend?",
    risposta: [
      "Use a VPN."
    ]
  },
  {
    domanda: "Why would a gamer need to use the move command?",
    risposta: [
      "to relocate a file from one Windows directory to another one"
    ]
  },
  {
    domanda: "Why would a gamer need to use the copy command?",
    risposta: [
      "to copy files, directories, and subdirectories from one location to another"
    ]
  },
  {
    domanda: "Why would a university student need to use the robocopy command?",
    risposta: [
      "to copy a group of files from one Windows directory to another"
    ]
  },
  {
    domanda: "Why would a university student need to use the xcopy command?",
    risposta: [
      "to copy files, directories, and subdirectories from one location to another"
    ]
  },
  {
    domanda: "Why would a technical support representative need to use the format command?",
    risposta: [
      "to prepare a hard drive to accept Windows files"
    ]
  },
  {
    domanda: "Why would a technical support representative need to use the bootrec command?",
    risposta: [
      "to help to repair the MBR that is suspected of having issues"
    ]
  },
  {
    domanda: "Why would a technical support representative need to use the ipconfig command?",
    risposta: [
      "to display the IPv6 address of the PC"
    ]
  },
  {
    domanda: "Why would a user need to use the netstat command?",
    risposta: [
      "to verify activity on the PC by displaying all active TCP connections on the device"
    ]
  },
  {
    domanda: "Why would a user need to use the nslookup command?",
    risposta: [
      "to query the Domain Name Sysytem (DNS) to get domain names and mapping information"
    ]
  },
  {
    domanda: "Why would a manager need to use the ping command?",
    risposta: [
      "to quickly verify connectivity by sending echo-request messages to the destination and receiving a series of echo-reply messages from that destination"
    ]
  },
  {
    domanda: "What are two probable causes of a user unable to access local resources such as file shares or printers on a wired network?",
    risposta: [
      "bad cabling",
      "DNS name resolution not working"
    ]
  },
  {
    domanda: "The IT department has just purchased 15 wireless access points in order to provide full wireless coverage for all 100 employees within the company and is looking to deploy the most secure and scalable wireless implementation. Which open source authentication method would perform authentication on behalf of all 15 wireless network devices?",
    risposta: [
      "RADIUS"
    ]
  },
  {
    domanda: "A technician is upgrading many PCs used within the company. How should the technician dispose of an old inkjet printer cartridge?",
    risposta: [
      "Recycle following local regulations."
    ]
  },
  {
    domanda: "A technician is about to begin preventive maintenance on a company PC. In which situation would ESD be an issue?",
    risposta: [
      "when installing a processor"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 67. What service application is the client requesting?",
    risposta: [
      "DHCP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 443. What service application is the client requesting?",
    risposta: [
      "HTTPS"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 69. What service application is the client requesting?",
    risposta: [
      "TFTP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 445. What service application is the client requesting?",
    risposta: [
      "SMB/CIFS"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 548. What service application is the client requesting?",
    risposta: [
      "AFP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 80. What service application is the client requesting?",
    risposta: [
      "HTTP"
    ]
  },
  {
    domanda: "A client packet is received by a server. The packet has a destination port number of 3389. What service application is the client requesting?",
    risposta: [
      "RDP"
    ]
  },
  {
    domanda: "Why would a user need to use the gpupdate command?",
    risposta: [
      "to make the PC synchronize with new group policy settings"
    ]
  },
  {
    domanda: "Which protocol is used by Windows for file and printer sharing?",
    risposta: [
      "SMB"
    ]
  },
  {
    domanda: "Which laptop LCD technology uses tilting crystals to provide a much higher contrast ratio than other types?",
    risposta: [
      "Vertical alignment (VA)"
    ]
  },
  {
    domanda: "Which two statements are true regarding GPT partitions?",
    risposta: [
      "They are commonly used in computers with UEFI firmware.",
      "They store a backup of the partition table."
    ]
  },
  {
    domanda: "A technician wishes to use the reset option to repair a Windows 10 installation and chooses the option that will retain the user’s personal files. Which statement is true based on using this option?",
    risposta: [
      "Only user files will be restored together with the complete reinstallation of Windows 10."
    ]
  },
  {
    domanda: "A user is trying to execute a file using elevated permission. The user right-clicks the file, chooses Run as Administrator, and chooses Yes in the User Account Control (UAC) window. The operation fails. What is the reason?",
    risposta: [
      "The user is not a member of the administrator group."
    ]
  },
  {
    domanda: "What is a possible situation when it might be necessary to boot Windows 10 from a bootable recovery USB device?",
    risposta: [
      "to repair the operating system"
    ]
  },
  {
    domanda: "An accountant is booting a PC that has Windows 10 installed. The boot process is currently working on the following step: BIOS locates and reads the configuration settings that are stored in the CMOS memory. What is the next step that will happen in the boot process?",
    risposta: [
      "The BIOS boots the computer using the first drive that contains a valid boot sector."
    ]
  },
  {
    domanda: "A manager is booting a tablet that has Windows 10 installed. The boot process is currently working on the following step: The Windows kernel takes over the boot process. What is the next step that will happen in the boot process?",
    risposta: [
      "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
    ]
  },
  {
    domanda: "An analyst is booting a desktop that has Windows 10 installed with 4 GB RAM. The boot process is currently working on the following step: Winload uses the path specified in BOOTMGR to find the boot partition. What is the next step that will happen in the boot process?",
    risposta: [
      "WinLoad loads two files that make up the core of Windows: NTOSKRNL.EXE and HAL.DLL."
    ]
  },
  {
    domanda: "A user notes that the username and password are automatically populated in the Microsoft Edge browser when logging into a secure site. When the user tries to log into the same site using Google Chrome, the username and password do not save automatically. Why is this occurring?",
    risposta: [
      "Google Chrome does not automatically save web credentials."
    ]
  },
  {
    domanda: "Which statement is true regarding libraries in Windows 10?",
    risposta: [
      "Libraries allow Windows 10 to link multiple different directories."
    ]
  },
  {
    domanda: "A corporation would like to use three or more factors for the password authentication policy. How can this be achieved?",
    risposta: [
      "MFA"
    ]
  },
  {
    domanda: "A person has started a new technical job. In which situation would ESD be an issue?",
    risposta: [
      "when replacing a motherboard"
    ]
  },
  {
    domanda: "A manager is booting a tablet that has Windows 10 installed. The boot process is currently working on the following step: WINLOGON.EXE displays the Windows Welcome screen What is the next step that will happen in the boot process?",
    risposta: [
      "There are no more steps, the boot process is complete."
    ]
  },
  {
    domanda: "Match the memory type to the feature.",
    risposta: [
      "DDR SDRAM - 184 pins",
        "DDR3 - 1.5V",
        "DDR2 - 1.8V",
        "DDR4 - 288 pins"
    ]
  },
  {
    domanda: "Match the problem to the possible solution.",
    risposta: [
      "The motherboard - Replace the Mothermoard",
        "The user - Check fo faulting",
        "After upgrading - Update the Bios",
        "The computer does not - Connect the auxillary"
    ]
  },
    {
    domanda: "Match the function performed by an OS to its description",
    risposta: [
      "hardware access — loads device drivers and updates",
        "file and folder management — organizes storage media into a logical structure",
        "application management — locates and loads software program",
        "user interface — displays and manages menus and icons"
    ]
  },
    {
    domanda: "Match the Android or Apple element to its description",
    risposta: [
      "walled garden model — prevents the spread of malware through Apple App Store",
        "proprietary SDK Xcode — used to create iOS third-party apps",
        "sideloading apps — term for directly installing an apk file into Android",
        "widgets — apps displaying dynamic information in Android",
        "application sandbox — area that isolates Android apps from interacting with each other",
        "rooting and jailbreaking — used on iOS to remove Apple user access restrictions"
    ]
  },
    {
    domanda: "Match the computer or peripheral problem with a probable cause of the issue",
    risposta: [
      "The card may require auxiliary power. — The monitor is blank after installing a PCle video card",
        "The BIOS firmware needs to be updated. — The computer runs more slowly after installing a dual-core CPU",
        "The built-in NIC may have failed. — Network shared drives are no longer accessible",
        "The POST process is not executing on startup. — The computer does not start and no beeps are heard",
        "The CMOS battery may be loose or drained. — The computer time must be reset after each reboot"
    ]
  },
    {
    domanda: "Match the IT policy type with its description",
    risposta: [
      "acceptable use policies — outlines how technology and applications can be used within the organization",
        "security policies — includes password complexity requirements and incident response methods",
        "regulatory compliance policies — describes all government and industry statutes that apply to the company",
        "disaster recovery policies — provides detailed plans of what must be done to restore IT services quickly"
    ]
  },
    {
    domanda: "Match the Windows 10 boot sequence after the boot manager (bootmgr.exe) loads",
    risposta: [
      "The Windows - Step One",
        "Ntoskrnl.exe and half.dll - Step two",
        "Windload.exe - Step Three",
        "Ntoskrnl.exe takes - Step Four",
        "Winlogon.exe is loaded - Step Five"
    ]
  },
    {
    domanda: "Match the correct API with its function within the Windows 10 environment",
    risposta: [
      "Windows API - This allow",
        "DirectX - This is a collection Windows",
        "OpenGL - This is a cross platform",
        "Java Api - This is a collection Java"
    ]
  },
    {
    domanda: "Match the tabs of the Windows 10 Task Manager to their functions",
    risposta: [
      "Performance - Display resources",
        "Startup - Allows programs",
        "Services - Allows for a start",
        "Details - Allows for a process"
    ]
  },{
    domanda: "Match the drive status indicators in the Disk Management utility with their description",
    risposta: [
      "Healthy - A volume",
       "Initializing - a  basic disk",
       "Not initialized - a disk that does not",
        "Online - a basic or dynamic disk",
        "Offline - a dynamic disk"
    ]
  },{
    domanda: "Match the wireless security settings to the description",
    risposta: [
      "WPA2-Personal - The advance Enscyption Standard",
      "WPA2-Enterprise - Authentication is passed",
      "Open - Data is sent unencrypted"
    ]
  },{
    domanda: "Match the individual languages with their corresponding classification",
    risposta: [
      "VBScript,Python,Javascript - Scripting languages",
      "C++,Java,C# - Compiled languages"
    ]
  },{
    domanda: "Match the steps that will lead to the loading of bootmgr.exe in a 32 bit Windows 10 environment",
    risposta: [
      "Step 1 - POST",
      "Step 2 - CMOS",
      "Step 3 - MBR",
      "Step 4 -  VBR"
    ]
  },{
    domanda: "Match the file system with the respective descriptio",
    risposta: [
      "NTFS - Supports partion sizes up to 16",
        "ExFAT - Usually use on flash drives",
        "FAT32 - Support partition size up to 2TB",
        "CDFS - created specifically for optical",
        "NFS - A network-based file system"
    ]
  },
];


// Funzione per cercare le domande nel testo e restituire le risposte corrispondenti
function cercaDomandeERisposte(testoSelezionato) {
    let risultati = [];
    domandeERisposte.forEach(item => {
        const regex = new RegExp(item.domanda.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        if (regex.test(testoSelezionato)) {
            risultati.push(item.risposta);
        }
    });
    return risultati;
}

// Funzione per creare e mostrare un tooltip
function mostraTooltip(risposte, x, y) {
    const tooltip = document.createElement('div');
    tooltip.textContent = risposte.join('\n'); // Unisce tutte le risposte separate da una doppia linea nuova
    tooltip.style.position = 'absolute';
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.style.background = 'rgba(0, 0, 0, 0.7)';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.zIndex = '9999';
    tooltip.style.maxWidth = '3000px'; // Imposta una larghezza massima per il tooltip
    tooltip.style.whiteSpace = 'pre-wrap'; // Assicura che il testo a capo venga rispettato

    document.body.appendChild(tooltip);

    setTimeout(() => {
        tooltip.remove();
    }, 1000); // Rimuove il tooltip dopo 1 secondi
}

// Funzione che viene chiamata quando l'utente seleziona del testo
function testoSelezionatoCallback(event) {
    const testoSelezionato = document.getSelection().toString();
    const risposteTrovate = cercaDomandeERisposte(testoSelezionato);

    if (risposteTrovate.length > 0) {
        const rect = event.target.getBoundingClientRect();
        const x = rect.left + window.scrollX;
        const y = rect.top + window.scrollY;
        mostraTooltip(risposteTrovate.flat(), x, y); // Invia tutte le risposte trovate alla funzione del tooltip
        window.getSelection().removeAllRanges();
    } else {
        console.log("Nessuna risposta trovata nel testo selezionato.");
    }
}

document.addEventListener('mouseup', testoSelezionatoCallback);


})();

