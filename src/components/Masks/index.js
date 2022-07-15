export function PhoneMask(e) {
    let value = e;
  
    value = value.replace(/\D/g, "");
    value = value
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
    return value;
  }
  
  export function CpfMask(e) {
    let value = e;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    return value;
  }


  export function dateMask(e) {
    let value = e
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");

    return value;
  }