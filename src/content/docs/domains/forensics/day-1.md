---
title: "Day 1: Introduction to Forensics"
---

### What is Cyber Forensics?

Cyber Forensics is the art of investigating digital assets to gather evidence of cybercrimes and security incidents. The goal is to figure out what went down, how bad it was, and to make sure the digital evidence holds up in court.

* **Forensic tools** like EnCase and FTK are the heavy hitters for data analysis and evidence recovery from storage devices.
* **Chain of custody** is crucial to maintain the integrity of digital evidence throughout the investigation.
* **Digital footprints** left by attackers can be traced in computer networks and systems during an examination.
* Forensic analysts often work alongside **law enforcement** for legal prosecution in cybercrime cases.

---

### 📚 Theory

<details>
<summary>Deep Dive into Cyber Forensics</summary>

From a CTF (Capture The Flag) perspective, digital forensics can be divided into several categories. The key ones are:

* **Network Forensics**
* **Image Forensics**
* **Memory Forensics**
* **File Forensics**

For Day 1, we’ll kick things off with **File Forensics**.

**File Forensics** involves digging into files to uncover evidence of unauthorized access, tampering, or misuse. Techniques like metadata examination and file carving are key.

* The aim is to retrieve critical information from a file without altering the original data.
* **Hashing algorithms** ensure the integrity of files during analysis.
* **File signature analysis** helps identify the file type and origin, which aids in understanding potential threats.
* Extracting **hidden data** from files, like deleted data or metadata, can provide valuable insights during an investigation.

</details>

---

### 🛠️ Hands-On Tools

To get you started with file forensics, here are some essential tools that you can download and start using immediately:



#### 1. **Hex Fiend**
Hex Fiend is a fast, free, and easy-to-use hex editor designed for macOS. It’s perfect for examining file signatures and uncovering hidden data within files.

- **Download:** [Hex Fiend GitHub](https://github.com/HexFiend/HexFiend)
- **Features:**
  - Allows searching and modifying of file contents at the binary level.
  - Supports files of any size, from kilobytes to terabytes.
  - Compare binary files side by side.

#### 2. **Hxd (Windows)**
Hxd is another powerful hex editor, more suited for Windows users, enabling low-level data exploration and analysis.

- **Download:** [Hxd Official Site](https://mh-nexus.de/en/hxd/)
- **Features:**
  - Edit and analyze binary files and disk sectors.
  - Data visualizations for better comprehension.
  - Integrates data inspection and modification with ease.

---

**💡 Pro Tip:** Install these tools, and try analyzing a sample file or disk image. Experiment with the features mentioned above to get a feel for how each tool works. The more familiar you are with these, the quicker you’ll be able to uncover critical evidence during an investigation.


---

### 🛠️ Practice

<details>
<summary>Hands-On Exercise</summary>

**Question 1:**  
*Challenge*: [PicoCTF - Information](https://play.picoctf.org/practice/challenge/186?category=4&difficulty=1&page=1&search=)  
*Solution*: [Watch the walkthrough](https://www.youtube.com/watch?v=uG42AMp0XHU)

**Question 2:**  
*Challenge*: [PicoCTF - Glory of the Garden](https://play.picoctf.org/practice/challenge/44?category=4&difficulty=1&page=1)
*Solution*: [Watch the Walkthrough](https://www.youtube.com/watch?v=_TTKoY2FGr0)
</details>

---