---
title: "Day 5: Introduction to Wireshark"
description: Basics on how websites and webpages work
---


### 🧐 What is Wireshark?

**Wireshark** is a powerful network protocol analyzer that allows you to capture and interactively browse the traffic running on a computer network. Think of it as your x-ray vision into network packets.



### 💡 Why Use Wireshark?
* **Packet analysis**: Dig deep into data packets.
* **Network traffic analysis**: See what's really happening on your network.
* **Capture and display packets**: Visualize the flow of information.
* **Packet filtering**: Focus on the packets that matter.



### ⚙️ Installing Wireshark

* #### 🐧 **Ubuntu/Debian Based Systems**
    
    Run the following command to install Wireshark:

    ```bash
    sudo apt-get install wireshark
    ```

* #### 🪟 🍏 **Windows/Mac OS**

    Download the installer from the [Wireshark website](https://www.wireshark.org/download.html) and follow the instructions to install.



###  🖥️ Basic Commands

Here are some basic commands to get you started with Wireshark:

| **Command**               | **Description**                                                              |
|---------------------------|------------------------------------------------------------------------------|
| `wireshark`               | Start Wireshark                                                              |
| `wireshark -k`            | Start Wireshark and immediately start capturing packets                      |
| `wireshark -r <file>`     | Open a capture file for analysis                                             |
| `wireshark -f <filter>`   | Start Wireshark and immediately start capturing packets with a specified filter |



### 🥊 Wireshark vs TShark 

#### **Wireshark**

* **Type**: GUI-based
* **Use**: Interactive packet analysis with a graphical interface.
* **Features**: Detailed visual inspection of network traffic, user-friendly for finding and analyzing packets, great for learning and hands-on troubleshooting.

#### **TShark**

* **Type**: CLI-based
* **Use**: Command-line packet analysis and automation.
* **Features**: Efficient for scripting and automation tasks, useful for remote analysis or when a GUI isn't available, ideal for batch processing and integrating with other tools.



### 🚀 Advanced Commands

Here are some advanced commands you can use with Wireshark:

| **Command**               | **Description**                                                               |
|---------------------------|-------------------------------------------------------------------------------|
| `tshark -i <interface>`   | Capture packets on the specified interface                                    |
| `tshark -D`               | List available capture interfaces                                             |
| `tshark -r <file>`        | Analyze a capture file                                                        |
| `tshark -V`               | Display packet details in verbose mode                                        |
| `tshark -R <filter>`      | Apply a filter to the packets                                                 |
| `tshark -z <statistics>`  | Generate statistics on captured packets                                       |


### 🏷️ Wireshark Profiles

Wireshark profiles allow you to customize and save different settings for various analysis tasks, making it easier to switch contexts without reconfiguring the tool each time.

This was you can make custom profiles which help in solving with specificity.

#### **Key Features:**

* **Custom Preferences:** Save unique preferences for display settings, protocol decoding, and more for each profile.
* **Display Settings:** Customize and retain specific column layouts, color schemes, and font sizes.
* **Capture and Display Filters:** Define and save specific filters to focus on relevant traffic.
* **Easy Switching:** Quickly switch between profiles using the profile selector in the Wireshark interface.

A few profiles that can be used directly are linked in additional resources.

### 🎯 Challenges

Here are two beginner level  Wireshark challenges and one which is a combination of both.

Use [PicoCTF](https://picoctf.org/) to familiarize with Wireshark.

Challenge 1: [FindAndOpen](https://play.picoctf.org/practice/challenge/348?category=4&difficulty=2&page=1&search=)

    Objective: Find the flag hidden in the trace file
    
    Hint:
        - Line 48 has the password
        - Use dcode.fr to decode only the data 

Challenge 2: [Packets Primer](https://play.picoctf.org/practice/challenge/286?category=4&difficulty=2&page=2&search=)

```
Objective: Use Wireshark to find the flag

Hint:
    - Did you know you can follow in wireshark?
```
Challenge 3: [Wireshark doo dooo do doo...](https://play.picoctf.org/practice/challenge/286?category=4&difficulty=2&page=2&search=)

```
Objective: Use Wireshark to find the hidden flag

Hint:
    - Follow and decode the cipher, as simple as that
```

### 🔗 Additional Resources

For more information, check out these resources:

* [Official Wireshark Wiki](https://wiki.wireshark.org/)
* [Wireshark bi0s Wiki](https://wiki.bi0s.in/forensics/wireshark/)
* [Wireshark User Guide](https://www.wireshark.org/docs/wsug_html/)
* [Wireshark tutorial](https://www.youtube.com/playlist?list=PLW8bTPfXNGdC5Co0VnBK1yVzAwSSphzpJ)
* [Wireshark Profiles](https://github.com/amwalding/wireshark_profiles)

---
