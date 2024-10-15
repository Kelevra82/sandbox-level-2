# GIT COMMANDS

### INSTALL GIT BASH

1. Run the command `git --version` to check if git is installed.
2. If there's an error, install [Git Bash](https://git-scm.com/)
3. Choose default options, but override the branch name with main.
4. Reload VS Code to apply changes.

### INSTALL GITHUB CLI

1. Run the command `gh --version` to check if gh is installed.
2. If there's an error, install [GitHub CLI](https://cli.github.com/)
3. Choose default options.
4. Reload VS Code to apply changes.

### CONFIGURE USER NAME

1. `git init`
2. Run the command `git config user.name`
3. If it's not correct, run the command `git config user.name "Your Name"`
4. To set it as default, run the command `git config --global user.name "Your Name"`

### CONFIGURE USER EMAIL

1. `git init`
2. Run the command `git config user.email`
3. If it's not correct, run the command `git config user.email "Your Email"`
4. To set it as default, run the command `git config --global user.email "Your Email"`

### COPY THE REPOSITORY URL

1. OpenGitHub
2. Open the repository
3. Click on the green Code button
4. Copy the HTTPS URL

### PULL FROM GITHUB

```
git init
git remote add origin https://github.com/YourName/YourRepo.git
git pull origin main
```

### DELETE UNUSED FILES

1. If there are files that VS Code doesn't need (like Glitch files), delete them.

### CREATE A NEW REPOSITORY IN GITHUB

1. Click on the cat icon at the top left.
2. Click on the green 'New' button to create a new repository.
3. Enter a name for the repository.
4. Click on the green 'Create repository' button.
5. Do not change the default settings.

### PUSH TO GITHUB FOR THE FIRST TIME

Run these first 2 commands first if not pulling from GitHub:

- `git init`
- `git remote add origin https://github.com/YourName/YourRepo.git`


```
gh auth login
git remote set-url origin https://github.com/YourName/YourRepo.git
git add .
git commit -m "added files"
git push --set-upstream origin main
```

### PUSH TO GITHUB REGULARLY

```
git add .
git commit -m "the changes I made"
git push
```

### RENAME DEFAULT BRANCH TO MAIN

`git branch -M main`

### SET DEFAULT BRANCH TO MAIN

`git config --global init.defaultBranch main`

### DELETE SOURCE CONTROL

`ls -a` - list all folders and files in a directory including hidden files  
`rm -rf .git` - force delete the .git folder  
`rf` - recursive force

### VIEW BRANCHES

`git branch` - list all branches

### CREATE A BRANCH

`git branch branchName` - create a new branch

### SWITCH TO A BRANCH

`git switch branchName` - switch to a branch

### SWITCH TO A BRANCH ON GLITCH

`git checkout branchName` - switch to a branch on Glitch

### MERGE CHANGES TO A BRANCH

1. Switch to the branch that will absorb the changes.  
example - `git switch main`

1. Merge the changes from other branch.  
example - `git merge branchName`

### COMMAND DESCRIPTIONS

1. `git init`
   - Initialize the repository
2. `git pull origin main`
   - Copies files from the origin
3. `gh auth login`
   - Grants authorization to push to your repository
4. `git remote set-url origin`
   - Sets the origin
5. `git push --set-upstream origin main`
   - Pushes files to GitHub and makes origin and main the default options

---

### MERGE TEST

1. `git init`
2. `git config user.name "Your Name"`
3. `git config user.email "Your Email"`
4. `touch index.html`
5. `git add .`
6. `git commit -m "added index.html"`
7. Create a GitHub repository called merge-test
8. `git remote add origin https://github.com/YourName/merge-test.git`
9. `git push --set-upstream origin main`
10. `git branch myBranch`
11. `git switch myBranch`
12. Add `<p>Hello World</p>` to index.html
13. Save the changes CTRL + S
14. `git add .`
15. `git commit -m "updated file"`