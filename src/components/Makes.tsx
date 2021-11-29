import { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  InputLabelContainer,
  ListContainer,
  VehiloveInput,
} from "./VehiloveStyledComponents";
import Suggestion from "./Suggestion";
import ErrorMessage from "./ErrorMessage";
import useAutocomplete from "../hooks/useAutocomplete";
import NoDataMessage from "./NoDataMessage";
import { MAKES, NO_MAKES_RECORDS, TITLE_LABEL_MAKES } from "../constants";
const Makes = () => {
  const {
    make,
    makes,
    error: { errorType },
  } = useContext(AppContext);
  const { onChange, showMakeSuggestions, filteredMakes, onClick } =
    useAutocomplete();
  return errorType === MAKES ? (
    <ErrorMessage />
  ) : makes.length === 0 ? (
    <NoDataMessage message={NO_MAKES_RECORDS} />
  ) : (
    <InputLabelContainer>
      <p>
        &#128664; {TITLE_LABEL_MAKES}
        &#128663;
      </p>
      <VehiloveInput
        data-testid="make-input"
        type="text"
        value={make}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e, "make");
        }}
      />
      {showMakeSuggestions && make && (
        <ListContainer>
          {filteredMakes.map((makeSuggestion, key) => (
            <Suggestion
              onClick={onClick}
              value={makeSuggestion}
              filterValue={make}
              key={`make-${key}`}
              type={"make"}
            />
          ))}
        </ListContainer>
      )}
    </InputLabelContainer>
  );
};

export default Makes;
