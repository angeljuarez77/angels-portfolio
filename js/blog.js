// create a new class in which you could create a new dom element with all of the required info for a post so that way they could have consistent formatting
class Post{
  constructor(title, content, dateCreated){
    this.title = title;
    this.content = content;
    this.dateCreated = dateCreated;
    this.constructTitle = function(){
      const heading = document.createElement('h1');
      const headtext = document.createTextNode(this.title);
      heading.appendChild(headtext);
      return heading;
    },
    this.constructBody = function(){
      const paragraph = document.createElement('p');
      const text = document.createTextNode(this.content);
      paragraph.appendChild(text);
      return paragraph;
    },
    this.constructNode = function(){
      const heading = this.constructTitle();
      const body = this.constructBody();
      const div = document.createElement('div');
      div.appendChild(heading);
      div.appendChild(body);
      console.log(div);
    }
  }
}
const firstPost = new Post(
  "Object Oriented?",
  `I watched a video by THE TechLead on YouTube and he mentioned a lot of things about object oriented programming.
  
  I had no idea of anything he was saying but I do remember that when looking at job posts that most employers
  wanted someone that knew how to work with object oriented programming.
  
  This is my way of practicing it.`,
  '1/25/2019'
);
firstPost.constructNode();
const listSection = document.getElementsByClassName('blogs-list')[0];
