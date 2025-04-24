// Funções principais para o site JFTV

// Função para alternar o menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Função para ativar os dropdowns na página de Ajuda
function setupFaqDropdowns() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// Função para alternar entre as abas na página de Conteúdos
function setupContentTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove a classe active de todos os botões e conteúdos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Adiciona a classe active ao botão clicado
            btn.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    toggleMobileMenu();
    
    // Verifica se estamos na página de Ajuda
    if (document.querySelector('.faq-item')) {
        setupFaqDropdowns();
    }
    
    // Verifica se estamos na página de Conteúdos
    if (document.querySelector('.tab-btn')) {
        setupContentTabs();
    }
});
