---
title: "Day 3: Block Ciphers and AES"
description: not that crypto, the other one
---

### Block ciphers and AES
Block ciphers encrypt data in fixed-size blocks, typically 64 or 128 bits, by applying a symmetric key algorithm to transform plaintext into ciphertext. AES (Advanced Encryption Standard) is a widely used block cipher that encrypts 128-bit blocks using a key size of 128, 192, or 256 bits. It operates through multiple rounds of substitution, permutation, and mixing of the input data, each round using a different part of the key (called round keys). The process involves substituting bytes (SubBytes), shifting rows (ShiftRows), mixing columns (MixColumns), and adding the round key (AddRoundKey). AES is highly secure and efficient, making it the standard for encrypting sensitive data worldwide.

#### Theory

<details>
<summary>Introduction to Block Ciphers</summary>

> Objective: Introduce the concept of block ciphers and their operation.

> > What is a Block Cipher and How Does It Work [Read here](https://www.sangfor.com/glossary/cybersecurity/what-is-block-cipher)

> > Block Cipher modes of Operation [Read here](https://www.geeksforgeeks.org/block-cipher-modes-of-operation/)

</details>

<details>
<summary>Advanced Encryption Standard</summary>

> Objective: Introduction to AES (Advanced Encryption Standard).

> > What is a AES and How Does It Work [Read here](https://www.geeksforgeeks.org/advanced-encryption-standard-aes/)

</details>



#### Practice

<details>
<summary>Hands-On Exercise</summary>

>>Implement AES encryption and decryption using [PyCryptodome](https://pycryptodome.readthedocs.io/en/latest/) in Python.

>>Encrypt and decrypt files/messages using AES.

>>Try encrypting the same plaintext using AES with different key sizes to observe how the key size affects the resulting ciphertext outputs and their security
</details>
