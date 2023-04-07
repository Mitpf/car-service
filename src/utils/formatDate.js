import moment from 'moment'

export const formatDate = (value) => {

    return moment(value).format('DD.MM.YYYY - HH:mm')
}
