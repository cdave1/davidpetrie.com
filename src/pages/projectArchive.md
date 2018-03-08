---
path: "/projects/archive/"
date: "2018-01-25"
title: Projects Archive
---

# Project Archive

This is a list of projects I worked on between 2000 and 2009.

The projects range in scope from small open source libraries, to full blown companies.  I wouldn't call this an exhaustive list: many of these projects were done "on the side" while I had a day job.

---

## Code Experiments

Various experiments in a large variety of different programming languages, from c to ruby to python to ocaml.
* [Github repository](https://github.com/cdave1/experiments)


## Tango

A WYSIWIG interface builder for OpenGL and OpenGLES games.  Part of the [HDK Game Engine](/project/hdk_v1).
* [Old blog post](/archive/tango/)

* [Github repository](https://github.com/cdave1/hdk-tango-v1)

## FTGLES

FTGLES is a C++ library for rendering truetype and opentype fonts on mobile operating systems with OpenGL ES 1.1. It's a port of <a href="http://sourceforge.net/projects/ftgl/">FTGL</a>.  I still maintain FTGLES.

The code includes several demo iPhone applications.
* [FTGLES on github](http://github.com/cdave1/ftgles)


## FreeType 2 for iOS and Android

* [iOS version on Github](https://github.com/cdave1/freetype2-ios)

* [Android version on Github](https://github.com/cdave1/freetype2-android)

An optimized version of freetype2 ready to go for both iOS and Android.


## Multi Touch View (iOS)

* [Github](http://github.com/cdave1/multitouchview)

The library is an Objective-C++ extension to the EAGLView that handles multi touch info for games.  Also see [Multi Touch Screen](http://github.com/cdave1/multitouchscreen), an older version of this library.

Our fingers are extremely nimble and precise, but mobile phone games often run at low frame rates (30fps).  Your game needs to handle multi-touch input in such a way that no input gets lost. A player can tap a screen multiple times, with multiple fingers, in the time it takes for the game to render a single frame.  If the app ignores this input, it can make the app feel sluggish and unresponsive.

The main task of this library is to record a history of all input data since the last frame, so that you have a full record of what the user actually did, and thus can make the game react accordingly.

## Distributed Game Of Life

* [Github](https://github.com/cdave1/distributed-game-of-life)

Conway's <a href="http://en.wikipedia.org/wiki/Conways_Game_of_Life">Game-of-Life</a>, but with a play area that can distributed across a grid of computers. The program creates a set of agents on as many machines as you specify and then runs portions of the game's &#8220;playing area&#8221; on each machine. The agents on each machine co-ordinate between themselves to ensure the playing area is updated correctly and consistently. Written on java, with an architecture that is provably free from deadlock and starvation. Tested on a network running over one hundred machines, which is probably at the limit of the program's usefulness.


## Starterbase

Starterbase was a backend-as-a-service product.  Think of it as an early version of Parse or Typeform.

I wrote it in PHP and python, with the data aspect served by a distributed network of MySQL servers to thousands of users.

* [Home page](http://web.archive.org/web/20070614154222/http://www.starterbase.com:80/)

* [Features](http://web.archive.org/web/20070614005644/http://www.starterbase.com:80/page/features)

* [DVD Database Example](http://web.archive.org/web/20070614154520/http://www.starterbase.com:80/html/6ba497967a867ecf6a07c91238ac8b25cf9b9ec0) 

* [DVD Data Detail](http://web.archive.org/web/20070704025748/http://www.starterbase.com:80/html/6ba497967a867ecf6a07c91238ac8b25cf9b9ec0/show/4)

<a href="/archive/starterbase1.gif"><img src="/archive/starterbase1.gif" width="500px" /></a>
<a href="/archive/starterbase2.gif"><img src="/archive/starterbase2.gif" width="500px" /></a>


## NewsToday and SportNow

(Demos/githubs/etc unavailable!)

NewsToday (previously found at www.newstoday.co.nz) and SportNow (sportnow.co.nz) were digg-like news website aimed at New Zealanders. Mostly written in python with a php front end, using Totara.

These sites were way ahead of their time for NZ.  It's taken until 2017 for New Zealanders to really take to a site like reddit in any significant numbers. 


## BlogBot

* [Github](https://github.com/cdave1/blogbot)

* [Example of trained data in the "sport" category](https://github.com/cdave1/blogbot/blob/master/bayesCats/sport.txt)

Machine learning for automatically tagging and categorizing media content.

To seed content for NewsToday and SportNow, I wrote a crawler that would trawl through a large list of news sites and bloggers to find interesting articles.  However, I needed to correctly categorise and "tag" the content so it would appear in the right category on the site.  To do this, I made a foray into machine learning.  I wrote a fairly rudimentary [Bayesian linear regression](https://en.wikipedia.org/wiki/Bayesian_linear_regression) system.  The training data was made up of old labelled words (examples of labels: "politics", "science", "auckland", "economics" etc) that mapped to specific category.  Each article was split into a corpus of words, and each word scored as to how often it would appear in a other articles in the same category.  This information was then stored in an index, so new articles could be tested against high scoring words in each category.


## Disk Simulator

* <a href="http://www.davidpetrie.com/files/DiskSim.tar.gz">DiskSim.tar.gz</a>

A hard disk head simulator for two seeking schemas, SST and CSCAN. Written in Java, and mainly used to compare the two schemas under different conditions.

## Tetris and 3D Tetris

* [Github](https://github.com/cdave1/tetris)

Two versions of tetris written in C++ using directx.  Scared me off directx but the C++ was very useful for later projects.


## Totara

Totara is a framework I wrote to allow me to quickly put web apps together. It had all the things you need to do it &#8211; user management, an ORM layer, eCommerce libraries, security and more. It went through 4 versions over the years, and I used it to power a lot of the sites listed here. It's been superseded by <a href="http://www.rubyonrails.org/">other</a> <a href="http://www.djangoproject.com/">web-app</a> <a href="http://cakephp.org/">frameworks</a>  that now have significant contributors in wider programmer community.


## nachos &#8211; Operating System

* <a href="https://github.com/cdave1/nachos">Github</a>

Nachos is a bunch of header files from the University of California that provide a blueprint for creating an operating system from scratch. I introduced concurrency control structures, multi-threading, user-level programs (in c), and a file system using the same inode structure used by unix-based operating systems. The code is in C++ and only appears to run under BSD.

## Some haskell data structures

* <a href="https://github.com/cdave1/experiments/tree/master/haskell">Github</a>

A Haskell implementation of a polymorphic queue and stack, as well as breadth first and depth first search algorithm implementations for searching through graphs. Oh yeah, both search algorithms use the stack and queue. Not too exciting unless you're an algorithms geek, but I guess it shows how compact Haskell code is. Haskell is awesome.

## Sokoban Game plus Solver

* <a href="http://www.davidpetrie.com/files/SokobanSolver.tar.gz">Source code</a>

Sokoban game (interface code was written by someone else), with a solver using various search algorithms and heuristics to solve the game without hogging all of your CPU.

## Python AI

A collection of AI algorithms in python:

* A compact <a href="http://en.wikipedia.org/wiki/Bayes_filter">naive Bayes classifier</a> written in python with some training and testing files. [Github source](https://github.com/cdave1/pyai/tree/master/BayesClassifier)

* Decision Trees: A python program that can take classification information (in the source code, hepatitis symptoms) and then create a <a href="http://en.wikipedia.org/wiki/Decision_tree">decision tree</a> to predict the outcome of future scenarios. [Github source](https://github.com/cdave1/pyai/tree/master/DynamicDecisionTree)

* A perceptron that is used for classification of a set of images of noughts and crosses. The perceptron must be initially trained to get the weightings correct before it can be used to classify unseen data. [Github source](https://github.com/cdave1/pyai/tree/master/ImagePerceptron)

* K Nearest Neighbour: A very short python program implementing the <a href="http://en.wikipedia.org/wiki/K-nearest_neighbor_algorithm">k-nearest-neighbour</a> classification algorithm. [Github source](https://github.com/cdave1/pyai/tree/master/NearestNeighbour)

* N Puzzle Solver: a variant on a 15 puzzle, where the number of pieces on the board is n^2-1. [Github source](https://en.wikipedia.org/wiki/15_puzzle)


## Genetic Programming with jgap

* <a href="http://www.davidpetrie.com/files/GeneticProgramming.tar.gz">Source code listing</a>. Requires <a href="http://jgap.sourceforge.net/">jgap</a>

Some sample programs for generating classification programs using <a href="http://jgap.sourceforge.net/">jgap</a>, which uses the technique of <a href="http://en.wikipedia.org/wiki/Genetic_programming">genetic programming</a> to generate the programs. It's a very interesting field and something I want to really explore further at some point. My sample programs are only designed for simple regression analysis and AB classification tasks.

## Grep clone in Java

* <a href="http://www.davidpetrie.com/files/RegexSim.tar.gz">Source code listing</a>

A java program that mimics grep. I didn't get far with it &#8211; it doesn't have any of the posix bells and whistles and it can't be used to check files. It does basic regex parsing well enough, however.

## Prolog Stuff

Prolog is really cool.

#### Tiny Quicksort

* [qs.pl](https://github.com/cdave1/experiments/blob/master/prolog/qs.pl)

Just a really compact quicksort function written in Prolog.

#### Register Machine Interpreter

* [registermachine.pl](https://github.com/cdave1/experiments/blob/master/prolog/registermachine.pl)

For language geeks only. This is a prolog interpreter for <a href="http://en.wikipedia.org/wiki/Register_machine">register machine programs</a>. It will take a register machine program listing, interpret it, and then return the result in the second register as per convention.


## www.vendory.com

* <a href="http://www.davidpetrie.com/files/vendory.com.tar.gz">Source code </a>

Vendory was an eCommerce platform that was intended for SMEs. I had big plans for it, but I decided to abandon the project when I realised that I wasn't really interested in selling eCommerce software (which is really quite hard in New Zealand). Written in php &#8211; the source code in the above tar file is missing some eye candy.

## TagWorldCup

* <a href="http://www.davidpetrie.com/files/tagworldcup.com.tar.gz">Source code</a>

A ridiculous get-rich-quick scheme. You could buy keywords on the website for $100, and once you did you would &#8220;own&#8221; that keyword forever. We attempted to piggyback on the tagging craze that was happening at the time, as well as the soccer world cup (hence the name, tagworldcup).


## www.bandyboo.com

Bandyboo was a service for sharing your movies and games with your friends or trusted strangers.  It was sort of like a cross between Goodreads and Netflix.  People were weirded out by the concept and thus it never really got off the ground. Why do you even need a site to share your DVDs with friends?

<a href="/archive/bb.jpg"><img src="/archive/bb.jpg" width="500px" /></a>

## Peachy &#8211; a web based command line tool

* [Github](https://github.com/cdave1/peachy)

Peachy was a web application for accessing websites remotely via a command line interface. For example, you could type <strong><code>search -g «query»</code></strong> to search google or <strong><code>del -rss «tag»</code></strong> to get the urls of a tag at <a href="http://del.icio.us/">del.icio.us</a> as an rss feed. Allowed you to build your own commands and use other's. Just a fun thing that took a couple of nights.


## Moviehouse

* Previously found at <a href="http://www.moviehouse.co.nz/">www.moviehouse.co.nz</a>

* [2004 Wayback Machine Archive](http://web.archive.org/web/20040605125405/http://www.moviehouse.co.nz:80/)

* [2005 Wayback Machine Archive](http://web.archive.org/web/20051001083034/http://www.moviehouse.co.nz:80/)

* [2006 Wayback Machine Archive](http://web.archive.org/web/20060705024642/http://www.moviehouse.co.nz:80/)

Moviehouse was an online DVD retail business I started in 2003 and ran until 2005.  The entire website was written in PHP, including a comprehensive backend for handling shipping, stock, and credit card payments.  Allowed me to amass a nice DVD collection and a car. Sold 2005, although I helped with a partial redesign in 2006.

<a href="/archive/mh.png"><img width="500px" src="/archive/mh.png" /></a>


## Peachy Blog

* [2005 Archive](http://web.archive.org/web/20050906074038/http://www.peachyblog.com:80/)

A content marketing blog I ran in 2005.


## www.comet.co.nz

* [Sad looking Wayback Machine snapshot from 2005](http://web.archive.org/web/20050313000408/http://www.comet.co.nz:80/)

Comet was an online DVD Rental concept, Netflix for New Zealanders. I couldn't get the financials to work - I would need at least 100k customers to be profitable.  I ran a succesful beta test but ultimately shut the service down to focus on Moviehouse.

<a href="/archive/comet.jpg"><img src="/archive/comet.jpg" width="500px" /></a>


## www.webdepot.co.nz

* [2006 Archive](http://web.archive.org/web/20070220222524/http://www.webdepot.co.nz)

WebDepot was a rapid website design and development company I started at university and ran on the side for a number of years.  Whoever owns this domain now is not me!


## UniTutor

Unitutor was a tutor-student matching business a friend and I ran for two years while at university (2002).  We started with one subject at Canterbury University (Computer Science) and moved to cover a rapidly growing number of subjects with around 50 tutors in total.

Tutor matching services are [notoriously difficult businesses to run](https://techcrunch.com/2013/09/08/tutorspree-shut-down/).  We tried to take a cut from all activity between students and tutors.  Tutors had to use our platform for booking and managing their tutoring slots.  Students would book tutors for the subjects they wanted tutoring in.  Once a tutoring session had finished, the student would pay us, we'd extract our cut -- I think it was around 10-15% -- and then pay the tutor.

The main difficulty we found was that value of the actual tutoring FAR exceeded the value of our service.  A rigid slot-booking system didn't really gel well with rapidly changing daily life of university students.  Tutors and students would work this out pretty quickly, and they'd just ignore our booking system and plan everything over email or mobile phone.  Then the students would directly pay the tutors in cash.  We couldn't meaningfully justify extracting a "cut" from the tutor's services, because we didn't really add any value other than the intro between the tutor and the student.  Even if we did add value, we didn't control the payments, because this was 2002 and there weren't any payment providers that wanted to deal with us.  And even if we could make all of this work, NZ's long summer break would kill all revenue for four months!  Looking back, I'm amazed it made any money at all.

Evidently "UniTutor" is a popular name and another NZ-based tutoring company started up a couple of years ago with exactly the same name.

<a href="/archive/unitutor.gif"><img src="/archive/unitutor.gif" /></a>


## The Daily Business Review

In my first year of university, right after the dotcom crash in 2000, I started a website called "Daily Business Review".  It was like ["Arts and Letters Daily"](http://www.aldaily.com), but for tech news.  For whatever reason, it attracted a lot of cease-and-desist letters. [Here's an archive!](/archive/dbr/index.html)


## RMSys Payroll

To learn Java, rather than write a game or something cool like that, I decided to write a payroll program.  I learned a lot about how to store money and dates and actually had a fund time. The software included its own webserver because I didn't have the hardware to run java server pages at the time. I couldn't find a working version or any screenshots, but here is some surprisingly well-commented <a href="http://www.davidpetrie.com/files/EditWindow.java">sample code</a> and a hilarious <a href="http://www.davidpetrie.com/files/Pay.plan">.plan file</a>