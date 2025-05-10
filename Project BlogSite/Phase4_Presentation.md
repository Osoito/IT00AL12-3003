# Phase 4 – Project Presentation
##  Project title

Opal Blog

---

## 📝 Project overview

Opal Blog is a light-weighted blog site for users that want to write in the form of blogs on a private and minimalism space, and also for their potential readers. The site has the basic functions in posting and writing articles with markdown language, as well as viewing the list of blogs and their contents.

There is only one instance designed for the blog site so far. Only one user can be authorized as writer, and manage the blog contents. For readers, the site doesn't acquire logging in, for an easy-feeling user experience.

---

## 📌 Use case summary


| Use Case | Implemented (Yes/No) | Demonstration / Notes |
|----------|----------------------|------------------------|
| Log in as writer | Yes | Implemented. |
| Write new post | Yes | Implemented. |
| Read post | Yes | Implemented.|



---

## ✍️ Technical implementation

### Tech Stacks Used:

#### Backend
- Node.js server with Express
- RESTful API endpoints for blog operations
- Server running on port 3000

#### Frontend
- React for component-based UI
- HTML5 and CSS3 for structure and styling
- Attempted Tailwind CSS integration (pending resolution)

#### Database
- SQLite for data persistence
- Tables: blogs (id, title, article, publishedAt)

### Project Architecture

Client (React) → API Endpoints → Node.js Server → SQLite Database

---

## 🚂 Development process

The idea was from the need of owning a private and minimalism space for blog writing and viewing that myself sometimes feel.
The basic framework structure and implementation approach were inspired by other minimalism blog sites from open-source resources. 
During development, many ideas from the planning phase were given up in order to make the site more fitting to the concept of being minimalism, such as reader accounts, comment section, some UI elements, etc.

---

## ☀️ Reflection and future work


Discoverd the conviniency of framework React in web developing. Learned more about building interactive site and linking between frontend and backend.
Faced challenge when trying to implement database in other more advanced methods and turned to SQLite eventually. Tailwind CSS implementation was challenging after preparing in vanilla CSS. Spent most time fixing the interactive elements' logic.
I would try adding comment section in the future, and improve the article editor page.

---

## 📊 Work Hours Log

|Date|Time|Subject|
--|--| --
6.4|4h|Plan out Phase 1 and draw UI prototypes|
8.4|5h|Finish Phase 1 document and create log book|
20.4|3h|Plan out project file structure and do further research of the planned tech stacks|
23~26.4|6h|Continue to study more about the planned tech stacks and make changes to the development plan|
28.4|5h|Basically finish the starting point of development in vs code|
30.4|5h|Implement basic frameworks and site constructure for presentation of Phase 2|
1.5|7h|Continue to develop in Phase 2, and finish Phase 2 document|
3.5|3h|Plan out what future developments are needed in Phase 3, and fix some little errors from Phase 2|
4.5|4h|Develop in Phase 3, and fix errors from Phase 2| 
5.5|4h|Same|
7.5|5h|Same|
| **Total**  | **51h** |                                 |

---

## 🪢 Presentation link

_Add a link to your video presentation or state that it was presented live._