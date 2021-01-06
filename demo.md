---
layout: genericPage
title: Demo
permalink: /demo
---

Using markdown to build a webpage is easy! Just type what you want into the editor to have it appear as text.  
Careful, though, if you want to write a different paragraph you need to have two spaces after the line's end!
Steer away from tabs and spaces, and keep text left aligned.  

Adding emphasis to your text is simple:

- Double asterisks for bold
  - **Bold**
- Single asterisks for italics
  - *Italicized*
- Triple asterisks for both
  - ***Nice***

Lists are even easier:

 1. Enter a space between your list and the text above
 2. Type a number or a dash for the entry in the list
 3. Hit space
 4. Type

Lists can be made even easier with some VSCode plugins like:

- For markdown editing features: yzhang.markdown-all-in-one
- For markdown "spell-checking" (called linting): davidanson.vscode-markdownlint

Search the text above in VSCode's extension finder to install it

To actually edit the website, make sure to pull from the WebsiteDevelopment branch using git, commit, and then push back to the branch.
**If two people pull, edit and then try to push, git will raise a conflict! Make sure you are not doing that!**

If it does happen:

1. Copy your work into a different file
   1. This should be outside of the project folder
2. In your terminal type `git fetch origin`
3. Then `git reset --hard origin/master`
4. Repaste your work
5. Recommit
6. Push
