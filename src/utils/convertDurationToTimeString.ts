export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600) // Duracao em segundos, transformando em horas e arredondando para baixo para nao ter hora quebrada
    const minutes = Math.floor((duration % 3600) / 60) // Resto da divisao de duracao dividida por 60 para transformar em minutos
    const seconds = duration % 60 // Resto da duracao em segundos
    // exemplo de resultado final: hours = 1, minutes = 21, seconds = 14 

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':') // Transformando as tres variaveis em string, se tiver apenas um digito adiciona 0 a esquerda e os separa por :

    return timeString;
}