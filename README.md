# Project 02  
This is Project-02 for the Lede Program.  
**Link to the project:** https://kenshokuremoto.github.io/Project2/

## Title  
**At the Osaka Expo, Getting In Is Easy. Getting Out Is Not.**  
*A Visual Breakdown of How Fragile Transit and Island Geography Create a Perfect Storm*

## Aim  
This project explores the transportation issues surrounding the ongoing Expo in Osaka, Japan.  
News reports have highlighted severe congestion when visitors try to leave the venue.  
Through an interactive, scroll-based story, I aim to explain **why** this happens—  
while also developing my skills in **Mapbox** and **Scrollama**.


## Findings  
I visualized and analyzed why congestion occurs during peak times when as many as 200,000 people visit the Expo in a single day. The key reason: the venue is located on a man-made island with only one bridge and one tunnel available, severely limiting transit capacity.

To highlight this, I compared the Expo site with a nearby facility that shares similar geography and visitor scale: **Universal Studios Japan (USJ)**. By contrasting the availability of hotels, parking accessibility, and capacity limits, I identified the unique challenges that make Expo-related congestion much worse.

## Data Collection Process  

Data was primarily collected from official websites:

- **Expo 2025:** [https://www.expo2025.or.jp/en/](https://www.expo2025.or.jp/en/)  
- **Osaka Metro:** [https://www.osakametro.co.jp/en/](https://www.osakametro.co.jp/en/)  
- **USJ:** [https://www.usj.co.jp/web/en/us](https://www.usj.co.jp/web/en/us)

### GeoJSON Data Creation:

1. **Geography & Sites**  
   Since open data was not available for the Expo site, USJ, and nearby parking lots, I manually drew features using [geojson.io](https://geojson.io/) and exported them as GeoJSON files to upload into Mapbox.

2. **Transit Lines**  
   Subway data was downloaded from Japan's *National Land Numerical Information* open data site.  
   The newly constructed Yumeshima line wasn’t included, so I drew that manually in geojson.io as well.

3. **Bus Routes**  
   Routes were created using **Google My Maps** by setting start and end points.  
   I exported the paths as KML files, then uploaded and adjusted them in geojson.io before exporting to GeoJSON format.


## Data Analysis Process  

### 1. Mapbox  
I built 13 custom layers based on a plot I outlined in Excel.  
Although the free version of Mapbox allows only 15 layers per style, I originally divided them across three separate styles.  
However, switching styles mid-scroll was too cumbersome, so I ultimately consolidated all layers into one map style.

👉 [View Mapbox Style](https://api.mapbox.com/styles/v1/kensho0928/cmd3wscnd001p01s87abnbela.html?title=view&access_token=pk.eyJ1Ijoia2Vuc2hvMDkyOCIsImEiOiJjbWMyOTdjMHkwNjBtMmlwcjlmNmJ6YThtIn0.x_6L-WVksTclVmhmlaXAkg&zoomwheel=true&fresh=true#2/37.75/-92.25)

### 2. Page Development  
I used the template introduced by Aaron in class:  
[https://github.com/mapbox/storytelling](https://github.com/mapbox/storytelling)  

The template was excellent out of the box, so I only modified the `config.js` and left the `index.html` untouched.


## New Skills and Growth  
Through this project, I significantly improved my abilities in:

- Finding and cleaning open data  
- Drawing and editing custom GeoJSON files  
- Using Mapbox Studio effectively  
- Implementing scroll-driven storytelling with JavaScript (Scrollama)

Since the main goal of Project 2 was to deepen my mapping skills, I feel this project was a great success.


## Future Work  
I do not plan to further pursue this topic.  
The primary goal was not to report on the Expo itself, but to **build my technical skills**, which I’ve accomplished.

For the final project, I plan to create something focused on **elections**—stay tuned.
