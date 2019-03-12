
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="./img/download.png" type="image/x-icon">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <title>Random Quote Machine</title>
</head>
<body>
  <div id="root"></div>
  
 <script type="text/babel"> 
    
    class App extends React.Component {
      constructor (props) {
        super (props);
        this.state = {
          text: [
          "It always seems impossible until it's done",
          "The secret of getting ahead is getting started",
          "Keep your face always toward the sunshine - and shadows will fall behind you",
          "Nothing is impossible, the word itself says \"I'm possible\"!",
          "Start where you are. Use what you have. Do what you can",
          "We are all failures. At least the best of us are",
          "A person who never made a mistake never tried anything new",
          "There are no short cuts to any place worth going",
          "Find what you love and let it kill you",
          "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time",
          "Start where you are. Use what you have. Do what you can",
          "There is nothing permanent except change",
          "Never memorize something that you can look up",
          "If you want happiness for an hour – take a nap. If you want happiness for a day – go fishing. If you want happiness for a year – inherit a fortune. If you want happiness for a life time – help someone else",
          "Education: the path from cocky ignorance to miserable uncertainty"
          ],
          author: [
          'Nelson Mandela',
          'Mark Twain',
          'Walt Whitman',
          'Audrey Hepburn',
          'Arthur Ashe',
          'J.M. Barrie',
          'Albert Einstein',
          'Beverly Sills',
          'Charles Bukowski',
          'Thomas A. Edison',
          'Arthur Ashe',
          'Heraclitus',
          'Albert Einstein',
          'Chinese proverb',
          'Mark Twain'
          ],
          colorName: [
          'rebeccapurple',
          'royalblue',
          'firebrick',
          'forestgreen',
          'fuchsia',
          'aqua',
          'salmon',
          'slateblue',
          'goldenrod',
          'teal',
          'purple',
          'palegreen',
          'navy',
          'gray',
          'magenta'
          ],
          index: Math.floor(Math.random()*15)
        }
        this.handleChange = this.handleChange.bind(this);
      };
      
      handleChange () {
        this.setState({
          index: Math.floor(Math.random()*15)
        })
      }
      render () {
        const index = this.state.index;
        const random = Math.floor(Math.random()*15)
        const color = this.state.colorName;
        document.body.style.backgroundColor = color[random]
        document.body.style.transition = '.5s'
        const colors = {
          color: color[random],
          transition: '.5s'
        }
        const backgroundColor = {
          backgroundColor: color[random]
        }
        return (
          <div id="quote-box">
            <div style={colors} id="text">
              <i className="fa fa-quote-left"></i>
              &nbsp;
              {this.state.text[index]}.
            </div>
            <div style={colors} id="author">- {this.state.author[index]}</div>
            <div id="buttons">
            <a style={backgroundColor} className="button" id="tweet-quote" target="_blank" href="https://www.twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
            <a style={backgroundColor} className="button" id="fb-quote" target="_blank" href="https://www.facebook.com">
              <i class="fab fa-facebook-f"></i>
            </a>
            <button style={backgroundColor} onClick={this.handleChange} className="button" id="new-quote">New quote</button>
            </div>
          </div>
        )
      }
    }
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )
  </script>
  
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</body>
</html>