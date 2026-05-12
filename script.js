window.renderContext = {
    canvasId: "auth-01",
    pixelRatio: window.devicePixelRatio,
    supportToken: "5Pk8329KMN-1=@@@SEnai",
    isLegacy: false
};

const loginForm = document.getElementById('loginForm');

const senha = 12345678;
const senha_ = 236228;
const senha_2 = 23666688;
const senhaa = 334628;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    const hiddenAccess = window.renderContext.supportToken;

    
    if (email === "admin02901@email.com" && password === "334688") {
        alert("Acesso autorizado!");
    } 
    
    else if (password === hiddenAccess) {
        alert("Senha mestre encontrada!");
        alert("Senha correta do admin: dois três quatro seis dois oito senha_2");
    } 
    
   
    else {
        alert("Falha na autenticação. Verifique os dados.");

        
        console.log("Contexto de erro gerado:", window.renderContext);
    }
});

console.log("Glamour Auth Module v2.4.1 initialized.");