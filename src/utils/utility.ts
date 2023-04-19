export const readFileBase64 = async (file: any) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
};

const objectToFormData = (formData:any, data:any, key:any) => {
  if ((typeof data === "object" && data !== null) || Array.isArray(data)) {
    for (let i in data) {
      if (
        (typeof data[i] === "object" && data[i] !== null) ||
        Array.isArray(data[i])
      ) {
        objectToFormData(formData, data[i], key + "[" + i + "]");
      } else {
        formData.append(key + "[" + i + "]", data[i]);
      }
    }
  } else {
    formData.append(key, data);
  }
};

export const createFormData = (data: any) => {
  const form = new FormData();

  for (let key in data) {
    const item = data[key];
    if (typeof item?.name === "string" && item?.type != null) {
      form.append(key, item);
    } else {
      objectToFormData(form, item, key);
    }
  }

  return form;
};
