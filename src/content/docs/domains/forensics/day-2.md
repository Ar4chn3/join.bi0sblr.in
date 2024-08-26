---
title: "Day 2: Steganography"
---
### What is Steganography?
Steganography is a way of hiding information inside everyday files, like pictures or videos, so that the hidden data isn't obvious. Unlike encryption, which scrambles data and makes it clear that something secret is being protected, steganography makes the data look normal and blends in. This means people are less likely to notice anything unusual, making it useful for secretly sharing information without drawing attention.

#### Theory


<details>
<summary style="font-size:1.5em; font-weight:bold;">🕵️‍♂️ Introduction to Steganography:</summary>

<br>

### 🎯 **Objective:**  
Understand the fundamental concepts of Steganography and its importance in cybersecurity.

---

#### 🤔 **What is Steganography?**  
[Read here](https://www.geeksforgeeks.org/what-is-steganography/)

---

#### 🚀 **Let’s Start:**
#### Screening tools:

##### 🔍 **ExifTool:**  
`ExifTool` extracts metadata from files and provides detailed information about them. This metadata can be analyzed to learn more about the file type, its contents, and other hidden details. In the context of a Capture The Flag (CTF) challenge, this metadata can offer valuable clues, hints, or critical information that can help participants discover the flag or solve the challenge.

**Commands:**
1. **⬇️Installation:**  
   `sudo apt install exiftool`
2. **❓How to use:**  
   `$ exiftool <file-name>`
##### 💻 **Ghex:**
Using `ghex` we can see the headers, footers, and the data chunks of an image. It is to be noted that ghex can be used  for all types of files not only images.
**Commands:**
1. **⬇️Installation:**
    $ sudo apt install ghex
2. **❓How to use:**
    $ ghex image.jpg
##### 🚶 **Binwalk:**
Binwalk is a powerful tool designed to detect and extract embedded files and executable code from binary files. By scanning file structures, it can identify hidden content, such as compressed archives, firmware images, and scripts.
**Commands:**
1. **⬇️Installation:**
    $ sudo apt install binwalk
2. **❓How to use:**
    $ binwalk -e <file-name>
##### 🔎 **Steghide:**
It is used to embed and extract secret messages in images. It supports all the general formats of images like .png, .jpg etc. It is important to note that the password may not always be a plain text sentence. Sometimes it may be hashed.
1. **⬇️Installation:**
    $ sudo apt install steghide
2. **❓How to use:**

To embed message in the image:
    $ steghide embed -cf <filename> -ef secret_message.txt
    Enter passphrase : ********
    Re-Enter passphrase : ********
    embedding "secret_message.txt" in "<filename>"... done
    
To get the message from the image:
    $ steghide extract -sf <filename>
    Enter passphrase : ********
    wrote extracted data to "secret_message.txt".
#### Image Analysis in different planes:
##### 🟰 Stegsolve:
It is used to analyze images in different planes by taking off bits of the image.
1. **⬇️Installation:**
$ wget http://www.caesum.com/handbook/Stegsolve.jar -O stegsolve.jar
$ chmod +x stegsolve.jar
$ mkdir bin
$ mv stegsolve.jar bin/
2. **❓How to use:**
$ java -jar stegsolve.jar
#### Image Analysis in different planes:
##### ✅ PngCheck:
A tool to test PNG image files for corruption, display size, type, compression info.
pngcheck is the official PNG tester and debugger. Originally designed simply to test the CRCs within a PNG image file (e.g., to check for ASCII rather than binary transfer), it has been extended to check and optionally print almost all the information about a PNG image and to verify that it conforms to the PNG specification. It also includes partial support for MNG animations.
1. **⬇️Installation:**
$ sudo apt install pngcheck
2. **❓How to use:**
$ pngcheck -v image.png
</details>









#### Practice
<details>
<summary>Hands-On Exercise</summary>

Screening tools:
   > This is a good starter challenge for forensics that provide us an opening to explore various tools etc to be usedfor forensic analysis. The main reason for this is the way the challenge description is crafted to not give away anything. The challenge instructions are givn below. We are also provided with a file for this challenge which can be downloaded from [here](https://mega.nz/#!LoABFK5K!0sEKbsU3sBUG8zWxpBfD1bQx_JY_MuYEWQvLrFIqWZ0)
   > It is near by...
    ![M45k](https://hackmd.io/_uploads/BJYK3atoA.jpg)
   > Passed if it is GOODMORNING in German
    https://drive.google.com/drive/folders/1rLdy1SYCiIqufVmgN3pMYSnckqgGeT1M
   
</details>


