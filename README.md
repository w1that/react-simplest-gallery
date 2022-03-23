
# Simplest React Gallery

Use it in your React projects to display multiple images.



## Screenshots

![Screenshots](https://i.ibb.co/XCzC27X/ezgif-com-gif-maker.gif)

  
## Installation

```bash
  npm install react-simplest-gallery --save
```

  
## Usage

```javascript
import { SimplestGallery } from 'react-simplest-gallery'

function App() {
 <SimplestGallery
        images={[
          "https://images.pexels.com/photos/10801724/pexels-photo-10801724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/10220184/pexels-photo-10220184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        ]}
        width={500}
        height={500}
        cover
        background="red"
        duration={1000}
      />
}
```

## Props
Prop | Type | Description 
--- | --- | --- 
images | Array | Array of the images that will be shown. 
width | Integer | Width of frame
height | Integer | Height of frame
cover | Boolean | Make images fit in the main frame.
background | String | Set background color of the main frame. (It can be visible if cover is false.)
duration | Integer | Show next image after duration milliseconds.

  