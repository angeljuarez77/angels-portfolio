const slideshow = {
  images: document.getElementsByClassName('slider-image-wrapper'),
  hideImages: function(){
    [...this.images].forEach(image => image.style.display = 'none');
  },
  addingListener: function(){
    const slideshow = document.getElementsByClassName('slideshow')[0];
    slideshow.addEventListener('click', this.sliderFunction);
  },
  sliderFunction: function(e){
     let imageNumber = 0;
    if(e.target.id === 'rightArrow'){
      imageNumber++;
      const image = this.images[imageNumber];
      image.style.display = 'block';
    }
    if(e.target.id === 'leftArrow'){
      imageNumber--;
      const image = this.images[imageNumber];
      image.style.display = 'block';
    }
  }
}
slideshow.hideImages();
slideshow.addingListener();