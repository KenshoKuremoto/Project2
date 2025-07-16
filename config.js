var config = {
    style: 'mapbox://styles/kensho0928/cmd3wscnd001p01s87abnbela',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoia2Vuc2hvMDkyOCIsImEiOiJjbWMyOTdjMHkwNjBtMmlwcjlmNmJ6YThtIn0.x_6L-WVksTclVmhmlaXAkg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'At the Osaka Expo, Getting In Is Easy. Getting Out Is Not.',
    subtitle: 'A Visual Breakdown of How Fragile Transit and Island Geography Create a Perfect Storm',
    byline: 'By Kensho Kuremoto (Lede 2025)',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.<br><a href="https://github.com/KenshoKuremoto/Project2" target="_blank">Here is the link to Github page</a>',
    chapters: [
        {
            id: 'text1',
            alignment: 'center',
            title:'Expo Currently Underway in Osaka',
            image: 'expo2025.jpg',
            description: 'Japan is currently hosting the <a href="https://www.expo2025.or.jp/en/" target="_blank" style="color:white; font-weight:bold">Osaka-Kansai Expo</a>, a national project with outsized ambition. After a rocky path to launch, the event finally opened on April 13 with great fanfare. Since then, it has attracted more than 10 million visitors from across Japan and beyond. The international pavilions have drawn plenty of attention. But they’re far from the only thing making headlines. Ballooning costs, unpaid construction bills, and even a swarm of midges have all clouded the celebration. Still, one issue has stood out most clearly to visitors: <span style="color:yellow; font-weight:bold">the sheer chaos of getting home.</span>',
            location: {
                center: [138.4079, 38.6591],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {layer: 'expo', opacity: 1},
                {layer: 'osakabus', opacity: 0},
                {layer: 'sakurashuttle', opacity: 0 },
                {layer: 'longbus', opacity: 0,},
                {layer: 'parking', opacity: 0},
                {layer: 'osakametro', opacity: 0},
                {layer: 'passengers', opacity: 0,},
                {layer: 'Near_Yumeshima', opacity: 0},
                {layer: 'usj', opacity: 0},
                {layer: 'mgmosaka', opacity: 0,},
                {layer: 'usjhotel', opacity: 0},
                {layer: 'capa', opacity: 0},
                {layer: 'usjparking', opacity: 0,}         
            ],
            onChapterExit: []
        },
        {
            id: 'text2',
            alignment: 'center',
            title:'The Chaos That Crowds Created',
            hidden: false,
            image: 'crowd.png',
            description:'On June 28, a fireworks show drew <span style="color:yellow; font-weight:bold">more than 200,000 visitors</span>—the Expo’s busiest day yet. But when the show ended around 8 p.m., crowds rushed to leave, overwhelming transit. <span style="color:yellow; font-weight:bold">Around 100 were left stranded</span> at the shuttle bus terminal, and the subway took up to 90 minutes to board. Since then, Expo organizers have made post-8 p.m. departures reservation-only on peak days. (Photo: The Yomiuri Shimbun)',
            location: {
                center: [138.4079, 38.6591],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {layer: 'expo', opacity: 1},
                {layer: 'osakabus', opacity: 0},
                {layer: 'longbus', opacity: 0,},
                {layer: 'parking', opacity: 0},
                {layer: 'osakametro', opacity: 0},
                {layer: 'passengers', opacity: 0,},
                {layer: 'Near_Yumeshima', opacity: 0},
                {layer: 'usj', opacity: 0},
                {layer: 'mgmosaka', opacity: 0,},
                {layer: 'usjhotel', opacity: 0},
                {layer: 'capa', opacity: 0},
                {layer: 'usjparking', opacity: 0,}
            ],
            onChapterExit: []
        },
        {
            id: 'text3',
            alignment: 'center',
            hidden: false,
            image: '',
            description: 'Crowds after major events are nothing new. But the gridlock surrounding the Osaka Expo isn’t just a matter of scale — it’s rooted in geography. What does that mean in real terms? Let’s take a closer look at the map — and the limited ways in and out.',
            location: {
                center: [135.390, 34.648],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {layer: 'expo', opacity: 0.8},
                {layer: 'osakabus', opacity: 0},
                {layer: 'longbus', opacity: 0,},
                {layer: 'parking', opacity: 0},
                {layer: 'osakametro', opacity: 0},
                {layer: 'passengers', opacity: 0,},
                {layer: 'Near_Yumeshima', opacity: 0},
                {layer: 'usj', opacity: 0},
                {layer: 'mgmosaka', opacity: 0,},
                {layer: 'usjhotel', opacity: 0},
                {layer: 'capa', opacity: 0},
                {layer: 'usjparking', opacity: 0,}
            ],
            onChapterExit: []
        },
        {
            id: 'map1-1',
            alignment: 'center',
            title:'The Expo Site That Started as Nothing',
            hidden: false,
            image: 'newold.png',
            description: '<span style="color:red; font-weight:bold">The red area</span> marks the Expo venue. Located on Osaka’s western waterfront, the site sits on reclaimed land called Yumeshima—literally, <span style="color:yellow; font-weight:bold">“Dream Island.”</span> Before the Expo, it was an empty stretch of land with virtually no development. The current transportation network is mostly new, built for the Expo itself.',
            location: {
                center: [135.390, 34.648],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {layer: 'expo', opacity: 0.8},
                {layer: 'osakabus', opacity: 0},
                {layer: 'longbus', opacity: 0,},
                {layer: 'parking', opacity: 0},
                {layer: 'osakametro', opacity: 0},
                {layer: 'passengers', opacity: 0,},
                {layer: 'Near_Yumeshima', opacity: 0},
                {layer: 'usj', opacity: 0},
                {layer: 'mgmosaka', opacity: 0,},
                {layer: 'usjhotel', opacity: 0},
                {layer: 'capa', opacity: 0},
                {layer: 'usjparking', opacity: 0,}
            ],
            onChapterExit: []
        },
        {
             "id": "map1-2",
        "alignment": "center",
        "hidden": false,
        "image": "",
        "description": "There are only two ways to access Yumeshima: a bridge from the north and a tunnel from the east (gray area).",
        "location": {
            "center": [
                135.39,
                34.648
            ],
            "zoom": 13,
            "pitch": 60,
            "bearing": 270,
            "speed": 0.6
        },
        "mapAnimation": "flyTo",
        "callback": "",
        "onChapterEnter": [
                {layer: 'expo', opacity: 0.8},
                {layer: 'osakabus', opacity: 0},
                {layer: 'longbus', opacity: 0,},
                {layer: 'parking', opacity: 0},
                {layer: 'osakametro', opacity: 0},
                {layer: 'passengers', opacity: 0,},
                {layer: 'Near_Yumeshima', opacity: 0},
                {layer: 'usj', opacity: 0},
                {layer: 'mgmosaka', opacity: 0,},
                {layer: 'usjhotel', opacity: 0},
                {layer: 'capa', opacity: 0},
                {layer: 'usjparking', opacity: 0,}
        ],
        "onChapterExit": []
        },
        {
  id: 'map1-3',
  alignment: 'center',
  hidden: false,
  image: '',
  description: '<a href="https://www.expo2025.or.jp/en/expo-map-index/access/" target="_blank" style="color:white; font-weight:bold">According to the official website</a>, there are four main ways to reach the Expo: <span style="color:yellow; font-weight:bold">subway, shuttle bus, long-distance bus, and private car.</span> Let’s take a closer look at each option.',
  location: {
    center: [135.5, 34.7],
    zoom: 10.0,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 1 },
    { layer: 'longbus', opacity: 0 },
    { layer: 'parking', opacity: 0 },
    { layer: 'osakametro', opacity: 1 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map1-4',
  alignment: 'center',
  title:'Subway (Osaka Metro)',
  hidden: false,
  image: '',
  description: 'The subway(Osaka Metro: Green Line) is the backbone of Expo transit. To accommodate the event, the city extended an existing line and built a brand-new station that connects directly to the venue. From there, the line runs into the heart of Osaka, offering seamless transfers to destinations across the metropolitan area.',
  location: {
    center: [135.3896, 34.6517],
    zoom: 12.5,
    pitch: 55,
    bearing: 90
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 0 },
    { layer: 'longbus', opacity: 0 },
    { layer: 'parking', opacity: 0 },
    { layer: 'osakametro', opacity: 1 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map1-5',
  alignment: 'center',
  title:'Main Suttle Route',
  hidden: false,
  image: '',
  description: 'Visitors are encouraged to take the Sakurajima Shuttle Bus, which crosses the northern bridge and makes a round trip to a nearby terminal station in about 10 minutes—or roughly three miles. Roughly 200 trips run daily in both directions, making it one of the most frequently operated services at the Expo.',
  location: {
    center: [135.4079, 34.6591],
    zoom: 12,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 0 },
    { layer: 'sakurashuttle', opacity: 1 },
    { layer: 'longbus', opacity: 0 },
    { layer: 'parking', opacity: 0 },
    { layer: 'osakametro', opacity: 0 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map1-6',
  alignment: 'center',
  title:'Additional Shuttle Route',
  hidden: false,
  image: '',
  description: 'Still, the service proved insufficient. In June, two additional shuttle routes were introduced to ease the load. Each runs about twice an hour, but neither comes close to matching the capacity of the main Sakurajima line.',
  location: {
    center: [135.403, 34.6442],
    zoom: 13,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 1 },
    { layer: 'longbus', opacity: 0 },
    { layer: 'parking', opacity: 0 },
    { layer: 'osakametro', opacity: 0 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map1-7',
  alignment: 'center',
  title:'Suttles within the Osaka Area',
  hidden: false,
  image: '',
  description: 'Direct shuttle buses also run from several major districts across Osaka. They typically operate at a rate of two departures per hour, with slight increases during the evening rush.',
  location: {
    center: [135.5, 34.63],
    zoom: 10,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 1 },
    { layer: 'longbus', opacity: 0 },
    { layer: 'parking', opacity: 0 },
    { layer: 'osakametro', opacity: 0 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map1-8',
  alignment: 'center',
  title:'Suttles within the Greater Osaka Area',
  hidden: false,
  image: '',
  description: 'For visitors coming from farther out, private bus companies fill the gap. Direct routes connect the Expo to nearby major cities like Kyoto and Kobe.',
  location: {
    center: [135.4, 34.8],
    zoom: 8.5,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 0 },
    { layer: 'longbus', opacity: 1 },
    { layer: 'parking', opacity: 0 },
    { layer: 'osakametro', opacity: 0 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map1-9',
  alignment: 'center',
  title:'Long-Distance Buses',
  hidden: false,
  image: '',
  description: 'Of course, there are direct buses from various parts of Japan. But for regions farther north or south, the long travel time makes car access less practical—so service on these routes remains extremely limited.',
  location: {
    center: [137.5, 36.0],
    zoom: 4.0,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 0 },
    { layer: 'longbus', opacity: 1 },
    { layer: 'parking', opacity: 0 },
    { layer: 'osakametro', opacity: 0 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map1-10',
  alignment: 'center',
  title: 'Remote Parking Lots (Orange Area)',
  hidden: false,
  image: '',
  description: 'Driving is technically an option—but it comes with a major catch.\nPrivate vehicles are not allowed into the Expo grounds, meaning visitors must park at one of <span style="color:#ffa500; font-weight:bold">three designated lots</span> and transfer to a dedicated shuttle bus.\nEven the closest lot requires a 15-minute ride; the others take up to 30 minutes.\nWhile more than 200 shuttle trips run each day, the sheer distance between parking and venue is unusually long by global standards.',
  location: {
    center: [135.419, 34.6416],
    zoom: 11,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 0 },
    { layer: 'sakurashuttle', opacity: 0 },
    { layer: 'longbus', opacity: 0 },
    { layer: 'parking', opacity: 1 },
    { layer: 'osakametro', opacity: 0 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map1-11',
  alignment: 'center',
  hidden: false,
  image: 'transport.png',
  description: '<a href="https://www.expo2025.or.jp/en/news/news-20250707-01/" target="_blank" style="color:white; font-weight:bold">According to the Expo Association</a>, about 73% of visitors arrive by subway. Roughly 8% use the Sakurajima Shuttle Bus, 6.5% come via parking lot shuttles, and around 2% rely on other shuttle routes or taxis. Just 1% travel by long-distance bus. Outside of group tours, every other mode barely registers.',
  location: {
    center: [135.4, 34.8],
    zoom: 7.5,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    { layer: 'expo', opacity: 0.8 },
    { layer: 'osakabus', opacity: 1 },
    { layer: 'longbus', opacity: 1 },
    { layer: 'parking', opacity: 0 },
    { layer: 'osakametro', opacity: 1 },
    { layer: 'passengers', opacity: 0 },
    { layer: 'Near_Yumeshima', opacity: 0 },
    { layer: 'usj', opacity: 0 },
    { layer: 'mgmosaka', opacity: 0 },
    { layer: 'usjhotel', opacity: 0 },
    { layer: 'capa', opacity: 0 },
    { layer: 'usjparking', opacity: 0 }
  ],
  onChapterExit: []
},
{
  id: 'map2-1',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'More than 70% of Expo visitors rely on the subway—amounting to an average of 100 to 120 thousand people each day. At the center of this flow is Yumeshima Station, a key chokepoint in the Expo’s congestion puzzle.',
  location: {
    center: [135.419, 34.6416],
    zoom: 11,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 1},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map2-2',
  alignment: 'center',
  title: 'Yumeshima (expo) station',
  hidden: false,
  image: 'Yumeshima.png',
  rotateAnimation: true,
  description: 'Yumeshima Station was built specifically for the Expo. As the terminus of the extended subway line, trains run in only one direction. The station features a single island platform, which means all passengers gather in one central space while waiting. Despite its wide layout, it has just one ticket gate and one exit. Is that really enough to handle 100 to 120 thousand people a day—sometimes even more?',
  location: {
    center: [135.3896, 34.6517],
    zoom: 15.0,
    pitch: 45,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.2},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 1},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map2-3',
  alignment: 'center',
  title: 'Visualization of Ridership',
  hidden: false,
  image: '',
  description: 'This map visualizes the average daily ridership across all 107 subway stations in Osaka (<a href="https://www.osakametro.co.jp/company/library/100331_research/20241112_subway_nt.pdf" target="_blank" style="color:white; font-weight:bold">source</a>). The larger the red circle, the higher the traffic. At the top is Umeda Station—Osaka’s central hub—with around 420 thousand daily passengers, followed by Namba (Downtown area) with 350 thousand and Tennoji with 240 thousand. The median across the network is just 21,759. Yumeshima Station isn’t yet reflected in the data, but with an estimated 100 to 120 thousand riders per day, it would rank ninth overall—just behind Shin-Osaka, the city’s bullet train terminal.',
  location: {
    center: [135.5, 34.63],
    zoom: 11.3,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 1},
    {layer: 'passengers', opacity: 0.6},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map2-4',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'So how does Yumeshima Station compare to other stations with similar ridership? Let’s look at two with comparable daily figures: <span style="color:yellow; font-weight:bold">Nishi-Umeda</span>, with 108 thousand passengers, and <span style="color:yellow; font-weight:bold">Sakaisuji-Honmachi</span>, with about 107 thousand.',
  location: {
    center: [135.45, 34.672],
    zoom: 10,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0.6},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map2-5',
  alignment: 'center',
  title: 'Nishi-Umeda station',
  hidden: false,
  image: 'Nishi-Umeda.png',
  rotateAnimation: true,
  description: 'Nishi-Umeda is one of the key stations in Osaka’s central Umeda district, connected underground to several major lines. Like Yumeshima, it serves as a terminus. It also uses an island platform layout—but unlike Yumeshima, it has three ticket gates and numerous exits. In that sense, it’s a stark contrast to Yumeshima Station, which has just one of each.',
  location: {
    center: [135.4957, 34.6996],
    zoom: 15.0,
    pitch: 45,
    bearing: 0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0.6},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map2-6',
  alignment: 'center',
  title: 'Sakaisuji -Hommachi station',
  hidden: false,
  image: 'Sakaisuji-Hommachi.png',
  rotateAnimation: true,
  description: 'Sakaisuji-Honmachi is a transfer station where two subway lines intersect in a cross pattern. Located in a major business district, it sees heavier traffic during daytime hours. With two lines running through it, the station is equipped with seven ticket gates and seventeen exits. By comparison, Yumeshima Station—with just one gate and one exit—seems ill-equipped to handle more than 100 thousand passengers a day.',
  location: {
    center: [135.5069, 34.6819],
    zoom: 15.0,
    pitch: 45,
    bearing: 90
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0.6},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map2-7',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'In addition, all of that traffic—buses, taxis, and shuttles—funnels through just one bridge and one tunnel, creating a perfect recipe for gridlock. During the massive crowd surge on June 28, the congestion choked shuttle bus operations so severely that by late at night, more than 100 people were still stranded on the island.',
  location: {
    center: [135.39, 34.648],
    zoom: 12,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 1},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map3-1',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'But is transportation alone to blame for the Expo’s exit chaos? Just across the water lies an intriguing comparison: <span style="color:yellow; font-weight:bold">Universal Studios Japan(USJ)</span>, the third most visited theme park in the world.',
  location: {
    center: [135.4119,34.6573],
    zoom: 11.5,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 1},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map3-2',
  alignment: 'center',
  title: 'Universal Studios Japan(USJ)',
  hidden: false,
  image: 'usj.png',
  description: '<a href="https://www.usj.co.jp/web/en/us" target="_blank" style="color:white; font-weight:bold">USJ</a> draws more than 16 million visitors annually, making it the third most visited theme park in the world—trailing only Magic Kingdom(FL) and Disneyland(CA) in the U.S. It stands as one of Asia’s premier entertainment destinations.',
  location: {
    center: [135.4319, 34.6665],
    zoom: 14.2,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0.5},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map3-3',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'The Expo site sits just next door to USJ, and the Sakurajima Shuttle Bus—the most frequently operated route—stops near the theme park',
  location: {
    center: [135.4079, 34.6591],
    zoom: 12,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 1},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0.5},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map3-4',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'In truth, USJ isn’t particularly well connected either. It has only one directly linked train station and, like the Expo, is located in Osaka’s bay area. But there are three key differences: hotel infrastructure, crowd size limits, and ease of car access.',
  location: {
    center: [135.390, 34.648],
    zoom: 12,
    pitch: 45,
    bearing: 90
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 1},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0.5},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map3-5',
  alignment: 'center',
  title: 'MGM osaka',
  hidden: false,
  image: 'mgmosaka.jpg',
  description: 'Yumeshima, the man-made island hosting the Expo, <span style="color:yellow; font-weight:bold">has no hotels—none at all</span>. The area was a blank slate before the event, and with the Expo running for just six months, building new accommodations simply didn’t make economic sense. At the same time, construction is underway (Black area) on <a href="https://mgmosaka.co.jp/en/" target="_blank" style="color:white; font-weight:bold">MGM Osaka</a>, an integrated resort complex backed by the same MGM brand that helped shape Las Vegas. That project is absorbing nearly all future hotel demand for the area.\nThis means that every single Expo visitor must exit the island at the end of the day—by bridge or by tunnel. And that, inevitably, is where the traffic problems begin. (Photo: MGM Osaka)',
  location: {
    center: [135.39, 34.648],
    zoom: 13,
    pitch: 0.0,
    bearing: 180
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 1},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map3-6',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'By contrast, the area around USJ is lined with nine large-scale hotels, all within walking distance. Together, they offer more than 4,000 rooms—enough to accommodate over 10,000 guests per night—effectively functioning as a full-scale resort district. Because the Sakurajima Shuttle Bus stop for the Expo is located near this cluster, the area has, in practice, become one of the main lodging hubs for Expo visitors.',
  location: {
    center: [135.4357, 34.6670],
    zoom: 15,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0},
    {layer: 'osakabus', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0.5},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 1},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map3-7',
  alignment: 'center',
  title:'Comparison of Peak Attendance Figures',
  hidden: false,
  image: '',
  description: 'USJ imposes entry limits once attendance exceeds 60,000, effectively capping daily crowds at around 60 to 70 thousand—even on the busiest days. The Expo, by contrast, has seen daily attendance surge past 200 thousand, more than three times that of a packed day at USJ. (Here, the red circles represent peak visitor volumes.)\nThis alone marks a significant difference in how the two venues experience and manage crowd density.',
  location: {
    center: [135.4079, 34.6591],
    zoom: 12,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 1},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0.7},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
},
{
  id: 'map3-8',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'USJ also has a directly connected parking facility with space (Blue Area) for about 2,800 vehicles (shown in yellow). On top of that, it features a dedicated expressway interchange (indicated in green), making car access remarkably easy.',
  location: {
    center: [135.4319, 34.6665],
    zoom: 14.2,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0.5},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 1}
  ],
  onChapterExit: []
},
{
  id: 'map3-9',
  alignment: 'center',
  hidden: false,
  image: '',
  description: 'The difference is striking: just look at the distance between the Expo’s parking lots (in Orange) and the venue itself (in red).',
  location: {
    center: [135.419, 34.6416],
    zoom: 11,
    pitch: 0.0,
    bearing: 0.0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'sakurashuttle', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 1},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 1},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 1}
  ],
  onChapterExit: []
},
{
  id: 'map3-10',
  alignment: 'center',
  title:'Conclusion',
  hidden: false,
  image: '',
  description: 'As it happens, the Expo site sits in my hometown of Osaka.<br>When the city won the bid, I was genuinely excited—who wouldn’t be?<br><br>This is a place full of character, with neighborhoods that buzz, food that hums, and people who know how to laugh even in a traffic jam.<br><br>Yes, I’ve spent most of this piece dissecting what happens when 200,000 people try to leave an artificial island at the same time.<br><br>But here’s the flip side: if you know what to expect, you can plan around it. Avoid weekends. Skip the fireworks. And above all, don’t forget to book your shuttle and pavilion slots ahead of time—your patience will thank you.<br><br>So go ahead—come for the pavilions, stay for the takoyaki.<br><span style="color:yellow; font-weight:bold">Osaka will be waiting. Just maybe not with open roads.</span>',
  location: {
    center: [135.390, 34.648],
                zoom: 13,
                pitch: 0,
                bearing: 0
  },
  mapAnimation: 'flyTo',
  callback: '',
  onChapterEnter: [
    {layer: 'expo', opacity: 0.8},
    {layer: 'osakabus', opacity: 0},
    {layer: 'longbus', opacity: 0},
    {layer: 'parking', opacity: 0},
    {layer: 'osakametro', opacity: 0},
    {layer: 'passengers', opacity: 0},
    {layer: 'Near_Yumeshima', opacity: 0},
    {layer: 'usj', opacity: 0},
    {layer: 'mgmosaka', opacity: 0},
    {layer: 'usjhotel', opacity: 0},
    {layer: 'capa', opacity: 0},
    {layer: 'usjparking', opacity: 0}
  ],
  onChapterExit: []
}



        
    ]
};
