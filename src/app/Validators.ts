import i18next from 'i18next';

function formatThousand(value: any) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * @desc Required
 * @param {any} value
 * @return {string | undefined}
 */
export const required = (msg?: string) => {
  return (value: any, _data: any, label: string): string | undefined => {
    const error: string =
      msg ||
      i18next?.t(`translation:${msg || 'validationRequired'}`, { label });

    return value && value.toString().trim() ? undefined : error;
  };
};

/**
 * @desc Email
 * @param {string} value
 * @return {string | undefined}
 */
export function email(msg?: string) {
  return (value: any, _data: any, label: string): string | undefined => {
    const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailRegex.test(String(value));
    const error: string =
      msg || i18next?.t(`translation:${msg || 'validationEmail'}`, { label });
    return isValidEmail ? undefined : error;
  };
}

/**
 * @desc Password
 * @param {string} value
 * @return {string | undefined}
 */
export function password(msg?: string) {
  return (value: any, _data: any, label: string): string | undefined => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@%+!#$&*)/(^?_\\-]).{8,}$/g;
    const isValid = regex.test(String(value));
    const error: string =
      msg || i18next.t(`translation:${msg || 'validationPassword'}`, { label });
    return isValid ? undefined : error;
  };
}

/**
 * @desc Validation URL
 * @param {string} value
 * @return {string | undefined}
 */
export function url(msg?: string) {
  return (value: any, _data: any, label: string): string | undefined => {
    const regex =
      // eslint-disable-next-line no-useless-escape
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const isValidURL = value.match(regex);
    const error: string =
      msg || i18next.t(`translation:${msg || 'validationUrl'}`, { label });
    return isValidURL ? undefined : error;
  };
}

/**
 * @desc Email
 * @param {string} value
 * @return {string | undefined}
 */
export function ip(msg?: string) {
  return (value: any, _data: any, label: string): string | undefined => {
    const regex =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    const isValidEmail = regex.test(String(value));
    const error: string =
      msg || i18next.t(`translation:${msg || 'validationIp'}`, { label });
    return isValidEmail ? undefined : error;
  };
}

/**
 * @desc Phone Number
 * @param {string} value
 * @return {string | undefined}
 */
export function phone(msg?: string) {
  return (value: any, _data: any, label: string): string | undefined => {
    if (value) {
      const isValidEmail =
        value
          .toString()
          .match(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
          ) !== null && !value.toString().match(/^\b(\d)\1{8,}\b$/) !== null;
      const error: string =
        msg || i18next.t(`translation:${msg || 'validationPhone'}`, { label });
      return isValidEmail ? undefined : error;
    }
  };
}

/**
 * @desc Must Be Number
 * @param {number} value
 * @return {string | undefined}
 */
export const mustNumber = (msg?: string) => {
  return (value: any, _data: any, label: string): string | undefined => {
    const error: string =
      msg || i18next.t(`translation:${msg || 'validationNumber'}`, { label });
    return isNaN(value) ? error : undefined;
  };
};

/**
 * @desc Min
 * @param {number} value
 * @return {string | undefined}
 */
export const min = (min: number, msg?: string) => {
  return (value: any, _data: any, label: string): string | undefined => {
    if (value.length < min) {
      const error: string =
        msg ||
        i18next.t(`translation:${msg || 'validationMin'}`, {
          label,
          min: formatThousand(min),
        });
      return error;
    }

    return undefined;
  };
};

/**
 * @desc Max
 * @param {number} value
 * @return {string | undefined}
 */
export const max = (max: number, msg?: string) => {
  return (value: any, _data: any, label: string): string | undefined => {
    if (value.length < max) {
      const error: string =
        msg ||
        i18next.t(`translation:${msg || 'validationMax'}`, {
          label,
          min: formatThousand(max),
        });
      return error;
    }

    return undefined;
  };
};

/**
 * @desc Not Include
 * @param {number} value
 * @return {string | undefined}
 */
export const notIncludes = (comparison: string, msg?: string) => {
  return (value: any, _data: any, label: string): string | undefined => {
    if (value.toLowerCase().includes(comparison.toLowerCase())) {
      const error: string =
        msg ||
        i18next.t(`translation:${msg || 'validationNotIncludes'}`, { label });
      return error;
    }

    return undefined;
  };
};

/**
 * @desc Min Value
 * @param {number} value
 * @return {string | undefined}
 */
export const minValue = (min: number, msg?: string) => {
  return (value: any, _data: any, label: any): string | undefined => {
    if (value) {
      const error: string =
        msg ||
        i18next.t(`translation:${msg || 'validationMinValue'}`, {
          label,
          min: formatThousand(Number(min)),
        });
      return isNaN(value) || value >= min ? undefined : error;
    }
  };
};

/**
 * @desc Max Value
 * @param {number} value
 * @return {string | undefined}
 */
export const maxValue = (max: number, msg?: string) => {
  return (value: any, _data: any, label: any): string | undefined => {
    if (value) {
      const error: string =
        msg ||
        i18next.t(`translation:${msg || 'validationMaxValue'}`, {
          label,
          max: formatThousand(Number(max)),
        });
      return isNaN(value) || value <= max ? undefined : error;
    }
  };
};

/**
 * @desc Match value
 * @param {any} values
 * @param {string} label
 * @return {string | undefined}
 */
export const match = (
  comparison: string,
  comparisonLabel: string,
  msg?: string,
) => {
  return (value: any, data: any, label: any): string | undefined => {
    const error: string =
      msg ||
      i18next.t(`translation:${msg || 'validationMatch'}`, {
        label,
        comparisonLabel,
      });
    return value === data[comparison] ? undefined : error;
  };
};

/**
 * @desc Max Date
 * @param {number} value
 * @return {string | undefined}
 */
export const maxDate = (max: string, msg?: string) => {
  return (value: any, _data: any, label: string): string | undefined => {
    const error: string =
      msg ||
      i18next.t(`translation:${msg || 'validationMaxDate'}`, {
        label,
        max: formatThousand(max),
      });
    if (Date.parse(value) > Date.parse(max)) {
      return error;
    }

    return undefined;
  };
};

/**
 * @desc Extension
 * @param {number} value
 * @return {string | undefined}
 */
export const ext = (exts: String[], msg?: string) => {
  return (value: any, _data: any, label: string): string | undefined => {
    if (value) {
      const mime = value.name.split('.');

      const error: string = msg || `${label} tidak valid`;
      return exts.includes(mime[1]) === true ? undefined : error;
    }

    return undefined;
  };
};
