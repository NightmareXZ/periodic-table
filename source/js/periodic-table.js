/* Função responsável por exibir os valores de um elemento químico na tela
   Recebe como parâmetros o nome do elemento, classificação, número atômico e massa */
function showInfo(elemento,classificacao,natomico,massa){
    var message = 'Elemento: '+elemento+'\n'
    +'Classificação: '+classificacao+'\n'
    +'Número atômico: '+natomico+'\n'
    +'Massa: '+massa;
    swal(elemento,message);
}
//Função que exibe o campo onde se encontra a série dos lantanídeos
function showLantanideos(){
    swal('Grupo dos lantanídeos','Série dos lantanídeos');
}

//Função que exibe o campo onde se encontra a série dos actinídeos
function showActinideos(){
    swal('Grupo dos actinídeos','Série dos actinídeos');
}
