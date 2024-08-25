---
title: "Day 4: Asymmetric Ciphers and RSA"
description: not that crypto, the other one
---

### Asymmetric Ciphers

Asymmetric encryption, also known as public-key cryptography, uses a pair of keys: a public key for encryption and a private key for decryption. Unlike symmetric encryption, where the same key is used for both encryption and decryption, asymmetric encryption allows secure communication without the need to share a secret key in advance. The public key can be distributed openly, while the private key remains confidential.

RSA (Rivest-Shamir-Adleman) is a widely used asymmetric encryption algorithm. It relies on the mathematical difficulty of factoring large prime numbers. In RSA, the public key is derived from two large prime numbers multiplied together, and the private key is based on the same primes. To encrypt a message, the sender uses the recipient's public key to transform the plaintext into ciphertext. The recipient then uses their private key to decrypt the ciphertext back into plaintext. RSA is commonly used for securing sensitive data, digital signatures, and establishing secure connections over the internet.

#### Theory

<details>
<summary>Introduction to Asymmetric (Public-Key) Cryptography</summary>

> Objective: Introduce the concept of asymmetric encryption and decryption.

> > What is Public Key Cryptography? [Read here](https://www.digitalguardian.com/blog/what-public-key-cryptography)

</details>

<details>
<summary>RSA Algorithm</summary>

> Objective: Deepen understanding of RSA as a widely used asymmetric encryption algorithm.

> > RSA Algorithm: Secure Your Data with Public-Key Encryption [Read here](https://www.simplilearn.com/tutorials/cryptography-tutorial/rsa-algorithm)

</details>



#### Practice

<details>
<summary>Hands-On Exercise</summary>

>>Generate RSA key pairs and understand public/private key concepts.

>>Implement RSA encryption and decryption in Python.

</details>
