const slideshow = {
  images: document.getElementsByClassName('slider-image-wrapper'),
  hideImages: function(){
    [...this.images].forEach(image => image.style.display = 'none');
  },
  addingListener: function(){
    const slideshow = document.getElementsByClassName('slideshow')[0];
    slideshow.addEventListener('click', this.arrowFunction.bind(this));
  },
  arrowFunction: function(e){
    let imageNumber = 0;
    if(e.target.id === 'rightArrow'){
      const image = this.images[imageNumber];
      image.style.display = 'block';
    }
    if(e.target.id === 'leftArrow'){
      imageNumber--;
      const image = this.images[imageNumber];
      image.style.display = 'block';
    }
  },
  testing: function(e){
    console.log(this.images);
  }
}
slideshow.hideImages();
slideshow.testing();
slideshow.addingListener();