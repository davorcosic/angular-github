# First Challenge for Angular

## Intro

This is a coding challange we designed for assess your qualifications as a potential Angular developer. It's important to note that this is by no means a test. We just want to get a sense of how you write code and solve problems.

We'll give you some requirements that must be done and for which you'll be evaluated, but for the most of time you're free to choose a solution method

## Getting started/finished

#### Fork

To get started, **fork this repository** to your personal account. 
Basic cli angular project structure is allready provided. You can of course delete everything and start from scratch. 

#### Run

```sh
npm install && npm start
```
or if you use `yarn`
```sh
yarn install && yarn start
```
This will start application on `http://localhost:4200/` with configured proxy rule (proxy.conf.json) for github API.

#### Code
As best you can.

#### Get back with PR

Despite not having a time limit, we recommend that you don't spend more than **8 to 10 hours** working on this challenge.

## What does it involve?

This challange involves working with the **GitHub API** to create a SPA using Angular, that reads specific parts of API and displays the data in an organized way.

> **GitHub API:** [https://developer.github.com/v3](https://developer.github.com/v3)

[Issue Timeline](images/issue_timeline.png)

curl -H "Authorization: token {token}" https://api.github.com/repos/bulbtech/job-application-task-1/issues


https://developer.github.com/v3/issues/timeline/#list-events-for-an-issue

curl -H "Accept: application/vnd.github.mockingbird-preview"  https://api.github.com/repos/bulbtech/job-application-task-1/issues/1/timeline

https://api.github.com/users/bulbtech
