import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import Gallery from 'react-grid-gallery';
import { prefixLink } from 'gatsby-helpers'

var books = {
    "Current" : [
        {
            "title": "Dune",
            "author": "Frank Herbert",
            "link": "https://www.amazon.com/Dune-Sequence-Frank-Herbert-ebook/dp/B004KA9UXO/ref=sr_1_1?s=books&ie=UTF8&qid=1486861477&sr=1-1&keywords=Dune"
        },
        {
            "title": "(REREAD) Hyperion",
            "author": "Dan Simmons",
            "link": "https://www.amazon.com/Hyperion-Cantos-Dan-Simmons-ebook/dp/B0043M6780/ref=sr_1_1?s=books&ie=UTF8&qid=1486861498&sr=1-1&keywords=Hyperion"
        },
        {
            "title": "Through the Eye of a Needle: Wealth, the Fall of Rome, and the Making of Christianity in the West, 350-550 AD (Audiobook)",
            "author": "Peter Brown",
            "link": "https://www.amazon.com/Through-Eye-Needle-Christianity-350-550-ebook/dp/B009EYPOCC/ref=sr_1_5?s=books&ie=UTF8&qid=1486861523&sr=1-5&keywords=eye+of+a+needle"
        },
        {
            "title": "The Origins of Political Order (Audiobook)",
            "author": "Francis Fukuyama",
            "link": "https://www.amazon.com/Origins-Political-Order-Prehuman-Revolution/dp/0374533229/ref=sr_1_1?s=books&ie=UTF8&qid=1486861537&sr=1-1&keywords=origins+of+political+order"
        },
        {
            "title": "The Time of Contempt",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Time-Contempt-Witcher-Andrzej-Sapkowski-ebook/dp/B00BJ5ADLQ/ref=sr_1_3?s=books&ie=UTF8&qid=1486861552&sr=1-3&keywords=Time+of+contempt"
        },
        {
            "title": "(REREAD) Anna Karenina",
            "author": "Leo Tolstoy (P&V)",
            "link": ""
        }
    ],
    "2017": [
        {
            "title": "Grit: The Power of Passion and Perseverance",
            "author": "Angela Duckworth",
            "link": "https://www.amazon.com/Grit-Passion-Perseverance-Angela-Duckworth-ebook/dp/B019CGY2ZG/ref=sr_1_1?s=books&ie=UTF8&qid=1486861641&sr=1-1&keywords=Grit"
        },
        {
            "title": "The Last Wish",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Last-Wish-Andrzej-Sapkowski-ebook/dp/B0043M6712/ref=sr_1_1?s=books&ie=UTF8&qid=1486861653&sr=1-1"
        },
        {
            "title": "Sword of Destiny",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Sword-Destiny-Andrzej-Sapkowski-ebook/dp/B00U68KUE2/ref=sr_1_3?s=books&ie=UTF8&qid=1486861653&sr=1-3"
        },
        {
            "title": "Blood of Elves",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Blood-Elves-Witcher-Andrzej-Sapkowski-ebook/dp/B0043M66Z4/ref=sr_1_1?s=books&ie=UTF8&qid=1486861665&sr=1-1"
        }
    ],
    "2016": [
        {
            "title": "The Paris Review Interviews, I",
            "author": "The Paris Review (Author), Philip Gourevitch (Introduction)",
            "link": "https://www.amazon.com/gp/product/0312361750/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1"
        },
        {
            "title": "Skunk Works: A Personal Memoir of My Years at Lockheed",
            "author": "Ben R. Rich",
            "link": "https://www.amazon.com/gp/product/0316743305/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1"
        },
        {
            "title": "The Fifth Head of Cerberus: Three Novellas",
            "author": "Gene Wolfe",
            "link": "https://www.amazon.com/gp/product/0312890206/ref=oh_aui_detailpage_o05_s00?ie=UTF8&psc=1"
        },
        {
            "title": "Operating Manual for Spaceship Earth",
            "author": "R. Buckminster Fuller",
            "link": "https://www.amazon.com/gp/product/3037781262/ref=oh_aui_detailpage_o09_s00?ie=UTF8&psc=1"
        },
        {
            "title": "The Futurological Congress: From the Memoirs of Ijon Tichy",
            "author": "Stanislaw Lem",
            "link": "https://www.amazon.com/gp/product/0156340402/ref=od_aui_detailpages01?ie=UTF8&psc=1"
        },
        {
            "title": "Mortal Engines",
            "author": "Stansilaw Lem",
            "link": "https://www.amazon.com/gp/product/0156621614/ref=od_aui_detailpages01?ie=UTF8&psc=1"
        },
        {
            "title": "Star Diaries",
            "author": "Stanislaw Lem",
            "link": "https://www.amazon.com/gp/product/0156849054/ref=od_aui_detailpages01?ie=UTF8&psc=1"
        },
        {
            "title": "On Intelligence",
            "author": "Jeff Hawkins",
            "link": "https://www.amazon.com/gp/product/0805078533/ref=od_aui_detailpages03?ie=UTF8&psc=1"
        },
        {
            "title": "The New Typography (Weimar and Now: German Cultural Criticism)",
            "author": "Jan Tschichold",
            "link": "https://www.amazon.com/gp/product/0520250125/ref=od_aui_detailpages03?ie=UTF8&psc=1"
        },
        {
            "title": "Incompleteness: The Proof and Paradox of Kurt Gödel (Great Discoveries)",
            "author": "Rebecca Goldstein",
            "link": "https://www.amazon.com/gp/product/0393327604/ref=od_aui_detailpages03?ie=UTF8&psc=1"
        },
        {
            "title": "This Explains Everything: Deep, Beautiful, and Elegant Theories of How the World Works (Edge Question Series)",
            "author": "John Brockman (Edited)",
            "link": "https://www.amazon.com/gp/product/0062230174/ref=od_aui_detailpages03?ie=UTF8&psc=1"
        },
        {
            "title": "Machine Learning: A Probabilistic Perspective (Adaptive Computation and Machine Learning series)",
            "author": "Kevin P. Murphy",
            "link": "https://www.amazon.com/Machine-Learning-Probabilistic-Perspective-Computation/dp/0262018020/ref=sr_1_1?s=books&ie=UTF8&qid=1486861011&sr=1-1"
        },
        {
            "title": "Physically Based Rendering, Second Edition: From Theory To Implementation",
            "author": "Matt Pharr",
            "link": "https://www.amazon.com/Physically-Based-Rendering-Second-Implementation/dp/0123750792/ref=sr_1_1?s=books&ie=UTF8&qid=1486861049&sr=1-1"
        },
        {
            "title": "The Princeton Companion to Applied Mathematics",
            "author": "Nicholas J. Higham and Mark R. Dennis",
            "link": ""
        },
        {
            "title": "3D Math Primer for Graphics and Game Development, 2nd Edition",
            "author": "Fletcher Dunn",
            "link": ""
        },
        {
            "title": "Pattern Recognition and Machine Learning (Information Science and Statistics)",
            "author": "Christopher Bishop",
            "link": ""
        },
        {
            "title": "(REREAD) Zero to One: Notes on Start Ups, or How to Build the Future",
            "author": "Peter Thiel and Blake Masters",
            "link": "https://www.amazon.com/gp/product/B00KHX0II4/ref=oh_aui_d_detailpage_o00_?ie=UTF8&psc=1"
        },
        {
            "title": "The First Tycoon",
            "author": "T.J. Stiles",
            "link": "https://www.amazon.com/gp/product/B0026UNZD6/ref=oh_aui_d_detailpage_o04_?ie=UTF8&psc=1"
        },
        {
            "title": "Gordon Ramsay's Ultimate Cookery Course",
            "author": "Gordon Ramsay",
            "link": "https://www.amazon.com/gp/product/B008MSOMNI/ref=oh_aui_d_detailpage_o01_?ie=UTF8&psc=1"
        },
        {
            "title": "Gordon Ramsay's Great British Pub Food",
            "author": "Gordon Ramsay",
            "link": "https://www.amazon.com/gp/product/B003UN707A/ref=oh_aui_d_detailpage_o02_?ie=UTF8&psc=1"
        },
        {
            "title": "Gordon Ramsay's Ultimate Home Cooking",
            "author": "Gordon Ramsay",
            "link": "https://www.amazon.com/gp/product/B00CIVLX2S/ref=oh_aui_d_detailpage_o03_?ie=UTF8&psc=1"
        },
        {
            "title": "A Canticle For Leibowitz (S.F. MASTERWORKS)",
            "author": "Walter M. Miller Jr",
            "link": "https://www.amazon.com/gp/product/B00QFLKN0A/ref=oh_aui_d_detailpage_o05_?ie=UTF8&psc=1"
        },
        {
            "title": "The Vital Question: Why is life the way it is?",
            "author": "Nick Lane",
            "link": "https://www.amazon.com/gp/product/B00MVAY7U6/ref=oh_aui_d_detailpage_o06_?ie=UTF8&psc=1"
        },
        {
            "title": "The Lathe Of Heaven (S.F. MASTERWORKS)",
            "author": "Ursula Le Guin",
            "link": "https://www.amazon.com/gp/product/B0117BFG5Y/ref=oh_aui_d_detailpage_o07_?ie=UTF8&psc=1"
        },
        {
            "title": "No One Left to Lie To: The Triangulations of William Jefferson Clinton",
            "author": "Christopher Hitchens",
            "link": "https://www.amazon.com/gp/product/B0083ZM0BG/ref=oh_aui_d_detailpage_o09_?ie=UTF8&psc=1"
        },
        {
            "title": "The Trial of Henry Kissinger",
            "author": "Christopher Hitchens",
            "link": "https://www.amazon.com/gp/product/B0083ZMD54/ref=oh_aui_d_detailpage_o00_?ie=UTF8&psc=1"
        },
        {
            "title": "Rendezvous with Rama",
            "author": "Arthur C. Clarke",
            "link": "https://www.amazon.com/gp/product/B00AHIP8ZM/ref=oh_aui_d_detailpage_o01_?ie=UTF8&psc=1"
        },
        {
            "title": "Why Nations Fail: The Origins of Power, Prosperity and Poverty",
            "author": "Daron Acemoglu",
            "link": "https://www.amazon.com/gp/product/B007HLIUN4/ref=oh_aui_d_detailpage_o02_?ie=UTF8&psc=1"
        },
        {
            "title": "Seveneves",
            "author": "Neal Stephenson",
            "link": "https://www.amazon.com/gp/product/B00R0RGSLG/ref=oh_aui_d_detailpage_o03_?ie=UTF8&psc=1"
        },
        {
            "title": "The Girl With All The Gifts",
            "author": "M. R. Carey",
            "link": "https://www.amazon.com/gp/product/B00B27ECPY/ref=oh_aui_d_detailpage_o04_?ie=UTF8&psc=1"
        },
        {
            "title": "That Sugar Book: This Book Will Change the Way You Think About 'Healthy' Food",
            "author": "Damon Gameau",
            "link": "https://www.amazon.com/That-Sugar-Book-Damon-Gameau-ebook/dp/B00YRC396E/ref=sr_1_3?ie=UTF8&qid=1486851581&sr=8-3&keywords=that+sugar+book"
        },
        {
            "title": "River Cottage Light & Easy: Healthy Recipes for Every Day",
            "author": "Hugh Fearnly-Whitingstall",
            "link": "https://www.amazon.com/River-Cottage-Light-Easy-Healthy/dp/1408853531/ref=sr_1_6?ie=UTF8&qid=1486851611&sr=8-6&keywords=hugh+fearnley-whittingstall"
        },
        {
            "title": "Three Moments of An Explosion - China Mieville",
            "author": "China Mieville",
            "link": ""
        },
        {
            "title": "Beyond the Aquila Rift",
            "author": "Alastair Reynolds",
            "link": ""
        },
        {
            "title": "The Three Body Problem",
            "author": "Cixin Liu",
            "link": ""
        },
        {
            "title": "(REREAD) Hyperion",
            "author": "Dan Simmons",
            "link": ""
        },
        {
            "title": "(REREAD) The Fall of Hyperion",
            "author": "Dan Simmons",
            "link": ""
        },
        {
            "title": "Altered Carbon",
            "author": "Richard Morgan",
            "link": ""
        },
        {
            "title": "Abyss Beyond Dreams",
            "author": "Peter F. Hamilton",
            "link": ""
        },
        {
            "title": "Solaris",
            "author": "Stanislaw Lem",
            "link": ""
        },
        {
            "title": "The Inevitable",
            "author": "Kevin Kelly",
            "link": ""
        },
        {
            "title": "(REREAD) The Hard Thing About Hard Things",
            "author": "Ben Horowitz",
            "link": ""
        },
        {
            "title": "House of Suns",
            "author": "Alastair Reynolds",
            "link": ""
        },
        {
            "title": "(REREAD) The Big Sleep",
            "author": "Raymond Chandler",
            "link": ""
        },
        {
            "title": "The Defense of Gallipoli: A General Staff Study",
            "author": "George S. Patton Jr",
            "link": ""
        },
        {
            "title": "Elon Musk",
            "author": "Ashley Vance",
            "link": ""
        },
        {
            "title": "What Technology Wants",
            "author": "Kevin Kelly",
            "link": ""
        },
        {
            "title": "Hydrogen Sonata",
            "author": "Iain M. Banks",
            "link": ""
        },
        {
            "title": "(REREAD) Revelation Space",
            "author": "Alastair Reynolds",
            "link": ""
        },
        {
            "title": "Rise of the Robots: Technology and the Threat of a Jobless Future",
            "author": "Martin Ford",
            "link": ""
        },
        {
            "title": "Superintelligence",
            "author": "Nick Bostrom",
            "link": ""
        },
        {
            "title": "Lying",
            "author": "Sam Harris",
            "link": ""
        },
        {
            "title": "Tools of Titans",
            "author": "Tim Feriss",
            "link": ""
        },
        {
            "title": "Hitch-22: A Memoir (AUDIOBOOK)",
            "author": "Christoper Hitchens",
            "link": ""
        },
        {
            "title": "Foundation (AUDIOBOOK)",
            "author": "Isaac Asimov",
            "link": ""
        },
        {
            "title": "The Count of Monte Cristo (AUDIOBOOK)",
            "author": "Alexandre Dumas",
            "link": ""
        }
    ]
};


export default class ReactComponent extends React.Component {
  constructor () {
    super()

    

    //this.state = { images: images }
    this.title = "Hello"
    
  }


    bookLink(item, index) {
        return ( 
            <div>
                <strong>{index + 1}. {item.link && item.link.length > 0 ? <a href={item.link}>{item.title}</a> : item.title}</strong><br />
                by <strong>{item.author}</strong><br />
                <br />
            </div>
        )
    }
   
  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | React.js components`} 
        />
        <div className="style1"><p>Currently Reading:</p></div>

        {books['Current'].map((item, index) => { return this.bookLink(item, index) })}

        <header className="style1"><p>Read 2017:</p></header>

        {books['2017'].map((item, index) => { return this.bookLink(item, index) })}

        <header className="style1"><p>Read 2016:</p></header>

        {books['2016'].map((item, index) => { return this.bookLink(item, index) })}

      </div>
    )
  }
}

