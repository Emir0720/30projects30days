document.addEventListener('DOMContentLoaded', function () {
    const ratings = document.querySelectorAll('.rating');
    const btn = document.getElementById('send');
    const panel = document.querySelector('.panel-container');
    let selectedRating = 'Geri bildirim seçmediniz!';
  
    ratings.forEach((rating) =>
      rating.addEventListener('click', (e) => {
        removeActive();
        rating.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
      })
    );
  
    function removeActive() {
      ratings.forEach((rating) => rating.classList.remove('active'));
    }
  
    btn.addEventListener('click', () => {
      const selectedRatingElement = document.querySelector('.rating.active');
  
      if (selectedRatingElement) {
        selectedRating = selectedRatingElement.querySelector('small').innerHTML;
      }
  
      panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong> Geri bildiriminiz bizim için çok değerli. </strong>
        <br>
        <strong> Geri Bildiriminiz: ${selectedRating} </strong>
        <p> Geri bildiriminizi kendimizi geliştirmek için kullanacağız. </p> 
      `;
    });
  });
  