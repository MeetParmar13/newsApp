
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [  {
          "source": { "id": null, "name": "CNBC" },
          "author": "Leslie Josephs",
          "title": "Boeing agrees to buy fuselage maker Spirit AeroSystems in $4.7 billion deal - CNBC",
          "description": "Boeing is buying the supplier of fuselages as it looks for a way out of its manufacturing and safety crisis.",
          "url": "https://www.cnbc.com/2024/07/01/boeing-to-buy-spirit-aerosystems.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/106307685-1576861638462gettyimages-98590875.jpeg?v=1593567129&w=1920&h=1080",
          "publishedAt": "2024-07-01T04:11:41Z",
          "content": "Boeing said Monday that it will buy back its struggling fuselage maker Spirit AeroSystems in an all-stock deal that the planemaker has said will improve safety and quality control.\r\nIt said it agreed… [+3389 chars]"
        },
        {
          "source": { "id": null, "name": "Billboard" },
          "author": "Joe Lynch",
          "title": "2024 BET Awards Winners: See the Complete List (Updating) - Billboard",
          "description": "2024 BET Awards winners list -- see who won.",
          "url": "http://www.billboard.com/music/awards/2024-bet-awards-winners-1235721115/",
          "urlToImage": "https://www.billboard.com/wp-content/uploads/2024/06/Usher-03-award-bet-awards-show-2024-billboard-1548.jpg?w=1024",
          "publishedAt": "2024-07-01T04:07:30Z",
          "content": "The 2024 BET Awards took place on Sunday (June 30) at the Peacock Theater in Los Angeles. The show saw Taraji P. Henson hosting for a third year. Drake had the most nominations, seven in total. Usher… [+4286 chars]"
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": null,
          "title": "Hurricane Beryl nears Caribbean islands as \"extremely dangerous\" Category 4 storm - CBS News",
          "description": "Hurricane warnings are already in effect in Barbados, St. Lucia, Grenada, St. Vincent and the Grenadines and Tobago.",
          "url": "https://www.cbsnews.com/news/hurricane-beryl-forecast-powerful-storm-caribbean-islands/",
          "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/06/29/6dcad20f-0101-460b-bf1f-75604b0c342a/thumbnail/1200x630/fa1105c23865c3e20c01e4b646b42c53/hurricane.jpg?v=a23cb4bdf4fa7f3cb72e5118085577f9",
          "publishedAt": "2024-07-01T03:18:01Z",
          "content": "Hurricane Beryl was closing in on the Windward Islands in the southeast Caribbean as an \"extremely dangerous\" Category 4 storm, the National Hurricane Center said Sunday night. Forecasters warned the… [+5305 chars]"
        },
        {
          "source": { "id": "nbc-news", "name": "NBC News" },
          "author": "Mike Memoli, Monica Alba",
          "title": "Biden's family urges him to 'keep fighting' as donors look for alternatives - NBC News",
          "description": "A top Biden campaign official held a tense call with donors Sunday, laying out what would happen to the campaign infrastructure should Biden step aside — stressing he had no plans to do so.",
          "url": "https://www.nbcnews.com/politics/joe-biden/bidens-family-keep-fighting-donors-alternatives-rcna159694",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240628-joe-biden-debate-ew-1206p-698938.jpg",
          "publishedAt": "2024-07-01T03:16:00Z",
          "content": "WASHINGTON  As top Democrats offered a public show of support for President Joe Biden throughout the weekend, his advisers worked privately Sunday to push back against suggestions that he step aside,… [+4865 chars]"
        },
        {
          "source": { "id": null, "name": "NPR" },
          "author": "",
          "title": "Transcendent once again, Simone Biles will lead U.S. Olympic gymnastics team in Paris - NPR",
          "description": "For the 27-year-old gymnast, who has already won seven Olympic medals, the Games in 2024 are the next stop on her remarkable return to dominance after a two-year hiatus to tend to her mental health.",
          "url": "https://www.npr.org/2024/06/30/g-s1-7388/simone-biles-gymnastics-usa-olympic-team",
          "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4345x2444+0+452/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F21%2F91%2F07e940114a1c950c4858836c6322%2Fgettyimages-2160011025.jpg",
          "publishedAt": "2024-07-01T02:52:51Z",
          "content": "MINNEAPOLIS For most gymnasts, a slip off the balance beam, a foot outside the line on the floor exercise and too many steps after landing a vault could be enough to spoil a chance at victory.\r\nBut t… [+4409 chars]"
        },
        {
          "source": { "id": null, "name": "San Francisco Chronicle" },
          "author": "Nora Mishanec",
          "title": "'No Pride in Genocide': S.F. march accuses LGBTQ parade of 'pinkwashing' Palestinians' plight - San Francisco Chronicle",
          "description": "More than 1,000 LGBTQ people boycotted the SF Pride Parade with an alternative march seeking support for Palestinians.",
          "url": "https://www.sfchronicle.com/bayarea/article/pro-palestinian-pride-march-19544236.php",
          "urlToImage": "https://s.hdnux.com/photos/01/40/40/46/25299333/3/rawImage.jpg",
          "publishedAt": "2024-07-01T02:21:57Z",
          "content": "Protesters at No Pride in Genocide, offered as an alternative to the SF Pride Parade, rally Sunday at Church and Market streets on behalf of Palestinians.\r\nCarlos Avila Gonzalez/The Chronicle\r\nHundre… [+3846 chars]"
        },
        
        {
          "source": { "id": "bloomberg", "name": "Bloomberg" },
          "author": "Silla Brush",
          "title": "BlackRock Buys Preqin for $3.2 Billion in Private Data Expansion - Bloomberg",
          "description": "BlackRock Inc. will acquire private capital database provider Preqin for £2.55 billion ($3.2 billion) in cash, as the world’s largest money manager accelerates its push to become a major player in alternative assets.",
          "url": "https://www.bloomberg.com/news/articles/2024-07-01/blackrock-buys-preqin-for-3-2-billion-in-private-data-expansion",
          "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itxX2JbBZZCc/v0/1200x800.jpg",
          "publishedAt": "2024-07-01T01:35:00Z",
          "content": "BlackRock Inc. will acquire private capital database provider Preqin for £2.55 billion ($3.2 billion) in cash, as the worlds largest money manager accelerates its push to become a major player in alt… [+245 chars]"
        },
       
       
        {
          "source": { "id": "espn", "name": "ESPN" },
          "author": "Andrew Lopez",
          "title": "Sources: Chris Paul signing free agent deal with Spurs - ESPN",
          "description": "Chris Paul has agreed on a one-year, $11 million-plus deal with the Spurs, sources told ESPN's Adrian Wojnarowski on Sunday.",
          "url": "https://www.espn.com/nba/story/_/id/40469955/sources-chris-paul-sign-free-agent-deal-spurs",
          "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1129%2Fr1259391_1296x729_16%2D9.jpg",
          "publishedAt": "2024-07-01T00:47:00Z",
          "content": "Free agent point guard Chris Paul is signing a one-year contract worth more than $11 million with the San Antonio Spurs, sources told ESPN's Adrian Wojnarowski on Sunday.\r\nThe Spurs and Paul wasted n… [+1809 chars]"
        },
        
        {
          "source": { "id": null, "name": "POLITICO.eu" },
          "author": "Victor Goury-Laffont",
          "title": "What the French election results mean for Le Pen, Macron and Mélenchon - POLITICO Europe",
          "description": "Emmanuel Macron’s election gamble spectacularly backfired, leaving his centrist alliance trailing the far right and far left.",
          "url": "https://www.politico.eu/article/france-legislative-election-marine-le-pen-emmanuel-macron-national-rally-jordan-bardella/",
          "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/07/01/GettyImages-2159409902-scaled.jpg",
          "publishedAt": "2024-07-01T00:22:00Z",
          "content": "Who will compete in the second round remains unclear. It will depend on how each party acts in the face of a possible far-right win, leaving key political players with burning headaches in the days b… [+1222 chars]"
        },
        {
          "source": { "id": null, "name": "TMZ" },
          "author": "TMZ Staff",
          "title": "Paris Hilton's Toddler Phoenix Walking in Behind-the-Scenes Video - TMZ",
          "description": "Paris Hilton's kids certainly have their mom's energy ... her son is ready to get out in the world and make a name for himself -- 'cause he's running all over the place!",
          "url": "https://www.tmz.com/2024/06/30/paris-hilton-son-phoenix-walking-behind-the-scenes-video/",
          "urlToImage": "https://imagez.tmz.com/image/49/16by9/2024/06/30/49a8e77609544ed7a0caac8bbca1faed_xl.jpg",
          "publishedAt": "2024-07-01T00:05:00Z",
          "content": "Paris Hilton's kids certainly have their mom's energy ... her son is ready to get out in the world and make a name for himself -- 'cause he's running all over the place!\r\nThe mother-of-two shared a b… [+1181 chars]"
        },
        
        {
          "source": { "id": "abc-news", "name": "ABC News" },
          "author": "Peter Charalambous",
          "title": "Will Trump stand trial in DC before the election? Experts say it's unlikely, but not impossible - ABC News",
          "description": "Judge Tanya Chutkan paused proceedings in the case last December.",
          "url": "https://abcnews.go.com/Politics/will-trump-stand-trial-dc-before-election-experts-unlikely-not-impossible/story?id=111561162",
          "urlToImage": "https://i.abcnewsfe.com/a/5f4729d0-5ff9-4dc6-95f1-58e17736d7d3/Trump-trial-rt-jm-240630_1719779104156_hpMain_16x9.jpg?w=1600",
          "publishedAt": "2024-06-30T23:08:08Z",
          "content": "More than six months after a federal judge froze former President Donald Trump's federal election interference case, the Supreme Court is poised to issue a ruling that will guide the trajectory of th… [+7338 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": null,
          "title": "WestJet flight cancellations hit tens of thousands of travelers - The Associated Press",
          "description": "Canada’s second-largest airline says it has canceled more than 800 flights affecting more than 100,000 passengers as an unexpected strike by WestJet plane mechanics entered its third day. Around 680 workers walked off the job Friday evening despite a directiv…",
          "url": "https://apnews.com/article/westjet-airline-strike-canada-flight-cancellations-2be751fc7a4623a2163c179e0e30391a",
          "urlToImage": "https://dims.apnews.com/dims4/default/80884f7/2147483647/strip/true/crop/4000x2250+0+208/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6b%2F60%2F9775a24106bdde03ed9450ee7196%2F4955c83a030d468d8c42addb5ca7e65f",
          "publishedAt": "2024-06-30T22:50:00Z",
          "content": "TORONTO (AP) A strike by plane mechanics forced Canadas second largest airline, WestJet, to cancel hundreds more flights Sunday, upending plans of roughly 110,000 travelers over the Canada Day long w… [+2631 chars]"
        },
        {
          "source": { "id": null, "name": "VOA News" },
          "author": "VOA Learning English",
          "title": "Astronauts’ Return Delayed as Boeing Aims to Fix Starliner Spacecraft - VOA Learning English",
          "description": "Researchers say a new study on an ancient pig-like animal is helping them learn more about brain development in mammals. The animal, called Gordonia, is believed to have lived more than 250 million years ago in what is present day Scotland.",
          "url": "https://learningenglish.voanews.com/a/astronauts-return-delayed-as-boeing-aims-to-fix-starliner-spacecraft/7676410.html",
          "urlToImage": "https://gdb.voanews.com/01000000-0aff-0242-6a80-08dc96f4ac8c_w1200_r1.jpg",
          "publishedAt": "2024-06-30T22:05:00Z",
          "content": "Two American astronauts have been delayed at the International Space Station (ISS) while engineers try to fix problems with Boeings Starliner spacecraft.\r\nStarliner is a joint project between Boeing … [+4079 chars]"
        },
        {
          "source": { "id": null, "name": "Forbes" },
          "author": "Kris Holt",
          "title": "Today's NYT 'Connections' Hints And Answers For Monday, July 1 - Forbes",
          "description": "Looking for some help with Monday's NYT Connections words? Some hints and the answers are right here.",
          "url": "https://www.forbes.com/sites/krisholt/2024/06/30/nyt-connections-today-help-hints--answers-monday-july-1/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64dbcee7d64da3663d88000e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-06-30T22:00:16Z",
          "content": "Find the links between the words to win today's game of Connections.\r\ngetty\r\nLooking for Sundays Connections hints and answers? You can find them here:\r\nForbesToday's NYT 'Connections' Hints And Answ… [+4077 chars]"
        },
        {
          "source": { "id": null, "name": "KOAT New Mexico" },
          "author": "Hamilton Kahn",
          "title": "Immediate evacuation ordered for residents of Ruidoso - KOAT New Mexico",
          "description": "Village's Office of Emergency Management Department says to seek higher ground right away",
          "url": "https://www.koat.com/article/immediate-evacuation-ordered-for-residents-of-ruidoso/61464526",
          "urlToImage": "https://kubrick.htvapps.com/vidthumb/b17c83a4-4f3d-4ee8-b035-66a140c6b3a0/6e17f25e-dcc1-4f5e-9074-d7f456e91d71.jpg?crop=1xw:1.0xh;center,top&resize=1200:*",
          "publishedAt": "2024-06-30T21:35:00Z",
          "content": "RUIDOSO, N.M. —A severe weather cell that is causing flash flooding has prompted emergency evacuation orders from the village's emergency management department.\r\nA social media posting by the Ruidoso… [+459 chars]"
        }
    
    
  ]

  constructor() {
    super();
    console.log("Hello I am constructor");
    this.state = {
      articles: this.articles,  
      loading: false,
      page:1
    }
  }

  async componentDidMount() {
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=38f07df503bf4a799941c6ec496c2b3d&page=1&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({ articles: parsedData.articles ,totalResults:parsedData.totalResults})  
  }
  handleNextClick=async()=>{
    console.log("Next")
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=38f07df503bf4a799941c6ec496c2b3d&page=${this.state.page+1}&pageSize=20`
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      
      
      this.setState({
        page:this.state.page+1,
        articles: parsedData.articles
      })
    }
 

  }
  handlePrevClick=async()=>{
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=38f07df503bf4a799941c6ec496c2b3d&page=${this.state.page-1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    
    
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles
    })


    
  }

  render() {
    return (
      <div className='container my-3'>
        <div className="row">
          <h2>News24-Top Headlines</h2>
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description?element.description.slice(0, 88):"" } imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1}type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;Previous</button>
        <button type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
