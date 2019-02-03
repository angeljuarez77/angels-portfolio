// first tryyyyyyy! Time to start learning Object Oriented Programming
const slideshow = {
  images: document.getElementsByClassName('slider-image-wrapper'),
  hideImages: function(){
    // spread operator used because by default they are dom nodes and I had to convert them from an array of dom nodes to an iterable one
    [...this.images].forEach(image => image.style.display = 'none');
  },
  initializeSlideNum: function(){
    localStorage.setItem('slide-number', 0);
  },
  arrowFunction: function(e){
    let imageNumber = localStorage.getItem('slide-number');
    if(e.target.id === 'rightArrow'){
      imageNumber++;
      if(imageNumber > this.images.length - 1){
        imageNumber = 0;
      };
      localStorage.setItem('slide-number', imageNumber);
      const image = this.images[imageNumber];
      let previousImageNum = imageNumber - 1;
      if(imageNumber === 0){
        previousImageNum = this.images.length - 1;
      }
      const previousImage = this.images[previousImageNum];
      previousImage.style.display = 'none';
      image.style.display = 'block';
    }
    // split
    if(e.target.id === 'leftArrow'){
      imageNumber--;
      if(imageNumber < 0){
        imageNumber = this.images.length - 1;
      }
      localStorage.setItem('slide-number', imageNumber);
      const image = this.images[imageNumber];
      let previousImageNum = imageNumber + 1;
      if(previousImageNum === 4){
        previousImageNum = 0;
      }
      const previousImage = this.images[previousImageNum];
      console.log(previousImageNum);
      console.log(previousImage);
      console.log(image);
      previousImage.style.display = 'none';
      image.style.display = 'block';
    }
  },
  addingListener: function(){
    const slideshow = document.getElementsByClassName('slideshow')[0];
    slideshow.addEventListener('click', this.arrowFunction.bind(this));
  },
}
slideshow.hideImages();
slideshow.addingListener();