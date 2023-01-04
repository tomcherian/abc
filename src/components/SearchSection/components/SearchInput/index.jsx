import { Dropdown } from "custom-dropdown-ver2";
import { Profiler, useContext, useEffect, useState } from "react";
import _, { get } from "lodash";
import { useForm } from "react-hook-form";
import Switch from "../../../Switch";
import { getCountryList } from "../../../../utils/services";
import { AppContext } from "../../../../context/AppContext";
import { useWeatherData } from "../../../../hooks/useWeatherData";

import "./index.css";

const SearchInput = () => {
  const [isDropdownMenuOpened, setIsDropdownMenuOpened] = useState(false);
  const {
    countryOptions,
    setCountryOptions,
    searchInputData,
    setSearchInputData,
    isAltitudeInput,
    setIsAltitudeInput,
  } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm();

  const latitude = watch("latitude");
  const searchInput = watch("searchInput");

  useEffect(() => {
    const getData = setTimeout(() => {
      onFetchCountryList(searchInput);
    }, 2000);
    return () => clearTimeout(getData);
  }, [searchInput]);

  const { refetch } = useWeatherData(isAltitudeInput, {
    latitude: getValues().latitude,
    longitude: getValues().longitude,
    searchInput: getValues().searchInput,
  });

  //useEffect for geo location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCoordinates,
      getCoordinatesIssue
    );
  }, []);

  //If coordinates input is selected make dropdown closed
  useEffect(() => {
    if (isAltitudeInput) {
      setIsDropdownMenuOpened(false);
    }
  }, [isAltitudeInput]);

  useEffect(() => {
    if (latitude) {
      refetch();
    }
  }, [latitude]);

  const getCoordinates = (data) => {
    const { coords } = data;
    if (coords) {
      // console.log("check here it is loading first");
      setValue("latitude", Math.round(coords.latitude));
      setValue("longitude", Math.round(coords.longitude));
      setSearchInputData({
        ...searchInputData,
        latitude: Math.round(coords.latitude),
        longitude: Math.round(coords.longitude),
      });
    }
  };

  const getCoordinatesIssue = (error) => {
    console.log("Issue with geo location", error);
  };

  // /**
  //  * @function searchWeather
  //  * @description Function to fetch location details
  //  * @param selectedInput
  //  */
  // const searchWeather = ({ latitude, longitude, searchInput }) => {
  //   // try {
  //   // setIsLoading(true);
  //   // setWeatherData([]);
  //   // setSearchedLocation("");
  //   // const params = {
  //   //   appid: "56c3c8b64be7b289d39ee39bda35dcf7",
  //   //   units: "metric",
  //   //   cnt: "5",
  //   //   hourly: "cloudcover",
  //   // };
  //   // if (isAltitudeInput) {
  //   //   params.lat = latitude;
  //   //   params.lon = longitude;
  //   // } else {
  //   //   params.q = searchInput;
  //   // }
  //   // const { isLoading, data, isError } = useWeatherData(isAltitudeInput, {
  //   //   latitude,
  //   //   longitude,
  //   //   searchInput,
  //   // });
  //   // setIsLoading(isLoading);
  //   // console.log("data", data, isLoading, isError);
  //   //----------------------//
  //   // setIsLoading(false);
  //   // const { data } = result;
  //   // setSearchedLocation(`${data?.city?.name} , ${data?.city?.country}` || "");
  //   // setWeatherData(data?.list);
  //   // setIsLoading(false);
  //   // setIsDropdownMenuOpened(false);
  //   // } catch (e) {
  //   //   setIsLoading(false);
  //   //   setSearchedLocation("");
  //   //   setWeatherData([]);
  //   //   setIsDropdownMenuOpened(false);
  //   // }
  // };

  // const handleOnChangeInput = _.debounce((change) => {
  //   onFetchCountryList(change);
  // }, 5000);

  /**
   * @function onFetchCountryList
   * @description Function to handle fetching of country list
   * @param countryInput input either from dropdown select or search input
   */
  const onFetchCountryList = async (countryInput) => {
    try {
      const result = await getCountryList(countryInput ? countryInput : "");
      const { data } = result;
      setCountryOptions(data);
    } catch (e) {
      setCountryOptions([]);
    }
  };

  /**
   * @function onHandleSelect
   * @description function to handle when selecting a country from dropdown
   * @param selectedCountry selected country from dropdown
   */
  const onHandleSelect = (selectedCountry) => {
    setIsDropdownMenuOpened(false);
    setValue("searchInput", selectedCountry);
    // searchWeather({ searchInput: selectedCountry });
    refetch();
  };

  const onSubmitData = (data) => {
    setIsDropdownMenuOpened(false);
    refetch();
    // searchWeather({
    //   latitude: data.latitude,
    //   longitude: data.longitude,
    //   searchInput: data.searchInput,
    // });
  };

  const callBack = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    // console.table(
    //   id,
    //   phase,
    //   actualDuration,
    //   baseDuration,
    //   startTime,
    //   commitTime,
    //   interactions
    // );
  };

  return (
    <div className="search-input-wrp">
      <div className="search-header">The Only Weather App You Need !</div>
      <hr />
      <div className="search-form-wpr">
        <Switch
          id="input-type-switch"
          customClassName="input-type-switch-class"
          handleSwitch={() => setIsAltitudeInput(!isAltitudeInput)}
        />
        <Profiler id="search-form" onRender={callBack}>
          <form className="search-form" onSubmit={handleSubmit(onSubmitData)}>
            {isAltitudeInput ? (
              <>
                <input
                  type="number"
                  {...register("latitude", { required: true })}
                  placeholder="Latitude"
                  className={`text-input ${
                    errors.latitude?.type === "required" && "error"
                  }`}
                  onChange={(e) => {
                    setSearchInputData({
                      ...searchInputData,
                      latitude: e.target.value,
                    });
                  }}
                />
                <input
                  type="number"
                  {...register("longitude", { required: true })}
                  placeholder="Longitude"
                  className={`text-input ${
                    errors.longitude?.type === "required" && "error"
                  }`}
                  onChange={(e) => {
                    setSearchInputData({
                      ...searchInputData,
                      longitude: e.target.value,
                    });
                  }}
                />
              </>
            ) : (
              <input
                type="text"
                {...register("searchInput", { required: true })}
                placeholder="Explore Cities Weather"
                className={`text-input ${
                  errors.searchInput?.type === "required" && "error"
                }`}
                autoComplete="off"
                onChange={(e) => {
                  setIsDropdownMenuOpened(true);
                  // handleOnChangeInput(e.target.value);
                  setValue("searchInput", e.target.value);
                  setSearchInputData({
                    ...searchInputData,
                    searchInput: e.target.value,
                  });
                }}
              />
            )}
            <label className="icon search-icon">
              <input type="submit" className="display-none" />
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc></desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </label>
          </form>
        </Profiler>
        {isDropdownMenuOpened && (
          <Dropdown
            options={countryOptions}
            onSelectDropdown={onHandleSelect}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
