function redirectToSite() {
    const url = document.querySelector('#urlInput').value;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      window.location.href = url;
    } else {
      window.location.href = "http://" + url;
    }
  }
  
  const button = document.querySelector('#redirectButton');
  button.addEventListener('click', redirectToSite);