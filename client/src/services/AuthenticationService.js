import Api from '@/services/Api'
//Deze service zorgt ervoor dat de register method wordt opgeroepen
//en alles wat erin gepost wort kan worden ingezien
export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}
