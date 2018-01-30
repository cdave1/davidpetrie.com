import React from 'react'
import { Link } from 'react-router'
import Wrapper from '../components/Wrapper';

export default class Projects extends React.Component {
    constructor () {
      super()
    }
  
  
    render () {
      return (
      <Wrapper title="Projects">
          <h1>Github</h1>
          <p>
          My repo is here: <a href="http://github.com/cdave1">http://github.com/cdave1</a>
          </p>

          <h1>Tango</h1>
          <p>
          <strong>Link:</strong> <a href="http://davidpetrie.com/?p=303">Blog post</a><br />
          A WYSIWIG interface builder for OpenGL and OpenGLES games. No code available yet.
          </p>

          <h1>FTGL ES</h1>
          <p>
          <strong>Link:</strong> <a href="http://github.com/cdave1/ftgles">http://github.com/cdave1/ftgles</a><br />
          FTGLES is a C++ library for rendering truetype and opentype fonts on mobile operating systems with OpenGL ES 1.1. It&#8217;s a port of <a href="http://sourceforge.net/projects/ftgl/">FTGL</a>.</p>
          <p>The code includes several demo iPhone applications, and has support for iOS 4.</p>

          <h1>Multi Touch Screen (iPhone)</h1>
          <p>
          <strong>Link:</strong> <a href="http://github.com/cdave1/multitouchscreen">http://github.com/cdave1/multitouchscreen</a><br />
          Multi Touch Screen is an Objective-c++ extension to the EAGLView. It was adapted from TouchScreen in the <a href="http://www.oolongengine.com/">Oolong Engine</a>. Its main task is to store Cocoa multi touch input in a buffer with the expectation that some other thread will repeatedly collect data from the buffer. This is mainly useful for apps that want to synchronize user input with rendering.</p>

          <h1>Coin Toy</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.cointoy.com/">www.cointoy.com</a><br />
          Coin Toy is an iPhone app that shows money being earned in real time, in the form of coins falling down the screen. There are several versions currently out on the app store.</p>

          <h1>Sine tables</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/csin.c">csin.c</a><br />
          Sine tables vs. math.h sine functions in c. Linux only.</p>

          <h1>Distributed Game Of Life</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/DistGameOfLife.tar.gz">DistGameOfLife.tar.gz</a><br />
          Conway&#8217;s <a href="http://en.wikipedia.org/wiki/Conways_Game_of_Life">Game-of-Life</a>, but with a play area that can distributed across a grid of computers. The program creates a set of agents on as many machines as you specify and then runs portions of the game&#8217;s &#8220;playing area&#8221; on each machine. The agents on each machine co-ordinate between themselves to ensure the playing area is updated correctly and consistently. Written on java, with an architecture that is provably free from deadlock and starvation. Tested on a network running over one hundred machines, which is probably at the limit of the program&#8217;s usefulness.</p>

          <h1>10 Simple Algorithms</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/algorithms.py">algorithms.py</a><br />
          10 simple algorithms written in python, with an emphasis on recursion.</p>

          <h1>Starterbase</h1>
          <p>
          <strong>Link:</strong> <del datetime="2008-10-12T07:14:57+00:00"><a href="http://www.starterbase.com/">www.starterbase.com</a></del> <i>Unavailable</i><br />
          Starterbase was a backend-as-a-service product. I wrote it in PHP and python, with the data aspect served by a distributed network of MySQL servers. Here&#8217;s a couple of screenshots of the app in action.
          <br /><br />
          <a href="http://www.davidpetrie.com/files/sb_Screenshot1.gif"><img src="http://www.davidpetrie.com/files/sb_Screenshot1.gif" width="500px" /></a><br /><br />
          <a href="http://www.davidpetrie.com/files/sb_Screenshot2.gif"><img src="http://www.davidpetrie.com/files/sb_Screenshot2.gif" width="500px" /></a>
          </p>

          <h1>Prolog: Tiny quicksort</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/qs.prolog">qs.prolog</a><br />
          Just a really compact quicksort function written in Prolog.</p>

          <h1>www.bandyboo.com</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/bandyboo.tar.gz">Source code</a><br />
          DVD/Games/CD sharing service that never really got off the ground. It uses the Amazon API. You could build up your collection and then share them with other people. </p>
          <p>Screenshot:</p>
          <p><a href="http://www.davidpetrie.com/files/bb.JPG"><img src="http://www.davidpetrie.com/files/bb.JPG" width="500px" /></a></p>

          <h1>Peachy &#8211; a web based command line tool</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/peachy.ws.tar.gz">Source code</a><br />
          A web application for accessing websites remotely via a command line interface. For example, you could type <strong><code>search -g «query»</code></strong> to search google or <strong><code>del -rss «tag»</code></strong> to get the urls of a tag at <a href="http://del.icio.us/">del.icio.us</a> as an rss feed. Allowed you to build your own commands and use other&#8217;s. Just a fun thing that took a couple of nights.</p>

          <h1>newstoday.co.nz and sportnow.co.nz</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.newstoday.co.nz/">www.newstoday.co.nz</a>, <a href="http://www.sportnow.co.nz/">www.sportnow.co.nz</a><br />
          A digg-like news website aimed at New Zealanders. Mainly a way to experiment with artificial intelligence stuff behind the scenes (Bayes filters and Boltzmann machines). Mostly written in python with a php front end, using Totara.</p>

          <h1>Moviehouse</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.moviehouse.co.nz/">www.moviehouse.co.nz</a><br />
          Moviehouse was a DVD retail business I started in 2003 and ran on the side for a few years. Allowed me to amass a nice DVD collection and a car. Sold 2005.</p>
          <p><a href="http://www.davidpetrie.com/files/mhNewScreen.png"><img width="500px" src="http://www.davidpetrie.com/files/mhNewScreen.png" /></a>
          </p>

          <h1>Disk Simulator</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/DiskSim.tar.gz">DiskSim.tar.gz</a><br />
          A hard disk head simulator for two seeking schemas, SST and CSCAN. Written in Java, and mainly used to compare the two schemas under different conditions.</p>

          <h1>Tetris</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/Tetris.src.zip">Source code</a><br />
          A tetris clone written in C++ using directx.</p>

          <h1>3D Tetris</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/3DTetris.src.zip">Source code</a>, <a href="http://www.davidpetrie.com/files/Tetris.zip">Executable</a><br />
          Modified the tetris above to use 3D blocks. Though the code is obviously quite a lot different.</p>

          <h1>Totara</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/totara.tar.gz">Source</a><br />
          Totara is a framework I wrote to allow me to quickly put php-based websites together. It had all the things you need to do it &#8211; user management, an ORM layer, eCommerce libraries, security and more. It went through 4 versions over the years, and I used it to power a lot of the sites listed here. It&#8217;s been superseded by <a href="http://www.rubyonrails.org/">other</a> <a href="http://www.djangoproject.com/">web-app</a> <a href="http://cakephp.org/">frameworks</a>  that now have significant contributors in wider programmer community. I missed the boat a little bit. Lesson learned: when you have something good that you won&#8217;t be able to make money off directly, then you should open source it as soon as possible.</p>

          <h1>Sokoban Game plus Solver</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/SokobanSolver.tar.gz">Source code</a><br />
          Sokoban game (interface code was written by someone else), with a solver using various search algorithms and heuristics to solve the game without hogging all of your CPU.</p>

          <h1>Simple Bayes Classifier</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/BayesClassifier/">Source code listing</a><br />
          A compact <a href="http://en.wikipedia.org/wiki/Bayes_filter">naive Bayes classifier</a> written in python with some training and testing files.</p>

          <h1>Dynamic Decision Tree</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/DynamicDecisionTree.tar.gz">Source code listing</a><br />
          A python program that can take classification information (in the source code, hepatitis symptoms) and then create a <a href="http://en.wikipedia.org/wiki/Decision_tree">decision tree</a> to predict the outcome of future scenarios.</p>

          <h1>nachos &#8211; Operating System</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/nachos.tar.gz">Source code listing</a><br />
          Nachos is a bunch of header files from the University of California that provide a blueprint for creating an operating system from scratch. I introduced concurrency control structures, multi-threading, user-level programs (in c), and a file system using the same inode structure used by unix-based operating systems. The code is in C++ and only appears to run under BSD.</p>

          <h1>Some haskell data structures</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/HaskellDataStructures/">Source code listing</a><br />
          A Haskell implementation of a polymorphic queue and stack, as well as breadth first and depth first search algorithm implementations for searching through graphs. Oh yeah, both search algorithms use the stack and queue.</p>
          <p>Not too exciting unless you&#8217;re an algorithms geek, but I guess it shows how compact Haskell code is. Haskell is awesome.</p>

          <h1>Genetic Programming with jgap</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/GeneticProgramming.tar.gz">Source code listing</a>. Requires <a href="http://jgap.sourceforge.net/">jgap</a><br />
          Some sample programs for generating classification programs using <a href="http://jgap.sourceforge.net/">jgap</a>, which uses the technique of <a href="http://en.wikipedia.org/wiki/Genetic_programming">genetic programming</a> to generate the programs. It&#8217;s a very interesting field and something I want to really explore further at some point. My sample programs are only designed for simple regression analysis and AB classification tasks.</p>

          <h1>A perceptron implementation in python</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/ImagePerceptron/">Source code listing</a><br />
          A perceptron that is used for classification of a set of images of noughts and crosses. The perceptron must be initially trained to get the weightings correct before it can be used to classify unseen data &#8211; see the README in the <a href="http://www.davidpetrie.com/files/ImagePerceptron/ImagePerceptron.tar.gz">.tar.gz</a> for more.</p>

          <h1>N puzzle solver</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/puzzle.py">Source code</a><br />
          A python program that generates a random <a href="http://en.wikipedia.org/wiki/N-puzzle">N puzzle</a> and then solves it, showing the cycles, states and steps used to find the solution. Uses a number of common heuristics and search algorithms.
          </p>

          <h1>Unfinished java grep clone</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/RegexSim.tar.gz">Source code listing</a><br />
          A java program that mimics grep. I didn&#8217;t get far with it &#8211; it doesn&#8217;t have any of the posix bells and whistles and it can&#8217;t be used to check files. It does basic regex parsing well enough, however.</p>

          <h1>www.vendory.com</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/vendory.com.tar.gz">Source code </a><br />
          Vendory was an eCommerce platform that was intended for SMEs. I had big plans for it, but I decided to abandon the project when I realised that I wasn&#8217;t really interested in selling eCommerce software (which is really quite hard in New Zealand). Written in php &#8211; the source code in the above tar file is missing some eye candy.</p>

          <h1>www.tagworldcup.com</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/tagworldcup.com.tar.gz">Source code</a><br />
          A ridiculous get-rich-quick scheme that failed miserably. You could buy keywords on the website for $100, and once you did you would &#8220;own&#8221; that keyword forever. We attempted to piggyback on the tagging craze that was happening at the time, as well as the soccer world cup (hence the name, tagworldcup).</p>

          <h1>Tiny Register Machine Interpreter</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/RegisterMachine">Source code listing</a><br />
          For language geeks only. This is a prolog interpreter for <a href="http://en.wikipedia.org/wiki/Register_machine">register machine programs</a>. It will take a register machine program listing, interpret it, and then return the result in the second register as per convention.</p>

          <h1>K Nearest Neighbour</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/NearestNeighbour/">Source code listing</a><br />
          A very short python program implementing the <a href="http://en.wikipedia.org/wiki/K-nearest_neighbor_algorithm">k-nearest-neighbour</a> classification algorithm.</p>

          <h1>www.webdepot.co.nz</h1>
          <p>WebDepot was a rapid website design and development company.</p>

          <h1>www.comet.co.nz</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/comet_old.tar.gz">Source code</a><br />
          Online DVD Rental concept along the lines of Netflix. I couldn't get the financials to work, so I shut it down after a successful but unprofitable beta.</p>
          <p><img src="http://www.davidpetrie.com/files/comet_ss.JPG" width="300px" />
          </p>

          <h1>UniTutor</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/main30.gif">Image</a><br />
          Unitutor was a tutor-student matching business a friend and I ran for two years while at university. It did okay. I don&#8217;t have the source code anymore.</p>

          <h1>The Daily Business Review</h1>
          <p>
          <strong>Link:</strong> <a href="http://www.davidpetrie.com/files/dbr/">Website Archive</a><br />
          Started in my first year of varsity in 1999. Ran pretty well, but apparently I was using the name of a semi-famous magazine in the USA. Their lawyers fedexed an overnight cease-and-desist letter to me. I didn&#8217;t know any better, so I shut it down&#8230;</p>

          <h1>RMSys</h1>
          <p>
          A payroll program I wrote in Java at uni. Included its own webserver because I didn&#8217;t have the hardware to run java server pages at the time. I couldn&#8217;t find a working version or any screenshots, but here is some surprisingly well-commented <a href="http://www.davidpetrie.com/files/EditWindow.java">sample code</a> and a hilarious <a href="http://www.davidpetrie.com/files/Pay.plan">.plan file</a></p>
      </Wrapper>
    )
  }
}
