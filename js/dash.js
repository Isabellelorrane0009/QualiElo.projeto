 // Seleciona todos os links do menu
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
      link.addEventListener('click', function () {
        // Remove a classe 'active' do item que estava selecionado antes
        document.querySelector('.nav-link.active')?.classList.remove('active');

        // Adiciona a classe 'active' apenas no item que acabou de ser clicado
        this.classList.add('active');
      });
    });

    