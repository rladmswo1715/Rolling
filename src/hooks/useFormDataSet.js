import { useEffect } from 'react';

export function useFormDataSet(setFunction, eleKey, eleValue) {
  useEffect(() => {
    setFunction((prevData) => ({
      ...prevData,
      [eleKey]: eleValue
    }));
  },[eleValue]);
}