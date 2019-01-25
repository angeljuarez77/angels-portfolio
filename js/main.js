// first tryyyyyyy! Time to start learning Object Oriented Programming
document.onload(() => localStorage.setItem('slide-number', 0));

const slideshow = {
  images: document.getElementsByClassName('slider-image-wrapper'),
  hideImages: function(){
    // spread operator used because by default they are dom nodes and I had to convert them from an array of dom nodes to an iterable one
    [...this.images].forEach(image => image.style.display = 'none');
  },
  addingListener: function(){
    const slideshow = document.getElementsByClassName('slideshow')[0];
    slideshow.addEventListener('click', this.arrowFunction.bind(this));
  },
  initializeSlideNum: function(){
    localStorage.setItem('slide-number', 0);
  },
  arrowFunction: function(e){
    let imageNumber = localStorage.getItem('slide-number');
    if(e.target.id === 'rightArrow'){
      imageNumber++;
      localStorage.setItem('slide-number', imageNumber);
      console.log(imageNumber);
      const image = this.images[imageNumber];
      image.style.display = 'block';
    }
    if(e.target.id === 'leftArrow'){
      imageNumber--;
      const image = this.images[imageNumber];
      image.style.display = 'block';
    }
  },
}
slideshow.hideImages();
slideshow.addingListener();