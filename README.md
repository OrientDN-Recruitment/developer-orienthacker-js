Orient Hacker
=====
![Cat undercover (Orient Hacker)][poster]
"Orient Hacker" is a TV series where the anti-hero main character (you), a notorious hacker, undercover works as a software engineer at Villain corporation. 

In support of wide-spreading protests against the government's deployment of killer drones into war fields in other countries, you aim to breach into Villain's secured system, as the corporation is main drones development contractor.

**Table Of Contents**
* [Episode 1: The Alpha](#episode-1-the-alpha)
* [Episode 2: Infiltration](#episode-2-infiltration)
* [Episode 3: Eagle Eye](#episode-3-eagle-eye)
* [Episode 4: The Wooden Horse](#episode-4-the-wooden-horse)
* [Guidelines](#guidelines)
  + [Setup guide](#setup-guide)
  + [Version conflicts](#fix-package-version-conflicts)
  + [How to get the best result](#how-can-i-get-the-best-result)
  + [How about Typescript ![icon-typescript-16]](#why-dont-we-use-typescript)
* [Contribution](#contribution)

Episode 1: The Alpha
-----
This is your first day at Vilian, you team leader hands down a requirement to build an API for company's internal tool. This API will be used for adding company staffs.

![Working with NodeJS][icon-nodejs]
![Build API][icon-api]
![May take 10-20m][icon-15]

[View episode »](src/episode_1)

Episode 2: Infiltration
-----
After passing the company's probation, you now join a project for building a HRMS system. Your task is writing an API to auto-generate working shifts for restaurant employees.

![Working with NodeJS][icon-nodejs]
![Build API][icon-api]
![May take 15-25m][icon-20]

[View episode »](src/episode_2)

Episode 3: Eagle Eye
-----
In an attempt to track down location of drones project data center, you try to investigate over staffs' addresses, especially the company and project managers'.

![Working with NodeJS][icon-nodejs]![Working with Google Maps API][icon-gmaps]![Process file or read document][icon-document-process]
![May take 20-30m][icon-25]

[View episode »](src/episode_3)

Episode 4: The Wooden Horse
-----
You finally approach to the building being used as drones project data center. Here in top-secret server room, supposed to control a large swarm of killer drones in Africa, you're about to plug in an infected USB containing a deadly [Trojan horse (malware)](https://en.wikipedia.org/wiki/Trojan_horse_(computing)). The trojan would transmit a faked firmware upgrades signal to destroy the whole swarm in minutes.

![Working with NodeJS][icon-nodejs]
![Working with MongoDB][icon-mongodb]
![May take 20-30m][icon-25]

_Coming Soon_

Guidelines
-----
These brief guidelines will help you quick start on our missions

### Setup guide
You will need [NodeJS](https://nodejs.org/en/download/) version 12+ to start on your missions.

Here are steps for getting started:

1. Clone / fork this repository
2. Install dependencies using command:
    ```
    npm install
    ```
3. Pick your mission (episode) and discuss with your interviewer to clear requirements
4. Start coding, run a command to watch your results, for example with Episode 1:
    ```
    npm run episode_1
    ```
### Fix package version conflicts

What if locked versions of dependencies conflict with your NodeJS version? You can simply remove it in `package.json` and re-add the conflicted dependencies.

### How can I get the best result?

Here is some things to ensure your victory:

1. Keep calm and be confident
2. Discuss with your interviewer to clear requirements and select best way to complete your missions before start coding
3. Concise doesn't mean simple. Make sure to fulfill all requirements. 
4. Don't be too of a perfectionist, killing your time over optimizing little things in your code.

### Why don't we use Typescript?

Yeah I'm a big fan of Typescript too. Thing is, I still couldn't find time to get it done right for this repository. Feel free to open PR anytime or share your ideas with me in Issues section.

Contribution
-----

Every contributions are welcomed. Feel free to open pull requests, even commenting or triage on issues anytime you like.

**Good luck & Have fun 🍻**

[poster]: assets/posters/undercover-cat-min.jpg
[icon-nodejs]: assets/nodejs.png
[icon-api]: assets/api.png
[icon-gmaps]: assets/google-maps.png
[icon-document-process]: assets/document-scan.png
[icon-mongodb]: assets/mongodb.png
[icon-typescript-16]: assets/typescript-16.png

[icon-15]: assets/15.png
[icon-20]: assets/20.png
[icon-25]: assets/25.png
