(() => {
  const infos1 = document.querySelectorAll('span[class="clConteudoDados"]');
  const infos2 = document.querySelectorAll('span[class="clConteudoComp"]');
  
  let [tagBHora, tagBData] = infos2[0].querySelectorAll('b');
  const hora = tagBHora.innerText;
  const data = tagBData.innerText;

  const ano = Number(data.substr(6, 4));
  const mes = Number(data.substr(3, 2));
  const dia = Number(data.substr(0, 2));
  
  const hor = Number(hora.substr(0, 2));
  const min = Number(hora.substr(3, 2));
  const seg = Number(hora.substr(6, 4));

  return {
    cpf: infos1[0].querySelector('b').innerText,
    nome: infos1[1].querySelector('b').innerText,
    dataNascimento: infos1[2].querySelector('b').innerText,
    situacaoCadastral: infos1[3].querySelector('b').innerText,
    dataInscricao: infos1[4].querySelector('b').innerText,
    digitoVerificador: infos1[5].querySelector('b').innerText,
    emissaoComprovante: new Date(ano, mes, dia, hor, min, seg),
    comprovante: infos2[1].querySelector('b').innerText,
  }
})();