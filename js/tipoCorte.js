function redirectToForm(link) {
    // Pega o valor do atributo data-corte
    const tipoCorte = link.getAttribute('data-corte');

    // Cria uma URL para o formulário de agendamento com o tipo de corte como parâmetro
    const url = new URL('agendamento.html', window.location.origin);
    url.searchParams.append('tipo-corte', tipoCorte);

    // Redireciona para a URL
    window.location.href = url.toString();
}