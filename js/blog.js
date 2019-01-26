// create a new class in which you could create a new dom element with all of the required info for a post so that way they could have consistent formatting
class Post{
  constructor(title, content, dateCreated){
    this.title = title;
    this.content = content;
    this.dateCreated = dateCreated;
    this.constructTitle = function(){
      const heading = document.createElement('h1');
      heading.className = 'post-title-preview';
      const headtext = document.createTextNode(this.title);
      heading.appendChild(headtext);
      return heading;
    },
    this.constructBody = function(){
      const paragraph = document.createElement('p');
      paragraph.className = 'post-body-preview';
      const text = document.createTextNode(this.content);
      paragraph.appendChild(text);
      return paragraph;
    },
    this.constructNode = function(){
      const heading = this.constructTitle();
      const body = this.constructBody();
      const div = document.createElement('div');
      div.className = 'individual-blog-post';
      div.appendChild(heading);
      div.appendChild(body);
      return div;
    },
    this.checkPlacement = function(){
      const blogs = document.getElementsByClassName('individual-blog-post');
      const node = this.constructNode()
      const blogSection = document.getElementsByClassName('blogs-list')[0];
      if(blogs.length === 0){
        blogSection.appendChild(node);
      }  else if (blogs.length >= 1){
        const latestPost = blogs[0] ;
        blogSection.insertBefore(node, latestPost);
      } 
    }
    this.mountNode = function(){
      this.checkPlacement();      
    }
  }
}

const firstPost = new Post(
  "Object Oriented?",
  `I watched a video by THE TechLead on YouTube and he mentioned a lot of things about object oriented programming.
  
  I had no idea of anything he was saying but I do remember that when looking at job posts that most employers
  wanted someone that knew how to work with object oriented programming.
  
  This is my way of practicing it.`,
  'Janurary 25, 2019'
);
firstPost.mountNode();
const secondPost = new Post(
  "Test after all functions were made",
  `I made the functions in the object to make a new post and to mount it.
  This is supposed to test whether or not my function to mount works.
  I made a function that'll insert a blog post correctly.`,
  "January 25, 2019"
);
secondPost.mountNode();
const thirdPost = new Post(
  "Third post",
  `If this works now then I have to learn how to preserve all of the formatting.
  
  Or maybe I could learn how to automatically generate the date of all the blogs?
   
  Lit.`,
  "January 25, 2019"
);
thirdPost.mountNode();
const fourthPost = new Post(
  "Time to try and give only a preview",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet tenetur aliquid odit. Quaerat nostrum facere amet cum architecto numquam velit voluptatibus praesentium beatae in eligendi reprehenderit, ex laboriosam tenetur dolor nihil. Impedit quasi ex incidunt ea nisi mollitia et nulla rem provident magnam perspiciatis eum assumenda consequatur, neque ipsam ut quidem numquam porro quo. Corporis quisquam ex adipisci ut cupiditate similique aut repellat vel aliquid, et sapiente praesentium veritatis consequuntur architecto nisi accusantium, saepe voluptas labore voluptatem modi dignissimos beatae fugit quasi omnis. Quis, et reiciendis. Repellendus nisi, aperiam, expedita eum neque officiis eligendi perferendis cupiditate facere, repellat exercitationem nemo? Dolorum, fugiat? Ut hic inventore voluptatibus dicta culpa itaque quae nisi saepe aliquam, praesentium quis alias iste iure omnis, dolores error necessitatibus placeat molestiae in, quam eveniet at! Rerum, veniam? Omnis atque dolore minima autem inventore doloribus ad tempore, iusto facere optio dolores hic, tempora minus ex a quam qui nisi iste facilis veritatis pariatur voluptates? Laborum voluptates velit, ipsa porro dignissimos architecto quae fuga sequi exercitationem nemo laboriosam sit mollitia deserunt magnam facere odit. Quo consequatur minus facere, quaerat pariatur ipsa reiciendis! Perferendis ad inventore alias odio voluptatum rem, aspernatur assumenda saepe fugit totam esse, corrupti quia porro? `,
  "January 26, 2019"
);
fourthPost.mountNode();