// first tryyyyyyy! Time to start learning Object Oriented Programming
const slideshow = {
  images: document.getElementsByClassName('slider-image-wrapper'),
  hideImages: function(){
    // spread operator needed. from dom nodes to iterable ones
    [...this.images].forEach(image => image.style.display = 'none');
  },
  initializeSlideNum: function(){
    localStorage.setItem('slide-number', 0);
  },
  rightArrow: function(){
    let imageNumber = localStorage.getItem('slide-number');
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
  },
  leftArrow: function(){
    let imageNumber = localStorage.getItem('slide-number');
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
      previousImage.style.display = 'none';
      image.style.display = 'block';
  },
  arrowFunction: function(e){
    if(e.target.id === 'rightArrow'){
      this.rightArrow(e);
    }
    if(e.target.id === 'leftArrow'){
      this.leftArrow();
    }
  },
  addingListener: function(){
    const slideshow = document.getElementsByClassName('slideshow')[0];
    slideshow.addEventListener('click', this.arrowFunction.bind(this));
  },
  showFirst: function(){
    this.images[localStorage.getItem('slide-number')].style.display = 'block';
  },
  activate: function(){
    this.hideImages();
    this.initializeSlideNum();
    this.showFirst();
    this.addingListener();
  }
}
slideshow.activate();
