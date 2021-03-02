---
title: Git commands
description: Main git commands that you will use on day by day
date: 2021-03-02 02:55:59
thumbnail: assets/img/git.png
category: dev
background: "#6272a4"
---
#### Why write about git?

I decided to write this post, because, although it's something common for those who already work with software development, I realize that it can generate many doubts in the beginners in programming.\
\
This article aims to explain the main commands used by git and its features.

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
git config --global user.name "<USERNAME>"
git config --global user.email "<EMAIL>"
npm config set registry https://registry.npmjs.org/
```

We can check the settings with the commands:

```gitconfig
git config --global user.name
git config --global user.email

```

### Creating a git project