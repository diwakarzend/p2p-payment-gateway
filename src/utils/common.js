import axios from "axios";

export const getStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeStorage = (item) => {
  localStorage.removeItem(item);
};

export const setStorage = (key, state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem(key, serializeState);
  } catch (error) {
    console.error("Err: Get Local Storage:", error);
  }
};

export function getUser() {
  const authToken = getStorage("authToken");
  return authToken;
}

export function hasProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isEmpty(obj) {
  let isEmpty = false;
  const type = typeof obj;
  isEmpty = isEmpty || !obj;
  isEmpty = isEmpty || type === "undefined"; // if it is undefined
  isEmpty = isEmpty || obj === null; // if it is null
  isEmpty = isEmpty || (type === "string" && obj.trim() === ""); // if the string is empty or only have spaces
  isEmpty = isEmpty || obj === false || obj === 0; // if boolean value returns false
  isEmpty = isEmpty || (Array.isArray(obj) && obj.length === 0); // if array is empty
  isEmpty = isEmpty || (type === "object" && Object.keys(obj).length === 0); // if object is empty
  return isEmpty;
}

export const getSelectOptions = (objList, id = "id", name = "name") => {
  const options = [];
  if (isEmpty(objList)) {
    return options;
  }
  if (Array.isArray(objList)) {
    objList.forEach((obj) => {
      const optValue = obj[id];
      const optName = obj[name];
      options.push({ label: optName, value: optValue });
    });
  } else {
    Object.keys(objList).forEach((key) => {
      const optValue = objList[key][id] || key;
      const optName = objList[key][name] || objList[key];
      options.push({ label: optName, value: optValue });
    });
  }

  return options;
};

export const deepClone = (obj) => {
  if (isEmpty(obj)) return null;
  return JSON.parse(JSON.stringify(obj));
};

export const getParams = (formArray) => {
  const params = {};
  formArray.forEach((control) => {
    params[control.name] = control.value;
  });
  return params;
};

export const getOptionFromKey = (key, textToReplace) => {
  if (isEmpty(key)) return null;
  let _label = key.replace(eval("/" + textToReplace + "/g"), "");
  _label = _label.split("_").join(" ").toLowerCase();
  return { value: key, label: _label };
};

export const setSelectedOptions = (key, options) => {
  let selected = options.filter((option) => option.value === key)[0];
  return selected;
};

export const userLogout = () => {
  removeStorage("authToken");
  removeStorage("loggedin");
};

export const paginator = (items, current_page, per_page_items) => {
  let page = current_page || 1,
    per_page = per_page_items || 10,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
};

export function currencyFormat(
  num,
  minimumFractionDigits = 0,
  maximumFractionDigits = 0
) {
  if (!Number.isFinite(Number(num)) || num === null || isEmpty(num))
    return "₹0";
  return new Intl.NumberFormat("en-IN", {
    currency: "INR",
    style: "currency",
    useGrouping: true,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(num);
}

export function getQueryParams(query) {
  const queryArray = query.split("?")[1].split("&");
  const queryParams = {};
  for (let i = 0; i < queryArray.length; i++) {
    const [key, val] = queryArray[i].split("=");
    queryParams[key] = val || true;
  }
  return queryParams;
}

export function saveAuthToken(item, value) {
  sessionStorage.setItem(item, `Bearer ${value}`);
  setAuthorizationToken(value);
}

export function getAuthToken(type) {
  return type
    ? sessionStorage.getItem(type)
    : sessionStorage.getItem("Authorization");
}

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["token"] = token;
  } else {
    delete axios.defaults.headers.common["token"];
  }
}

export function isAuthenticated(response) {
  if (response && response.data) {
    if (response.data.id_token && response.data.api_token) {
      saveAuthToken("Authorization", response.data.id_token);
      saveAuthToken("api-Authorization", response.data.api_token);
      return true;
    }
    return false;
  } else if (!isEmpty(getAuthToken())) {
    return true;
  }
}
