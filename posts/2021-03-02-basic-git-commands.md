---
title: Git commands
description: Main git commands that you will use on day by day
date: 2021-03-02 02:55:59
thumbnail: assets/img/git.png
category: dev
background: "#6272a4"
---
#### Why write about git?

`I decided to write this post, because, although it's something common for those who already work with software development, I realize that it can generate many doubts in the beginners in programming.`\
``\
`This article aims to explain the main commands used by git and its features.`

#### Why use git?

Git is a free and open source distributed version control system. It helps developers working on the same project simultaneously and facilitates the continuous software development process.

### So, Let's Go!

#### Download

First you must download git on your computer from the [website](https://git-scm.com/). It is a very simple process, after downloading git, we are ready to run our first command lines.

#### How use?

The git commands can be used by the git bash, terminal or even the integrated vscode terminal.

#### Setup

To simplify I will use the blocks between **<>** will be your data, so you must have already created an account on some source code hosting platforms like [GitHub](https://github.com/).

First off all, we need to configure the user, email and if we were to work with the [node](https://nodejs.org/en/), the npm settings.

```gitconfig
git config --global user.name "<username>"
git config --global user.email "<email>"
npm config set registry https://registry.npmjs.org/
```

We can check the settings with the commands:

```gitconfig
git config --global user.name
git config --global user.email
```

#### Creating a git project

To create an empty git repository or reinitialize an existing one:

```gitconfig
git init
```

To change the remote upstream:

```gitconfig
git remote set-url origin <url>
```

Clone an existing project:

```gitconfig
git clone <url>
```

#### After configuring the project

Before we start to modify a code it's good that we create a branch so that the changes can be made a good workflow, through the command:

```gitconfig
git branch <name of branch>
```

To change to the branch that we create, its simple, just type:

```gitconfig
git checkout <name of branch>
```

It's possible to do both creation and modification actions for the created branch with just one command:

```gitconfig
git checkout -branch <name of branch>

```

or the reduced form that I use:

```gitconfig
git checkout -b <name of branch>
```

You can check the branch you are working with with the command:

```gitconfig
git branch
```

Once a project is set up correctly and changes made to the code, every modification made to it will be detected by git, it's possible to see the files changed by the command:

```gitconfig
git status
```

To see the differences in the modified file just type:

```gitconfig
git diff
```

After that, it is necessary to prepare our files to be committed, you can activate them one by one using the command:

```gitconfig
git stage <path of file>
```

Or adding all modified files running this command on the source of project:

```gitconfig
git add .
```

*We are almost at the end of the process, it seems like a lot, but I guarantee that with practice these commands will be natural and automatic.*

After adding the files via stash or add, just commit them, using this command:

```gitconfig
git commit -m "<phrase used in the commit>"
```

We are almost at the end, the files are already saved on your machine, however to save it in the repository it is necessary to run the command:

```gitconfig
git push origin <name of the branch>
```

Well this is the end of the post, I hope it helped the people with the git commands that you will use from day to day, of course, any doubts is always good to check the documentation on the [site](https://git-scm.com/docs).

Thanks to everyone.