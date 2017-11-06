---
layout: inner
title: 'Machine learning algorithms everyone should know'
date: 2017-11-03 11:26:34
reading_duration: 10
tags: ml algo
featured_image: 'http://placekitten.com/1500/1000'
image_opacity: 0.4
lead_text: 'A basic ML cookbook to get you started.'
---

One question I frequently get is how do to get into machine learning. To save myself having to explain the same things over again, here's a brief guide/checklist to getting started. I'm basing most of these off my own personal experience, so there's probably going to be a couple of things that people will disagree with.

> On a side note, I don't particularly like the use of buzzwords such as ML, deep learning or AI. At core, they are really just high-level statistics. When approaching the subject, one should keep in mind that in no reality, are machines 'learning' more so than generalizing from statistical patterns.

<br>

### Choosing the right study material
A common thing to do when approaching a foreign field of study to is to enroll in a crash-course to get yourself some better sense of know how. ML is no different and we're pretty fortunate to live in an age where ML knowledge and courses are readily available to anyone with a will to learn (actually only to those with internet access). Quite a number of people recommend the course taught by [Andrew Ng on Coursera](https://www.coursera.org/learn/machine-learning/home/welcome) and for good reasons.

The contents are technical while not straying too far away from logic. The webcasts are not too long yet interesting enough to make you want to reach for the next one. There a decent amount of mathematics which are explained and translated into intuitive English. Andrew Ng's course just hits all those sweet spots to get you excited about learning something new and he's also a pretty inspiring guy. If there's one area of criticism, it would be that the content's pretty shallow. But the course is free so it serves as a good platform to allow a person to start from. Don't get me wrong, I still use things learnt from Andrew's course on a daily basis but there are plenty of other things I wish I had known about sooner.

Aside from Coursera, there are quite a number of other notable resources to get started. Here I'll just list 2 of them
- [Machine Learning by Columbia University](https://www.class-central.com/mooc/7231/edx-machine-learning)
- [Learning from Data by Caltex](https://work.caltech.edu/telecourse.html)

<br>

### Basics Checklist
The best courses do not necessarily need to cover absolutely everything, the field of ML is too massive. Typically people tend to specialize in a certain area when starting out. Regardless, here's a bunch of things that everyone should know.

> Don't worry too much about not knowing any of the terms down here, it serves only as a sort of checklist to make sure you covered the essentials. Google is your best friend, do make good use of it.

#### Basic Concepts
- Regularization
  - Also about variance-bias tradeoff
  - Probably one of the most important concepts in ML
  - Machine learning algorithms especially network based ones, are notoriously prone to over-fitting
- Gradient Descent/Optimization statement
  - A general idea would be enough to get you pretty far, not knowing the implementation is completely fine
  - I started out treating this like a black-box, knowing only what it does
- Ensembling
  - A very useful technique used by everyone, everywhere
- Pipeline
  - There's a saying that practical machine learning is 90% data transformation and 10% model building.
  - 90 is probably a little extreme but it is true that a ton of effort has to be spent on scrapping, transforming and cleaning the data.
  - Good cleaning/modification of your data is the often the difference between placing in the top 10 and top 100 of [Kaggle](https://www.kaggle.com/).

#### Key Algorithms
- Linear Regression (vanilla/ridge/lasso)
  - Linear models aren't exactly machine learning but nevertheless it's still one of the most widely used models out there
  - In most cases of regression based problems there tends to be a few of features that closely correlate to the predicted variable
  - Sometimes you just want something quick and easy to use so of course you reach for the most handy tool
- SVMs
  - SVMs are sort of linear as well, though in this case they are mainly used for classification rather than regression
- Decision Trees
  - A very useful algorithm to know
  - Learn about boosting
- Boosting
  - I know this is probably one of the more advanced stuff and most courses do not cover this
  - It's basically stacked models but each time you are only [keeping the residuals](http://blog.kaggle.com/2017/01/23/a-kaggle-master-explains-gradient-boosting/)
  - Usually refers to boosted trees which has quickly became my favorite algorithm to use
  - Coined by many the ultimate black-box algorithm due to its ease of application and good results
  - While Deep learning is stealing the limelight, boosting is silently dominating data science competitions
- Vanilla Neural Network
  - Also called the multi-layered-perceptron and the fully connected network, goes by many names
  - Very loosely based off how the brain works but there really aren't many links.
  - Rarely used due to it's massive inefficiency

#### Key Unsupervised Learning Algorithms
- Clustering techniques
  - Most common of which is K-means and K-medoids
- Dimension Reduction
  - PCA/ICA

#### Other slightly more advanced stuff
- Stacking
  - An alternative to ensembling which often gives better results
- Reinforcement learning
  - This is how AlphaGo and self-driving cars work! But honestly RL deserves it's own post
  - Basically learning from interactions with environment and treating things like a game to achieve the highscore
- Deep learning
  - A massive and deep field (no pun intended)
  - Used for task like but not limited to computer vision, image captioning, signal-processing, language translation, image/voice generation, photo-restoration
  - Honestly just [look at it](https://machinelearningmastery.com/inspirational-applications-deep-learning/)
  - Often RL involves deep learning as well but that's not always the case
  - Do check out [Stanford's lectures](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv&h=ATOYUU1ZU9ODP5JuXmx5EfyvZEACVl8S3GrQBlztkcLUIP3py4AOdR16VQiRQQWYtAfHchtOdQIWMSCQfeIcW2RwIzS8Nf7UciZQu0VqwnwTzU3M8hPz35dd29JLNDAzP_9G3Udj1rkraw) on YouTube for an in-depth introduction

<br>

### "Choosing" between Data-science and Deep Learning
Choosing is a hard word, people tend to learn things from both sides. Depending on what you wish to do, you might want to have a data-science focus or maybe gear your skill-set more towards deep neural networks. 90% of the times when people says that they wish to something related to machine learning, they are referring to data-science rather than AI/deep learning. There is a somewhat noticeable difference between the 2 fields but they are both part of the tool kit of a data engineer. That said I personally reach for data science much more often than deep learning when solving the more mundane tasks. I'd also recommend beginners to start from there.

<br>

### Figuring out the way you learn best
Learning machine learning to many people is really more of an experimental process where they stumble across something new. I don't personally know of any two data scientist/AI researcher who took the same exact paths to learning the subject.
