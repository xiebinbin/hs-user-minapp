
//根据身份证号自动生成性别、出生日期和年龄
export const idCardHandle = (cardNo: string): {
  gender: number,
  age: number,
  birthday: string
} | null => {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  if (reg.test(cardNo)) { // 身份证号码是否合法
    var org_birthday = cardNo.substring(6, 14);
    var org_gender = cardNo.substring(16, 17);
    var sex = parseInt(org_gender) % 2 == 1 ? 1 : 0;
    var birthday = org_birthday.substring(0, 4) + "-" + org_birthday.substring(4, 6) + "-" + org_birthday.substring(6, 8);
    var birthdays = new Date(birthday.replace(/-/g, "/"));
    let d = new Date();
    let age = d.getFullYear() - birthdays.getFullYear() - (d.getMonth() < birthdays.getMonth() || (d.getMonth() == birthdays.getMonth() && d.getDate() < birthdays.getDate()) ? 1 : 0);
    return {
      gender: sex,
      age,
      birthday
    }
  } else {
    return null
  }
}
