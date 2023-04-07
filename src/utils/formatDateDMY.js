import moment from 'moment'

export const formatDateDMY = (value) => {

    return moment(value).format('DD.MM.YYYY')
}
