# Project phase 2 - Basic structure and main functionalities



## 1. Environment

Used VSCode

## 2. Backend

Node.js

## 3. Frontend

React, html and css. Tried to install Tailwind but ended with too many unsolved errors.

## 4. Database

SQLite

## 5. Basic structure and architecture

Home page -> Blogs section -> Blog editor

## 6. Functionalities

Added blog editor, publish function and blogs section on home page.

## 7. Code quality and documentation

Tried to keep the code clean.

## 8. Testing and error handling

No testing added yet.
In editor there is basic error handling for the editing user:
>try {
                await axios.post('http://localhost:5000/api/blogs', {
                    title,
                    article,
                    publishedAt,
                });
                alert('Blog published successfully!');
                setTitle('');
                setArticle('');
            } catch (error) {
                console.error('Error publishing blog:', error);
                alert('Failed to publish blog.');
            }
        } else {
            alert('Please fill in both the title and the article.');
        }



## 9. User interface and interaction

Basic UI and interaction.