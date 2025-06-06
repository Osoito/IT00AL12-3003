# Project phase 1 - Definition and planning

This is a concise and light-weighted personal blog site that supports CRUD operation with the posts within for the owner of this blog site. 

## 1. User Personas

Users of this blog site will be the owner of the blog and the readers. They will share the interest spark about the main topics of the posts in this blog site. The site would not focus on usablity features of children or elder community.

| Persona  | Age | User Goal  | Ability | Need |
| ------------- | ------------- |---|---|---
| Writer  | 20 to 50  |Easily write and share thoughs in the form of blogs|Basic Markdown writing  |Manage posts easily, Write in stable markdown editor  |
| Reader  | 20 to 50  |Receive updates of the blog writer| General knowladge of the posted topics | Clear read section |


## 2. Use Cases and User Flows

This site will provide an easy-to-use online space for the owner to write and share their thoughts. And also for the readers to stably find the resources of the posts.

| Type  | User | Precondition  | Main Flow | Alternative Flow | Result 
| ------------- | ------------- |--|--|---|---
Logging in as writer|Writer|User knows the needed info for logging in|1. On the home page, click on "Log in as writer" button 2. Redirect to log in page or pop up. 3. Fill in correct information | - 3a. if information is not matching, user will get notification of the problem| User is authorized as writer and redirected to home page
| Posting a new post  | Writer  |User is logged in as writer or admin| 1. Click "Create new post" button 2. Type in title and content 3. Click "Post"|- 4a. If posted witout title, send notification  to browser "Posted as no-title" after posting| The post is posted and shows up on the main page of the site|
Reading a post|Reader|No precondition|1. Enter the site and visit the home page 2. Click on a post 3. Redirect to the article page|No alt flow|The content of the chosen blog is shown on the page


## 3. UI Prototypes

>Main page before logging in 
![](../Project%20BlogSite/UI%20Prototypes/Mainpage_notloggedin.jpg)

>Main page after logging in as writer
![](../Project%20BlogSite/UI%20Prototypes/Mainpage_writer.jpg)

>Page when trying to create a new post
![](../Project%20BlogSite/UI%20Prototypes/Post_newpost.jpg)

>Page after clicking on an article  
![](../Project%20BlogSite/UI%20Prototypes/Post_article.jpg)

>Page when scrolled down to the bottom of an article
![](../Project%20BlogSite/UI%20Prototypes/Post_comment.jpg)

## 4. Information Architecture and Technical Design
Page Architecture:

    A[Main Page] --> A1[Article List]
    A --> A2[Blog Info]
    A --> A3[Log In or Sign Up Button]
    A3 --> A4[Change Self or BLog info Buttons]
    A1 --> B[Article Page]
    B --> B1[Comment Section]
</br>

Data Architecture:

    USER ||--o{ ARTICLE : "Post"
    USER {
        string id PK
        string username
        string email
    }
    ARTICLE {
        string id PK
        string title
        string content
        string authorId FK
    }
    ARTICLE ||--o{ COMMENT : "Own"
    COMMENT {
        string id PK
        string content
        string articleId FK
    }
    }}

Tech Stacks:

Layer|Stack|Reason
-----|--|-
Frontend|React+Tailwind CSS|Have components
Backend|Node.js|Light-weighted
Database|Firebase|Stable and secure
Deployment|itHub Page|Cost-saving

Key Process Design(Post article):

    participant Frontend
    participant Backend
    participant Database
    Frontend->>Backend: POST /api/articles (content)
    Backend->>Database: Save article
    Database-->>Backend: Ensure saving
    Backend-->>Frontend: return Created

## 5. Project Management and User Testing
Project Management:

Task|Time|Output
-----|--|-
Decide User Personas|Day 1|User Personas and Use Cases Document
UI Prototypes|Day 2|Key pages prototypes
Tech Design and stacks|Day 3|Tech design document
User Testing| Day 4|Test document

Risk management:

Risk|Solution
----|--
Not enought time to learn the chosen tech stacks(PostgreSQL)|Could switch to familiar tools(SQLite)
Cannot implement planned function|Re-consider its importance and do the decision of pass or simplify

User Testing:

Scene|Process|Desired Result|Actual Result
-----|-------|--------------|------------
Post Article(OK)|Login as writer->Click "Create new post"->Post|Article posted|/
Log in(Account doesn't exist)|Type in user id and password -> Click "log in"|Notification "This account does not exist, please sign up first" and redirect to main page|/

