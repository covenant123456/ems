 // JavaScript to trigger file input when the custom button is clicked
 const fileInput = document.getElementById('file-input');
 const customFileInput = document.querySelector('.custom-file-input');

 customFileInput.addEventListener('click', () => {
   fileInput.click();
 });

 fileInput.addEventListener('change', () => {
   // You can access the selected file using fileInput.files
   console.log('Selected file:', fileInput.files[0]);
 });
// close notice
function closeNotice() {
    var notice = document.getElementById('notice');
    notice.style.display = 'none';
  }