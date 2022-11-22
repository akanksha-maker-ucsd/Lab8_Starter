# Lab 8 - Starter

1) I would fit automated tests within a Github action that runs whenever code is pushed, so that I can check if each commit to my project affects/breaks any other portion efficiently, as GHA will run automatically. 
2) No
3) No, the message feature of a messaging application is complex- it has many moving parts and it interacts with many other elements, unit testing is better for a smaller scale. 
4) Yes, the max message length is a small component of the messaging application. For example, we could simply pass in a message more than 80 characters and a message less than 80 characters in the associated functions and check if the actual output matches what we expected (80> characterss not accepted and <80 accepted).