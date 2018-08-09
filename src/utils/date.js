import * as moment from 'moment'

export default timestamp => {
  const monthsFromNow = moment().diff(timestamp, 'months')

  /**
   * Returns relative time (a minute ago, in 9 hours, 6 days ago)
   * if the date is less than one month
   */
  return monthsFromNow
    ? moment(timestamp).format('ll') // Aug 9, 2018
    : moment(timestamp).fromNow() // 14 minutes ago
}
