  function toggleMenu() {
        const nav = document.querySelector("nav");
        const hamburger = document.querySelector(".hamburger");
        nav.classList.toggle("active");
        hamburger.classList.toggle("toggle");
      }

      function mensagem (){
        const mensagem = encodeURIComponent('Olá, gostaria de mais informações!')
        window.open(`https://wa.me/5511989539307?text=${mensagem}`, '_blank')
      }