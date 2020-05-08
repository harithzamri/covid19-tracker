import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

function CountryPicker() {
  const [fetchedCountries, setfetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setfetchedCountries(countries());

      fetchCountries();
    };
  }, [setfetchedCountries]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect>
          <option value="global">Global</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
