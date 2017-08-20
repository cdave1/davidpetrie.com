import React from 'react'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';
import Wrapper from '../components/Wrapper';

var books = {
    "Current" : [
        {
            title: "Adults In The Room: My Battle With Europe’s Deep Establishment",
            author: "Yanis Varoufakis",
            link: "https://www.amazon.com/Adults-Room-Battle-Europes-Establishment-ebook/dp/B01ICK4IWK"
        },
        {
            title: "Behave: The Biology of Humans at Our Best and Worst",
            author: "Robert M Sapolsky",
            link: "https://www.amazon.com/Behave-Biology-Humans-Best-Worst-ebook/dp/B01A7YX4TW"
        },
        {
            "title": "Through the Eye of a Needle: Wealth, the Fall of Rome, and the Making of Christianity in the West, 350-550 AD (Audiobook)",
            "author": "Peter Brown",
            "link": "https://www.amazon.com/Through-Eye-Needle-Christianity-350-550-ebook/dp/B009EYPOCC",
            "notes": "Really loving this so far."
        },
        {
            title: "Collected Poems 1909-1962",
            author: "T.S. Eliot",
            link: "https://www.amazon.com/Collected-Poems-1909-1962-T-S-Eliot-ebook/dp/B004H1TC3O"
        },
        {
            "title": "Peace",
            "author": "Gene Wolfe",
            "link": "https://www.amazon.com/Peace-Gene-Wolfe/dp/0312890338"
        }
    ],
    "Upcoming" : [
        {
            "title": "Fifty Orwell Essays",
            author: "George Orwell",
            "link": "https://www.amazon.com/Fifty-Orwell-Essays-George/dp/1849026475",
        },
        {
            "title": "The Social Conquest of Earth",
            "author": "Edward O. Wilson",
            "link": "https://www.amazon.com/Social-Conquest-Earth-Edward-Wilson/dp/0871403633"
        },
        {
            "title": "Cancer as a Metabolic Disease",
            "author": "Thomas Seyfried",
            "link": "https://www.amazon.com/Cancer-Metabolic-Disease-Management-Prevention/dp/0470584920"
        },
        {
            "title": "The Righteous Mind",
            "author": "Jonathan Haidt",
            "link": "https://www.amazon.com/Righteous-Mind-Divided-Politics-Religion-ebook/dp/B0076O2VMI/ref=sr_1_1?s=books&ie=UTF8&qid=1487188952&sr=1-1&keywords=The+righteous+mind"
        },
        {
            "title": "Towards the Flame: Empire, War and the End of Tsarist Russia",
            "author": "Dominic Lieven",
            "link": "https://www.amazon.com/Towards-Flame-Empire-Tsarist-Russia-ebook/dp/B00P1VOCVG"
        }
    ],
    "2017": [

        {
            "title": "Second Foundation",
            "author": "Isaac Asimov",
            "link": "https://en.wikipedia.org/wiki/Second_Foundation"
        },
        {
            "title": "Foundation and Empire",
            "author": "Isaac Asimov",
            "link": "https://en.wikipedia.org/wiki/Foundation_and_Empire"
        },
        {
            "title": "Foundation",
            "author": "Isaac Asimov",
            "link": "https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)"
        },
        {
            "title": "The Waste Land",
            "author": "T.S. Eliot",
            "link": "https://en.wikipedia.org/wiki/The_Waste_Land"
        },
        {
            "title": "Inversions",
            "author": "Iain M. Banks",
            "link": "https://www.amazon.com/gp/product/B002TXZR8G/ref=series_rw_dp_sw"
        },
        {
            "title": "Look to Windward",
            "author": "Iain M. Banks",
            "link": "https://www.amazon.com/Look-Windward-Culture-Iain-Banks-ebook/dp/B003MQM7A0"
        },
        {
            "title": "The Origins of Political Order (Audiobook)",
            "author": "Francis Fukuyama",
            "link": "https://www.amazon.com/Origins-Political-Order-Prehuman-Revolution/dp/0374533229"
        },
        {
            "title": "Deep Work",
            "author": "Cal Newport",
            "link": "https://www.amazon.com/Deep-Work-Focused-Success-Distracted-ebook/dp/B013UWFM52"
        },
        {
            "title": "The Three Body Problem",
            "author": "Cixin Liu",
            "link": "https://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032"
        },
        {
            "title": "(REREAD) Fall of Hyperion",
            "author": "Dan Simmons",
        },
        {
            "title": "The Lady of The Lake",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Lady-Lake-Andrzej-Sapkowski-ebook/dp/B01M4GH0GS"
        },
        {
            "title": "The Tower of the Swallow",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Tower-Swallow-Andrzej-Sapkowski-ebook/dp/B019CSNPV6"
        },
        {
            "title": "Baptism of Fire",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Baptism-Fire-Witcher-Andrzej-Sapkowski-ebook/dp/B00GFHFRSM"
        },
        {
            "title": "(REREAD) Hyperion",
            "author": "Dan Simmons",
            "link": "https://www.amazon.com/Hyperion-Cantos-Dan-Simmons/dp/0553283685",
            "notes": "I didn't mean to start re-reading Hyperion again, but the Priest's Tale is so good it just sucked me right in to the story again."
        },
        {
            "title": "Time of Contempt",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Time-Contempt-Witcher-Andrzej-Sapkowski-ebook/dp/B00BJ5ADLQ"
        },
        {
            "title": "Dune",
            "author": "Frank Herbert",
            "link": "https://www.amazon.com/Dune-Sequence-Frank-Herbert-ebook/dp/B004KA9UXO"
        },
        {
            "title": "Grit: The Power of Passion and Perseverance",
            "author": "Angela Duckworth",
            "link": "https://www.amazon.com/Grit-Passion-Perseverance-Angela-Duckworth-ebook/dp/B019CGY2ZG/ref=sr_1_1?s=books&ie=UTF8&qid=1486861641&sr=1-1&keywords=Grit"
        },
        {
            "title": "Blood of Elves",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Blood-Elves-Witcher-Andrzej-Sapkowski-ebook/dp/B0043M66Z4/ref=sr_1_1?s=books&ie=UTF8&qid=1486861665&sr=1-1"
        },
        {
            "title": "Sword of Destiny",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Sword-Destiny-Andrzej-Sapkowski-ebook/dp/B00U68KUE2/ref=sr_1_3?s=books&ie=UTF8&qid=1486861653&sr=1-3"
        },
        {
            "title": "The Last Wish",
            "author": "Andrzej Sapkowski",
            "link": "https://www.amazon.com/Last-Wish-Andrzej-Sapkowski-ebook/dp/B0043M6712/ref=sr_1_1?s=books&ie=UTF8&qid=1486861653&sr=1-1"
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
            "link": "https://www.amazon.com/gp/product/0312890206/ref=oh_aui_detailpage_o05_s00?ie=UTF8&psc=1",
            "notes": "Requires a re-read to fully appreciate."
        },
        {
            "title": "Operating Manual for Spaceship Earth",
            "author": "R. Buckminster Fuller",
            "link": "https://www.amazon.com/gp/product/3037781262/ref=oh_aui_detailpage_o09_s00?ie=UTF8&psc=1"
        },
        {
            "title": "The Futurological Congress: From the Memoirs of Ijon Tichy",
            "author": "Stanislaw Lem",
            "link": "https://www.amazon.com/gp/product/0156340402/ref=od_aui_detailpages01?ie=UTF8&psc=1",
            "notes": "Quite simply one of the funniest books I've ever read."
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
            "link": "https://www.amazon.com/Machine-Learning-Probabilistic-Perspective-Computation/dp/0262018020/ref=sr_1_1?s=books&ie=UTF8&qid=1486861011&sr=1-1",
            "notes": "(Reference)"
        },
        {
            "title": "Physically Based Rendering, Second Edition: From Theory To Implementation",
            "author": "Matt Pharr",
            "link": "https://www.amazon.com/Physically-Based-Rendering-Second-Implementation/dp/0123750792/ref=sr_1_1?s=books&ie=UTF8&qid=1486861049&sr=1-1",
            "notes": "(Reference)"
        },
        {
            "title": "The Princeton Companion to Applied Mathematics",
            "author": "Nicholas J. Higham and Mark R. Dennis",
            "link": "https://www.amazon.com/Princeton-Companion-Applied-Mathematics/dp/0691150397",
            "notes": "(Reference)"
        },
        {
            "title": "3D Math Primer for Graphics and Game Development, 2nd Edition",
            "author": "Fletcher Dunn",
            "link": "https://www.amazon.com/Math-Primer-Graphics-Game-Development/dp/1568817231",
            "notes": "(Reference)"
        },
        {
            "title": "Pattern Recognition and Machine Learning (Information Science and Statistics)",
            "author": "Christopher Bishop",
            "link": "https://www.amazon.com/Pattern-Recognition-Learning-Information-Statistics/dp/0387310738",
            "notes": "(Reference)"
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
            "title": "Three Moments of An Explosion",
            "author": "China Mieville",
            "link": "https://www.amazon.com/Three-Moments-Explosion-China-Mi%C3%A9ville/dp/1101884789"
        },
        {
            "title": "Beyond the Aquila Rift",
            "author": "Alastair Reynolds",
            "link": "https://www.amazon.com/Beyond-Aquila-Rift-Alastair-Reynolds-ebook/dp/B019CSNPTI"
        },
        {
            "title": "(REREAD) Hyperion",
            "author": "Dan Simmons",
            "link": "https://www.amazon.com/Hyperion-Cantos-Dan-Simmons/dp/0553283685"
        },
        {
            "title": "(REREAD) The Fall of Hyperion",
            "author": "Dan Simmons",
            "link": "https://www.amazon.com/Fall-Hyperion-Dan-Simmons/dp/0553288202"
        },
        {
            "title": "Altered Carbon",
            "author": "Richard Morgan",
            "link": "https://www.amazon.com/Altered-Carbon-Takeshi-Kovacs-Richard-ebook/dp/B002U3CBZM"
        },
        {
            "title": "Abyss Beyond Dreams",
            "author": "Peter F. Hamilton",
            "link": "https://www.amazon.com/Abyss-Beyond-Dreams-Commonwealth-Chronicle/dp/0345547217"
        },
        {
            "title": "Solaris",
            "author": "Stanislaw Lem",
            "link": "https://www.amazon.com/Solaris-Stanislaw-Lem/dp/0156027607"
        },
        {
            "title": "The Inevitable",
            "author": "Kevin Kelly",
            "link": "https://www.amazon.com/Inevitable-Understanding-Technological-Forces-Future/dp/0525428089"
        },
        {
            "title": "(REREAD) The Hard Thing About Hard Things",
            "author": "Ben Horowitz",
            "link": "https://www.amazon.com/Hard-Thing-About-Things-Building-ebook/dp/B00DQ845EA"
        },
        {
            "title": "House of Suns",
            "author": "Alastair Reynolds",
            "link": "https://www.amazon.com/House-Suns-GOLLANCZ-Alastair-Reynolds-ebook/dp/B0049MPHY4"
        },
        {
            "title": "(REREAD) The Big Sleep",
            "author": "Raymond Chandler",
            "link": "https://www.amazon.com/Big-Sleep-Raymond-Chandler/dp/B002C0XSSW"
        },
        {
            "title": "The Defense of Gallipoli: A General Staff Study",
            "author": "George S. Patton Jr",
            "link": "http://www.goodreads.com/book/show/5972479-the-defense-of-gallipoli",
            "notes": "Doesn't appear to be available on Amazon any more."
        },
        {
            "title": "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
            "author": "Ashley Vance",
            "link": "https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/0062301233"
        },
        {
            "title": "What Technology Wants",
            "author": "Kevin Kelly",
            "link": "https://www.amazon.com/What-Technology-Wants-Kevin-Kelly/dp/0143120174"
        },
        {
            "title": "Hydrogen Sonata",
            "author": "Iain M. Banks",
            "link": "https://www.amazon.com/Hydrogen-Sonata-Culture-Novel-ebook/dp/B008K5T5AI"
        },
        {
            "title": "(REREAD) Revelation Space",
            "author": "Alastair Reynolds",
            "link": "https://www.amazon.com/Revelation-Space-Alastair-Reynolds-ebook/dp/B0049MPHZI"
        },
        {
            "title": "Rise of the Robots: Technology and the Threat of a Jobless Future",
            "author": "Martin Ford",
            "link": "https://www.amazon.com/Rise-Robots-Technology-Threat-Unemployment-ebook/dp/B0147D1WIO"
        },
        {
            "title": "Superintelligence",
            "author": "Nick Bostrom",
            "link": "https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834"
        },
        {
            "title": "Lying",
            "author": "Sam Harris",
            "link": "https://www.amazon.com/Lying-Sam-Harris-ebook/dp/B00G1SRB6Q"
        },
        {
            "title": "Tools of Titans",
            "author": "Tim Feriss",
            "link": "https://www.amazon.com/Tools-Titans-Billionaires-World-Class-Performers-ebook/dp/B01LF32ZNU"
        },
        {
            "title": "Hitch-22: A Memoir (AUDIOBOOK)",
            "author": "Christopher Hitchens",
            "link": "https://www.amazon.com/Hitch-22-Memoir-Christopher-Hitchens/dp/044654034X"
        },
        {
            "title": "Foundation (AUDIOBOOK)",
            "author": "Isaac Asimov",
            "link": "https://www.amazon.com/Foundation-Isaac-Asimov/dp/0553293354"
        },
        {
            "title": "The Count of Monte Cristo (AUDIOBOOK)",
            "author": "Alexandre Dumas",
            "link": "http://www.audible.com.au/pd/Classics/The-Count-of-Monte-Cristo-Audiobook/B00FMDSM7I"
        },
        {
            "title": "Gordon Ramsay's Ultimate Cookery Course",
            "author": "Gordon Ramsay",
            "link": "https://www.amazon.com/gp/product/B008MSOMNI/ref=oh_aui_d_detailpage_o01_?ie=UTF8&psc=1",
            "notes": "Made a lot of recipes from this book.  I just think Ramsay is a cut above the rest."
        },
        {
            "title": "Gordon Ramsay's Great British Pub Food",
            "author": "Gordon Ramsay",
            "link": "https://www.amazon.com/gp/product/B003UN707A/ref=oh_aui_d_detailpage_o02_?ie=UTF8&psc=1",
            "notes": "Good winter recipes, but the eBook was ruined by extremely poor formatting."
        },
        {
            "title": "Gordon Ramsay's Ultimate Home Cooking",
            "author": "Gordon Ramsay",
            "link": "https://www.amazon.com/gp/product/B00CIVLX2S/ref=oh_aui_d_detailpage_o03_?ie=UTF8&psc=1",
            "notes": "One of the best recipe books out there."
        },
        {
            "title": "River Cottage Light & Easy: Healthy Recipes for Every Day",
            "author": "Hugh Fearnly-Whitingstall",
            "link": "https://www.amazon.com/River-Cottage-Light-Easy-Healthy/dp/1408853531/ref=sr_1_6?ie=UTF8&qid=1486851611&sr=8-6&keywords=hugh+fearnley-whittingstall",
            "notes": "Very simple recipes that often blow people away."
        }
    ]
};


exports.data = {
  title: 'Reading List'
};


export default class Reading extends React.Component {
  constructor () {
    super()

    

    //this.state = { images: images }
    this.title = "Hello"
    
  }


    bookLink(item, index) {
        var notes = "";
        if (item.notes) {
            notes = (
                <span>
                {item.notes}
                <br />
                </span>
            );
        }
        return ( 
            <div>
                <strong>{index + 1}. {item.link && item.link.length > 0 ? <a href={item.link}>{item.title}</a> : item.title}</strong><br />
                by <strong>{item.author}</strong><br />
                {notes}
                <br />
            </div>
        )
    }
   
    render () {
        return (
            <Wrapper title="Reading List">
                <header className="style1"><h2>Currently Reading:</h2></header>

                {books['Current'].map((item, index) => { return this.bookLink(item, index) })}

                <header className="style1"><h2>Upcoming:</h2></header>

                {books['Upcoming'].map((item, index) => { return this.bookLink(item, index) })}

                <header className="style1"><h2>Read in 2017:</h2></header>

                {books['2017'].map((item, index) => { return this.bookLink(item, index) })}

                <header className="style1"><h2>Read in 2016:</h2></header>

                {books['2016'].map((item, index) => { return this.bookLink(item, index) })}
            </Wrapper>
        )
  }
}
