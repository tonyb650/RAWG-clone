import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore(s => s.setSearchText) // pass selector(s) and return s.'updateFunction'. This prevents the component from rerendering because we're not retrieving the gameQuery object in our destructuring
  const searchStringRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (searchStringRef.current) {
      setSearchText(searchStringRef.current.value)
      navigate('/')
    } 
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray" />
        </InputLeftElement>
        <Input variant="filled" borderRadius="full" placeholder="Search games..." ref={searchStringRef} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
