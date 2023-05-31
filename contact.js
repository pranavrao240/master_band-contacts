
const form = document.querySelector('form');
      const subjectInput = document.querySelector('#subject');
      const messageInput = document.querySelector('#message');
      
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        const subject = encodeURIComponent(subjectInput.value);
        const message = encodeURIComponent(messageInput.value);
        const mailtoLink = `mailto:mayur001149@gmail.com?subject=${subject}&body=${message}`;

        window.location.href = mailtoLink;
      });

