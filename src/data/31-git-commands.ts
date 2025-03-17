export const gitCommandsContent = `
<article>
  <p>Git has become the de facto standard for version control in software development. While Git offers hundreds of commands and options, mastering a core set of commands will handle most of your day-to-day development needs. This guide covers the most essential Git commands that every developer should know.</p>

  <h2>Setting Up</h2>

  <pre><code class="language-bash">
# Configure user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git
  </code></pre>

  <h2>Basic Workflow Commands</h2>

  <pre><code class="language-bash">
# Check status of your working directory
git status

# Add files to staging area
git add filename.js
git add .                 # Add all changed files

# Commit changes
git commit -m "Your commit message"
git commit -am "Commit message"  # Add changed tracked files and commit in one step

# View commit history
git log
git log --oneline         # Compact view
git log --graph --oneline # Visualize branch history
  </code></pre>

  <h2>Working with Branches</h2>

  <pre><code class="language-bash">
# List all branches
git branch

# Create a new branch
git branch feature-name

# Switch to a branch
git checkout feature-name
git switch feature-name    # Git 2.23+

# Create and switch to a new branch
git checkout -b feature-name
git switch -c feature-name # Git 2.23+

# Merge a branch into current branch
git merge feature-name

# Delete a branch
git branch -d feature-name  # Safe delete
git branch -D feature-name  # Force delete
  </code></pre>

  <h2>Remote Repository Operations</h2>

  <pre><code class="language-bash">
# List remote repositories
git remote -v

# Add a remote repository
git remote add origin https://github.com/username/repo.git

# Fetch changes from remote
git fetch origin

# Pull changes from remote (fetch + merge)
git pull origin main

# Push local changes to remote
git push origin main

# Push a new local branch to remote
git push -u origin feature-name
  </code></pre>

  <h2>Undoing Changes</h2>

  <pre><code class="language-bash">
# Discard changes in working directory
git restore filename.js    # Git 2.23+
git checkout -- filename.js  # Older Git versions

# Unstage files
git restore --staged filename.js  # Git 2.23+
git reset HEAD filename.js        # Older Git versions

# Modify the last commit
git commit --amend -m "New commit message"

# Reset to a specific commit
git reset --soft HEAD~1  # Undo last commit, keep changes staged
git reset --mixed HEAD~1 # Undo last commit, keep changes unstaged
git reset --hard HEAD~1  # Undo last commit and discard changes
  </code></pre>

  <h2>Stashing Changes</h2>

  <pre><code class="language-bash">
# Save changes for later
git stash

# List stashed changes
git stash list

# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{2}

# Apply and remove stash
git stash pop

# Remove a stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
  </code></pre>

  <h2>Inspecting Changes</h2>

  <pre><code class="language-bash">
# View changes before committing
git diff
git diff --staged  # View staged changes

# Show changes in a commit
git show commit-hash

# Show who changed each line
git blame filename.js
  </code></pre>

  <h2>Tagging</h2>

  <pre><code class="language-bash">
# Create a lightweight tag
git tag v1.0.0

# Create an annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# List tags
git tag

# Push tags to remote
git push origin v1.0.0
git push origin --tags  # Push all tags
  </code></pre>

  <h2>Advanced Operations</h2>

  <pre><code class="language-bash">
# Interactive rebase to modify history
git rebase -i HEAD~3  # Rebase last 3 commits

# Cherry-pick a commit from another branch
git cherry-pick commit-hash

# Create a patch
git format-patch main

# Find which commit introduced a bug
git bisect start
git bisect bad  # Current commit has the bug
git bisect good commit-hash  # This commit was working
# Git will help you find the problematic commit
  </code></pre>

  <h2>Git Workflows</h2>

  <h3>Feature Branch Workflow</h3>
  <pre><code class="language-bash">
# Create feature branch
git checkout -b feature-x main

# Work on feature
git add .
git commit -m "Add feature X"

# Keep feature branch updated with main
git checkout feature-x
git rebase main

# When feature is complete
git checkout main
git merge feature-x
git push origin main
  </code></pre>

  <h3>Gitflow Workflow</h3>
  <pre><code class="language-bash">
# Feature development
git checkout -b feature/x develop
# Work, commit, then...
git checkout develop
git merge feature/x

# Release preparation
git checkout -b release/1.0 develop
# Finalize release, then...
git checkout main
git merge release/1.0
git tag -a v1.0
git checkout develop
git merge release/1.0

# Hotfix
git checkout -b hotfix/1.0.1 main
# Fix bug, then...
git checkout main
git merge hotfix/1.0.1
git tag -a v1.0.1
git checkout develop
git merge hotfix/1.0.1
  </code></pre>

  <h2>Git Configuration Tips</h2>

  <pre><code class="language-bash">
# Create aliases for common commands
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'

# Set default branch name for new repositories
git config --global init.defaultBranch main

# Configure line ending behavior
git config --global core.autocrlf true  # Windows
git config --global core.autocrlf input # Mac/Linux
  </code></pre>

  <h2>Troubleshooting Common Issues</h2>

  <pre><code class="language-bash">
# View detailed information about Git repository
git status -v

# Fix conflicts during merge
# (After resolving conflicts in your editor)
git add .
git commit -m "Resolve merge conflicts"

# Abort a merge with conflicts
git merge --abort

# Recover deleted commits (within grace period)
git reflog
git checkout commit-hash

# Remove files from Git tracking but keep locally
git rm --cached filename.js
  </code></pre>

  <h2>Conclusion</h2>

  <p>While Git offers a vast array of commands and options, these essential commands will handle most of your day-to-day development needs. As you become more comfortable with these basics, you can explore Git's more advanced features to streamline your workflow even further.</p>

  <p>Remember that Git is designed to be a safety net for your code. Learning to use it effectively not only helps with collaboration but also provides confidence to experiment and make changes knowing you can always go back to a working state.</p>
</article>
`;