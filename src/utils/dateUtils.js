import moment from 'moment'

export const formatDate = (value) => {

    return moment(value).format('YYYY-MM-DD HH:mm:ss')
}
