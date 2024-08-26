---
title: "Day 3: Password Cracking"
description: Basics on how websites and webpages work
---
### What is Password Cracking?

Password cracking is the process of recovering plain text passwords from their hashed or encrypted forms. It involves techniques that attempt to reverse or bypass the security mechanisms protecting the password.

#### 📚 Methods to Crack Passwords

<details>
<summary>Click to expand</summary>

* **Wordlist Method**: This method involves using a predefined list of potential passwords, which are tested against a hashed password to find a match.

    ***A famous wordlist in CTFs is `Rockyou.txt`***
    * **Download here**: [Click here](https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt)

* **Brute Force Method**: This method tries every possible combination of characters systematically until the correct password is found.

</details>

---
### 🛠️ Hands-on Tools

So let's begin with the tools you will require. Don't worry; the **installation commands** will also be provided.

#### Here are the Tools:
1. **John The Ripper**
2. **Stegcracker**
3. **Fcrackzip**
4. **PDFCrack**

### 🗡️ John The Ripper

<details>
<summary>Unleash the power of John the Ripper</summary>


John the Ripper is a fast password cracker, currently available for many flavors of Unix, Windows, DOS, and OpenVMS. Its primary purpose is to detect weak Unix passwords. Besides several crypt(3) password hash types most commonly found on various Unix systems, supported out of the box are Windows LM hashes, plus lots of other hashes and ciphers in the community-enhanced version. John can almost crack all password-encrypted archives.

#### 📥 Installation
* **Linux:** `sudo apt install john`
* **macOS:** `brew install john`

#### 🕹️ Usage

1. **Wordlist / Dictionary Mode**: This mode uses a list of passwords. John generates hashes for these passwords on the fly and compares them with the provided password hash.

    ##### ⌨️ Command:
    ```john --wordlist=<path-to-wordlist> --rules <hash-file>```

    ***👉 Example:***

    ```john --wordlist=/usr/share/wordlists/rockyou.txt --rules file_name```

2. **Brute Force Mode / Incremental Mode**: This powerful mode tries all possible character combinations as passwords.

    ##### ⌨️ Command:
    ```john --incremental <hash-file>```

    ***👉 Example:***

    ```john --incremental file_name```

</details>

---
### 👮 Stegcracker
<details>
<summary> Unlock hidden secrets with Stegcracker</summary>

Steganography brute-force utility to uncover hidden data inside files.

#### 📥 Installation
* **Linux:** 
    `sudo apt-get install steghide -y`
               `=pip3 install stegcracker`
                
* **macOS:** `brew install stegcracker`

#### 🕹️ Usage
    
##### ⌨️ Command:
* ```stegcracker <file> [<wordlist>]```
    
***👉 Example:***
* ```stegcracker joe.jpg rockyou.txt```
</details>    

---
### 🗃️ Fcrackzip
<details>
    <summary>Crack ZIP file passwords with ease using Fcrackzip</summary>
    
Fcrackzip is a password cracking tool for ZIP files. Fcrackzip cracks the password by ***Brute-Force Attack*** or by a ***Dictionary Attack***.
    
#### 📥 Installation
* **Linux:**
    `sudo apt install fcrackzip`
* **Macos:**
    `brew install fcrackzip`
#### 🕹️ Usage
***Some useful info:***
    
---
`-v` for knowing what's going on in background Commonly Known as verbose.
`-b` for brute-forcing.
`-u` for unzip.
`-p` for setting the initial password for brute forcing or the
file to supply password for dictionary attack.
`-D` sets dictionary mode and reads passwords from a wordlist alphabetically.
    
---

    
1) ***Wordlist / Dictionary Method:***
    ##### ⌨️ Command:
* ```fcrackzip -v -u -D -p <path_to_wordlist_file><file_name.zip>```
***👉 Example:***

* ```fcrackzip -v -u -D -p rockyou.txt Chall.zip```
    
2) ***Brute Force:***
    ##### ⌨️ Command:
* ```fcrackzip -v -b -u <file_name.zip>```
    
    ***👉 Example:***
    * ```fcrackzip -v -b -u Challenge.zip```
</details>

---

### 💾 PDFCrack
<details>
<summary>Unlock encrypted PDFs with PDFcrack</summary>

    
PDF Crack is a tool for recovering the pass for Encrypted PDF files.
    
#### 📥 Installation
* **Linux:**
    `$ sudo apt-get install pdfcrack`
* **Macos:**
    `brew install pdfcrack`
#### 🕹️ Usage
1) ***Wordlist / Dictionary Method:***
    #### ⌨️ Command:
* ```$ pdfcrack -f <file_name> -w <location_of_wordlist_file>```
***👉 Example:***
* ```$ pdfcrack -f Challenge.pdf -w rockyou.txt```
    
2) ***Brute Force:***
    ##### ⌨️ Command:
* ```$ pdfcrack -f <file_name>```
    
    ##### 👉 Example:
* ```$ pdfcrack -f Challenge.pdf```
</details>
    
---
