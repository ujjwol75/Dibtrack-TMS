import moment from "moment";

export function formatedDate(date) {
  return moment(date).format("DD-MM-YYYY");
}
