# Smart Spaces Ghost Detector
The Ghost Detector - an educational location-based museum game for children

SMART_SPACES consists of 3 applications

1. Visual content built using Unity (Part 1)
1. BT Beacon data receiver (Unity end) (Part 2)
1. BT Beacon data collector (Android end) (Part 3)


* BT Beacon Data Flow:
* Part 3 (Android Service): grap data and broadcast --> 
* Part 2 (Jar library) that captures broadcast messages --> 
* C# Layer --> JS Layer --> Unity

Can handle any number of beacons

* Used the free version of Unity.
* Part 2 Project generate the jar and put it in the unity folder.
* Part 2 Jar lib and Android Manifest file need to be structure in correct folder structure.

**Related Publication**

*Tommy Nilsson, Carl Hogsden, Charith Perera, Saeed Aghaee, David Scruton, Andreas Lund, Alan F. Blackwell, Applying Seamful Design in Location-based Mobile Museum Applications, ACM Transactions on Multimedia Computing Communications and Applications (TOMM), Volume 12, Issue 4, Pages 56:1--56:23, 2016 (23)*



Virtual characters representing different exhibits were animated and accompanied by messages to reflect the users’ position and situation.
![enter image description here](https://i.imgur.com/lNB7qKE.jpg)


A number of families, including small children, took part in the evaluation process. Image copyright: Dovetailed
![A number of families, including small children, took part in the evaluation process.](https://i.imgur.com/mZqlDCv.jpg)


The direction the user was facing had a dramatic impact on RSS
![enter image description here](https://i.imgur.com/x1z7mwf.jpg)


