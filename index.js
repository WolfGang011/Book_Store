document.addEventListener('DOMContentLoaded', () => {
    
    const valueElm = document.querySelector('.value');
    
    
    document.addEventListener('scroll', () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        const percentage = Math.floor ((scrollTop / (scrollHeight - clientHeight)) * 100);
        valueElm.style.width = percentage + '%';
        console.log(percentage);
    })
})

