# Phase 3 – Extra Feature or Improvements (Optional)

##  Chosen Use Case or Feature to Improve

Among all the fixes and changes after the first version of Phase 2, most importantly, I chose to expand the editor part of the app more, as I find it important for the functioning of the app in user testing. It is needed to have a password to control the authorization of the editor and posting function, so the blog can remain private and organizable.

---

##  Original Definition

| Type  | User | Precondition  | Main Flow | Alternative Flow | Result 
| ------------- | ------------- |--|--|---|---
Logging in as writer|Writer|User knows the needed info for logging in|1. On the home page, click on "Log in as writer" button 2. Redirect to log in page or pop up. 3. Fill in correct information | - 3a. if information is not matching, user will get notification of the problem| User is authorized as writer and redirected to home page

---

##  Implementation

I implemented a password page that would appear before the user could access the article editor.
There were also other fixes or changes after the first version of Phase 2, including better layout of the components, new icon for the site, makrdown language supported editor, etc.

### Technical Changes Required

To implement the improvements and features, several technical changes were made:

1. **Better Layout**: Adjustments were made to the CSS files to improve the overall layout and user experience of the application.
2. **New Icon**: A custom `.ico` file was created using an online tool to give the site a unique and professional appearance.
3. **Markdown Editor**: React's built-in support for markdown was utilized to integrate a convenient and user-friendly markdown editor into the application.
4. **Password Validation**: JavaScript was used to validate the password entered by the user against a pre-set password stored securely in a `.env` file. The `.env` file was added to `.gitignore` to ensure it remains inaccessible from the client side, enhancing security.

### Challenges and Solutions

1. **CSS Adjustments**: Ensuring the layout changes were responsive and visually appealing across different devices required iterative testing and refinement.
2. **Icon Creation**: Finding the right tool to create a high-quality `.ico` file was a minor challenge, but it was resolved by using an online generator.
3. **Markdown Integration**: Leveraging React's markdown support simplified the process, but ensuring compatibility with the rest of the application required careful testing.
4. **Password Security**: Storing the password securely in a `.env` file and ensuring it was ignored by version control was critical. This was achieved by properly configuring the `.gitignore` file and validating the password on the client side using JavaScript.

These changes collectively enhanced the functionality, security, and user experience of the application.