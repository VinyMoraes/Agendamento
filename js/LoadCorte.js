document.addEventListener('DOMContentLoaded', function() {
    // Parâmetros da URL para obter o tipo de corte
    const urlParams = new URLSearchParams(window.location.search);
    const tipoCorte = urlParams.get('tipo-corte');

    if (tipoCorte) {
        document.getElementById('tipo-corte').value = tipoCorte;
    }

    // Evento de envio do formulário
    document.querySelector('.form-agendamento').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        const horaSelecionada = document.getElementById('hora').value;
        const dataSelecionada = document.getElementById('data').value;
        const nome = document.getElementById('nome').value;
        const tipoCorte = document.getElementById('tipo-corte').value;

        // Verifica se a data e hora foram selecionadas
        if (dataSelecionada && horaSelecionada) {
            const dataHoraSelecionada = `${dataSelecionada}T${horaSelecionada}`;

            // Verifica se o horário está indisponível
            // Supondo que você tenha uma lista de horários indisponíveis
            const horariosIndisponiveis = []; // Defina sua lista de horários indisponíveis aqui
            if (horariosIndisponiveis.includes(dataHoraSelecionada)) {
                alert('O horário selecionado está indisponível. Por favor, escolha outro horário.');
                return;
            }

            // Cria a mensagem para enviar pelo WhatsApp
            const mensagem = `Agendamento Confirmado!\n\nTipo de Corte: ${tipoCorte}\nNome: ${nome}\nData: ${dataSelecionada}\nHora: ${horaSelecionada}`;
            const numeroWhatsApp = '5511974023353'; // Substitua pelo seu número de WhatsApp com o código do país
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

            // Redireciona para o link do WhatsApp
            window.location.href = urlWhatsApp;
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});
