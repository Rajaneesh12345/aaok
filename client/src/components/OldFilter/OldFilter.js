import "../../App.css";
import "./OldFilter.css";
import x from "../../media/x.svg";
import { useEffect, useState, useCallback } from "react";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from "react-bootstrap";

/*
 * props.filter example:
 *
 * const filters = {
 *   people: [
 *     { name: "First Name", useInput: true },
 *     { name: "Last Name", useInput: true },
 *     { name: "Min. Age", useInput: true },
 *     { name: "Max. Age", useInput: true },
 *   ],
 *   locations: [
 *     { name: "Manpok'tong - Upper", useInput: false },
 *     { name: "Mankpok'tong - Lower", useInput: false },
 *   ],
 * };
 */
const OldFilter = (props) => {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [filterInputValue, setFilterInputValue] = useState("");
  const [addedFilters, setAddedFilters] = useState(new Map());
  const addFilter = useCallback((filter) => {
    let newMap = new Map(addedFilters);
    setAddedFilters(newMap.set(filter.name, filter.value));
  }, [addedFilters]);
  const addFilterAndReset = useCallback((name, value) => {
    addFilter({ name: name, value: value });
    setFilterInputValue("");
    setCurrentFilter(null);
    console.log(addedFilters);
  }, [addFilter, addedFilters]);
  const removeFilter = (filterArrRepresentation) => {
    let newMap = new Map(addedFilters);
    newMap.delete(filterArrRepresentation[0]);
    setAddedFilters(newMap);
  };

  useEffect(() => {
    const listenEnterOnFilterInput = (e) => {
      let isValid =
        e.target.id === "filter-input" &&
        (e.code === "Enter" || e.code === "NumpadEnter");
      if (isValid) {
        console.log(e);
        addFilterAndReset(currentFilter, filterInputValue);
      }
    };
    document.addEventListener("keydown", listenEnterOnFilterInput);
    return () => {
      document.removeEventListener("keydown", listenEnterOnFilterInput);
    };
  }, [addFilterAndReset, currentFilter, filterInputValue]);

  return (
    <div className="search-container centered-row">
      <InputGroup>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title={currentFilter ? currentFilter : "Filters"}
          id="filter-dropdown"
          className="accentThree"
        >
          {Object.keys(props.filters).map((category, index) => (
            <>
              <span key={index} className="dropdown-span">
                {capitalize(category)}
              </span>
              {props.filters[category].map((filter, innerIndex) =>
                filter.useInput ? (
                  <Dropdown.Item
                    key={innerIndex + 1000}
                    href="#"
                    onClick={() => {
                      let filterName = filter.filterName
                        ? filter.filterName
                        : filter.name;
                      setCurrentFilter(filterName);
                      setFilterInputValue("");
                    }}
                  >
                    {filter.name}
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item
                    key={innerIndex + 2000}
                    href="#"
                    onClick={() => {
                      let filterName = filter.filterName
                        ? filter.filterName
                        : capitalize(category);
                      addFilterAndReset(filterName, filter.name);
                    }}
                  >
                    {filter.name}
                  </Dropdown.Item>
                )
              )}
              {index !== Object.keys(props.filters).length - 1 ? (
                <Dropdown.Divider key={index + 3000} />
              ) : null}
            </>
          ))}
        </DropdownButton>
        {currentFilter !== null ? (
          <>
            <FormControl
              id="filter-input"
              placeholder="Add filter here..."
              aria-label="Filter"
              aria-describedby="filter-dropdown"
              value={filterInputValue}
              onChange={(e) => setFilterInputValue(e.target.value)}
            />
            <button
              onClick={() => {
                addFilterAndReset(currentFilter, filterInputValue);
              }}
              type="button"
              className="btn orange"
            >
              Add
            </button>
          </>
        ) : (
          <>
            <FormControl
              id="filter-input"
              placeholder="Select a filter."
              aria-label="Filter"
              aria-describedby="filter-dropdown"
              value={filterInputValue}
              onChange={(e) => setFilterInputValue(e.target.value)}
              disabled
            />
            <button type="button" className="btn orange" disabled>
              Add
            </button>
          </>
        )}
      </InputGroup>
      <div id="filter-display">
        {[...addedFilters.entries()].map((filter, index) => (
          <p
            key={index}
            className="added-filter"
            onClick={() => removeFilter(filter)}
          >
            {filter[0]}: {filter[1]}
            <img src={x} alt="remove filter" />
          </p>
        ))}
      </div>
    </div>
  );
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { OldFilter };
