<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
-The purpose of using a sessions is to generate
-a cookie for the client upon request. That way,
-when the client makes additional requests, it has
-a valid cookie id attached to it, so the server
-can recognize the client and doesn't require the 
-client to keep asking for credentials.

2. What does bcrypt do to help us store passwords in a secure manner.
-It hashes the passwords, essentially encoding it.
-It also has accumulative hashing rounds as to how 
-long it takes to generate a hash.

3. What does bcrypt do to slow down attackers?
-Generates a hash, which requires a algorithm for it
-and the number of rounds used to make the hash.

4. What are the three parts of the JSON Web Token?
-The header, the payload and the signature.
-The header contains the algorithm. Payload contains
-permissions(claims)/data. The signature combines
-the header and payload encoding it with a secret.

// Sessions + cookies are stored on server side.
// JWTs stored on client side.