---
layout: inner
title: 'Machine learning algorithms everyone* should know'
date: 2017-11-03 11:26:34
reading_duration: 10
tags: ml algo
featured_image: 'http://placekitten.com/1500/1000'
image_opacity: 0.4
lead_text: 'A basic ML cookbook to get you started. *By everyone I mean those who reads this post!'
---

One of the questions I frequently get is how do you get into machine learning. To save myself from having to explain the same generic thing over and over again, here's a brief guide/checklist to getting started in the field. I'm basing most of these off my own personal experience, so there might be a couple of things that people will disagree with.

> On a side note, I don't particularly like the use of buzzwords such as ML, deep learning or AI. They are really at their core, just high-level statistics. When approaching the subject, one should also keep in mind that in no reality, are machines more so 'learning' than generalizing from statistical patterns.

<br>

### Choosing the right study material
An important thing to do when approaching a completely foreign field of study to is to enroll in a crash-course to let yourself get a better sense of what the field is all about and ML is no different. We're quite fortunate to get to live in an age where ML knowledge and courses are readily available to anyone with internet access and a will to learn. Learning ML on a whim is no longer just a fantasy.

Many people would recommend the course taught by [Andrew Ng on Coursera](https://www.coursera.org/learn/machine-learning/home/welcome) and for good reasons (aside from the fact that it's free). The contents are technical while not straying too far away from logic. The webcasts are not too long yet interesting enough to make you want to reach for the next one. There a decent amount of mathematics which are explained and translated into intuitive English. Andrew Ng's course just hits all those sweet spots to get you excited about learning something new and he's also a pretty inspiring guy. If there's one area of criticism, it would be that the content's pretty shallow. The course only serve as a platform to allow you get started learning some of the truly useful things but don't get me wrong, I still use things learnt from Andrew's course on a daily basis but there are plenty of other things I wish I had known about sooner.

Aside from Coursera, there are quite a number of other notable resources to get started. Here I'll just list 2 of them
- [Machine Learning by Columbia University](https://www.class-central.com/mooc/7231/edx-machine-learning)
- [Learning from Data by Caltex](https://work.caltech.edu/telecourse.html)

<br>

### Basics Checklist
The best courses do not necessarily need to cover absolutely everything because the field of ML is simply just soo massive. Typically people tend to specialize in a certain area when starting out but regardless, here's a bunch of things that probably everyone should know,

#### Basic Concepts
- Regularization
  - Probably one of the most important concepts in ML
  - Machine learning algorithms especially network based ones, are notoriously prone to over-fitting
- Gradient Descent/Optimization statement
  - A general idea would be enough to get you pretty far
  - I started out treating this like a black-box, knowing only what it does
- Ensembling
  - A very useful technique used by everyone, everywhere
- Pipeline
  - There's a saying that practical machine learning is 90% data transformation and 10% model building.
  - 90 is probably a little extreme but it is true that a ton of effort has to be spent on scrapping, transforming and cleaning the data.
  - Good cleaning of your data is the often the difference between placing in the top 10 and top 100 of Kaggle.

#### Key Algorithms
- Linear Regression (vanilla/ridge/lasso)
  - Linear models aren't exactly machine learning but nevertheless it's still one of the most widely used model out there
  - In most cases of regression based problems there tends to be a few of features that closely correlate to the predicted variable
  - Sometimes you just want something quick and easy to use so of course you reach for the most handy tool
- SVMs
  - SVMs are sort of linear as well, though in this case they are usually used for classification tasks rather than regression
- Decision Trees
  - A very useful algorithm to know but not to use by itself
  - The lack of usage is mainly due to boosted trees
- Vanilla Neural Network
  - Also called the multi-layered-perceptron and the fully connected network, goes by many names
  - Very loosely based off neurons but there really aren't many links.
  - Rarely used due to it's massive inefficiency

#### Key Unsupervised Learning Algorithms
- Clustering techniques
  - Most common of which is K-means and K-medoids
- Dimension Reduction
  - PCA/ICA

#### Other slightly more advanced stuff
- Boosting
  - Usually refers to boosted trees which has quickly became my favorite algorithm to use
  - Coined by many the ultimate black-box algorithm due to its ease of application and good results
  - While Deep learning is stealing the limelight, boosting is silently dominating data science competitions
- Stacking
  - An alternative to ensembling which often gives better results
- Reinforcement learning
  - This is how AlphaGo and self-driving cars work! But honestly RL deserves it's own post
- Deep learning
  - Is also a massive field and it doesn't do it any justice to label it under a single names
  - Do check out [Stanford's lectures](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv&h=ATOYUU1ZU9ODP5JuXmx5EfyvZEACVl8S3GrQBlztkcLUIP3py4AOdR16VQiRQQWYtAfHchtOdQIWMSCQfeIcW2RwIzS8Nf7UciZQu0VqwnwTzU3M8hPz35dd29JLNDAzP_9G3Udj1rkraw) on YouTube for an in-depth introduction

<br>

### "Choosing" between Data-science and Deep Learning
Depending on what you wish to do, you might want to have a data-science focus or maybe gear your skill-set more towards deep neural networks. 90% of the times when people says that they wish to something related to machine learning, they are referring to data-science rather than AI/deep learning. There is a somewhat noticeable difference between the 2 fields but I use choosing rather loosely because people tend to learn things from both sides. They are both part of the tool kit of a data engineer. That said I personally reach for data science much more often than deep learning when solving the more mundane tasks

<br>

### Learning to have fun while learning
Let's face it, learning is a chore. I personally don't enjoy grinding through textbooks and research papers unless it is for the purpose of solving a problem in the project I'm working on. Probably my greatest take away from learning ML is learning to . Implementation is my way of getting myself to know more stuff and quite frankly it is also a pretty enjoyable thing to do. Heck I'd do it in my free time. Do check out [Kaggle](https://www.kaggle.com/) if you want to solve ML based problems.

For sure ML is not an easy subject to get a hang of, but getting grips with something considered difficult rewards people with a huge sense of accomplishment. So don't be afraid of doing something hard!
