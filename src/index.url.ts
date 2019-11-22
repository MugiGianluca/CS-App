export const Url = 'https://demo.farasi.com.gt/ROOT/';

export const Apis = {
    login: '/API/API_login.php?request=login',
    getPlayers: '/API/API_jugador.php?request=get&codigo=',
    getPosicion: '/API/API_util.php?request=posiciones',
    getTeams: '/API/API_util.php?request=equipos',

    postSavePlayers: '/API/API_jugador.php?request=grabar&nombre=',
    postModPlayers: '/API/API_jugador.php?request=modificar&codigo=',
    postSituacion:'/API/API_jugador.php?request=situacion&codigo='
};
